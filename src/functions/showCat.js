import React from 'react';
import { showObject } from './showObject';

export function showCat(id) {
  document
  .getElementById(id)
  .parentElement.querySelector('.nested')
  .classList.toggle('active');
  document.getElementById(id).classList.toggle('caret-down');
}
export function convertJson(json) {
  /**
   * Convert JSON if it's a valid value
   * 
   * @param {string} json - log raw
   * 
   * @return {object || boolean} - Will return converted json or false if it fail. 
   */
  let tmp;

  tmp = (isJson(json)) ? JSON.parse(json) : false;
  if (isJson(json) && tmp[tmp.length-1] && tmp[tmp.length-1].system) return JSON.parse(json);
  return false;
}
export function isJson(txt) {
  try {
    JSON.parse(txt);
  } catch (e) {
    return false;
  }
  return txt ? true : false;
}
export function indexOfArray(txt, values) {
  for (let a = 0; txt && values && values[a]; a++)
    if (txt.toUpperCase().indexOf(values[a].toUpperCase()) > -1) return true;
  return false;
}
export function ShowDetails(props) {
  if (!props || !props.value || !Array.isArray(props.value))
    return;
  let obj = props.value;
  let list = [];
  for (let a = 0; Object.keys(obj)[a]; a++)
    list.push(
      <li key={a}>
        {typeof obj[Object.keys(obj)[a]] === 'object'
          ? showObject(obj[Object.keys(obj)[a]])
          : obj[Object.keys(obj)[a]]}
      </li>
    );
  return list;
}
