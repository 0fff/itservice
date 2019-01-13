import React from 'react';

const PropOrg = (props) => {

function handleSetChange(e) {
    props.setChange(e.target);
}
  return (
    <div className="PropOrg" onChange={handleSetChange}>
      <div className="select-div">
        <label htmlFor="shortNameOrg">
          Филиал
          <select id="filial" name="filial" className="select" defaultValue={(props.v)? props.v.filial : 'null'}>
            <option value="null">Нет</option>
            <option value="1">Филиал №1</option>
            <option value="2">Филиал №2</option>
            <option value="3">Филиал №3</option>
            <option value="6">Филиал №6</option>
            <option value="7">Филиал №7</option>
          </select>
        </label>
        <label htmlFor="email">
          E-Mail
          <input className="mleft" name="email" id="email" placeholder="E-Mail" defaultValue={(props.v)? props.v.email : ''} />
        </label>
        <label htmlFor="contract_number">
        Номер контракта
          <input id="contract_number" name="contract_number" placeholder="Номер контракта если есть" defaultValue={(props.v)? props.v.contract_number : ''} />
        </label>
      </div>
    </div>
  );
};

export default PropOrg;
