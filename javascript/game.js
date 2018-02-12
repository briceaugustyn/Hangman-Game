var a=1
console.log(a)


// 1 Define global variable

var number_of_guess_remaining= 0
var letter_allready_guessed = 0
var leter_guessed = 0
var win = 0
var losses = 0


//--2 Define Object sw-name--

    // Define local array with name to be guessed
var star_wars = {
    name: ["Luke Skywalker","Dark Vader","Ian Solo",],
    
    // Function to verify if key typed is part of name to be guessed
    check: function(key,index){
        console.log("hello")
        var name_string ="hello luke";
        console.log(name_string)
        var n = name_string.indexOf(key);
        alert("result" + n);
    }
    
}


//--3 Find randomely the name to be discovered (cannot be the one allready used previsously)--


//--4 Display the _ _ _ _ _ _ _ based on the name to be guess--


//--5 Key event to listen to the letters that player is typing--

document.onkeyup = function(event) {
    var k = event.key;
    letter_allready_guessed=k
    alert(star_wars.name[0])
    alert(k)
    star_wars.check(k,0);
    //alert(star_wars.name[0]);
    //eval(kkeys[k]);
  };

//--6 Key event to listen to the letters that player is typing--

//--7 As the user guesses the correct letters, reveal them: m a d o _  _ a.--

//--8 Display number-of-guess-remaining, letter-allready-guessed, leter-guessed, win, losses--

//document.getElementById("number_of_guess_remaining").innerHTML = number_of_guess_remaining;
// document.getElementById("letter_allready_guessed").innerHTML = letter_allready_guessed;
// document.getElementById("leter_guessed").innerHTML = leter_guessed;
// document.getElementById("win-counter").innerHTML = win;
// document.getElementById("losses").innerHTML = losses;



