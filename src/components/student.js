import { useState } from "react";

import { data } from "./data";
import StudentList from "./studentlist";

function Student() {
  const [students, setStudents] = useState(data);
  const [name, setName] = useState("")
  const [Roll, setRoll] = useState("")
  const [Class, setClass] = useState("")

  const [Batch, setBatch] = useState("")

  const [Id, setId] = useState("")

  const [error, setError] = useState("")

 const ctaHandler =() =>{
     if (name !=="" && Roll !=="" &&  Class !=="" && Batch !=="" && Id !== "" ){
     let student = {
         name,
         Roll,
         Class,
         Batch,
         Id
     }
     console.log('student :>> ', student);

    

     setStudents([...students,student])
     setName("");
     setRoll("");
     setClass("");
     setBatch("");
     setId("");
    }
    else{
        setError("Inputs Cant be Empty")
    }

 }


 const deleteHandler=(Id)=>{
    console.log('index :>> ', Id);

    let NewStudent  =students.filter((student , i) => {
        if(i !== Id ){

            return student;
        }
    })

    setStudents([...NewStudent]);

    console.log('newstudents :>> ' , NewStudent);
  }

  return (
    <div>

        <h2>Adding New Students</h2>

        <input type="text" name="name" value={name} placeholder="name"  onChange={(e) => setName(e.target.value)}/>
        <br/>
        <input type="text"  name = "Roll" value={Roll} placeholder="Roll"  onChange={(e) => setRoll(e.target.value)} />
        <br/>

        <input type="text" name="Class" value={Class}  placeholder="Class"  onChange={(e) => setClass(e.target.value)} />
        <br/>

        <input type="text" name="Batch" value={Batch} placeholder="Batch"  onChange={(e) => setBatch(e.target.value)} />
        <br/>

        <input type="text"  name="Id" value={Id} placeholder="Id"  onChange={(e) => setId(e.target.value)} />

        <br/>


    <button onClick={ctaHandler}>Submit</button>

    <p style={{backgroundColor:"red", color:"white"}}>{ error} </p>

        <hr />

        <h3>
            List Of Students
        </h3>
      <table >
          <tr>
              
          <th>No.</th>
          <th>Name</th>
          <th>Roll</th>
          <th>Class</th>
          <th>Batch</th>
          <th>Id</th>

          </tr>
        
        </table>

      {
          students.map((item , index ) => {
              return(
                  <StudentList index = {index} student={item} deleteHandler = {deleteHandler} />
              )
          })
      }

      
    </div>  
  );  
}


export default Student;
