var contactMe = (function () {

	var init = function () {
		_setUpListners();
	};


	var _setUpListners = function () {
		$('#contact-me').on('submit', _submitForm);
	};

	var _submitForm = function (e){
		e.preventDefault();

		var form = $(this),
			url = 'contactMe.php',
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

		if(!validation.validateForm(form)) return false;

        var data = form.serialize();
       
	 	var result = $.ajax({
	 		type: 'POST',
	 		url: url,
	 		dataType: 'JSON',
	 		data: data
          }).fail( function(ans) {
	 		console.log('Проблемы PHP');
	 	});
        
        return result;
	 };

	return {
		init: init
	};

})();

contactMe.init();