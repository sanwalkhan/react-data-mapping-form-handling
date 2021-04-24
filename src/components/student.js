import { useState } from "react";

import { data } from "./data";
import StudentList from "./studentlist";

function Student() {
  const [students, setStudents] = useState(data);

  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Roll</th>
          <th>Class</th>
          <th>Batch</th>
          <th>Id</th>
        </tr>
        </table>

      {
          students.map((item) => {
              return(
                  <StudentList student={item} />
              )
          })
      }

      
    </div>  
  );  
}


export default Student;
