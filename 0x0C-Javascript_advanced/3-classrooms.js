function createClassRoom(numbersOfStudents) {
    function studentSeat(seat) {
        return function () {
            return seat;
        }
    }
    var students = [];
    for (var i = 0; i < numbersOfStudents; i++) {
        students.push(studentSeat(i + 1));
    }
    return students;
}

var classRoom = createClassRoom(10);

for (var i = 0; i < classRoom.length; i++) {
    console.log("Student seat:", classRoom[i]);
}