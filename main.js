
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
  