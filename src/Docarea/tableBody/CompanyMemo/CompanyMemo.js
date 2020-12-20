import React from 'react'

import classes from './CompanyMemo.module.css'

const Memo =(props)=>{


    return(

<div  className={classes.memo}>
<h3 onClick={props.ccllk}>X</h3>
<p>Name: {props.data.Consortium_Name}</p>
<p>Platform: {props.data.Platform}</p>
<p>Blockchain: {props.data.Blockchain}</p>
<p>Use Cases: {props.data.Associated_Use_Cases}</p>
<p>NO. of Members: {props.data.Number_of_Members}</p>
<p>Date Announced: {props.data.Announced}</p>
<p>Objective: {props.data.Objective}</p>
<p>Announcement year: {props.data.Announcement_year}</p>
<p>Geography Focus: {props.data.Geography_Focus}</p>
<p>Industry Focus: {props.data.Industry_Focus}</p>
<p>Major Members: {props.data.Major_Members}</p>
<p>Maturity: {props.data.Maturity}</p>
<p>Ref: {props.data.References}</p>
<p>Size: {props.data.Size}</p>
<p>TYPE: {props.data.Consortium_Type}</p>
<p>Subcatagory: {props.data.Consortium_Subcategory}</p>
<p>Themes: {props.data.ESG_Themes}</p>
<p>Mapping: {props.data.SDG_Mapping}</p>
<p>Emerging Technologies: {props.data.Emerging_Technologies}</p>

</div>
    )


}



export default Memo;


// Cons. ID	"AUT013"
// Consortium_Name	"Korean EV Battery Lifecycle Management Consortium"
// Platform	"NA"

// Blockchain	"NA"
// Associated_Use_Cases	"EV battery life cycle management system"
// Number_of_Members	"7"
// Announced	"05/07/2020"
// Objective	"Establish usage guidelines and standard management (standard draft) system for used batteries by collecting battery data from electric vehicles in operation"
// Announcement_year	"2020"
// Geography_Focus	"South Korea"
// Industry_Focus	"Automotive"
// Major_Members	"Jeju Special Self-Governing Province\nLG CNS\nInfomind\nDaeeun\nMintech\nMinistry of Science and ICT\nKorea Internet & Security Agency"
// Maturity	"Nascent"
// References	"<a href= \"https://www.coindeskkorea.com/news/articleView.html?idxno=70833\" target = \"_blank\">[2020 Blockchain Public Leading Pilot Project] Selected as 24 companies by the Ministry of Science and Technology</a>>>07-May-2020>>News"
// Size	"Small"
// Consortium_Type	"Non-profit Consortium"
// Consortium_Subcategory	"Use Case Development and Commercialization,Standardization"
// ESG_Themes	"Carbon Credits,GHG Emissions"
// SDG_Mapping	"11: Sustainable cities and communities"
// Emerging_Technologies	""