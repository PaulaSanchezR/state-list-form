import React, { Component } from 'react';

class StudentList extends Component {
    constructor(){
        super();
        this.state={
            students: ["Camilo", "Chris","Will","Miller"]
        }
    }

    addStudent(){
        const newStudent= prompt ("whats students name?");
        // big NO NO  => DONT MUTATE THE STATE 
        // this.state.students.unshift(newStudent);
        const { students } = this.state
        // 1st : make a copy of the array
          const studentsCopy = [...students]
          // 2dn: modify 
          studentsCopy.unshift(newStudent)
        // set the state of the original array to the new
        this.setState({
            students:studentsCopy
        })


    }

    deleteStudent(whichOne){
        const { students } = this.state
        // 1st : make a copy of the array
          const studentsCopy = [...students];
          //2dn remove element from array
          // which one is the index and one stands for number of elements to be remove
          studentsCopy.splice(whichOne,1);
          this.setState({
              students:studentsCopy
          })

    }
    render(){
        const { students } = this.state;
        return (
            <div>
                <button onClick={ () => this.addStudent()}>Add new student</button>
                <ul>
                    { students.map((oneStudent, index) => {
                        return(
                            // key prop needs to be unique
                            // in this case we use "index"
                            // in some other that going to be 
                            <li key = { index}> { oneStudent } 
                            <button onClick={() => this.deleteStudent(index)}>delete</button></li>
                        )
                                        
                     })}

                </ul>
               
             </div>
        ) 
    }
}


export default StudentList;