// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define(["jimu/shared/BaseVersionManager"],function(e){function b(){this.versions=[{version:"1.0",upgrader:function(a){return a}},{version:"1.1",upgrader:function(a){return a}},{version:"1.2",upgrader:function(a){return a}},{version:"1.3",upgrader:function(a){return a}},{version:"1.4",upgrader:function(a){return a}},{version:"2.0Beta",upgrader:function(a){return a}},{version:"2.0",upgrader:function(a){return a}},{version:"2.0.1",upgrader:function(a){return a}},{version:"2.1",upgrader:function(a){a.editor.snappingTolerance=
15;a.editor.popupTolerance=5;a.editor.stickyMoveTolerance=0;return a}},{version:"2.2",upgrader:function(a){a.editor.tableInfos=[];return a}},{version:"2.3",upgrader:function(a){return a}},{version:"2.4",upgrader:function(a){return a}},{version:"2.5",upgrader:function(a){return a}},{version:"2.6",upgrader:function(a){return a}},{version:"2.7",upgrader:function(a){return a}},{version:"2.8",upgrader:function(a){return a}},{version:"2.9",upgrader:function(a){var c,d=a.editor.layerInfos.concat(a.editor.tableInfos),
d=d.filter(function(a){return a?!0:!1});for(c=0;c<d.length;c++){var b=d[c];b.allowCreate=!0;b.allowDelete=!0}return a}}]}b.prototype=new e;return b.prototype.constructor=b});