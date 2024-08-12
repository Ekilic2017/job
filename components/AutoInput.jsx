import React from 'react'
import { useSelector } from 'react-redux'
import store from '../app/store'

const AutoInput = ({label,name}) => {
  const {jobs}=useSelector((store)=>store);
  const arr=jobs.map((job)=>job[name]);
  //dizide tekrar eden elemanları kaldırır"set"
  const filtredSet=new Set(arr);
  //setin döndürdüğü nesneyi objede çevirir.
  const options=Array.from(filtredSet);
  return (
    <div>
        <label htmlFor={label}>{label}</label>
        <input type='text' id={label}name={name} required></input>
        <datalist id={name}>
          {options?.map((i,index)=>(
            <option key={index}value={i}></option>
          ))}
        </datalist>
    </div>
  )
}

export default AutoInput