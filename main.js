
function myFunction(event) { 
    var answer = event.target.innerHTML;
    if(answer!= "jerusalem")
    {
        event.currentTarget.className = "redBackground";

         //event.target.style.backgroundColor="#FF0000";
    }
    else
    {         
        event.currentTarget.className = "greenBackground";
    }
    checkboxes = document.getElementsByName('button');
    console.log("checkboxes: ",checkboxes[0]);
    for (let index = 0; index < checkboxes.length; index++) {
        checkboxes[index].disabled = true;
  }
    document.getElementById("demo").innerHTML = "Triggered by a " + answer + " element";
  }


  //function lock() { 
   // checkboxes = document.getElementsByName('button');
   // console.log("checkboxes: ",checkboxes[0]);
    //for (let index = 0; index < checkboxes.length; index++) {
       // checkboxes[index].disabled = true;
  //}
        
   // }


   async function showtrivia() {
    try {
      const trivia = await getUsersAsync();
      console.log("trivia: " , trivia);
      displayQastTable(trivia.results);
        } catch (error) {
      alert("Error getting users. Error: " + error);
    }
  }
  
  function getUsersAsync() {
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

  function displayQastTable(qastArray) {
    theTemp.innerHTML = "";
  
    let contentHTML = "eran";
    console.log("qastArray[0]: " ,qastArray[0]);

    
  
    for (const prop of qastArray) {
     // contentHTML += `<h3>${prop.question}</h3>`;
    //}
    contentHTML += `
    <h3>${prop.question}</h3>
    <button id="${prop.correct_answer}" name="button" class="inlineBlock" onclick="myFunction(event)">${prop.correct_answer}</button></br>
    `;

      for (const prop of qastArray) {
    }
              console.log("prop2: " , prop.incorrect_answers);

        for (let index = 0; index < prop.incorrect_answers.length; index++) {
            const element = prop.incorrect_answers[index];
            console.log("element: " ,element);
            contentHTML += `<button id="${element}" name="button" class="inlineBlock" onclick="myFunction(event)">${element}</button></br>`;

        }

              console.log("correct_answer: " , prop.correct_answer);



        }

  
    theTemp.innerHTML = contentHTML;
  }




  //correct_answer
  //incorrect_answers