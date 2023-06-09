// function splitScroll(){
//     const controller = new ScrollMagic.Controller();

//     new ScrollMagic.Scene({
//         duration: '200%',
//         triggerElement: '.about-title',
//         triggerHook:0.06
//     })
//     .setPin('.about-title')
//     .addIndicators()
//     .addTo(controller);
// }

// splitScroll();
function splitScroll(){
  const controller = new ScrollMagic.Controller();

  new ScrollMagic.Scene({
      duration: '100%',
      triggerElement: '.mh-abt-title',
      triggerHook:0
  })
  .setPin('.mh-abt-title')
  // .addIndicators()
  .addTo(controller);
}
splitScroll();
// video modal

$(document).ready(function(){


	/* Toggle Video Modal
  -----------------------------------------*/
	function toggle_video_modal() {
	    
	    // Click on video thumbnail or link
	    $(".js-trigger-video-modal").on("click", function(e){
          
          // prevent default behavior for a-tags, button tags, etc. 
	        e.preventDefault();
        
          // Grab the video ID from the element clicked
          var id = $(this).attr('data-youtube-id');

          // Autoplay when the modal appears
          // Note: this is intetnionally disabled on most mobile devices
          // If critical on mobile, then some alternate method is needed
          var autoplay = '?autoplay=1';

          // Don't show the 'Related Videos' view when the video ends
          var related_no = '&rel=0';

          // String the ID and param variables together
          var src = '//www.youtube.com/embed/'+id+autoplay+related_no;
          
          // Pass the YouTube video ID into the iframe template...
          // Set the source on the iframe to match the video ID
          $("#youtube").attr('src', src);
          
          // Add class to the body to visually reveal the modal
          $("body").addClass("show-video-modal noscroll");
	    
      });

	    // Close and Reset the Video Modal
      function close_video_modal() {
        
        event.preventDefault();

        // re-hide the video modal
        $("body").removeClass("show-video-modal noscroll");

        // reset the source attribute for the iframe template, kills the video
        $("#youtube").attr('src', '');
        
      }
      // if the 'close' button/element, or the overlay are clicked 
	    $('body').on('click', '.close-video-modal, .video-modal .overlay', function(event) {
	        
          // call the close and reset function
          close_video_modal();
	        
      });
      // if the ESC key is tapped
      $('body').keyup(function(e) {
          // ESC key maps to keycode `27`
          if (e.keyCode == 27) { 
            
            // call the close and reset function
            close_video_modal();
            
          }
      });
	}
	toggle_video_modal();



});
// $("js-trigger-video-modal").on('click', function(e) {
//     e.preventDefault();
//     $("#video-popup-overlay,#video-popup-iframe-container,#video-popup-container,#video-popup-close").show();
    
//     var srchref='',autoplay='',id=$(this).data('id');
//     if($(this).data('type') == 'vimeo') var srchref="//player.vimeo.com/video/";
//     else if($(this).data('type') == 'youtube') var srchref="https://www.youtube.com/embed/";
    
//     if($(this).data('autoplay') == true) autoplay = '?autoplay=1';
    
//     $("#video-popup-iframe").attr('src', srchref+id+autoplay);
    
//     $("#video-popup-iframe").on('load', function() {
//       $("#video-popup-container").show();
//     });
//   });
  
//   $("#video-popup-close, #video-popup-overlay").on('click', function(e) {
//     $("#video-popup-iframe-container,#video-popup-container,#video-popup-close,#video-popup-overlay").hide();
//     $("#video-popup-iframe").attr('src', '');
//   });
  
//   /* 
//   minified
  
//   $(".vpop").on("click",function(o){o.preventDefault(),$("#video-popup-iframe-container,#video-popup-container,#video-popup-close").show();var p="",e="",i=$(this).data("id");if("vimeo"==$(this).data("type"))var p="//player.vimeo.com/video/";else if("youtube"==$(this).data("type"))var p="https://www.youtube.com/embed/";1==$(this).data("autoplay")&&(e="?autoplay=1"),$("#video-popup-iframe").attr("src",p+i+e),$("#video-popup-iframe").on("load",function(){$("#video-popup-overlay, #video-popup-container").show()})}),$("#video-popup-close, #video-popup-overlay").on("click",function(o){$("#video-popup-iframe-container,#video-popup-container,#video-popup-close").hide(),$("#video-popup-iframe").attr("src","")});
//   */