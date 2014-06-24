(function() {

	function make() {
    var rowCount = 100;
		var colCount = 10;

		var rows = [];

		for(var i = 0; i < rowCount; i ++) {

			var i_cols = [];

			for(var j = 0; j < colCount; j ++) {

				i_cols[j] = Ember.Object.create({
					value: i+'/'+j
				});
			}

			rows[i] = Ember.Object.create({
				cols: Ember.A(i_cols)
			});
		}

		return Ember.Object.create({
			rows: Ember.A(rows)
		});
	}

	$(document).ready(function() {

		var data = make();

		var App = Ember.Application.create();

		App.ApplicationController = Ember.Controller.extend({
			init: function() {
				this.set('data', data);
			}
		});

		window.setVar = function() {
			data.get('rows').get(0).get('cols').get(0).set('value', 'hello');
		};

	});

})();
