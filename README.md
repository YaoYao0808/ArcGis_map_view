1.地图上显示点</br>
  * 有取色模块</br>
  * 无取色模块</br>
  知识点：</br>
  colorPicker的API的应用</br>
  var colorPicker = new ColorPicker({}, "picker1");////picker1为渲染方法div的id</br>
2.点连成线</br>
  注意点：涉及到坐标的转换</br>
  点的坐标常用墨卡托坐标表示</br>
3.百度地图显示点并换坐标</br>
4.谷歌地图显示</br>
  地图显示都是通过添加图层的方式进行的</br>
5.增改图标</br>
  var pictureMarkerSymbol = new esri.symbol.PictureMarkerSymbol("diamond.jpg", 15, 15);</br>
6.表格导入显示点</br>
  知识点：</br>
  * js代码完成导入excel（注意所需插件）</br>
7.坐标转换</br>
  //坐标转换方法--lon经度  lat纬度</br>
            function transform_point(lng, lat) {//[114.32894, 30.585748]</br>
                var earthRad = 6378137.0;</br>
                var x = lng * Math.PI / 180 * earthRad;</br>
                var a = lat * Math.PI / 180;</br>
                var y = earthRad / 2 * Math.log((1.0 + Math.sin(a)) / (1.0 - Math.sin(a)));</br>
                return [x, y]; //[12727039.383734727, 3579066.6894065146]</br>
            }</br>
   但是，AcrGis的API中有方法可以直接调用，其转换方法如上述代码</br>
8.输入经纬度查询定位</br>
  js代码完成</br>
  <div id="info" style="align-content: left"></br>
        经度：<input type="text" id="longitude" /><br></br>

        纬度：<input type="text" id="latitude" /><br></br>

  <button id="progButtonNode" type="button"></button></br>
9.更换地图</br>
10.根据频次更改坐标（此处的频次为excel表格中的数据）</br>

            
