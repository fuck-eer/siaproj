import React from 'react'
import FilterContent from './filterContent/filterContent';
import classes from './Sidebar.module.css';

const Sidebar =()=>{

return(
    <div className={classes.Sidebar}>
<div className={classes.filterlogin}>

<FilterContent/>

<div className={classes.loginbutt}>

</div>
</div>


    </div>
);

} 

export default Sidebar;