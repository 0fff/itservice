import React, { Component } from 'react';
import Select from 'react-select';
import Daypicker from '../../components/Dayicker';
import DaypickerRange from '../../components/DaypickerRange';
import PriceSum from '../../components/PriceSum';
import Eqip from '../../components/Eqip';
import CustomSelect from '../CustomSelect';
import './style.scss';

class NewContract extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {

      isLoading: false,
      options: [],
      next_id: 1,
      web_data: {
        date_start: '',
        date_end: '',
        document_form: 'Контракт',
        fz: 'п.5 ч. 1ст. 93 Федерального закона от 05.04.2013 № 44-ФЗ',
        quarter_or_month: 'квартал',
        count_month: '0',
        equipment: [{
          id: '0', pnp: 'abc', inv: '1002123', count: '0'
        },
        ],
      },
    };

    // Временное решение для API адресов


    // this.handleSubmit = this.handleSubmit.bind(this);
    this.handlegetdiffmonth = this.handlegetdiffmonth.bind(this);
    // this.handlegetday = this.handlegetday.bind(this);
    this.handleClickAdd = this.handleClickAdd.bind(this);

  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch('http://127.0.0.1:5000/organization/list/')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        data.map((item) => {
          return this.setState({
            options: [{
              label: item.id_name_org,
              value: item._id.$oid
            }, ...this.state.options]
          });
        });
        this.setState({ isLoading: false });
      });
  }

  handleAddToData = (e) => {
    this.setState({ web_data: { ...this.state.web_data, [e.target.name]: e.target.value } });
  }

  handlegetday = (value) => {
    this.setState({ web_data: { ...this.state.web_data, date_contract: value } });
  }

  handlegetdiffmonth(value, start, end) {
    this.setState({
      web_data: {
        ...this.state.web_data,
        count_month: value,
        date_start: start,
        date_end: end
      }
    });
  }

  handleClickAdd() {
    this.setState({
      web_data: {
        ...this.state.web_data,
        equipment: [
          ...this.state.web_data.equipment,
          {
            id: (this.state.next_id).toString()
          },
        ]
      }
    });
    this.setState({ next_id: this.state.next_id + 1 });
  }

  handleClickDel = (indexRow) => {
    this.setState({ web_data: { ...this.state.web_data, equipment: this.state.web_data.equipment.filter((item, index) => index !== indexRow) } });
  //  this.setState({ next_id: this.state.next_id - 1 });
  }

  handleonChange = (index, nam, data) => {
    this.setState({
      web_data: {
        ...this.state.web_data,
        equipment: [
          ...this.state.web_data.equipment.slice(0, index),
          {
            ...this.state.web_data.equipment[index],
            [nam]: data,
          },
          ...this.state.web_data.equipment.slice(index + 1),
        ]
      }
    });
  };

  handleAddToData2 = (e) => {
    this.setState({ web_data: { ...this.state.web_data, id: e.value } });
  }

  handleAddToStatePrice = (sum, month, quarter, nds) => {
    this.setState({ web_data: { ...this.state.web_data, price_sum: sum, price_month: month, price_quarter: quarter, price_nds: nds} });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://127.0.0.1:5000/contract/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      body: JSON.stringify(
        this.state.web_data
      )
    });
  }

  render() {
    return (
      <div className="wrapper">
        <form onSubmit={this.handleSubmit}>
          <div><h3>Создать новый контракт</h3></div>
          <div>
            <CustomSelect option={this.state.options} />
            <div>
              <Select
                name="id"
                onChange={this.handleAddToData2}
                className="sselect"
                classNamePrefix="react-select-ok"
                isLoading={this.state.isLoading}
                loadingMessage={() => 'загрузка данных...'}
                options={this.state.options}
                placeholder="Выберите организацию"
              />
            </div>
            <select onChange={this.handleAddToData} name="document_form">
              <option>Контракт</option>
              <option>Договор</option>
            </select>
            <select onChange={this.handleAddToData} name="fz">
              <option>44</option>
              <option>233</option>
            </select>
            <div>
              <Daypicker name="date_contract" da={this.handlegetday} />
            </div>
            <div>
              <DaypickerRange diffa={this.handlegetdiffmonth}  />
            </div>
            <PriceSum diff_mounth={this.state.web_data.count_month} addPriceToState={this.handleAddToStatePrice} />
            {this.state.web_data.equipment.map((item, index) => {
              return (
                <Eqip
                  row_id={index}
                  key={item.id}
                  toggleBtn={((index + 1 === this.state.web_data.equipment.length) ? 'Add' : 'Del')}
                  ponChange={this.handleonChange}
                  clickAdd={((index + 1 === this.state.web_data.equipment.length) ? this.handleClickAdd : this.handleClickDel)}
                />);
            }
            )}
            <button>send</button>
          </div>
        </form>
      </div>
    );
  }
}

export default NewContract;
