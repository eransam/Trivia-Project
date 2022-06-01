var elements2 = document.getElementsByName("button");
var testo = "";
var i = 0;
var theTemp = "";
var contentHTML = "";
var trivia = "";
var oneQuestions = "";

function nextQ() {
  const test = document.querySelector("button");
  console.log("test: ", test);
  const elements2 = document.getElementsByName("button");
  console.log("elements2: ", elements2);
  for (let index = 0; index < elements2.length; index++) {
    const element = elements2[index];
    console.log("element inside: ", element);
    element.disabled = true;
  }
}

function myFunction(event) {
  var answer = event.target.innerHTML;
  if (answer == testo) {
    event.currentTarget.className = "greenBackground";
  } else {
    event.currentTarget.className = "redBackground";
  }
  elements2.disabled = true;
  console.log("testo", testo);

  elements2 = document.getElementsByName("button");
  for (let index = 0; index < elements2.length; index++) {
    const element = elements2[index];
    if ((element.id = answer)) {
      element.disabled = false;
    }
    element.disabled = true;
  }
}

async function onLoad() {
  trivia = await getTriviaAsync();
  console.log("trivia on load: ", trivia);
}

//פונ' ראשית בכפתור
async function showtrivia(event) {
  try {
    console.log("TheArrayQuestions[i]", oneQuestions);

    theTemp = document.getElementById("qast");
    event.target.innerHTML = "לשאלה הבאה";

    //מושך את השאלות
    const TheArrayQuestions = trivia.results;

    oneQuestions = TheArrayQuestions[i];
    if (oneQuestions === undefined) {
      alert("Thank you very much, we will get back to you as soon as possible");
    }
    displayQastTable(oneQuestions);

    i = i + 1;
  } catch (error) {
    if (oneQuestions !== undefined) {
      alert(error);
    }
  }
}

//מושך את השאלות
function getTriviaAsync() {
  return new Promise((resolve, reject) => {
    const ajax = new XMLHttpRequest();
    ajax.onreadystatechange = () => {
      if (ajax.readyState === 4) {
        if (ajax.status === 200) {
          const tri = JSON.parse(ajax.responseText);
          resolve(tri);
        } else {
          reject(ajax.status);
        }
      }
    };

    ajax.open("GET", "https://opentdb.com/api.php?amount=10");
    ajax.send();
  });
}

//מקבל כל פעם שאלה אחת ומציג אותה
function displayQastTable(qastArray) {
  theTemp.innerHTML = "";
  contentHTML = "";
  testo = qastArray.correct_answer;
  contentHTML += `
            <h3>${qastArray.question}</h3></br>

            <button id="${qastArray.correct_answer}" name="button" class="" onclick="myFunction(event)">${qastArray.correct_answer}</button></br>`;

  for (let index = 0; index < qastArray.incorrect_answers.length; index++) {
    const element = qastArray.incorrect_answers[index];
    contentHTML += `<button id="${element}" name="button" class="" onclick="myFunction(event)">${element}</button></br>`;
  }
  theTemp.innerHTML = contentHTML;
}
