// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/babylonjs/babylon.js":[function(require,module,exports) {
var define;
var global = arguments[3];
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("babylonjs",[],t):"object"==typeof exports?exports.babylonjs=t():e.BABYLON=t()}("undefined"!=typeof self?self:"undefined"!=typeof global?global:this,function(){return function(e){var t={};function i(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=129)}([function(e,t,i){"use strict";i.d(t,"u",function(){return s}),i.d(t,"v",function(){return a}),i.d(t,"h",function(){return c}),i.d(t,"e",function(){return l}),i.d(t,"f",function(){return u}),i.d(t,"w",function(){return h}),i.d(t,"x",function(){return d}),i.d(t,"y",function(){return f}),i.d(t,"r",function(){return p}),i.d(t,"q",function(){return _}),i.d(t,"j",function(){return g}),i.d(t,"n",function(){return m}),i.d(t,"z",function(){return v}),i.d(t,"i",function(){return y}),i.d(t,"s",function(){return n}),i.d(t,"c",function(){return T}),i.d(t,"d",function(){return E}),i.d(t,"k",function(){return b}),i.d(t,"a",function(){return A}),i.d(t,"b",function(){return x}),i.d(t,"l",function(){return R}),i.d(t,"m",function(){return P}),i.d(t,"g",function(){return S}),i.d(t,"p",function(){return C}),i.d(t,"o",function(){return M}),i.d(t,"t",function(){return O});var n,r=i(34),o=i(12),s=1/2.2,a=2.2,c=.001,l=function(){function e(e,t,i){void 0===e&&(e=0),void 0===t&&(t=0),void 0===i&&(i=0),this.r=e,this.g=t,this.b=i}return e.prototype.toString=function(){return"{R: "+this.r+" G:"+this.g+" B:"+this.b+"}"},e.prototype.getClassName=function(){return"Color3"},e.prototype.getHashCode=function(){var e=this.r||0;return e=397*(e=397*e^(this.g||0))^(this.b||0)},e.prototype.toArray=function(e,t){return void 0===t&&(t=0),e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,this},e.prototype.toColor4=function(e){return void 0===e&&(e=1),new u(this.r,this.g,this.b,e)},e.prototype.asArray=function(){var e=new Array;return this.toArray(e,0),e},e.prototype.toLuminance=function(){return.3*this.r+.59*this.g+.11*this.b},e.prototype.multiply=function(t){return new e(this.r*t.r,this.g*t.g,this.b*t.b)},e.prototype.multiplyToRef=function(e,t){return t.r=this.r*e.r,t.g=this.g*e.g,t.b=this.b*e.b,this},e.prototype.equals=function(e){return e&&this.r===e.r&&this.g===e.g&&this.b===e.b},e.prototype.equalsFloats=function(e,t,i){return this.r===e&&this.g===t&&this.b===i},e.prototype.scale=function(t){return new e(this.r*t,this.g*t,this.b*t)},e.prototype.scaleToRef=function(e,t){return t.r=this.r*e,t.g=this.g*e,t.b=this.b*e,this},e.prototype.scaleAndAddToRef=function(e,t){return t.r+=this.r*e,t.g+=this.g*e,t.b+=this.b*e,this},e.prototype.clampToRef=function(e,t,i){return void 0===e&&(e=0),void 0===t&&(t=1),i.r=o.a.Clamp(this.r,e,t),i.g=o.a.Clamp(this.g,e,t),i.b=o.a.Clamp(this.b,e,t),this},e.prototype.add=function(t){return new e(this.r+t.r,this.g+t.g,this.b+t.b)},e.prototype.addToRef=function(e,t){return t.r=this.r+e.r,t.g=this.g+e.g,t.b=this.b+e.b,this},e.prototype.subtract=function(t){return new e(this.r-t.r,this.g-t.g,this.b-t.b)},e.prototype.subtractToRef=function(e,t){return t.r=this.r-e.r,t.g=this.g-e.g,t.b=this.b-e.b,this},e.prototype.clone=function(){return new e(this.r,this.g,this.b)},e.prototype.copyFrom=function(e){return this.r=e.r,this.g=e.g,this.b=e.b,this},e.prototype.copyFromFloats=function(e,t,i){return this.r=e,this.g=t,this.b=i,this},e.prototype.set=function(e,t,i){return this.copyFromFloats(e,t,i)},e.prototype.toHexString=function(){var e=255*this.r|0,t=255*this.g|0,i=255*this.b|0;return"#"+o.a.ToHex(e)+o.a.ToHex(t)+o.a.ToHex(i)},e.prototype.toLinearSpace=function(){var t=new e;return this.toLinearSpaceToRef(t),t},e.prototype.toLinearSpaceToRef=function(e){return e.r=Math.pow(this.r,a),e.g=Math.pow(this.g,a),e.b=Math.pow(this.b,a),this},e.prototype.toGammaSpace=function(){var t=new e;return this.toGammaSpaceToRef(t),t},e.prototype.toGammaSpaceToRef=function(e){return e.r=Math.pow(this.r,s),e.g=Math.pow(this.g,s),e.b=Math.pow(this.b,s),this},e.FromHexString=function(t){if("#"!==t.substring(0,1)||7!==t.length)return new e(0,0,0);var i=parseInt(t.substring(1,3),16),n=parseInt(t.substring(3,5),16),r=parseInt(t.substring(5,7),16);return e.FromInts(i,n,r)},e.FromArray=function(t,i){return void 0===i&&(i=0),new e(t[i],t[i+1],t[i+2])},e.FromInts=function(t,i,n){return new e(t/255,i/255,n/255)},e.Lerp=function(t,i,n){var r=new e(0,0,0);return e.LerpToRef(t,i,n,r),r},e.LerpToRef=function(e,t,i,n){n.r=e.r+(t.r-e.r)*i,n.g=e.g+(t.g-e.g)*i,n.b=e.b+(t.b-e.b)*i},e.Red=function(){return new e(1,0,0)},e.Green=function(){return new e(0,1,0)},e.Blue=function(){return new e(0,0,1)},e.Black=function(){return new e(0,0,0)},Object.defineProperty(e,"BlackReadOnly",{get:function(){return e._BlackReadOnly},enumerable:!0,configurable:!0}),e.White=function(){return new e(1,1,1)},e.Purple=function(){return new e(.5,0,.5)},e.Magenta=function(){return new e(1,0,1)},e.Yellow=function(){return new e(1,1,0)},e.Gray=function(){return new e(.5,.5,.5)},e.Teal=function(){return new e(0,1,1)},e.Random=function(){return new e(Math.random(),Math.random(),Math.random())},e._BlackReadOnly=e.Black(),e}(),u=function(){function e(e,t,i,n){void 0===e&&(e=0),void 0===t&&(t=0),void 0===i&&(i=0),void 0===n&&(n=1),this.r=e,this.g=t,this.b=i,this.a=n}return e.prototype.addInPlace=function(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this.a+=e.a,this},e.prototype.asArray=function(){var e=new Array;return this.toArray(e,0),e},e.prototype.toArray=function(e,t){return void 0===t&&(t=0),e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e[t+3]=this.a,this},e.prototype.equals=function(e){return e&&this.r===e.r&&this.g===e.g&&this.b===e.b&&this.a===e.a},e.prototype.add=function(t){return new e(this.r+t.r,this.g+t.g,this.b+t.b,this.a+t.a)},e.prototype.subtract=function(t){return new e(this.r-t.r,this.g-t.g,this.b-t.b,this.a-t.a)},e.prototype.subtractToRef=function(e,t){return t.r=this.r-e.r,t.g=this.g-e.g,t.b=this.b-e.b,t.a=this.a-e.a,this},e.prototype.scale=function(t){return new e(this.r*t,this.g*t,this.b*t,this.a*t)},e.prototype.scaleToRef=function(e,t){return t.r=this.r*e,t.g=this.g*e,t.b=this.b*e,t.a=this.a*e,this},e.prototype.scaleAndAddToRef=function(e,t){return t.r+=this.r*e,t.g+=this.g*e,t.b+=this.b*e,t.a+=this.a*e,this},e.prototype.clampToRef=function(e,t,i){return void 0===e&&(e=0),void 0===t&&(t=1),i.r=o.a.Clamp(this.r,e,t),i.g=o.a.Clamp(this.g,e,t),i.b=o.a.Clamp(this.b,e,t),i.a=o.a.Clamp(this.a,e,t),this},e.prototype.multiply=function(t){return new e(this.r*t.r,this.g*t.g,this.b*t.b,this.a*t.a)},e.prototype.multiplyToRef=function(e,t){return t.r=this.r*e.r,t.g=this.g*e.g,t.b=this.b*e.b,t.a=this.a*e.a,t},e.prototype.toString=function(){return"{R: "+this.r+" G:"+this.g+" B:"+this.b+" A:"+this.a+"}"},e.prototype.getClassName=function(){return"Color4"},e.prototype.getHashCode=function(){var e=this.r||0;return e=397*(e=397*(e=397*e^(this.g||0))^(this.b||0))^(this.a||0)},e.prototype.clone=function(){return new e(this.r,this.g,this.b,this.a)},e.prototype.copyFrom=function(e){return this.r=e.r,this.g=e.g,this.b=e.b,this.a=e.a,this},e.prototype.copyFromFloats=function(e,t,i,n){return this.r=e,this.g=t,this.b=i,this.a=n,this},e.prototype.set=function(e,t,i,n){return this.copyFromFloats(e,t,i,n)},e.prototype.toHexString=function(){var e=255*this.r|0,t=255*this.g|0,i=255*this.b|0,n=255*this.a|0;return"#"+o.a.ToHex(e)+o.a.ToHex(t)+o.a.ToHex(i)+o.a.ToHex(n)},e.prototype.toLinearSpace=function(){var t=new e;return this.toLinearSpaceToRef(t),t},e.prototype.toLinearSpaceToRef=function(e){return e.r=Math.pow(this.r,a),e.g=Math.pow(this.g,a),e.b=Math.pow(this.b,a),e.a=this.a,this},e.prototype.toGammaSpace=function(){var t=new e;return this.toGammaSpaceToRef(t),t},e.prototype.toGammaSpaceToRef=function(e){return e.r=Math.pow(this.r,s),e.g=Math.pow(this.g,s),e.b=Math.pow(this.b,s),e.a=this.a,this},e.FromHexString=function(t){if("#"!==t.substring(0,1)||9!==t.length)return new e(0,0,0,0);var i=parseInt(t.substring(1,3),16),n=parseInt(t.substring(3,5),16),r=parseInt(t.substring(5,7),16),o=parseInt(t.substring(7,9),16);return e.FromInts(i,n,r,o)},e.Lerp=function(t,i,n){var r=new e(0,0,0,0);return e.LerpToRef(t,i,n,r),r},e.LerpToRef=function(e,t,i,n){n.r=e.r+(t.r-e.r)*i,n.g=e.g+(t.g-e.g)*i,n.b=e.b+(t.b-e.b)*i,n.a=e.a+(t.a-e.a)*i},e.FromColor3=function(t,i){return void 0===i&&(i=1),new e(t.r,t.g,t.b,i)},e.FromArray=function(t,i){return void 0===i&&(i=0),new e(t[i],t[i+1],t[i+2],t[i+3])},e.FromInts=function(t,i,n,r){return new e(t/255,i/255,n/255,r/255)},e.CheckColors4=function(e,t){if(e.length===3*t){for(var i=[],n=0;n<e.length;n+=3){var r=n/3*4;i[r]=e[n],i[r+1]=e[n+1],i[r+2]=e[n+2],i[r+3]=1}return i}return e},e}(),h=function(){function e(e,t){void 0===e&&(e=0),void 0===t&&(t=0),this.x=e,this.y=t}return e.prototype.toString=function(){return"{X: "+this.x+" Y:"+this.y+"}"},e.prototype.getClassName=function(){return"Vector2"},e.prototype.getHashCode=function(){var e=this.x||0;return e=397*e^(this.y||0)},e.prototype.toArray=function(e,t){return void 0===t&&(t=0),e[t]=this.x,e[t+1]=this.y,this},e.prototype.asArray=function(){var e=new Array;return this.toArray(e,0),e},e.prototype.copyFrom=function(e){return this.x=e.x,this.y=e.y,this},e.prototype.copyFromFloats=function(e,t){return this.x=e,this.y=t,this},e.prototype.set=function(e,t){return this.copyFromFloats(e,t)},e.prototype.add=function(t){return new e(this.x+t.x,this.y+t.y)},e.prototype.addToRef=function(e,t){return t.x=this.x+e.x,t.y=this.y+e.y,this},e.prototype.addInPlace=function(e){return this.x+=e.x,this.y+=e.y,this},e.prototype.addVector3=function(t){return new e(this.x+t.x,this.y+t.y)},e.prototype.subtract=function(t){return new e(this.x-t.x,this.y-t.y)},e.prototype.subtractToRef=function(e,t){return t.x=this.x-e.x,t.y=this.y-e.y,this},e.prototype.subtractInPlace=function(e){return this.x-=e.x,this.y-=e.y,this},e.prototype.multiplyInPlace=function(e){return this.x*=e.x,this.y*=e.y,this},e.prototype.multiply=function(t){return new e(this.x*t.x,this.y*t.y)},e.prototype.multiplyToRef=function(e,t){return t.x=this.x*e.x,t.y=this.y*e.y,this},e.prototype.multiplyByFloats=function(t,i){return new e(this.x*t,this.y*i)},e.prototype.divide=function(t){return new e(this.x/t.x,this.y/t.y)},e.prototype.divideToRef=function(e,t){return t.x=this.x/e.x,t.y=this.y/e.y,this},e.prototype.divideInPlace=function(e){return this.divideToRef(e,this)},e.prototype.negate=function(){return new e(-this.x,-this.y)},e.prototype.scaleInPlace=function(e){return this.x*=e,this.y*=e,this},e.prototype.scale=function(t){var i=new e(0,0);return this.scaleToRef(t,i),i},e.prototype.scaleToRef=function(e,t){return t.x=this.x*e,t.y=this.y*e,this},e.prototype.scaleAndAddToRef=function(e,t){return t.x+=this.x*e,t.y+=this.y*e,this},e.prototype.equals=function(e){return e&&this.x===e.x&&this.y===e.y},e.prototype.equalsWithEpsilon=function(e,t){return void 0===t&&(t=c),e&&o.a.WithinEpsilon(this.x,e.x,t)&&o.a.WithinEpsilon(this.y,e.y,t)},e.prototype.floor=function(){return new e(Math.floor(this.x),Math.floor(this.y))},e.prototype.fract=function(){return new e(this.x-Math.floor(this.x),this.y-Math.floor(this.y))},e.prototype.length=function(){return Math.sqrt(this.x*this.x+this.y*this.y)},e.prototype.lengthSquared=function(){return this.x*this.x+this.y*this.y},e.prototype.normalize=function(){var e=this.length();if(0===e)return this;var t=1/e;return this.x*=t,this.y*=t,this},e.prototype.clone=function(){return new e(this.x,this.y)},e.Zero=function(){return new e(0,0)},e.One=function(){return new e(1,1)},e.FromArray=function(t,i){return void 0===i&&(i=0),new e(t[i],t[i+1])},e.FromArrayToRef=function(e,t,i){i.x=e[t],i.y=e[t+1]},e.CatmullRom=function(t,i,n,r,o){var s=o*o,a=o*s;return new e(.5*(2*i.x+(-t.x+n.x)*o+(2*t.x-5*i.x+4*n.x-r.x)*s+(-t.x+3*i.x-3*n.x+r.x)*a),.5*(2*i.y+(-t.y+n.y)*o+(2*t.y-5*i.y+4*n.y-r.y)*s+(-t.y+3*i.y-3*n.y+r.y)*a))},e.Clamp=function(t,i,n){var r=t.x;r=(r=r>n.x?n.x:r)<i.x?i.x:r;var o=t.y;return new e(r,o=(o=o>n.y?n.y:o)<i.y?i.y:o)},e.Hermite=function(t,i,n,r,o){var s=o*o,a=o*s,c=2*a-3*s+1,l=-2*a+3*s,u=a-2*s+o,h=a-s;return new e(t.x*c+n.x*l+i.x*u+r.x*h,t.y*c+n.y*l+i.y*u+r.y*h)},e.Lerp=function(t,i,n){return new e(t.x+(i.x-t.x)*n,t.y+(i.y-t.y)*n)},e.Dot=function(e,t){return e.x*t.x+e.y*t.y},e.Normalize=function(e){var t=e.clone();return t.normalize(),t},e.Minimize=function(t,i){return new e(t.x<i.x?t.x:i.x,t.y<i.y?t.y:i.y)},e.Maximize=function(t,i){return new e(t.x>i.x?t.x:i.x,t.y>i.y?t.y:i.y)},e.Transform=function(t,i){var n=e.Zero();return e.TransformToRef(t,i,n),n},e.TransformToRef=function(e,t,i){var n=t.m,r=e.x*n[0]+e.y*n[4]+n[12],o=e.x*n[1]+e.y*n[5]+n[13];i.x=r,i.y=o},e.PointInTriangle=function(e,t,i,n){var r=.5*(-i.y*n.x+t.y*(-i.x+n.x)+t.x*(i.y-n.y)+i.x*n.y),o=r<0?-1:1,s=(t.y*n.x-t.x*n.y+(n.y-t.y)*e.x+(t.x-n.x)*e.y)*o,a=(t.x*i.y-t.y*i.x+(t.y-i.y)*e.x+(i.x-t.x)*e.y)*o;return s>0&&a>0&&s+a<2*r*o},e.Distance=function(t,i){return Math.sqrt(e.DistanceSquared(t,i))},e.DistanceSquared=function(e,t){var i=e.x-t.x,n=e.y-t.y;return i*i+n*n},e.Center=function(e,t){var i=e.add(t);return i.scaleInPlace(.5),i},e.DistanceOfPointFromSegment=function(t,i,n){var r=e.DistanceSquared(i,n);if(0===r)return e.Distance(t,i);var o=n.subtract(i),s=Math.max(0,Math.min(1,e.Dot(t.subtract(i),o)/r)),a=i.add(o.multiplyByFloats(s,s));return e.Distance(t,a)},e}(),d=function(){function e(e,t,i){void 0===e&&(e=0),void 0===t&&(t=0),void 0===i&&(i=0),this.x=e,this.y=t,this.z=i}return e.prototype.toString=function(){return"{X: "+this.x+" Y:"+this.y+" Z:"+this.z+"}"},e.prototype.getClassName=function(){return"Vector3"},e.prototype.getHashCode=function(){var e=this.x||0;return e=397*(e=397*e^(this.y||0))^(this.z||0)},e.prototype.asArray=function(){var e=[];return this.toArray(e,0),e},e.prototype.toArray=function(e,t){return void 0===t&&(t=0),e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,this},e.prototype.toQuaternion=function(){return _.RotationYawPitchRoll(this.y,this.x,this.z)},e.prototype.addInPlace=function(e){return this.addInPlaceFromFloats(e.x,e.y,e.z)},e.prototype.addInPlaceFromFloats=function(e,t,i){return this.x+=e,this.y+=t,this.z+=i,this},e.prototype.add=function(t){return new e(this.x+t.x,this.y+t.y,this.z+t.z)},e.prototype.addToRef=function(e,t){return t.copyFromFloats(this.x+e.x,this.y+e.y,this.z+e.z)},e.prototype.subtractInPlace=function(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this},e.prototype.subtract=function(t){return new e(this.x-t.x,this.y-t.y,this.z-t.z)},e.prototype.subtractToRef=function(e,t){return this.subtractFromFloatsToRef(e.x,e.y,e.z,t)},e.prototype.subtractFromFloats=function(t,i,n){return new e(this.x-t,this.y-i,this.z-n)},e.prototype.subtractFromFloatsToRef=function(e,t,i,n){return n.copyFromFloats(this.x-e,this.y-t,this.z-i)},e.prototype.negate=function(){return new e(-this.x,-this.y,-this.z)},e.prototype.scaleInPlace=function(e){return this.x*=e,this.y*=e,this.z*=e,this},e.prototype.scale=function(t){return new e(this.x*t,this.y*t,this.z*t)},e.prototype.scaleToRef=function(e,t){return t.copyFromFloats(this.x*e,this.y*e,this.z*e)},e.prototype.scaleAndAddToRef=function(e,t){return t.addInPlaceFromFloats(this.x*e,this.y*e,this.z*e)},e.prototype.equals=function(e){return e&&this.x===e.x&&this.y===e.y&&this.z===e.z},e.prototype.equalsWithEpsilon=function(e,t){return void 0===t&&(t=c),e&&o.a.WithinEpsilon(this.x,e.x,t)&&o.a.WithinEpsilon(this.y,e.y,t)&&o.a.WithinEpsilon(this.z,e.z,t)},e.prototype.equalsToFloats=function(e,t,i){return this.x===e&&this.y===t&&this.z===i},e.prototype.multiplyInPlace=function(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this},e.prototype.multiply=function(e){return this.multiplyByFloats(e.x,e.y,e.z)},e.prototype.multiplyToRef=function(e,t){return t.copyFromFloats(this.x*e.x,this.y*e.y,this.z*e.z)},e.prototype.multiplyByFloats=function(t,i,n){return new e(this.x*t,this.y*i,this.z*n)},e.prototype.divide=function(t){return new e(this.x/t.x,this.y/t.y,this.z/t.z)},e.prototype.divideToRef=function(e,t){return t.copyFromFloats(this.x/e.x,this.y/e.y,this.z/e.z)},e.prototype.divideInPlace=function(e){return this.divideToRef(e,this)},e.prototype.minimizeInPlace=function(e){return this.minimizeInPlaceFromFloats(e.x,e.y,e.z)},e.prototype.maximizeInPlace=function(e){return this.maximizeInPlaceFromFloats(e.x,e.y,e.z)},e.prototype.minimizeInPlaceFromFloats=function(e,t,i){return e<this.x&&(this.x=e),t<this.y&&(this.y=t),i<this.z&&(this.z=i),this},e.prototype.maximizeInPlaceFromFloats=function(e,t,i){return e>this.x&&(this.x=e),t>this.y&&(this.y=t),i>this.z&&(this.z=i),this},e.prototype.isNonUniformWithinEpsilon=function(e){var t=Math.abs(this.x),i=Math.abs(this.y);if(!o.a.WithinEpsilon(t,i,e))return!0;var n=Math.abs(this.z);return!o.a.WithinEpsilon(t,n,e)||!o.a.WithinEpsilon(i,n,e)},Object.defineProperty(e.prototype,"isNonUniform",{get:function(){var e=Math.abs(this.x),t=Math.abs(this.y);if(e!==t)return!0;var i=Math.abs(this.z);return e!==i||t!==i},enumerable:!0,configurable:!0}),e.prototype.floor=function(){return new e(Math.floor(this.x),Math.floor(this.y),Math.floor(this.z))},e.prototype.fract=function(){return new e(this.x-Math.floor(this.x),this.y-Math.floor(this.y),this.z-Math.floor(this.z))},e.prototype.length=function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},e.prototype.lengthSquared=function(){return this.x*this.x+this.y*this.y+this.z*this.z},e.prototype.normalize=function(){return this.normalizeFromLength(this.length())},e.prototype.reorderInPlace=function(e){var t=this;return"xyz"===(e=e.toLowerCase())?this:(I.Vector3[0].copyFrom(this),["x","y","z"].forEach(function(i,n){t[i]=I.Vector3[0][e[n]]}),this)},e.prototype.rotateByQuaternionToRef=function(t,i){return t.toRotationMatrix(I.Matrix[0]),e.TransformCoordinatesToRef(this,I.Matrix[0],i),i},e.prototype.rotateByQuaternionAroundPointToRef=function(e,t,i){return this.subtractToRef(t,I.Vector3[0]),I.Vector3[0].rotateByQuaternionToRef(e,I.Vector3[0]),t.addToRef(I.Vector3[0],i),i},e.prototype.normalizeFromLength=function(e){return 0===e||1===e?this:this.scaleInPlace(1/e)},e.prototype.normalizeToNew=function(){var t=new e(0,0,0);return this.normalizeToRef(t),t},e.prototype.normalizeToRef=function(e){var t=this.length();return 0===t||1===t?e.copyFromFloats(this.x,this.y,this.z):this.scaleToRef(1/t,e)},e.prototype.clone=function(){return new e(this.x,this.y,this.z)},e.prototype.copyFrom=function(e){return this.copyFromFloats(e.x,e.y,e.z)},e.prototype.copyFromFloats=function(e,t,i){return this.x=e,this.y=t,this.z=i,this},e.prototype.set=function(e,t,i){return this.copyFromFloats(e,t,i)},e.prototype.setAll=function(e){return this.x=this.y=this.z=e,this},e.GetClipFactor=function(t,i,n,r){var o=e.Dot(t,n)-r;return o/(o-(e.Dot(i,n)-r))},e.GetAngleBetweenVectors=function(t,i,n){var r=t.normalizeToRef(I.Vector3[1]),o=i.normalizeToRef(I.Vector3[2]),s=e.Dot(r,o),a=I.Vector3[3];return e.CrossToRef(r,o,a),e.Dot(a,n)>0?Math.acos(s):-Math.acos(s)},e.FromArray=function(t,i){return void 0===i&&(i=0),new e(t[i],t[i+1],t[i+2])},e.FromFloatArray=function(t,i){return e.FromArray(t,i)},e.FromArrayToRef=function(e,t,i){i.x=e[t],i.y=e[t+1],i.z=e[t+2]},e.FromFloatArrayToRef=function(t,i,n){return e.FromArrayToRef(t,i,n)},e.FromFloatsToRef=function(e,t,i,n){n.copyFromFloats(e,t,i)},e.Zero=function(){return new e(0,0,0)},e.One=function(){return new e(1,1,1)},e.Up=function(){return new e(0,1,0)},Object.defineProperty(e,"UpReadOnly",{get:function(){return e._UpReadOnly},enumerable:!0,configurable:!0}),e.Down=function(){return new e(0,-1,0)},e.Forward=function(){return new e(0,0,1)},e.Backward=function(){return new e(0,0,-1)},e.Right=function(){return new e(1,0,0)},e.Left=function(){return new e(-1,0,0)},e.TransformCoordinates=function(t,i){var n=e.Zero();return e.TransformCoordinatesToRef(t,i,n),n},e.TransformCoordinatesToRef=function(t,i,n){e.TransformCoordinatesFromFloatsToRef(t.x,t.y,t.z,i,n)},e.TransformCoordinatesFromFloatsToRef=function(e,t,i,n,r){var o=n.m,s=e*o[0]+t*o[4]+i*o[8]+o[12],a=e*o[1]+t*o[5]+i*o[9]+o[13],c=e*o[2]+t*o[6]+i*o[10]+o[14],l=1/(e*o[3]+t*o[7]+i*o[11]+o[15]);r.x=s*l,r.y=a*l,r.z=c*l},e.TransformNormal=function(t,i){var n=e.Zero();return e.TransformNormalToRef(t,i,n),n},e.TransformNormalToRef=function(e,t,i){this.TransformNormalFromFloatsToRef(e.x,e.y,e.z,t,i)},e.TransformNormalFromFloatsToRef=function(e,t,i,n,r){var o=n.m;r.x=e*o[0]+t*o[4]+i*o[8],r.y=e*o[1]+t*o[5]+i*o[9],r.z=e*o[2]+t*o[6]+i*o[10]},e.CatmullRom=function(t,i,n,r,o){var s=o*o,a=o*s;return new e(.5*(2*i.x+(-t.x+n.x)*o+(2*t.x-5*i.x+4*n.x-r.x)*s+(-t.x+3*i.x-3*n.x+r.x)*a),.5*(2*i.y+(-t.y+n.y)*o+(2*t.y-5*i.y+4*n.y-r.y)*s+(-t.y+3*i.y-3*n.y+r.y)*a),.5*(2*i.z+(-t.z+n.z)*o+(2*t.z-5*i.z+4*n.z-r.z)*s+(-t.z+3*i.z-3*n.z+r.z)*a))},e.Clamp=function(t,i,n){var r=new e;return e.ClampToRef(t,i,n,r),r},e.ClampToRef=function(e,t,i,n){var r=e.x;r=(r=r>i.x?i.x:r)<t.x?t.x:r;var o=e.y;o=(o=o>i.y?i.y:o)<t.y?t.y:o;var s=e.z;s=(s=s>i.z?i.z:s)<t.z?t.z:s,n.copyFromFloats(r,o,s)},e.Hermite=function(t,i,n,r,o){var s=o*o,a=o*s,c=2*a-3*s+1,l=-2*a+3*s,u=a-2*s+o,h=a-s;return new e(t.x*c+n.x*l+i.x*u+r.x*h,t.y*c+n.y*l+i.y*u+r.y*h,t.z*c+n.z*l+i.z*u+r.z*h)},e.Lerp=function(t,i,n){var r=new e(0,0,0);return e.LerpToRef(t,i,n,r),r},e.LerpToRef=function(e,t,i,n){n.x=e.x+(t.x-e.x)*i,n.y=e.y+(t.y-e.y)*i,n.z=e.z+(t.z-e.z)*i},e.Dot=function(e,t){return e.x*t.x+e.y*t.y+e.z*t.z},e.Cross=function(t,i){var n=e.Zero();return e.CrossToRef(t,i,n),n},e.CrossToRef=function(e,t,i){var n=e.y*t.z-e.z*t.y,r=e.z*t.x-e.x*t.z,o=e.x*t.y-e.y*t.x;i.copyFromFloats(n,r,o)},e.Normalize=function(t){var i=e.Zero();return e.NormalizeToRef(t,i),i},e.NormalizeToRef=function(e,t){e.normalizeToRef(t)},e.Project=function(t,i,n,r){var o=r.width,s=r.height,a=r.x,c=r.y,l=I.Matrix[1];g.FromValuesToRef(o/2,0,0,0,0,-s/2,0,0,0,0,.5,0,a+o/2,s/2+c,.5,1,l);var u=I.Matrix[0];return i.multiplyToRef(n,u),u.multiplyToRef(l,u),e.TransformCoordinates(t,u)},e._UnprojectFromInvertedMatrixToRef=function(t,i,n){e.TransformCoordinatesToRef(t,i,n);var r=i.m,s=t.x*r[3]+t.y*r[7]+t.z*r[11]+r[15];o.a.WithinEpsilon(s,1)&&n.scaleInPlace(1/s)},e.UnprojectFromTransform=function(t,i,n,r,o){var s=I.Matrix[0];r.multiplyToRef(o,s),s.invert(),t.x=t.x/i*2-1,t.y=-(t.y/n*2-1);var a=new e;return e._UnprojectFromInvertedMatrixToRef(t,s,a),a},e.Unproject=function(t,i,n,r,o,s){var a=e.Zero();return e.UnprojectToRef(t,i,n,r,o,s,a),a},e.UnprojectToRef=function(t,i,n,r,o,s,a){e.UnprojectFloatsToRef(t.x,t.y,t.z,i,n,r,o,s,a)},e.UnprojectFloatsToRef=function(t,i,n,r,o,s,a,c,l){var u=I.Matrix[0];s.multiplyToRef(a,u),u.multiplyToRef(c,u),u.invert();var h=I.Vector3[0];h.x=t/r*2-1,h.y=-(i/o*2-1),h.z=2*n-1,e._UnprojectFromInvertedMatrixToRef(h,u,l)},e.Minimize=function(e,t){var i=e.clone();return i.minimizeInPlace(t),i},e.Maximize=function(e,t){var i=e.clone();return i.maximizeInPlace(t),i},e.Distance=function(t,i){return Math.sqrt(e.DistanceSquared(t,i))},e.DistanceSquared=function(e,t){var i=e.x-t.x,n=e.y-t.y,r=e.z-t.z;return i*i+n*n+r*r},e.Center=function(e,t){var i=e.add(t);return i.scaleInPlace(.5),i},e.RotationFromAxis=function(t,i,n){var r=e.Zero();return e.RotationFromAxisToRef(t,i,n,r),r},e.RotationFromAxisToRef=function(e,t,i,n){var r=I.Quaternion[0];_.RotationQuaternionFromAxisToRef(e,t,i,r),r.toEulerAnglesToRef(n)},e._UpReadOnly=e.Up(),e}(),f=function(){function e(e,t,i,n){this.x=e,this.y=t,this.z=i,this.w=n}return e.prototype.toString=function(){return"{X: "+this.x+" Y:"+this.y+" Z:"+this.z+" W:"+this.w+"}"},e.prototype.getClassName=function(){return"Vector4"},e.prototype.getHashCode=function(){var e=this.x||0;return e=397*(e=397*(e=397*e^(this.y||0))^(this.z||0))^(this.w||0)},e.prototype.asArray=function(){var e=new Array;return this.toArray(e,0),e},e.prototype.toArray=function(e,t){return void 0===t&&(t=0),e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,this},e.prototype.addInPlace=function(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this},e.prototype.add=function(t){return new e(this.x+t.x,this.y+t.y,this.z+t.z,this.w+t.w)},e.prototype.addToRef=function(e,t){return t.x=this.x+e.x,t.y=this.y+e.y,t.z=this.z+e.z,t.w=this.w+e.w,this},e.prototype.subtractInPlace=function(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this},e.prototype.subtract=function(t){return new e(this.x-t.x,this.y-t.y,this.z-t.z,this.w-t.w)},e.prototype.subtractToRef=function(e,t){return t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z,t.w=this.w-e.w,this},e.prototype.subtractFromFloats=function(t,i,n,r){return new e(this.x-t,this.y-i,this.z-n,this.w-r)},e.prototype.subtractFromFloatsToRef=function(e,t,i,n,r){return r.x=this.x-e,r.y=this.y-t,r.z=this.z-i,r.w=this.w-n,this},e.prototype.negate=function(){return new e(-this.x,-this.y,-this.z,-this.w)},e.prototype.scaleInPlace=function(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this},e.prototype.scale=function(t){return new e(this.x*t,this.y*t,this.z*t,this.w*t)},e.prototype.scaleToRef=function(e,t){return t.x=this.x*e,t.y=this.y*e,t.z=this.z*e,t.w=this.w*e,this},e.prototype.scaleAndAddToRef=function(e,t){return t.x+=this.x*e,t.y+=this.y*e,t.z+=this.z*e,t.w+=this.w*e,this},e.prototype.equals=function(e){return e&&this.x===e.x&&this.y===e.y&&this.z===e.z&&this.w===e.w},e.prototype.equalsWithEpsilon=function(e,t){return void 0===t&&(t=c),e&&o.a.WithinEpsilon(this.x,e.x,t)&&o.a.WithinEpsilon(this.y,e.y,t)&&o.a.WithinEpsilon(this.z,e.z,t)&&o.a.WithinEpsilon(this.w,e.w,t)},e.prototype.equalsToFloats=function(e,t,i,n){return this.x===e&&this.y===t&&this.z===i&&this.w===n},e.prototype.multiplyInPlace=function(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this},e.prototype.multiply=function(t){return new e(this.x*t.x,this.y*t.y,this.z*t.z,this.w*t.w)},e.prototype.multiplyToRef=function(e,t){return t.x=this.x*e.x,t.y=this.y*e.y,t.z=this.z*e.z,t.w=this.w*e.w,this},e.prototype.multiplyByFloats=function(t,i,n,r){return new e(this.x*t,this.y*i,this.z*n,this.w*r)},e.prototype.divide=function(t){return new e(this.x/t.x,this.y/t.y,this.z/t.z,this.w/t.w)},e.prototype.divideToRef=function(e,t){return t.x=this.x/e.x,t.y=this.y/e.y,t.z=this.z/e.z,t.w=this.w/e.w,this},e.prototype.divideInPlace=function(e){return this.divideToRef(e,this)},e.prototype.minimizeInPlace=function(e){return e.x<this.x&&(this.x=e.x),e.y<this.y&&(this.y=e.y),e.z<this.z&&(this.z=e.z),e.w<this.w&&(this.w=e.w),this},e.prototype.maximizeInPlace=function(e){return e.x>this.x&&(this.x=e.x),e.y>this.y&&(this.y=e.y),e.z>this.z&&(this.z=e.z),e.w>this.w&&(this.w=e.w),this},e.prototype.floor=function(){return new e(Math.floor(this.x),Math.floor(this.y),Math.floor(this.z),Math.floor(this.w))},e.prototype.fract=function(){return new e(this.x-Math.floor(this.x),this.y-Math.floor(this.y),this.z-Math.floor(this.z),this.w-Math.floor(this.w))},e.prototype.length=function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)},e.prototype.lengthSquared=function(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w},e.prototype.normalize=function(){var e=this.length();return 0===e?this:this.scaleInPlace(1/e)},e.prototype.toVector3=function(){return new d(this.x,this.y,this.z)},e.prototype.clone=function(){return new e(this.x,this.y,this.z,this.w)},e.prototype.copyFrom=function(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this},e.prototype.copyFromFloats=function(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this},e.prototype.set=function(e,t,i,n){return this.copyFromFloats(e,t,i,n)},e.prototype.setAll=function(e){return this.x=this.y=this.z=this.w=e,this},e.FromArray=function(t,i){return i||(i=0),new e(t[i],t[i+1],t[i+2],t[i+3])},e.FromArrayToRef=function(e,t,i){i.x=e[t],i.y=e[t+1],i.z=e[t+2],i.w=e[t+3]},e.FromFloatArrayToRef=function(t,i,n){e.FromArrayToRef(t,i,n)},e.FromFloatsToRef=function(e,t,i,n,r){r.x=e,r.y=t,r.z=i,r.w=n},e.Zero=function(){return new e(0,0,0,0)},e.One=function(){return new e(1,1,1,1)},e.Normalize=function(t){var i=e.Zero();return e.NormalizeToRef(t,i),i},e.NormalizeToRef=function(e,t){t.copyFrom(e),t.normalize()},e.Minimize=function(e,t){var i=e.clone();return i.minimizeInPlace(t),i},e.Maximize=function(e,t){var i=e.clone();return i.maximizeInPlace(t),i},e.Distance=function(t,i){return Math.sqrt(e.DistanceSquared(t,i))},e.DistanceSquared=function(e,t){var i=e.x-t.x,n=e.y-t.y,r=e.z-t.z,o=e.w-t.w;return i*i+n*n+r*r+o*o},e.Center=function(e,t){var i=e.add(t);return i.scaleInPlace(.5),i},e.TransformNormal=function(t,i){var n=e.Zero();return e.TransformNormalToRef(t,i,n),n},e.TransformNormalToRef=function(e,t,i){var n=t.m,r=e.x*n[0]+e.y*n[4]+e.z*n[8],o=e.x*n[1]+e.y*n[5]+e.z*n[9],s=e.x*n[2]+e.y*n[6]+e.z*n[10];i.x=r,i.y=o,i.z=s,i.w=e.w},e.TransformNormalFromFloatsToRef=function(e,t,i,n,r,o){var s=r.m;o.x=e*s[0]+t*s[4]+i*s[8],o.y=e*s[1]+t*s[5]+i*s[9],o.z=e*s[2]+t*s[6]+i*s[10],o.w=n},e.FromVector3=function(t,i){return void 0===i&&(i=0),new e(t.x,t.y,t.z,i)},e}(),p=function(){function e(e,t){this.width=e,this.height=t}return e.prototype.toString=function(){return"{W: "+this.width+", H: "+this.height+"}"},e.prototype.getClassName=function(){return"Size"},e.prototype.getHashCode=function(){var e=this.width||0;return e=397*e^(this.height||0)},e.prototype.copyFrom=function(e){this.width=e.width,this.height=e.height},e.prototype.copyFromFloats=function(e,t){return this.width=e,this.height=t,this},e.prototype.set=function(e,t){return this.copyFromFloats(e,t)},e.prototype.multiplyByFloats=function(t,i){return new e(this.width*t,this.height*i)},e.prototype.clone=function(){return new e(this.width,this.height)},e.prototype.equals=function(e){return!!e&&(this.width===e.width&&this.height===e.height)},Object.defineProperty(e.prototype,"surface",{get:function(){return this.width*this.height},enumerable:!0,configurable:!0}),e.Zero=function(){return new e(0,0)},e.prototype.add=function(t){return new e(this.width+t.width,this.height+t.height)},e.prototype.subtract=function(t){return new e(this.width-t.width,this.height-t.height)},e.Lerp=function(t,i,n){return new e(t.width+(i.width-t.width)*n,t.height+(i.height-t.height)*n)},e}(),_=function(){function e(e,t,i,n){void 0===e&&(e=0),void 0===t&&(t=0),void 0===i&&(i=0),void 0===n&&(n=1),this.x=e,this.y=t,this.z=i,this.w=n}return e.prototype.toString=function(){return"{X: "+this.x+" Y:"+this.y+" Z:"+this.z+" W:"+this.w+"}"},e.prototype.getClassName=function(){return"Quaternion"},e.prototype.getHashCode=function(){var e=this.x||0;return e=397*(e=397*(e=397*e^(this.y||0))^(this.z||0))^(this.w||0)},e.prototype.asArray=function(){return[this.x,this.y,this.z,this.w]},e.prototype.equals=function(e){return e&&this.x===e.x&&this.y===e.y&&this.z===e.z&&this.w===e.w},e.prototype.clone=function(){return new e(this.x,this.y,this.z,this.w)},e.prototype.copyFrom=function(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this},e.prototype.copyFromFloats=function(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this},e.prototype.set=function(e,t,i,n){return this.copyFromFloats(e,t,i,n)},e.prototype.add=function(t){return new e(this.x+t.x,this.y+t.y,this.z+t.z,this.w+t.w)},e.prototype.addInPlace=function(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this},e.prototype.subtract=function(t){return new e(this.x-t.x,this.y-t.y,this.z-t.z,this.w-t.w)},e.prototype.scale=function(t){return new e(this.x*t,this.y*t,this.z*t,this.w*t)},e.prototype.scaleToRef=function(e,t){return t.x=this.x*e,t.y=this.y*e,t.z=this.z*e,t.w=this.w*e,this},e.prototype.scaleInPlace=function(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this},e.prototype.scaleAndAddToRef=function(e,t){return t.x+=this.x*e,t.y+=this.y*e,t.z+=this.z*e,t.w+=this.w*e,this},e.prototype.multiply=function(t){var i=new e(0,0,0,1);return this.multiplyToRef(t,i),i},e.prototype.multiplyToRef=function(e,t){var i=this.x*e.w+this.y*e.z-this.z*e.y+this.w*e.x,n=-this.x*e.z+this.y*e.w+this.z*e.x+this.w*e.y,r=this.x*e.y-this.y*e.x+this.z*e.w+this.w*e.z,o=-this.x*e.x-this.y*e.y-this.z*e.z+this.w*e.w;return t.copyFromFloats(i,n,r,o),this},e.prototype.multiplyInPlace=function(e){return this.multiplyToRef(e,this),this},e.prototype.conjugateToRef=function(e){return e.copyFromFloats(-this.x,-this.y,-this.z,this.w),this},e.prototype.conjugateInPlace=function(){return this.x*=-1,this.y*=-1,this.z*=-1,this},e.prototype.conjugate=function(){return new e(-this.x,-this.y,-this.z,this.w)},e.prototype.length=function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)},e.prototype.normalize=function(){var e=this.length();if(0===e)return this;var t=1/e;return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this},e.prototype.toEulerAngles=function(e){void 0===e&&(e="YZX");var t=d.Zero();return this.toEulerAnglesToRef(t),t},e.prototype.toEulerAnglesToRef=function(e){var t=this.z,i=this.x,n=this.y,r=this.w,o=r*r,s=t*t,a=i*i,c=n*n,l=n*t-i*r;return l<-.4999999?(e.y=2*Math.atan2(n,r),e.x=Math.PI/2,e.z=0):l>.4999999?(e.y=2*Math.atan2(n,r),e.x=-Math.PI/2,e.z=0):(e.z=Math.atan2(2*(i*n+t*r),-s-a+c+o),e.x=Math.asin(-2*(t*n-i*r)),e.y=Math.atan2(2*(t*i+n*r),s-a-c+o)),this},e.prototype.toRotationMatrix=function(e){return g.FromQuaternionToRef(this,e),this},e.prototype.fromRotationMatrix=function(t){return e.FromRotationMatrixToRef(t,this),this},e.FromRotationMatrix=function(t){var i=new e;return e.FromRotationMatrixToRef(t,i),i},e.FromRotationMatrixToRef=function(e,t){var i,n=e.m,r=n[0],o=n[4],s=n[8],a=n[1],c=n[5],l=n[9],u=n[2],h=n[6],d=n[10],f=r+c+d;f>0?(i=.5/Math.sqrt(f+1),t.w=.25/i,t.x=(h-l)*i,t.y=(s-u)*i,t.z=(a-o)*i):r>c&&r>d?(i=2*Math.sqrt(1+r-c-d),t.w=(h-l)/i,t.x=.25*i,t.y=(o+a)/i,t.z=(s+u)/i):c>d?(i=2*Math.sqrt(1+c-r-d),t.w=(s-u)/i,t.x=(o+a)/i,t.y=.25*i,t.z=(l+h)/i):(i=2*Math.sqrt(1+d-r-c),t.w=(a-o)/i,t.x=(s+u)/i,t.y=(l+h)/i,t.z=.25*i)},e.Dot=function(e,t){return e.x*t.x+e.y*t.y+e.z*t.z+e.w*t.w},e.AreClose=function(t,i){return e.Dot(t,i)>=0},e.Zero=function(){return new e(0,0,0,0)},e.Inverse=function(t){return new e(-t.x,-t.y,-t.z,t.w)},e.InverseToRef=function(e,t){return t.set(-e.x,-e.y,-e.z,e.w),t},e.Identity=function(){return new e(0,0,0,1)},e.IsIdentity=function(e){return e&&0===e.x&&0===e.y&&0===e.z&&1===e.w},e.RotationAxis=function(t,i){return e.RotationAxisToRef(t,i,new e)},e.RotationAxisToRef=function(e,t,i){var n=Math.sin(t/2);return e.normalize(),i.w=Math.cos(t/2),i.x=e.x*n,i.y=e.y*n,i.z=e.z*n,i},e.FromArray=function(t,i){return i||(i=0),new e(t[i],t[i+1],t[i+2],t[i+3])},e.FromEulerAngles=function(t,i,n){var r=new e;return e.RotationYawPitchRollToRef(i,t,n,r),r},e.FromEulerAnglesToRef=function(t,i,n,r){return e.RotationYawPitchRollToRef(i,t,n,r),r},e.FromEulerVector=function(t){var i=new e;return e.RotationYawPitchRollToRef(t.y,t.x,t.z,i),i},e.FromEulerVectorToRef=function(t,i){return e.RotationYawPitchRollToRef(t.y,t.x,t.z,i),i},e.RotationYawPitchRoll=function(t,i,n){var r=new e;return e.RotationYawPitchRollToRef(t,i,n,r),r},e.RotationYawPitchRollToRef=function(e,t,i,n){var r=.5*i,o=.5*t,s=.5*e,a=Math.sin(r),c=Math.cos(r),l=Math.sin(o),u=Math.cos(o),h=Math.sin(s),d=Math.cos(s);n.x=d*l*c+h*u*a,n.y=h*u*c-d*l*a,n.z=d*u*a-h*l*c,n.w=d*u*c+h*l*a},e.RotationAlphaBetaGamma=function(t,i,n){var r=new e;return e.RotationAlphaBetaGammaToRef(t,i,n,r),r},e.RotationAlphaBetaGammaToRef=function(e,t,i,n){var r=.5*(i+e),o=.5*(i-e),s=.5*t;n.x=Math.cos(o)*Math.sin(s),n.y=Math.sin(o)*Math.sin(s),n.z=Math.sin(r)*Math.cos(s),n.w=Math.cos(r)*Math.cos(s)},e.RotationQuaternionFromAxis=function(t,i,n){var r=new e(0,0,0,0);return e.RotationQuaternionFromAxisToRef(t,i,n,r),r},e.RotationQuaternionFromAxisToRef=function(t,i,n,r){var o=I.Matrix[0];g.FromXYZAxesToRef(t.normalize(),i.normalize(),n.normalize(),o),e.FromRotationMatrixToRef(o,r)},e.Slerp=function(t,i,n){var r=e.Identity();return e.SlerpToRef(t,i,n,r),r},e.SlerpToRef=function(e,t,i,n){var r,o,s=e.x*t.x+e.y*t.y+e.z*t.z+e.w*t.w,a=!1;if(s<0&&(a=!0,s=-s),s>.999999)o=1-i,r=a?-i:i;else{var c=Math.acos(s),l=1/Math.sin(c);o=Math.sin((1-i)*c)*l,r=a?-Math.sin(i*c)*l:Math.sin(i*c)*l}n.x=o*e.x+r*t.x,n.y=o*e.y+r*t.y,n.z=o*e.z+r*t.z,n.w=o*e.w+r*t.w},e.Hermite=function(t,i,n,r,o){var s=o*o,a=o*s,c=2*a-3*s+1,l=-2*a+3*s,u=a-2*s+o,h=a-s;return new e(t.x*c+n.x*l+i.x*u+r.x*h,t.y*c+n.y*l+i.y*u+r.y*h,t.z*c+n.z*l+i.z*u+r.z*h,t.w*c+n.w*l+i.w*u+r.w*h)},e}(),g=function(){function e(){this._isIdentity=!1,this._isIdentityDirty=!0,this._isIdentity3x2=!0,this._isIdentity3x2Dirty=!0,this.updateFlag=-1,this._m=new Float32Array(16),this._updateIdentityStatus(!1)}return Object.defineProperty(e.prototype,"m",{get:function(){return this._m},enumerable:!0,configurable:!0}),e.prototype._markAsUpdated=function(){this.updateFlag=e._updateFlagSeed++,this._isIdentity=!1,this._isIdentity3x2=!1,this._isIdentityDirty=!0,this._isIdentity3x2Dirty=!0},e.prototype._updateIdentityStatus=function(t,i,n,r){void 0===i&&(i=!1),void 0===n&&(n=!1),void 0===r&&(r=!0),this.updateFlag=e._updateFlagSeed++,this._isIdentity=t,this._isIdentity3x2=t||n,this._isIdentityDirty=!this._isIdentity&&i,this._isIdentity3x2Dirty=!this._isIdentity3x2&&r},e.prototype.isIdentity=function(){if(this._isIdentityDirty){this._isIdentityDirty=!1;var e=this._m;this._isIdentity=1===e[0]&&0===e[1]&&0===e[2]&&0===e[3]&&0===e[4]&&1===e[5]&&0===e[6]&&0===e[7]&&0===e[8]&&0===e[9]&&1===e[10]&&0===e[11]&&0===e[12]&&0===e[13]&&0===e[14]&&1===e[15]}return this._isIdentity},e.prototype.isIdentityAs3x2=function(){return this._isIdentity3x2Dirty&&(this._isIdentity3x2Dirty=!1,1!==this._m[0]||1!==this._m[5]||1!==this._m[15]?this._isIdentity3x2=!1:0!==this._m[1]||0!==this._m[2]||0!==this._m[3]||0!==this._m[4]||0!==this._m[6]||0!==this._m[7]||0!==this._m[8]||0!==this._m[9]||0!==this._m[10]||0!==this._m[11]||0!==this._m[12]||0!==this._m[13]||0!==this._m[14]?this._isIdentity3x2=!1:this._isIdentity3x2=!0),this._isIdentity3x2},e.prototype.determinant=function(){if(!0===this._isIdentity)return 1;var e=this._m,t=e[0],i=e[1],n=e[2],r=e[3],o=e[4],s=e[5],a=e[6],c=e[7],l=e[8],u=e[9],h=e[10],d=e[11],f=e[12],p=e[13],_=e[14],g=e[15],m=h*g-_*d,v=u*g-p*d,y=u*_-p*h,b=l*g-f*d,T=l*_-h*f,E=l*p-f*u;return t*+(s*m-a*v+c*y)+i*-(o*m-a*b+c*T)+n*+(o*v-s*b+c*E)+r*-(o*y-s*T+a*E)},e.prototype.toArray=function(){return this._m},e.prototype.asArray=function(){return this._m},e.prototype.invert=function(){return this.invertToRef(this),this},e.prototype.reset=function(){return e.FromValuesToRef(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,this),this._updateIdentityStatus(!1),this},e.prototype.add=function(t){var i=new e;return this.addToRef(t,i),i},e.prototype.addToRef=function(e,t){for(var i=this._m,n=t._m,r=e.m,o=0;o<16;o++)n[o]=i[o]+r[o];return t._markAsUpdated(),this},e.prototype.addToSelf=function(e){for(var t=this._m,i=e.m,n=0;n<16;n++)t[n]+=i[n];return this._markAsUpdated(),this},e.prototype.invertToRef=function(t){if(!0===this._isIdentity)return e.IdentityToRef(t),this;var i=this._m,n=i[0],r=i[1],o=i[2],s=i[3],a=i[4],c=i[5],l=i[6],u=i[7],h=i[8],d=i[9],f=i[10],p=i[11],_=i[12],g=i[13],m=i[14],v=i[15],y=f*v-m*p,b=d*v-g*p,T=d*m-g*f,E=h*v-_*p,A=h*m-f*_,x=h*g-_*d,R=+(c*y-l*b+u*T),P=-(a*y-l*E+u*A),S=+(a*b-c*E+u*x),C=-(a*T-c*A+l*x),M=n*R+r*P+o*S+s*C;if(0===M)return t.copyFrom(this),this;var O=1/M,I=l*v-m*u,D=c*v-g*u,L=c*m-g*l,w=a*v-_*u,F=a*m-_*l,N=a*g-_*c,B=l*p-f*u,U=c*p-d*u,V=c*f-d*l,G=a*p-h*u,k=a*f-h*l,z=a*d-h*c,j=-(r*y-o*b+s*T),H=+(n*y-o*E+s*A),W=-(n*b-r*E+s*x),X=+(n*T-r*A+o*x),Y=+(r*I-o*D+s*L),K=-(n*I-o*w+s*F),Q=+(n*D-r*w+s*N),q=-(n*L-r*F+o*N),Z=-(r*B-o*U+s*V),J=+(n*B-o*G+s*k),$=-(n*U-r*G+s*z),ee=+(n*V-r*k+o*z);return e.FromValuesToRef(R*O,j*O,Y*O,Z*O,P*O,H*O,K*O,J*O,S*O,W*O,Q*O,$*O,C*O,X*O,q*O,ee*O,t),this},e.prototype.addAtIndex=function(e,t){return this._m[e]+=t,this._markAsUpdated(),this},e.prototype.multiplyAtIndex=function(e,t){return this._m[e]*=t,this._markAsUpdated(),this},e.prototype.setTranslationFromFloats=function(e,t,i){return this._m[12]=e,this._m[13]=t,this._m[14]=i,this._markAsUpdated(),this},e.prototype.addTranslationFromFloats=function(e,t,i){return this._m[12]+=e,this._m[13]+=t,this._m[14]+=i,this._markAsUpdated(),this},e.prototype.setTranslation=function(e){return this.setTranslationFromFloats(e.x,e.y,e.z)},e.prototype.getTranslation=function(){return new d(this._m[12],this._m[13],this._m[14])},e.prototype.getTranslationToRef=function(e){return e.x=this._m[12],e.y=this._m[13],e.z=this._m[14],this},e.prototype.removeRotationAndScaling=function(){var t=this.m;return e.FromValuesToRef(1,0,0,0,0,1,0,0,0,0,1,0,t[12],t[13],t[14],t[15],this),this._updateIdentityStatus(0===t[12]&&0===t[13]&&0===t[14]&&1===t[15]),this},e.prototype.multiply=function(t){var i=new e;return this.multiplyToRef(t,i),i},e.prototype.copyFrom=function(e){e.copyToArray(this._m);var t=e;return this._updateIdentityStatus(t._isIdentity,t._isIdentityDirty,t._isIdentity3x2,t._isIdentity3x2Dirty),this},e.prototype.copyToArray=function(e,t){void 0===t&&(t=0);for(var i=0;i<16;i++)e[t+i]=this._m[i];return this},e.prototype.multiplyToRef=function(e,t){return this._isIdentity?(t.copyFrom(e),this):e._isIdentity?(t.copyFrom(this),this):(this.multiplyToArray(e,t._m,0),t._markAsUpdated(),this)},e.prototype.multiplyToArray=function(e,t,i){var n=this._m,r=e.m,o=n[0],s=n[1],a=n[2],c=n[3],l=n[4],u=n[5],h=n[6],d=n[7],f=n[8],p=n[9],_=n[10],g=n[11],m=n[12],v=n[13],y=n[14],b=n[15],T=r[0],E=r[1],A=r[2],x=r[3],R=r[4],P=r[5],S=r[6],C=r[7],M=r[8],O=r[9],I=r[10],D=r[11],L=r[12],w=r[13],F=r[14],N=r[15];return t[i]=o*T+s*R+a*M+c*L,t[i+1]=o*E+s*P+a*O+c*w,t[i+2]=o*A+s*S+a*I+c*F,t[i+3]=o*x+s*C+a*D+c*N,t[i+4]=l*T+u*R+h*M+d*L,t[i+5]=l*E+u*P+h*O+d*w,t[i+6]=l*A+u*S+h*I+d*F,t[i+7]=l*x+u*C+h*D+d*N,t[i+8]=f*T+p*R+_*M+g*L,t[i+9]=f*E+p*P+_*O+g*w,t[i+10]=f*A+p*S+_*I+g*F,t[i+11]=f*x+p*C+_*D+g*N,t[i+12]=m*T+v*R+y*M+b*L,t[i+13]=m*E+v*P+y*O+b*w,t[i+14]=m*A+v*S+y*I+b*F,t[i+15]=m*x+v*C+y*D+b*N,this},e.prototype.equals=function(e){var t=e;if(!t)return!1;if((this._isIdentity||t._isIdentity)&&!this._isIdentityDirty&&!t._isIdentityDirty)return this._isIdentity&&t._isIdentity;var i=this.m,n=t.m;return i[0]===n[0]&&i[1]===n[1]&&i[2]===n[2]&&i[3]===n[3]&&i[4]===n[4]&&i[5]===n[5]&&i[6]===n[6]&&i[7]===n[7]&&i[8]===n[8]&&i[9]===n[9]&&i[10]===n[10]&&i[11]===n[11]&&i[12]===n[12]&&i[13]===n[13]&&i[14]===n[14]&&i[15]===n[15]},e.prototype.clone=function(){var t=new e;return t.copyFrom(this),t},e.prototype.getClassName=function(){return"Matrix"},e.prototype.getHashCode=function(){for(var e=this._m[0]||0,t=1;t<16;t++)e=397*e^(this._m[t]||0);return e},e.prototype.decompose=function(t,i,n){if(this._isIdentity)return n&&n.setAll(0),t&&t.setAll(1),i&&i.copyFromFloats(0,0,0,1),!0;var r=this._m;if(n&&n.copyFromFloats(r[12],r[13],r[14]),(t=t||I.Vector3[0]).x=Math.sqrt(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]),t.y=Math.sqrt(r[4]*r[4]+r[5]*r[5]+r[6]*r[6]),t.z=Math.sqrt(r[8]*r[8]+r[9]*r[9]+r[10]*r[10]),this.determinant()<=0&&(t.y*=-1),0===t.x||0===t.y||0===t.z)return i&&i.copyFromFloats(0,0,0,1),!1;if(i){var o=1/t.x,s=1/t.y,a=1/t.z;e.FromValuesToRef(r[0]*o,r[1]*o,r[2]*o,0,r[4]*s,r[5]*s,r[6]*s,0,r[8]*a,r[9]*a,r[10]*a,0,0,0,0,1,I.Matrix[0]),_.FromRotationMatrixToRef(I.Matrix[0],i)}return!0},e.prototype.getRow=function(e){if(e<0||e>3)return null;var t=4*e;return new f(this._m[t+0],this._m[t+1],this._m[t+2],this._m[t+3])},e.prototype.setRow=function(e,t){return this.setRowFromFloats(e,t.x,t.y,t.z,t.w)},e.prototype.transpose=function(){return e.Transpose(this)},e.prototype.transposeToRef=function(t){return e.TransposeToRef(this,t),this},e.prototype.setRowFromFloats=function(e,t,i,n,r){if(e<0||e>3)return this;var o=4*e;return this._m[o+0]=t,this._m[o+1]=i,this._m[o+2]=n,this._m[o+3]=r,this._markAsUpdated(),this},e.prototype.scale=function(t){var i=new e;return this.scaleToRef(t,i),i},e.prototype.scaleToRef=function(e,t){for(var i=0;i<16;i++)t._m[i]=this._m[i]*e;return t._markAsUpdated(),this},e.prototype.scaleAndAddToRef=function(e,t){for(var i=0;i<16;i++)t._m[i]+=this._m[i]*e;return t._markAsUpdated(),this},e.prototype.toNormalMatrix=function(t){var i=I.Matrix[0];this.invertToRef(i),i.transposeToRef(t);var n=t._m;e.FromValuesToRef(n[0],n[1],n[2],0,n[4],n[5],n[6],0,n[8],n[9],n[10],0,0,0,0,1,t)},e.prototype.getRotationMatrix=function(){var t=new e;return this.getRotationMatrixToRef(t),t},e.prototype.getRotationMatrixToRef=function(t){var i=I.Vector3[0];if(!this.decompose(i))return e.IdentityToRef(t),this;var n=this._m,r=1/i.x,o=1/i.y,s=1/i.z;return e.FromValuesToRef(n[0]*r,n[1]*r,n[2]*r,0,n[4]*o,n[5]*o,n[6]*o,0,n[8]*s,n[9]*s,n[10]*s,0,0,0,0,1,t),this},e.prototype.toggleModelMatrixHandInPlace=function(){var e=this._m;e[2]*=-1,e[6]*=-1,e[8]*=-1,e[9]*=-1,e[14]*=-1,this._markAsUpdated()},e.prototype.toggleProjectionMatrixHandInPlace=function(){var e=this._m;e[8]*=-1,e[9]*=-1,e[10]*=-1,e[11]*=-1,this._markAsUpdated()},e.FromArray=function(t,i){void 0===i&&(i=0);var n=new e;return e.FromArrayToRef(t,i,n),n},e.FromArrayToRef=function(e,t,i){for(var n=0;n<16;n++)i._m[n]=e[n+t];i._markAsUpdated()},e.FromFloat32ArrayToRefScaled=function(e,t,i,n){for(var r=0;r<16;r++)n._m[r]=e[r+t]*i;n._markAsUpdated()},Object.defineProperty(e,"IdentityReadOnly",{get:function(){return e._identityReadOnly},enumerable:!0,configurable:!0}),e.FromValuesToRef=function(e,t,i,n,r,o,s,a,c,l,u,h,d,f,p,_,g){var m=g._m;m[0]=e,m[1]=t,m[2]=i,m[3]=n,m[4]=r,m[5]=o,m[6]=s,m[7]=a,m[8]=c,m[9]=l,m[10]=u,m[11]=h,m[12]=d,m[13]=f,m[14]=p,m[15]=_,g._markAsUpdated()},e.FromValues=function(t,i,n,r,o,s,a,c,l,u,h,d,f,p,_,g){var m=new e,v=m._m;return v[0]=t,v[1]=i,v[2]=n,v[3]=r,v[4]=o,v[5]=s,v[6]=a,v[7]=c,v[8]=l,v[9]=u,v[10]=h,v[11]=d,v[12]=f,v[13]=p,v[14]=_,v[15]=g,m._markAsUpdated(),m},e.Compose=function(t,i,n){var r=new e;return e.ComposeToRef(t,i,n,r),r},e.ComposeToRef=function(e,t,i,n){var r=n._m,o=t.x,s=t.y,a=t.z,c=t.w,l=o+o,u=s+s,h=a+a,d=o*l,f=o*u,p=o*h,_=s*u,g=s*h,m=a*h,v=c*l,y=c*u,b=c*h,T=e.x,E=e.y,A=e.z;r[0]=(1-(_+m))*T,r[1]=(f+b)*T,r[2]=(p-y)*T,r[3]=0,r[4]=(f-b)*E,r[5]=(1-(d+m))*E,r[6]=(g+v)*E,r[7]=0,r[8]=(p+y)*A,r[9]=(g-v)*A,r[10]=(1-(d+_))*A,r[11]=0,r[12]=i.x,r[13]=i.y,r[14]=i.z,r[15]=1,n._markAsUpdated()},e.Identity=function(){var t=e.FromValues(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);return t._updateIdentityStatus(!0),t},e.IdentityToRef=function(t){e.FromValuesToRef(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,t),t._updateIdentityStatus(!0)},e.Zero=function(){var t=e.FromValues(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);return t._updateIdentityStatus(!1),t},e.RotationX=function(t){var i=new e;return e.RotationXToRef(t,i),i},e.Invert=function(t){var i=new e;return t.invertToRef(i),i},e.RotationXToRef=function(t,i){var n=Math.sin(t),r=Math.cos(t);e.FromValuesToRef(1,0,0,0,0,r,n,0,0,-n,r,0,0,0,0,1,i),i._updateIdentityStatus(1===r&&0===n)},e.RotationY=function(t){var i=new e;return e.RotationYToRef(t,i),i},e.RotationYToRef=function(t,i){var n=Math.sin(t),r=Math.cos(t);e.FromValuesToRef(r,0,-n,0,0,1,0,0,n,0,r,0,0,0,0,1,i),i._updateIdentityStatus(1===r&&0===n)},e.RotationZ=function(t){var i=new e;return e.RotationZToRef(t,i),i},e.RotationZToRef=function(t,i){var n=Math.sin(t),r=Math.cos(t);e.FromValuesToRef(r,n,0,0,-n,r,0,0,0,0,1,0,0,0,0,1,i),i._updateIdentityStatus(1===r&&0===n)},e.RotationAxis=function(t,i){var n=new e;return e.RotationAxisToRef(t,i,n),n},e.RotationAxisToRef=function(e,t,i){var n=Math.sin(-t),r=Math.cos(-t),o=1-r;e.normalize();var s=i._m;s[0]=e.x*e.x*o+r,s[1]=e.x*e.y*o-e.z*n,s[2]=e.x*e.z*o+e.y*n,s[3]=0,s[4]=e.y*e.x*o+e.z*n,s[5]=e.y*e.y*o+r,s[6]=e.y*e.z*o-e.x*n,s[7]=0,s[8]=e.z*e.x*o-e.y*n,s[9]=e.z*e.y*o+e.x*n,s[10]=e.z*e.z*o+r,s[11]=0,s[12]=0,s[13]=0,s[14]=0,s[15]=1,i._markAsUpdated()},e.RotationAlignToRef=function(e,t,i){var n=d.Cross(t,e),r=d.Dot(t,e),o=1/(1+r),s=i._m;s[0]=n.x*n.x*o+r,s[1]=n.y*n.x*o-n.z,s[2]=n.z*n.x*o+n.y,s[3]=0,s[4]=n.x*n.y*o+n.z,s[5]=n.y*n.y*o+r,s[6]=n.z*n.y*o-n.x,s[7]=0,s[8]=n.x*n.z*o-n.y,s[9]=n.y*n.z*o+n.x,s[10]=n.z*n.z*o+r,s[11]=0,s[12]=0,s[13]=0,s[14]=0,s[15]=1,i._markAsUpdated()},e.RotationYawPitchRoll=function(t,i,n){var r=new e;return e.RotationYawPitchRollToRef(t,i,n,r),r},e.RotationYawPitchRollToRef=function(e,t,i,n){_.RotationYawPitchRollToRef(e,t,i,I.Quaternion[0]),I.Quaternion[0].toRotationMatrix(n)},e.Scaling=function(t,i,n){var r=new e;return e.ScalingToRef(t,i,n,r),r},e.ScalingToRef=function(t,i,n,r){e.FromValuesToRef(t,0,0,0,0,i,0,0,0,0,n,0,0,0,0,1,r),r._updateIdentityStatus(1===t&&1===i&&1===n)},e.Translation=function(t,i,n){var r=new e;return e.TranslationToRef(t,i,n,r),r},e.TranslationToRef=function(t,i,n,r){e.FromValuesToRef(1,0,0,0,0,1,0,0,0,0,1,0,t,i,n,1,r),r._updateIdentityStatus(0===t&&0===i&&0===n)},e.Lerp=function(t,i,n){var r=new e;return e.LerpToRef(t,i,n,r),r},e.LerpToRef=function(e,t,i,n){for(var r=n._m,o=e.m,s=t.m,a=0;a<16;a++)r[a]=o[a]*(1-i)+s[a]*i;n._markAsUpdated()},e.DecomposeLerp=function(t,i,n){var r=new e;return e.DecomposeLerpToRef(t,i,n,r),r},e.DecomposeLerpToRef=function(t,i,n,r){var o=I.Vector3[0],s=I.Quaternion[0],a=I.Vector3[1];t.decompose(o,s,a);var c=I.Vector3[2],l=I.Quaternion[1],u=I.Vector3[3];i.decompose(c,l,u);var h=I.Vector3[4];d.LerpToRef(o,c,n,h);var f=I.Quaternion[2];_.SlerpToRef(s,l,n,f);var p=I.Vector3[5];d.LerpToRef(a,u,n,p),e.ComposeToRef(h,f,p,r)},e.LookAtLH=function(t,i,n){var r=new e;return e.LookAtLHToRef(t,i,n,r),r},e.LookAtLHToRef=function(t,i,n,r){var o=I.Vector3[0],s=I.Vector3[1],a=I.Vector3[2];i.subtractToRef(t,a),a.normalize(),d.CrossToRef(n,a,o);var c=o.lengthSquared();0===c?o.x=1:o.normalizeFromLength(Math.sqrt(c)),d.CrossToRef(a,o,s),s.normalize();var l=-d.Dot(o,t),u=-d.Dot(s,t),h=-d.Dot(a,t);e.FromValuesToRef(o.x,s.x,a.x,0,o.y,s.y,a.y,0,o.z,s.z,a.z,0,l,u,h,1,r)},e.LookAtRH=function(t,i,n){var r=new e;return e.LookAtRHToRef(t,i,n,r),r},e.LookAtRHToRef=function(t,i,n,r){var o=I.Vector3[0],s=I.Vector3[1],a=I.Vector3[2];t.subtractToRef(i,a),a.normalize(),d.CrossToRef(n,a,o);var c=o.lengthSquared();0===c?o.x=1:o.normalizeFromLength(Math.sqrt(c)),d.CrossToRef(a,o,s),s.normalize();var l=-d.Dot(o,t),u=-d.Dot(s,t),h=-d.Dot(a,t);e.FromValuesToRef(o.x,s.x,a.x,0,o.y,s.y,a.y,0,o.z,s.z,a.z,0,l,u,h,1,r)},e.OrthoLH=function(t,i,n,r){var o=new e;return e.OrthoLHToRef(t,i,n,r,o),o},e.OrthoLHToRef=function(t,i,n,r,o){var s=2/t,a=2/i,c=2/(r-n),l=-(r+n)/(r-n);e.FromValuesToRef(s,0,0,0,0,a,0,0,0,0,c,0,0,0,l,1,o),o._updateIdentityStatus(1===s&&1===a&&1===c&&0===l)},e.OrthoOffCenterLH=function(t,i,n,r,o,s){var a=new e;return e.OrthoOffCenterLHToRef(t,i,n,r,o,s,a),a},e.OrthoOffCenterLHToRef=function(t,i,n,r,o,s,a){var c=2/(i-t),l=2/(r-n),u=2/(s-o),h=-(s+o)/(s-o),d=(t+i)/(t-i),f=(r+n)/(n-r);e.FromValuesToRef(c,0,0,0,0,l,0,0,0,0,u,0,d,f,h,1,a),a._markAsUpdated()},e.OrthoOffCenterRH=function(t,i,n,r,o,s){var a=new e;return e.OrthoOffCenterRHToRef(t,i,n,r,o,s,a),a},e.OrthoOffCenterRHToRef=function(t,i,n,r,o,s,a){e.OrthoOffCenterLHToRef(t,i,n,r,o,s,a),a._m[10]*=-1},e.PerspectiveLH=function(t,i,n,r){var o=new e,s=2*n/t,a=2*n/i,c=(r+n)/(r-n),l=-2*r*n/(r-n);return e.FromValuesToRef(s,0,0,0,0,a,0,0,0,0,c,1,0,0,l,0,o),o._updateIdentityStatus(!1),o},e.PerspectiveFovLH=function(t,i,n,r){var o=new e;return e.PerspectiveFovLHToRef(t,i,n,r,o),o},e.PerspectiveFovLHToRef=function(t,i,n,r,o,s){void 0===s&&(s=!0);var a=n,c=r,l=1/Math.tan(.5*t),u=s?l/i:l,h=s?l:l*i,d=(c+a)/(c-a),f=-2*c*a/(c-a);e.FromValuesToRef(u,0,0,0,0,h,0,0,0,0,d,1,0,0,f,0,o),o._updateIdentityStatus(!1)},e.PerspectiveFovRH=function(t,i,n,r){var o=new e;return e.PerspectiveFovRHToRef(t,i,n,r,o),o},e.PerspectiveFovRHToRef=function(t,i,n,r,o,s){void 0===s&&(s=!0);var a=n,c=r,l=1/Math.tan(.5*t),u=s?l/i:l,h=s?l:l*i,d=-(c+a)/(c-a),f=-2*c*a/(c-a);e.FromValuesToRef(u,0,0,0,0,h,0,0,0,0,d,-1,0,0,f,0,o),o._updateIdentityStatus(!1)},e.PerspectiveFovWebVRToRef=function(e,t,i,n,r){void 0===r&&(r=!1);var o=r?-1:1,s=Math.tan(e.upDegrees*Math.PI/180),a=Math.tan(e.downDegrees*Math.PI/180),c=Math.tan(e.leftDegrees*Math.PI/180),l=Math.tan(e.rightDegrees*Math.PI/180),u=2/(c+l),h=2/(s+a),d=n._m;d[0]=u,d[1]=d[2]=d[3]=d[4]=0,d[5]=h,d[6]=d[7]=0,d[8]=(c-l)*u*.5,d[9]=-(s-a)*h*.5,d[10]=-i/(t-i),d[11]=1*o,d[12]=d[13]=d[15]=0,d[14]=-2*i*t/(i-t),n._markAsUpdated()},e.GetFinalMatrix=function(t,i,n,r,o,s){var a=t.width,c=t.height,l=t.x,u=t.y,h=e.FromValues(a/2,0,0,0,0,-c/2,0,0,0,0,s-o,0,l+a/2,c/2+u,o,1),d=I.Matrix[0];return i.multiplyToRef(n,d),d.multiplyToRef(r,d),d.multiply(h)},e.GetAsMatrix2x2=function(e){var t=e.m;return new Float32Array([t[0],t[1],t[4],t[5]])},e.GetAsMatrix3x3=function(e){var t=e.m;return new Float32Array([t[0],t[1],t[2],t[4],t[5],t[6],t[8],t[9],t[10]])},e.Transpose=function(t){var i=new e;return e.TransposeToRef(t,i),i},e.TransposeToRef=function(e,t){var i=t._m,n=e.m;i[0]=n[0],i[1]=n[4],i[2]=n[8],i[3]=n[12],i[4]=n[1],i[5]=n[5],i[6]=n[9],i[7]=n[13],i[8]=n[2],i[9]=n[6],i[10]=n[10],i[11]=n[14],i[12]=n[3],i[13]=n[7],i[14]=n[11],i[15]=n[15],t._updateIdentityStatus(e._isIdentity,e._isIdentityDirty)},e.Reflection=function(t){var i=new e;return e.ReflectionToRef(t,i),i},e.ReflectionToRef=function(t,i){t.normalize();var n=t.normal.x,r=t.normal.y,o=t.normal.z,s=-2*n,a=-2*r,c=-2*o;e.FromValuesToRef(s*n+1,a*n,c*n,0,s*r,a*r+1,c*r,0,s*o,a*o,c*o+1,0,s*t.d,a*t.d,c*t.d,1,i)},e.FromXYZAxesToRef=function(t,i,n,r){e.FromValuesToRef(t.x,t.y,t.z,0,i.x,i.y,i.z,0,n.x,n.y,n.z,0,0,0,0,1,r)},e.FromQuaternionToRef=function(e,t){var i=e.x*e.x,n=e.y*e.y,r=e.z*e.z,o=e.x*e.y,s=e.z*e.w,a=e.z*e.x,c=e.y*e.w,l=e.y*e.z,u=e.x*e.w;t._m[0]=1-2*(n+r),t._m[1]=2*(o+s),t._m[2]=2*(a-c),t._m[3]=0,t._m[4]=2*(o-s),t._m[5]=1-2*(r+i),t._m[6]=2*(l+u),t._m[7]=0,t._m[8]=2*(a+c),t._m[9]=2*(l-u),t._m[10]=1-2*(n+i),t._m[11]=0,t._m[12]=0,t._m[13]=0,t._m[14]=0,t._m[15]=1,t._markAsUpdated()},e._updateFlagSeed=0,e._identityReadOnly=e.Identity(),e}(),m=function(){function e(e,t,i,n){this.normal=new d(e,t,i),this.d=n}return e.prototype.asArray=function(){return[this.normal.x,this.normal.y,this.normal.z,this.d]},e.prototype.clone=function(){return new e(this.normal.x,this.normal.y,this.normal.z,this.d)},e.prototype.getClassName=function(){return"Plane"},e.prototype.getHashCode=function(){var e=this.normal.getHashCode();return e=397*e^(this.d||0)},e.prototype.normalize=function(){var e=Math.sqrt(this.normal.x*this.normal.x+this.normal.y*this.normal.y+this.normal.z*this.normal.z),t=0;return 0!==e&&(t=1/e),this.normal.x*=t,this.normal.y*=t,this.normal.z*=t,this.d*=t,this},e.prototype.transform=function(t){var i=I.Matrix[0];g.TransposeToRef(t,i);var n=i.m,r=this.normal.x,o=this.normal.y,s=this.normal.z,a=this.d;return new e(r*n[0]+o*n[1]+s*n[2]+a*n[3],r*n[4]+o*n[5]+s*n[6]+a*n[7],r*n[8]+o*n[9]+s*n[10]+a*n[11],r*n[12]+o*n[13]+s*n[14]+a*n[15])},e.prototype.dotCoordinate=function(e){return this.normal.x*e.x+this.normal.y*e.y+this.normal.z*e.z+this.d},e.prototype.copyFromPoints=function(e,t,i){var n,r=t.x-e.x,o=t.y-e.y,s=t.z-e.z,a=i.x-e.x,c=i.y-e.y,l=i.z-e.z,u=o*l-s*c,h=s*a-r*l,d=r*c-o*a,f=Math.sqrt(u*u+h*h+d*d);return n=0!==f?1/f:0,this.normal.x=u*n,this.normal.y=h*n,this.normal.z=d*n,this.d=-(this.normal.x*e.x+this.normal.y*e.y+this.normal.z*e.z),this},e.prototype.isFrontFacingTo=function(e,t){return d.Dot(this.normal,e)<=t},e.prototype.signedDistanceTo=function(e){return d.Dot(e,this.normal)+this.d},e.FromArray=function(t){return new e(t[0],t[1],t[2],t[3])},e.FromPoints=function(t,i,n){var r=new e(0,0,0,0);return r.copyFromPoints(t,i,n),r},e.FromPositionAndNormal=function(t,i){var n=new e(0,0,0,0);return i.normalize(),n.normal=i,n.d=-(i.x*t.x+i.y*t.y+i.z*t.z),n},e.SignedDistanceToPlaneFromPositionAndNormal=function(e,t,i){var n=-(t.x*e.x+t.y*e.y+t.z*e.z);return d.Dot(i,t)+n},e}(),v=function(){function e(e,t,i,n){this.x=e,this.y=t,this.width=i,this.height=n}return e.prototype.toGlobal=function(t,i){return new e(this.x*t,this.y*i,this.width*t,this.height*i)},e.prototype.toGlobalToRef=function(e,t,i){return i.x=this.x*e,i.y=this.y*t,i.width=this.width*e,i.height=this.height*t,this},e.prototype.clone=function(){return new e(this.x,this.y,this.width,this.height)},e}(),y=function(){function e(){}return e.GetPlanes=function(t){for(var i=[],n=0;n<6;n++)i.push(new m(0,0,0,0));return e.GetPlanesToRef(t,i),i},e.GetNearPlaneToRef=function(e,t){var i=e.m;t.normal.x=i[3]+i[2],t.normal.y=i[7]+i[6],t.normal.z=i[11]+i[10],t.d=i[15]+i[14],t.normalize()},e.GetFarPlaneToRef=function(e,t){var i=e.m;t.normal.x=i[3]-i[2],t.normal.y=i[7]-i[6],t.normal.z=i[11]-i[10],t.d=i[15]-i[14],t.normalize()},e.GetLeftPlaneToRef=function(e,t){var i=e.m;t.normal.x=i[3]+i[0],t.normal.y=i[7]+i[4],t.normal.z=i[11]+i[8],t.d=i[15]+i[12],t.normalize()},e.GetRightPlaneToRef=function(e,t){var i=e.m;t.normal.x=i[3]-i[0],t.normal.y=i[7]-i[4],t.normal.z=i[11]-i[8],t.d=i[15]-i[12],t.normalize()},e.GetTopPlaneToRef=function(e,t){var i=e.m;t.normal.x=i[3]-i[1],t.normal.y=i[7]-i[5],t.normal.z=i[11]-i[9],t.d=i[15]-i[13],t.normalize()},e.GetBottomPlaneToRef=function(e,t){var i=e.m;t.normal.x=i[3]+i[1],t.normal.y=i[7]+i[5],t.normal.z=i[11]+i[9],t.d=i[15]+i[13],t.normalize()},e.GetPlanesToRef=function(t,i){e.GetNearPlaneToRef(t,i[0]),e.GetFarPlaneToRef(t,i[1]),e.GetLeftPlaneToRef(t,i[2]),e.GetRightPlaneToRef(t,i[3]),e.GetTopPlaneToRef(t,i[4]),e.GetBottomPlaneToRef(t,i[5])},e}();!function(e){e[e.LOCAL=0]="LOCAL",e[e.WORLD=1]="WORLD",e[e.BONE=2]="BONE"}(n||(n={}));var b,T=function(){function e(){}return e.X=new d(1,0,0),e.Y=new d(0,1,0),e.Z=new d(0,0,1),e}(),E=function(){function e(){}return e.Interpolate=function(e,t,i,n,r){for(var o=1-3*n+3*t,s=3*n-6*t,a=3*t,c=e,l=0;l<5;l++){var u=c*c;c-=(o*(u*c)+s*u+a*c-e)*(1/(3*o*u+2*s*c+a)),c=Math.min(1,Math.max(0,c))}return 3*Math.pow(1-c,2)*c*i+3*(1-c)*Math.pow(c,2)*r+Math.pow(c,3)},e}();!function(e){e[e.CW=0]="CW",e[e.CCW=1]="CCW"}(b||(b={}));var A=function(){function e(e){this._radians=e,this._radians<0&&(this._radians+=2*Math.PI)}return e.prototype.degrees=function(){return 180*this._radians/Math.PI},e.prototype.radians=function(){return this._radians},e.BetweenTwoPoints=function(t,i){var n=i.subtract(t);return new e(Math.atan2(n.y,n.x))},e.FromRadians=function(t){return new e(t)},e.FromDegrees=function(t){return new e(t*Math.PI/180)},e}(),x=function(){return function(e,t,i){this.startPoint=e,this.midPoint=t,this.endPoint=i;var n=Math.pow(t.x,2)+Math.pow(t.y,2),r=(Math.pow(e.x,2)+Math.pow(e.y,2)-n)/2,o=(n-Math.pow(i.x,2)-Math.pow(i.y,2))/2,s=(e.x-t.x)*(t.y-i.y)-(t.x-i.x)*(e.y-t.y);this.centerPoint=new h((r*(t.y-i.y)-o*(e.y-t.y))/s,((e.x-t.x)*o-(t.x-i.x)*r)/s),this.radius=this.centerPoint.subtract(this.startPoint).length(),this.startAngle=A.BetweenTwoPoints(this.centerPoint,this.startPoint);var a=this.startAngle.degrees(),c=A.BetweenTwoPoints(this.centerPoint,this.midPoint).degrees(),l=A.BetweenTwoPoints(this.centerPoint,this.endPoint).degrees();c-a>180&&(c-=360),c-a<-180&&(c+=360),l-c>180&&(l-=360),l-c<-180&&(l+=360),this.orientation=c-a<0?b.CW:b.CCW,this.angle=A.FromDegrees(this.orientation===b.CW?a-l:l-a)}}(),R=function(){function e(e,t){this._points=new Array,this._length=0,this.closed=!1,this._points.push(new h(e,t))}return e.prototype.addLineTo=function(e,t){if(this.closed)return this;var i=new h(e,t),n=this._points[this._points.length-1];return this._points.push(i),this._length+=i.subtract(n).length(),this},e.prototype.addArcTo=function(e,t,i,n,r){if(void 0===r&&(r=36),this.closed)return this;var o=this._points[this._points.length-1],s=new h(e,t),a=new h(i,n),c=new x(o,s,a),l=c.angle.radians()/r;c.orientation===b.CW&&(l*=-1);for(var u=c.startAngle.radians()+l,d=0;d<r;d++){var f=Math.cos(u)*c.radius+c.centerPoint.x,p=Math.sin(u)*c.radius+c.centerPoint.y;this.addLineTo(f,p),u+=l}return this},e.prototype.close=function(){return this.closed=!0,this},e.prototype.length=function(){var e=this._length;if(!this.closed){var t=this._points[this._points.length-1];e+=this._points[0].subtract(t).length()}return e},e.prototype.getPoints=function(){return this._points},e.prototype.getPointAtLengthPosition=function(e){if(e<0||e>1)return h.Zero();for(var t=e*this.length(),i=0,n=0;n<this._points.length;n++){var r=(n+1)%this._points.length,o=this._points[n],s=this._points[r].subtract(o),a=s.length()+i;if(t>=i&&t<=a){var c=s.normalize(),l=t-i;return new h(o.x+c.x*l,o.y+c.y*l)}i=a}return h.Zero()},e.StartingAt=function(t,i){return new e(t,i)},e}(),P=function(){function e(e,t,i){void 0===t&&(t=null),this.path=e,this._curve=new Array,this._distances=new Array,this._tangents=new Array,this._normals=new Array,this._binormals=new Array;for(var n=0;n<e.length;n++)this._curve[n]=e[n].clone();this._raw=i||!1,this._compute(t)}return e.prototype.getCurve=function(){return this._curve},e.prototype.getTangents=function(){return this._tangents},e.prototype.getNormals=function(){return this._normals},e.prototype.getBinormals=function(){return this._binormals},e.prototype.getDistances=function(){return this._distances},e.prototype.update=function(e,t){void 0===t&&(t=null);for(var i=0;i<e.length;i++)this._curve[i].x=e[i].x,this._curve[i].y=e[i].y,this._curve[i].z=e[i].z;return this._compute(t),this},e.prototype._compute=function(e){var t=this._curve.length;this._tangents[0]=this._getFirstNonNullVector(0),this._raw||this._tangents[0].normalize(),this._tangents[t-1]=this._curve[t-1].subtract(this._curve[t-2]),this._raw||this._tangents[t-1].normalize();var i,n,r,o,s=this._tangents[0],a=this._normalVector(s,e);this._normals[0]=a,this._raw||this._normals[0].normalize(),this._binormals[0]=d.Cross(s,this._normals[0]),this._raw||this._binormals[0].normalize(),this._distances[0]=0;for(var c=1;c<t;c++)i=this._getLastNonNullVector(c),c<t-1&&(n=this._getFirstNonNullVector(c),this._tangents[c]=i.add(n),this._tangents[c].normalize()),this._distances[c]=this._distances[c-1]+i.length(),r=this._tangents[c],o=this._binormals[c-1],this._normals[c]=d.Cross(o,r),this._raw||this._normals[c].normalize(),this._binormals[c]=d.Cross(r,this._normals[c]),this._raw||this._binormals[c].normalize()},e.prototype._getFirstNonNullVector=function(e){for(var t=1,i=this._curve[e+t].subtract(this._curve[e]);0===i.length()&&e+t+1<this._curve.length;)t++,i=this._curve[e+t].subtract(this._curve[e]);return i},e.prototype._getLastNonNullVector=function(e){for(var t=1,i=this._curve[e].subtract(this._curve[e-t]);0===i.length()&&e>t+1;)t++,i=this._curve[e].subtract(this._curve[e-t]);return i},e.prototype._normalVector=function(e,t){var i,n,r=e.length();(0===r&&(r=1),null==t)?(n=o.a.WithinEpsilon(Math.abs(e.y)/r,1,c)?o.a.WithinEpsilon(Math.abs(e.x)/r,1,c)?o.a.WithinEpsilon(Math.abs(e.z)/r,1,c)?d.Zero():new d(0,0,1):new d(1,0,0):new d(0,-1,0),i=d.Cross(e,n)):(i=d.Cross(e,t),d.CrossToRef(i,e,i));return i.normalize(),i},e}(),S=function(){function e(e){this._length=0,this._points=e,this._length=this._computeLength(e)}return e.CreateQuadraticBezier=function(t,i,n,r){r=r>2?r:3;for(var o=new Array,s=function(e,t,i,n){return(1-e)*(1-e)*t+2*e*(1-e)*i+e*e*n},a=0;a<=r;a++)o.push(new d(s(a/r,t.x,i.x,n.x),s(a/r,t.y,i.y,n.y),s(a/r,t.z,i.z,n.z)));return new e(o)},e.CreateCubicBezier=function(t,i,n,r,o){o=o>3?o:4;for(var s=new Array,a=function(e,t,i,n,r){return(1-e)*(1-e)*(1-e)*t+3*e*(1-e)*(1-e)*i+3*e*e*(1-e)*n+e*e*e*r},c=0;c<=o;c++)s.push(new d(a(c/o,t.x,i.x,n.x,r.x),a(c/o,t.y,i.y,n.y,r.y),a(c/o,t.z,i.z,n.z,r.z)));return new e(s)},e.CreateHermiteSpline=function(t,i,n,r,o){for(var s=new Array,a=1/o,c=0;c<=o;c++)s.push(d.Hermite(t,i,n,r,c*a));return new e(s)},e.CreateCatmullRomSpline=function(t,i,n){var r=new Array,o=1/i,s=0;if(n){for(var a=t.length,c=0;c<a;c++){s=0;for(var l=0;l<i;l++)r.push(d.CatmullRom(t[c%a],t[(c+1)%a],t[(c+2)%a],t[(c+3)%a],s)),s+=o}r.push(r[0])}else{var u=new Array;u.push(t[0].clone()),Array.prototype.push.apply(u,t),u.push(t[t.length-1].clone());for(c=0;c<u.length-3;c++){s=0;for(l=0;l<i;l++)r.push(d.CatmullRom(u[c],u[c+1],u[c+2],u[c+3],s)),s+=o}c--,r.push(d.CatmullRom(u[c],u[c+1],u[c+2],u[c+3],s))}return new e(r)},e.prototype.getPoints=function(){return this._points},e.prototype.length=function(){return this._length},e.prototype.continue=function(t){for(var i=this._points[this._points.length-1],n=this._points.slice(),r=t.getPoints(),o=1;o<r.length;o++)n.push(r[o].subtract(r[0]).add(i));return new e(n)},e.prototype._computeLength=function(e){for(var t=0,i=1;i<e.length;i++)t+=e[i].subtract(e[i-1]).length();return t},e}(),C=function(){function e(e,t){void 0===e&&(e=d.Zero()),void 0===t&&(t=d.Up()),this.position=e,this.normal=t}return e.prototype.clone=function(){return new e(this.position.clone(),this.normal.clone())},e}(),M=function(){function e(e,t,i){void 0===e&&(e=d.Zero()),void 0===t&&(t=d.Up()),void 0===i&&(i=h.Zero()),this.position=e,this.normal=t,this.uv=i}return e.prototype.clone=function(){return new e(this.position.clone(),this.normal.clone(),this.uv.clone())},e}(),O=function(){function e(){}return e.Color3=r.a.BuildArray(3,l.Black),e.Color4=r.a.BuildArray(3,function(){return new u(0,0,0,0)}),e.Vector2=r.a.BuildArray(3,h.Zero),e.Vector3=r.a.BuildArray(13,d.Zero),e.Vector4=r.a.BuildArray(3,f.Zero),e.Quaternion=r.a.BuildArray(2,_.Zero),e.Matrix=r.a.BuildArray(8,g.Identity),e}(),I=function(){function e(){}return e.Vector3=r.a.BuildArray(6,d.Zero),e.Matrix=r.a.BuildArray(2,g.Identity),e.Quaternion=r.a.BuildArray(3,_.Zero),e}()},function(e,t,i){"use strict";i.d(t,"d",function(){return r}),i.d(t,"a",function(){return o}),i.d(t,"c",function(){return s}),i.d(t,"b",function(){return a}),i.d(t,"e",function(){return c});
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
},{}],"output/BabylonDemo/foreign.js":[function(require,module,exports) {
var BABYLON = require('babylonjs'); // https://doc.babylonjs.com
// Discoveries so far:
// - effects require one more function
//   in currying
//     https://pursuit.purescript.org/packages/purescript-ffi-utils/4.0.0
//     "Buffers in JS are mutable, so it should be an effectful function"
//   
// - Refs are only really useful for
//   immutable value types
//   (e.g. ref.value = X is what happens)
//   Example:
//     refEngine <- initEngine canvas true
//     engine <- read refEngine
//   ~=
//     let refEngine = { value: initEngine(canvas, true) }
//     let engine = refEngine.value
//     or 
//     let { value: engine } = refEngine
// getCanvas :: String -> Effect (Maybe Element)


exports.getCanvas = function (elementId) {
  return function () {
    canvas = document.getElementById(elementId);
    console.log(document, BABYLON);
    console.log('getCanvas', elementId, canvas);
    return canvas;
  };
}; // Not sure if this involves an effect or not...
// initEngine :: Element -> Boolean -> Effect (Ref BabylonEngine)


exports.initEngine = function (canvasOrContext) {
  return function (isUsingAntiAliasing) {
    return function () {
      console.log('initEngine', canvasOrContext, isUsingAntiAliasing); // There's also another condition I'm glossing over

      return new BABYLON.Engine(canvasOrContext, isUsingAntiAliasing);
    };
  };
}; // runRenderLoop :: BabylonEngine -> BabylonScene -> Effect Unit


exports.runRenderLoop = function (engine) {
  return function (scene) {
    return function () {
      console.log('runRenderLoop', scene);
      engine.runRenderLoop(function () {
        scene.render();
      });
      return [engine, scene];
    };
  };
};

exports.logTupleTest = function (tuple) {
  return function () {
    console.log('logTupleTest', tuple);
  };
}; // Can be done with Web.Event.EventTarget.evenListener
// initResize :: BabylonEngine -> Effect Unit


exports.initResize = function (engine) {
  return function () {
    console.log('initResize', engine);
    window.addEventListener('resize', function () {
      engine.resize();
    });
    return engine;
  };
}; // createScene :: Element -> BabylonEngine -> Effect (Ref BabylonScene)


exports.createScene = function (canvas) {
  return function (engine) {
    return function () {
      console.log('createScene', canvas, engine);

      if (engine === null) {
        console.error('Engine should not be null!');
      } else if (engine === undefined) {
        console.error('Engine should not be undefined!');
      }

      var scene = new BABYLON.Scene(engine); // Should be provided as an argument 

      var camera = new BABYLON.FreeCamera('camera', new BABYLON.Vector3(0, 5, -10), scene); // Clearly camera config should come
      // in the form of a thunk

      camera.setTarget(BABYLON.Vector3.Zero()); // The canvas needs to be supplied separately

      camera.attachControl(canvas, false); // Light also needs to be a thunk

      var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene); // Yet another thunk... this looks good for piping!

      var sphere = BABYLON.MeshBuilder.CreateSphere('sphere', {
        segments: 16,
        diameter: 2
      }, scene); // This is awkward for Purescript...
      // movePosition :: Number -> Number -> Sphere
      // movePosition x y sphere = ...

      sphere.position.y = 1;
      var ground = BABYLON.MeshBuilder.CreateGround('ground1', {
        height: 6,
        width: 6,
        subdivisions: 2
      }, scene);
      return scene;
    };
  };
};
},{"babylonjs":"node_modules/babylonjs/babylon.js"}],"output/BabylonDemo/index.js":[function(require,module,exports) {
"use strict";

var $foreign = require("./foreign.js");

module.exports = {
  getCanvas: $foreign.getCanvas,
  initEngine: $foreign.initEngine,
  initResize: $foreign.initResize,
  createScene: $foreign.createScene,
  runRenderLoop: $foreign.runRenderLoop,
  logTupleTest: $foreign.logTupleTest
};
},{"./foreign.js":"output/BabylonDemo/foreign.js"}],"output/Control.Apply/foreign.js":[function(require,module,exports) {
"use strict";

exports.arrayApply = function (fs) {
  return function (xs) {
    var l = fs.length;
    var k = xs.length;
    var result = new Array(l * k);
    var n = 0;

    for (var i = 0; i < l; i++) {
      var f = fs[i];

      for (var j = 0; j < k; j++) {
        result[n++] = f(xs[j]);
      }
    }

    return result;
  };
};
},{}],"output/Control.Semigroupoid/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var Semigroupoid = function Semigroupoid(compose) {
  this.compose = compose;
};

var semigroupoidFn = new Semigroupoid(function (f) {
  return function (g) {
    return function (x) {
      return f(g(x));
    };
  };
});

var compose = function compose(dict) {
  return dict.compose;
};

var composeFlipped = function composeFlipped(dictSemigroupoid) {
  return function (f) {
    return function (g) {
      return compose(dictSemigroupoid)(g)(f);
    };
  };
};

module.exports = {
  compose: compose,
  Semigroupoid: Semigroupoid,
  composeFlipped: composeFlipped,
  semigroupoidFn: semigroupoidFn
};
},{}],"output/Control.Category/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var Control_Semigroupoid = require("../Control.Semigroupoid/index.js");

var Category = function Category(Semigroupoid0, identity) {
  this.Semigroupoid0 = Semigroupoid0;
  this.identity = identity;
};

var identity = function identity(dict) {
  return dict.identity;
};

var categoryFn = new Category(function () {
  return Control_Semigroupoid.semigroupoidFn;
}, function (x) {
  return x;
});
module.exports = {
  Category: Category,
  identity: identity,
  categoryFn: categoryFn
};
},{"../Control.Semigroupoid/index.js":"output/Control.Semigroupoid/index.js"}],"output/Data.Boolean/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var otherwise = true;
module.exports = {
  otherwise: otherwise
};
},{}],"output/Data.Function/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var Data_Boolean = require("../Data.Boolean/index.js");

var on = function on(f) {
  return function (g) {
    return function (x) {
      return function (y) {
        return f(g(x))(g(y));
      };
    };
  };
};

var flip = function flip(f) {
  return function (b) {
    return function (a) {
      return f(a)(b);
    };
  };
};

var $$const = function $$const(a) {
  return function (v) {
    return a;
  };
};

var applyN = function applyN(f) {
  var go = function go($copy_n) {
    return function ($copy_acc) {
      var $tco_var_n = $copy_n;
      var $tco_done = false;
      var $tco_result;

      function $tco_loop(n, acc) {
        if (n <= 0) {
          $tco_done = true;
          return acc;
        }

        ;

        if (Data_Boolean.otherwise) {
          $tco_var_n = n - 1 | 0;
          $copy_acc = f(acc);
          return;
        }

        ;
        throw new Error("Failed pattern match at Data.Function (line 94, column 3 - line 96, column 37): " + [n.constructor.name, acc.constructor.name]);
      }

      ;

      while (!$tco_done) {
        $tco_result = $tco_loop($tco_var_n, $copy_acc);
      }

      ;
      return $tco_result;
    };
  };

  return go;
};

var applyFlipped = function applyFlipped(x) {
  return function (f) {
    return f(x);
  };
};

var apply = function apply(f) {
  return function (x) {
    return f(x);
  };
};

module.exports = {
  flip: flip,
  "const": $$const,
  apply: apply,
  applyFlipped: applyFlipped,
  applyN: applyN,
  on: on
};
},{"../Data.Boolean/index.js":"output/Data.Boolean/index.js"}],"output/Data.Functor/foreign.js":[function(require,module,exports) {
"use strict";

exports.arrayMap = function (f) {
  return function (arr) {
    var l = arr.length;
    var result = new Array(l);

    for (var i = 0; i < l; i++) {
      result[i] = f(arr[i]);
    }

    return result;
  };
};
},{}],"output/Data.Unit/foreign.js":[function(require,module,exports) {
"use strict";

exports.unit = {};
},{}],"output/Data.Show/foreign.js":[function(require,module,exports) {
"use strict";

exports.showIntImpl = function (n) {
  return n.toString();
};

exports.showNumberImpl = function (n) {
  var str = n.toString();
  return isNaN(str + ".0") ? str : str + ".0";
};

exports.showCharImpl = function (c) {
  var code = c.charCodeAt(0);

  if (code < 0x20 || code === 0x7F) {
    switch (c) {
      case "\x07":
        return "'\\a'";

      case "\b":
        return "'\\b'";

      case "\f":
        return "'\\f'";

      case "\n":
        return "'\\n'";

      case "\r":
        return "'\\r'";

      case "\t":
        return "'\\t'";

      case "\v":
        return "'\\v'";
    }

    return "'\\" + code.toString(10) + "'";
  }

  return c === "'" || c === "\\" ? "'\\" + c + "'" : "'" + c + "'";
};

exports.showStringImpl = function (s) {
  var l = s.length;
  return "\"" + s.replace(/[\0-\x1F\x7F"\\]/g, // eslint-disable-line no-control-regex
  function (c, i) {
    switch (c) {
      case "\"":
      case "\\":
        return "\\" + c;

      case "\x07":
        return "\\a";

      case "\b":
        return "\\b";

      case "\f":
        return "\\f";

      case "\n":
        return "\\n";

      case "\r":
        return "\\r";

      case "\t":
        return "\\t";

      case "\v":
        return "\\v";
    }

    var k = i + 1;
    var empty = k < l && s[k] >= "0" && s[k] <= "9" ? "\\&" : "";
    return "\\" + c.charCodeAt(0).toString(10) + empty;
  }) + "\"";
};

exports.showArrayImpl = function (f) {
  return function (xs) {
    var ss = [];

    for (var i = 0, l = xs.length; i < l; i++) {
      ss[i] = f(xs[i]);
    }

    return "[" + ss.join(",") + "]";
  };
};

exports.cons = function (head) {
  return function (tail) {
    return [head].concat(tail);
  };
};

exports.join = function (separator) {
  return function (xs) {
    return xs.join(separator);
  };
};
},{}],"output/Data.Symbol/foreign.js":[function(require,module,exports) {
"use strict"; // module Data.Symbol

exports.unsafeCoerce = function (arg) {
  return arg;
};
},{}],"output/Data.Symbol/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var $foreign = require("./foreign.js");

var SProxy = function () {
  function SProxy() {}

  ;
  SProxy.value = new SProxy();
  return SProxy;
}();

var IsSymbol = function IsSymbol(reflectSymbol) {
  this.reflectSymbol = reflectSymbol;
};

var reifySymbol = function reifySymbol(s) {
  return function (f) {
    return $foreign.unsafeCoerce(function (dictIsSymbol) {
      return f(dictIsSymbol);
    })({
      reflectSymbol: function reflectSymbol(v) {
        return s;
      }
    })(SProxy.value);
  };
};

var reflectSymbol = function reflectSymbol(dict) {
  return dict.reflectSymbol;
};

module.exports = {
  IsSymbol: IsSymbol,
  reflectSymbol: reflectSymbol,
  reifySymbol: reifySymbol,
  SProxy: SProxy
};
},{"./foreign.js":"output/Data.Symbol/foreign.js"}],"output/Record.Unsafe/foreign.js":[function(require,module,exports) {
"use strict";

exports.unsafeHas = function (label) {
  return function (rec) {
    return {}.hasOwnProperty.call(rec, label);
  };
};

exports.unsafeGet = function (label) {
  return function (rec) {
    return rec[label];
  };
};

exports.unsafeSet = function (label) {
  return function (value) {
    return function (rec) {
      var copy = {};

      for (var key in rec) {
        if ({}.hasOwnProperty.call(rec, key)) {
          copy[key] = rec[key];
        }
      }

      copy[label] = value;
      return copy;
    };
  };
};

exports.unsafeDelete = function (label) {
  return function (rec) {
    var copy = {};

    for (var key in rec) {
      if (key !== label && {}.hasOwnProperty.call(rec, key)) {
        copy[key] = rec[key];
      }
    }

    return copy;
  };
};
},{}],"output/Record.Unsafe/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var $foreign = require("./foreign.js");

module.exports = {
  unsafeHas: $foreign.unsafeHas,
  unsafeGet: $foreign.unsafeGet,
  unsafeSet: $foreign.unsafeSet,
  unsafeDelete: $foreign.unsafeDelete
};
},{"./foreign.js":"output/Record.Unsafe/foreign.js"}],"output/Type.Data.RowList/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var RLProxy = function () {
  function RLProxy() {}

  ;
  RLProxy.value = new RLProxy();
  return RLProxy;
}();

module.exports = {
  RLProxy: RLProxy
};
},{}],"output/Data.Show/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var $foreign = require("./foreign.js");

var Data_Symbol = require("../Data.Symbol/index.js");

var Record_Unsafe = require("../Record.Unsafe/index.js");

var Type_Data_RowList = require("../Type.Data.RowList/index.js");

var ShowRecordFields = function ShowRecordFields(showRecordFields) {
  this.showRecordFields = showRecordFields;
};

var Show = function Show(show) {
  this.show = show;
};

var showString = new Show($foreign.showStringImpl);
var showRecordFieldsNil = new ShowRecordFields(function (v) {
  return function (v1) {
    return [];
  };
});

var showRecordFields = function showRecordFields(dict) {
  return dict.showRecordFields;
};

var showRecord = function showRecord(dictRowToList) {
  return function (dictShowRecordFields) {
    return new Show(function (record) {
      var v = showRecordFields(dictShowRecordFields)(Type_Data_RowList.RLProxy.value)(record);

      if (v.length === 0) {
        return "{}";
      }

      ;
      return $foreign.join(" ")(["{", $foreign.join(", ")(v), "}"]);
    });
  };
};

var showNumber = new Show($foreign.showNumberImpl);
var showInt = new Show($foreign.showIntImpl);
var showChar = new Show($foreign.showCharImpl);
var showBoolean = new Show(function (v) {
  if (v) {
    return "true";
  }

  ;

  if (!v) {
    return "false";
  }

  ;
  throw new Error("Failed pattern match at Data.Show (line 20, column 1 - line 22, column 23): " + [v.constructor.name]);
});

var show = function show(dict) {
  return dict.show;
};

var showArray = function showArray(dictShow) {
  return new Show($foreign.showArrayImpl(show(dictShow)));
};

var showRecordFieldsCons = function showRecordFieldsCons(dictIsSymbol) {
  return function (dictShowRecordFields) {
    return function (dictShow) {
      return new ShowRecordFields(function (v) {
        return function (record) {
          var tail = showRecordFields(dictShowRecordFields)(Type_Data_RowList.RLProxy.value)(record);
          var key = Data_Symbol.reflectSymbol(dictIsSymbol)(Data_Symbol.SProxy.value);
          var focus = Record_Unsafe.unsafeGet(key)(record);
          return $foreign.cons($foreign.join(": ")([key, show(dictShow)(focus)]))(tail);
        };
      });
    };
  };
};

module.exports = {
  Show: Show,
  show: show,
  ShowRecordFields: ShowRecordFields,
  showRecordFields: showRecordFields,
  showBoolean: showBoolean,
  showInt: showInt,
  showNumber: showNumber,
  showChar: showChar,
  showString: showString,
  showArray: showArray,
  showRecord: showRecord,
  showRecordFieldsNil: showRecordFieldsNil,
  showRecordFieldsCons: showRecordFieldsCons
};
},{"./foreign.js":"output/Data.Show/foreign.js","../Data.Symbol/index.js":"output/Data.Symbol/index.js","../Record.Unsafe/index.js":"output/Record.Unsafe/index.js","../Type.Data.RowList/index.js":"output/Type.Data.RowList/index.js"}],"output/Data.Unit/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var $foreign = require("./foreign.js");

var Data_Show = require("../Data.Show/index.js");

var showUnit = new Data_Show.Show(function (v) {
  return "unit";
});
module.exports = {
  showUnit: showUnit,
  unit: $foreign.unit
};
},{"./foreign.js":"output/Data.Unit/foreign.js","../Data.Show/index.js":"output/Data.Show/index.js"}],"output/Data.Functor/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var $foreign = require("./foreign.js");

var Control_Semigroupoid = require("../Control.Semigroupoid/index.js");

var Data_Function = require("../Data.Function/index.js");

var Data_Unit = require("../Data.Unit/index.js");

var Functor = function Functor(map) {
  this.map = map;
};

var map = function map(dict) {
  return dict.map;
};

var mapFlipped = function mapFlipped(dictFunctor) {
  return function (fa) {
    return function (f) {
      return map(dictFunctor)(f)(fa);
    };
  };
};

var $$void = function $$void(dictFunctor) {
  return map(dictFunctor)(Data_Function["const"](Data_Unit.unit));
};

var voidLeft = function voidLeft(dictFunctor) {
  return function (f) {
    return function (x) {
      return map(dictFunctor)(Data_Function["const"](x))(f);
    };
  };
};

var voidRight = function voidRight(dictFunctor) {
  return function (x) {
    return map(dictFunctor)(Data_Function["const"](x));
  };
};

var functorFn = new Functor(Control_Semigroupoid.compose(Control_Semigroupoid.semigroupoidFn));
var functorArray = new Functor($foreign.arrayMap);

var flap = function flap(dictFunctor) {
  return function (ff) {
    return function (x) {
      return map(dictFunctor)(function (f) {
        return f(x);
      })(ff);
    };
  };
};

module.exports = {
  Functor: Functor,
  map: map,
  mapFlipped: mapFlipped,
  "void": $$void,
  voidRight: voidRight,
  voidLeft: voidLeft,
  flap: flap,
  functorFn: functorFn,
  functorArray: functorArray
};
},{"./foreign.js":"output/Data.Functor/foreign.js","../Control.Semigroupoid/index.js":"output/Control.Semigroupoid/index.js","../Data.Function/index.js":"output/Data.Function/index.js","../Data.Unit/index.js":"output/Data.Unit/index.js"}],"output/Control.Apply/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var $foreign = require("./foreign.js");

var Control_Category = require("../Control.Category/index.js");

var Data_Function = require("../Data.Function/index.js");

var Data_Functor = require("../Data.Functor/index.js");

var Apply = function Apply(Functor0, apply) {
  this.Functor0 = Functor0;
  this.apply = apply;
};

var applyFn = new Apply(function () {
  return Data_Functor.functorFn;
}, function (f) {
  return function (g) {
    return function (x) {
      return f(x)(g(x));
    };
  };
});
var applyArray = new Apply(function () {
  return Data_Functor.functorArray;
}, $foreign.arrayApply);

var apply = function apply(dict) {
  return dict.apply;
};

var applyFirst = function applyFirst(dictApply) {
  return function (a) {
    return function (b) {
      return apply(dictApply)(Data_Functor.map(dictApply.Functor0())(Data_Function["const"])(a))(b);
    };
  };
};

var applySecond = function applySecond(dictApply) {
  return function (a) {
    return function (b) {
      return apply(dictApply)(Data_Functor.map(dictApply.Functor0())(Data_Function["const"](Control_Category.identity(Control_Category.categoryFn)))(a))(b);
    };
  };
};

var lift2 = function lift2(dictApply) {
  return function (f) {
    return function (a) {
      return function (b) {
        return apply(dictApply)(Data_Functor.map(dictApply.Functor0())(f)(a))(b);
      };
    };
  };
};

var lift3 = function lift3(dictApply) {
  return function (f) {
    return function (a) {
      return function (b) {
        return function (c) {
          return apply(dictApply)(apply(dictApply)(Data_Functor.map(dictApply.Functor0())(f)(a))(b))(c);
        };
      };
    };
  };
};

var lift4 = function lift4(dictApply) {
  return function (f) {
    return function (a) {
      return function (b) {
        return function (c) {
          return function (d) {
            return apply(dictApply)(apply(dictApply)(apply(dictApply)(Data_Functor.map(dictApply.Functor0())(f)(a))(b))(c))(d);
          };
        };
      };
    };
  };
};

var lift5 = function lift5(dictApply) {
  return function (f) {
    return function (a) {
      return function (b) {
        return function (c) {
          return function (d) {
            return function (e) {
              return apply(dictApply)(apply(dictApply)(apply(dictApply)(apply(dictApply)(Data_Functor.map(dictApply.Functor0())(f)(a))(b))(c))(d))(e);
            };
          };
        };
      };
    };
  };
};

module.exports = {
  Apply: Apply,
  apply: apply,
  applyFirst: applyFirst,
  applySecond: applySecond,
  lift2: lift2,
  lift3: lift3,
  lift4: lift4,
  lift5: lift5,
  applyFn: applyFn,
  applyArray: applyArray
};
},{"./foreign.js":"output/Control.Apply/foreign.js","../Control.Category/index.js":"output/Control.Category/index.js","../Data.Function/index.js":"output/Data.Function/index.js","../Data.Functor/index.js":"output/Data.Functor/index.js"}],"output/Control.Applicative/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var Control_Apply = require("../Control.Apply/index.js");

var Data_Unit = require("../Data.Unit/index.js");

var Applicative = function Applicative(Apply0, pure) {
  this.Apply0 = Apply0;
  this.pure = pure;
};

var pure = function pure(dict) {
  return dict.pure;
};

var unless = function unless(dictApplicative) {
  return function (v) {
    return function (v1) {
      if (!v) {
        return v1;
      }

      ;

      if (v) {
        return pure(dictApplicative)(Data_Unit.unit);
      }

      ;
      throw new Error("Failed pattern match at Control.Applicative (line 62, column 1 - line 62, column 65): " + [v.constructor.name, v1.constructor.name]);
    };
  };
};

var when = function when(dictApplicative) {
  return function (v) {
    return function (v1) {
      if (v) {
        return v1;
      }

      ;

      if (!v) {
        return pure(dictApplicative)(Data_Unit.unit);
      }

      ;
      throw new Error("Failed pattern match at Control.Applicative (line 57, column 1 - line 57, column 63): " + [v.constructor.name, v1.constructor.name]);
    };
  };
};

var liftA1 = function liftA1(dictApplicative) {
  return function (f) {
    return function (a) {
      return Control_Apply.apply(dictApplicative.Apply0())(pure(dictApplicative)(f))(a);
    };
  };
};

var applicativeFn = new Applicative(function () {
  return Control_Apply.applyFn;
}, function (x) {
  return function (v) {
    return x;
  };
});
var applicativeArray = new Applicative(function () {
  return Control_Apply.applyArray;
}, function (x) {
  return [x];
});
module.exports = {
  Applicative: Applicative,
  pure: pure,
  liftA1: liftA1,
  unless: unless,
  when: when,
  applicativeFn: applicativeFn,
  applicativeArray: applicativeArray
};
},{"../Control.Apply/index.js":"output/Control.Apply/index.js","../Data.Unit/index.js":"output/Data.Unit/index.js"}],"output/Control.Biapplicative/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var Biapplicative = function Biapplicative(Biapply0, bipure) {
  this.Biapply0 = Biapply0;
  this.bipure = bipure;
};

var bipure = function bipure(dict) {
  return dict.bipure;
};

module.exports = {
  bipure: bipure,
  Biapplicative: Biapplicative
};
},{}],"output/Data.Bifunctor/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var Control_Category = require("../Control.Category/index.js");

var Bifunctor = function Bifunctor(bimap) {
  this.bimap = bimap;
};

var bimap = function bimap(dict) {
  return dict.bimap;
};

var lmap = function lmap(dictBifunctor) {
  return function (f) {
    return bimap(dictBifunctor)(f)(Control_Category.identity(Control_Category.categoryFn));
  };
};

var rmap = function rmap(dictBifunctor) {
  return bimap(dictBifunctor)(Control_Category.identity(Control_Category.categoryFn));
};

module.exports = {
  bimap: bimap,
  Bifunctor: Bifunctor,
  lmap: lmap,
  rmap: rmap
};
},{"../Control.Category/index.js":"output/Control.Category/index.js"}],"output/Control.Biapply/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var Control_Category = require("../Control.Category/index.js");

var Data_Bifunctor = require("../Data.Bifunctor/index.js");

var Data_Function = require("../Data.Function/index.js");

var Biapply = function Biapply(Bifunctor0, biapply) {
  this.Bifunctor0 = Bifunctor0;
  this.biapply = biapply;
};

var biapply = function biapply(dict) {
  return dict.biapply;
};

var biapplyFirst = function biapplyFirst(dictBiapply) {
  return function (a) {
    return function (b) {
      return biapply(dictBiapply)(Control_Category.identity(Control_Category.categoryFn)(Data_Bifunctor.bimap(dictBiapply.Bifunctor0())(Data_Function["const"](Control_Category.identity(Control_Category.categoryFn)))(Data_Function["const"](Control_Category.identity(Control_Category.categoryFn))))(a))(b);
    };
  };
};

var biapplySecond = function biapplySecond(dictBiapply) {
  return function (a) {
    return function (b) {
      return biapply(dictBiapply)(Control_Category.identity(Control_Category.categoryFn)(Data_Bifunctor.bimap(dictBiapply.Bifunctor0())(Data_Function["const"])(Data_Function["const"]))(a))(b);
    };
  };
};

var bilift2 = function bilift2(dictBiapply) {
  return function (f) {
    return function (g) {
      return function (a) {
        return function (b) {
          return biapply(dictBiapply)(Control_Category.identity(Control_Category.categoryFn)(Data_Bifunctor.bimap(dictBiapply.Bifunctor0())(f)(g))(a))(b);
        };
      };
    };
  };
};

var bilift3 = function bilift3(dictBiapply) {
  return function (f) {
    return function (g) {
      return function (a) {
        return function (b) {
          return function (c) {
            return biapply(dictBiapply)(biapply(dictBiapply)(Control_Category.identity(Control_Category.categoryFn)(Data_Bifunctor.bimap(dictBiapply.Bifunctor0())(f)(g))(a))(b))(c);
          };
        };
      };
    };
  };
};

module.exports = {
  biapply: biapply,
  Biapply: Biapply,
  biapplyFirst: biapplyFirst,
  biapplySecond: biapplySecond,
  bilift2: bilift2,
  bilift3: bilift3
};
},{"../Control.Category/index.js":"output/Control.Category/index.js","../Data.Bifunctor/index.js":"output/Data.Bifunctor/index.js","../Data.Function/index.js":"output/Data.Function/index.js"}],"output/Control.Bind/foreign.js":[function(require,module,exports) {
"use strict";

exports.arrayBind = function (arr) {
  return function (f) {
    var result = [];

    for (var i = 0, l = arr.length; i < l; i++) {
      Array.prototype.push.apply(result, f(arr[i]));
    }

    return result;
  };
};
},{}],"output/Control.Bind/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var $foreign = require("./foreign.js");

var Control_Apply = require("../Control.Apply/index.js");

var Control_Category = require("../Control.Category/index.js");

var Data_Function = require("../Data.Function/index.js");

var Discard = function Discard(discard) {
  this.discard = discard;
};

var Bind = function Bind(Apply0, bind) {
  this.Apply0 = Apply0;
  this.bind = bind;
};

var discard = function discard(dict) {
  return dict.discard;
};

var bindFn = new Bind(function () {
  return Control_Apply.applyFn;
}, function (m) {
  return function (f) {
    return function (x) {
      return f(m(x))(x);
    };
  };
});
var bindArray = new Bind(function () {
  return Control_Apply.applyArray;
}, $foreign.arrayBind);

var bind = function bind(dict) {
  return dict.bind;
};

var bindFlipped = function bindFlipped(dictBind) {
  return Data_Function.flip(bind(dictBind));
};

var composeKleisliFlipped = function composeKleisliFlipped(dictBind) {
  return function (f) {
    return function (g) {
      return function (a) {
        return bindFlipped(dictBind)(f)(g(a));
      };
    };
  };
};

var composeKleisli = function composeKleisli(dictBind) {
  return function (f) {
    return function (g) {
      return function (a) {
        return bind(dictBind)(f(a))(g);
      };
    };
  };
};

var discardUnit = new Discard(function (dictBind) {
  return bind(dictBind);
});

var ifM = function ifM(dictBind) {
  return function (cond) {
    return function (t) {
      return function (f) {
        return bind(dictBind)(cond)(function (cond$prime) {
          if (cond$prime) {
            return t;
          }

          ;
          return f;
        });
      };
    };
  };
};

var join = function join(dictBind) {
  return function (m) {
    return bind(dictBind)(m)(Control_Category.identity(Control_Category.categoryFn));
  };
};

module.exports = {
  Bind: Bind,
  bind: bind,
  bindFlipped: bindFlipped,
  Discard: Discard,
  discard: discard,
  join: join,
  composeKleisli: composeKleisli,
  composeKleisliFlipped: composeKleisliFlipped,
  ifM: ifM,
  bindFn: bindFn,
  bindArray: bindArray,
  discardUnit: discardUnit
};
},{"./foreign.js":"output/Control.Bind/foreign.js","../Control.Apply/index.js":"output/Control.Apply/index.js","../Control.Category/index.js":"output/Control.Category/index.js","../Data.Function/index.js":"output/Data.Function/index.js"}],"output/Control.Comonad/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var Comonad = function Comonad(Extend0, extract) {
  this.Extend0 = Extend0;
  this.extract = extract;
};

var extract = function extract(dict) {
  return dict.extract;
};

module.exports = {
  Comonad: Comonad,
  extract: extract
};
},{}],"output/Control.Extend/foreign.js":[function(require,module,exports) {
"use strict";

exports.arrayExtend = function (f) {
  return function (xs) {
    return xs.map(function (_, i, xs) {
      return f(xs.slice(i));
    });
  };
};
},{}],"output/Data.Semigroup/foreign.js":[function(require,module,exports) {
"use strict";

exports.concatString = function (s1) {
  return function (s2) {
    return s1 + s2;
  };
};

exports.concatArray = function (xs) {
  return function (ys) {
    if (xs.length === 0) return ys;
    if (ys.length === 0) return xs;
    return xs.concat(ys);
  };
};
},{}],"output/Data.Void/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var Data_Show = require("../Data.Show/index.js");

var Void = function Void(x) {
  return x;
};

var absurd = function absurd(a) {
  var spin = function spin($copy_v) {
    var $tco_result;

    function $tco_loop(v) {
      $copy_v = v;
      return;
    }

    ;

    while (!false) {
      $tco_result = $tco_loop($copy_v);
    }

    ;
    return $tco_result;
  };

  return spin(a);
};

var showVoid = new Data_Show.Show(absurd);
module.exports = {
  absurd: absurd,
  showVoid: showVoid
};
},{"../Data.Show/index.js":"output/Data.Show/index.js"}],"output/Data.Semigroup/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var $foreign = require("./foreign.js");

var Data_Symbol = require("../Data.Symbol/index.js");

var Data_Unit = require("../Data.Unit/index.js");

var Data_Void = require("../Data.Void/index.js");

var Record_Unsafe = require("../Record.Unsafe/index.js");

var Type_Data_RowList = require("../Type.Data.RowList/index.js");

var SemigroupRecord = function SemigroupRecord(appendRecord) {
  this.appendRecord = appendRecord;
};

var Semigroup = function Semigroup(append) {
  this.append = append;
};

var semigroupVoid = new Semigroup(function (v) {
  return Data_Void.absurd;
});
var semigroupUnit = new Semigroup(function (v) {
  return function (v1) {
    return Data_Unit.unit;
  };
});
var semigroupString = new Semigroup($foreign.concatString);
var semigroupRecordNil = new SemigroupRecord(function (v) {
  return function (v1) {
    return function (v2) {
      return {};
    };
  };
});
var semigroupArray = new Semigroup($foreign.concatArray);

var appendRecord = function appendRecord(dict) {
  return dict.appendRecord;
};

var semigroupRecord = function semigroupRecord(dictRowToList) {
  return function (dictSemigroupRecord) {
    return new Semigroup(appendRecord(dictSemigroupRecord)(Type_Data_RowList.RLProxy.value));
  };
};

var append = function append(dict) {
  return dict.append;
};

var semigroupFn = function semigroupFn(dictSemigroup) {
  return new Semigroup(function (f) {
    return function (g) {
      return function (x) {
        return append(dictSemigroup)(f(x))(g(x));
      };
    };
  });
};

var semigroupRecordCons = function semigroupRecordCons(dictIsSymbol) {
  return function (dictCons) {
    return function (dictSemigroupRecord) {
      return function (dictSemigroup) {
        return new SemigroupRecord(function (v) {
          return function (ra) {
            return function (rb) {
              var tail = appendRecord(dictSemigroupRecord)(Type_Data_RowList.RLProxy.value)(ra)(rb);
              var key = Data_Symbol.reflectSymbol(dictIsSymbol)(Data_Symbol.SProxy.value);
              var insert = Record_Unsafe.unsafeSet(key);
              var get = Record_Unsafe.unsafeGet(key);
              return insert(append(dictSemigroup)(get(ra))(get(rb)))(tail);
            };
          };
        });
      };
    };
  };
};

module.exports = {
  Semigroup: Semigroup,
  append: append,
  SemigroupRecord: SemigroupRecord,
  appendRecord: appendRecord,
  semigroupString: semigroupString,
  semigroupUnit: semigroupUnit,
  semigroupVoid: semigroupVoid,
  semigroupFn: semigroupFn,
  semigroupArray: semigroupArray,
  semigroupRecord: semigroupRecord,
  semigroupRecordNil: semigroupRecordNil,
  semigroupRecordCons: semigroupRecordCons
};
},{"./foreign.js":"output/Data.Semigroup/foreign.js","../Data.Symbol/index.js":"output/Data.Symbol/index.js","../Data.Unit/index.js":"output/Data.Unit/index.js","../Data.Void/index.js":"output/Data.Void/index.js","../Record.Unsafe/index.js":"output/Record.Unsafe/index.js","../Type.Data.RowList/index.js":"output/Type.Data.RowList/index.js"}],"output/Control.Extend/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var $foreign = require("./foreign.js");

var Control_Category = require("../Control.Category/index.js");

var Data_Functor = require("../Data.Functor/index.js");

var Data_Semigroup = require("../Data.Semigroup/index.js");

var Extend = function Extend(Functor0, extend) {
  this.Functor0 = Functor0;
  this.extend = extend;
};

var extendFn = function extendFn(dictSemigroup) {
  return new Extend(function () {
    return Data_Functor.functorFn;
  }, function (f) {
    return function (g) {
      return function (w) {
        return f(function (w$prime) {
          return g(Data_Semigroup.append(dictSemigroup)(w)(w$prime));
        });
      };
    };
  });
};

var extendArray = new Extend(function () {
  return Data_Functor.functorArray;
}, $foreign.arrayExtend);

var extend = function extend(dict) {
  return dict.extend;
};

var extendFlipped = function extendFlipped(dictExtend) {
  return function (w) {
    return function (f) {
      return extend(dictExtend)(f)(w);
    };
  };
};

var duplicate = function duplicate(dictExtend) {
  return extend(dictExtend)(Control_Category.identity(Control_Category.categoryFn));
};

var composeCoKleisliFlipped = function composeCoKleisliFlipped(dictExtend) {
  return function (f) {
    return function (g) {
      return function (w) {
        return f(extend(dictExtend)(g)(w));
      };
    };
  };
};

var composeCoKleisli = function composeCoKleisli(dictExtend) {
  return function (f) {
    return function (g) {
      return function (w) {
        return g(extend(dictExtend)(f)(w));
      };
    };
  };
};

module.exports = {
  Extend: Extend,
  extend: extend,
  extendFlipped: extendFlipped,
  composeCoKleisli: composeCoKleisli,
  composeCoKleisliFlipped: composeCoKleisliFlipped,
  duplicate: duplicate,
  extendFn: extendFn,
  extendArray: extendArray
};
},{"./foreign.js":"output/Control.Extend/foreign.js","../Control.Category/index.js":"output/Control.Category/index.js","../Data.Functor/index.js":"output/Data.Functor/index.js","../Data.Semigroup/index.js":"output/Data.Semigroup/index.js"}],"output/Control.Lazy/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var Data_Unit = require("../Data.Unit/index.js");

var Lazy = function Lazy(defer) {
  this.defer = defer;
};

var lazyUnit = new Lazy(function (v) {
  return Data_Unit.unit;
});
var lazyFn = new Lazy(function (f) {
  return function (x) {
    return f(Data_Unit.unit)(x);
  };
});

var defer = function defer(dict) {
  return dict.defer;
};

var fix = function fix(dictLazy) {
  return function (f) {
    var go = defer(dictLazy)(function (v) {
      return f(go);
    });
    return go;
  };
};

module.exports = {
  defer: defer,
  Lazy: Lazy,
  fix: fix,
  lazyFn: lazyFn,
  lazyUnit: lazyUnit
};
},{"../Data.Unit/index.js":"output/Data.Unit/index.js"}],"output/Control.Monad/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var Control_Applicative = require("../Control.Applicative/index.js");

var Control_Bind = require("../Control.Bind/index.js");

var Monad = function Monad(Applicative0, Bind1) {
  this.Applicative0 = Applicative0;
  this.Bind1 = Bind1;
};

var whenM = function whenM(dictMonad) {
  return function (mb) {
    return function (m) {
      return Control_Bind.bind(dictMonad.Bind1())(mb)(function (v) {
        return Control_Applicative.when(dictMonad.Applicative0())(v)(m);
      });
    };
  };
};

var unlessM = function unlessM(dictMonad) {
  return function (mb) {
    return function (m) {
      return Control_Bind.bind(dictMonad.Bind1())(mb)(function (v) {
        return Control_Applicative.unless(dictMonad.Applicative0())(v)(m);
      });
    };
  };
};

var monadFn = new Monad(function () {
  return Control_Applicative.applicativeFn;
}, function () {
  return Control_Bind.bindFn;
});
var monadArray = new Monad(function () {
  return Control_Applicative.applicativeArray;
}, function () {
  return Control_Bind.bindArray;
});

var liftM1 = function liftM1(dictMonad) {
  return function (f) {
    return function (a) {
      return Control_Bind.bind(dictMonad.Bind1())(a)(function (v) {
        return Control_Applicative.pure(dictMonad.Applicative0())(f(v));
      });
    };
  };
};

var ap = function ap(dictMonad) {
  return function (f) {
    return function (a) {
      return Control_Bind.bind(dictMonad.Bind1())(f)(function (v) {
        return Control_Bind.bind(dictMonad.Bind1())(a)(function (v1) {
          return Control_Applicative.pure(dictMonad.Applicative0())(v(v1));
        });
      });
    };
  };
};

module.exports = {
  Monad: Monad,
  liftM1: liftM1,
  ap: ap,
  whenM: whenM,
  unlessM: unlessM,
  monadFn: monadFn,
  monadArray: monadArray
};
},{"../Control.Applicative/index.js":"output/Control.Applicative/index.js","../Control.Bind/index.js":"output/Control.Bind/index.js"}],"output/Data.Foldable/foreign.js":[function(require,module,exports) {
"use strict";

exports.foldrArray = function (f) {
  return function (init) {
    return function (xs) {
      var acc = init;
      var len = xs.length;

      for (var i = len - 1; i >= 0; i--) {
        acc = f(xs[i])(acc);
      }

      return acc;
    };
  };
};

exports.foldlArray = function (f) {
  return function (init) {
    return function (xs) {
      var acc = init;
      var len = xs.length;

      for (var i = 0; i < len; i++) {
        acc = f(acc)(xs[i]);
      }

      return acc;
    };
  };
};
},{}],"output/Control.Alt/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var Data_Functor = require("../Data.Functor/index.js");

var Data_Semigroup = require("../Data.Semigroup/index.js");

var Alt = function Alt(Functor0, alt) {
  this.Functor0 = Functor0;
  this.alt = alt;
};

var altArray = new Alt(function () {
  return Data_Functor.functorArray;
}, Data_Semigroup.append(Data_Semigroup.semigroupArray));

var alt = function alt(dict) {
  return dict.alt;
};

module.exports = {
  Alt: Alt,
  alt: alt,
  altArray: altArray
};
},{"../Data.Functor/index.js":"output/Data.Functor/index.js","../Data.Semigroup/index.js":"output/Data.Semigroup/index.js"}],"output/Control.Plus/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var Control_Alt = require("../Control.Alt/index.js");

var Plus = function Plus(Alt0, empty) {
  this.Alt0 = Alt0;
  this.empty = empty;
};

var plusArray = new Plus(function () {
  return Control_Alt.altArray;
}, []);

var empty = function empty(dict) {
  return dict.empty;
};

module.exports = {
  Plus: Plus,
  empty: empty,
  plusArray: plusArray
};
},{"../Control.Alt/index.js":"output/Control.Alt/index.js"}],"output/Data.Eq/foreign.js":[function(require,module,exports) {
"use strict";

var refEq = function refEq(r1) {
  return function (r2) {
    return r1 === r2;
  };
};

exports.eqBooleanImpl = refEq;
exports.eqIntImpl = refEq;
exports.eqNumberImpl = refEq;
exports.eqCharImpl = refEq;
exports.eqStringImpl = refEq;

exports.eqArrayImpl = function (f) {
  return function (xs) {
    return function (ys) {
      if (xs === ys) return true;
      if (xs.length !== ys.length) return false;

      for (var i = 0; i < xs.length; i++) {
        if (!f(xs[i])(ys[i])) return false;
      }

      return true;
    };
  };
};
},{}],"output/Data.Eq/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var $foreign = require("./foreign.js");

var Data_Symbol = require("../Data.Symbol/index.js");

var Record_Unsafe = require("../Record.Unsafe/index.js");

var Type_Data_RowList = require("../Type.Data.RowList/index.js");

var EqRecord = function EqRecord(eqRecord) {
  this.eqRecord = eqRecord;
};

var Eq1 = function Eq1(eq1) {
  this.eq1 = eq1;
};

var Eq = function Eq(eq) {
  this.eq = eq;
};

var eqVoid = new Eq(function (v) {
  return function (v1) {
    return true;
  };
});
var eqUnit = new Eq(function (v) {
  return function (v1) {
    return true;
  };
});
var eqString = new Eq($foreign.eqStringImpl);
var eqRowNil = new EqRecord(function (v) {
  return function (v1) {
    return function (v2) {
      return true;
    };
  };
});

var eqRecord = function eqRecord(dict) {
  return dict.eqRecord;
};

var eqRec = function eqRec(dictRowToList) {
  return function (dictEqRecord) {
    return new Eq(eqRecord(dictEqRecord)(Type_Data_RowList.RLProxy.value));
  };
};

var eqNumber = new Eq($foreign.eqNumberImpl);
var eqInt = new Eq($foreign.eqIntImpl);
var eqChar = new Eq($foreign.eqCharImpl);
var eqBoolean = new Eq($foreign.eqBooleanImpl);

var eq1 = function eq1(dict) {
  return dict.eq1;
};

var eq = function eq(dict) {
  return dict.eq;
};

var eqArray = function eqArray(dictEq) {
  return new Eq($foreign.eqArrayImpl(eq(dictEq)));
};

var eq1Array = new Eq1(function (dictEq) {
  return eq(eqArray(dictEq));
});

var eqRowCons = function eqRowCons(dictEqRecord) {
  return function (dictCons) {
    return function (dictIsSymbol) {
      return function (dictEq) {
        return new EqRecord(function (v) {
          return function (ra) {
            return function (rb) {
              var tail = eqRecord(dictEqRecord)(Type_Data_RowList.RLProxy.value)(ra)(rb);
              var key = Data_Symbol.reflectSymbol(dictIsSymbol)(Data_Symbol.SProxy.value);
              var get = Record_Unsafe.unsafeGet(key);
              return eq(dictEq)(get(ra))(get(rb)) && tail;
            };
          };
        });
      };
    };
  };
};

var notEq = function notEq(dictEq) {
  return function (x) {
    return function (y) {
      return eq(eqBoolean)(eq(dictEq)(x)(y))(false);
    };
  };
};

var notEq1 = function notEq1(dictEq1) {
  return function (dictEq) {
    return function (x) {
      return function (y) {
        return eq(eqBoolean)(eq1(dictEq1)(dictEq)(x)(y))(false);
      };
    };
  };
};

module.exports = {
  Eq: Eq,
  eq: eq,
  notEq: notEq,
  Eq1: Eq1,
  eq1: eq1,
  notEq1: notEq1,
  EqRecord: EqRecord,
  eqRecord: eqRecord,
  eqBoolean: eqBoolean,
  eqInt: eqInt,
  eqNumber: eqNumber,
  eqChar: eqChar,
  eqString: eqString,
  eqUnit: eqUnit,
  eqVoid: eqVoid,
  eqArray: eqArray,
  eqRec: eqRec,
  eq1Array: eq1Array,
  eqRowNil: eqRowNil,
  eqRowCons: eqRowCons
};
},{"./foreign.js":"output/Data.Eq/foreign.js","../Data.Symbol/index.js":"output/Data.Symbol/index.js","../Record.Unsafe/index.js":"output/Record.Unsafe/index.js","../Type.Data.RowList/index.js":"output/Type.Data.RowList/index.js"}],"output/Data.HeytingAlgebra/foreign.js":[function(require,module,exports) {
"use strict";

exports.boolConj = function (b1) {
  return function (b2) {
    return b1 && b2;
  };
};

exports.boolDisj = function (b1) {
  return function (b2) {
    return b1 || b2;
  };
};

exports.boolNot = function (b) {
  return !b;
};
},{}],"output/Type.Data.Row/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var RProxy = function () {
  function RProxy() {}

  ;
  RProxy.value = new RProxy();
  return RProxy;
}();

module.exports = {
  RProxy: RProxy
};
},{}],"output/Data.HeytingAlgebra/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var $foreign = require("./foreign.js");

var Data_Symbol = require("../Data.Symbol/index.js");

var Data_Unit = require("../Data.Unit/index.js");

var Record_Unsafe = require("../Record.Unsafe/index.js");

var Type_Data_Row = require("../Type.Data.Row/index.js");

var Type_Data_RowList = require("../Type.Data.RowList/index.js");

var HeytingAlgebraRecord = function HeytingAlgebraRecord(conjRecord, disjRecord, ffRecord, impliesRecord, notRecord, ttRecord) {
  this.conjRecord = conjRecord;
  this.disjRecord = disjRecord;
  this.ffRecord = ffRecord;
  this.impliesRecord = impliesRecord;
  this.notRecord = notRecord;
  this.ttRecord = ttRecord;
};

var HeytingAlgebra = function HeytingAlgebra(conj, disj, ff, implies, not, tt) {
  this.conj = conj;
  this.disj = disj;
  this.ff = ff;
  this.implies = implies;
  this.not = not;
  this.tt = tt;
};

var ttRecord = function ttRecord(dict) {
  return dict.ttRecord;
};

var tt = function tt(dict) {
  return dict.tt;
};

var notRecord = function notRecord(dict) {
  return dict.notRecord;
};

var not = function not(dict) {
  return dict.not;
};

var impliesRecord = function impliesRecord(dict) {
  return dict.impliesRecord;
};

var implies = function implies(dict) {
  return dict.implies;
};

var heytingAlgebraUnit = new HeytingAlgebra(function (v) {
  return function (v1) {
    return Data_Unit.unit;
  };
}, function (v) {
  return function (v1) {
    return Data_Unit.unit;
  };
}, Data_Unit.unit, function (v) {
  return function (v1) {
    return Data_Unit.unit;
  };
}, function (v) {
  return Data_Unit.unit;
}, Data_Unit.unit);
var heytingAlgebraRecordNil = new HeytingAlgebraRecord(function (v) {
  return function (v1) {
    return function (v2) {
      return {};
    };
  };
}, function (v) {
  return function (v1) {
    return function (v2) {
      return {};
    };
  };
}, function (v) {
  return function (v1) {
    return {};
  };
}, function (v) {
  return function (v1) {
    return function (v2) {
      return {};
    };
  };
}, function (v) {
  return function (v1) {
    return {};
  };
}, function (v) {
  return function (v1) {
    return {};
  };
});

var ffRecord = function ffRecord(dict) {
  return dict.ffRecord;
};

var ff = function ff(dict) {
  return dict.ff;
};

var disjRecord = function disjRecord(dict) {
  return dict.disjRecord;
};

var disj = function disj(dict) {
  return dict.disj;
};

var heytingAlgebraBoolean = new HeytingAlgebra($foreign.boolConj, $foreign.boolDisj, false, function (a) {
  return function (b) {
    return disj(heytingAlgebraBoolean)(not(heytingAlgebraBoolean)(a))(b);
  };
}, $foreign.boolNot, true);

var conjRecord = function conjRecord(dict) {
  return dict.conjRecord;
};

var heytingAlgebraRecord = function heytingAlgebraRecord(dictRowToList) {
  return function (dictHeytingAlgebraRecord) {
    return new HeytingAlgebra(conjRecord(dictHeytingAlgebraRecord)(Type_Data_RowList.RLProxy.value), disjRecord(dictHeytingAlgebraRecord)(Type_Data_RowList.RLProxy.value), ffRecord(dictHeytingAlgebraRecord)(Type_Data_RowList.RLProxy.value)(Type_Data_Row.RProxy.value), impliesRecord(dictHeytingAlgebraRecord)(Type_Data_RowList.RLProxy.value), notRecord(dictHeytingAlgebraRecord)(Type_Data_RowList.RLProxy.value), ttRecord(dictHeytingAlgebraRecord)(Type_Data_RowList.RLProxy.value)(Type_Data_Row.RProxy.value));
  };
};

var conj = function conj(dict) {
  return dict.conj;
};

var heytingAlgebraFunction = function heytingAlgebraFunction(dictHeytingAlgebra) {
  return new HeytingAlgebra(function (f) {
    return function (g) {
      return function (a) {
        return conj(dictHeytingAlgebra)(f(a))(g(a));
      };
    };
  }, function (f) {
    return function (g) {
      return function (a) {
        return disj(dictHeytingAlgebra)(f(a))(g(a));
      };
    };
  }, function (v) {
    return ff(dictHeytingAlgebra);
  }, function (f) {
    return function (g) {
      return function (a) {
        return implies(dictHeytingAlgebra)(f(a))(g(a));
      };
    };
  }, function (f) {
    return function (a) {
      return not(dictHeytingAlgebra)(f(a));
    };
  }, function (v) {
    return tt(dictHeytingAlgebra);
  });
};

var heytingAlgebraRecordCons = function heytingAlgebraRecordCons(dictIsSymbol) {
  return function (dictCons) {
    return function (dictHeytingAlgebraRecord) {
      return function (dictHeytingAlgebra) {
        return new HeytingAlgebraRecord(function (v) {
          return function (ra) {
            return function (rb) {
              var tail = conjRecord(dictHeytingAlgebraRecord)(Type_Data_RowList.RLProxy.value)(ra)(rb);
              var key = Data_Symbol.reflectSymbol(dictIsSymbol)(Data_Symbol.SProxy.value);
              var insert = Record_Unsafe.unsafeSet(key);
              var get = Record_Unsafe.unsafeGet(key);
              return insert(conj(dictHeytingAlgebra)(get(ra))(get(rb)))(tail);
            };
          };
        }, function (v) {
          return function (ra) {
            return function (rb) {
              var tail = disjRecord(dictHeytingAlgebraRecord)(Type_Data_RowList.RLProxy.value)(ra)(rb);
              var key = Data_Symbol.reflectSymbol(dictIsSymbol)(Data_Symbol.SProxy.value);
              var insert = Record_Unsafe.unsafeSet(key);
              var get = Record_Unsafe.unsafeGet(key);
              return insert(disj(dictHeytingAlgebra)(get(ra))(get(rb)))(tail);
            };
          };
        }, function (v) {
          return function (row) {
            var tail = ffRecord(dictHeytingAlgebraRecord)(Type_Data_RowList.RLProxy.value)(row);
            var key = Data_Symbol.reflectSymbol(dictIsSymbol)(Data_Symbol.SProxy.value);
            var insert = Record_Unsafe.unsafeSet(key);
            return insert(ff(dictHeytingAlgebra))(tail);
          };
        }, function (v) {
          return function (ra) {
            return function (rb) {
              var tail = impliesRecord(dictHeytingAlgebraRecord)(Type_Data_RowList.RLProxy.value)(ra)(rb);
              var key = Data_Symbol.reflectSymbol(dictIsSymbol)(Data_Symbol.SProxy.value);
              var insert = Record_Unsafe.unsafeSet(key);
              var get = Record_Unsafe.unsafeGet(key);
              return insert(implies(dictHeytingAlgebra)(get(ra))(get(rb)))(tail);
            };
          };
        }, function (v) {
          return function (row) {
            var tail = notRecord(dictHeytingAlgebraRecord)(Type_Data_RowList.RLProxy.value)(row);
            var key = Data_Symbol.reflectSymbol(dictIsSymbol)(Data_Symbol.SProxy.value);
            var insert = Record_Unsafe.unsafeSet(key);
            var get = Record_Unsafe.unsafeGet(key);
            return insert(not(dictHeytingAlgebra)(get(row)))(tail);
          };
        }, function (v) {
          return function (row) {
            var tail = ttRecord(dictHeytingAlgebraRecord)(Type_Data_RowList.RLProxy.value)(row);
            var key = Data_Symbol.reflectSymbol(dictIsSymbol)(Data_Symbol.SProxy.value);
            var insert = Record_Unsafe.unsafeSet(key);
            return insert(tt(dictHeytingAlgebra))(tail);
          };
        });
      };
    };
  };
};

module.exports = {
  HeytingAlgebra: HeytingAlgebra,
  tt: tt,
  ff: ff,
  implies: implies,
  conj: conj,
  disj: disj,
  not: not,
  HeytingAlgebraRecord: HeytingAlgebraRecord,
  ffRecord: ffRecord,
  ttRecord: ttRecord,
  impliesRecord: impliesRecord,
  conjRecord: conjRecord,
  disjRecord: disjRecord,
  notRecord: notRecord,
  heytingAlgebraBoolean: heytingAlgebraBoolean,
  heytingAlgebraUnit: heytingAlgebraUnit,
  heytingAlgebraFunction: heytingAlgebraFunction,
  heytingAlgebraRecord: heytingAlgebraRecord,
  heytingAlgebraRecordNil: heytingAlgebraRecordNil,
  heytingAlgebraRecordCons: heytingAlgebraRecordCons
};
},{"./foreign.js":"output/Data.HeytingAlgebra/foreign.js","../Data.Symbol/index.js":"output/Data.Symbol/index.js","../Data.Unit/index.js":"output/Data.Unit/index.js","../Record.Unsafe/index.js":"output/Record.Unsafe/index.js","../Type.Data.Row/index.js":"output/Type.Data.Row/index.js","../Type.Data.RowList/index.js":"output/Type.Data.RowList/index.js"}],"output/Control.Alternative/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var Control_Applicative = require("../Control.Applicative/index.js");

var Control_Plus = require("../Control.Plus/index.js");

var Alternative = function Alternative(Applicative0, Plus1) {
  this.Applicative0 = Applicative0;
  this.Plus1 = Plus1;
};

var alternativeArray = new Alternative(function () {
  return Control_Applicative.applicativeArray;
}, function () {
  return Control_Plus.plusArray;
});
module.exports = {
  Alternative: Alternative,
  alternativeArray: alternativeArray
};
},{"../Control.Applicative/index.js":"output/Control.Applicative/index.js","../Control.Plus/index.js":"output/Control.Plus/index.js"}],"output/Control.MonadZero/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var Control_Alternative = require("../Control.Alternative/index.js");

var Control_Applicative = require("../Control.Applicative/index.js");

var Control_Monad = require("../Control.Monad/index.js");

var Control_Plus = require("../Control.Plus/index.js");

var Data_Unit = require("../Data.Unit/index.js");

var MonadZero = function MonadZero(Alternative1, Monad0) {
  this.Alternative1 = Alternative1;
  this.Monad0 = Monad0;
};

var monadZeroArray = new MonadZero(function () {
  return Control_Alternative.alternativeArray;
}, function () {
  return Control_Monad.monadArray;
});

var guard = function guard(dictMonadZero) {
  return function (v) {
    if (v) {
      return Control_Applicative.pure(dictMonadZero.Alternative1().Applicative0())(Data_Unit.unit);
    }

    ;

    if (!v) {
      return Control_Plus.empty(dictMonadZero.Alternative1().Plus1());
    }

    ;
    throw new Error("Failed pattern match at Control.MonadZero (line 54, column 1 - line 54, column 52): " + [v.constructor.name]);
  };
};

module.exports = {
  MonadZero: MonadZero,
  guard: guard,
  monadZeroArray: monadZeroArray
};
},{"../Control.Alternative/index.js":"output/Control.Alternative/index.js","../Control.Applicative/index.js":"output/Control.Applicative/index.js","../Control.Monad/index.js":"output/Control.Monad/index.js","../Control.Plus/index.js":"output/Control.Plus/index.js","../Data.Unit/index.js":"output/Data.Unit/index.js"}],"output/Data.Bounded/foreign.js":[function(require,module,exports) {
"use strict";

exports.topInt = 2147483647;
exports.bottomInt = -2147483648;
exports.topChar = String.fromCharCode(65535);
exports.bottomChar = String.fromCharCode(0);
exports.topNumber = Number.POSITIVE_INFINITY;
exports.bottomNumber = Number.NEGATIVE_INFINITY;
},{}],"output/Data.Ord/foreign.js":[function(require,module,exports) {
"use strict";

var unsafeCompareImpl = function unsafeCompareImpl(lt) {
  return function (eq) {
    return function (gt) {
      return function (x) {
        return function (y) {
          return x < y ? lt : x === y ? eq : gt;
        };
      };
    };
  };
};

exports.ordBooleanImpl = unsafeCompareImpl;
exports.ordIntImpl = unsafeCompareImpl;
exports.ordNumberImpl = unsafeCompareImpl;
exports.ordStringImpl = unsafeCompareImpl;
exports.ordCharImpl = unsafeCompareImpl;

exports.ordArrayImpl = function (f) {
  return function (xs) {
    return function (ys) {
      var i = 0;
      var xlen = xs.length;
      var ylen = ys.length;

      while (i < xlen && i < ylen) {
        var x = xs[i];
        var y = ys[i];
        var o = f(x)(y);

        if (o !== 0) {
          return o;
        }

        i++;
      }

      if (xlen === ylen) {
        return 0;
      } else if (xlen > ylen) {
        return -1;
      } else {
        return 1;
      }
    };
  };
};
},{}],"output/Data.Ordering/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var Data_Eq = require("../Data.Eq/index.js");

var Data_Semigroup = require("../Data.Semigroup/index.js");

var Data_Show = require("../Data.Show/index.js");

var LT = function () {
  function LT() {}

  ;
  LT.value = new LT();
  return LT;
}();

var GT = function () {
  function GT() {}

  ;
  GT.value = new GT();
  return GT;
}();

var EQ = function () {
  function EQ() {}

  ;
  EQ.value = new EQ();
  return EQ;
}();

var showOrdering = new Data_Show.Show(function (v) {
  if (v instanceof LT) {
    return "LT";
  }

  ;

  if (v instanceof GT) {
    return "GT";
  }

  ;

  if (v instanceof EQ) {
    return "EQ";
  }

  ;
  throw new Error("Failed pattern match at Data.Ordering (line 26, column 1 - line 29, column 17): " + [v.constructor.name]);
});
var semigroupOrdering = new Data_Semigroup.Semigroup(function (v) {
  return function (v1) {
    if (v instanceof LT) {
      return LT.value;
    }

    ;

    if (v instanceof GT) {
      return GT.value;
    }

    ;

    if (v instanceof EQ) {
      return v1;
    }

    ;
    throw new Error("Failed pattern match at Data.Ordering (line 21, column 1 - line 24, column 18): " + [v.constructor.name, v1.constructor.name]);
  };
});

var invert = function invert(v) {
  if (v instanceof GT) {
    return LT.value;
  }

  ;

  if (v instanceof EQ) {
    return EQ.value;
  }

  ;

  if (v instanceof LT) {
    return GT.value;
  }

  ;
  throw new Error("Failed pattern match at Data.Ordering (line 33, column 1 - line 33, column 31): " + [v.constructor.name]);
};

var eqOrdering = new Data_Eq.Eq(function (v) {
  return function (v1) {
    if (v instanceof LT && v1 instanceof LT) {
      return true;
    }

    ;

    if (v instanceof GT && v1 instanceof GT) {
      return true;
    }

    ;

    if (v instanceof EQ && v1 instanceof EQ) {
      return true;
    }

    ;
    return false;
  };
});
module.exports = {
  LT: LT,
  GT: GT,
  EQ: EQ,
  invert: invert,
  eqOrdering: eqOrdering,
  semigroupOrdering: semigroupOrdering,
  showOrdering: showOrdering
};
},{"../Data.Eq/index.js":"output/Data.Eq/index.js","../Data.Semigroup/index.js":"output/Data.Semigroup/index.js","../Data.Show/index.js":"output/Data.Show/index.js"}],"output/Data.Ring/foreign.js":[function(require,module,exports) {
"use strict";

exports.intSub = function (x) {
  return function (y) {
    /* jshint bitwise: false */
    return x - y | 0;
  };
};

exports.numSub = function (n1) {
  return function (n2) {
    return n1 - n2;
  };
};
},{}],"output/Data.Semiring/foreign.js":[function(require,module,exports) {
"use strict";

exports.intAdd = function (x) {
  return function (y) {
    /* jshint bitwise: false */
    return x + y | 0;
  };
};

exports.intMul = function (x) {
  return function (y) {
    /* jshint bitwise: false */
    return x * y | 0;
  };
};

exports.numAdd = function (n1) {
  return function (n2) {
    return n1 + n2;
  };
};

exports.numMul = function (n1) {
  return function (n2) {
    return n1 * n2;
  };
};
},{}],"output/Data.Semiring/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var $foreign = require("./foreign.js");

var Data_Symbol = require("../Data.Symbol/index.js");

var Data_Unit = require("../Data.Unit/index.js");

var Record_Unsafe = require("../Record.Unsafe/index.js");

var Type_Data_Row = require("../Type.Data.Row/index.js");

var Type_Data_RowList = require("../Type.Data.RowList/index.js");

var SemiringRecord = function SemiringRecord(addRecord, mulRecord, oneRecord, zeroRecord) {
  this.addRecord = addRecord;
  this.mulRecord = mulRecord;
  this.oneRecord = oneRecord;
  this.zeroRecord = zeroRecord;
};

var Semiring = function Semiring(add, mul, one, zero) {
  this.add = add;
  this.mul = mul;
  this.one = one;
  this.zero = zero;
};

var zeroRecord = function zeroRecord(dict) {
  return dict.zeroRecord;
};

var zero = function zero(dict) {
  return dict.zero;
};

var semiringUnit = new Semiring(function (v) {
  return function (v1) {
    return Data_Unit.unit;
  };
}, function (v) {
  return function (v1) {
    return Data_Unit.unit;
  };
}, Data_Unit.unit, Data_Unit.unit);
var semiringRecordNil = new SemiringRecord(function (v) {
  return function (v1) {
    return function (v2) {
      return {};
    };
  };
}, function (v) {
  return function (v1) {
    return function (v2) {
      return {};
    };
  };
}, function (v) {
  return function (v1) {
    return {};
  };
}, function (v) {
  return function (v1) {
    return {};
  };
});
var semiringNumber = new Semiring($foreign.numAdd, $foreign.numMul, 1.0, 0.0);
var semiringInt = new Semiring($foreign.intAdd, $foreign.intMul, 1, 0);

var oneRecord = function oneRecord(dict) {
  return dict.oneRecord;
};

var one = function one(dict) {
  return dict.one;
};

var mulRecord = function mulRecord(dict) {
  return dict.mulRecord;
};

var mul = function mul(dict) {
  return dict.mul;
};

var addRecord = function addRecord(dict) {
  return dict.addRecord;
};

var semiringRecord = function semiringRecord(dictRowToList) {
  return function (dictSemiringRecord) {
    return new Semiring(addRecord(dictSemiringRecord)(Type_Data_RowList.RLProxy.value), mulRecord(dictSemiringRecord)(Type_Data_RowList.RLProxy.value), oneRecord(dictSemiringRecord)(Type_Data_RowList.RLProxy.value)(Type_Data_Row.RProxy.value), zeroRecord(dictSemiringRecord)(Type_Data_RowList.RLProxy.value)(Type_Data_Row.RProxy.value));
  };
};

var add = function add(dict) {
  return dict.add;
};

var semiringFn = function semiringFn(dictSemiring) {
  return new Semiring(function (f) {
    return function (g) {
      return function (x) {
        return add(dictSemiring)(f(x))(g(x));
      };
    };
  }, function (f) {
    return function (g) {
      return function (x) {
        return mul(dictSemiring)(f(x))(g(x));
      };
    };
  }, function (v) {
    return one(dictSemiring);
  }, function (v) {
    return zero(dictSemiring);
  });
};

var semiringRecordCons = function semiringRecordCons(dictIsSymbol) {
  return function (dictCons) {
    return function (dictSemiringRecord) {
      return function (dictSemiring) {
        return new SemiringRecord(function (v) {
          return function (ra) {
            return function (rb) {
              var tail = addRecord(dictSemiringRecord)(Type_Data_RowList.RLProxy.value)(ra)(rb);
              var key = Data_Symbol.reflectSymbol(dictIsSymbol)(Data_Symbol.SProxy.value);
              var insert = Record_Unsafe.unsafeSet(key);
              var get = Record_Unsafe.unsafeGet(key);
              return insert(add(dictSemiring)(get(ra))(get(rb)))(tail);
            };
          };
        }, function (v) {
          return function (ra) {
            return function (rb) {
              var tail = mulRecord(dictSemiringRecord)(Type_Data_RowList.RLProxy.value)(ra)(rb);
              var key = Data_Symbol.reflectSymbol(dictIsSymbol)(Data_Symbol.SProxy.value);
              var insert = Record_Unsafe.unsafeSet(key);
              var get = Record_Unsafe.unsafeGet(key);
              return insert(mul(dictSemiring)(get(ra))(get(rb)))(tail);
            };
          };
        }, function (v) {
          return function (v1) {
            var tail = oneRecord(dictSemiringRecord)(Type_Data_RowList.RLProxy.value)(Type_Data_Row.RProxy.value);
            var key = Data_Symbol.reflectSymbol(dictIsSymbol)(Data_Symbol.SProxy.value);
            var insert = Record_Unsafe.unsafeSet(key);
            return insert(one(dictSemiring))(tail);
          };
        }, function (v) {
          return function (v1) {
            var tail = zeroRecord(dictSemiringRecord)(Type_Data_RowList.RLProxy.value)(Type_Data_Row.RProxy.value);
            var key = Data_Symbol.reflectSymbol(dictIsSymbol)(Data_Symbol.SProxy.value);
            var insert = Record_Unsafe.unsafeSet(key);
            return insert(zero(dictSemiring))(tail);
          };
        });
      };
    };
  };
};

module.exports = {
  Semiring: Semiring,
  add: add,
  zero: zero,
  mul: mul,
  one: one,
  SemiringRecord: SemiringRecord,
  addRecord: addRecord,
  mulRecord: mulRecord,
  oneRecord: oneRecord,
  zeroRecord: zeroRecord,
  semiringInt: semiringInt,
  semiringNumber: semiringNumber,
  semiringFn: semiringFn,
  semiringUnit: semiringUnit,
  semiringRecord: semiringRecord,
  semiringRecordNil: semiringRecordNil,
  semiringRecordCons: semiringRecordCons
};
},{"./foreign.js":"output/Data.Semiring/foreign.js","../Data.Symbol/index.js":"output/Data.Symbol/index.js","../Data.Unit/index.js":"output/Data.Unit/index.js","../Record.Unsafe/index.js":"output/Record.Unsafe/index.js","../Type.Data.Row/index.js":"output/Type.Data.Row/index.js","../Type.Data.RowList/index.js":"output/Type.Data.RowList/index.js"}],"output/Data.Ring/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var $foreign = require("./foreign.js");

var Data_Semiring = require("../Data.Semiring/index.js");

var Data_Symbol = require("../Data.Symbol/index.js");

var Data_Unit = require("../Data.Unit/index.js");

var Record_Unsafe = require("../Record.Unsafe/index.js");

var Type_Data_RowList = require("../Type.Data.RowList/index.js");

var RingRecord = function RingRecord(SemiringRecord0, subRecord) {
  this.SemiringRecord0 = SemiringRecord0;
  this.subRecord = subRecord;
};

var Ring = function Ring(Semiring0, sub) {
  this.Semiring0 = Semiring0;
  this.sub = sub;
};

var subRecord = function subRecord(dict) {
  return dict.subRecord;
};

var sub = function sub(dict) {
  return dict.sub;
};

var ringUnit = new Ring(function () {
  return Data_Semiring.semiringUnit;
}, function (v) {
  return function (v1) {
    return Data_Unit.unit;
  };
});
var ringRecordNil = new RingRecord(function () {
  return Data_Semiring.semiringRecordNil;
}, function (v) {
  return function (v1) {
    return function (v2) {
      return {};
    };
  };
});

var ringRecordCons = function ringRecordCons(dictIsSymbol) {
  return function (dictCons) {
    return function (dictRingRecord) {
      return function (dictRing) {
        return new RingRecord(function () {
          return Data_Semiring.semiringRecordCons(dictIsSymbol)()(dictRingRecord.SemiringRecord0())(dictRing.Semiring0());
        }, function (v) {
          return function (ra) {
            return function (rb) {
              var tail = subRecord(dictRingRecord)(Type_Data_RowList.RLProxy.value)(ra)(rb);
              var key = Data_Symbol.reflectSymbol(dictIsSymbol)(Data_Symbol.SProxy.value);
              var insert = Record_Unsafe.unsafeSet(key);
              var get = Record_Unsafe.unsafeGet(key);
              return insert(sub(dictRing)(get(ra))(get(rb)))(tail);
            };
          };
        });
      };
    };
  };
};

var ringRecord = function ringRecord(dictRowToList) {
  return function (dictRingRecord) {
    return new Ring(function () {
      return Data_Semiring.semiringRecord()(dictRingRecord.SemiringRecord0());
    }, subRecord(dictRingRecord)(Type_Data_RowList.RLProxy.value));
  };
};

var ringNumber = new Ring(function () {
  return Data_Semiring.semiringNumber;
}, $foreign.numSub);
var ringInt = new Ring(function () {
  return Data_Semiring.semiringInt;
}, $foreign.intSub);

var ringFn = function ringFn(dictRing) {
  return new Ring(function () {
    return Data_Semiring.semiringFn(dictRing.Semiring0());
  }, function (f) {
    return function (g) {
      return function (x) {
        return sub(dictRing)(f(x))(g(x));
      };
    };
  });
};

var negate = function negate(dictRing) {
  return function (a) {
    return sub(dictRing)(Data_Semiring.zero(dictRing.Semiring0()))(a);
  };
};

module.exports = {
  Ring: Ring,
  sub: sub,
  negate: negate,
  RingRecord: RingRecord,
  subRecord: subRecord,
  ringInt: ringInt,
  ringNumber: ringNumber,
  ringUnit: ringUnit,
  ringFn: ringFn,
  ringRecord: ringRecord,
  ringRecordNil: ringRecordNil,
  ringRecordCons: ringRecordCons
};
},{"./foreign.js":"output/Data.Ring/foreign.js","../Data.Semiring/index.js":"output/Data.Semiring/index.js","../Data.Symbol/index.js":"output/Data.Symbol/index.js","../Data.Unit/index.js":"output/Data.Unit/index.js","../Record.Unsafe/index.js":"output/Record.Unsafe/index.js","../Type.Data.RowList/index.js":"output/Type.Data.RowList/index.js"}],"output/Data.Ord/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var $foreign = require("./foreign.js");

var Data_Eq = require("../Data.Eq/index.js");

var Data_Ordering = require("../Data.Ordering/index.js");

var Data_Ring = require("../Data.Ring/index.js");

var Data_Semiring = require("../Data.Semiring/index.js");

var Data_Symbol = require("../Data.Symbol/index.js");

var Record_Unsafe = require("../Record.Unsafe/index.js");

var Type_Data_RowList = require("../Type.Data.RowList/index.js");

var OrdRecord = function OrdRecord(EqRecord0, compareRecord) {
  this.EqRecord0 = EqRecord0;
  this.compareRecord = compareRecord;
};

var Ord1 = function Ord1(Eq10, compare1) {
  this.Eq10 = Eq10;
  this.compare1 = compare1;
};

var Ord = function Ord(Eq0, compare) {
  this.Eq0 = Eq0;
  this.compare = compare;
};

var ordVoid = new Ord(function () {
  return Data_Eq.eqVoid;
}, function (v) {
  return function (v1) {
    return Data_Ordering.EQ.value;
  };
});
var ordUnit = new Ord(function () {
  return Data_Eq.eqUnit;
}, function (v) {
  return function (v1) {
    return Data_Ordering.EQ.value;
  };
});
var ordString = new Ord(function () {
  return Data_Eq.eqString;
}, $foreign.ordStringImpl(Data_Ordering.LT.value)(Data_Ordering.EQ.value)(Data_Ordering.GT.value));
var ordRecordNil = new OrdRecord(function () {
  return Data_Eq.eqRowNil;
}, function (v) {
  return function (v1) {
    return function (v2) {
      return Data_Ordering.EQ.value;
    };
  };
});
var ordOrdering = new Ord(function () {
  return Data_Ordering.eqOrdering;
}, function (v) {
  return function (v1) {
    if (v instanceof Data_Ordering.LT && v1 instanceof Data_Ordering.LT) {
      return Data_Ordering.EQ.value;
    }

    ;

    if (v instanceof Data_Ordering.EQ && v1 instanceof Data_Ordering.EQ) {
      return Data_Ordering.EQ.value;
    }

    ;

    if (v instanceof Data_Ordering.GT && v1 instanceof Data_Ordering.GT) {
      return Data_Ordering.EQ.value;
    }

    ;

    if (v instanceof Data_Ordering.LT) {
      return Data_Ordering.LT.value;
    }

    ;

    if (v instanceof Data_Ordering.EQ && v1 instanceof Data_Ordering.LT) {
      return Data_Ordering.GT.value;
    }

    ;

    if (v instanceof Data_Ordering.EQ && v1 instanceof Data_Ordering.GT) {
      return Data_Ordering.LT.value;
    }

    ;

    if (v instanceof Data_Ordering.GT) {
      return Data_Ordering.GT.value;
    }

    ;
    throw new Error("Failed pattern match at Data.Ord (line 112, column 1 - line 119, column 21): " + [v.constructor.name, v1.constructor.name]);
  };
});
var ordNumber = new Ord(function () {
  return Data_Eq.eqNumber;
}, $foreign.ordNumberImpl(Data_Ordering.LT.value)(Data_Ordering.EQ.value)(Data_Ordering.GT.value));
var ordInt = new Ord(function () {
  return Data_Eq.eqInt;
}, $foreign.ordIntImpl(Data_Ordering.LT.value)(Data_Ordering.EQ.value)(Data_Ordering.GT.value));
var ordChar = new Ord(function () {
  return Data_Eq.eqChar;
}, $foreign.ordCharImpl(Data_Ordering.LT.value)(Data_Ordering.EQ.value)(Data_Ordering.GT.value));
var ordBoolean = new Ord(function () {
  return Data_Eq.eqBoolean;
}, $foreign.ordBooleanImpl(Data_Ordering.LT.value)(Data_Ordering.EQ.value)(Data_Ordering.GT.value));

var compareRecord = function compareRecord(dict) {
  return dict.compareRecord;
};

var ordRecord = function ordRecord(dictRowToList) {
  return function (dictOrdRecord) {
    return new Ord(function () {
      return Data_Eq.eqRec()(dictOrdRecord.EqRecord0());
    }, compareRecord(dictOrdRecord)(Type_Data_RowList.RLProxy.value));
  };
};

var compare1 = function compare1(dict) {
  return dict.compare1;
};

var compare = function compare(dict) {
  return dict.compare;
};

var comparing = function comparing(dictOrd) {
  return function (f) {
    return function (x) {
      return function (y) {
        return compare(dictOrd)(f(x))(f(y));
      };
    };
  };
};

var greaterThan = function greaterThan(dictOrd) {
  return function (a1) {
    return function (a2) {
      var v = compare(dictOrd)(a1)(a2);

      if (v instanceof Data_Ordering.GT) {
        return true;
      }

      ;
      return false;
    };
  };
};

var greaterThanOrEq = function greaterThanOrEq(dictOrd) {
  return function (a1) {
    return function (a2) {
      var v = compare(dictOrd)(a1)(a2);

      if (v instanceof Data_Ordering.LT) {
        return false;
      }

      ;
      return true;
    };
  };
};

var signum = function signum(dictOrd) {
  return function (dictRing) {
    return function (x) {
      var $43 = greaterThanOrEq(dictOrd)(x)(Data_Semiring.zero(dictRing.Semiring0()));

      if ($43) {
        return Data_Semiring.one(dictRing.Semiring0());
      }

      ;
      return Data_Ring.negate(dictRing)(Data_Semiring.one(dictRing.Semiring0()));
    };
  };
};

var lessThan = function lessThan(dictOrd) {
  return function (a1) {
    return function (a2) {
      var v = compare(dictOrd)(a1)(a2);

      if (v instanceof Data_Ordering.LT) {
        return true;
      }

      ;
      return false;
    };
  };
};

var lessThanOrEq = function lessThanOrEq(dictOrd) {
  return function (a1) {
    return function (a2) {
      var v = compare(dictOrd)(a1)(a2);

      if (v instanceof Data_Ordering.GT) {
        return false;
      }

      ;
      return true;
    };
  };
};

var max = function max(dictOrd) {
  return function (x) {
    return function (y) {
      var v = compare(dictOrd)(x)(y);

      if (v instanceof Data_Ordering.LT) {
        return y;
      }

      ;

      if (v instanceof Data_Ordering.EQ) {
        return x;
      }

      ;

      if (v instanceof Data_Ordering.GT) {
        return x;
      }

      ;
      throw new Error("Failed pattern match at Data.Ord (line 167, column 3 - line 170, column 12): " + [v.constructor.name]);
    };
  };
};

var min = function min(dictOrd) {
  return function (x) {
    return function (y) {
      var v = compare(dictOrd)(x)(y);

      if (v instanceof Data_Ordering.LT) {
        return x;
      }

      ;

      if (v instanceof Data_Ordering.EQ) {
        return x;
      }

      ;

      if (v instanceof Data_Ordering.GT) {
        return y;
      }

      ;
      throw new Error("Failed pattern match at Data.Ord (line 158, column 3 - line 161, column 12): " + [v.constructor.name]);
    };
  };
};

var ordArray = function ordArray(dictOrd) {
  return new Ord(function () {
    return Data_Eq.eqArray(dictOrd.Eq0());
  }, function () {
    var toDelta = function toDelta(x) {
      return function (y) {
        var v = compare(dictOrd)(x)(y);

        if (v instanceof Data_Ordering.EQ) {
          return 0;
        }

        ;

        if (v instanceof Data_Ordering.LT) {
          return 1;
        }

        ;

        if (v instanceof Data_Ordering.GT) {
          return -1 | 0;
        }

        ;
        throw new Error("Failed pattern match at Data.Ord (line 65, column 7 - line 68, column 17): " + [v.constructor.name]);
      };
    };

    return function (xs) {
      return function (ys) {
        return compare(ordInt)(0)($foreign.ordArrayImpl(toDelta)(xs)(ys));
      };
    };
  }());
};

var ord1Array = new Ord1(function () {
  return Data_Eq.eq1Array;
}, function (dictOrd) {
  return compare(ordArray(dictOrd));
});

var ordRecordCons = function ordRecordCons(dictOrdRecord) {
  return function (dictCons) {
    return function (dictIsSymbol) {
      return function (dictOrd) {
        return new OrdRecord(function () {
          return Data_Eq.eqRowCons(dictOrdRecord.EqRecord0())()(dictIsSymbol)(dictOrd.Eq0());
        }, function (v) {
          return function (ra) {
            return function (rb) {
              var key = Data_Symbol.reflectSymbol(dictIsSymbol)(Data_Symbol.SProxy.value);
              var left = compare(dictOrd)(Record_Unsafe.unsafeGet(key)(ra))(Record_Unsafe.unsafeGet(key)(rb));
              var $49 = Data_Eq.notEq(Data_Ordering.eqOrdering)(left)(Data_Ordering.EQ.value);

              if ($49) {
                return left;
              }

              ;
              return compareRecord(dictOrdRecord)(Type_Data_RowList.RLProxy.value)(ra)(rb);
            };
          };
        });
      };
    };
  };
};

var clamp = function clamp(dictOrd) {
  return function (low) {
    return function (hi) {
      return function (x) {
        return min(dictOrd)(hi)(max(dictOrd)(low)(x));
      };
    };
  };
};

var between = function between(dictOrd) {
  return function (low) {
    return function (hi) {
      return function (x) {
        if (lessThan(dictOrd)(x)(low)) {
          return false;
        }

        ;

        if (greaterThan(dictOrd)(x)(hi)) {
          return false;
        }

        ;
        return true;
      };
    };
  };
};

var abs = function abs(dictOrd) {
  return function (dictRing) {
    return function (x) {
      var $53 = greaterThanOrEq(dictOrd)(x)(Data_Semiring.zero(dictRing.Semiring0()));

      if ($53) {
        return x;
      }

      ;
      return Data_Ring.negate(dictRing)(x);
    };
  };
};

module.exports = {
  Ord: Ord,
  compare: compare,
  Ord1: Ord1,
  compare1: compare1,
  lessThan: lessThan,
  lessThanOrEq: lessThanOrEq,
  greaterThan: greaterThan,
  greaterThanOrEq: greaterThanOrEq,
  comparing: comparing,
  min: min,
  max: max,
  clamp: clamp,
  between: between,
  abs: abs,
  signum: signum,
  OrdRecord: OrdRecord,
  compareRecord: compareRecord,
  ordBoolean: ordBoolean,
  ordInt: ordInt,
  ordNumber: ordNumber,
  ordString: ordString,
  ordChar: ordChar,
  ordUnit: ordUnit,
  ordVoid: ordVoid,
  ordArray: ordArray,
  ordOrdering: ordOrdering,
  ord1Array: ord1Array,
  ordRecordNil: ordRecordNil,
  ordRecordCons: ordRecordCons,
  ordRecord: ordRecord
};
},{"./foreign.js":"output/Data.Ord/foreign.js","../Data.Eq/index.js":"output/Data.Eq/index.js","../Data.Ordering/index.js":"output/Data.Ordering/index.js","../Data.Ring/index.js":"output/Data.Ring/index.js","../Data.Semiring/index.js":"output/Data.Semiring/index.js","../Data.Symbol/index.js":"output/Data.Symbol/index.js","../Record.Unsafe/index.js":"output/Record.Unsafe/index.js","../Type.Data.RowList/index.js":"output/Type.Data.RowList/index.js"}],"output/Data.Bounded/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var $foreign = require("./foreign.js");

var Data_Ord = require("../Data.Ord/index.js");

var Data_Ordering = require("../Data.Ordering/index.js");

var Data_Unit = require("../Data.Unit/index.js");

var Bounded = function Bounded(Ord0, bottom, top) {
  this.Ord0 = Ord0;
  this.bottom = bottom;
  this.top = top;
};

var top = function top(dict) {
  return dict.top;
};

var boundedUnit = new Bounded(function () {
  return Data_Ord.ordUnit;
}, Data_Unit.unit, Data_Unit.unit);
var boundedOrdering = new Bounded(function () {
  return Data_Ord.ordOrdering;
}, Data_Ordering.LT.value, Data_Ordering.GT.value);
var boundedNumber = new Bounded(function () {
  return Data_Ord.ordNumber;
}, $foreign.bottomNumber, $foreign.topNumber);
var boundedInt = new Bounded(function () {
  return Data_Ord.ordInt;
}, $foreign.bottomInt, $foreign.topInt);
var boundedChar = new Bounded(function () {
  return Data_Ord.ordChar;
}, $foreign.bottomChar, $foreign.topChar);
var boundedBoolean = new Bounded(function () {
  return Data_Ord.ordBoolean;
}, false, true);

var bottom = function bottom(dict) {
  return dict.bottom;
};

module.exports = {
  Bounded: Bounded,
  bottom: bottom,
  top: top,
  boundedBoolean: boundedBoolean,
  boundedInt: boundedInt,
  boundedChar: boundedChar,
  boundedOrdering: boundedOrdering,
  boundedUnit: boundedUnit,
  boundedNumber: boundedNumber
};
},{"./foreign.js":"output/Data.Bounded/foreign.js","../Data.Ord/index.js":"output/Data.Ord/index.js","../Data.Ordering/index.js":"output/Data.Ordering/index.js","../Data.Unit/index.js":"output/Data.Unit/index.js"}],"output/Data.Functor.Invariant/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var Data_Functor = require("../Data.Functor/index.js");

var Invariant = function Invariant(imap) {
  this.imap = imap;
};

var invariantMultiplicative = new Invariant(function (f) {
  return function (v) {
    return function (v1) {
      return f(v1);
    };
  };
});
var invariantEndo = new Invariant(function (ab) {
  return function (ba) {
    return function (v) {
      return function ($31) {
        return ab(v(ba($31)));
      };
    };
  };
});
var invariantDual = new Invariant(function (f) {
  return function (v) {
    return function (v1) {
      return f(v1);
    };
  };
});
var invariantDisj = new Invariant(function (f) {
  return function (v) {
    return function (v1) {
      return f(v1);
    };
  };
});
var invariantConj = new Invariant(function (f) {
  return function (v) {
    return function (v1) {
      return f(v1);
    };
  };
});
var invariantAdditive = new Invariant(function (f) {
  return function (v) {
    return function (v1) {
      return f(v1);
    };
  };
});

var imapF = function imapF(dictFunctor) {
  return function (f) {
    return function (v) {
      return Data_Functor.map(dictFunctor)(f);
    };
  };
};

var invariantArray = new Invariant(imapF(Data_Functor.functorArray));
var invariantFn = new Invariant(imapF(Data_Functor.functorFn));

var imap = function imap(dict) {
  return dict.imap;
};

module.exports = {
  imap: imap,
  Invariant: Invariant,
  imapF: imapF,
  invariantFn: invariantFn,
  invariantArray: invariantArray,
  invariantAdditive: invariantAdditive,
  invariantConj: invariantConj,
  invariantDisj: invariantDisj,
  invariantDual: invariantDual,
  invariantEndo: invariantEndo,
  invariantMultiplicative: invariantMultiplicative
};
},{"../Data.Functor/index.js":"output/Data.Functor/index.js"}],"output/Data.EuclideanRing/foreign.js":[function(require,module,exports) {
"use strict";

exports.intDegree = function (x) {
  return Math.min(Math.abs(x), 2147483647);
}; // See the Euclidean definition in
// https://en.m.wikipedia.org/wiki/Modulo_operation.


exports.intDiv = function (x) {
  return function (y) {
    if (y === 0) return 0;
    return y > 0 ? Math.floor(x / y) : -Math.floor(x / -y);
  };
};

exports.intMod = function (x) {
  return function (y) {
    if (y === 0) return 0;
    var yy = Math.abs(y);
    return (x % yy + yy) % yy;
  };
};

exports.numDiv = function (n1) {
  return function (n2) {
    return n1 / n2;
  };
};
},{}],"output/Data.CommutativeRing/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var Data_Ring = require("../Data.Ring/index.js");

var CommutativeRingRecord = function CommutativeRingRecord(RingRecord0) {
  this.RingRecord0 = RingRecord0;
};

var CommutativeRing = function CommutativeRing(Ring0) {
  this.Ring0 = Ring0;
};

var commutativeRingUnit = new CommutativeRing(function () {
  return Data_Ring.ringUnit;
});
var commutativeRingRecordNil = new CommutativeRingRecord(function () {
  return Data_Ring.ringRecordNil;
});

var commutativeRingRecordCons = function commutativeRingRecordCons(dictIsSymbol) {
  return function (dictCons) {
    return function (dictCommutativeRingRecord) {
      return function (dictCommutativeRing) {
        return new CommutativeRingRecord(function () {
          return Data_Ring.ringRecordCons(dictIsSymbol)()(dictCommutativeRingRecord.RingRecord0())(dictCommutativeRing.Ring0());
        });
      };
    };
  };
};

var commutativeRingRecord = function commutativeRingRecord(dictRowToList) {
  return function (dictCommutativeRingRecord) {
    return new CommutativeRing(function () {
      return Data_Ring.ringRecord()(dictCommutativeRingRecord.RingRecord0());
    });
  };
};

var commutativeRingNumber = new CommutativeRing(function () {
  return Data_Ring.ringNumber;
});
var commutativeRingInt = new CommutativeRing(function () {
  return Data_Ring.ringInt;
});

var commutativeRingFn = function commutativeRingFn(dictCommutativeRing) {
  return new CommutativeRing(function () {
    return Data_Ring.ringFn(dictCommutativeRing.Ring0());
  });
};

module.exports = {
  CommutativeRing: CommutativeRing,
  CommutativeRingRecord: CommutativeRingRecord,
  commutativeRingInt: commutativeRingInt,
  commutativeRingNumber: commutativeRingNumber,
  commutativeRingUnit: commutativeRingUnit,
  commutativeRingFn: commutativeRingFn,
  commutativeRingRecord: commutativeRingRecord,
  commutativeRingRecordNil: commutativeRingRecordNil,
  commutativeRingRecordCons: commutativeRingRecordCons
};
},{"../Data.Ring/index.js":"output/Data.Ring/index.js"}],"output/Data.EuclideanRing/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var $foreign = require("./foreign.js");

var Data_CommutativeRing = require("../Data.CommutativeRing/index.js");

var Data_Eq = require("../Data.Eq/index.js");

var Data_Semiring = require("../Data.Semiring/index.js");

var EuclideanRing = function EuclideanRing(CommutativeRing0, degree, div, mod) {
  this.CommutativeRing0 = CommutativeRing0;
  this.degree = degree;
  this.div = div;
  this.mod = mod;
};

var mod = function mod(dict) {
  return dict.mod;
};

var gcd = function gcd($copy_dictEq) {
  return function ($copy_dictEuclideanRing) {
    return function ($copy_a) {
      return function ($copy_b) {
        var $tco_var_dictEq = $copy_dictEq;
        var $tco_var_dictEuclideanRing = $copy_dictEuclideanRing;
        var $tco_var_a = $copy_a;
        var $tco_done = false;
        var $tco_result;

        function $tco_loop(dictEq, dictEuclideanRing, a, b) {
          var $7 = Data_Eq.eq(dictEq)(b)(Data_Semiring.zero(dictEuclideanRing.CommutativeRing0().Ring0().Semiring0()));

          if ($7) {
            $tco_done = true;
            return a;
          }

          ;
          $tco_var_dictEq = dictEq;
          $tco_var_dictEuclideanRing = dictEuclideanRing;
          $tco_var_a = b;
          $copy_b = mod(dictEuclideanRing)(a)(b);
          return;
        }

        ;

        while (!$tco_done) {
          $tco_result = $tco_loop($tco_var_dictEq, $tco_var_dictEuclideanRing, $tco_var_a, $copy_b);
        }

        ;
        return $tco_result;
      };
    };
  };
};

var euclideanRingNumber = new EuclideanRing(function () {
  return Data_CommutativeRing.commutativeRingNumber;
}, function (v) {
  return 1;
}, $foreign.numDiv, function (v) {
  return function (v1) {
    return 0.0;
  };
});
var euclideanRingInt = new EuclideanRing(function () {
  return Data_CommutativeRing.commutativeRingInt;
}, $foreign.intDegree, $foreign.intDiv, $foreign.intMod);

var div = function div(dict) {
  return dict.div;
};

var lcm = function lcm(dictEq) {
  return function (dictEuclideanRing) {
    return function (a) {
      return function (b) {
        var $8 = Data_Eq.eq(dictEq)(a)(Data_Semiring.zero(dictEuclideanRing.CommutativeRing0().Ring0().Semiring0())) || Data_Eq.eq(dictEq)(b)(Data_Semiring.zero(dictEuclideanRing.CommutativeRing0().Ring0().Semiring0()));

        if ($8) {
          return Data_Semiring.zero(dictEuclideanRing.CommutativeRing0().Ring0().Semiring0());
        }

        ;
        return div(dictEuclideanRing)(Data_Semiring.mul(dictEuclideanRing.CommutativeRing0().Ring0().Semiring0())(a)(b))(gcd(dictEq)(dictEuclideanRing)(a)(b));
      };
    };
  };
};

var degree = function degree(dict) {
  return dict.degree;
};

module.exports = {
  EuclideanRing: EuclideanRing,
  degree: degree,
  div: div,
  mod: mod,
  gcd: gcd,
  lcm: lcm,
  euclideanRingInt: euclideanRingInt,
  euclideanRingNumber: euclideanRingNumber
};
},{"./foreign.js":"output/Data.EuclideanRing/foreign.js","../Data.CommutativeRing/index.js":"output/Data.CommutativeRing/index.js","../Data.Eq/index.js":"output/Data.Eq/index.js","../Data.Semiring/index.js":"output/Data.Semiring/index.js"}],"output/Data.Monoid/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var Data_Boolean = require("../Data.Boolean/index.js");

var Data_EuclideanRing = require("../Data.EuclideanRing/index.js");

var Data_Ordering = require("../Data.Ordering/index.js");

var Data_Semigroup = require("../Data.Semigroup/index.js");

var Data_Symbol = require("../Data.Symbol/index.js");

var Data_Unit = require("../Data.Unit/index.js");

var Record_Unsafe = require("../Record.Unsafe/index.js");

var Type_Data_RowList = require("../Type.Data.RowList/index.js");

var MonoidRecord = function MonoidRecord(SemigroupRecord0, memptyRecord) {
  this.SemigroupRecord0 = SemigroupRecord0;
  this.memptyRecord = memptyRecord;
};

var Monoid = function Monoid(Semigroup0, mempty) {
  this.Semigroup0 = Semigroup0;
  this.mempty = mempty;
};

var monoidUnit = new Monoid(function () {
  return Data_Semigroup.semigroupUnit;
}, Data_Unit.unit);
var monoidString = new Monoid(function () {
  return Data_Semigroup.semigroupString;
}, "");
var monoidRecordNil = new MonoidRecord(function () {
  return Data_Semigroup.semigroupRecordNil;
}, function (v) {
  return {};
});
var monoidOrdering = new Monoid(function () {
  return Data_Ordering.semigroupOrdering;
}, Data_Ordering.EQ.value);
var monoidArray = new Monoid(function () {
  return Data_Semigroup.semigroupArray;
}, []);

var memptyRecord = function memptyRecord(dict) {
  return dict.memptyRecord;
};

var monoidRecord = function monoidRecord(dictRowToList) {
  return function (dictMonoidRecord) {
    return new Monoid(function () {
      return Data_Semigroup.semigroupRecord()(dictMonoidRecord.SemigroupRecord0());
    }, memptyRecord(dictMonoidRecord)(Type_Data_RowList.RLProxy.value));
  };
};

var mempty = function mempty(dict) {
  return dict.mempty;
};

var monoidFn = function monoidFn(dictMonoid) {
  return new Monoid(function () {
    return Data_Semigroup.semigroupFn(dictMonoid.Semigroup0());
  }, function (v) {
    return mempty(dictMonoid);
  });
};

var monoidRecordCons = function monoidRecordCons(dictIsSymbol) {
  return function (dictMonoid) {
    return function (dictCons) {
      return function (dictMonoidRecord) {
        return new MonoidRecord(function () {
          return Data_Semigroup.semigroupRecordCons(dictIsSymbol)()(dictMonoidRecord.SemigroupRecord0())(dictMonoid.Semigroup0());
        }, function (v) {
          var tail = memptyRecord(dictMonoidRecord)(Type_Data_RowList.RLProxy.value);
          var key = Data_Symbol.reflectSymbol(dictIsSymbol)(Data_Symbol.SProxy.value);
          var insert = Record_Unsafe.unsafeSet(key);
          return insert(mempty(dictMonoid))(tail);
        });
      };
    };
  };
};

var power = function power(dictMonoid) {
  return function (x) {
    var go = function go(p) {
      if (p <= 0) {
        return mempty(dictMonoid);
      }

      ;

      if (p === 1) {
        return x;
      }

      ;

      if (Data_EuclideanRing.mod(Data_EuclideanRing.euclideanRingInt)(p)(2) === 0) {
        var x$prime = go(Data_EuclideanRing.div(Data_EuclideanRing.euclideanRingInt)(p)(2));
        return Data_Semigroup.append(dictMonoid.Semigroup0())(x$prime)(x$prime);
      }

      ;

      if (Data_Boolean.otherwise) {
        var x$prime = go(Data_EuclideanRing.div(Data_EuclideanRing.euclideanRingInt)(p)(2));
        return Data_Semigroup.append(dictMonoid.Semigroup0())(x$prime)(Data_Semigroup.append(dictMonoid.Semigroup0())(x$prime)(x));
      }

      ;
      throw new Error("Failed pattern match at Data.Monoid (line 65, column 3 - line 65, column 17): " + [p.constructor.name]);
    };

    return go;
  };
};

var guard = function guard(dictMonoid) {
  return function (v) {
    return function (v1) {
      if (v) {
        return v1;
      }

      ;

      if (!v) {
        return mempty(dictMonoid);
      }

      ;
      throw new Error("Failed pattern match at Data.Monoid (line 73, column 1 - line 73, column 49): " + [v.constructor.name, v1.constructor.name]);
    };
  };
};

module.exports = {
  Monoid: Monoid,
  mempty: mempty,
  power: power,
  guard: guard,
  MonoidRecord: MonoidRecord,
  memptyRecord: memptyRecord,
  monoidUnit: monoidUnit,
  monoidOrdering: monoidOrdering,
  monoidFn: monoidFn,
  monoidString: monoidString,
  monoidArray: monoidArray,
  monoidRecord: monoidRecord,
  monoidRecordNil: monoidRecordNil,
  monoidRecordCons: monoidRecordCons
};
},{"../Data.Boolean/index.js":"output/Data.Boolean/index.js","../Data.EuclideanRing/index.js":"output/Data.EuclideanRing/index.js","../Data.Ordering/index.js":"output/Data.Ordering/index.js","../Data.Semigroup/index.js":"output/Data.Semigroup/index.js","../Data.Symbol/index.js":"output/Data.Symbol/index.js","../Data.Unit/index.js":"output/Data.Unit/index.js","../Record.Unsafe/index.js":"output/Record.Unsafe/index.js","../Type.Data.RowList/index.js":"output/Type.Data.RowList/index.js"}],"output/Data.Maybe/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var Control_Alt = require("../Control.Alt/index.js");

var Control_Alternative = require("../Control.Alternative/index.js");

var Control_Applicative = require("../Control.Applicative/index.js");

var Control_Apply = require("../Control.Apply/index.js");

var Control_Bind = require("../Control.Bind/index.js");

var Control_Category = require("../Control.Category/index.js");

var Control_Extend = require("../Control.Extend/index.js");

var Control_Monad = require("../Control.Monad/index.js");

var Control_MonadZero = require("../Control.MonadZero/index.js");

var Control_Plus = require("../Control.Plus/index.js");

var Data_Bounded = require("../Data.Bounded/index.js");

var Data_Eq = require("../Data.Eq/index.js");

var Data_Function = require("../Data.Function/index.js");

var Data_Functor = require("../Data.Functor/index.js");

var Data_Functor_Invariant = require("../Data.Functor.Invariant/index.js");

var Data_Monoid = require("../Data.Monoid/index.js");

var Data_Ord = require("../Data.Ord/index.js");

var Data_Ordering = require("../Data.Ordering/index.js");

var Data_Semigroup = require("../Data.Semigroup/index.js");

var Data_Show = require("../Data.Show/index.js");

var Data_Unit = require("../Data.Unit/index.js");

var Nothing = function () {
  function Nothing() {}

  ;
  Nothing.value = new Nothing();
  return Nothing;
}();

var Just = function () {
  function Just(value0) {
    this.value0 = value0;
  }

  ;

  Just.create = function (value0) {
    return new Just(value0);
  };

  return Just;
}();

var showMaybe = function showMaybe(dictShow) {
  return new Data_Show.Show(function (v) {
    if (v instanceof Just) {
      return "(Just " + (Data_Show.show(dictShow)(v.value0) + ")");
    }

    ;

    if (v instanceof Nothing) {
      return "Nothing";
    }

    ;
    throw new Error("Failed pattern match at Data.Maybe (line 205, column 1 - line 207, column 28): " + [v.constructor.name]);
  });
};

var semigroupMaybe = function semigroupMaybe(dictSemigroup) {
  return new Data_Semigroup.Semigroup(function (v) {
    return function (v1) {
      if (v instanceof Nothing) {
        return v1;
      }

      ;

      if (v1 instanceof Nothing) {
        return v;
      }

      ;

      if (v instanceof Just && v1 instanceof Just) {
        return new Just(Data_Semigroup.append(dictSemigroup)(v.value0)(v1.value0));
      }

      ;
      throw new Error("Failed pattern match at Data.Maybe (line 174, column 1 - line 177, column 43): " + [v.constructor.name, v1.constructor.name]);
    };
  });
};

var optional = function optional(dictAlternative) {
  return function (a) {
    return Control_Alt.alt(dictAlternative.Plus1().Alt0())(Data_Functor.map(dictAlternative.Plus1().Alt0().Functor0())(Just.create)(a))(Control_Applicative.pure(dictAlternative.Applicative0())(Nothing.value));
  };
};

var monoidMaybe = function monoidMaybe(dictSemigroup) {
  return new Data_Monoid.Monoid(function () {
    return semigroupMaybe(dictSemigroup);
  }, Nothing.value);
};

var maybe$prime = function maybe$prime(v) {
  return function (v1) {
    return function (v2) {
      if (v2 instanceof Nothing) {
        return v(Data_Unit.unit);
      }

      ;

      if (v2 instanceof Just) {
        return v1(v2.value0);
      }

      ;
      throw new Error("Failed pattern match at Data.Maybe (line 230, column 1 - line 230, column 62): " + [v.constructor.name, v1.constructor.name, v2.constructor.name]);
    };
  };
};

var maybe = function maybe(v) {
  return function (v1) {
    return function (v2) {
      if (v2 instanceof Nothing) {
        return v;
      }

      ;

      if (v2 instanceof Just) {
        return v1(v2.value0);
      }

      ;
      throw new Error("Failed pattern match at Data.Maybe (line 217, column 1 - line 217, column 51): " + [v.constructor.name, v1.constructor.name, v2.constructor.name]);
    };
  };
};

var isNothing = maybe(true)(Data_Function["const"](false));
var isJust = maybe(false)(Data_Function["const"](true));
var functorMaybe = new Data_Functor.Functor(function (v) {
  return function (v1) {
    if (v1 instanceof Just) {
      return new Just(v(v1.value0));
    }

    ;
    return Nothing.value;
  };
});
var invariantMaybe = new Data_Functor_Invariant.Invariant(Data_Functor_Invariant.imapF(functorMaybe));

var fromMaybe$prime = function fromMaybe$prime(a) {
  return maybe$prime(a)(Control_Category.identity(Control_Category.categoryFn));
};

var fromMaybe = function fromMaybe(a) {
  return maybe(a)(Control_Category.identity(Control_Category.categoryFn));
};

var fromJust = function fromJust(dictPartial) {
  return function (v) {
    if (v instanceof Just) {
      return v.value0;
    }

    ;
    throw new Error("Failed pattern match at Data.Maybe (line 268, column 1 - line 268, column 46): " + [v.constructor.name]);
  };
};

var extendMaybe = new Control_Extend.Extend(function () {
  return functorMaybe;
}, function (v) {
  return function (v1) {
    if (v1 instanceof Nothing) {
      return Nothing.value;
    }

    ;
    return new Just(v(v1));
  };
});

var eqMaybe = function eqMaybe(dictEq) {
  return new Data_Eq.Eq(function (x) {
    return function (y) {
      if (x instanceof Nothing && y instanceof Nothing) {
        return true;
      }

      ;

      if (x instanceof Just && y instanceof Just) {
        return Data_Eq.eq(dictEq)(x.value0)(y.value0);
      }

      ;
      return false;
    };
  });
};

var ordMaybe = function ordMaybe(dictOrd) {
  return new Data_Ord.Ord(function () {
    return eqMaybe(dictOrd.Eq0());
  }, function (x) {
    return function (y) {
      if (x instanceof Nothing && y instanceof Nothing) {
        return Data_Ordering.EQ.value;
      }

      ;

      if (x instanceof Nothing) {
        return Data_Ordering.LT.value;
      }

      ;

      if (y instanceof Nothing) {
        return Data_Ordering.GT.value;
      }

      ;

      if (x instanceof Just && y instanceof Just) {
        return Data_Ord.compare(dictOrd)(x.value0)(y.value0);
      }

      ;
      throw new Error("Failed pattern match at Data.Maybe (line 194, column 1 - line 194, column 51): " + [x.constructor.name, y.constructor.name]);
    };
  });
};

var eq1Maybe = new Data_Eq.Eq1(function (dictEq) {
  return Data_Eq.eq(eqMaybe(dictEq));
});
var ord1Maybe = new Data_Ord.Ord1(function () {
  return eq1Maybe;
}, function (dictOrd) {
  return Data_Ord.compare(ordMaybe(dictOrd));
});

var boundedMaybe = function boundedMaybe(dictBounded) {
  return new Data_Bounded.Bounded(function () {
    return ordMaybe(dictBounded.Ord0());
  }, Nothing.value, new Just(Data_Bounded.top(dictBounded)));
};

var applyMaybe = new Control_Apply.Apply(function () {
  return functorMaybe;
}, function (v) {
  return function (v1) {
    if (v instanceof Just) {
      return Data_Functor.map(functorMaybe)(v.value0)(v1);
    }

    ;

    if (v instanceof Nothing) {
      return Nothing.value;
    }

    ;
    throw new Error("Failed pattern match at Data.Maybe (line 67, column 1 - line 69, column 30): " + [v.constructor.name, v1.constructor.name]);
  };
});
var bindMaybe = new Control_Bind.Bind(function () {
  return applyMaybe;
}, function (v) {
  return function (v1) {
    if (v instanceof Just) {
      return v1(v.value0);
    }

    ;

    if (v instanceof Nothing) {
      return Nothing.value;
    }

    ;
    throw new Error("Failed pattern match at Data.Maybe (line 125, column 1 - line 127, column 28): " + [v.constructor.name, v1.constructor.name]);
  };
});
var applicativeMaybe = new Control_Applicative.Applicative(function () {
  return applyMaybe;
}, Just.create);
var monadMaybe = new Control_Monad.Monad(function () {
  return applicativeMaybe;
}, function () {
  return bindMaybe;
});
var altMaybe = new Control_Alt.Alt(function () {
  return functorMaybe;
}, function (v) {
  return function (v1) {
    if (v instanceof Nothing) {
      return v1;
    }

    ;
    return v;
  };
});
var plusMaybe = new Control_Plus.Plus(function () {
  return altMaybe;
}, Nothing.value);
var alternativeMaybe = new Control_Alternative.Alternative(function () {
  return applicativeMaybe;
}, function () {
  return plusMaybe;
});
var monadZeroMaybe = new Control_MonadZero.MonadZero(function () {
  return alternativeMaybe;
}, function () {
  return monadMaybe;
});
module.exports = {
  Nothing: Nothing,
  Just: Just,
  maybe: maybe,
  "maybe'": maybe$prime,
  fromMaybe: fromMaybe,
  "fromMaybe'": fromMaybe$prime,
  isJust: isJust,
  isNothing: isNothing,
  fromJust: fromJust,
  optional: optional,
  functorMaybe: functorMaybe,
  applyMaybe: applyMaybe,
  applicativeMaybe: applicativeMaybe,
  altMaybe: altMaybe,
  plusMaybe: plusMaybe,
  alternativeMaybe: alternativeMaybe,
  bindMaybe: bindMaybe,
  monadMaybe: monadMaybe,
  monadZeroMaybe: monadZeroMaybe,
  extendMaybe: extendMaybe,
  invariantMaybe: invariantMaybe,
  semigroupMaybe: semigroupMaybe,
  monoidMaybe: monoidMaybe,
  eqMaybe: eqMaybe,
  eq1Maybe: eq1Maybe,
  ordMaybe: ordMaybe,
  ord1Maybe: ord1Maybe,
  boundedMaybe: boundedMaybe,
  showMaybe: showMaybe
};
},{"../Control.Alt/index.js":"output/Control.Alt/index.js","../Control.Alternative/index.js":"output/Control.Alternative/index.js","../Control.Applicative/index.js":"output/Control.Applicative/index.js","../Control.Apply/index.js":"output/Control.Apply/index.js","../Control.Bind/index.js":"output/Control.Bind/index.js","../Control.Category/index.js":"output/Control.Category/index.js","../Control.Extend/index.js":"output/Control.Extend/index.js","../Control.Monad/index.js":"output/Control.Monad/index.js","../Control.MonadZero/index.js":"output/Control.MonadZero/index.js","../Control.Plus/index.js":"output/Control.Plus/index.js","../Data.Bounded/index.js":"output/Data.Bounded/index.js","../Data.Eq/index.js":"output/Data.Eq/index.js","../Data.Function/index.js":"output/Data.Function/index.js","../Data.Functor/index.js":"output/Data.Functor/index.js","../Data.Functor.Invariant/index.js":"output/Data.Functor.Invariant/index.js","../Data.Monoid/index.js":"output/Data.Monoid/index.js","../Data.Ord/index.js":"output/Data.Ord/index.js","../Data.Ordering/index.js":"output/Data.Ordering/index.js","../Data.Semigroup/index.js":"output/Data.Semigroup/index.js","../Data.Show/index.js":"output/Data.Show/index.js","../Data.Unit/index.js":"output/Data.Unit/index.js"}],"output/Data.Monoid.Conj/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var Control_Applicative = require("../Control.Applicative/index.js");

var Control_Apply = require("../Control.Apply/index.js");

var Control_Bind = require("../Control.Bind/index.js");

var Control_Monad = require("../Control.Monad/index.js");

var Data_Eq = require("../Data.Eq/index.js");

var Data_Functor = require("../Data.Functor/index.js");

var Data_HeytingAlgebra = require("../Data.HeytingAlgebra/index.js");

var Data_Monoid = require("../Data.Monoid/index.js");

var Data_Ord = require("../Data.Ord/index.js");

var Data_Semigroup = require("../Data.Semigroup/index.js");

var Data_Semiring = require("../Data.Semiring/index.js");

var Data_Show = require("../Data.Show/index.js");

var Conj = function Conj(x) {
  return x;
};

var showConj = function showConj(dictShow) {
  return new Data_Show.Show(function (v) {
    return "(Conj " + (Data_Show.show(dictShow)(v) + ")");
  });
};

var semiringConj = function semiringConj(dictHeytingAlgebra) {
  return new Data_Semiring.Semiring(function (v) {
    return function (v1) {
      return Data_HeytingAlgebra.conj(dictHeytingAlgebra)(v)(v1);
    };
  }, function (v) {
    return function (v1) {
      return Data_HeytingAlgebra.disj(dictHeytingAlgebra)(v)(v1);
    };
  }, Data_HeytingAlgebra.ff(dictHeytingAlgebra), Data_HeytingAlgebra.tt(dictHeytingAlgebra));
};

var semigroupConj = function semigroupConj(dictHeytingAlgebra) {
  return new Data_Semigroup.Semigroup(function (v) {
    return function (v1) {
      return Data_HeytingAlgebra.conj(dictHeytingAlgebra)(v)(v1);
    };
  });
};

var ordConj = function ordConj(dictOrd) {
  return dictOrd;
};

var monoidConj = function monoidConj(dictHeytingAlgebra) {
  return new Data_Monoid.Monoid(function () {
    return semigroupConj(dictHeytingAlgebra);
  }, Data_HeytingAlgebra.tt(dictHeytingAlgebra));
};

var functorConj = new Data_Functor.Functor(function (f) {
  return function (m) {
    return f(m);
  };
});

var eqConj = function eqConj(dictEq) {
  return dictEq;
};

var eq1Conj = new Data_Eq.Eq1(function (dictEq) {
  return Data_Eq.eq(eqConj(dictEq));
});
var ord1Conj = new Data_Ord.Ord1(function () {
  return eq1Conj;
}, function (dictOrd) {
  return Data_Ord.compare(ordConj(dictOrd));
});

var boundedConj = function boundedConj(dictBounded) {
  return dictBounded;
};

var applyConj = new Control_Apply.Apply(function () {
  return functorConj;
}, function (v) {
  return function (v1) {
    return v(v1);
  };
});
var bindConj = new Control_Bind.Bind(function () {
  return applyConj;
}, function (v) {
  return function (f) {
    return f(v);
  };
});
var applicativeConj = new Control_Applicative.Applicative(function () {
  return applyConj;
}, Conj);
var monadConj = new Control_Monad.Monad(function () {
  return applicativeConj;
}, function () {
  return bindConj;
});
module.exports = {
  Conj: Conj,
  eqConj: eqConj,
  eq1Conj: eq1Conj,
  ordConj: ordConj,
  ord1Conj: ord1Conj,
  boundedConj: boundedConj,
  showConj: showConj,
  functorConj: functorConj,
  applyConj: applyConj,
  applicativeConj: applicativeConj,
  bindConj: bindConj,
  monadConj: monadConj,
  semigroupConj: semigroupConj,
  monoidConj: monoidConj,
  semiringConj: semiringConj
};
},{"../Control.Applicative/index.js":"output/Control.Applicative/index.js","../Control.Apply/index.js":"output/Control.Apply/index.js","../Control.Bind/index.js":"output/Control.Bind/index.js","../Control.Monad/index.js":"output/Control.Monad/index.js","../Data.Eq/index.js":"output/Data.Eq/index.js","../Data.Functor/index.js":"output/Data.Functor/index.js","../Data.HeytingAlgebra/index.js":"output/Data.HeytingAlgebra/index.js","../Data.Monoid/index.js":"output/Data.Monoid/index.js","../Data.Ord/index.js":"output/Data.Ord/index.js","../Data.Semigroup/index.js":"output/Data.Semigroup/index.js","../Data.Semiring/index.js":"output/Data.Semiring/index.js","../Data.Show/index.js":"output/Data.Show/index.js"}],"output/Data.Monoid.Disj/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var Control_Applicative = require("../Control.Applicative/index.js");

var Control_Apply = require("../Control.Apply/index.js");

var Control_Bind = require("../Control.Bind/index.js");

var Control_Monad = require("../Control.Monad/index.js");

var Data_Eq = require("../Data.Eq/index.js");

var Data_Functor = require("../Data.Functor/index.js");

var Data_HeytingAlgebra = require("../Data.HeytingAlgebra/index.js");

var Data_Monoid = require("../Data.Monoid/index.js");

var Data_Ord = require("../Data.Ord/index.js");

var Data_Semigroup = require("../Data.Semigroup/index.js");

var Data_Semiring = require("../Data.Semiring/index.js");

var Data_Show = require("../Data.Show/index.js");

var Disj = function Disj(x) {
  return x;
};

var showDisj = function showDisj(dictShow) {
  return new Data_Show.Show(function (v) {
    return "(Disj " + (Data_Show.show(dictShow)(v) + ")");
  });
};

var semiringDisj = function semiringDisj(dictHeytingAlgebra) {
  return new Data_Semiring.Semiring(function (v) {
    return function (v1) {
      return Data_HeytingAlgebra.disj(dictHeytingAlgebra)(v)(v1);
    };
  }, function (v) {
    return function (v1) {
      return Data_HeytingAlgebra.conj(dictHeytingAlgebra)(v)(v1);
    };
  }, Data_HeytingAlgebra.tt(dictHeytingAlgebra), Data_HeytingAlgebra.ff(dictHeytingAlgebra));
};

var semigroupDisj = function semigroupDisj(dictHeytingAlgebra) {
  return new Data_Semigroup.Semigroup(function (v) {
    return function (v1) {
      return Data_HeytingAlgebra.disj(dictHeytingAlgebra)(v)(v1);
    };
  });
};

var ordDisj = function ordDisj(dictOrd) {
  return dictOrd;
};

var monoidDisj = function monoidDisj(dictHeytingAlgebra) {
  return new Data_Monoid.Monoid(function () {
    return semigroupDisj(dictHeytingAlgebra);
  }, Data_HeytingAlgebra.ff(dictHeytingAlgebra));
};

var functorDisj = new Data_Functor.Functor(function (f) {
  return function (m) {
    return f(m);
  };
});

var eqDisj = function eqDisj(dictEq) {
  return dictEq;
};

var eq1Disj = new Data_Eq.Eq1(function (dictEq) {
  return Data_Eq.eq(eqDisj(dictEq));
});
var ord1Disj = new Data_Ord.Ord1(function () {
  return eq1Disj;
}, function (dictOrd) {
  return Data_Ord.compare(ordDisj(dictOrd));
});

var boundedDisj = function boundedDisj(dictBounded) {
  return dictBounded;
};

var applyDisj = new Control_Apply.Apply(function () {
  return functorDisj;
}, function (v) {
  return function (v1) {
    return v(v1);
  };
});
var bindDisj = new Control_Bind.Bind(function () {
  return applyDisj;
}, function (v) {
  return function (f) {
    return f(v);
  };
});
var applicativeDisj = new Control_Applicative.Applicative(function () {
  return applyDisj;
}, Disj);
var monadDisj = new Control_Monad.Monad(function () {
  return applicativeDisj;
}, function () {
  return bindDisj;
});
module.exports = {
  Disj: Disj,
  eqDisj: eqDisj,
  eq1Disj: eq1Disj,
  ordDisj: ordDisj,
  ord1Disj: ord1Disj,
  boundedDisj: boundedDisj,
  showDisj: showDisj,
  functorDisj: functorDisj,
  applyDisj: applyDisj,
  applicativeDisj: applicativeDisj,
  bindDisj: bindDisj,
  monadDisj: monadDisj,
  semigroupDisj: semigroupDisj,
  monoidDisj: monoidDisj,
  semiringDisj: semiringDisj
};
},{"../Control.Applicative/index.js":"output/Control.Applicative/index.js","../Control.Apply/index.js":"output/Control.Apply/index.js","../Control.Bind/index.js":"output/Control.Bind/index.js","../Control.Monad/index.js":"output/Control.Monad/index.js","../Data.Eq/index.js":"output/Data.Eq/index.js","../Data.Functor/index.js":"output/Data.Functor/index.js","../Data.HeytingAlgebra/index.js":"output/Data.HeytingAlgebra/index.js","../Data.Monoid/index.js":"output/Data.Monoid/index.js","../Data.Ord/index.js":"output/Data.Ord/index.js","../Data.Semigroup/index.js":"output/Data.Semigroup/index.js","../Data.Semiring/index.js":"output/Data.Semiring/index.js","../Data.Show/index.js":"output/Data.Show/index.js"}],"output/Data.Monoid.Dual/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var Control_Applicative = require("../Control.Applicative/index.js");

var Control_Apply = require("../Control.Apply/index.js");

var Control_Bind = require("../Control.Bind/index.js");

var Control_Monad = require("../Control.Monad/index.js");

var Data_Eq = require("../Data.Eq/index.js");

var Data_Functor = require("../Data.Functor/index.js");

var Data_Monoid = require("../Data.Monoid/index.js");

var Data_Ord = require("../Data.Ord/index.js");

var Data_Semigroup = require("../Data.Semigroup/index.js");

var Data_Show = require("../Data.Show/index.js");

var Dual = function Dual(x) {
  return x;
};

var showDual = function showDual(dictShow) {
  return new Data_Show.Show(function (v) {
    return "(Dual " + (Data_Show.show(dictShow)(v) + ")");
  });
};

var semigroupDual = function semigroupDual(dictSemigroup) {
  return new Data_Semigroup.Semigroup(function (v) {
    return function (v1) {
      return Data_Semigroup.append(dictSemigroup)(v1)(v);
    };
  });
};

var ordDual = function ordDual(dictOrd) {
  return dictOrd;
};

var monoidDual = function monoidDual(dictMonoid) {
  return new Data_Monoid.Monoid(function () {
    return semigroupDual(dictMonoid.Semigroup0());
  }, Data_Monoid.mempty(dictMonoid));
};

var functorDual = new Data_Functor.Functor(function (f) {
  return function (m) {
    return f(m);
  };
});

var eqDual = function eqDual(dictEq) {
  return dictEq;
};

var eq1Dual = new Data_Eq.Eq1(function (dictEq) {
  return Data_Eq.eq(eqDual(dictEq));
});
var ord1Dual = new Data_Ord.Ord1(function () {
  return eq1Dual;
}, function (dictOrd) {
  return Data_Ord.compare(ordDual(dictOrd));
});

var boundedDual = function boundedDual(dictBounded) {
  return dictBounded;
};

var applyDual = new Control_Apply.Apply(function () {
  return functorDual;
}, function (v) {
  return function (v1) {
    return v(v1);
  };
});
var bindDual = new Control_Bind.Bind(function () {
  return applyDual;
}, function (v) {
  return function (f) {
    return f(v);
  };
});
var applicativeDual = new Control_Applicative.Applicative(function () {
  return applyDual;
}, Dual);
var monadDual = new Control_Monad.Monad(function () {
  return applicativeDual;
}, function () {
  return bindDual;
});
module.exports = {
  Dual: Dual,
  eqDual: eqDual,
  eq1Dual: eq1Dual,
  ordDual: ordDual,
  ord1Dual: ord1Dual,
  boundedDual: boundedDual,
  showDual: showDual,
  functorDual: functorDual,
  applyDual: applyDual,
  applicativeDual: applicativeDual,
  bindDual: bindDual,
  monadDual: monadDual,
  semigroupDual: semigroupDual,
  monoidDual: monoidDual
};
},{"../Control.Applicative/index.js":"output/Control.Applicative/index.js","../Control.Apply/index.js":"output/Control.Apply/index.js","../Control.Bind/index.js":"output/Control.Bind/index.js","../Control.Monad/index.js":"output/Control.Monad/index.js","../Data.Eq/index.js":"output/Data.Eq/index.js","../Data.Functor/index.js":"output/Data.Functor/index.js","../Data.Monoid/index.js":"output/Data.Monoid/index.js","../Data.Ord/index.js":"output/Data.Ord/index.js","../Data.Semigroup/index.js":"output/Data.Semigroup/index.js","../Data.Show/index.js":"output/Data.Show/index.js"}],"output/Data.Monoid.Endo/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var Control_Category = require("../Control.Category/index.js");

var Control_Semigroupoid = require("../Control.Semigroupoid/index.js");

var Data_Monoid = require("../Data.Monoid/index.js");

var Data_Semigroup = require("../Data.Semigroup/index.js");

var Data_Show = require("../Data.Show/index.js");

var Endo = function Endo(x) {
  return x;
};

var showEndo = function showEndo(dictShow) {
  return new Data_Show.Show(function (v) {
    return "(Endo " + (Data_Show.show(dictShow)(v) + ")");
  });
};

var semigroupEndo = function semigroupEndo(dictSemigroupoid) {
  return new Data_Semigroup.Semigroup(function (v) {
    return function (v1) {
      return Control_Semigroupoid.compose(dictSemigroupoid)(v)(v1);
    };
  });
};

var ordEndo = function ordEndo(dictOrd) {
  return dictOrd;
};

var monoidEndo = function monoidEndo(dictCategory) {
  return new Data_Monoid.Monoid(function () {
    return semigroupEndo(dictCategory.Semigroupoid0());
  }, Control_Category.identity(dictCategory));
};

var eqEndo = function eqEndo(dictEq) {
  return dictEq;
};

var boundedEndo = function boundedEndo(dictBounded) {
  return dictBounded;
};

module.exports = {
  Endo: Endo,
  eqEndo: eqEndo,
  ordEndo: ordEndo,
  boundedEndo: boundedEndo,
  showEndo: showEndo,
  semigroupEndo: semigroupEndo,
  monoidEndo: monoidEndo
};
},{"../Control.Category/index.js":"output/Control.Category/index.js","../Control.Semigroupoid/index.js":"output/Control.Semigroupoid/index.js","../Data.Monoid/index.js":"output/Data.Monoid/index.js","../Data.Semigroup/index.js":"output/Data.Semigroup/index.js","../Data.Show/index.js":"output/Data.Show/index.js"}],"output/Data.Monoid.Additive/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var Control_Applicative = require("../Control.Applicative/index.js");

var Control_Apply = require("../Control.Apply/index.js");

var Control_Bind = require("../Control.Bind/index.js");

var Control_Monad = require("../Control.Monad/index.js");

var Data_Eq = require("../Data.Eq/index.js");

var Data_Functor = require("../Data.Functor/index.js");

var Data_Monoid = require("../Data.Monoid/index.js");

var Data_Ord = require("../Data.Ord/index.js");

var Data_Semigroup = require("../Data.Semigroup/index.js");

var Data_Semiring = require("../Data.Semiring/index.js");

var Data_Show = require("../Data.Show/index.js");

var Additive = function Additive(x) {
  return x;
};

var showAdditive = function showAdditive(dictShow) {
  return new Data_Show.Show(function (v) {
    return "(Additive " + (Data_Show.show(dictShow)(v) + ")");
  });
};

var semigroupAdditive = function semigroupAdditive(dictSemiring) {
  return new Data_Semigroup.Semigroup(function (v) {
    return function (v1) {
      return Data_Semiring.add(dictSemiring)(v)(v1);
    };
  });
};

var ordAdditive = function ordAdditive(dictOrd) {
  return dictOrd;
};

var monoidAdditive = function monoidAdditive(dictSemiring) {
  return new Data_Monoid.Monoid(function () {
    return semigroupAdditive(dictSemiring);
  }, Data_Semiring.zero(dictSemiring));
};

var functorAdditive = new Data_Functor.Functor(function (f) {
  return function (m) {
    return f(m);
  };
});

var eqAdditive = function eqAdditive(dictEq) {
  return dictEq;
};

var eq1Additive = new Data_Eq.Eq1(function (dictEq) {
  return Data_Eq.eq(eqAdditive(dictEq));
});
var ord1Additive = new Data_Ord.Ord1(function () {
  return eq1Additive;
}, function (dictOrd) {
  return Data_Ord.compare(ordAdditive(dictOrd));
});

var boundedAdditive = function boundedAdditive(dictBounded) {
  return dictBounded;
};

var applyAdditive = new Control_Apply.Apply(function () {
  return functorAdditive;
}, function (v) {
  return function (v1) {
    return v(v1);
  };
});
var bindAdditive = new Control_Bind.Bind(function () {
  return applyAdditive;
}, function (v) {
  return function (f) {
    return f(v);
  };
});
var applicativeAdditive = new Control_Applicative.Applicative(function () {
  return applyAdditive;
}, Additive);
var monadAdditive = new Control_Monad.Monad(function () {
  return applicativeAdditive;
}, function () {
  return bindAdditive;
});
module.exports = {
  Additive: Additive,
  eqAdditive: eqAdditive,
  eq1Additive: eq1Additive,
  ordAdditive: ordAdditive,
  ord1Additive: ord1Additive,
  boundedAdditive: boundedAdditive,
  showAdditive: showAdditive,
  functorAdditive: functorAdditive,
  applyAdditive: applyAdditive,
  applicativeAdditive: applicativeAdditive,
  bindAdditive: bindAdditive,
  monadAdditive: monadAdditive,
  semigroupAdditive: semigroupAdditive,
  monoidAdditive: monoidAdditive
};
},{"../Control.Applicative/index.js":"output/Control.Applicative/index.js","../Control.Apply/index.js":"output/Control.Apply/index.js","../Control.Bind/index.js":"output/Control.Bind/index.js","../Control.Monad/index.js":"output/Control.Monad/index.js","../Data.Eq/index.js":"output/Data.Eq/index.js","../Data.Functor/index.js":"output/Data.Functor/index.js","../Data.Monoid/index.js":"output/Data.Monoid/index.js","../Data.Ord/index.js":"output/Data.Ord/index.js","../Data.Semigroup/index.js":"output/Data.Semigroup/index.js","../Data.Semiring/index.js":"output/Data.Semiring/index.js","../Data.Show/index.js":"output/Data.Show/index.js"}],"output/Data.Monoid.Multiplicative/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var Control_Applicative = require("../Control.Applicative/index.js");

var Control_Apply = require("../Control.Apply/index.js");

var Control_Bind = require("../Control.Bind/index.js");

var Control_Monad = require("../Control.Monad/index.js");

var Data_Eq = require("../Data.Eq/index.js");

var Data_Functor = require("../Data.Functor/index.js");

var Data_Monoid = require("../Data.Monoid/index.js");

var Data_Ord = require("../Data.Ord/index.js");

var Data_Semigroup = require("../Data.Semigroup/index.js");

var Data_Semiring = require("../Data.Semiring/index.js");

var Data_Show = require("../Data.Show/index.js");

var Multiplicative = function Multiplicative(x) {
  return x;
};

var showMultiplicative = function showMultiplicative(dictShow) {
  return new Data_Show.Show(function (v) {
    return "(Multiplicative " + (Data_Show.show(dictShow)(v) + ")");
  });
};

var semigroupMultiplicative = function semigroupMultiplicative(dictSemiring) {
  return new Data_Semigroup.Semigroup(function (v) {
    return function (v1) {
      return Data_Semiring.mul(dictSemiring)(v)(v1);
    };
  });
};

var ordMultiplicative = function ordMultiplicative(dictOrd) {
  return dictOrd;
};

var monoidMultiplicative = function monoidMultiplicative(dictSemiring) {
  return new Data_Monoid.Monoid(function () {
    return semigroupMultiplicative(dictSemiring);
  }, Data_Semiring.one(dictSemiring));
};

var functorMultiplicative = new Data_Functor.Functor(function (f) {
  return function (m) {
    return f(m);
  };
});

var eqMultiplicative = function eqMultiplicative(dictEq) {
  return dictEq;
};

var eq1Multiplicative = new Data_Eq.Eq1(function (dictEq) {
  return Data_Eq.eq(eqMultiplicative(dictEq));
});
var ord1Multiplicative = new Data_Ord.Ord1(function () {
  return eq1Multiplicative;
}, function (dictOrd) {
  return Data_Ord.compare(ordMultiplicative(dictOrd));
});

var boundedMultiplicative = function boundedMultiplicative(dictBounded) {
  return dictBounded;
};

var applyMultiplicative = new Control_Apply.Apply(function () {
  return functorMultiplicative;
}, function (v) {
  return function (v1) {
    return v(v1);
  };
});
var bindMultiplicative = new Control_Bind.Bind(function () {
  return applyMultiplicative;
}, function (v) {
  return function (f) {
    return f(v);
  };
});
var applicativeMultiplicative = new Control_Applicative.Applicative(function () {
  return applyMultiplicative;
}, Multiplicative);
var monadMultiplicative = new Control_Monad.Monad(function () {
  return applicativeMultiplicative;
}, function () {
  return bindMultiplicative;
});
module.exports = {
  Multiplicative: Multiplicative,
  eqMultiplicative: eqMultiplicative,
  eq1Multiplicative: eq1Multiplicative,
  ordMultiplicative: ordMultiplicative,
  ord1Multiplicative: ord1Multiplicative,
  boundedMultiplicative: boundedMultiplicative,
  showMultiplicative: showMultiplicative,
  functorMultiplicative: functorMultiplicative,
  applyMultiplicative: applyMultiplicative,
  applicativeMultiplicative: applicativeMultiplicative,
  bindMultiplicative: bindMultiplicative,
  monadMultiplicative: monadMultiplicative,
  semigroupMultiplicative: semigroupMultiplicative,
  monoidMultiplicative: monoidMultiplicative
};
},{"../Control.Applicative/index.js":"output/Control.Applicative/index.js","../Control.Apply/index.js":"output/Control.Apply/index.js","../Control.Bind/index.js":"output/Control.Bind/index.js","../Control.Monad/index.js":"output/Control.Monad/index.js","../Data.Eq/index.js":"output/Data.Eq/index.js","../Data.Functor/index.js":"output/Data.Functor/index.js","../Data.Monoid/index.js":"output/Data.Monoid/index.js","../Data.Ord/index.js":"output/Data.Ord/index.js","../Data.Semigroup/index.js":"output/Data.Semigroup/index.js","../Data.Semiring/index.js":"output/Data.Semiring/index.js","../Data.Show/index.js":"output/Data.Show/index.js"}],"output/Data.Semigroup.First/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var Control_Applicative = require("../Control.Applicative/index.js");

var Control_Apply = require("../Control.Apply/index.js");

var Control_Bind = require("../Control.Bind/index.js");

var Control_Monad = require("../Control.Monad/index.js");

var Data_Eq = require("../Data.Eq/index.js");

var Data_Functor = require("../Data.Functor/index.js");

var Data_Ord = require("../Data.Ord/index.js");

var Data_Semigroup = require("../Data.Semigroup/index.js");

var Data_Show = require("../Data.Show/index.js");

var First = function First(x) {
  return x;
};

var showFirst = function showFirst(dictShow) {
  return new Data_Show.Show(function (v) {
    return "(First " + (Data_Show.show(dictShow)(v) + ")");
  });
};

var semigroupFirst = new Data_Semigroup.Semigroup(function (x) {
  return function (v) {
    return x;
  };
});

var ordFirst = function ordFirst(dictOrd) {
  return dictOrd;
};

var functorFirst = new Data_Functor.Functor(function (f) {
  return function (m) {
    return f(m);
  };
});

var eqFirst = function eqFirst(dictEq) {
  return dictEq;
};

var eq1First = new Data_Eq.Eq1(function (dictEq) {
  return Data_Eq.eq(eqFirst(dictEq));
});
var ord1First = new Data_Ord.Ord1(function () {
  return eq1First;
}, function (dictOrd) {
  return Data_Ord.compare(ordFirst(dictOrd));
});

var boundedFirst = function boundedFirst(dictBounded) {
  return dictBounded;
};

var applyFirst = new Control_Apply.Apply(function () {
  return functorFirst;
}, function (v) {
  return function (v1) {
    return v(v1);
  };
});
var bindFirst = new Control_Bind.Bind(function () {
  return applyFirst;
}, function (v) {
  return function (f) {
    return f(v);
  };
});
var applicativeFirst = new Control_Applicative.Applicative(function () {
  return applyFirst;
}, First);
var monadFirst = new Control_Monad.Monad(function () {
  return applicativeFirst;
}, function () {
  return bindFirst;
});
module.exports = {
  First: First,
  eqFirst: eqFirst,
  eq1First: eq1First,
  ordFirst: ordFirst,
  ord1First: ord1First,
  boundedFirst: boundedFirst,
  showFirst: showFirst,
  functorFirst: functorFirst,
  applyFirst: applyFirst,
  applicativeFirst: applicativeFirst,
  bindFirst: bindFirst,
  monadFirst: monadFirst,
  semigroupFirst: semigroupFirst
};
},{"../Control.Applicative/index.js":"output/Control.Applicative/index.js","../Control.Apply/index.js":"output/Control.Apply/index.js","../Control.Bind/index.js":"output/Control.Bind/index.js","../Control.Monad/index.js":"output/Control.Monad/index.js","../Data.Eq/index.js":"output/Data.Eq/index.js","../Data.Functor/index.js":"output/Data.Functor/index.js","../Data.Ord/index.js":"output/Data.Ord/index.js","../Data.Semigroup/index.js":"output/Data.Semigroup/index.js","../Data.Show/index.js":"output/Data.Show/index.js"}],"output/Data.Semigroup.Last/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var Control_Applicative = require("../Control.Applicative/index.js");

var Control_Apply = require("../Control.Apply/index.js");

var Control_Bind = require("../Control.Bind/index.js");

var Control_Monad = require("../Control.Monad/index.js");

var Data_Eq = require("../Data.Eq/index.js");

var Data_Functor = require("../Data.Functor/index.js");

var Data_Ord = require("../Data.Ord/index.js");

var Data_Semigroup = require("../Data.Semigroup/index.js");

var Data_Show = require("../Data.Show/index.js");

var Last = function Last(x) {
  return x;
};

var showLast = function showLast(dictShow) {
  return new Data_Show.Show(function (v) {
    return "(Last " + (Data_Show.show(dictShow)(v) + ")");
  });
};

var semigroupLast = new Data_Semigroup.Semigroup(function (v) {
  return function (x) {
    return x;
  };
});

var ordLast = function ordLast(dictOrd) {
  return dictOrd;
};

var functorLast = new Data_Functor.Functor(function (f) {
  return function (m) {
    return f(m);
  };
});

var eqLast = function eqLast(dictEq) {
  return dictEq;
};

var eq1Last = new Data_Eq.Eq1(function (dictEq) {
  return Data_Eq.eq(eqLast(dictEq));
});
var ord1Last = new Data_Ord.Ord1(function () {
  return eq1Last;
}, function (dictOrd) {
  return Data_Ord.compare(ordLast(dictOrd));
});

var boundedLast = function boundedLast(dictBounded) {
  return dictBounded;
};

var applyLast = new Control_Apply.Apply(function () {
  return functorLast;
}, function (v) {
  return function (v1) {
    return v(v1);
  };
});
var bindLast = new Control_Bind.Bind(function () {
  return applyLast;
}, function (v) {
  return function (f) {
    return f(v);
  };
});
var applicativeLast = new Control_Applicative.Applicative(function () {
  return applyLast;
}, Last);
var monadLast = new Control_Monad.Monad(function () {
  return applicativeLast;
}, function () {
  return bindLast;
});
module.exports = {
  Last: Last,
  eqLast: eqLast,
  eq1Last: eq1Last,
  ordLast: ordLast,
  ord1Last: ord1Last,
  boundedLast: boundedLast,
  showLast: showLast,
  functorLast: functorLast,
  applyLast: applyLast,
  applicativeLast: applicativeLast,
  bindLast: bindLast,
  monadLast: monadLast,
  semigroupLast: semigroupLast
};
},{"../Control.Applicative/index.js":"output/Control.Applicative/index.js","../Control.Apply/index.js":"output/Control.Apply/index.js","../Control.Bind/index.js":"output/Control.Bind/index.js","../Control.Monad/index.js":"output/Control.Monad/index.js","../Data.Eq/index.js":"output/Data.Eq/index.js","../Data.Functor/index.js":"output/Data.Functor/index.js","../Data.Ord/index.js":"output/Data.Ord/index.js","../Data.Semigroup/index.js":"output/Data.Semigroup/index.js","../Data.Show/index.js":"output/Data.Show/index.js"}],"output/Data.Newtype/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var Control_Semigroupoid = require("../Control.Semigroupoid/index.js");

var Data_Function = require("../Data.Function/index.js");

var Data_Functor = require("../Data.Functor/index.js");

var Data_Monoid_Additive = require("../Data.Monoid.Additive/index.js");

var Data_Monoid_Conj = require("../Data.Monoid.Conj/index.js");

var Data_Monoid_Disj = require("../Data.Monoid.Disj/index.js");

var Data_Monoid_Dual = require("../Data.Monoid.Dual/index.js");

var Data_Monoid_Endo = require("../Data.Monoid.Endo/index.js");

var Data_Monoid_Multiplicative = require("../Data.Monoid.Multiplicative/index.js");

var Data_Semigroup_First = require("../Data.Semigroup.First/index.js");

var Data_Semigroup_Last = require("../Data.Semigroup.Last/index.js");

var Newtype = function Newtype(unwrap, wrap) {
  this.unwrap = unwrap;
  this.wrap = wrap;
};

var wrap = function wrap(dict) {
  return dict.wrap;
};

var unwrap = function unwrap(dict) {
  return dict.unwrap;
};

var underF2 = function underF2(dictFunctor) {
  return function (dictFunctor1) {
    return function (dictNewtype) {
      return function (dictNewtype1) {
        return function (v) {
          return function (f) {
            var $66 = Control_Semigroupoid.compose(Control_Semigroupoid.semigroupoidFn)(Data_Functor.map(dictFunctor1)(unwrap(dictNewtype1)));
            var $67 = Data_Function.on(f)(Data_Functor.map(dictFunctor)(wrap(dictNewtype)));
            return function ($68) {
              return $66($67($68));
            };
          };
        };
      };
    };
  };
};

var underF = function underF(dictFunctor) {
  return function (dictFunctor1) {
    return function (dictNewtype) {
      return function (dictNewtype1) {
        return function (v) {
          return function (f) {
            var $69 = Data_Functor.map(dictFunctor1)(unwrap(dictNewtype1));
            var $70 = Data_Functor.map(dictFunctor)(wrap(dictNewtype));
            return function ($71) {
              return $69(f($70($71)));
            };
          };
        };
      };
    };
  };
};

var under2 = function under2(dictNewtype) {
  return function (dictNewtype1) {
    return function (v) {
      return function (f) {
        var $72 = Control_Semigroupoid.compose(Control_Semigroupoid.semigroupoidFn)(unwrap(dictNewtype1));
        var $73 = Data_Function.on(f)(wrap(dictNewtype));
        return function ($74) {
          return $72($73($74));
        };
      };
    };
  };
};

var under = function under(dictNewtype) {
  return function (dictNewtype1) {
    return function (v) {
      return function (f) {
        var $75 = unwrap(dictNewtype1);
        var $76 = wrap(dictNewtype);
        return function ($77) {
          return $75(f($76($77)));
        };
      };
    };
  };
};

var un = function un(dictNewtype) {
  return function (v) {
    return unwrap(dictNewtype);
  };
};

var traverse = function traverse(dictFunctor) {
  return function (dictNewtype) {
    return function (v) {
      return function (f) {
        var $78 = Data_Functor.map(dictFunctor)(wrap(dictNewtype));
        var $79 = unwrap(dictNewtype);
        return function ($80) {
          return $78(f($79($80)));
        };
      };
    };
  };
};

var overF2 = function overF2(dictFunctor) {
  return function (dictFunctor1) {
    return function (dictNewtype) {
      return function (dictNewtype1) {
        return function (v) {
          return function (f) {
            var $81 = Control_Semigroupoid.compose(Control_Semigroupoid.semigroupoidFn)(Data_Functor.map(dictFunctor1)(wrap(dictNewtype1)));
            var $82 = Data_Function.on(f)(Data_Functor.map(dictFunctor)(unwrap(dictNewtype)));
            return function ($83) {
              return $81($82($83));
            };
          };
        };
      };
    };
  };
};

var overF = function overF(dictFunctor) {
  return function (dictFunctor1) {
    return function (dictNewtype) {
      return function (dictNewtype1) {
        return function (v) {
          return function (f) {
            var $84 = Data_Functor.map(dictFunctor1)(wrap(dictNewtype1));
            var $85 = Data_Functor.map(dictFunctor)(unwrap(dictNewtype));
            return function ($86) {
              return $84(f($85($86)));
            };
          };
        };
      };
    };
  };
};

var over2 = function over2(dictNewtype) {
  return function (dictNewtype1) {
    return function (v) {
      return function (f) {
        var $87 = Control_Semigroupoid.compose(Control_Semigroupoid.semigroupoidFn)(wrap(dictNewtype1));
        var $88 = Data_Function.on(f)(unwrap(dictNewtype));
        return function ($89) {
          return $87($88($89));
        };
      };
    };
  };
};

var over = function over(dictNewtype) {
  return function (dictNewtype1) {
    return function (v) {
      return function (f) {
        var $90 = wrap(dictNewtype1);
        var $91 = unwrap(dictNewtype);
        return function ($92) {
          return $90(f($91($92)));
        };
      };
    };
  };
};

var op = function op(dictNewtype) {
  return un(dictNewtype);
};

var newtypeMultiplicative = new Newtype(function (v) {
  return v;
}, Data_Monoid_Multiplicative.Multiplicative);
var newtypeLast = new Newtype(function (v) {
  return v;
}, Data_Semigroup_Last.Last);
var newtypeFirst = new Newtype(function (v) {
  return v;
}, Data_Semigroup_First.First);
var newtypeEndo = new Newtype(function (v) {
  return v;
}, Data_Monoid_Endo.Endo);
var newtypeDual = new Newtype(function (v) {
  return v;
}, Data_Monoid_Dual.Dual);
var newtypeDisj = new Newtype(function (v) {
  return v;
}, Data_Monoid_Disj.Disj);
var newtypeConj = new Newtype(function (v) {
  return v;
}, Data_Monoid_Conj.Conj);
var newtypeAdditive = new Newtype(function (v) {
  return v;
}, Data_Monoid_Additive.Additive);

var collect = function collect(dictFunctor) {
  return function (dictNewtype) {
    return function (v) {
      return function (f) {
        var $93 = wrap(dictNewtype);
        var $94 = Data_Functor.map(dictFunctor)(unwrap(dictNewtype));
        return function ($95) {
          return $93(f($94($95)));
        };
      };
    };
  };
};

var alaF = function alaF(dictFunctor) {
  return function (dictFunctor1) {
    return function (dictNewtype) {
      return function (dictNewtype1) {
        return function (v) {
          return function (f) {
            var $96 = Data_Functor.map(dictFunctor1)(unwrap(dictNewtype1));
            var $97 = Data_Functor.map(dictFunctor)(wrap(dictNewtype));
            return function ($98) {
              return $96(f($97($98)));
            };
          };
        };
      };
    };
  };
};

var ala = function ala(dictFunctor) {
  return function (dictNewtype) {
    return function (dictNewtype1) {
      return function (v) {
        return function (f) {
          return Data_Functor.map(dictFunctor)(unwrap(dictNewtype))(f(wrap(dictNewtype1)));
        };
      };
    };
  };
};

module.exports = {
  unwrap: unwrap,
  wrap: wrap,
  Newtype: Newtype,
  un: un,
  op: op,
  ala: ala,
  alaF: alaF,
  over: over,
  overF: overF,
  under: under,
  underF: underF,
  over2: over2,
  overF2: overF2,
  under2: under2,
  underF2: underF2,
  traverse: traverse,
  collect: collect,
  newtypeAdditive: newtypeAdditive,
  newtypeMultiplicative: newtypeMultiplicative,
  newtypeConj: newtypeConj,
  newtypeDisj: newtypeDisj,
  newtypeDual: newtypeDual,
  newtypeEndo: newtypeEndo,
  newtypeFirst: newtypeFirst,
  newtypeLast: newtypeLast
};
},{"../Control.Semigroupoid/index.js":"output/Control.Semigroupoid/index.js","../Data.Function/index.js":"output/Data.Function/index.js","../Data.Functor/index.js":"output/Data.Functor/index.js","../Data.Monoid.Additive/index.js":"output/Data.Monoid.Additive/index.js","../Data.Monoid.Conj/index.js":"output/Data.Monoid.Conj/index.js","../Data.Monoid.Disj/index.js":"output/Data.Monoid.Disj/index.js","../Data.Monoid.Dual/index.js":"output/Data.Monoid.Dual/index.js","../Data.Monoid.Endo/index.js":"output/Data.Monoid.Endo/index.js","../Data.Monoid.Multiplicative/index.js":"output/Data.Monoid.Multiplicative/index.js","../Data.Semigroup.First/index.js":"output/Data.Semigroup.First/index.js","../Data.Semigroup.Last/index.js":"output/Data.Semigroup.Last/index.js"}],"output/Data.Foldable/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var $foreign = require("./foreign.js");

var Control_Alt = require("../Control.Alt/index.js");

var Control_Applicative = require("../Control.Applicative/index.js");

var Control_Apply = require("../Control.Apply/index.js");

var Control_Bind = require("../Control.Bind/index.js");

var Control_Category = require("../Control.Category/index.js");

var Control_Plus = require("../Control.Plus/index.js");

var Data_Eq = require("../Data.Eq/index.js");

var Data_Function = require("../Data.Function/index.js");

var Data_Functor = require("../Data.Functor/index.js");

var Data_HeytingAlgebra = require("../Data.HeytingAlgebra/index.js");

var Data_Maybe = require("../Data.Maybe/index.js");

var Data_Monoid = require("../Data.Monoid/index.js");

var Data_Monoid_Conj = require("../Data.Monoid.Conj/index.js");

var Data_Monoid_Disj = require("../Data.Monoid.Disj/index.js");

var Data_Monoid_Dual = require("../Data.Monoid.Dual/index.js");

var Data_Monoid_Endo = require("../Data.Monoid.Endo/index.js");

var Data_Newtype = require("../Data.Newtype/index.js");

var Data_Ord = require("../Data.Ord/index.js");

var Data_Ordering = require("../Data.Ordering/index.js");

var Data_Semigroup = require("../Data.Semigroup/index.js");

var Data_Semiring = require("../Data.Semiring/index.js");

var Data_Unit = require("../Data.Unit/index.js");

var Foldable = function Foldable(foldMap, foldl, foldr) {
  this.foldMap = foldMap;
  this.foldl = foldl;
  this.foldr = foldr;
};

var foldr = function foldr(dict) {
  return dict.foldr;
};

var indexr = function indexr(dictFoldable) {
  return function (idx) {
    var go = function go(a) {
      return function (cursor) {
        if (cursor.elem instanceof Data_Maybe.Just) {
          return cursor;
        }

        ;
        var $106 = cursor.pos === idx;

        if ($106) {
          return {
            elem: new Data_Maybe.Just(a),
            pos: cursor.pos
          };
        }

        ;
        return {
          pos: cursor.pos + 1 | 0,
          elem: cursor.elem
        };
      };
    };

    var $193 = foldr(dictFoldable)(go)({
      elem: Data_Maybe.Nothing.value,
      pos: 0
    });
    return function ($194) {
      return function (v) {
        return v.elem;
      }($193($194));
    };
  };
};

var $$null = function $$null(dictFoldable) {
  return foldr(dictFoldable)(function (v) {
    return function (v1) {
      return false;
    };
  })(true);
};

var oneOf = function oneOf(dictFoldable) {
  return function (dictPlus) {
    return foldr(dictFoldable)(Control_Alt.alt(dictPlus.Alt0()))(Control_Plus.empty(dictPlus));
  };
};

var oneOfMap = function oneOfMap(dictFoldable) {
  return function (dictPlus) {
    return function (f) {
      return foldr(dictFoldable)(function () {
        var $195 = Control_Alt.alt(dictPlus.Alt0());
        return function ($196) {
          return $195(f($196));
        };
      }())(Control_Plus.empty(dictPlus));
    };
  };
};

var traverse_ = function traverse_(dictApplicative) {
  return function (dictFoldable) {
    return function (f) {
      return foldr(dictFoldable)(function () {
        var $197 = Control_Apply.applySecond(dictApplicative.Apply0());
        return function ($198) {
          return $197(f($198));
        };
      }())(Control_Applicative.pure(dictApplicative)(Data_Unit.unit));
    };
  };
};

var for_ = function for_(dictApplicative) {
  return function (dictFoldable) {
    return Data_Function.flip(traverse_(dictApplicative)(dictFoldable));
  };
};

var sequence_ = function sequence_(dictApplicative) {
  return function (dictFoldable) {
    return traverse_(dictApplicative)(dictFoldable)(Control_Category.identity(Control_Category.categoryFn));
  };
};

var foldl = function foldl(dict) {
  return dict.foldl;
};

var indexl = function indexl(dictFoldable) {
  return function (idx) {
    var go = function go(cursor) {
      return function (a) {
        if (cursor.elem instanceof Data_Maybe.Just) {
          return cursor;
        }

        ;
        var $109 = cursor.pos === idx;

        if ($109) {
          return {
            elem: new Data_Maybe.Just(a),
            pos: cursor.pos
          };
        }

        ;
        return {
          pos: cursor.pos + 1 | 0,
          elem: cursor.elem
        };
      };
    };

    var $199 = foldl(dictFoldable)(go)({
      elem: Data_Maybe.Nothing.value,
      pos: 0
    });
    return function ($200) {
      return function (v) {
        return v.elem;
      }($199($200));
    };
  };
};

var intercalate = function intercalate(dictFoldable) {
  return function (dictMonoid) {
    return function (sep) {
      return function (xs) {
        var go = function go(v) {
          return function (x) {
            if (v.init) {
              return {
                init: false,
                acc: x
              };
            }

            ;
            return {
              init: false,
              acc: Data_Semigroup.append(dictMonoid.Semigroup0())(v.acc)(Data_Semigroup.append(dictMonoid.Semigroup0())(sep)(x))
            };
          };
        };

        return foldl(dictFoldable)(go)({
          init: true,
          acc: Data_Monoid.mempty(dictMonoid)
        })(xs).acc;
      };
    };
  };
};

var length = function length(dictFoldable) {
  return function (dictSemiring) {
    return foldl(dictFoldable)(function (c) {
      return function (v) {
        return Data_Semiring.add(dictSemiring)(Data_Semiring.one(dictSemiring))(c);
      };
    })(Data_Semiring.zero(dictSemiring));
  };
};

var maximumBy = function maximumBy(dictFoldable) {
  return function (cmp) {
    var max$prime = function max$prime(v) {
      return function (v1) {
        if (v instanceof Data_Maybe.Nothing) {
          return new Data_Maybe.Just(v1);
        }

        ;

        if (v instanceof Data_Maybe.Just) {
          return new Data_Maybe.Just(function () {
            var $116 = Data_Eq.eq(Data_Ordering.eqOrdering)(cmp(v.value0)(v1))(Data_Ordering.GT.value);

            if ($116) {
              return v.value0;
            }

            ;
            return v1;
          }());
        }

        ;
        throw new Error("Failed pattern match at Data.Foldable (line 389, column 3 - line 389, column 27): " + [v.constructor.name, v1.constructor.name]);
      };
    };

    return foldl(dictFoldable)(max$prime)(Data_Maybe.Nothing.value);
  };
};

var maximum = function maximum(dictOrd) {
  return function (dictFoldable) {
    return maximumBy(dictFoldable)(Data_Ord.compare(dictOrd));
  };
};

var minimumBy = function minimumBy(dictFoldable) {
  return function (cmp) {
    var min$prime = function min$prime(v) {
      return function (v1) {
        if (v instanceof Data_Maybe.Nothing) {
          return new Data_Maybe.Just(v1);
        }

        ;

        if (v instanceof Data_Maybe.Just) {
          return new Data_Maybe.Just(function () {
            var $120 = Data_Eq.eq(Data_Ordering.eqOrdering)(cmp(v.value0)(v1))(Data_Ordering.LT.value);

            if ($120) {
              return v.value0;
            }

            ;
            return v1;
          }());
        }

        ;
        throw new Error("Failed pattern match at Data.Foldable (line 402, column 3 - line 402, column 27): " + [v.constructor.name, v1.constructor.name]);
      };
    };

    return foldl(dictFoldable)(min$prime)(Data_Maybe.Nothing.value);
  };
};

var minimum = function minimum(dictOrd) {
  return function (dictFoldable) {
    return minimumBy(dictFoldable)(Data_Ord.compare(dictOrd));
  };
};

var product = function product(dictFoldable) {
  return function (dictSemiring) {
    return foldl(dictFoldable)(Data_Semiring.mul(dictSemiring))(Data_Semiring.one(dictSemiring));
  };
};

var sum = function sum(dictFoldable) {
  return function (dictSemiring) {
    return foldl(dictFoldable)(Data_Semiring.add(dictSemiring))(Data_Semiring.zero(dictSemiring));
  };
};

var foldableMultiplicative = new Foldable(function (dictMonoid) {
  return function (f) {
    return function (v) {
      return f(v);
    };
  };
}, function (f) {
  return function (z) {
    return function (v) {
      return f(z)(v);
    };
  };
}, function (f) {
  return function (z) {
    return function (v) {
      return f(v)(z);
    };
  };
});
var foldableMaybe = new Foldable(function (dictMonoid) {
  return function (f) {
    return function (v) {
      if (v instanceof Data_Maybe.Nothing) {
        return Data_Monoid.mempty(dictMonoid);
      }

      ;

      if (v instanceof Data_Maybe.Just) {
        return f(v.value0);
      }

      ;
      throw new Error("Failed pattern match at Data.Foldable (line 129, column 1 - line 135, column 27): " + [f.constructor.name, v.constructor.name]);
    };
  };
}, function (v) {
  return function (z) {
    return function (v1) {
      if (v1 instanceof Data_Maybe.Nothing) {
        return z;
      }

      ;

      if (v1 instanceof Data_Maybe.Just) {
        return v(z)(v1.value0);
      }

      ;
      throw new Error("Failed pattern match at Data.Foldable (line 129, column 1 - line 135, column 27): " + [v.constructor.name, z.constructor.name, v1.constructor.name]);
    };
  };
}, function (v) {
  return function (z) {
    return function (v1) {
      if (v1 instanceof Data_Maybe.Nothing) {
        return z;
      }

      ;

      if (v1 instanceof Data_Maybe.Just) {
        return v(v1.value0)(z);
      }

      ;
      throw new Error("Failed pattern match at Data.Foldable (line 129, column 1 - line 135, column 27): " + [v.constructor.name, z.constructor.name, v1.constructor.name]);
    };
  };
});
var foldableDual = new Foldable(function (dictMonoid) {
  return function (f) {
    return function (v) {
      return f(v);
    };
  };
}, function (f) {
  return function (z) {
    return function (v) {
      return f(z)(v);
    };
  };
}, function (f) {
  return function (z) {
    return function (v) {
      return f(v)(z);
    };
  };
});
var foldableDisj = new Foldable(function (dictMonoid) {
  return function (f) {
    return function (v) {
      return f(v);
    };
  };
}, function (f) {
  return function (z) {
    return function (v) {
      return f(z)(v);
    };
  };
}, function (f) {
  return function (z) {
    return function (v) {
      return f(v)(z);
    };
  };
});
var foldableConj = new Foldable(function (dictMonoid) {
  return function (f) {
    return function (v) {
      return f(v);
    };
  };
}, function (f) {
  return function (z) {
    return function (v) {
      return f(z)(v);
    };
  };
}, function (f) {
  return function (z) {
    return function (v) {
      return f(v)(z);
    };
  };
});
var foldableAdditive = new Foldable(function (dictMonoid) {
  return function (f) {
    return function (v) {
      return f(v);
    };
  };
}, function (f) {
  return function (z) {
    return function (v) {
      return f(z)(v);
    };
  };
}, function (f) {
  return function (z) {
    return function (v) {
      return f(v)(z);
    };
  };
});

var foldMapDefaultR = function foldMapDefaultR(dictFoldable) {
  return function (dictMonoid) {
    return function (f) {
      return foldr(dictFoldable)(function (x) {
        return function (acc) {
          return Data_Semigroup.append(dictMonoid.Semigroup0())(f(x))(acc);
        };
      })(Data_Monoid.mempty(dictMonoid));
    };
  };
};

var foldableArray = new Foldable(function (dictMonoid) {
  return foldMapDefaultR(foldableArray)(dictMonoid);
}, $foreign.foldlArray, $foreign.foldrArray);

var foldMapDefaultL = function foldMapDefaultL(dictFoldable) {
  return function (dictMonoid) {
    return function (f) {
      return foldl(dictFoldable)(function (acc) {
        return function (x) {
          return Data_Semigroup.append(dictMonoid.Semigroup0())(acc)(f(x));
        };
      })(Data_Monoid.mempty(dictMonoid));
    };
  };
};

var foldMap = function foldMap(dict) {
  return dict.foldMap;
};

var foldableFirst = new Foldable(function (dictMonoid) {
  return function (f) {
    return function (v) {
      return foldMap(foldableMaybe)(dictMonoid)(f)(v);
    };
  };
}, function (f) {
  return function (z) {
    return function (v) {
      return foldl(foldableMaybe)(f)(z)(v);
    };
  };
}, function (f) {
  return function (z) {
    return function (v) {
      return foldr(foldableMaybe)(f)(z)(v);
    };
  };
});
var foldableLast = new Foldable(function (dictMonoid) {
  return function (f) {
    return function (v) {
      return foldMap(foldableMaybe)(dictMonoid)(f)(v);
    };
  };
}, function (f) {
  return function (z) {
    return function (v) {
      return foldl(foldableMaybe)(f)(z)(v);
    };
  };
}, function (f) {
  return function (z) {
    return function (v) {
      return foldr(foldableMaybe)(f)(z)(v);
    };
  };
});

var foldlDefault = function foldlDefault(dictFoldable) {
  return function (c) {
    return function (u) {
      return function (xs) {
        return Data_Newtype.unwrap(Data_Newtype.newtypeEndo)(Data_Newtype.unwrap(Data_Newtype.newtypeDual)(foldMap(dictFoldable)(Data_Monoid_Dual.monoidDual(Data_Monoid_Endo.monoidEndo(Control_Category.categoryFn)))(function () {
          var $201 = Data_Function.flip(c);
          return function ($202) {
            return Data_Monoid_Dual.Dual(Data_Monoid_Endo.Endo($201($202)));
          };
        }())(xs)))(u);
      };
    };
  };
};

var foldrDefault = function foldrDefault(dictFoldable) {
  return function (c) {
    return function (u) {
      return function (xs) {
        return Data_Newtype.unwrap(Data_Newtype.newtypeEndo)(foldMap(dictFoldable)(Data_Monoid_Endo.monoidEndo(Control_Category.categoryFn))(function ($203) {
          return Data_Monoid_Endo.Endo(c($203));
        })(xs))(u);
      };
    };
  };
};

var surroundMap = function surroundMap(dictFoldable) {
  return function (dictSemigroup) {
    return function (d) {
      return function (t) {
        return function (f) {
          var joined = function joined(a) {
            return function (m) {
              return Data_Semigroup.append(dictSemigroup)(d)(Data_Semigroup.append(dictSemigroup)(t(a))(m));
            };
          };

          return Data_Newtype.unwrap(Data_Newtype.newtypeEndo)(foldMap(dictFoldable)(Data_Monoid_Endo.monoidEndo(Control_Category.categoryFn))(joined)(f))(d);
        };
      };
    };
  };
};

var surround = function surround(dictFoldable) {
  return function (dictSemigroup) {
    return function (d) {
      return surroundMap(dictFoldable)(dictSemigroup)(d)(Control_Category.identity(Control_Category.categoryFn));
    };
  };
};

var foldM = function foldM(dictFoldable) {
  return function (dictMonad) {
    return function (f) {
      return function (a0) {
        return foldl(dictFoldable)(function (ma) {
          return function (b) {
            return Control_Bind.bind(dictMonad.Bind1())(ma)(Data_Function.flip(f)(b));
          };
        })(Control_Applicative.pure(dictMonad.Applicative0())(a0));
      };
    };
  };
};

var fold = function fold(dictFoldable) {
  return function (dictMonoid) {
    return foldMap(dictFoldable)(dictMonoid)(Control_Category.identity(Control_Category.categoryFn));
  };
};

var findMap = function findMap(dictFoldable) {
  return function (p) {
    var go = function go(v) {
      return function (v1) {
        if (v instanceof Data_Maybe.Nothing) {
          return p(v1);
        }

        ;
        return v;
      };
    };

    return foldl(dictFoldable)(go)(Data_Maybe.Nothing.value);
  };
};

var find = function find(dictFoldable) {
  return function (p) {
    var go = function go(v) {
      return function (v1) {
        if (v instanceof Data_Maybe.Nothing && p(v1)) {
          return new Data_Maybe.Just(v1);
        }

        ;
        return v;
      };
    };

    return foldl(dictFoldable)(go)(Data_Maybe.Nothing.value);
  };
};

var any = function any(dictFoldable) {
  return function (dictHeytingAlgebra) {
    return Data_Newtype.alaF(Data_Functor.functorFn)(Data_Functor.functorFn)(Data_Newtype.newtypeDisj)(Data_Newtype.newtypeDisj)(Data_Monoid_Disj.Disj)(foldMap(dictFoldable)(Data_Monoid_Disj.monoidDisj(dictHeytingAlgebra)));
  };
};

var elem = function elem(dictFoldable) {
  return function (dictEq) {
    var $204 = any(dictFoldable)(Data_HeytingAlgebra.heytingAlgebraBoolean);
    var $205 = Data_Eq.eq(dictEq);
    return function ($206) {
      return $204($205($206));
    };
  };
};

var notElem = function notElem(dictFoldable) {
  return function (dictEq) {
    return function (x) {
      var $207 = Data_HeytingAlgebra.not(Data_HeytingAlgebra.heytingAlgebraBoolean);
      var $208 = elem(dictFoldable)(dictEq)(x);
      return function ($209) {
        return $207($208($209));
      };
    };
  };
};

var or = function or(dictFoldable) {
  return function (dictHeytingAlgebra) {
    return any(dictFoldable)(dictHeytingAlgebra)(Control_Category.identity(Control_Category.categoryFn));
  };
};

var all = function all(dictFoldable) {
  return function (dictHeytingAlgebra) {
    return Data_Newtype.alaF(Data_Functor.functorFn)(Data_Functor.functorFn)(Data_Newtype.newtypeConj)(Data_Newtype.newtypeConj)(Data_Monoid_Conj.Conj)(foldMap(dictFoldable)(Data_Monoid_Conj.monoidConj(dictHeytingAlgebra)));
  };
};

var and = function and(dictFoldable) {
  return function (dictHeytingAlgebra) {
    return all(dictFoldable)(dictHeytingAlgebra)(Control_Category.identity(Control_Category.categoryFn));
  };
};

module.exports = {
  Foldable: Foldable,
  foldr: foldr,
  foldl: foldl,
  foldMap: foldMap,
  foldrDefault: foldrDefault,
  foldlDefault: foldlDefault,
  foldMapDefaultL: foldMapDefaultL,
  foldMapDefaultR: foldMapDefaultR,
  fold: fold,
  foldM: foldM,
  traverse_: traverse_,
  for_: for_,
  sequence_: sequence_,
  oneOf: oneOf,
  oneOfMap: oneOfMap,
  intercalate: intercalate,
  surroundMap: surroundMap,
  surround: surround,
  and: and,
  or: or,
  all: all,
  any: any,
  sum: sum,
  product: product,
  elem: elem,
  notElem: notElem,
  indexl: indexl,
  indexr: indexr,
  find: find,
  findMap: findMap,
  maximum: maximum,
  maximumBy: maximumBy,
  minimum: minimum,
  minimumBy: minimumBy,
  "null": $$null,
  length: length,
  foldableArray: foldableArray,
  foldableMaybe: foldableMaybe,
  foldableFirst: foldableFirst,
  foldableLast: foldableLast,
  foldableAdditive: foldableAdditive,
  foldableDual: foldableDual,
  foldableDisj: foldableDisj,
  foldableConj: foldableConj,
  foldableMultiplicative: foldableMultiplicative
};
},{"./foreign.js":"output/Data.Foldable/foreign.js","../Control.Alt/index.js":"output/Control.Alt/index.js","../Control.Applicative/index.js":"output/Control.Applicative/index.js","../Control.Apply/index.js":"output/Control.Apply/index.js","../Control.Bind/index.js":"output/Control.Bind/index.js","../Control.Category/index.js":"output/Control.Category/index.js","../Control.Plus/index.js":"output/Control.Plus/index.js","../Data.Eq/index.js":"output/Data.Eq/index.js","../Data.Function/index.js":"output/Data.Function/index.js","../Data.Functor/index.js":"output/Data.Functor/index.js","../Data.HeytingAlgebra/index.js":"output/Data.HeytingAlgebra/index.js","../Data.Maybe/index.js":"output/Data.Maybe/index.js","../Data.Monoid/index.js":"output/Data.Monoid/index.js","../Data.Monoid.Conj/index.js":"output/Data.Monoid.Conj/index.js","../Data.Monoid.Disj/index.js":"output/Data.Monoid.Disj/index.js","../Data.Monoid.Dual/index.js":"output/Data.Monoid.Dual/index.js","../Data.Monoid.Endo/index.js":"output/Data.Monoid.Endo/index.js","../Data.Newtype/index.js":"output/Data.Newtype/index.js","../Data.Ord/index.js":"output/Data.Ord/index.js","../Data.Ordering/index.js":"output/Data.Ordering/index.js","../Data.Semigroup/index.js":"output/Data.Semigroup/index.js","../Data.Semiring/index.js":"output/Data.Semiring/index.js","../Data.Unit/index.js":"output/Data.Unit/index.js"}],"output/Data.Bifoldable/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var Control_Applicative = require("../Control.Applicative/index.js");

var Control_Apply = require("../Control.Apply/index.js");

var Control_Category = require("../Control.Category/index.js");

var Data_Foldable = require("../Data.Foldable/index.js");

var Data_Function = require("../Data.Function/index.js");

var Data_Monoid = require("../Data.Monoid/index.js");

var Data_Monoid_Conj = require("../Data.Monoid.Conj/index.js");

var Data_Monoid_Disj = require("../Data.Monoid.Disj/index.js");

var Data_Monoid_Dual = require("../Data.Monoid.Dual/index.js");

var Data_Monoid_Endo = require("../Data.Monoid.Endo/index.js");

var Data_Newtype = require("../Data.Newtype/index.js");

var Data_Semigroup = require("../Data.Semigroup/index.js");

var Data_Unit = require("../Data.Unit/index.js");

var Bifoldable = function Bifoldable(bifoldMap, bifoldl, bifoldr) {
  this.bifoldMap = bifoldMap;
  this.bifoldl = bifoldl;
  this.bifoldr = bifoldr;
};

var bifoldr = function bifoldr(dict) {
  return dict.bifoldr;
};

var bitraverse_ = function bitraverse_(dictBifoldable) {
  return function (dictApplicative) {
    return function (f) {
      return function (g) {
        return bifoldr(dictBifoldable)(function () {
          var $97 = Control_Apply.applySecond(dictApplicative.Apply0());
          return function ($98) {
            return $97(f($98));
          };
        }())(function () {
          var $99 = Control_Apply.applySecond(dictApplicative.Apply0());
          return function ($100) {
            return $99(g($100));
          };
        }())(Control_Applicative.pure(dictApplicative)(Data_Unit.unit));
      };
    };
  };
};

var bifor_ = function bifor_(dictBifoldable) {
  return function (dictApplicative) {
    return function (t) {
      return function (f) {
        return function (g) {
          return bitraverse_(dictBifoldable)(dictApplicative)(f)(g)(t);
        };
      };
    };
  };
};

var bisequence_ = function bisequence_(dictBifoldable) {
  return function (dictApplicative) {
    return bitraverse_(dictBifoldable)(dictApplicative)(Control_Category.identity(Control_Category.categoryFn))(Control_Category.identity(Control_Category.categoryFn));
  };
};

var bifoldl = function bifoldl(dict) {
  return dict.bifoldl;
};

var bifoldableJoker = function bifoldableJoker(dictFoldable) {
  return new Bifoldable(function (dictMonoid) {
    return function (v) {
      return function (r) {
        return function (v1) {
          return Data_Foldable.foldMap(dictFoldable)(dictMonoid)(r)(v1);
        };
      };
    };
  }, function (v) {
    return function (r) {
      return function (u) {
        return function (v1) {
          return Data_Foldable.foldl(dictFoldable)(r)(u)(v1);
        };
      };
    };
  }, function (v) {
    return function (r) {
      return function (u) {
        return function (v1) {
          return Data_Foldable.foldr(dictFoldable)(r)(u)(v1);
        };
      };
    };
  });
};

var bifoldableClown = function bifoldableClown(dictFoldable) {
  return new Bifoldable(function (dictMonoid) {
    return function (l) {
      return function (v) {
        return function (v1) {
          return Data_Foldable.foldMap(dictFoldable)(dictMonoid)(l)(v1);
        };
      };
    };
  }, function (l) {
    return function (v) {
      return function (u) {
        return function (v1) {
          return Data_Foldable.foldl(dictFoldable)(l)(u)(v1);
        };
      };
    };
  }, function (l) {
    return function (v) {
      return function (u) {
        return function (v1) {
          return Data_Foldable.foldr(dictFoldable)(l)(u)(v1);
        };
      };
    };
  });
};

var bifoldMapDefaultR = function bifoldMapDefaultR(dictBifoldable) {
  return function (dictMonoid) {
    return function (f) {
      return function (g) {
        return bifoldr(dictBifoldable)(function () {
          var $101 = Data_Semigroup.append(dictMonoid.Semigroup0());
          return function ($102) {
            return $101(f($102));
          };
        }())(function () {
          var $103 = Data_Semigroup.append(dictMonoid.Semigroup0());
          return function ($104) {
            return $103(g($104));
          };
        }())(Data_Monoid.mempty(dictMonoid));
      };
    };
  };
};

var bifoldMapDefaultL = function bifoldMapDefaultL(dictBifoldable) {
  return function (dictMonoid) {
    return function (f) {
      return function (g) {
        return bifoldl(dictBifoldable)(function (m) {
          return function (a) {
            return Data_Semigroup.append(dictMonoid.Semigroup0())(m)(f(a));
          };
        })(function (m) {
          return function (b) {
            return Data_Semigroup.append(dictMonoid.Semigroup0())(m)(g(b));
          };
        })(Data_Monoid.mempty(dictMonoid));
      };
    };
  };
};

var bifoldMap = function bifoldMap(dict) {
  return dict.bifoldMap;
};

var bifoldableFlip = function bifoldableFlip(dictBifoldable) {
  return new Bifoldable(function (dictMonoid) {
    return function (r) {
      return function (l) {
        return function (v) {
          return bifoldMap(dictBifoldable)(dictMonoid)(l)(r)(v);
        };
      };
    };
  }, function (r) {
    return function (l) {
      return function (u) {
        return function (v) {
          return bifoldl(dictBifoldable)(l)(r)(u)(v);
        };
      };
    };
  }, function (r) {
    return function (l) {
      return function (u) {
        return function (v) {
          return bifoldr(dictBifoldable)(l)(r)(u)(v);
        };
      };
    };
  });
};

var bifoldableWrap = function bifoldableWrap(dictBifoldable) {
  return new Bifoldable(function (dictMonoid) {
    return function (l) {
      return function (r) {
        return function (v) {
          return bifoldMap(dictBifoldable)(dictMonoid)(l)(r)(v);
        };
      };
    };
  }, function (l) {
    return function (r) {
      return function (u) {
        return function (v) {
          return bifoldl(dictBifoldable)(l)(r)(u)(v);
        };
      };
    };
  }, function (l) {
    return function (r) {
      return function (u) {
        return function (v) {
          return bifoldr(dictBifoldable)(l)(r)(u)(v);
        };
      };
    };
  });
};

var bifoldlDefault = function bifoldlDefault(dictBifoldable) {
  return function (f) {
    return function (g) {
      return function (z) {
        return function (p) {
          return Data_Newtype.unwrap(Data_Newtype.newtypeEndo)(Data_Newtype.unwrap(Data_Newtype.newtypeDual)(bifoldMap(dictBifoldable)(Data_Monoid_Dual.monoidDual(Data_Monoid_Endo.monoidEndo(Control_Category.categoryFn)))(function () {
            var $105 = Data_Function.flip(f);
            return function ($106) {
              return Data_Monoid_Dual.Dual(Data_Monoid_Endo.Endo($105($106)));
            };
          }())(function () {
            var $107 = Data_Function.flip(g);
            return function ($108) {
              return Data_Monoid_Dual.Dual(Data_Monoid_Endo.Endo($107($108)));
            };
          }())(p)))(z);
        };
      };
    };
  };
};

var bifoldrDefault = function bifoldrDefault(dictBifoldable) {
  return function (f) {
    return function (g) {
      return function (z) {
        return function (p) {
          return Data_Newtype.unwrap(Data_Newtype.newtypeEndo)(bifoldMap(dictBifoldable)(Data_Monoid_Endo.monoidEndo(Control_Category.categoryFn))(function ($109) {
            return Data_Monoid_Endo.Endo(f($109));
          })(function ($110) {
            return Data_Monoid_Endo.Endo(g($110));
          })(p))(z);
        };
      };
    };
  };
};

var bifoldableProduct = function bifoldableProduct(dictBifoldable) {
  return function (dictBifoldable1) {
    return new Bifoldable(function (dictMonoid) {
      return function (l) {
        return function (r) {
          return function (v) {
            return Data_Semigroup.append(dictMonoid.Semigroup0())(bifoldMap(dictBifoldable)(dictMonoid)(l)(r)(v.value0))(bifoldMap(dictBifoldable1)(dictMonoid)(l)(r)(v.value1));
          };
        };
      };
    }, function (l) {
      return function (r) {
        return function (u) {
          return function (m) {
            return bifoldlDefault(bifoldableProduct(dictBifoldable)(dictBifoldable1))(l)(r)(u)(m);
          };
        };
      };
    }, function (l) {
      return function (r) {
        return function (u) {
          return function (m) {
            return bifoldrDefault(bifoldableProduct(dictBifoldable)(dictBifoldable1))(l)(r)(u)(m);
          };
        };
      };
    });
  };
};

var bifold = function bifold(dictBifoldable) {
  return function (dictMonoid) {
    return bifoldMap(dictBifoldable)(dictMonoid)(Control_Category.identity(Control_Category.categoryFn))(Control_Category.identity(Control_Category.categoryFn));
  };
};

var biany = function biany(dictBifoldable) {
  return function (dictBooleanAlgebra) {
    return function (p) {
      return function (q) {
        var $111 = Data_Newtype.unwrap(Data_Newtype.newtypeDisj);
        var $112 = bifoldMap(dictBifoldable)(Data_Monoid_Disj.monoidDisj(dictBooleanAlgebra.HeytingAlgebra0()))(function ($114) {
          return Data_Monoid_Disj.Disj(p($114));
        })(function ($115) {
          return Data_Monoid_Disj.Disj(q($115));
        });
        return function ($113) {
          return $111($112($113));
        };
      };
    };
  };
};

var biall = function biall(dictBifoldable) {
  return function (dictBooleanAlgebra) {
    return function (p) {
      return function (q) {
        var $116 = Data_Newtype.unwrap(Data_Newtype.newtypeConj);
        var $117 = bifoldMap(dictBifoldable)(Data_Monoid_Conj.monoidConj(dictBooleanAlgebra.HeytingAlgebra0()))(function ($119) {
          return Data_Monoid_Conj.Conj(p($119));
        })(function ($120) {
          return Data_Monoid_Conj.Conj(q($120));
        });
        return function ($118) {
          return $116($117($118));
        };
      };
    };
  };
};

module.exports = {
  bifoldMap: bifoldMap,
  bifoldl: bifoldl,
  bifoldr: bifoldr,
  Bifoldable: Bifoldable,
  bifoldrDefault: bifoldrDefault,
  bifoldlDefault: bifoldlDefault,
  bifoldMapDefaultR: bifoldMapDefaultR,
  bifoldMapDefaultL: bifoldMapDefaultL,
  bifold: bifold,
  bitraverse_: bitraverse_,
  bifor_: bifor_,
  bisequence_: bisequence_,
  biany: biany,
  biall: biall,
  bifoldableClown: bifoldableClown,
  bifoldableJoker: bifoldableJoker,
  bifoldableFlip: bifoldableFlip,
  bifoldableProduct: bifoldableProduct,
  bifoldableWrap: bifoldableWrap
};
},{"../Control.Applicative/index.js":"output/Control.Applicative/index.js","../Control.Apply/index.js":"output/Control.Apply/index.js","../Control.Category/index.js":"output/Control.Category/index.js","../Data.Foldable/index.js":"output/Data.Foldable/index.js","../Data.Function/index.js":"output/Data.Function/index.js","../Data.Monoid/index.js":"output/Data.Monoid/index.js","../Data.Monoid.Conj/index.js":"output/Data.Monoid.Conj/index.js","../Data.Monoid.Disj/index.js":"output/Data.Monoid.Disj/index.js","../Data.Monoid.Dual/index.js":"output/Data.Monoid.Dual/index.js","../Data.Monoid.Endo/index.js":"output/Data.Monoid.Endo/index.js","../Data.Newtype/index.js":"output/Data.Newtype/index.js","../Data.Semigroup/index.js":"output/Data.Semigroup/index.js","../Data.Unit/index.js":"output/Data.Unit/index.js"}],"output/Data.Bifunctor.Clown/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var Control_Applicative = require("../Control.Applicative/index.js");

var Control_Apply = require("../Control.Apply/index.js");

var Control_Biapplicative = require("../Control.Biapplicative/index.js");

var Control_Biapply = require("../Control.Biapply/index.js");

var Data_Bifunctor = require("../Data.Bifunctor/index.js");

var Data_Functor = require("../Data.Functor/index.js");

var Data_Newtype = require("../Data.Newtype/index.js");

var Data_Show = require("../Data.Show/index.js");

var Clown = function Clown(x) {
  return x;
};

var showClown = function showClown(dictShow) {
  return new Data_Show.Show(function (v) {
    return "(Clown " + (Data_Show.show(dictShow)(v) + ")");
  });
};

var ordClown = function ordClown(dictOrd) {
  return dictOrd;
};

var newtypeClown = new Data_Newtype.Newtype(function (n) {
  return n;
}, Clown);
var functorClown = new Data_Functor.Functor(function (v) {
  return function (v1) {
    return v1;
  };
});

var eqClown = function eqClown(dictEq) {
  return dictEq;
};

var bifunctorClown = function bifunctorClown(dictFunctor) {
  return new Data_Bifunctor.Bifunctor(function (f) {
    return function (v) {
      return function (v1) {
        return Data_Functor.map(dictFunctor)(f)(v1);
      };
    };
  });
};

var biapplyClown = function biapplyClown(dictApply) {
  return new Control_Biapply.Biapply(function () {
    return bifunctorClown(dictApply.Functor0());
  }, function (v) {
    return function (v1) {
      return Control_Apply.apply(dictApply)(v)(v1);
    };
  });
};

var biapplicativeClown = function biapplicativeClown(dictApplicative) {
  return new Control_Biapplicative.Biapplicative(function () {
    return biapplyClown(dictApplicative.Apply0());
  }, function (a) {
    return function (v) {
      return Control_Applicative.pure(dictApplicative)(a);
    };
  });
};

module.exports = {
  Clown: Clown,
  newtypeClown: newtypeClown,
  eqClown: eqClown,
  ordClown: ordClown,
  showClown: showClown,
  functorClown: functorClown,
  bifunctorClown: bifunctorClown,
  biapplyClown: biapplyClown,
  biapplicativeClown: biapplicativeClown
};
},{"../Control.Applicative/index.js":"output/Control.Applicative/index.js","../Control.Apply/index.js":"output/Control.Apply/index.js","../Control.Biapplicative/index.js":"output/Control.Biapplicative/index.js","../Control.Biapply/index.js":"output/Control.Biapply/index.js","../Data.Bifunctor/index.js":"output/Data.Bifunctor/index.js","../Data.Functor/index.js":"output/Data.Functor/index.js","../Data.Newtype/index.js":"output/Data.Newtype/index.js","../Data.Show/index.js":"output/Data.Show/index.js"}],"output/Data.Bifunctor.Flip/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var Control_Biapplicative = require("../Control.Biapplicative/index.js");

var Control_Biapply = require("../Control.Biapply/index.js");

var Data_Bifunctor = require("../Data.Bifunctor/index.js");

var Data_Functor = require("../Data.Functor/index.js");

var Data_Newtype = require("../Data.Newtype/index.js");

var Data_Show = require("../Data.Show/index.js");

var Flip = function Flip(x) {
  return x;
};

var showFlip = function showFlip(dictShow) {
  return new Data_Show.Show(function (v) {
    return "(Flip " + (Data_Show.show(dictShow)(v) + ")");
  });
};

var ordFlip = function ordFlip(dictOrd) {
  return dictOrd;
};

var newtypeFlip = new Data_Newtype.Newtype(function (n) {
  return n;
}, Flip);

var functorFlip = function functorFlip(dictBifunctor) {
  return new Data_Functor.Functor(function (f) {
    return function (v) {
      return Data_Bifunctor.lmap(dictBifunctor)(f)(v);
    };
  });
};

var eqFlip = function eqFlip(dictEq) {
  return dictEq;
};

var bifunctorFlip = function bifunctorFlip(dictBifunctor) {
  return new Data_Bifunctor.Bifunctor(function (f) {
    return function (g) {
      return function (v) {
        return Data_Bifunctor.bimap(dictBifunctor)(g)(f)(v);
      };
    };
  });
};

var biapplyFlip = function biapplyFlip(dictBiapply) {
  return new Control_Biapply.Biapply(function () {
    return bifunctorFlip(dictBiapply.Bifunctor0());
  }, function (v) {
    return function (v1) {
      return Control_Biapply.biapply(dictBiapply)(v)(v1);
    };
  });
};

var biapplicativeFlip = function biapplicativeFlip(dictBiapplicative) {
  return new Control_Biapplicative.Biapplicative(function () {
    return biapplyFlip(dictBiapplicative.Biapply0());
  }, function (a) {
    return function (b) {
      return Control_Biapplicative.bipure(dictBiapplicative)(b)(a);
    };
  });
};

module.exports = {
  Flip: Flip,
  newtypeFlip: newtypeFlip,
  eqFlip: eqFlip,
  ordFlip: ordFlip,
  showFlip: showFlip,
  functorFlip: functorFlip,
  bifunctorFlip: bifunctorFlip,
  biapplyFlip: biapplyFlip,
  biapplicativeFlip: biapplicativeFlip
};
},{"../Control.Biapplicative/index.js":"output/Control.Biapplicative/index.js","../Control.Biapply/index.js":"output/Control.Biapply/index.js","../Data.Bifunctor/index.js":"output/Data.Bifunctor/index.js","../Data.Functor/index.js":"output/Data.Functor/index.js","../Data.Newtype/index.js":"output/Data.Newtype/index.js","../Data.Show/index.js":"output/Data.Show/index.js"}],"output/Data.Bifunctor.Joker/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var Control_Applicative = require("../Control.Applicative/index.js");

var Control_Apply = require("../Control.Apply/index.js");

var Control_Biapplicative = require("../Control.Biapplicative/index.js");

var Control_Biapply = require("../Control.Biapply/index.js");

var Data_Bifunctor = require("../Data.Bifunctor/index.js");

var Data_Functor = require("../Data.Functor/index.js");

var Data_Newtype = require("../Data.Newtype/index.js");

var Data_Show = require("../Data.Show/index.js");

var Joker = function Joker(x) {
  return x;
};

var showJoker = function showJoker(dictShow) {
  return new Data_Show.Show(function (v) {
    return "(Joker " + (Data_Show.show(dictShow)(v) + ")");
  });
};

var ordJoker = function ordJoker(dictOrd) {
  return dictOrd;
};

var newtypeJoker = new Data_Newtype.Newtype(function (n) {
  return n;
}, Joker);

var functorJoker = function functorJoker(dictFunctor) {
  return new Data_Functor.Functor(function (g) {
    return function (v) {
      return Data_Functor.map(dictFunctor)(g)(v);
    };
  });
};

var eqJoker = function eqJoker(dictEq) {
  return dictEq;
};

var bifunctorJoker = function bifunctorJoker(dictFunctor) {
  return new Data_Bifunctor.Bifunctor(function (v) {
    return function (g) {
      return function (v1) {
        return Data_Functor.map(dictFunctor)(g)(v1);
      };
    };
  });
};

var biapplyJoker = function biapplyJoker(dictApply) {
  return new Control_Biapply.Biapply(function () {
    return bifunctorJoker(dictApply.Functor0());
  }, function (v) {
    return function (v1) {
      return Control_Apply.apply(dictApply)(v)(v1);
    };
  });
};

var biapplicativeJoker = function biapplicativeJoker(dictApplicative) {
  return new Control_Biapplicative.Biapplicative(function () {
    return biapplyJoker(dictApplicative.Apply0());
  }, function (v) {
    return function (b) {
      return Control_Applicative.pure(dictApplicative)(b);
    };
  });
};

module.exports = {
  Joker: Joker,
  newtypeJoker: newtypeJoker,
  eqJoker: eqJoker,
  ordJoker: ordJoker,
  showJoker: showJoker,
  functorJoker: functorJoker,
  bifunctorJoker: bifunctorJoker,
  biapplyJoker: biapplyJoker,
  biapplicativeJoker: biapplicativeJoker
};
},{"../Control.Applicative/index.js":"output/Control.Applicative/index.js","../Control.Apply/index.js":"output/Control.Apply/index.js","../Control.Biapplicative/index.js":"output/Control.Biapplicative/index.js","../Control.Biapply/index.js":"output/Control.Biapply/index.js","../Data.Bifunctor/index.js":"output/Data.Bifunctor/index.js","../Data.Functor/index.js":"output/Data.Functor/index.js","../Data.Newtype/index.js":"output/Data.Newtype/index.js","../Data.Show/index.js":"output/Data.Show/index.js"}],"output/Data.Bifunctor.Product/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var Control_Biapplicative = require("../Control.Biapplicative/index.js");

var Control_Biapply = require("../Control.Biapply/index.js");

var Data_Bifunctor = require("../Data.Bifunctor/index.js");

var Data_Eq = require("../Data.Eq/index.js");

var Data_Ord = require("../Data.Ord/index.js");

var Data_Ordering = require("../Data.Ordering/index.js");

var Data_Show = require("../Data.Show/index.js");

var Product = function () {
  function Product(value0, value1) {
    this.value0 = value0;
    this.value1 = value1;
  }

  ;

  Product.create = function (value0) {
    return function (value1) {
      return new Product(value0, value1);
    };
  };

  return Product;
}();

var showProduct = function showProduct(dictShow) {
  return function (dictShow1) {
    return new Data_Show.Show(function (v) {
      return "(Product " + (Data_Show.show(dictShow)(v.value0) + (" " + (Data_Show.show(dictShow1)(v.value1) + ")")));
    });
  };
};

var eqProduct = function eqProduct(dictEq) {
  return function (dictEq1) {
    return new Data_Eq.Eq(function (x) {
      return function (y) {
        return Data_Eq.eq(dictEq)(x.value0)(y.value0) && Data_Eq.eq(dictEq1)(x.value1)(y.value1);
      };
    });
  };
};

var ordProduct = function ordProduct(dictOrd) {
  return function (dictOrd1) {
    return new Data_Ord.Ord(function () {
      return eqProduct(dictOrd.Eq0())(dictOrd1.Eq0());
    }, function (x) {
      return function (y) {
        var v = Data_Ord.compare(dictOrd)(x.value0)(y.value0);

        if (v instanceof Data_Ordering.LT) {
          return Data_Ordering.LT.value;
        }

        ;

        if (v instanceof Data_Ordering.GT) {
          return Data_Ordering.GT.value;
        }

        ;
        return Data_Ord.compare(dictOrd1)(x.value1)(y.value1);
      };
    });
  };
};

var bifunctorProduct = function bifunctorProduct(dictBifunctor) {
  return function (dictBifunctor1) {
    return new Data_Bifunctor.Bifunctor(function (f) {
      return function (g) {
        return function (v) {
          return new Product(Data_Bifunctor.bimap(dictBifunctor)(f)(g)(v.value0), Data_Bifunctor.bimap(dictBifunctor1)(f)(g)(v.value1));
        };
      };
    });
  };
};

var biapplyProduct = function biapplyProduct(dictBiapply) {
  return function (dictBiapply1) {
    return new Control_Biapply.Biapply(function () {
      return bifunctorProduct(dictBiapply.Bifunctor0())(dictBiapply1.Bifunctor0());
    }, function (v) {
      return function (v1) {
        return new Product(Control_Biapply.biapply(dictBiapply)(v.value0)(v1.value0), Control_Biapply.biapply(dictBiapply1)(v.value1)(v1.value1));
      };
    });
  };
};

var biapplicativeProduct = function biapplicativeProduct(dictBiapplicative) {
  return function (dictBiapplicative1) {
    return new Control_Biapplicative.Biapplicative(function () {
      return biapplyProduct(dictBiapplicative.Biapply0())(dictBiapplicative1.Biapply0());
    }, function (a) {
      return function (b) {
        return new Product(Control_Biapplicative.bipure(dictBiapplicative)(a)(b), Control_Biapplicative.bipure(dictBiapplicative1)(a)(b));
      };
    });
  };
};

module.exports = {
  Product: Product,
  eqProduct: eqProduct,
  ordProduct: ordProduct,
  showProduct: showProduct,
  bifunctorProduct: bifunctorProduct,
  biapplyProduct: biapplyProduct,
  biapplicativeProduct: biapplicativeProduct
};
},{"../Control.Biapplicative/index.js":"output/Control.Biapplicative/index.js","../Control.Biapply/index.js":"output/Control.Biapply/index.js","../Data.Bifunctor/index.js":"output/Data.Bifunctor/index.js","../Data.Eq/index.js":"output/Data.Eq/index.js","../Data.Ord/index.js":"output/Data.Ord/index.js","../Data.Ordering/index.js":"output/Data.Ordering/index.js","../Data.Show/index.js":"output/Data.Show/index.js"}],"output/Data.Bifunctor.Wrap/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var Control_Biapplicative = require("../Control.Biapplicative/index.js");

var Control_Biapply = require("../Control.Biapply/index.js");

var Data_Bifunctor = require("../Data.Bifunctor/index.js");

var Data_Functor = require("../Data.Functor/index.js");

var Data_Newtype = require("../Data.Newtype/index.js");

var Data_Show = require("../Data.Show/index.js");

var Wrap = function Wrap(x) {
  return x;
};

var showWrap = function showWrap(dictShow) {
  return new Data_Show.Show(function (v) {
    return "(Wrap " + (Data_Show.show(dictShow)(v) + ")");
  });
};

var ordWrap = function ordWrap(dictOrd) {
  return dictOrd;
};

var newtypeWrap = new Data_Newtype.Newtype(function (n) {
  return n;
}, Wrap);

var functorWrap = function functorWrap(dictBifunctor) {
  return new Data_Functor.Functor(function (f) {
    return function (v) {
      return Data_Bifunctor.rmap(dictBifunctor)(f)(v);
    };
  });
};

var eqWrap = function eqWrap(dictEq) {
  return dictEq;
};

var bifunctorWrap = function bifunctorWrap(dictBifunctor) {
  return new Data_Bifunctor.Bifunctor(function (f) {
    return function (g) {
      return function (v) {
        return Data_Bifunctor.bimap(dictBifunctor)(f)(g)(v);
      };
    };
  });
};

var biapplyWrap = function biapplyWrap(dictBiapply) {
  return new Control_Biapply.Biapply(function () {
    return bifunctorWrap(dictBiapply.Bifunctor0());
  }, function (v) {
    return function (v1) {
      return Control_Biapply.biapply(dictBiapply)(v)(v1);
    };
  });
};

var biapplicativeWrap = function biapplicativeWrap(dictBiapplicative) {
  return new Control_Biapplicative.Biapplicative(function () {
    return biapplyWrap(dictBiapplicative.Biapply0());
  }, function (a) {
    return function (b) {
      return Control_Biapplicative.bipure(dictBiapplicative)(a)(b);
    };
  });
};

module.exports = {
  Wrap: Wrap,
  newtypeWrap: newtypeWrap,
  eqWrap: eqWrap,
  ordWrap: ordWrap,
  showWrap: showWrap,
  functorWrap: functorWrap,
  bifunctorWrap: bifunctorWrap,
  biapplyWrap: biapplyWrap,
  biapplicativeWrap: biapplicativeWrap
};
},{"../Control.Biapplicative/index.js":"output/Control.Biapplicative/index.js","../Control.Biapply/index.js":"output/Control.Biapply/index.js","../Data.Bifunctor/index.js":"output/Data.Bifunctor/index.js","../Data.Functor/index.js":"output/Data.Functor/index.js","../Data.Newtype/index.js":"output/Data.Newtype/index.js","../Data.Show/index.js":"output/Data.Show/index.js"}],"output/Data.Traversable/foreign.js":[function(require,module,exports) {
"use strict"; // jshint maxparams: 3

exports.traverseArrayImpl = function () {
  function array1(a) {
    return [a];
  }

  function array2(a) {
    return function (b) {
      return [a, b];
    };
  }

  function array3(a) {
    return function (b) {
      return function (c) {
        return [a, b, c];
      };
    };
  }

  function concat2(xs) {
    return function (ys) {
      return xs.concat(ys);
    };
  }

  return function (apply) {
    return function (map) {
      return function (pure) {
        return function (f) {
          return function (array) {
            function go(bot, top) {
              switch (top - bot) {
                case 0:
                  return pure([]);

                case 1:
                  return map(array1)(f(array[bot]));

                case 2:
                  return apply(map(array2)(f(array[bot])))(f(array[bot + 1]));

                case 3:
                  return apply(apply(map(array3)(f(array[bot])))(f(array[bot + 1])))(f(array[bot + 2]));

                default:
                  // This slightly tricky pivot selection aims to produce two
                  // even-length partitions where possible.
                  var pivot = bot + Math.floor((top - bot) / 4) * 2;
                  return apply(map(concat2)(go(bot, pivot)))(go(pivot, top));
              }
            }

            return go(0, array.length);
          };
        };
      };
    };
  };
}();
},{}],"output/Data.Maybe.First/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var Control_Alt = require("../Control.Alt/index.js");

var Control_Alternative = require("../Control.Alternative/index.js");

var Control_MonadZero = require("../Control.MonadZero/index.js");

var Control_Plus = require("../Control.Plus/index.js");

var Data_Maybe = require("../Data.Maybe/index.js");

var Data_Monoid = require("../Data.Monoid/index.js");

var Data_Newtype = require("../Data.Newtype/index.js");

var Data_Semigroup = require("../Data.Semigroup/index.js");

var Data_Show = require("../Data.Show/index.js");

var First = function First(x) {
  return x;
};

var showFirst = function showFirst(dictShow) {
  return new Data_Show.Show(function (v) {
    return "First (" + (Data_Show.show(Data_Maybe.showMaybe(dictShow))(v) + ")");
  });
};

var semigroupFirst = new Data_Semigroup.Semigroup(function (v) {
  return function (v1) {
    if (v instanceof Data_Maybe.Just) {
      return v;
    }

    ;
    return v1;
  };
});

var ordFirst = function ordFirst(dictOrd) {
  return Data_Maybe.ordMaybe(dictOrd);
};

var ord1First = Data_Maybe.ord1Maybe;
var newtypeFirst = new Data_Newtype.Newtype(function (n) {
  return n;
}, First);
var monoidFirst = new Data_Monoid.Monoid(function () {
  return semigroupFirst;
}, Data_Maybe.Nothing.value);
var monadFirst = Data_Maybe.monadMaybe;
var invariantFirst = Data_Maybe.invariantMaybe;
var functorFirst = Data_Maybe.functorMaybe;
var extendFirst = Data_Maybe.extendMaybe;

var eqFirst = function eqFirst(dictEq) {
  return Data_Maybe.eqMaybe(dictEq);
};

var eq1First = Data_Maybe.eq1Maybe;

var boundedFirst = function boundedFirst(dictBounded) {
  return Data_Maybe.boundedMaybe(dictBounded);
};

var bindFirst = Data_Maybe.bindMaybe;
var applyFirst = Data_Maybe.applyMaybe;
var applicativeFirst = Data_Maybe.applicativeMaybe;
var altFirst = new Control_Alt.Alt(function () {
  return functorFirst;
}, Data_Semigroup.append(semigroupFirst));
var plusFirst = new Control_Plus.Plus(function () {
  return altFirst;
}, Data_Monoid.mempty(monoidFirst));
var alternativeFirst = new Control_Alternative.Alternative(function () {
  return applicativeFirst;
}, function () {
  return plusFirst;
});
var monadZeroFirst = new Control_MonadZero.MonadZero(function () {
  return alternativeFirst;
}, function () {
  return monadFirst;
});
module.exports = {
  First: First,
  newtypeFirst: newtypeFirst,
  eqFirst: eqFirst,
  eq1First: eq1First,
  ordFirst: ordFirst,
  ord1First: ord1First,
  boundedFirst: boundedFirst,
  functorFirst: functorFirst,
  invariantFirst: invariantFirst,
  applyFirst: applyFirst,
  applicativeFirst: applicativeFirst,
  bindFirst: bindFirst,
  monadFirst: monadFirst,
  extendFirst: extendFirst,
  showFirst: showFirst,
  semigroupFirst: semigroupFirst,
  monoidFirst: monoidFirst,
  altFirst: altFirst,
  plusFirst: plusFirst,
  alternativeFirst: alternativeFirst,
  monadZeroFirst: monadZeroFirst
};
},{"../Control.Alt/index.js":"output/Control.Alt/index.js","../Control.Alternative/index.js":"output/Control.Alternative/index.js","../Control.MonadZero/index.js":"output/Control.MonadZero/index.js","../Control.Plus/index.js":"output/Control.Plus/index.js","../Data.Maybe/index.js":"output/Data.Maybe/index.js","../Data.Monoid/index.js":"output/Data.Monoid/index.js","../Data.Newtype/index.js":"output/Data.Newtype/index.js","../Data.Semigroup/index.js":"output/Data.Semigroup/index.js","../Data.Show/index.js":"output/Data.Show/index.js"}],"output/Data.Maybe.Last/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var Control_Alt = require("../Control.Alt/index.js");

var Control_Alternative = require("../Control.Alternative/index.js");

var Control_MonadZero = require("../Control.MonadZero/index.js");

var Control_Plus = require("../Control.Plus/index.js");

var Data_Maybe = require("../Data.Maybe/index.js");

var Data_Monoid = require("../Data.Monoid/index.js");

var Data_Newtype = require("../Data.Newtype/index.js");

var Data_Semigroup = require("../Data.Semigroup/index.js");

var Data_Show = require("../Data.Show/index.js");

var Last = function Last(x) {
  return x;
};

var showLast = function showLast(dictShow) {
  return new Data_Show.Show(function (v) {
    return "(Last " + (Data_Show.show(Data_Maybe.showMaybe(dictShow))(v) + ")");
  });
};

var semigroupLast = new Data_Semigroup.Semigroup(function (v) {
  return function (v1) {
    if (v1 instanceof Data_Maybe.Just) {
      return v1;
    }

    ;

    if (v1 instanceof Data_Maybe.Nothing) {
      return v;
    }

    ;
    throw new Error("Failed pattern match at Data.Maybe.Last (line 52, column 1 - line 54, column 36): " + [v.constructor.name, v1.constructor.name]);
  };
});

var ordLast = function ordLast(dictOrd) {
  return Data_Maybe.ordMaybe(dictOrd);
};

var ord1Last = Data_Maybe.ord1Maybe;
var newtypeLast = new Data_Newtype.Newtype(function (n) {
  return n;
}, Last);
var monoidLast = new Data_Monoid.Monoid(function () {
  return semigroupLast;
}, Data_Maybe.Nothing.value);
var monadLast = Data_Maybe.monadMaybe;
var invariantLast = Data_Maybe.invariantMaybe;
var functorLast = Data_Maybe.functorMaybe;
var extendLast = Data_Maybe.extendMaybe;

var eqLast = function eqLast(dictEq) {
  return Data_Maybe.eqMaybe(dictEq);
};

var eq1Last = Data_Maybe.eq1Maybe;

var boundedLast = function boundedLast(dictBounded) {
  return Data_Maybe.boundedMaybe(dictBounded);
};

var bindLast = Data_Maybe.bindMaybe;
var applyLast = Data_Maybe.applyMaybe;
var applicativeLast = Data_Maybe.applicativeMaybe;
var altLast = new Control_Alt.Alt(function () {
  return functorLast;
}, Data_Semigroup.append(semigroupLast));
var plusLast = new Control_Plus.Plus(function () {
  return altLast;
}, Data_Monoid.mempty(monoidLast));
var alternativeLast = new Control_Alternative.Alternative(function () {
  return applicativeLast;
}, function () {
  return plusLast;
});
var monadZeroLast = new Control_MonadZero.MonadZero(function () {
  return alternativeLast;
}, function () {
  return monadLast;
});
module.exports = {
  Last: Last,
  newtypeLast: newtypeLast,
  eqLast: eqLast,
  eq1Last: eq1Last,
  ordLast: ordLast,
  ord1Last: ord1Last,
  boundedLast: boundedLast,
  functorLast: functorLast,
  invariantLast: invariantLast,
  applyLast: applyLast,
  applicativeLast: applicativeLast,
  bindLast: bindLast,
  monadLast: monadLast,
  extendLast: extendLast,
  showLast: showLast,
  semigroupLast: semigroupLast,
  monoidLast: monoidLast,
  altLast: altLast,
  plusLast: plusLast,
  alternativeLast: alternativeLast,
  monadZeroLast: monadZeroLast
};
},{"../Control.Alt/index.js":"output/Control.Alt/index.js","../Control.Alternative/index.js":"output/Control.Alternative/index.js","../Control.MonadZero/index.js":"output/Control.MonadZero/index.js","../Control.Plus/index.js":"output/Control.Plus/index.js","../Data.Maybe/index.js":"output/Data.Maybe/index.js","../Data.Monoid/index.js":"output/Data.Monoid/index.js","../Data.Newtype/index.js":"output/Data.Newtype/index.js","../Data.Semigroup/index.js":"output/Data.Semigroup/index.js","../Data.Show/index.js":"output/Data.Show/index.js"}],"output/Data.Traversable.Accum.Internal/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var Control_Applicative = require("../Control.Applicative/index.js");

var Control_Apply = require("../Control.Apply/index.js");

var Data_Functor = require("../Data.Functor/index.js");

var StateR = function StateR(x) {
  return x;
};

var StateL = function StateL(x) {
  return x;
};

var stateR = function stateR(v) {
  return v;
};

var stateL = function stateL(v) {
  return v;
};

var functorStateR = new Data_Functor.Functor(function (f) {
  return function (k) {
    return function (s) {
      var v = stateR(k)(s);
      return {
        accum: v.accum,
        value: f(v.value)
      };
    };
  };
});
var functorStateL = new Data_Functor.Functor(function (f) {
  return function (k) {
    return function (s) {
      var v = stateL(k)(s);
      return {
        accum: v.accum,
        value: f(v.value)
      };
    };
  };
});
var applyStateR = new Control_Apply.Apply(function () {
  return functorStateR;
}, function (f) {
  return function (x) {
    return function (s) {
      var v = stateR(x)(s);
      var v1 = stateR(f)(v.accum);
      return {
        accum: v1.accum,
        value: v1.value(v.value)
      };
    };
  };
});
var applyStateL = new Control_Apply.Apply(function () {
  return functorStateL;
}, function (f) {
  return function (x) {
    return function (s) {
      var v = stateL(f)(s);
      var v1 = stateL(x)(v.accum);
      return {
        accum: v1.accum,
        value: v.value(v1.value)
      };
    };
  };
});
var applicativeStateR = new Control_Applicative.Applicative(function () {
  return applyStateR;
}, function (a) {
  return function (s) {
    return {
      accum: s,
      value: a
    };
  };
});
var applicativeStateL = new Control_Applicative.Applicative(function () {
  return applyStateL;
}, function (a) {
  return function (s) {
    return {
      accum: s,
      value: a
    };
  };
});
module.exports = {
  StateL: StateL,
  stateL: stateL,
  StateR: StateR,
  stateR: stateR,
  functorStateL: functorStateL,
  applyStateL: applyStateL,
  applicativeStateL: applicativeStateL,
  functorStateR: functorStateR,
  applyStateR: applyStateR,
  applicativeStateR: applicativeStateR
};
},{"../Control.Applicative/index.js":"output/Control.Applicative/index.js","../Control.Apply/index.js":"output/Control.Apply/index.js","../Data.Functor/index.js":"output/Data.Functor/index.js"}],"output/Data.Traversable/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var $foreign = require("./foreign.js");

var Control_Applicative = require("../Control.Applicative/index.js");

var Control_Apply = require("../Control.Apply/index.js");

var Control_Category = require("../Control.Category/index.js");

var Data_Foldable = require("../Data.Foldable/index.js");

var Data_Functor = require("../Data.Functor/index.js");

var Data_Maybe = require("../Data.Maybe/index.js");

var Data_Maybe_First = require("../Data.Maybe.First/index.js");

var Data_Maybe_Last = require("../Data.Maybe.Last/index.js");

var Data_Monoid_Additive = require("../Data.Monoid.Additive/index.js");

var Data_Monoid_Conj = require("../Data.Monoid.Conj/index.js");

var Data_Monoid_Disj = require("../Data.Monoid.Disj/index.js");

var Data_Monoid_Dual = require("../Data.Monoid.Dual/index.js");

var Data_Monoid_Multiplicative = require("../Data.Monoid.Multiplicative/index.js");

var Data_Traversable_Accum_Internal = require("../Data.Traversable.Accum.Internal/index.js");

var Traversable = function Traversable(Foldable1, Functor0, sequence, traverse) {
  this.Foldable1 = Foldable1;
  this.Functor0 = Functor0;
  this.sequence = sequence;
  this.traverse = traverse;
};

var traverse = function traverse(dict) {
  return dict.traverse;
};

var traversableMultiplicative = new Traversable(function () {
  return Data_Foldable.foldableMultiplicative;
}, function () {
  return Data_Monoid_Multiplicative.functorMultiplicative;
}, function (dictApplicative) {
  return function (v) {
    return Data_Functor.map(dictApplicative.Apply0().Functor0())(Data_Monoid_Multiplicative.Multiplicative)(v);
  };
}, function (dictApplicative) {
  return function (f) {
    return function (v) {
      return Data_Functor.map(dictApplicative.Apply0().Functor0())(Data_Monoid_Multiplicative.Multiplicative)(f(v));
    };
  };
});
var traversableMaybe = new Traversable(function () {
  return Data_Foldable.foldableMaybe;
}, function () {
  return Data_Maybe.functorMaybe;
}, function (dictApplicative) {
  return function (v) {
    if (v instanceof Data_Maybe.Nothing) {
      return Control_Applicative.pure(dictApplicative)(Data_Maybe.Nothing.value);
    }

    ;

    if (v instanceof Data_Maybe.Just) {
      return Data_Functor.map(dictApplicative.Apply0().Functor0())(Data_Maybe.Just.create)(v.value0);
    }

    ;
    throw new Error("Failed pattern match at Data.Traversable (line 86, column 1 - line 90, column 33): " + [v.constructor.name]);
  };
}, function (dictApplicative) {
  return function (v) {
    return function (v1) {
      if (v1 instanceof Data_Maybe.Nothing) {
        return Control_Applicative.pure(dictApplicative)(Data_Maybe.Nothing.value);
      }

      ;

      if (v1 instanceof Data_Maybe.Just) {
        return Data_Functor.map(dictApplicative.Apply0().Functor0())(Data_Maybe.Just.create)(v(v1.value0));
      }

      ;
      throw new Error("Failed pattern match at Data.Traversable (line 86, column 1 - line 90, column 33): " + [v.constructor.name, v1.constructor.name]);
    };
  };
});
var traversableDual = new Traversable(function () {
  return Data_Foldable.foldableDual;
}, function () {
  return Data_Monoid_Dual.functorDual;
}, function (dictApplicative) {
  return function (v) {
    return Data_Functor.map(dictApplicative.Apply0().Functor0())(Data_Monoid_Dual.Dual)(v);
  };
}, function (dictApplicative) {
  return function (f) {
    return function (v) {
      return Data_Functor.map(dictApplicative.Apply0().Functor0())(Data_Monoid_Dual.Dual)(f(v));
    };
  };
});
var traversableDisj = new Traversable(function () {
  return Data_Foldable.foldableDisj;
}, function () {
  return Data_Monoid_Disj.functorDisj;
}, function (dictApplicative) {
  return function (v) {
    return Data_Functor.map(dictApplicative.Apply0().Functor0())(Data_Monoid_Disj.Disj)(v);
  };
}, function (dictApplicative) {
  return function (f) {
    return function (v) {
      return Data_Functor.map(dictApplicative.Apply0().Functor0())(Data_Monoid_Disj.Disj)(f(v));
    };
  };
});
var traversableConj = new Traversable(function () {
  return Data_Foldable.foldableConj;
}, function () {
  return Data_Monoid_Conj.functorConj;
}, function (dictApplicative) {
  return function (v) {
    return Data_Functor.map(dictApplicative.Apply0().Functor0())(Data_Monoid_Conj.Conj)(v);
  };
}, function (dictApplicative) {
  return function (f) {
    return function (v) {
      return Data_Functor.map(dictApplicative.Apply0().Functor0())(Data_Monoid_Conj.Conj)(f(v));
    };
  };
});
var traversableAdditive = new Traversable(function () {
  return Data_Foldable.foldableAdditive;
}, function () {
  return Data_Monoid_Additive.functorAdditive;
}, function (dictApplicative) {
  return function (v) {
    return Data_Functor.map(dictApplicative.Apply0().Functor0())(Data_Monoid_Additive.Additive)(v);
  };
}, function (dictApplicative) {
  return function (f) {
    return function (v) {
      return Data_Functor.map(dictApplicative.Apply0().Functor0())(Data_Monoid_Additive.Additive)(f(v));
    };
  };
});

var sequenceDefault = function sequenceDefault(dictTraversable) {
  return function (dictApplicative) {
    return traverse(dictTraversable)(dictApplicative)(Control_Category.identity(Control_Category.categoryFn));
  };
};

var traversableArray = new Traversable(function () {
  return Data_Foldable.foldableArray;
}, function () {
  return Data_Functor.functorArray;
}, function (dictApplicative) {
  return sequenceDefault(traversableArray)(dictApplicative);
}, function (dictApplicative) {
  return $foreign.traverseArrayImpl(Control_Apply.apply(dictApplicative.Apply0()))(Data_Functor.map(dictApplicative.Apply0().Functor0()))(Control_Applicative.pure(dictApplicative));
});

var sequence = function sequence(dict) {
  return dict.sequence;
};

var traversableFirst = new Traversable(function () {
  return Data_Foldable.foldableFirst;
}, function () {
  return Data_Maybe_First.functorFirst;
}, function (dictApplicative) {
  return function (v) {
    return Data_Functor.map(dictApplicative.Apply0().Functor0())(Data_Maybe_First.First)(sequence(traversableMaybe)(dictApplicative)(v));
  };
}, function (dictApplicative) {
  return function (f) {
    return function (v) {
      return Data_Functor.map(dictApplicative.Apply0().Functor0())(Data_Maybe_First.First)(traverse(traversableMaybe)(dictApplicative)(f)(v));
    };
  };
});
var traversableLast = new Traversable(function () {
  return Data_Foldable.foldableLast;
}, function () {
  return Data_Maybe_Last.functorLast;
}, function (dictApplicative) {
  return function (v) {
    return Data_Functor.map(dictApplicative.Apply0().Functor0())(Data_Maybe_Last.Last)(sequence(traversableMaybe)(dictApplicative)(v));
  };
}, function (dictApplicative) {
  return function (f) {
    return function (v) {
      return Data_Functor.map(dictApplicative.Apply0().Functor0())(Data_Maybe_Last.Last)(traverse(traversableMaybe)(dictApplicative)(f)(v));
    };
  };
});

var traverseDefault = function traverseDefault(dictTraversable) {
  return function (dictApplicative) {
    return function (f) {
      return function (ta) {
        return sequence(dictTraversable)(dictApplicative)(Data_Functor.map(dictTraversable.Functor0())(f)(ta));
      };
    };
  };
};

var mapAccumR = function mapAccumR(dictTraversable) {
  return function (f) {
    return function (s0) {
      return function (xs) {
        return Data_Traversable_Accum_Internal.stateR(traverse(dictTraversable)(Data_Traversable_Accum_Internal.applicativeStateR)(function (a) {
          return function (s) {
            return f(s)(a);
          };
        })(xs))(s0);
      };
    };
  };
};

var scanr = function scanr(dictTraversable) {
  return function (f) {
    return function (b0) {
      return function (xs) {
        return mapAccumR(dictTraversable)(function (b) {
          return function (a) {
            var b$prime = f(a)(b);
            return {
              accum: b$prime,
              value: b$prime
            };
          };
        })(b0)(xs).value;
      };
    };
  };
};

var mapAccumL = function mapAccumL(dictTraversable) {
  return function (f) {
    return function (s0) {
      return function (xs) {
        return Data_Traversable_Accum_Internal.stateL(traverse(dictTraversable)(Data_Traversable_Accum_Internal.applicativeStateL)(function (a) {
          return function (s) {
            return f(s)(a);
          };
        })(xs))(s0);
      };
    };
  };
};

var scanl = function scanl(dictTraversable) {
  return function (f) {
    return function (b0) {
      return function (xs) {
        return mapAccumL(dictTraversable)(function (b) {
          return function (a) {
            var b$prime = f(b)(a);
            return {
              accum: b$prime,
              value: b$prime
            };
          };
        })(b0)(xs).value;
      };
    };
  };
};

var $$for = function $$for(dictApplicative) {
  return function (dictTraversable) {
    return function (x) {
      return function (f) {
        return traverse(dictTraversable)(dictApplicative)(f)(x);
      };
    };
  };
};

module.exports = {
  Traversable: Traversable,
  traverse: traverse,
  sequence: sequence,
  traverseDefault: traverseDefault,
  sequenceDefault: sequenceDefault,
  "for": $$for,
  scanl: scanl,
  scanr: scanr,
  mapAccumL: mapAccumL,
  mapAccumR: mapAccumR,
  traversableArray: traversableArray,
  traversableMaybe: traversableMaybe,
  traversableFirst: traversableFirst,
  traversableLast: traversableLast,
  traversableAdditive: traversableAdditive,
  traversableDual: traversableDual,
  traversableConj: traversableConj,
  traversableDisj: traversableDisj,
  traversableMultiplicative: traversableMultiplicative
};
},{"./foreign.js":"output/Data.Traversable/foreign.js","../Control.Applicative/index.js":"output/Control.Applicative/index.js","../Control.Apply/index.js":"output/Control.Apply/index.js","../Control.Category/index.js":"output/Control.Category/index.js","../Data.Foldable/index.js":"output/Data.Foldable/index.js","../Data.Functor/index.js":"output/Data.Functor/index.js","../Data.Maybe/index.js":"output/Data.Maybe/index.js","../Data.Maybe.First/index.js":"output/Data.Maybe.First/index.js","../Data.Maybe.Last/index.js":"output/Data.Maybe.Last/index.js","../Data.Monoid.Additive/index.js":"output/Data.Monoid.Additive/index.js","../Data.Monoid.Conj/index.js":"output/Data.Monoid.Conj/index.js","../Data.Monoid.Disj/index.js":"output/Data.Monoid.Disj/index.js","../Data.Monoid.Dual/index.js":"output/Data.Monoid.Dual/index.js","../Data.Monoid.Multiplicative/index.js":"output/Data.Monoid.Multiplicative/index.js","../Data.Traversable.Accum.Internal/index.js":"output/Data.Traversable.Accum.Internal/index.js"}],"output/Data.Bitraversable/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var Control_Applicative = require("../Control.Applicative/index.js");

var Control_Apply = require("../Control.Apply/index.js");

var Control_Category = require("../Control.Category/index.js");

var Data_Bifoldable = require("../Data.Bifoldable/index.js");

var Data_Bifunctor = require("../Data.Bifunctor/index.js");

var Data_Bifunctor_Clown = require("../Data.Bifunctor.Clown/index.js");

var Data_Bifunctor_Flip = require("../Data.Bifunctor.Flip/index.js");

var Data_Bifunctor_Joker = require("../Data.Bifunctor.Joker/index.js");

var Data_Bifunctor_Product = require("../Data.Bifunctor.Product/index.js");

var Data_Bifunctor_Wrap = require("../Data.Bifunctor.Wrap/index.js");

var Data_Functor = require("../Data.Functor/index.js");

var Data_Traversable = require("../Data.Traversable/index.js");

var Bitraversable = function Bitraversable(Bifoldable1, Bifunctor0, bisequence, bitraverse) {
  this.Bifoldable1 = Bifoldable1;
  this.Bifunctor0 = Bifunctor0;
  this.bisequence = bisequence;
  this.bitraverse = bitraverse;
};

var bitraverse = function bitraverse(dict) {
  return dict.bitraverse;
};

var lfor = function lfor(dictBitraversable) {
  return function (dictApplicative) {
    return function (t) {
      return function (f) {
        return bitraverse(dictBitraversable)(dictApplicative)(f)(Control_Applicative.pure(dictApplicative))(t);
      };
    };
  };
};

var ltraverse = function ltraverse(dictBitraversable) {
  return function (dictApplicative) {
    return function (f) {
      return bitraverse(dictBitraversable)(dictApplicative)(f)(Control_Applicative.pure(dictApplicative));
    };
  };
};

var rfor = function rfor(dictBitraversable) {
  return function (dictApplicative) {
    return function (t) {
      return function (f) {
        return bitraverse(dictBitraversable)(dictApplicative)(Control_Applicative.pure(dictApplicative))(f)(t);
      };
    };
  };
};

var rtraverse = function rtraverse(dictBitraversable) {
  return function (dictApplicative) {
    return bitraverse(dictBitraversable)(dictApplicative)(Control_Applicative.pure(dictApplicative));
  };
};

var bitraversableJoker = function bitraversableJoker(dictTraversable) {
  return new Bitraversable(function () {
    return Data_Bifoldable.bifoldableJoker(dictTraversable.Foldable1());
  }, function () {
    return Data_Bifunctor_Joker.bifunctorJoker(dictTraversable.Functor0());
  }, function (dictApplicative) {
    return function (v) {
      return Data_Functor.map(dictApplicative.Apply0().Functor0())(Data_Bifunctor_Joker.Joker)(Data_Traversable.sequence(dictTraversable)(dictApplicative)(v));
    };
  }, function (dictApplicative) {
    return function (v) {
      return function (r) {
        return function (v1) {
          return Data_Functor.map(dictApplicative.Apply0().Functor0())(Data_Bifunctor_Joker.Joker)(Data_Traversable.traverse(dictTraversable)(dictApplicative)(r)(v1));
        };
      };
    };
  });
};

var bitraversableClown = function bitraversableClown(dictTraversable) {
  return new Bitraversable(function () {
    return Data_Bifoldable.bifoldableClown(dictTraversable.Foldable1());
  }, function () {
    return Data_Bifunctor_Clown.bifunctorClown(dictTraversable.Functor0());
  }, function (dictApplicative) {
    return function (v) {
      return Data_Functor.map(dictApplicative.Apply0().Functor0())(Data_Bifunctor_Clown.Clown)(Data_Traversable.sequence(dictTraversable)(dictApplicative)(v));
    };
  }, function (dictApplicative) {
    return function (l) {
      return function (v) {
        return function (v1) {
          return Data_Functor.map(dictApplicative.Apply0().Functor0())(Data_Bifunctor_Clown.Clown)(Data_Traversable.traverse(dictTraversable)(dictApplicative)(l)(v1));
        };
      };
    };
  });
};

var bisequenceDefault = function bisequenceDefault(dictBitraversable) {
  return function (dictApplicative) {
    return bitraverse(dictBitraversable)(dictApplicative)(Control_Category.identity(Control_Category.categoryFn))(Control_Category.identity(Control_Category.categoryFn));
  };
};

var bisequence = function bisequence(dict) {
  return dict.bisequence;
};

var bitraversableFlip = function bitraversableFlip(dictBitraversable) {
  return new Bitraversable(function () {
    return Data_Bifoldable.bifoldableFlip(dictBitraversable.Bifoldable1());
  }, function () {
    return Data_Bifunctor_Flip.bifunctorFlip(dictBitraversable.Bifunctor0());
  }, function (dictApplicative) {
    return function (v) {
      return Data_Functor.map(dictApplicative.Apply0().Functor0())(Data_Bifunctor_Flip.Flip)(bisequence(dictBitraversable)(dictApplicative)(v));
    };
  }, function (dictApplicative) {
    return function (r) {
      return function (l) {
        return function (v) {
          return Data_Functor.map(dictApplicative.Apply0().Functor0())(Data_Bifunctor_Flip.Flip)(bitraverse(dictBitraversable)(dictApplicative)(l)(r)(v));
        };
      };
    };
  });
};

var bitraversableProduct = function bitraversableProduct(dictBitraversable) {
  return function (dictBitraversable1) {
    return new Bitraversable(function () {
      return Data_Bifoldable.bifoldableProduct(dictBitraversable.Bifoldable1())(dictBitraversable1.Bifoldable1());
    }, function () {
      return Data_Bifunctor_Product.bifunctorProduct(dictBitraversable.Bifunctor0())(dictBitraversable1.Bifunctor0());
    }, function (dictApplicative) {
      return function (v) {
        return Control_Apply.apply(dictApplicative.Apply0())(Data_Functor.map(dictApplicative.Apply0().Functor0())(Data_Bifunctor_Product.Product.create)(bisequence(dictBitraversable)(dictApplicative)(v.value0)))(bisequence(dictBitraversable1)(dictApplicative)(v.value1));
      };
    }, function (dictApplicative) {
      return function (l) {
        return function (r) {
          return function (v) {
            return Control_Apply.apply(dictApplicative.Apply0())(Data_Functor.map(dictApplicative.Apply0().Functor0())(Data_Bifunctor_Product.Product.create)(bitraverse(dictBitraversable)(dictApplicative)(l)(r)(v.value0)))(bitraverse(dictBitraversable1)(dictApplicative)(l)(r)(v.value1));
          };
        };
      };
    });
  };
};

var bitraversableWrap = function bitraversableWrap(dictBitraversable) {
  return new Bitraversable(function () {
    return Data_Bifoldable.bifoldableWrap(dictBitraversable.Bifoldable1());
  }, function () {
    return Data_Bifunctor_Wrap.bifunctorWrap(dictBitraversable.Bifunctor0());
  }, function (dictApplicative) {
    return function (v) {
      return Data_Functor.map(dictApplicative.Apply0().Functor0())(Data_Bifunctor_Wrap.Wrap)(bisequence(dictBitraversable)(dictApplicative)(v));
    };
  }, function (dictApplicative) {
    return function (l) {
      return function (r) {
        return function (v) {
          return Data_Functor.map(dictApplicative.Apply0().Functor0())(Data_Bifunctor_Wrap.Wrap)(bitraverse(dictBitraversable)(dictApplicative)(l)(r)(v));
        };
      };
    };
  });
};

var bitraverseDefault = function bitraverseDefault(dictBitraversable) {
  return function (dictApplicative) {
    return function (f) {
      return function (g) {
        return function (t) {
          return bisequence(dictBitraversable)(dictApplicative)(Data_Bifunctor.bimap(dictBitraversable.Bifunctor0())(f)(g)(t));
        };
      };
    };
  };
};

var bifor = function bifor(dictBitraversable) {
  return function (dictApplicative) {
    return function (t) {
      return function (f) {
        return function (g) {
          return bitraverse(dictBitraversable)(dictApplicative)(f)(g)(t);
        };
      };
    };
  };
};

module.exports = {
  Bitraversable: Bitraversable,
  bitraverse: bitraverse,
  bisequence: bisequence,
  bitraverseDefault: bitraverseDefault,
  bisequenceDefault: bisequenceDefault,
  ltraverse: ltraverse,
  rtraverse: rtraverse,
  bifor: bifor,
  lfor: lfor,
  rfor: rfor,
  bitraversableClown: bitraversableClown,
  bitraversableJoker: bitraversableJoker,
  bitraversableFlip: bitraversableFlip,
  bitraversableProduct: bitraversableProduct,
  bitraversableWrap: bitraversableWrap
};
},{"../Control.Applicative/index.js":"output/Control.Applicative/index.js","../Control.Apply/index.js":"output/Control.Apply/index.js","../Control.Category/index.js":"output/Control.Category/index.js","../Data.Bifoldable/index.js":"output/Data.Bifoldable/index.js","../Data.Bifunctor/index.js":"output/Data.Bifunctor/index.js","../Data.Bifunctor.Clown/index.js":"output/Data.Bifunctor.Clown/index.js","../Data.Bifunctor.Flip/index.js":"output/Data.Bifunctor.Flip/index.js","../Data.Bifunctor.Joker/index.js":"output/Data.Bifunctor.Joker/index.js","../Data.Bifunctor.Product/index.js":"output/Data.Bifunctor.Product/index.js","../Data.Bifunctor.Wrap/index.js":"output/Data.Bifunctor.Wrap/index.js","../Data.Functor/index.js":"output/Data.Functor/index.js","../Data.Traversable/index.js":"output/Data.Traversable/index.js"}],"output/Data.BooleanAlgebra/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var Data_HeytingAlgebra = require("../Data.HeytingAlgebra/index.js");

var BooleanAlgebraRecord = function BooleanAlgebraRecord(HeytingAlgebraRecord0) {
  this.HeytingAlgebraRecord0 = HeytingAlgebraRecord0;
};

var BooleanAlgebra = function BooleanAlgebra(HeytingAlgebra0) {
  this.HeytingAlgebra0 = HeytingAlgebra0;
};

var booleanAlgebraUnit = new BooleanAlgebra(function () {
  return Data_HeytingAlgebra.heytingAlgebraUnit;
});
var booleanAlgebraRecordNil = new BooleanAlgebraRecord(function () {
  return Data_HeytingAlgebra.heytingAlgebraRecordNil;
});

var booleanAlgebraRecordCons = function booleanAlgebraRecordCons(dictIsSymbol) {
  return function (dictCons) {
    return function (dictBooleanAlgebraRecord) {
      return function (dictBooleanAlgebra) {
        return new BooleanAlgebraRecord(function () {
          return Data_HeytingAlgebra.heytingAlgebraRecordCons(dictIsSymbol)()(dictBooleanAlgebraRecord.HeytingAlgebraRecord0())(dictBooleanAlgebra.HeytingAlgebra0());
        });
      };
    };
  };
};

var booleanAlgebraRecord = function booleanAlgebraRecord(dictRowToList) {
  return function (dictBooleanAlgebraRecord) {
    return new BooleanAlgebra(function () {
      return Data_HeytingAlgebra.heytingAlgebraRecord()(dictBooleanAlgebraRecord.HeytingAlgebraRecord0());
    });
  };
};

var booleanAlgebraFn = function booleanAlgebraFn(dictBooleanAlgebra) {
  return new BooleanAlgebra(function () {
    return Data_HeytingAlgebra.heytingAlgebraFunction(dictBooleanAlgebra.HeytingAlgebra0());
  });
};

var booleanAlgebraBoolean = new BooleanAlgebra(function () {
  return Data_HeytingAlgebra.heytingAlgebraBoolean;
});
module.exports = {
  BooleanAlgebra: BooleanAlgebra,
  BooleanAlgebraRecord: BooleanAlgebraRecord,
  booleanAlgebraBoolean: booleanAlgebraBoolean,
  booleanAlgebraUnit: booleanAlgebraUnit,
  booleanAlgebraFn: booleanAlgebraFn,
  booleanAlgebraRecord: booleanAlgebraRecord,
  booleanAlgebraRecordNil: booleanAlgebraRecordNil,
  booleanAlgebraRecordCons: booleanAlgebraRecordCons
};
},{"../Data.HeytingAlgebra/index.js":"output/Data.HeytingAlgebra/index.js"}],"output/Data.FunctorWithIndex/foreign.js":[function(require,module,exports) {
"use strict";

exports.mapWithIndexArray = function (f) {
  return function (xs) {
    var l = xs.length;
    var result = Array(l);

    for (var i = 0; i < l; i++) {
      result[i] = f(i)(xs[i]);
    }

    return result;
  };
};
},{}],"output/Data.FunctorWithIndex/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var $foreign = require("./foreign.js");

var Data_Function = require("../Data.Function/index.js");

var Data_Functor = require("../Data.Functor/index.js");

var Data_Maybe = require("../Data.Maybe/index.js");

var Data_Maybe_First = require("../Data.Maybe.First/index.js");

var Data_Maybe_Last = require("../Data.Maybe.Last/index.js");

var Data_Monoid_Additive = require("../Data.Monoid.Additive/index.js");

var Data_Monoid_Conj = require("../Data.Monoid.Conj/index.js");

var Data_Monoid_Disj = require("../Data.Monoid.Disj/index.js");

var Data_Monoid_Dual = require("../Data.Monoid.Dual/index.js");

var Data_Monoid_Multiplicative = require("../Data.Monoid.Multiplicative/index.js");

var Data_Unit = require("../Data.Unit/index.js");

var FunctorWithIndex = function FunctorWithIndex(Functor0, mapWithIndex) {
  this.Functor0 = Functor0;
  this.mapWithIndex = mapWithIndex;
};

var mapWithIndex = function mapWithIndex(dict) {
  return dict.mapWithIndex;
};

var mapDefault = function mapDefault(dictFunctorWithIndex) {
  return function (f) {
    return mapWithIndex(dictFunctorWithIndex)(Data_Function["const"](f));
  };
};

var functorWithIndexMultiplicative = new FunctorWithIndex(function () {
  return Data_Monoid_Multiplicative.functorMultiplicative;
}, function (f) {
  return Data_Functor.map(Data_Monoid_Multiplicative.functorMultiplicative)(f(Data_Unit.unit));
});
var functorWithIndexMaybe = new FunctorWithIndex(function () {
  return Data_Maybe.functorMaybe;
}, function (f) {
  return Data_Functor.map(Data_Maybe.functorMaybe)(f(Data_Unit.unit));
});
var functorWithIndexLast = new FunctorWithIndex(function () {
  return Data_Maybe_Last.functorLast;
}, function (f) {
  return Data_Functor.map(Data_Maybe_Last.functorLast)(f(Data_Unit.unit));
});
var functorWithIndexFirst = new FunctorWithIndex(function () {
  return Data_Maybe_First.functorFirst;
}, function (f) {
  return Data_Functor.map(Data_Maybe_First.functorFirst)(f(Data_Unit.unit));
});
var functorWithIndexDual = new FunctorWithIndex(function () {
  return Data_Monoid_Dual.functorDual;
}, function (f) {
  return Data_Functor.map(Data_Monoid_Dual.functorDual)(f(Data_Unit.unit));
});
var functorWithIndexDisj = new FunctorWithIndex(function () {
  return Data_Monoid_Disj.functorDisj;
}, function (f) {
  return Data_Functor.map(Data_Monoid_Disj.functorDisj)(f(Data_Unit.unit));
});
var functorWithIndexConj = new FunctorWithIndex(function () {
  return Data_Monoid_Conj.functorConj;
}, function (f) {
  return Data_Functor.map(Data_Monoid_Conj.functorConj)(f(Data_Unit.unit));
});
var functorWithIndexArray = new FunctorWithIndex(function () {
  return Data_Functor.functorArray;
}, $foreign.mapWithIndexArray);
var functorWithIndexAdditive = new FunctorWithIndex(function () {
  return Data_Monoid_Additive.functorAdditive;
}, function (f) {
  return Data_Functor.map(Data_Monoid_Additive.functorAdditive)(f(Data_Unit.unit));
});
module.exports = {
  FunctorWithIndex: FunctorWithIndex,
  mapWithIndex: mapWithIndex,
  mapDefault: mapDefault,
  functorWithIndexArray: functorWithIndexArray,
  functorWithIndexMaybe: functorWithIndexMaybe,
  functorWithIndexFirst: functorWithIndexFirst,
  functorWithIndexLast: functorWithIndexLast,
  functorWithIndexAdditive: functorWithIndexAdditive,
  functorWithIndexDual: functorWithIndexDual,
  functorWithIndexConj: functorWithIndexConj,
  functorWithIndexDisj: functorWithIndexDisj,
  functorWithIndexMultiplicative: functorWithIndexMultiplicative
};
},{"./foreign.js":"output/Data.FunctorWithIndex/foreign.js","../Data.Function/index.js":"output/Data.Function/index.js","../Data.Functor/index.js":"output/Data.Functor/index.js","../Data.Maybe/index.js":"output/Data.Maybe/index.js","../Data.Maybe.First/index.js":"output/Data.Maybe.First/index.js","../Data.Maybe.Last/index.js":"output/Data.Maybe.Last/index.js","../Data.Monoid.Additive/index.js":"output/Data.Monoid.Additive/index.js","../Data.Monoid.Conj/index.js":"output/Data.Monoid.Conj/index.js","../Data.Monoid.Disj/index.js":"output/Data.Monoid.Disj/index.js","../Data.Monoid.Dual/index.js":"output/Data.Monoid.Dual/index.js","../Data.Monoid.Multiplicative/index.js":"output/Data.Monoid.Multiplicative/index.js","../Data.Unit/index.js":"output/Data.Unit/index.js"}],"output/Data.FoldableWithIndex/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var Control_Applicative = require("../Control.Applicative/index.js");

var Control_Apply = require("../Control.Apply/index.js");

var Control_Bind = require("../Control.Bind/index.js");

var Control_Category = require("../Control.Category/index.js");

var Data_Foldable = require("../Data.Foldable/index.js");

var Data_Function = require("../Data.Function/index.js");

var Data_FunctorWithIndex = require("../Data.FunctorWithIndex/index.js");

var Data_Maybe = require("../Data.Maybe/index.js");

var Data_Monoid = require("../Data.Monoid/index.js");

var Data_Monoid_Conj = require("../Data.Monoid.Conj/index.js");

var Data_Monoid_Disj = require("../Data.Monoid.Disj/index.js");

var Data_Monoid_Dual = require("../Data.Monoid.Dual/index.js");

var Data_Monoid_Endo = require("../Data.Monoid.Endo/index.js");

var Data_Newtype = require("../Data.Newtype/index.js");

var Data_Semigroup = require("../Data.Semigroup/index.js");

var Data_Unit = require("../Data.Unit/index.js");

var Tuple = function () {
  function Tuple(value0, value1) {
    this.value0 = value0;
    this.value1 = value1;
  }

  ;

  Tuple.create = function (value0) {
    return function (value1) {
      return new Tuple(value0, value1);
    };
  };

  return Tuple;
}();

var FoldableWithIndex = function FoldableWithIndex(Foldable0, foldMapWithIndex, foldlWithIndex, foldrWithIndex) {
  this.Foldable0 = Foldable0;
  this.foldMapWithIndex = foldMapWithIndex;
  this.foldlWithIndex = foldlWithIndex;
  this.foldrWithIndex = foldrWithIndex;
};

var foldrWithIndex = function foldrWithIndex(dict) {
  return dict.foldrWithIndex;
};

var traverseWithIndex_ = function traverseWithIndex_(dictApplicative) {
  return function (dictFoldableWithIndex) {
    return function (f) {
      return foldrWithIndex(dictFoldableWithIndex)(function (i) {
        var $46 = Control_Apply.applySecond(dictApplicative.Apply0());
        var $47 = f(i);
        return function ($48) {
          return $46($47($48));
        };
      })(Control_Applicative.pure(dictApplicative)(Data_Unit.unit));
    };
  };
};

var forWithIndex_ = function forWithIndex_(dictApplicative) {
  return function (dictFoldableWithIndex) {
    return Data_Function.flip(traverseWithIndex_(dictApplicative)(dictFoldableWithIndex));
  };
};

var foldrDefault = function foldrDefault(dictFoldableWithIndex) {
  return function (f) {
    return foldrWithIndex(dictFoldableWithIndex)(Data_Function["const"](f));
  };
};

var foldlWithIndex = function foldlWithIndex(dict) {
  return dict.foldlWithIndex;
};

var foldlDefault = function foldlDefault(dictFoldableWithIndex) {
  return function (f) {
    return foldlWithIndex(dictFoldableWithIndex)(Data_Function["const"](f));
  };
};

var foldableWithIndexMultiplicative = new FoldableWithIndex(function () {
  return Data_Foldable.foldableMultiplicative;
}, function (dictMonoid) {
  return function (f) {
    return Data_Foldable.foldMap(Data_Foldable.foldableMultiplicative)(dictMonoid)(f(Data_Unit.unit));
  };
}, function (f) {
  return Data_Foldable.foldl(Data_Foldable.foldableMultiplicative)(f(Data_Unit.unit));
}, function (f) {
  return Data_Foldable.foldr(Data_Foldable.foldableMultiplicative)(f(Data_Unit.unit));
});
var foldableWithIndexMaybe = new FoldableWithIndex(function () {
  return Data_Foldable.foldableMaybe;
}, function (dictMonoid) {
  return function (f) {
    return Data_Foldable.foldMap(Data_Foldable.foldableMaybe)(dictMonoid)(f(Data_Unit.unit));
  };
}, function (f) {
  return Data_Foldable.foldl(Data_Foldable.foldableMaybe)(f(Data_Unit.unit));
}, function (f) {
  return Data_Foldable.foldr(Data_Foldable.foldableMaybe)(f(Data_Unit.unit));
});
var foldableWithIndexLast = new FoldableWithIndex(function () {
  return Data_Foldable.foldableLast;
}, function (dictMonoid) {
  return function (f) {
    return Data_Foldable.foldMap(Data_Foldable.foldableLast)(dictMonoid)(f(Data_Unit.unit));
  };
}, function (f) {
  return Data_Foldable.foldl(Data_Foldable.foldableLast)(f(Data_Unit.unit));
}, function (f) {
  return Data_Foldable.foldr(Data_Foldable.foldableLast)(f(Data_Unit.unit));
});
var foldableWithIndexFirst = new FoldableWithIndex(function () {
  return Data_Foldable.foldableFirst;
}, function (dictMonoid) {
  return function (f) {
    return Data_Foldable.foldMap(Data_Foldable.foldableFirst)(dictMonoid)(f(Data_Unit.unit));
  };
}, function (f) {
  return Data_Foldable.foldl(Data_Foldable.foldableFirst)(f(Data_Unit.unit));
}, function (f) {
  return Data_Foldable.foldr(Data_Foldable.foldableFirst)(f(Data_Unit.unit));
});
var foldableWithIndexDual = new FoldableWithIndex(function () {
  return Data_Foldable.foldableDual;
}, function (dictMonoid) {
  return function (f) {
    return Data_Foldable.foldMap(Data_Foldable.foldableDual)(dictMonoid)(f(Data_Unit.unit));
  };
}, function (f) {
  return Data_Foldable.foldl(Data_Foldable.foldableDual)(f(Data_Unit.unit));
}, function (f) {
  return Data_Foldable.foldr(Data_Foldable.foldableDual)(f(Data_Unit.unit));
});
var foldableWithIndexDisj = new FoldableWithIndex(function () {
  return Data_Foldable.foldableDisj;
}, function (dictMonoid) {
  return function (f) {
    return Data_Foldable.foldMap(Data_Foldable.foldableDisj)(dictMonoid)(f(Data_Unit.unit));
  };
}, function (f) {
  return Data_Foldable.foldl(Data_Foldable.foldableDisj)(f(Data_Unit.unit));
}, function (f) {
  return Data_Foldable.foldr(Data_Foldable.foldableDisj)(f(Data_Unit.unit));
});
var foldableWithIndexConj = new FoldableWithIndex(function () {
  return Data_Foldable.foldableConj;
}, function (dictMonoid) {
  return function (f) {
    return Data_Foldable.foldMap(Data_Foldable.foldableConj)(dictMonoid)(f(Data_Unit.unit));
  };
}, function (f) {
  return Data_Foldable.foldl(Data_Foldable.foldableConj)(f(Data_Unit.unit));
}, function (f) {
  return Data_Foldable.foldr(Data_Foldable.foldableConj)(f(Data_Unit.unit));
});
var foldableWithIndexAdditive = new FoldableWithIndex(function () {
  return Data_Foldable.foldableAdditive;
}, function (dictMonoid) {
  return function (f) {
    return Data_Foldable.foldMap(Data_Foldable.foldableAdditive)(dictMonoid)(f(Data_Unit.unit));
  };
}, function (f) {
  return Data_Foldable.foldl(Data_Foldable.foldableAdditive)(f(Data_Unit.unit));
}, function (f) {
  return Data_Foldable.foldr(Data_Foldable.foldableAdditive)(f(Data_Unit.unit));
});

var foldWithIndexM = function foldWithIndexM(dictFoldableWithIndex) {
  return function (dictMonad) {
    return function (f) {
      return function (a0) {
        return foldlWithIndex(dictFoldableWithIndex)(function (i) {
          return function (ma) {
            return function (b) {
              return Control_Bind.bind(dictMonad.Bind1())(ma)(Data_Function.flip(f(i))(b));
            };
          };
        })(Control_Applicative.pure(dictMonad.Applicative0())(a0));
      };
    };
  };
};

var foldMapWithIndexDefaultR = function foldMapWithIndexDefaultR(dictFoldableWithIndex) {
  return function (dictMonoid) {
    return function (f) {
      return foldrWithIndex(dictFoldableWithIndex)(function (i) {
        return function (x) {
          return function (acc) {
            return Data_Semigroup.append(dictMonoid.Semigroup0())(f(i)(x))(acc);
          };
        };
      })(Data_Monoid.mempty(dictMonoid));
    };
  };
};

var foldableWithIndexArray = new FoldableWithIndex(function () {
  return Data_Foldable.foldableArray;
}, function (dictMonoid) {
  return foldMapWithIndexDefaultR(foldableWithIndexArray)(dictMonoid);
}, function (f) {
  return function (z) {
    var $49 = Data_Foldable.foldl(Data_Foldable.foldableArray)(function (y) {
      return function (v) {
        return f(v.value0)(y)(v.value1);
      };
    })(z);
    var $50 = Data_FunctorWithIndex.mapWithIndex(Data_FunctorWithIndex.functorWithIndexArray)(Tuple.create);
    return function ($51) {
      return $49($50($51));
    };
  };
}, function (f) {
  return function (z) {
    var $52 = Data_Foldable.foldr(Data_Foldable.foldableArray)(function (v) {
      return function (y) {
        return f(v.value0)(v.value1)(y);
      };
    })(z);
    var $53 = Data_FunctorWithIndex.mapWithIndex(Data_FunctorWithIndex.functorWithIndexArray)(Tuple.create);
    return function ($54) {
      return $52($53($54));
    };
  };
});

var foldMapWithIndexDefaultL = function foldMapWithIndexDefaultL(dictFoldableWithIndex) {
  return function (dictMonoid) {
    return function (f) {
      return foldlWithIndex(dictFoldableWithIndex)(function (i) {
        return function (acc) {
          return function (x) {
            return Data_Semigroup.append(dictMonoid.Semigroup0())(acc)(f(i)(x));
          };
        };
      })(Data_Monoid.mempty(dictMonoid));
    };
  };
};

var foldMapWithIndex = function foldMapWithIndex(dict) {
  return dict.foldMapWithIndex;
};

var foldlWithIndexDefault = function foldlWithIndexDefault(dictFoldableWithIndex) {
  return function (c) {
    return function (u) {
      return function (xs) {
        return Data_Newtype.unwrap(Data_Newtype.newtypeEndo)(Data_Newtype.unwrap(Data_Newtype.newtypeDual)(foldMapWithIndex(dictFoldableWithIndex)(Data_Monoid_Dual.monoidDual(Data_Monoid_Endo.monoidEndo(Control_Category.categoryFn)))(function (i) {
          var $55 = Data_Function.flip(c(i));
          return function ($56) {
            return Data_Monoid_Dual.Dual(Data_Monoid_Endo.Endo($55($56)));
          };
        })(xs)))(u);
      };
    };
  };
};

var foldrWithIndexDefault = function foldrWithIndexDefault(dictFoldableWithIndex) {
  return function (c) {
    return function (u) {
      return function (xs) {
        return Data_Newtype.unwrap(Data_Newtype.newtypeEndo)(foldMapWithIndex(dictFoldableWithIndex)(Data_Monoid_Endo.monoidEndo(Control_Category.categoryFn))(function (i) {
          var $57 = c(i);
          return function ($58) {
            return Data_Monoid_Endo.Endo($57($58));
          };
        })(xs))(u);
      };
    };
  };
};

var surroundMapWithIndex = function surroundMapWithIndex(dictFoldableWithIndex) {
  return function (dictSemigroup) {
    return function (d) {
      return function (t) {
        return function (f) {
          var joined = function joined(i) {
            return function (a) {
              return function (m) {
                return Data_Semigroup.append(dictSemigroup)(d)(Data_Semigroup.append(dictSemigroup)(t(i)(a))(m));
              };
            };
          };

          return Data_Newtype.unwrap(Data_Newtype.newtypeEndo)(foldMapWithIndex(dictFoldableWithIndex)(Data_Monoid_Endo.monoidEndo(Control_Category.categoryFn))(joined)(f))(d);
        };
      };
    };
  };
};

var foldMapDefault = function foldMapDefault(dictFoldableWithIndex) {
  return function (dictMonoid) {
    return function (f) {
      return foldMapWithIndex(dictFoldableWithIndex)(dictMonoid)(Data_Function["const"](f));
    };
  };
};

var findWithIndex = function findWithIndex(dictFoldableWithIndex) {
  return function (p) {
    var go = function go(v) {
      return function (v1) {
        return function (v2) {
          if (v1 instanceof Data_Maybe.Nothing && p(v)(v2)) {
            return new Data_Maybe.Just({
              index: v,
              value: v2
            });
          }

          ;
          return v1;
        };
      };
    };

    return foldlWithIndex(dictFoldableWithIndex)(go)(Data_Maybe.Nothing.value);
  };
};

var anyWithIndex = function anyWithIndex(dictFoldableWithIndex) {
  return function (dictHeytingAlgebra) {
    return function (t) {
      var $59 = Data_Newtype.unwrap(Data_Newtype.newtypeDisj);
      var $60 = foldMapWithIndex(dictFoldableWithIndex)(Data_Monoid_Disj.monoidDisj(dictHeytingAlgebra))(function (i) {
        var $62 = t(i);
        return function ($63) {
          return Data_Monoid_Disj.Disj($62($63));
        };
      });
      return function ($61) {
        return $59($60($61));
      };
    };
  };
};

var allWithIndex = function allWithIndex(dictFoldableWithIndex) {
  return function (dictHeytingAlgebra) {
    return function (t) {
      var $64 = Data_Newtype.unwrap(Data_Newtype.newtypeConj);
      var $65 = foldMapWithIndex(dictFoldableWithIndex)(Data_Monoid_Conj.monoidConj(dictHeytingAlgebra))(function (i) {
        var $67 = t(i);
        return function ($68) {
          return Data_Monoid_Conj.Conj($67($68));
        };
      });
      return function ($66) {
        return $64($65($66));
      };
    };
  };
};

module.exports = {
  FoldableWithIndex: FoldableWithIndex,
  foldrWithIndex: foldrWithIndex,
  foldlWithIndex: foldlWithIndex,
  foldMapWithIndex: foldMapWithIndex,
  foldrWithIndexDefault: foldrWithIndexDefault,
  foldlWithIndexDefault: foldlWithIndexDefault,
  foldMapWithIndexDefaultR: foldMapWithIndexDefaultR,
  foldMapWithIndexDefaultL: foldMapWithIndexDefaultL,
  foldWithIndexM: foldWithIndexM,
  traverseWithIndex_: traverseWithIndex_,
  forWithIndex_: forWithIndex_,
  surroundMapWithIndex: surroundMapWithIndex,
  allWithIndex: allWithIndex,
  anyWithIndex: anyWithIndex,
  findWithIndex: findWithIndex,
  foldrDefault: foldrDefault,
  foldlDefault: foldlDefault,
  foldMapDefault: foldMapDefault,
  foldableWithIndexArray: foldableWithIndexArray,
  foldableWithIndexMaybe: foldableWithIndexMaybe,
  foldableWithIndexFirst: foldableWithIndexFirst,
  foldableWithIndexLast: foldableWithIndexLast,
  foldableWithIndexAdditive: foldableWithIndexAdditive,
  foldableWithIndexDual: foldableWithIndexDual,
  foldableWithIndexDisj: foldableWithIndexDisj,
  foldableWithIndexConj: foldableWithIndexConj,
  foldableWithIndexMultiplicative: foldableWithIndexMultiplicative
};
},{"../Control.Applicative/index.js":"output/Control.Applicative/index.js","../Control.Apply/index.js":"output/Control.Apply/index.js","../Control.Bind/index.js":"output/Control.Bind/index.js","../Control.Category/index.js":"output/Control.Category/index.js","../Data.Foldable/index.js":"output/Data.Foldable/index.js","../Data.Function/index.js":"output/Data.Function/index.js","../Data.FunctorWithIndex/index.js":"output/Data.FunctorWithIndex/index.js","../Data.Maybe/index.js":"output/Data.Maybe/index.js","../Data.Monoid/index.js":"output/Data.Monoid/index.js","../Data.Monoid.Conj/index.js":"output/Data.Monoid.Conj/index.js","../Data.Monoid.Disj/index.js":"output/Data.Monoid.Disj/index.js","../Data.Monoid.Dual/index.js":"output/Data.Monoid.Dual/index.js","../Data.Monoid.Endo/index.js":"output/Data.Monoid.Endo/index.js","../Data.Newtype/index.js":"output/Data.Newtype/index.js","../Data.Semigroup/index.js":"output/Data.Semigroup/index.js","../Data.Unit/index.js":"output/Data.Unit/index.js"}],"output/Data.Ord.Max/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var Data_Bounded = require("../Data.Bounded/index.js");

var Data_Monoid = require("../Data.Monoid/index.js");

var Data_Newtype = require("../Data.Newtype/index.js");

var Data_Ord = require("../Data.Ord/index.js");

var Data_Semigroup = require("../Data.Semigroup/index.js");

var Data_Show = require("../Data.Show/index.js");

var Max = function Max(x) {
  return x;
};

var showMax = function showMax(dictShow) {
  return new Data_Show.Show(function (v) {
    return "(Max " + (Data_Show.show(dictShow)(v) + ")");
  });
};

var semigroupMax = function semigroupMax(dictOrd) {
  return new Data_Semigroup.Semigroup(function (v) {
    return function (v1) {
      return Data_Ord.max(dictOrd)(v)(v1);
    };
  });
};

var newtypeMax = new Data_Newtype.Newtype(function (n) {
  return n;
}, Max);

var monoidMax = function monoidMax(dictBounded) {
  return new Data_Monoid.Monoid(function () {
    return semigroupMax(dictBounded.Ord0());
  }, Data_Bounded.bottom(dictBounded));
};

var eqMax = function eqMax(dictEq) {
  return dictEq;
};

var ordMax = function ordMax(dictOrd) {
  return new Data_Ord.Ord(function () {
    return eqMax(dictOrd.Eq0());
  }, function (v) {
    return function (v1) {
      return Data_Ord.compare(dictOrd)(v)(v1);
    };
  });
};

module.exports = {
  Max: Max,
  newtypeMax: newtypeMax,
  eqMax: eqMax,
  ordMax: ordMax,
  semigroupMax: semigroupMax,
  monoidMax: monoidMax,
  showMax: showMax
};
},{"../Data.Bounded/index.js":"output/Data.Bounded/index.js","../Data.Monoid/index.js":"output/Data.Monoid/index.js","../Data.Newtype/index.js":"output/Data.Newtype/index.js","../Data.Ord/index.js":"output/Data.Ord/index.js","../Data.Semigroup/index.js":"output/Data.Semigroup/index.js","../Data.Show/index.js":"output/Data.Show/index.js"}],"output/Data.Ord.Min/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var Data_Bounded = require("../Data.Bounded/index.js");

var Data_Monoid = require("../Data.Monoid/index.js");

var Data_Newtype = require("../Data.Newtype/index.js");

var Data_Ord = require("../Data.Ord/index.js");

var Data_Semigroup = require("../Data.Semigroup/index.js");

var Data_Show = require("../Data.Show/index.js");

var Min = function Min(x) {
  return x;
};

var showMin = function showMin(dictShow) {
  return new Data_Show.Show(function (v) {
    return "(Min " + (Data_Show.show(dictShow)(v) + ")");
  });
};

var semigroupMin = function semigroupMin(dictOrd) {
  return new Data_Semigroup.Semigroup(function (v) {
    return function (v1) {
      return Data_Ord.min(dictOrd)(v)(v1);
    };
  });
};

var newtypeMin = new Data_Newtype.Newtype(function (n) {
  return n;
}, Min);

var monoidMin = function monoidMin(dictBounded) {
  return new Data_Monoid.Monoid(function () {
    return semigroupMin(dictBounded.Ord0());
  }, Data_Bounded.top(dictBounded));
};

var eqMin = function eqMin(dictEq) {
  return dictEq;
};

var ordMin = function ordMin(dictOrd) {
  return new Data_Ord.Ord(function () {
    return eqMin(dictOrd.Eq0());
  }, function (v) {
    return function (v1) {
      return Data_Ord.compare(dictOrd)(v)(v1);
    };
  });
};

module.exports = {
  Min: Min,
  newtypeMin: newtypeMin,
  eqMin: eqMin,
  ordMin: ordMin,
  semigroupMin: semigroupMin,
  monoidMin: monoidMin,
  showMin: showMin
};
},{"../Data.Bounded/index.js":"output/Data.Bounded/index.js","../Data.Monoid/index.js":"output/Data.Monoid/index.js","../Data.Newtype/index.js":"output/Data.Newtype/index.js","../Data.Ord/index.js":"output/Data.Ord/index.js","../Data.Semigroup/index.js":"output/Data.Semigroup/index.js","../Data.Show/index.js":"output/Data.Show/index.js"}],"output/Data.Semigroup.Foldable/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var Control_Apply = require("../Control.Apply/index.js");

var Control_Category = require("../Control.Category/index.js");

var Data_Foldable = require("../Data.Foldable/index.js");

var Data_Function = require("../Data.Function/index.js");

var Data_Functor = require("../Data.Functor/index.js");

var Data_Newtype = require("../Data.Newtype/index.js");

var Data_Ord_Max = require("../Data.Ord.Max/index.js");

var Data_Ord_Min = require("../Data.Ord.Min/index.js");

var Data_Semigroup = require("../Data.Semigroup/index.js");

var Data_Unit = require("../Data.Unit/index.js");

var JoinWith = function JoinWith(x) {
  return x;
};

var Act = function Act(x) {
  return x;
};

var Foldable1 = function Foldable1(Foldable0, fold1, foldMap1) {
  this.Foldable0 = Foldable0;
  this.fold1 = fold1;
  this.foldMap1 = foldMap1;
};

var semigroupJoinWith = function semigroupJoinWith(dictSemigroup) {
  return new Data_Semigroup.Semigroup(function (v) {
    return function (v1) {
      return JoinWith(function (j) {
        return Data_Semigroup.append(dictSemigroup)(v(j))(Data_Semigroup.append(dictSemigroup)(j)(v1(j)));
      });
    };
  });
};

var semigroupAct = function semigroupAct(dictApply) {
  return new Data_Semigroup.Semigroup(function (v) {
    return function (v1) {
      return Control_Apply.applySecond(dictApply)(v)(v1);
    };
  });
};

var joinee = function joinee(v) {
  return v;
};

var getAct = function getAct(v) {
  return v;
};

var foldMap1 = function foldMap1(dict) {
  return dict.foldMap1;
};

var intercalateMap = function intercalateMap(dictFoldable1) {
  return function (dictSemigroup) {
    return function (j) {
      return function (f) {
        return function (foldable) {
          return joinee(foldMap1(dictFoldable1)(semigroupJoinWith(dictSemigroup))(function ($43) {
            return JoinWith(Data_Function["const"](f($43)));
          })(foldable))(j);
        };
      };
    };
  };
};

var intercalate = function intercalate(dictFoldable1) {
  return function (dictSemigroup) {
    return Data_Function.flip(intercalateMap(dictFoldable1)(dictSemigroup))(Control_Category.identity(Control_Category.categoryFn));
  };
};

var maximum = function maximum(dictOrd) {
  return function (dictFoldable1) {
    return Data_Newtype.ala(Data_Functor.functorFn)(Data_Ord_Max.newtypeMax)(Data_Ord_Max.newtypeMax)(Data_Ord_Max.Max)(foldMap1(dictFoldable1)(Data_Ord_Max.semigroupMax(dictOrd)));
  };
};

var minimum = function minimum(dictOrd) {
  return function (dictFoldable1) {
    return Data_Newtype.ala(Data_Functor.functorFn)(Data_Ord_Min.newtypeMin)(Data_Ord_Min.newtypeMin)(Data_Ord_Min.Min)(foldMap1(dictFoldable1)(Data_Ord_Min.semigroupMin(dictOrd)));
  };
};

var traverse1_ = function traverse1_(dictFoldable1) {
  return function (dictApply) {
    return function (f) {
      return function (t) {
        return Data_Functor.voidRight(dictApply.Functor0())(Data_Unit.unit)(getAct(foldMap1(dictFoldable1)(semigroupAct(dictApply))(function ($44) {
          return Act(f($44));
        })(t)));
      };
    };
  };
};

var for1_ = function for1_(dictFoldable1) {
  return function (dictApply) {
    return Data_Function.flip(traverse1_(dictFoldable1)(dictApply));
  };
};

var sequence1_ = function sequence1_(dictFoldable1) {
  return function (dictApply) {
    return traverse1_(dictFoldable1)(dictApply)(Control_Category.identity(Control_Category.categoryFn));
  };
};

var fold1Default = function fold1Default(dictFoldable1) {
  return function (dictSemigroup) {
    return foldMap1(dictFoldable1)(dictSemigroup)(Control_Category.identity(Control_Category.categoryFn));
  };
};

var foldableDual = new Foldable1(function () {
  return Data_Foldable.foldableDual;
}, function (dictSemigroup) {
  return fold1Default(foldableDual)(dictSemigroup);
}, function (dictSemigroup) {
  return function (f) {
    return function (v) {
      return f(v);
    };
  };
});
var foldableMultiplicative = new Foldable1(function () {
  return Data_Foldable.foldableMultiplicative;
}, function (dictSemigroup) {
  return fold1Default(foldableMultiplicative)(dictSemigroup);
}, function (dictSemigroup) {
  return function (f) {
    return function (v) {
      return f(v);
    };
  };
});

var fold1 = function fold1(dict) {
  return dict.fold1;
};

var foldMap1Default = function foldMap1Default(dictFoldable1) {
  return function (dictFunctor) {
    return function (dictSemigroup) {
      return function (f) {
        var $45 = fold1(dictFoldable1)(dictSemigroup);
        var $46 = Data_Functor.map(dictFunctor)(f);
        return function ($47) {
          return $45($46($47));
        };
      };
    };
  };
};

module.exports = {
  Foldable1: Foldable1,
  foldMap1: foldMap1,
  fold1: fold1,
  traverse1_: traverse1_,
  for1_: for1_,
  sequence1_: sequence1_,
  foldMap1Default: foldMap1Default,
  fold1Default: fold1Default,
  intercalate: intercalate,
  intercalateMap: intercalateMap,
  maximum: maximum,
  minimum: minimum,
  foldableDual: foldableDual,
  foldableMultiplicative: foldableMultiplicative
};
},{"../Control.Apply/index.js":"output/Control.Apply/index.js","../Control.Category/index.js":"output/Control.Category/index.js","../Data.Foldable/index.js":"output/Data.Foldable/index.js","../Data.Function/index.js":"output/Data.Function/index.js","../Data.Functor/index.js":"output/Data.Functor/index.js","../Data.Newtype/index.js":"output/Data.Newtype/index.js","../Data.Ord.Max/index.js":"output/Data.Ord.Max/index.js","../Data.Ord.Min/index.js":"output/Data.Ord.Min/index.js","../Data.Semigroup/index.js":"output/Data.Semigroup/index.js","../Data.Unit/index.js":"output/Data.Unit/index.js"}],"output/Data.Semigroup.Traversable/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var Control_Category = require("../Control.Category/index.js");

var Data_Functor = require("../Data.Functor/index.js");

var Data_Monoid_Dual = require("../Data.Monoid.Dual/index.js");

var Data_Monoid_Multiplicative = require("../Data.Monoid.Multiplicative/index.js");

var Data_Semigroup_Foldable = require("../Data.Semigroup.Foldable/index.js");

var Data_Traversable = require("../Data.Traversable/index.js");

var Traversable1 = function Traversable1(Foldable10, _Traversable, sequence1, traverse1) {
  this.Foldable10 = Foldable10;
  this.Traversable1 = _Traversable;
  this.sequence1 = sequence1;
  this.traverse1 = traverse1;
};

var traverse1 = function traverse1(dict) {
  return dict.traverse1;
};

var sequence1Default = function sequence1Default(dictTraversable1) {
  return function (dictApply) {
    return traverse1(dictTraversable1)(dictApply)(Control_Category.identity(Control_Category.categoryFn));
  };
};

var traversableDual = new Traversable1(function () {
  return Data_Semigroup_Foldable.foldableDual;
}, function () {
  return Data_Traversable.traversableDual;
}, function (dictApply) {
  return sequence1Default(traversableDual)(dictApply);
}, function (dictApply) {
  return function (f) {
    return function (v) {
      return Data_Functor.map(dictApply.Functor0())(Data_Monoid_Dual.Dual)(f(v));
    };
  };
});
var traversableMultiplicative = new Traversable1(function () {
  return Data_Semigroup_Foldable.foldableMultiplicative;
}, function () {
  return Data_Traversable.traversableMultiplicative;
}, function (dictApply) {
  return sequence1Default(traversableMultiplicative)(dictApply);
}, function (dictApply) {
  return function (f) {
    return function (v) {
      return Data_Functor.map(dictApply.Functor0())(Data_Monoid_Multiplicative.Multiplicative)(f(v));
    };
  };
});

var sequence1 = function sequence1(dict) {
  return dict.sequence1;
};

var traverse1Default = function traverse1Default(dictTraversable1) {
  return function (dictApply) {
    return function (f) {
      return function (ta) {
        return sequence1(dictTraversable1)(dictApply)(Data_Functor.map(dictTraversable1.Traversable1().Functor0())(f)(ta));
      };
    };
  };
};

module.exports = {
  sequence1: sequence1,
  traverse1: traverse1,
  Traversable1: Traversable1,
  traverse1Default: traverse1Default,
  sequence1Default: sequence1Default,
  traversableDual: traversableDual,
  traversableMultiplicative: traversableMultiplicative
};
},{"../Control.Category/index.js":"output/Control.Category/index.js","../Data.Functor/index.js":"output/Data.Functor/index.js","../Data.Monoid.Dual/index.js":"output/Data.Monoid.Dual/index.js","../Data.Monoid.Multiplicative/index.js":"output/Data.Monoid.Multiplicative/index.js","../Data.Semigroup.Foldable/index.js":"output/Data.Semigroup.Foldable/index.js","../Data.Traversable/index.js":"output/Data.Traversable/index.js"}],"output/Data.TraversableWithIndex/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var Data_FoldableWithIndex = require("../Data.FoldableWithIndex/index.js");

var Data_Function = require("../Data.Function/index.js");

var Data_FunctorWithIndex = require("../Data.FunctorWithIndex/index.js");

var Data_Traversable = require("../Data.Traversable/index.js");

var Data_Traversable_Accum_Internal = require("../Data.Traversable.Accum.Internal/index.js");

var Data_Unit = require("../Data.Unit/index.js");

var TraversableWithIndex = function TraversableWithIndex(FoldableWithIndex1, FunctorWithIndex0, Traversable2, traverseWithIndex) {
  this.FoldableWithIndex1 = FoldableWithIndex1;
  this.FunctorWithIndex0 = FunctorWithIndex0;
  this.Traversable2 = Traversable2;
  this.traverseWithIndex = traverseWithIndex;
};

var traverseWithIndexDefault = function traverseWithIndexDefault(dictTraversableWithIndex) {
  return function (dictApplicative) {
    return function (f) {
      var $19 = Data_Traversable.sequence(dictTraversableWithIndex.Traversable2())(dictApplicative);
      var $20 = Data_FunctorWithIndex.mapWithIndex(dictTraversableWithIndex.FunctorWithIndex0())(f);
      return function ($21) {
        return $19($20($21));
      };
    };
  };
};

var traverseWithIndex = function traverseWithIndex(dict) {
  return dict.traverseWithIndex;
};

var traverseDefault = function traverseDefault(dictTraversableWithIndex) {
  return function (dictApplicative) {
    return function (f) {
      return traverseWithIndex(dictTraversableWithIndex)(dictApplicative)(Data_Function["const"](f));
    };
  };
};

var traversableWithIndexMultiplicative = new TraversableWithIndex(function () {
  return Data_FoldableWithIndex.foldableWithIndexMultiplicative;
}, function () {
  return Data_FunctorWithIndex.functorWithIndexMultiplicative;
}, function () {
  return Data_Traversable.traversableMultiplicative;
}, function (dictApplicative) {
  return function (f) {
    return Data_Traversable.traverse(Data_Traversable.traversableMultiplicative)(dictApplicative)(f(Data_Unit.unit));
  };
});
var traversableWithIndexMaybe = new TraversableWithIndex(function () {
  return Data_FoldableWithIndex.foldableWithIndexMaybe;
}, function () {
  return Data_FunctorWithIndex.functorWithIndexMaybe;
}, function () {
  return Data_Traversable.traversableMaybe;
}, function (dictApplicative) {
  return function (f) {
    return Data_Traversable.traverse(Data_Traversable.traversableMaybe)(dictApplicative)(f(Data_Unit.unit));
  };
});
var traversableWithIndexLast = new TraversableWithIndex(function () {
  return Data_FoldableWithIndex.foldableWithIndexLast;
}, function () {
  return Data_FunctorWithIndex.functorWithIndexLast;
}, function () {
  return Data_Traversable.traversableLast;
}, function (dictApplicative) {
  return function (f) {
    return Data_Traversable.traverse(Data_Traversable.traversableLast)(dictApplicative)(f(Data_Unit.unit));
  };
});
var traversableWithIndexFirst = new TraversableWithIndex(function () {
  return Data_FoldableWithIndex.foldableWithIndexFirst;
}, function () {
  return Data_FunctorWithIndex.functorWithIndexFirst;
}, function () {
  return Data_Traversable.traversableFirst;
}, function (dictApplicative) {
  return function (f) {
    return Data_Traversable.traverse(Data_Traversable.traversableFirst)(dictApplicative)(f(Data_Unit.unit));
  };
});
var traversableWithIndexDual = new TraversableWithIndex(function () {
  return Data_FoldableWithIndex.foldableWithIndexDual;
}, function () {
  return Data_FunctorWithIndex.functorWithIndexDual;
}, function () {
  return Data_Traversable.traversableDual;
}, function (dictApplicative) {
  return function (f) {
    return Data_Traversable.traverse(Data_Traversable.traversableDual)(dictApplicative)(f(Data_Unit.unit));
  };
});
var traversableWithIndexDisj = new TraversableWithIndex(function () {
  return Data_FoldableWithIndex.foldableWithIndexDisj;
}, function () {
  return Data_FunctorWithIndex.functorWithIndexDisj;
}, function () {
  return Data_Traversable.traversableDisj;
}, function (dictApplicative) {
  return function (f) {
    return Data_Traversable.traverse(Data_Traversable.traversableDisj)(dictApplicative)(f(Data_Unit.unit));
  };
});
var traversableWithIndexConj = new TraversableWithIndex(function () {
  return Data_FoldableWithIndex.foldableWithIndexConj;
}, function () {
  return Data_FunctorWithIndex.functorWithIndexConj;
}, function () {
  return Data_Traversable.traversableConj;
}, function (dictApplicative) {
  return function (f) {
    return Data_Traversable.traverse(Data_Traversable.traversableConj)(dictApplicative)(f(Data_Unit.unit));
  };
});
var traversableWithIndexArray = new TraversableWithIndex(function () {
  return Data_FoldableWithIndex.foldableWithIndexArray;
}, function () {
  return Data_FunctorWithIndex.functorWithIndexArray;
}, function () {
  return Data_Traversable.traversableArray;
}, function (dictApplicative) {
  return traverseWithIndexDefault(traversableWithIndexArray)(dictApplicative);
});
var traversableWithIndexAdditive = new TraversableWithIndex(function () {
  return Data_FoldableWithIndex.foldableWithIndexAdditive;
}, function () {
  return Data_FunctorWithIndex.functorWithIndexAdditive;
}, function () {
  return Data_Traversable.traversableAdditive;
}, function (dictApplicative) {
  return function (f) {
    return Data_Traversable.traverse(Data_Traversable.traversableAdditive)(dictApplicative)(f(Data_Unit.unit));
  };
});

var mapAccumRWithIndex = function mapAccumRWithIndex(dictTraversableWithIndex) {
  return function (f) {
    return function (s0) {
      return function (xs) {
        return Data_Traversable_Accum_Internal.stateR(traverseWithIndex(dictTraversableWithIndex)(Data_Traversable_Accum_Internal.applicativeStateR)(function (i) {
          return function (a) {
            return function (s) {
              return f(i)(s)(a);
            };
          };
        })(xs))(s0);
      };
    };
  };
};

var scanrWithIndex = function scanrWithIndex(dictTraversableWithIndex) {
  return function (f) {
    return function (b0) {
      return function (xs) {
        return mapAccumRWithIndex(dictTraversableWithIndex)(function (i) {
          return function (b) {
            return function (a) {
              var b$prime = f(i)(a)(b);
              return {
                accum: b$prime,
                value: b$prime
              };
            };
          };
        })(b0)(xs).value;
      };
    };
  };
};

var mapAccumLWithIndex = function mapAccumLWithIndex(dictTraversableWithIndex) {
  return function (f) {
    return function (s0) {
      return function (xs) {
        return Data_Traversable_Accum_Internal.stateL(traverseWithIndex(dictTraversableWithIndex)(Data_Traversable_Accum_Internal.applicativeStateL)(function (i) {
          return function (a) {
            return function (s) {
              return f(i)(s)(a);
            };
          };
        })(xs))(s0);
      };
    };
  };
};

var scanlWithIndex = function scanlWithIndex(dictTraversableWithIndex) {
  return function (f) {
    return function (b0) {
      return function (xs) {
        return mapAccumLWithIndex(dictTraversableWithIndex)(function (i) {
          return function (b) {
            return function (a) {
              var b$prime = f(i)(b)(a);
              return {
                accum: b$prime,
                value: b$prime
              };
            };
          };
        })(b0)(xs).value;
      };
    };
  };
};

var forWithIndex = function forWithIndex(dictApplicative) {
  return function (dictTraversableWithIndex) {
    return Data_Function.flip(traverseWithIndex(dictTraversableWithIndex)(dictApplicative));
  };
};

module.exports = {
  TraversableWithIndex: TraversableWithIndex,
  traverseWithIndex: traverseWithIndex,
  traverseWithIndexDefault: traverseWithIndexDefault,
  forWithIndex: forWithIndex,
  scanlWithIndex: scanlWithIndex,
  mapAccumLWithIndex: mapAccumLWithIndex,
  scanrWithIndex: scanrWithIndex,
  mapAccumRWithIndex: mapAccumRWithIndex,
  traverseDefault: traverseDefault,
  traversableWithIndexArray: traversableWithIndexArray,
  traversableWithIndexMaybe: traversableWithIndexMaybe,
  traversableWithIndexFirst: traversableWithIndexFirst,
  traversableWithIndexLast: traversableWithIndexLast,
  traversableWithIndexAdditive: traversableWithIndexAdditive,
  traversableWithIndexDual: traversableWithIndexDual,
  traversableWithIndexConj: traversableWithIndexConj,
  traversableWithIndexDisj: traversableWithIndexDisj,
  traversableWithIndexMultiplicative: traversableWithIndexMultiplicative
};
},{"../Data.FoldableWithIndex/index.js":"output/Data.FoldableWithIndex/index.js","../Data.Function/index.js":"output/Data.Function/index.js","../Data.FunctorWithIndex/index.js":"output/Data.FunctorWithIndex/index.js","../Data.Traversable/index.js":"output/Data.Traversable/index.js","../Data.Traversable.Accum.Internal/index.js":"output/Data.Traversable.Accum.Internal/index.js","../Data.Unit/index.js":"output/Data.Unit/index.js"}],"output/Data.Identity/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var Control_Alt = require("../Control.Alt/index.js");

var Control_Applicative = require("../Control.Applicative/index.js");

var Control_Apply = require("../Control.Apply/index.js");

var Control_Bind = require("../Control.Bind/index.js");

var Control_Comonad = require("../Control.Comonad/index.js");

var Control_Extend = require("../Control.Extend/index.js");

var Control_Monad = require("../Control.Monad/index.js");

var Data_Eq = require("../Data.Eq/index.js");

var Data_Foldable = require("../Data.Foldable/index.js");

var Data_FoldableWithIndex = require("../Data.FoldableWithIndex/index.js");

var Data_Functor = require("../Data.Functor/index.js");

var Data_Functor_Invariant = require("../Data.Functor.Invariant/index.js");

var Data_FunctorWithIndex = require("../Data.FunctorWithIndex/index.js");

var Data_Newtype = require("../Data.Newtype/index.js");

var Data_Ord = require("../Data.Ord/index.js");

var Data_Semigroup_Foldable = require("../Data.Semigroup.Foldable/index.js");

var Data_Semigroup_Traversable = require("../Data.Semigroup.Traversable/index.js");

var Data_Show = require("../Data.Show/index.js");

var Data_Traversable = require("../Data.Traversable/index.js");

var Data_TraversableWithIndex = require("../Data.TraversableWithIndex/index.js");

var Data_Unit = require("../Data.Unit/index.js");

var Identity = function Identity(x) {
  return x;
};

var showIdentity = function showIdentity(dictShow) {
  return new Data_Show.Show(function (v) {
    return "(Identity " + (Data_Show.show(dictShow)(v) + ")");
  });
};

var semiringIdentity = function semiringIdentity(dictSemiring) {
  return dictSemiring;
};

var semigroupIdenity = function semigroupIdenity(dictSemigroup) {
  return dictSemigroup;
};

var ringIdentity = function ringIdentity(dictRing) {
  return dictRing;
};

var ordIdentity = function ordIdentity(dictOrd) {
  return dictOrd;
};

var newtypeIdentity = new Data_Newtype.Newtype(function (n) {
  return n;
}, Identity);

var monoidIdentity = function monoidIdentity(dictMonoid) {
  return dictMonoid;
};

var lazyIdentity = function lazyIdentity(dictLazy) {
  return dictLazy;
};

var heytingAlgebraIdentity = function heytingAlgebraIdentity(dictHeytingAlgebra) {
  return dictHeytingAlgebra;
};

var functorIdentity = new Data_Functor.Functor(function (f) {
  return function (m) {
    return f(m);
  };
});
var functorWithIndexIdentity = new Data_FunctorWithIndex.FunctorWithIndex(function () {
  return functorIdentity;
}, function (f) {
  return function (v) {
    return f(Data_Unit.unit)(v);
  };
});
var invariantIdentity = new Data_Functor_Invariant.Invariant(Data_Functor_Invariant.imapF(functorIdentity));
var foldableIdentity = new Data_Foldable.Foldable(function (dictMonoid) {
  return function (f) {
    return function (v) {
      return f(v);
    };
  };
}, function (f) {
  return function (z) {
    return function (v) {
      return f(z)(v);
    };
  };
}, function (f) {
  return function (z) {
    return function (v) {
      return f(v)(z);
    };
  };
});
var foldableWithIndexIdentity = new Data_FoldableWithIndex.FoldableWithIndex(function () {
  return foldableIdentity;
}, function (dictMonoid) {
  return function (f) {
    return function (v) {
      return f(Data_Unit.unit)(v);
    };
  };
}, function (f) {
  return function (z) {
    return function (v) {
      return f(Data_Unit.unit)(z)(v);
    };
  };
}, function (f) {
  return function (z) {
    return function (v) {
      return f(Data_Unit.unit)(v)(z);
    };
  };
});
var traversableIdentity = new Data_Traversable.Traversable(function () {
  return foldableIdentity;
}, function () {
  return functorIdentity;
}, function (dictApplicative) {
  return function (v) {
    return Data_Functor.map(dictApplicative.Apply0().Functor0())(Identity)(v);
  };
}, function (dictApplicative) {
  return function (f) {
    return function (v) {
      return Data_Functor.map(dictApplicative.Apply0().Functor0())(Identity)(f(v));
    };
  };
});
var traversableWithIndexIdentity = new Data_TraversableWithIndex.TraversableWithIndex(function () {
  return foldableWithIndexIdentity;
}, function () {
  return functorWithIndexIdentity;
}, function () {
  return traversableIdentity;
}, function (dictApplicative) {
  return function (f) {
    return function (v) {
      return Data_Functor.map(dictApplicative.Apply0().Functor0())(Identity)(f(Data_Unit.unit)(v));
    };
  };
});
var foldable1Identity = new Data_Semigroup_Foldable.Foldable1(function () {
  return foldableIdentity;
}, function (dictSemigroup) {
  return function (v) {
    return v;
  };
}, function (dictSemigroup) {
  return function (f) {
    return function (v) {
      return f(v);
    };
  };
});
var traversable1Identity = new Data_Semigroup_Traversable.Traversable1(function () {
  return foldable1Identity;
}, function () {
  return traversableIdentity;
}, function (dictApply) {
  return function (v) {
    return Data_Functor.map(dictApply.Functor0())(Identity)(v);
  };
}, function (dictApply) {
  return function (f) {
    return function (v) {
      return Data_Functor.map(dictApply.Functor0())(Identity)(f(v));
    };
  };
});
var extendIdentity = new Control_Extend.Extend(function () {
  return functorIdentity;
}, function (f) {
  return function (m) {
    return f(m);
  };
});

var euclideanRingIdentity = function euclideanRingIdentity(dictEuclideanRing) {
  return dictEuclideanRing;
};

var eqIdentity = function eqIdentity(dictEq) {
  return dictEq;
};

var eq1Identity = new Data_Eq.Eq1(function (dictEq) {
  return Data_Eq.eq(eqIdentity(dictEq));
});
var ord1Identity = new Data_Ord.Ord1(function () {
  return eq1Identity;
}, function (dictOrd) {
  return Data_Ord.compare(ordIdentity(dictOrd));
});
var comonadIdentity = new Control_Comonad.Comonad(function () {
  return extendIdentity;
}, function (v) {
  return v;
});

var commutativeRingIdentity = function commutativeRingIdentity(dictCommutativeRing) {
  return dictCommutativeRing;
};

var boundedIdentity = function boundedIdentity(dictBounded) {
  return dictBounded;
};

var booleanAlgebraIdentity = function booleanAlgebraIdentity(dictBooleanAlgebra) {
  return dictBooleanAlgebra;
};

var applyIdentity = new Control_Apply.Apply(function () {
  return functorIdentity;
}, function (v) {
  return function (v1) {
    return v(v1);
  };
});
var bindIdentity = new Control_Bind.Bind(function () {
  return applyIdentity;
}, function (v) {
  return function (f) {
    return f(v);
  };
});
var applicativeIdentity = new Control_Applicative.Applicative(function () {
  return applyIdentity;
}, Identity);
var monadIdentity = new Control_Monad.Monad(function () {
  return applicativeIdentity;
}, function () {
  return bindIdentity;
});
var altIdentity = new Control_Alt.Alt(function () {
  return functorIdentity;
}, function (x) {
  return function (v) {
    return x;
  };
});
module.exports = {
  Identity: Identity,
  newtypeIdentity: newtypeIdentity,
  eqIdentity: eqIdentity,
  ordIdentity: ordIdentity,
  boundedIdentity: boundedIdentity,
  heytingAlgebraIdentity: heytingAlgebraIdentity,
  booleanAlgebraIdentity: booleanAlgebraIdentity,
  semigroupIdenity: semigroupIdenity,
  monoidIdentity: monoidIdentity,
  semiringIdentity: semiringIdentity,
  euclideanRingIdentity: euclideanRingIdentity,
  ringIdentity: ringIdentity,
  commutativeRingIdentity: commutativeRingIdentity,
  lazyIdentity: lazyIdentity,
  showIdentity: showIdentity,
  eq1Identity: eq1Identity,
  ord1Identity: ord1Identity,
  functorIdentity: functorIdentity,
  functorWithIndexIdentity: functorWithIndexIdentity,
  invariantIdentity: invariantIdentity,
  altIdentity: altIdentity,
  applyIdentity: applyIdentity,
  applicativeIdentity: applicativeIdentity,
  bindIdentity: bindIdentity,
  monadIdentity: monadIdentity,
  extendIdentity: extendIdentity,
  comonadIdentity: comonadIdentity,
  foldableIdentity: foldableIdentity,
  foldable1Identity: foldable1Identity,
  foldableWithIndexIdentity: foldableWithIndexIdentity,
  traversableIdentity: traversableIdentity,
  traversable1Identity: traversable1Identity,
  traversableWithIndexIdentity: traversableWithIndexIdentity
};
},{"../Control.Alt/index.js":"output/Control.Alt/index.js","../Control.Applicative/index.js":"output/Control.Applicative/index.js","../Control.Apply/index.js":"output/Control.Apply/index.js","../Control.Bind/index.js":"output/Control.Bind/index.js","../Control.Comonad/index.js":"output/Control.Comonad/index.js","../Control.Extend/index.js":"output/Control.Extend/index.js","../Control.Monad/index.js":"output/Control.Monad/index.js","../Data.Eq/index.js":"output/Data.Eq/index.js","../Data.Foldable/index.js":"output/Data.Foldable/index.js","../Data.FoldableWithIndex/index.js":"output/Data.FoldableWithIndex/index.js","../Data.Functor/index.js":"output/Data.Functor/index.js","../Data.Functor.Invariant/index.js":"output/Data.Functor.Invariant/index.js","../Data.FunctorWithIndex/index.js":"output/Data.FunctorWithIndex/index.js","../Data.Newtype/index.js":"output/Data.Newtype/index.js","../Data.Ord/index.js":"output/Data.Ord/index.js","../Data.Semigroup.Foldable/index.js":"output/Data.Semigroup.Foldable/index.js","../Data.Semigroup.Traversable/index.js":"output/Data.Semigroup.Traversable/index.js","../Data.Show/index.js":"output/Data.Show/index.js","../Data.Traversable/index.js":"output/Data.Traversable/index.js","../Data.TraversableWithIndex/index.js":"output/Data.TraversableWithIndex/index.js","../Data.Unit/index.js":"output/Data.Unit/index.js"}],"output/Data.Distributive/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var Control_Category = require("../Control.Category/index.js");

var Data_Functor = require("../Data.Functor/index.js");

var Data_Identity = require("../Data.Identity/index.js");

var Data_Newtype = require("../Data.Newtype/index.js");

var Distributive = function Distributive(Functor0, collect, distribute) {
  this.Functor0 = Functor0;
  this.collect = collect;
  this.distribute = distribute;
};

var distributiveIdentity = new Distributive(function () {
  return Data_Identity.functorIdentity;
}, function (dictFunctor) {
  return function (f) {
    var $11 = Data_Functor.map(dictFunctor)(function () {
      var $13 = Data_Newtype.unwrap(Data_Identity.newtypeIdentity);
      return function ($14) {
        return $13(f($14));
      };
    }());
    return function ($12) {
      return Data_Identity.Identity($11($12));
    };
  };
}, function (dictFunctor) {
  var $15 = Data_Functor.map(dictFunctor)(Data_Newtype.unwrap(Data_Identity.newtypeIdentity));
  return function ($16) {
    return Data_Identity.Identity($15($16));
  };
});

var distribute = function distribute(dict) {
  return dict.distribute;
};

var distributiveFunction = new Distributive(function () {
  return Data_Functor.functorFn;
}, function (dictFunctor) {
  return function (f) {
    var $17 = distribute(distributiveFunction)(dictFunctor);
    var $18 = Data_Functor.map(dictFunctor)(f);
    return function ($19) {
      return $17($18($19));
    };
  };
}, function (dictFunctor) {
  return function (a) {
    return function (e) {
      return Data_Functor.map(dictFunctor)(function (v) {
        return v(e);
      })(a);
    };
  };
});

var cotraverse = function cotraverse(dictDistributive) {
  return function (dictFunctor) {
    return function (f) {
      var $20 = Data_Functor.map(dictDistributive.Functor0())(f);
      var $21 = distribute(dictDistributive)(dictFunctor);
      return function ($22) {
        return $20($21($22));
      };
    };
  };
};

var collectDefault = function collectDefault(dictDistributive) {
  return function (dictFunctor) {
    return function (f) {
      var $23 = distribute(dictDistributive)(dictFunctor);
      var $24 = Data_Functor.map(dictFunctor)(f);
      return function ($25) {
        return $23($24($25));
      };
    };
  };
};

var collect = function collect(dict) {
  return dict.collect;
};

var distributeDefault = function distributeDefault(dictDistributive) {
  return function (dictFunctor) {
    return collect(dictDistributive)(dictFunctor)(Control_Category.identity(Control_Category.categoryFn));
  };
};

module.exports = {
  collect: collect,
  distribute: distribute,
  Distributive: Distributive,
  distributeDefault: distributeDefault,
  collectDefault: collectDefault,
  cotraverse: cotraverse,
  distributiveIdentity: distributiveIdentity,
  distributiveFunction: distributiveFunction
};
},{"../Control.Category/index.js":"output/Control.Category/index.js","../Data.Functor/index.js":"output/Data.Functor/index.js","../Data.Identity/index.js":"output/Data.Identity/index.js","../Data.Newtype/index.js":"output/Data.Newtype/index.js"}],"output/Type.Equality/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var TypeEquals = function TypeEquals(from, to) {
  this.from = from;
  this.to = to;
};

var to = function to(dict) {
  return dict.to;
};

var refl = new TypeEquals(function (a) {
  return a;
}, function (a) {
  return a;
});

var from = function from(dict) {
  return dict.from;
};

module.exports = {
  TypeEquals: TypeEquals,
  to: to,
  from: from,
  refl: refl
};
},{}],"output/Data.Tuple/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var Control_Applicative = require("../Control.Applicative/index.js");

var Control_Apply = require("../Control.Apply/index.js");

var Control_Biapplicative = require("../Control.Biapplicative/index.js");

var Control_Biapply = require("../Control.Biapply/index.js");

var Control_Bind = require("../Control.Bind/index.js");

var Control_Comonad = require("../Control.Comonad/index.js");

var Control_Extend = require("../Control.Extend/index.js");

var Control_Lazy = require("../Control.Lazy/index.js");

var Control_Monad = require("../Control.Monad/index.js");

var Control_Semigroupoid = require("../Control.Semigroupoid/index.js");

var Data_Bifoldable = require("../Data.Bifoldable/index.js");

var Data_Bifunctor = require("../Data.Bifunctor/index.js");

var Data_Bitraversable = require("../Data.Bitraversable/index.js");

var Data_BooleanAlgebra = require("../Data.BooleanAlgebra/index.js");

var Data_Bounded = require("../Data.Bounded/index.js");

var Data_CommutativeRing = require("../Data.CommutativeRing/index.js");

var Data_Distributive = require("../Data.Distributive/index.js");

var Data_Eq = require("../Data.Eq/index.js");

var Data_Foldable = require("../Data.Foldable/index.js");

var Data_FoldableWithIndex = require("../Data.FoldableWithIndex/index.js");

var Data_Functor = require("../Data.Functor/index.js");

var Data_Functor_Invariant = require("../Data.Functor.Invariant/index.js");

var Data_FunctorWithIndex = require("../Data.FunctorWithIndex/index.js");

var Data_HeytingAlgebra = require("../Data.HeytingAlgebra/index.js");

var Data_Maybe = require("../Data.Maybe/index.js");

var Data_Maybe_First = require("../Data.Maybe.First/index.js");

var Data_Monoid = require("../Data.Monoid/index.js");

var Data_Newtype = require("../Data.Newtype/index.js");

var Data_Ord = require("../Data.Ord/index.js");

var Data_Ordering = require("../Data.Ordering/index.js");

var Data_Ring = require("../Data.Ring/index.js");

var Data_Semigroup = require("../Data.Semigroup/index.js");

var Data_Semigroup_Foldable = require("../Data.Semigroup.Foldable/index.js");

var Data_Semigroup_Traversable = require("../Data.Semigroup.Traversable/index.js");

var Data_Semiring = require("../Data.Semiring/index.js");

var Data_Show = require("../Data.Show/index.js");

var Data_Traversable = require("../Data.Traversable/index.js");

var Data_TraversableWithIndex = require("../Data.TraversableWithIndex/index.js");

var Data_Unit = require("../Data.Unit/index.js");

var Type_Equality = require("../Type.Equality/index.js");

var Tuple = function () {
  function Tuple(value0, value1) {
    this.value0 = value0;
    this.value1 = value1;
  }

  ;

  Tuple.create = function (value0) {
    return function (value1) {
      return new Tuple(value0, value1);
    };
  };

  return Tuple;
}();

var uncurry = function uncurry(f) {
  return function (v) {
    return f(v.value0)(v.value1);
  };
};

var swap = function swap(v) {
  return new Tuple(v.value1, v.value0);
};

var snd = function snd(v) {
  return v.value1;
};

var showTuple = function showTuple(dictShow) {
  return function (dictShow1) {
    return new Data_Show.Show(function (v) {
      return "(Tuple " + (Data_Show.show(dictShow)(v.value0) + (" " + (Data_Show.show(dictShow1)(v.value1) + ")")));
    });
  };
};

var semiringTuple = function semiringTuple(dictSemiring) {
  return function (dictSemiring1) {
    return new Data_Semiring.Semiring(function (v) {
      return function (v1) {
        return new Tuple(Data_Semiring.add(dictSemiring)(v.value0)(v1.value0), Data_Semiring.add(dictSemiring1)(v.value1)(v1.value1));
      };
    }, function (v) {
      return function (v1) {
        return new Tuple(Data_Semiring.mul(dictSemiring)(v.value0)(v1.value0), Data_Semiring.mul(dictSemiring1)(v.value1)(v1.value1));
      };
    }, new Tuple(Data_Semiring.one(dictSemiring), Data_Semiring.one(dictSemiring1)), new Tuple(Data_Semiring.zero(dictSemiring), Data_Semiring.zero(dictSemiring1)));
  };
};

var semigroupoidTuple = new Control_Semigroupoid.Semigroupoid(function (v) {
  return function (v1) {
    return new Tuple(v1.value0, v.value1);
  };
});

var semigroupTuple = function semigroupTuple(dictSemigroup) {
  return function (dictSemigroup1) {
    return new Data_Semigroup.Semigroup(function (v) {
      return function (v1) {
        return new Tuple(Data_Semigroup.append(dictSemigroup)(v.value0)(v1.value0), Data_Semigroup.append(dictSemigroup1)(v.value1)(v1.value1));
      };
    });
  };
};

var ringTuple = function ringTuple(dictRing) {
  return function (dictRing1) {
    return new Data_Ring.Ring(function () {
      return semiringTuple(dictRing.Semiring0())(dictRing1.Semiring0());
    }, function (v) {
      return function (v1) {
        return new Tuple(Data_Ring.sub(dictRing)(v.value0)(v1.value0), Data_Ring.sub(dictRing1)(v.value1)(v1.value1));
      };
    });
  };
};

var monoidTuple = function monoidTuple(dictMonoid) {
  return function (dictMonoid1) {
    return new Data_Monoid.Monoid(function () {
      return semigroupTuple(dictMonoid.Semigroup0())(dictMonoid1.Semigroup0());
    }, new Tuple(Data_Monoid.mempty(dictMonoid), Data_Monoid.mempty(dictMonoid1)));
  };
};

var lookup = function lookup(dictFoldable) {
  return function (dictEq) {
    return function (a) {
      var $312 = Data_Newtype.unwrap(Data_Maybe_First.newtypeFirst);
      var $313 = Data_Foldable.foldMap(dictFoldable)(Data_Maybe_First.monoidFirst)(function (v) {
        var $163 = Data_Eq.eq(dictEq)(a)(v.value0);

        if ($163) {
          return new Data_Maybe.Just(v.value1);
        }

        ;
        return Data_Maybe.Nothing.value;
      });
      return function ($314) {
        return $312($313($314));
      };
    };
  };
};

var heytingAlgebraTuple = function heytingAlgebraTuple(dictHeytingAlgebra) {
  return function (dictHeytingAlgebra1) {
    return new Data_HeytingAlgebra.HeytingAlgebra(function (v) {
      return function (v1) {
        return new Tuple(Data_HeytingAlgebra.conj(dictHeytingAlgebra)(v.value0)(v1.value0), Data_HeytingAlgebra.conj(dictHeytingAlgebra1)(v.value1)(v1.value1));
      };
    }, function (v) {
      return function (v1) {
        return new Tuple(Data_HeytingAlgebra.disj(dictHeytingAlgebra)(v.value0)(v1.value0), Data_HeytingAlgebra.disj(dictHeytingAlgebra1)(v.value1)(v1.value1));
      };
    }, new Tuple(Data_HeytingAlgebra.ff(dictHeytingAlgebra), Data_HeytingAlgebra.ff(dictHeytingAlgebra1)), function (v) {
      return function (v1) {
        return new Tuple(Data_HeytingAlgebra.implies(dictHeytingAlgebra)(v.value0)(v1.value0), Data_HeytingAlgebra.implies(dictHeytingAlgebra1)(v.value1)(v1.value1));
      };
    }, function (v) {
      return new Tuple(Data_HeytingAlgebra.not(dictHeytingAlgebra)(v.value0), Data_HeytingAlgebra.not(dictHeytingAlgebra1)(v.value1));
    }, new Tuple(Data_HeytingAlgebra.tt(dictHeytingAlgebra), Data_HeytingAlgebra.tt(dictHeytingAlgebra1)));
  };
};

var functorTuple = new Data_Functor.Functor(function (f) {
  return function (m) {
    return new Tuple(m.value0, f(m.value1));
  };
});
var functorWithIndexTuple = new Data_FunctorWithIndex.FunctorWithIndex(function () {
  return functorTuple;
}, function (f) {
  return Data_Functor.map(functorTuple)(f(Data_Unit.unit));
});
var invariantTuple = new Data_Functor_Invariant.Invariant(Data_Functor_Invariant.imapF(functorTuple));

var fst = function fst(v) {
  return v.value0;
};

var lazyTuple = function lazyTuple(dictLazy) {
  return function (dictLazy1) {
    return new Control_Lazy.Lazy(function (f) {
      return new Tuple(Control_Lazy.defer(dictLazy)(function (v) {
        return fst(f(Data_Unit.unit));
      }), Control_Lazy.defer(dictLazy1)(function (v) {
        return snd(f(Data_Unit.unit));
      }));
    });
  };
};

var foldableTuple = new Data_Foldable.Foldable(function (dictMonoid) {
  return function (f) {
    return function (v) {
      return f(v.value1);
    };
  };
}, function (f) {
  return function (z) {
    return function (v) {
      return f(z)(v.value1);
    };
  };
}, function (f) {
  return function (z) {
    return function (v) {
      return f(v.value1)(z);
    };
  };
});
var foldableWithIndexTuple = new Data_FoldableWithIndex.FoldableWithIndex(function () {
  return foldableTuple;
}, function (dictMonoid) {
  return function (f) {
    return function (v) {
      return f(Data_Unit.unit)(v.value1);
    };
  };
}, function (f) {
  return function (z) {
    return function (v) {
      return f(Data_Unit.unit)(z)(v.value1);
    };
  };
}, function (f) {
  return function (z) {
    return function (v) {
      return f(Data_Unit.unit)(v.value1)(z);
    };
  };
});
var traversableTuple = new Data_Traversable.Traversable(function () {
  return foldableTuple;
}, function () {
  return functorTuple;
}, function (dictApplicative) {
  return function (v) {
    return Data_Functor.map(dictApplicative.Apply0().Functor0())(Tuple.create(v.value0))(v.value1);
  };
}, function (dictApplicative) {
  return function (f) {
    return function (v) {
      return Data_Functor.map(dictApplicative.Apply0().Functor0())(Tuple.create(v.value0))(f(v.value1));
    };
  };
});
var traversableWithIndexTuple = new Data_TraversableWithIndex.TraversableWithIndex(function () {
  return foldableWithIndexTuple;
}, function () {
  return functorWithIndexTuple;
}, function () {
  return traversableTuple;
}, function (dictApplicative) {
  return function (f) {
    return function (v) {
      return Data_Functor.map(dictApplicative.Apply0().Functor0())(Tuple.create(v.value0))(f(Data_Unit.unit)(v.value1));
    };
  };
});
var foldable1Tuple = new Data_Semigroup_Foldable.Foldable1(function () {
  return foldableTuple;
}, function (dictSemigroup) {
  return function (v) {
    return v.value1;
  };
}, function (dictSemigroup) {
  return function (f) {
    return function (v) {
      return f(v.value1);
    };
  };
});
var traversable1Tuple = new Data_Semigroup_Traversable.Traversable1(function () {
  return foldable1Tuple;
}, function () {
  return traversableTuple;
}, function (dictApply) {
  return function (v) {
    return Data_Functor.map(dictApply.Functor0())(Tuple.create(v.value0))(v.value1);
  };
}, function (dictApply) {
  return function (f) {
    return function (v) {
      return Data_Functor.map(dictApply.Functor0())(Tuple.create(v.value0))(f(v.value1));
    };
  };
});
var extendTuple = new Control_Extend.Extend(function () {
  return functorTuple;
}, function (f) {
  return function (v) {
    return new Tuple(v.value0, f(v));
  };
});

var eqTuple = function eqTuple(dictEq) {
  return function (dictEq1) {
    return new Data_Eq.Eq(function (x) {
      return function (y) {
        return Data_Eq.eq(dictEq)(x.value0)(y.value0) && Data_Eq.eq(dictEq1)(x.value1)(y.value1);
      };
    });
  };
};

var ordTuple = function ordTuple(dictOrd) {
  return function (dictOrd1) {
    return new Data_Ord.Ord(function () {
      return eqTuple(dictOrd.Eq0())(dictOrd1.Eq0());
    }, function (x) {
      return function (y) {
        var v = Data_Ord.compare(dictOrd)(x.value0)(y.value0);

        if (v instanceof Data_Ordering.LT) {
          return Data_Ordering.LT.value;
        }

        ;

        if (v instanceof Data_Ordering.GT) {
          return Data_Ordering.GT.value;
        }

        ;
        return Data_Ord.compare(dictOrd1)(x.value1)(y.value1);
      };
    });
  };
};

var eq1Tuple = function eq1Tuple(dictEq) {
  return new Data_Eq.Eq1(function (dictEq1) {
    return Data_Eq.eq(eqTuple(dictEq)(dictEq1));
  });
};

var ord1Tuple = function ord1Tuple(dictOrd) {
  return new Data_Ord.Ord1(function () {
    return eq1Tuple(dictOrd.Eq0());
  }, function (dictOrd1) {
    return Data_Ord.compare(ordTuple(dictOrd)(dictOrd1));
  });
};

var distributiveTuple = function distributiveTuple(dictTypeEquals) {
  return new Data_Distributive.Distributive(function () {
    return functorTuple;
  }, function (dictFunctor) {
    return Data_Distributive.collectDefault(distributiveTuple(dictTypeEquals))(dictFunctor);
  }, function (dictFunctor) {
    var $315 = Tuple.create(Type_Equality.from(dictTypeEquals)(Data_Unit.unit));
    var $316 = Data_Functor.map(dictFunctor)(snd);
    return function ($317) {
      return $315($316($317));
    };
  });
};

var curry = function curry(f) {
  return function (a) {
    return function (b) {
      return f(new Tuple(a, b));
    };
  };
};

var comonadTuple = new Control_Comonad.Comonad(function () {
  return extendTuple;
}, snd);

var commutativeRingTuple = function commutativeRingTuple(dictCommutativeRing) {
  return function (dictCommutativeRing1) {
    return new Data_CommutativeRing.CommutativeRing(function () {
      return ringTuple(dictCommutativeRing.Ring0())(dictCommutativeRing1.Ring0());
    });
  };
};

var boundedTuple = function boundedTuple(dictBounded) {
  return function (dictBounded1) {
    return new Data_Bounded.Bounded(function () {
      return ordTuple(dictBounded.Ord0())(dictBounded1.Ord0());
    }, new Tuple(Data_Bounded.bottom(dictBounded), Data_Bounded.bottom(dictBounded1)), new Tuple(Data_Bounded.top(dictBounded), Data_Bounded.top(dictBounded1)));
  };
};

var booleanAlgebraTuple = function booleanAlgebraTuple(dictBooleanAlgebra) {
  return function (dictBooleanAlgebra1) {
    return new Data_BooleanAlgebra.BooleanAlgebra(function () {
      return heytingAlgebraTuple(dictBooleanAlgebra.HeytingAlgebra0())(dictBooleanAlgebra1.HeytingAlgebra0());
    });
  };
};

var bifunctorTuple = new Data_Bifunctor.Bifunctor(function (f) {
  return function (g) {
    return function (v) {
      return new Tuple(f(v.value0), g(v.value1));
    };
  };
});
var bifoldableTuple = new Data_Bifoldable.Bifoldable(function (dictMonoid) {
  return function (f) {
    return function (g) {
      return function (v) {
        return Data_Semigroup.append(dictMonoid.Semigroup0())(f(v.value0))(g(v.value1));
      };
    };
  };
}, function (f) {
  return function (g) {
    return function (z) {
      return function (v) {
        return g(f(z)(v.value0))(v.value1);
      };
    };
  };
}, function (f) {
  return function (g) {
    return function (z) {
      return function (v) {
        return f(v.value0)(g(v.value1)(z));
      };
    };
  };
});
var bitraversableTuple = new Data_Bitraversable.Bitraversable(function () {
  return bifoldableTuple;
}, function () {
  return bifunctorTuple;
}, function (dictApplicative) {
  return function (v) {
    return Control_Apply.apply(dictApplicative.Apply0())(Data_Functor.map(dictApplicative.Apply0().Functor0())(Tuple.create)(v.value0))(v.value1);
  };
}, function (dictApplicative) {
  return function (f) {
    return function (g) {
      return function (v) {
        return Control_Apply.apply(dictApplicative.Apply0())(Data_Functor.map(dictApplicative.Apply0().Functor0())(Tuple.create)(f(v.value0)))(g(v.value1));
      };
    };
  };
});
var biapplyTuple = new Control_Biapply.Biapply(function () {
  return bifunctorTuple;
}, function (v) {
  return function (v1) {
    return new Tuple(v.value0(v1.value0), v.value1(v1.value1));
  };
});
var biapplicativeTuple = new Control_Biapplicative.Biapplicative(function () {
  return biapplyTuple;
}, Tuple.create);

var applyTuple = function applyTuple(dictSemigroup) {
  return new Control_Apply.Apply(function () {
    return functorTuple;
  }, function (v) {
    return function (v1) {
      return new Tuple(Data_Semigroup.append(dictSemigroup)(v.value0)(v1.value0), v.value1(v1.value1));
    };
  });
};

var bindTuple = function bindTuple(dictSemigroup) {
  return new Control_Bind.Bind(function () {
    return applyTuple(dictSemigroup);
  }, function (v) {
    return function (f) {
      var v1 = f(v.value1);
      return new Tuple(Data_Semigroup.append(dictSemigroup)(v.value0)(v1.value0), v1.value1);
    };
  });
};

var applicativeTuple = function applicativeTuple(dictMonoid) {
  return new Control_Applicative.Applicative(function () {
    return applyTuple(dictMonoid.Semigroup0());
  }, Tuple.create(Data_Monoid.mempty(dictMonoid)));
};

var monadTuple = function monadTuple(dictMonoid) {
  return new Control_Monad.Monad(function () {
    return applicativeTuple(dictMonoid);
  }, function () {
    return bindTuple(dictMonoid.Semigroup0());
  });
};

module.exports = {
  Tuple: Tuple,
  fst: fst,
  snd: snd,
  curry: curry,
  uncurry: uncurry,
  swap: swap,
  lookup: lookup,
  showTuple: showTuple,
  eqTuple: eqTuple,
  eq1Tuple: eq1Tuple,
  ordTuple: ordTuple,
  ord1Tuple: ord1Tuple,
  boundedTuple: boundedTuple,
  semigroupoidTuple: semigroupoidTuple,
  semigroupTuple: semigroupTuple,
  monoidTuple: monoidTuple,
  semiringTuple: semiringTuple,
  ringTuple: ringTuple,
  commutativeRingTuple: commutativeRingTuple,
  heytingAlgebraTuple: heytingAlgebraTuple,
  booleanAlgebraTuple: booleanAlgebraTuple,
  functorTuple: functorTuple,
  functorWithIndexTuple: functorWithIndexTuple,
  invariantTuple: invariantTuple,
  bifunctorTuple: bifunctorTuple,
  applyTuple: applyTuple,
  biapplyTuple: biapplyTuple,
  applicativeTuple: applicativeTuple,
  biapplicativeTuple: biapplicativeTuple,
  bindTuple: bindTuple,
  monadTuple: monadTuple,
  extendTuple: extendTuple,
  comonadTuple: comonadTuple,
  lazyTuple: lazyTuple,
  foldableTuple: foldableTuple,
  foldable1Tuple: foldable1Tuple,
  foldableWithIndexTuple: foldableWithIndexTuple,
  bifoldableTuple: bifoldableTuple,
  traversableTuple: traversableTuple,
  traversable1Tuple: traversable1Tuple,
  traversableWithIndexTuple: traversableWithIndexTuple,
  bitraversableTuple: bitraversableTuple,
  distributiveTuple: distributiveTuple
};
},{"../Control.Applicative/index.js":"output/Control.Applicative/index.js","../Control.Apply/index.js":"output/Control.Apply/index.js","../Control.Biapplicative/index.js":"output/Control.Biapplicative/index.js","../Control.Biapply/index.js":"output/Control.Biapply/index.js","../Control.Bind/index.js":"output/Control.Bind/index.js","../Control.Comonad/index.js":"output/Control.Comonad/index.js","../Control.Extend/index.js":"output/Control.Extend/index.js","../Control.Lazy/index.js":"output/Control.Lazy/index.js","../Control.Monad/index.js":"output/Control.Monad/index.js","../Control.Semigroupoid/index.js":"output/Control.Semigroupoid/index.js","../Data.Bifoldable/index.js":"output/Data.Bifoldable/index.js","../Data.Bifunctor/index.js":"output/Data.Bifunctor/index.js","../Data.Bitraversable/index.js":"output/Data.Bitraversable/index.js","../Data.BooleanAlgebra/index.js":"output/Data.BooleanAlgebra/index.js","../Data.Bounded/index.js":"output/Data.Bounded/index.js","../Data.CommutativeRing/index.js":"output/Data.CommutativeRing/index.js","../Data.Distributive/index.js":"output/Data.Distributive/index.js","../Data.Eq/index.js":"output/Data.Eq/index.js","../Data.Foldable/index.js":"output/Data.Foldable/index.js","../Data.FoldableWithIndex/index.js":"output/Data.FoldableWithIndex/index.js","../Data.Functor/index.js":"output/Data.Functor/index.js","../Data.Functor.Invariant/index.js":"output/Data.Functor.Invariant/index.js","../Data.FunctorWithIndex/index.js":"output/Data.FunctorWithIndex/index.js","../Data.HeytingAlgebra/index.js":"output/Data.HeytingAlgebra/index.js","../Data.Maybe/index.js":"output/Data.Maybe/index.js","../Data.Maybe.First/index.js":"output/Data.Maybe.First/index.js","../Data.Monoid/index.js":"output/Data.Monoid/index.js","../Data.Newtype/index.js":"output/Data.Newtype/index.js","../Data.Ord/index.js":"output/Data.Ord/index.js","../Data.Ordering/index.js":"output/Data.Ordering/index.js","../Data.Ring/index.js":"output/Data.Ring/index.js","../Data.Semigroup/index.js":"output/Data.Semigroup/index.js","../Data.Semigroup.Foldable/index.js":"output/Data.Semigroup.Foldable/index.js","../Data.Semigroup.Traversable/index.js":"output/Data.Semigroup.Traversable/index.js","../Data.Semiring/index.js":"output/Data.Semiring/index.js","../Data.Show/index.js":"output/Data.Show/index.js","../Data.Traversable/index.js":"output/Data.Traversable/index.js","../Data.TraversableWithIndex/index.js":"output/Data.TraversableWithIndex/index.js","../Data.Unit/index.js":"output/Data.Unit/index.js","../Type.Equality/index.js":"output/Type.Equality/index.js"}],"output/Effect.Console/foreign.js":[function(require,module,exports) {
"use strict";

exports.log = function (s) {
  return function () {
    console.log(s);
    return {};
  };
};

exports.warn = function (s) {
  return function () {
    console.warn(s);
    return {};
  };
};

exports.error = function (s) {
  return function () {
    console.error(s);
    return {};
  };
};

exports.info = function (s) {
  return function () {
    console.info(s);
    return {};
  };
};

exports.time = function (s) {
  return function () {
    console.time(s);
    return {};
  };
};

exports.timeEnd = function (s) {
  return function () {
    console.timeEnd(s);
    return {};
  };
};
},{}],"output/Effect.Console/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var $foreign = require("./foreign.js");

var Data_Show = require("../Data.Show/index.js");

var warnShow = function warnShow(dictShow) {
  return function (a) {
    return $foreign.warn(Data_Show.show(dictShow)(a));
  };
};

var logShow = function logShow(dictShow) {
  return function (a) {
    return $foreign.log(Data_Show.show(dictShow)(a));
  };
};

var infoShow = function infoShow(dictShow) {
  return function (a) {
    return $foreign.info(Data_Show.show(dictShow)(a));
  };
};

var errorShow = function errorShow(dictShow) {
  return function (a) {
    return $foreign.error(Data_Show.show(dictShow)(a));
  };
};

module.exports = {
  logShow: logShow,
  warnShow: warnShow,
  errorShow: errorShow,
  infoShow: infoShow,
  log: $foreign.log,
  warn: $foreign.warn,
  error: $foreign.error,
  info: $foreign.info,
  time: $foreign.time,
  timeEnd: $foreign.timeEnd
};
},{"./foreign.js":"output/Effect.Console/foreign.js","../Data.Show/index.js":"output/Data.Show/index.js"}],"output/Main/index.js":[function(require,module,exports) {
// Generated by purs version 0.13.3
"use strict";

var BabylonDemo = require("../BabylonDemo/index.js");

var Data_Tuple = require("../Data.Tuple/index.js");

var Effect_Console = require("../Effect.Console/index.js");

var main = function __do() {
  var v = BabylonDemo.getCanvas("render-canvas")();
  var v1 = BabylonDemo.initEngine(v)(true)();
  var v2 = BabylonDemo.initResize(v1)();
  var v3 = BabylonDemo.createScene(v)(v2)();
  var v4 = BabylonDemo.runRenderLoop(v2)(v3)();
  var v5 = BabylonDemo.logTupleTest(new Data_Tuple.Tuple(12, 12))();
  var v6 = BabylonDemo.logTupleTest(v4)();
  return Effect_Console.log("Hello sailor!")();
};

module.exports = {
  main: main
};
},{"../BabylonDemo/index.js":"output/BabylonDemo/index.js","../Data.Tuple/index.js":"output/Data.Tuple/index.js","../Effect.Console/index.js":"output/Effect.Console/index.js"}],"index.js":[function(require,module,exports) {
"use strict";

var Main = _interopRequireWildcard(require("./output/Main"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

window.addEventListener('DOMContentLoaded', function () {
  Main.main();
});
},{"./output/Main":"output/Main/index.js"}],"../../.nvm/versions/node/v12.2.0/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57357" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../.nvm/versions/node/v12.2.0/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/ps-babylon.e31bb0bc.js.map