// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/SmartEditor/setting/SmartActionGroup.html":'\x3cdiv class\x3d"esriCTSmartActionsGroupContainer"\x3e\r\n  \x3cdiv class\x3d"esriCTRowContainer row"\x3e\r\n    \x3cdiv class\x3d"esriCTlabel"\x3e\r\n      ${nls.smartActionsPage.groupNameLabel}\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"esriCTLayerField"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"groupNameTextBoxNode"\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"esriCTRowContainer row"\x3e\r\n    \x3cdiv class\x3d"esriCTlabelParentContainer"\x3e\r\n      \x3cdiv class\x3d"esriCTlabel"\x3e\r\n        ${nls.smartActionsPage.layerForExpressionLabel}\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"esriCTLayerFieldDropBox"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"layerSelectorDiv"\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"esriCTHintCheck"\x3e\r\n      ${nls.smartActionsPage.layerForExpressionNote}\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"esriCTRowContainer row"\x3e\r\n    \x3cdiv class\x3d"esriCTlabel"\x3e${nls.smartActionsPage.expressionText}\x3c/div\x3e\r\n    \x3cdiv class\x3d"esriCTExpression"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"expressionTextBoxNode" class\x3d"esriCTExpressionTextBoxNode"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"editExpressionIconNode" title\x3d"${nls.smartActionsPage.editExpressionLabel}"\x3e\r\n        \x3cdiv class\x3d"jimu-icon jimu-icon-edit" data-dojo-attach-point\x3d"editExpressionIconNode"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"esriCTRowContainer row"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"submitWhenHiddenNode" class\x3d"esriCTlabel esriCTSubmitAttributeDataText"\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"esriCTRowContainer row"\x3e\r\n    \x3cfieldset class\x3d"esriCTFieldset"\x3e\r\n      \x3clegend class\x3d"esriCTLegendTitle"\x3e${nls.smartActionsPage.layerAndFieldsApplyLabel}\x3c/legend\x3e\r\n      \x3cdiv class\x3d"esriCTTableParentContainer" data-dojo-attach-point\x3d"tableParentContainer"\x3e\r\n      \x3c/div\x3e\r\n    \x3c/fieldset\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/Evented dojo/_base/lang dojo/_base/array dojo/dom-construct dojo/dom-class dojo/dom-style dojo/dom-attr dojox/html/entities dojo/on dojo/query dojo/Deferred dojo/text!./SmartActionGroup.html dijit/_TemplatedMixin jimu/dijit/LayerChooserFromMap jimu/dijit/LayerChooserFromMapWithDropbox jimu/BaseWidgetSetting jimu/dijit/SimpleTable jimu/dijit/Popup dijit/form/ValidationTextBox jimu/dijit/CheckBox dijit/form/CheckBox jimu/dijit/Message ./FilterPage jimu/utils dijit/registry".split(" "),
function(D,E,h,k,g,q,y,n,F,r,l,G,H,I,z,J,K,L,C,A,B,M,N,O,P,t){return D([K,E,I],{baseClass:"jimu-widget-smartEditor-setting-smartActionGroup",templateString:H,_totalLayers:[],_prevAppliedOn:[],filterInfo:{filter:""},searchTextBox:null,postCreate:function(){this.inherited(arguments);this._totalLayers=[];this._prevAppliedOnLayers=[];this.appliedOn&&(this._prevAppliedOnLayers=h.clone(Object.keys(this.appliedOn)));this._initComponents();this._handleParentCheckBoxState()},_initComponents:function(){this.groupNameTextBox=
new A({required:!0,trim:!0,"class":"esriCTGroupNameTextBox"},g.create("div",{},this.groupNameTextBoxNode));this.groupNameTextBox.validator=h.hitch(this,function(a){return a?a!==this.prevName&&this.editUtils.isDuplicateGroupName(a,this.existingGroupNames)?(this.groupNameTextBox.set("invalidMessage",this.nls.smartActionsPage.uniqueGroupNameMsg),!1):!0:(this.groupNameTextBox.set("invalidMessage",this.nls.smartActionsPage.requiredGroupNameMsg),!1)});this.name&&this.groupNameTextBox.set("value",this.name);
this._initLayerSelector();this.expressionTextBox=new A({disabled:!0,required:!0,"class":"esriCTTextBoxNode",promptMessage:this.nls.smartActionsPage.invalidExpression},g.create("div",{},this.expressionTextBoxNode));this.filterInfo&&this.filterInfo.expression&&this.expressionTextBox.set("value",this.filterInfo.expression);this.own(r(this.editExpressionIconNode,"click",h.hitch(this,this._showFilter)));this._submitHidden=new B({label:this.nls.smartActionsPage.submitAttributeText},g.create("div",{},this.submitWhenHiddenNode));
this.submitWhenHidden&&this._submitHidden.setValue(this.submitWhenHidden);this._createTable(this.appliedOn)},_addLayersDropDown:function(){var a,b;a=this._createLayerChooserMapArgs();a=new z(a);a.startup();a=new J({layerChooser:a});a.placeAt(this.layerSelectorDiv);a.startup();this._layerSelector=a;b=this._totalLayers[0];this.layerForExpression&&(a=this._jimuLayerInfos.getLayerOrTableInfoById(this.layerForExpression))&&(b=a.layerObject);this._layerSelector.setSelectedLayer(b);this.own(r(this._layerSelector,
"selection-change",h.hitch(this,function(){this.expressionTextBox.get("value")&&(new N({message:this.nls.smartActionsPage.warningMsgOnLayerChange}),this.onFilterInfoChanged({expression:"",filter:null,submitWhenHidden:!1}))})))},_createLayerChooserMapArgs:function(){return{multiple:!1,createMapResponse:this.map.webMapResponse,filter:this._createFiltersForLayerSelector()}},_createFiltersForLayerSelector:function(){return z.createFeaturelayerFilter(["point","polyline","polygon"],!1,!0)},_initLayerSelector:function(){var a;
a=this._createLayerChooserMapArgs();this._layerChooserFromMap=new z(a);this._layerChooserFromMap.startup();a=this._layerChooserFromMap.layerInfosObj.getLayerInfoArray();var b=this._layerChooserFromMap.layerInfosObj.getTableInfoArray();b&&0<b.length&&(a=a.concat(b));this._getAllFilteredLayers(a,[])},_isLayerEditable:function(a){var b=!1;a&&a.layerObject&&(a=a.layerObject.getEditCapabilities(),a.canCreate||a.canUpdate||a.canDelete||a.canUpdateGeometry)&&(b=!0);return b},_getAllFilteredLayers:function(a,
b){k.forEach(a,h.hitch(this,function(a){var c;a.isLeaf()?(c=new G,this._layerChooserFromMap.filter(a).then(h.hitch(this,function(b){b&&this._isLayerEditable(a)&&this._totalLayers.push(a);c.resolve()})),b.push(c)):this._getAllFilteredLayers(a.newSubLayers,b)}))},_validateGroup:function(){var a;if(!this.groupNameTextBox.isValid())return this.groupNameTextBox.focus(),!1;if(this._layerSelector){if(a=this._layerSelector.getSelectedItem(),!a||!a.layerInfo||!a.layerInfo.layerObject)return!1}else return!1;
return this.expressionTextBox.isValid()?!0:(this.expressionTextBox.set("disabled",!1),this.expressionTextBox.focus(),this.expressionTextBox.set("disabled",!0),!1)},showDialog:function(){this._addLayersDropDown();var a=new C({titleLabel:this.nls.smartActionsPage.smartActionLabel,width:900,maxHeight:550,autoHeight:!1,content:this,"class":this.baseClass,buttons:[{label:this.nls.ok,onClick:h.hitch(this,function(){var b={},c=this._layerSelector.getSelectedItem().layerInfo.layerObject;if(this._validateGroup()){b.name=
this.groupNameTextBox.get("value");b.submitWhenHidden=this._submitHidden.checked;b.layerForExpression=c.id;b.filterInfo=this.filterInfo;b.appliedOn=this.appliedOn;this._applySettingsInLayer(b);for(var d in b.appliedOn){var c=b.appliedOn[d],e;for(e in c)c[e].hasOwnProperty("Priority")&&delete c[e].Priority,c[e].hasOwnProperty("ExistingExpressions")&&delete c[e].ExistingExpressions}this.emit("groupInfoUpdated",b);a.close()}})},{label:this.nls.cancel,classNames:["jimu-btn-vacation"],onClick:h.hitch(this,
function(){a.close()})}],onClose:h.hitch(this,function(){})});this.groupNameTextBox.focus();this._setMaxWidth()},_getTableData:function(){var a=[],b;k.forEach(this._layerTable.getRows(),h.hitch(this,function(c){c.layerSelector&&(b={},b.layerId=c.layerSelector.getSelectedItem().layerInfo.id,b.field=c.layerFields.getValue(),a.push(b))}));return a},_showFilter:function(a){if(!this.groupNameTextBox.isValid())return this.groupNameTextBox.focus(),!1;this._filterPage&&this._filterPage.destroy();var b=this._layerSelector.getSelectedItem().layerInfo.layerObject;
this._filterPage=new O({nls:this.nls,_resourceInfo:this._resourceInfo,_url:b.url,_layerId:b.id,_filterInfo:this.filterInfo,_groupName:this.groupNameTextBox.get("value")});this.own(r(this._filterPage,"filterInfo",h.hitch(this,function(a){this.onFilterInfoChanged(a)})));this._filterPage.popup(a)},onFilterInfoChanged:function(a){this.filterInfo=h.clone(a);this.filterInfo.filter=JSON.parse(F.decode(this.filterInfo.filter));this.expressionTextBox.set("value",a.expression);this._destroyTable();this._createTable(this.appliedOn);
this._handleParentCheckBoxState()},_destroyTable:function(){g.empty(this.tableParentContainer)},_createHeaderObj:function(a,b,c){var d,e=["","Hide","Required","Disabled"],f=g.create("th"),p=g.create("div",{innerHTML:a.title,title:a.title});a.hasOwnProperty("headerIcon")&&(d=g.create("div",{title:a.title}));0<c&&(q.add(f,"esriCTTableTH"),q.add(p,"esriCTTableHeaderTitle "),a.hasOwnProperty("headerIcon")&&q.add(d,"esriCTTableHeaderIcon "+a.headerIcon));var m=g.create("div",{"class":"esriCTPriorityColumnParentContainer"}),
u=g.create("div",{"class":"esriCTPriorityColumnParentDiv"});u.appendChild(p);a.hasOwnProperty("headerIcon")&&u.appendChild(d);d=g.create("div",{"class":"esriCTPriorityNumberDiv"});if(3>=c){q.add(d,"esriCTSAHeaderCheckbox");var v,w,x;v=new B({label:""},g.create("div",{},d));n.set(v.domNode,"action",e[c]);r(v,"change",h.hitch(this,function(a){var b=n.get(v.domNode,"action");w=""!==this.searchTextBox.get("value")?l("tr[searchstring^\x3d'"+this.searchTextBox.get("value").toLowerCase()+"']",this.tableParentContainer):
l("tr.esriCTSmartActionGroupRow",this.tableParentContainer);k.forEach(w,h.hitch(this,function(c){var d,e;d=n.get(c,"layerid");e=n.get(c,"field");d&&e&&(this.appliedOn[d][e][b]=a);(x=l("[action\x3d"+b+"]",c))&&x[0]&&(x=t.byNode(x[0]),a?x.check(!0):x.uncheck(!0))}))}))}4===c&&(g.create("div",{"class":"esriCTPriorityOneDiv",innerHTML:this.nls.smartActionsPage.priorityOneText},d),g.create("div",{"class":"esriCTPriorityTwoDiv",innerHTML:this.nls.smartActionsPage.priorityTwoText},d),g.create("div",{"class":"esriCTPriorityThreeDiv",
innerHTML:this.nls.smartActionsPage.priorityThreeText},d));0===c?this._addSearchControl(m):(m.appendChild(u),m.appendChild(d));f.appendChild(m);y.set(f,"width",a.width);b.appendChild(f)},_addSearchControl:function(a){this.searchTextBox=new A({trim:!0,placeHolder:this.nls.actionPage.searchPlaceHolder,intermediateChanges:!0},g.create("div",{},a));y.set(this.searchTextBox.domNode,"width","350px");this.own(r(this.searchTextBox,"change",h.hitch(this,this._searchTextUpdated)));a=g.create("div",{"class":"esriCTExpandAllNode"},
a);this._expandAllCheckBox=new M({"class":"switch-toggle",checked:!1},g.create("div",{},a));g.create("label",{innerHTML:this.nls.actionPage.expandAllLabel},a);this.own(r(this._expandAllCheckBox,"change",h.hitch(this,function(a){a?(a=l(".esriCTToggleLayerIcon.esriCTToggleLayerCollapsed.esriCTToggleLayerExpanded",this.layerAndFieldsMainDiv))&&0<a.length&&k.forEach(a,function(a){a.click()}):(a=l(".esriCTToggleLayerIcon.esriCTToggleLayerCollapsed",this.layerAndFieldsMainDiv))&&0<a.length&&k.forEach(a,
function(a){q.contains(a,"esriCTToggleLayerExpanded")||a.click()})})))},_searchTextUpdated:function(a){var b,c;a=a.toLowerCase();if(""!==a){b=l("[searchstring]",this.tableParentContainer);c=l("tr[searchstring^\x3d'"+a+"']",this.tableParentContainer);b.style("display","none");b.removeClass("esriCTNotFilteredBySearch");b.addClass("esriCTFilteredBySearch");c.style("display","");c.replaceClass("esriCTNotFilteredBySearch","esriCTFilteredBySearch");a=this.appliedOn;this._handleParentCheckBoxState(c);for(var d in a){var e,
f;if(0<Object.keys(a[d]).length){c=l("[layermaindivid \x3d '"+d+"']",this.tableParentContainer);b=l("[layerid\x3d'"+d+"']",this.tableParentContainer);e=!0;for(f=0;f<b.length;f++)if(q.contains(b[f],"esriCTNotFilteredBySearch")){e=!1;break}e?c.style("display","none"):c.style("display","")}}}else l("[layermaindivid]",this.tableParentContainer).style("display",""),l("[searchstring]",this.tableParentContainer).style("display",""),l("[searchstring]",this.tableParentContainer).removeClass("esriCTFilteredBySearch"),
l("[searchstring]",this.tableParentContainer).addClass("esriCTNotFilteredBySearch"),this._handleParentCheckBoxState(c)},_handleParentCheckBoxState:function(a){var b=!0,c=!0,d=!0,e,f,p,g,u;a||(a=l("tr.esriCTSmartActionGroupRow",this.tableParentContainer));k.forEach(a,h.hitch(this,function(a){e=l("[action\x3d'Hide']",a);f=l("[action\x3d'Required']",a);p=l("[action\x3d'Disabled']",a);0<e.length&&0<f.length&&0<p.length&&(e=t.byNode(e[0]),f=t.byNode(f[0]),p=t.byNode(p[0]),e.getValue()||(b=!1),f.getValue()||
(c=!1),p.getValue()||(d=!1))}));a=t.byNode(l(".esriCTTableTH [action\x3d'Hide']",this.tableParentContainer)[0]);g=t.byNode(l(".esriCTTableTH [action\x3d'Required']",this.tableParentContainer)[0]);u=t.byNode(l(".esriCTTableTH [action\x3d'Disabled']",this.tableParentContainer)[0]);b?a.check(!0):a.uncheck(!0);c?g.check(!0):g.uncheck(!0);d?u.check(!0):u.uncheck(!0)},_createHeaders:function(a){var b,c,d;c=[{title:"",icon:"",width:"41%"},{title:this.nls.actionPage.actions.hide,width:"13%",headerIcon:"esriCTHide"},
{title:this.nls.actionPage.actions.required,width:"13%",headerIcon:"esriCTRequired"},{title:this.nls.actionPage.actions.disabled,width:"13%",headerIcon:"esriCTDisabled"},{title:this.nls.smartActionsPage.priorityColumnText,icon:"",width:"20%"}];d=g.create("thead",{});b=d.insertRow(0);q.add(b,"esriCTTableRow");k.forEach(c,h.hitch(this,function(a,c){this._createHeaderObj(a,b,c)}));a.appendChild(d)},_setMaxWidth:function(){var a=l(".esriCTTableHeaderTitle");k.forEach(a,h.hitch(this,function(a){var b=
y.getComputedStyle(a).width;y.set(a,"max-width",b)}))},_createPriorityIcons:function(a,b){var c=b.Priority;a=g.create("td",{style:{width:"20%"}},a);var d=g.create("div",{"class":"esriCTPriorityIconMainDiv"},a);k.forEach(c,h.hitch(this,function(a){g.create("div",{"class":"esriCTPriorityIcons esriCT"+a,title:this.nls.actionPage.actions[a.toLowerCase()]},d)}));c=g.create("div",{"class":"jimu-icon jimu-icon-edit esriCTPriorityEditIcon",title:this.nls.smartActionsPage.priorityPopupTitle},d);this.own(r(c,
"click",h.hitch(this,function(a){this._createPriorityTable(a.currentTarget.parentNode);this._createPriorityPopup(a.currentTarget.parentNode,b)})))},_createPriorityTable:function(a){this._priorityTable=new L({fields:[{name:"priorityName",title:this.nls.smartActionsPage.priorityPopupColumnTitle,type:"empty",width:"80%"},{name:"actions",title:this.nls.intersectionPage.actionsText,type:"actions",width:"20%",actions:["up","down"],"class":"actions"}],selectable:!1});this._priorityTable.startup();this._populatePriorityTable(a)},
_getExistingPriority:function(a){var b={esriCTHide:"Hide",esriCTRequired:"Required",esriCTDisabled:"Disabled"},c=[];k.forEach(a.childNodes,h.hitch(this,function(a,e){if(3>e)for(var d in b)q.contains(a,d)&&c.push(b[d])}));return c},_populatePriorityTable:function(a){a=this._getExistingPriority(a);k.forEach(a,h.hitch(this,function(a){var b=g.create("div",{innerHTML:this.nls.actionPage.actions[a.toLowerCase()],title:this.nls.actionPage.actions[a.toLowerCase()]});q.add(b,"esriCTTablePriorityTitle");n.set(b,
"priority",a);var d=g.create("div",{title:this.nls.actionPage.actions[a.toLowerCase()]});q.add(d,"esriCTPriorityPopupIcon esriCT"+a);a=this._priorityTable.addRow({}).tr;a=l(".simple-table-cell",a)[0];a.appendChild(d);a.appendChild(b)}))},_fetchPriority:function(){var a=this._priorityTable.getRows(),b=[];k.forEach(a,h.hitch(this,function(a){b.push(n.get(a.childNodes[0].childNodes[1],"priority"))}));return b},_changePriority:function(a,b){k.forEach(a,h.hitch(this,function(a,d){k.forEach(b.childNodes,
h.hitch(this,function(b,c){d===c&&(k.forEach(["Hide","Required","Disabled"],h.hitch(this,function(a){q.remove(b,"esriCT"+a)})),q.add(b,"esriCT"+a),n.set(b,"title",this.nls.actionPage.actions[a.toLowerCase()]))}))}))},_createPriorityPopup:function(a,b){var c=new C({titleLabel:this.nls.smartActionsPage.priorityPopupTitle,width:450,maxHeight:445,autoHeight:!0,content:this._priorityTable,"class":this.baseClass,buttons:[{label:this.nls.ok,onClick:h.hitch(this,function(){var d=this._fetchPriority();this._changePriority(d,
a);b.Priority=d;c.close()})},{label:this.nls.cancel,classNames:["jimu-btn-vacation"],onClick:h.hitch(this,function(){c.close()})}],onClose:h.hitch(this,function(){})})},_createLayerName:function(a,b){var c=b,d=g.create("td"),e=g.create("div",{"class":"esriCTLayerNameRowParent"},d);this._jimuLayerInfos.getLayerInfoById(b)?c=this._jimuLayerInfos.getLayerInfoById(b).layerObject.name:this._jimuLayerInfos.getTableInfoById(b)&&(c=this._jimuLayerInfos.getTableInfoById(b).layerObject.name);var f=g.create("div",
{"class":"esriCTToggleLayerIcon esriCTToggleLayerCollapsed esriCTToggleLayerExpanded",style:{"margin-top":"5px"}},e);g.create("div",{"class":"esriCTLayerTitle",innerHTML:c},e);n.set(f,"rootnodelayerid",b);this.own(r(f,"click",h.hitch(this,function(a){q.toggle(a.currentTarget,"esriCTToggleLayerExpanded");q.contains(a.currentTarget,"esriCTToggleLayerExpanded")&&this._expandAllCheckBox.set("checked",!1,!1);a=n.get(a.currentTarget,"rootnodelayerid");l('tr[layerid\x3d"'+a+'"]').toggleClass("esriCTHidden")})));
a.appendChild(d)},_createFieldNameTd:function(a,b){var c=g.create("td",{innerHTML:b,"class":"esriCTLayerFields"});a.appendChild(c);n.set(a,"searchstring",b.toLowerCase())},_addRows:function(a,b){var c=b.layerDetails;b=b.fieldLabels;var d=[],e;for(e in c){var f=c[e],p=g.create("tr",{"class":"esriCTSmartActionGroupRow esriCTLayerNameRow"});this._createLayerName(p,e);n.set(p,"layermaindivid",e);a.appendChild(p);for(var m in f){p=g.create("tr",{"class":"esriCTSmartActionGroupRow esriCTLayerFieldRow esriCTHidden"});
n.set(p,"layerid",e);n.set(p,"field",m);this._createFieldNameTd(p,b[e][m]);var u={layerid:e,field:m,action:"Hide"},v="";f[m].ExistingExpressions.hasOwnProperty("Hide")&&(v=f[m].ExistingExpressions.Hide);this._createCheckBox(p,u,f[m].Hide,v);u.action="Required";v="";f[m].ExistingExpressions.hasOwnProperty("Required")&&(v=f[m].ExistingExpressions.Required);this._createCheckBox(p,u,f[m].Required,v);u.action="Disabled";v="";f[m].ExistingExpressions.hasOwnProperty("Disabled")&&(v=f[m].ExistingExpressions.Disabled);
this._createCheckBox(p,u,f[m].Disabled,v);-1===d.indexOf(e)&&(f[m].Hide||f[m].Required||f[m].Disabled)&&d.push(e);this._createPriorityIcons(p,f[m]);a.appendChild(p)}}0<d.length&&setTimeout(h.hitch(this,function(){k.forEach(d,function(a){l('div[rootnodelayerid\x3d"'+a+'"]').toggleClass("esriCTToggleLayerExpanded");l('tr[layerid\x3d"'+a+'"]').toggleClass("esriCTHidden")})}),100)},_createCheckBox:function(a,b,c,d){var e=g.create("td",{style:{width:"13%"}}),f=!0,p,m;q.add(e,"esriCTCheckBoxTD");var u=
g.create("div");c&&d&&(c=!1);var v=g.create("div");q.add(v,"esriCTCheckBoxMainDiv");var w=g.create("div");c=new B({checked:c},w);n.set(w,"action",b.action);n.set(w,"field",b.field);n.set(w,"layerid",b.layerid);var x=this.appliedOn[b.layerid][b.field];this.own(r(c,"change",h.hitch(this,function(a){var b=n.get(w,"action");f=!0;x[b]=a;fieldsMatchingNodes=""!==this.searchTextBox.get("value")?l("tr[searchstring^\x3d'"+this.searchTextBox.get("value").toLowerCase()+"']",this.tableParentContainer):l("tr.esriCTSmartActionGroupRow",
this.tableParentContainer);0<fieldsMatchingNodes.length?k.some(fieldsMatchingNodes,h.hitch(this,function(a){if((a=l("[action\x3d"+b+"]",a))&&a[0]&&(p=t.byNode(a[0]))&&!p.getValue())return f=!1,!0})):f=!1;m=t.byNode(l(".esriCTTableTH [action\x3d"+b+"]",this.tableParentContainer)[0]);f&&!m.getValue()?m.check(!0):m.uncheck(!0)})));v.appendChild(w);u.appendChild(v);d&&(b=g.create("div",{title:d}),q.add(b,"esriCTExistingExpressionDiv"),u.appendChild(b));e.appendChild(u);a.appendChild(e)},_createTable:function(a){var b=
g.create("table");q.add(b,"esriCTTableMainNode tableBodyScroll");this._createHeaders(b);this.tableParentContainer.appendChild(b);var c=g.create("tbody",{style:"width: 808px"});(a=this._createLayerDetails(h.clone(a)))&&a.layerDetails&&a.fieldLabels&&(this.appliedOn=a.layerDetails,this._addRows(c,a));b.appendChild(c)},_validateIfLayerHaveUsedFields:function(a,b){var c;b&&(c=b.length,k.forEach(a,function(a){k.forEach(b,function(b){a.name===b.fieldObj.name&&a.type===b.fieldObj.type&&c--})},this));return 0===
c?!0:!1},_mergeActions:function(a,b){for(var c=0;c<a.length;c++)for(var d=0;d<b.length;d++)if(b[d].filter&&b[d].actionName===a[c].actionName){a[c]=h.clone(b[d]);break}return a},_mergeFieldValidations:function(a){var b={};k.forEach(a,function(a){for(var c in a)b.hasOwnProperty(c)?b[c]=this._mergeActions(b[c],a[c]):b[c]=h.clone(a[c])},this);return b},_getLayersFieldValidations:function(a,b,c){k.forEach(b,function(b){b.featureLayer&&b.featureLayer.id===c&&b.fieldValidations&&(a||(a=[]),a.push(b.fieldValidations));
b.relationshipInfos&&(a=this._getLayersFieldValidations(a,b.relationshipInfos,c))},this);return a},_getPartsInExpression:function(a,b){b&&k.forEach(b,h.hitch(this,function(b){b.parts?this._getPartsInExpression(a,b.parts):a.push(b)}));return a},_createLayerDetails:function(a){var b,c,d;c=null;this.filterInfo&&this.filterInfo.filter&&(b=this._getPartsInExpression([],this.filterInfo.filter.parts));c={};d={};k.forEach(this._totalLayers,function(e){if(!e.isTable||e.isTable&&0<e.layerObject.relationships.length){var f,
g,h=[];f=!1;g={};f=this._jimuLayerInfos.getLayerOrTableInfoById(e.id);g.allFields=f.layerObject.fields;f&&(f=this.editUtils.getConfigInfo(f,{}),g.fieldInfos=f.fieldInfos);f=this._validateIfLayerHaveUsedFields(g.allFields,b);g&&g.fieldInfos&&(f||!b)&&(h=this._getLayersFieldValidations(h,this._configInfos,e.id),g.fieldValidations=this._mergeFieldValidations(h),c[e.id]={},d[e.id]={},k.forEach(g.fieldInfos,function(b){var f;f=P.getDefaultPortalFieldInfo(b);"esriFieldTypeGeometry"!==b.type&&"esriFieldTypeOID"!==
b.type&&"esriFieldTypeBlob"!==b.type&&"esriFieldTypeGlobalID"!==b.type&&"esriFieldTypeRaster"!==b.type&&"esriFieldTypeXML"!==b.type&&(d[e.id][b.name]=f.label,c[e.id][b.name]=a&&a[e.id]&&a[e.id][b.name]?a[e.id][b.name]:{Hide:!1,Required:!1,Disabled:!1},g.fieldValidations&&g.fieldValidations[b.name]?(f=this._getPriorites(g.fieldValidations[b.name]),c[e.id][b.name].Priority=f.Priority,c[e.id][b.name].ExistingExpressions=f.ExistingExpressions):(c[e.id][b.name].Priority=["Hide","Required","Disabled"],
c[e.id][b.name].ExistingExpressions=[]))},this))}},this);return{layerDetails:c,fieldLabels:d}},_getPriorites:function(a){var b=[],c={};k.forEach(a,function(a){b.push(a.actionName);a.filter&&a.filter.displaySQL&&(!a.filter.hasOwnProperty("smartActionGroupName")||!this.prevName||a.filter.hasOwnProperty("smartActionGroupName")&&this.prevName&&this.prevName!==a.filter.smartActionGroupName)&&(c[a.actionName]=a.filter.displaySQL)},this);return{Priority:b,ExistingExpressions:c}},_getVaidationForAction:function(a,
b){var c=null;k.some(a,function(a){if(a.actionName===b&&a.filter&&a.filter.displaySQL)return c=a,!0});return c},_applysettingsToField:function(a,b){var c,d;d=[];d=this._getLayersFieldValidations(d,this._configInfos,a);c=b.appliedOn[a];for(var e=0;e<d.length;e++){var f=d[e];if(f)for(var g in c){for(var m=c[g],l=[],k=!1,q=0;q<m.Priority.length;q++){var n=m.Priority[q],r={};r.actionName=n;r.submitWhenHidden=!1;if(m[n])k=!0,"Hide"===n&&(r.submitWhenHidden=b.submitWhenHidden),r.expression=b.filterInfo.expression,
r.filter=h.clone(b.filterInfo).filter,r.filter.smartActionGroupName=b.name,this._removeSettingsFromOtherGroups(b.name,a,g,n);else if(f&&f[g]){var t=this._getVaidationForAction(f[g],n);t&&t.filter&&!m[n]&&t.filter.hasOwnProperty("smartActionGroupName")&&t.filter.smartActionGroupName===this.prevName?k=!0:t&&(r.expression=t.filter.expr,r.filter=t.filter)}l.push(r)}k&&(f||(f={}),f[g]=l)}}},_removePrevSettingsFromLayerFields:function(a){var b=[];if(b=this._getLayersFieldValidations(b,this._configInfos,
a))for(var c=0;c<b.length;c++)if(a=b[c])for(var d in a)a&&a[d]&&k.forEach(a[d],function(a){a&&a.filter&&a.filter.hasOwnProperty("smartActionGroupName")&&a.filter.smartActionGroupName===this.prevName&&(a.submitWhenHidden=!1,a.hasOwnProperty("expression")&&delete a.expression,delete a.filter)},this)},_removeSettingsFromOtherGroups:function(a,b,c,d){var e;if(this.existingGroups)for(var f in this.existingGroups)f!==a&&f!==this.prevName&&(e=this.existingGroups[f].appliedOn)&&e.hasOwnProperty(b)&&e[b].hasOwnProperty(c)&&
e[b][c].hasOwnProperty(d)&&(e[b][c][d]=!1)},_applySettingsInLayer:function(a){for(var b in a.appliedOn){var c;this._prevAppliedOnLayers&&-1<this._prevAppliedOnLayers.indexOf(b)&&(c=this._prevAppliedOnLayers.indexOf(b),this._prevAppliedOnLayers.splice(c,1));this._applysettingsToField(b,a)}this.deleteGroup()},deleteGroup:function(){this._prevAppliedOnLayers&&k.forEach(this._prevAppliedOnLayers,function(a){this._removePrevSettingsFromLayerFields(a)},this)}})});