/*Slider*/

var slides = document.querySelectorAll(".slide");
var dots = document.querySelectorAll(".dot");
var index = 0;
function prevSlide(n){
  index+=n;
  console.log("prevSlide is called");
  changeSlide();
}
function nextSlide(n){
  index+=n;
  changeSlide();
}
changeSlide();
function changeSlide(){
  if(index>slides.length-1)
    index=0;
  if(index<0)
    index=slides.length-1;
    for(let i=0;i<slides.length;i++){
      slides[i].style.display = "none";
      dots[i].classList.remove("active");
    }
    slides[index].style.display = "block";
    dots[index].classList.add("active");
}


/*Filter*/
let products = {
	data: [
	  {
		productName: "TIMEWEAR Men's",
		category: "Watch",
		price: "30",
		image: "watch1.jpg",
	  },
	  {
		productName: "Tommy Hilfiger Black Wash",
		category: "Bag",
		price: "49",
		image: "bag2.jpg",
	  },
	  {
		productName: "Sporty SmartWatch",
		category: "Watch",
		price: "99",
		image: "sporty-smartwatch.jpg",
	  },
	  {
		productName: "Handbag CALVIN KLEIN",
		category: "Bag",
		price: "29",
		image: "bag3.jpg",
	  },
	  {
		productName: "Generic TITANIUM Steel Ring",
		category: "Ring",
		price: "89",
		image: "ring1.jpg",
	  },
	  {
		productName: "Rope Name Ring for Men",
		category: "Ring",
		price: "49",
		image: "comfy-gray-pants.jpg",
	  },
	],
  };
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
	//Button class code
	let buttons = document.querySelectorAll(".button-value");
	buttons.forEach((button) => {
	  //check if value equals innerText
	  if (value.toUpperCase() == button.innerText.toUpperCase()) {
		button.classList.add("active");
	  } else {
		button.classList.remove("active");
	  }
	});
	//Select All Cards
	let elements = document.querySelectorAll(".card");
	//Loop Through Cards
	elements.forEach((element) => {
	  //Display All Cards On 'all' button click
	  if (value == "all") {
		element.classList.remove("hide");
	  } else {
		//Check If Element Contains Category Class
		if (element.classList.contains(value)) {
		  //Display Element Based On Category
		  element.classList.remove("hide");
		} else {
		  //Hide Other Elements
		  element.classList.add("hide");
		}
	  }
	});
  }
  window.onload = () => {
	filterProduct("all");
  };


  
/*Add Cart*/
var valueCount;
document.querySelector(".plus").addEventListener("click", function(){
	valueCount=document.getElementById("quantity").value;
	valueCount++;
	document.getElementById("quantity").value=valueCount;
})
document.querySelector(".plus1").addEventListener("click", function(){
	valueCount=document.getElementById("quantity").value;
	valueCount++;
	document.getElementById("quantity").value=valueCount;
})
document.querySelector(".plus2").addEventListener("click", function(){
	valueCount=document.getElementById("quantity").value;
	valueCount++;
	document.getElementById("quantity").value=valueCount;
})
document.querySelector(".plus3").addEventListener("click", function(){
	valueCount=document.getElementById("quantity").value;
	valueCount++;
	document.getElementById("quantity").value=valueCount;
})
document.querySelector(".plus4").addEventListener("click", function(){
	valueCount=document.getElementById("quantity").value;
	valueCount++;
	document.getElementById("quantity").value=valueCount;
})
document.querySelector(".plus5").addEventListener("click", function(){
	valueCount=document.getElementById("quantity").value;
	valueCount++;
	document.getElementById("quantity").value=valueCount;
})

