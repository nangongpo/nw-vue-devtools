!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=222)}([function(t,n,e){var r=e(34),o=Function.prototype,i=o.bind,u=o.call,c=r&&i.bind(u,u);t.exports=r?function(t){return t&&c(t)}:function(t){return t&&function(){return u.apply(t,arguments)}}},function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||function(){return this}()||Function("return this")()}).call(this,e(70))},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports=function(t){return"function"==typeof t}},function(t,n,e){var r=e(1),o=e(40),i=e(5),u=e(39),c=e(49),a=e(48),f=o("wks"),s=r.Symbol,l=s&&s.for,p=a?s:s&&s.withoutSetter||u;t.exports=function(t){if(!i(f,t)||!c&&"string"!=typeof f[t]){var n="Symbol."+t;c&&i(s,t)?f[t]=s[t]:f[t]=a&&l?l(n):p(n)}return f[t]}},function(t,n,e){var r=e(0),o=e(19),i=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,n){return i(o(t),n)}},function(t,n,e){var r=e(2);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,n,e){var r=e(1),o=e(33).f,i=e(20),u=e(17),c=e(27),a=e(52),f=e(54);t.exports=function(t,n){var e,s,l,p,v,d=t.target,y=t.global,b=t.stat;if(e=y?r:b?r[d]||c(d,{}):(r[d]||{}).prototype)for(s in n){if(p=n[s],l=t.dontCallGetSet?(v=o(e,s))&&v.value:e[s],!f(y?s:d+(b?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),u(e,s,p,t)}}},function(t,n,e){var r=e(3);t.exports=function(t){return"object"==typeof t?null!==t:r(t)}},function(t,n,e){var r=e(6),o=e(50),i=e(58),u=e(10),c=e(38),a=TypeError,f=Object.defineProperty,s=Object.getOwnPropertyDescriptor;n.f=r?i?function(t,n,e){if(u(t),n=c(n),u(e),"function"==typeof t&&"prototype"===n&&"value"in e&&"writable"in e&&!e.writable){var r=s(t,n);r&&r.writable&&(t[n]=e.value,e={configurable:"configurable"in e?e.configurable:r.configurable,enumerable:"enumerable"in e?e.enumerable:r.enumerable,writable:!1})}return f(t,n,e)}:f:function(t,n,e){if(u(t),n=c(n),u(e),o)try{return f(t,n,e)}catch(t){}if("get"in e||"set"in e)throw a("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(8),o=String,i=TypeError;t.exports=function(t){if(r(t))return t;throw i(o(t)+" is not an object")}},function(t,n,e){var r=e(34),o=Function.prototype.call;t.exports=r?o.bind(o):function(){return o.apply(o,arguments)}},function(t,n,e){var r=e(56),o=e(16);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(1),o=e(3),i=function(t){return o(t)?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t]):r[t]&&r[t][n]}},function(t,n,e){var r=e(55),o=String;t.exports=function(t){if("Symbol"===r(t))throw TypeError("Cannot convert a Symbol value to a string");return o(t)}},function(t,n,e){var r=e(45);t.exports=function(t){return r(t.length)}},function(t,n){var e=TypeError;t.exports=function(t){if(null==t)throw e("Can't call method on "+t);return t}},function(t,n,e){var r=e(3),o=e(9),i=e(63),u=e(27);t.exports=function(t,n,e,c){c||(c={});var a=c.enumerable,f=void 0!==c.name?c.name:n;if(r(e)&&i(e,f,c),c.global)a?t[n]=e:u(n,e);else{try{c.unsafe?t[n]&&(a=!0):delete t[n]}catch(t){}a?t[n]=e:o.f(t,n,{value:e,enumerable:!1,configurable:!c.nonConfigurable,writable:!c.nonWritable})}return t}},function(t,n,e){var r=e(0),o=r({}.toString),i=r("".slice);t.exports=function(t){return i(o(t),8,-1)}},function(t,n,e){var r=e(16),o=Object;t.exports=function(t){return o(r(t))}},function(t,n,e){var r=e(6),o=e(9),i=e(30);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(0);t.exports=r({}.isPrototypeOf)},function(t,n,e){var r=e(3),o=e(37),i=TypeError;t.exports=function(t){if(r(t))return t;throw i(o(t)+" is not a function")}},function(t,n){t.exports=!1},function(t,n,e){var r=e(9).f,o=e(5),i=e(4)("toStringTag");t.exports=function(t,n,e){t&&!e&&(t=t.prototype),t&&!o(t,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n,e){var r=e(74);t.exports=function(t){var n=+t;return n!=n||0===n?0:r(n)}},function(t,n,e){var r=e(1),o=e(27),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,n,e){var r=e(1),o=Object.defineProperty;t.exports=function(t,n){try{o(r,t,{value:n,configurable:!0,writable:!0})}catch(e){r[t]=n}return n}},function(t,n,e){var r,o,i,u=e(73),c=e(1),a=e(0),f=e(8),s=e(20),l=e(5),p=e(26),v=e(51),d=e(29),y=c.TypeError,b=c.WeakMap;if(u||p.state){var g=p.state||(p.state=new b),m=a(g.get),h=a(g.has),x=a(g.set);r=function(t,n){if(h(g,t))throw new y("Object already initialized");return n.facade=t,x(g,t,n),n},o=function(t){return m(g,t)||{}},i=function(t){return h(g,t)}}else{var O=v("state");d[O]=!0,r=function(t,n){if(l(t,O))throw new y("Object already initialized");return n.facade=t,s(t,O,n),n},o=function(t){return l(t,O)?t[O]:{}},i=function(t){return l(t,O)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!f(n)||(e=o(n)).type!==t)throw y("Incompatible receiver, "+t+" required");return e}}}},function(t,n){t.exports={}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(13);t.exports=r("navigator","userAgent")||""},function(t,n,e){var r=e(22);t.exports=function(t,n){var e=t[n];return null==e?void 0:r(e)}},function(t,n,e){var r=e(6),o=e(11),i=e(64),u=e(30),c=e(12),a=e(38),f=e(5),s=e(50),l=Object.getOwnPropertyDescriptor;n.f=r?l:function(t,n){if(t=c(t),n=a(n),s)try{return l(t,n)}catch(t){}if(f(t,n))return u(!o(i.f,t,n),t[n])}},function(t,n,e){var r=e(2);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},function(t,n,e){var r,o,i=e(1),u=e(31),c=i.process,a=i.Deno,f=c&&c.versions||a&&a.version,s=f&&f.v8;s&&(o=(r=s.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&u&&(!(r=u.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=u.match(/Chrome\/(\d+)/))&&(o=+r[1]),t.exports=o},function(t,n,e){var r=e(0),o=e(3),i=e(26),u=r(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return u(t)}),t.exports=i.inspectSource},function(t,n){var e=String;t.exports=function(t){try{return e(t)}catch(t){return"Object"}}},function(t,n,e){var r=e(71),o=e(47);t.exports=function(t){var n=r(t,"string");return o(n)?n:n+""}},function(t,n,e){var r=e(0),o=0,i=Math.random(),u=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+u(++o+i,36)}},function(t,n,e){var r=e(23),o=e(26);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.23.4",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.23.4/LICENSE",source:"https://github.com/zloirock/core-js"})},function(t,n,e){var r=e(1),o=e(8),i=r.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},function(t,n,e){var r=e(6),o=e(5),i=Function.prototype,u=r&&Object.getOwnPropertyDescriptor,c=o(i,"name"),a=c&&"something"===function(){}.name,f=c&&(!r||r&&u(i,"name").configurable);t.exports={EXISTS:c,PROPER:a,CONFIGURABLE:f}},function(t,n,e){var r=e(25),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},function(t,n,e){var r=e(59),o=e(46).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n,e){var r=e(25),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n,e){var r=e(13),o=e(3),i=e(21),u=e(48),c=Object;t.exports=u?function(t){return"symbol"==typeof t}:function(t){var n=r("Symbol");return o(n)&&i(n.prototype,c(t))}},function(t,n,e){var r=e(49);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,n,e){var r=e(35),o=e(2);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},function(t,n,e){var r=e(6),o=e(2),i=e(41);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(40),o=e(39),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n,e){var r=e(5),o=e(65),i=e(33),u=e(9);t.exports=function(t,n,e){for(var c=o(n),a=u.f,f=i.f,s=0;s<c.length;s++){var l=c[s];r(t,l)||e&&r(e,l)||a(t,l,f(n,l))}}},function(t,n,e){var r=e(12),o=e(43),i=e(15),u=function(t){return function(n,e,u){var c,a=r(n),f=i(a),s=o(u,f);if(t&&e!=e){for(;f>s;)if((c=a[s++])!=c)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},function(t,n,e){var r=e(2),o=e(3),i=/#|\.prototype\./,u=function(t,n){var e=a[c(t)];return e==s||e!=f&&(o(n)?r(n):!!n)},c=u.normalize=function(t){return String(t).replace(i,".").toLowerCase()},a=u.data={},f=u.NATIVE="N",s=u.POLYFILL="P";t.exports=u},function(t,n,e){var r=e(76),o=e(3),i=e(18),u=e(4)("toStringTag"),c=Object,a="Arguments"==i(function(){return arguments}());t.exports=r?i:function(t){var n,e,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=c(t),u))?e:a?i(n):"Object"==(r=i(n))&&o(n.callee)?"Arguments":r}},function(t,n,e){var r=e(0),o=e(2),i=e(18),u=Object,c=r("".split);t.exports=o((function(){return!u("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?c(t,""):u(t)}:u},,function(t,n,e){var r=e(6),o=e(2);t.exports=r&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},function(t,n,e){var r=e(0),o=e(5),i=e(12),u=e(53).indexOf,c=e(29),a=r([].push);t.exports=function(t,n){var e,r=i(t),f=0,s=[];for(e in r)!o(c,e)&&o(r,e)&&a(s,e);for(;n.length>f;)o(r,e=n[f++])&&(~u(s,e)||a(s,e));return s}},function(t,n,e){var r,o=e(10),i=e(113),u=e(46),c=e(29),a=e(94),f=e(41),s=e(51),l=s("IE_PROTO"),p=function(){},v=function(t){return"<script>"+t+"<\/script>"},d=function(t){t.write(v("")),t.close();var n=t.parentWindow.Object;return t=null,n},y=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}var t,n;y="undefined"!=typeof document?document.domain&&r?d(r):((n=f("iframe")).style.display="none",a.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write(v("document.F=Object")),t.close(),t.F):d(r);for(var e=u.length;e--;)delete y.prototype[u[e]];return y()};c[l]=!0,t.exports=Object.create||function(t,n){var e;return null!==t?(p.prototype=o(t),e=new p,p.prototype=null,e[l]=t):e=y(),void 0===n?e:i.f(e,n)}},,,function(t,n,e){var r=e(2),o=e(3),i=e(5),u=e(6),c=e(42).CONFIGURABLE,a=e(36),f=e(28),s=f.enforce,l=f.get,p=Object.defineProperty,v=u&&!r((function(){return 8!==p((function(){}),"length",{value:8}).length})),d=String(String).split("String"),y=t.exports=function(t,n,e){"Symbol("===String(n).slice(0,7)&&(n="["+String(n).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),e&&e.getter&&(n="get "+n),e&&e.setter&&(n="set "+n),(!i(t,"name")||c&&t.name!==n)&&(u?p(t,"name",{value:n,configurable:!0}):t.name=n),v&&e&&i(e,"arity")&&t.length!==e.arity&&p(t,"length",{value:e.arity});try{e&&i(e,"constructor")&&e.constructor?u&&p(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var r=s(t);return i(r,"source")||(r.source=d.join("string"==typeof n?n:"")),t};Function.prototype.toString=y((function(){return o(this)&&l(this).source||a(this)}),"toString")},function(t,n,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},function(t,n,e){var r=e(13),o=e(0),i=e(44),u=e(75),c=e(10),a=o([].concat);t.exports=r("Reflect","ownKeys")||function(t){var n=i.f(c(t)),e=u.f;return e?a(n,e(t)):n}},,,,function(t,n,e){"use strict";var r=e(7),o=e(6),i=e(1),u=e(0),c=e(5),a=e(3),f=e(21),s=e(14),l=e(9).f,p=e(52),v=i.Symbol,d=v&&v.prototype;if(o&&a(v)&&(!("description"in d)||void 0!==v().description)){var y={},b=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:s(arguments[0]),n=f(d,this)?new v(t):void 0===t?v():v(t);return""===t&&(y[n]=!0),n};p(b,v),b.prototype=d,d.constructor=b;var g="Symbol(test)"==String(v("test")),m=u(d.toString),h=u(d.valueOf),x=/^Symbol\((.*)\)[^)]+$/,O=u("".replace),S=u("".slice);l(d,"description",{configurable:!0,get:function(){var t=h(this),n=m(t);if(c(y,t))return"";var e=g?S(n,7,-1):O(n,x,"$1");return""===e?void 0:e}}),r({global:!0,constructor:!0,forced:!0},{Symbol:b})}},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){var r=e(11),o=e(8),i=e(47),u=e(32),c=e(72),a=e(4),f=TypeError,s=a("toPrimitive");t.exports=function(t,n){if(!o(t)||i(t))return t;var e,a=u(t,s);if(a){if(void 0===n&&(n="default"),e=r(a,t,n),!o(e)||i(e))return e;throw f("Can't convert object to primitive value")}return void 0===n&&(n="number"),c(t,n)}},function(t,n,e){var r=e(11),o=e(3),i=e(8),u=TypeError;t.exports=function(t,n){var e,c;if("string"===n&&o(e=t.toString)&&!i(c=r(e,t)))return c;if(o(e=t.valueOf)&&!i(c=r(e,t)))return c;if("string"!==n&&o(e=t.toString)&&!i(c=r(e,t)))return c;throw u("Can't convert object to primitive value")}},function(t,n,e){var r=e(1),o=e(3),i=e(36),u=r.WeakMap;t.exports=o(u)&&/native code/.test(i(u))},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=Math.trunc||function(t){var n=+t;return(n>0?r:e)(n)}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r={};r[e(4)("toStringTag")]="z",t.exports="[object z]"===String(r)},function(t,n,e){var r=e(1);e(24)(r.JSON,"JSON",!0)},function(t,n,e){e(24)(Math,"Math",!0)},,,,,,,,,,function(t,n,e){var r=e(4),o=e(60),i=e(9).f,u=r("unscopables"),c=Array.prototype;null==c[u]&&i(c,u,{configurable:!0,value:o(null)}),t.exports=function(t){c[u][t]=!0}},,,,,function(t,n,e){var r=e(59),o=e(46);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){var r=e(13);t.exports=r("document","documentElement")},,,,,,function(t,n,e){var r=e(8),o=e(18),i=e(4)("match");t.exports=function(t){var n;return r(t)&&(void 0!==(n=t[i])?!!n:"RegExp"==o(t))}},,,,,,,,,,,,,function(t,n,e){var r=e(6),o=e(58),i=e(9),u=e(10),c=e(12),a=e(93);n.f=r&&!o?Object.defineProperties:function(t,n){u(t);for(var e,r=c(n),o=a(n),f=o.length,s=0;f>s;)i.f(t,e=o[s++],r[e]);return t}},,,,,,,,,,,,,function(t,n,e){var r=e(100),o=TypeError;t.exports=function(t){if(r(t))throw o("The method doesn't accept regular expressions");return t}},function(t,n,e){var r=e(4)("match");t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(e){try{return n[r]=!1,"/./"[t](n)}catch(t){}}return!1}},,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n,e){"use strict";var r=e(7),o=e(53).includes,i=e(2),u=e(88);r({target:"Array",proto:!0,forced:i((function(){return!Array(1).includes()}))},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),u("includes")},function(t,n,e){"use strict";var r=e(7),o=e(0),i=e(126),u=e(16),c=e(14),a=e(127),f=o("".indexOf);r({target:"String",proto:!0,forced:!a("includes")},{includes:function(t){return!!~f(c(u(this)),c(i(t)),arguments.length>1?arguments[1]:void 0)}})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n,e){"use strict";e.r(n);e(69),e(77),e(78),e(155),e(156);!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=260)}({260:function(t,n){var e,r=!1,o=!1,i=!1,u=0;chrome.devtools.network.onNavigated.addListener(a);var c=setInterval(a,1e3);function a(){i||u++>10?clearInterval(c):(r=!1,o=!1,chrome.devtools.inspectedWindow.eval("!!(window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue)",(function(t){t&&!i&&(clearInterval(c),i=!0,chrome.devtools.panels.create("Vue","icons/128.png","devtools.html",t=>{t.onShown.addListener(l),t.onHidden.addListener(p)}))})))}function f(t,n=null){i&&r&&o?t():(e=t,n&&d(n))}function s(){e&&e(),e=null}function l(){chrome.runtime.sendMessage("vue-panel-shown"),o=!0,r&&s()}function p(){chrome.runtime.sendMessage("vue-panel-hidden"),o=!1}a(),chrome.runtime.onMessage.addListener(t=>{"vue-panel-load"===t?(s(),r=!0):t.vueToast?d(t.vueToast):t.vueContextMenu&&function(t){if("vue-inspect-instance"===t.id){chrome.devtools.inspectedWindow.eval("window.__VUE_DEVTOOLS_CONTEXT_MENU_HAS_TARGET__",(function(t,n){n&&console.log(n),void 0!==t&&t?f(()=>{chrome.runtime.sendMessage("vue-get-context-menu-target")},"open-devtools"):(e=null,d("component-not-found"))}))}}(t.vueContextMenu)});var v={"open-devtools":{message:"Open Vue devtools to see component details",type:"normal"},"component-not-found":{message:"No Vue component was found",type:"warn"}};function d(t){if(Object.keys(v).includes(t)){var n=v[t],e=`(function() {\n    __VUE_DEVTOOLS_TOAST__(\`${n.message}\`, '${n.type}');\n  })()`;chrome.devtools.inspectedWindow.eval(e,(function(t,n){n&&console.log(n)}))}}}})}]);