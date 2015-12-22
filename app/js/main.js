 $(document).ready(function() {

 	if(!Modernizr.input.placeholder){
 		$('input, textarea').placeholder();
 	}

});


$(function() {
   //  $('.site-add').on('click'(function(e){
   //      e.preventDefault();         
   // });

    $('.overlay').css({opacity: 0.5});
    positionCenter($(".popup"));
        
    $('.add-project').click(function() {
        $('.popup, .overlay').fadeIn(500);
    });
    
    $('.close-popup').click(function() {
       $('.popup, .overlay').fadeOut(500); 
    });

     $('form').click(function() {
        $('.server-mes').text('').hide();
    });

    $('.close-popup').click(function() {
        $('.server-mes').text('').hide();
        $('form').trigger('reset');
    });

    // function onClose() {
    //     form.find('.server-mes').text('').hide();
    // }
    
    function positionCenter(elem) {
        elem.css({
            marginTop: '-' + elem.height() / 2 + 'px',
            marginLeft: '-' + elem.width() / 2 + 'px'
        });
    }
});

 if(typeof console === 'undefined' || typeof console.log === 'undefined') {
    var console = {};
    console.log = function(){

    };
 }