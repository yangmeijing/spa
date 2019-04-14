$(function(){
  var n = 6;
  var $btnAgree = $('input[type="button"]');
  var timer = window.setInterval(function(){
    n--;
    $btnAgree.val('同意('+n+'s)');
    if(n==0){
      window.clearInterval(timer);
      $btnAgree.removeAttr('disabled');
      $btnAgree.val('同意');
    }
  },1000);
  
  $btnAgree.click(function(){
    alert('SPA!');
  });

});
