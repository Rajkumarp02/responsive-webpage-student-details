import React, {Component} from "react";
import axios from "axios";


class Student extends Component{

    
    constructor(prpos){
      super()
      this.state = {
          Student:[]
      }
    }
    componentDidMount(){
        axios.get('http://localhost:3004/student')
        .then(res =>{
        this.setState({Student:res.data})
         
        })
    }
    render(){
        return(
            
        <div>
           
           <table className="table">
            <thead className="thead-dark" >
              <tr>
               <React.Fragment>
                
                <th scope="col">student</th>
                <th scope="col">score</th>
                <th scope="col">previous score</th>
                <th scope="col">grade</th>
                
                </React.Fragment> 
                
              </tr>
            </thead>
            <tbody> 
              { this.state.Student.map(student => (
                  <tr key={student.id}>
                  
                  <td>{student.name}</td>
                  <td>{student.score}</td>
                  <td>{student.previousscore}</td>
                  <td>{student.grade}</td>
                  
                  </tr>
        
        
         ))
               }   
         </tbody>
          </table> 
               

            </div>

        )
    }
}
export default Student;