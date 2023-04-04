import React from "react";
export class Restui extends React.Component{
    constructor(props){
        super(props)
        this.state={tdata:" ",sid:" ",sname:" ",semail:" ",saddress:" "}
        this.insertdata = this.insertdata.bind(this)
    }
    accpetsid = (e)=>{
        this.setState({sid:e.target.value})
    }
    accpetsname = (e)=>{
        this.setState({sname:e.target.value})
    }
    accpetsemail = (e)=>{
        this.setState({semail:e.target.value})
    }
    accpetsaddress = (e)=>{
        this.setState({saddress:e.target.value})
    }
    insertdata (e){
        fetch(' http://localhost:3002/posts',{
            method: 'POST',
            body: JSON.stringify({
             id:this.state.sidsid,
             name:this.state.sname,
             email:this.state.semail,
             adderss:this.state.saddress
         }),
            headers:{"content-type":"application/json; charset=UTF-8"}  
             }).then(res => res.json())
   
       .then((data) => {
   
          console.log(data)
          this.setState({tdata:data})
   
       }).catch(console.log)
      
    }
    render(){
        return(<div>
            <h1>User Interface </h1>
            <input type="text" onChange={this.accpetsid} placeholder="Enter A SID"/>
            <br/>
            <input type="text" onChange={this.accpetsname} placeholder="Enter A Name"/>
            <br/>
            <input type="text" onChange={this.accpetsemail} placeholder="Enter A Email"/>
            <br/>
            <input type="text" onChange={this.accpetsaddress} placeholder="Enter A Address"/>
            <br/>
            <input type="button" onClick={this.insertdata} value="insertvalue"/>
            <p>{this.state.tdata.id}</p>
        </div>)
    }
}