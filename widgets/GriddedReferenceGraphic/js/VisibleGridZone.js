// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["dojo/_base/declare","./GridPolygon"],function(b,c){return b(null,{polygon:null,offset:null,nonPolarGridZone:null,fullZoneGeometry:null,map:null,constructor:function(a){this.offset=Math.round(a.offset);this.polygon=a.polygon;this.nonPolarGridZone=a.nonPolarGridZone;this.fullZoneGeometry=a.fullZoneGeometry;this.map=a.map;this.utmZone=a.utmZone;this.latitudeBand=a.latitudeBand;a={clippedPolygon:this.polygon,unclippedPolygon:this.nonPolarGridZone.toPolygon(a.offset),map:this.map,xmin:this.nonPolarGridZone.extent.xmin,
ymin:this.nonPolarGridZone.extent.ymin,xmax:this.nonPolarGridZone.extent.xmax,ymax:this.nonPolarGridZone.extent.ymax,minMaxType:"degrees",utmZone:this.utmZone,text:this.nonPolarGridZone.id,latitudeBand:this.latitudeBand};this.gridPolygon=new c(a)}})});