/*export $timerBtn*/
var $timerBtn=(function(){
  
  var cfg={
    container:'.main',
    title:'确定',
    time:9,
    enabled:false,
    clickHandle:null
  };
  var n=cfg.time;
  var init=function(conf){
    $.extend(cfg,conf);
    var $container = $(cfg.container);
    //模板串方式
    var DOM='<input class="timer-button" type="button" value="'+cfg.title+'('+n+'s)" disabled>';
    $container.html(DOM);
    
    var $btnAgree = $container.find('.timer-button'); 
    var timer = window.setInterval(function(){
      n--;
      $btnAgree.val('同意('+n+'s)');
      if(n==0){
        window.clearInterval(timer);
        $btnAgree.removeAttr('disabled');
        $btnAgree.val('同意');
      }else{
        $btnAgree.val(cfg.title+'('+n+'s)');
      }
    },1000);
  
    $btnAgree.click(function(){
      $btnAgree.trigger('timer-btn-click');
    });
    return $btnAgree;


  };

   
  return {init:init};//这种返回对象方法可以有私有方法，不返回就是私有方法。 
}());

function TimerBtn(conf){
  this.init = function(){
    var cfg={
      container:'.main',
      title:'确定',
      time:9,
      enabled:false,
      clickHandle:null
    };
  }
  var n=cfg.time;
  var init=function(conf){
    $.extend(cfg,conf);
    var $container = $(cfg.container);
    //模板串方式
    var DOM='<input class="timer-button" type="button" value="'+cfg.title+'('+n+'s)" disabled>';
    $container.html(DOM);  
    var $btnAgree = $container.find('.timer-button'); 
    var timer = window.setInterval(function(){
      n--;
      $btnAgree.val('同意('+n+'s)');
      if(n==0){
        window.clearInterval(timer);
        $btnAgree.removeAttr('disabled');
        $btnAgree.val('同意');
      }else{
        $btnAgree.val(cfg.title+'('+n+'s)');
      }
    },1000);
  
    $btnAgree.click(function(){
      $btnAgree.trigger('timer-btn-click');
    });
    return $btnAgree;


  };

}

//var timerBtn=function(){
//  init:function(){...}
//  remove:function(){...}
//}
//上面这种方法没有私有方法
