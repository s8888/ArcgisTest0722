// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/lang dojo/_base/declare dojo/_base/Deferred dojo/dom-construct dijit/Dialog dijit/form/Button dijit/form/CheckBox".split(" "),function(d,f,g,b,h,e,k){return f(h,{okButton:null,cancelButton:null,skipCheckBox:null,hasOkButton:!0,hasCancelButton:!0,hasSkipCheckBox:!0,hasUnderlay:!0,dfd:null,buttonNode:null,constructor:function(a){d.mixin(this,a)},postCreate:function(){this.inherited("postCreate",arguments);var a,c=!1;a=b.create("div",{className:"dijitDialogPaneContent dialogConfirm"},
this.domNode,"last");this.hasSkipCheckBox&&(this.skipCheckBox=new k({checked:!1},b.create("div")),a.appendChild(this.skipCheckBox.domNode),b.create("label",{"for":this.skipCheckBox.id,innerHTML:""},a));this.hasOkButton&&(this.okButton=new e({label:"OK",onClick:d.hitch(this,function(){c=this.hasSkipCheckBox?this.skipCheckBox.get("checked"):!1;this.hide();this.dfd.resolve(c)})},b.create("div")),a.appendChild(this.okButton.domNode));this.hasCancelButton&&(this.cancelButton=new e({label:"Cancel",onClick:d.hitch(this,
function(){c=this.hasSkipCheckBox?this.skipCheckBox.get("checked"):!1;this.hide();this.dfd.cancel(c)})},b.create("div")),a.appendChild(this.cancelButton.domNode));this.buttonNode=a},show:function(){this.inherited("show",arguments);this.hasUnderlay||b.destroy(this.id+"_underlay");return this.dfd=new g}})});