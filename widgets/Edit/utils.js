// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define(["dojo/_base/lang","dojo/_base/array","jimu/utils"],function(k,f,l){function g(a,c){var b=null;a&&a.fields&&f.some(a.fields,function(a){if(a.name.toLowerCase()===c.toLowerCase())return b=a,!0});return b}function h(a,c,b){var d=null;if(a&&a.attributes)for(var e in a.attributes)if(a.attributes.hasOwnProperty(e)&&"function"!==typeof a.attributes[e]&&e.toLowerCase()===c.toLowerCase()){d=b?a.attributes[e]=b:a.attributes[e];break}return d}return{getFieldInfosFromWebmap:function(a,c){var b=null;(a=
c.getLayerInfoByTopLayerId(a))&&(a=a.getPopupInfo())&&a.fieldInfos&&(b=k.clone(a.fieldInfos));b&&f.forEach(b,function(a){a.format&&a.format.dateFormat&&(a.format.dateFormat.toLowerCase&&0>a.format.dateFormat.toLowerCase().indexOf("time")?a.format.time=!1:a.format.time=!0)});return b},getEditCapabilities:function(a,c,b){var d={};b=a.getEditCapabilities(b);d.canCreate=b.canCreate;d.canDelete=b.canDelete;d.canUpdateGeometry=a.allowGeometryUpdates;c&&(d.canCreate=c.allowCreate&&d.canCreate,d.canDelete=
c.allowDelete&&d.canDelete,d.canUpdateGeometry=!c.disableGeometryUpdate&&d.canUpdateGeometry);return d},getLocaleDateTime:function(a){return l.localizeDate(new Date(a),{fullYear:!0,formatLength:"medium"})},getAttrByFieldKey:function(a,c){return h(a,c)},setAttrByFieldKey:function(a,c,b){return h(a,c,b)},ignoreCaseToGetFieldKey:function(a,c){var b=null;if(a=g(a,c))b=a.name;return b},ignoreCaseToGetFieldObject:function(a,c){return g(a,c)}}});