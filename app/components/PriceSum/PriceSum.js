import React from 'react';


class PriceSum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price_month: '0',
      price_quarter: '0',
      price_nds: '0',
    };
    this.handleonChange = this.handleonChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleonChange(e) {
    const priceSum = e.target.value;
    const priceM = e.target.value * this.props.diff_mounth;
    const priceNds = Math.round(priceM * 0.3);
    const priceQ = priceM * 3;
    this.setState({ price_nds: priceNds });
    this.setState({ price_month: priceM });
    this.setState({ price_quarter: priceQ });
    this.props.addPriceToState(priceSum, priceM.toString(), priceQ.toString(), priceNds.toString());
  }

  handleChange(e) {
    this.setState({ price_month: e.target.value });
  }

  render() {
    return (
      <div>
        <input name="price_sum" onChange={this.handleonChange} placeholder="Сумма контракта/договора" />
        <input name="price_month" placeholder={this.state.price_month} onChange={this.handleChange} value={this.state.price_month} />
        <input name="price_quarter" placeholder="Сумма в квартал" onChange={() => {}} value={this.state.price_quarter} />
        <input name="price_nds" placeholder="Сумма на РМ" onChange={() => {}} value={this.state.price_nds} />
      </div>

    );
  }
}

export default PriceSum;
