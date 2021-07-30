// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/array esri/geometry/Extent jimu/utils esri/dijit/AttributeInspector".split(" "),function(n,k,g,p,q,r){var f={};f.ATI=n([r],{constructor:function(){this._aiConnects=[];this._selection=[];this._toolTips=[]}});f.checkIfFieldAliasAlreadyExists=function(a,c){return 0<=a.split(",").indexOf(c)};f.pointToExtent=function(a,c,b){var d=a.extent.getWidth()/a.width;b*=d;return new p(c.x-b,c.y-b,c.x+b,c.y+b,a.spatialReference)};f.filterOnlyUpdatedAttributes=
function(a,c,b){if(null===c||void 0===c)return a;var d={},e;for(e in a)a.hasOwnProperty(e)&&(e===b.objectIdField||e===b.globalIdField?d[e]=a[e]:null===a[e]&&""===c[e]||a[e]===c[e]||(d[e]=a[e]));return d};f.mergeFieldInfosWithConfiguration=function(a,c){var b=[],d=this.getDefaultEditableFieldInfos(a,!1);c&&c.fieldInfos?(g.forEach(c.fieldInfos,function(a){g.some(d,function(c){if(a.fieldName===c.fieldName)return b.push(this.mergeLastToFirst(c,a)),!0},this)},this),g.forEach(d,function(a){0===g.filter(b,
function(c){return c.fieldName===a.fieldName},this).length&&b.push(a)},this)):b=d;var e=[];a.layerObject.hasOwnProperty("globalIdField")&&void 0!==a.layerObject.globalIdField&&null!==a.layerObject.globalIdField&&e.push(a.layerObject.globalIdField);a.layerObject.hasOwnProperty("objectIdField")&&void 0!==a.layerObject.objectIdField&&null!==a.layerObject.objectIdField&&e.push(a.layerObject.objectIdField);if(a.layerObject.hasOwnProperty("editFieldsInfo")&&void 0!==a.layerObject.editFieldsInfo&&null!==
a.layerObject.editFieldsInfo)for(var m in a.layerObject.editFieldsInfo)a.layerObject.editFieldsInfo.hasOwnProperty(m)&&e.push(a.layerObject.editFieldsInfo[m]);return b=b.filter(function(a){return-1!==g.indexOf(e,a.fieldName)?!1:a.isEditableOnLayer})};f.getDefaultEditableFieldInfos=function(a,c){var b=[],d=this.getFieldInfosFromWebmap(a);a=this.getFieldInfosLayer(a);if(void 0===d||null===d)d=a;else{var e=[];g.forEach(a,function(a){0===g.filter(d,function(c){return c.name===a.fieldName}).length&&(a.isEditableOnLayer=
a.editable,e.push(a))});0<e.length&&(d=d.concat(e))}g.forEach(d,function(a){!1===a.hasOwnProperty("isEditableOnLayer")&&(a.isEditableOnLayer=a.editable);!1===a.editable&&(a.isEditable=a.editable);!1===a.isEditable&&(a.editable=a.isEditable);a.fieldName=a.name;!0===a.editable&&!0===c?b.push(k.clone(a)):!1===c&&b.push(k.clone(a))});return b};f.getFieldInfosFromWebmap=function(a){var c=null,b=a.getPopupInfo();b&&b.fieldInfos&&(c=[],g.forEach(b.fieldInfos,function(b){g.some(a.layerObject.fields,function(a){if(a.name===
b.fieldName)return a=this.mergeFirstToLast(b,a),a.format&&a.format.dateFormat&&a.format.dateFormat.toLowerCase()&&0<=a.format.dateFormat.toLowerCase().indexOf("time")&&(a.format.time=!0),c.push(a),!0},this)},this));return c};f.getFieldInfosLayer=function(a){var c=[];a&&a.layerObject&&g.forEach(a.layerObject.fields,function(a){var b=q.getDefaultPortalFieldInfo(a),b=this.mergeFirstToLast(b,a);b.format&&b.format.dateFormat&&b.format.dateFormat.toLowerCase()&&0<=b.format.dateFormat.toLowerCase().indexOf("time")&&
(b.format.time=!0);b.visible=!0;c.push(b)},this);return c};f.getConfigInfos=function(a,c,b,d,e){var f=[],l=a.getLayerInfoArrayOfWebmap(),k=[];e&&(k=a.getTableInfoArrayOfWebmap(),l=l.concat(k));g.forEach(l,function(a){var e=!1;"Table"!==a.layerObject.type&&"Feature Layer"!==a.layerObject.type||!a.layerObject.url||(a.layerObject.isEditable&&a.layerObject.isEditable()&&b?e=!0:void 0!==b&&!1===b&&(e=!0));if(!0===e){var h=this.getConfigInfo(a,c);h.layerInfo=a;!0===h.featureLayer.layerAllowsDelete&&!1===
h.featureLayer.layerAllowsCreate&&!1===h.featureLayer.layerAllowsUpdate?console.warn(h.layerInfo.title+" delete only not supported"):d&&!0===d?!0===g.some(c,function(a){return a.featureLayer.id===h.featureLayer.id})&&f.push(h):f.push(h)}},this);return f};f.getConfigInfo=function(a,c){var b=null,d=this.createDefaultConfigInfo(a);!1===g.some(c,function(c){return c.featureLayer&&c.featureLayer.id===a.layerObject.id?(b=k.clone(c),b.fieldInfos=this.mergeFieldInfosWithConfiguration(a,b),b=this.mergeDefaultWithConfig(b,
d),!0):!1},this)&&(b=d);return b};f.mergeDefaultWithConfig=function(a,c){a.featureLayer=c.featureLayer;!0===a.allowDelete&&!1===a.featureLayer.layerAllowsDelete&&(a.allowDelete=!1);!1===a.disableGeometryUpdate&&!1===a.featureLayer.layerAllowGeometryUpdates&&(a.disableGeometryUpdate=!0);!1===a.featureLayer.layerAllowsCreate&&!0===a.featureLayer.layerAllowsUpdate&&(a.allowUpdateOnly=!0);return a};f.createDefaultConfigInfo=function(a){var c=!1,b=!1,d=!1,e=!1;try{var f=a.layerObject.getEditCapabilities();
f.canCreate&&(c=!0);f.canUpdate&&(e=b=!0);f.canDelete&&(d=!0)}catch(l){a.layerObject.hasOwnProperty("capabilities")&&(-1===String(a.layerObject.capabilities).indexOf("Update")&&-1===String(a.layerObject.capabilities).indexOf("Delete")&&-1===String(a.layerObject.capabilities).indexOf("Create")&&-1!==String(a.layerObject.capabilities).indexOf("Editing")?c=d=b=!0:(-1!==String(a.layerObject.capabilities).indexOf("Update")&&(e=b=!0),-1!==String(a.layerObject.capabilities).indexOf("Delete")&&(d=!0),-1!==
String(a.layerObject.capabilities).indexOf("Create")&&(c=!0)))}a.layerObject.hasOwnProperty("allowGeometryUpdates")&&(e=a.layerObject.allowGeometryUpdates);"Table"===a.layerObject.type&&a.layerObject.url&&a.getCapabilitiesOfWebMap()&&(b=a.getCapabilitiesOfWebMap(),a.layerObject.isEditable&&a.layerObject.isEditable()&&b&&-1<b.toLowerCase().indexOf("editing")?b=!0:d=b=c=!1,e=!1);return{featureLayer:{id:a.layerObject.id,layerAllowsCreate:c,layerAllowsUpdate:b,layerAllowsDelete:d,layerAllowGeometryUpdates:e},
disableGeometryUpdate:!e,allowUpdateOnly:!c,allowDelete:!1,fieldInfos:this.mergeFieldInfosWithConfiguration(a,null),_editFlag:c||b?!0:!1}};f.mergeLastToFirst=function(){for(var a={},c=0,b=arguments.length,d;c<b;c++)for(d in arguments[c])arguments[c].hasOwnProperty(d)&&(a[d]=arguments[c][d]);return a};f.mergeFirstToLast=function(){for(var a={},c=arguments.length-1,b;0<=c;c--)for(b in arguments[c])arguments[c].hasOwnProperty(b)&&(a[b]=arguments[c][b]);return a};f.isObjectEmpty=function(a){if(a)for(var c in a)if(a.hasOwnProperty(c))return!1;
return!0};f.addDateTimeFormat=function(a){a&&a.format&&null!==a.format&&a.format.dateFormat&&null!==a.format.dateFormat&&0<=a.format.dateFormat.toString().toUpperCase().indexOf("TIME")&&(a.format.time=!0)};return f});