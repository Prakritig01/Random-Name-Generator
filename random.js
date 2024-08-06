const studentArr = ['Abbas Akbar', 'Abhinav sharma', 'Abhishek Bansal ', 'Abhishek Srivastava', 'Aditya Kumar Singh ', 'Ali Sher Khan', 'Ananya Lamba', 'Anjali Debnath', 'Ankit Saini', 'Anoushka gautam', 'Ansh Kumar Gupta', 'Anshika Bhatnagar ', 'Anuj Chauhan ', 'Anurag Saini', 'Arin Saxena', 'Ashish Ansh', 'Avni saxena', 'Divyanshi Vishnoi ', 'Inayat Ullah Khan', 'Kratika Agarwal', 'Manish Kumar', 'Manit rastogi ', 'Nikita Rathore', 'Prakhar Sharma ', 'Prakriti Gupta', 'Pranjal Agarwal', 'Prince Saxena ', 'Sakshi Chauhan', 'Samarth Rastogi', 'Samra Rubab ', 'Sandeep Kumar', 'Sarthak rastogi', 'Shashank johri', 'Shashwat Tewari', 'Shivam Prajapati', 'Shivi Agarwal', 'Shrey Singhal', 'Sohil Ansari', 'Tahir Ali', 'Tahzeeb Malik ', 'Tanu Saini', 'Vishal kumar', ];

let max = studentArr.length-1;
let randomNumber = Math.floor(Math.random()* (max-0+1));
// console.log(studentArr[randomNumber]);

let studentName = studentArr[randomNumber];
console.log(studentName);

const button = document.querySelector('#button');
const display = document.querySelector('.display');
const display2 = document.querySelector('.display2');

button.addEventListener('click',()=>{
    display.style.visibility = 'visible';
    display.textContent = 'selecting a random student.....';
    // display.textContent = "";
    setTimeout(() =>{
        display.textContent = "3...";
        setTimeout(()=>{
            display.textContent = '2...';
            setTimeout(()=>{
                display.textContent = '1...';
                setTimeout(()=>{
                    display.textContent ='';
                    printCharByChar(studentName);

                },1000)
            },1000)
        },1000)
    },1000);
    

});
function printCharByChar(name) {
    let index = 0;
    display.textContent = '';
    function printChar() {
        if (index < name.length) {
            display.innerHTML += name[index];
            console.log(display.textContent);
            index++;
            setTimeout(printChar, 400); // Adjust the timing here for speed
        }
    }

    printChar();
}