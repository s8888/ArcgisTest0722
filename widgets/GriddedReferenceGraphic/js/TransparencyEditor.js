// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/GriddedReferenceGraphic/templates/TransparencyEditor.html":'\x3cdiv class\x3d"colorPickerEditor"\x3e\r\n  \x3cdiv class\x3d"sliderbar" data-dojo-attach-point\x3d"sliderBar"\x3e\x3c/div\x3e\r\n  \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/NumberSpinner" value\x3d"0"\r\n         data-dojo-attach-point\x3d"spinner" data-dojo-props\x3d"smallDelta:10,intermediateChanges:true,constraints: {min:0,max:100}"\x3e\r\n  \x3cspan \x3e%\x3c/span\x3e\r\n\x3c/div\x3e\r\n\r\n'}});
define("dojo/_base/declare dojo/_base/lang dojo/on dojo/query dojo/Stateful dojo/_base/html dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!../templates/TransparencyEditor.html dijit/form/HorizontalSlider dijit/form/NumberSpinner".split(" "),function(d,b,c,e,f,g,h,k,l,m,n){return d([f,h,k,l],{templateString:m,transparency:1,postCreate:function(){this.slider=new n({name:"slider",value:0,minimum:0,maximum:100,discreteValues:101,intermediateChanges:!0,showButtons:!1,style:"width:140px;display: inline-block;"},
this.sliderBar);this.slider.startup();this.inherited(arguments)},startup:function(){this.own(c(this.slider,"change",b.hitch(this,function(a){!1===this._isSameVal()&&(this.spinner.setValue(a),this._set("transparency",a/100))})));this.own(c(this.spinner,"change",b.hitch(this,function(a){!1===this._isSameVal()&&100>=a&&(this.slider.setValue(a),this._set("transparency",a/100))})));this._stylePolyfill();this.inherited(arguments)},_isSameVal:function(){return this.slider.getValue()===this.spinner.getValue()},
getValues:function(){var a=null,a=this.spinner.getValue()/100;return{transparency:a}},setValues:function(a){if("object"===typeof a||"string"===typeof a)a.transparency="undefined"===typeof a.transparency?0:100*a.transparency,this.slider.setValue(a.transparency),this.spinner.setValue(a.transparency)},_stylePolyfill:function(){var a=e(".dijitSliderLeftBumper",this.domNode)[0];a&&a.parentNode&&g.setStyle(a.parentNode,"background-color","#24b5cc")}})});