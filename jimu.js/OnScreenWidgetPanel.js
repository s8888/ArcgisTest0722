// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/html dojo/on dojo/keys dojo/dnd/move dijit/_TemplatedMixin jimu/BaseWidgetPanel jimu/utils dojox/layout/ResizeHandle dojo/touch".split(" "),function(k,e,b,f,d,l,m,n,g,p){return k([n,m],{baseClass:"jimu-panel jimu-on-screen-widget-panel jimu-main-background",_positionInfoBox:null,_originalBox:null,widgetIcon:null,_resizeOnOpen:!0,templateString:'\x3cdiv data-dojo-attach-point\x3d"boxNode"\x3e\x3cdiv class\x3d"jimu-panel-title jimu-main-background" data-dojo-attach-point\x3d"titleNode"\x3e\x3cdiv class\x3d"title-label jimu-vcenter-text jimu-float-leading jimu-leading-padding1"data-dojo-attach-point\x3d"titleLabelNode"\x3e${label}\x3c/div\x3e\x3cdiv class\x3d"btns-container"\x3e\x3cdiv tabindex\x3d"0" class\x3d"foldable-btn jimu-vcenter" data-dojo-attach-point\x3d"foldableNode"data-dojo-attach-event\x3d"onclick:_onFoldableBtnClicked,onkeydown:_onFoldableBtnKeyDown"\x3e\x3c/div\x3e\x3cdiv tabindex\x3d"0" class\x3d"max-btn jimu-vcenter" data-dojo-attach-point\x3d"maxNode"data-dojo-attach-event\x3d"onclick:_onMaxBtnClicked,onkeydown:_onMaxBtnKeyDown"\x3e\x3c/div\x3e\x3cdiv tabindex\x3d"0" class\x3d"close-btn jimu-vcenter" data-dojo-attach-point\x3d"closeNode"data-dojo-attach-event\x3d"onclick:_onCloseBtnClicked,press:_onCloseBtnClicked,onkeydown:_onCloseBtnKey"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"jimu-panel-content" data-dojo-attach-point\x3d"containerNode"\x3e\x3c/div\x3e\x3c/div\x3e',
postCreate:function(){this._originalBox={w:400,h:410}},startup:function(){this.inherited(arguments);b.setAttr(this.domNode,"role","application");this._normalizePositionObj(this.position);this._makeOriginalBox();this.makePositionInfoBox();this.makeMoveable(this._positionInfoBox.w,.25*this._positionInfoBox.w);this.own(f(this.domNode,"keydown",e.hitch(this,function(a){b.hasClass(a.target,"close-btn")||a.keyCode!==d.ESCAPE||(a.stopPropagation(),this.closeNode.focus())})))},_onMaxBtnClicked:function(a){a.stopPropagation();
this._getPositionInfo().isRunInMobile&&("maximized"===this.windowState?this.panelManager.normalizePanel(this):this.panelManager.maximizePanel(this),this._setMobilePosition())},_onMaxBtnKeyDown:function(a){a.keyCode===d.ENTER&&this._onMaxBtnClicked(a)},_onFoldableBtnClicked:function(a){a&&a.stopPropagation();this._getPositionInfo().isRunInMobile&&("minimized"===this.windowState?(b.removeClass(this.foldableNode,"fold-up"),b.addClass(this.foldableNode,"fold-down"),this.panelManager.normalizePanel(this)):
(b.removeClass(this.foldableNode,"fold-down"),b.addClass(this.foldableNode,"fold-up"),this.panelManager.minimizePanel(this)),this._setMobilePosition())},_onFoldableBtnKeyDown:function(a){a.keyCode===d.ENTER?this._onFoldableBtnClicked(a):a.keyCode===d.TAB&&a.shiftKey&&a.preventDefault()},_onCloseBtnClicked:function(a){this.panelManager.closePanel(this);a.stopPropagation();"touchstart"===a.type&&a.preventDefault()},_onCloseBtnKey:function(a){a.keyCode===d.ENTER?this.panelManager.closePanel(this):a.keyCode===
d.TAB&&a.shiftKey&&(window.appInfo.isRunInMobile||a.preventDefault())},_normalizePositionObj:function(a){var b=this._getLayoutBox();a.left=isFinite(a.left)?a.left:b.w-a.right;a.top=isFinite(a.top)?a.top:b.h-a.bottom;delete a.right;delete a.bottom;this.position=e.mixin(e.clone(this.position),a)},makePositionInfoBox:function(){this._positionInfoBox={w:this.position.width||400,h:this.position.height||410,l:this.position.left||0,t:this.position.top||0}},_makeOriginalBox:function(){this._originalBox={w:this.position.width||
400,h:this.position.height||410,l:this.position.left||0,t:this.position.top||0}},makeResizable:function(){this.disableResizable();this.resizeHandle=(new p({targetId:this,minWidth:this._originalBox.w,minHeight:this._originalBox.h,activeResize:!1})).placeAt(this.domNode);this.resizeHandle.startup()},disableResizable:function(){this.resizeHandle&&(this.resizeHandle.destroy(),this.resizeHandle=null)},makeMoveable:function(a,h){this.disableMoveable();var c=b.getMarginBox(jimuConfig.layoutId);c.l=c.l-a+
h;c.w+=2*(a-h);this.moveable=new l.boxConstrainedMoveable(this.domNode,{box:c,handle:this.titleNode,within:!0});this.own(f(this.moveable,"Moving",e.hitch(this,this.onMoving)));this.own(f(this.moveable,"MoveStop",e.hitch(this,this.onMoveStop)))},disableMoveable:function(){this.moveable&&(this.moveable.destroy(),this.moveable=null)},createHandleNode:function(){return this.titleNode},onOpen:function(){this._resizeOnOpen&&(this.resize(),this._resizeOnOpen=!1);window.appInfo.isRunInMobile&&(this._setMobilePosition(),
g.isInNavMode()&&"minimized"===this.windowState&&this._onFoldableBtnClicked());this.inherited(arguments)},_switchToMobileUI:function(){b.removeClass(this.titleNode,"title-normal");b.addClass(this.titleNode,"title-full");b.setStyle(this.foldableNode,"display","block");b.setStyle(this.maxNode,"display","block");"normal"===this.windowState?(b.removeClass(this.foldableNode,"fold-up"),b.addClass(this.foldableNode,"fold-down")):(b.removeClass(this.foldableNode,"fold-down"),b.addClass(this.foldableNode,
"fold-up"))},_switchToDesktopUI:function(){b.removeClass(this.titleNode,"title-full");b.addClass(this.titleNode,"title-normal");b.setStyle(this.foldableNode,"display","none");b.setStyle(this.maxNode,"display","none")},resize:function(a){var b=this._getPositionInfo(),c={left:b.position.left,top:b.position.top,width:this._positionInfoBox.w,height:this._positionInfoBox.h};a&&(a.t=this.domNode.offsetTop,c.left=isFinite(a.l)?a.l:c.left,c.top=isFinite(a.t)?a.t:c.top,c.width=isFinite(a.w)?a.w:c.width,c.height=
isFinite(a.h)?a.h:c.height,this._normalizePositionObj(e.clone(c)),this.makePositionInfoBox(),c.width=this._positionInfoBox.w,c.height=this._positionInfoBox.h);b.position=c;this._onResponsible(b);this.inherited(arguments)},_onResponsible:function(a){a.isRunInMobile?(this._setMobilePosition(),this.disableMoveable(),this.disableResizable(),this._switchToMobileUI()):(this._setDesktopPosition(a.position),this.makeResizable(),this.makeMoveable(this._positionInfoBox.w,.25*this._positionInfoBox.w),this._switchToDesktopUI())},
setPosition:function(a){this._normalizePositionObj(a);this.makePositionInfoBox();a=this._getPositionInfo();this._onResponsible(a)},destroy:function(){this.widgetIcon=null;this.inherited(arguments)},_getLayoutBox:function(){var a=jimuConfig.layoutId,a="map"===this.position.relativeTo?jimuConfig.mapId:jimuConfig.layoutId;return b.getMarginBox(a)},_getPositionInfo:function(){var a={isRunInMobile:!1,position:{left:0,top:5}},b=this._getLayoutBox(),c=this._positionInfoBox.l;if(window.appInfo.isRunInMobile)return a.isRunInMobile=
!0,a;window.isRTL?(a.position.left=b.w-c,a.position.left+this._positionInfoBox.w>b.w&&(a.position.left-=this._positionInfoBox.w,0>a.position.left&&(a.position.left=b.w-this._positionInfoBox.w))):(a.position.left=c,a.position.left+this._positionInfoBox.w>b.w&&(a.position.left=b.w>this._positionInfoBox.w?b.w-this._positionInfoBox.w:0));c=this._positionInfoBox.t;b=b.h-c;c>=b?c>=this._positionInfoBox.h&&(a.position.top=this._positionInfoBox.t-this._positionInfoBox.h-40-3):b>=this._positionInfoBox.h&&
(a.position.top=this._positionInfoBox.t+40+3);return a},_setMobilePosition:function(){window.appInfo.isRunInMobile&&this.domNode&&this.domNode.parentNode!==b.byId(jimuConfig.layoutId)&&b.place(this.domNode,jimuConfig.layoutId);var a=this.panelManager.getPositionOnMobile(this);this.position.zIndex&&(a.zIndex=this.position.zIndex);var d=g.getPositionStyle(a);e.mixin(d,a.borderRadiusStyle);b.setStyle(this.domNode,d)},_setDesktopPosition:function(a){!window.appInfo.isRunInMobile&&this.domNode&&this.domNode.parentNode!==
b.byId(jimuConfig.mapId)&&b.place(this.domNode,jimuConfig.mapId);b.setStyle(this.domNode,{left:a.left+"px",right:"auto",top:a.top+"px",width:(a.width||this.position.width||this._originalBox.w)+"px",height:(a.height||this.position.height||this._originalBox.h)+"px"})},onMoving:function(a){b.setStyle(a.node,"opacity",.9)},onMoveStop:function(a){b.setStyle(a.node,"opacity",1);a=b.getMarginBox(a.node);this._normalizePositionObj(e.clone({left:a.l,top:a.t,width:a.w,height:a.h}));this.makePositionInfoBox()}})});