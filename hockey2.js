//my goal is to store my price variable across each page. so far no success.


function creatCookie(name, value, days, path, domain, secure) {
   if(days) {
      var date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      var expires = date.toGMTString();
   }
   else var expires = "";
   cookieString = name + "=" + escape(value);
   if(expires) cookieString +="; expires=" + expires;
   if(path) cookieString +="; path=" + path;
   if(domain) cookieString +="; domain=" + domain;
   if(secure) cookieString +="; secure=" + secure;
   document.cookie = cookieString;
   
}
function getCookie(name) {
   var CookieName = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(CookieName) == 0) return c.substring(CookieName.length,c.length);
    }
    return "";
}

function cookie2(){
  x = getElementById("price").value;

   alert(x);
}


var oldPrice = getCookie();

var total = 0;
creatCookie("price",total);

//This Works Hurrary
function display() {
  if (window.location.pathname == "/Users/joecellino/Desktop/Hockey/PageTwo.html")   document.getElementById('price').value = total;
  if (window.location.pathname == "/Users/joecellino/Desktop/Hockey/PageThree.html")   document.getElementById('price2').value = total;
}

function save(x){
   total = x;
   display();
   console.log(total);
}



/*
$(document).ready(function(){
   ('#continue').click(function(){
      creatCookie("price",total); 
   });
});*/
