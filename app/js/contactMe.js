var contactMe = (function () {

	var init = function () {
		_setUpListners();
	};


	var _setUpListners = function () {
		$('#contact-me').on('submit', _submitForm);
	};

	var _submitForm = function (e){
		console.log('отправка формы');
		e.preventDefault();

		var form = $(this),
			url = 'contactMe.php',
			defObj = _ajaxForm(form, url);
	};

	var _ajaxForm = function (form, url) {
		console.log('ajax запрос с проверкой');
		if(!validation.validateForm(form)) return false;
	};

	return {
		init: init
	};

})();

contactMe.init();