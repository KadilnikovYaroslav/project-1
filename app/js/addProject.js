var addProject = (function (){


	var init = function(){
		_setUpListners();
  };


	var _getNameFromPath = function (path) {
		return path.replace(/\\/g, '/').replace(/.*\//, '');
	};

	var _setUpListners = function (){
		$('#add-new-project').on('submit', _addProject);
		$('#fileupload').on('change', _changefileUpload);
	};

	var _changefileUpload = function (){
		var input = $(this),
			name = _getNameFromPath(input.val());

		$('#filename')
			.val(name) 
			.trigger('hideTooltip')
			.removeClass('error'); 
	};

	var _addProject = function (e){

	      e.preventDefault();

	      var form = $(this),
	          url = $(this).attr('action'),
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

addProject.init();