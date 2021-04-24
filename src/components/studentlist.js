function StudentList({student , index}) {
    return (
        
        <table border>
        <tr >
            <td >{index + 1}</td>
            <td>{student.name}</td>
            <td>{student.Roll}</td>
            <td>{student.Class}</td>
            <td>{student.Batch}</td>
            <td>{student.Id}</td>

        </tr>
        
        
        </table>
    )
}



export default StudentList;