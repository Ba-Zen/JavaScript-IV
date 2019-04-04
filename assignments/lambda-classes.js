// CODE here for your Lambda Classes

class Person {
    constructor(attributes){
        this.name = attributes.name;
        this.location = attributes.location;
        this.age = attributes.age;
        this.gender = attributes.age;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(instattributes){
        super(instattributes);
        this.specialty = instattributes.specialty;
        this.favLanguage = instattributes.favLanguage;
        this.catchPhrase = instattributes.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}`;
    }
}

class Student extends Person{
    constructor(personattributes){
        super(personattributes);
        this.previousBackground = personattributes.previousBackground;
        this.className = personattributes.className;
        this.favSubjects = personattributes.favSubjects;
    }
    listsSubjects(){
        return `${this.favSubjects}`;
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

class ProjectManagers extends Instructor{
    constructor(pmattributes){
        super(pmattributes);
        this.gradClassName = pmattributes.gradClassName;
        this.favInstructor = pmattributes.favInstructor;
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}



const person1 = new Person ({
    name: 'Aaron',
    location: 'Alaska',
    age: 25,
    gender: 'male'
});

const person2 = new Person ({
    name: 'Amy',
    location: 'Arizona',
    age: 24,
    gender: 'female'
});

const instructor1 = new Instructor({
    name: 'Patty',
    location: 'Montana',
    age: 35,
    gender: 'female',
    favLanguage: 'Python',
    specialty: 'Back-end',
    catchPhrase: `Don't forget to practice!`
});

const instructor2 = new Instructor({
    name: 'Sylvester',
    location: 'North Dakota',
    age: 37,
    gender: 'male',
    favLanguage: 'React',
    specialty: 'Back-end',
    catchPhrase: `You'll be fine`
});

const student1 = new Student ({
    name: 'Sara',
    location: 'Vermont',
    age: 28,
    gender: 'female',
    previousBackground: 'marketing',
    className: "web 45",
    favSubjects: ['HTML', 'React', 'Javascript']
});

const student2 = new Student ({
    name: 'Marcus',
    location: 'Illinois',
    age: 28,
    gender: 'male',
    previousBackground: 'teacher',
    className: "web 49",
    favSubjects: ['Python', 'CSS', 'Node']
});

const pm1 = new ProjectManagers ({
    name: 'Stacey',
    location: 'Florida',
    age: 24,
    gender: 'female',
    favLanguage: 'Javascript',
    specialty: 'C#',
    catchPhrase: `Good work!`,
    gradClassName: 'web22',
    favInstructor: 'William'
});

const pm2 = new ProjectManagers ({
    name: 'Phil',
    location: 'Washington',
    age: 29,
    gender: 'male',
    favLanguage: 'Ruby',
    specialty: 'PHP',
    catchPhrase: `Awesome Job!`,
    gradClassName: 'web99',
    favInstructor: 'Bob'
});

console.log(person1.name); //Aaron
console.log(person1.location); //Alaska
console.log(person2.name); //Amy
console.log(person2.location); //Arizon
console.log(instructor1.favLanguage); //Python
console.log(instructor1.specialty); //Back-end
console.log(instructor2.catchPhrase); //You'll be fine
console.log(instructor2.age); //37
console.log(student1.location); //Vermont
console.log(student1.className); //web 45
console.log(student2.age); //28
console.log(student2.previousBackground); //teacher
console.log(pm1.favInstructor); //William
console.log(pm1.location); //Florida
console.log(pm2.favLanguage); //Ruby
console.log(pm2.catchPhrase); //Awesome Job!
console.log(person1.speak());
console.log(person2.speak());
console.log(instructor1.demo('Ruby'));
console.log(instructor2.grade(student1,'Javascript III'));
console.log(student1.listsSubjects());
console.log(student1.PRAssignment('Advanced CSS'));
console.log(student1.sprintChallenge('React'));
console.log(student2.listsSubjects());
console.log(student2.PRAssignment('Advanced CSS'));
console.log(student2.sprintChallenge('React'));
console.log(pm1.standUp('slack'));
console.log(pm1.debugsCode(student1, 'C#'));
console.log(pm2.standUp('slack'));
console.log(pm2.debugsCode(student2, 'Javascript'));
