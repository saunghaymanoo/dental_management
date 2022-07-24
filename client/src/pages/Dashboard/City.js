import React from "react";
import axios from 'axios';

class City extends React.Component{
    constructor(){
        super();
        this.state={
            cities:[],
            name:''
        }
    }
    fetchCity(){
        axios.get('http://localhost:8000/cities').then(res=>{
            this.setState({cities:res.data});
        }).catch(
            (err)=>{
                console.log(err);
            }
        )
    }
    componentDidMount(){
        this.fetchCity();
    }
    render(){
        return(
            <div className="page-container">
                <div style={{display:'flex',justifyContent:'space-around',alignItems:'center'}}>
                        <h3>Dashboard Page</h3>
                        <button onClick={this.handleFormDialog.bind(this)}>Create</button>
                </div>
            </div>
        )
    }
}
export default City;