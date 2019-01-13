import React from 'react';

const NameOrg = (props) => { // eslint-disable-line react/prefer-stateless-function
function handleOnChange(e) {
    props.setChange(e.target);
  }
  return (
    <div onChange={handleOnChange} className="NameOrg">
      <div>
        <label htmlFor="short_name_org">
        Краткое
          <input id="short_name_org" name="short_name_org" defaultValue={(props.v)? props.v.short_name_org : ''} placeholder="Краткое наименование" />
        </label>
      </div>
      <label htmlFor="full_name_org">
      Полное
        <textarea name="full_name_org" defaultValue={(props.v)? props.v.full_name_org : ''}  placeholder="Полное наименование" />
      </label>
    </div>
  );
};

export default NameOrg;
