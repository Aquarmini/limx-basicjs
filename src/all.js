function dump(n){console.log(n)}
function CanvasCompress(n,t,i,r){var f=n.currentTarget.files[0],u=new FileReader;u.onload=function(n){var u=$("<img/>");u.on("load",function(){var n,e,h;t==0&&i==0?(t=100,i=100):t==0?t=i/this.height*this.width:i==0&&(i=t/this.width*this.height);n=document.createElement("canvas");n.width=t;n.height=i;e=n.getContext("2d");e.clearRect(0,0,t,i);var u,f,o=0,s=0,c=this.width/t,l=this.height/i;c>l?(u=Math.round(i*this.width/this.height),f=i,o=-Math.round((u-t)/2)):(f=Math.round(t*this.height/this.width),u=t,s=-Math.round((f-i)/2));e.drawImage(this,o,s,u,f);h=n.toDataURL("image/jpeg");r(h)});u.attr("src",n.target.result)};u.readAsDataURL(f)}function CanvasImgCompress(n,t,i,r){var u=$("<img/>");u.on("load",function(){var n,e,h;t==0&&i==0?(t=100,i=100):t==0?t=i/this.height*this.width:i==0&&(i=t/this.width*this.height);n=document.createElement("canvas");n.width=t;n.height=i;e=n.getContext("2d");e.clearRect(0,0,t,i);var u,f,o=0,s=0,c=this.width/t,l=this.height/i;c>l?(u=Math.round(i*this.width/this.height),f=i,o=-Math.round((u-t)/2)):(f=Math.round(t*this.height/this.width),u=t,s=-Math.round((f-i)/2));e.drawImage(this,o,s,u,f);h=n.toDataURL("image/jpeg");r(h)});u.attr("src",n)}function isCanvasSupported(){var n=document.createElement("canvas");return!!(n.getContext&&n.getContext("2d"))}function CanvasRotate(n,t){var i=$("<img/>");i.on("load",function(){var n=document.createElement("canvas"),i,r;n.width=this.height;n.height=this.width;i=n.getContext("2d");i.clearRect(0,0,n.width,n.height);i.translate(Math.round(n.width),Math.round(0));i.rotate(.5*Math.PI);i.drawImage(this,0,0,n.height,n.width);r=n.toDataURL("image/jpeg");t(r)});i.attr("src",n)}function CanvasReader(n,t){var r=n.currentTarget.files[0],i=new FileReader;i.onload=function(n){var i=$("<img/>");i.on("load",function(){var n=document.createElement("canvas"),i,r;n.width=this.width;n.height=this.height;i=n.getContext("2d");i.clearRect(0,0,this.width,this.height);i.drawImage(this,0,0,this.width,this.height);r=n.toDataURL("image/jpeg");t(r)});i.attr("src",n.target.result)};i.readAsDataURL(r)}
