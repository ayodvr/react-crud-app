import React, { Component } from 'react';

class EachStudent extends Component {

    deleteRec = () =>{
       this.props.delete(this.props.student.id)
    }

    editRec = () =>{
       console.log(this.props.student);
        this.props.edit(this.props.student)
    }
    render() {
        return (
            
            <tr>
                <td>{this.props.student.id}</td>
                <td>{this.props.student.firstname}</td>
                <td>{this.props.student.lastname}</td>
                <td>{this.props.student.email}</td>
                <td>
                    <button type="button" className="btn btn-info btn-sm" onClick={this.editRec}>Edit</button>
                    &nbsp;
                    &nbsp;
                    <button type="button" className="btn btn-warning  btn-sm" onClick={this.deleteRec}>Delete</button>
                </td>
            </tr>
            
        );
    }
}

export default EachStudent;