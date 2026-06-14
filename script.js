function askAI(){

let question =
document.getElementById("question").value;

let response =
document.getElementById("response");

if(question.toLowerCase().includes("html"))
{
response.innerHTML =
"<h3>Answer:</h3> HTML is used to structure web pages.";
}

else if(question.toLowerCase().includes("css"))
{
response.innerHTML =
"<h3>Answer:</h3> CSS is used to style web pages.";
}

else if(question.toLowerCase().includes("javascript"))
{
response.innerHTML =
"<h3>Answer:</h3> JavaScript makes websites interactive.";
}

else
{
response.innerHTML =
"<h3>Answer:</h3> This is a demo AI educational response.";
}

}