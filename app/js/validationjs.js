var validation = (function () {

	var init = function () {
		_setUpListners(); 
	};

		
	var _setUpListners = function () {
		$('form').on('keydown', '.error', _removeError);
        $('form').on('reset', _clearForm);
	};

    var _removeError = function () {
      $(this).removeClass('error');  
    };
    
    var _clearForm = function (form) {
        var form = $(this);
        form.find('input, textarea').trigger('hideTooltip');
        form.find('.error').removeClass('error');
        
    };
    
	var _createQtip = function (element, position) {

		if (position === 'right') {
			position = {
                my: 'left center',
				at: 'right center'
            }
		}
		  else {
			position = {
				my: 'right center',
				at: 'left center',
//                target: $('.input-email'),
				adjust: {
					method: 'shift none'
				}
			}
		  }

		element.qtip({
			content: {
				text: function() {
					return $(this).attr('qtip-content');
				}
			},
			show: {
				event: 'show'
			},
			hide: {
				event: 'keydown hideTooltip'
			},
			position: position,
			style: {
				classes: 'pishi-cvoi-stil-esli-nado qtip-rounded',
				tip: {
					height: 10,
					width: 16
				}
			}

		}).trigger('show');
    };

	var validateForm = function (form) {
		console.log('я в модуле валидации проверяю форму');

		var elements = form.find('input, textarea').not('input[type="file"], input[type="hidden"]'),
			valid = true;
		$.each(elements, function (index, val) {
			console.log(val);
			var element = $(val),
				    val = element.val(),
				    pos = element.attr('qtip-position');

			if(val.length === 0){
				element.addClass('error');
				_createQtip(element, pos);
				valid = false;
			}
		});
	};

	return {
		init: init,
		validateForm: validateForm
	};

})();

validation.init(); 