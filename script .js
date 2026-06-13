// DARK MODE

function toggleDarkMode(){

document.body.classList.toggle("dark");

}





// AFFIRMATIONS


const affirmations = [

"You are capable of handling difficult moments.",

"Small steps still count as progress.",

"You deserve kindness from yourself.",

"Your feelings are valid and worth understanding.",

"Today is a chance to start again."

];


function newAffirmation(){

let random =
Math.floor(Math.random()*affirmations.length);


document.getElementById("affirmation")
.innerHTML =
affirmations[random];

}


newAffirmation();





// MOOD CHECK


function checkMood(mood){


let message;


if(mood==="Happy"){

message="Keep doing things that support your happiness 🌱";

}

else if(mood==="Okay"){

message="Remember to check in with yourself today.";

}


else if(mood==="Stressed"){

message="Try breathing, resting, or talking to someone.";

}


else {

message="You deserve support and care.";

}



document.getElementById("response")
.innerHTML=message;


}







// SAVED POSTS


window.onload=function(){

let saved =
JSON.parse(localStorage.getItem("stories")) || [];


saved.forEach(displayStory);

};




function addStory(){


let text =
document.getElementById("story").value;



if(text===""){

alert("Write something first.");

return;

}



let stories =
JSON.parse(localStorage.getItem("stories")) || [];



stories.push(text);


localStorage.setItem(
"stories",
JSON.stringify(stories)
);



displayStory(text);



document.getElementById("story").value="";


}




function displayStory(text){


let post =
document.createElement("div");


post.className="story";


post.innerHTML=text;


document.getElementById("stories")
.appendChild(post);


}






// BREATHING


function startBreathing(){


let circle =
document.getElementById("breathingCircle");


let text =
document.getElementById("breathText");



circle.classList.add("breathe");


text.innerHTML =
"Inhale... hold... exhale...";



setTimeout(()=>{


circle.classList.remove("breathe");


text.innerHTML =
"Finished. Take a moment.";

},8000);



}
