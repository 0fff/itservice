import React, { Component } from 'react';
import NameOrg from '../../components/Contract/NameOrg';
import PropOrg from '../../components/Contract/PropOrg';
import Person from '../../components/Contract/Person';
import Requisite from '../../components/Contract/Requisite';

class EditOrg extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      id_name_org: '',
      filial: null,
      contract_number: null,
      full_name_org: '',
      short_name_org: '',
      num_ikz: null,
      full_name_person: '',
      full_name_person_rekv: '',
      position: 'Заведущий',
      address_org: '',
      email: '',
      telephone: [],
      inn_org: '',
      kpp_org: '',
      rs_bank_org: '',
      ls_org: '',
      bik_org: null,
    };
  }

handleOnChange = (value) => {
  this.setState({ ...this.state, [value.name]: value.value });
}

handleSubmit = (e) => {
  e.preventDefault();
  fetch('http://127.0.0.1:5000/organization/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    mode: 'cors',
    body: JSON.stringify(
      this.state
    )
  });
}

render() {
  return (
    <div className="maincontex wrap">
      <NameOrg setChange={this.handleOnChange} />
      <hr />
      <PropOrg setChange={this.handleOnChange} />
      <hr />
      <Person setChange={this.handleOnChange} />
      <hr />
      <Requisite setChange={this.handleOnChange} />
      <button onClick={this.handleSubmit}> Send </button>
    </div>
  );
}
}

export default EditOrg;
