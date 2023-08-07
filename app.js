// 1
document.querySelector("#ques1").addEventListener("click", () => {
    var number = [1, 3, 4, 6, 8, 9];
    number.filter(function(num){
        if(num%2 === 0){
            document.querySelector("#fileven").innerHTML += num + ", ";
            console.log(num);
        }
    });
});


// 2
document.querySelector("#ques2").addEventListener("click", () => {
    var students = ['hassan', 'salman', 'kamran', 'rashid', 'faizan', 'noor'];
    students.filter(function(student){
        if(student.includes("an")){
            document.querySelector("#filname").innerHTML += student + ", ";
            console.log(student);
        }
    });
});

// 3
document.querySelector("#ques3").addEventListener("click", () => {
    var numArr = [1, 3, 4, 6, 8, 9, 1, 3, 5, 7, 10, 9];
    numArr.filter(function(num){
        if(num == num){
            // document.querySelector("#dupArr").innerHTML += num + ", ";
            console.log(num);
        }
    });
});