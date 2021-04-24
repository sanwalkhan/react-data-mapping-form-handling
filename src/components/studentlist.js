function StudentList({student , index , deleteHandler}) {

    


    return (
        
        <table border>
        <tr >
            <td >{index + 1}</td>
            <td>{student.name}</td>
            <td>{student.Roll}</td>
            <td>{student.Class}</td>
            <td>{student.Batch}</td>
            <td>{student.Id}</td>

            <td>
                <button onClick={()=>deleteHandler(student.Id)}>Delete</button>
            </td>

        </tr>
        
        
        </table>
    )
}



export default StudentList;