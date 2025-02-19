let e,t,n,r,i,s,a;function o(e){return e&&e.__esModule?e.default:e}var l,u,h,c,f,d,p,g,m,y,v,w,b,E,_,T,I,S,C,x,A,D,k,N,R,L=globalThis,O={},M=O={};function P(){throw Error("setTimeout has not been defined")}function U(){throw Error("clearTimeout has not been defined")}function F(e){if(c===setTimeout)return setTimeout(e,0);if((c===P||!c)&&setTimeout)return c=setTimeout,setTimeout(e,0);try{return c(e,0)}catch(t){try{return c.call(null,e,0)}catch(t){return c.call(this,e,0)}}}!function(){try{c="function"==typeof setTimeout?setTimeout:P}catch(e){c=P}try{f="function"==typeof clearTimeout?clearTimeout:U}catch(e){f=U}}();var B=[],V=!1,j=-1;function $(){V&&d&&(V=!1,d.length?B=d.concat(B):j=-1,B.length&&q())}function q(){if(!V){var e=F($);V=!0;for(var t=B.length;t;){for(d=B,B=[];++j<t;)d&&d[j].run();j=-1,t=B.length}d=null,V=!1,function(e){if(f===clearTimeout)return clearTimeout(e);if((f===U||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}(e)}}function z(e,t){this.fun=e,this.array=t}function K(){}M.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];B.push(new z(e,t)),1!==B.length||V||F(q)},z.prototype.run=function(){this.fun.apply(null,this.array)},M.title="browser",M.browser=!0,M.env={},M.argv=[],M.version="",M.versions={},M.on=K,M.addListener=K,M.once=K,M.off=K,M.removeListener=K,M.removeAllListeners=K,M.emit=K,M.prependListener=K,M.prependOnceListener=K,M.listeners=function(e){return[]},M.binding=function(e){throw Error("process.binding is not supported")},M.cwd=function(){return"/"},M.chdir=function(e){throw Error("process.chdir is not supported")},M.umask=function(){return 0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G=function(e){let t=[],n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:(i<2048?t[n++]=i>>6|192:((64512&i)==55296&&r+1<e.length&&(64512&e.charCodeAt(r+1))==56320?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128):t[n++]=i>>12|224,t[n++]=i>>6&63|128),t[n++]=63&i|128)}return t},H=function(e){let t=[],n=0,r=0;for(;n<e.length;){let i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){let s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){let s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{let s=e[n++],a=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&a)}}return t.join("")},Q={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){let i=e[t],s=t+1<e.length,a=s?e[t+1]:0,o=t+2<e.length,l=o?e[t+2]:0,u=i>>2,h=(3&i)<<4|a>>4,c=(15&a)<<2|l>>6,f=63&l;o||(f=64,s||(c=64)),r.push(n[u],n[h],n[c],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(G(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):H(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){let i=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0,a=++t<e.length?n[e.charAt(t)]:64,o=++t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==s||null==a||null==o)throw new W;let l=i<<2|s>>4;if(r.push(l),64!==a){let e=s<<4&240|a>>2;if(r.push(e),64!==o){let e=a<<6&192|o;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class W extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const X=function(e){let t=G(e);return Q.encodeByteArray(t,!0)},Y=function(e){return X(e).replace(/\./g,"")},J=function(e){try{return Q.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},Z=()=>/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==L)return L;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,ee=()=>{if(void 0===O||void 0===O.env)return;let e=void 0;if(e)return JSON.parse(e)},et=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&J(e[1]);return t&&JSON.parse(t)},en=()=>{try{return Z()||ee()||et()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},er=e=>{var t,n;return null===(n=null===(t=en())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},ei=e=>{let t=er(e);if(!t)return;let n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw Error(`Invalid host ${t} with no separate hostname and port!`);let r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},es=()=>{var e;return null===(e=en())||void 0===e?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}function eo(){try{return"object"==typeof indexedDB}catch(e){return!1}}function el(){return new Promise((e,t)=>{try{let n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}class eu extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,eu.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,eh.prototype.create)}}class eh{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){let n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?i.replace(ec,(e,t)=>{let r=n[t];return null!=r?String(r):`<${t}?>`}):"Error",a=`${this.serviceName}: ${s} (${r}).`;return new eu(r,a,n)}}const ec=/\{\$([^}]+)}/g;function ef(e,t){if(e===t)return!0;let n=Object.keys(e),r=Object.keys(t);for(let i of n){if(!r.includes(i))return!1;let n=e[i],s=t[i];if(ed(n)&&ed(s)){if(!ef(n,s))return!1}else if(n!==s)return!1}for(let e of r)if(!n.includes(e))return!1;return!0}function ed(e){return null!==e&&"object"==typeof e}function ep(e,t=1e3,n=2){let r=t*Math.pow(n,e),i=Math.round(.5*r*(Math.random()-.5)*2);return Math.min(144e5,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eg(e){return e&&e._delegate?e._delegate:e}class em{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ey="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new ea;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:ey})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let n=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=ey){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=ey){return this.instances.has(e)}getOptions(e=ey){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(let[e,t]of this.instancesDeferred.entries())n===this.normalizeInstanceIdentifier(e)&&t.resolve(r);return r}onInit(e,t){var n;let r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);let s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){let n=this.onInitCallbacks.get(t);if(n)for(let r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:e===ey?void 0:e,options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}return n||null}normalizeInstanceIdentifier(e=ey){return this.component?this.component.multipleInstances?e:ey:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new ev(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eb=[];(l=p||(p={}))[l.DEBUG=0]="DEBUG",l[l.VERBOSE=1]="VERBOSE",l[l.INFO=2]="INFO",l[l.WARN=3]="WARN",l[l.ERROR=4]="ERROR",l[l.SILENT=5]="SILENT";const eE={debug:p.DEBUG,verbose:p.VERBOSE,info:p.INFO,warn:p.WARN,error:p.ERROR,silent:p.SILENT},e_=p.INFO,eT={[p.DEBUG]:"log",[p.VERBOSE]:"log",[p.INFO]:"info",[p.WARN]:"warn",[p.ERROR]:"error"},eI=(e,t,...n)=>{if(t<e.logLevel)return;let r=new Date().toISOString(),i=eT[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class eS{constructor(e){this.name=e,this._logLevel=e_,this._logHandler=eI,this._userLogHandler=null,eb.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in p))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?eE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,p.DEBUG,...e),this._logHandler(this,p.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,p.VERBOSE,...e),this._logHandler(this,p.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,p.INFO,...e),this._logHandler(this,p.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,p.WARN,...e),this._logHandler(this,p.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,p.ERROR,...e),this._logHandler(this,p.ERROR,...e)}}const eC=(e,t)=>t.some(t=>e instanceof t),ex=new WeakMap,eA=new WeakMap,eD=new WeakMap,ek=new WeakMap,eN=new WeakMap;let eR={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return eA.get(e);if("objectStoreNames"===t)return e.objectStoreNames||eD.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return eL(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function eL(n){var r;if(n instanceof IDBRequest)return function(e){let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(eL(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&ex.set(t,e)}).catch(()=>{}),eN.set(t,e),t}(n);if(ek.has(n))return ek.get(n);let i="function"==typeof(r=n)?r!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(t||(t=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(r)?function(...e){return r.apply(eO(this),e),eL(ex.get(this))}:function(...e){return eL(r.apply(eO(this),e))}:function(e,...t){let n=r.call(eO(this),e,...t);return eD.set(n,e.sort?e.sort():[e]),eL(n)}:(r instanceof IDBTransaction&&function(e){if(eA.has(e))return;let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});eA.set(e,t)}(r),eC(r,e||(e=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(r,eR):r;return i!==n&&(ek.set(n,i),eN.set(i,n)),i}const eO=e=>eN.get(e);function eM(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){let a=indexedDB.open(e,t),o=eL(a);return r&&a.addEventListener("upgradeneeded",e=>{r(eL(a.result),e.oldVersion,e.newVersion,eL(a.transaction),e)}),n&&a.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),o.then(e=>{s&&e.addEventListener("close",()=>s()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),o}const eP=["get","getKey","getAll","getAllKeys","count"],eU=["put","add","delete","clear"],eF=new Map;function eB(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(eF.get(t))return eF.get(t);let n=t.replace(/FromIndex$/,""),r=t!==n,i=eU.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||eP.includes(n)))return;let s=async function(e,...t){let s=this.transaction(e,i?"readwrite":"readonly"),a=s.store;return r&&(a=a.index(t.shift())),(await Promise.all([a[n](...t),i&&s.done]))[0]};return eF.set(t,s),s}eR={...a=eR,get:(e,t,n)=>eB(e,t)||a.get(e,t,n),has:(e,t)=>!!eB(e,t)||a.has(e,t)};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eV{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}const ej="@firebase/app",e$="0.10.18",eq=new eS("@firebase/app"),ez="[DEFAULT]",eK={[ej]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/data-connect":"fire-data-connect","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","@firebase/vertexai":"fire-vertex","fire-js":"fire-js",firebase:"fire-js-all"},eG=new Map,eH=new Map,eQ=new Map;function eW(e,t){try{e.container.addComponent(t)}catch(n){eq.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function eX(e){let t=e.name;if(eQ.has(t))return eq.debug(`There were multiple attempts to register component ${t}.`),!1;for(let n of(eQ.set(t,e),eG.values()))eW(n,e);for(let t of eH.values())eW(t,e);return!0}function eY(e,t){let n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}const eJ=new eh("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eZ{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new em("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw eJ.create("app-deleted",{appName:this._name})}}function e0(e,t={}){let n=e;"object"!=typeof t&&(t={name:t});let r=Object.assign({name:ez,automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw eJ.create("bad-app-name",{appName:String(i)});if(n||(n=es()),!n)throw eJ.create("no-options");let s=eG.get(i);if(s){if(ef(n,s.options)&&ef(r,s.config))return s;throw eJ.create("duplicate-app",{appName:i})}let a=new ew(i);for(let e of eQ.values())a.addComponent(e);let o=new eZ(n,r,a);return eG.set(i,o),o}function e1(e=ez){let t=eG.get(e);if(!t&&e===ez&&es())return e0();if(!t)throw eJ.create("no-app",{appName:e});return t}function e2(e,t,n){var r;let i=null!==(r=eK[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);let s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){let e=[`Unable to register library "${i}" with version "${t}":`];s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),eq.warn(e.join(" "));return}eX(new em(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}const e6="firebase-heartbeat-store";let e5=null;function e3(){return e5||(e5=eM("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(e6)}catch(e){console.warn(e)}}}).catch(e=>{throw eJ.create("idb-open",{originalErrorMessage:e.message})})),e5}async function e8(e){try{let t=(await e3()).transaction(e6),n=await t.objectStore(e6).get(e7(e));return await t.done,n}catch(e){if(e instanceof eu)eq.warn(e.message);else{let t=eJ.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});eq.warn(t.message)}}}async function e4(e,t){try{let n=(await e3()).transaction(e6,"readwrite"),r=n.objectStore(e6);await r.put(t,e7(e)),await n.done}catch(e){if(e instanceof eu)eq.warn(e.message);else{let t=eJ.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});eq.warn(t.message)}}}function e7(e){return`${e.name}!${e.options.appId}`}class e9{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new tt(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){var e,t;try{let n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=te();if((null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(e=>e.date===r))return;return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf();return Date.now()-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache)}catch(e){eq.warn(e)}}async getHeartbeatsHeader(){var e;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null||0===this._heartbeatsCache.heartbeats.length)return"";let t=te(),{heartbeatsToSend:n,unsentEntries:r}=function(e,t=1024){let n=[],r=e.slice();for(let i of e){let e=n.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),tn(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),tn(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),i=Y(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return eq.warn(e),""}}}function te(){return new Date().toISOString().substring(0,10)}class tt{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!eo()&&el().then(()=>!0).catch(()=>!1)}async read(){if(!await this._canUseIndexedDBPromise)return{heartbeats:[]};{let e=await e8(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let n=await this.read();return e4(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){let n=await this.read();return e4(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function tn(e){return Y(JSON.stringify({version:2,heartbeats:e})).length}eX(new em("platform-logger",e=>new eV(e),"PRIVATE")),eX(new em("heartbeat",e=>new e9(e),"PRIVATE")),e2(ej,e$,""),e2(ej,e$,"esm2017"),e2("fire-js",""),/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */e2("firebase","11.2.0","app");var tr="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==L?L:"undefined"!=typeof self?self:{},ti={};(function(){function e(){this.blockSize=-1,this.blockSize=64,this.g=[,,,,],this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function t(e,t,n){n||(n=0);var r=Array(16);if("string"==typeof t)for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],a=t+(s^n&(i^s))+r[0]+0xd76aa478&0xffffffff;a=s+(i^(t=n+(a<<7&0xffffffff|a>>>25))&(n^i))+r[1]+0xe8c7b756&0xffffffff,a=i+(n^(s=t+(a<<12&0xffffffff|a>>>20))&(t^n))+r[2]+0x242070db&0xffffffff,a=n+(t^(i=s+(a<<17&0xffffffff|a>>>15))&(s^t))+r[3]+0xc1bdceee&0xffffffff,a=t+(s^(n=i+(a<<22&0xffffffff|a>>>10))&(i^s))+r[4]+0xf57c0faf&0xffffffff,a=s+(i^(t=n+(a<<7&0xffffffff|a>>>25))&(n^i))+r[5]+0x4787c62a&0xffffffff,a=i+(n^(s=t+(a<<12&0xffffffff|a>>>20))&(t^n))+r[6]+0xa8304613&0xffffffff,a=n+(t^(i=s+(a<<17&0xffffffff|a>>>15))&(s^t))+r[7]+0xfd469501&0xffffffff,a=t+(s^(n=i+(a<<22&0xffffffff|a>>>10))&(i^s))+r[8]+0x698098d8&0xffffffff,a=s+(i^(t=n+(a<<7&0xffffffff|a>>>25))&(n^i))+r[9]+0x8b44f7af&0xffffffff,a=i+(n^(s=t+(a<<12&0xffffffff|a>>>20))&(t^n))+r[10]+0xffff5bb1&0xffffffff,a=n+(t^(i=s+(a<<17&0xffffffff|a>>>15))&(s^t))+r[11]+0x895cd7be&0xffffffff,a=t+(s^(n=i+(a<<22&0xffffffff|a>>>10))&(i^s))+r[12]+0x6b901122&0xffffffff,a=s+(i^(t=n+(a<<7&0xffffffff|a>>>25))&(n^i))+r[13]+0xfd987193&0xffffffff,a=i+(n^(s=t+(a<<12&0xffffffff|a>>>20))&(t^n))+r[14]+0xa679438e&0xffffffff,a=n+(t^(i=s+(a<<17&0xffffffff|a>>>15))&(s^t))+r[15]+0x49b40821&0xffffffff,n=i+(a<<22&0xffffffff|a>>>10),a=t+(i^s&(n^i))+r[1]+0xf61e2562&0xffffffff,t=n+(a<<5&0xffffffff|a>>>27),a=s+(n^i&(t^n))+r[6]+0xc040b340&0xffffffff,s=t+(a<<9&0xffffffff|a>>>23),a=i+(t^n&(s^t))+r[11]+0x265e5a51&0xffffffff,i=s+(a<<14&0xffffffff|a>>>18),a=n+(s^t&(i^s))+r[0]+0xe9b6c7aa&0xffffffff,n=i+(a<<20&0xffffffff|a>>>12),a=t+(i^s&(n^i))+r[5]+0xd62f105d&0xffffffff,t=n+(a<<5&0xffffffff|a>>>27),a=s+(n^i&(t^n))+r[10]+0x2441453&0xffffffff,s=t+(a<<9&0xffffffff|a>>>23),a=i+(t^n&(s^t))+r[15]+0xd8a1e681&0xffffffff,i=s+(a<<14&0xffffffff|a>>>18),a=n+(s^t&(i^s))+r[4]+0xe7d3fbc8&0xffffffff,n=i+(a<<20&0xffffffff|a>>>12),a=t+(i^s&(n^i))+r[9]+0x21e1cde6&0xffffffff,t=n+(a<<5&0xffffffff|a>>>27),a=s+(n^i&(t^n))+r[14]+0xc33707d6&0xffffffff,s=t+(a<<9&0xffffffff|a>>>23),a=i+(t^n&(s^t))+r[3]+0xf4d50d87&0xffffffff,i=s+(a<<14&0xffffffff|a>>>18),a=n+(s^t&(i^s))+r[8]+0x455a14ed&0xffffffff,n=i+(a<<20&0xffffffff|a>>>12),a=t+(i^s&(n^i))+r[13]+0xa9e3e905&0xffffffff,t=n+(a<<5&0xffffffff|a>>>27),a=s+(n^i&(t^n))+r[2]+0xfcefa3f8&0xffffffff,s=t+(a<<9&0xffffffff|a>>>23),a=i+(t^n&(s^t))+r[7]+0x676f02d9&0xffffffff,i=s+(a<<14&0xffffffff|a>>>18),a=n+(s^t&(i^s))+r[12]+0x8d2a4c8a&0xffffffff,a=t+((n=i+(a<<20&0xffffffff|a>>>12))^i^s)+r[5]+0xfffa3942&0xffffffff,a=s+((t=n+(a<<4&0xffffffff|a>>>28))^n^i)+r[8]+0x8771f681&0xffffffff,a=i+((s=t+(a<<11&0xffffffff|a>>>21))^t^n)+r[11]+0x6d9d6122&0xffffffff,a=n+((i=s+(a<<16&0xffffffff|a>>>16))^s^t)+r[14]+0xfde5380c&0xffffffff,a=t+((n=i+(a<<23&0xffffffff|a>>>9))^i^s)+r[1]+0xa4beea44&0xffffffff,a=s+((t=n+(a<<4&0xffffffff|a>>>28))^n^i)+r[4]+0x4bdecfa9&0xffffffff,a=i+((s=t+(a<<11&0xffffffff|a>>>21))^t^n)+r[7]+0xf6bb4b60&0xffffffff,a=n+((i=s+(a<<16&0xffffffff|a>>>16))^s^t)+r[10]+0xbebfbc70&0xffffffff,a=t+((n=i+(a<<23&0xffffffff|a>>>9))^i^s)+r[13]+0x289b7ec6&0xffffffff,a=s+((t=n+(a<<4&0xffffffff|a>>>28))^n^i)+r[0]+0xeaa127fa&0xffffffff,a=i+((s=t+(a<<11&0xffffffff|a>>>21))^t^n)+r[3]+0xd4ef3085&0xffffffff,a=n+((i=s+(a<<16&0xffffffff|a>>>16))^s^t)+r[6]+0x4881d05&0xffffffff,a=t+((n=i+(a<<23&0xffffffff|a>>>9))^i^s)+r[9]+0xd9d4d039&0xffffffff,a=s+((t=n+(a<<4&0xffffffff|a>>>28))^n^i)+r[12]+0xe6db99e5&0xffffffff,a=i+((s=t+(a<<11&0xffffffff|a>>>21))^t^n)+r[15]+0x1fa27cf8&0xffffffff,a=n+((i=s+(a<<16&0xffffffff|a>>>16))^s^t)+r[2]+0xc4ac5665&0xffffffff,n=i+(a<<23&0xffffffff|a>>>9),a=t+(i^(n|~s))+r[0]+0xf4292244&0xffffffff,t=n+(a<<6&0xffffffff|a>>>26),a=s+(n^(t|~i))+r[7]+0x432aff97&0xffffffff,s=t+(a<<10&0xffffffff|a>>>22),a=i+(t^(s|~n))+r[14]+0xab9423a7&0xffffffff,i=s+(a<<15&0xffffffff|a>>>17),a=n+(s^(i|~t))+r[5]+0xfc93a039&0xffffffff,n=i+(a<<21&0xffffffff|a>>>11),a=t+(i^(n|~s))+r[12]+0x655b59c3&0xffffffff,t=n+(a<<6&0xffffffff|a>>>26),a=s+(n^(t|~i))+r[3]+0x8f0ccc92&0xffffffff,s=t+(a<<10&0xffffffff|a>>>22),a=i+(t^(s|~n))+r[10]+0xffeff47d&0xffffffff,i=s+(a<<15&0xffffffff|a>>>17),a=n+(s^(i|~t))+r[1]+0x85845dd1&0xffffffff,n=i+(a<<21&0xffffffff|a>>>11),a=t+(i^(n|~s))+r[8]+0x6fa87e4f&0xffffffff,t=n+(a<<6&0xffffffff|a>>>26),a=s+(n^(t|~i))+r[15]+0xfe2ce6e0&0xffffffff,s=t+(a<<10&0xffffffff|a>>>22),a=i+(t^(s|~n))+r[6]+0xa3014314&0xffffffff,i=s+(a<<15&0xffffffff|a>>>17),a=n+(s^(i|~t))+r[13]+0x4e0811a1&0xffffffff,n=i+(a<<21&0xffffffff|a>>>11),a=t+(i^(n|~s))+r[4]+0xf7537e82&0xffffffff,t=n+(a<<6&0xffffffff|a>>>26),a=s+(n^(t|~i))+r[11]+0xbd3af235&0xffffffff,s=t+(a<<10&0xffffffff|a>>>22),a=i+(t^(s|~n))+r[2]+0x2ad7d2bb&0xffffffff,i=s+(a<<15&0xffffffff|a>>>17),a=n+(s^(i|~t))+r[9]+0xeb86d391&0xffffffff,e.g[0]=e.g[0]+t&0xffffffff,e.g[1]=e.g[1]+(i+(a<<21&0xffffffff|a>>>11))&0xffffffff,e.g[2]=e.g[2]+i&0xffffffff,e.g[3]=e.g[3]+s&0xffffffff}function n(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=0|e[i];r&&s==t||(n[i]=s,r=!1)}this.g=n}!function(e,t){function n(){}n.prototype=t.prototype,e.D=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.C=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}(e,function(){this.blockSize=-1}),e.prototype.s=function(){this.g[0]=0x67452301,this.g[1]=0xefcdab89,this.g[2]=0x98badcfe,this.g[3]=0x10325476,this.o=this.h=0},e.prototype.u=function(e,n){void 0===n&&(n=e.length);for(var r=n-this.blockSize,i=this.B,s=this.h,a=0;a<n;){if(0==s)for(;a<=r;)t(this,e,a),a+=this.blockSize;if("string"==typeof e){for(;a<n;)if(i[s++]=e.charCodeAt(a++),s==this.blockSize){t(this,i),s=0;break}}else for(;a<n;)if(i[s++]=e[a++],s==this.blockSize){t(this,i),s=0;break}}this.h=s,this.o+=n},e.prototype.v=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.o;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.u(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var r,i={};function s(e){var t;return -128<=e&&128>e?(t=function(e){return new n([0|e],0>e?-1:0)},Object.prototype.hasOwnProperty.call(i,e)?i[e]:i[e]=t(e)):new n([0|e],0>e?-1:0)}function a(e){if(isNaN(e)||!isFinite(e))return o;if(0>e)return f(a(-e));for(var t=[],r=1,i=0;e>=r;i++)t[i]=e/r|0,r*=0x100000000;return new n(t,0)}var o=s(0),l=s(1),u=s(0x1000000);function h(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function c(e){return -1==e.h}function f(e){for(var t=e.g.length,r=[],i=0;i<t;i++)r[i]=~e.g[i];return new n(r,~e.h).add(l)}function d(e,t){return e.add(f(t))}function p(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function y(e,t){this.g=e,this.h=t}function v(e,t){if(h(t))throw Error("division by zero");if(h(e))return new y(o,o);if(c(e))return t=v(f(e),t),new y(f(t.g),f(t.h));if(c(t))return t=v(e,f(t)),new y(f(t.g),t.h);if(30<e.g.length){if(c(e)||c(t))throw Error("slowDivide_ only works with positive integers.");for(var n=l,r=t;0>=r.l(e);)n=w(n),r=w(r);var i=b(n,1),s=b(r,1);for(r=b(r,2),n=b(n,2);!h(r);){var u=s.add(r);0>=u.l(e)&&(i=i.add(n),s=u),r=b(r,1),n=b(n,1)}return t=d(e,i.j(t)),new y(i,t)}for(i=o;0<=e.l(t);){for(r=48>=(r=Math.ceil(Math.log(n=Math.max(1,Math.floor(e.m()/t.m())))/Math.LN2))?1:Math.pow(2,r-48),u=(s=a(n)).j(t);c(u)||0<u.l(e);)n-=r,u=(s=a(n)).j(t);h(s)&&(s=l),i=i.add(s),e=d(e,u)}return new y(i,e)}function w(e){for(var t=e.g.length+1,r=[],i=0;i<t;i++)r[i]=e.i(i)<<1|e.i(i-1)>>>31;return new n(r,e.h)}function b(e,t){var r=t>>5;t%=32;for(var i=e.g.length-r,s=[],a=0;a<i;a++)s[a]=0<t?e.i(a+r)>>>t|e.i(a+r+1)<<32-t:e.i(a+r);return new n(s,e.h)}(r=n.prototype).m=function(){if(c(this))return-f(this).m();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.i(n);e+=(0<=r?r:0x100000000+r)*t,t*=0x100000000}return e},r.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(h(this))return"0";if(c(this))return"-"+f(this).toString(e);for(var t=a(Math.pow(e,6)),n=this,r="";;){var i=v(n,t).g,s=((0<(n=d(n,i.j(t))).g.length?n.g[0]:n.h)>>>0).toString(e);if(h(n=i))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},r.i=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},r.l=function(e){return c(e=d(this,e))?-1:+!h(e)},r.abs=function(){return c(this)?f(this):this},r.add=function(e){for(var t=Math.max(this.g.length,e.g.length),r=[],i=0,s=0;s<=t;s++){var a=i+(65535&this.i(s))+(65535&e.i(s)),o=(a>>>16)+(this.i(s)>>>16)+(e.i(s)>>>16);i=o>>>16,a&=65535,o&=65535,r[s]=o<<16|a}return new n(r,-0x80000000&r[r.length-1]?-1:0)},r.j=function(e){if(h(this)||h(e))return o;if(c(this))return c(e)?f(this).j(f(e)):f(f(this).j(e));if(c(e))return f(this.j(f(e)));if(0>this.l(u)&&0>e.l(u))return a(this.m()*e.m());for(var t=this.g.length+e.g.length,r=[],i=0;i<2*t;i++)r[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<e.g.length;s++){var l=this.i(i)>>>16,d=65535&this.i(i),g=e.i(s)>>>16,m=65535&e.i(s);r[2*i+2*s]+=d*m,p(r,2*i+2*s),r[2*i+2*s+1]+=l*m,p(r,2*i+2*s+1),r[2*i+2*s+1]+=d*g,p(r,2*i+2*s+1),r[2*i+2*s+2]+=l*g,p(r,2*i+2*s+2)}for(i=0;i<t;i++)r[i]=r[2*i+1]<<16|r[2*i];for(i=t;i<2*t;i++)r[i]=0;return new n(r,0)},r.A=function(e){return v(this,e).h},r.and=function(e){for(var t=Math.max(this.g.length,e.g.length),r=[],i=0;i<t;i++)r[i]=this.i(i)&e.i(i);return new n(r,this.h&e.h)},r.or=function(e){for(var t=Math.max(this.g.length,e.g.length),r=[],i=0;i<t;i++)r[i]=this.i(i)|e.i(i);return new n(r,this.h|e.h)},r.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),r=[],i=0;i<t;i++)r[i]=this.i(i)^e.i(i);return new n(r,this.h^e.h)},e.prototype.digest=e.prototype.v,e.prototype.reset=e.prototype.s,e.prototype.update=e.prototype.u,m=ti.Md5=e,n.prototype.add=n.prototype.add,n.prototype.multiply=n.prototype.j,n.prototype.modulo=n.prototype.A,n.prototype.compare=n.prototype.l,n.prototype.toNumber=n.prototype.m,n.prototype.toString=n.prototype.toString,n.prototype.getBits=n.prototype.i,n.fromNumber=a,n.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return f(e(t.substring(1),n));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var r=a(Math.pow(n,8)),i=o,s=0;s<t.length;s+=8){var l=Math.min(8,t.length-s),u=parseInt(t.substring(s,s+l),n);8>l?(l=a(Math.pow(n,l)),i=i.j(l).add(a(u))):i=(i=i.j(r)).add(a(u))}return i},g=ti.Integer=n}).apply(void 0!==tr?tr:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var ts="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==L?L:"undefined"!=typeof self?self:{},ta={};(function(){var e,t,n,r="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,n){return e==Array.prototype||e==Object.prototype||(e[t]=n.value),e},i=function(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof ts&&ts];for(var t=0;t<e.length;++t){var n=e[t];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}(this);!function(e,t){if(t)e:{var n=i;e=e.split(".");for(var s=0;s<e.length-1;s++){var a=e[s];if(!(a in n))break e;n=n[a]}(t=t(s=n[e=e[e.length-1]]))!=s&&null!=t&&r(n,e,{configurable:!0,writable:!0,value:t})}}("Array.prototype.values",function(e){return e||function(){var e,t,n,r,i;return e=this,t=function(e,t){return t},e instanceof String&&(e+=""),n=0,r=!1,(i={next:function(){if(!r&&n<e.length){var i=n++;return{value:t(i,e[i]),done:!1}}return r=!0,{done:!0,value:void 0}}})[Symbol.iterator]=function(){return i},i}});var s=s||{},a=this||self;function o(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function l(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function u(e,t,n){return e.call.apply(e.bind,arguments)}function h(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function c(e,t,n){return(c=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?u:h).apply(null,arguments)}function f(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function d(e,t){function n(){}n.prototype=t.prototype,e.aa=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Qb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function p(e){let t=e.length;if(0<t){let n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function g(e,t){for(let t=1;t<arguments.length;t++){let n=arguments[t];if(o(n)){let t=e.length||0,r=n.length||0;e.length=t+r;for(let i=0;i<r;i++)e[t+i]=n[i]}else e.push(n)}}function m(e){return/^[\s\xa0]*$/.test(e)}function S(){var e=a.navigator;return e&&(e=e.userAgent)?e:""}function C(e){return C[" "](e),e}C[" "]=function(){};var x=-1!=S().indexOf("Gecko")&&!(-1!=S().toLowerCase().indexOf("webkit")&&-1==S().indexOf("Edge"))&&!(-1!=S().indexOf("Trident")||-1!=S().indexOf("MSIE"))&&-1==S().indexOf("Edge");function A(e,t,n){for(let r in e)t.call(n,e[r],r,e)}function D(e){let t={};for(let n in e)t[n]=e[n];return t}let k="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(e,t){let n,r;for(let t=1;t<arguments.length;t++){for(n in r=arguments[t])e[n]=r[n];for(let t=0;t<k.length;t++)n=k[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}var R=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new L,e=>e.reset());class L{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let O,M=!1,P=new class{constructor(){this.h=this.g=null}add(e,t){let n=R.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}},U=()=>{let e=a.Promise.resolve(void 0);O=()=>{e.then(F)}};var F=()=>{let e;for(var t;e=null,P.g&&(e=P.g,P.g=P.g.next,P.g||(P.h=null),e.next=null),t=e;){try{t.h.call(t.g)}catch(e){!function(e){a.setTimeout(()=>{throw e},0)}(e)}R.j(t),100>R.h&&(R.h++,t.next=R.g,R.g=t)}M=!1};function B(){this.s=this.s,this.C=this.C}function V(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}B.prototype.s=!1,B.prototype.ma=function(){this.s||(this.s=!0,this.N())},B.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},V.prototype.h=function(){this.defaultPrevented=!0};var j=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{let e=()=>{};a.addEventListener("test",e,t),a.removeEventListener("test",e,t)}catch(e){}return e}();function $(e,t){if(V.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(x){e:{try{C(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:q[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&$.aa.h.call(this)}}d($,V);var q={2:"touch",3:"pen",4:"mouse"};$.prototype.h=function(){$.aa.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var z="closure_listenable_"+(1e6*Math.random()|0),K=0;function G(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++K,this.da=this.fa=!1}function H(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function Q(e){this.src=e,this.g={},this.h=0}function W(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=Array.prototype.indexOf.call(i,t,void 0);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(H(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function X(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.da&&s.listener==t&&!!n==s.capture&&s.ha==r)return i}return -1}Q.prototype.add=function(e,t,n,r,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var a=X(e,t,r,i);return -1<a?(t=e[a],n||(t.fa=!1)):((t=new G(t,this.src,s,!!r,i)).fa=n,e.push(t)),t};var Y="closure_lm_"+(1e6*Math.random()|0),J={};function Z(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var a=l(i)?!!i.capture:!!i,o=er(e);if(o||(e[Y]=o=new Q(e)),(n=o.add(t,n,r,a,s)).proxy)return n;if(r=function e(t){return en.call(e.src,e.listener,t)},n.proxy=r,r.src=e,r.listener=n,e.addEventListener)j||(i=a),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(et(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function ee(e){if("number"!=typeof e&&e&&!e.da){var t=e.src;if(t&&t[z])W(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(et(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=er(t))?(W(n,e),0==n.h&&(n.src=null,t[Y]=null)):H(e)}}}function et(e){return e in J?J[e]:J[e]="on"+e}function en(e,t){if(e.da)e=!0;else{t=new $(t,this);var n=e.listener,r=e.ha||e.src;e.fa&&ee(e),e=n.call(r,t)}return e}function er(e){return(e=e[Y])instanceof Q?e:null}var ei="__closure_events_fn_"+(1e9*Math.random()>>>0);function es(e){return"function"==typeof e?e:(e[ei]||(e[ei]=function(t){return e.handleEvent(t)}),e[ei])}function ea(){B.call(this),this.i=new Q(this),this.M=this,this.F=null}function eo(e,t){var n,r=e.F;if(r)for(n=[];r;r=r.F)n.push(r);if(e=e.M,r=t.type||t,"string"==typeof t)t=new V(t,e);else if(t instanceof V)t.target=t.target||e;else{var i=t;N(t=new V(r,e),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var a=t.g=n[s];i=el(a,r,!0,t)&&i}if(i=el(a=t.g=e,r,!0,t)&&i,i=el(a,r,!1,t)&&i,n)for(s=0;s<n.length;s++)i=el(a=t.g=n[s],r,!1,t)&&i}function el(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var a=t[s];if(a&&!a.da&&a.capture==n){var o=a.listener,l=a.ha||a.src;a.fa&&W(e.i,a),i=!1!==o.call(l,r)&&i}}return i&&!r.defaultPrevented}function eu(e,t,n){if("function"==typeof e)n&&(e=c(e,n));else if(e&&"function"==typeof e.handleEvent)e=c(e.handleEvent,e);else throw Error("Invalid listener argument");return 0x7fffffff<Number(t)?-1:a.setTimeout(e,t||0)}d(ea,B),ea.prototype[z]=!0,ea.prototype.removeEventListener=function(e,t,n,r){!function e(t,n,r,i,s){if(Array.isArray(n))for(var a=0;a<n.length;a++)e(t,n[a],r,i,s);else(i=l(i)?!!i.capture:!!i,r=es(r),t&&t[z])?(t=t.i,(n=String(n).toString())in t.g&&-1<(r=X(a=t.g[n],r,i,s))&&(H(a[r]),Array.prototype.splice.call(a,r,1),0==a.length&&(delete t.g[n],t.h--))):t&&(t=er(t))&&(n=t.g[n.toString()],t=-1,n&&(t=X(n,r,i,s)),(r=-1<t?n[t]:null)&&ee(r))}(this,e,t,n,r)},ea.prototype.N=function(){if(ea.aa.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)H(n[r]);delete t.g[e],t.h--}}this.F=null},ea.prototype.K=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},ea.prototype.L=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};class eh extends B{constructor(e,t){super(),this.m=e,this.l=t,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:function e(t){t.g=eu(()=>{t.g=null,t.i&&(t.i=!1,e(t))},t.l);let n=t.h;t.h=null,t.m.apply(null,n)}(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ec(e){B.call(this),this.h=e,this.g={}}d(ec,B);var ef=[];function ed(e){A(e.g,function(e,t){this.g.hasOwnProperty(t)&&ee(e)},e),e.g={}}ec.prototype.N=function(){ec.aa.N.call(this),ed(this)},ec.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ep=a.JSON.stringify,eg=a.JSON.parse,em=class{stringify(e){return a.JSON.stringify(e,void 0)}parse(e){return a.JSON.parse(e,void 0)}};function ey(){}function ev(e){return e.h||(e.h=e.i())}function ew(){}ey.prototype.h=null;var eb={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function eE(){V.call(this,"d")}function e_(){V.call(this,"c")}d(eE,V),d(e_,V);var eT={},eI=null;function eS(){return eI=eI||new ea}function eC(e){V.call(this,eT.La,e)}function ex(e){let t=eS();eo(t,new eC(t))}function eA(e,t){V.call(this,eT.STAT_EVENT,e),this.stat=t}function eD(e){let t=eS();eo(t,new eA(t,e))}function ek(e,t){V.call(this,eT.Ma,e),this.size=t}function eN(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){e()},t)}function eR(){this.g=!0}function eL(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var a=1;a<i.length;a++)i[a]=""}}}}return ep(n)}catch(e){return t}}(e,n)+(r?" "+r:"")})}eT.La="serverreachability",d(eC,V),eT.STAT_EVENT="statevent",d(eA,V),eT.Ma="timingevent",d(ek,V),eR.prototype.xa=function(){this.g=!1},eR.prototype.info=function(){};var eO={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},eM={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function eP(){}function eU(e,t,n,r){this.j=e,this.i=t,this.l=n,this.R=r||1,this.U=new ec(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new eF}function eF(){this.i=null,this.g="",this.h=!1}d(eP,ey),eP.prototype.g=function(){return new XMLHttpRequest},eP.prototype.i=function(){return{}},t=new eP;var eB={},eV={};function ej(e,t,n){e.L=1,e.v=tn(e4(t)),e.m=n,e.P=!0,e$(e,null)}function e$(e,t){e.F=Date.now(),ez(e),e.A=e4(e.v);var n=e.A,r=e.R;Array.isArray(r)||(r=[String(r)]),ty(n.i,"t",r),e.C=0,n=e.j.J,e.h=new eF,e.g=t6(e.j,n?t:null,!e.m),0<e.O&&(e.M=new eh(c(e.Y,e,e.g),e.O)),t=e.U,n=e.g,r=e.ca;var i="readystatechange";Array.isArray(i)||(i&&(ef[0]=i.toString()),i=ef);for(var s=0;s<i.length;s++){var a=function e(t,n,r,i,s){if(i&&i.once)return function e(t,n,r,i,s){if(Array.isArray(n)){for(var a=0;a<n.length;a++)e(t,n[a],r,i,s);return null}return r=es(r),t&&t[z]?t.L(n,r,l(i)?!!i.capture:!!i,s):Z(t,n,r,!0,i,s)}(t,n,r,i,s);if(Array.isArray(n)){for(var a=0;a<n.length;a++)e(t,n[a],r,i,s);return null}return r=es(r),t&&t[z]?t.K(n,r,l(i)?!!i.capture:!!i,s):Z(t,n,r,!1,i,s)}(n,i[s],r||t.handleEvent,!1,t.h||t);if(!a)break;t.g[a.key]=a}t=e.H?D(e.H):{},e.m?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.m,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),ex(),function(e,t,n,r,i,s){e.info(function(){if(e.g){if(s)for(var a="",o=s.split("&"),l=0;l<o.length;l++){var u=o[l].split("=");if(1<u.length){var h=u[0];u=u[1];var c=h.split("_");a=2<=c.length&&"type"==c[1]?a+(h+"=")+u+"&":a+(h+"=redacted&")}}else a=null}else a=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+a})}(e.i,e.u,e.A,e.l,e.R,e.m)}function eq(e){return!!e.g&&"GET"==e.u&&2!=e.L&&e.j.Ca}function ez(e){e.S=Date.now()+e.I,eK(e,e.I)}function eK(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=eN(c(e.ba,e),t)}function eG(e){e.B&&(a.clearTimeout(e.B),e.B=null)}function eH(e){0==e.j.G||e.J||tJ(e.j,e)}function eQ(e){eG(e);var t=e.M;t&&"function"==typeof t.ma&&t.ma(),e.M=null,ed(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ma())}function eW(e,t){try{var n=e.j;if(0!=n.G&&(n.g==e||e0(n.h,e))){if(!e.K&&e0(n.h,e)&&3==n.G){try{var r=n.Da.g.parse(t)}catch(e){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(n.g.F+3e3<e.F)tY(n),tj(n);else break e}tQ(n),eD(18)}}else n.za=i[1],0<n.za-n.T&&37500>i[2]&&n.F&&0==n.v&&!n.C&&(n.C=eN(c(n.Za,n),6e3));if(1>=eZ(n.h)&&n.ca){try{n.ca()}catch(e){}n.ca=void 0}}else t0(n,11)}else if((e.K||n.g==e)&&tY(n),!m(t))for(i=n.Da.g.parse(t),t=0;t<i.length;t++){let o=i[t];if(n.T=o[0],o=o[1],2==n.G){if("c"==o[0]){n.K=o[1],n.ia=o[2];let t=o[3];null!=t&&(n.la=t,n.j.info("VER="+n.la));let i=o[4];null!=i&&(n.Aa=i,n.j.info("SVER="+n.Aa));let l=o[5];null!=l&&"number"==typeof l&&0<l&&(r=1.5*l,n.L=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;let u=e.g;if(u){let e=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(e1(s,s.h),s.h=null))}if(r.D){let e=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.ya=e,tt(r.I,r.D,e))}}if(n.G=3,n.l&&n.l.ua(),n.ba&&(n.R=Date.now()-e.F,n.j.info("Handshake RTT: "+n.R+"ms")),(r=n).qa=t2(r,r.J?r.ia:null,r.W),e.K){e2(r.h,e);var a=r.L;a&&(e.I=a),e.B&&(eG(e),ez(e)),r.g=e}else tH(r);0<n.i.length&&tq(n)}else"stop"!=o[0]&&"close"!=o[0]||t0(n,7)}else 3==n.G&&("stop"==o[0]||"close"==o[0]?"stop"==o[0]?t0(n,7):tV(n):"noop"!=o[0]&&n.l&&n.l.ta(o),n.v=0)}}ex(4)}catch(e){}}eU.prototype.ca=function(e){e=e.target;let t=this.M;t&&3==tP(e)?t.j():this.Y(e)},eU.prototype.Y=function(e){try{if(e==this.g)e:{let f=tP(this.g);var t=this.g.Ba();let d=this.g.Z();if(!(3>f)&&(3!=f||this.g&&(this.h.h||this.g.oa()||tU(this.g)))){this.J||4!=f||7==t||(8==t||0>=d?ex(3):ex(2)),eG(this);var n=this.g.Z();this.X=n;t:if(eq(this)){var r=tU(this.g);e="";var i=r.length,s=4==tP(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){eQ(this),eH(this);var o="";break t}this.h.i=new a.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:!(s&&t==i-1)});r.length=0,this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.oa();if(this.o=200==n,function(e,t,n,r,i,s,a){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+a})}(this.i,this.u,this.A,this.l,this.R,f,n),this.o){if(this.T&&!this.K){t:{if(this.g){var l,u=this.g;if((l=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!m(l)){var h=l;break t}}h=null}if(n=h)eL(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,eW(this,n);else{this.o=!1,this.s=3,eD(12),eQ(this),eH(this);break e}}if(this.P){let e;for(n=!0;!this.J&&this.C<o.length;)if((e=function(e,t){var n=e.C,r=t.indexOf("\n",n);return -1==r?eV:isNaN(n=Number(t.substring(n,r)))?eB:(r+=1)+n>t.length?eV:(t=t.slice(r,r+n),e.C=r+n,t)}(this,o))==eV){4==f&&(this.s=4,eD(14),n=!1),eL(this.i,this.l,null,"[Incomplete Response]");break}else if(e==eB){this.s=4,eD(15),eL(this.i,this.l,o,"[Invalid Chunk]"),n=!1;break}else eL(this.i,this.l,e,null),eW(this,e);if(eq(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=f||0!=o.length||this.h.h||(this.s=1,eD(16),n=!1),this.o=this.o&&n,n){if(0<o.length&&!this.W){this.W=!0;var c=this.j;c.g==this&&c.ba&&!c.M&&(c.j.info("Great, no buffering proxy detected. Bytes received: "+o.length),tW(c),c.M=!0,eD(11))}}else eL(this.i,this.l,o,"[Invalid Chunked Response]"),eQ(this),eH(this)}else eL(this.i,this.l,o,null),eW(this,o);4==f&&eQ(this),this.o&&!this.J&&(4==f?tJ(this.j,this):(this.o=!1,ez(this)))}else(function(e){let t={};e=(e.g&&2<=tP(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(m(e[r]))continue;var n=function(e){var t=1;e=e.split(":");let n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}(e[r]);let i=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();let s=t[i]||[];t[i]=s,s.push(n)}!function(e,t){for(let n in e)t.call(void 0,e[n],n,e)}(t,function(e){return e.join(", ")})})(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.s=3,eD(12)):(this.s=0,eD(13)),eQ(this),eH(this)}}}catch(e){}finally{}},eU.prototype.cancel=function(){this.J=!0,eQ(this)},eU.prototype.ba=function(){this.B=null;let e=Date.now();0<=e-this.S?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.i,this.A),2!=this.L&&(ex(),eD(17)),eQ(this),this.s=2,eH(this)):eK(this,this.S-e)};var eX=class{constructor(e,t){this.g=e,this.map=t}};function eY(e){this.l=e||10,e=a.PerformanceNavigationTiming?0<(e=a.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function eJ(e){return!!e.h||!!e.g&&e.g.size>=e.j}function eZ(e){return e.h?1:e.g?e.g.size:0}function e0(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function e1(e,t){e.g?e.g.add(t):e.h=t}function e2(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function e6(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(let n of e.g.values())t=t.concat(n.D);return t}return p(e.i)}function e5(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(o(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.na&&"function"==typeof e.na)return e.na();if(!e.V||"function"!=typeof e.V){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(o(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}for(let r in t=[],n=0,e)t[n++]=r;return t}}}(e),r=function(e){if(e.V&&"function"==typeof e.V)return e.V();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(o(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}eY.prototype.cancel=function(){if(this.i=e6(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let e of this.g.values())e.cancel();this.g.clear()}};var e3=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function e8(e){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,e instanceof e8){this.h=e.h,e7(this,e.j),this.o=e.o,this.g=e.g,e9(this,e.s),this.l=e.l;var t=e.i,n=new td;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),te(this,n),this.m=e.m}else e&&(t=String(e).match(e3))?(this.h=!1,e7(this,t[1]||"",!0),this.o=tr(t[2]||""),this.g=tr(t[3]||"",!0),e9(this,t[4]),this.l=tr(t[5]||"",!0),te(this,t[6]||"",!0),this.m=tr(t[7]||"")):(this.h=!1,this.i=new td(null,this.h))}function e4(e){return new e8(e)}function e7(e,t,n){e.j=n?tr(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function e9(e,t){if(t){if(isNaN(t=Number(t))||0>t)throw Error("Bad port number "+t);e.s=t}else e.s=null}function te(e,t,n){var r,i;t instanceof td?(e.i=t,r=e.i,(i=e.h)&&!r.j&&(tp(r),r.i=null,r.g.forEach(function(e,t){var n=t.toLowerCase();t!=n&&(tg(this,t),ty(this,n,e))},r)),r.j=i):(n||(t=ti(t,tc)),e.i=new td(t,e.h))}function tt(e,t,n){e.i.set(t,n)}function tn(e){return tt(e,"zx",Math.floor(0x80000000*Math.random()).toString(36)+Math.abs(Math.floor(0x80000000*Math.random())^Date.now()).toString(36)),e}function tr(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ti(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,to),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function to(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}e8.prototype.toString=function(){var e=[],t=this.j;t&&e.push(ti(t,tl,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.o)&&e.push(ti(t,tl,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.s)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(ti(n,"/"==n.charAt(0)?th:tu,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.m)&&e.push("#",ti(n,tf)),e.join("")};var tl=/[#\/\?@]/g,tu=/[#\?:]/g,th=/[#\?]/g,tc=/[#\?@]/g,tf=/#/g;function td(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function tp(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}function tg(e,t){tp(e),t=tv(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function tm(e,t){return tp(e),t=tv(e,t),e.g.has(t)}function ty(e,t,n){tg(e,t),0<n.length&&(e.i=null,e.g.set(tv(e,t),p(n)),e.h+=n.length)}function tv(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function tw(e,t,n,r,i){try{i&&(i.onload=null,i.onerror=null,i.onabort=null,i.ontimeout=null),r(n)}catch(e){}}function tb(){this.g=new em}function tE(e){this.l=e.Ub||null,this.j=e.eb||!1}function t_(e,t){ea.call(this),this.D=e,this.o=t,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function tT(e){e.j.read().then(e.Pa.bind(e)).catch(e.ga.bind(e))}function tI(e){e.readyState=4,e.l=null,e.j=null,e.v=null,tS(e)}function tS(e){e.onreadystatechange&&e.onreadystatechange.call(e)}function tC(e){let t="";return A(e,function(e,n){t+=n,t+=":",t+=e,t+="\r\n"}),t}function tx(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=tC(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):tt(e,t,n))}function tA(e){ea.call(this),this.headers=new Map,this.o=e||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}(n=td.prototype).add=function(e,t){tp(this),this.i=null,e=tv(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},n.forEach=function(e,t){tp(this),this.g.forEach(function(n,r){n.forEach(function(n){e.call(t,n,r,this)},this)},this)},n.na=function(){tp(this);let e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){let i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},n.V=function(e){tp(this);let t=[];if("string"==typeof e)tm(this,e)&&(t=t.concat(this.g.get(tv(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},n.set=function(e,t){return tp(this),this.i=null,tm(this,e=tv(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},n.get=function(e,t){return e&&0<(e=this.V(e)).length?String(e[0]):t},n.toString=function(){if(this.i)return this.i;if(!this.g)return"";let e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];let s=encodeURIComponent(String(r)),a=this.V(r);for(r=0;r<a.length;r++){var i=s;""!==a[r]&&(i+="="+encodeURIComponent(String(a[r]))),e.push(i)}}return this.i=e.join("&")},d(tE,ey),tE.prototype.g=function(){return new t_(this.l,this.j)},tE.prototype.i=(e={},function(){return e}),d(t_,ea),(n=t_.prototype).open=function(e,t){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=e,this.A=t,this.readyState=1,tS(this)},n.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;let t={headers:this.u,method:this.B,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||a).fetch(new Request(this.A,t)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,tI(this)),this.readyState=0},n.Sa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,tS(this)),this.g&&(this.readyState=3,tS(this),this.g))){if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(void 0!==a.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;tT(this)}else e.text().then(this.Ra.bind(this),this.ga.bind(this))}},n.Pa=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var t=e.value?e.value:new Uint8Array(0);(t=this.v.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?tI(this):tS(this),3==this.readyState&&tT(this)}},n.Ra=function(e){this.g&&(this.response=this.responseText=e,tI(this))},n.Qa=function(e){this.g&&(this.response=e,tI(this))},n.ga=function(){this.g&&tI(this)},n.setRequestHeader=function(e,t){this.u.append(e,t)},n.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";let e=[],t=this.h.entries();for(var n=t.next();!n.done;)e.push((n=n.value)[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(t_.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}}),d(tA,ea);var tD=/^https?$/i,tk=["POST","PUT"];function tN(e,t){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=t,e.m=5,tR(e),tO(e)}function tR(e){e.A||(e.A=!0,eo(e,"complete"),eo(e,"error"))}function tL(e){if(e.h&&void 0!==s&&(!e.v[1]||4!=tP(e)||2!=e.Z())){if(e.u&&4==tP(e))eu(e.Ea,0,e);else if(eo(e,"readystatechange"),4==tP(e)){e.h=!1;try{let s=e.Z();switch(s){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t,n,r=!0;break;default:r=!1}if(!(t=r)){if(n=0===s){var i=String(e.D).match(e3)[1]||null;!i&&a.self&&a.self.location&&(i=a.self.location.protocol.slice(0,-1)),n=!tD.test(i?i.toLowerCase():"")}t=n}if(t)eo(e,"complete"),eo(e,"success");else{e.m=6;try{var o=2<tP(e)?e.g.statusText:""}catch(e){o=""}e.l=o+" ["+e.Z()+"]",tR(e)}}finally{tO(e)}}}}function tO(e,t){if(e.g){tM(e);let n=e.g,r=e.v[0]?()=>{}:null;e.g=null,e.v=null,t||eo(e,"ready");try{n.onreadystatechange=r}catch(e){}}}function tM(e){e.I&&(a.clearTimeout(e.I),e.I=null)}function tP(e){return e.g?e.g.readyState:0}function tU(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.H){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function tF(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function tB(e){this.Aa=0,this.i=[],this.j=new eR,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=tF("failFast",!1,e),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=tF("baseRetryDelayMs",5e3,e),this.cb=tF("retryDelaySeedMs",1e4,e),this.Wa=tF("forwardChannelMaxRetries",2,e),this.wa=tF("forwardChannelRequestTimeoutMs",2e4,e),this.pa=e&&e.xmlHttpFactory||void 0,this.Xa=e&&e.Tb||void 0,this.Ca=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.h=new eY(e&&e.concurrentRequestLimit),this.Da=new tb,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=e&&e.Rb||!1,e&&e.xa&&this.j.xa(),e&&e.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&e&&e.detectBufferingProxy||!1,this.ja=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.ja=e.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function tV(e){if(t$(e),3==e.G){var t=e.U++,n=e4(e.I);if(tt(n,"SID",e.K),tt(n,"RID",t),tt(n,"TYPE","terminate"),tK(e,n),(t=new eU(e,e.j,t)).L=2,t.v=tn(e4(n)),n=!1,a.navigator&&a.navigator.sendBeacon)try{n=a.navigator.sendBeacon(t.v.toString(),"")}catch(e){}!n&&a.Image&&((new Image).src=t.v,n=!0),n||(t.g=t6(t.j,null),t.g.ea(t.v)),t.F=Date.now(),ez(t)}t1(e)}function tj(e){e.g&&(tW(e),e.g.cancel(),e.g=null)}function t$(e){tj(e),e.u&&(a.clearTimeout(e.u),e.u=null),tY(e),e.h.cancel(),e.s&&("number"==typeof e.s&&a.clearTimeout(e.s),e.s=null)}function tq(e){if(!eJ(e.h)&&!e.s){e.s=!0;var t=e.Ga;O||U(),M||(O(),M=!0),P.add(t,e),e.B=0}}function tz(e,t){var n;n=t?t.l:e.U++;let r=e4(e.I);tt(r,"SID",e.K),tt(r,"RID",n),tt(r,"AID",e.T),tK(e,r),e.m&&e.o&&tx(r,e.m,e.o),n=new eU(e,e.j,n,e.B+1),null===e.m&&(n.H=e.o),t&&(e.i=t.D.concat(e.i)),t=tG(e,n,1e3),n.I=Math.round(.5*e.wa)+Math.round(.5*e.wa*Math.random()),e1(e.h,n),ej(n,r,t)}function tK(e,t){e.H&&A(e.H,function(e,n){tt(t,n,e)}),e.l&&e5({},function(e,n){tt(t,n,e)})}function tG(e,t,n){n=Math.min(e.i.length,n);var r=e.l?c(e.l.Na,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){let e=["count="+n];-1==t?0<n?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let a=0;a<n;a++){let n=i[a].g,o=i[a].map;if(0>(n-=t))t=Math.max(0,i[a].g-100),s=!1;else try{!function(e,t,n){let r=n||"";try{e5(e,function(e,n){let i=e;l(e)&&(i=ep(e)),t.push(r+n+"="+encodeURIComponent(i))})}catch(e){throw t.push(r+"type="+encodeURIComponent("_badmap")),e}}(o,e,"req"+n+"_")}catch(e){r&&r(o)}}if(s){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function tH(e){if(!e.g&&!e.u){e.Y=1;var t=e.Fa;O||U(),M||(O(),M=!0),P.add(t,e),e.v=0}}function tQ(e){return!e.g&&!e.u&&!(3<=e.v)&&(e.Y++,e.u=eN(c(e.Fa,e),tZ(e,e.v)),e.v++,!0)}function tW(e){null!=e.A&&(a.clearTimeout(e.A),e.A=null)}function tX(e){e.g=new eU(e,e.j,"rpc",e.Y),null===e.m&&(e.g.H=e.o),e.g.O=0;var t=e4(e.qa);tt(t,"RID","rpc"),tt(t,"SID",e.K),tt(t,"AID",e.T),tt(t,"CI",e.F?"0":"1"),!e.F&&e.ja&&tt(t,"TO",e.ja),tt(t,"TYPE","xmlhttp"),tK(e,t),e.m&&e.o&&tx(t,e.m,e.o),e.L&&(e.g.I=e.L);var n=e.g;e=e.ia,n.L=1,n.v=tn(e4(t)),n.m=null,n.P=!0,e$(n,e)}function tY(e){null!=e.C&&(a.clearTimeout(e.C),e.C=null)}function tJ(e,t){var n=null;if(e.g==t){tY(e),tW(e),e.g=null;var r=2}else{if(!e0(e.h,t))return;n=t.D,e2(e.h,t),r=1}if(0!=e.G){if(t.o){if(1==r){n=t.m?t.m.length:0,t=Date.now()-t.F;var i,s=e.B;eo(r=eS(),new ek(r,n)),tq(e)}else tH(e)}else if(3==(s=t.s)||0==s&&0<t.X||!(1==r&&(i=t,!(eZ(e.h)>=e.h.j-+!!e.s)&&(e.s?(e.i=i.D.concat(e.i),!0):1!=e.G&&2!=e.G&&!(e.B>=(e.Va?0:e.Wa))&&(e.s=eN(c(e.Ga,e,i),tZ(e,e.B)),e.B++,!0)))||2==r&&tQ(e)))switch(n&&0<n.length&&((t=e.h).i=t.i.concat(n)),s){case 1:t0(e,5);break;case 4:t0(e,10);break;case 3:t0(e,6);break;default:t0(e,2)}}}function tZ(e,t){let n=e.Ta+Math.floor(Math.random()*e.cb);return e.isActive()||(n*=2),n*t}function t0(e,t){if(e.j.info("Error code "+t),2==t){var n=c(e.fb,e),r=e.Xa;let t=!r;r=new e8(r||"//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||e7(r,"https"),tn(r),t?function(e,t){let n=new eR;if(a.Image){let r=new Image;r.onload=f(tw,n,"TestLoadImage: loaded",!0,t,r),r.onerror=f(tw,n,"TestLoadImage: error",!1,t,r),r.onabort=f(tw,n,"TestLoadImage: abort",!1,t,r),r.ontimeout=f(tw,n,"TestLoadImage: timeout",!1,t,r),a.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}(r.toString(),n):function(e,t){let n=new eR,r=new AbortController,i=setTimeout(()=>{r.abort(),tw(n,"TestPingServer: timeout",!1,t)},1e4);fetch(e,{signal:r.signal}).then(e=>{clearTimeout(i),e.ok?tw(n,"TestPingServer: ok",!0,t):tw(n,"TestPingServer: server error",!1,t)}).catch(()=>{clearTimeout(i),tw(n,"TestPingServer: error",!1,t)})}(r.toString(),n)}else eD(2);e.G=0,e.l&&e.l.sa(t),t1(e),t$(e)}function t1(e){if(e.G=0,e.ka=[],e.l){let t=e6(e.h);(0!=t.length||0!=e.i.length)&&(g(e.ka,t),g(e.ka,e.i),e.h.i.length=0,p(e.i),e.i.length=0),e.l.ra()}}function t2(e,t,n){var r=n instanceof e8?e4(n):new e8(n);if(""!=r.g)t&&(r.g=t+"."+r.g),e9(r,r.s);else{var i=a.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new e8(null);r&&e7(s,r),t&&(s.g=t),i&&e9(s,i),n&&(s.l=n),r=s}return n=e.D,t=e.ya,n&&t&&tt(r,n,t),tt(r,"VER",e.la),tK(e,r),r}function t6(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=new tA(e.Ca&&!e.pa?new tE({eb:n}):e.pa)).Ha(e.J),t}function t5(){}function t3(){}function t8(e,t){ea.call(this),this.g=new tB(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.va&&(e?e["X-WebChannel-Client-Profile"]=t.va:e={"X-WebChannel-Client-Profile":t.va}),this.g.S=e,(e=t&&t.Sb)&&!m(e)&&(this.g.m=e),this.v=t&&t.supportsCrossDomainXhr||!1,this.u=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!m(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&t in(e=this.h)&&delete e[t]),this.j=new t9(this)}function t4(e){eE.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(let n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function t7(){e_.call(this),this.status=1}function t9(e){this.g=e}(n=tA.prototype).Ha=function(e){this.J=e},n.ea=function(e,n,r,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e);n=n?n.toUpperCase():"GET",this.D=e,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():t.g(),this.v=this.o?ev(this.o):ev(t),this.g.onreadystatechange=c(this.Ea,this);try{this.B=!0,this.g.open(n,String(e),!0),this.B=!1}catch(e){tN(this,e);return}if(e=r||"",r=new Map(this.headers),i){if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)r.set(s,i[s]);else if("function"==typeof i.keys&&"function"==typeof i.get)for(let e of i.keys())r.set(e,i.get(e));else throw Error("Unknown input type for opt_headers: "+String(i))}for(let[t,o]of(i=Array.from(r.keys()).find(e=>"content-type"==e.toLowerCase()),s=a.FormData&&e instanceof a.FormData,!(0<=Array.prototype.indexOf.call(tk,n,void 0))||i||s||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r))this.g.setRequestHeader(t,o);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{tM(this),this.u=!0,this.g.send(e),this.u=!1}catch(e){tN(this,e)}},n.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=e||7,eo(this,"complete"),eo(this,"abort"),tO(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),tO(this,!0)),tA.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?tL(this):this.bb())},n.bb=function(){tL(this)},n.isActive=function(){return!!this.g},n.Z=function(){try{return 2<tP(this)?this.g.status:-1}catch(e){return -1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},n.Oa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),eg(t)}},n.Ba=function(){return this.m},n.Ka=function(){return"string"==typeof this.l?this.l:String(this.l)},(n=tB.prototype).la=8,n.G=1,n.connect=function(e,t,n,r){eD(0),this.W=e,this.H=t||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.I=t2(this,null,this.W),tq(this)},n.Ga=function(e){if(this.s){if(this.s=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;let i=new eU(this,this.j,e),s=this.o;if(this.S&&(s?N(s=D(s),this.S):s=this.S),null!==this.m||this.O||(i.H=s,s=null),this.P)e:{for(var t=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.map&&"string"==typeof(r=r.map.__data__)){r=r.length;break t}r=void 0}if(void 0===r)break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=tG(this,i,t),tt(n=e4(this.I),"RID",e),tt(n,"CVER",22),this.D&&tt(n,"X-HTTP-Session-Id",this.D),tK(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(tC(s)))+"&"+t:this.m&&tx(n,this.m,s)),e1(this.h,i),this.Ua&&tt(n,"TYPE","init"),this.P?(tt(n,"$req",t),tt(n,"SID","null"),i.T=!0,ej(i,n,null)):ej(i,n,t),this.G=2}}else 3==this.G&&(e?tz(this,e):0==this.i.length||eJ(this.h)||tz(this))}},n.Fa=function(){if(this.u=null,tX(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var e=2*this.R;this.j.info("BP detection timer enabled: "+e),this.A=eN(c(this.ab,this),e)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,eD(10),tj(this),tX(this))},n.Za=function(){null!=this.C&&(this.C=null,tj(this),tQ(this),eD(19))},n.fb=function(e){e?(this.j.info("Successfully pinged google.com"),eD(2)):(this.j.info("Failed to ping google.com"),eD(1))},n.isActive=function(){return!!this.l&&this.l.isActive(this)},(n=t5.prototype).ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){},t3.prototype.g=function(e,t){return new t8(e,t)},d(t8,ea),t8.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},t8.prototype.close=function(){tV(this.g)},t8.prototype.o=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.u&&((n={}).__data__=ep(e),e=n);t.i.push(new eX(t.Ya++,e)),3==t.G&&tq(t)},t8.prototype.N=function(){this.g.l=null,delete this.j,tV(this.g),delete this.g,t8.aa.N.call(this)},d(t4,eE),d(t7,e_),d(t9,t5),t9.prototype.ua=function(){eo(this.g,"a")},t9.prototype.ta=function(e){eo(this.g,new t4(e))},t9.prototype.sa=function(e){eo(this.g,new t7)},t9.prototype.ra=function(){eo(this.g,"b")},t3.prototype.createWebChannel=t3.prototype.g,t8.prototype.send=t8.prototype.o,t8.prototype.open=t8.prototype.m,t8.prototype.close=t8.prototype.close,I=ta.createWebChannelTransport=function(){return new t3},T=ta.getStatEventTarget=function(){return eS()},_=ta.Event=eT,E=ta.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},eO.NO_ERROR=0,eO.TIMEOUT=8,eO.HTTP_ERROR=6,b=ta.ErrorCode=eO,eM.COMPLETE="complete",w=ta.EventType=eM,ew.EventType=eb,eb.OPEN="a",eb.CLOSE="b",eb.ERROR="c",eb.MESSAGE="d",ea.prototype.listen=ea.prototype.K,v=ta.WebChannel=ew,ta.FetchXmlHttpFactory=tE,tA.prototype.listenOnce=tA.prototype.L,tA.prototype.getLastError=tA.prototype.Ka,tA.prototype.getLastErrorCode=tA.prototype.Ba,tA.prototype.getStatus=tA.prototype.Z,tA.prototype.getResponseJson=tA.prototype.Oa,tA.prototype.getResponseText=tA.prototype.oa,tA.prototype.send=tA.prototype.ea,tA.prototype.setWithCredentials=tA.prototype.Ha,y=ta.XhrIo=tA}).apply(void 0!==ts?ts:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{}),S=function(e){var t,n,r=function(e){var t=e.length;if(t%4>0)throw Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");-1===n&&(n=t);var r=n===t?0:4-n%4;return[n,r]}(e),i=r[0],s=r[1],a=new tu((i+s)*3/4-s),o=0,l=s>0?i-4:i;for(n=0;n<l;n+=4)t=tl[e.charCodeAt(n)]<<18|tl[e.charCodeAt(n+1)]<<12|tl[e.charCodeAt(n+2)]<<6|tl[e.charCodeAt(n+3)],a[o++]=t>>16&255,a[o++]=t>>8&255,a[o++]=255&t;return 2===s&&(t=tl[e.charCodeAt(n)]<<2|tl[e.charCodeAt(n+1)]>>4,a[o++]=255&t),1===s&&(t=tl[e.charCodeAt(n)]<<10|tl[e.charCodeAt(n+1)]<<4|tl[e.charCodeAt(n+2)]>>2,a[o++]=t>>8&255,a[o++]=255&t),a},C=function(e){for(var t,n=e.length,r=n%3,i=[],s=0,a=n-r;s<a;s+=16383)i.push(function(e,t,n){for(var r,i=[],s=t;s<n;s+=3)i.push(to[(r=(e[s]<<16&0xff0000)+(e[s+1]<<8&65280)+(255&e[s+2]))>>18&63]+to[r>>12&63]+to[r>>6&63]+to[63&r]);return i.join("")}(e,s,s+16383>a?a:s+16383));return 1===r?i.push(to[(t=e[n-1])>>2]+to[t<<4&63]+"=="):2===r&&i.push(to[(t=(e[n-2]<<8)+e[n-1])>>10]+to[t>>4&63]+to[t<<2&63]+"="),i.join("")};for(var to=[],tl=[],tu="undefined"!=typeof Uint8Array?Uint8Array:Array,th="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",tc=0,tf=th.length;tc<tf;++tc)to[tc]=th[tc],tl[th.charCodeAt(tc)]=tc;tl["-".charCodeAt(0)]=62,tl["_".charCodeAt(0)]=63,x=function(e,t,n,r,i){var s,a,o=8*i-r-1,l=(1<<o)-1,u=l>>1,h=-7,c=n?i-1:0,f=n?-1:1,d=e[t+c];for(c+=f,s=d&(1<<-h)-1,d>>=-h,h+=o;h>0;s=256*s+e[t+c],c+=f,h-=8);for(a=s&(1<<-h)-1,s>>=-h,h+=r;h>0;a=256*a+e[t+c],c+=f,h-=8);if(0===s)s=1-u;else{if(s===l)return a?NaN:1/0*(d?-1:1);a+=Math.pow(2,r),s-=u}return(d?-1:1)*a*Math.pow(2,s-r)},A=function(e,t,n,r,i,s){var a,o,l,u=8*s-i-1,h=(1<<u)-1,c=h>>1,f=5960464477539062e-23*(23===i),d=r?0:s-1,p=r?1:-1,g=+(t<0||0===t&&1/t<0);for(isNaN(t=Math.abs(t))||t===1/0?(o=+!!isNaN(t),a=h):(a=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-a))<1&&(a--,l*=2),a+c>=1?t+=f/l:t+=f*Math.pow(2,1-c),t*l>=2&&(a++,l/=2),a+c>=h?(o=0,a=h):a+c>=1?(o=(t*l-1)*Math.pow(2,i),a+=c):(o=t*Math.pow(2,c-1)*Math.pow(2,i),a=0));i>=8;e[n+d]=255&o,d+=p,o/=256,i-=8);for(a=a<<i|o,u+=i;u>0;e[n+d]=255&a,d+=p,a/=256,u-=8);e[n+d-p]|=128*g};const td="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;function tp(e){if(e>0x7fffffff)throw RangeError('The value "'+e+'" is invalid for option "size"');let t=new Uint8Array(e);return Object.setPrototypeOf(t,tg.prototype),t}function tg(e,t,n){if("number"==typeof e){if("string"==typeof t)throw TypeError('The "string" argument must be of type string. Received type number');return tv(e)}return tm(e,t,n)}function tm(e,t,n){if("string"==typeof e)return function(e,t){if(("string"!=typeof t||""===t)&&(t="utf8"),!tg.isEncoding(t))throw TypeError("Unknown encoding: "+t);let n=0|t_(e,t),r=tp(n),i=r.write(e,t);return i!==n&&(r=r.slice(0,i)),r}(e,t);if(ArrayBuffer.isView(e))return function(e){if(tK(e,Uint8Array)){let t=new Uint8Array(e);return tb(t.buffer,t.byteOffset,t.byteLength)}return tw(e)}(e);if(null==e)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(tK(e,ArrayBuffer)||e&&tK(e.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(tK(e,SharedArrayBuffer)||e&&tK(e.buffer,SharedArrayBuffer)))return tb(e,t,n);if("number"==typeof e)throw TypeError('The "value" argument must not be of type number. Received type number');let r=e.valueOf&&e.valueOf();if(null!=r&&r!==e)return tg.from(r,t,n);let i=function(e){var t;if(tg.isBuffer(e)){let t=0|tE(e.length),n=tp(t);return 0===n.length||e.copy(n,0,0,t),n}return void 0!==e.length?"number"!=typeof e.length||(t=e.length)!=t?tp(0):tw(e):"Buffer"===e.type&&Array.isArray(e.data)?tw(e.data):void 0}(e);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return tg.from(e[Symbol.toPrimitive]("string"),t,n);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function ty(e){if("number"!=typeof e)throw TypeError('"size" argument must be of type number');if(e<0)throw RangeError('The value "'+e+'" is invalid for option "size"')}function tv(e){return ty(e),tp(e<0?0:0|tE(e))}function tw(e){let t=e.length<0?0:0|tE(e.length),n=tp(t);for(let r=0;r<t;r+=1)n[r]=255&e[r];return n}function tb(e,t,n){let r;if(t<0||e.byteLength<t)throw RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(n||0))throw RangeError('"length" is outside of buffer bounds');return Object.setPrototypeOf(r=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n),tg.prototype),r}function tE(e){if(e>=0x7fffffff)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|e}function t_(e,t){if(tg.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||tK(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);let n=e.length,r=arguments.length>2&&!0===arguments[2];if(!r&&0===n)return 0;let i=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return t$(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return tq(e).length;default:if(i)return r?-1:t$(e).length;t=(""+t).toLowerCase(),i=!0}}function tT(e,t,n){let r=!1;if((void 0===t||t<0)&&(t=0),t>this.length||((void 0===n||n>this.length)&&(n=this.length),n<=0||(n>>>=0)<=(t>>>=0)))return"";for(e||(e="utf8");;)switch(e){case"hex":return function(e,t,n){let r=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>r)&&(n=r);let i="";for(let r=t;r<n;++r)i+=tG[e[r]];return i}(this,t,n);case"utf8":case"utf-8":return tx(this,t,n);case"ascii":return function(e,t,n){let r="";n=Math.min(e.length,n);for(let i=t;i<n;++i)r+=String.fromCharCode(127&e[i]);return r}(this,t,n);case"latin1":case"binary":return function(e,t,n){let r="";n=Math.min(e.length,n);for(let i=t;i<n;++i)r+=String.fromCharCode(e[i]);return r}(this,t,n);case"base64":var i,s;return i=t,s=n,0===i&&s===this.length?C(this):C(this.slice(i,s));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(e,t,n){let r=e.slice(t,n),i="";for(let e=0;e<r.length-1;e+=2)i+=String.fromCharCode(r[e]+256*r[e+1]);return i}(this,t,n);default:if(r)throw TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}function tI(e,t,n){let r=e[t];e[t]=e[n],e[n]=r}function tS(e,t,n,r,i){var s;if(0===e.length)return -1;if("string"==typeof n?(r=n,n=0):n>0x7fffffff?n=0x7fffffff:n<-0x80000000&&(n=-0x80000000),(s=n=+n)!=s&&(n=i?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(i)return -1;n=e.length-1}else if(n<0){if(!i)return -1;n=0}if("string"==typeof t&&(t=tg.from(t,r)),tg.isBuffer(t))return 0===t.length?-1:tC(e,t,n,r,i);if("number"==typeof t)return(t&=255,"function"==typeof Uint8Array.prototype.indexOf)?i?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):tC(e,[t],n,r,i);throw TypeError("val must be string, number or Buffer")}function tC(e,t,n,r,i){let s,a=1,o=e.length,l=t.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(e.length<2||t.length<2)return -1;a=2,o/=2,l/=2,n/=2}function u(e,t){return 1===a?e[t]:e.readUInt16BE(t*a)}if(i){let r=-1;for(s=n;s<o;s++)if(u(e,s)===u(t,-1===r?0:s-r)){if(-1===r&&(r=s),s-r+1===l)return r*a}else -1!==r&&(s-=s-r),r=-1}else for(n+l>o&&(n=o-l),s=n;s>=0;s--){let n=!0;for(let r=0;r<l;r++)if(u(e,s+r)!==u(t,r)){n=!1;break}if(n)return s}return -1}function tx(e,t,n){n=Math.min(e.length,n);let r=[],i=t;for(;i<n;){let t=e[i],s=null,a=t>239?4:t>223?3:t>191?2:1;if(i+a<=n){let n,r,o,l;switch(a){case 1:t<128&&(s=t);break;case 2:(192&(n=e[i+1]))==128&&(l=(31&t)<<6|63&n)>127&&(s=l);break;case 3:n=e[i+1],r=e[i+2],(192&n)==128&&(192&r)==128&&(l=(15&t)<<12|(63&n)<<6|63&r)>2047&&(l<55296||l>57343)&&(s=l);break;case 4:n=e[i+1],r=e[i+2],o=e[i+3],(192&n)==128&&(192&r)==128&&(192&o)==128&&(l=(15&t)<<18|(63&n)<<12|(63&r)<<6|63&o)>65535&&l<1114112&&(s=l)}}null===s?(s=65533,a=1):s>65535&&(s-=65536,r.push(s>>>10&1023|55296),s=56320|1023&s),r.push(s),i+=a}return function(e){let t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e);let n="",r=0;for(;r<t;)n+=String.fromCharCode.apply(String,e.slice(r,r+=4096));return n}(r)}function tA(e,t,n){if(e%1!=0||e<0)throw RangeError("offset is not uint");if(e+t>n)throw RangeError("Trying to access beyond buffer length")}function tD(e,t,n,r,i,s){if(!tg.isBuffer(e))throw TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<s)throw RangeError('"value" argument is out of bounds');if(n+r>e.length)throw RangeError("Index out of range")}function tk(e,t,n,r,i){tF(t,r,i,e,n,7);let s=Number(t&BigInt(0xffffffff));e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s;let a=Number(t>>BigInt(32)&BigInt(0xffffffff));return e[n++]=a,a>>=8,e[n++]=a,a>>=8,e[n++]=a,a>>=8,e[n++]=a,n}function tN(e,t,n,r,i){tF(t,r,i,e,n,7);let s=Number(t&BigInt(0xffffffff));e[n+7]=s,s>>=8,e[n+6]=s,s>>=8,e[n+5]=s,s>>=8,e[n+4]=s;let a=Number(t>>BigInt(32)&BigInt(0xffffffff));return e[n+3]=a,a>>=8,e[n+2]=a,a>>=8,e[n+1]=a,a>>=8,e[n]=a,n+8}function tR(e,t,n,r,i,s){if(n+r>e.length||n<0)throw RangeError("Index out of range")}function tL(e,t,n,r,i){return t=+t,n>>>=0,i||tR(e,t,n,4,34028234663852886e22,-34028234663852886e22),A(e,t,n,r,23,4),n+4}function tO(e,t,n,r,i){return t=+t,n>>>=0,i||tR(e,t,n,8,17976931348623157e292,-17976931348623157e292),A(e,t,n,r,52,8),n+8}tg.TYPED_ARRAY_SUPPORT=function(){try{let e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),tg.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(tg.prototype,"parent",{enumerable:!0,get:function(){if(tg.isBuffer(this))return this.buffer}}),Object.defineProperty(tg.prototype,"offset",{enumerable:!0,get:function(){if(tg.isBuffer(this))return this.byteOffset}}),tg.poolSize=8192,tg.from=function(e,t,n){return tm(e,t,n)},Object.setPrototypeOf(tg.prototype,Uint8Array.prototype),Object.setPrototypeOf(tg,Uint8Array),tg.alloc=function(e,t,n){return(ty(e),e<=0)?tp(e):void 0!==t?"string"==typeof n?tp(e).fill(t,n):tp(e).fill(t):tp(e)},tg.allocUnsafe=function(e){return tv(e)},tg.allocUnsafeSlow=function(e){return tv(e)},tg.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==tg.prototype},tg.compare=function(e,t){if(tK(e,Uint8Array)&&(e=tg.from(e,e.offset,e.byteLength)),tK(t,Uint8Array)&&(t=tg.from(t,t.offset,t.byteLength)),!tg.isBuffer(e)||!tg.isBuffer(t))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,r=t.length;for(let i=0,s=Math.min(n,r);i<s;++i)if(e[i]!==t[i]){n=e[i],r=t[i];break}return n<r?-1:+(r<n)},tg.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},tg.concat=function(e,t){let n;if(!Array.isArray(e))throw TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return tg.alloc(0);if(void 0===t)for(n=0,t=0;n<e.length;++n)t+=e[n].length;let r=tg.allocUnsafe(t),i=0;for(n=0;n<e.length;++n){let t=e[n];if(tK(t,Uint8Array))i+t.length>r.length?(tg.isBuffer(t)||(t=tg.from(t)),t.copy(r,i)):Uint8Array.prototype.set.call(r,t,i);else if(tg.isBuffer(t))t.copy(r,i);else throw TypeError('"list" argument must be an Array of Buffers');i+=t.length}return r},tg.byteLength=t_,tg.prototype._isBuffer=!0,tg.prototype.swap16=function(){let e=this.length;if(e%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)tI(this,t,t+1);return this},tg.prototype.swap32=function(){let e=this.length;if(e%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)tI(this,t,t+3),tI(this,t+1,t+2);return this},tg.prototype.swap64=function(){let e=this.length;if(e%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)tI(this,t,t+7),tI(this,t+1,t+6),tI(this,t+2,t+5),tI(this,t+3,t+4);return this},tg.prototype.toString=function(){let e=this.length;return 0===e?"":0==arguments.length?tx(this,0,e):tT.apply(this,arguments)},tg.prototype.toLocaleString=tg.prototype.toString,tg.prototype.equals=function(e){if(!tg.isBuffer(e))throw TypeError("Argument must be a Buffer");return this===e||0===tg.compare(this,e)},tg.prototype.inspect=function(){let e="";return e=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(e+=" ... "),"<Buffer "+e+">"},td&&(tg.prototype[td]=tg.prototype.inspect),tg.prototype.compare=function(e,t,n,r,i){if(tK(e,Uint8Array)&&(e=tg.from(e,e.offset,e.byteLength)),!tg.isBuffer(e))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===r&&(r=0),void 0===i&&(i=this.length),t<0||n>e.length||r<0||i>this.length)throw RangeError("out of range index");if(r>=i&&t>=n)return 0;if(r>=i)return -1;if(t>=n)return 1;if(t>>>=0,n>>>=0,r>>>=0,i>>>=0,this===e)return 0;let s=i-r,a=n-t,o=Math.min(s,a),l=this.slice(r,i),u=e.slice(t,n);for(let e=0;e<o;++e)if(l[e]!==u[e]){s=l[e],a=u[e];break}return s<a?-1:+(a<s)},tg.prototype.includes=function(e,t,n){return -1!==this.indexOf(e,t,n)},tg.prototype.indexOf=function(e,t,n){return tS(this,e,t,n,!0)},tg.prototype.lastIndexOf=function(e,t,n){return tS(this,e,t,n,!1)},tg.prototype.write=function(e,t,n,r){var i,s,a,o,l,u,h,c;if(void 0===t)r="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)r=t,n=this.length,t=0;else if(isFinite(t))t>>>=0,isFinite(n)?(n>>>=0,void 0===r&&(r="utf8")):(r=n,n=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let f=this.length-t;if((void 0===n||n>f)&&(n=f),e.length>0&&(n<0||t<0)||t>this.length)throw RangeError("Attempt to write outside buffer bounds");r||(r="utf8");let d=!1;for(;;)switch(r){case"hex":return function(e,t,n,r){let i;n=Number(n)||0;let s=e.length-n;r?(r=Number(r))>s&&(r=s):r=s;let a=t.length;for(r>a/2&&(r=a/2),i=0;i<r;++i){let r=parseInt(t.substr(2*i,2),16);if(r!=r)break;e[n+i]=r}return i}(this,e,t,n);case"utf8":case"utf-8":return i=t,s=n,tz(t$(e,this.length-i),this,i,s);case"ascii":case"latin1":case"binary":return a=t,o=n,tz(function(e){let t=[];for(let n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(e),this,a,o);case"base64":return l=t,u=n,tz(tq(e),this,l,u);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return h=t,c=n,tz(function(e,t){let n,r;let i=[];for(let s=0;s<e.length&&!((t-=2)<0);++s)r=(n=e.charCodeAt(s))>>8,i.push(n%256),i.push(r);return i}(e,this.length-h),this,h,c);default:if(d)throw TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),d=!0}},tg.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},tg.prototype.slice=function(e,t){let n=this.length;e=~~e,t=void 0===t?n:~~t,e<0?(e+=n)<0&&(e=0):e>n&&(e=n),t<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e);let r=this.subarray(e,t);return Object.setPrototypeOf(r,tg.prototype),r},tg.prototype.readUintLE=tg.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||tA(e,t,this.length);let r=this[e],i=1,s=0;for(;++s<t&&(i*=256);)r+=this[e+s]*i;return r},tg.prototype.readUintBE=tg.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||tA(e,t,this.length);let r=this[e+--t],i=1;for(;t>0&&(i*=256);)r+=this[e+--t]*i;return r},tg.prototype.readUint8=tg.prototype.readUInt8=function(e,t){return e>>>=0,t||tA(e,1,this.length),this[e]},tg.prototype.readUint16LE=tg.prototype.readUInt16LE=function(e,t){return e>>>=0,t||tA(e,2,this.length),this[e]|this[e+1]<<8},tg.prototype.readUint16BE=tg.prototype.readUInt16BE=function(e,t){return e>>>=0,t||tA(e,2,this.length),this[e]<<8|this[e+1]},tg.prototype.readUint32LE=tg.prototype.readUInt32LE=function(e,t){return e>>>=0,t||tA(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+0x1000000*this[e+3]},tg.prototype.readUint32BE=tg.prototype.readUInt32BE=function(e,t){return e>>>=0,t||tA(e,4,this.length),0x1000000*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},tg.prototype.readBigUInt64LE=tH(function(e){tB(e>>>=0,"offset");let t=this[e],n=this[e+7];(void 0===t||void 0===n)&&tV(e,this.length-8);let r=t+256*this[++e]+65536*this[++e]+0x1000000*this[++e],i=this[++e]+256*this[++e]+65536*this[++e]+0x1000000*n;return BigInt(r)+(BigInt(i)<<BigInt(32))}),tg.prototype.readBigUInt64BE=tH(function(e){tB(e>>>=0,"offset");let t=this[e],n=this[e+7];(void 0===t||void 0===n)&&tV(e,this.length-8);let r=0x1000000*t+65536*this[++e]+256*this[++e]+this[++e],i=0x1000000*this[++e]+65536*this[++e]+256*this[++e]+n;return(BigInt(r)<<BigInt(32))+BigInt(i)}),tg.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||tA(e,t,this.length);let r=this[e],i=1,s=0;for(;++s<t&&(i*=256);)r+=this[e+s]*i;return r>=(i*=128)&&(r-=Math.pow(2,8*t)),r},tg.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||tA(e,t,this.length);let r=t,i=1,s=this[e+--r];for(;r>0&&(i*=256);)s+=this[e+--r]*i;return s>=(i*=128)&&(s-=Math.pow(2,8*t)),s},tg.prototype.readInt8=function(e,t){return(e>>>=0,t||tA(e,1,this.length),128&this[e])?-((255-this[e]+1)*1):this[e]},tg.prototype.readInt16LE=function(e,t){e>>>=0,t||tA(e,2,this.length);let n=this[e]|this[e+1]<<8;return 32768&n?0xffff0000|n:n},tg.prototype.readInt16BE=function(e,t){e>>>=0,t||tA(e,2,this.length);let n=this[e+1]|this[e]<<8;return 32768&n?0xffff0000|n:n},tg.prototype.readInt32LE=function(e,t){return e>>>=0,t||tA(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},tg.prototype.readInt32BE=function(e,t){return e>>>=0,t||tA(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},tg.prototype.readBigInt64LE=tH(function(e){tB(e>>>=0,"offset");let t=this[e],n=this[e+7];return(void 0===t||void 0===n)&&tV(e,this.length-8),(BigInt(this[e+4]+256*this[e+5]+65536*this[e+6]+(n<<24))<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+0x1000000*this[++e])}),tg.prototype.readBigInt64BE=tH(function(e){tB(e>>>=0,"offset");let t=this[e],n=this[e+7];return(void 0===t||void 0===n)&&tV(e,this.length-8),(BigInt((t<<24)+65536*this[++e]+256*this[++e]+this[++e])<<BigInt(32))+BigInt(0x1000000*this[++e]+65536*this[++e]+256*this[++e]+n)}),tg.prototype.readFloatLE=function(e,t){return e>>>=0,t||tA(e,4,this.length),x(this,e,!0,23,4)},tg.prototype.readFloatBE=function(e,t){return e>>>=0,t||tA(e,4,this.length),x(this,e,!1,23,4)},tg.prototype.readDoubleLE=function(e,t){return e>>>=0,t||tA(e,8,this.length),x(this,e,!0,52,8)},tg.prototype.readDoubleBE=function(e,t){return e>>>=0,t||tA(e,8,this.length),x(this,e,!1,52,8)},tg.prototype.writeUintLE=tg.prototype.writeUIntLE=function(e,t,n,r){if(e=+e,t>>>=0,n>>>=0,!r){let r=Math.pow(2,8*n)-1;tD(this,e,t,n,r,0)}let i=1,s=0;for(this[t]=255&e;++s<n&&(i*=256);)this[t+s]=e/i&255;return t+n},tg.prototype.writeUintBE=tg.prototype.writeUIntBE=function(e,t,n,r){if(e=+e,t>>>=0,n>>>=0,!r){let r=Math.pow(2,8*n)-1;tD(this,e,t,n,r,0)}let i=n-1,s=1;for(this[t+i]=255&e;--i>=0&&(s*=256);)this[t+i]=e/s&255;return t+n},tg.prototype.writeUint8=tg.prototype.writeUInt8=function(e,t,n){return e=+e,t>>>=0,n||tD(this,e,t,1,255,0),this[t]=255&e,t+1},tg.prototype.writeUint16LE=tg.prototype.writeUInt16LE=function(e,t,n){return e=+e,t>>>=0,n||tD(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},tg.prototype.writeUint16BE=tg.prototype.writeUInt16BE=function(e,t,n){return e=+e,t>>>=0,n||tD(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},tg.prototype.writeUint32LE=tg.prototype.writeUInt32LE=function(e,t,n){return e=+e,t>>>=0,n||tD(this,e,t,4,0xffffffff,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},tg.prototype.writeUint32BE=tg.prototype.writeUInt32BE=function(e,t,n){return e=+e,t>>>=0,n||tD(this,e,t,4,0xffffffff,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},tg.prototype.writeBigUInt64LE=tH(function(e,t=0){return tk(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),tg.prototype.writeBigUInt64BE=tH(function(e,t=0){return tN(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),tg.prototype.writeIntLE=function(e,t,n,r){if(e=+e,t>>>=0,!r){let r=Math.pow(2,8*n-1);tD(this,e,t,n,r-1,-r)}let i=0,s=1,a=0;for(this[t]=255&e;++i<n&&(s*=256);)e<0&&0===a&&0!==this[t+i-1]&&(a=1),this[t+i]=(e/s>>0)-a&255;return t+n},tg.prototype.writeIntBE=function(e,t,n,r){if(e=+e,t>>>=0,!r){let r=Math.pow(2,8*n-1);tD(this,e,t,n,r-1,-r)}let i=n-1,s=1,a=0;for(this[t+i]=255&e;--i>=0&&(s*=256);)e<0&&0===a&&0!==this[t+i+1]&&(a=1),this[t+i]=(e/s>>0)-a&255;return t+n},tg.prototype.writeInt8=function(e,t,n){return e=+e,t>>>=0,n||tD(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},tg.prototype.writeInt16LE=function(e,t,n){return e=+e,t>>>=0,n||tD(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},tg.prototype.writeInt16BE=function(e,t,n){return e=+e,t>>>=0,n||tD(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},tg.prototype.writeInt32LE=function(e,t,n){return e=+e,t>>>=0,n||tD(this,e,t,4,0x7fffffff,-0x80000000),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},tg.prototype.writeInt32BE=function(e,t,n){return e=+e,t>>>=0,n||tD(this,e,t,4,0x7fffffff,-0x80000000),e<0&&(e=0xffffffff+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},tg.prototype.writeBigInt64LE=tH(function(e,t=0){return tk(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),tg.prototype.writeBigInt64BE=tH(function(e,t=0){return tN(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),tg.prototype.writeFloatLE=function(e,t,n){return tL(this,e,t,!0,n)},tg.prototype.writeFloatBE=function(e,t,n){return tL(this,e,t,!1,n)},tg.prototype.writeDoubleLE=function(e,t,n){return tO(this,e,t,!0,n)},tg.prototype.writeDoubleBE=function(e,t,n){return tO(this,e,t,!1,n)},tg.prototype.copy=function(e,t,n,r){if(!tg.isBuffer(e))throw TypeError("argument should be a Buffer");if(n||(n=0),r||0===r||(r=this.length),t>=e.length&&(t=e.length),t||(t=0),r>0&&r<n&&(r=n),r===n||0===e.length||0===this.length)return 0;if(t<0)throw RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw RangeError("Index out of range");if(r<0)throw RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n);let i=r-n;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,n,r):Uint8Array.prototype.set.call(e,this.subarray(n,r),t),i},tg.prototype.fill=function(e,t,n,r){let i;if("string"==typeof e){if("string"==typeof t?(r=t,t=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),void 0!==r&&"string"!=typeof r)throw TypeError("encoding must be a string");if("string"==typeof r&&!tg.isEncoding(r))throw TypeError("Unknown encoding: "+r);if(1===e.length){let t=e.charCodeAt(0);("utf8"===r&&t<128||"latin1"===r)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw RangeError("Out of range index");if(n<=t)return this;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(i=t;i<n;++i)this[i]=e;else{let s=tg.isBuffer(e)?e:tg.from(e,r),a=s.length;if(0===a)throw TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<n-t;++i)this[i+t]=s[i%a]}return this};const tM={};function tP(e,t,n){tM[e]=class extends n{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}}}function tU(e){let t="",n=e.length,r=+("-"===e[0]);for(;n>=r+4;n-=3)t=`_${e.slice(n-3,n)}${t}`;return`${e.slice(0,n)}${t}`}function tF(e,t,n,r,i,s){if(e>n||e<t){let r;let i="bigint"==typeof t?"n":"";throw r=s>3?0===t||t===BigInt(0)?`>= 0${i} and < 2${i} ** ${(s+1)*8}${i}`:`>= -(2${i} ** ${(s+1)*8-1}${i}) and < 2 ** ${(s+1)*8-1}${i}`:`>= ${t}${i} and <= ${n}${i}`,new tM.ERR_OUT_OF_RANGE("value",r,e)}tB(i,"offset"),(void 0===r[i]||void 0===r[i+s])&&tV(i,r.length-(s+1))}function tB(e,t){if("number"!=typeof e)throw new tM.ERR_INVALID_ARG_TYPE(t,"number",e)}function tV(e,t,n){if(Math.floor(e)!==e)throw tB(e,n),new tM.ERR_OUT_OF_RANGE(n||"offset","an integer",e);if(t<0)throw new tM.ERR_BUFFER_OUT_OF_BOUNDS;throw new tM.ERR_OUT_OF_RANGE(n||"offset",`>= ${+!!n} and <= ${t}`,e)}tP("ERR_BUFFER_OUT_OF_BOUNDS",function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),tP("ERR_INVALID_ARG_TYPE",function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`},TypeError),tP("ERR_OUT_OF_RANGE",function(e,t,n){let r=`The value of "${e}" is out of range.`,i=n;return Number.isInteger(n)&&Math.abs(n)>0x100000000?i=tU(String(n)):"bigint"==typeof n&&(i=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(i=tU(i)),i+="n"),r+=` It must be ${t}. Received ${i}`},RangeError);const tj=/[^+/0-9A-Za-z-_]/g;function t$(e,t){let n;t=t||1/0;let r=e.length,i=null,s=[];for(let a=0;a<r;++a){if((n=e.charCodeAt(a))>55295&&n<57344){if(!i){if(n>56319||a+1===r){(t-=3)>-1&&s.push(239,191,189);continue}i=n;continue}if(n<56320){(t-=3)>-1&&s.push(239,191,189),i=n;continue}n=(i-55296<<10|n-56320)+65536}else i&&(t-=3)>-1&&s.push(239,191,189);if(i=null,n<128){if((t-=1)<0)break;s.push(n)}else if(n<2048){if((t-=2)<0)break;s.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;s.push(n>>12|224,n>>6&63|128,63&n|128)}else if(n<1114112){if((t-=4)<0)break;s.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}else throw Error("Invalid code point")}return s}function tq(e){return S(function(e){if((e=(e=e.split("=")[0]).trim().replace(tj,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function tz(e,t,n,r){let i;for(i=0;i<r&&!(i+n>=t.length)&&!(i>=e.length);++i)t[i+n]=e[i];return i}function tK(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}const tG=function(){let e="0123456789abcdef",t=Array(256);for(let n=0;n<16;++n){let r=16*n;for(let i=0;i<16;++i)t[r+i]=e[n]+e[i]}return t}();function tH(e){return"undefined"==typeof BigInt?tQ:e}function tQ(){throw Error("BigInt not supported")}const tW="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tX{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}tX.UNAUTHENTICATED=new tX(null),tX.GOOGLE_CREDENTIALS=new tX("google-credentials-uid"),tX.FIRST_PARTY=new tX("first-party-uid"),tX.MOCK_USER=new tX("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tY="11.2.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tJ=new eS("@firebase/firestore");function tZ(){return tJ.logLevel}function t0(e,...t){if(tJ.logLevel<=p.DEBUG){let n=t.map(t6);tJ.debug(`Firestore (${tY}): ${e}`,...n)}}function t1(e,...t){if(tJ.logLevel<=p.ERROR){let n=t.map(t6);tJ.error(`Firestore (${tY}): ${e}`,...n)}}function t2(e,...t){if(tJ.logLevel<=p.WARN){let n=t.map(t6);tJ.warn(`Firestore (${tY}): ${e}`,...n)}}function t6(e){if("string"==typeof e)return e;try{/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return JSON.stringify(e)}catch(t){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t5(e="Unexpected state"){let t=`FIRESTORE (${tY}) INTERNAL ASSERTION FAILED: `+e;throw t1(t),Error(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t3={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class t8 extends eu{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t4{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t7{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class t9{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(tX.UNAUTHENTICATED))}shutdown(){}}class ne{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class nt{constructor(e){this.t=e,this.currentUser=tX.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){void 0===this.o||t5();let n=this.i,r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve(),i=new t4;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new t4,e.enqueueRetryable(()=>r(this.currentUser))};let s=()=>{let t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},a=e=>{t0("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?a(e):(t0("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new t4)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(t0("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||t5(),new t7(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||t5(),new tX(e)}}class nn{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=tX.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);let e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class nr{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new nn(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(tX.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ni{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ns{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){void 0===this.o||t5();let n=e=>{null!=e.error&&t0("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let n=e.token!==this.R;return this.R=e.token,t0("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};let r=e=>{t0("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){let e=this.A.getImmediate({optional:!0});e?r(e):t0("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||t5(),this.R=e.token,new ni(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{static newId(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,n="";for(;n.length<20;){let r=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(40);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let e=0;e<40;e++)n[e]=Math.floor(256*Math.random());return n}(0);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function no(e,t){return e<t?-1:+(e>t)}function nl(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{static now(){return nu.fromMillis(Date.now())}static fromDate(e){return nu.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new nu(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new t8(t3.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-0xe7791f700||e>=0x3afff44180)throw new t8(t3.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?no(this.nanoseconds,e.nanoseconds):no(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){return String(this.seconds- -0xe7791f700).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{static fromTimestamp(e){return new nh(e)}static min(){return new nh(new nu(0,0))}static max(){return new nh(new nu(0x3afff4417f,0x3b9ac9ff))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e,t,n){void 0===t?t=0:t>e.length&&t5(),void 0===n?n=e.length-t:n>e.length-t&&t5(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===nc.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof nc?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++){let n=nc.compareSegments(e.get(r),t.get(r));if(0!==n)return n}return Math.sign(e.length-t.length)}static compareSegments(e,t){let n=nc.isNumericId(e),r=nc.isNumericId(t);return n&&!r?-1:!n&&r?1:n&&r?nc.extractNumericId(e).compare(nc.extractNumericId(t)):e<t?-1:+(e>t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return g.fromString(e.substring(4,e.length-2))}}class nf extends nc{construct(e,t,n){return new nf(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let n of e){if(n.indexOf("//")>=0)throw new t8(t3.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new nf(t)}static emptyPath(){return new nf([])}}const nd=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class np extends nc{construct(e,t,n){return new np(e,t,n)}static isValidIdentifier(e){return nd.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),np.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new np(["__name__"])}static fromServerFormat(e){let t=[],n="",r=0,i=()=>{if(0===n.length)throw new t8(t3.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""},s=!1;for(;r<e.length;){let t=e[r];if("\\"===t){if(r+1===e.length)throw new t8(t3.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new t8(t3.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?s=!s:"."!==t||s?n+=t:i(),r++}if(i(),s)throw new t8(t3.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new np(t)}static emptyPath(){return new np([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(e){this.path=e}static fromPath(e){return new ng(nf.fromString(e))}static fromName(e){return new ng(nf.fromString(e).popFirst(5))}static empty(){return new ng(nf.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===nf.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return nf.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ng(new nf(e.slice()))}}class nm{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new nm(nh.min(),ng.empty(),-1)}static max(){return new nm(nh.max(),ng.empty(),-1)}}class ny{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nv(e){if(e.code!==t3.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;t0("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&t5(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new nw((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof nw?t:nw.resolve(t)}catch(e){return nw.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):nw.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):nw.reject(t)}static resolve(e){return new nw((t,n)=>{t(e)})}static reject(e){return new nw((t,n)=>{n(e)})}static waitFor(e){return new nw((t,n)=>{let r=0,i=0,s=!1;e.forEach(e=>{++r,e.next(()=>{++i,s&&i===r&&t()},e=>n(e))}),s=!0,i===r&&t()})}static or(e){let t=nw.resolve(!1);for(let n of e)t=t.next(e=>e?nw.resolve(e):n());return t}static forEach(e,t){let n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(e,t){return new nw((n,r)=>{let i=e.length,s=Array(i),a=0;for(let o=0;o<i;o++){let l=o;t(e[l]).next(e=>{s[l]=e,++a===i&&n(s)},e=>r(e))}})}static doWhile(e,t){return new nw((n,r)=>{let i=()=>{!0===e()?t().next(()=>{i()},r):n()};i()})}}function nb(e){return"IndexedDbTransactionError"===e.name}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ie(e),this.se=e=>t.writeSequenceNumber(e))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.se&&this.se(e),e}}function n_(e){return 0===e&&1/e==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nT(e){let t=0;for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function nI(e,t){for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function nS(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}nE.oe=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(e,t){this.comparator=e,this.root=t||nA.EMPTY}insert(e,t){return new nC(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,nA.BLACK,null,null))}remove(e){return new nC(this.comparator,this.root.remove(e,this.comparator).copy(null,null,nA.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){let r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){let e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new nx(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new nx(this.root,e,this.comparator,!1)}getReverseIterator(){return new nx(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new nx(this.root,e,this.comparator,!0)}}class nx{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class nA{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:nA.RED,this.left=null!=r?r:nA.EMPTY,this.right=null!=i?i:nA.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new nA(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp()}removeMin(){if(this.left.isEmpty())return nA.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let n,r=this;if(0>t(e,r.key))r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return nA.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,nA.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,nA.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){return Math.pow(2,this.check())<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw t5();let e=this.left.check();if(e!==this.right.check())throw t5();return e+ +!this.isRed()}}nA.EMPTY=null,nA.RED=!0,nA.BLACK=!1,nA.EMPTY=new class{constructor(){this.size=0}get key(){throw t5()}get value(){throw t5()}get color(){throw t5()}get left(){throw t5()}get right(){throw t5()}copy(e,t,n,r,i){return this}insert(e,t,n){return new nA(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD{constructor(e){this.comparator=e,this.data=new nC(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){let n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){let r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new nk(this.data.getIterator())}getIteratorFrom(e){return new nk(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof nD)||this.size!==e.size)return!1;let t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new nD(this.comparator);return t.data=e,t}}class nk{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{constructor(e){this.fields=e,e.sort(np.comparator)}static empty(){return new nN([])}unionWith(e){let t=new nD(np.comparator);for(let e of this.fields)t=t.add(e);for(let n of e)t=t.add(n);return new nN(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return nl(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nL{constructor(e){this.binaryString=e}static fromBase64String(e){return new nL(function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new nR("Invalid base64 string: "+e):e}}(e))}static fromUint8Array(e){return new nL(function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e))}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return no(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}nL.EMPTY_BYTE_STRING=new nL("");const nO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function nM(e){if(e||t5(),"string"==typeof e){let t=0,n=nO.exec(e);if(n||t5(),n[1]){let e=n[1];t=Number(e=(e+"000000000").substr(0,9))}return{seconds:Math.floor(new Date(e).getTime()/1e3),nanos:t}}return{seconds:nP(e.seconds),nanos:nP(e.nanos)}}function nP(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function nU(e){return"string"==typeof e?nL.fromBase64String(e):nL.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nF(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function nB(e){let t=e.mapValue.fields.__previous_value__;return nF(t)?nB(t):t}function nV(e){let t=nM(e.mapValue.fields.__local_write_time__.timestampValue);return new nu(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nj{constructor(e,t,n,r,i,s,a,o,l){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=o,this.useFetchStreams=l}}class n${constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new n$("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof n$&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nq={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function nz(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?nF(e)?4:n5(e)?0x1fffffffffffff:n2(e)?10:11:t5()}function nK(e,t){if(e===t)return!0;let n=nz(e);if(n!==nz(t))return!1;switch(n){case 0:case 0x1fffffffffffff:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return nV(e).isEqual(nV(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let n=nM(e.timestampValue),r=nM(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return nU(e.bytesValue).isEqual(nU(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return nP(e.geoPointValue.latitude)===nP(t.geoPointValue.latitude)&&nP(e.geoPointValue.longitude)===nP(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return nP(e.integerValue)===nP(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let n=nP(e.doubleValue),r=nP(t.doubleValue);return n===r?n_(n)===n_(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return nl(e.arrayValue.values||[],t.arrayValue.values||[],nK);case 10:case 11:return function(e,t){let n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(nT(n)!==nT(r))return!1;for(let e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!nK(n[e],r[e])))return!1;return!0}(e,t);default:return t5()}}function nG(e,t){return void 0!==(e.values||[]).find(e=>nK(e,t))}function nH(e,t){if(e===t)return 0;let n=nz(e),r=nz(t);if(n!==r)return no(n,r);switch(n){case 0:case 0x1fffffffffffff:return 0;case 1:return no(e.booleanValue,t.booleanValue);case 2:return function(e,t){let n=nP(e.integerValue||e.doubleValue),r=nP(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return nQ(e.timestampValue,t.timestampValue);case 4:return nQ(nV(e),nV(t));case 5:return no(e.stringValue,t.stringValue);case 6:return function(e,t){let n=nU(e),r=nU(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){let t=no(n[e],r[e]);if(0!==t)return t}return no(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let n=no(nP(e.latitude),nP(t.latitude));return 0!==n?n:no(nP(e.longitude),nP(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return nW(e.arrayValue,t.arrayValue);case 10:return function(e,t){var n,r,i,s;let a=e.fields||{},o=t.fields||{},l=null===(n=a.value)||void 0===n?void 0:n.arrayValue,u=null===(r=o.value)||void 0===r?void 0:r.arrayValue,h=no((null===(i=null==l?void 0:l.values)||void 0===i?void 0:i.length)||0,(null===(s=null==u?void 0:u.values)||void 0===s?void 0:s.length)||0);return 0!==h?h:nW(l,u)}(e.mapValue,t.mapValue);case 11:return function(e,t){if(e===nq.mapValue&&t===nq.mapValue)return 0;if(e===nq.mapValue)return 1;if(t===nq.mapValue)return -1;let n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let e=0;e<r.length&&e<s.length;++e){let t=no(r[e],s[e]);if(0!==t)return t;let a=nH(n[r[e]],i[s[e]]);if(0!==a)return a}return no(r.length,s.length)}(e.mapValue,t.mapValue);default:throw t5()}}function nQ(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return no(e,t);let n=nM(e),r=nM(t),i=no(n.seconds,r.seconds);return 0!==i?i:no(n.nanos,r.nanos)}function nW(e,t){let n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){let t=nH(n[e],r[e]);if(t)return t}return no(n.length,r.length)}function nX(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=nM(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?nU(e.bytesValue).toBase64():"referenceValue"in e?(t=e.referenceValue,ng.fromName(t).toString()):"geoPointValue"in e?(n=e.geoPointValue,`geo(${n.latitude},${n.longitude})`):"arrayValue"in e?function(e){let t="[",n=!0;for(let r of e.values||[])n?n=!1:t+=",",t+=nX(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),n="{",r=!0;for(let i of t)r?r=!1:n+=",",n+=`${i}:${nX(e.fields[i])}`;return n+"}"}(e.mapValue):t5()}function nY(e){return!!e&&"integerValue"in e}function nJ(e){return!!e&&"arrayValue"in e}function nZ(e){return!!e&&"nullValue"in e}function n0(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function n1(e){return!!e&&"mapValue"in e}function n2(e){var t,n;return"__vector__"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function n6(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return nI(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=n6(n)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=n6(e.arrayValue.values[n]);return t}return Object.assign({},e)}function n5(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n3{constructor(e){this.value=e}static empty(){return new n3({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(!n1(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=n6(t)}setAll(e){let t=np.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){let e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=n6(e):r.push(i.lastSegment())});let i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){let t=this.field(e.popLast());n1(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return nK(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];n1(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){for(let r of(nI(t,(t,n)=>e[t]=n),n))delete e[r]}clone(){return new n3(n6(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n8{constructor(e,t,n,r,i,s,a){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=a}static newInvalidDocument(e){return new n8(e,0,nh.min(),nh.min(),nh.min(),n3.empty(),0)}static newFoundDocument(e,t,n,r){return new n8(e,1,t,nh.min(),n,r,0)}static newNoDocument(e,t){return new n8(e,2,t,nh.min(),nh.min(),n3.empty(),0)}static newUnknownDocument(e,t){return new n8(e,3,t,nh.min(),nh.min(),n3.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(nh.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=n3.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=n3.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=nh.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof n8&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new n8(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n4{constructor(e,t){this.position=e,this.inclusive=t}}function n7(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){let s=t[i],a=e.position[i];if(r=s.field.isKeyField()?ng.comparator(ng.fromName(a.referenceValue),n.key):nH(a,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function n9(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!nK(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{}class rn extends rt{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new ra(e,t,n):"array-contains"===t?new rh(e,n):"in"===t?new rc(e,n):"not-in"===t?new rf(e,n):"array-contains-any"===t?new rd(e,n):new rn(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new ro(e,n):new rl(e,n)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(nH(t,this.value)):null!==t&&nz(this.value)===nz(t)&&this.matchesComparison(nH(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return t5()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class rr extends rt{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new rr(e,t)}matches(e){return ri(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ae||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ri(e){return"and"===e.op}function rs(e){for(let t of e.filters)if(t instanceof rr)return!1;return!0}class ra extends rn{constructor(e,t,n){super(e,t,n),this.key=ng.fromName(n.referenceValue)}matches(e){let t=ng.comparator(e.key,this.key);return this.matchesComparison(t)}}class ro extends rn{constructor(e,t){super(e,"in",t),this.keys=ru("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class rl extends rn{constructor(e,t){super(e,"not-in",t),this.keys=ru("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function ru(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>ng.fromName(e.referenceValue))}class rh extends rn{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return nJ(t)&&nG(t.arrayValue,this.value)}}class rc extends rn{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&nG(this.value.arrayValue,t)}}class rf extends rn{constructor(e,t){super(e,"not-in",t)}matches(e){if(nG(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!nG(this.value.arrayValue,t)}}class rd extends rn{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!nJ(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>nG(this.value.arrayValue,e))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(e,t=null,n=[],r=[],i=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=a,this.ue=null}}function rg(e,t=null,n=[],r=[],i=null,s=null,a=null){return new rp(e,t,n,r,i,s,a)}function rm(e){if(null===e.ue){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(e=>(function e(t){if(t instanceof rn)return t.field.canonicalString()+t.op.toString()+nX(t.value);if(rs(t)&&ri(t))return t.filters.map(t=>e(t)).join(",");{let n=t.filters.map(t=>e(t)).join(",");return`${t.op}(${n})`}})(e)).join(","),t+="|ob:",t+=e.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),null==e.limit||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(e=>nX(e)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(e=>nX(e)).join(",")),e.ue=t}return e.ue}function ry(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++){var n,r;if(n=e.orderBy[i],r=t.orderBy[i],!(n.dir===r.dir&&n.field.isEqual(r.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!function e(t,n){return t instanceof rn?n instanceof rn&&t.op===n.op&&t.field.isEqual(n.field)&&nK(t.value,n.value):t instanceof rr?n instanceof rr&&t.op===n.op&&t.filters.length===n.filters.length&&t.filters.reduce((t,r,i)=>t&&e(r,n.filters[i]),!0):void t5()}(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!n9(e.startAt,t.startAt)&&n9(e.endAt,t.endAt)}function rv(e){return ng.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(e,t=null,n=[],r=[],i=null,s="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=a,this.endAt=o,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function rb(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function rE(e){if(null===e.ce){let t;e.ce=[];let n=new Set;for(let t of e.explicitOrderBy)e.ce.push(t),n.add(t.field.canonicalString());let r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(t=new nD(np.comparator),e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t).forEach(t=>{n.has(t.canonicalString())||t.isKeyField()||e.ce.push(new re(t,r))}),n.has(np.keyField().canonicalString())||e.ce.push(new re(np.keyField(),r))}return e.ce}function r_(e){return e.le||(e.le=function(e,t){if("F"===e.limitType)return rg(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{let t="desc"===e.dir?"asc":"desc";return new re(e.field,t)});let n=e.endAt?new n4(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new n4(e.startAt.position,e.startAt.inclusive):null;return rg(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}(e,rE(e))),e.le}function rT(e,t,n){return new rw(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function rI(e,t){return ry(r_(e),r_(t))&&e.limitType===t.limitType}function rS(e){return`${rm(r_(e))}|lt:${e.limitType}`}function rC(e){var t;let n;return`Query(target=${n=(t=r_(e)).path.canonicalString(),null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(e=>(function e(t){return t instanceof rn?`${t.field.canonicalString()} ${t.op} ${nX(t.value)}`:t instanceof rr?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),null==t.limit||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(e=>nX(e)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(e=>nX(e)).join(",")),`Target(${n})`}; limitType=${e.limitType})`}function rx(e,t){return t.isFoundDocument()&&function(e,t){let n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):ng.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(let n of rE(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(let n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,n){let r=n7(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,rE(e),t))&&(!e.endAt||!!function(e,t,n){let r=n7(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,rE(e),t))}function rA(e){return(t,n)=>{let r=!1;for(let i of rE(e)){let e=function(e,t,n){let r=e.field.isKeyField()?ng.comparator(t.key,n.key):function(e,t,n){let r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?nH(r,i):t5()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return -1*r;default:return t5()}}(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rD{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n){for(let[t,r]of n)if(this.equalsFn(t,e))return r}}has(e){return void 0!==this.get(e)}set(e,t){let n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){nI(this.inner,(t,n)=>{for(let[t,r]of n)e(t,r)})}isEmpty(){return nS(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rk=new nC(ng.comparator),rN=new nC(ng.comparator);function rR(...e){let t=rN;for(let n of e)t=t.insert(n.key,n);return t}function rL(e){let t=rN;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function rO(){return new rD(e=>e.toString(),(e,t)=>e.isEqual(t))}const rM=new nC(ng.comparator),rP=new nD(ng.comparator);function rU(...e){let t=rP;for(let n of e)t=t.add(n);return t}const rF=new nD(no);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rB(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:n_(t)?"-0":t}}function rV(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rj{constructor(){this._=void 0}}function r$(e,t){return e instanceof rQ?nY(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}class rq extends rj{}class rz extends rj{constructor(e){super(),this.elements=e}}function rK(e,t){let n=rX(t);for(let t of e.elements)n.some(e=>nK(e,t))||n.push(t);return{arrayValue:{values:n}}}class rG extends rj{constructor(e){super(),this.elements=e}}function rH(e,t){let n=rX(t);for(let t of e.elements)n=n.filter(e=>!nK(e,t));return{arrayValue:{values:n}}}class rQ extends rj{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function rW(e){return nP(e.integerValue||e.doubleValue)}function rX(e){return nJ(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class rY{constructor(e,t){this.version=e,this.transformResults=t}}class rJ{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new rJ}static exists(e){return new rJ(void 0,e)}static updateTime(e){return new rJ(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function rZ(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class r0{}function r1(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new r9(e.key,rJ.none()):new r5(e.key,e.data,rJ.none());{let n=e.data,r=n3.empty(),i=new nD(np.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new r3(e.key,r,new nN(i.toArray()),rJ.none())}}function r2(e,t,n,r){return e instanceof r5?function(e,t,n,r){if(!rZ(e.precondition,t))return n;let i=e.value.clone(),s=r7(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof r3?function(e,t,n,r){if(!rZ(e.precondition,t))return n;let i=r7(e.fieldTransforms,r,t),s=t.data;return(s.setAll(r8(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n)?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):rZ(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}function r6(e,t){var n,r;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||!(!n||!r)&&nl(n,r,(e,t)=>{var n,r;return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof rz&&r instanceof rz||n instanceof rG&&r instanceof rG?nl(n.elements,r.elements,nK):n instanceof rQ&&r instanceof rQ?nK(n.Pe,r.Pe):n instanceof rq&&r instanceof rq)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class r5 extends r0{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class r3 extends r0{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function r8(e){let t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){let r=e.data.field(n);t.set(n,r)}}),t}function r4(e,t,n){var r;let i=new Map;e.length===n.length||t5();for(let s=0;s<n.length;s++){let a=e[s],o=a.transform,l=t.data.field(a.field);i.set(a.field,(r=n[s],o instanceof rz?rK(o,l):o instanceof rG?rH(o,l):r))}return i}function r7(e,t,n){let r=new Map;for(let i of e){let e=i.transform,s=n.data.field(i.field);r.set(i.field,e instanceof rq?function(e,t){let n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&nF(t)&&(t=nB(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(t,s):e instanceof rz?rK(e,s):e instanceof rG?rH(e,s):function(e,t){let n=r$(e,t),r=rW(n)+rW(e.Pe);return nY(n)&&nY(e.Pe)?rV(r):rB(e.serializer,r)}(e,s))}return r}class r9 extends r0{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ie extends r0{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){let n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let i=this.mutations[t];if(i.key.isEqual(e.key)){var r;r=n[t],i instanceof r5?function(e,t,n){let r=e.value.clone(),i=r4(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(i,e,r):i instanceof r3?function(e,t,n){if(!rZ(e.precondition,t))return void t.convertToUnknownDocument(n.version);let r=r4(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(r8(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(i,e,r):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,r)}}}applyToLocalView(e,t){for(let n of this.baseMutations)n.key.isEqual(e.key)&&(t=r2(n,e,t,this.localWriteTime));for(let n of this.mutations)n.key.isEqual(e.key)&&(t=r2(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let n=rO();return this.mutations.forEach(r=>{let i=e.get(r.key),s=i.overlayedDocument,a=this.applyToLocalView(s,i.mutatedFields),o=r1(s,a=t.has(r.key)?null:a);null!==o&&n.set(r.key,o),s.isValidDocument()||s.convertToNoDocument(nh.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),rU())}isEqual(e){return this.batchId===e.batchId&&nl(this.mutations,e.mutations,(e,t)=>r6(e,t))&&nl(this.baseMutations,e.baseMutations,(e,t)=>r6(e,t))}}class ir{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){e.mutations.length===n.length||t5();let r=rM,i=e.mutations;for(let e=0;e<i.length;e++)r=r.insert(i[e].key,n[e].version);return new ir(e,t,n,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e,t){this.count=e,this.unchangedNames=t}}function ia(e){if(void 0===e)return t1("GRPC error has no .code"),t3.UNKNOWN;switch(e){case D.OK:return t3.OK;case D.CANCELLED:return t3.CANCELLED;case D.UNKNOWN:return t3.UNKNOWN;case D.DEADLINE_EXCEEDED:return t3.DEADLINE_EXCEEDED;case D.RESOURCE_EXHAUSTED:return t3.RESOURCE_EXHAUSTED;case D.INTERNAL:return t3.INTERNAL;case D.UNAVAILABLE:return t3.UNAVAILABLE;case D.UNAUTHENTICATED:return t3.UNAUTHENTICATED;case D.INVALID_ARGUMENT:return t3.INVALID_ARGUMENT;case D.NOT_FOUND:return t3.NOT_FOUND;case D.ALREADY_EXISTS:return t3.ALREADY_EXISTS;case D.PERMISSION_DENIED:return t3.PERMISSION_DENIED;case D.FAILED_PRECONDITION:return t3.FAILED_PRECONDITION;case D.ABORTED:return t3.ABORTED;case D.OUT_OF_RANGE:return t3.OUT_OF_RANGE;case D.UNIMPLEMENTED:return t3.UNIMPLEMENTED;case D.DATA_LOSS:return t3.DATA_LOSS;default:return t5()}}(k=D||(D={}))[k.OK=0]="OK",k[k.CANCELLED=1]="CANCELLED",k[k.UNKNOWN=2]="UNKNOWN",k[k.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",k[k.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",k[k.NOT_FOUND=5]="NOT_FOUND",k[k.ALREADY_EXISTS=6]="ALREADY_EXISTS",k[k.PERMISSION_DENIED=7]="PERMISSION_DENIED",k[k.UNAUTHENTICATED=16]="UNAUTHENTICATED",k[k.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",k[k.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",k[k.ABORTED=10]="ABORTED",k[k.OUT_OF_RANGE=11]="OUT_OF_RANGE",k[k.UNIMPLEMENTED=12]="UNIMPLEMENTED",k[k.INTERNAL=13]="INTERNAL",k[k.UNAVAILABLE=14]="UNAVAILABLE",k[k.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const io=new g([0xffffffff,0xffffffff],0);function il(e){let t=(new TextEncoder).encode(e),n=new m;return n.update(t),new Uint8Array(n.digest())}function iu(e){let t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new g([n,r],0),new g([i,s],0)]}class ih{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new ic(`Invalid padding: ${t}`);if(n<0||e.length>0&&0===this.hashCount)throw new ic(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new ic(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=g.fromNumber(this.Te)}de(e,t,n){let r=e.add(t.multiply(g.fromNumber(n)));return 1===r.compare(io)&&(r=new g([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Ie).toNumber()}Ee(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Te)return!1;let[t,n]=iu(il(e));for(let e=0;e<this.hashCount;e++){let r=this.de(t,n,e);if(!this.Ee(r))return!1}return!0}static create(e,t,n){let r=new ih(new Uint8Array(Math.ceil(e/8)),e%8==0?0:8-e%8,t);return n.forEach(e=>r.insert(e)),r}insert(e){if(0===this.Te)return;let[t,n]=iu(il(e));for(let e=0;e<this.hashCount;e++){let r=this.de(t,n,e);this.Ae(r)}}Ae(e){let t=Math.floor(e/8);this.bitmap[t]|=1<<e%8}}class ic extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){let r=new Map;return r.set(e,ip.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new id(nh.min(),r,new nC(no),rk,rU())}}class ip{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new ip(n,t,rU(),rU(),rU())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(e,t,n,r){this.Re=e,this.removedTargetIds=t,this.key=n,this.Ve=r}}class im{constructor(e,t){this.targetId=e,this.me=t}}class iy{constructor(e,t,n=nL.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class iv{constructor(){this.fe=0,this.ge=iE(),this.pe=nL.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return 0!==this.fe}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=rU(),t=rU(),n=rU();return this.ge.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:t5()}}),new ip(this.pe,this.ye,e,t,n)}Ce(){this.we=!1,this.ge=iE()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,this.fe>=0||t5()}Ne(){this.we=!0,this.ye=!0}}class iw{constructor(e){this.Be=e,this.Le=new Map,this.ke=rk,this.qe=ib(),this.Qe=ib(),this.Ke=new nC(no)}$e(e){for(let t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(let t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{let n=this.ze(t);switch(e.state){case 0:this.je(t)&&n.De(e.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(e.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(t);break;case 3:this.je(t)&&(n.Ne(),n.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),n.De(e.resumeToken));break;default:t5()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Le.forEach((e,n)=>{this.je(n)&&t(n)})}Je(e){let t=e.targetId,n=e.me.count,r=this.Ye(t);if(r){let i=r.target;if(rv(i)){if(0===n){let e=new ng(i.path);this.We(t,e,n8.newNoDocument(e,nh.min()))}else 1===n||t5()}else{let r=this.Ze(t);if(r!==n){let n=this.Xe(e),i=n?this.et(n,e,r):1;0!==i&&(this.He(t),this.Ke=this.Ke.insert(t,2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch"))}}}}Xe(e){let t,n;let r=e.me.unchangedNames;if(!r||!r.bits)return null;let{bits:{bitmap:i="",padding:s=0},hashCount:a=0}=r;try{t=nU(i).toUint8Array()}catch(e){if(e instanceof nR)return t2("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{n=new ih(t,s,a)}catch(e){return t2(e instanceof ic?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===n.Te?null:n}et(e,t,n){return 2*(t.me.count!==n-this.rt(e,t.targetId))}rt(e,t){let n=this.Be.getRemoteKeysForTarget(t),r=0;return n.forEach(n=>{let i=this.Be.nt(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.mightContain(s)||(this.We(t,n,null),r++)}),r}it(e){let t=new Map;this.Le.forEach((n,r)=>{let i=this.Ye(r);if(i){if(n.current&&rv(i.target)){let t=new ng(i.target.path);this.st(t).has(r)||this.ot(r,t)||this.We(r,t,n8.newNoDocument(t,e))}n.be&&(t.set(r,n.ve()),n.Ce())}});let n=rU();this.Qe.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{let t=this.Ye(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.ke.forEach((t,n)=>n.setReadTime(e));let r=new id(e,t,this.Ke,this.ke,n);return this.ke=rk,this.qe=ib(),this.Qe=ib(),this.Ke=new nC(no),r}Ue(e,t){if(!this.je(e))return;let n=2*!!this.ot(e,t.key);this.ze(e).Fe(t.key,n),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,n){if(!this.je(e))return;let r=this.ze(e);this.ot(e,t)?r.Fe(t,1):r.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),n&&(this.ke=this.ke.insert(t,n))}removeTarget(e){this.Le.delete(e)}Ze(e){let t=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Le.get(e);return t||(t=new iv,this.Le.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new nD(no),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new nD(no),this.qe=this.qe.insert(e,t)),t}je(e){let t=null!==this.Ye(e);return t||t0("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){let t=this.Le.get(e);return t&&t.Se?null:this.Be.ut(e)}He(e){this.Le.set(e,new iv),this.Be.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Be.getRemoteKeysForTarget(e).has(t)}}function ib(){return new nC(ng.comparator)}function iE(){return new nC(ng.comparator)}const i_={asc:"ASCENDING",desc:"DESCENDING"},iT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},iI={and:"AND",or:"OR"};class iS{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function iC(e,t){return e.useProto3Json||null==t?t:{value:t}}function ix(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function iA(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function iD(e){return e||t5(),nh.fromTimestamp(function(e){let t=nM(e);return new nu(t.seconds,t.nanos)}(e))}function ik(e,t){return iN(e,t).canonicalString()}function iN(e,t){let n=new nf(["projects",e.projectId,"databases",e.database]).child("documents");return void 0===t?n:n.child(t)}function iR(e){let t=nf.fromString(e);return ij(t)||t5(),t}function iL(e,t){return ik(e.databaseId,t.path)}function iO(e,t){let n=iR(t);if(n.get(1)!==e.databaseId.projectId)throw new t8(t3.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new t8(t3.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new ng(iU(n))}function iM(e,t){return ik(e.databaseId,t)}function iP(e){return new nf(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function iU(e){return e.length>4&&"documents"===e.get(4)||t5(),e.popFirst(5)}function iF(e,t,n){return{name:iL(e,t),fields:n.value.mapValue.fields}}function iB(e){return{fieldPath:e.canonicalString()}}function iV(e){return np.fromServerFormat(e.fieldPath)}function ij(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i${constructor(e,t,n,r,i=nh.min(),s=nh.min(),a=nL.EMPTY_BYTE_STRING,o=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=o}withSequenceNumber(e){return new i$(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new i$(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new i$(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new i$(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iq{constructor(e){this.ht=e}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iz{constructor(){}dt(e,t){this.Et(e,t),t.At()}Et(e,t){if("nullValue"in e)this.Rt(t,5);else if("booleanValue"in e)this.Rt(t,10),t.Vt(+!!e.booleanValue);else if("integerValue"in e)this.Rt(t,15),t.Vt(nP(e.integerValue));else if("doubleValue"in e){let n=nP(e.doubleValue);isNaN(n)?this.Rt(t,13):(this.Rt(t,15),n_(n)?t.Vt(0):t.Vt(n))}else if("timestampValue"in e){let n=e.timestampValue;this.Rt(t,20),"string"==typeof n&&(n=nM(n)),t.ft(`${n.seconds||""}`),t.Vt(n.nanos||0)}else if("stringValue"in e)this.gt(e.stringValue,t),this.yt(t);else if("bytesValue"in e)this.Rt(t,30),t.wt(nU(e.bytesValue)),this.yt(t);else if("referenceValue"in e)this.St(e.referenceValue,t);else if("geoPointValue"in e){let n=e.geoPointValue;this.Rt(t,45),t.Vt(n.latitude||0),t.Vt(n.longitude||0)}else"mapValue"in e?n5(e)?this.Rt(t,Number.MAX_SAFE_INTEGER):n2(e)?this.bt(e.mapValue,t):(this.Dt(e.mapValue,t),this.yt(t)):"arrayValue"in e?(this.vt(e.arrayValue,t),this.yt(t)):t5()}gt(e,t){this.Rt(t,25),this.Ct(e,t)}Ct(e,t){t.ft(e)}Dt(e,t){let n=e.fields||{};for(let e of(this.Rt(t,55),Object.keys(n)))this.gt(e,t),this.Et(n[e],t)}bt(e,t){var n,r;let i=e.fields||{};this.Rt(t,53);let s="value",a=(null===(r=null===(n=i[s].arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.length)||0;this.Rt(t,15),t.Vt(nP(a)),this.gt(s,t),this.Et(i[s],t)}vt(e,t){let n=e.values||[];for(let e of(this.Rt(t,50),n))this.Et(e,t)}St(e,t){this.Rt(t,37),ng.fromName(e).path.forEach(e=>{this.Rt(t,60),this.Ct(e,t)})}Rt(e,t){e.Vt(t)}yt(e){e.Vt(2)}}iz.Ft=new iz;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iK{constructor(){this.ln=new iG}addToCollectionParentIndex(e,t){return this.ln.add(t),nw.resolve()}getCollectionParents(e,t){return nw.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return nw.resolve()}deleteFieldIndex(e,t){return nw.resolve()}deleteAllFieldIndexes(e){return nw.resolve()}createTargetIndexes(e,t){return nw.resolve()}getDocumentsMatchingTarget(e,t){return nw.resolve(null)}getIndexType(e,t){return nw.resolve(0)}getFieldIndexes(e,t){return nw.resolve([])}getNextCollectionGroupToUpdate(e){return nw.resolve(null)}getMinOffset(e,t){return nw.resolve(nm.min())}getMinOffsetFromCollectionGroup(e,t){return nw.resolve(nm.min())}updateCollectionGroup(e,t,n){return nw.resolve()}updateIndexEntries(e,t){return nw.resolve()}}class iG{constructor(){this.index={}}add(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new nD(nf.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new nD(nf.comparator)).toArray()}}new Uint8Array(0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iH={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class iQ{static withCacheSize(e){return new iQ(e,iQ.DEFAULT_COLLECTION_PERCENTILE,iQ.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */iQ.DEFAULT_COLLECTION_PERCENTILE=10,iQ.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,iQ.DEFAULT=new iQ(0x2800000,iQ.DEFAULT_COLLECTION_PERCENTILE,iQ.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),iQ.DISABLED=new iQ(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iW{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new iW(0)}static Qn(){return new iW(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iX([e,t],[n,r]){let i=no(e,n);return 0===i?no(t,r):i}class iY{constructor(e){this.Gn=e,this.buffer=new nD(iX),this.zn=0}jn(){return++this.zn}Hn(e){let t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{let e=this.buffer.last();0>iX(t,e)&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class iJ{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Jn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return null!==this.Jn}Yn(e){t0("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){nb(e)?t0("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await nv(e)}await this.Yn(3e5)})}}class iZ{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return nw.resolve(nE.oe);let n=new iY(t);return this.Zn.forEachTarget(e,e=>n.Hn(e.sequenceNumber)).next(()=>this.Zn.er(e,e=>n.Hn(e))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Zn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return -1===this.params.cacheSizeCollectionThreshold?(t0("LruGarbageCollector","Garbage collection skipped; disabled"),nw.resolve(iH)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(t0("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),iH):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let n,r,i,s,a,o,l;let u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(t0("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,s=Date.now(),this.nthSequenceNumber(e,r))).next(r=>(n=r,a=Date.now(),this.removeTargets(e,n,t))).next(t=>(i=t,o=Date.now(),this.removeOrphanedDocuments(e,n))).next(e=>(l=Date.now(),tZ()<=p.DEBUG&&t0("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${s-u}ms
	Determined least recently used ${r} in `+(a-s)+"ms\n"+`	Removed ${i} targets in `+(o-a)+"ms\n"+`	Removed ${e} documents in `+(l-o)+"ms\n"+`Total Duration: ${l-u}ms`),nw.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e})))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(){this.changes=new rD(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,n8.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let n=this.changes.get(t);return void 0!==n?nw.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i2{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&r2(n.mutation,e,nN.empty(),nu.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,rU()).next(()=>t))}getLocalViewOfDocuments(e,t,n=rU()){let r=rO();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=rR();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let n=rO();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,rU()))}populateOverlays(e,t,n){let r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let i=rk,s=rO(),a=rO();return t.forEach((e,t)=>{let a=n.get(t.key);r.has(t.key)&&(void 0===a||a.mutation instanceof r3)?i=i.insert(t.key,t):void 0!==a?(s.set(t.key,a.mutation.getFieldMask()),r2(a.mutation,t,a.mutation.getFieldMask(),nu.now())):s.set(t.key,nN.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var n;return a.set(e,new i1(t,null!==(n=s.get(e))&&void 0!==n?n:null))}),a))}recalculateAndSaveOverlays(e,t){let n=rO(),r=new nC((e,t)=>e-t),i=rU();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let i of e)i.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let a=n.get(e)||nN.empty();a=i.applyToLocalView(s,a),n.set(e,a);let o=(r.get(i.batchId)||rU()).add(e);r=r.insert(i.batchId,o)})}).next(()=>{let s=[],a=r.getReverseIterator();for(;a.hasNext();){let r=a.getNext(),o=r.key,l=r.value,u=rO();l.forEach(e=>{if(!i.has(e)){let r=r1(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,o,u))}return nw.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n,r){return ng.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):null!==t.collectionGroup?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(i=>{let s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):nw.resolve(rO()),a=-1,o=i;return s.next(t=>nw.forEach(t,(t,n)=>(a<n.largestBatchId&&(a=n.largestBatchId),i.get(t)?nw.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,o,t,rU())).next(e=>({batchId:a,changes:rL(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ng(t)).next(e=>{let t=rR();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){let i=t.collectionGroup,s=rR();return this.indexManager.getCollectionParents(e,i).next(a=>nw.forEach(a,a=>{let o=new rw(a.child(i),null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt);return this.getDocumentsMatchingCollectionQuery(e,o,n,r).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r))).next(e=>{i.forEach((t,n)=>{let r=n.getKey();null===e.get(r)&&(e=e.insert(r,n8.newInvalidDocument(r)))});let n=rR();return e.forEach((e,r)=>{let s=i.get(e);void 0!==s&&r2(s.mutation,r,nN.empty(),nu.now()),rx(t,r)&&(n=n.insert(e,r))}),n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i6{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return nw.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,{id:t.id,version:t.version,createTime:iD(t.createTime)}),nw.resolve()}getNamedQuery(e,t){return nw.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,{name:t.name,query:function(e){let t=function(e){var t;let n,r=function(e){let t=iR(e);return 4===t.length?nf.emptyPath():iU(t)}(e.parent),i=e.structuredQuery,s=i.from?i.from.length:0,a=null;if(s>0){1===s||t5();let e=i.from[0];e.allDescendants?a=e.collectionId:r=r.child(e.collectionId)}let o=[];i.where&&(o=function(e){var t;let n=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=iV(e.unaryFilter.field);return rn.create(t,"==",{doubleValue:NaN});case"IS_NULL":let n=iV(e.unaryFilter.field);return rn.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let r=iV(e.unaryFilter.field);return rn.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let i=iV(e.unaryFilter.field);return rn.create(i,"!=",{nullValue:"NULL_VALUE"});default:return t5()}}(t):void 0!==t.fieldFilter?rn.create(iV(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return t5()}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?rr.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return t5()}}(t.compositeFilter.op)):t5()}(e);return n instanceof rr&&rs(t=n)&&ri(t)?n.getFilters():[n]}(i.where));let l=[];i.orderBy&&(l=i.orderBy.map(e=>new re(iV(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let u=null;i.limit&&(u=null==(n="object"==typeof(t=i.limit)?t.value:t)?null:n);let h=null;i.startAt&&(h=function(e){let t=!!e.before;return new n4(e.values||[],t)}(i.startAt));let c=null;return i.endAt&&(c=function(e){let t=!e.before;return new n4(e.values||[],t)}(i.endAt)),new rw(r,a,l,o,u,"F",h,c)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?rT(t,t.limit,"L"):t}(t.bundledQuery),readTime:iD(t.readTime)}),nw.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i5{constructor(){this.overlays=new nC(ng.comparator),this.dr=new Map}getOverlay(e,t){return nw.resolve(this.overlays.get(t))}getOverlays(e,t){let n=rO();return nw.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.Tt(e,t,r)}),nw.resolve()}removeOverlaysForBatchId(e,t,n){let r=this.dr.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.dr.delete(n)),nw.resolve()}getOverlaysForCollection(e,t,n){let r=rO(),i=t.length+1,s=new ng(t.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){let e=a.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return nw.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new nC((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=rO(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let a=rO(),o=i.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((e,t)=>a.set(e,t)),!(a.size()>=r)););return nw.resolve(a)}Tt(e,t,n){let r=this.overlays.get(n.key);if(null!==r){let e=this.dr.get(r.largestBatchId).delete(n.key);this.dr.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new ii(t,n));let i=this.dr.get(t);void 0===i&&(i=rU(),this.dr.set(t,i)),this.dr.set(t,i.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i3{constructor(){this.sessionToken=nL.EMPTY_BYTE_STRING}getSessionToken(e){return nw.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,nw.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i8{constructor(){this.Er=new nD(i4.Ar),this.Rr=new nD(i4.Vr)}isEmpty(){return this.Er.isEmpty()}addReference(e,t){let n=new i4(e,t);this.Er=this.Er.add(n),this.Rr=this.Rr.add(n)}mr(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.gr(new i4(e,t))}pr(e,t){e.forEach(e=>this.removeReference(e,t))}yr(e){let t=new ng(new nf([])),n=new i4(t,e),r=new i4(t,e+1),i=[];return this.Rr.forEachInRange([n,r],e=>{this.gr(e),i.push(e.key)}),i}wr(){this.Er.forEach(e=>this.gr(e))}gr(e){this.Er=this.Er.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){let t=new ng(new nf([])),n=new i4(t,e),r=new i4(t,e+1),i=rU();return this.Rr.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){let t=new i4(e,0),n=this.Er.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class i4{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return ng.comparator(e.key,t.key)||no(e.br,t.br)}static Vr(e,t){return no(e.br,t.br)||ng.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i7{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new nD(i4.Ar)}checkEmpty(e){return nw.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){let i=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new it(i,t,n,r);for(let t of(this.mutationQueue.push(s),r))this.vr=this.vr.add(new i4(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return nw.resolve(s)}lookupMutationBatch(e,t){return nw.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){let n=this.Fr(t+1),r=n<0?0:n;return nw.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return nw.resolve(0===this.mutationQueue.length?-1:this.Dr-1)}getAllMutationBatches(e){return nw.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let n=new i4(t,0),r=new i4(t,Number.POSITIVE_INFINITY),i=[];return this.vr.forEachInRange([n,r],e=>{let t=this.Cr(e.br);i.push(t)}),nw.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new nD(no);return t.forEach(e=>{let t=new i4(e,0),r=new i4(e,Number.POSITIVE_INFINITY);this.vr.forEachInRange([t,r],e=>{n=n.add(e.br)})}),nw.resolve(this.Mr(n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,r=n.length+1,i=n;ng.isDocumentKey(i)||(i=i.child(""));let s=new i4(new ng(i),0),a=new nD(no);return this.vr.forEachWhile(e=>{let t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(a=a.add(e.br)),!0)},s),nw.resolve(this.Mr(a))}Mr(e){let t=[];return e.forEach(e=>{let n=this.Cr(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){0===this.Or(t.batchId,"removed")||t5(),this.mutationQueue.shift();let n=this.vr;return nw.forEach(t.mutations,r=>{let i=new i4(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.vr=n})}Bn(e){}containsKey(e,t){let n=new i4(t,0),r=this.vr.firstAfterOrEqual(n);return nw.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,nw.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Cr(e){let t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i9{constructor(e){this.Nr=e,this.docs=new nC(ng.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Nr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let n=this.docs.get(t);return nw.resolve(n?n.document.mutableCopy():n8.newInvalidDocument(t))}getEntries(e,t){let n=rk;return t.forEach(e=>{let t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():n8.newInvalidDocument(e))}),nw.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=rk,s=t.path,a=new ng(s.child("__id-9223372036854775808__")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){let{key:e,value:{document:a}}=o.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||0>=function(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:0!==(n=ng.comparator(e.documentKey,t.documentKey))?n:no(e.largestBatchId,t.largestBatchId)}(new nm(a.readTime,a.key,-1),n)||(r.has(a.key)||rx(t,a))&&(i=i.insert(a.key,a.mutableCopy()))}return nw.resolve(i)}getAllFromCollectionGroup(e,t,n,r){t5()}Br(e,t){return nw.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new se(this)}getSize(e){return nw.resolve(this.size)}}class se extends i0{constructor(e){super(),this.hr=e}applyChanges(e){let t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.hr.addEntry(e,r)):this.hr.removeEntry(n)}),nw.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.persistence=e,this.Lr=new rD(e=>rm(e),ry),this.lastRemoteSnapshotVersion=nh.min(),this.highestTargetId=0,this.kr=0,this.qr=new i8,this.targetCount=0,this.Qr=iW.qn()}forEachTarget(e,t){return this.Lr.forEach((e,n)=>t(n)),nw.resolve()}getLastRemoteSnapshotVersion(e){return nw.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return nw.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),nw.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.kr&&(this.kr=t),nw.resolve()}Un(e){this.Lr.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.Qr=new iW(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,nw.resolve()}updateTargetData(e,t){return this.Un(t),nw.resolve()}removeTargetData(e,t){return this.Lr.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,nw.resolve()}removeTargets(e,t,n){let r=0,i=[];return this.Lr.forEach((s,a)=>{a.sequenceNumber<=t&&null===n.get(a.targetId)&&(this.Lr.delete(s),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),nw.waitFor(i).next(()=>r)}getTargetCount(e){return nw.resolve(this.targetCount)}getTargetData(e,t){let n=this.Lr.get(t)||null;return nw.resolve(n)}addMatchingKeys(e,t,n){return this.qr.mr(t,n),nw.resolve()}removeMatchingKeys(e,t,n){this.qr.pr(t,n);let r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),nw.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),nw.resolve()}getMatchingKeysForTargetId(e,t){let n=this.qr.Sr(t);return nw.resolve(n)}containsKey(e,t){return nw.resolve(this.qr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e,t){this.Kr={},this.overlays={},this.$r=new nE(0),this.Ur=!1,this.Ur=!0,this.Wr=new i3,this.referenceDelegate=e(this),this.Gr=new st(this),this.indexManager=new iK,this.remoteDocumentCache=new i9(e=>this.referenceDelegate.zr(e)),this.serializer=new iq(t),this.jr=new i6(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new i5,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Kr[e.toKey()];return n||(n=new i7(t,this.referenceDelegate),this.Kr[e.toKey()]=n),n}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,n){t0("MemoryPersistence","Starting transaction:",e);let r=new sr(this.$r.next());return this.referenceDelegate.Hr(),n(r).next(e=>this.referenceDelegate.Jr(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Yr(e,t){return nw.or(Object.values(this.Kr).map(n=>()=>n.containsKey(e,t)))}}class sr extends ny{constructor(e){super(),this.currentSequenceNumber=e}}class si{constructor(e){this.persistence=e,this.Zr=new i8,this.Xr=null}static ei(e){return new si(e)}get ti(){if(this.Xr)return this.Xr;throw t5()}addReference(e,t,n){return this.Zr.addReference(n,t),this.ti.delete(n.toString()),nw.resolve()}removeReference(e,t,n){return this.Zr.removeReference(n,t),this.ti.add(n.toString()),nw.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),nw.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(e=>this.ti.add(e.toString()));let n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.ti.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return nw.forEach(this.ti,n=>{let r=ng.fromPath(n);return this.ni(e,r).next(e=>{e||t.removeEntry(r,nh.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(e=>{e?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return nw.or([()=>nw.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class ss{constructor(e,t){this.persistence=e,this.ri=new rD(e=>/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t+="\x01\x01"),t=function(e,t){let n=t,r=e.length;for(let t=0;t<r;t++){let r=e.charAt(t);switch(r){case"\0":n+="\x01\x10";break;case"\x01":n+="\x01\x11";break;default:n+=r}}return n}(e.get(n),t);return t+"\x01\x01"})(e.path),(e,t)=>e.isEqual(t)),this.garbageCollector=new iZ(this,t)}static ei(e,t){return new ss(e,t)}Hr(){}Jr(e){return nw.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){let t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}nr(e){let t=0;return this.er(e,e=>{t++}).next(()=>t)}er(e,t){return nw.forEach(this.ri,(n,r)=>this.ir(e,n,r).next(e=>e?nw.resolve():t(r)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0,r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.Br(e,r=>this.ir(e,r,t).next(e=>{e||(n++,i.removeEntry(r,nh.min()))})).next(()=>i.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),nw.resolve()}removeTarget(e,t){let n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.ri.set(n,e.currentSequenceNumber),nw.resolve()}removeReference(e,t,n){return this.ri.set(n,e.currentSequenceNumber),nw.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),nw.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=function e(t){switch(nz(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:let n=nB(t);return n?16+e(n):16;case 5:return 2*t.stringValue.length;case 6:return nU(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(t.arrayValue.values||[]).reduce((t,n)=>t+e(n),0);case 10:case 11:var r;let i;return r=t.mapValue,i=0,nI(r.fields,(t,n)=>{i+=t.length+e(n)}),i;default:throw t5()}}(e.data.value)),t}ir(e,t,n){return nw.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{let e=this.ri.get(t);return nw.resolve(void 0!==e&&e>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Wi=n,this.Gi=r}static zi(e,t){let n=rU(),r=rU();for(let e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new sa(e,t.fromCache,n,r)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=!function(){var e;let t=null===(e=en())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(L.process)}catch(e){return!1}}()&&navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")?8:function(e){let t=e.match(/Android ([\d.]+)/i);return Number(t?t[1].split(".").slice(0,2).join("."):"-1")}("undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:"")>0?6:4}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,n,r){let i={result:null};return this.Xi(e,t).next(e=>{i.result=e}).next(()=>{if(!i.result)return this.es(e,t,r,n).next(e=>{i.result=e})}).next(()=>{if(i.result)return;let n=new so;return this.ts(e,t,n).next(r=>{if(i.result=r,this.Hi)return this.ns(e,t,n,r.size)})}).next(()=>i.result)}ns(e,t,n,r){return n.documentReadCount<this.Ji?(tZ()<=p.DEBUG&&t0("QueryEngine","SDK will not create cache indexes for query:",rC(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),nw.resolve()):(tZ()<=p.DEBUG&&t0("QueryEngine","Query:",rC(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.Yi*r?(tZ()<=p.DEBUG&&t0("QueryEngine","The SDK decides to create cache indexes for query:",rC(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,r_(t))):nw.resolve())}Xi(e,t){if(rb(t))return nw.resolve(null);let n=r_(t);return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(n=r_(t=rT(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{let i=rU(...r);return this.Zi.getDocuments(e,i).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{let s=this.rs(t,r);return this.ss(t,s,i,n.readTime)?this.Xi(e,rT(t,null,"F")):this.os(e,s,t,n)}))})))}es(e,t,n,r){return rb(t)||r.isEqual(nh.min())?nw.resolve(null):this.Zi.getDocuments(e,n).next(i=>{let s=this.rs(t,i);return this.ss(t,s,n,r)?nw.resolve(null):(tZ()<=p.DEBUG&&t0("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),rC(t)),this.os(e,s,t,function(e,t){let n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1;return new nm(nh.fromTimestamp(1e9===r?new nu(n+1,0):new nu(n,r)),ng.empty(),-1)}(r,0)).next(e=>e))})}rs(e,t){let n=new nD(rA(e));return t.forEach((t,r)=>{rx(e,r)&&(n=n.add(r))}),n}ss(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;let i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ts(e,t,n){return tZ()<=p.DEBUG&&t0("QueryEngine","Using full collection scan to execute query:",rC(t)),this.Zi.getDocumentsMatchingQuery(e,t,nm.min(),n)}os(e,t,n,r){return this.Zi.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e,t,n,r){this.persistence=e,this._s=t,this.serializer=r,this.us=new nC(no),this.cs=new rD(e=>rm(e),ry),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(n)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new i2(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}async function sh(e,t){return await e.persistence.runTransaction("Handle user change","readonly",n=>{let r;return e.mutationQueue.getAllMutationBatches(n).next(i=>(r=i,e.Ps(t),e.mutationQueue.getAllMutationBatches(n))).next(t=>{let i=[],s=[],a=rU();for(let e of r)for(let t of(i.push(e.batchId),e.mutations))a=a.add(t.key);for(let e of t)for(let t of(s.push(e.batchId),e.mutations))a=a.add(t.key);return e.localDocuments.getDocuments(n,a).next(e=>({Ts:e,removedBatchIds:i,addedBatchIds:s}))})})}function sc(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}async function sf(e,t,n){let r=e.us.get(t);try{n||await e.persistence.runTransaction("Release target",n?"readwrite":"readwrite-primary",t=>e.persistence.referenceDelegate.removeTarget(t,r))}catch(e){if(!nb(e))throw e;t0("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}e.us=e.us.remove(t),e.cs.delete(r.target)}function sd(e,t,n){let r=nh.min(),i=rU();return e.persistence.runTransaction("Execute query","readwrite",s=>(function(e,t,n){let r=e.cs.get(n);return void 0!==r?nw.resolve(e.us.get(r)):e.Gr.getTargetData(t,n)})(e,s,r_(t)).next(t=>{if(t)return r=t.lastLimboFreeSnapshotVersion,e.Gr.getMatchingKeysForTargetId(s,t.targetId).next(e=>{i=e})}).next(()=>e._s.getDocumentsMatchingQuery(s,t,n?r:nh.min(),n?i:rU())).next(n=>{var r;let s;return r=t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2)),s=e.ls.get(r)||nh.min(),n.forEach((e,t)=>{t.readTime.compareTo(s)>0&&(s=t.readTime)}),e.ls.set(r,s),{documents:n,Es:i}}))}class sp{constructor(){this.activeTargetIds=rF}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){return JSON.stringify({activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()})}}class sg{constructor(){this._o=new sp,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,n){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new sp,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){for(let e of(t0("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.To))e(0)}Po(){for(let e of(t0("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.To))e(1)}static p(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sv=null;function sw(){return null===sv?sv=0x10000000+Math.round(0x80000000*Math.random()):sv++,"0x"+sv.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_="WebChannelConnection";class sT extends class{get Co(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Fo=t+"://"+e.host,this.Mo=`projects/${n}/databases/${r}`,this.xo="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}Oo(e,t,n,r,i){let s=sw(),a=this.No(e,t.toUriEncodedString());t0("RestConnection",`Sending RPC '${e}' ${s}:`,a,n);let o={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Bo(o,r,i),this.Lo(e,a,o,n).then(t=>(t0("RestConnection",`Received RPC '${e}' ${s}: `,t),t),t=>{throw t2("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",a,"request:",n),t})}ko(e,t,n,r,i,s){return this.Oo(e,t,n,r,i)}Bo(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+tY}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}No(e,t){let n=sb[e];return`${this.Fo}/v1/${t}:${n}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Lo(e,t,n,r){let i=sw();return new Promise((s,a)=>{let o=new y;o.setWithCredentials(!0),o.listenOnce(w.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case b.NO_ERROR:let t=o.getResponseJson();t0(s_,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case b.TIMEOUT:t0(s_,`RPC '${e}' ${i} timed out`),a(new t8(t3.DEADLINE_EXCEEDED,"Request time out"));break;case b.HTTP_ERROR:let n=o.getStatus();if(t0(s_,`RPC '${e}' ${i} failed with status:`,n,"response text:",o.getResponseText()),n>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(t3).indexOf(t)>=0?t:t3.UNKNOWN}(t.status);a(new t8(e,t.message))}else a(new t8(t3.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new t8(t3.UNAVAILABLE,"Connection failed."));break;default:t5()}}finally{t0(s_,`RPC '${e}' ${i} completed.`)}});let l=JSON.stringify(r);t0(s_,`RPC '${e}' ${i} sending request:`,r),o.send(t,"POST",l,n,15)})}qo(e,t,n){let r=sw(),i=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=I(),a=T(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;void 0!==l&&(o.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(o.useFetchStreams=!0),this.Bo(o.initMessageHeaders,t,n),o.encodeInitMessageHeaders=!0;let u=i.join("");t0(s_,`Creating RPC '${e}' stream ${r}: ${u}`,o);let h=s.createWebChannel(u,o),c=!1,f=!1,d=new sE({Eo:t=>{f?t0(s_,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(c||(t0(s_,`Opening RPC '${e}' stream ${r} transport.`),h.open(),c=!0),t0(s_,`RPC '${e}' stream ${r} sending:`,t),h.send(t))},Ao:()=>h.close()}),p=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};return p(h,v.EventType.OPEN,()=>{f||(t0(s_,`RPC '${e}' stream ${r} transport opened.`),d.So())}),p(h,v.EventType.CLOSE,()=>{f||(f=!0,t0(s_,`RPC '${e}' stream ${r} transport closed`),d.Do())}),p(h,v.EventType.ERROR,t=>{f||(f=!0,t2(s_,`RPC '${e}' stream ${r} transport errored:`,t),d.Do(new t8(t3.UNAVAILABLE,"The operation could not be completed")))}),p(h,v.EventType.MESSAGE,t=>{var n;if(!f){let i=t.data[0];i||t5();let s=(null==i?void 0:i.error)||(null===(n=i[0])||void 0===n?void 0:n.error);if(s){t0(s_,`RPC '${e}' stream ${r} received error:`,s);let t=s.status,n=function(e){let t=D[e];if(void 0!==t)return ia(t)}(t),i=s.message;void 0===n&&(n=t3.INTERNAL,i="Unknown error status: "+t+" with message "+s.message),f=!0,d.Do(new t8(n,i)),h.close()}else t0(s_,`RPC '${e}' stream ${r} received:`,i),d.vo(i)}}),p(a,_.STAT_EVENT,t=>{t.stat===E.PROXY?t0(s_,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===E.NOPROXY&&t0(s_,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{d.bo()},0),d}}function sI(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sS(e){return new iS(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(e,t,n=1e3,r=1.5,i=6e4){this.li=e,this.timerId=t,this.Qo=n,this.Ko=r,this.$o=i,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();let t=Math.floor(this.Uo+this.Ho()),n=Math.max(0,Date.now()-this.Go),r=Math.max(0,t-n);r>0&&t0("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,r,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){null!==this.Wo&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){null!==this.Wo&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sx{constructor(e,t,n,r,i,s,a,o){this.li=e,this.Yo=n,this.Zo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new sC(e,t)}i_(){return 1===this.state||5===this.state||this.s_()}s_(){return 2===this.state||3===this.state}start(){this.n_=0,4!==this.state?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&null===this.e_&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,4!==e?this.r_.reset():t&&t.code===t3.RESOURCE_EXHAUSTED?(t1(t.toString()),t1("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===t3.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;let e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.Xo===t&&this.I_(e,n)},t=>{e(()=>{let e=new t8(t3.UNKNOWN,"Fetching auth token failed: "+t.message);return this.d_(e)})})}I_(e,t){let n=this.T_(this.Xo);this.stream=this.E_(e,t),this.stream.Ro(()=>{n(()=>this.listener.Ro())}),this.stream.mo(()=>{n(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(e=>{n(()=>this.d_(e))}),this.stream.onMessage(e=>{n(()=>1==++this.n_?this.A_(e):this.onNext(e))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}d_(e){return t0("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(t0("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class sA extends sx{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}E_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();let t=function(e,t){let n;if("targetChange"in t){var r,i;t.targetChange;let s="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:t5(),a=t.targetChange.targetIds||[],o=(i=t.targetChange.resumeToken,e.useProto3Json?(void 0===i||"string"==typeof i||t5(),nL.fromBase64String(i||"")):(void 0===i||i instanceof tg||i instanceof Uint8Array||t5(),nL.fromUint8Array(i||new Uint8Array))),l=t.targetChange.cause;n=new iy(s,a,o,l&&new t8(void 0===l.code?t3.UNKNOWN:ia(l.code),l.message||"")||null)}else if("documentChange"in t){t.documentChange;let r=t.documentChange;r.document,r.document.name,r.document.updateTime;let i=iO(e,r.document.name),s=iD(r.document.updateTime),a=r.document.createTime?iD(r.document.createTime):nh.min(),o=new n3({mapValue:{fields:r.document.fields}}),l=n8.newFoundDocument(i,s,a,o);n=new ig(r.targetIds||[],r.removedTargetIds||[],l.key,l)}else if("documentDelete"in t){t.documentDelete;let r=t.documentDelete;r.document;let i=iO(e,r.document),s=r.readTime?iD(r.readTime):nh.min(),a=n8.newNoDocument(i,s);n=new ig([],r.removedTargetIds||[],a.key,a)}else if("documentRemove"in t){t.documentRemove;let r=t.documentRemove;r.document;let i=iO(e,r.document);n=new ig([],r.removedTargetIds||[],i,null)}else{if(!("filter"in t))return t5();{t.filter;let e=t.filter;e.targetId;let{count:r=0,unchangedNames:i}=e,s=new is(r,i);n=new im(e.targetId,s)}}return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return nh.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?nh.min():t.readTime?iD(t.readTime):nh.min()}(e);return this.listener.R_(t,n)}V_(e){let t={};t.database=iP(this.serializer),t.addTarget=function(e,t){let n;let r=t.target;if((n=rv(r)?{documents:{documents:[iM(e,r.path)]}}:{query:function(e,t){var n,r;let i;let s={structuredQuery:{}},a=t.path;null!==t.collectionGroup?(i=a,s.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=a.popLast(),s.structuredQuery.from=[{collectionId:a.lastSegment()}]),s.parent=iM(e,i);let o=function(e){if(0!==e.length)return function e(t){return t instanceof rn?function(e){if("=="===e.op){if(n0(e.value))return{unaryFilter:{field:iB(e.field),op:"IS_NAN"}};if(nZ(e.value))return{unaryFilter:{field:iB(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(n0(e.value))return{unaryFilter:{field:iB(e.field),op:"IS_NOT_NAN"}};if(nZ(e.value))return{unaryFilter:{field:iB(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:iB(e.field),op:iT[e.op],value:e.value}}}(t):t instanceof rr?function(t){let n=t.getFilters().map(t=>e(t));return 1===n.length?n[0]:{compositeFilter:{op:iI[t.op],filters:n}}}(t):t5()}(rr.create(e,"and"))}(t.filters);o&&(s.structuredQuery.where=o);let l=function(e){if(0!==e.length)return e.map(e=>({field:iB(e.field),direction:i_[e.dir]}))}(t.orderBy);l&&(s.structuredQuery.orderBy=l);let u=iC(e,t.limit);return null!==u&&(s.structuredQuery.limit=u),t.startAt&&(s.structuredQuery.startAt={before:(n=t.startAt).inclusive,values:n.position}),t.endAt&&(s.structuredQuery.endAt={before:!(r=t.endAt).inclusive,values:r.position}),{ct:s,parent:i}}(e,r).ct}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=iA(e,t.resumeToken);let r=iC(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(nh.min())>0){n.readTime=ix(e,t.snapshotVersion.toTimestamp());let r=iC(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);let n=function(e,t){let n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return t5()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.c_(t)}m_(e){let t={};t.database=iP(this.serializer),t.removeTarget=e,this.c_(t)}}class sD extends sx{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}E_(e,t){return this.connection.qo("Write",e,t)}A_(e){return e.streamToken||t5(),this.lastStreamToken=e.streamToken,e.writeResults&&0!==e.writeResults.length&&t5(),this.listener.p_()}onNext(e){var t,n;e.streamToken||t5(),this.lastStreamToken=e.streamToken,this.r_.reset();let r=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(void 0!==n||t5(),t.map(e=>{let t;return(t=e.updateTime?iD(e.updateTime):iD(n)).isEqual(nh.min())&&(t=iD(n)),new rY(t,e.transformResults||[])})):[]),i=iD(e.commitTime);return this.listener.y_(i,r)}w_(){let e={};e.database=iP(this.serializer),this.c_(e)}g_(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>(function(e,t){var n;let r;if(t instanceof r5)r={update:iF(e,t.key,t.value)};else if(t instanceof r9)r={delete:iL(e,t.key)};else if(t instanceof r3)r={update:iF(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof ie))return t5();r={verify:iL(e,t.key)}}return t.fieldTransforms.length>0&&(r.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let n=t.transform;if(n instanceof rq)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof rz)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof rG)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof rQ)return{fieldPath:t.field.canonicalString(),increment:n.Pe};throw t5()})(0,e))),t.precondition.isNone||(r.currentDocument=void 0!==(n=t.precondition).updateTime?{updateTime:ix(e,n.updateTime.toTimestamp())}:void 0!==n.exists?{exists:n.exists}:t5()),r})(this.serializer,e))};this.c_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sk extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.S_=!1}b_(){if(this.S_)throw new t8(t3.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,n,r){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Oo(e,iN(t,n),r,i,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===t3.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new t8(t3.UNKNOWN,e.toString())})}ko(e,t,n,r,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.ko(e,iN(t,n),r,s,a,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===t3.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new t8(t3.UNKNOWN,e.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class sN{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){0===this.D_&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){"Online"===this.state?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,"Online"===e&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(t1(t),this.C_=!1):t0("OnlineStateTracker",t)}N_(){null!==this.v_&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.B_=[],this.L_=new Map,this.k_=new Set,this.q_=[],this.Q_=i,this.Q_.uo(e=>{n.enqueueAndForget(async()=>{sj(this)&&(t0("RemoteStore","Restarting streams for network reachability change."),await async function(e){e.k_.add(4),await sO(e),e.K_.set("Unknown"),e.k_.delete(4),await sL(e)}(this))})}),this.K_=new sN(n,r)}}async function sL(e){if(sj(e))for(let t of e.q_)await t(!0)}async function sO(e){for(let t of e.q_)await t(!1)}function sM(e,t){e.L_.has(t.targetId)||(e.L_.set(t.targetId,t),sV(e)?sB(e):s6(e).s_()&&sU(e,t))}function sP(e,t){let n=s6(e);e.L_.delete(t),n.s_()&&sF(e,t),0===e.L_.size&&(n.s_()?n.a_():sj(e)&&e.K_.set("Unknown"))}function sU(e,t){if(e.U_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(nh.min())>0){let n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}s6(e).V_(t)}function sF(e,t){e.U_.xe(t),s6(e).m_(t)}function sB(e){e.U_=new iw({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ut:t=>e.L_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),s6(e).start(),e.K_.F_()}function sV(e){return sj(e)&&!s6(e).i_()&&e.L_.size>0}function sj(e){return 0===e.k_.size}async function s$(e){e.K_.set("Online")}async function sq(e){e.L_.forEach((t,n)=>{sU(e,t)})}async function sz(e,t){e.U_=void 0,sV(e)?(e.K_.O_(t),sB(e)):e.K_.set("Unknown")}async function sK(e,t,n){if(e.K_.set("Online"),t instanceof iy&&2===t.state&&t.cause)try{await async function(e,t){let n=t.cause;for(let r of t.targetIds)e.L_.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.L_.delete(r),e.U_.removeTarget(r))}(e,t)}catch(n){t0("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await sG(e,n)}else if(t instanceof ig?e.U_.$e(t):t instanceof im?e.U_.Je(t):e.U_.Ge(t),!n.isEqual(nh.min()))try{let t=await sc(e.localStore);n.compareTo(t)>=0&&await function(e,t){let n=e.U_.it(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){let i=e.L_.get(r);i&&e.L_.set(r,i.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach((t,n)=>{let r=e.L_.get(t);if(!r)return;e.L_.set(t,r.withResumeToken(nL.EMPTY_BYTE_STRING,r.snapshotVersion)),sF(e,t);let i=new i$(r.target,t,n,r.sequenceNumber);sU(e,i)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){t0("RemoteStore","Failed to raise snapshot:",t),await sG(e,t)}}async function sG(e,t,n){if(!nb(t))throw t;e.k_.add(1),await sO(e),e.K_.set("Offline"),n||(n=()=>sc(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{t0("RemoteStore","Retrying IndexedDB access"),await n(),e.k_.delete(1),await sL(e)})}function sH(e,t){return t().catch(n=>sG(e,n,t))}async function sQ(e){let t=s5(e),n=e.B_.length>0?e.B_[e.B_.length-1].batchId:-1;for(;sj(e)&&e.B_.length<10;)try{let r=await function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}(e.localStore,n);if(null===r){0===e.B_.length&&t.a_();break}n=r.batchId,function(e,t){e.B_.push(t);let n=s5(e);n.s_()&&n.f_&&n.g_(t.mutations)}(e,r)}catch(t){await sG(e,t)}sW(e)&&sX(e)}function sW(e){return sj(e)&&!s5(e).i_()&&e.B_.length>0}function sX(e){s5(e).start()}async function sY(e){s5(e).w_()}async function sJ(e){let t=s5(e);for(let n of e.B_)t.g_(n.mutations)}async function sZ(e,t,n){let r=e.B_.shift(),i=ir.from(r,t,n);await sH(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await sQ(e)}async function s0(e,t){t&&s5(e).f_&&await async function(e,t){var n;if(function(e){switch(e){default:return t5();case t3.CANCELLED:case t3.UNKNOWN:case t3.DEADLINE_EXCEEDED:case t3.RESOURCE_EXHAUSTED:case t3.INTERNAL:case t3.UNAVAILABLE:case t3.UNAUTHENTICATED:return!1;case t3.INVALID_ARGUMENT:case t3.NOT_FOUND:case t3.ALREADY_EXISTS:case t3.PERMISSION_DENIED:case t3.FAILED_PRECONDITION:case t3.ABORTED:case t3.OUT_OF_RANGE:case t3.UNIMPLEMENTED:case t3.DATA_LOSS:return!0}}(n=t.code)&&n!==t3.ABORTED){let n=e.B_.shift();s5(e).__(),await sH(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await sQ(e)}}(e,t),sW(e)&&sX(e)}async function s1(e,t){e.asyncQueue.verifyOperationInProgress(),t0("RemoteStore","RemoteStore received new credentials");let n=sj(e);e.k_.add(3),await sO(e),n&&e.K_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.k_.delete(3),await sL(e)}async function s2(e,t){t?(e.k_.delete(2),await sL(e)):t||(e.k_.add(2),await sO(e),e.K_.set("Unknown"))}function s6(e){var t,n,r;return e.W_||(e.W_=(t=e.datastore,n=e.asyncQueue,r={Ro:s$.bind(null,e),mo:sq.bind(null,e),po:sz.bind(null,e),R_:sK.bind(null,e)},t.b_(),new sA(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.q_.push(async t=>{t?(e.W_.__(),sV(e)?sB(e):e.K_.set("Unknown")):(await e.W_.stop(),e.U_=void 0)})),e.W_}function s5(e){var t,n,r;return e.G_||(e.G_=(t=e.datastore,n=e.asyncQueue,r={Ro:()=>Promise.resolve(),mo:sY.bind(null,e),po:s0.bind(null,e),p_:sJ.bind(null,e),y_:sZ.bind(null,e)},t.b_(),new sD(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.q_.push(async t=>{t?(e.G_.__(),await sQ(e)):(await e.G_.stop(),e.B_.length>0&&(t0("RemoteStore",`Stopping write stream with ${e.B_.length} pending writes`),e.B_=[]))})),e.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s3{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new t4,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){let s=new s3(e,t,Date.now()+n,r,i);return s.start(n),s}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new t8(t3.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function s8(e,t){if(t1("AsyncQueue",`${t}: ${e}`),nb(e))return new t8(t3.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s4{static emptySet(e){return new s4(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||ng.comparator(t.key,n.key):(e,t)=>ng.comparator(e.key,t.key),this.keyedMap=rR(),this.sortedSet=new nC(this.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof s4)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let n=new s4;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s7{constructor(){this.z_=new nC(ng.comparator)}track(e){let t=e.doc.key,n=this.z_.get(t);n?0!==e.type&&3===n.type?this.z_=this.z_.insert(t,e):3===e.type&&1!==n.type?this.z_=this.z_.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.z_=this.z_.remove(t):1===e.type&&2===n.type?this.z_=this.z_.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):t5():this.z_=this.z_.insert(t,e)}j_(){let e=[];return this.z_.inorderTraversal((t,n)=>{e.push(n)}),e}}class s9{constructor(e,t,n,r,i,s,a,o,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,r,i){let s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new s9(e,t,s4.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&rI(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class at{constructor(){this.queries=an(),this.onlineState="Unknown",this.X_=new Set}terminate(){!function(e,t){let n=e.queries;e.queries=an(),n.forEach((e,n)=>{for(let e of n.J_)e.onError(t)})}(this,new t8(t3.ABORTED,"Firestore shutting down"))}}function an(){return new rD(e=>rS(e),rI)}async function ar(e,t){let n=3,r=t.query,i=e.queries.get(r);i?!i.Y_()&&t.Z_()&&(n=2):(i=new ae,n=+!t.Z_());try{switch(n){case 0:i.H_=await e.onListen(r,!0);break;case 1:i.H_=await e.onListen(r,!1);break;case 2:await e.onFirstRemoteStoreListen(r)}}catch(n){let e=s8(n,`Initialization of query '${rC(t.query)}' failed`);return void t.onError(e)}e.queries.set(r,i),i.J_.push(t),t.ea(e.onlineState),i.H_&&t.ta(i.H_)&&ao(e)}async function ai(e,t){let n=t.query,r=3,i=e.queries.get(n);if(i){let e=i.J_.indexOf(t);e>=0&&(i.J_.splice(e,1),0===i.J_.length?r=+!t.Z_():!i.Y_()&&t.Z_()&&(r=2))}switch(r){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function as(e,t){let n=!1;for(let r of t){let t=r.query,i=e.queries.get(t);if(i){for(let e of i.J_)e.ta(r)&&(n=!0);i.H_=r}}n&&ao(e)}function aa(e,t,n){let r=e.queries.get(t);if(r)for(let e of r.J_)e.onError(n);e.queries.delete(t)}function ao(e){e.X_.forEach(e=>{e.next()})}(R=N||(N={})).na="default",R.Cache="cache";class al{constructor(e,t,n){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=n||{}}ta(e){if(!this.options.includeMetadataChanges){let t=[];for(let n of e.docChanges)3!==n.type&&t.push(n);e=new s9(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){return!(e.fromCache&&this.Z_())||(!this.options.ua||!("Offline"!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}oa(e){if(e.docChanges.length>0)return!0;let t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}aa(e){e=s9.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==N.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(e){this.key=e}}class ah{constructor(e){this.key=e}}class ac{constructor(e,t){this.query=e,this.Ea=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=rU(),this.mutatedKeys=rU(),this.Va=rA(e),this.ma=new s4(this.Va)}get fa(){return this.Ea}ga(e,t){let n=t?t.pa:new s7,r=t?t.ma:this.ma,i=t?t.mutatedKeys:this.mutatedKeys,s=r,a=!1,o="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{let u=r.get(e),h=rx(this.query,t)?t:null,c=!!u&&this.mutatedKeys.has(u.key),f=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations),d=!1;u&&h?u.data.isEqual(h.data)?c!==f&&(n.track({type:3,doc:h}),d=!0):this.ya(u,h)||(n.track({type:2,doc:h}),d=!0,(o&&this.Va(h,o)>0||l&&0>this.Va(h,l))&&(a=!0)):!u&&h?(n.track({type:0,doc:h}),d=!0):u&&!h&&(n.track({type:1,doc:u}),d=!0,(o||l)&&(a=!0)),d&&(h?(s=s.add(h),i=f?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){let e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{ma:s,pa:n,ss:a,mutatedKeys:i}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){let i=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;let s=e.pa.j_();s.sort((e,t)=>(function(e,t){let n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return t5()}};return n(e)-n(t)})(e.type,t.type)||this.Va(e.doc,t.doc)),this.wa(n),r=null!=r&&r;let a=t&&!r?this.Sa():[],o=+(0===this.Ra.size&&!!this.current&&!r),l=o!==this.Aa;return(this.Aa=o,0!==s.length||l)?{snapshot:new s9(this.query,e.ma,i,s,e.mutatedKeys,0===o,l,!1,!!n&&n.resumeToken.approximateByteSize()>0),ba:a}:{ba:a}}ea(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({ma:this.ma,pa:new s7,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.Ea.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(e=>this.Ea=this.Ea.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.Ea=this.Ea.delete(e)),this.current=e.current)}Sa(){if(!this.current)return[];let e=this.Ra;this.Ra=rU(),this.ma.forEach(e=>{this.Da(e.key)&&(this.Ra=this.Ra.add(e.key))});let t=[];return e.forEach(e=>{this.Ra.has(e)||t.push(new ah(e))}),this.Ra.forEach(n=>{e.has(n)||t.push(new au(n))}),t}va(e){this.Ea=e.Es,this.Ra=rU();let t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return s9.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,0===this.Aa,this.hasCachedResults)}}class af{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class ad{constructor(e){this.key=e,this.Fa=!1}}class ap{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Ma={},this.xa=new rD(e=>rS(e),rI),this.Oa=new Map,this.Na=new Set,this.Ba=new nC(ng.comparator),this.La=new Map,this.ka=new i8,this.qa={},this.Qa=new Map,this.Ka=iW.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return!0===this.$a}}async function ag(e,t,n=!0){let r;let i=aP(e),s=i.xa.get(t);return s?(i.sharedClientState.addLocalQueryTarget(s.targetId),r=s.view.Ca()):r=await ay(i,t,n,!0),r}async function am(e,t){let n=aP(e);await ay(n,t,!0,!1)}async function ay(e,t,n,r){var i,s;let a;let o=await (i=e.localStore,s=r_(t),i.persistence.runTransaction("Allocate target","readwrite",e=>{let t;return i.Gr.getTargetData(e,s).next(n=>n?(t=n,nw.resolve(t)):i.Gr.allocateTargetId(e).next(n=>(t=new i$(s,n,"TargetPurposeListen",e.currentSequenceNumber),i.Gr.addTargetData(e,t).next(()=>t))))}).then(e=>{let t=i.us.get(e.targetId);return(null===t||e.snapshotVersion.compareTo(t.snapshotVersion)>0)&&(i.us=i.us.insert(e.targetId,e),i.cs.set(s,e.targetId)),e})),l=o.targetId,u=e.sharedClientState.addLocalQueryTarget(l,n);return r&&(a=await av(e,t,l,"current"===u,o.resumeToken)),e.isPrimaryClient&&n&&sM(e.remoteStore,o),a}async function av(e,t,n,r,i){e.Ua=(t,n,r)=>(async function(e,t,n,r){let i=t.view.ga(n);i.ss&&(i=await sd(e.localStore,t.query,!1).then(({documents:e})=>t.view.ga(e,i)));let s=r&&r.targetChanges.get(t.targetId),a=r&&null!=r.targetMismatches.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s,a);return aN(e,t.targetId,o.ba),o.snapshot})(e,t,n,r);let s=await sd(e.localStore,t,!0),a=new ac(t,s.Es),o=a.ga(s.documents),l=ip.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=a.applyChanges(o,e.isPrimaryClient,l);aN(e,n,u.ba);let h=new af(t,n,a);return e.xa.set(t,h),e.Oa.has(n)?e.Oa.get(n).push(t):e.Oa.set(n,[t]),u.snapshot}async function aw(e,t,n){let r=e.xa.get(t),i=e.Oa.get(r.targetId);if(i.length>1)return e.Oa.set(r.targetId,i.filter(e=>!rI(e,t))),void e.xa.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(r.targetId),e.sharedClientState.isActiveQueryTarget(r.targetId)||await sf(e.localStore,r.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(r.targetId),n&&sP(e.remoteStore,r.targetId),aD(e,r.targetId)}).catch(nv)):(aD(e,r.targetId),await sf(e.localStore,r.targetId,!0))}async function ab(e,t){let n=e.xa.get(t),r=e.Oa.get(n.targetId);e.isPrimaryClient&&1===r.length&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),sP(e.remoteStore,n.targetId))}async function aE(e,t,n){var r;let i=(e.remoteStore.remoteSyncer.applySuccessfulWrite=aS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=aC.bind(null,e),e);try{let e;let s=await function(e,t){let n,r;let i=nu.now(),s=t.reduce((e,t)=>e.add(t.key),rU());return e.persistence.runTransaction("Locally write mutations","readwrite",a=>{let o=rk,l=rU();return e.hs.getEntries(a,s).next(e=>{(o=e).forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(a,o)).next(r=>{n=r;let s=[];for(let e of t){let t=function(e,t){let n=null;for(let r of e.fieldTransforms){let e=t.data.field(r.field),i=r$(r.transform,e||null);null!=i&&(null===n&&(n=n3.empty()),n.set(r.field,i))}return n||null}(e,n.get(e.key).overlayedDocument);null!=t&&s.push(new r3(e.key,t,function e(t){let n=[];return nI(t.fields,(t,r)=>{let i=new np([t]);if(n1(r)){let t=e(r.mapValue).fields;if(0===t.length)n.push(i);else for(let e of t)n.push(i.child(e))}else n.push(i)}),new nN(n)}(t.value.mapValue),rJ.exists(!0)))}return e.mutationQueue.addMutationBatch(a,i,s,t)}).next(t=>{r=t;let i=t.applyToLocalDocumentSet(n,l);return e.documentOverlayCache.saveOverlays(a,t.batchId,i)})}).then(()=>({batchId:r.batchId,changes:rL(n)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),r=s.batchId,(e=i.qa[i.currentUser.toKey()])||(e=new nC(no)),e=e.insert(r,n),i.qa[i.currentUser.toKey()]=e,await aL(i,s.changes),await sQ(i.remoteStore)}catch(t){let e=s8(t,"Failed to persist write");n.reject(e)}}async function a_(e,t){try{let n=await function(e,t){let n=t.snapshotVersion,r=e.us;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{var s;let a,o;let l=e.hs.newChangeBuffer({trackRemovals:!0});r=e.us;let u=[];t.targetChanges.forEach((s,a)=>{var o;let l=r.get(a);if(!l)return;u.push(e.Gr.removeMatchingKeys(i,s.removedDocuments,a).next(()=>e.Gr.addMatchingKeys(i,s.addedDocuments,a)));let h=l.withSequenceNumber(i.currentSequenceNumber);null!==t.targetMismatches.get(a)?h=h.withResumeToken(nL.EMPTY_BYTE_STRING,nh.min()).withLastLimboFreeSnapshotVersion(nh.min()):s.resumeToken.approximateByteSize()>0&&(h=h.withResumeToken(s.resumeToken,n)),r=r.insert(a,h),o=h,(0===l.resumeToken.approximateByteSize()||o.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size>0)&&u.push(e.Gr.updateTargetData(i,h))});let h=rk,c=rU();if(t.documentUpdates.forEach(n=>{t.resolvedLimboDocuments.has(n)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(i,n))}),u.push((s=t.documentUpdates,a=rU(),o=rU(),s.forEach(e=>a=a.add(e)),l.getEntries(i,a).next(e=>{let t=rk;return s.forEach((n,r)=>{let i=e.get(n);r.isFoundDocument()!==i.isFoundDocument()&&(o=o.add(n)),r.isNoDocument()&&r.version.isEqual(nh.min())?(l.removeEntry(n,r.readTime),t=t.insert(n,r)):!i.isValidDocument()||r.version.compareTo(i.version)>0||0===r.version.compareTo(i.version)&&i.hasPendingWrites?(l.addEntry(r),t=t.insert(n,r)):t0("LocalStore","Ignoring outdated watch update for ",n,". Current version:",i.version," Watch version:",r.version)}),{Is:t,ds:o}})).next(e=>{h=e.Is,c=e.ds})),!n.isEqual(nh.min())){let t=e.Gr.getLastRemoteSnapshotVersion(i).next(t=>e.Gr.setTargetsMetadata(i,i.currentSequenceNumber,n));u.push(t)}return nw.waitFor(u).next(()=>l.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,h,c)).next(()=>h)}).then(t=>(e.us=r,t))}(e.localStore,t);t.targetChanges.forEach((t,n)=>{let r=e.La.get(n);r&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||t5(),t.addedDocuments.size>0?r.Fa=!0:t.modifiedDocuments.size>0?r.Fa||t5():t.removedDocuments.size>0&&(r.Fa||t5(),r.Fa=!1))}),await aL(e,n,t)}catch(e){await nv(e)}}function aT(e,t,n){var r;if(e.isPrimaryClient&&0===n||!e.isPrimaryClient&&1===n){let n;let i=[];e.xa.forEach((e,n)=>{let r=n.view.ea(t);r.snapshot&&i.push(r.snapshot)}),(r=e.eventManager).onlineState=t,n=!1,r.queries.forEach((e,r)=>{for(let e of r.J_)e.ea(t)&&(n=!0)}),n&&ao(r),i.length&&e.Ma.R_(i),e.onlineState=t,e.isPrimaryClient&&e.sharedClientState.setOnlineState(t)}}async function aI(e,t,n){e.sharedClientState.updateQueryState(t,"rejected",n);let r=e.La.get(t),i=r&&r.key;if(i){let n=new nC(ng.comparator);n=n.insert(i,n8.newNoDocument(i,nh.min()));let r=rU().add(i),s=new id(nh.min(),new Map,new nC(no),n,r);await a_(e,s),e.Ba=e.Ba.remove(i),e.La.delete(t),aR(e)}else await sf(e.localStore,t,!1).then(()=>aD(e,t,n)).catch(nv)}async function aS(e,t){var n;let r=t.batch.batchId;try{let i=await (n=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let r=t.batch.keys(),i=n.hs.newChangeBuffer({trackRemovals:!0});return(function(e,t,n,r){let i=n.batch,s=i.keys(),a=nw.resolve();return s.forEach(e=>{a=a.next(()=>r.getEntry(t,e)).next(t=>{let s=n.docVersions.get(e);null!==s||t5(),0>t.version.compareTo(s)&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),a.next(()=>e.mutationQueue.removeMutationBatch(t,i))})(n,e,t,i).next(()=>i.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=rU();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,r))});aA(e,r,null),ax(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await aL(e,i)}catch(e){await nv(e)}}async function aC(e,t,n){var r;try{let i=await (r=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let n;return r.mutationQueue.lookupMutationBatch(e,t).next(t=>(null!==t||t5(),n=t.keys(),r.mutationQueue.removeMutationBatch(e,t))).next(()=>r.mutationQueue.performConsistencyCheck(e)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(e,n,t)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,n)).next(()=>r.localDocuments.getDocuments(e,n))});aA(e,t,n),ax(e,t),e.sharedClientState.updateMutationState(t,"rejected",n),await aL(e,i)}catch(e){await nv(e)}}function ax(e,t){(e.Qa.get(t)||[]).forEach(e=>{e.resolve()}),e.Qa.delete(t)}function aA(e,t,n){let r=e.qa[e.currentUser.toKey()];if(r){let i=r.get(t);i&&(n?i.reject(n):i.resolve(),r=r.remove(t)),e.qa[e.currentUser.toKey()]=r}}function aD(e,t,n=null){for(let r of(e.sharedClientState.removeLocalQueryTarget(t),e.Oa.get(t)))e.xa.delete(r),n&&e.Ma.Wa(r,n);e.Oa.delete(t),e.isPrimaryClient&&e.ka.yr(t).forEach(t=>{e.ka.containsKey(t)||ak(e,t)})}function ak(e,t){e.Na.delete(t.path.canonicalString());let n=e.Ba.get(t);null!==n&&(sP(e.remoteStore,n),e.Ba=e.Ba.remove(t),e.La.delete(n),aR(e))}function aN(e,t,n){for(let r of n)r instanceof au?(e.ka.addReference(r.key,t),function(e,t){let n=t.key,r=n.path.canonicalString();e.Ba.get(n)||e.Na.has(r)||(t0("SyncEngine","New document in limbo: "+n),e.Na.add(r),aR(e))}(e,r)):r instanceof ah?(t0("SyncEngine","Document no longer in limbo: "+r.key),e.ka.removeReference(r.key,t),e.ka.containsKey(r.key)||ak(e,r.key)):t5()}function aR(e){for(;e.Na.size>0&&e.Ba.size<e.maxConcurrentLimboResolutions;){let t=e.Na.values().next().value;e.Na.delete(t);let n=new ng(nf.fromString(t)),r=e.Ka.next();e.La.set(r,new ad(n)),e.Ba=e.Ba.insert(n,r),sM(e.remoteStore,new i$(r_(new rw(n.path)),r,"TargetPurposeLimboResolution",nE.oe))}}async function aL(e,t,n){let r=[],i=[],s=[];e.xa.isEmpty()||(e.xa.forEach((a,o)=>{s.push(e.Ua(o,t,n).then(t=>{var s;if((t||n)&&e.isPrimaryClient){let r=t?!t.fromCache:null===(s=null==n?void 0:n.targetChanges.get(o.targetId))||void 0===s?void 0:s.current;e.sharedClientState.updateQueryState(o.targetId,r?"current":"not-current")}if(t){r.push(t);let e=sa.zi(o.targetId,t);i.push(e)}}))}),await Promise.all(s),e.Ma.R_(r),await async function(e,t){try{await e.persistence.runTransaction("notifyLocalViewChanges","readwrite",n=>nw.forEach(t,t=>nw.forEach(t.Wi,r=>e.persistence.referenceDelegate.addReference(n,t.targetId,r)).next(()=>nw.forEach(t.Gi,r=>e.persistence.referenceDelegate.removeReference(n,t.targetId,r)))))}catch(e){if(!nb(e))throw e;t0("LocalStore","Failed to update sequence numbers: "+e)}for(let n of t){let t=n.targetId;if(!n.fromCache){let n=e.us.get(t),r=n.snapshotVersion,i=n.withLastLimboFreeSnapshotVersion(r);e.us=e.us.insert(t,i)}}}(e.localStore,i))}async function aO(e,t){var n;if(!e.currentUser.isEqual(t)){t0("SyncEngine","User change. New user:",t.toKey());let r=await sh(e.localStore,t);e.currentUser=t,n="'waitForPendingWrites' promise is rejected due to a user change.",e.Qa.forEach(e=>{e.forEach(e=>{e.reject(new t8(t3.CANCELLED,n))})}),e.Qa.clear(),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await aL(e,r.Ts)}}function aM(e,t){let n=e.La.get(t);if(n&&n.Fa)return rU().add(n.key);{let n=rU(),r=e.Oa.get(t);if(!r)return n;for(let t of r){let r=e.xa.get(t);n=n.unionWith(r.view.fa)}return n}}function aP(e){return e.remoteStore.remoteSyncer.applyRemoteEvent=a_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=aM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=aI.bind(null,e),e.Ma.R_=as.bind(null,e.eventManager),e.Ma.Wa=aa.bind(null,e.eventManager),e}class aU{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=sS(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){var t;return t=this.persistence,new su(t,new sl,e.initialUser,this.serializer)}ja(e){return new sn(si.ei,this.serializer)}za(e){return new sg}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}aU.provider={build:()=>new aU};class aF extends aU{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){return this.persistence.referenceDelegate instanceof ss||t5(),new iJ(this.persistence.referenceDelegate.garbageCollector,e.asyncQueue,t)}ja(e){let t=void 0!==this.cacheSizeBytes?iQ.withCacheSize(this.cacheSizeBytes):iQ.DEFAULT;return new sn(e=>ss.ei(e,t),this.serializer)}}class aB{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>aT(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=aO.bind(null,this.syncEngine),await s2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new at}createDatastore(e){let t=sS(e.databaseInfo.databaseId),n=new sT(e.databaseInfo);return new sk(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){var t;return t=this.localStore,new sR(t,this.datastore,e.asyncQueue,e=>aT(this.syncEngine,e,0),sy.p()?new sy:new sm)}createSyncEngine(e,t){return function(e,t,n,r,i,s,a){let o=new ap(e,t,n,r,i,s);return a&&(o.$a=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(e){t0("RemoteStore","RemoteStore shutting down."),e.k_.add(5),await sO(e),e.Q_.shutdown(),e.K_.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate(),null===(t=this.eventManager)||void 0===t||t.terminate()}}aB.provider={build:()=>new aB};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aV{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):t1("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aj{constructor(e,t,n,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=tX.UNAUTHENTICATED,this.clientId=na.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async e=>{t0("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(t0("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();let e=new t4;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){let t=s8(n,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function a$(e,t){e.asyncQueue.verifyOperationInProgress(),t0("FirestoreClient","Initializing OfflineComponentProvider");let n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await sh(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function aq(e,t){e.asyncQueue.verifyOperationInProgress();let n=await az(e);t0("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(e=>s1(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>s1(t.remoteStore,n)),e._onlineComponents=t}async function az(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){t0("FirestoreClient","Using user provided OfflineComponentProvider");try{await a$(e,e._uninitializedComponentsProvider._offline)}catch(t){if(!("FirebaseError"===t.name?t.code===t3.FAILED_PRECONDITION||t.code===t3.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code))throw t;t2("Error using user provided cache. Falling back to memory cache: "+t),await a$(e,new aU)}}else t0("FirestoreClient","Using default OfflineComponentProvider"),await a$(e,new aF(void 0))}return e._offlineComponents}async function aK(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(t0("FirestoreClient","Using user provided OnlineComponentProvider"),await aq(e,e._uninitializedComponentsProvider._online)):(t0("FirestoreClient","Using default OnlineComponentProvider"),await aq(e,new aB))),e._onlineComponents}async function aG(e){let t=await aK(e),n=t.eventManager;return n.onListen=ag.bind(null,t.syncEngine),n.onUnlisten=aw.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=am.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=ab.bind(null,t.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aH(e){let t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aQ=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aW(e,t,n){if(!n)throw new t8(t3.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function aX(e){if(!ng.isDocumentKey(e))throw new t8(t3.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function aY(e){if(ng.isDocumentKey(e))throw new t8(t3.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function aJ(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}return"function"==typeof e?"a function":t5()}function aZ(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new t8(t3.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=aJ(e);throw new t8(t3.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new t8(t3.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=0x2800000;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new t8(t3.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,r){if(!0===t&&!0===r)throw new t8(t3.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=aH(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new t8(t3.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new t8(t3.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new t8(t3.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,n;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class a1{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new a0({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new t8(t3.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new t8(t3.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new a0(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new t9;switch(e.type){case"firstParty":return new nr(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new t8(t3.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=aQ.get(e);t&&(t0("ComponentProvider","Removing Datastore"),aQ.delete(e),t.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a2{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new a2(this.firestore,e,this._query)}}class a6{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new a5(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new a6(this.firestore,e,this._key)}}class a5 extends a2{constructor(e,t,n){super(e,t,new rw(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new a6(this.firestore,null,new ng(e))}withConverter(e){return new a5(this.firestore,e,this._path)}}function a3(e,t,...n){if(e=eg(e),aW("collection","path",t),e instanceof a1){let r=nf.fromString(t,...n);return aY(r),new a5(e,null,r)}{if(!(e instanceof a6||e instanceof a5))throw new t8(t3.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(nf.fromString(t,...n));return aY(r),new a5(e.firestore,null,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a8{constructor(e=Promise.resolve()){this.Iu=[],this.du=!1,this.Eu=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new sC(this,"async_queue_retry"),this.fu=()=>{let e=sI();e&&t0("AsyncQueue","Visibility state changed to "+e.visibilityState),this.r_.Jo()},this.gu=e;let t=sI();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.du}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.du){this.du=!0,this.Vu=e||!1;let t=sI();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.du)return new Promise(()=>{});let t=new t4;return this.yu(()=>this.du&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(0!==this.Iu.length){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!nb(e))throw e;t0("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){let t=this.gu.then(()=>(this.Ru=!0,e().catch(e=>{let t;throw this.Au=e,this.Ru=!1,t1("INTERNAL UNHANDLED ERROR: ",(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t)),e}).then(e=>(this.Ru=!1,e))));return this.gu=t,t}enqueueAfterDelay(e,t,n){this.pu(),this.mu.indexOf(e)>-1&&(t=0);let r=s3.createAndSchedule(this,e,t,n,e=>this.Su(e));return this.Eu.push(r),r}pu(){this.Au&&t5()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(let t of this.Eu)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{for(let t of(this.Eu.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.Eu))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){let t=this.Eu.indexOf(e);this.Eu.splice(t,1)}}class a4 extends a1{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new a8,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){let e=this._firestoreClient.terminate();this._queue=new a8(e),this._firestoreClient=void 0,await e}}}function a7(e){if(e._terminated)throw new t8(t3.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||function(e){var t,n,r,i;let s=e._freezeSettings(),a=(i=e._databaseId,new nj(i,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,aH(s.experimentalLongPollingOptions),s.useFetchStreams));e._componentsProvider||(null===(n=s.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=s.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),e._firestoreClient=new aj(e._authCredentials,e._appCheckCredentials,e._queue,a,e._componentsProvider&&function(e){let t=null==e?void 0:e._online.build();return{_offline:null==e?void 0:e._offline.build(t),_online:t}}(e._componentsProvider))}(e),e._firestoreClient}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a9{constructor(e){this._byteString=e}static fromBase64String(e){try{return new a9(nL.fromBase64String(e))}catch(e){throw new t8(t3.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new a9(nL.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new t8(t3.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new np(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new t8(t3.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new t8(t3.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return no(this._lat,e._lat)||no(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e){this._values=(e||[]).map(e=>e)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi=/^__.*__$/;class os{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new r3(e,this.data,this.fieldMask,t,this.fieldTransforms):new r5(e,this.data,t,this.fieldTransforms)}}function oa(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw t5()}}class oo{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Fu(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new oo(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.xu({path:n,Nu:!1});return r.Bu(e),r}Lu(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.xu({path:n,Nu:!1});return r.Fu(),r}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return od(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Bu(this.path.get(e))}Bu(e){if(0===e.length)throw this.qu("Document fields must not be empty");if(oa(this.Mu)&&oi.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class ol{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||sS(e)}$u(e,t,n,r=!1){return new oo({Mu:e,methodName:t,Ku:n,path:np.emptyPath(),Nu:!1,Qu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ou(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof nu||e instanceof on||e instanceof a9||e instanceof a6||e instanceof ot||e instanceof or)}function oh(e,t,n){if(!ou(n)||!("object"==typeof n&&null!==n&&(Object.getPrototypeOf(n)===Object.prototype||null===Object.getPrototypeOf(n)))){let r=aJ(n);throw"an object"===r?t.qu(e+" a custom object"):t.qu(e+" "+r)}}const oc=RegExp("[~\\*/\\[\\]]");function of(e,t,n){if(t.search(oc)>=0)throw od(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new oe(...t.split("."))._internalPath}catch(r){throw od(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function od(e,t,n,r,i){let s=r&&!r.isEmpty(),a=void 0!==i,o=`Function ${t}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new t8(t3.INVALID_ARGUMENT,o+e+l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new a6(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new og(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(om("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class og extends op{data(){return super.data()}}function om(e,t){return"string"==typeof t?of(e,t):t instanceof oe?t._internalPath:t._delegate._internalPath}class oy{convertValue(e,t="none"){switch(nz(e)){case 0:return null;case 1:return e.booleanValue;case 2:return nP(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(nU(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw t5()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let n={};return nI(e,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertVectorValue(e){var t,n,r;return new or(null===(r=null===(n=null===(t=e.fields)||void 0===t?void 0:t.value.arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.map(e=>nP(e.doubleValue)))}convertGeoPoint(e){return new on(nP(e.latitude),nP(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let n=nB(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(nV(e));default:return null}}convertTimestamp(e){let t=nM(e);return new nu(t.seconds,t.nanos)}convertDocumentKey(e,t){let n=nf.fromString(e);ij(n)||t5();let r=new n$(n.get(1),n.get(3)),i=new ng(n.popFirst(5));return r.isEqual(t)||t1(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ow extends op{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new ob(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let n=this._document.data.field(om("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class ob extends ow{data(e={}){return super.data(e)}}class oE{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new ov(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new ob(this._firestore,this._userDataWriter,n.key,n,new ov(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new t8(t3.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>{let r=new ob(e._firestore,e._userDataWriter,n.doc.key,n.doc,new ov(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}})}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let r=new ob(e._firestore,e._userDataWriter,t.doc.key,t.doc,new ov(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(s=(n=n.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return t5()}}(t.type),doc:r,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}class o_ extends oy{constructor(e){super(),this.firestore=e}convertBytes(e){return new a9(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new a6(this.firestore,null,t)}}new WeakMap,function(e=!0){tY="11.2.0",eX(new em("firestore",(t,{instanceIdentifier:n,options:r})=>{let i=t.getProvider("app").getImmediate(),s=new a4(new nt(t.getProvider("auth-internal")),new ns(t.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new t8(t3.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new n$(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),e2(tW,"4.7.6",void 0),e2(tW,"4.7.6","esm2017")}();const oT="@firebase/installations",oI="0.6.12",oS=`w:${oI}`,oC="FIS_v2",ox=new eh("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function oA(e){return e instanceof eu&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oD({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function ok(e){return{token:e.token,requestStatus:2,expiresIn:Number(e.expiresIn.replace("s","000")),creationTime:Date.now()}}async function oN(e,t){let n=(await t.json()).error;return ox.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function oR({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}async function oL(e){let t=await e();return t.status>=500&&t.status<600?e():t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oO({appConfig:e,heartbeatServiceProvider:t},{fid:n}){let r=oD(e),i=oR(e),s=t.getImmediate({optional:!0});if(s){let e=await s.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}let a={method:"POST",headers:i,body:JSON.stringify({fid:n,authVersion:oC,appId:e.appId,sdkVersion:oS})},o=await oL(()=>fetch(r,a));if(o.ok){let e=await o.json();return{fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:ok(e.authToken)}}throw await oN("Create Installation",o)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oM(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oP=/^[cdef][\w-]{21}$/;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oU(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oF=new Map;function oB(e,t){let n=oU(e);oV(n,t),function(e,t){let n=(!oj&&"BroadcastChannel"in self&&((oj=new BroadcastChannel("[Firebase] FID Change")).onmessage=e=>{oV(e.data.key,e.data.fid)}),oj);n&&n.postMessage({key:e,fid:t}),0===oF.size&&oj&&(oj.close(),oj=null)}(n,t)}function oV(e,t){let n=oF.get(e);if(n)for(let e of n)e(t)}let oj=null;const o$="firebase-installations-store";let oq=null;function oz(){return oq||(oq=eM("firebase-installations-database",1,{upgrade:(e,t)=>{0===t&&e.createObjectStore(o$)}})),oq}async function oK(e,t){let n=oU(e),r=(await oz()).transaction(o$,"readwrite"),i=r.objectStore(o$),s=await i.get(n);return await i.put(t,n),await r.done,s&&s.fid===t.fid||oB(e,t.fid),t}async function oG(e){let t=oU(e),n=(await oz()).transaction(o$,"readwrite");await n.objectStore(o$).delete(t),await n.done}async function oH(e,t){let n=oU(e),r=(await oz()).transaction(o$,"readwrite"),i=r.objectStore(o$),s=await i.get(n),a=t(s);return void 0===a?await i.delete(n):await i.put(a,n),await r.done,a&&(!s||s.fid!==a.fid)&&oB(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oQ(e){let t;let n=await oH(e.appConfig,n=>{let r=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine)return{installationEntry:t,registrationPromise:Promise.reject(ox.create("app-offline"))};let n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=oW(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:oX(e)}:{installationEntry:t}}(e,oJ(n||{fid:function(){try{let e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;let t=btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_").substr(0,22);return oP.test(t)?t:""}catch(e){return""}}(),registrationStatus:0}));return t=r.registrationPromise,r.installationEntry});return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function oW(e,t){try{let n=await oO(e,t);return oK(e.appConfig,n)}catch(n){throw oA(n)&&409===n.customData.serverCode?await oG(e.appConfig):await oK(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function oX(e){let t=await oY(e.appConfig);for(;1===t.registrationStatus;)await oM(100),t=await oY(e.appConfig);if(0===t.registrationStatus){let{installationEntry:t,registrationPromise:n}=await oQ(e);return n||t}return t}function oY(e){return oH(e,e=>{if(!e)throw ox.create("installation-not-found");return oJ(e)})}function oJ(e){return 1===e.registrationStatus&&e.registrationTime+1e4<Date.now()?{fid:e.fid,registrationStatus:0}:e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oZ({appConfig:e,heartbeatServiceProvider:t},n){let r=function(e,{fid:t}){return`${oD(e)}/${t}/authTokens:generate`}(e,n),i=function(e,{refreshToken:t}){let n=oR(e);return n.append("Authorization",`${oC} ${t}`),n}(e,n),s=t.getImmediate({optional:!0});if(s){let e=await s.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}let a={method:"POST",headers:i,body:JSON.stringify({installation:{sdkVersion:oS,appId:e.appId}})},o=await oL(()=>fetch(r,a));if(o.ok)return ok(await o.json());throw await oN("Generate Auth Token",o)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o0(e,t=!1){let n;let r=await oH(e.appConfig,r=>{var i;if(!o5(r))throw ox.create("not-registered");let s=r.authToken;if(!t&&2===(i=s).requestStatus&&!function(e){let t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+36e5}(i))return r;if(1===s.requestStatus)return n=o1(e,t),r;{if(!navigator.onLine)throw ox.create("app-offline");let t=function(e){let t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(r);return n=o6(e,t),t}});return n?await n:r.authToken}async function o1(e,t){let n=await o2(e.appConfig);for(;1===n.authToken.requestStatus;)await oM(100),n=await o2(e.appConfig);let r=n.authToken;return 0===r.requestStatus?o0(e,t):r}function o2(e){return oH(e,e=>{var t;if(!o5(e))throw ox.create("not-registered");return 1===(t=e.authToken).requestStatus&&t.requestTime+1e4<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function o6(e,t){try{let n=await oZ(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await oK(e.appConfig,r),n}catch(n){if(oA(n)&&(401===n.customData.serverCode||404===n.customData.serverCode))await oG(e.appConfig);else{let n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await oK(e.appConfig,n)}throw n}}function o5(e){return void 0!==e&&2===e.registrationStatus}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o3(e){let{installationEntry:t,registrationPromise:n}=await oQ(e);return n?n.catch(console.error):o0(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o8(e,t=!1){return await o4(e),(await o0(e,t)).token}async function o4(e){let{registrationPromise:t}=await oQ(e);t&&await t}function o7(e){return ox.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o9="installations";eX(new em(o9,e=>{let t=e.getProvider("app").getImmediate(),n=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if(!e||!e.options)throw o7("App Configuration");if(!e.name)throw o7("App Name");for(let t of["projectId","apiKey","appId"])if(!e.options[t])throw o7(t);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t),r=eY(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},"PUBLIC")),eX(new em("installations-internal",e=>{let t=eY(e.getProvider("app").getImmediate(),o9).getImmediate();return{getId:()=>o3(t),getToken:e=>o8(t,e)}},"PRIVATE")),e2(oT,oI),e2(oT,oI,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le="analytics",lt="https://www.googletagmanager.com/gtag/js",ln=new eS("@firebase/analytics"),lr=new eh("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(e){if(!e.startsWith(lt)){let t=lr.create("invalid-gtag-resource",{gtagURL:e});return ln.warn(t.message),""}return e}function ls(e){return Promise.all(e.map(e=>e.catch(e=>e)))}async function la(e,t,n,r,i,s){let a=r[i];try{if(a)await t[a];else{let e=(await ls(n)).find(e=>e.measurementId===i);e&&await t[e.appId]}}catch(e){ln.error(e)}e("config",i,s)}async function lo(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let e=i.send_to;Array.isArray(e)||(e=[e]);let r=await ls(n);for(let n of e){let e=r.find(e=>e.measurementId===n),i=e&&t[e.appId];if(i)s.push(i);else{s=[];break}}}0===s.length&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(e){ln.error(e)}}const ll=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};async function lu(e){var t;let{appId:n,apiKey:r}=e,i={method:"GET",headers:new Headers({Accept:"application/json","x-goog-api-key":r})},s="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),a=await fetch(s,i);if(200!==a.status&&304!==a.status){let e="";try{let n=await a.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(e){}throw lr.create("config-fetch-failed",{httpStatus:a.status,responseMessage:e})}return a.json()}async function lh(e,t=ll,n){let{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw lr.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw lr.create("no-api-key")}let a=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new lf;return setTimeout(async()=>{o.abort()},void 0!==n?n:6e4),lc({appId:r,apiKey:i,measurementId:s},a,o,t)}async function lc(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=ll){var s;let{appId:a,measurementId:o}=e;try{await new Promise((e,n)=>{let i=setTimeout(e,Math.max(t-Date.now(),0));r.addEventListener(()=>{clearTimeout(i),n(lr.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}catch(e){if(o)return ln.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${null==e?void 0:e.message}]`),{appId:a,measurementId:o};throw e}try{let t=await lu(e);return i.deleteThrottleMetadata(a),t}catch(u){if(!function(e){if(!(e instanceof eu)||!e.customData)return!1;let t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(u)){if(i.deleteThrottleMetadata(a),o)return ln.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${null==u?void 0:u.message}]`),{appId:a,measurementId:o};throw u}let t=503===Number(null===(s=null==u?void 0:u.customData)||void 0===s?void 0:s.httpStatus)?ep(n,i.intervalMillis,30):ep(n,i.intervalMillis),l={throttleEndTimeMillis:Date.now()+t,backoffCount:n+1};return i.setThrottleMetadata(a,l),ln.debug(`Calling attemptFetch again in ${t} millis`),lc(e,l,r,i)}}class lf{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function ld(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}{let i=await t;e("event",n,Object.assign(Object.assign({},r),{send_to:i}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lp(){if(!eo())return ln.warn(lr.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await el()}catch(e){return ln.warn(lr.create("indexeddb-unavailable",{errorInfo:null==e?void 0:e.toString()}).message),!1}return!0}async function lg(e,t,i,s,a,o,l){var u;let h=lh(e);h.then(t=>{i[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&ln.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(e=>ln.error(e)),t.push(h);let c=lp().then(e=>e?s.getId():void 0),[f,d]=await Promise.all([h,c]);!function(e){for(let t of Object.values(window.document.getElementsByTagName("script")))if(t.src&&t.src.includes(lt)&&t.src.includes(e))return t;return null}(o)&&function(e,t){var n,r;let i;let s=(n="firebase-js-sdk-policy",r={createScriptURL:li},window.trustedTypes&&(i=window.trustedTypes.createPolicy(n,r)),i),a=document.createElement("script"),o=`${lt}?l=${e}&id=${t}`;a.src=s?null==s?void 0:s.createScriptURL(o):o,a.async=!0,document.head.appendChild(a)}(o,f.measurementId),r&&(a("consent","default",r),r=void 0),a("js",new Date);let p=null!==(u=null==l?void 0:l.config)&&void 0!==u?u:{};return p.origin="firebase",p.update=!0,null!=d&&(p.firebase_id=d),a("config",f.measurementId,p),n&&(a("set",n),n=void 0),f.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(e){this.app=e}_delete(){return delete ly[this.app.options.appId],Promise.resolve()}}let ly={},lv=[];const lw={};let lb="dataLayer",lE=!1;const l_="@firebase/analytics",lT="0.10.11";eX(new em(le,(e,{options:t})=>(function(e,t,n){!function(){let e=[];if(function(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()&&e.push("This is a browser extension environment."),"undefined"!=typeof navigator&&navigator.cookieEnabled||e.push("Cookies are not available."),e.length>0){let t=e.map((e,t)=>`(${t+1}) ${e}`).join(" "),n=lr.create("invalid-analytics-context",{errorInfo:t});ln.warn(n.message)}}();let r=e.options.appId;if(!r)throw lr.create("no-app-id");if(!e.options.apiKey){if(e.options.measurementId)ln.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw lr.create("no-api-key")}if(null!=ly[r])throw lr.create("already-exists",{id:r});if(!lE){var a,o;let e,t;e=[],Array.isArray(window[lb])?e=window[lb]:window[lb]=e;let{wrappedGtag:n,gtagCore:r}=(a="gtag",t=function(...e){window[lb].push(arguments)},window[a]&&"function"==typeof window[a]&&(t=window[a]),window[a]=(o=t,async function(e,...t){try{if("event"===e){let[e,n]=t;await lo(o,ly,lv,e,n)}else if("config"===e){let[e,n]=t;await la(o,ly,lv,lw,e,n)}else if("consent"===e){let[e,n]=t;o("consent",e,n)}else if("get"===e){let[e,n,r]=t;o("get",e,n,r)}else if("set"===e){let[e]=t;o("set",e)}else o(e,...t)}catch(e){ln.error(e)}}),{gtagCore:t,wrappedGtag:window[a]});s=n,i=r,lE=!0}return ly[r]=lg(e,lv,lw,t,i,lb,n),new lm(e)})(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t),"PUBLIC")),eX(new em("analytics-internal",function(e){try{let t=e.getProvider(le).getImmediate();return{logEvent:(e,n,r)=>{var i;return i=t,void(i=eg(i),ld(s,ly[i.app.options.appId],e,n,r).catch(e=>ln.error(e)))}}}catch(e){throw lr.create("interop-component-reg-failed",{reason:e})}},"PRIVATE")),e2(l_,lT),e2(l_,lT,"esm2017");var lI={};u=lI,h=function(){var e=function(){},t="undefined",n=typeof window!==t&&typeof window.navigator!==t&&/Trident\/|MSIE /.test(window.navigator.userAgent),r=["trace","debug","info","warn","error"],i={},s=null;function a(e,t){var n=e[t];if("function"==typeof n.bind)return n.bind(e);try{return Function.prototype.bind.call(n,e)}catch(t){return function(){return Function.prototype.apply.apply(n,[e,arguments])}}}function o(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function l(){for(var n=this.getLevel(),i=0;i<r.length;i++){var s=r[i];this[s]=i<n?e:this.methodFactory(s,n,this.name)}if(this.log=this.debug,typeof console===t&&n<this.levels.SILENT)return"No console available for logging"}function u(e){return function(){typeof console!==t&&(l.call(this),this[e].apply(this,arguments))}}function h(r,i,s){var l;return"debug"===(l=r)&&(l="log"),typeof console!==t&&("trace"===l&&n?o:void 0!==console[l]?a(console,l):void 0!==console.log?a(console,"log"):e)||u.apply(this,arguments)}function c(e,n){var a,o,u,c=this,f="loglevel";function d(){var e;if(typeof window!==t&&f){try{e=window.localStorage[f]}catch(e){}if(typeof e===t)try{var n=window.document.cookie,r=encodeURIComponent(f),i=n.indexOf(r+"=");-1!==i&&(e=/^([^;]+)/.exec(n.slice(i+r.length+1))[1])}catch(e){}return void 0===c.levels[e]&&(e=void 0),e}}function p(e){var t=e;if("string"==typeof t&&void 0!==c.levels[t.toUpperCase()]&&(t=c.levels[t.toUpperCase()]),"number"==typeof t&&t>=0&&t<=c.levels.SILENT)return t;throw TypeError("log.setLevel() called with invalid level: "+e)}"string"==typeof e?f+=":"+e:"symbol"==typeof e&&(f=void 0),c.name=e,c.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},c.methodFactory=n||h,c.getLevel=function(){return null!=u?u:null!=o?o:a},c.setLevel=function(e,n){return u=p(e),!1!==n&&function(e){var n=(r[e]||"silent").toUpperCase();if(typeof window!==t&&f){try{window.localStorage[f]=n;return}catch(e){}try{window.document.cookie=encodeURIComponent(f)+"="+n+";"}catch(e){}}}(u),l.call(c)},c.setDefaultLevel=function(e){o=p(e),d()||c.setLevel(e,!1)},c.resetLevel=function(){u=null,function(){if(typeof window!==t&&f){try{window.localStorage.removeItem(f)}catch(e){}try{window.document.cookie=encodeURIComponent(f)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch(e){}}}(),l.call(c)},c.enableAll=function(e){c.setLevel(c.levels.TRACE,e)},c.disableAll=function(e){c.setLevel(c.levels.SILENT,e)},c.rebuild=function(){if(s!==c&&(a=p(s.getLevel())),l.call(c),s===c)for(var e in i)i[e].rebuild()},a=p(s?s.getLevel():"WARN");var g=d();null!=g&&(u=p(g)),l.call(c)}(s=new c).getLogger=function(e){if("symbol"!=typeof e&&"string"!=typeof e||""===e)throw TypeError("You must supply a name when creating a logger.");var t=i[e];return t||(t=i[e]=new c(e,s.methodFactory)),t};var f=typeof window!==t?window.log:void 0;return s.noConflict=function(){return typeof window!==t&&window.log===s&&(window.log=f),s},s.getLoggers=function(){return i},s.default=s,s},"function"==typeof define&&define.amd?define(h):lI?lI=h():u.log=h();const lS=document.getElementById("taskInput"),lC=document.getElementById("addTaskBtn"),lx=document.getElementById("taskList");async function lA(e){await function(e,t){var n,r;let i=aZ(e.firestore,a4),s=function(e,t,...n){if(e=eg(e),1==arguments.length&&(t=na.newId()),aW("doc","path",t),e instanceof a1){let r=nf.fromString(t,...n);return aX(r),new a6(e,null,new ng(r))}{if(!(e instanceof a6||e instanceof a5))throw new t8(t3.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(nf.fromString(t,...n));return aX(r),new a6(e.firestore,e instanceof a5?e.converter:null,new ng(r))}}(e),a=(n=e.converter)?n.toFirestore(t):t;return(r=[(function(e,t,n,r,i,s={}){let a,o;let l=e.$u(2*(!!s.merge||!!s.mergeFields),t,n,i);oh("Data must be an object, but it was:",l,r);let u=function e(t,n){let r={};return nS(t)?n.path&&n.path.length>0&&n.fieldMask.push(n.path):nI(t,(t,i)=>{let s=function t(n,r){if(ou(n=eg(n)))return oh("Unsupported field value:",r,n),e(n,r);if(n instanceof ot)return function(e,t){if(!oa(t.Mu))throw t.qu(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.qu(`${e._methodName}() is not currently supported inside arrays`);let n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(n,r),null;if(void 0===n&&r.ignoreUndefinedProperties)return null;if(r.path&&r.fieldMask.push(r.path),n instanceof Array){if(r.settings.Nu&&4!==r.Mu)throw r.qu("Nested arrays are not supported");return function(e,n){let r=[],i=0;for(let s of e){let e=t(s,n.ku(i));null==e&&(e={nullValue:"NULL_VALUE"}),r.push(e),i++}return{arrayValue:{values:r}}}(n,r)}return function(e,t){var n,r,i;if(null===(e=eg(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return n=t.serializer,"number"==typeof(i=r=e)&&Number.isInteger(i)&&!n_(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER?rV(r):rB(n,r);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let n=nu.fromDate(e);return{timestampValue:ix(t.serializer,n)}}if(e instanceof nu){let n=new nu(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:ix(t.serializer,n)}}if(e instanceof on)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof a9)return{bytesValue:iA(t.serializer,e._byteString)};if(e instanceof a6){let n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.qu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:ik(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof or)return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:e.toArray().map(e=>{if("number"!=typeof e)throw t.qu("VectorValues must only contain numeric values.");return rB(t.serializer,e)})}}}}};throw t.qu(`Unsupported field value: ${aJ(e)}`)}(n,r)}(i,n.Ou(t));null!=s&&(r[t]=s)}),{mapValue:{fields:r}}}(r,l);if(s.merge)a=new nN(l.fieldMask),o=l.fieldTransforms;else if(s.mergeFields){let e=[];for(let r of s.mergeFields){let i=function(e,t,n){if((t=eg(t))instanceof oe)return t._internalPath;if("string"==typeof t)return of(e,t);throw od("Field path arguments must be of type string or ",e,!1,void 0,n)}(t,r,n);if(!l.contains(i))throw new t8(t3.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);(function(e,t){return e.some(e=>e.isEqual(t))})(e,i)||e.push(i)}a=new nN(e),o=l.fieldTransforms.filter(e=>a.covers(e.field))}else a=null,o=l.fieldTransforms;return new os(new n3(u),a,o)})(function(e){let t=e._freezeSettings(),n=sS(e._databaseId);return new ol(e._databaseId,!!t.ignoreUndefinedProperties,n)}(e.firestore),"addDoc",s._key,a,null!==e.converter,{}).toMutation(s._key,rJ.exists(!1))],function(e,t){let n=new t4;return e.asyncQueue.enqueueAndForget(async()=>aE(await aK(e).then(e=>e.syncEngine),t,n)),n.promise}(a7(i),r)).then(()=>s)}(a3(lL,"todos"),{text:e,completed:!1}),lS.addEventListener("keypress",function(e){"Enter"===e.key&&lC.click()})}async function lD(){var e=await lk();lx.innerHTML="",e.forEach((e,t)=>{if(!e.data().completed){let t=document.createElement("li");t.id=e.id,t.textContent=e.data().text,t.tabIndex=0,lx.appendChild(t)}})}async function lk(){var e=await function(e){e=aZ(e,a2);let t=aZ(e.firestore,a4),n=a7(t),r=new o_(t);return(/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new t8(t3.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query),(function(e,t,n={}){let r=new t4;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,r,i){let s=new aV({next:n=>{s.eu(),t.enqueueAndForget(()=>ai(e,a)),n.fromCache&&"server"===r.source?i.reject(new t8(t3.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),a=new al(n,s,{includeMetadataChanges:!0,ua:!0});return ar(e,a)})(await aG(e),e.asyncQueue,t,n,r)),r.promise})(n,e._query).then(n=>new oE(t,r,e,n)))}(a3(lL,"todos"));let t=[];return e.forEach(e=>{t.push(e)}),t}function lN(e){let t=document.createElement("div");return t.textContent=e,t.innerHTML}lC.addEventListener("click",async()=>{if(lS.value.trim()){let e=document.getElementById("taskInput"),t=lN(e.value.trim());t&&(await lA(t),lD(),e.value=""),lD()}else alert("Please enter a task!")}),lx.addEventListener("keypress",async function(e){"LI"===e.target.tagName&&"Enter"===e.key&&await updateDoc(doc(lL,"todos",e.target.id),{completed:!0}),lD()}),lN(lS.value.trim()),lx.addEventListener("click",e=>{"LI"===e.target.tagName&&e.target.remove()});const lR=e0({apiKey:"AIzaSyDOEH-lZXEK_lp9WFc1XNrR4Jr5rBbPzvI",authDomain:"checklist-todo-app-a391c.firebaseapp.com",projectId:"checklist-todo-app-a391c",storageBucket:"checklist-todo-app-a391c.firebasestorage.app",messagingSenderId:"966273922595",appId:"1:966273922595:web:2e57caac6005fb3ff52396",measurementId:"G-LPN5SSNXGR"});!function(e=e1()){let t=eY(e=eg(e),le);t.isInitialized()?t.getImmediate():function(e,t={}){let n=eY(e,le);if(n.isInitialized()){let e=n.getImmediate();if(ef(t,n.getOptions()))return e;throw lr.create("already-initialized")}return n.initialize({options:t})}(e)}(lR);const lL=function(e,t){let n=eY("object"==typeof e?e:e1(),"firestore").getImmediate({identifier:"string"==typeof e?e:"(default)"});if(!n._initialized){let e=ei("firestore");e&&function(e,t,n,r={}){var i;let s=(e=aZ(e,a1))._getSettings(),a=`${t}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==a&&t2("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=tX.MOCK_USER;else{t=function(e,t){if(e.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Y(JSON.stringify({alg:"none",type:"JWT"})),Y(JSON.stringify(s)),""].join(".")}(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);let s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new t8(t3.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new tX(s)}e._authCredentials=new ne(new t7(t,n))}}(n,...e)}return n}(lR);o(lI).setLevel("info"),o(lI).info("Application started"),o(lI).debug("Debugging information"),o(lI).error("An error occurred");
//# sourceMappingURL=index.4c017f17.js.map
