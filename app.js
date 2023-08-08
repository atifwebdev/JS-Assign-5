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
    var uniqueArr = [];
    numArr.forEach(function(num){
        if (!uniqueArr.includes(num)) {
            uniqueArr.push(num);
            document.querySelector("#dupArr").innerHTML = uniqueArr
            console.log(uniqueArr);
        }
    });
});

// 4
document.querySelector("#ques4").addEventListener("click", () => {
   let getDay = document.querySelector("#daynum").value;
   switch(getDay){
        case '0':
            document.querySelector("#dayname").innerHTML = "Sunday";
        break;
        case '1':
            document.querySelector("#dayname").innerHTML = "Monday";
        break;
        case '2':
            document.querySelector("#dayname").innerHTML = "Tuesday";
        break;
        case '3':
            document.querySelector("#dayname").innerHTML = "Wednesday";
        break;
        case '4':
            document.querySelector("#dayname").innerHTML = "Thursday";
        break;
        case '5':
            document.querySelector("#dayname").innerHTML = "Friday";
        break;
        case '6':
            document.querySelector("#dayname").innerHTML = "Saturday";
        break;
        default:
            document.querySelector("#dayname").innerHTML = "Please Enter Valid Number...";
   }
   console.log(getDay);
});


// 5
document.querySelector("#ques5").addEventListener("click", () => {
   let getDate = document.querySelector("#inpdate").value;
   isWeekend(getDate);
    function isWeekend (inpDate){
        let date = new Date(inpDate);
        console.log(date);
        console.log(date.getDay());
        let toDay = date.getDay();
        switch(toDay){
            case 0:
                alert("Yes the provided date is Weekend date -> Sunday");
            break;
            case 6:
                alert("Yes the provided date is Weekend date -> Saturday");
            break;
            default:
                alert("Given Date is not a Weekend date...");
       }
    }
});


// 6
document.querySelector("#ques6").addEventListener("click", () => {
   let getRadius = document.querySelector("#radius").value;
   let getHeight = document.querySelector("#height").value;
    let volumeObj = {
        pie: 3.14,
        radius: getRadius,
        height: getHeight,
    }
    let volume = volumeObj.pie * volumeObj.radius * volumeObj.radius * volumeObj.height;
    console.log(volumeObj);
    console.log(volume);
    console.log(volume.toFixed(4));
 });