/*global TimerBtn:true*/
function TimerBtn(){
  
  var cfg={
    container:'.main',
    title:'确定',
    time:9,
    enabled:false,
    clickHandle:null
  };

  this.init=function(conf){
    $.extend(cfg,conf);
    var $container = $(cfg.container);
    var n=cfg.time;
    var enabled;
    if(cfg.enabled==false){
      enabled='disabled';
    }else{
      enabled='';
    }
    //模板串方式
   var DOM='<input type="button" class="timer-button" value="'+cfg.title+'('+n+'s)" '+enabled+'>';
   $container.html(DOM);

    var $btnAgree = $container.find('.timer-button'); 

    var timer = window.setInterval(function(){
      n--;
      if(n==0){
        window.clearInterval(timer);
        $btnAgree.removeAttr('disabled');
        $btnAgree.val(cfg.title);
      }else{
        $btnAgree.val(cfg.title+'('+n+'s)');
      }
    },1000);
  
    $btnAgree.click(function(){
      cfg.clickHandle();
    });


  };
}
   

//var timerBtn=function(){
//  init:function(){...}
//  remove:function(){...}
//}
//上面这种方法没有私有方法
