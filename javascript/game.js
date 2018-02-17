

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
    

// function for Even number
function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}


//--4 Display the _ _ _ _ _ _ _ based on the name to be guess and add spaces
function Hide_letter(string) {
    console.log( "Hide ")
        var array=string.split("");          //Converting a String to an Array
        var array_buffer = []
        for (i = 0; i < array.length*2; i++) {
            
            if (isEven(i)==true) {
                array_buffer[i]="-"}
                else {
                    array_buffer[i]=" "}
                }
                var result =array_buffer.join("") //Converting an Array to a String
            console.log("Hide function result is "+revealed_name)
            return revealed_name
}

//--4 Revealed the letters and return a string revealed
function revealed(name_string,revealed_name,key) {
    console.log("revealed")
    
    console.log(name_string)
    console.log(revealed_name)
    console.log(key)
    
    var array1=revealed_name.split("");          //Converting a String to an Array
    var array2=name_string.split("");          //Converting a String to an Array
    
    var array_buffer = []
    for (i = 0; i < array1.length*2; i++) {
if (array2[i]==key){
    if (array1!=="-"){array1[i*2]=key}
}
    }
        revealed_name =array1.join("") //Converting an Array to a String
        console.log("Revealed function result is "+ revealed_name)
        return revealed_name
}




function Init() {
    var T=star_wars.name
    shuffle(T)
    round=prompt("how many round do you want to play ?")
    update_round (round)
    display_init("Game started")
    display (Hide_letter(T[0]))
}

String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}




//--5 Key event to listen to the letters that player is typing--



document.onkeyup = function(event) {
    
     // if first time playing init the number of round shuffle the list of name for star wars
     if (init==0){
        Init()
    }
    else{
        var k = event.key;
        check(k,0);
    
        if (round==0){
            alert("game over")
            init=0
            losses++
            Update_Losses(losses)
        }
    }
    init=1
}

function check (key,index){
   

    console.log("check 1")
    var name_string = star_wars.name[index]
    name_string=name_string.toLowerCase()
    // var name_string ="hello luke";
    console.log(name_string)
    // if the letter is part of the string
    if (name_string.includes(key)){ 
        //letter_allready_guessed++
        revealed_name=revealed(name_string,revealed_name,key)
        display (revealed_name)
        console.log(revealed_name+" 2 ")
        }
        else {
            wrong_guess++
            console.log("wrong guess")
            round--
            Update_wrong_guess (wrong_guess)
            update_round (round)
        }    
}



//--7 As the user guesses the correct letters, reveal them: m a d o _  _ a.--
function display (revealed_name){
document.getElementById("word-blanks").innerHTML = revealed_name;
}

//--8 Display number-of-guess-remaining, letter-allready-guessed, leter-guessed, win, losses--

function Update_wrong_guess (wrong_guess){
document.getElementById("wrong-guesses").innerHTML = wrong_guess;
}

function display_init (init){
document.getElementById("game-started").innerHTML = init;
}

function update_round (round){
document.getElementById("guesses-left").innerHTML = round;
}


function Update_Losses(losses){
    document.getElementById("loss-counter").innerHTML = losses;
}

