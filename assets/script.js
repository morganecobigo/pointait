const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];
let index = 0;
const bannerImage = document.querySelector(".banner-img");
const tagLine = document.querySelector("#banner p");
const rightArrow = document.querySelector(".arrow_right");
const leftArrow = document.querySelector(".arrow_left");
const dots = document.querySelector(".dots");

const generateDots = () => {
  dots.innerHTML = "";
  console.log("longueur: " + slides.length);
  for (let i = 0; i < slides.length; i++) {
    console.log("i: " + i);

    const dot = document.createElement("div");
    if (i === index) {
      dot.className = "dot dot_selected";
    } else {
      dot.className = "dot";
    }
    dots.appendChild(dot);
  }
};
generateDots();

const updateData = () => {
  bannerImage.src = "./assets/images/slideshow/" + slides[index].image;
  tagLine.innerHTML = slides[index].tagLine;
  generateDots();
  console.log(index);
  console.log(slides[index]);
};

const nextPicture = () => {
  index++;
  if (index > slides.length - 1) {
    index = 0;
  }
  updateData();
};
const previousPicture = () => {
  index--;
  if (index < 0) {
    index = slides.length - 1;
  }
  updateData();
};
rightArrow.addEventListener("click", nextPicture);

leftArrow.addEventListener("click", previousPicture);
