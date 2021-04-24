import { useState } from "react";

import { data } from "./data";
import StudentList from "./studentlist";

function Student() {
  const [students, setStudents] = useState(data);

  return (
    <div>

        <h2>Adding New Students</h2>

        <input type="text"  placeholder="name"/>
        <br/>
        <input type="text"  placeholder="Roll"/>
        <br/>

        <input type="text"  placeholder="Class"/>
        <br/>

        <input type="text"  placeholder="Batch"/>
        <br/>

        <input type="text"  placeholder="Id"/>

        <br/>


    <button>Submit</button>

        <hr />

        <h3>
            List Of Students
        </h3>
      <table>
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
                  <StudentList index = {index} student={item} />
              )
          })
      }

      
    </div>  
  );  
}


export default Student;
