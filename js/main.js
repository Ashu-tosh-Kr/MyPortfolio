let flag = true;
function navi() {
  if(flag){
    document.querySelector('nav').style.transform = 'translateX(0px)';
    flag=false;
  }
  else {
    document.querySelector('nav').style.transform = 'translateX(500px)';
    flag=true;
  }
}