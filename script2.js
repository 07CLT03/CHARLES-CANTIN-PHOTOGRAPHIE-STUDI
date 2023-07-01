

$(function(){
  setTimeout(function(){
    $('#opening-showing-div').show();
  },2000);
});


function show() {
  document.getElementById('text-wrapper').style.visibility = "visible";
}
function hide() {
  document.getElementById('text-wrapper').style.visibility = "hidden";
}




function nextSection() {
  window.scrollTo(0, document.getElementById('section-2').offsetTop)
}



function clickinner(target) { 
    location.href='index.html';
};