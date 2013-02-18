createSurface=function(){var e=function(e,n){return e.exports=n,e.exports=function(){var e=function(e,n){e.exports=n,n.linear=function(e,t,n,r){return n*e/r+t},n.quadraticIn=function(e,t,n,r){return n*(e/=r)*e+t},n.quadraticOut=function(e,t,n,r){return-n*(e/=r)*(e-2)+t},n.quadraticInOut=function(e,t,n,r){return e/=r/2,e<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t},n.cubicIn=function(e,t,n,r){return n*(e/=r)*e*e+t},n.cubicOut=function(e,t,n,r){return e/=r,n*(--e*e*e+1)+t},n.cubicInOut=function(e,t,n,r){return e/=r/2,e<1?n*(e/=r)*e*e+t:n/2*((e-=2)*e*e+2)+t};var r=Math.PI/2;return n.sinusoidalIn=function(e,t,n,i){return-n*Math.cos(e/i*r)+n+t},n.sinusoidalOut=function(e,t,n,i){return n*Math.sin(e/i*r)+t},n.sinusoidalInOut=function(e,t,n,r){return-n/2*(Math.cos(Math.PI*e/r)-1)+t},n.exponentialIn=function(e,t,n,r){return n*Math.pow(2,10*(e/r-1))+t},n.exponentialOut=function(e,t,n,r){return n*(-Math.pow(2,-10*e/r)+1)+t},n.exponentialInOut=function(e,n,r,i){return e/=i/2,e<1?r/2*Math.pow(2,10*(e-1))+n:r/2*(-Math.pow(2,-10*--t)+2)+n},e.exports}({},{}),n=function(t,n){t.exports=n;var r=t.exports=function(e,t,n,r,i,s){function h(){if(l)return;l=!0,cancelAnimationFrame(c),f=Date.now()}function p(){if(!l)return;l=!1,a+=Date.now()-f,c=requestAnimationFrame(d)}function d(){var r=Date.now()-a;r<i?(t[n]=e(r,o,u,i),c=requestAnimationFrame(d)):(t[n]=e(i,o,u,i),s&&s())}i=i||0;var o=t[n],u=r-o,a=Date.now(),f=a,l=!0,c;return p(),{resume:p,pause:h}},i=e,s;for(s in i)i.hasOwnProperty(s)&&(r[s]=r.bind(void 0,i[s]));return r.easing=i,t.exports}({},{});return n}(),e.exports}({},{}),n=function(e,t){e.exports=t;var n=t.noop=function(){};t.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||function(e){return setTimeout(e,15)},t.cancelAnimationFrame=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame||function(e){return clearTimeout(e)},t.requestFullscreen=document.documentElement.requestFullscreen||document.documentElement.mozRequestFullScreen||document.documentElement.webkitRequestFullscreen||n;var r=document.body.style;return t.transformAttribute=r.msTransform!==void 0&&"msTransform"||r.webkitTransform!==void 0&&"webkitTransform"||r.MozTransform!==void 0&&"MozTransform"||r.transform!==void 0&&"transform",t.transitionAttribute=r.msTransition!==void 0&&"msTransition"||r.webkitTransition!==void 0&&"webkitTransition"||r.MozTransition!==void 0&&"MozTransition"||r.transition!==void 0&&"transition",t.filterAttribute=r.msFilter!==void 0&&"msFilter"||r.webkitFilter!==void 0&&"webkitFilter"||r.MozFilter!==void 0&&"MozFilter"||r.filter!==void 0&&"filter",e.exports}({},{}),r=function(t,r){t.exports=r;var i=n,s=i.requestAnimationFrame,o=i.cancelAnimationFrame,u=e;t.exports=function(e){var t=new f(e);return a(t)};var a=t.exports.apiFactory=function(e){var t={};return t.start=e.start.bind(e),t.pause=e.pause.bind(e),t.refit=e.refit.bind(e),t.element=e.element,t.blur=e.setBlur.bind(e),t.grayscale=e.setGrayscale.bind(e),t.opacity=e.setOpacity.bind(e),t.speed=e.setSpeedLimit.bind(e),t.horizontalSpeed=e.setHorizontalSpeedLimit.bind(e),t.verticalSpeed=e.setVerticalSpeedLimit.bind(e),t.horizontalWind=e.setHorizontalWind.bind(e),t.verticalWind=e.setVerticalWind.bind(e),t},f=t.exports.constructor=function(e){this.container=e,this.element=document.createElement("div"),this.element.style.position="absolute",e.appendChild(this.element),this.refit(),this.offsetX=0,this.offsetY=0,this.speedMultiplierX=0,this.speedMultiplierY=0,this.multiStyle={},this.multiStyle[i.transformAttribute]={},this.multiStyle[i.transitionAttribute]={},this.multiStyle[i.filterAttribute]={},this.pointerEventHandler=this.pointerEventHandler.bind(this),this.step=this.step.bind(this)};return f.prototype.horizontalSpeedLimit=4,f.prototype.verticalSpeedLimit=4,f.prototype.horizontalWind=0,f.prototype.verticalWind=0,f.prototype.msPerStep=16,f.prototype.horizontalSpeedGradient=u.easing.quadraticIn,f.prototype.verticalSpeedGradient=u.easing.quadraticIn,f.prototype.pointerTrackingEvents=["mousemove","touchstart","touchend","touchmove"],f.prototype.start=function(){if(this.active)return;this.active=!0,this.attachPointerListeners(),this.lastStepTime=Date.now(),this.animationRequestId=s(this.step)},f.prototype.pause=function(){if(!this.active)return;this.active=!1,o(this.animationRequestId),this.detachPointerListeners()},f.prototype.step=function(){this.refit();var e=Date.now(),t=(e-this.lastStepTime)/this.msPerStep;this.lastStepTime=e,this.offsetX+=t*(this.horizontalWind+this.speedMultiplierX*this.horizontalSpeedLimit),this.offsetY+=t*(this.verticalWind+this.speedMultiplierY*this.verticalSpeedLimit),this.setCssTransform("translate",this.offsetX+"px, "+this.offsetY+"px"),this.animationRequestId=s(this.step)},f.prototype.attachPointerListeners=function(){var e=this;this.pointerTrackingEvents.forEach(function(t){e.container.addEventListener(t,e.pointerEventHandler)}),this.container.addEventListener("mousemove",e.pointerEventHandler)},f.prototype.detachPointerListeners=function(){var e=this;this.pointerTrackingEvents.forEach(function(t){e.container.removeEventListener(t,e.pointerEventHandler)})},f.prototype.pointerEventHandler=function(e){var t=e.changedTouches&&e.changedTouches[0]||e,n=t.clientX-this.left;y=t.clientY-this.top,this.speedMultiplierX=this.horizontalSpeedGradient(n-this.halfWidth,0,n>this.halfWidth?-1:1,this.halfWidth),this.speedMultiplierY=this.verticalSpeedGradient(y-this.halfHeight,0,y>this.halfHeight?-1:1,this.halfHeight)},f.prototype.refit=function(e,t){var n=this.container.getBoundingClientRect();this.width=n.width,this.halfWidth=this.width/2,this.height=n.height,this.halfHeight=this.height/2,this.top=n.top,this.left=n.left},f.prototype.setHorizontalWind=function(e,t,n){if(!t)return this.horizontalWind=e;n=n||this.horizontalWind<e?u.easing.quadraticIn:u.easing.quadraticOut,u(n,this,"horizontalWind",e,t)},f.prototype.setVerticalWind=function(e,t,n){if(!t)return this.verticalWind=e;n=n||this.verticalWind<e?u.easing.quadraticIn:u.easing.quadraticOut,u(n,this,"verticalWind",e,t)},f.prototype.setSpeedLimit=function(e,t,n,r){if(!t){this.horizontalSpeedLimit=e,this.verticalSpeedLimit=e;return}this.setHorizontalSpeedLimit(e,t,n,r),this.setVerticalSpeedLimit(e,t,n,r)},f.prototype.setHorizontalSpeedLimit=function(e,t,n,r){if(!t)return this.horizontalSpeedLimit=e;n=n||this.horizontalSpeedLimit<e?u.easing.quadraticIn:u.easing.quadraticOut,u(n,this,"horizontalSpeedLimit",e,t,r)},f.prototype.setVerticalSpeedLimit=function(e,t,n,r){if(!t)return this.verticalSpeedLimit=e;n=n||this.verticalSpeedLimit<e?u.easing.quadraticIn:u.easing.quadraticOut,u(n,this,"verticalSpeedLimit",e,t,r)},f.prototype.setBlur=function(e,t){t!==void 0&&this.setCssTransition("-webkit-filter",t+"s"),this.setCssFilter("blur",e+"px")},f.prototype.setGrayscale=function(e,t){t!==void 0&&this.setCssTransition("-webkit-filter",t+"s"),this.setCssFilter("grayscale",e)},f.prototype.setOpacity=function(e,t){t!==void 0&&this.setCssTransition("opacity",t+"s"),this.element.style.opacity=e},f.prototype.setCssTransform=function(e,t){this.cssTransforms[e]=t,this.updateMultiAttributeStyle(i.transformAttribute,this.cssTransforms)},f.prototype.setCssFilter=function(e,t){this.cssFilters[e]=t,this.updateMultiAttributeStyle(i.filterAttribute,this.cssFilters)},f.prototype.setCssTransition=function(e,t){this.cssTransitions[e]=t,this.updateMultiAttributeStyle(i.transitionAttribute,this.cssTransitions,!0)},f.prototype.cssTransitions={"-webkit-filter":"0s",opacity:"0s"},f.prototype.cssFilters={blur:"0px",grayscale:"0"},f.prototype.cssTransforms={translate:"0px, 0px"},f.prototype.updateMultiAttributeStyle=function(e,t,n){var r,i=[];for(r in t)t.hasOwnProperty(r)&&i.push(r+(n?" ":"(")+t[r]+(n?"":")"));this.element.style[e]=i.join(n?", ":" ")},t.exports}({},{});return r}();