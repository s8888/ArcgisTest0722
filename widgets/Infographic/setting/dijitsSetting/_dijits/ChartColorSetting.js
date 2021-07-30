// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Infographic/setting/dijitsSetting/_dijits/ChartColorSetting.html":'\x3cdiv\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"singleColorSection"\x3e\x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"colorSelect" class\x3d"restrict-select-width" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-event\x3d"change:_onColorSelectChanged" style\x3d"width:100%;height:30x;"\x3e\r\n    \x3cspan data-dojo-value\x3d\'c0\'\x3e\r\n      \x3cimg  style\x3d"width:100%;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src\x3d"${jimuUrl}/css/images/chart/c0.png" /\x3e\r\n    \x3c/span\x3e\r\n    \x3cspan data-dojo-value\x3d\'c1\'\x3e\r\n      \x3cimg  style\x3d"width:100%;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src\x3d"${jimuUrl}/css/images/chart/c1.png" /\x3e\r\n    \x3c/span\x3e\r\n    \x3cspan data-dojo-value\x3d\'c2\'\x3e\r\n      \x3cimg  style\x3d"width:100%;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src\x3d"${jimuUrl}/css/images/chart/c2.png" /\x3e\r\n    \x3c/span\x3e\r\n    \x3cspan data-dojo-value\x3d\'c3\'\x3e\r\n      \x3cimg  style\x3d"width:100%;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src\x3d"${jimuUrl}/css/images/chart/c3.png" /\x3e\r\n    \x3c/span\x3e\r\n    \x3cspan data-dojo-value\x3d\'c4\'\x3e\r\n      \x3cimg  style\x3d"width:100%;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src\x3d"${jimuUrl}/css/images/chart/c4.png" /\x3e\r\n    \x3c/span\x3e\r\n    \x3cspan data-dojo-value\x3d\'g1\'\x3e\r\n      \x3cimg  style\x3d"width:100%;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src\x3d"${jimuUrl}/css/images/chart/g1.png" /\x3e\r\n    \x3c/span\x3e\r\n    \x3cspan data-dojo-value\x3d\'g2\'\x3e\r\n      \x3cimg  style\x3d"width:100%;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src\x3d"${jimuUrl}/css/images/chart/g2.png" /\x3e\r\n    \x3c/span\x3e\r\n    \x3cspan data-dojo-value\x3d\'g3\'\x3e\r\n      \x3cimg  style\x3d"width:100%;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src\x3d"${jimuUrl}/css/images/chart/g3.png" /\x3e\r\n    \x3c/span\x3e\r\n    \x3cspan data-dojo-value\x3d\'g4\'\x3e\r\n      \x3cimg  style\x3d"width:100%;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src\x3d"${jimuUrl}/css/images/chart/g4.png" /\x3e\r\n    \x3c/span\x3e\r\n    \x3cspan data-dojo-value\x3d\'g5\'\x3e\r\n      \x3cimg  style\x3d"width:100%;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src\x3d"${jimuUrl}/css/images/chart/g5.png" /\x3e\r\n    \x3c/span\x3e\r\n    \x3cspan data-dojo-value\x3d\'g6\'\x3e\r\n      \x3cimg  style\x3d"width:100%;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src\x3d"${jimuUrl}/css/images/chart/g6.png" /\x3e\r\n    \x3c/span\x3e\r\n    \x3cspan data-dojo-value\x3d\'g7\'\x3e\r\n      \x3cimg  style\x3d"width:100%;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src\x3d"${jimuUrl}/css/images/chart/g7.png" /\x3e\r\n    \x3c/span\x3e\r\n    \x3cspan data-dojo-value\x3d\'g8\'\x3e\r\n      \x3cimg  style\x3d"width:100%;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src\x3d"${jimuUrl}/css/images/chart/g8.png" /\x3e\r\n    \x3c/span\x3e\r\n    \x3cspan data-dojo-value\x3d\'g9\'\x3e\r\n      \x3cimg  style\x3d"width:100%;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src\x3d"${jimuUrl}/css/images/chart/g9.png" /\x3e\r\n    \x3c/span\x3e\r\n    \x3cspan data-dojo-value\x3d\'g10\'\x3e\r\n      \x3cimg  style\x3d"width:100%;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src\x3d"${jimuUrl}/css/images/chart/g10.png" /\x3e\r\n    \x3c/span\x3e\r\n    \x3cspan data-dojo-value\x3d\'g11\'\x3e\r\n      \x3cimg  style\x3d"width:100%;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src\x3d"${jimuUrl}/css/images/chart/g11.png" /\x3e\r\n    \x3c/span\x3e\r\n    \x3cspan data-dojo-value\x3d\'g12\'\x3e\r\n      \x3cimg  style\x3d"width:100%;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src\x3d"${jimuUrl}/css/images/chart/g12.png" /\x3e\r\n    \x3c/span\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/on dojo/Evented dojo/_base/html dojo/_base/lang dojo/_base/array dojo/_base/Color dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./ChartColorSetting.html jimu/dijit/ColorPickerPopup require dijit/form/Select".split(" "),function(k,l,b,c,e,d,m,n,p,q,r,t,u){return m([n,p,q,l],{templateString:r,baseClass:"chart-color-setting",jimuUrl:u.toUrl("jimu"),colors:{c0:"#68D2E0 #087E92 #47BCF5 #FBE66A #F29157 #C8501D".split(" "),c1:"#5d9cd3 #eb7b3a #a5a5a5 #febf29 #4673c2 #72ad4c".split(" "),
c2:"#5d9cd3 #a5a5a5 #4673c2 #285f8f #636363 #274577".split(" "),c3:"#eb7b3a #febf29 #72ad4c #9c4618 #987214 44682e".split(" "),c4:"#72ad4c #4673c2 #febf29 #44682e #274577 #987214".split(" "),g1:["#43729b","#c4d5ea"],g2:["#ac5928","#f5ccbf"],g3:["#787878","#d8d8d8"],g4:["#bb8b1b","#fee1be"],g5:["#30538d","#c0c9e3"],g6:["#517e36","#c9dbc2"],g7:["#c4d5ea","#43729b"],g8:["#f5ccbf","#ac5928"],g9:["#d8d8d8","#787878"],g10:["#fee1be","#bb8b1b"],g11:["#c0c9e3","#30538d"],g12:["#c9dbc2","#517e36"]},nls:null,
singleColor:!0,postCreate:function(){this.inherited(arguments);this.singleColorPicker=new t({appearance:{showTransparent:!1,showColorPalette:!0,showCoustom:!0,showCoustomRecord:!0}});this.singleColorPicker.placeAt(this.singleColorSection);this.own(k(this.singleColorPicker,"change",c.hitch(this,this._onColorPickChange)));this.setMode(this.singleColor)},setMode:function(a){(this.singleColor=a)?(b.removeClass(this.singleColorSection,"hide"),b.addClass(this.colorSelect.domNode,"hide")):(b.addClass(this.singleColorSection,
"hide"),b.removeClass(this.colorSelect.domNode,"hide"))},setColorsAutomatically:function(a){a&&("string"===typeof a?this.setSingleColor(a):0<a.length&&(1===a.length?this.setSingleColor(a[0]):this.setMultipleColor(a)))},disable:function(){this.singleColor?this.singleColorPicker.disable&&this.singleColorPicker.disable():(b.setStyle(this.colorSelect,"cursor","not-allowed"),this.cacheColor=this.getColors(),this.colorSelect.set("value","c0"),this.colorSelect.disabled=!0)},enable:function(){this.singleColor?
this.singleColorPicker.enable&&this.singleColorPicker.enable():(b.setStyle(this.colorSelect,"cursor","pointer"),this.colorSelect.disabled=!1,this.cacheColor&&this.setMultipleColor(this.cacheColor))},setSingleColor:function(a){this.setMode(!0);a&&(a=new d(a),this.singleColorPicker.setColor(a))},setMultipleColor:function(a){this.setMode(!1);if(a){var b=Object.keys(this.colors),f="c1";e.some(b,c.hitch(this,function(b){var g=!1,h=this.colors[b];h.length===a.length&&(g=e.every(h,c.hitch(this,function(b,
c){b=new d(b);c=new d(a[c]);return b.toHex().toLowerCase()===c.toHex().toLowerCase()})))&&(f=b);return g}));this.colorSelect.set("value",f)}},getColors:function(){return this.singleColor?[this.getSingleColor()]:this.getMultipleColors()},getSingleColor:function(){return this.singleColorPicker.getColor().toHex()},getMultipleColors:function(){return this.colors[this.colorSelect.get("value")]},_onColorPickChange:function(a){this.emit("change",a.toHex())},_onColorSelectChanged:function(){var a=this.getMultipleColors();
this.emit("change",a)}})});