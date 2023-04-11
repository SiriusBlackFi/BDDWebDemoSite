$('body').on('click','a:not(.nocg)',function(e){e.preventDefault();var thisTarget=$(this).attr("target");var aHref=$(this).attr("href");var x=window.location.pathname.replace("http://","")
var xArr=x.split("/");xArr=lastArr(xArr)
var href=$(this).attr("href");var y=this.href.replace("http://","")
var yArr=y.split("/");yArr=lastArr(yArr);function lastArr(arr){var last=arr.pop()
if(last.indexOf("#")>-1){arr.push(last)}else if(last.indexOf("html")>0){arr.push(last)}else if(last==""){arr.push('index.html')}else{arr.push(last)
arr.push('index.html')}
return arr}
if(thisTarget=="_blank"||e.ctrlKey||e.metaKey){window.open(aHref);}else if(y.indexOf('jpg')>-1||y.indexOf('javascript')>-1){}else if(xArr.length==yArr.length&&xArr[xArr.length-1]==yArr[yArr.length-1]&&xArr[xArr.length-2]==yArr[yArr.length-2]&&xArr[xArr.length-3]==yArr[yArr.length-3]){}else{randonAnimte(href);}})
function randonAnimte(href){var i=Math.floor(Math.random()*Math.floor(4))+1;switch(1){case 1:pagechange.CG_A(href)
break;default:break;}}
var pagechange={CG_A:function(href){$("html,body").delay(100).animate({opacity:"0"},{queue:true,duration:600,easing:"easeOutQuad",complete:function(){window.location.assign(href);}});}}
jQuery.easing['jswing']=jQuery.easing['swing'];jQuery.extend(jQuery.easing,{def:'easeOutQuad',easeOutQuad:function(x,t,b,c,d){return-c*(t/=d)*(t-2)+b;},easeInOutCirc:function(x,t,b,c,d){if((t/=d/2)<1)return-c/2*(Math.sqrt(1-t*t)-1)+b;return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b;},});