import React from 'react'
import classes from './DocArea.module.css'
import TableBody from './tableBody/tableBody'
import TableHead from './tableHead/tableHead'

const  DocArea=()=>{

    return(
        <div className={classes.Docarea}>
        <TableHead/>
<TableBody/>
        </div>
    );


}

export default DocArea;
