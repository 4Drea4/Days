

document.querySelector('#check').addEventListener('click,check')

function check(){
  const day=document.querySelector('#day').value
  //Conditions go here
  const resultElement = document.querySelector('#placeToSee');

  //Use conditionals to check what day it is and display the appropriate message

  if (day=== 'Monday' || day === 'Wednesday'){
    resultElement.innerText = "Today is a coffee shop day!";

  }else if (day === 'Saturday' || day === "Sunday" ) {
    resultElement.innerText = "Let's throw a party, it is the weekend!";

  }else if (day === 'Friday') {
    resultElement.innerText = "Its about that time!";
  
  } else if (day ==='Tuesday' || day === 'Thursday'){
    resultElement.innerText = "It's not Friday yet?";

  } else {
    resultElement.innerText = "Please enter a valid day of the week.";
  }


}