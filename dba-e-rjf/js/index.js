
function showFaq() {
  jQuery('.aside-faq-question-container').click(function(){
    var toggle = jQuery(this).children('div#descwrapper');

		jQuery(toggle).slideToggle("slow");
	});

  jQuery('.inactive').click(function(){
		jQuery(this).toggleClass('inactive active');
	});
}


function debounce(func, timeout = 300){
  let timer;
  return (...args) => {
    if (!timer) {
      func.apply(this, args);
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = undefined;
    }, timeout);
  };
}

jQuery(document).ready(debounce(showFaq, 1000));