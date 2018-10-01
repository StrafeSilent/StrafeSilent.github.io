let visible = true,
    block = document.querySelector('.header_items');
function funcMenu() {
    if(visible) {
             visible = false;
             block.classList.remove('header_items_set');
    } else {
             block.classList.add('header_items_set');  
             visible = true;
}}


//   let card = $(".block1");

// $(document).on("mousemove",function(e) {  
//   var ax = -($(window).innerWidth()/2- e.pageX)/40;
//   var ay = ($(window).innerHeight()/2- e.pageY)/40;
//   card.attr("style", "transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-webkit-transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-moz-transform: rotateY("+ax+"deg) rotateX("+ay+"deg)");
// });