import React, { Component } from 'react';
import BooststrapForm from './BootstrapForm';
import axios from 'axios';
import Spinner from './Spinner';
import Students from './Student';
class App extends Component {
    state = {
        students:[],
        student:{},
        loadEffect:false,
        url:"http://laradev.test/api/students"
    }


    deleteStudent = (id) =>{
        this.setState({loadEffect:true})
        axios.delete(`${this.state.url}/${id}`)
        .then(
            this.getAllStudents
        )
        .catch(error =>{
            return "Unable to fetch record";
        });
    }

    createStudent = (data) => {
        //console.log(data);
        this.setState({loadEffect:true})
        axios.post(this.state.url, {
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email
        })

        .then(
            this.getAllStudents
        )
    }

    editStudent = (data) => {
        this.setState({students: {}, loadEffect:true })
        axios.put(`${this.state.url}/${data.id}`,{
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email
        })
        .then(this.getAllStudents)
    }
    getAllStudents = () =>{
        this.setState({loadEffect:true})
        axios.get(this.state.url)
        .then(students => {
            this.setState({
                students:students.data,
                loadEffect:false
            })
        })
        .catch(error =>{
            return "Unable to fetch record";
        });
    }

    componentDidMount(){
        this.getAllStudents()
    }

    delete = id => {
        this.deleteStudent(id)
        //console.log("App not interested anymore "+id)
    }

    editStudent = (data) =>{
        this.setState({ loadEffect: true, student:{}})
        axios.put(`${this.state.url}/${data.id}`,{
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
        })
        .then(this.getAllStudents)
    }

    edit = data => {
        //console.log("App"+ data)
        this.setState({ student: data});
    };

    onFormSubmit = (data) => {
        
        if(data.isEdit){
            this.editStudent(data);
        }else{

            this.createStudent(data)
        }
    }

    render() {
        return (
            <div className="container">
                  <BooststrapForm student={this.state.student} onFormSubmit={this.onFormSubmit}/> 
                {this.state.loadEffect ? <Spinner/> : ""}
                <Students ondelete={this.delete } 
                onEdit={this.edit}
                students={this.state.students}/>        
            </div>
        );
    }
}

export default App;