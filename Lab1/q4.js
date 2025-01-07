//Program: Create a Student constructor function with properties like name, grade, and a method study(). Add a getGrade() method to get the student's grade. Java script
//Task: Create a few Student instances, call the study() method, and use getGrade().
function Student(name, grade) 
{
    this.name = name;
    this.grade = grade;
    this.study = function() 
    {
        console.log(`${this.name}is studying`);
    }
    this.getGrade=function() 
    {
        return this.grade;
    }
}
    let s1=new Student('ramu', 90);
    let s2=new Student('somu', 85);
    student1.study();
    student2.study();
    console.log(`ramu grade: ${s1.getGrade()}`);
    console.log(`somu grade: ${s2.getGrade()}`);
