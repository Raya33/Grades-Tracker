'use strict';
var table=document.getElementById('table');

function student(studentName,courses){
    this.studentName=studentName;
    this.studentGrade=getRndInteger();
    this.courses=courses;
    student.prototype.allstudents.push(this);
}
student.prototype.allstudents=[];
student.prototype.display=function () {
    var studentRow=document.createElement('tr');
    table.appendChild(studentRow);

    var studentNameData=document.createElement('td');
    studentNameData.textContent=this.studentName;
    studentRow.appendChild(studentNameData);


    var studentGradeData=document.createElement('td');
    studentGradeData.textContent=this.studentGrade;
    studentRow.appendChild(studentGradeData);

    var coursesData=document.createElement('td');
    coursesData.textContent=this.courses
    studentRow.appendChild(coursesData);



}

if (localStorage.getItem('studentObject' ,student.prototype.allstudents)) {

    for (var i = 0; i < lsarray.length; i++) {
        var lsarray= JSON.parse(lsarray[i].studentName,lsarray[i].studentGrade,lsarray[i].courses);

    }
}
creatTable();










var form =document.getElementById('form');

form.addEventListener('submit',addstudents);

function addstudents(event) {
    event.preventDefault();
    var studentNamevalue=event.target.studentname.value;
    var coursesvalue=event.target.course.value;

    var studentInput=new student(studentNamevalue,coursesvalue);
    localStorage.setItem('studentObject', (student.prototype.allstudents));

    console.log(student.prototype.allstudents);
    creatTable().display();

}

function getRndInteger() {
    return Math.floor(Math.random() * (100 - 0) ) + 0;
  }



  function creatTable() {
      table.innerHTML='';
      CreatHeader;
      for (var i = 0; i < student.prototype.allstudents.length; i++) {
        student.prototype.allstudents=[i];

          
      }
  }

  function CreatHeader() {
      var tableHeader=document.createElement('tr');
      table.appendChild(tableHeader);

      var studentNameHeader=document.createElement('th');
      studentNameHeader.textContent='studentName';
      tableHeader.appendChild(studentNameHeader);

      var studentGradeHeader=document.createElement('th');
      studentGradeHeader.textContent='studentGrade';
      tableHeader.appendChild(studentGradeHeader);


      var coursesHeader=document.createElement('th');
      coursesHeader.textContent='courses';
      tableHeader.appendChild(coursesHeader);

      
  }
