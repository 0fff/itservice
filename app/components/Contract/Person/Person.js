import React from 'react';

const Person = (props) => {
  let fullnamer = '';

  function handleOnChange(e) {
    fullnamer.value = e.target.value;
    //props.setChange(fullnamer);
    //console.log(fullnamer)
  }

  function handleSetChange(e) {
    props.setChange(e.target);
  }

  return (
    <div className="Person" onChange={handleSetChange}>
      <div>
        <label htmlFor="position">
          Должность
          <select className="select" name="position" id="position" defaultValue={(props.v)? props.v.position : 'Заведущий'}>
            <option value="Заведущий">Заведущий</option>
            <option value="Директор">Директор</option>
          </select>
        </label>
      </div>
      <div onChange={handleOnChange} >
        <label htmlFor="full_name_person">
          ФИО руководителя
          <input name="full_name_person" id="full_name_person" placeholder="ФИО руководителя" defaultValue={(props.v)? props.v.full_name_person : ''} />
        </label>
        <label htmlFor="full_name_person_rekv">
          ФИО руководителя склонение
          <input name="full_name_person_rekv" id="full_name_person_rekv" placeholder="ФИО руководителя склонение" defaultValue={(props.v)? props.v.full_name_person_rekv : ''} ref={(el) => { fullnamer = el; }} />
        </label>
      </div>
    </div>
  );
};

export default Person;
