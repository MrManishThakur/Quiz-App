const database = [
    {
        question: "Q1. What does the abbreviation HTML stand for?",
        a: "HyperText Markup Language",
        b: "HighText Markup Language",
        c: "HyperText Markdown Language",
        d: "None of the above",
        ans: "ans1"
    },
    {
        question: "Q2. How to insert an image in HTML?",
        a: "<img href = 'jtp.png' />",
        b: "<img url = 'jtp.png' />",
        c: "<img link = 'jtp.png' />",
        d: "<img src = 'jtp.png' />",
        ans: "ans4"
    },
    {
        question: "Q3. Which of the following is the root tag of the HTML document?",
        a: "<body>",
        b: "<head>",
        c: "<title>",
        d: "<html>",
        ans: "ans4"
    },
    {
        question: "Q4. Which type of JavaScript language is ___",
        a: "Object-Oriented",
        b: "Object-Based",
        c: "Assembly-language",
        d: "High-level",
        ans: "ans2"
    },
    {
        question: "Q5. In JavaScript the x===y statement implies that:",
        a: "Both x and y are equal in value, type and reference address as well.",
        b: "Both are x and y are equal in value only.",
        c: "Both are equal in the value and data type.",        
        d: "Both are not same at all.",
        ans: "ans3"
    },
    {
        question: "Q6. In a case, where the value of the operator is NULL , the typeof returned by the unary operator is___.",
        a: "undefined",
        b: "string",
        c: "boolean",
        d: "object",
        ans: "ans4"
    },
    {
        question: "Q7. A collection of elements of the same data type which may either in order or not, is called _____.",
        a: "String",
        b: "Array",
        c: "Serialized Object",
        d: "Object",
        ans: "ans2"
    },
    {
        question: "Q8. CSS stands for -",
        a: "Cascade style sheets",
        b: "Color and style sheets",
        c: "Cascading style sheets",
        d: "None of the above",
        ans: "ans3"
    },
    {
        question: "Q9. The CSS property used to make the rounded borders, or rounded corners around an element is -",
        a: "border-collapse",
        b: "border-radius",
        c: "border-spacing",
        d: "None of the above",
        ans: "ans2"
    },
    {
        question: "Q10. The CSS property used to set the distance between the borders of the adjacent cells in the table is -",
        a: "border-collapse",
        b: "border-radius",
        c: "border-spacing",
        d: "None of the above",
        ans: "ans3"
    }
]
const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector("#show-score");
const hideInnerDiv = document.querySelector(".inner-div");
let countQuestion = 0;
let scoreCount = 0;
const loadQuestions = () =>{
    const questionsList = database[countQuestion];
    question.innerText = questionsList.question;
    option1.innerText = questionsList.a;
    option2.innerText = questionsList.b;
    option3.innerText = questionsList.c;
    option4.innerText = questionsList.d;
}
loadQuestions();

const getCheckedAnswer=()=>{
    let answer;
    answers.forEach((currAnswer)=>{
        if(currAnswer.checked){
            answer = currAnswer.id;
        }
    });
    return answer
}
const clearChecked=()=>{
    answers.forEach(currChecked=> currChecked.checked=false);
}
submit.addEventListener("click", submitBtn);
function submitBtn(){
    const checkedAnswer = getCheckedAnswer();
    console.log(checkedAnswer)
    if(checkedAnswer===database[countQuestion].ans){
        scoreCount++;
    }
    clearChecked();
    countQuestion++;
    if(countQuestion<database.length){
        loadQuestions();
    }else{
        hideInnerDiv.style.display="none";
        showScore.innerHTML = `
        <h3> You have scored : ${scoreCount}/${database.length} ✌️</h3>
        <button class="btn" id="restart" onClick="location.reload()">Resart</button>
        `;
        showScore.classList.remove('score-area');
    }
}