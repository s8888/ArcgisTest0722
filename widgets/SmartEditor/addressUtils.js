// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/Deferred dojo/on esri/tasks/locator dijit/_WidgetBase".split(" "),function(d,b,e,c,f,g){return d([g],{_locatorInstance:null,postCreate:function(){this._initReverseGeocoder()},_initReverseGeocoder:function(){this.config.geocoderSettings&&this.config.geocoderSettings.url&&(this._locatorInstance=new f(this.config.geocoderSettings.url),this.own(c(this._locatorInstance,"location-to-address-complete",b.hitch(this,this._onLocationToAddressComplete))),this.own(c(this._locatorInstance,
"error",b.hitch(this,function(){this._onLocationToAddressComplete({})}))))},locateAddress:function(a){this.returnDef=new e;this._locatorInstance?this._locatorInstance.locationToAddress(a,100):this._onLocationToAddressComplete({});return this.returnDef.promise},_onLocationToAddressComplete:function(a){a&&a.address&&a.address.address&&(a=a.address.address);this.returnDef&&this.returnDef.resolve(a)}})});