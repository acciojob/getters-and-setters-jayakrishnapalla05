//complete this code
class Person {
	constructor(name,age){
		this.name=name;
		this.age=age;
	}
	getter name(){
		return this.name;
	}
	setter age(newAge)
	{
		this.age=newAge;
	}
}

class Student extends Person {
	study()
	{
		console.log(`${this.name} is studying`);
	}
}

class Teacher extends Person {
	teach()
	{
		console.log(`${this.name} is teaching`);
	}
}
const person=new Person("John",25);
const person=new Person("John",30);
const student =new Student("John",30);
student.study();
const student =new Student("Alice",30);
student.study();
const teacher =new Teacher("John",30);
teacher.teach();
const teacher =new Teacher("Alice",30);
teacher.teach();


// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
