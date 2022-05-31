
const eran123 = 1;
const elements2 = document.getElementsByName('button');


function myFunction(event) { 
    var answer = event.target.innerHTML;
    if(answer == testo)
    {
        event.currentTarget.className = "greenBackground";
         //event.target.style.backgroundColor="#FF0000";
    }
    else
    {         
        event.currentTarget.className = "redBackground";
    }

 elements2.disabled = true;


console.log("testo" , testo);


  }


  //function lock() { 
   // checkboxes = document.getElementsByName('button');
   // console.log("checkboxes: ",checkboxes[0]);
    //for (let index = 0; index < checkboxes.length; index++) {
       // checkboxes[index].disabled = true;
  //}
        
   // }


   async function showtrivia(event) {
    try {

        event.target.innerHTML = "לשאלה הבאה";
        console.log("erer: " , eran123);
      const trivia = await getTriviaAsync();
      console.log("trivia: " , trivia);
      const qus = trivia.results;
      console.log("qus[0]: ",qus[0]);
      const i =0;
      qusEeth = qus[i];
      displayQastTable(qusEeth);
        } catch (error) {
      alert("Error getting users. Error: " + error);


    }
  }

  function nextQ() {
    eran123 = eran123+1; 
    showtrivia();
  }
  
  function getTriviaAsync() {
    return new Promise((resolve, reject) => {
      const ajax = new XMLHttpRequest();
      ajax.onreadystatechange = () => {
        if (ajax.readyState === 4) {
          if (ajax.status === 200) {
            const tri = JSON.parse(ajax.responseText);
            resolve(tri);
          }
          else {
            reject(ajax.status);
          }
        }
      };
  
      ajax.open("GET", "https://opentdb.com/api.php?amount=10");
      ajax.send();
    });
  }

  function onLoad() {
    theTemp = document.getElementById("qast");
  }
  var testo = "";
  function displayQastTable(qastArray) {
    theTemp.innerHTML = "";
  
    let contentHTML = "";
    testo = qastArray.correct_answer;
    console.log("testo: " , testo);
    //console.log("qastArray[0]: " ,qastArray[0]);

    

    contentHTML += `
    <h3>${qastArray.question}</h3></br>
    <button id="${qastArray.correct_answer}" name="button" class="" onclick="myFunction(event)">${qastArray.correct_answer}</button></br>
    `;

     // for (const prop of qastArray) {
    //}
         //     console.log("prop2: " , prop.incorrect_answers);

        for (let index = 0; index < qastArray.incorrect_answers.length; index++) {
            const element = qastArray.incorrect_answers[index];
            console.log("element: " ,element);
            contentHTML += `<button id="${element}" name="button" class="" onclick="myFunction(event)">${element}</button></br>`;

        }

            //  console.log("correct_answer: " , prop.correct_answer);


            theTemp.innerHTML = contentHTML;

        }

  
  




  //correct_answer
  //incorrect_answers