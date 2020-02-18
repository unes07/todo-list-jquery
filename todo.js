//  check off specific Todos By Clicking
$("ul").on("click", "li", (function () {
	$(this).toggleClass("completed");
}));

// click on X to delete Todo
$("ul").on("click", "span", (function (event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
}));

// add new Todo
$("input[type='text'").keypress(function(event) {
	if (event.which === 13) {
		// grabbing new Todo text from input
		var todoText = $(this).val();
		// clear the input
		$(this).val("");		
		// creat a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	};
});

$(".fa-plus").click(function() {
	$("input[type='text'").fadeToggle();
});