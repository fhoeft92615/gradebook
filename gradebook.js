$(document).ready(function () {
//event handler for button
    $("form").submit(grade);

    //function to calculate and store grade
    function grade(event){
        event.preventDefault();
        //get grade from form
        var student = {
            firstName:$("#fname").val(),
            lastName:$("#lname").val(),
            pointsEarned:$("#pointsEarned").val(),
            pointsPossible:$("#possiblePoints").val()
        };

        //points earned / points possible = student grade percent
        var gradePercent = (student.pointsEarned / student.pointsPossible) * 100;

        //determine letter grade
        var letterGrade;
        if(gradePercent > 89){
            letterGrade = "A";
        }
        else if (gradePercent <= 89 && gradePercent > 79){
            letterGrade = "B";
        }
        else if (gradePercent <= 79 && gradePercent > 69){
            letterGrade = "C";
        }
        else if (gradePercent <= 69 && gradePercent > 59){
            letterGrade = "D";
        }
        else {
            letterGrade = "F";
        }

        //display name and grade
        $("#studentName").text(student.firstName + " " + student.lastName)
        $("#studentGradeNum").text(gradePercent + "%")
        $("#studentGradeLetter").text(letterGrade)
    }

});