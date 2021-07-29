// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/connect dojo/has esri/kernel esri/toolbars/draw esri/graphic esri/geometry/Polyline esri/geometry/Polygon esri/geometry/Multipoint esri/geometry/Rect".split(" "),function(v,t,u,n,w,x,r,y,p,z,A){var q=v([x],{baseClass:"jimu-draw",declaredClass:"jimu.dijit.Draw",_onMouseDragHandler:function(d){if(this._graphic||this._points.length)if(n("esri-touch")&&!this._points.length)d.preventDefault();else{this._dragged=!0;var b;this.map.snappingManager&&(b=
this.map.snappingManager._snappingPoint);var h=this._points[0],f=b||d.mapPoint,k=this.map,m=k.spatialReference;b=this._graphic;var e=q,g=k.toScreen(h),c=k.toScreen(f),a=[],a=c.x-g.x,c=c.y-g.y,l=Math.sqrt(a*a+c*c);switch(this._geometryType){case e.CIRCLE:this._hideTooltip();b.geometry=p.createCircle({center:g,r:l,numberOfPoints:60,map:k});b.setGeometry(b.geometry);break;case e.ELLIPSE:this._hideTooltip();b.geometry=p.createEllipse({center:g,longAxis:a,shortAxis:c,numberOfPoints:60,map:k});b.setGeometry(b.geometry);
break;case e.TRIANGLE:this._hideTooltip();a=[[0,-l],[.8660254037844386*l,.5*l],[-.8660254037844386*l,.5*l],[0,-l]];b.geometry=this._toPolygon(a,g.x,g.y);b.setGeometry(b.geometry);break;case e.ARROW:this._hideTooltip();h=c/l;k=a/l;f=.25*k*l;m=.25*l/(c/a);l*=.25*h;e=this.fillSymbol?this.fillSymbol.arrowWidth:12;a=[[a,c],[a-f*(1+e/m),c+e*k-l],[a-f*(1+e/2/m),c+e/2*k-l],[-e/2*h,e/2*k],[e/2*h,-e/2*k],[a-f*(1-e/2/m),c-e/2*k-l],[a-f*(1-e/m),c-e*k-l],[a,c]];b.geometry=this._toPolygon(a,g.x,g.y);b.setGeometry(b.geometry);
break;case e.LEFT_ARROW:this._hideTooltip();a=0>=a?[[a,0],[.75*a,c],[.75*a,.5*c],[0,.5*c],[0,-.5*c],[.75*a,-.5*c],[.75*a,-c],[a,0]]:[[0,0],[.25*a,c],[.25*a,.5*c],[a,.5*c],[a,-.5*c],[.25*a,-.5*c],[.25*a,-c],[0,0]];b.geometry=this._toPolygon(a,g.x,g.y);b.setGeometry(b.geometry);break;case e.RIGHT_ARROW:this._hideTooltip();a=0<=a?[[a,0],[.75*a,c],[.75*a,.5*c],[0,.5*c],[0,-.5*c],[.75*a,-.5*c],[.75*a,-c],[a,0]]:[[0,0],[.25*a,c],[.25*a,.5*c],[a,.5*c],[a,-.5*c],[.25*a,-.5*c],[.25*a,-c],[0,0]];b.geometry=
this._toPolygon(a,g.x,g.y);b.setGeometry(b.geometry);break;case e.UP_ARROW:this._hideTooltip();a=0>=c?[[0,c],[-a,.75*c],[-.5*a,.75*c],[-.5*a,0],[.5*a,0],[.5*a,.75*c],[a,.75*c],[0,c]]:[[0,0],[-a,.25*c],[-.5*a,.25*c],[-.5*a,c],[.5*a,c],[.5*a,.25*c],[a,.25*c],[0,0]];b.geometry=this._toPolygon(a,g.x,g.y);b.setGeometry(b.geometry);break;case e.DOWN_ARROW:this._hideTooltip();a=0<=c?[[0,c],[-a,.75*c],[-.5*a,.75*c],[-.5*a,0],[.5*a,0],[.5*a,.75*c],[a,.75*c],[0,c]]:[[0,0],[-a,.25*c],[-.5*a,.25*c],[-.5*a,c],
[.5*a,c],[.5*a,.25*c],[a,.25*c],[0,0]];b.geometry=this._toPolygon(a,g.x,g.y);b.setGeometry(b.geometry);break;case e.RECTANGLE:this._hideTooltip();a=[[0,0],[a,0],[a,c],[0,c],[0,0]];b.geometry=this._toPolygon(a,g.x,g.y);b.setGeometry(b.geometry);break;case e.LINE:b.setGeometry(t.mixin(b.geometry,{paths:[[[h.x,h.y],[f.x,f.y]]]}));break;case e.EXTENT:b&&k.graphics.remove(b,!0);b=new A(this._normalizeRect(h,f,m));b._originOnly=!0;this._graphic=k.graphics.add(new r(b,this.fillSymbol),!0);k.snappingManager&&
k.snappingManager._setGraphic(this._graphic);break;case e.FREEHAND_POLYLINE:this._hideTooltip();if(!1===this._canDrawFreehandPoint(d)){n("esri-touch")&&d.preventDefault();return}this._points.push(d.mapPoint.offset(0,0));b.geometry._insertPoints([f.offset(0,0)],0);b.setGeometry(b.geometry);break;case e.FREEHAND_POLYGON:this._hideTooltip();if(!1===this._canDrawFreehandPoint(d)){n("esri-touch")&&d.preventDefault();return}this._points.push(d.mapPoint.offset(0,0));b.geometry._insertPoints([f.offset(0,
0)],0);b.setGeometry(b.geometry)}n("esri-touch")&&d.preventDefault()}},_onClickHandler:function(d){var b;this.map.snappingManager&&(b=this.map.snappingManager._snappingPoint);var h=b||d.mapPoint;d=this.map;b=d.toScreen(h);var f=q;this._points.push(h.offset(0,0));switch(this._geometryType){case f.POINT:this.onDrawStart();this._drawEnd(h.offset(0,0));this._setTooltipMessage(0);break;case f.POLYLINE:1===this._points.length?(b=new y(d.spatialReference),b.addPath(this._points),this._graphic=d.graphics.add(new r(b,
this.lineSymbol),!0),d.snappingManager&&d.snappingManager._setGraphic(this._graphic),this._onMouseMoveHandler_connect=u.connect(d,"onMouseMove",this._onMouseMoveHandler),this.onDrawStart()):(this._graphic.geometry._insertPoints([h.offset(0,0)],0),this._graphic.setGeometry(this._graphic.geometry).setSymbol(this.lineSymbol));break;case f.POLYGON:1===this._points.length?(b=new p(d.spatialReference),b.addRing(this._points),this._graphic=d.graphics.add(new r(b,this.fillSymbol),!0),d.snappingManager&&d.snappingManager._setGraphic(this._graphic),
this._onMouseMoveHandler_connect=u.connect(d,"onMouseMove",this._onMouseMoveHandler),this.onDrawStart()):(this._graphic.geometry._insertPoints([h.offset(0,0)],0),this._graphic.setGeometry(this._graphic.geometry).setSymbol(this.fillSymbol));break;case f.MULTI_POINT:b=this._points;1===b.length?(h=new z(d.spatialReference),h.addPoint(b[b.length-1]),this._graphic=d.graphics.add(new r(h,this.markerSymbol),!0),d.snappingManager&&d.snappingManager._setGraphic(this._graphic),this.onDrawStart()):(this._graphic.geometry.addPoint(b[b.length-
1]),this._graphic.setGeometry(this._graphic.geometry).setSymbol(this.markerSymbol));break;case f.ARROW:d=this.fillSymbol?this.fillSymbol.arrowWidth:12;this._addShape([[0,0],[-d,d],[-d,d/2],[-96,d/2],[-96,-d/2],[-d,-d/2],[-d,-d],[0,0]],b.x,b.y);break;case f.LEFT_ARROW:this._addShape([[0,0],[24,24],[24,12],[96,12],[96,-12],[24,-12],[24,-24],[0,0]],b.x,b.y);break;case f.RIGHT_ARROW:this._addShape([[0,0],[-24,24],[-24,12],[-96,12],[-96,-12],[-24,-12],[-24,-24],[0,0]],b.x,b.y);break;case f.UP_ARROW:this._addShape([[0,
0],[-24,24],[-12,24],[-12,96],[12,96],[12,24],[24,24],[0,0]],b.x,b.y);break;case f.DOWN_ARROW:this._addShape([[0,0],[-24,-24],[-12,-24],[-12,-96],[12,-96],[12,-24],[24,-24],[0,0]],b.x,b.y);break;case f.TRIANGLE:this._addShape([[0,-48],[41.56921938165306,24],[-41.56921938165306,24],[0,-48]],b.x,b.y);break;case f.RECTANGLE:this._addShape([[0,-96],[96,-96],[96,0],[0,0],[0,-96]],b.x-48,b.y+48);break;case f.CIRCLE:this._clear();this.onDrawStart();this._drawEnd(p.createCircle({center:b,r:48,numberOfPoints:60,
map:d}));break;case f.ELLIPSE:this._clear(),this.onDrawStart(),this._drawEnd(p.createEllipse({center:b,longAxis:48,shortAxis:24,numberOfPoints:60,map:d}))}this._setTooltipMessage(this._points.length)}});t.mixin(q,{POINT:"point",MULTI_POINT:"multipoint",LINE:"line",EXTENT:"extent",POLYLINE:"polyline",POLYGON:"polygon",FREEHAND_POLYLINE:"freehandpolyline",FREEHAND_POLYGON:"freehandpolygon",ARROW:"arrow",LEFT_ARROW:"leftarrow",RIGHT_ARROW:"rightarrow",UP_ARROW:"uparrow",DOWN_ARROW:"downarrow",TRIANGLE:"triangle",
CIRCLE:"circle",ELLIPSE:"ellipse",RECTANGLE:"rectangle"});n("extend-esri")&&t.setObject("toolbars.Draw",q,w);return q});