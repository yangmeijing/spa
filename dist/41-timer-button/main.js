var $timerBtn=function(){var l={container:".main",title:"确定",time:9,enabled:!1,clickHandle:null},a=l.time;return{init:function(t){$.extend(l,t);var n=$(l.container),i='<input class="timer-button" type="button" value="'+l.title+"("+a+'s)" disabled>';n.html(i);var e=n.find(".timer-button"),r=window.setInterval(function(){a--,e.val("同意("+a+"s)"),0==a?(window.clearInterval(r),e.removeAttr("disabled"),e.val("同意")):e.val(l.title+"("+a+"s)")},1e3);return e.click(function(){e.trigger("timer-btn-click")}),e}}}();function TimerBtn(t){this.init=function(){};cfg.time}