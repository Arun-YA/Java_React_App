import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {Upload} from "../../shared/shared.service";
import Select from "react-select";
import "./employeelist.scss";
import  {service}   from './employeelist.service';

class Employeelist extends React.Component<any, any> {
    columnDefs: any = [{ headerName: 'name', field: 'name' },{ headerName: 'age', field: 'age' },{ headerName: 'salary', field: 'salary' },];
    gridApi: any;
    gridColumnApi: any;
    test = new service ("");
    constructor(props:any){
    super(props);
    this.onRowSelected = this.onRowSelected.bind(this)
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
    onRowSelected(event:any)
    {
     this.props.history.push({pathname:"/",state:{id : event.data}})
    }
    onGridReady(params :any)
    {
    this.gridApi = params.api;
        this.gridApi.sizeColumnsToFit();
        this.gridColumnApi = params.columnApi;
    }

    render(){
    return(
    <>
        <h2 className="screen-align">employeelist</h2>
        <div>
    <div id="template-ik4e">
        <div id="template-ij5t">
            <div id="template-i72k" className="ag-theme-material" style={{height:
            '500px', width: '100%'}}>
                <AgGridReact columnDefs={this.columnDefs} pagination={true} onGridReady={this.onGridReady}
                paginationPageSize={5} domLayout={ "autoHeight"} animateRows={true}defaultColDef={{sortable:
                true, filter: true }} rowData={this.state.rowData} rowSelection={
                "single"} onRowSelected={this.onRowSelected }></AgGridReact>
            </div>
            <div id="template-if6l" className="gjs-row">
                <div id="template-iu1a" className="gjs-cell">
                    <button type="button" id="template-irgm" className="btn btn-primary "></button>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
    );
    };
    };

    export default Employeelist;