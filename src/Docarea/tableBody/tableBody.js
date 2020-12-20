import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getdata } from '../../Store/Actions'
import CompanyCard from './CompanyCard/Companycard'
import Memo from './CompanyMemo/CompanyMemo'
import classes from './tableBody.module.css'


class TableBody extends Component{

    state={
        viewmemo:false,
        viewcards:true,
        id:null,

    }

    componentDidMount(){
        this.props.onstartup();
        
    }

  

ontap=(eid)=>{
    this.setState({viewmemo:true,viewcards:false,id:eid})
}


onuntap=()=>{
    this.setState({viewmemo:false,viewcards:true,id:null})
}



render(){



let memo=null;
let cards=null;

if(this.state.viewmemo){
    // console.log(this.state.viewmemo);
   memo= this.props.fullcompnydata.map(e=>{
       if(e['Cons. ID']===this.state.id){
           return <Memo ccllk={this.onuntap} data={e} key={e['Cons. ID']}/>
       }
       return null
   })
    // memo=<Memo id={this.state.id}/>
}

if(this.state.viewcards&&this.props.cmpname.length>0){
    // console.log(this.state.viewmemo);
    console.log("hellio");
    cards= this.props.cmpname.map(e=><CompanyCard key={e.id} name={e.name} clicked={()=>this.ontap(e.id)}/>)

   
  
}



    return(
        <div className={classes.tableBody}>
        {memo}
    {cards}
        </div>
    )
}




}

const mapStateToProps=(state)=>{
return{
    fullcompnydata:state.alldata,
    cmpname:state.compname
}

}

const mapDispatchToProps=(dispatch)=>{
    return{
  
      onstartup:()=>dispatch(getdata()),
  
    }
  }


export default connect(mapStateToProps,mapDispatchToProps)(TableBody)