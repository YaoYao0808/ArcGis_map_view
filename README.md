1.地图上显示点
  有取色模块
  无取色模块
  知识点：
  colorPicker的API的应用
  var colorPicker = new ColorPicker({}, "picker1");////picker1为渲染方法div的id
2.点连成线
  注意点：涉及到坐标的转换
  点的坐标常用墨卡托坐标表示
3.百度地图显示点并换坐标
4.谷歌地图显示
  地图显示都是通过添加图层的方式进行的
5.增改图标
  var pictureMarkerSymbol = new esri.symbol.PictureMarkerSymbol("diamond.jpg", 15, 15);
6.表格导入显示点
  知识点：
  js代码完成导入excel（注意所需插件）
7.坐标转换
  //坐标转换方法--lon经度  lat纬度
            function transform_point(lng, lat) {//[114.32894, 30.585748]
                var earthRad = 6378137.0;
                var x = lng * Math.PI / 180 * earthRad;
                var a = lat * Math.PI / 180;
                var y = earthRad / 2 * Math.log((1.0 + Math.sin(a)) / (1.0 - Math.sin(a)));
                return [x, y]; //[12727039.383734727, 3579066.6894065146]
            }
   但是，AcrGis的API中有方法可以直接调用，其转换方法如上述代码
8.输入经纬度查询定位
  js代码完成
  <div id="info" style="align-content: left">
        经度：<input type="text" id="longitude" /><br>

        纬度：<input type="text" id="latitude" /><br>

  <button id="progButtonNode" type="button"></button>
9.更换地图
10.根据频次更改坐标（此处的频次为excel表格中的数据）

            
