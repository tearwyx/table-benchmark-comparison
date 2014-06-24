(function() {

	function make() {
		var rowCount = 100;
		var colCount = 10;

		var rows = [];

		for(var i = 0; i < rowCount; i ++) {

			var i_cols = [];

			for(var j = 0; j < colCount; j ++) {

				i_cols[j] = {
					value: i+'/'+j
				};
			}

			rows[i] = {
				cols: i_cols
			};
		}

		return {
			rows: rows
		};
	}

	var data = make();

	var app = angular.module('application', []);

	app.controller('controller', function($scope) {
		$scope.data = data;
	});

	window.setVar = function() {
		data.rows[0].cols[0].value = 'hello';
	};

})();
