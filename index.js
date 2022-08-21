document.getElementById("demo").style.color = "red";


// let number = document.querySelector(".number");
// let counter = 0;
// setInterval(() =>{ 
//     if(counter == 65){ 
//         clearInterval;
//     }else{ 
//         counter+=1;
//         number.innerHTML= counter + "%";
//     }
// },30);


const numbers = document.querySelectorAll('.number');
const svgEl = document.querySelectorAll('svg circle');
const counters = Array(numbers.length);
const intervals = Array(counters.length);
counters.fill(0);

numbers.forEach((number, index) => {
    intervals[index] = setInterval(() => {
        if(counters[index] === parseInt(number.dataset.num)){
            clearInterval(counters[index]);
        }else{
            counters[index] += 1;
            number.innerHTML = counters[index] + "%";
            svgEl[index].style.strokeDashoffset = Math.floor(472 - 472 * parseFloat(number.dataset.num / 100));
        }
    }, 40);
});

// javaScript slider starts
document.querySelector('#sliderjs').style.color="red";
var i = 0;//start point
var images = [];
var time = 2000;
//image slide
images[0] ='./faysal111.jpg';
images[1] ='./faysal111.jpg';
images[2] ='faysal2.jpg';
// CHANGE IMAGE
function changeImg() {
    document.slide.src = images[i];
    if (i<images.length -1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
        
  
}
window.onload = changeImg;



// w3schools image slider.
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("myS");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


// easy slider 3 starts
let kaku=0;
showslides(kaku);

function controller(x) {
  showslides( kaku += x);
   
}
function currentSlide(x) {
  showslides( kaku = x);
}
function showslides(num) {
  let slides = document.getElementsByClassName("slid-box1");
  if (num == slides.length) {
     kaku=0;
     num=0;
  }
  if (num<0) {
     kaku= slides.length-1;
     num= slides.length-1;
  }
  for (let y of slides) {
    y.style.display="none";
    
  }
  slides[kaku].style.display= "block";
}




