var a=1
console.log(a)


// 1 Define global variable

var init=0
var round=1
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

// this function will shuffle an array
function shuffle (array) {
    var i=0
    var j=0
    var temp =null
    //alert("array")
    for (i = array.length -1 ; i > 0; i-=i) {
        j=Math.floor(Math.random() * (i +1))
        temp = array [i]
        array[i]=array[j]
        array[j]=temp
        //alert(array[0]+"random")
    }
        return array
}
    

//--4 Display the _ _ _ _ _ _ _ based on the name to be guess--




//--5 Key event to listen to the letters that player is typing--

document.onkeyup = function(event) {
    // if first time playing init the number of round shuffle the list of name for star wars
    if (init==0){
        //alert("init")
        var T=shuffle(star_wars.name)
        round=prompt("how many round do you want to play ?")
        display_round(round)
        display_init("Game started")
        init=1
    }
    var k = event.key;
    letter_allready_guessed=k

    var name_string = star_wars.name[0]
    check(k,0,name_string);
    if (round==0){
        alert("game over")
        init=0
    }
    //alert(T[0]+"hello")
    //eval(kkeys[k]);
  };

// 6 Functions 
// Function to verify if key typed is part of name to be guessed

String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

// function to reveal all the key guessed (sending a string and a key)
function revealed (key, string){
    var array=string.split("");           //Converting a String to an Array
for (i = 0; i < array.length; i++) {
    if (star_wars.name==key) array[i]=key
}
return array.toString()
}

function check (key,index,string){
   
    name_string=string.toLowerCase()
    // if the letter is part of the string
    if (name_string.includes(key)){ 
        letter_allready_guessed++
        //return position of key in string name
        var n = name_string.indexOf(key);
        name_string=name_string.replaceAt(n, "-")
        name_string=revealed(key,name_string)
       // alert(name_string)
       
        alert (revealed(key, name_string))
       
        revealed_name=revealed_name.replaceAt(n, key)
        //alert(name_string + " result " + (n+1)); 
        display (revealed_name)
        }
        else {
            wrong_guess++
            round--
            display2(wrong_guess)
            display_round(round)
            alert("wrong"+ wrong_guess)
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

// document.getElementById("number_of_guess_remaining").innerHTML = number_of_guess_remaining;
// document.getElementById("letter_allready_guessed").innerHTML = letter_allready_guessed;
// document.getElementById("leter_guessed").innerHTML = leter_guessed;
// document.getElementById("win-counter").innerHTML = win;
// document.getElementById("losses").innerHTML = losses;
    }

    function display_init (init){
        
        document.getElementById("game-started").innerHTML = init;
        
            }

    function display_round (round){
        
        document.getElementById("guesses-left").innerHTML = round;
        //document.getElementById("number_of_guess_remaining").innerHTML = round2;
        
            }