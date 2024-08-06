//oop project
import inquirer from "inquirer";
class Person {
    personality;
    constructor() {
        this.personality = "Mystery";
    }
    addStudent(answer) {
        if (answer == 1) {
            this.personality = "Extravert";
        }
        else if (answer == 2) {
            this.personality = "Introvert";
        }
        else {
            this.personality = "You are still a Mystery";
        }
    }
    getPersonality() {
        return this.personality;
    }
}
class Student extends Person {
    name;
    constructor(name) {
        super();
        this.name = name;
    }
}
async function mainProgram() {
    let answer = await inquirer.prompt([{
            name: "ans",
            type: "input",
            message: "Enter 1 if you like to talk to others, And Enter 2 if you would rather keep to yourself"
        }]);
    let myPerson = new Person();
    myPerson.addStudent(parseInt(answer.ans));
    console.log("You are: " + myPerson.getPersonality());
    let answer1 = await inquirer.prompt([{
            name: "name",
            type: "input",
            message: "What is your name:"
        }]);
    let myStudent = new Student(answer1.name);
    console.log("Your name is: " + myStudent.name + " and your personality type is: " + myStudent.getPersonality());
}
mainProgram();
