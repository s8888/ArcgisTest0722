// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/Color dojo/_base/array dojo/DeferredList dojo/Deferred dojo/dom-class dojo/dom-construct dojo/dom-geometry dojo/dom-style dojo/on dojo/query dojo/keys esri/graphic esri/Color esri/layers/FeatureLayer esri/symbols/SimpleMarkerSymbol esri/symbols/SimpleLineSymbol esri/symbols/Font esri/symbols/TextSymbol esri/tasks/query esri/geometry/geometryEngine jimu/utils ./analysisUtils".split(" "),function(T,h,M,F,N,J,u,r,U,O,w,Z,B,P,V,C,Q,R,W,X,Y,z,K,t){return T("ProximityInfo",
null,{featureCount:0,mapServiceLayer:!1,loading:!1,queryOnLoad:!1,incidentCount:0,constructor:function(a,e,f){this.tab=a;this.container=e;this.parent=f;this.graphicsLayer=this.incident=null;this.specialFields={};this.typeIdField="";this.types=[];this.dateFields={};this.config=f.config;this.parentNode=f.domNode;this.baseLabel=""!==a.label?a.label:a.layerTitle?a.layerTitle:a.layers},queryTabCount:function(a,e,f,k){var l=new J;this.incidentCount=a.length;var c=[this.tab.tabLayers[0]];this.mapServiceLayer&&
1<this.tab.tabLayers.length&&(c=[this.tab.tabLayers[1]]);if(0<this.tab.tabLayers.length&&this.tab.tabLayers[0].url&&-1<this.tab.tabLayers[0].url.indexOf("MapServer")){this.mapServiceLayer=!0;var b;"undefined"!==typeof this.tab.tabLayers[0].infoTemplate?(this.summaryLayer=this.tab.tabLayers[0],this.summaryLayer.hasOwnProperty("loaded")&&this.summaryLayer.loaded?(this.summaryFields=this._getFields(this.summaryLayer),this._performQuery(a,e,f,k,c).then(function(a){l.resolve(a)})):(b=new C(this.summaryLayer.url),
b.infoTemplate=this.tab.tabLayers[0].infoTemplate,c=[b],this.tab.tabLayers=c,w(b,"load",h.hitch(this,function(){this.summaryLayer=b;this.summaryFields=this._getFields(this.summaryLayer);this._performQuery(a,e,f,k,c).then(function(a){l.resolve(a)})})))):this.loading||(b=new C(this.tab.tabLayers[0].url),this.loading=!0,w(b,"load",h.hitch(this,function(){this.summaryLayer=b;this.summaryFields=this._getFields(this.summaryLayer);for(var c=this.tab.tabLayers[0].url.split("MapServer/")[1],g=this.parent.map.itemInfo.itemData.operationalLayers,
h=0;h<g.length;h++){var p=g[h];if(-1<this.tab.tabLayers[0].url.indexOf(p.url)&&"undefined"!==typeof p.layerObject&&p.layerObject.infoTemplates&&(p=p.layerObject.infoTemplates[c])){b.infoTemplate=p.infoTemplate;break}}this.tab.tabLayers=[b];this.loading=!1;this._performQuery(a,e,f,k,this.tab.tabLayers).then(function(a){l.resolve(a)})})))}this.mapServiceLayer||this._performQuery(a,e,f,k,c).then(function(a){l.resolve(a)});return l},_performQuery:function(a,e,f,k,l){var c=new J,b=[],d,g;0<e.length?g=
t.getGeoms(e):0<a.length&&(g=t.getGeoms(a));this.summaryGeoms=g;if(0<g.length)for(a=0;a<g.length;a++)b=g[a],e=t.createDefArray(l,b,this.parent.opLayers,this.tab),d=0===a?b=e:b=d.concat(e);(new N(b)).then(h.hitch(this,function(a){for(var b=0,e=0;e<a.length;e++){var d=a[e][1];isNaN(d)?d&&d.features?b+=d.features.length:d&&"undefined"!==typeof d.length&&(b+=d.length):b+=d}this.updateTabCount(b,f,k);c.resolve(b)}));return c},updateTabCount:function(a,e,f){this.featureCount=a;t.updateTabCount(this.featureCount,
e,f,this.baseLabel,this.incidentCount)},updateForIncident:function(a,e,f,k,l,c){this.incidentCount=a.length;this.allFields="undefined"!==typeof l&&"undefined"!==typeof c?l?!0:c:!1;var b="undefined"!==typeof k,d;F.forEach(this.tab.tabLayers,h.hitch(this,function(c){b&&(d=new J);if(c.url){var g=new C(c.url,{mode:C.MODE_ONDEMAND,infoTemplate:c.infoTemplate});w(g,"load",h.hitch(this,function(){this.tab.tabLayers=[g];b?this.processIncident(a,e,f,k,l).then(h.hitch(this,function(a){d.resolve(a)}),h.hitch(this,
function(a){console.error(a);d.reject(a)})):this.processIncident(a,e,f,k,l)}))}else b?this.processIncident(a,e,f,k,l).then(h.hitch(this,function(a){d.resolve(a)}),h.hitch(this,function(a){console.error(a);d.reject(a)})):this.processIncident(a,e,f,k,l)}));if(b)return d},processIncident:function(a,e,f,k,l){this.incidents=a;var c=[],b;if(0===e.length)for(var d=0;d<a.length;d++)b=a[d],b=b.geometry?b.geometry:b,"polygon"===b.type?(e.push(b),c.push({geometry:b,buffer:b})):c.push({geometry:void 0,buffer:void 0});
else for(d=0;d<a.length;d++){b=a[d];var g=e[d].geometry?e[d].geometry:e[d];b=b.geometry?b.geometry:b;c.push({geometry:b,buffer:g})}if(0!==e.length){for(a=0;a<c.length;a++)if(e=c[a].buffer,"undefined"!==typeof e)for(b=0;b<c.length;b++)if(b!==a&&(d=c[b].buffer,"undefined"!==typeof d&&z.overlaps(e,d))){c[a].buffer=z.difference(e,d);c[b].buffer=z.difference(d,e);d=z.union(d,e);d=z.difference(d,c[a].buffer);d=z.difference(d,c[b].buffer);if(Array.isArray(c[a].geometry)){if(Array.isArray(c[b].geometry))for(g=
0;g<c[b].geometry.length;g++)c[a].geometry.push(c[b].geometry[g]);else c[a].geometry.push(c[b].geometry);g=c[a].geometry}else if(g=[],g.push(c[a].geometry),Array.isArray(c[b].geometry))for(var r=0;r<c[b].geometry.length;r++)g.push(c[b].geometry[r]);else g.push(c[b].geometry);c.push({geometry:g,buffer:d})}var p,x="undefined"!==typeof k;x?p=new J:(this.container.innerHTML="",u.add(this.container,"loading"));var q=[];this.graphicsLayer=f;f=this.tab.tabLayers[0];var v=this._getFields(f),w=t.getPopupConfiguredFields(f);
k=-1===[null,void 0,""].indexOf(f.id)?f.id:this.tab.layers;k=t.getFilter(k,this.parent.opLayers);a=[];for(e=0;e<c.length;e++)b=new Y,b.returnGeometry=!0,b.outSpatialReference=this.parent.map.spatialReference,b.geometry=c[e].buffer,b.where=k,b.outFields=["*"],"undefined"!==typeof f.queryFeatures&&a.push(f.queryFeatures(b));(new N(a)).then(h.hitch(this,function(a){for(var b=0;b<a.length;b++){var d=a[b][1];if(d&&d.features)for(var d=d.features,e=c[b].geometry,f=0;f<d.length;f++){var g=d[f],k=g.geometry,
m;if(Array.isArray(e)){for(var n,r=0;r<e.length;r++){var S=t.getDistance(e[r],k,this.parent.config.distanceUnits);if("undefined"===typeof n||S<n)n=S}k=n;m={DISTANCE:n}}else k=t.getDistance(e,k,this.parent.config.distanceUnits),m={DISTANCE:k};F.forEach(v,h.hitch(this,function(a){m[a]=g.attributes[a]}));this.config.hasOwnProperty("exportFieldsOptionForCSV")&&"allFields"===this.config.exportFieldsOptionForCSV||this.config.hasOwnProperty("csvAllFields")&&(!0===this.config.csvAllFields||"true"===this.config.csvAllFields)?
g.attributes.DISTANCE=k:(this.config.hasOwnProperty("exportFieldsOptionForCSV")&&"popUpFields"===this.config.exportFieldsOptionForCSV&&!l&&(m={DISTANCE:k},F.forEach(w,h.hitch(this,function(a){m[a]=g.attributes[a]}))),g.attributes=m);q.push(g)}}q.sort(t.compareDistance);if(x){var u={graphics:q,analysisResults:q.length,context:this};this._processResults(q,!0).then(h.hitch(this,function(a){p.resolve(h.mixin(u,a))}))}else this._processResults(q)}),h.hitch(this,function(a){console.error(a);p.reject(a)}));
if(x)return p}},_processResults:function(a,e){var f,k,l=a&&0<a.length;if(l&&"point"!==a[0].geometry.type)for(var c=a.length-1;0<=c;c--)"undefined"===typeof a[c].geometry.getExtent()&&a.splice(c,1);if(e)f=new J;else if(this.container.innerHTML="",u.remove(this.container,"loading"),this.graphicsLayer.clear(),l){k=r.create("div",{"class":"SAT_tabPanelContent"},this.container);c=r.create("div",{},k);u.add(c,"SATcolExport");u.add(c,this.parent.lightTheme?"lightThemeBorder":"darkThemeBorder");var b=r.create("div",
{title:this.parent.nls.downloadCSV,tabindex:"0",role:"button","aria-label":this.parent.nls.downloadCSV,"class":"proximityDownLoadCSVButton"},c);u.add(b,"btnExport");b.focus();K.initFirstFocusNode(this.parentNode,b);w(b,"click",h.hitch(this,this._exportToCSV,a));w(b,"keydown",h.hitch(this,function(c){if(!c.shiftKey||c.keyCode!==B.TAB)if(c.keyCode===B.ENTER||c.keyCode===B.SPACE)this._exportToCSV(a,c),setTimeout(function(){b.focus()},500)}))}var c=this.parent.nls[this.parent.config.distanceUnits],d;
"undefined"!==typeof this.tab.advStat&&"undefined"!==typeof this.tab.advStat.stats&&"undefined"!==typeof this.tab.advStat.stats.outFields?d=this.tab.advStat.stats.outFields:(d=[],0<this.tab.tabLayers.length&&F.forEach(this.tab.tabLayers,h.hitch(this,function(a){"undefined"!==typeof a.popupInfo?F.forEach(a.popupInfo.fieldInfos,h.hitch(this,function(a){if(a.visible){var b={value:0};b.expression=a.fieldName;b.label=a.label;d.push(b)}})):a.infoTemplate?F.forEach(a.infoTemplate.info.fieldInfos,h.hitch(this,
function(a){if(a.visible){var b={value:0};b.expression=a.fieldName;b.label=a.label;d.push(b)}})):F.forEach((a.layerObject?a.layerObject:a).fields,h.hitch(this,function(a){var b={value:0};b.expression=a.name;b.label=a.alias;d.push(b)}))})));var g=220,z=[];if(l)for(var p=0;p<a.length;p++){var x=p+1,q=a[p],v=q.geometry,G=v;"point"!==v.type&&(G=v.getExtent().getCenter());var v=q.attributes,n=t.getDistanceLabel(v.DISTANCE,c,this.parent.nls.approximate),D="",H=0,y=[];if("undefined"!==typeof d){for(var C=
0;C<d.length;C++){var E=d[C],I;for(I in v)if("DISTANCE"!==I&&3>H&&E.expression===I){var m=t.getFieldValue(I,v[I],this.specialFields,this.dateFields,"longMonthDayYear",this.typeIdField,this.types,this.layerObject&&this.layerObject.renderer?this.layerObject:this.layerDefinition,v,E),m="undefined"!==typeof m&&null!==m?K.stripHTML(m.toString()):"",A="undefined"!==typeof E.label&&""!==E.label?E.label:void 0,L=q._layer&&q._layer.fields?q._layer.fields:this.tab.tabLayers&&this.tab.tabLayers[0]?this.tab.tabLayers[0].fields:
void 0;L&&"undefined"===typeof A&&(L=t.getField(L,I))&&(A=L.alias);if("undefined"===typeof A||A in[""," ",null,void 0])A=I;t.isURL(m)?m='\x3ca href\x3d"'+m+'" target\x3d"_blank" style\x3d"color: inherit;"\x3e'+A+"\x3c/a\x3e":t.isEmail(m)&&(m='\x3ca href\x3d"mailto:'+m+'" style\x3d"color: inherit;"\x3e'+A+"\x3c/a\x3e");D+=E.validLabel?("undefined"!==typeof E.label&&""!==E.label?A+" ":"")+m+"\x3cbr/\x3e":m+"\x3cbr/\x3e";H+=1;y.push({label:A,value:m})}}y.push({label:this.parent.nls.distance,value:n});
0<y.length&&z.push(y)}e||(q=r.create("div",{},k),u.add(q,"SATcolRec"),u.add(q,this.parent.lightTheme?"lightThemeBorder":"darkThemeBorder"),H=r.create("div",{},q),u.add(H,"SATcolRecBar"),y=r.create("div",{innerHTML:x,tabindex:"0",role:"button","aria-label":this.parent.nls.zoomToFeature+" "+x,isLastElement:a.length-1===p},H),u.add(y,"SATcolRecNum"),a.length-1===p&&K.initLastFocusNode(this.parentNode,y),O.set(y,"backgroundColor",this.parent.config.activeColor),w(y,"click",h.hitch(this,this._zoomToLocation,
G,null)),w(y,"keydown",h.hitch(this,this._zoomToLocation,G,!0)),"point"===this.incidents[0].geometry.type&&(n=r.create("div",{innerHTML:n},H),u.add(n,"SATcolDistance")),this.parent.config.enableRouting&&(n=r.create("div",{"class":"directionsButton",title:this.parent.nls.get_directions,tabindex:"0","aria-label":this.parent.nls.get_directions,role:"button"},H),u.add(n,"SATcolDir"),w(n,"click",h.hitch(this,this._routeToIncident,G,null)),w(n,"keydown",h.hitch(this,this._routeToIncident,G,!0)),K.initLastFocusNode(this.parentNode,
n)),D=r.create("div",{"class":"SATcolWrap",innerHTML:D},q),u.add(D,"SATcolInfo"),g+=U.position(q).w,D=new R(R.STYLE_SOLID,new M.fromString(this.parent.config.activeMapGraphicColor),1),D=new Q(Q.STYLE_CIRCLE,24,D,new M.fromString(this.parent.config.activeMapGraphicColor)),n=new W,n.family="Arial",n.size="12px",x=new X(x,n,new V(this.parent.config.fontColor)),x.setOffset(0,-4),this.graphicsLayer.add(new P(G,D,v)),this.graphicsLayer.add(new P(G,x,v)))}if(!e&&l)O.set(k,"width",g+"px");else return f.resolve({reportResults:z}),
f},_exportToCSV:function(a,e,f,k){var h;this.parent.config.hasOwnProperty("exportFieldsOptionForCSV")?h=this.parent.config.exportFieldsOptionForCSV:this.parent.config.hasOwnProperty("csvAllFields")&&(h=this.parent.config.csvAllFields);a=t.exportToCSV(a,e,f,k,{type:"proximity",baseLabel:this.baseLabel,csvAllFields:h,layer:this.tab.tabLayers[0],opLayers:this.parent.opLayers,nlsValue:this.parent.nls.proximity,nlsCount:this.parent.nls.count,unit:this.parent.nls[this.parent.config.distanceUnits],approximateLabel:this.parent.nls.approximate});
this.summaryLayer=a.summaryLayer;return a.details},_getFields:function(a){this.layerDefinition=K.getFeatureLayerDefinition(a);this.layerObject=a;a=t.getFields(a,this.tab,this.allFields,this.parent);this.dateFields=a.dateFields;this.specialFields=a.specialFields;this.typeIdField=a.typeIdField;this.types=a.types;this.displayFields=t.getDisplayFields(this.tab);return a.fields},_zoomToLocation:function(a,e,f){f.shiftKey&&f.keyCode===B.TAB||e&&f.keyCode!==B.ENTER&&f.keyCode!==B.SPACE||this.parent.zoomToLocation(a)},
_routeToIncident:function(a,e,f){e&&f.keyCode!==B.ENTER&&f.keyCode!==B.SPACE||this.parent.routeToIncident(a)}})});