 $(document).ready(function() {

 	if(!Modernizr.input.placeholder){
 		$('input, textarea').placeholder();
 	}

});


$(document).ready(function() {
    $(".overlay").css({opacity: 0.5});
    positionCenter($(".popup"));
    
//    $('.site-add').on('click'.function(e){
//        e.preventDefault();         
//    });
    
    $(".add-project").click(function() {
        $(".popup, .overlay").fadeIn(500);
    });
    
    $(".close-popup").click(function() {
       $(".popup, .overlay").fadeOut(500); 
    });
    
    function positionCenter(elem) {
        elem.css({
            marginTop: '-' + elem.height() / 2 + 'px',
            marginLeft: '-' + elem.width() / 2 + 'px'
        });
    }
});


//var validation = (function () {
//    
//    var    
//        _init = function () {
//            _setUpListeners();  
//        },
//    
//        _setUpListeners = function () {
//            
//        },
//    
//    return {
//        init: _init
//    }
//    
//    
//}());
//
//     validation.init();
//
//        $
//});

