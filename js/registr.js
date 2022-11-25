let i = true;
let j = false;
function click1() {
  if(i == true){
    document.querySelector(".div-form").style.display = "none";
    document.querySelector(".div-form1").style.display = "flex";
    i = false;
  }else{
      document.querySelector(".div-form").style.display = "flex";
      document.querySelector(".div-form1").style.display = "none";
      i = true;
  }
}
function clickOpenExit(){
    if(j == true){
      document.querySelector(".registr").style.display = "none";      
      document.querySelector("html").style.overflowY = "auto";
      j = false;
    }else{
      document.querySelector(".registr").style.display = "block";
      document.querySelector("html").style.overflowY = "hidden";
      j = true;
    }
}