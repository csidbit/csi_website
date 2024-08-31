// $(document).ready(function() {
//     setTimeout(function() {
//       $('#container').addClass('loaded');
//       // Once the container has finished, the scroll appears
//       if ($('#container').hasClass('loaded')) {
//         // It is so that once the container is gone, the entire preloader section is deleted
//         $('#preloader').delay(1000).queue(function() {
//           $(this).remove();
//         });}
//     }, 2000);});


// document.addEventListener("DOMContentLoaded", function() {
//   $('body').addClass('loaded');
// });
  
window.addEventListener("load", function () {
  var preloader = document.getElementById("preloader");
  // Simulate a delay of 2 seconds (adjust as needed)
  setTimeout(function () {
    preloader.style.opacity = '0';
    
    // Wait for the animation to finish and then hide the preloader
    setTimeout(function () {
      preloader.style.display = 'none';
    }, 500); // Wait for 1 second after the animation completes
  }, 1000);
});