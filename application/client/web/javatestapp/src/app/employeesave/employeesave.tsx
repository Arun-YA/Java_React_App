import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {Upload} from "../../shared/shared.service";
import Select from "react-select";
import "./employeesave.scss";
import  {service}   from './employeesave.service';

class Employeesave extends React.Component<any, any> {
    test = new service ("");
    constructor(props:any){
    super(props);
    this.state={
    employee : {
    name: '',
    age: '',
    salary: '',
    },
    
    rowData :[]
    } }


    handlechange = (e: any) => {
    if(e?.target){
    this.setState({ employee: { ...this.state.employee, [e.target.name]: e.target.value } })
    }
    }


    componentDidMount() {
    this.state.employee.created_by = sessionStorage.getItem('email')||'{}';
    }

    render(){
    return(
    <>
        <h2 className="screen-align">employeesave</h2>
        <div id="template-ih7p">
    <div id="template-i904" className="gjs-row">
        <div id="template-igmp" className="gjs-cell">
            <input type="text" id="template-ip0i" placeholder="Enter the name" required={true}onChange={this.handlechange}
            name="name" value={this.state.employee.name}className="form-control " />
        </div>
        <div id="template-ikz9" className="gjs-cell">
            <input type="text" id="template-ig1m" placeholder="Enter the age" required={true}onChange={this.handlechange}
            name="age" value={this.state.employee.age}className="form-control " />
        </div>
        <div id="template-igek" className="gjs-cell">
            <input type="text" id="template-in62" placeholder="Enter the salary "
            required={true}onChange={this.handlechange} name="salary" value={this.state.employee.salary}className="form-control "
            />
        </div>
    </div>
    <div id="template-ibvyp" className="gjs-row">
        <div id="template-iw9fp" className="gjs-cell">
            <button type="button" id="template-ic2eb" className="btn btn-primary ">Submit</button>
        </div>
    </div>
</div>
    </>
    );
    };
    };

    export default Employeesave;