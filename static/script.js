$(document).ready(function(){
  $(".cards").hide();
  $(".cards").click(function() {
	$(this).next(".cards");
  });
});
