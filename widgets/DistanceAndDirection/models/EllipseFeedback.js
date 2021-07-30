// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/connect dojo/_base/lang dojo/topic esri/graphic esri/toolbars/draw esri/geometry/Point esri/geometry/Polyline esri/geometry/Polygon esri/geometry/Circle esri/geometry/geometryEngine esri/geometry/webMercatorUtils esri/geometry/geodesicUtils esri/units jimu/utils ./Feedback".split(" "),function(n,m,f,g,c,p,t,k,q,u,e,l,v,w,r,h){h=n([h],{orientationAngle:0,majorAxisLength:[],minorAxisLength:[],constructor:function(a){n.safeMixin(this,a);this.syncEvents();this._majGraphic=
new c;this._majGraphicB=new c;this._minGraphic=new c;this._minGraphicB=new c},syncEvents:function(){g.subscribe("create-manual-ellipse",f.hitch(this,this.onCreateManualEllipse));g.subscribe("manual-ellipse-center-point-input",f.hitch(this,this.onCenterPointManualInputHandler));g.subscribe("clear-points",f.hitch(this,this.clearPoints))},clearPoints:function(){this._points=[];this.map.graphics.clear()},onCreateManualEllipse:function(a,b,x,d){this._points=[];4326!==this.map.spatialReference.wkid&&(d=
l.geographicToWebMercator(d));this._points.push(d);this.majorAxisLength=a=this.coordTool.convertToMeters(a,this.lengthUnit);a=this.getEndPoint(d,0,a);this._points.push(a);a=new k({paths:[[[d.x,d.y],[a.x,a.y]]],spatialReference:this.map.spatialReference});this._majGraphic=new c(a,this.lineSymbol);this._majGraphicB=new c(a,this.lineSymbol);this._majGraphicB.geometry=e.rotate(a,180,d);this.minorAxisLength=a=this.coordTool.convertToMeters(b,this.lengthUnit);a=this.getEndPoint(d,90,a);this._points.push(a);
b=new k({paths:[[[d.x,d.y],[a.x,a.y]]],spatialReference:this.map.spatialReference});this._minGraphic=new c(b,this.lineSymbol);this._minGraphicB=new c(b,this.lineSymbol);this._minGraphicB.geometry=e.rotate(b,180,d);this.orientationAngle=Number(x);this._onDoubleClickHandler()},onCenterPointManualInputHandler:function(a){this._points=[];this._points.push(a.offset(0,0));this.set("startPoint",this._points[0]);this.map.centerAt(a)},getEndPoint:function(a,b,c){b=b?b:0;c=new u(a,{radius:c,geodesic:!0,numberOfPoints:60});
return e.rotate(c,b,a).getPoint(0,0)},_onClickHandler:function(a){var b;this.map.snappingManager&&(b=this.map.snappingManager._snappingPoint);b=b||a.mapPoint;this._points.push(b.offset(0,0));switch(this._geometryType){case p.POINT:this.set("startPoint",b.offset(0,0));this._drawEnd(b.offset(0,0));this._setTooltipMessage(0);break;case p.POLYLINE:switch(this._points.length){case 1:this.set("startPoint",this._points[0]);a=new k({paths:[[[b.x,b.y],[b.x,b.y]]],spatialReference:this.map.spatialReference});
b=new k({paths:[[[b.x,b.y],[b.x,b.y]]],spatialReference:this.map.spatialReference});this._majGraphic=new c(a,this.lineSymbol);this._majGraphicB=new c(a,this.lineSymbol);this._minGraphic=new c(b,this.lineSymbol);this._minGraphicB=new c(b,this.lineSymbol);this.map.graphics.add(this._majGraphic);this.map.graphics.add(this._majGraphicB);this.map.graphics.add(this._minGraphic);this.map.graphics.add(this._minGraphicB);this._onMouseMoveHandlerConnect=m.connect(this.map,"onMouseMove",this._onMouseMoveHandler);
this._onDoubleClickHandler_connect=m.connect(this.map,"onDblClick",f.hitch(this,this._onDoubleClickHandler));if(a=this._tooltip)a.innerHTML=r.sanitizeHTML(this.nls.majorAxisTooltipMessage);break;case 2:this._tooltip&&(this._tooltip.innerHTML=r.sanitizeHTML(this.nls.minorAxisTooltipMessage));break;case 3:this._onDoubleClickHandler()}}},_onMouseMoveHandler:function(a){var b;this.map.snappingManager&&(b=this.map.snappingManager._snappingPoint);b=b||a.mapPoint;1===this._points.length?(this._majGraphic.geometry.setPoint(0,
1,b),this._majGraphicB.geometry=e.rotate(this._majGraphic.geometry,180,this._points[0]),this._majGraphic.setGeometry(this._majGraphic.geometry).setSymbol(this.lineSymbol),this._majGraphicB.setGeometry(this._majGraphicB.geometry).setSymbol(this.lineSymbol),this.majorAxisLength=e.geodesicLength(this._majGraphic.geometry,9001),a=this.coordTool.convertMetersToUnits(this.majorAxisLength,this.lengthUnit),g.publish("DD_ELLIPSE_MAJOR_LENGTH_CHANGE",a),a=this.getAngle(l.webMercatorToGeographic(this._points[0]),
l.webMercatorToGeographic(b)),"mils"===this.angleUnit&&(a*=17.777777778),g.publish("DD_ELLIPSE_ANGLE_CHANGE",a)):null!==this._minGraphic&&(a=f.clone(this._minGraphic.geometry),b=e.nearestCoordinate(this._majGraphic.geometry,b),b=new t(b.coordinate.x,b.coordinate.y,102100),this._minGraphic.geometry.setPoint(0,1,b),this._minGraphicB.geometry.setPoint(0,1,b),this._minGraphic.geometry=e.rotate(this._minGraphic.geometry,-90,this._points[0]),this._minGraphicB.geometry=e.rotate(this._minGraphicB.geometry,
90,this._points[0]),this._minGraphic.setGeometry(this._minGraphic.geometry).setSymbol(this.lineSymbol),this._minGraphicB.setGeometry(this._minGraphicB.geometry).setSymbol(this.lineSymbol),b=l.webMercatorToGeographic(this._minGraphic.geometry),this.minorAxisLength=v.geodesicLengths([b],w.METERS),b=this.coordTool.convertMetersToUnits(this.minorAxisLength[0],this.lengthUnit),this.minorAxisLength[0]>this.majorAxisLength||0===this.minorAxisLength[0]?this._minGraphic.setGeometry(a):g.publish("DD_ELLIPSE_MINOR_LENGTH_CHANGE",
b))},getLineLength:function(a,b,c,d){return Math.sqrt((a-=c)*a+(b-=d)*b)},getAngle:function(a,b){return(180*Math.atan2(b.x-a.x,b.y-a.y)/Math.PI+360)%360},convertAngle:function(a){return 0<=a&&90>a||180<=a&&270>a?90-a:90<=a&&180>a||270<=a&&360>a?180-a+270:a},_onDoubleClickHandler:function(){if(3<=this._points.length){var a=new q(this.map.spatialReference),b=this.map.toScreen(this._majGraphic.geometry.getPoint(0,0)),c=this.map.toScreen(this._majGraphic.geometry.getPoint(0,1)),d=this.map.toScreen(this._minGraphic.geometry.getPoint(0,
1)),c=this.getLineLength(b.x,b.y,c.x,c.y),d=this.getLineLength(b.x,b.y,d.x,d.y),b=q.createEllipse({center:b,longAxis:c,shortAxis:d,numberOfPoints:60,map:this.map});this.orientationAngle=this.angle;"mils"===this.angleUnit&&(this.orientationAngle/=17.777777778);a.geometry=e.rotate(b,this.convertAngle(this.orientationAngle),this._majGraphic.geometry.getPoint(0,0));a=f.mixin(a,{majorAxisLength:this.coordTool.convertMetersToUnits(this.majorAxisLength,this.lengthUnit),minorAxisLength:this.coordTool.convertMetersToUnits(this.minorAxisLength,
this.lengthUnit),angle:this.angle,drawType:"ellipse",center:this._points[0]})}this.disconnectOnMouseMoveHandler();this._setTooltipMessage(0);this._drawEnd(a);this.cleanup();this.orientationAngle=0},cleanup:function(){this.map.graphics.clear();this._minGraphic=this._majGraphic=null;this.majorAxisLength=[];this.minorAxisLength=[]},disconnectOnMouseMoveHandler:function(){m.disconnect(this._onMouseMoveHandlerConnect)}});h.DD_ELLIPSE_MAJOR_LENGTH_CHANGE="DD_ELLIPSE_MAJOR_LENGTH_CHANGE";h.DD_ELLIPSE_MINOR_LENGTH_CHANGE=
"DD_ELLIPSE_MINOR_LENGTH_CHANGE";h.DD_ELLIPSE_ANGLE_CHANGE="DD_ELLIPSE_ANGLE_CHANGE";return h});