
$(document).ready(function(e) {			
	$(window).scroll(function(e){
		s = $(document).scrollTop();	
		if(s > 150 ){
			$('.fixed').css({'position':'fixed','top':20+'px'});
		}else{
			$('.fixed').css('position','');
		}
	})
});
