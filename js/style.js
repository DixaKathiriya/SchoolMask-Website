/*product hover change */

/* kids product hover */

function kid1(){
    document.getElementById("kid1img").src="images/hoverkid1.jpg";
  }

  function kid1normal(){
    document.getElementById("kid1img").src="images/kidsmask_pro1.png";
  }

function kid2(){
  document.getElementById("kid2img").src="images/hoverkid2.jpg";
}

function kid2normal(){
  document.getElementById("kid2img").src="images/kidsmask_pro2.png";
}

function kid3(){
  document.getElementById("kid3img").src="images/hoverkid3.jpg";
}

function kid3normal(){
  document.getElementById("kid3img").src="images/kidsmask_pro3.png";
}

function kid4(){
  document.getElementById("kid4img").src="images/hoverkid4.jpg";
}

function kid4normal(){
  document.getElementById("kid4img").src="images/kidsmask_pro4.png";
}

function kid5(){
  document.getElementById("kid5img").src="images/hoverkid4.jpg";
}

function kid5normal(){
  document.getElementById("kid5img").src="images/kidsmask_pro5.png";
}

function kid6(){
  document.getElementById("kid6img").src="images/hoverkid4.jpg";
}

function kid6normal(){
  document.getElementById("kid6img").src="images/kidsmask_pro6.png";
}

function kid7(){
  document.getElementById("kid7img").src="images/hoverkid4.jpg";
}

function kid7normal(){
  document.getElementById("kid7img").src="images/kidsmask_pro7.png";
}


/* adult product hover */

function adult1(){
  document.getElementById("adult1img").src="images/hoveradult1.jpg";
}

function adult1normal(){
  document.getElementById("adult1img").src="images/adult_pro1.png";
}

function adult2(){
  document.getElementById("adult2img").src="images/hoveradult2.jpg";
}

function adult2normal(){
  document.getElementById("adult2img").src="images/adult_pro2.png";
}


function adult3(){
  document.getElementById("adult3img").src="images/hoveradult3.jpg";
}

function adult3normal(){
  document.getElementById("adult3img").src="images/adult_pro3.png";
}


function adult4(){
  document.getElementById("adult4img").src="images/hoveradult4.jpg";
}

function adult4normal(){
  document.getElementById("adult4img").src="images/adult_pro4.png";
}


function adult5(){
  document.getElementById("adult5img").src="images/hoveradult1.jpg";
}

function adult5normal(){
  document.getElementById("adult5img").src="images/adult_pro2.png";
}


function adult6(){
  document.getElementById("adult6img").src="images/hoveradult2.jpg";
}

function adult6normal(){
  document.getElementById("adult6img").src="images/adult_pro1.png";
}



/* Classpack product hover */

function class1(){
  document.getElementById("class1img").src="images/hoverclass1.png";
}

function class1normal(){
  document.getElementById("class1img").src="images/amazon1.jpg";
}

function class2(){
  document.getElementById("class2img").src="images/hoverclass2.png";
}

function class2normal(){
  document.getElementById("class2img").src="images/amazon2.jpg";
}


function class3(){
  document.getElementById("class3img").src="images/hoverclass3.png";
}

function class3normal(){
  document.getElementById("class3img").src="images/amazon3.jpg";
}

function class4(){
  document.getElementById("class4img").src="images/hoverclass4.png";
}

function class4normal(){
  document.getElementById("class4img").src="images/amazon4.jpg";
}

function class5(){
  document.getElementById("class5img").src="images/hoverclass5.png";
}

function class5normal(){
  document.getElementById("class5img").src="images/amazon5.jpg";
}

// When the user scrolls down 20px from the top of the document, show the button
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, 'slow');
});




  
