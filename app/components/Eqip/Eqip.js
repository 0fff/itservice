import React from 'react';

class Eqip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
    };
    // this.handleclick = this.handleclick.bind(this);
    // this.handleclickDel = this.handleclickDel.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevProps) {
    if (prevProps !== nextProps) {
      return {
        id: nextProps.row_id
      };
    }
    return null;
  }

  handleclick = (e) => {
    e.preventDefault();
    this.props.clickAdd();
  };

  handleclickDel = (e) => {
    e.preventDefault();
    this.props.clickAdd(this.state.id);
  };

handleChange = (e) => {
  this.props.ponChange(this.state.id, e.target.name, e.target.value)
}

render() {
  return (
    <div onChange={this.handleChange}>
      <input name="pnp" placeholder="Наименование" />
      <input name="inv" placeholder="Инвентарный номер" />
      <input name="count" placeholder="кол-во" />
      <button onClick={(this.props.toggleBtn === 'Add') ? this.handleclick : this.handleclickDel}>
        {(this.props.toggleBtn === 'Add') ? 'Add' : 'Del' }
      </button>
    </div>
  );
}
}

export default Eqip;
