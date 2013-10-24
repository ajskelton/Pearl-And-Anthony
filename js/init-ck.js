/*
	Helios 1.0 by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*//*********************************************************************************//* Settings                                                                      *//*********************************************************************************/var helios_settings={header:{fullScreen:!0,fadeIn:!0,fadeDelay:500},carousels:{speed:4,fadeIn:!0,fadeDelay:250},dropotron:{mode:"fade",speed:350,noOpenerFade:!0,alignment:"center",offsetX:-1,offsetY:-16},skelJS:{prefix:"css/style",resetCSS:!0,boxModel:"border",grid:{gutters:48},breakpoints:{widest:{range:"1680-",hasStyleSheet:!1,containers:1400},wide:{range:"-1680",containers:1200},normal:{range:"-1280",containers:"fluid",grid:{gutters:36},viewportWidth:1140},narrow:{range:"-960",containers:"fluid",grid:{gutters:32}},narrower:{range:"-840",containers:"fluid",grid:{gutters:32,collapse:!0}},mobile:{range:"-640",containers:"fluid",grid:{gutters:32,collapse:!0},lockViewport:!0}}},skelJSPlugins:{panels:{transformBreakpoints:"mobile",panels:{navPanel:{breakpoints:"mobile",position:"top",size:"75%",html:'<div data-action="navList" data-args="nav"></div>'}},overlays:{navButton:{breakpoints:"mobile",position:"top-center",width:100,height:50,html:'<div class="toggle" data-action="togglePanel" data-args="navPanel"></div>'}}}}};skel.init(helios_settings.skelJS,helios_settings.skelJSPlugins);jQuery.fn.n33_scrolly=function(){jQuery(this).click(function(e){var t=jQuery(this).attr("href"),n;if(t.charAt(0)=="#"&&t.length>1&&(n=jQuery(t)).length>0){var r=Math.max(n.offset().top,0);e.preventDefault();jQuery("body,html").animate({scrollTop:r},1500,"swing")}})};jQuery.n33_preloadImage=function(e,t){var n=$("<img />"),r=navigator.userAgent.match(/MSIE ([0-9]+)\./)?parseInt(RegExp.$1):99;n.attr("src",e);n.get(0).complete||r<9?t():n.load(t)};jQuery.fn.n33_formerize=function(){var e=new Array,t=jQuery(this);t.find("input[type=text],textarea").each(function(){var e=jQuery(this);if(e.val()==""||e.val()==e.attr("placeholder")){e.addClass("formerize-placeholder");e.val(e.attr("placeholder"))}}).blur(function(){var e=jQuery(this);if(e.attr("name").match(/_fakeformerizefield$/))return;if(e.val()==""){e.addClass("formerize-placeholder");e.val(e.attr("placeholder"))}}).focus(function(){var e=jQuery(this);if(e.attr("name").match(/_fakeformerizefield$/))return;if(e.val()==e.attr("placeholder")){e.removeClass("formerize-placeholder");e.val("")}});t.find("input[type=password]").each(function(){var e=jQuery(this),t=jQuery(jQuery("<div>").append(e.clone()).remove().html().replace(/type="password"/i,'type="text"').replace(/type=password/i,"type=text"));e.attr("id")!=""&&t.attr("id",e.attr("id")+"_fakeformerizefield");e.attr("name")!=""&&t.attr("name",e.attr("name")+"_fakeformerizefield");t.addClass("formerize-placeholder").val(t.attr("placeholder")).insertAfter(e);e.val()==""?e.hide():t.hide();e.blur(function(e){e.preventDefault();var t=jQuery(this),n=t.parent().find("input[name="+t.attr("name")+"_fakeformerizefield]");if(t.val()==""){t.hide();n.show()}});t.focus(function(e){e.preventDefault();var t=jQuery(this),n=t.parent().find("input[name="+t.attr("name").replace("_fakeformerizefield","")+"]");t.hide();n.show().focus()});t.keypress(function(e){e.preventDefault();t.val("")})});t.submit(function(){jQuery(this).find("input[type=text],input[type=password],textarea").each(function(e){var t=jQuery(this);t.attr("name").match(/_fakeformerizefield$/)&&t.attr("name","");if(t.val()==t.attr("placeholder")){t.removeClass("formerize-placeholder");t.val("")}})}).bind("reset",function(t){t.preventDefault();jQuery(this).find("select").val(jQuery("option:first").val());jQuery(this).find("input,textarea").each(function(){var e=jQuery(this),t;e.removeClass("formerize-placeholder");switch(this.type){case"submit":case"reset":break;case"password":e.val(e.attr("defaultValue"));t=e.parent().find("input[name="+e.attr("name")+"_fakeformerizefield]");if(e.val()==""){e.hide();t.show()}else{e.show();t.hide()}break;case"checkbox":case"radio":e.attr("checked",e.attr("defaultValue"));break;case"text":case"textarea":e.val(e.attr("defaultValue"));if(e.val()==""){e.addClass("formerize-placeholder");e.val(e.attr("placeholder"))}break;default:e.val(e.attr("defaultValue"))}});window.setTimeout(function(){for(x in e)e[x].trigger("formerize_sync")},10)});return t};(function(){var e=jQuery(window),t=[],n=10,r=0,i,s=function(){var n=t.length,r=e.scrollTop()+e.height(),i,s;for(i=0;i<n;i++){s=t[i];if(!s.state&&r-s.pad>s.o.offset().top){s.state=!0;s.fn()}}};e.load(function(){e.on("scroll resize",function(){window.clearTimeout(i);i=window.setTimeout(function(){s()},n)}).trigger("resize")});jQuery.fn.n33_onVisible=function(e,n){t.push({o:jQuery(this),fn:e,pad:n?n:r,state:!1})}})();jQuery(function(){var e=$(window),t=$("body"),n=$("#header"),r=navigator.userAgent.match(/MSIE ([0-9]+)\./)?parseInt(RegExp.$1):99,i="ontouchstart"in window,s=!!navigator.userAgent.match(/(iPod|iPhone|iPad|Android|IEMobile)/);t.addClass("paused");e.load(function(){t.removeClass("paused")});r<10&&$("form").n33_formerize();$(".scrolly").n33_scrolly();$("#nav > ul").dropotron(helios_settings.dropotron);$(".carousel").each(function(){var t=$(this),n=$('<span class="forward"></span>'),s=$('<span class="backward"></span>'),o=t.children(".reel"),u=o.children("article"),a=0,f,l,c,h,p;if(helios_settings.carousels.fadeIn){u.addClass("loading");t.n33_onVisible(function(){var t,n=u.length-Math.ceil(e.width()/c);t=window.setInterval(function(){var e=u.filter(".loading"),i=e.first();if(e.length<=n){window.clearInterval(t);u.removeClass("loading");return}if(r<10){i.fadeTo(750,1);window.setTimeout(function(){i.removeClass("loading")},50)}else i.removeClass("loading")},helios_settings.carousels.fadeDelay)},50)}t._update=function(){a=0;l=-1*h+e.width();f=0;t._updatePos()};r<9?t._updatePos=function(){o.css("left",a)}:t._updatePos=function(){o.css("transform","translate("+a+"px, 0)")};n.appendTo(t).hide().mouseenter(function(e){p=window.setInterval(function(){a-=helios_settings.carousels.speed;if(a<=l){window.clearInterval(p);a=l}t._updatePos()},10)}).mouseleave(function(e){window.clearInterval(p)});s.appendTo(t).hide().mouseenter(function(e){p=window.setInterval(function(){a+=helios_settings.carousels.speed;if(a>=f){window.clearInterval(p);a=f}t._updatePos()},10)}).mouseleave(function(e){window.clearInterval(p)});e.load(function(){h=o[0].scrollWidth;skel.onStateChange(function(){if(i){o.css("overflow-y","hidden").css("overflow-x","scroll").scrollLeft(0);n.hide();s.hide()}else{o.css("overflow","visible").scrollLeft(0);n.show();s.show()}t._update()});e.resize(function(){h=o[0].scrollWidth;t._update()}).trigger("resize")})});if(s){n.css("background-attachment","scroll");helios_settings.header.fullScreen=!1}if(t.hasClass("homepage")){helios_settings.header.fullScreen&&e.bind("resize.helios",function(){window.setTimeout(function(){var t=n.children(".inner"),r=t.outerHeight(),i=e.height(),s=Math.ceil((i-r)/2)+1;n.css("padding-top",s).css("padding-bottom",s)},0)}).trigger("resize");if(helios_settings.header.fadeIn){$('<div class="overlay" />').appendTo(n);e.load(function(){var e=n.css("background-image").replace(/"/g,"").replace(/url\(|\)$/ig,"");$.n33_preloadImage(e,function(){r<10?n.children(".overlay").fadeOut(2e3):window.setTimeout(function(){n.addClass("ready")},helios_settings.header.fadeDelay)})})}}});