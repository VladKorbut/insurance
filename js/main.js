var host = '82.196.1.13'
if(window.location.href.indexOf("admin-panel")+1 && !getCookie('Authorization')){
    window.location.href = "/admin.html"
}else{
    
}

function getCookie(name) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}