import React from 'react'

import i18n from "i18next";
import "./header.scss";
export default function Lang() {

    const changeLanguage = (e) => {
      const languageValue = e.target.value
      i18n.changeLanguage(languageValue);
    }

  return (
    <div className='lang'>
 
    <select onChange={changeLanguage}>

      <option value="vie">VIE</option>
      <option value="eng">ENG</option>
    </select>
  </div>
  )
}
