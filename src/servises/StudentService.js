import Student from "../model/Student";

class StudentService {

    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }


    /**
     * 
     * @returns {Promise<Student[]>} List of students
     */
    getStudentsList() {
        return fetch(this.baseUrl)
        .then(response => response.json())
        .then(json => json.students)
        .then(studentsObj => studentsObj.map(studentObj => new Student(studentObj)));
    }

}

export default StudentService;