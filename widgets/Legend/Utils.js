// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["dojo/_base/array","jimu/LayerInfos/LayerInfos"],function(e,g){function f(a,c){return a.isLeaf()?c.layerState[a.id]?c.layerState[a.id].selected:a.getShowLegendOfWebmap():!0}var d={getLayerInfosParam:function(a){return h(a)}},h=function(a){var c=[],d=g.getInstanceSync().getLayerInfoArray();e.forEach(d,function(b){var d=[];f(b,a)&&(!b.layerObject||"esri.layers.ArcGISDynamicMapServiceLayer"!==b.layerObject.declaredClass&&"esri.layers.ArcGISTiledMapServiceLayer"!==b.layerObject.declaredClass||
e.forEach(b.layerObject.dynamicLayerInfos||b.layerObject.layerInfos,function(c){var e=null;b.traversal(function(b){if(b.subId===c.id)return b.isLeaf()&&!f(b,a)&&d.push(b.originOperLayer.mapService.subId),e=b,!0});e||d.push(c.id)}),b.isMapNotesLayerInfo()?e.forEach(b.getSubLayers(),function(b){f(b,a)&&c.push({layer:b.layerObject,title:"Map Notes - "+b.title})}):c.push({hideLayers:d,layer:b.layerObject,title:b.title}))});return c.reverse()};d.isSupportedLayerType=function(a){return a&&("esri.layers.ArcGISDynamicMapServiceLayer"===
a.declaredClass||"esri.layers.ArcGISImageServiceLayer"===a.declaredClass&&10.2<=a.version||"esri.layers.ArcGISImageServiceVectorLayer"===a.declaredClass||"esri.layers.ArcGISTiledMapServiceLayer"===a.declaredClass||"esri.layers.FeatureLayer"===a.declaredClass||"esri.layers.StreamLayer"===a.declaredClass||"esri.layers.KMLLayer"===a.declaredClass||"esri.layers.GeoRSSLayer"===a.declaredClass||"esri.layers.WMSLayer"===a.declaredClass||"esri.layers.WFSLayer"===a.declaredClass||"esri.layers.CSVLayer"===
a.declaredClass)?!0:!1};return d});