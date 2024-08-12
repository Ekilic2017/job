import React from 'react'
import DelButton from './DelButton'
import { FaLocationDot } from "react-icons/fa6";
import { FaSuitcase } from "react-icons/fa";

import { MdOutlineDateRange } from "react-icons/md";
const Card = ({job}) => {
    const colors={
        Mülakat:"green",
        Reddedildi:"red",
        "Devam ediyor":"orange",
    };
  return (
    <div className='card'>
<div className='head'>
    <section>
        <div className='letter'>
            <span>{job.company[0]}</span>
        </div>
        <div className="info">
            <p>{job.position}</p>
            <p>{job.company}</p>
        </div>
    </section>
    <section>
        <DelButton id={job.id}/>
    </section>
</div>
<div className="body">
    <div className="field">
    <FaLocationDot />
    <p>{job.location}</p>
    </div>
    <div className="field">
    <FaSuitcase />
    <p>{job.type}</p>
    </div>
    <div className="field">
    <MdOutlineDateRange />
    <p>{new Date(job.date).toLocaleDateString()}</p>
    </div>
    <div className="status">
        <p 
        style={{
        background: colors[job.status],
        }}>{job.status}</p>
    </div>
</div>
    </div>
  )
}

export default Card