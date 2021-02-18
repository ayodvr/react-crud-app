import React, { Component } from 'react';
import EachStudent from './EachStudent';

class Students extends Component {

  allStudentTableData = () =>{
        const allData = this.props.students.map(student => {
            return <EachStudent student={student} key={student.id} delete={this.deleteRec2} edit={this.editRec2}/>
        })

        return allData;
  }
   
   deleteRec2 = id => {
       //console.log("not interested anymore "+id)
       this.props.ondelete(id)
   }

   editRec2 = data => {
    //console.log("not interested anymore gan "+data.id)
    this.props.onEdit(data)
   }
    render() {
        return (
            <div className="row">
            <div className="col-md-12">
                <table className="table table-bordered" style={{ width:"100%"}}>
                <thead>
                    <tr>
                        <th>S/No</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {this.allStudentTableData()}    
                </tbody>
                </table>
            </div>
        </div>
            
               

        );
    }
}

export default Students;