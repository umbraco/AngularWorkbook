$(function(){
  var nb = $('#navbtn');
  var n = $('#topnav nav');
  
  $(window).on('resize', function(){
    
    if($(this).width() < 570 && n.hasClass('keep-nav-closed')) {
      // if the nav menu and nav button are both visible,
      // then the responsive nav transitioned from open to non-responsive, then back again.
      // re-hide the nav menu and remove the hidden class
      $('#topnav nav').hide().removeAttr('class');
    }
    if(nb.is(':hidden') && n.is(':hidden') && $(window).width() > 569) {
      // if the navigation menu and nav button are both hidden,
      // then the responsive nav is closed and the window resized larger than 560px.
      // just display the nav menu which will auto-hide at <560px width.
      $('#topnav nav').show().addClass('keep-nav-closed');
    }
  }); 
  
  $('#topnav nav a,#topnav h1 a,#btmnav nav a').on('click', function(e){
    e.preventDefault(); // stop all hash(#) anchor links from loading
  });
  
  $('#navbtn').on('click', function(e){
    e.preventDefault();
    $("#topnav nav").slideToggle(350);
  });
  
});