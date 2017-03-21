$.routes.add('/{id}/','article', function() {
});
$.routes.add('/','articles-all', function() {
});
function showArticle(id){
	$.routes.find('article').routeTo({
	    id: id
	});
	getArticle(id);

}
function showArticlesAll(){
	$.routes.find('articles-all').routeTo({});
	getArticlesAll();
}
$('#home').click(function(){
	showArticlesAll();
})
var articles = [
		{
			name: "11",
			id: 1
		},
		{
			name: "22",
			id: 2
		},
		{
			name: "3",
			id: 3
		},
		{
			name: "4",
			id: 4
		},
		{
			name: "5",
			id: 5
		}
	]
function getArticlesAll(){
	/*$.ajax({
		url: "http://"+host+"/api/article/articles",
		type: "GET",
		processData: false,
		success: function(data) {*/
		    var source   = $("#list").html();
		    var template = Handlebars.compile(source);
		    $('#articles').html(template(articles));
		    $('.btn-view').click(function(event){
				showArticle(event.currentTarget.id);
			})
		/*},
		error: function(data) {
		    console.error(data.status)
		}
	});*/
}
function getArticle(id){
	/*$.ajax({
		url: "http://"+host+"/api/article/articles",
		type: "GET",
		processData: false,
		success: function(data) {*/
		    var source   = $("#item").html();
		    var template = Handlebars.compile(source);
		    $('#articles').html(template(articles[id-1]));
		/*},
		error: function(data) {
		    console.error(data.status)
		}
	});*/
}
getArticlesAll()