var myModule = (function () {

	var init = function () {
		_setUpListners(); //заведено что прослушку не вызывают сразу напрямую
		//а созд. какую то функцию которая назыв инициализация init
//
	};

		//_setUpListners внутреняя функция 
	var _setUpListners = function () {
		//прослушка событий
	};

	return {
		init: init // публичные методы. Они всегда находяться в return
		//init: init - init: метод который виден публично init - это обращения к внутренней функции
	};

})();

myModule.init(); //публичный метод