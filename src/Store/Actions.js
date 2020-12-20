import Axios from "axios";

export const ADDALL='ADDALL';
export const ADDNAME='ADDNAME';

export const SHOWONE='SHOWONE';

export const addallDATA=(data)=>{
return{
    type:ADDALL,
fulldata:data
}
}

export const CmpName=(data)=>{
    return{
        type:ADDNAME,
    fulldata:data
    }
    }

export const getdata=()=>{

    return dispatch=>{

Axios.get('http://sia-platform.com/')
.then(res=>{
    const p=[];
    let k=res.data
    k.forEach(e=>{
        p.push({id:e['Cons. ID'],name:e.Consortium_Name})
    });
    
    dispatch(CmpName(p))
    dispatch(addallDATA(res.data))

}
)
.catch(err=>{console.log(err)})



    }



}
