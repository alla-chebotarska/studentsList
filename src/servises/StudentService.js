class StudentService {

    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    getStudentsList() {
        return fetch(this.baseUrl)
        .then(response => response.json())
        .then(json => json.students);
    }

}

export default StudentService;