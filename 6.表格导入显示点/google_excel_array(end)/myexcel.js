// arrVal = new Array();

// function hi() {
    //后续json数据存储在该数组
//json转换为数组
function json_array(data) {
    //alert("---into json");
    alert(data[0][0]);
    var len = data.length;
    alert("json:"+len);//97
    var arrV = [];
    for (var i = 0; i < len; i++) {
        arrV[i] = []; //js中二维数组必须进行重复的声明，否则会undefind
        for (x in data[i]) {
            //只取地点和以及经纬度的数据
            if (x == "X1" || x == "Y1" || x == "X2" || x == "Y2" || x == "X3" || x == "Y3" || x == "地点和") {
                arrV[i][x] = data[i][x];
            }

            /*if (x == "X1" || x == "Y1" || x == "X2" || x == "Y2" || x == "X3" || x == "Y3")
                arrV[i][x] = data[i][x];*/
        }
    }
    alert(arrV[1][1]);
    return arrV;
}


//屏幕输出显示
function show(arrValue) {
    //alert("into show");
    for (var i = 0; i < arrValue.length; i++) {
        for (var x in arrValue[i]) {
            console.log(x + "::" + arrValue[i][x]);
            document.write(x + "::" + arrValue[i][x] + "<br/>");
        }
        document.write("<br/>");
    }
}

// $('#excel-file').change(function(e) {

//         alert("into hi");


//         var files = e.target.files;

//         var fileReader = new FileReader();

//         fileReader.onload = function(ev) {
//             try {

//                 var data = ev.target.result,
//                     workbook = XLSX.read(data, {
//                         type: 'binary'
//                     }), // 以二进制流方式读取得到整份excel表格对象
//                     persons = []; // 存储获取到的数据
//             } catch (e) {
//                 console.log('文件类型不正确');
//                 return;
//             }

//             // 表格的表格范围，可用于判断表头是否数量是否正确
//             var fromTo = '';

//             const sheetNames = workbook.SheetNames; // ["频次信息总表", "频次计数分表"]
//             console.log(sheetNames[1]);
//             //console.log(workbook.Sheets);


//             // 遍历每张表读取
//             for (var sheet in workbook.Sheets) {
//                 if (workbook.Sheets.hasOwnProperty(sheet)) {
//                     fromTo = workbook.Sheets[sheet]['!ref'];
//                     console.log(fromTo);
//                     persons = persons.concat(XLSX.utils.sheet_to_json(workbook.Sheets[sheet])); //返回json数据
//                     break; // 如果只取第一张表，就取消注释这行
//                 }
//             }

//             //调试输出信息
//             /*console.log(persons.length); //97
//             console.log(persons[4].X1); //X为表格列属性名
//             console.log(persons);*/


//             //json转换为数组
//             var arr = json_array(persons);
//             //alert(arr);
//             //二维数组-用于屏幕输出显示
//            /* for (var i = 0; i < arr.length; i++) {
//                 for (var x in arr[i]) {
//                     document.write(x + ":" + arr[i][x] + "<br/>");
//                     //经纬度赋值语句
//                     // if (x == "X1" || x == "Y1" || x == "X2" || x == "Y2" || x == "X3" || x == "Y3")
//                     //     arr_new[i][x] = arr[i][x];

//                 }
//                 document.write("<br/>");
//             }*/
//             //console.log("len"+arr_new.length);
//         };


//         // 以二进制方式打开文件
//         fileReader.readAsBinaryString(files[0]);
//         //console.log("arr:"+arr);
//         alert(123);
//         addPoint();
//     });
    //addPoint(arr);

    // return arr;
// }






//test函数
/*
function test() {
    alert("test");
    arrVal = hi();

   // show(arrVal);


}*/
