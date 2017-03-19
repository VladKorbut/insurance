getComments();
function getComments(){
    $.ajax({
        url: "http://"+host+"/api/comment/comments",
        type: "GET",
        success: function(data) {
        	var source   = $("#template").html();
    		var template = Handlebars.compile(source);
    		$('.comments').html(template(data));
            $( ".delete" ).click(function(data) {
                deleteComment(data.currentTarget.id)
            })
            $( ".delete-answer" ).click(function(data) {
                deleteAnswer(data.currentTarget.id)
            })
            $( ".update-answer" ).click(function(data) {
                udpateAnswer(data.currentTarget.id)
            })
            $( ".create-answer" ).click(function(data) {
                createAnswer(data.currentTarget.id)
            })
        },
        error: function() {

        }
    });
}

function deleteComment(id){
    $.ajax({
        url: "http://"+host+"/api/admin/deletecomment?id="+id,
        type: "GET",
        headers: {
            "Content-Type":"application/x-www-form-urlencoded",
            Authorization: getCookie('Authorization')
        },
        success: function(data) {
            getComments();
        },
        error: function() {
            alert("Не удалось удалить отзыв");
        }
    });
}



function deleteAnswer(id){
    $.ajax({
        url: "http://"+host+"/api/admin/deleteanwser?id="+id,
        type: "GET",
        headers: {
            "Content-Type":"application/x-www-form-urlencoded",
            Authorization: getCookie('Authorization')
        },
        success: function(data) {
            console.log(data)
            getComments();
        },
        error: function() {
            alert("Не удалось удалить ответ на отзыв");
        }
    });
}

function udpateAnswer(id){
    $.ajax({
        url: "http://"+host+"/api/admin/anwserupdate",
        type: "POST",
        headers: {
            Authorization: getCookie('Authorization')
        },
        data:{
            text:$('#answer'+id).val(),
            id: id
        },
        success: function(data) {
            console.log(data)
            getComments();
        },
        error: function() {
            alert("Не удалось удалить ответ на отзыв");
        }
    });
}

function createAnswer(id){
    console.log($.ajax({
        url: "http://"+host+"/api/admin/anwser",
        type: "POST",
        headers: {
            Authorization: getCookie('Authorization')
        },
        data:{
            anwser:$('#create-answer'+id).val(),
            comment_id: id
        },
        success: function(data) {
            console.log($('#create-answer'+id).val(), id)
            console.log(data)
            getComments();
        },
        error: function() {
            alert("Не удалось удалить ответ на отзыв");
        }
    }));
}