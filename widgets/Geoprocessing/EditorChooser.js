// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/html dojo/_base/array dojo/on dojo/query dijit/_WidgetBase dijit/form/Select jimu/utils".split(" "),function(f,g,b,e,h,k,l,m,n){return f([l],{baseClass:"jimu-gp-editor-chooser",editors:[{name:"NumberTextBox",label:"NumberTextBox",description:""},{name:"URLInput",label:"URLInput",description:""},{name:"CheckBox",label:"CheckBox",description:""},{name:"DateTimeEditor",label:"DateTime Chooser",description:""},{name:"LinerUnitEditor",label:"LinerUnit Editor",
description:""},{name:"SelectFeatureSetFromLayer",label:"SelectFeatureSetFromLayer",description:""},{name:"SelectFeatureSetFromUrl",label:"SelectFeatureSetFromUrl",description:""},{name:"GetUrlObjectFromLayer",label:"GetUrlObjectFromLayer",description:""},{name:"LayerFieldChooser",label:"LayerFieldChooser",description:""}],postCreate:function(){this.inherited(arguments);this._createEditorNodes()},_createEditorNodes:function(){e.forEach(this.editors,function(a){this._createEditorNode(a)},this)},_createEditorNode:function(a){var c=
b.create("div",{"class":"editor-node"},this.domNode);this.box=b.create("div",{"class":"node-box"},c);b.create("img",{src:a.img},this.box);b.create("div",{"class":"node-label",innerHTML:n.sanitizeHTML(a.label)},c);if("LayerFieldChooser"===a.name){var d=new m({options:e.map(this.inputParams,function(a){return{label:a.name,value:a.name}}),style:{position:"absolute",right:0,bottom:0}});d.placeAt(this.box)}this.own(h(c,"click",g.hitch(this,function(){k(".editor-node").removeClass("jimu-state-selected");
b.addClass(c,"jimu-state-selected");this.selectedEditor=a;d&&(this.selectedEditor.dependParam=d.getValue())})));return c}})});