import StudentCard from "./StudentCard";

function StudentList ({students , onDelete , onToggle ,  onMark}){
    return(
        <>
        {students.length === 0 ? (
            <p className="text-grey-500 mt-4">No Student Found!</p>
        ) : (
            students.map((student) => (
                <StudentCard
                key={student.id}
                student={student}
                onDelete={onDelete}
                onToggle={onToggle}
                onMark={onMark}
                />
            ))
        )}
        </>
    );
}

export default StudentList;