console.log('hello')
const appleWatch = {
    totalSteps: 10000, 
    totalMiles: 96.2,
    avgCalorieBurn: 2000,
    workoutsThisWeek: '5 of 7',
    avgGoodSleep: '7:40'
};

const examScores = [98, 77, 84, 91, 58, 66]

for(let i = 0; i < examScores.length; i++){
    console.log(i, examScores[i]);
}

const myStudents = [
    {
        name: 'Aditi',
        grade: 100
    }, 
    {
        name: 'Amir',
        grade: 100
    }, 
    {
        name: 'Amiti',
        grade: 89
    }
];

let classAvg = 0;

for(let i = 0; i < myStudents.length; i++) {
    let student = myStudents[i]
    classAvg += student.grade
    console.log(`class average is ${classAvg/myStudents.length}`)
}

// const targetNum = Math.floor(Math.random() * 10);
// let guess = Math.floor(Math.random() * 10)
// console.log(targetNum)
// console.log(guess)
// while(targetNum!==guess){
//     guess = Math.floor(Math.random() * 10)
//     console.log(`${guess} != ${targetNum}`)
// };

let stuff = ['apple', 'book', 'bean']

for (let stu of stuff) {
    console.log(stu)
}
