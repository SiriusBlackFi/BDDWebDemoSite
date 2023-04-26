function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}var bodyScroll=function(){'use strict';var head=document.head;var body=document.body;var html=document.documentElement;var styler=document.createElement("style");var eventNamePrefix="bodyscroll";var dispatchEvent=function dispatchEvent(messageName){return typeof window.CustomEvent==="function"?window.dispatchEvent(new CustomEvent("".concat(eventNamePrefix).concat(messageName))):function(){};};var lockedStateCssClass="body-scroll-lock";var toggleLockedCssClass=function toggleLockedCssClass(bool){var _bool;var hadClass=html.classList.contains(lockedStateCssClass);bool=(_bool=bool)!==null&&_bool!==void 0?_bool:!hadClass;html.classList.toggle(lockedStateCssClass,bool);return bool&&!hadClass||!bool&&hadClass;};var addLockedCssClass=function addLockedCssClass(){return toggleLockedCssClass(true);};var removeLockedCssClass=function removeLockedCssClass(){return toggleLockedCssClass(false);};var isNumber=function isNumber(value){return typeof value==="number"&&!isNaN(value)&&isFinite(value);};var scrollSaving=null;var isValidScrollPosition=function isValidScrollPosition(value){return _typeof(value)==="object"&&isNumber(value===null||value===void 0?void 0:value.top)&&isNumber(value===null||value===void 0?void 0:value.left);};var formatScrollPosition=function formatScrollPosition(value){return isValidScrollPosition(value)?value:null;};var restoreScrollPosition=function restoreScrollPosition(scroll){scroll=scroll!==undefined?scroll:scrollSaving;scroll=formatScrollPosition(scroll);if(scroll){window.scrollTo(scroll.left,scroll.top);}return scroll;};var saveScrollPosition=function saveScrollPosition(scroll){if(scroll===undefined){scroll={top:window.pageYOffset,left:window.pageXOffset};}scrollSaving=formatScrollPosition(scroll);return scrollSaving;};var getSavedScrollPosition=function getSavedScrollPosition(){return scrollSaving;};var clearSavedScrollPosition=function clearSavedScrollPosition(){return scrollSaving=null;};var getVerticalScrollbarGap=function getVerticalScrollbarGap(){var hasClassRemoved=removeLockedCssClass();var docWidth=html.getBoundingClientRect().width;body.style.width=body.getBoundingClientRect().width+"px";html.style.overflowY=body.style.overflowY="hidden";var scrollbarWidth=html.getBoundingClientRect().width-docWidth;body.style.width=html.style.overflowY=body.style.overflowY="";if(hasClassRemoved){addLockedCssClass();}return scrollbarWidth;};var cssVarNamePosition="--body-scroll-lock-top-rect";var cssVarNameGap="--body-scroll-lock-vertical-scrollbar-gap";var updateCssVariables=function updateCssVariables(){if(!body.contains(styler)){head.append(styler);}var index=0;if(styler.sheet.cssRules[index]){styler.sheet.deleteRule(index);}var verticalScrollbarGap=getVerticalScrollbarGap();var scrollSaving=getSavedScrollPosition();var scrollPosition=isValidScrollPosition(scrollSaving)?scrollSaving:{top:0,left:0};var rule=":root {\n        ".concat(cssVarNamePosition,": ").concat(scrollPosition.top*-1,"px;\n        ").concat(cssVarNameGap,": ").concat(verticalScrollbarGap,"px;\n        ").concat(cssVarNameGap,"-round: ").concat(Math.round(verticalScrollbarGap),"px;\n    }");styler.sheet.insertRule(rule,index);};var lockState=false;var isLocked=function isLocked(){return lockState;};var doLock=function doLock(){if(isLocked()){return false;}lockState=true;if(!isValidScrollPosition(getSavedScrollPosition())){saveScrollPosition({top:window.pageYOffset,left:window.pageXOffset});}updateCssVariables();addLockedCssClass();return true;};var doUnlock=function doUnlock(){if(!isLocked()){return false;}lockState=false;removeLockedCssClass();restoreScrollPosition(getSavedScrollPosition());clearSavedScrollPosition();return true;};var lock=function lock(){if(!doLock()){return;}dispatchEvent("lock");};var unlock=function unlock(){if(!doUnlock()){return;}dispatchEvent("unlock");};var eventName="resize";var debounceTime=150;var id=null;var eventHandler=function eventHandler(){clearTimeout(id);id=setTimeout(function(){if(!doUnlock()){return;}doLock();dispatchEvent(eventName);},debounceTime);};var options=true;var addResizeEventListener=function addResizeEventListener(){return window.addEventListener(eventName,eventHandler,options);};var removeResizeEventListener=function removeResizeEventListener(){return window.removeEventListener(eventName,eventHandler,options);};addResizeEventListener();var bodyScroll={lock:lock,unlock:unlock,isLocked:isLocked,updateCssVariables:updateCssVariables,getVerticalScrollbarGap:getVerticalScrollbarGap,restoreScrollPosition:restoreScrollPosition,saveScrollPosition:saveScrollPosition,getSavedScrollPosition:getSavedScrollPosition,addResizeEventListener:addResizeEventListener,removeResizeEventListener:removeResizeEventListener};return bodyScroll;}();