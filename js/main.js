const toggle = document.querySelector('header>button');
const icon = document.querySelector('header>button>i');
const nav = document.querySelector('header>nav');


toggle.addEventListener('click', ()=> {
  nav.classList.toggle('show-nav');
  console.log(toggle.classList);
  icon.classList.toggle('fa-close');
  icon.classList.toggle('fa-bars');
  console.log(toggle.classList);
});

const reviews = [
  {
    id: 1,
    name: "Dummy paint project",
    job: "Random caption",
    img:
    "img/paint-brush.svg",
    text:
      "Some random text about painting",
  },
  {
    id: 2,
    name: "Dummy boxing thingy",
    job: "Caption is back",
    img:
    "img/boxing-gloves.svg",
    text:
      "More random text about boxing",
  },
  {
    id: 3,
    name: "Dummy graphics-design project",
    job: "caption stikes again",
    img:
    "img/graphics-design.svg",
    text:
      "Yay! illustrator",
  },
  {
    id: 4,
    name: "Dummy web-project",
    job: "Last caption",
    img:
    "img/web-page.svg",
    text:
      "I love CSS, period.",
  },
];
// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// show random person
randomBtn.addEventListener("click", function () {
  console.log("hello");

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});