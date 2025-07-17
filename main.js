
//about-skills
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

//side-bar in mobile view
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

//Read More Button
const readMoreBtn = document.querySelector('#see-more');
const aboutText = document.querySelector('.about-para');

readMoreBtn.addEventListener('click', (e) => {
  aboutText.classList.toggle('show-more');
  if(readMoreBtn.innerText === 'Read More'){
    readMoreBtn.innerText === 'Read Less';
  }else{
    readMoreBtn.innerText === 'Read More';
  }
})

//SeeMore button
let currentItem = 0;
const item = document.querySelectorAll('.project');
// const seeMoreBtn =  document.querySelectorAll('.project-button');
const itemToShow = 3;

function seeMore(){
for(let i = currentItem; i< currentItem + itemToShow; i++){
  if(item[i]){
    item[i].style.display = 'block';
  }
}
currentItem += itemToShow;
if(currentItem >= itemToShow.lenth){
  event.target.style.display = 'none';
}
}
seeMore();

