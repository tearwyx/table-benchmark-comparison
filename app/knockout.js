(function() {

	function make() {
		var rowCount = 100;
		var colCount = 10;

		var rows = [];

		for(var i = 0; i < rowCount; i ++) {

			var i_cols = [];

			for(var j = 0; j < colCount; j ++) {

				i_cols[j] = {
					value: ko.observable(i+'/'+j)
				};
			}

			rows[i] = {
				cols: ko.observableArray(i_cols)
			};
		}

		return {
			rows: ko.observableArray(rows)
		};
	}

	$(document).ready(function() {

		var data = make();

		$($('#template').html().trim()).appendTo('#container');

		ko.applyBindings(data);

		window.setVar = function() {
			data.rows.peek()[0].cols.peek()[0].value('hello');
		};

	});

})();
