// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["require","exports"],function(f,g){var d=Array.prototype,e={every:function(a,b,c){return null==a?!0:"string"===typeof a?d.every.call(a.split(""),b,c):d.every.call(a,b,c)},some:function(a,b,c){return null==a?!1:"string"===typeof a?d.some.call(a.split(""),b,c):d.some.call(a,b,c)},forEach:function(a,b,c){if(null!=a)return"string"===typeof a?d.forEach.call(a.split(""),b,c):d.forEach.call(a,b,c)},map:function(a,b,c){return null==a?[]:"string"===typeof a?d.map.call(a.split(""),b,c):d.map.call(a,
b,c)},filter:function(a,b,c){return null==a?[]:"string"===typeof a?d.filter.call(a.split(""),b,c):d.filter.call(a,b,c)},indexOf:function(a,b){return null==a?-1:"string"===typeof a?d.indexOf.call(a.split(""),b):d.indexOf.call(a,b)},indexOfLoose:function(a,b){if(null==a||void 0===a.length)return-1;if("string"===typeof a)return e.indexOfLoose(a.split(""),b);for(var c=0,d=a.length;c<d;c++)if(a[c]==b)return c;return-1},lastIndexOf:function(a,b){return null==a?-1:"string"===typeof a?d.lastIndexOf.call(a.split(""),
b):d.lastIndexOf.call(a,b)},lastIndexOfLoose:function(a,b){if(null==a||void 0===a.length)return-1;if("string"===typeof a)return e.lastIndexOfLoose(a.split(""),b);for(var c=a.length-1;0<=c;c--)if(a[c]==b)return c;return-1}};return e});