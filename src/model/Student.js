class Student {
    constructor(obj) {
        obj && Object.assign(this, obj);
        this.tags = [];
      }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getAvarage() {
        var sum = 0;
        const grades = this.grades;
        for (var i = 0; i < grades.length; i++) {
            sum += parseInt(grades[i], 10);
        }

        var average = sum / grades.length;
        return average;
    }
}

export default Student; 