$(document).ready(function () {
//event handler for button
    $("form").submit(grade);
    $("#byName").click(nameSorter5000);
    $("#byPercent").click(percentSorterMegatron);

    //global variables
    var roster = [];

    //function to calculate and store grade
    function grade(event){
        event.preventDefault();
        //get grade from form
        var pointsEarned = $("#pointsEarned").val();
        var pointsPossible = $("#possiblePoints").val();
        var student = {
            firstName:$("#fname").val(),
            lastName:$("#lname").val(),
            letterGrade: "",
            percent: 0
        };

        //points earned / points possible = student grade percent
        var gradePercent = (pointsEarned / pointsPossible) * 100;
        student.percent = gradePercent;

        //determine letter grade
        if(gradePercent > 89){
            student.letterGrade = "A";
        }
        else if (gradePercent <= 89 && gradePercent > 79){
            student.letterGrade = "B";
        }
        else if (gradePercent <= 79 && gradePercent > 69){
            student.letterGrade = "C";
        }
        else if (gradePercent <= 69 && gradePercent > 59){
            student.letterGrade = "D";
        }
        else {
            student.letterGrade = "F";
        }

        roster.push(student);

        //display name and grade
        displayStudentGrades()

        //$("#studentName").text(student.firstName + " " + student.lastName)
        //$("#studentGradeNum").text(gradePercent + "%")
        //$("#studentGradeLetter").text(letterGrade)
    }

    function displayStudentGrades(){
        var temp = "";
        $.each(roster, function(index, student) {
            temp = temp + student.firstName + " " + student.lastName + ": " + student.letterGrade + '<br/>'
        });
        $("#roster").html(temp)
    }

    function nameSorter5000(event){
        roster.sort(
            (a, b)=>{
            if(a.lastName > b.lastName){
                return 1;
            }
            else if(a.lastName < b.lastName){
                return -1;
            }
            return 0;
            }
        )
        displayStudentGrades()
    }

    function percentSorterMegatron(event){
        roster.sort((a, b)=>{
            if(a.percent > b.percent){
                return -1;
            }
            else if (a.percent < b.percent){
                return 1;
            }
            return 0;
            }

        )
        displayStudentGrades()
    }


});