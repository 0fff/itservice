import React, { Component } from 'react';

import './style.scss';

class CustomSelect extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      isvisib: false,
      selectedItem: {
        value: '',
        id: ''
      },
      searchString: '',
      option: [{}],
      isEmpty: true,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.option && nextProps.option.length > 0) {
      if (nextProps.option !== prevState.option) {
        return {
          option: nextProps.option,
          isEmpty: false
        };
      }
    }
    return nextProps;
  }

  handleClickToogle = (e) => {
    e.preventDefault();
    if (!this.state.isvisib) {
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }
    this.setState({ isvisib: !this.state.isvisib });
  }

  handleOutsideClick = (e) => {
    if (!this.main.contains(e.target)) {
      this.setState({ isvisib: false });
    }
  }

  handleSelected = (e) => {
    e.preventDefault();
    document.removeEventListener('click', this.handleOutsideClick, false);
    this.setState({ selectedItem: { value: e.target.getAttribute('valuem'), id: e.target.getAttribute('id') } });
    this.setState({ searchString: e.target.getAttribute('valuem') });
    this.setState({ isvisib: false });
  }

  handleChangeSearh = (e) => {
    e.preventDefault();
    this.setState({ searchString: e.target.value });
  }

  renderItem(options) {
    if (this.state.isEmpty && options.length === 0) {
      return (
        <div className="option">Пусто</div>
      );
    } if (!this.state.isEmpty && options.length > 0) {
      const arrNew = options;
      return (
        <div>
          { arrNew.map((item, index) =>
            <div onClick={this.handleSelected} className="option" key={index} id={item.value} valuem={item.label}>{item.label}</div>
          )}
        </div>
      );
    }
    return <div className="option">Нет данных </div>;
  }

  render() {
    let libOption = this.state.option;
    const searchString = this.state.searchString.trim().toLowerCase();

    if (searchString.length > 0) {
      libOption = libOption.filter((l) => {
        return l.label.toLowerCase().match(searchString);
      });
    }
    return (
      <div
        className="container"
        ref={(main) => { this.main = main; }}
      >
        <input className="cInput" onClick={this.handleClickToogle} onChange={this.handleChangeSearh} value={this.state.searchString} placeholder="Выберите организацию"></input>
        <div className="select-shadow">
          <div className="select-menu-box" style={{ display: (this.state.isvisib) ? 'block' : 'none' }}>
            {this.renderItem(libOption)}
          </div>
        </div>
        <input name="id" type="hidden" value={this.state.selectedItem.id} />
      </div>
    );
  }
}

export default CustomSelect;
