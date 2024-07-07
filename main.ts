#! /usr/bin/env node


import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.italic.blue ("\n\t \t Welcome To TypeScript Quiz\t"))

console.log(chalk.italic.greenBright ("\n \t \t  Prepared by Minahil Khan\t \n"))

console.log("*".repeat(90))

interface Question {
    question: string;
    answers: { text: string; correct: boolean }[];
}

const questions: Question[] = [
    {
        question: "What keyword is used to declare a variable that cannot be reassigned in TypeScript?",
        answers: [
            { text: "var", correct: false },
            { text: "let", correct: false },
            { text: "const", correct: true },
            { text: "static", correct: false },
        ],
    },
    {
        question: "Which of the following is a primitive data type in TypeScript?",
        answers: [
            { text: "object", correct: false },
            { text: "array", correct: false },
            { text: "function", correct: false },
            { text: "boolean", correct: true },
        ],
    },
    {
        question: "How do you annotate a variable to be of type number?",
        answers: [
            { text: "let num: number;", correct: true },
            { text: "let num = number;", correct: false },
            { text: "let number: num", correct: false },
            { text: "let num = 5;", correct: false },
        ],
    },
    {
        question: "How do you create a template literal in TypeScript?",
        answers: [
            { text: "Hello, ${name}!", correct: false },
            { text: "`Hello, ${name}` ", correct: true },
            { text: "'Hello, ${name}!'", correct: false },
            { text: "(Hello, ${name}!)", correct: false },
        ],
    },
    {
        question: "Which operator is used for strict equality comparison?",
        answers: [
            { text: "==", correct: false },
            { text: "===", correct: true },
            { text: "!=", correct: false },
            { text: "=", correct: false },
        ],
    },
    {
        question: "How do you declare a function in TypeScript?",
        answers: [
            { text: "def add(a: number, b: number): number { return a + b; }", correct: false },
            { text: "func add(a: number, b: number) { return a + b; }", correct: false },
            { text: "let add = (a, b) => a + b;", correct: false },
            { text: "function add(a: number, b: number): number { return a + b; }", correct: true },
        ],
    },
    {
        question: "How do you specify a default parameter in a TypeScript function?",
        answers: [
            { text: "function greet(name = 'Guest': string) { console.log(name); }", correct: false },
            { text: "function greet(name: string = 'Guest') { console.log(name); }", correct: true },
            { text: "function greet(name: string == 'Guest') { console.log(name); }", correct: false },
            { text: "function greet(name: string) { name = 'Guest'; console.log(name); }", correct: false },
        ],
    },
    {
        question: "Which of the following uses a rest parameter correctly?",
        answers: [
            { text: "function sum(...numbers: number[]): number { return numbers.reduce((a, b) => a + b, 0); }", correct: true },
            { text: "function sum(numbers...: number[]): number { return numbers.reduce((a, b) => a + b, 0); }", correct: false },
            { text: "function sum(...numbers: [number]): number { return numbers.reduce((a, b) => a + b, 0); }", correct: false },
            { text: "function sum(numbers: ...number[]): number { return numbers.reduce((a, b) => a + b, 0); }", correct: false },
        ],
    },
    {
        question: "How do you write a for loop in TypeScript?",
        answers: [
            { text: "for i = 0 to 5 { console.log(i); }", correct: false },
            { text: "for (let i = 0; i < 5; i++) { console.log(i); }", correct: true },
            { text: "for (let i = 0; i < 5) { console.log(i); }", correct: false },
            { text: "for (i in 0..5) { console.log(i); }", correct: false },
        ],
    },
    {
        question: "What is the purpose of ECMAScript in the context of TypeScript?",
        answers: [
            { text: "ECMAScript is used as a superset of TypeScript to enable additional features.", correct: false },
            { text: "ECMAScript serves as the foundational language that TypeScript builds upon.", correct: true },
            { text: "ECMAScript is only used for type definitions in TypeScript.", correct: false },
            { text: "ECMAScript is deprecated and fully replaced by TypeScript.", correct: false },
        ],
    },
    {
        question: "How do you declare a tuple in TypeScript?",
        answers: [
            { text: "let person: [string, number] = ['Alice', 30];", correct: true },
            { text: "let person: [string, number] = {'Alice', 30};", correct: false },
            { text: "let person: (string, number) = ['Alice', 30];", correct: false },
            { text: "let person = [string, number] = ['Alice', 30];", correct: false },
        ],
    },
    {
        question: "How do you use union types in TypeScript?",
        answers: [
            { text: "let value = number | string = 42;", correct: false },
            { text: "let value: [number, string] = 42;", correct: false },
            { text: "let value: number, string = 42;", correct: false },
            { text: "let value: number | string = 42;", correct: true },
        ],
    },
    {
        question: `What will be the output of the following code?
        \`\`\`typescript
        const person = { name: "Alice", age: 30 };
        const { name, age } = person;
        console.log(name, age);
        \`\`\``,
        answers: [
            { text: "Alice 30", correct: true },
            { text: "name age", correct: false },
            { text: "undefined", correct: false },
            { text: "Error", correct: false },
        ],
    },
    {
        question: "How do you declare a numeric enum in TypeScript?",
        answers: [
            { text: "enum Color { Red: 1, Green: 2, Blue: 3 }", correct: false },
            { text: "enum Color = { Red: 1, Green, Blue }", correct: false },
            { text: "enum Color { 'Red' = 1, 'Green', 'Blue' }", correct: false },
            { text: "enum Color { Red = 1, Green, Blue }", correct: true },
        ],
    },
    {
        question: `What is the output of the following code snippet?
        \`\`\`typescript
        let x = 10;
        if (x > 5) {
            console.log("Greater");
        } else {
            console.log("Lesser");
        }
        \`\`\``,
        answers: [
            { text: "Greater", correct: true },
            { text: "Lesser", correct: false },
            { text: "Error", correct: false },
            { text: "undefined", correct: false },
        ],
    },
    // Add more questions as needed
];

let score = 0;
let currentQuestionIndex = 0;

async function startQuiz() {
    for (const [index, question] of questions.entries()) {
        await askQuestion(question, index + 1); // Pass the index to the askQuestion function
        currentQuestionIndex++;
    }
    showResult();
}

async function askQuestion(question: Question, questionNumber: number) {
    console.log(chalk.blue(`\nQuestion ${questionNumber}:`)); // Add numbering and space before each question
    const answers = question.answers.map(answer => answer.text);
    const response = await inquirer.prompt([
        {
            type: 'list',
            name: 'answer',
            message: chalk.yellow(question.question),
            choices: answers,
        }
    ]);

    const selectedAnswer = question.answers.find(answer => answer.text === response.answer);
    if (selectedAnswer?.correct) {
        score++;
    }
}

function showResult() {
    console.log(chalk.bold.green(`\nYour Score: ${score} / ${questions.length}`));
}

startQuiz();
