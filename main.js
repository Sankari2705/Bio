
let tableHead = document.getElementsByClassName('table-head');
  let tableContents = document.getElementsByClassName('table-contents');
  function clicktab(tabname){
  for (tabhead of tableHead){
    tabhead.classList.remove("active-link");
  }
  for (tabcontent of tableContents){
    tabcontent.classList.remove("active-table");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-table");
}


let sidemenu = document.getElementById("sidemenu");

function openmenu(){
  sidemenu.style.right = "0";
}

function closemenu(){
  sidemenu.style.right = "-180px";
}

document.getElementById('scroll').onclick = (e) =>{
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  window.scrollTo(0,0);
}


