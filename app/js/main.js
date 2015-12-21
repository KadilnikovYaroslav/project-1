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


var myModule = (function () {
    
    var init = function () {
            _setUpListners();  
        };
    
    var _setUpListners = function () {
        $('#valid-form').on('submit', _valForm);
        };
    
    var _valForm = function (e) {
        e.preventDefault();

        var form = $(this),
            url = 'validation.php',
            defObj = _ajaxForm(form, url);

        if(defObj) {
            
        
            defObj.done(function(ans) {
                if(ans.status === 'OK'){
                    form.find('.success-mes').text(ans.text).show();
                }else{
                    form.find('.error-mes').text(ans.text).show();
                }
            });
        }
        
    };

    var _ajaxForm = function (form, url) {

        if (!validation.validateForm(form)) return false;
        
        var data = form.serialize();

	    var result = $.ajax({ 
	        type: 'POST',
	        url: url,
	        dataType : 'JSON',
	        data: data
	      }).fail( function(ans) {
	        console.log('Проблемы в PHP');
	        form.find('.error-mes').text('На сервере произошла ошибка').show();
	      });
        
        return result;

    };
    
    return {
        init: init
    };
    
    
})();

     myModule.init();