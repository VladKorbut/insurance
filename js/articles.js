$( "#send" ).click(function() {
    createArticle()
    console.log($('#file').get(0).files[0]);
})

function createArticle(){
	var file = $('#file').get(0).files[0];
	$.ajax({
        url: "http://"+host+"/api/article/newArticle",
        type: "POST",
        processData: false,
        headers: {
        	"Content-Type":"application/octet-stream",
            Authorization: getCookie('Authorization')
        },
        data:{
        	text: $('#article').val()
        },
        file:file,
        success: function(data) {
            console.log(data)
            getComments();
        },
        error: function() {
            console.error("Не удалось добавить статью");
        }
    });
}