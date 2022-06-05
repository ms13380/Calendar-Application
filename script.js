var NINEAM = document.getElementById("9")
var TENAM = document.getElementById("10")
var ELEVENAM = document.getElementById("11")
var TWELVEPM = document.getElementById("12")
var ONEPM = document.getElementById("1")
var TWOPM = document.getElementById("2")
var THREEPM = document.getElementById("3")
var FOURPM = document.getElementById("4")
var FIVEPM = document.getElementById("5")

var goopydatatwo = []
localStorage.setItem("VarKey", goopydatatwo)
var goopydatatwo = localStorage.getItem("VarKey")

//call vars to html for use
NINEAM.innerHTML = "<p>" + goopydatatwo + "</p>";

// Display today's information
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function () {
    // saveBtn clk listner
    $(".saveBtn").on("click", function () {
        // Get nearby values of the description in JQuery
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

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