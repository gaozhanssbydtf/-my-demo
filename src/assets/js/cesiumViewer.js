import * as Cesium from "cesium/Cesium";
import "../../../node_modules/cesium/Build/Cesium/Widgets/widgets.css";

// function CesiumViewer(id, url) {
//   var pointArr = [
//     107.25275214226576,
//     41.2758142339668,
//     107.01653466545189,
//     41.2045018501493,
//     106.6048664072412,
//     41.01639064384099,
//     106.32665797274437,
//     40.80197037389878,
//     106.14940023511376,
//     40.577597780541026,
//     106.3097975908589,
//     40.390891089582695,
//     106.65187025983964,
//     40.16213323533096,
//     106.78861291490831,
//     40.12974084802157,
//     106.90230716911411,
//     40.15149197336455,
//     107.00194538724098,
//     40.256927220445036,
//     107.04326160770259,
//     40.332106710818984,
//     107.1265284732624,
//     40.37524078176096,
//     107.1642501240646,
//     40.39901912526948,
//     107.1542029384407,
//     40.43559065142942,
//     107.15448410400852,
//     40.45883043159571,
//     107.16424529152074,
//     40.480984193061076,
//     107.17727770224013,
//     40.48472257046444,
//     107.18925104318387,
//     40.4923034973506,
//     107.1828630713868,
//     40.49973808550134,
//     107.18225747554332,
//     40.51437172968133,
//     107.19017556197251,
//     40.52877148098057,
//     107.20319699684399,
//     40.541021290003016,
//     107.21874145035693,
//     40.55588488459172,
//     107.23186028283361,
//     40.57098419289568,
//     107.24711851621095,
//     40.582599894533175,
//     107.26501138883627,
//     40.60118768718659,
//     107.31275927428844,
//     40.632905686112856,
//     107.34282041640182,
//     40.651996703185844,
//     107.38101839860887,
//     40.670941977660995,
//     107.41239288533039,
//     40.6706768438741,
//     107.44128670679127,
//     40.666506301401284,
//     107.46458585095853,
//     40.67004572505734,
//     107.4753024077142,
//     40.68415681003875,
//     107.49277359006845,
//     40.6919124070709,
//     107.51315733617571,
//     40.69032425840918,
//     107.52877949903714,
//     40.702200866004716,
//     107.54831176380112,
//     40.71623164119535,
//     107.54539698846756,
//     40.73160360810103,
//     107.55289945227922,
//     40.74475726563644,
//     107.57895419705847,
//     40.75299540269821,
//     107.60168409220871,
//     40.75553870163974,
//     107.62630056718837,
//     40.75680236864402,
//     107.64106507389812,
//     40.76256978934058,
//     107.6615375259513,
//     40.779802859273154,
//     107.66904170991334,
//     40.789415022643304,
//     107.69393443275142,
//     40.79001721457864,
//     107.71725279740939,
//     40.803527400622734,
//     107.7267561346125,
//     40.83295554482752,
//     107.73626625942069,
//     40.856080137392254,
//     107.75843002175596,
//     40.86207987815943,
//     107.79363497585877,
//     40.85154436904158,
//     107.81534894230775,
//     40.84404620387364,
//     107.83371096343416,
//     40.84453625526898,
//     107.86058045987485,
//     40.85759690051798,
//     107.8846570780891,
//     40.86710998696436,
//     107.89845714862479,
//     40.86108105420574,
//     107.91135255900868,
//     40.854471863407845,
//     107.92876006737328,
//     40.851286889628454,
//     107.94069337980075,
//     40.860585183325135,
//     107.95456436510642,
//     40.867678505559546,
//     107.97262090767937,
//     40.86252805482605,
//     107.98357437036186,
//     40.85076929798911,
//     107.99646249182715,
//     40.839250680136836,
//     108.00322755663892,
//     40.83558540695584,
//     108.0151537163515,
//     40.834606889648434,
//     108.01929908482147,
//     40.84055518307854,
//     108.03304735824305,
//     40.84875858788023,
//     108.04758398790952,
//     40.853827672385854,
//     108.0599590240966,
//     40.8512888046673,
//     108.06604414278083,
//     40.84174022384306,
//     108.073555593004,
//     40.8352841623132,
//     108.08059275286392,
//     40.83529952288674,
//     108.1232036799796,
//     40.84557724971087,
//     108.14404175644339,
//     40.84804903899019,
//     108.16464447679225,
//     40.85317736809995,
//     108.17892875132338,
//     40.854190896853645,
//     108.18878777793772,
//     40.85873298745701,
//     108.1844670875937,
//     40.86975223207938,
//     108.18778498647526,
//     40.873957997348995,
//     108.19731585471857,
//     40.87059332588709,
//     108.2142244030994,
//     40.85195014321809,
//     108.22086736222113,
//     40.83790199471302,
//     108.22141886806732,
//     40.82662908036542,
//     108.22317671099988,
//     40.81747066012399,
//     108.22803556518888,
//     40.812652711220025,
//     108.24637929218581,
//     40.81315702998344,
//     108.25919868269236,
//     40.814666835524484,
//     108.27500220881485,
//     40.81357395632355,
//     108.28772263520574,
//     40.81071913162876,
//     108.31147667364363,
//     40.808620011626736,
//     108.3332390124234,
//     40.80509187744889,
//     108.3531221398387,
//     40.80349736045665,
//     108.37361577440126,
//     40.80287870008986,
//     108.38874741795442,
//     40.802545748692225,
//     108.40608576071836,
//     40.79792969524783,
//     108.41686767419526,
//     40.793006373346074,
//     108.4343145503245,
//     40.785995890667834,
//     108.44843254419904,
//     40.78010968802065,
//     108.46309932277744,
//     40.767864470114226,
//     108.48705678262641,
//     40.74400606771425,
//     108.51072820845708,
//     40.732648269365995,
//     108.53695910344044,
//     40.72334967900872,
//     108.5532497135598,
//     40.728847797041816,
//     108.57042644741713,
//     40.71541587416031,
//     108.579897469353,
//     40.692005682395646,
//     108.60563801291369,
//     40.66065220651495,
//     108.62125781846068,
//     40.64943926477225,
//     108.64716865156313,
//     40.64628402128237,
//     108.67612519447881,
//     40.63390869003826,
//     108.68774546926225,
//     40.62491733873342,
//     108.70855577115684,
//     40.612359285776385,
//     108.72693577681216,
//     40.607284907299224,
//     108.76022004510459,
//     40.61403522650695,
//     108.77257914154715,
//     40.60895540659231,
//     108.76567655914599,
//     40.5906348705427,
//     108.76185869077669,
//     40.568893637408884,
//     108.76151299963522,
//     40.55633743396626,
//     108.78555873033267,
//     40.55343657409848,
//     108.81847749584345,
//     40.563074812076856,
//     108.84106948486358,
//     40.56071448257011,
//     108.86712929918924,
//     40.55530373431525,
//     108.88276710042757,
//     40.553710451701875,
//     108.89590275135794,
//     40.56070721671281,
//     108.90904032169466,
//     40.56372705446959,
//     108.90966238680045,
//     40.553867219935896,
//     108.91215960966868,
//     40.540030955307735,
//     108.91966100445907,
//     40.53144029339318,
//     108.94030392918312,
//     40.53699755465451,
//     108.96047356416581,
//     40.536368237523874,
//     108.98653802010676,
//     40.52815138608388,
//     108.99774985249194,
//     40.53392069796077,
//     109.01731366595908,
//     40.55261803948396,
//     109.02592200785064,
//     40.55400813568594,
//     109.03336728386846,
//     40.54635802619181,
//     109.05188805380868,
//     40.54575186104087,
//     109.08422228208643,
//     40.53977891538983,
//     109.11341627034732,
//     40.52803862483043,
//     109.1313991332922,
//     40.52604119615854,
//     109.14990393206384,
//     40.5329986876834,
//     109.1644978953173,
//     40.529216407458954,
//     109.16188680367347,
//     40.519671927304955,
//     109.160057622122,
//     40.50793909624408,
//     109.17632698188305,
//     40.512974557400476,
//     109.18768688377565,
//     40.515880771613816,
//     109.20112577635498,
//     40.515385017073854,
//     109.22108829511885,
//     40.516127584622325,
//     109.2389264945958,
//     40.51426400971223,
//     109.24894922799676,
//     40.50257536675851,
//     109.25747462117059,
//     40.49648322035754,
//     109.2668340104144,
//     40.49482887435837,
//     109.27604087854698,
//     40.49978739276951,
//     109.30304015709635,
//     40.5037411130791,
//     109.3232347514065,
//     40.521766863484125,
//     109.33116335274133,
//     40.54528988415473,
//     109.34294270145665,
//     40.57229573070777,
//     109.35268490404371,
//     40.59506890105618,
//     109.34256171587747,
//     40.61948361953422,
//     109.36784789310579,
//     40.629769741445784,
//     109.36615859906145,
//     40.646472692079996,
//     109.34591615646485,
//     40.65803048261496,
//     109.32735400420985,
//     40.66958461666411,
//     109.33454149866688,
//     40.6796169659455,
//     109.34252195168831,
//     40.69656743077448,
//     109.35770229133176,
//     40.718407692522234,
//     109.35094162047888,
//     40.736387439122076,
//     109.35431047229987,
//     40.755653796027865,
//     109.37626604185355,
//     40.76850070325121,
//     109.39822797104397,
//     40.77235298282288,
//     109.42526221642639,
//     40.77748389440052,
//     109.45176553395626,
//     40.77108595350774,
//     109.47034481606974,
//     40.765936594733844,
//     109.49123636466422,
//     40.76873842253277,
//     109.51829843891747,
//     40.78155525092,
//     109.54024955297241,
//     40.77253661809831,
//     109.54863601360685,
//     40.746834294440774,
//     109.56375789401676,
//     40.749093085412,
//     109.59414298492469,
//     40.7387638278123,
//     109.6194515846088,
//     40.727150971120466,
//     109.64937108880292,
//     40.730978647314735,
//     109.67649314225682,
//     40.74890152613793,
//     109.720623167015,
//     40.74649962248705,
//     109.7560671467316,
//     40.75229215595121,
//     109.78844959539215,
//     40.76159599949588,
//     109.80546116599561,
//     40.78265284735075,
//     109.83178458603982,
//     40.817739427107604,
//     109.86852440473616,
//     40.86601146018565,
//     109.84671665158749,
//     40.92005845794633,
//     109.72200542097193,
//     40.951482047263,
//     109.66363070158476,
//     41.036287841141046,
//     109.59509478939393,
//     41.08668647909729,
//     109.47086860361053,
//     41.16017599087055,
//     109.36444357454891,
//     41.192077096999896,
//     109.2551004340749,
//     41.226037680534574,
//     109.2090613736756,
//     41.32950832227875,
//     109.09755630793656,
//     41.38194150215193,
//     108.94663796598938,
//     41.3726020523825,
//     108.66678823669041,
//     41.369755436261364,
//     108.37614292997719,
//     41.34410270132416,
//     108.16964179986678,
//     41.32810290841243,
//     107.98476400496784,
//     41.328079481907594,
//     107.85821319995871,
//     41.332956370766986,
//     107.73962184613237,
//     41.342626942976466,
//     107.61257567448943,
//     41.33385214590907,
//     107.49980770854532,
//     41.31181168620168,
//     107.4090875545034,
//     41.30926226153569,
//     107.25275512407943,
//     41.27581666266425
//   ];

//   // var clickEvent = {
//   //   type: "cesiumClick",
//   //   value: ""
//   // };
//   // var errorEvent = {
//   //   type: "cesiumErrorClick",
//   //   value: ""
//   // };

//   // var rihgtClickEvent = {
//   //   type: "cesiumRihgtClick",
//   //   value: ""
//   // };
//   // var mouseMoveEvent = {
//   //   type: "cesiuMouseMove",
//   //   value: ""
//   // };

//   var scope = this;
//   this.Cesium = Cesium;

//   var viewer = new Cesium.Viewer(id, {
//     animation: false, //是否显示动画控件
//     baseLayerPicker: false, //是否显示图层选择控件
//     geocoder: false, //是否显示地名查找控件
//     timeline: false, //是否显示时间线控件
//     sceneModePicker: false, //是否显示投影方式控件
//     navigationHelpButton: false, //是否显示帮助信息控件
//     infoBox: false, //是否显示点击要素之后显示的信息
//     selectionIndicator: false, //是否显示选中实体时的选中框
//     fullscreenButton: false, //全屏按钮
//     homeButton: false, //复位
//     // shadows: true, //阴影效果
//     imageryProvider: new Cesium.UrlTemplateImageryProvider({
//       url: "http://mt1.google.cn/vt/lyrs=s&hl=zh-CN&x={x}&y={y}&z={z}&s=Gali"
//     }) //引入谷歌地图层
//   });
//   var handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
//   this.viewer = viewer; //地图视图
//   this.handler = handler; //绑定事件
//   this.restoration = null; //复位
//   this.tileset = null; //斜摄影
//   this.isTrapeze = false; //是否获取经纬度

//   // viewer.imageryLayers._layers[0].brightness = 2.0;

//   // var tileset = new Cesium.Cesium3DTileset({
//   //     url: url, //工商外国语
//   //     maximumScreenSpaceError: 2,
//   //     maximumNumberOfLoadedTiles: 1500,
//   //     debugShowBoundingVolume: false
//   // });
//   // viewer.scene.primitives.add(tileset);
//   // this.tileset = tileset;

//   this.restoration = {
//     destination: Cesium.Cartesian3.fromDegrees(
//       108.0497421257958308,
//       40.7490795055216282,
//       350000
//     ),
//     orientation: {
//       heading: Cesium.Math.toRadians(0.0),
//       pitch: Cesium.Math.toRadians(-90.0),
//       roll: 0.0
//     }
//   }; //回位

//   viewer.camera.flyTo(this.restoration);

//   viewer.scene.globe.baseColor = Cesium.Color.fromBytes(48, 152, 255, 255); //地图颜色

//   viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(
//     Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK
//   ); //取消双击跟踪实体

//   //cesium左键单击事件
//   handler.setInputAction(function(movement) {
//     var pick = viewer.scene.pick(movement.position);
//     clickEvent.value = "";
//     clickEvent.value = pick;
//     scope.dispatchEvent(clickEvent);
//   }, Cesium.ScreenSpaceEventType.LEFT_CLICK);

//   handler.setInputAction(function(movement) {
//     if (!scope.isTrapeze) return;

//     mouseMoveEvent.value = "";

//     //捕获椭球体，将笛卡尔二维平面坐标转为椭球体的笛卡尔三维坐标，返回球体表面的点
//     var cartesian = viewer.camera.pickEllipsoid(
//       movement.endPosition,
//       viewer.scene.globe.ellipsoid
//     );
//     if (cartesian) {
//       //将笛卡尔三维坐标转为地图坐标（弧度）
//       var cartographic = viewer.scene.globe.ellipsoid.cartesianToCartographic(
//         cartesian
//       );
//       //将地图坐标（弧度）转为十进制的度数
//       var lat_String = Cesium.Math.toDegrees(cartographic.latitude).toFixed(16); //纬度
//       var log_String = Cesium.Math.toDegrees(cartographic.longitude).toFixed(
//         16
//       ); //经度
//       var alti_String = viewer.camera.positionCartographic.height.toFixed(2); //高度

//       mouseMoveEvent.value = {
//         x: log_String,
//         y: lat_String,
//         z: alti_String
//       };
//       scope.dispatchEvent(mouseMoveEvent);
//     }
//   }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);

//   /**
//    * 设置后当相机高度达到设置的最大和最小高度时将不再放大和缩小
//    */
//   viewer.scene.screenSpaceCameraController.minimumZoomDistance = 25; //相机的高度的最小值
//   viewer.scene.screenSpaceCameraController.maximumZoomDistance = 22000000; //相机高度的最大值
//   //viewer.scene.screenSpaceCameraController._minimumZoomRate = 300; // 设置相机缩小时的速率
//   //viewer.scene.screenSpaceCameraController._maximumZoomRate=5906376272000    //设置相机放大时的速率
//   //修改默认事件
//   viewer.scene.screenSpaceCameraController.zoomEventTypes = [
//     Cesium.CameraEventType.WHEEL,
//     Cesium.CameraEventType.MIDDLE_DRAG,
//     Cesium.CameraEventType.PINCH
//   ]; //缩放事件绑定中键
//   viewer.scene.screenSpaceCameraController.tiltEventTypes = [
//     Cesium.CameraEventType.RIGHT_DRAG,
//     Cesium.CameraEventType.PINCH
//   ]; //旋转事件绑定右键
//   //查看帧率
//   // viewer.scene.debugShowFramesPerSecond = true;
//   //去除版权信息
//   viewer._cesiumWidget._creditContainer.style.display = "none";



//   // 添加线
//   this.drawAndShareLine = () => {
//    	var markLine = viewer.entities.add({
// 			name: "entity",
// 			code:'line',
//       polyline: {
//         positions: Cesium.Cartesian3.fromDegreesArray(pointArr),
//         // clampToGround: true,
//         width: 2,
//         material: Cesium.Color.fromBytes(255, 0, 0, 255)
//         // disableDepthTestDistance: Number.POSITIVE_INFINITY,
//         /* material: new Cesium.PolylineGlowMaterialProperty({
//           // glowPower: 0.1,
//           color: Cesium.Color.fromBytes(255, 0, 0, 255)
//         }), */
// 			}
// 		});
//   };
// }




function CesiumViewer(id) {
  Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI1NWI5MGUzNi1mYWI3LTQzY2QtOGI0Ni0xZWYyNTAxNGM4N2MiLCJpZCI6MTI1OTgsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1NjE0NDkyNTV9.hBH0PGSnKErc_yNhIePASUkr3QPDoo0KDX9uLpNBUns';
  var viewer = new Cesium.Viewer(id, {
    // terrainProvider: Cesium.createWorldTerrain(),  //加载地形,开启后加载地图较慢
    animation: false, //是否显示动画控件
    homeButton: false, //是否显示home键
    geocoder: false, //是否显示地名查找控件        如果设置为true，则无法查询
    baseLayerPicker: false, //是否显示图层选择控件
    timeline: false, //是否显示时间线控件
    fullscreenButton: false, //是否全屏显示
    scene3DOnly: true, //如果设置为true，则所有几何图形以3D模式绘制以节约GPU资源
    infoBox: false, //是否显示点击要素之后显示的信息
    sceneModePicker: false, //是否显示投影方式控件  三维/二维
    navigationInstructionsInitiallyVisible: false,
    navigationHelpButton: false, //是否显示帮助信息控件
    selectionIndicator: false, //是否显示指示器组件
    orderIndependentTranslucency: false,
    skyBox: false, // 背景星空是否显示
    moon: false,
    sun: false,
    contextOptions: {
      webgl: {
        alpha: true,
      }
    },
    imageryProvider: new Cesium.UrlTemplateImageryProvider({
      url: "http://mt1.google.cn/vt/lyrs=s&hl=zh-CN&x={x}&y={y}&z={z}&s=Gali"
    })
    // imageryProvider: new Cesium.ArcGisMapServerImageryProvider({
    //   url: "http://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer",
    //   layers: '0',
    //   proxy: new Cesium.DefaultProxy('/proxy/')

    // })


  });
  window.viewer = viewer
  this.viewer = viewer
  viewer.imageryLayers.addImageryProvider(new Cesium.ArcGisMapServerImageryProvider({
    url: "http://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer",
    layers: '0',
    proxy: new Cesium.DefaultProxy('/proxy/')
  }));


  viewer.imageryLayers.addImageryProvider(
    new Cesium.WebMapTileServiceImageryProvider({
      url: 'http://t0.tianditu.gov.cn/ibo_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=ibo&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&tk=7cf84928973c27bffe684ef7e6593764',
      layer: 'tdtAnnoLayer',
      style: 'default',
      format: 'image/png',
      tileMatrixSetID: 'GoogleMapsCompatible',
      tileHeight: 0,
      maximumLevel: 18,
    })
  );
  viewer.imageryLayers.addImageryProvider(
    new Cesium.WebMapTileServiceImageryProvider({
      url: 'http://t0.tianditu.com/cia_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cia&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default.jpg&tk=7cf84928973c27bffe684ef7e6593764',
      layer: 'tdtAnnoLayer',
      style: 'default',
      format: 'image/jpeg',
      tileMatrixSetID: 'GoogleMapsCompatible',
      maximumLevel: 18,
    })
  );


  //加载倾斜摄影
  // var tileset = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
  //   url : '../../../static/cunzhuang/tileset.json',
  //   maximumScreenSpaceError: 2,
  //   maximumNumberOfLoadedTiles: 1000
  // }));
  // tileset.readyPromise.then(function(tileset) {
  //   viewer.camera.viewBoundingSphere(tileset.boundingSphere, new Cesium.HeadingPitchRange(0, -0.5, 0));
  //   console.log(tileset.boundingSphere);
  //   viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);
  // });
  //加载倾斜摄影结束



  //加载纽约建筑模型
  // var tileset = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
  //   url: '../../../static/NewYork/tileset.json',
  //   //          maximumScreenSpaceError: 2,
  //   //          maximumNumberOfLoadedTiles: 1000
  // }));
  // tileset.readyPromise.then(function (tileset) {
  //   viewer.camera.viewBoundingSphere(tileset.boundingSphere, new Cesium.HeadingPitchRange(0, -0.5, 0));
  //   console.log(tileset.boundingSphere);
  //   viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);
  // });
  //加载纽约建筑模型结束



  this.restoration = null; //复位 飞至某个位置
  // this.restoration = {
  //   destination: Cesium.Cartesian3.fromDegrees(
  //     103.4590412100, 35.8448593900, 8000000
  //   ),
  //   orientation: {
  //     heading: Cesium.Math.toRadians(0.0),
  //     pitch: Cesium.Math.toRadians(-90.0),
  //     roll: 0.0
  //   }
  // }; //回位
  // viewer.camera.flyTo(this.restoration);

  
  
    

    this.setHome = function() {
      viewer.camera.flyTo({
        destination: new Cesium.Cartesian3(-2431140.596402536, 4956350.079936029, 3187466.3453860176),
        orientation: {
          heading: 0.05778396781509709,
          pitch: -1.10188614700363,
          roll: 0.0
        }
      })
    }
  

  

  viewer._cesiumWidget._creditContainer.style.display = "none"; // 隐藏版权信息

  // 加载地形信息
  // viewer.terrainProvider = Cesium.createWorldTerrain({
  //   requestWaterMask: true, // required for water effects
  //   requestVertexNormals: true // required for terrain lighting
  // });
  viewer.scene.globe.depthTestAgainstTerrain = true;



  //获取鼠标在模型的高度
var scene = viewer.scene;
var handler = new Cesium.ScreenSpaceEventHandler(scene.canvas);
handler.setInputAction(function(evt) {
    var scene = viewer.scene;
    if (scene.mode !== Cesium.SceneMode.MORPHING) {
        var pickedObject = scene.pick(evt.position);
        if (scene.pickPositionSupported && Cesium.defined(pickedObject)) {
            var cartesian = viewer.scene.pickPosition(evt.position);
            if (Cesium.defined(cartesian)) {
                var cartographic = Cesium.Cartographic.fromCartesian(cartesian);
                var lng = Cesium.Math.toDegrees(cartographic.longitude);
                var lat = Cesium.Math.toDegrees(cartographic.latitude);
                var height = cartographic.height;//模型高度
                mapPosition={x:lng,y:lat,z:height};
                console.log(mapPosition);
            }
        }
    }
}, Cesium.ScreenSpaceEventType.LEFT_CLICK);
}

CesiumViewer.prototype.constructor = CesiumViewer;

export default CesiumViewer
