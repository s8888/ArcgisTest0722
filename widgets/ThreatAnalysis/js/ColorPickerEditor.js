// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/ThreatAnalysis/templates/ColorPickerEditor.html":'\x3cdiv class\x3d"colorPickerEditor"\x3e\r\n  \x3cdiv class\x3d"colorPicker" data-dojo-attach-point\x3d"colorPicker"\x3e\x3c/div\x3e\r\n  \x3cdiv class\x3d"sliderbar" data-dojo-attach-point\x3d"sliderBar"\x3e\r\n    \x3col data-dojo-type\x3d"dijit/form/HorizontalRuleLabels" style\x3d"height:2.5em;" container\x3d"topDecoration"\x3e\r\n      \x3cli\x3e${nls.transparencyLabel}\x3c/li\x3e\r\n      \x3cli\x3e\x3c/li\x3e\r\n    \x3c/ol\x3e\r\n  \x3c/div\x3e\r\n  \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/NumberSpinner" value\x3d"0" data-dojo-attach-point\x3d"spinner"\r\n    data-dojo-props\x3d"smallDelta:10,intermediateChanges:true,constraints: {min:0,max:100}"\x3e\r\n  \x3cdiv class\x3d\'styleSelectSection\'\x3e\r\n    \x3clabel for\x3d"${id}_select"\x3e${nls.style}\x3c/label\x3e\r\n    \x3cselect class\x3d"styleSelect" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"dropdown" /\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/_base/Color dojo/on dojo/dom-class dojo/query dojo/_base/html dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!../templates/ColorPickerEditor.html dijit/form/HorizontalSlider jimu/dijit/ColorPickerPopup dijit/form/NumberSpinner".split(" "),function(e,f,b,g,c,t,h,k,l,m,n,p,q,r){return e([l,m,n],{_defaultColor:"#485566",templateString:p,nls:null,postCreate:function(){this.colorPicker=new r({color:this._defaultColor},
this.colorPicker);this.colorPicker.startup();this.own(this.colorPicker.on("change",b.hitch(this,function(){this.onColorPickerEditorChanged()})));this.slider=new q({name:"slider",value:100,minimum:0,maximum:100,discreteValues:101,intermediateChanges:!0,showButtons:!1,style:"display: inline-block;"},this.sliderBar);this.slider.startup();var a=[],d,c="esriSLSDash esriSLSDashDot esriSLSDashDotDot esriSLSDot esriSLSLongDash esriSLSLongDashDot esriSLSNull esriSLSShortDash esriSLSShortDashDot esriSLSShortDashDotDot esriSLSShortDot esriSLSSolid".split(" "),
e="esriSFSBackwardDiagonal esriSFSCross esriSFSDiagonalCross esriSFSForwardDiagonal esriSFSHorizontal esriSFSNull esriSFSSolid esriSFSVertical".split(" ");"line"===this.type?f.forEach(c,b.hitch(this,function(b){d={value:b,label:this.nls.lineStyles[b]};a.push(d)})):f.forEach(e,b.hitch(this,function(b){d={value:b,label:this.nls.fillStyles[b]};a.push(d)}));this.dropdown.addOption(a);this.inherited(arguments)},startup:function(){this.own(c(this.slider,"change",b.hitch(this,function(a){isNaN(a)||!1!==
this._isSameVal()||(a>this.spinner.maximum?(this.spinner.setValue(0),this.spinner.setValue(this.spinner.maximum)):this.spinner.setValue(a))})));this.own(c(this.spinner,"change",b.hitch(this,function(a){isNaN(a)||!1!==this._isSameVal()||(a>this.slider.maximum?(this.slider.setValue(0),this.slider.setValue(this.slider.maximum)):this.slider.setValue(a))})));this.own(c(this.dropdown,"change",b.hitch(this,function(){this.onColorPickerEditorChanged()})));this._stylePolyfill();this.inherited(arguments)},
_isSameVal:function(){return this.slider.getValue()===this.spinner.getValue()},getValues:function(){var a=null,b=null;(b=this.colorPicker.getColor())&&b.toHex&&(a=b.toHex());b=this.spinner.getValue()/100;return{color:a,transparency:b}},setValues:function(a){if("object"===typeof a||"string"===typeof a)this.colorPicker.setColor(new g(a.color)),a.transparency="undefined"===typeof a.transparency?0:100*a.transparency,this.slider.setValue(a.transparency),this.spinner.setValue(a.transparency)},_stylePolyfill:function(){var a=
h(".dijitSliderLeftBumper",this.domNode)[0];a&&a.parentNode&&k.setStyle(a.parentNode,"background-color","#24b5cc")},onColorPickerEditorChanged:function(){}})});