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
    document.querySelector("#volcylin").innerHTML = volume.toFixed(4);
    console.log(volume.toFixed(4));
 });


 // 7
document.querySelector("#ques7").addEventListener("click", () => {
    let numbers = [40, 100, 1, 5, 25, 10];
     let num = numbers.sort((a, b) => a - b);
     document.querySelector("#arrsort").innerHTML = num;
     console.log(num);
  });


// 8
document.querySelector("#ques8").addEventListener("click", () => {
    let numbers = [21, -1, 3, 50, -2, 10];
    let modifyArr =  numbers.find((nums) => nums < 0);
    numbers.filter( (val, i) => {
        if(modifyArr == val){
            numbers[i] = 0;
            document.querySelector("#arrmodify").innerHTML = numbers;
            console.log(numbers);
        }
    });
  });


// 9
document.querySelector("#ques9").addEventListener("click", () => {
    let library = [ 
        { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 }, 
        { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 }, 
        { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book od The Hinger Games', libraryID: 3245 } 
    ];
    let sortArr = library.sort( (a, b) => {
        let aTitle = a.title.toUpperCase();
        let bTitle = b.title.toUpperCase();
        if (aTitle < bTitle) {
            return -1;
        }
        if (bTitle > bTitle) {
            return 1;
        }
        return 0;
    } );
    sortArr.forEach( (val) => {
        document.querySelector("#titlesort").innerHTML += JSON.stringify(val);
    });
    console.log(sortArr);
  });


// 10
document.querySelector("#ques10").addEventListener("click", () => {
    let library = [ 
        { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 }, 
        { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 }, 
        { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book od The Hinger Games', libraryID: 3245 } 
    ];
    let inpVal = document.querySelector("#searchbook").value.toLowerCase();
    library.map( (val) => {
        if(inpVal == val.author.toLowerCase()){
        console.log(val.title);
        document.querySelector("#bookfind").innerHTML = val.title;
        }
    });
  });