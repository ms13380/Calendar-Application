var NINEAM = document.getElementById("9")
var NINEAM = document.getElementById("9")
var NINEAM = document.getElementById("9")
var NINEAM = document.getElementById("9")
var NINEAM = document.getElementById("9")
var NINEAM = document.getElementById("9")
var NINEAM = document.getElementById("9")
var NINEAM = document.getElementById("9")
var NINEAM = document.getElementById("9")

// Get item from local storage if any -- DOESN'T WORK!!siojfioja
var data = readFileSync("schedule.txt", 'utf-8').split("\n")

//call vars to html
NINEAM.innerHTML = "<p>" + data[0] + "</p>";

// Display today's day and date
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

//make lots of edits, the save isn't working now??

$(document).ready(function () {
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
        // Get nearby values of the description in JQuery
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save schedule in text document
        localStorage.setItem(time, text);
    })
   
    function timeTracker() {
        var timeNow = moment().hour();
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }
})