
$.ajax({
    url: "http://"+host+"/api/comment/comments",
    type: "GET",
    success: function(data) {
    	console.log(data);
    	var source   = $("#template").html();
		var template = Handlebars.compile(source);
		$('.comments').html(template(data));
    },
    error: function() {

    }
});





