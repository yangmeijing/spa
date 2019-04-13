/*global BMap,BMAP_NORMAL_MAP,BMAP_HYBRID_MAP,BMAP_ANIMATION_BOUNCE:true*/
$(function(){
  var map = new BMap.Map('allmap');    // 创建Map实例
  map.centerAndZoom('河北师范大学软件学院', 25);  // 初始化地图,设置中心点坐标和地图级别
  //添加地图类型控件
  map.addControl(new BMap.MapTypeControl({
    mapTypes:[
      BMAP_NORMAL_MAP,
      BMAP_HYBRID_MAP
    ]}));   
  map.enableScrollWhellZoom(!0);
  map.setMapType(BMAP_HYBRID_MAP);
  var t = new BMap.Point(114.529963,38.003679),
      a = new BMap.Marker(t,{
        title: 'SPA 富应用开发'
        
      });
  a.setAnimation(BMAP_ANIMATION_BOUNCE),
  map.addOverlay(a);
  var n = new BMap.InfoWindow('<div style="width: 250px"><p>时间：周二、周四下午<br>地点：505 教室</p><a href="https://github.com/wangding" target="_blank"><img src="https://secure.gravatar.com/avatar/4e1b831efef47d65a762da5d5e89174c?s=250" alt="王顶" width="40px" height="40px" style="position: relative; top: -58px; left: 190px"></a></div>',{
    width: 230,
    height: 100,
    title: '<strong>SPA 富应用开发</strong>'
      
  });
  a.openInfoWindow(n),
  a.addEventListener('click', function() {
    map.openInfoWindow(n, t);
          
  });
});


