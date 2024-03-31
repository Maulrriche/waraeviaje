/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    let x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  /*scroll animation*/
  var elScroll = document.querySelectorAll('.scroll'); 

document.onscroll = function() { 
  elScroll.forEach(elScroll => { 
  var positionEl = elScroll.getBoundingClientRect(); 
  var alturaEl = positionEl.top; 
  
  if(alturaEl < 400) { 
    elScroll.classList.add('scroll--show'); 
  }
 });
}