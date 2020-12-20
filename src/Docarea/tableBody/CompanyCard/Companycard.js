import React from 'react'
import classes from './companycard.module.css'
const CompanyCard=(props)=>{

return(
    <div onClick={props.clicked} className={classes.card}>
    <p>{props.name}</p>
    </div>
)


}

export default CompanyCard

