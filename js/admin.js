$( "#enter" ).click(function() {
  $.ajax({
    url: "http://"+host+"/api/admin/login?email="+$('#email').val()+"&password="+$('#pwd').val(),
    type: "GET",
    success: function(data) {
        console.log($("#remember").prop('checked'));
        if($("#remember").prop('checked')){
            var date = new Date;
            date.setDate(date.getDate() + 14);
            document.cookie = 'Authorization='+data.token+'; expires='+date.toUTCString();
        }else{
            document.cookie = 'Authorization='+data.token;
        }
        window.location.href = "admin-panel.html"
    },
    error: function() {
        $(".error").html("Произошла ошибка");
    }
  });
});
