/*! nice Uploader 0.1.0
 * (c) 2012-2013 Jony Zhang <zj86@live.cn>, MIT Licensed
 * http://niceue.com/uploader/
 */
!function(e,t,o){function i(e){for(var t=-1;e>1e3;)e/=1024,t++;return Math.max(e,.1).toFixed(1)+["KB","M","G","T"][t]}function n(e){var t,o={k:1024,m:1048576,g:1073741824};return"string"==typeof e&&(t=/^([0-9]+)([mgk]+)$/.exec(e.toLowerCase().replace(/[^0-9mkg]/g,"")),e=+t[1],e*=o[t[2]]),e}function s(e,t){var o,i,n=e.length;return n>t&&(i=5+(n-e.lastIndexOf(".")-1),o=t-i-3,o%2&&(o-=1),e=e.substr(0,o)+"..."+e.substr(-i)),e}function a(e){if(!e)return"";if("object"==typeof e)return t.extend(c,e);var o=c[e]||e,i=arguments;if(i.length>1)for(var n=1,s=i.length;s>n;n++)o=o.replace("{"+n+"}",i[n]);return o}var r="uploader",l=r+1e17*Math.random(),u=t.noop,p={mode:"html5",action:"",name:"file",formData:null,multiple:!1,auto:!0,showQueue:!1,fileSizeLimit:0,fileTypeDesc:"",fileTypeExts:"",onInit:u,onClearQueue:u,onSelected:u,onCancel:u,onError:u,onStart:u,onProgress:u,onSuccess:u,onComplete:u,onAllComplete:u,onMouseOver:u,onMouseOut:u,onMouseClick:u,onAddQueue:function(e,t){var o='<ul>                    <li class="f-name">'+s(e.name,32)+'</li>                    <li class="f-size">'+i(e.size)+'</li>                    <li class="f-progress">'+(t?t.name:"")+'</li>                    <li class="f-operate"><a href="#" class="upload-cancel">&times;</a></li>                    </ul>                    <div class="upload-progress"></div>';return o}},c={600:"Installation error",601:'Please select "{1}" format file',602:"The file size must be less than {1}"},d={};!function(e){var t,o,i,n=e.split(/,/);for(t=0;t<n.length;t+=2)for(i=n[t+1].split(/ /),o=0;o<i.length;o++)d[i[o]]=n[t]}("image/x-icon,ico,image/bmp,bmp,image/gif,gif,image/jpeg,jpeg jpg jpe,image/photoshop,psd,image/png,png,image/svg+xml,svg svgz,image/tiff,tiff tif,text/plain,asc txt text diff log,text/html,htm html xhtml,text/xml,xml,text/css,css,text/csv,csv,text/rtf,rtf,audio/mpeg,mpga mpega mp2 mp3,audio/x-wav,wav,audio/mp4,m4a,audio/ogg,oga,audio/webm,webma,video/mpeg,mpeg mpg mpe,video/quicktime,qt mov,video/mp4,mp4,video/x-m4v,m4v,video/x-flv,flv,video/x-ms-wmv,wmv,video/avi,avi,video/ogg,ogv,video/webm,webmv,video/vnd.rn-realvideo,rv,application/msword,doc dot,application/pdf,pdf,application/pgp-signature,pgp,application/postscript,ps ai eps,application/rtf,rtf,application/vnd.ms-excel,xls xlb,application/vnd.ms-powerpoint,ppt pps pot,application/zip,zip,application/x-rar-compressed,rar,application/x-shockwave-flash,swf swfl,application/vnd.openxmlformats-officedocument.wordprocessingml.document,docx,application/vnd.openxmlformats-officedocument.wordprocessingml.template,dotx,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,xlsx,application/vnd.openxmlformats-officedocument.presentationml.presentation,pptx,application/vnd.openxmlformats-officedocument.presentationml.template,potx,application/vnd.openxmlformats-officedocument.presentationml.slideshow,ppsx,application/x-javascript,js,application/json,json,application/java-archive,jar war ear,application/vnd.oasis.opendocument.formula-template,otf,application/octet-stream,exe");var f=function(){};f.extend=function(e){var t,o,i,n,s=this.prototype,a=s;for("function"==typeof e&&(e=e.call(s)),i=e.__construct;!i;)i=a.constructor,a=a.__super();o=new this("!-");for(n in e)o[n]=e[n];return t=function(){"!-"!==arguments[0]&&i.apply(this,arguments)},o.constructor=t,o.__super=function(e,t){return e?s[e].apply(this,t?t:arguments.callee.caller.arguments):s},t.prototype=o,t.extend=arguments.callee,t};var h=f.extend(function(){function s(e,t,o){var i="progress"===t;this.type=t,this.timeStamp=e&&e.timeStamp||+new Date,this.loaded=i?e.loaded:0,this.total=i?e.total:0,this.lengthComputable=i?e.lengthComputable:!1,this.file=o}function u(e,t){this.id=e,this.name=t.name,this.size=t.size,this.type=t.type?t.type.length<6?d[t.type]:t.type:d[t.name.split(".").pop()],this.lastModifiedDate=new Date(+t.lastModifiedDate),t.error&&(this.error=t.error)}function p(e){var t=e.code||+e.message,o={600:"Installation Error",601:"Type Error",602:"Size Error"};t&&(this.code=t,e.name=e.name||o[t]||"HTTP Error",e.message=e.message||t),e.file&&(this.file=e.file),this.type="error",this.name=a(e.name||"Error"),this.message=e.params?a.apply(null,[e.message].concat(e.params)):a(e.message)}function c(e){for(var t=this.queue,o=t.length;o--;)if(t[o].id===e)return t[o]}function f(e){var t=e.substr(e.lastIndexOf(".")+1);return this.acceptExts[t]}function m(e,t){return i(1e3*e/t)+"/s"}function v(e){var o=t("#"+this.id+"___"+this.loadId),i=o.find(".upload-progress");i.animate({width:e},200),o.find(".f-progress").text(e),"100%"===e&&i.delay(2e3).fadeOut(800,function(){t(this).parent().remove()})}return{__construct:function(t,i){var n,s=t[l],a=r+"_";s!==o?(a+=s,n=e[a],n&&n.destroy()):(s=h.guid++,a+=s,t[l]=s),this.id=a,this.options=i,this.element=t,this.init(),e[a]=this},init:function(){var e=this,o=t(e.element),i=e.options,n=o.outerWidth(),s=o.outerHeight(),a="width:"+n+"px;height:"+s+"px;",r="margin-left:-"+(n+parseInt(o.css("marginRight")))+"px;left:"+o.css("left")+";top:0;",l="position:absolute;margin:0;padding:0;border:0;cursor:pointer;font-size:200px;filter:alpha(opacity=0);opacity:0;";i.showQueue&&("string"==typeof i.showQueue?e.$queue=t(i.showQueue).addClass("upload-queue"):(o.after('<div class="upload-queue" id="'+e.id+'_queue"></div>'),e.$queue=t("#"+e.id+"_queue"))),e.$browseEl=t('<span class="upload-el" style="position:relative;line-height:0;font-size:0;vertical-align:top;"><span style="position:absolute;overflow:hidden;'+a+r+'">'+e.create(l+a)+"</span></span>"),o.after(e.$browseEl),e.$el=o,e.browse=t("#"+e.id)[0],e.queue=[],e.acceptExts=function(e){if("*"===e)return e;var o={};return t.each(e.split("|").join(",").split(","),function(e,t){o[t]=1}),o}(i.fileTypeExts),i.onInit.call(e)},setOption:function(e,o){var i=this.options;"string"==typeof e?i[e]=o:"object"==typeof e&&t.extend(i,e)},start:function(e){var t=this.queue;t.length?t[0].error?(t.shift(),this.start(!0)):this.upload(t[0].id):e&&this.onAllComplete.call(this)},remove:function(e){this.$queue&&t("#"+this.id+"___"+e).delay(1e3).fadeOut(500).remove()},destroy:function(){this.$browseEl&&this.$browseEl.remove(),this.$queue&&this.$queue.remove(),delete e[this.id]},getFile:function(e){return this.validId(e)?this.files[e]:null},validId:function(e){for(var t=this.queue.length;t--;)if(this.queue[t].id===e)return!0},onSelected:function(e){var o,i=this,s=i.options,a=s.fileTypeExts.split("|").join(","),r=n(s.fileSizeLimit),l="",c=e.length;i.queue=[],i.files={},t.each(e,function(e,t){var n;return o=new u(+e,t),"*"===i.acceptExts||f.call(i,t.name)?(r>0&&o.size>r&&(o.error="Size Error",n=new p({code:602,params:[s.fileSizeLimit.toUpperCase()],file:o}),i.onError(n,!1)),i.files[e]=t,i.queue[e]=o,void(i.$queue&&(l+='<div class="queue'+(e+1===c?" last-queue":"")+(n?" upload-error":"")+'" id="'+i.id+"___"+e+'">',l+=s.onAddQueue.call(i,t,n)+"</div>"))):void i.onError({code:601,params:[a]},!1)}),i.$queue&&i.$queue.html(l),s.onSelected.call(this,i.queue)!==!1&&s.auto&&i.start()},onStart:function(e){var t=this,o=t.queue[0];t.loadId=o.id,t.loadFile=o,e=new s(e,"loadstart",o),o._t=e.timeStamp-1,o._l=0,h.uploading=!0,t.options.onStart.call(t,e)},onProgress:function(e){var t=this,o=t.loadFile;e=new s(e,"progress",o),e.lengthComputable&&(e.speed=m(e.loaded-o._l,e.timeStamp-o._t),t.$queue&&v.call(t,(e.loaded/e.total*100).toFixed(1)+"%"),o._t=e.timeStamp,o._l=e.loaded),t.options.onProgress.call(t,e)},onCancel:function(e){var o;t.each(this.queue,function(t,i){return i.id===+e?(o=t,!1):void 0}),this.remove(e),this.options.onCancel.call(this,this.queue.splice(o,1))},onClearQueue:function(){this.queue=[],this.$queue&&(this.$queue[0].innerHTML=""),this.browse.style.display="",h.uploading=!1,this.options.onClearQueue.call(this)},onError:function(e,o){var i=this.options,n=e.id||this.loadId||null,s=n?e.file||c.call(this,n):null;e.file=s,e=new p(e),i.language&&e.code&&i.language[e.code]&&(e.message=i.language[e.code]),null!==n&&(this.$queue&&t("#"+this.id+"___"+n).addClass("upload-error").find(".f-progress").text(e.name),o!==!1&&this.onComplete()),this.options.onError.call(this,e)},onSuccess:function(e){var t=new s(null,"load",this.loadFile);t.data=e,v.call(this,"100%"),this.options.onSuccess.call(this,t),this.onComplete()},onComplete:function(){var e=new s(null,"loadend",this.queue.shift());this.options.onComplete.call(this,e),this.start(!0)},onAllComplete:function(){var e=this;e.files={},e.queue=[],e.loadId=0,e.loadFile=null,h.uploading=!1,e.options.onAllComplete.call(e)},onMouseOver:function(){this.$el.addClass("upload-btn-over"),this.options.onMouseOver.call(this,this.$btn)},onMouseOut:function(){this.$el.removeClass("upload-btn-over"),this.options.onMouseOut.call(this,this.$btn)},onMouseClick:function(){this.$el.trigger("click"),this.options.onMouseClick.call(this,this.$btn)}}});e.FormData&&(new XMLHttpRequest).upload&&(h.html5=h.extend(function(){function e(){var e,t,o=[],i=this.options.fileTypeExts.replace("|",",").split(","),n=i.length;if(n){for(e=0;n>e;e++)t=i[e],d[t]&&o.push("csv"===t?".csv":d[t]);return o.join(",")}}function o(){return this.xhr=this.xhr||new XMLHttpRequest,this.xhr}var i={loadstart:"onStart",progress:"onProgress",error:"onError",load:"onSuccess",loadend:"onComplete"};return{create:function(t){return'<input type="file" id="'+this.id+'" class="uploader" style="'+t+'" accept="'+e.call(this)+'"'+(this.options.multiple?" multiple":"")+">"},upload:function(e){var n,s,a,r=this,l=r.options;a=r.getFile(e),a&&(s=new FormData,s.append(l.name,a),l.formData&&t.each(t.isFunction(l.formData)?l.formData.call(r):l.formData,function(e,t){s.append(e,t)}),n=o.call(r),n.open(l.method||"POST",l.action,!0),n.onreadystatechange=function(){4===n.readyState&&(200===n.status?r.onSuccess(n.responseText):r.onError({code:n.status}))},n.upload.onloadstart=n.upload.onprogress=n.upload.onerror=function(e){r[i[e.type]](e)},t.each({"Cache-Control":"no-cache","X-Requested-With":"XMLHttpRequest"},function(e,t){n.setRequestHeader(e,t)}),n.withCredentials=!0,n.send(s))},cancel:function(e){var t=this,o=t.queue;if("*"===e)t.xhr&&t.xhr.readyState>0&&t.xhr.abort(),t.onClearQueue();else{if(!o.length)return;e||(e=o[0].id),t.xhr&&t.xhr.readyState>0&&e===t.loadId&&t.xhr.abort(),t.onCancel(e)}},destroy:function(){this.browse&&this.browse.parentNode.removeChild(this.browse),this.xhr=null,this.__super("destroy")}}})),p.swf=function(){var e,t=document.getElementsByTagName("script"),o=t[t.length-1],i=o.getAttribute("src");return i||(i=""),e=i.split("/").slice(0,-1).join("/"),e&&(e+="/"),e+"uploader.swf"}(),h.flash=h.extend(function(){function o(e){if(e.src){var t=e.src+(-1!==e.src.indexOf("?")?"&":"?")+"__="+s,o="",i={type:"application/x-shockwave-flash"},a={wmode:"transparent",allowScriptAccess:"always"},r=function(e){var t,o="";for(t in e)o+=" "+t+'="'+e[t]+'"';return o};if(function(t){for(var o,n=t.length,s={};n--;)s[t[n]]=1;for(o in e)s[o]?i[o]=e[o]:a[o]=e[o]}("width height id class style".split(" ")),a.src=t,n){i.codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,28,0",i.classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000",o+="<object"+r(i)+">";for(var l in a)o+='<param name="'+l+'" value="'+a[l]+'">';o+="</object>"}else o+="<embed"+r(a)+r(i)+">";return o}}function i(e){n?(e.style.display="none",function(){if(4===e.readyState){for(var t in e)"function"==typeof e[t]&&(e[t]=null);e.parentNode.removeChild(e)}else setTimeout(arguments.callee,15)}()):e.parentNode.removeChild(e)}var n=!!e.ActiveXObject,s=+new Date;return{create:function(e){var i=this.options,n={id:this.id,path:function(){var e=location.pathname.split("/");return e.pop(),e.join("/")+"/"}(),action:i.action,field:i.name,src:i.swf,desc:i.fileTypeDesc,ext:i.fileTypeExts};return i.multiple&&(n.multiple=1),i.debug&&(n.debug=1),i.method&&(n.method=i.method),o({src:i.swf,style:e,id:this.id,"class":"uploader",flashvars:t.param(n)})},upload:function(e){var o=this,i=o.options;i.formData&&o.browse.setData(t.param(t.isFunction(i.formData)?i.formData.call(o):i.formData)),o.validId(e)&&o.browse.startUpload(""+e)},cancel:function(e){var t=this.queue;t.length&&(e||(e=t[0].id)),this.browse.cancelUpload(e)},destroy:function(){i(this.browse),this.__super("destroy")}}}),t(function(){var o=t("body");o.on("input change."+r,":file."+r,function(){e[this.id].onSelected(this.files)}).on("click."+r,":file."+r,function(){e[this.id].onMouseClick()}),o.on("mouseenter."+r,"div.upload-btn-wrap",function(){e[this.firstChild.id].onMouseOver()}).on("mouseleave."+r,"div.upload-btn-wrap",function(){e[this.firstChild.id].onMouseOut()}),o.on("click."+r,"a.upload-cancel",function(o){var i=t(this).closest(".queue"),n=i.attr("id").split("___");i.hasClass("upload-error")?i.remove():e[n[0]].cancel(n[1]),o.preventDefault()})}),h.guid=0,h.uploading=!1,h.defaults=p,h.mimes=d,h.lang=c,h.i18n=a,h.stringifySize=i,h.parseSize=n,h.getShortName=s,t.uploader=h,t.fn.uploader=function(i){var n,s=arguments,a=this[0][l];return a!==o&&(n=r+"_"+a),s.length?("string"==typeof i&&"on"!==i.substr(0,2)?n&&e[n][i].apply(e[n],Array.prototype.slice.call(s,1)):(this.off("remove."+r).on("remove."+r,function(){e[this[l]].destroy()}),i=t.extend({},p,i),i.fileTypeExts=i.fileTypeExts.replace(/ /g,""),h[i.mode]||(i.mode="flash"),this.each(function(){new h[i.mode](this,i)})),this):n?e[n]:null},a({400:"(400)请求无效",404:"(404)请求的资源不存在",500:"(500)内部服务器错误",501:"(501)未执行",502:"(502)连接超时",600:"初始化上传发生错误",601:"请选择“{1}”格式的文件",602:"文件尺寸不能大于{1}"})}(window,jQuery);