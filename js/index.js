document.addEventListener('mousewheel', function(e) { 
    if (e.axis == e.HORIZONTAL_AXIS) {
        e.stopPropagation(); 
        e.preventDefault();
        e.cancelBubble = false; 
    }
    return false;
}, false); 

$(function(){ 
     var navMain = $(".navbar-collapse"); // avoid dependency on #id
     // "a:not([data-toggle])" - to avoid issues caused
     // when you have dropdown inside navbar
     navMain.on("click", "a:not([data-toggle])", null, function () {
         navMain.collapse('hide');
     });
 });
