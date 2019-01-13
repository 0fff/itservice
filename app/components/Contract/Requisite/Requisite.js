import React from 'react';

const Requisite = (props) => {

  function handleSetChange(e) {
    props.setChange(e.target);
  }

  return (
    <div className="Requisite" onChange={handleSetChange}>
      <label htmlFor="address_org">
          Адрес
        <input id="address_org" name="address_org" placeholder="Адрес" defaultValue={(props.v)? props.v.address_org : ''} />
      </label>
      <label htmlFor="inn_org">
          ИНН
        <input name="inn_org" id="inn_org" placeholder="ИНН" defaultValue={(props.v)? props.v.inn_org : ''} />
      </label>
      <label htmlFor="kpp_org">
        КПП
        <input name="kpp_org" id="kpp_org" placeholder="КПП" defaultValue={(props.v)? props.v.kpp_org : ''} />
      </label>
      <label htmlFor="rs_bank_org">
        Расчетный счет
        <input name="rs_bank_org" id="rs_bank_org" placeholder="Расчетный счет" defaultValue={(props.v)? props.v.rs_bank_org : ''} />
      </label>
      <label htmlFor="ls_org">
        Лицевой счет
        <input name="ls_org" id="ls_org" placeholder="Лицевой счет" defaultValue={(props.v)? props.v.ls_org : ''} />
      </label>
      <label htmlFor="bik_org">
        БИК
        <input name="bik_org" id="bik_org" placeholder="БИК" defaultValue={(props.v)? props.v.bik_org : ''} />
      </label>
    </div>
  );
};

export default Requisite;
