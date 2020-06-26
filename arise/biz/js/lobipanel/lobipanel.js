Math.randomString=function(a){for(var b="",c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",d=0;d<a;d++)b+=c.charAt(Math.floor(Math.random()*c.length));return b},String.prototype.getCss=function(){for(var a={},b=this.valueOf().split(";"),c=0;c<b.length;c++)if(b[c]=$.trim(b[c]),b[c]){var d=b[c].split(":");a[$.trim(d[0])]=$.trim(d[1])}return a},String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")},String.prototype.toCamel=function(){return this.replace(/(\-[a-z])/g,function(a){return a.toUpperCase().replace("-","")})},String.prototype.toDash=function(){return this.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})},String.prototype.toUnderscore=function(){return this.replace(/([A-Z])/g,function(a){return"_"+a.toLowerCase()})},Number.prototype.isBetween=function(a,b,c){if(c){if(this.valueOf()<=b&&this.valueOf()>=a)return!0}else if(this.valueOf()<b&&this.valueOf()>a)return!0;return!1},$.fn.insertAt=function(a,b){var c=b;if("string"==typeof b&&(c=$(b)),a=Math.min(c.children().length,a),0==a)return c.prepend(this),this;var d=this.data("index");return this.attr("data-index",a),c.find(">*:nth-child("+a+")").after(this),c.children().each(function(b,c){var e=$(c);d<a&&b>d&&b<=a?e.attr("data-index",parseInt(e.data("data-index"),10)-1):d>=a&&b>a&&b<=d&&e.attr("data-index",parseInt(e.attr("data-index"),10)+1)}),this},$.fn.disableSelection=function(){return this.attr("unselectable","on").css("user-select","none").on("selectstart",!1)},$.fn.enableSelection=function(){return this.removeAttr("unselectable").css("user-select","initial").off("selectstart")},$(function(){var LobiPanel=function($el,options){this.$el=null,this.$options={},this.hasRandomId=!1,this.storage=null;var $heading,$body,innerId,storagePrefix="lobipanel_",me=this,_processInput=function(a){a||(a={});var b=_getOptionsFromAttributes();a=$.extend({},$.fn.lobiPanel.DEFAULTS,me.storage,a,b);for(var c=["unpin","reload","expand","minimize","close","editTitle"],d=0;d<c.length;d++){var e=c[d];"object"==typeof a[e]&&(a[e]=$.extend({},$.fn.lobiPanel.DEFAULTS[e],a[e],b[e]))}return a},_init=function(){me.$el.addClass("lobipanel"),$heading.append(_generateControls());var a=me.$el.parent();_appendInnerIdToParent(a,innerId),_enableSorting(),_adjustForScreenSize(),_onToggleIconsBtnClick(),_enableResponsiveness(),_setBodyHeight(),me.$options.autoload&&me.load(),_triggerEvent("init")},_generateControls=function(){var a=_generateDropdown(),b=a.find(".dropdown-menu");return me.$options.editTitle!==!1&&b.append(_generateEditTitle()),me.$options.unpin!==!1&&b.append(_generateUnpin()),me.$options.reload!==!1&&b.append(_generateReload()),me.$options.minimize!==!1&&b.append(_generateMinimize()),me.$options.expand!==!1&&b.append(_generateExpand()),me.$options.close!==!1&&b.append(_generateClose()),b.find(">li>a").on("click",function(a){a.preventDefault(),a.stopPropagation()}),a},_generateDropdown=function(){return $('<div class="dropdown"></div>').append('<ul class="dropdown-menu dropdown-menu-right"></ul>').append('<div class="dropdown-toggle" data-toggle="dropdown"><span class="'+LobiPanel.PRIVATE_OPTIONS.iconClass+" "+me.$options.toggleIcon+'"></div>')},_generateEditTitle=function(){var a=me.$options.editTitle,b=$('<a data-func="editTitle"></a>');return b.append('<i class="'+LobiPanel.PRIVATE_OPTIONS.iconClass+" "+a.icon+'"></i>'),a.tooltip&&"string"==typeof a.tooltip&&(b.append('<span class="control-title">'+a.tooltip+"</span>"),b.attr("data-tooltip",a.tooltip)),_onEditTitleClick(b),$("<li></li>").append(b)},_onEditTitleClick=function(a){a.on("mousedown",function(a){a.stopPropagation()}),a.on("click",function(a){a.stopPropagation(),$heading.find('[data-func="editTitle"]').tooltip("hide"),me.isTitleEditing()?me.finishTitleEditing():me.startTitleEditing()})},_generateUnpin=function(){var a=me.$options.unpin,b=$('<a data-func="unpin"></a>');return b.append('<i class="'+LobiPanel.PRIVATE_OPTIONS.iconClass+" "+a.icon+'"></i>'),a.tooltip&&"string"==typeof a.tooltip&&(b.append('<span class="control-title">'+a.tooltip+"</span>"),b.attr("data-tooltip",a.tooltip)),_onUnpinClick(b),$("<li></li>").append(b)},_onUnpinClick=function(a){a.on("mousedown",function(a){a.stopPropagation()}),a.on("click",function(){me.togglePin()})},_generateReload=function(){var a=me.$options.reload,b=$('<a data-func="reload"></a>');return b.append('<i class="'+LobiPanel.PRIVATE_OPTIONS.iconClass+" "+a.icon+'"></i>'),a.tooltip&&"string"==typeof a.tooltip&&(b.append('<span class="control-title">'+a.tooltip+"</span>"),b.attr("data-tooltip",a.tooltip)),_onReloadClick(b),$("<li></li>").append(b)},_onReloadClick=function(a){a.on("mousedown",function(a){a.stopPropagation()}),a.on("click",function(){me.load({callback:function(){a.tooltip("hide")}})})},_generateMinimize=function(){var a=me.$options.minimize,b=$('<a data-func="minimize"></a>');return b.append('<i class="'+LobiPanel.PRIVATE_OPTIONS.iconClass+" "+a.icon+'"></i>'),a.tooltip&&"string"==typeof a.tooltip&&(b.append('<span class="control-title">'+a.tooltip+"</span>"),b.attr("data-tooltip",a.tooltip)),_onMinimizeClick(b),$("<li></li>").append(b)},_onMinimizeClick=function(a){a.on("mousedown",function(a){a.stopPropagation()}),a.on("click",function(a){a.stopPropagation(),me.toggleMinimize()})},_generateExpand=function(){var a=me.$options.expand,b=$('<a data-func="expand"></a>');return b.append('<i class="'+LobiPanel.PRIVATE_OPTIONS.iconClass+" "+a.icon+'"></i>'),a.tooltip&&"string"==typeof a.tooltip&&(b.append('<span class="control-title">'+a.tooltip+"</span>"),b.attr("data-tooltip",a.tooltip)),_onExpandClick(b),$("<li></li>").append(b)},_onExpandClick=function(a){a.on("mousedown",function(a){a.stopPropagation()}),a.on("click",function(a){a.stopPropagation(),me.toggleSize()})},_generateClose=function(){var a=me.$options.close,b=$('<a data-func="close"></a>');return b.append('<i class="'+LobiPanel.PRIVATE_OPTIONS.iconClass+" "+a.icon+'"></i>'),a.tooltip&&"string"==typeof a.tooltip&&(b.append('<span class="control-title">'+a.tooltip+"</span>"),b.attr("data-tooltip",a.tooltip)),_onCloseClick(b),$("<li></li>").append(b)},_onCloseClick=function(a){a.on("mousedown",function(a){a.stopPropagation()}),a.on("click",function(b){b.stopPropagation(),a.tooltip("hide"),me.close()})},_getMaxZIndex=function(){var a,b,c,d=$(".lobipanel.panel-unpin:not(.panel-minimized.panel-expanded)");if(0===d.length)return{id:"","z-index":LobiPanel.PRIVATE_OPTIONS.initialZIndex};a=$(d[0]).attr("style");var e=$(d[0]).data("inner-id");b=a?a.getCss()["z-index"]:LobiPanel.PRIVATE_OPTIONS.initialZIndex;for(var f=1;f<d.length;f++)a=$(d[f]).attr("style"),c=a?a.getCss()["z-index"]:0,c>b&&(e=$(d[f]).data("inner-id"),b=c);return{id:e,"z-index":parseInt(b,10)}},_onPanelClick=function(){me.$el.on("mousedown.lobiPanel",function(){return!(me.isPinned()||me.isMinimized()||me.isOnFullScreen())&&void me.bringToFront()})},_offPanelClick=function(){me.$el.off("mousedown.lobiPanel")},_changeClassOfControl=function(a){a=$(a);var b=me.$options[a.attr("data-func")];b.icon&&a.find("."+LobiPanel.PRIVATE_OPTIONS.iconClass).toggleClass(b.icon).toggleClass(b.icon2)},_getFooterForMinimizedPanels=function(){var a=$("."+LobiPanel.PRIVATE_OPTIONS.toolbarClass);return 0===a.length&&(a=$('<div class="'+LobiPanel.PRIVATE_OPTIONS.toolbarClass+'"></div>'),$("body").append(a)),a},_expandOnHeaderClick=function(){$heading.on("click.lobiPanel",function(){me.maximize(),me.bringToFront()})},_removeExpandOnHeaderClick=function(){$heading.off("click.lobiPanel")},_getAvailableWidth=function(a){return me.$options.maxWidth&&(a=Math.min(a,me.$options.maxWidth)),me.$options.minWidth&&(a=Math.max(a,me.$options.minWidth)),a},_getAvailableHeight=function(a){return me.$options.maxHeight&&(a=Math.min(a,me.$options.maxHeight)),me.$options.minHeight&&(a=Math.max(a,me.$options.minHeight)),a},_calculateBodyHeight=function(a){return a-$heading.outerHeight()-me.$el.find(".panel-footer").outerHeight()},_calculateBodyWidth=function(a){return a-2},_appendInnerIdToParent=function(a,b){if(void 0===a.attr(LobiPanel.PRIVATE_OPTIONS.parentAttr))a.attr(LobiPanel.PRIVATE_OPTIONS.parentAttr,b);else{if(a.attr(LobiPanel.PRIVATE_OPTIONS.parentAttr).indexOf(b)>-1)return;var c=a.attr(LobiPanel.PRIVATE_OPTIONS.parentAttr);a.attr(LobiPanel.PRIVATE_OPTIONS.parentAttr,c+" "+b)}me.$el.attr("data-index",me.$el.index())},_insertInParent=function(){var a=$("["+LobiPanel.PRIVATE_OPTIONS.parentAttr+"~="+innerId+"]");me.$el.insertAt(me.$el.attr("data-index"),a)},_generateWindow8Spinner=function(){var a=['<div class="spinner spinner-windows8">','<div class="wBall">','<div class="wInnerBall">',"</div>","</div>",'<div class="wBall">','<div class="wInnerBall">',"</div>","</div>",'<div class="wBall">','<div class="wInnerBall">',"</div>","</div>",'<div class="wBall">','<div class="wInnerBall">',"</div>","</div>",'<div class="wBall">','<div class="wInnerBall">',"</div>","</div>","</div>"].join("");return $('<div class="spinner-wrapper">'+a+"</div>")},_enableSorting=function(){var a=me.$el.parent();a.hasClass("ui-sortable")&&a.sortable("destroy"),me.$options.sortable?(me.$el.addClass("lobipanel-sortable"),a.addClass("lobipanel-parent-sortable")):me.$el.removeClass("lobipanel-sortable"),a.sortable({connectWith:".lobipanel-parent-sortable",items:".lobipanel-sortable",handle:".panel-heading",cursor:"move",placeholder:"lobipanel-placeholder",forcePlaceholderSize:!0,opacity:.7,revert:300,update:function(a,b){var c=b.item.data("inner-id");_removeInnerIdFromParent(c),_appendInnerIdToParent(b.item.parent(),c),_updateDataIndices(b.item),_triggerEvent("dragged")}})},_disableSorting=function(){var a=me.$el.parent();a.hasClass("ui-sortable")&&a.sortable("destroy")},_updateDataIndices=function(a){var b=a.parent().find("> *");b.each(function(a,b){$(b).attr("data-index",a)})},_removeInnerIdFromParent=function(a){var b=$("["+LobiPanel.PRIVATE_OPTIONS.parentAttr+"~="+a+"]"),c=b.attr(LobiPanel.PRIVATE_OPTIONS.parentAttr).replace(a,"").trim().replace(/\s{2,}/g," ");b.attr(LobiPanel.PRIVATE_OPTIONS.parentAttr,c)},_onToggleIconsBtnClick=function(){$heading.find(".toggle-controls").on("click.lobiPanel",function(){me.$el.toggleClass("controls-expanded")})},_adjustForScreenSize=function(){me.disableTooltips(),$(window).width()>768&&me.$options.tooltips&&me.enableTooltips(),me.isOnFullScreen()&&$body.css({width:_calculateBodyWidth(me.$el.width()),height:_calculateBodyHeight(me.$el.height())})},_enableResponsiveness=function(){$(window).on("resize.lobiPanel",function(){_adjustForScreenSize()})},_setBodyHeight=function(){"auto"!==me.$options.bodyHeight&&$body.css({height:me.$options.bodyHeight,overflow:"auto"})},_getOptionsFromAttributes=function(){var $el=me.$el,options={};for(var key in $.fn.lobiPanel.DEFAULTS){var k=key.toDash(),val=$el.data(k);void 0!==val&&("object"!=typeof $.fn.lobiPanel.DEFAULTS[key]?options[key]=val:options[key]=eval("("+val+")"))}return options},_saveState=function(a){!me.hasRandomId&&me.$options.stateful&&(me.storage.state=a,_saveLocalStorage(me.storage))},_saveLocalStorage=function(a){localStorage.setItem(storagePrefix+innerId,JSON.stringify(a))},_applyState=function(a){switch(a){case"unpinned":me.unpin();break;case"minimized":me.unpin(),me.minimize();break;case"collapsed":me.minimize();break;case"fullscreen":me.toFullScreen()}},_applyIndex=function(a){null!==a&&me.$el.insertAt(a,me.$el.parent())},_triggerEvent=function(a){var b=Array.prototype.slice.call(arguments,1);b.unshift(me),me.$el.trigger(a+".lobiPanel",b)};this.isPanelInit=function(){return me.$el.hasClass("lobipanel")&&me.$el.data("inner-id")},this.isPinned=function(){return!me.$el.hasClass("panel-unpin")},this.pin=function(){return _triggerEvent("beforePin"),$heading.find('[data-func="unpin"]').tooltip("hide"),me.disableResize(),me.disableDrag(),_enableSorting(),_offPanelClick(),me.$el.removeClass("panel-unpin").attr("old-style",me.$el.attr("style")).removeAttr("style").css("position","relative"),$body.css({width:"",height:""}),_setBodyHeight(),_insertInParent(),_saveState("pinned"),_triggerEvent("onPin"),me},this.unpin=function(){if(_triggerEvent("beforeUnpin"),me.$el.hasClass("panel-collapsed"))return me;if(_disableSorting(),$heading.find('[data-func="unpin"]').tooltip("hide"),me.$el.attr("old-style"))me.$el.attr("style",me.$el.attr("old-style"));else{var a=me.$el.width(),b=me.$el.height(),c=Math.max(0,($(window).width()-me.$el.outerWidth())/2),d=Math.max(0,($(window).height()-me.$el.outerHeight())/2);me.$el.css({left:c,top:d,width:a,height:b})}var e=_getMaxZIndex();me.$el.css("z-index",e["z-index"]+1),_onPanelClick(),me.$el.addClass("panel-unpin"),$("body").append(me.$el);var f=_getAvailableWidth(me.$el.width()),g=_getAvailableHeight(me.$el.height());me.$el.css({position:"fixed",width:f,height:g});var h=_calculateBodyHeight(g),i=_calculateBodyWidth(f);return $body.css({width:i,height:h}),me.$options.draggable&&me.enableDrag(),"none"!==me.$options.resize&&me.enableResize(),_saveState("unpinned"),_triggerEvent("onUnpin"),me},this.togglePin=function(){return this.isPinned()?this.unpin():this.pin(),me},this.isMinimized=function(){return me.$el.hasClass("panel-minimized")||me.$el.hasClass("panel-collapsed")},this.minimize=function(){if(_triggerEvent("beforeMinimize"),me.isMinimized())return me;if(me.isPinned())$body.slideUp(),me.$el.find(".panel-footer").slideUp(),me.$el.addClass("panel-collapsed"),_saveState("collapsed"),_changeClassOfControl($heading.find('[data-func="minimize"]'));else{me.disableTooltips(),$heading.find('[data-func="minimize"]').tooltip("hide");var a,b,c=_getFooterForMinimizedPanels(),d=c.find(">*");if(b=c.offset().top,0===d.length)a=c.offset().left;else{var e=$(d[d.length-1]);a=e.offset().left+e.width()}me.$el.hasClass("panel-expanded")||me.$el.attr("old-style",me.$el.attr("style")),me.$el.animate({left:a,top:b,width:200,height:c.height()},100,function(){me.$el.hasClass("panel-expanded")&&(me.$el.removeClass("panel-expanded"),me.$el.find(".panel-heading [data-func=expand] ."+LobiPanel.PRIVATE_OPTIONS.iconClass).removeClass(me.$options.expand.icon2).addClass(me.$options.expand.icon)),me.$el.addClass("panel-minimized"),me.$el.removeAttr("style"),me.disableDrag(),me.disableResize(),_expandOnHeaderClick(),c.append(me.$el),$("body").addClass("lobipanel-minimized"),_saveState("minimized"),_triggerEvent("onMinimize")})}return me},this.maximize=function(){if(_triggerEvent("beforeMaximize"),!me.isMinimized())return me;if(me.isPinned())$body.slideDown(),me.$el.find(".panel-footer").slideDown(),me.$el.removeClass("panel-collapsed"),_saveState("pinned"),_changeClassOfControl($heading.find('[data-func="minimize"]'));else{me.enableTooltips();var a=me.$el.attr("old-style").getCss();me.$el.css({position:a.position||"fixed","z-index":a["z-index"],left:me.$el.offset().left,top:me.$el.offset().top,width:me.$el.width(),height:me.$el.height()}),$("body").append(me.$el),delete a.position,delete a["z-index"],me.$el.animate(a,100,function(){me.$el.css("position",""),me.$el.removeClass("panel-minimized"),me.$el.removeAttr("old-style"),me.$options.draggable&&me.enableDrag(),me.enableResize(),_removeExpandOnHeaderClick();var a=_getFooterForMinimizedPanels();0===a.children().length&&a.remove(),$("body").removeClass("lobipanel-minimized").addClass("lobipanel-minimized");var b="calc(100% - "+$heading.find(".dropdown-menu li").length*$heading.find(".dropdown-menu li").first().outerWidth()+"px)";$heading.find(".panel-title").css("max-width",b),_saveState("unpinned"),_triggerEvent("onMaximize")})}return me},this.toggleMinimize=function(){return me.isMinimized()?me.maximize():me.minimize(),me},this.isOnFullScreen=function(){return me.$el.hasClass("panel-expanded")},this.toFullScreen=function(){if(_triggerEvent("beforeFullScreen"),me.$el.hasClass("panel-collapsed"))return me;_changeClassOfControl($heading.find('[data-func="expand"]')),$heading.find('[data-func="expand"]').tooltip("hide");var a=_getMaxZIndex();if(me.isPinned()||me.isMinimized()){me.enableTooltips(),me.$el.css({position:"fixed","z-index":a["z-index"]+1,left:me.$el.offset().left,top:me.$el.offset().top-$(window).scrollTop(),width:me.$el.width(),height:me.$el.height()}),$("body").append(me.$el);var b=_getFooterForMinimizedPanels();0===b.children().length&&b.remove()}else $body.css({width:"",height:""}),_setBodyHeight();me.isMinimized()?(me.$el.removeClass("panel-minimized"),_removeExpandOnHeaderClick()):(me.$el.attr("old-style",me.$el.attr("style")),me.disableResize());var c=$("."+LobiPanel.PRIVATE_OPTIONS.toolbarClass),d=c.outerHeight()||0;return me.$el.animate({width:$(window).width(),height:$(window).height()-d,left:0,top:0},me.$options.expandAnimation,function(){me.$el.css({width:"",height:"",right:0,bottom:d}),me.$el.addClass("panel-expanded"),$("body").css("overflow","hidden"),$body.css({width:_calculateBodyWidth(me.$el.width()),height:_calculateBodyHeight(me.$el.height())}),me.disableDrag(),me.isPinned()&&_disableSorting(),_saveState("fullscreen"),_triggerEvent("onFullScreen")}),me},this.toSmallSize=function(){_triggerEvent("beforeSmallSize"),_changeClassOfControl($heading.find('[data-func="expand"]')),$heading.find('[data-func="expand"]').tooltip("hide");var a=me.$el.attr("old-style").getCss();return me.$el.animate({left:a.left,top:a.top,width:a.width,height:a.height,right:a.right,bottom:a.bottom},me.$options.collapseAnimation,function(){me.$el.removeAttr("old-style"),me.$el.hasClass("panel-unpin")?(me.$options.draggable&&me.enableDrag(),me.enableResize()):(me.$el.removeAttr("style"),_insertInParent(),_enableSorting()),me.$el.removeClass("panel-expanded"),$("body").css("overflow","auto");var a="",b="";me.isPinned()?"auto"!==me.$options.bodyHeight&&(b=me.$options.bodyHeight,_saveState("pinned")):(a=_calculateBodyWidth(me.getWidth()),b=_calculateBodyHeight(me.getHeight()),_saveState("unpinned")),$body.css({width:a,height:b}),_triggerEvent("onSmallSize")}),me},this.toggleSize=function(){return me.isOnFullScreen()?me.toSmallSize():me.toFullScreen(),me},this.close=function(){return _triggerEvent("beforeClose"),me.$el.hide(100,function(){me.isOnFullScreen()&&$("body").css("overflow","auto"),me.$el.remove();var a=_getFooterForMinimizedPanels();0===a.children().length&&a.remove(),_triggerEvent("onClose")}),me},this.setPosition=function(a,b){return me.isPinned()?me:(me.$el.animate({left:a,top:b},100),me)},this.setWidth=function(a){if(me.isPinned())return me;var b=_calculateBodyWidth(a);return me.$el.animate({width:a},100),$body.animate({width:b},100),me},this.setHeight=function(a){if(me.isPinned())return me;var b=_calculateBodyHeight(a);return me.$el.animate({height:a},100),$body.animate({height:b},100),me},this.setSize=function(a,b){if(me.isPinned())return me;var c=_calculateBodyHeight(b),d=_calculateBodyWidth(a);return me.$el.animate({height:b,width:a},100),$body.animate({height:c,width:d},100),me},this.getPosition=function(){var a=me.$el.offset();return{x:a.left,y:a.top}},this.getWidth=function(){return me.$el.width()},this.getHeight=function(){return me.$el.height()},this.bringToFront=function(){_triggerEvent("beforeToFront");var a=_getMaxZIndex();return a.id===me.$el.data("inner-id")?me:(me.$el.css("z-index",a["z-index"]+1),_triggerEvent("onToFront"),me)},this.enableDrag=function(){return me.$el.draggable({handle:".panel-heading"}),me},this.disableDrag=function(){return me.$el.hasClass("ui-draggable")&&me.$el.draggable("destroy"),me},this.enableResize=function(){var a=!1;if("vertical"===me.$options.resize?a="n, s":"horizontal"===me.$options.resize?a="e, w":"both"===me.$options.resize&&(a="all"),a)return me.$el.resizable({minWidth:me.$options.minWidth,maxWidth:me.$options.maxWidth,minHeight:me.$options.minHeight,maxHeight:me.$options.maxHeight,handles:a,start:function(){me.$el.disableSelection(),_triggerEvent("resizeStart")},stop:function(){me.$el.enableSelection(),_triggerEvent("resizeStop")},resize:function(){var a=_calculateBodyHeight(me.$el.height()),b=_calculateBodyWidth(me.$el.width());$body.css({width:b,height:a}),_triggerEvent("onResize")}}),me},this.disableResize=function(){return me.$el.hasClass("ui-resizable")&&me.$el.resizable("destroy"),me},this.startLoading=function(){var a=_generateWindow8Spinner();me.$el.append(a);var b=a.find(".spinner");return b.css("margin-top",50),me},this.stopLoading=function(){return me.$el.find(".spinner-wrapper").remove(),me},this.setLoadUrl=function(a){return me.$options.loadUrl=a,me},this.load=function(a){a=a||{},"string"==typeof a&&(a={url:a});var b=a.url||me.$options.loadUrl,c=a.data||{},d=a.callback||null;return b?(_triggerEvent("beforeLoad"),me.startLoading(),$body.load(b,c,function(a,b,c){d&&"function"==typeof d&&d(a,b,c),me.stopLoading(),_triggerEvent("loaded",a,b,c)}),me):me},this.destroy=function(){return me.disableDrag(),me.disableResize(),me.$options.sortable=!1,_enableSorting(),_removeInnerIdFromParent(innerId),me.$el.removeClass("lobipanel").removeAttr("data-inner-id").removeAttr("data-index").removeData("lobiPanel"),$heading.find(".dropdown").remove(),me.$el},this.startTitleEditing=function(){var a=$heading.find(".panel-title").text().trim(),b=$('<input value="'+a+'"/>');return b.on("keydown",function(a){13===a.which?me.finishTitleEditing():27===a.which&&me.cancelTitleEditing()}),$heading.find(".panel-title").data("old-title",a).html("").append(b),b[0].focus(),b[0].select(),_changeClassOfControl($heading.find('[data-func="editTitle"]')),me},this.isTitleEditing=function(){return $heading.find(".panel-title input").length>0},this.cancelTitleEditing=function(){var a=$heading.find(".panel-title");return a.html(a.data("old-title")).find("input").remove(),_changeClassOfControl($heading.find('[data-func="editTitle"]')),me},this.finishTitleEditing=function(){var a=$heading.find("input");return $heading.find(".panel-title").html(a.val()),a.remove(),_changeClassOfControl($heading.find('[data-func="editTitle"]')),me},this.enableTooltips=function(){if($(window).width()<768)return me;var a=$heading.find(".dropdown-menu>li>a");return a.each(function(a,b){var c=$(b);c.attr("data-toggle","tooltip").attr("data-title",c.data("tooltip")).attr("data-placement","top")}),a.each(function(a,b){$(b).tooltip({container:"body",template:'<div class="tooltip lobipanel-tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'})}),me},this.disableTooltips=function(){return $heading.find(".dropdown-menu>li>a").tooltip("destroy"),me},this.$el=$el,me.$el.data("inner-id")||(me.hasRandomId=!0,me.$el.attr("data-inner-id",Math.randomString(10))),innerId=me.$el.data("inner-id"),me.hasRandomId||(me.storage=localStorage.getItem(storagePrefix+innerId),me.storage=JSON.parse(me.storage)||{}),this.$options=_processInput(options),$heading=this.$el.find(">.panel-heading"),$body=this.$el.find(">.panel-body"),_init(),_applyState(me.$options.state),_applyIndex(me.$options.initialIndex)};$.fn.lobiPanel=function(a){var b=arguments,c=null;return this.each(function(){var d=$(this),e=d.data("lobiPanel"),f="object"==typeof a&&a;e||d.data("lobiPanel",e=new LobiPanel(d,f)),"string"==typeof a&&(b=Array.prototype.slice.call(b,1),c=e[a].apply(e,b))}),c},LobiPanel.PRIVATE_OPTIONS={parentAttr:"data-lobipanel-child-inner-id",toolbarClass:"lobipanel-minimized-toolbar",initialZIndex:1e4,iconClass:"panel-control-icon"},$.fn.lobiPanel.DEFAULTS={draggable:!0,sortable:!1,connectWith:".ui-sortable",resize:"both",minWidth:200,minHeight:100,maxWidth:1200,maxHeight:700,loadUrl:"",autoload:!0,bodyHeight:"auto",tooltips:!0,toggleIcon:"icon-cog6",expandAnimation:100,collapseAnimation:100,state:"pinned",initialIndex:null,stateful:!1,unpin:{icon:"icon-move",tooltip:"Unpin"},reload:{icon:"icon-loader",tooltip:"Reload"},minimize:{icon:"icon-circle-minus",icon2:"icon-circle-plus",tooltip:"Minimize"},expand:{icon:"icon-fullscreen",icon2:"icon-fullscreen_exit",tooltip:"Fullscreen"},close:{icon:"icon-circle-cross",tooltip:"Close"},editTitle:{icon:"icon-edit",icon2:"icon-save",tooltip:"Edit title"}},$(".lobipanel").lobiPanel()});