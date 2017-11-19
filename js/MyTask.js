$(document).ready(
	function() {
		// compile the template
		var source   = $("#task-template").html();
		var template = Handlebars.compile(source);

		var parentDiv = $("#myTaskList");
		var tasks = JSON.parse(localStorage.getItem("localArray"));

		// Iterating through the task list and appending
			for (var i = 0; i < tasks.length; i++) {
				var curData = tasks[i];
				var curHtml = template(curData);
				parentDiv.append(curHtml);
			}
	}
	);
