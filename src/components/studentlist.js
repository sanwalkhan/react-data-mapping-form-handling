function StudentList(props) {
    return (
        <tr>
            <td>{props.student.name}</td>
            <td>{props.student.Roll}</td>
            <td>{props.student.Class}</td>
            <td>{props.student.Batch}</td>
            <td>{props.student.Id}</td>

        </tr>
    )
}



export default StudentList;