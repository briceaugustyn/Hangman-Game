var a=1
console.log(a)


// 1 Define global variable

var revealed_name="_ _ _ _ _ _ _"
var wrong_guess= 0
var number_of_guess_remaining= 0
var letter_allready_guessed = 0
var leter_guessed = 0
var win = 0
var losses = 0


//--2 Define Object sw-name--

    // Define local array with name to be guessed
var star_wars = {
    name: ["Luke Skywalker","Dark Vader","Ian Solo",],
    
    
    
}


//--3 Find randomely the name to be discovered (cannot be the one allready used previsously)--


//--4 Display the _ _ _ _ _ _ _ based on the name to be guess--


//--5 Key event to listen to the letters that player is typing--

document.onkeyup = function(event) {
    var k = event.key;
    letter_allready_guessed=k
    check(k,0);
    display(revealed_name)
    display2(wrong_guess)
    //eval(kkeys[k]);
  };

// 6 Functions 
// Function to verify if key typed is part of name to be guessed

String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

function check (key,index){
    console.log("check 1")
    var name_string = star_wars.name[index]
    name_string=name_string.toLowerCase()
    // var name_string ="hello luke";
    console.log(name_string)
    // if the letter is part of the string
    if (name_string.includes(key)){ 
        letter_allready_guessed++
        //return position of key in string name
        var n = name_string.indexOf(key);
        name_string=name_string.replaceAt(n, "-")
        revealed_name=revealed_name.replaceAt(n, key)
        alert(name_string + " result " + (n+1)); 
        }
        else {
            wrong_guess++
            //alert("wrong"+ wrong_guess)
        }    
}


//--7 As the user guesses the correct letters, reveal them: m a d o _  _ a.--
function display (revealed_name){
document.getElementById("word-blanks").innerHTML = revealed_name;
//alert("dispay1")
}

//--8 Display number-of-guess-remaining, letter-allready-guessed, leter-guessed, win, losses--
function display2 (wrong_guess){
//alert("display2"+wrong_guess)
document.getElementById("wrong-guesses").innerHTML = wrong_guess;
document.getElementById("number_of_guess_remaining").innerHTML = number_of_guess_remaining;
document.getElementById("letter_allready_guessed").innerHTML = letter_allready_guessed;
document.getElementById("leter_guessed").innerHTML = leter_guessed;
document.getElementById("win-counter").innerHTML = win;
document.getElementById("losses").innerHTML = losses;
    }


