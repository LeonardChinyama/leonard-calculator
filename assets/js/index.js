/* Declare the Global variables */
var result = document.getElementById('result');
var resultvalue = "";
var inputdata ="";



function myFunction(runFunction){
  var functionName = runFunction+"()";
  if(runFunction == "deleteItem" || runFunction== "clearInput" || runFunction=="returnAnswer" || runFunction=="answerandclear"){
  var func = new Function(functionName);
  func();
}else {
  updateresult(runFunction);
}
  addclass();

}




/* Method sets both the value and placeholder of result to empty */
 function clearInput(){
   result.value = "";
   result.placeholder = "";
  }

/* Method allows user to delete last inputed character. Achieved using substr() method */
function deleteItem(){
  resultvalue = result.value;
  if(resultvalue == ""){
    return;
  }
  result.placeholder = "";
  result.value = resultvalue.substr(0, resultvalue.length-1);
 }

/* Method concatenates result with user's input */
 function updateresult(userInput){
   var getuserInput = userInput;
   result.value += getuserInput;
   return;

 }


/* Method allows user to get result of equation for further calculation */
function returnAnswer(){
  if(result.value == ""){
    return;
  }
  solve();
  result.placeholder ="";
  result.value = inputdata;

}


/* Method display result as a placeholder. No further calculation can be done with this result */
function answerandclear(){
  if(result.value == ""){
    return;
  }
  solve();
  result.value = "";
  result.placeholder = inputdata;
}


/* Perform mathematical computation on the user's input */
 function solve(){
    resultvalue = result.value;
    inputdata = eval(resultvalue);
    return inputdata;
 }

 function loadDate(){
   var d = new Date();
   document.getElementById('datepart').innerHTML = d.getFullYear();
 }


// Reduce the font-size if user input or result is too large.
 function addclass(){
   if((result.value.length >= 12 && result.value.length < 17) || (result.placeholder.length >=12 && result.placeholder.length < 16)){
     result.className = 'smallText';
   }else if(result.value.length >= 17 || result.placeholder.length >=16){
     result.className = 'smallestText';
   }

   else{
     result.className = 'result';
    }
 }
