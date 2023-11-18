!function(e){function t(t){for(var r,i,a=t[0],c=t[1],l=t[2],d=0,u=[];d<a.length;d++)i=a[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&u.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(p&&p(t);u.length;)u.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,i=1;i<n.length;i++){var a=n[i];0!==o[a]&&(r=!1)}r&&(s.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={0:0},s=[];var i={};var a={1666:function(){return{"./brotli_wasm_bg.js":{__wbindgen_is_undefined:function(e){return r[1557].exports.e(e)},__wbindgen_is_object:function(e){return r[1557].exports.d(e)},__wbindgen_string_new:function(e,t){return r[1557].exports.i(e,t)},__wbindgen_json_serialize:function(e,t){return r[1557].exports.f(e,t)},__wbg_new_59cb74e423758ede:function(){return r[1557].exports.b()},__wbg_stack_558ba5917b466edd:function(e,t){return r[1557].exports.c(e,t)},__wbg_error_4bb6c2a97407129a:function(e,t){return r[1557].exports.a(e,t)},__wbindgen_object_drop_ref:function(e){return r[1557].exports.g(e)},__wbindgen_rethrow:function(e){return r[1557].exports.h(e)}}}}};function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=function(e){return c.p+""+({1:"react-monaco-editor",3:"zstd"}[e]||e)+".bundle.js"}(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(u);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+s+")",d.name="ChunkLoadError",d.type=r,d.request=s,n[1](d)}o[e]=void 0}};var u=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return({4:[1666]}[e]||[]).forEach((function(e){var n=i[e];if(n)t.push(n);else{var r,o=a[e](),s=fetch(c.p+""+{1666:"8de92d11411b6a7216ad"}[e]+".module.wasm");if(o instanceof Promise&&"function"==typeof WebAssembly.compileStreaming)r=Promise.all([WebAssembly.compileStreaming(s),o]).then((function(e){return WebAssembly.instantiate(e[0],e[1])}));else if("function"==typeof WebAssembly.instantiateStreaming)r=WebAssembly.instantiateStreaming(s,o);else{r=s.then((function(e){return e.arrayBuffer()})).then((function(e){return WebAssembly.instantiate(e,o)}))}t.push(i[e]=r.then((function(t){return c.w[e]=(t.instance||t).exports})))}})),Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e},c.w={};var l=this.webpackJsonp=this.webpackJsonp||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var p=d;s.push([682,2]),n()}({100:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return i}));var r=n(2),o=n(20);const s=Object(r.i)(o.b)`
    border-radius: 0;
    margin-bottom: 0;

    flex-basis: auto;
    flex-shrink: 1;
    flex-grow: 0; /* Overridden below, so only the bodies expand */
    min-height: 0;
`,i=Object(r.i)(s)`
    /* This is required to force the editor to shrink to fit, instead of going
       beyond the limits of the column when other item is expanded and pushes it down */
    overflow-y: hidden;

    flex-grow: ${e=>e.collapsed?"0":"1"};

    ${e=>!e.collapsed&&"\n        /* When we're open, we want space more than any siblings */\n        flex-grow: 9999999;\n\n        /* If we're open, never let us get squeezed to nothing: */\n        min-height: 25vh;\n\n        /* Fixed size required to avoid editor resize thrashing */\n        flex-basis: 50%;\n    "}
`},101:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));class r extends Error{constructor(e,t,n){super(`API error during ${t}: ${e}`),this.operationName=t,this.errorCode=n}}},1021:function(e,t){},1023:function(e,t){},1051:function(e,t){},1053:function(e,t){},1054:function(e,t){},1059:function(e,t){},1061:function(e,t){},1068:function(e,t){},1087:function(e,t){},1099:function(e,t){},110:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(0),o=n(4),s=n(1),i=n(5),a=n(73),c=n(2),l=n(36),d=n(24),u=n(21),p=n(131),h=n(127),m=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i};const g=c.i.div`
    overflow-y: auto;
    max-height: ${e=>e.expanded?"100%":"560px"}
`,f=c.i.div`
    display: flex;
    justify-content: center;

    ${e=>e.expanded?"\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            align-items: stretch;\n        ":"\n            height: 100%;\n            align-items: center;\n        "}
`;let b=class extends r.Component{constructor(e){super(e),this.editorOptions={readOnly:!0},Object(s.reaction)(()=>{try{return this.renderedContent}catch(e){}},e=>{e&&!Object(l.b)(e)&&requestAnimationFrame(()=>{var e,t;null===(t=(e=this.props).onContentRendered)||void 0===t||t.call(e)})},{fireImmediately:!0})}get formatter(){return p.a[this.props.contentType]||p.a.text}get contentBuffer(){return o.isString(this.props.children)?Object(u.l)(this.props.children):this.props.children}get renderedContent(){if(!Object(p.b)(this.formatter))return;const{cache:e}=this.props,t=this.formatter.cacheKey,n=e.get(t),r=n||this.formatter.render(this.contentBuffer);if(n||e.set(t,r),"string"==typeof r)return r;if("fulfilled"===r.state)return r.value;if("rejected"===r.state)throw r.value;return r}render(){if(!Object(p.b)(this.formatter)){const e=this.formatter,t="scrollable"===e.layout?g:"centered"===e.layout?f:Object(d.d)(e.layout);return r.createElement(t,{expanded:this.props.expanded},r.createElement(e.Component,{content:this.contentBuffer,rawContentType:this.props.rawContentType}))}try{const e=this.renderedContent;return Object(l.b)(e)?r.createElement(h.b,{height:"500px"}):r.createElement(a.b,{contentId:this.props.contentId,node:this.props.editorNode,options:this.editorOptions,language:this.formatter.language,value:e,schema:this.props.schema,expanded:this.props.expanded})}catch(e){return r.createElement("div",null,"Failed to render ",this.props.contentType," content:",r.createElement("br",null),Object(d.b)(e).toString())}}};m([s.computed],b.prototype,"formatter",null),m([s.computed],b.prototype,"contentBuffer",null),m([s.computed],b.prototype,"renderedContent",null),b=m([i.e],b)},1102:function(e,t){},111:function(e,t,n){"use strict";n.d(t,"b",(function(){return m})),n.d(t,"a",(function(){return g}));var r=n(4),o=n(0),s=n(1),i=n(5),a=n(2),c=n(15),l=n(7),d=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i};const u=a.i.div`
    display: grid;
    grid-gap: 5px;
    grid-template-columns: 1fr 2fr;
`,p=Object(a.i)(u)`
    grid-template-columns: 1fr 2fr min-content;

    > :last-child {
        grid-column: 2 / span 2;
    }
`,h=Object(a.i)(c.a)`
    font-size: ${e=>e.theme.textSize};
    padding: 3px 10px 5px;
`;let m=class extends o.Component{render(){const{pairs:e,className:t}=this.props;return o.createElement(u,{className:t},r.flatMap(e,({key:e,value:t},n)=>[o.createElement(c.e,{value:e,readOnly:!0,spellCheck:!1,key:n+"-key"}),o.createElement(c.e,{value:t,readOnly:!0,spellCheck:!1,key:n+"-val"})]))}};m=d([i.e],m);let g=class extends o.Component{constructor(){super(...arguments),this.containerRef=o.createRef(),this.values=r.cloneDeep(this.props.pairs),this.lastValuesLength=this.values.length,this.convert=e=>this.props.convertResult?this.props.convertResult(e):e,this.onChangeValues=e=>{const{props:{transformInput:t,onChange:n},convert:r}=this;this.values=t?t(e):e;const o=this.values.length===this.lastValuesLength+1;this.lastValuesLength=this.values.length,o&&requestAnimationFrame(()=>{const e=this.containerRef.current,t=null==e?void 0:e.querySelector("input:last-child");null==t||t.scrollIntoView({block:"nearest",behavior:"smooth"})}),n(r(this.values))}}componentDidMount(){Object(i.c)(this,Object(s.reaction)(()=>this.props.pairs,e=>{r.isEqual(this.convert(e),this.convert(this.values))||(this.values=r.cloneDeep(e),this.lastValuesLength=this.values.length)}))}render(){const{keyTitle:e,keyPattern:t,keyPlaceholder:n,valuePlaceholder:i,allowEmptyValues:a}=this.props,{values:d,onChangeValues:u,containerRef:m}=this;return o.createElement(p,{ref:m},r.flatMap(d,({key:n,value:r,disabled:i},p)=>[o.createElement(c.e,{value:n,required:!0,pattern:t,title:e,disabled:i,spellCheck:!1,key:p+"-key",onChange:Object(s.action)(e=>{e.target.reportValidity(),d[p].key=e.target.value,u(d)})}),o.createElement(c.e,{value:r,required:!a,disabled:i,spellCheck:!1,key:p+"-val",onChange:Object(s.action)(e=>{e.target.reportValidity(),d[p].value=e.target.value,u(d)})}),o.createElement(h,{key:p+"-del",disabled:i,onClick:Object(s.action)(()=>{d.splice(p,1),u(d)})},o.createElement(l.b,{icon:["far","trash-alt"]}))]).concat([o.createElement(c.e,{value:"",pattern:t,placeholder:n,spellCheck:!1,key:d.length+"-key",onChange:Object(s.action)(e=>{let t=e.target.value;t&&d.push({key:t,value:""}),u(d)})}),o.createElement(c.e,{value:"",placeholder:i,spellCheck:!1,key:d.length+"-val",onChange:Object(s.action)(e=>{e.target.value&&d.push({key:"",value:e.target.value}),u(d)})})]))}};d([s.observable],g.prototype,"values",void 0),g=d([i.e],g)},1163:function(e,t){},118:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return i}));var r,o=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))};function s(e){return o(this,void 0,void 0,(function*(){return"undefined"==typeof window?"service-worker":e in window?window[e]:new Promise(t=>{window.addEventListener("message",n=>{n.data[e]&&t(n.data[e])})})}))}const i=null!==(r=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:{}).desktopApi)&&void 0!==r?r:{}},119:function(e,t,n){"use strict";n.d(t,"b",(function(){return m})),n.d(t,"a",(function(){return g})),n.d(t,"c",(function(){return f}));var r=n(4),o=n(572),s=n(69),i=n(2),a=n(7);function c(e){return e?" "+e.split(".").slice(0,2).join(".").replace(/\.0$/,""):""}const l=e=>{const t=r(e.os).values().some(),n=r(e.browser).values().some(),o=r.upperFirst(e.ua.split(" ")[0]);if(t||n){const s=t?` (${r.upperFirst(e.os.name)}${c(e.os.version)})`:"";return(n?(e.browser.name||"")+c(e.browser.version):o)+s}return o};function d(e){const t=e[0].toLowerCase();return"a"===t||"e"===t||"i"===t||"o"===t||"u"===t?"an ":"a "}const u=e=>{if(!e.browser.name&&!e.os.name&&!e.device.type)return;const t=e.browser.name?e.browser.name+c(e.browser.version)+(e.engine.name?`, based on the ${e.engine.name}${"Blink"!==e.engine.name?c(e.engine.version):""} engine`:""):e.engine.name?`a browser built on the ${e.engine.name}${c(e.engine.version)} engine`:"",n=(e.device.vendor?e.device.vendor+" ":"")+(e.device.model?e.device.model+" ":"")+(e.device.type?"mobile"===e.device.type?"mobile phone":e.device.type+" ":""),r=e.os.name?`running ${e.os.name}${c(e.os.version)}`:"",o=e.cpu.architecture?`${d(e.cpu.architecture)}${e.cpu.architecture} CPU`:"",s=(n?`${d(n)}${n}`:"")+(n&&r?", ":"")+r+(o?(n||r?", with ":" using ")+o:"");return`This request came from ${t?t+(s?". The device is "+s:""):n?s:"a device "+s}.`},p=e=>!(!e||!r.has(a.c,e)),h=e=>{const t=Object(s.get)(e,"browser","name");if(p(t))return a.c[t];const n=e.ua.match(/[A-Za-z]+/g)||[],o=r.find(n.map(e=>r.upperFirst(e.toLowerCase())),e=>p(e));return o?a.c[o]:a.c.Unknown};const m={ua:"",summary:"Unknown client",icon:a.c.Unknown},g={ua:"",summary:"HTTP Toolkit",description:"Sent manually from HTTP Toolkit",icon:{icon:["far","paper-plane"],color:i.h}},f=e=>{if(!e)return m;const t=new o.UAParser(e).getResult();return function(e){const t=e.ua.match(/Electron\/(\S+)/);t&&(e.engine=e.browser||e.engine,e.browser={name:"Electron",version:t[1],major:t[1].split(".")[0]})}(t),{ua:t.ua,summary:l(t),description:u(t),icon:h(t)}}},127:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c}));var r=n(0),o=n(2),s=n(7),i=n(20);const a=Object(o.i)(e=>r.createElement("div",{className:e.className},r.createElement(s.b,{spin:!0,icon:["fac","spinner-arc"],size:"8x"})))`
    ${e=>e.height&&o.e`
        height: ${e.height};
    `}

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`,c=e=>r.createElement(i.b,Object.assign({},e),e.children,r.createElement(a,{height:e.height?e.height:e.expanded?"auto":"550px"}))},129:function(e,t,n){"use strict";n.d(t,"a",(function(){return g})),n.d(t,"d",(function(){return f})),n.d(t,"c",(function(){return b})),n.d(t,"b",(function(){return y}));var r=n(4),o=n(1),s=n(12),i=n(14),a=n(55),c=n(29),l=n(17),d=n(253);const u=(e,t,n)=>{const o=Object(c.h)(e),s=t[o];if(!s)throw new Error("Can't load unrecognized rule type: "+o);return Object(a.a)(s)?i.e(s,e,()=>{},n):r.create(s.prototype,e)},p=i.d(e=>{const t=r.cloneDeep(Object(o.toJS)(e));return t.matchers=t.matchers.map(e=>Object(a.a)(e)?i.n(e):e),"steps"in t?t.steps=t.steps.map(e=>Object(a.a)(e)?i.n(e):e):(Object(a.a)(t.handler)&&(t.handler=i.n(t.handler)),"completionChecker"in t&&Object(a.a)(t.completionChecker)&&(t.completionChecker=i.n(t.completionChecker))),t},(e,t)=>Object.assign(Object.assign({id:e.id,type:e.type,title:e.title,activated:e.activated,matchers:e.matchers.map(e=>u(e,c.d,t.args))},"steps"in e?{steps:e.steps.map(e=>u(e,c.b,t.args))}:{handler:u(e.handler,c.b,t.args)}),{completionChecker:"completionChecker"in e&&u(e.completionChecker,s.completionCheckers.CompletionCheckerLookup,t.args)})),h=i.d(e=>Object(l.k)(e)?i.n(m,e):p.serializer(e),(e,t,n,r)=>{if(Object(l.k)(e)){const n=i.e(m,e,r,t.args);return n.collapsed=!0,n}return p.deserializer(e,r,t,n)}),m=i.c({id:i.k(),title:i.k(),items:i.g(h)}),g=i.c({id:i.k(),title:i.k(),version:Object(a.b)(()=>{}),isRoot:i.j(i.k()),items:i.g(h)}),f=e=>i.n(g,e),b=(e,t)=>i.e(g,Object(d.a)(e),void 0,t),y="application/htkrules+json;charset=utf-8"},13:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"g",(function(){return l})),n.d(t,"d",(function(){return d})),n.d(t,"e",(function(){return u})),n.d(t,"f",(function(){return p})),n.d(t,"h",(function(){return h})),n.d(t,"a",(function(){return m})),n.d(t,"i",(function(){return g})),n.d(t,"b",(function(){return f})),n.d(t,"j",(function(){return b}));var r=n(4),o=n(0),s=n(2),i=n(7),a=n(84);const c=s.i.h2`
    text-transform: uppercase;
    opacity: ${e=>e.theme.lowlightTextOpacity};

    display: inline-block;
    margin-right: 5px;
`,l=s.i.div`
    display: inline-block;
`,d=Object(s.i)(c)`
    padding: 3px 0 0;
    margin: 0 0 5px 0;
    min-height: 26px;
    display: block;
    box-sizing: border-box;
`,u=s.i.div`
    padding: 3px 0 11px;
    width: 100%;

    &:last-child {
        padding-bottom: 0;
    }

    font-family: ${e=>e.theme.monoFontFamily};
    word-break: break-all;
    line-height: 1.1;
`,p=Object(s.i)(u)`
    display: inline;
`,h=s.i.span`
    font-family: ${e=>e.theme.monoFontFamily};
    font-size: 90%;
    user-select: all;
    font-weight: bold;

    word-break: break-all; /* Fallback for anybody without break-word */
    word-break: break-word;
`,m=s.i.div`
    opacity: ${e=>e.theme.lowlightTextOpacity};
    font-style: italic;
    display: inline-block;
`,g=e=>o.createElement(f,Object.assign({},r.omit(e,"content"),{dangerouslySetInnerHTML:e.content})),f=s.i.div`
    line-height: 1.3;

    p, li, ul, ol, table, h1, h2, h3, h4, h5, h6, pre {
        margin-bottom: 10px;
    }

    p::first-letter,
    li::first-letter,
    h1::first-letter,
    h2::first-letter,
    h3::first-letter,
    h4::first-letter,
    h5::first-letter,
    h6::first-letter {
        text-transform: capitalize;
    }

    ol, ul {
        padding-left: 20px;
    }

    ol {
        list-style: decimal;
    }

    ul {
        list-style: circle;
    }

    table {
        border-collapse: unset;
        border-spacing: 5px;
        margin-left: -5px;
    }

    th {
        min-width: 80px;
    }

    code {
        word-break: break-all; /* Fallback for anybody without break-word */
        word-break: break-word;
        font-family: ${e=>e.theme.monoFontFamily};
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: bold;
        margin-bottom: 10px;
    }

    pre {
        white-space: pre-wrap;
        display: block;
        border-left: 3px solid ${e=>e.theme.containerWatermark};
        padding-left: 8px;
    }

    img {
        max-width: 100%;
    }

    a[href] {
        color: ${e=>e.theme.linkColor};

        &:visited {
            color: ${e=>e.theme.visitedLinkColor};
        }
    }

    :last-child :last-child {
        margin-bottom: 0;
    }
`,b=e=>e.content?o.createElement(g,{content:Object(a.a)(e.content.replace(/:suggestion:/g,i.f).replace(/:warning:/g,i.g))}):null},130:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0),o=n(131),s=n(51),i=n(44),a=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))};const c=e=>{const{format:t,content:n,onFormatted:c}=e,l=o.a[t],d=!!l&&Object(o.b)(l)&&["json","html","xml","javascript","css"].includes(t);return r.createElement(i.a,{className:e.className,title:d?"Format as "+Object(s.d)(e.format):"",disabled:!d,icon:["fas","align-left"],onClick:()=>a(void 0,void 0,void 0,(function*(){c(yield l.render(n))}))})}},131:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return p}));var r=n(2),o=n(36),s=n(21),i=n(61),a=n(0),c=n(111);const l=Object(r.i)(e=>a.createElement("img",{className:e.className,src:`data:${e.rawContentType||""};base64,${e.content.toString("base64")}`}))`
    display: block;
    max-width: 100%;
    margin: 0 auto;
    object-fit: scale-down;
`;function d(e){return!!e.language}const u=e=>t=>Object(o.d)(Object(i.d)(t,e)),p={raw:{language:"text",cacheKey:Symbol("raw"),render:e=>{if(!(e.byteLength<2e3))return Object(o.d)(Object(i.d)(e,"raw"));try{return e.toString("hex").replace(/(\w\w)/g,"$1 ").trimRight()}catch(e){return Object(o.d)(Promise.reject(e))}}},text:{language:"text",cacheKey:Symbol("text"),render:e=>Object(s.c)(e)},base64:{language:"text",cacheKey:Symbol("base64"),render:u("base64")},markdown:{language:"markdown",cacheKey:Symbol("markdown"),render:u("markdown")},yaml:{language:"yaml",cacheKey:Symbol("yaml"),render:u("yaml")},html:{language:"html",cacheKey:Symbol("html"),render:u("html")},xml:{language:"xml",cacheKey:Symbol("xml"),render:u("xml")},json:{language:"json",cacheKey:Symbol("json"),render:e=>{if(!(e.byteLength<1e4))return Object(o.d)(Object(i.d)(e,"json"));{const t=Object(s.c)(e);try{return JSON.stringify(JSON.parse(t),null,2)}catch(e){return t}}}},javascript:{language:"javascript",cacheKey:Symbol("javascript"),render:u("javascript")},css:{language:"css",cacheKey:Symbol("css"),render:u("css")},"url-encoded":{layout:"scrollable",Component:Object(r.i)(e=>{const t=[...new URLSearchParams(e.content)].map(([e,t])=>({key:e,value:t}));return a.createElement(c.b,{className:e.className,pairs:t})}).attrs(e=>({content:Object(s.c)(e.content)}))`
            padding: 5px;
        `},image:{layout:"centered",Component:l}}},143:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b})),n.d(t,"c",(function(){return E}));var r=n(4),o=n(43),s=n(649),i=n(89),a=n(21),c=n(19),l=n(24),d=n(9),u=n(50),p=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))};const h=new TextDecoder("utf8",{fatal:!0});function m(e,t={bodySizeLimit:5e5}){return p(this,void 0,void 0,(function*(){const[n,s]=r.partition(e,e=>e.isHttp()),i=s.filter(e=>e.isTlsFailure()),a=function(e){const t=r.groupBy(e,e=>e.request.source.summary);return r.map(t,(e,t)=>{const n=Math.min(...e.map(e=>{var t;return null!==(t=e.timingEvents.startTime)&&void 0!==t?t:Date.now()}),Date.now());return{id:t,title:t,startedDateTime:o.format(n),pageTimings:{}}})}(n),c=yield Promise.all(n.map(e=>function(e,t){var n,r,s;return p(this,void 0,void 0,(function*(){const{timingEvents:i}=e,a=null!==(n=i.startTime)&&void 0!==n?n:Date.now(),c=i.bodyReceivedTimestamp?i.bodyReceivedTimestamp-i.startTimestamp:0,d=i.bodyReceivedTimestamp&&i.headersSentTimestamp?i.headersSentTimestamp-i.bodyReceivedTimestamp:0,u=i.responseSentTimestamp?i.responseSentTimestamp-i.headersSentTimestamp:0,p=null!==(s=null!==(r=i.wsClosedTimestamp)&&void 0!==r?r:i.responseSentTimestamp)&&void 0!==s?s:i.abortedTimestamp,h=p?p-i.startTimestamp:-1;return Object.assign({pageref:e.request.source.summary,startedDateTime:o.format(a),time:h,request:yield b(e.request,!0,t),response:yield v(e,t),cache:{},timings:{blocked:-1,dns:-1,connect:-1,ssl:-1,send:Math.max(c,0),wait:Math.max(d,0),receive:Math.max(u,0)},_pinned:e.pinned||void 0},e.isWebSocket()?{_resourceType:"websocket",_webSocketMessages:e.messages.map(e=>function(e,t){return{type:"sent"===e.direction?"receive":"received"===e.direction?"send":Object(l.d)(e.direction),opcode:e.isBinary?2:1,data:e.isBinary?e.content.toString("base64"):e.content.toString("utf8"),time:(t.startTime+(e.timestamp-t.startTimestamp))/1e3}}(e,i)),_webSocketClose:e.closeState&&"aborted"!==e.closeState?{code:e.closeState.closeCode,reason:e.closeState.closeReason,timestamp:i.wsClosedTimestamp?i.wsClosedTimestamp/1e3:void 0}:e.closeState}:{})}))}(e,t))),u=i.map(x);return{log:{version:"1.2",creator:{name:"HTTP Toolkit",version:d.y},pages:a,entries:c,_tlsErrors:u}}}))}function g(e){return r.map(e,(e,t)=>({name:t,value:r.isArray(e)?e.join(","):e}))}function f(e){return r(e).keyBy(e=>e.name).mapKeys((e,t)=>t.toLowerCase()).mapValues(e=>e.value).value()}function b(e,t,n){if(t&&(!e.body.decodedPromise.state||"pending"===e.body.decodedPromise.state))return e.body.decodedPromise.then(()=>b(e,!1,n));const r={method:e.method,url:e.parsedUrl.toString(),httpVersion:"HTTP/"+(e.httpVersion||"1.1"),cookies:[],headers:g(e.headers),queryString:Array.from(e.parsedUrl.searchParams.entries()).map(([e,t])=>({name:e,value:t})),headersSize:-1,bodySize:e.body.encoded.byteLength};if(e.body.decoded)if(e.body.decoded.byteLength>n.bodySizeLimit)r._requestBodyStatus="discarded:too-large",r.comment=`Body discarded during HAR generation: longer than limit of ${n.bodySizeLimit} bytes`;else try{r.postData=function(e,t){if(!e)return;if("application/x-www-form-urlencoded"===t){let n;try{n=i.parse(e)}catch(t){console.log("Failed to parse url encoded body",e)}return n?{mimeType:t,params:y(n),text:e}:{mimeType:t,text:e}}return{mimeType:t,text:e}}(h.decode(e.body.decoded),Object(c.g)(e.headers["content-type"])||"application/octet-stream")}catch(t){if(!(t instanceof TypeError))throw t;r._requestBodyStatus="discarded:not-representable",r._content={text:e.body.decoded.toString("base64"),size:e.body.decoded.byteLength,encoding:"base64"}}else r._requestBodyStatus="discarded:not-decodable";return r}function y(e){return r.flatMap(Object.entries(e),([e,t])=>r.isString(t)?[[e,t]]:t.map(t=>[e,t])).map(([e,t])=>({name:e,value:t}))}function v(e,t){var n;return p(this,void 0,void 0,(function*(){const{request:r,response:o}=e;if(!o||"aborted"===o)return{status:0,statusText:"",httpVersion:"",headers:[],cookies:[],content:{size:0,mimeType:"application/x-unknown"},redirectURL:"",headersSize:-1,bodySize:-1};const s=yield o.body.decodedPromise;let i;try{i=!s||s.byteLength>t.bodySizeLimit?{comment:`Body discarded during HAR generation: longer than limit of ${t.bodySizeLimit} bytes`}:{text:h.decode(s)}}catch(e){i={text:s.toString("base64"),encoding:"base64"}}return{status:o.statusCode,statusText:o.statusMessage,httpVersion:"HTTP/"+(r.httpVersion||"1.1"),cookies:[],headers:g(o.headers),content:Object.assign({mimeType:Object(c.g)(o.headers["content-type"])||"application/octet-stream",size:(null===(n=o.body.decoded)||void 0===n?void 0:n.byteLength)||0},i),redirectURL:"",headersSize:-1,bodySize:o.body.encoded.byteLength||0}}))}function x(e){var t;const n=null!==(t=e.timingEvents)&&void 0!==t?t:{},r="startTime"in n?n.startTime:new Date,s="failureTimestamp"in n?n.failureTimestamp-n.connectTimestamp:0;return{startedDateTime:o.format(r),time:s,cause:e.failureCause,hostname:e.upstreamHostname,clientIPAddress:e.remoteIpAddress,clientPort:e.remotePort}}const w=(e,...t)=>r.sumBy(t,t=>{const n=Number(e[t]);return!n||n<0?0:n});function E(t){return p(this,void 0,void 0,(function*(){const n=yield s.har(function(e){var t,n,o,s;(null!==(n=null===(t=null==e?void 0:e.log)||void 0===t?void 0:t.entries)&&void 0!==n?n:[]).forEach(e=>{var t,n,o,s,i,a,c,l,d,p,h,m,g,f,b,y,v,x;if(delete e.serverIPAddress,e.request&&(null!==(t=(p=e.request).headersSize)&&void 0!==t||(p.headersSize=-1),e.request.postData&&(null!==(n=(h=e.request.postData).mimeType)&&void 0!==n||(h.mimeType="application/octet-stream")),e.request.cookies=[]),e.timings&&(null!==(o=(m=e.timings).send)&&void 0!==o||(m.send=-1),null!==(s=(g=e.timings).wait)&&void 0!==s||(g.wait=-1),null!==(i=(f=e.timings).receive)&&void 0!==i||(f.receive=-1)),e.response){if(null!==(a=(b=e.response).redirectURL)&&void 0!==a||(b.redirectURL=""),null!==(c=(y=e.response).headersSize)&&void 0!==c||(y.headersSize=-1),null==e.response.statusText&&(e.response.statusText=Object(u.d)(e.response.status)),null===e.response.bodySize){const t=r.find(e.response.headers||[],({name:e})=>"content-length"===e.toLowerCase());e.response.bodySize=t?parseInt(t.value,10):-1}e.response.content&&(null!==(l=(v=e.response.content).size)&&void 0!==l||(v.size=-1),null!==(d=(x=e.response.content).mimeType)&&void 0!==d||(x.mimeType="application/octet-stream")),e.response.cookies=[]}e.cache={}});return((s=(o=e===null||e===void 0?void 0:e.log)===null||o===void 0?void 0:o.pages)!==null&&s!==void 0?s:[]).forEach(e=>{void 0===e.title&&(e.title=e.id),e.pageTimings={}}),e}(t)),i=r.random(1e6)+"-",a=[],c=[];return n.log.entries.forEach((t,n)=>{var r,s,l;const d=i+n,u="websocket"===t._resourceType,p={startTime:o.parse(t.startedDateTime).getTime(),startTimestamp:0,bodyReceivedTimestamp:w(t.timings,"blocked","dns","connect","send"),headersSentTimestamp:w(t.timings,"blocked","dns","connect","send","wait")};Object.assign(p,0!==t.response.status?{responseSentTimestamp:t.time}:{abortedTimestamp:t.time},u?{wsAcceptedTimestamp:p.headersSentTimestamp,wsClosedTimestamp:t.time}:{});const h=function(e,t,n){const r=new URL(t.url);return{id:e,timingEvents:n,tags:[],matchedRuleId:!1,protocol:t.url.split(":")[0],method:t.method,url:t.url,path:r.pathname,hostname:r.hostname,headers:f(t.headers),rawHeaders:t.headers.map(e=>[e.name,e.value]),body:{decoded:t._content?C(t._content):T(t.postData),encodedLength:t.bodySize}}}(d,t.request,p);if(a.push({type:u?"websocket-request":"request",event:h}),0!==t.response.status?a.push({type:u&&101===t.response.status?"websocket-accepted":"response",event:O(d,t.response,p)}):a.push({type:"abort",event:h}),u){a.push(...null!==(s=null===(r=t._webSocketMessages)||void 0===r?void 0:r.map(t=>({type:"websocket-message-"+("send"===t.type?"received":"sent"),event:{streamId:h.id,direction:"send"===t.type?"received":"sent",isBinary:2===t.opcode,content:e.from(t.data,2===t.opcode?"base64":"utf8"),eventTimestamp:1e3*t.time-p.startTime,timingEvents:p,tags:[]}})))&&void 0!==s?s:[]);const n=t._webSocketClose;n&&"aborted"!==n?a.push({type:"websocket-close",event:{streamId:h.id,closeCode:n.code,closeReason:null!==(l=n.reason)&&void 0!==l?l:"",timingEvents:p,tags:[]}}):a.push({type:"abort",event:h})}t._pinned&&c.push(d)}),n.log._tlsErrors&&a.push(...n.log._tlsErrors.map(e=>({type:"tls-client-error",event:{failureCause:e.cause,hostname:e.hostname,remoteIpAddress:e.clientIPAddress,remotePort:e.clientPort,tags:[],timingEvents:{startTime:o.parse(e.startedDateTime).getTime(),connectTimestamp:0,failureTimestamp:e.time}}}))),{events:a,pinnedIds:c}}))}function C(t){if(t.encoding&&e.isEncoding(t.encoding))return e.from(t.text,t.encoding);throw TypeError("Invalid encoding")}function T(e){return(null==e?void 0:e.text)?Object(a.l)(e.text,"utf8"):(null==e?void 0:e.params)?Object(a.l)(i.stringify(r(e.params).groupBy(({name:e})=>e).mapValues(e=>e.map(e=>e.value||"")).valueOf())):Object(a.l)("")}function O(t,n,r){return{id:t,timingEvents:r,tags:[],statusCode:n.status,statusMessage:n.statusText,headers:f(n.headers),rawHeaders:n.headers.map(e=>[e.name,e.value]),body:{decoded:e.from(n.content.text||"",n.content.encoding||"utf8"),encodedLength:n.bodySize&&-1!==n.bodySize?n.bodySize:0}}}}).call(this,n(25).Buffer)},144:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return C}));var r=n(4),o=n(1),s=n(21),i=n(24),a=n(36),c=n(19),l=n(26),d=n(119),u=n(51),p=n(90),h=n(29),m=n(250),g=n(647),f=n(61),b=n(259),y=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},v=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))};function x(e){try{return Object.assign(new URL(e.url,`${e.protocol}://${e.hostname||"unknown.invalid"}`),{parseable:!0})}catch(t){console.log("Unparseable URL:",e.url)}}function w(e){try{return Object.assign(new URL("/[unparseable]",`${e.protocol}://${e.hostname||"unknown.invalid"}`),{parseable:!1})}catch(e){return Object.assign(new URL("http://unparseable.invalid/"),{parseable:!1})}}class E{constructor(e,t){this.decodedPromise=Object(a.c)(()=>v(this,void 0,void 0,(function*(){if(this._decoded)return this._decoded;const e=this.encoded,t=e.byteLength;this._encoded=Object(s.f)(t);try{const{decoded:t,encoded:n}=yield Object(f.b)(e,this._contentEncoding);return this._encoded=n,t}catch(e){return Object(l.d)(e),e.inputBuffer&&(this._encoded=e.inputBuffer),void Object(o.runInAction)(()=>{this.decodingError=e})}}))),"body"in e&&e.body?"buffer"in e.body?this._encoded=e.body.buffer:(this._encoded=Object(s.f)(e.body.encodedLength),this._decoded=e.body.decoded):this._encoded=Object(s.l)(""),this._contentEncoding=Object(c.c)(t["content-encoding"])}get encoded(){return this._encoded}get decoded(){return this.decodedPromise.value}cleanup(){const t=e.from([]);this._decoded=void 0,this._encoded=t,this.decodingError=void 0,this.decodedPromise=Object(a.d)(Promise.resolve(t))}}y([o.observable],E.prototype,"decodingError",void 0);class C extends p.a{constructor(e,t){super(),this._apiPromise=Object(a.c)(()=>v(this,void 0,void 0,(function*(){const e=yield this._apiMetadataPromise;if(e){yield Object(o.when)(()=>this.isCompletedRequest());try{if("openapi"===e.type)return new m.a(e,this);if("openrpc"===e.type)return yield Object(g.a)(e,this);throw console.log("Unknown API metadata type for host",this.request.parsedUrl.hostname),console.log(e),new i.a(e,e=>e.type)}catch(e){throw Object(l.d)(e),e}}}))),this.request=function(e){try{return Object.assign(e,{parsedUrl:x(e)||w(e),source:e.tags.includes("httptoolkit:manually-sent-request")?d.a:Object(d.c)(e.headers["user-agent"]),body:new E(e,e.headers),contentType:Object(u.e)(Object(c.g)(e.headers["content-type"]))||"text",cache:o.observable.map(new Map,{deep:!1})})}catch(t){throw console.log(`Failed to parse request for ${e.url} (${e.protocol}://${e.hostname})`),t}}(t),this.timingEvents=t.timingEvents,this.tags=this.request.tags,this.id=this.request.id,this.searchIndex=[this.request.url,this.request.parsedUrl.protocol+"//"+this.request.parsedUrl.hostname+this.request.parsedUrl.pathname+this.request.parsedUrl.search].concat(...r.map(this.request.headers,(e,t)=>`${t}: ${e}`)).concat(this.request.method).join("\n").toLowerCase(),this._apiMetadataPromise=e.getApi(this.request)}get httpVersion(){return"2.0"===this.request.httpVersion?2:1}isHttp(){return!0}isCompletedRequest(){return void 0!==this.matchedRule}isCompletedExchange(){return!!this.response}isSuccessfulExchange(){return this.isCompletedExchange()&&"aborted"!==this.response}hasRequestBody(){return this.isCompletedRequest()&&this.request.body.encoded.byteLength>0}hasResponseBody(){return this.isSuccessfulExchange()&&this.response.body.encoded.byteLength>0}updateFromCompletedRequest(e,t){if(e.body instanceof E)throw new Error("Can't update from already-processed request");this.request.body=new E(e,e.headers),this.matchedRule=!!t&&("handler"in t?{id:t.id,handlerStepTypes:[Object(h.h)(t.handler)]}:{id:t.id,handlerStepTypes:t.steps.map(h.h)}),Object.assign(this.timingEvents,e.timingEvents),this.tags=r.union(this.tags,e.tags)}markAborted(e){var t;this.response="aborted",this.searchIndex+="\naborted",Object.assign(this.timingEvents,e.timingEvents),this.tags=r.union(this.tags,e.tags),"error"in e&&(null===(t=e.error)||void 0===t?void 0:t.message)&&(this.abortMessage=e.error.message),this.requestBreakpoint&&(this.requestBreakpoint.reject(new Error("Request aborted whilst breakpointed at request")),this._requestBreakpoint=void 0),this.responseBreakpoint&&(this.responseBreakpoint.reject(new Error("Request aborted whilst breakpointed at response")),this._responseBreakpoint=void 0)}setResponse(e){this.response=function(e){return Object.assign(e,{body:new E(e,e.headers),contentType:Object(u.e)(Object(c.g)(e.headers["content-type"]))||"text",cache:o.observable.map(new Map,{deep:!1})})}(e),Object.assign(this.timingEvents,e.timingEvents),this.tags=r.union(this.tags,e.tags),this.searchIndex=[this.searchIndex,e.statusCode.toString(),e.statusMessage.toString(),...r.map(e.headers,(e,t)=>`${t}: ${e}`)].join("\n").toLowerCase();const t=this._apiPromise;this._apiPromise=Object(a.c)(()=>t.then(e=>(e&&e.updateWithResponse(this.response),e)))}cleanup(){this.cache.clear(),this.request.cache.clear(),this.request.body.cleanup(),this.isSuccessfulExchange()&&(this.response.cache.clear(),this.response.body.cleanup())}get api(){if("fulfilled"===this._apiPromise.state)return this._apiPromise.value}get requestBreakpoint(){return this._requestBreakpoint}get responseBreakpoint(){return this._responseBreakpoint}get isBreakpointed(){return this.requestBreakpoint||this.responseBreakpoint}triggerRequestBreakpoint(e){return v(this,void 0,void 0,(function*(){const t=yield Object(b.b)(e);Object(o.runInAction)(()=>{this._requestBreakpoint=t});const n=yield t.waitForCompletedResult();return this._requestBreakpoint===t&&Object(o.runInAction)(()=>{this._requestBreakpoint=void 0}),n}))}triggerResponseBreakpoint(e){return v(this,void 0,void 0,(function*(){const t=yield Object(b.c)(e);Object(o.runInAction)(()=>{this._responseBreakpoint=t});const n=yield t.waitForCompletedResult();return this._responseBreakpoint===t&&Object(o.runInAction)(()=>{this._responseBreakpoint=void 0}),n}))}respondToBreakpointedRequest(){this._responseBreakpoint=Object(b.a)(this.httpVersion);const e=this.requestBreakpoint;this._requestBreakpoint=void 0,this._responseBreakpoint.waitForCompletedResult().then(Object(o.action)(t=>{e.respondDirectly(t),this._responseBreakpoint=void 0}))}}y([o.observable],C.prototype,"matchedRule",void 0),y([o.observable],C.prototype,"tags",void 0),y([o.computed],C.prototype,"httpVersion",null),y([o.observable],C.prototype,"timingEvents",void 0),y([o.observable.ref],C.prototype,"response",void 0),y([o.observable],C.prototype,"abortMessage",void 0),y([o.observable.ref],C.prototype,"_apiPromise",void 0),y([o.observable.ref],C.prototype,"_requestBreakpoint",void 0),y([o.observable.ref],C.prototype,"_responseBreakpoint",void 0),y([o.computed],C.prototype,"isBreakpointed",null),y([o.action.bound],C.prototype,"respondToBreakpointedRequest",null)}).call(this,n(25).Buffer)},1480:function(e,t,n){"use strict";n.r(t);var r=n(108),o=n(26),s=n(4),i=n.n(s),a=n(0),c=n.n(a),l=n(54),d=n(1),u=n(5),p=n(2),h=n(60),m=n(256),g=n(43),f=n(9);const b="phc_udVvUwHxMPuAyAl5VKA5SHw2D9CdWr0AJYmu8mYd5qU",y="1"!==navigator.doNotTrack;const v=Object(g.format)(new Date,"YYYY-MM-DD"),x=null===localStorage.getItem("first-run-date")&&null===localStorage.getItem("theme-background-color"),w=localStorage.getItem("first-run-date"),E=null!=w?w:v;w||localStorage.setItem("first-run-date",E);const C=localStorage.getItem("last-run-date")!==v;C&&localStorage.setItem("last-run-date",v);const T=()=>({"first-run":x,"first-run-today":C,"ui-version":f.y,"server-version":"fulfilled"===f.E.state?f.E.value:void 0,"desktop-version":"fulfilled"===f.C.state?f.C.value:void 0}),O=e=>e.replace(/\/view\/[a-z0-9\-]+/,"/view").replace(/\/mock\/[a-z0-9\-]+/,"/mock").replace(/\?.*/,"");let S=[];function j(e){if(!y)return;const t=O(location.href);m.a.capture(`${e.category}:${e.action}`,{value:e.value,$current_url:t,$set_once:Object.assign({},T())})}var k=n(89),P=n(120);const R=k.parse(window.location.search.replace(/^\?/,"")),H=Object(P.f)((()=>{let e=window.history.state,t=window.location;window.addEventListener("popstate",()=>{e=window.history.state,t=window.location});const n=s.throttle((...e)=>window.history.pushState.apply(window.history,e),250,{leading:!0,trailing:!0}),r=s.throttle((...e)=>window.history.replaceState.apply(window.history,e),250,{leading:!0,trailing:!0});return{get location(){return t},addEventListener:window.addEventListener.bind(window),removeEventListener:window.removeEventListener.bind(window),history:{get state(){return e},pushState(e,r,o){n(e,r,o);let[s,i=""]=o.split("?");t=Object.assign({},window.location,{pathname:s,search:i})},replaceState(e,n,o){r(e,n,o);let[s,i=""]=o.split("?");t=Object.assign({},window.location,{pathname:s,search:i})}}}})()),q=H.navigate.bind(H);H.navigate=function(e,t={}){const[n,r]=e.split("?"),o=k.parse(r);return q(n+"?"+k.stringify(Object.assign(Object.assign({},o),R)),t)};var A=n(36),I=n(47),D=n(24),$=n(67),M=n(21),F=n(50),B=n(56),N=n(32),L=n(246),U=n(144),W=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i};class z extends U.a{constructor(e,t){super(e,t),this.accepted=!1,this.messages=[],this.searchIndex+="\nwebsocket"}isWebSocket(){return!0}setAccepted(e){const t=e.headers["sec-websocket-protocol"];s.isString(t)&&(this.subprotocol=t),this.accepted=!0,Object.assign(this.timingEvents,e.timingEvents)}wasAccepted(){return this.accepted}get selectedSubprotocol(){return this.subprotocol}addMessage(e){this.messages.push(new L.a(e,this.messages.length))}markClosed(e){this.closeData=e,Object.assign(this.timingEvents,e.timingEvents)}get closeState(){return this.closeData}markAborted(e){if(!this.wasAccepted())return super.markAborted(e);this.closeData="aborted",this.searchIndex+="\naborted",Object.assign(this.timingEvents,e.timingEvents),this.tags=s.union(this.tags,e.tags)}cleanup(){super.cleanup(),this.messages.forEach(e=>e.cleanup()),this.messages.length=0}}function _(e,t,n){let r,o=n,s=0,i=!0,a=0,c=n;for(r=0;r<e.length&&o<=t.length&&i;r++){const n=e[r].match(t,o);if(!n)return;i="full"===n.type,n.consumed>0&&(a=r,c=o),o+=n.consumed,s+=i?n.consumed:0}return{type:r===e.length&&i?"full":"partial",fullyConsumed:s,partiallyConsumed:o-n,partsMatched:r,lastConsumingPartSyntaxIndex:a,lastConsumingPartStringIndex:c}}function V(e,t,n,r){const o=e.map(({key:e,syntax:r})=>({key:e,syntax:r,match:_(r,t,n)})).filter(({match:e})=>!!e&&n+e.partiallyConsumed===t.length),[i,a]=s.partition(o,({match:e})=>"full"===e.type);if(i.length)return s.flatMap(i,({key:e,syntax:n,match:o})=>{const s=n.length-1,i=s===o.lastConsumingPartSyntaxIndex?o.lastConsumingPartStringIndex:t.length;return n[s].getSuggestions(t,i,r.context).map(t=>({key:e,suggestion:t}))});const c=s.max(a.map(({match:e})=>e.partsMatched)),l=a.filter(e=>e.match.partsMatched===c),d=s.flatMap(l,({key:e,syntax:n,match:o})=>{const s=o.lastConsumingPartSyntaxIndex,i=o.lastConsumingPartStringIndex,a=n[s],c=s===n.length-1;return a.getSuggestions(t,i,r.context).map(t=>({key:e,syntax:n,syntaxPartIndex:s,suggestion:Object.assign(Object.assign({},t),{matchType:"full"===t.matchType?c?"full":"partial":t.matchType})}))});if(1!==d.length||!1===r.canExtend)return d.map(({key:e,suggestion:t})=>({key:e,suggestion:t}));const{key:u,syntax:p,suggestion:h}=d[0];let m,g=d[0].syntaxPartIndex+1,f=[h];for(;1===f.length&&g<p.length;){const e=f[0];m||(m="template"===e.matchType?e:void 0);const n=G(t,e),o=p[g].getSuggestions(n,n.length,r.context);if(m&&o.length>1)break;if(f=o.map(t=>({value:e.value+t.value,showAs:e.showAs+t.showAs,index:e.index,matchType:t.matchType})),f.some(e=>"partial"===e.matchType))break;g+=1}const b=g===p.length;return m?[{key:u,suggestion:Object.assign(Object.assign({},m),{showAs:f[0].showAs})}]:f.map(e=>({key:u,suggestion:Object.assign(Object.assign({},e),{matchType:"full"!==e.matchType||b?e.matchType:"partial"})}))}function G(e,t){return e.slice(0,t.index)+t.value}function J(e,t){return t?[e.charCodeAt(0),t.charCodeAt(0)]:[e.charCodeAt(0),e.charCodeAt(0)]}W([d.observable],z.prototype,"accepted",void 0),W([d.observable],z.prototype,"subprotocol",void 0),W([d.action],z.prototype,"setAccepted",null),W([d.observable],z.prototype,"messages",void 0),W([d.action],z.prototype,"addMessage",null),W([d.observable],z.prototype,"closeData",void 0),W([d.action],z.prototype,"markClosed",null);const K=[J("a","z"),J("A","Z")],Y=J("0","9"),Q=[...K,Y];function X(e,t){return e>=t[0]&&e<=t[1]}const Z=(e,t)=>ee(e,t,[te]);function ee(e,t,n){let r;for(r=t;r<e.length;r++){const t=e.charCodeAt(r);if(!s.some(n,e=>X(t,e)))break}return r!==t?e.substring(t,r):r===e.length?"":void 0}const te=[48,57];function ne(e,t,n){const r=e.match(t,n);if(!r||"full"!==r.type)throw console.log("Unparseable expected-parseable input",t),new Error("Can't parse expected-parseable value");return t.slice(n,n+r.consumed)}function re(e,t,n,r,o,s){if(!n||!o)return[];const i=(r||"").toLowerCase();return o(e,t,n).filter(e=>(!i||e.toLowerCase().startsWith(i))&&s).slice(0,10).map(e=>({showAs:e,index:t,value:e,matchType:"full"}))}class oe{constructor(e){this.matcher=e}match(e,t){const n=this.matcher.toLowerCase();let r;for(r=t;r-t<this.matcher.length&&r<e.length;r++)if(n[r-t]!==e[r].toLowerCase())return;const o=r-t;return{type:o===this.matcher.length?"full":"partial",consumed:o}}getSuggestions(e,t){return[{showAs:this.matcher,index:t,value:this.matcher,matchType:"full"}]}parse(e,t){return ne(this,e,t),this.matcher}}class se{constructor(e,t={}){this.templateText=e,this.options=t,this.allowedCharRanges=t.allowedChars||se.AnyAsciiExceptSpaces,this.allowEmpty=t.allowEmpty||(()=>!1)}match(e,t){const n=ee(e,t,this.allowedCharRanges);if(void 0===n)return;const r=n.length;return{type:r>0||this.allowEmpty(e,t)?"full":"partial",consumed:r}}getSuggestions(e,t,n){const r=ee(e,t,this.allowedCharRanges),o=re(e,t,n,r,this.options.suggestionGenerator,e=>![...e].map(e=>e.charCodeAt(0)).some(e=>!this.allowedCharRanges.some(t=>X(e,t))));return r?[{showAs:r,index:t,value:r,matchType:"full"},...o.filter(e=>e.value!==r)]:[{showAs:`{${this.templateText}}`,index:t,value:"",matchType:"template"},...this.allowEmpty(e,t)&&""===r?[{showAs:"",index:t,value:"",matchType:"full"}]:[],...o]}parse(e,t){return ne(this,e,t)}}se.AnyAsciiExceptSpaces=[J("!","~")];class ie{constructor(e,t,n={}){this.wrapper=e,this.wrappedSyntax=t,this.optional=!!n.optional}match(e,t){let n,r=t;if(void 0===e[r])return{type:"partial",consumed:0};if(e[r]===this.wrapper[0])r+=1,n=!0;else{if(!this.optional)return;n=!1}const o=n?this.wrapper[1]:" ",s=e.slice(r).indexOf(o),i=-1!==s?e.slice(0,r+s):e,a=this.wrappedSyntax.match(i,r);if(a){if(r+=a.consumed,"full"!==a.type)return{type:"partial",consumed:r-t};if(n){if(void 0===e[r])return{type:"partial",consumed:r-t};if(e[r]!==this.wrapper[1])return;r+=1}return{type:"full",consumed:r-t}}}getSuggestions(e,t,n){const r=e[t]===this.wrapper[0],o=!this.optional||r?this.wrapper[1]:" ",s=e.slice(t).indexOf(o),i=-1!==s?e.slice(0,t+s):e,a=r?t+1:t;return this.wrappedSyntax.getSuggestions(i,a,n).map(t=>{const n=!this.optional||t.value.includes(" "),o=n&&!r,s=(n||r)&&"full"===t.matchType?this.wrapper[1]:"",i=(n||r)&&("full"===t.matchType||"template"===t.matchType)?this.wrapper[1]:"";if(o){const n=this.wrapper[0]+e.slice(a,t.index)+t.value+s,r=this.wrapper[0]+e.slice(a,t.index)+t.showAs+i;return Object.assign(Object.assign({},t),{showAs:r,value:n,index:a})}return Object.assign(Object.assign({},t),{showAs:t.showAs+i,value:t.value+s})})}parse(e,t){const n=e[t]===this.wrapper[0],r=-1!==e.slice(t).indexOf(this.wrapper[1]),o=!this.optional||n&&r,s=o?this.wrapper[1]:" ",i=e.slice(t).indexOf(s),a=-1!==i?e.slice(0,t+i):e;return this.wrappedSyntax.parse(a,o?t+1:t)}}class ae{constructor(e="number"){this.stringSyntax=new se(e,{allowedChars:[te]})}match(e,t){return this.stringSyntax.match(e,t)}getSuggestions(e,t){return this.stringSyntax.getSuggestions(e,t)}parse(e,t){const n=this.stringSyntax.parse(e,t);return parseInt(n,10)}}class ce{constructor(e){this.options=e}match(e,t){const n=this.options.map(n=>n.match(e,t)).filter(e=>!!e),[r,o]=s.partition(n,{type:"full"}),i=r.length?r:o;return s.maxBy(i,e=>e.consumed)}getSuggestions(e,t,n){const r=this.options.map(n=>({option:n,match:n.match(e,t)})).filter(({match:e})=>!!e);if(r.some(({match:e})=>"full"===e.type)){const o=r.filter(({match:e})=>"full"===e.type);return s.maxBy(o,({match:e})=>e.consumed).option.getSuggestions(e,t,n)}return s.flatMap(r,({option:o})=>r.length>1&&o instanceof de?o.getSuggestions(e,t,Object.assign({},n,{canExtend:!1})):o.getSuggestions(e,t,n))}parse(e,t){const n=this.options.map(n=>({option:n,match:n.match(e,t)})).filter(({match:e})=>"full"===(null==e?void 0:e.type));return s.maxBy(n,({match:e})=>e.consumed).option.parse(e,t)}}class le extends ce{constructor(e){super(e.map(e=>new oe(e)))}}class de{constructor(...e){this.subParts=e}match(e,t){const n=_(this.subParts,e,t);return n?{type:null==n?void 0:n.type,consumed:null==n?void 0:n.partiallyConsumed}:void 0}getSuggestions(e,t,n){return V([{key:null,syntax:this.subParts}],e,t,{context:n,canExtend:null==n?void 0:n.canExtend}).map(({suggestion:e})=>e)}parse(e,t){return s.reduce(this.subParts,(n,r)=>{const o=r.parse(e,t);return t+=o.toString().length,n.push(o),n},[])}}class ue{constructor(e){this.filterString=e}serialize(){return this.filterString}get filterDescription(){return this.constructor.filterDescription(this.filterString,!1)}}const pe=()=>[new he("")];class he extends ue{constructor(e=""){super(e),this.filter=e}matches(e){if(""===this.filter)return!0;const t=this.filter.toLocaleLowerCase();return e.searchIndex.includes(t)}toString(){return`"${this.filter}"`}}const me={"=":(e,t)=>e===t,"!=":(e,t)=>e!==t},ge=Object.assign(Object.assign({},me),{">":(e,t)=>e>t,">=":(e,t)=>e>=t,"<":(e,t)=>e<t,"<=":(e,t)=>e<=t}),fe=Object.assign(Object.assign({},me),{"*=":(e,t)=>e.includes(t),"^=":(e,t)=>e.startsWith(t),"$=":(e,t)=>e.endsWith(t)}),be={"=":(e,t)=>e.equals(t),"!=":(e,t)=>!e.equals(t),"*=":(e,t)=>e.includes(t),"^=":(e,t)=>e.slice(0,t.length).equals(t),"$=":(e,t)=>e.slice(-t.length).equals(t)},ye={"=":"equal to","!=":"not equal to",">":"greater than",">=":"greater than or equal to","<":"less than","<=":"less than or equal to","*=":"containing","^=":"starting with","$=":"ending with"},ve=Object.assign(Object.assign({},ye),{">":"larger than",">=":"larger than or equal to","<":"smaller than","<=":"smaller than or equal to"});function xe(e,t){let n=0;const r=[];for(let o of e.filterSyntax)r.push(o.parse(t,n)),n+=o.match(t,n).consumed;return r}function we(e,t){return Ee(t,...e.filterSyntax)}function Ee(e,...t){let n=0;const r=[];for(let o of t){const t=o.match(e,n);if(!t||"full"!==t.type)break;r.push(o.parse(e,n)),n+=t.consumed}return r}class Ce extends ue{static filterDescription(e){var t;const[,n,r]=we(Ce,e);if(!n||"="==n&&!r)return"responses with a given status code";if(r){const e=null===(t=Object(F.c)(r))||void 0===t?void 0:t.message,o="="!==n&&"!="!==n||!e?"":` (${e})`;return"="===n?`responses with status ${r}${o}`:`responses with a status ${ye[n]} ${r}${o}`}return`responses with a status ${ye[n]} a given value`}constructor(e){super(e),[,this.op,this.status]=xe(Ce,e),this.predicate=ge[this.op]}matches(e){return e.isHttp()&&e.isSuccessfulExchange()&&this.predicate(e.response.statusCode,this.status)}toString(){return`Status ${this.op} ${this.status}`}}Ce.filterSyntax=[new oe("status"),new le(["=","!=",">=",">","<=","<"]),new class{constructor(e,t={}){this.requiredLength=e,this.options=t}match(e,t){const n=Z(e,t);if(void 0===n)return;const r=n.length;return r===this.requiredLength?{type:"full",consumed:r}:r<this.requiredLength?{type:"partial",consumed:r}:void 0}getSuggestions(e,t,n){const r=Z(e,t),o=re(e,t,n,r,this.options.suggestionGenerator,e=>e.length===this.requiredLength&&![...e].map(e=>e.charCodeAt(0)).some(e=>!X(e,te)));if(r){if(o.length)return o;{const e=r+s.repeat("0",this.requiredLength-r.length);return[{showAs:e,index:t,value:e,matchType:"full"}]}}return[{showAs:`{${this.requiredLength}-digit number}`,index:t,value:"",matchType:"template"},...o]}parse(e,t){const n=ne(this,e,t);return parseInt(n,10)}}(3,{suggestionGenerator:(e,t,n)=>s(n).map(e=>"response"in e&&e.isSuccessfulExchange()&&e.response.statusCode.toString()).uniq().filter(Boolean).sort().valueOf()})],Ce.filterName="status";class Te extends ue{static filterDescription(e){return"requests that have received a response"}matches(e){return e.isHttp()&&e.isSuccessfulExchange()}toString(){return"Completed"}}Te.filterSyntax=[new oe("completed")],Te.filterName="completed";class Oe extends ue{static filterDescription(e){return"requests that are still waiting for a response"}matches(e){return e.isHttp()&&!e.isCompletedExchange()}toString(){return"Pending"}}Oe.filterSyntax=[new oe("pending")],Oe.filterName="pending";class Se extends ue{static filterDescription(e){return"requests whose connection failed before receiving a response"}matches(e){return e.isHttp()&&"aborted"===e.response}toString(){return"Aborted"}}Se.filterSyntax=[new oe("aborted")],Se.filterName="aborted";class je extends ue{static filterDescription(e){return"requests that weren't transmitted successfully"}matches(e){return!e.isHttp()||e.tags.some(e=>e.startsWith("client-error")||e.startsWith("passthrough-error"))}toString(){return"Error"}}je.filterSyntax=[new oe("errored")],je.filterName="error";class ke extends ue{static filterDescription(e){return"exchanges that are pinned"}matches(e){return e.pinned}toString(){return"Pinned"}}ke.filterSyntax=[new oe("pinned")],ke.filterName="pinned";class Pe extends ue{static filterDescription(e){const[,,t]=we(Pe,e);return t?`all ${t} exchanges`:"exchanges by their general category"}constructor(e){super(e);const[,,t]=xe(Pe,e);this.expectedCategory=t}matches(e){return e.isHttp()&&e.category===this.expectedCategory}toString(){return s.startCase(this.expectedCategory)}}Pe.filterSyntax=[new oe("category"),new oe("="),new le(N.a)],Pe.filterName="category";class Re extends ue{static filterDescription(e){const[,t,n]=we(Re,e);return t?"="===t?n?n.toUpperCase()+" requests":"requests with a given method":n?`non-${n.toUpperCase()} requests`:"requests not sent with a given method":"requests with a given method"}constructor(e){super(e);const[,t,n]=xe(Re,e);this.op=t,this.predicate=me[this.op],this.expectedMethod=n.toUpperCase()}matches(e){return e.isHttp()&&this.predicate(e.request.method.toUpperCase(),this.expectedMethod)}toString(){return`Method ${this.op} ${this.expectedMethod}`}}Re.filterSyntax=[new oe("method"),new le(["=","!="]),new se("method",{allowedChars:K,suggestionGenerator:(e,t,n)=>s(n).map(e=>e.isHttp()&&e.request.method).uniq().filter(Boolean).valueOf()})],Re.filterName="method";class He extends ue{static filterDescription(e){const[,,t]=we(He,e);return t?"exchanges using HTTP/"+t:"exchanges using a given version of HTTP"}constructor(e){super(e);const[,,t]=xe(He,e);this.expectedVersion=parseInt(t,10)}matches(e){return e.isHttp()&&e.httpVersion===this.expectedVersion}toString(){return"HTTP "+this.expectedVersion}}He.filterSyntax=[new oe("httpVersion"),new oe("="),new le(["1","2"])],He.filterName="httpVersion";class qe extends ue{static filterDescription(){return"websocket streams"}constructor(e){super(e)}matches(e){return e instanceof z}toString(){return"WebSocket"}}qe.filterSyntax=[new oe("websocket")],qe.filterName="websocket";class Ae extends ue{static filterDescription(e){const[,,t]=we(Ae,e);return t?"exchanges using "+t.toUpperCase():"exchanges using HTTP, HTTPS, WS or WSS"}constructor(e){super(e);const[,,t]=xe(Ae,e);this.expectedProtocol=t.toLowerCase()}matches(e){if(!e.isHttp())return!1;return e.request.parsedUrl.protocol.toLowerCase().slice(0,-1)===this.expectedProtocol}toString(){return""+this.expectedProtocol.toUpperCase()}}Ae.filterSyntax=[new oe("protocol"),new oe("="),new le(["http","https","ws","wss"])],Ae.filterName="protocol";class Ie extends ue{static filterDescription(e){const[,t,n]=we(Ie,e);return!t||!n&&"="===t?"requests sent to a given hostname":"="===t?"requests to "+n:`requests to a hostname ${ye[t]} ${n||"a given value"}`}constructor(e){super(e);const[,t,n]=xe(Ie,e);this.op=t,this.predicate=fe[t],this.expectedHostname=n.toLowerCase()}matches(e){return e.isHttp()&&this.predicate(e.request.parsedUrl.hostname.toLowerCase(),this.expectedHostname)}toString(){return`Hostname ${this.op} ${this.expectedHostname}`}}Ie.filterSyntax=[new oe("hostname"),new le(["=","!=","*=","^=","$="]),new se("hostname",{allowedChars:[...Q,J("-"),J(".")],suggestionGenerator:(e,t,n)=>s(n).map(e=>e.isHttp()&&e.request.parsedUrl.hostname.toLowerCase()).uniq().filter(Boolean).valueOf()})],Ie.filterName="hostname";const De={"http:":80,"https:":443};class $e extends ue{static filterDescription(e){const[,t,n]=we($e,e);return!t||!n&&"="===t?"requests sent to a given port":"="===t?"requests to port "+n:`requests to a port ${ye[t]} ${n||"a given port"}`}constructor(e){super(e),[,this.op,this.expectedPort]=xe($e,e),this.predicate=ge[this.op]}matches(e){if(!e.isHttp())return!1;const{protocol:t,port:n}=e.request.parsedUrl,r=parseInt((n||De[t]||0).toString(),10);return e.isHttp()&&this.predicate(r,this.expectedPort)}toString(){return`Port ${this.op} ${this.expectedPort}`}}$e.filterSyntax=[new oe("port"),new le(["=","!=",">=",">","<=","<"]),new ae("port")],$e.filterName="port";class Me extends ue{static filterDescription(e){const[,t,n]=we(Me,e);return!t||!n&&"="===t?"requests sent to a given path":"="===t?"requests to "+n:`requests to a path ${ye[t]} ${n||"a given path"}`}constructor(e){super(e),[,this.op,this.expectedPath]=xe(Me,e),this.predicate=fe[this.op]}matches(e){return e.isHttp()&&this.predicate(e.request.parsedUrl.pathname,this.expectedPath)}toString(){return`Path ${this.op} ${this.expectedPath}`}}Me.filterSyntax=[new oe("path"),new le(["=","!=","*=","^=","$="]),new se("path",{suggestionGenerator:(e,t,n)=>s(n).map(e=>e.isHttp()&&e.request.parsedUrl.pathname).uniq().filter(Boolean).valueOf()})],Me.filterName="path";class Fe extends ue{static filterDescription(e,t){const[,n,r]=we(Fe,e);return n?void 0===r||t?"="===n?"requests with a given query string":`requests with a query string ${ye[n]} a given query string`:""===r?"="===n?"requests with an empty query string":"requests with a non-empty query string":`requests with a query string ${ye[n]} ${r}`:"requests with a given query string"}constructor(e){super(e),[,this.op,this.expectedQuery]=xe(Fe,e),this.predicate=fe[this.op]}matches(e){return e.isHttp()&&this.predicate(e.request.parsedUrl.search,this.expectedQuery)}toString(){return`Query ${this.op} ${this.expectedQuery}`}}Fe.filterSyntax=[new oe("query"),new le(["=","!=","*=","^=","$="]),new se("query",{allowEmpty:(e,t)=>{const n=e.slice(0,t).lastIndexOf("query")+"query".length,r=Fe.filterSyntax[1].parse(e,n);return"="===r||"!="===r},suggestionGenerator:(e,t,n)=>s(n).map(e=>e.isHttp()&&e.request.parsedUrl.search).uniq().filter(Boolean).valueOf()})],Fe.filterName="query";const Be=e=>e.isHttp()?[...Object.entries(e.request.headers),...e.isSuccessfulExchange()?Object.entries(e.response.headers):[]]:[];class Ne extends ue{static filterDescription(e){const[,t,n]=we(Ne,e);return t?`exchanges with any header value ${ye[t]} ${n?`'${n}'`:"a given string"}`:"exchanges by all header values"}constructor(e){super(e);const[,t,n]=xe(Ne,e);this.op=t,this.predicate=fe[t],this.expectedHeaderValue=n.toLowerCase()}matches(e){if(!e.isHttp())return!1;const t=Be(e),{predicate:n,expectedHeaderValue:r}=this;return s(t).flatMap(([e,t])=>null!=t?t:[]).some(e=>n(e.toLowerCase(),r))}toString(){return`Any header ${this.op} ${this.expectedHeaderValue}`}}Ne.filterSyntax=[new oe("headers"),new le(["=","*=","^=","$="]),new ie(["[","]"],new se("header value",{allowedChars:[[0,255]],suggestionGenerator:(e,t,n)=>s(n).map(e=>s(Be(e)).map(([e,t])=>Array.isArray(t)?t:[t]).flatten().valueOf()).flatten().uniq().valueOf()}),{optional:!0})],Ne.filterName="headers";class Le extends ue{static filterDescription(e){const[,t]=we(Le,e),[n,r]=Ee(e.slice("header[]".length+(t||"").length),...Le.valueMatchSyntax);return t?n?`exchanges with a '${t}' header ${ye[n]} ${r?`'${r}'`:"a given value"}`:`exchanges with a '${t}' header`:"exchanges by a specific header"}constructor(e){super(e);const[,t,[n,r]]=xe(Le,e);this.expectedHeaderName=t.toLowerCase(),n&&r&&(this.op=n,this.predicate=fe[n],this.expectedHeaderValue=r.toLowerCase())}matches(e){if(!e.isHttp())return!1;const t=Be(e),{predicate:n,expectedHeaderValue:r}=this;return n&&r?s(t).filter(([e])=>e.toLowerCase()===this.expectedHeaderName).flatMap(([e,t])=>null!=t?t:[]).some(e=>n(e.toLowerCase(),r)):t.some(([e])=>e.toLowerCase()===this.expectedHeaderName)}toString(){return this.op?`${this.expectedHeaderName} ${this.op} ${this.expectedHeaderValue}`:`Has ${this.expectedHeaderName} header`}}Le.valueMatchSyntax=[new le(["=","!=","*=","^=","$="]),new ie(["[","]"],new se("header value",{allowedChars:[[0,255]],suggestionGenerator:(e,t,n)=>{const r=e.slice(0,t-1).lastIndexOf("["),o=Le.filterSyntax[1].parse(e,r).toLowerCase();return s(n).map(e=>s(Be(e)).filter(([e])=>e.toLowerCase()===o).map(([e,t])=>Array.isArray(t)?t:[t]).flatten().valueOf()).flatten().uniq().valueOf()}}),{optional:!0})],Le.filterSyntax=[new oe("header"),new ie(["[","]"],new se("header name",{suggestionGenerator:(e,t,n)=>s(n).map(e=>Be(e).map(([e])=>e.toLowerCase())).flatten().uniq().valueOf()})),new class{constructor(...e){this.subParts=e}match(e,t){if(t>=e.length)return{type:"full",consumed:0};const n=_(this.subParts,e,t);return n?"full"===n.type?{type:"full",consumed:n.fullyConsumed}:t+n.partiallyConsumed===e.length?{type:"partial",consumed:n.partiallyConsumed}:{type:"full",consumed:0}:{type:"full",consumed:0}}getSuggestions(e,t,n){const r=this.match(e,t),o=V([{key:null,syntax:this.subParts}],e,t,{context:n}).map(({suggestion:e})=>e);return e.length===t?[{showAs:"",index:t,value:"",matchType:"full"},...o]:"full"===(null==r?void 0:r.type)&&0===(null==r?void 0:r.consumed)?[{showAs:"",index:t,value:"",matchType:"full"}]:o}parse(e,t){const n=this.match(e,t);return n&&0!==n.consumed?s.reduce(this.subParts,(n,r)=>{const o=r.parse(e,t);return t+=o.toString().length,n.push(o),n},[]):[]}}(...Le.valueMatchSyntax)],Le.filterName="header";class Ue extends ue{static filterDescription(e){const[,t,n]=we(Ue,e);return t?`exchanges with a body ${ve[t]} ${void 0!==n?Object(B.a)(n):"a given size"}`:"exchanges by body size"}constructor(e){super(e),[,this.op,this.expectedSize]=xe(Ue,e),this.predicate=ge[this.op]}matches(e){if(!e.isHttp())return!1;const t=e.request.body,n=e.isSuccessfulExchange()?e.response.body:void 0,r=t.encoded.byteLength+((null==n?void 0:n.encoded.byteLength)||0);return e.isHttp()&&this.predicate(r,this.expectedSize)}toString(){return`Size ${this.op} ${this.expectedSize}`}}Ue.filterSyntax=[new oe("bodySize"),new le(["=","!=",">=",">","<=","<"]),new ae("size")],Ue.filterName="bodySize";class We extends ue{static filterDescription(e){const[,t,n]=we(We,e);return t?`exchanges with a body ${ye[t]} ${n||"a given value"}`:"exchanges by body content"}constructor(e){super(e);const[,t,n]=xe(We,e);this.op=t,this.expectedBody=Object(M.l)(n),this.predicate=be[this.op]}matches(e){if(!e.isHttp())return!1;if(!e.hasRequestBody()&&!e.hasResponseBody())return!1;const t=e.request.body.decoded,n=e.isSuccessfulExchange()?e.response.body.decoded:void 0,r=!!t&&t.byteLength>0&&this.predicate(t,this.expectedBody),o=!!n&&n.byteLength>0&&this.predicate(n,this.expectedBody);return r||o}toString(){return`Body ${this.op} ${this.expectedBody}`}}We.filterSyntax=[new oe("body"),new le(["=","!=","*=","^=","$="]),new ie(["[","]"],new se("body content",{allowedChars:[[0,1/0]]}),{optional:!0})],We.filterName="body";class ze extends ue{static filterDescription(e){const[,t]=we(ze,e);return`exchanges that contain ${t?`'${t.toLowerCase()}'`:"a given value"} anywhere`}constructor(e){super(e);const[,t]=xe(ze,e);this.expectedContent=t.toLowerCase()}matches(e){let t;return t=e.isHttp()?[e.request.method,e.request.url,...Object.entries(e.request.rawHeaders).map(([e,t])=>`${e}: ${t}`),e.request.body.decoded,...e.isSuccessfulExchange()?[e.response.statusCode,e.response.statusMessage,...Object.entries(e.response.rawHeaders).map(([e,t])=>`${e}: ${t}`),e.response.body.decoded]:[],...e.isWebSocket()?e.messages.map(e=>e.content):[]]:e.isRTCConnection()?[e.clientURL,e.remoteURL]:e.isRTCDataChannel()?[...e.messages.map(e=>e.content),e.label,e.protocol]:e.isTlsTunnel()?[e.upstreamHostname,e.upstreamPort]:e.isTlsFailure()?[e.upstreamHostname]:[],t.some(e=>!!e&&(0!==e.length&&e.toString().toLowerCase().includes(this.expectedContent)))}toString(){return`Contains(${this.expectedContent})`}}ze.filterSyntax=[new oe("contains"),new ie(["(",")"],new se("content",{allowedChars:[[0,1/0]]}))],ze.filterName="contains";const _e=[Re,Ie,Me,Fe,Ce,Ne,Le,We,Ue,ze,Te,Oe,Se,je,ke,Pe,$e,Ae,He,qe];class Ve extends ue{static filterDescription(e,t){const n=e.slice(4,-1);if(0===n.length)return"exchanges that do not match a given condition";{const e=_e.map(e=>({filter:e,match:_(e.filterSyntax,n,0)})).filter(({match:e})=>((null==e?void 0:e.partiallyConsumed)||0)>0),r=s.maxBy(e,e=>e.match.partiallyConsumed);return"excluding "+(r?r.filter.filterDescription(n,t):"...")}}constructor(e){super(e),this.filterValue=e;const t=e.slice(4,-1),n=s.find(_e,e=>{var n;return"full"===(null===(n=_(e.filterSyntax,t,0))||void 0===n?void 0:n.type)});this.innerFilter=new n(t)}matches(e){return!this.innerFilter.matches(e)}toString(){return`not(${this.innerFilter.toString()})`}}Ve.innerFilterSyntax=new ce(_e.map(e=>new de(...e.filterSyntax))),Ve.filterSyntax=[new oe("not"),new ie(["(",")"],Ve.innerFilterSyntax)],Ve.filterName="not";class Ge extends ue{static filterDescription(e,t){")"===e[e.length-1]&&(e=e.slice(0,-1));const n=e.slice(3).split(",").map(e=>e.trim());if(1===n.length&&0===n[0].length)return"exchanges that match any one of multiple conditions";{const e=n.map((e,r)=>{const o=r===n.length-1,i=t&&o,a=_e.map(t=>({filter:t,match:_(t.filterSyntax,e,0)})).filter(({match:e})=>((null==e?void 0:e.partiallyConsumed)||0)>0),c=s.maxBy(a,e=>e.match.partiallyConsumed);return c?c.filter.filterDescription(e,i):"..."});return e.length<2&&e.push("..."),Object($.b)(e,", ",", or ")}}constructor(e){super(e),this.filterValue=e,this.innerFilters=e.slice(3,-1).split(",").map(e=>e.trim()).map(e=>new(s.find(_e,t=>{var n;return"full"===(null===(n=_(t.filterSyntax,e,0))||void 0===n?void 0:n.type)}))(e))}matches(e){return this.innerFilters.some(t=>t.matches(e))}toString(){return Object($.b)(this.innerFilters.map(e=>e.toString()),", "," or ")}}Ge.innerFilterSyntax=new class{constructor(e,t,n={}){var r,o;this.delimiterString=e,this.wrappedSyntax=t,this.minimumRepetitions=null!==(r=n.minimumRepetitions)&&void 0!==r?r:2,this.placeholderName=null!==(o=n.placeholderName)&&void 0!==o?o:"value",this.delimiterSyntax=new oe(this.delimiterString)}matchSyntaxOnly(e,t){const{wrappedSyntax:n,delimiterString:r,delimiterSyntax:o}=this;let s=t,i=0,a=0;for(;;){const c=e.slice(s).indexOf(r),l=e.slice(0,-1!==c?s+c:void 0),d=n.match(l,s);if(!d)return{matchCount:i,type:"full",consumed:a-t};if(s+=d.consumed,a=s,"partial"===d.type)return{matchCount:i,type:"partial",consumed:s-t};i+=1;const u=o.match(e,s);if(!u||0===u.consumed)return{matchCount:i,type:"full",consumed:s-t};if("partial"===u.type)return{matchCount:i,type:"partial",consumed:u.consumed+(s-t)};for(s+=u.consumed;" "===e[s];)s+=1}}match(e,t){const{minimumRepetitions:n}=this,{matchCount:r,type:o,consumed:s}=this.matchSyntaxOnly(e,t);return 0===s?n<=0?{type:"full",consumed:s}:{type:"partial",consumed:s}:"full"===o?r>=n?{type:"full",consumed:s}:t+s===e.length?{type:"partial",consumed:s}:void 0:{type:o,consumed:s}}getSuggestions(e,t,n){const{wrappedSyntax:r,delimiterSyntax:o,delimiterString:s,minimumRepetitions:i}=this;let a=t,c=0;for(;;){const t=e.slice(a).indexOf(s),l=e.slice(0,-1!==t?a+t:void 0),d=r.match(l,a);if(!d)return[{matchType:"full",index:c>0?a-s.length:a,showAs:"",value:""}];if("partial"===d.type){const t=r.getSuggestions(e,a,n);return c+1<i?t.map(e=>Object.assign(Object.assign({},e),{matchType:"full"===e.matchType?"partial":e.matchType})):t}a+=d.consumed,c+=1;const u=o.match(e,a);if(!u)return[{matchType:"full",index:a,showAs:"",value:""}];if("partial"===u.type||void 0===e[a+u.consumed]){const e=[{showAs:`${s} {another ${this.placeholderName}}`,index:a,value:s+" ",matchType:"template"}];return 0===u.consumed&&c>=i&&e.unshift({showAs:"",index:a,value:"",matchType:"full"}),e}for(a+=u.consumed;" "===e[a];)a+=1}}parse(e,t){const n=this.match(e,t);if("full"===n.type&&0===n.consumed)return[];return e.slice(t,t+n.consumed).split(this.delimiterString).map(e=>this.wrappedSyntax.parse(e.trim(),0))}}(",",new ce(_e.map(e=>new de(...e.filterSyntax))),{placeholderName:"condition"}),Ge.filterSyntax=[new oe("or"),new ie(["(",")"],Ge.innerFilterSyntax)],Ge.filterName="or";const Je=[..._e,Ve,Ge];var Ke=n(118);function Ye(e,t=[]){return e.map((e,n)=>{if("separator"===e.type)return e;if("submenu"===e.type)return Object.assign(Object.assign({},e),{items:Ye(e.items,t.concat(n+".items"))});if("option"===e.type)return Object.assign(Object.assign({},e),{callback:void 0,id:t.concat(n).join(".")});throw new D.a(e,e=>e.type)})}var Qe=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},Xe=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))};const Ze=["requestBody","responseBody","webSocketMessages"],et=e=>Ze.includes(e),tt=e=>e.startsWith("request"),nt=e=>e.startsWith("response"),rt=["requestHeaders","requestBody"],ot=["responseHeaders","responseBody"],st=e=>rt.includes(e)||ot.includes(e);class it{constructor(e){this.accountStore=e,this.initialized=Object(A.c)(()=>Xe(this,void 0,void 0,(function*(){yield this.accountStore.initialized,Object(d.autorun)(()=>{document.querySelector("html").style.backgroundColor=this.theme.containerBackground,localStorage.setItem("theme-background-color",this.theme.containerBackground)}),Object(d.observe)(this.accountStore,"accountDataLastUpdated",()=>{this.accountStore.isPaidUser||this.setTheme("light")}),yield Object(I.a)({key:"ui-store",store:this});const e=window.matchMedia("(prefers-color-scheme: dark)");this._setPrefersDarkTheme(e.matches),e.addEventListener("change",e=>{this._setPrefersDarkTheme(e.matches)}),console.log("UI store initialized")}))),this._themeName="light",this._prefersDarkTheme=!1,this.customTheme=void 0,this.viewCardStates={api:{collapsed:!0},request:{collapsed:!1},requestBody:{collapsed:!1},response:{collapsed:!1},responseBody:{collapsed:!1},webSocketMessages:{collapsed:!1},webSocketClose:{collapsed:!1},rtcConnection:{collapsed:!1},rtcSessionOffer:{collapsed:!1},rtcSessionAnswer:{collapsed:!1},performance:{collapsed:!0},export:{collapsed:!0}},this.sendCardStates={requestHeaders:{collapsed:!1},requestBody:{collapsed:!1},responseHeaders:{collapsed:!1},responseBody:{collapsed:!1}},this.settingsCardStates={account:{collapsed:!1},proxy:{collapsed:!1},connection:{collapsed:!1},api:{collapsed:!1},themes:{collapsed:!1}},this.previousElectronAppPaths=[],this.activeFilterSet=pe(),this._customFilters={},this.preferredShell="Bash"}setTheme(e){"string"==typeof e?(this._themeName=e,this.customTheme=void 0):(this._themeName="custom",this.customTheme=e)}get themeName(){return this._themeName}_setPrefersDarkTheme(e){this._prefersDarkTheme=e}get theme(){switch(this.themeName){case"automatic":return Object.assign({},p.d[this._prefersDarkTheme?"dark":"light"]);case"custom":return this.customTheme;default:return p.d[this.themeName]}}get viewCardProps(){return s.mapValues(this.viewCardStates,(e,t)=>({key:t,expanded:t===this.animatedExpansionCard?"starting":t===this.expandedViewCard,collapsed:e.collapsed&&t!==this.expandedViewCard,onCollapseToggled:this.toggleViewCardCollapsed.bind(this,t),onExpandToggled:et(t)?this.toggleViewCardExpanded.bind(this,t):s.noop}))}toggleViewCardCollapsed(e){const t=this.viewCardStates[e];t.collapsed=!t.collapsed,this.expandedViewCard=void 0}toggleViewCardExpanded(e){this.expandedViewCard===e?this.expandedViewCard=void 0:et(e)&&(this.viewCardStates[e].collapsed=!1,this.expandedViewCard=e,this.animatedExpansionCard=e,requestAnimationFrame(Object(d.action)(()=>{this.animatedExpansionCard=void 0})))}get sendCardProps(){return s.mapValues(this.sendCardStates,(e,t)=>{const n=t===this.animatedExpansionCard?"starting":t===this.expandedSendRequestCard||t===this.expandedSentResponseCard;return{key:t,expanded:n,collapsed:e.collapsed&&!n,onCollapseToggled:this.toggleSendCardCollapsed.bind(this,t),onExpandToggled:st(t)?this.toggleSendCardExpanded.bind(this,t):s.noop}})}toggleSendCardCollapsed(e){const t=this.sendCardStates[e];if(t.collapsed=!t.collapsed,tt(e))this.expandedSendRequestCard=void 0;else{if(!nt(e))throw new D.a(e);this.expandedSentResponseCard=void 0}}toggleSendCardExpanded(e){const t=tt(e)?"expandedSendRequestCard":nt(e)?"expandedSentResponseCard":Object(D.d)(e);this[t]===e?this[t]=void 0:st(e)&&(this.sendCardStates[e].collapsed=!1,this[t]=e,this.animatedExpansionCard=e,requestAnimationFrame(Object(d.action)(()=>{this.animatedExpansionCard=void 0})))}get settingsCardProps(){return s.mapValues(this.settingsCardStates,(e,t)=>({key:t,collapsed:e.collapsed,onCollapseToggled:this.toggleSettingsCardCollapsed.bind(this,t)}))}toggleSettingsCardCollapsed(e){const t=this.settingsCardStates[e];t.collapsed=!t.collapsed,this.expandedViewCard=void 0}rememberElectronPath(e){this.previousElectronAppPaths.includes(e)||this.previousElectronAppPaths.unshift(e),this.previousElectronAppPaths=this.previousElectronAppPaths.slice(0,3)}forgetElectronPath(e){this.previousElectronAppPaths=this.previousElectronAppPaths.filter(t=>t!=e)}get customFilters(){return this.accountStore.isPaidUser?this._customFilters:{}}handleContextMenuEvent(e,t,n){if(t.length)if(e.preventDefault(),Ke.a.openContextMenu){const r={x:e.pageX,y:e.pageY};this.contextMenuState=void 0,Ke.a.openContextMenu({position:r,items:Ye(t)}).then(e=>{if(e){s.get(t,e).callback(n)}}).catch(e=>{throw console.log(e),new Error("Error opening context menu")})}else e.persist(),this.contextMenuState={data:n,event:e,items:t}}clearHtmlContextMenu(){this.contextMenuState=void 0}}Qe([d.action.bound],it.prototype,"setTheme",null),Qe([I.b,d.observable],it.prototype,"_themeName",void 0),Qe([d.observable],it.prototype,"_prefersDarkTheme",void 0),Qe([d.action.bound],it.prototype,"_setPrefersDarkTheme",null),Qe([Object(I.b)("object"),d.observable],it.prototype,"customTheme",void 0),Qe([d.computed],it.prototype,"theme",null),Qe([d.observable],it.prototype,"animatedExpansionCard",void 0),Qe([d.observable],it.prototype,"viewCardStates",void 0),Qe([d.observable],it.prototype,"expandedViewCard",void 0),Qe([d.computed],it.prototype,"viewCardProps",null),Qe([d.action],it.prototype,"toggleViewCardCollapsed",null),Qe([d.action],it.prototype,"toggleViewCardExpanded",null),Qe([d.observable],it.prototype,"sendCardStates",void 0),Qe([d.observable],it.prototype,"expandedSendRequestCard",void 0),Qe([d.observable],it.prototype,"expandedSentResponseCard",void 0),Qe([d.computed],it.prototype,"sendCardProps",null),Qe([d.action],it.prototype,"toggleSendCardCollapsed",null),Qe([d.action],it.prototype,"toggleSendCardExpanded",null),Qe([d.observable],it.prototype,"settingsCardStates",void 0),Qe([d.computed],it.prototype,"settingsCardProps",null),Qe([d.action],it.prototype,"toggleSettingsCardCollapsed",null),Qe([d.action.bound],it.prototype,"rememberElectronPath",null),Qe([d.action.bound],it.prototype,"forgetElectronPath",null),Qe([Object(I.b)("list"),d.observable],it.prototype,"previousElectronAppPaths",void 0),Qe([d.observable],it.prototype,"activeFilterSet",void 0),Qe([Object(I.b)("object"),d.observable],it.prototype,"_customFilters",void 0),Qe([d.computed],it.prototype,"customFilters",null),Qe([I.b,d.observable],it.prototype,"preferredShell",void 0),Qe([I.b,d.observable],it.prototype,"exportSnippetFormat",void 0),Qe([d.observable.ref],it.prototype,"contextMenuState",void 0),Qe([d.action.bound],it.prototype,"handleContextMenuEvent",null),Qe([d.action.bound],it.prototype,"clearHtmlContextMenu",null);var at=n(64),ct=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},lt=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))};class dt{constructor(e){this.goToSettings=e,this.initialized=Object(A.c)(()=>lt(this,void 0,void 0,(function*(){at.loginEvents.on("app_error",o.d),Object(at.initializeAuthUi)({refreshToken:!0,rememberLastLogin:!1}),this.subscriptionPlans=Object(A.d)(Object(at.loadPlanPricesUntilSuccess)()),at.loginEvents.on("authenticated",e=>lt(this,void 0,void 0,(function*(){var t;const n=null===(t=null==e?void 0:e.idTokenPayload)||void 0===t?void 0:t.email;n&&this.selectedPlan&&Object(at.prepareCheckout)(n,this.selectedPlan,"app"),yield this.updateUser(),at.loginEvents.emit("user_data_loaded")}))),at.loginEvents.on("authorization_error",e=>{e instanceof at.RefreshRejectedError&&(Object(at.logOut)(),this.logIn())}),this.updateUser(),setInterval(this.updateUser,6e5),at.loginEvents.on("logout",this.updateUser),console.log("Account store initialized")}))),this.user=Object(at.getLastUserData)(),this.accountDataLastUpdated=0,this.isAccountUpdateInProcess=!1,this.updateUser=Object(d.flow)(function*(){this.user=yield Object(at.getLatestUserData)(),this.accountDataLastUpdated=Date.now(),Object(o.e)(this.user.email),this.user.banned&&(alert("Your account has been blocked for abuse. Please contact help@httptoolkit.com."),window.close())}.bind(this)),this.getPro=Object(d.flow)(function*(e){try{j({category:"Account",action:"Get Pro",value:e});const t=yield this.pickPlan();if(!t)return;if(this.isLoggedIn||(yield this.logIn()),!this.isLoggedIn||this.userHasSubscription)return void(this.isPastDueUser&&this.goToSettings());yield this.purchasePlan(this.user.email,t)}catch(e){Object(o.d)(e),alert((e.message||e.code||"Error")+"\n\nPlease check your email for details.\nIf you need help, get in touch at billing@httptoolkit.com."),this.modal=void 0}finally{this.selectedPlan=void 0}}.bind(this)),this.logIn=Object(d.flow)(function*(){let e=this.modal;this.modal="login",j({category:"Account",action:"Login"});const t=yield Object(at.showLoginDialog)();return t?(j({category:"Account",action:"Login success"}),this.userHasSubscription?(j({category:"Account",action:"Paid user login"}),this.modal=void 0,this.isPastDueUser&&this.goToSettings()):this.modal=e):(j({category:"Account",action:"Login failed"}),this.modal=void 0),t}.bind(this)),this.pickPlan=Object(d.flow)((function*(){return this.selectedPlan=void 0,this.modal="pick-a-plan",yield Object(d.when)(()=>void 0===this.modal||!!this.selectedPlan),this.modal=void 0,this.selectedPlan?j({category:"Account",action:"Plan selected",value:this.selectedPlan}):this.isPaidUser||j({category:"Account",action:"Plans rejected"}),this.selectedPlan})),this.purchasePlan=Object(d.flow)((function*(e,t){Object(at.openNewCheckoutWindow)(e,t,"app"),this.modal="post-checkout",this.isAccountUpdateInProcess=!0,yield this.waitForUserUpdate(()=>this.isPaidUser||!this.modal),this.isAccountUpdateInProcess=!1,this.modal=void 0,j({category:"Account",action:this.isPaidUser?"Checkout complete":"Checkout cancelled",value:t})})),this.waitForUserUpdate=Object(d.flow)((function*(e){let t=!0;const n=()=>{t=!0,this.updateUser()},r=()=>{t=!1};window.addEventListener("focus",n),window.addEventListener("blur",r),yield this.updateUser();let o=0;for(;!e();)yield Object(h.b)(1e3),o+=1,(t||o>10)&&(o=0,yield this.updateUser());e()&&!t&&window.focus(),window.removeEventListener("focus",n),window.removeEventListener("blur",r)})),this.cancelSubscription=Object(d.flow)((function*(){try{this.isAccountUpdateInProcess=!0,yield Object(at.cancelSubscription)(),yield this.waitForUserUpdate(()=>!this.user.subscription||"deleted"===this.user.subscription.status),console.log("Subscription cancellation confirmed")}catch(e){throw console.log(e),Object(o.d)("Subscription cancellation failed: "+(e.message||e)),e}finally{this.isAccountUpdateInProcess=!1}}))}get userEmail(){return this.user.email}get userSubscription(){return this.isPaidUser||this.isPastDueUser?this.user.subscription:void 0}get isLoggedIn(){return!!this.user.email}get featureFlags(){return s.clone(this.user.featureFlags)}get isStatusUnexpired(){var e,t;const n=null===(e=this.user.subscription)||void 0===e?void 0:e.expiry,r="active"===(null===(t=this.user.subscription)||void 0===t?void 0:t.status)?6048e5:0;return!!n&&n.valueOf()+r>Date.now()}get isPaidUser(){var e;return"past_due"!==(null===(e=this.user.subscription)||void 0===e?void 0:e.status)&&this.isStatusUnexpired}get isPastDueUser(){var e;return"past_due"===(null===(e=this.user.subscription)||void 0===e?void 0:e.status)&&this.isStatusUnexpired}get userHasSubscription(){return this.isPaidUser||this.isPastDueUser}get mightBePaidUser(){var e,t;return(null===(e=this.user.subscription)||void 0===e?void 0:e.status)&&"past_due"!==(null===(t=this.user.subscription)||void 0===t?void 0:t.status)&&(this.isStatusUnexpired||0===this.accountDataLastUpdated)}logOut(){Object(at.logOut)()}setSelectedPlan(e){this.selectedPlan=e||(this.modal=void 0)}cancelCheckout(){this.modal=this.selectedPlan=void 0}get canManageSubscription(){var e;return!!(null===(e=this.userSubscription)||void 0===e?void 0:e.canManageSubscription)}}ct([d.observable],dt.prototype,"user",void 0),ct([d.observable],dt.prototype,"accountDataLastUpdated",void 0),ct([d.observable],dt.prototype,"isAccountUpdateInProcess",void 0),ct([d.computed],dt.prototype,"userEmail",null),ct([d.computed],dt.prototype,"userSubscription",null),ct([d.observable],dt.prototype,"modal",void 0),ct([d.observable],dt.prototype,"selectedPlan",void 0),ct([d.computed],dt.prototype,"isLoggedIn",null),ct([d.computed],dt.prototype,"featureFlags",null),ct([d.computed],dt.prototype,"isStatusUnexpired",null),ct([d.computed],dt.prototype,"isPaidUser",null),ct([d.computed],dt.prototype,"isPastDueUser",null),ct([d.computed],dt.prototype,"userHasSubscription",null),ct([d.computed],dt.prototype,"mightBePaidUser",null),ct([d.action.bound],dt.prototype,"logOut",null),ct([d.action.bound],dt.prototype,"setSelectedPlan",null),ct([d.action.bound],dt.prototype,"cancelCheckout",null);var ut=n(12),pt=n(145),ht=n(66),mt=n(648);function gt(e){return e>0&&e<=65535}function ft(e){return!!(null==e?void 0:e.match(/^[A-Za-z0-9\-.]+(:\d+)?$/))}const bt={unspecified:"unknown",loopback:"this machine",private:"a local network device",uniqueLocal:"a local network device",unicast:""};function yt(e){let t;try{t=mt.parse(e)}catch(t){return Object(o.d)("Failed to parse IP",{ip:e}),e}(function(e){return"ipv6"===e.kind()})(t)&&t.isIPv4MappedAddress()&&(t=t.toIPv4Address());const n=t.range(),r=(n in bt?bt[n]:n).replace(/([A-Z])/g," $1").toLowerCase().replace(/^rfc/,"see RFC ");return t.toNormalizedString()+(r?` (${r})`:"")}var vt=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},xt=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))};function wt(e){return void 0===e||e.endPort>=e.startPort&&gt(e.startPort)&&gt(e.endPort)}class Et{constructor(e){this.accountStore=e,this.mockRTCRequestBuilder=new pt.MockRTCAdminRequestBuilder,this.externalNetworkAddresses=[],this.dnsServers=[],this.ruleParameterKeys=[],this.initialized=Object(A.c)(()=>xt(this,void 0,void 0,(function*(){yield this.accountStore.initialized,yield this.loadSettings(),yield this.startIntercepting(),this.serverVersion=yield f.E,console.log(`Proxy store initialized (server version ${this.serverVersion})`)}))),this.startIntercepting=Object(d.flow)((function*(){this.adminClient=new ut.PluggableAdmin.AdminClient({adminServerUrl:"http://127.0.0.1:45456"}),this._http2CurrentlyEnabled=this.http2Enabled,this._currentTlsPassthroughConfig=s.cloneDeep(this.tlsPassthroughConfig),this.monitorRemoteClientConnection(this.adminClient),yield function e(t,n,r=500,o=200){return t.start(n).catch(s=>{var i;return console.log("Server initialization failed",s),s.response?(n=(null===(i=s.message)||void 0===i?void 0:i.includes("unrecognized plugin: webrtc"))?Object.assign(Object.assign({},n),{webrtc:void 0}):Object.assign(Object.assign({},n),{http:Object.assign(Object.assign({},n.http),{port:void 0})}),Object(h.b)(100).then(()=>e(t,n,r,o))):Object(h.b)(Math.min(o,r)).then(()=>e(t,n,r,1.2*o))})}(this.adminClient,{http:{options:{cors:!1,suggestChanges:!1,http2:this._http2CurrentlyEnabled,https:{tlsPassthrough:this._currentTlsPassthroughConfig}},port:this.portConfig},webrtc:{}}),this.mockttpRequestBuilder=new ut.MockttpPluggableAdmin.MockttpAdminRequestBuilder(this.adminClient.schema),Object(ht.b)(),console.log("Server started"),yield Object(ht.c)(this.httpProxyPort).then(e=>{this.certPath=e.certificatePath,this.certContent=e.certificateContent,this.certFingerprint=e.certificateFingerprint,this.setNetworkAddresses(e.networkInterfaces),this.systemProxyConfig=e.systemProxy,this.dnsServers=e.dnsServers,this.ruleParameterKeys=e.ruleParameterKeys,console.log("Config loaded")}),console.log("Server started on port "+this.httpProxyPort),window.addEventListener("beforeunload",()=>{this.adminClient.stop().catch(()=>{})})})),this.http2Enabled="fallback",this._http2CurrentlyEnabled=this.http2Enabled,this.tlsPassthroughConfig=[],this._currentTlsPassthroughConfig=[],this.setRequestRules=(...e)=>{const{adminStream:t}=this.adminClient;return this.adminClient.sendQuery(this.mockttpRequestBuilder.buildAddRequestRulesQuery(e,!0,t))},this.setWebSocketRules=(...e)=>{const{adminStream:t}=this.adminClient;return this.adminClient.sendQuery(this.mockttpRequestBuilder.buildAddWebSocketRulesQuery(e,!0,t))},this.setRTCRules=(...e)=>{const{adminStream:t}=this.adminClient;return this.adminClient.sendQuery(this.mockRTCRequestBuilder.buildSetRulesQuery(e,t))},this.onMockttpEvent=(e,t)=>{const n=this.mockttpRequestBuilder.buildSubscriptionRequest(e);return n?this.adminClient.subscribe(n,t):(console.warn("Ignoring subscription for event unrecognized by Mockttp client: "+e),Promise.resolve())},this.onMockRTCEvent=(e,t)=>{const n=this.mockRTCRequestBuilder.buildSubscriptionRequest(e);return n?this.adminClient.subscribe(n,t):(console.warn("Ignoring subscription for event unrecognized by MockRTC client: "+e),Promise.resolve())},this.refreshNetworkAddresses=Object(d.flow)((function*(){this.setNetworkAddresses(yield Object(ht.f)())}))}loadSettings(){return xt(this,void 0,void 0,(function*(){const{accountStore:e}=this;Object(d.observe)(e,"accountDataLastUpdated",()=>{e.isPaidUser||(this.setPortConfig(void 0),this.http2Enabled="fallback",this.tlsPassthroughConfig=[])}),yield Object(I.a)({key:"server-store",store:this});const t=localStorage.getItem("interception-store");if(t)try{const e=JSON.parse(t);e._portConfig&&Object(d.runInAction)(()=>{this._portConfig=e._portConfig})}catch(e){console.log(e)}console.log("Proxy settings loaded")}))}monitorRemoteClientConnection(e){e.on("admin-client:stream-error",e=>{console.log("Admin client stream error"),Object(o.d)(e.message?e:new Error("Client stream error"),{cause:e})}),e.on("admin-client:subscription-error",e=>{console.log("Admin client subscription error"),Object(o.d)(e.message?e:new Error("Client subscription error"),{cause:e})}),e.on("admin-client:stream-reconnect-failed",e=>{Object(o.d)(e.message?e:new Error("Client reconnect error"),{cause:e})})}get portConfig(){return this._portConfig}setPortConfig(e){if(!wt(e))throw new TypeError("Invalid port config: "+JSON.stringify(e));!e||8e3===e.startPort&&65535===e.endPort?this._portConfig=void 0:this._portConfig=e}get httpProxyPort(){return this.adminClient.metadata.http.port}get http2CurrentlyEnabled(){return this._http2CurrentlyEnabled}get currentTlsPassthroughConfig(){return this._currentTlsPassthroughConfig}setNetworkAddresses(e){this.externalNetworkAddresses=s.flatMap(e,(e,t)=>e.filter(e=>!e.internal&&"IPv4"===e.family&&"docker0"!==t&&!t.startsWith("br-")&&!t.startsWith("veth")).map(e=>e.address))}}vt([d.observable.ref],Et.prototype,"adminClient",void 0),vt([d.observable],Et.prototype,"certPath",void 0),vt([d.observable],Et.prototype,"certContent",void 0),vt([d.observable],Et.prototype,"certFingerprint",void 0),vt([d.observable],Et.prototype,"externalNetworkAddresses",void 0),vt([d.observable],Et.prototype,"systemProxyConfig",void 0),vt([d.observable],Et.prototype,"dnsServers",void 0),vt([d.observable],Et.prototype,"ruleParameterKeys",void 0),vt([d.observable],Et.prototype,"serverVersion",void 0),vt([Object(I.b)("object"),d.observable],Et.prototype,"_portConfig",void 0),vt([d.computed],Et.prototype,"portConfig",null),vt([d.action],Et.prototype,"setPortConfig",null),vt([d.computed],Et.prototype,"httpProxyPort",null),vt([I.b,d.observable],Et.prototype,"http2Enabled",void 0),vt([Object(I.b)("list"),d.observable],Et.prototype,"tlsPassthroughConfig",void 0);var Ct=n(17),Tt=n(143),Ot=n(79),St=n(90);class jt extends St.a{constructor(e){super(),this.failureEvent=e,this.id=Ot(),this.upstreamHostname=this.failureEvent.hostname,this.remoteIpAddress=this.failureEvent.remoteIpAddress,this.remotePort=this.failureEvent.remotePort,this.failureCause=this.failureEvent.failureCause,this.tags=this.failureEvent.tags,this.timingEvents=this.failureEvent.timingEvents,this.searchIndex=[e.hostname,e.remoteIpAddress].filter(e=>!!e).join("\n")}isTlsFailure(){return!0}}var kt=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i};class Pt extends St.a{constructor(e){super(),this.openEvent=e,this.id=this.openEvent.id,this.remoteIpAddress=this.openEvent.remoteIpAddress,this.remotePort=this.openEvent.remotePort,this.upstreamHostname=this.openEvent.hostname,this.upstreamPort=this.openEvent.upstreamPort,this.tags=this.openEvent.tags,this.timingEvents=this.openEvent.timingEvents,this.open=!0,this.searchIndex=[e.hostname,e.remoteIpAddress].filter(e=>!!e).join("\n")}isTlsTunnel(){return!0}markClosed(e){this.timingEvents.disconnectTimestamp=e.timingEvents.disconnectTimestamp,this.open=!1}isOpen(){return this.open}}kt([d.observable],Pt.prototype,"open",void 0);var Rt=n(119),Ht=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i};const qt=e=>`${e.protocol}://${e.address}:${e.port}`;class At extends St.a{constructor(e){super(),this.connectionEvent=e,this.id=this.connectionEvent.sessionId,this.streams=d.observable.array([],{deep:!1})}isRTCConnection(){return!0}get peerId(){return this.connectionEvent.peerId}get localSessionDescription(){return this.connectionEvent.localSessionDescription}get remoteSessionDescription(){return this.connectionEvent.remoteSessionDescription}get source(){return Object(Rt.c)(this.connectionEvent.metadata.userAgent)}get sourceURL(){if(this.connectionEvent.metadata.sourceURL)try{return new URL(this.connectionEvent.metadata.sourceURL)}catch(e){return}}get clientURL(){return qt(this.connectionEvent.selectedRemoteCandidate)}attachExternalPeer(e,t){this.attachedConnection={externalConnection:e.externalConnection,otherHalf:t}}isOtherHalfOf(e){if(!this.attachedConnection)return!1;const{externalConnection:t}=this.attachedConnection,{externalConnection:n}=e,r=qt(t.selectedLocalCandidate),o=qt(t.selectedRemoteCandidate),s=qt(n.selectedLocalCandidate);return r===qt(n.selectedRemoteCandidate)&&s===o}connectOtherHalf(e){this.attachedConnection.otherHalf=e}get remoteCandidate(){if(!this.attachedConnection)return this.connectionEvent.selectedLocalCandidate;const{externalConnection:e,otherHalf:t}=this.attachedConnection;return t?t.connectionEvent.selectedRemoteCandidate:e.selectedRemoteCandidate}get remoteURL(){return qt(this.remoteCandidate)}addStream(e){this.streams.push(e)}removeStream(e){this.streams.remove(e)}markClosed(e){this.closeData=e}get closeState(){return this.closeData}}Ht([d.computed],At.prototype,"source",null),Ht([d.computed],At.prototype,"sourceURL",null),Ht([d.computed],At.prototype,"clientURL",null),Ht([d.observable],At.prototype,"attachedConnection",void 0),Ht([d.action],At.prototype,"attachExternalPeer",null),Ht([d.action],At.prototype,"connectOtherHalf",null),Ht([d.computed],At.prototype,"remoteCandidate",null),Ht([d.computed],At.prototype,"remoteURL",null),Ht([d.action],At.prototype,"addStream",null),Ht([d.action],At.prototype,"removeStream",null),Ht([d.observable],At.prototype,"closeData",void 0),Ht([d.action],At.prototype,"markClosed",null);var It=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i};class Dt extends St.a{constructor(e,t){super(),this.openEvent=e,this.connection=t,this.id=this.sessionId+":data:"+this.channelId,this.messages=[],this.pinned=!1}isRTCDataChannel(){return!0}get rtcConnection(){return this.connection}get sessionId(){return this.rtcConnection.id}get channelId(){return this.openEvent.channelId}get label(){return this.openEvent.channelLabel}get protocol(){return this.openEvent.channelProtocol}addMessage(e){this.messages.push(new L.a(e,this.messages.length))}markClosed(e){this.closeData=e}get closeState(){return this.closeData}cleanup(){this.messages.forEach(e=>e.cleanup()),this.messages.length=0}}It([d.observable],Dt.prototype,"messages",void 0),It([d.action],Dt.prototype,"addMessage",null),It([d.observable],Dt.prototype,"closeData",void 0),It([d.action],Dt.prototype,"markClosed",null),It([d.observable],Dt.prototype,"pinned",void 0);var $t=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i};class Mt extends St.a{constructor(e,t){super(),this.openEvent=e,this.connection=t,this.id=this.sessionId+":media:"+this.mid,this.stats=[],this._totalBytesSent=0,this._totalBytesReceived=0,this.pinned=!1}isRTCMediaTrack(){return!0}get rtcConnection(){return this.connection}get sessionId(){return this.rtcConnection.id}get mid(){return this.openEvent.trackMid}get direction(){return this.openEvent.trackDirection}get type(){return this.openEvent.trackType}addStats(e){const t=this.stats[this.stats.length-1];if((null==t?void 0:t.timestamp)<e.eventTimestamp-1500){Math.round((e.eventTimestamp-t.timestamp)/1e3)-1>0&&this.stats.push(...i.a.range(t.timestamp+1e3,e.eventTimestamp-500,1e3).map(e=>({timestamp:e,sentDelta:0,receivedDelta:0})))}this.stats.push({timestamp:e.eventTimestamp,sentDelta:e.totalBytesSent-this.totalBytesSent,receivedDelta:e.totalBytesReceived-this.totalBytesReceived}),this._totalBytesSent=e.totalBytesSent,this._totalBytesReceived=e.totalBytesReceived}get totalBytesSent(){return this._totalBytesSent}get totalBytesReceived(){return this._totalBytesReceived}markClosed(e){this.closeData=e}get closeState(){return this.closeData}cleanup(){this.stats.length=0}}$t([d.observable],Mt.prototype,"stats",void 0),$t([d.action],Mt.prototype,"addStats",null),$t([d.observable],Mt.prototype,"_totalBytesSent",void 0),$t([d.observable],Mt.prototype,"_totalBytesReceived",void 0),$t([d.observable],Mt.prototype,"closeData",void 0),$t([d.action],Mt.prototype,"markClosed",null),$t([d.observable],Mt.prototype,"pinned",void 0);var Ft=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},Bt=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))};const Nt=["request-initiated","request","response","websocket-request","websocket-accepted","websocket-message-received","websocket-message-sent","websocket-close","abort","tls-client-error","tls-passthrough-opened","tls-passthrough-closed","client-error"],Lt=["peer-connected","peer-disconnected","external-peer-attached","data-channel-opened","data-channel-message-sent","data-channel-message-received","data-channel-closed","media-track-opened","media-track-stats","media-track-closed"];class Ut{constructor(e,t,n){this.proxyStore=e,this.apiStore=t,this.rulesStore=n,this.initialized=Object(A.c)(()=>Bt(this,void 0,void 0,(function*(){yield Promise.all([this.proxyStore.initialized,this.apiStore.initialized,this.rulesStore.initialized]),Nt.forEach(e=>{this.proxyStore.onMockttpEvent(e,t=>{this.isPaused||(this.eventQueue.push({type:e,event:t}),this.queueEventFlush())})}),Lt.forEach(e=>{this.proxyStore.onMockRTCEvent(e,t=>{this.isPaused||(this.eventQueue.push({type:e,event:t}),this.queueEventFlush())})}),console.log("Events store initialized")}))),this.isPaused=!1,this.eventQueue=[],this.orphanedEvents={},this.isFlushQueued=!1,this.events=d.observable.array([],{deep:!1}),this.updateFromQueuedEvent=e=>{try{switch(e.type){case"request-initiated":return this.addInitiatedRequest(e.event),this.checkForOrphan(e.event.id);case"request":return this.addCompletedRequest(e.event),this.checkForOrphan(e.event.id);case"response":return this.setResponse(e.event);case"websocket-request":return this.addWebSocketRequest(e.event),this.checkForOrphan(e.event.id);case"websocket-accepted":return this.addAcceptedWebSocketResponse(e.event);case"websocket-message-received":case"websocket-message-sent":return this.addWebSocketMessage(e.event);case"websocket-close":return this.markWebSocketClosed(e.event);case"abort":return this.markRequestAborted(e.event);case"tls-passthrough-opened":return this.addTlsTunnel(e.event),this.checkForOrphan(e.event.id);case"tls-passthrough-closed":return this.markTlsTunnelClosed(e.event);case"tls-client-error":return this.addFailedTlsRequest(e.event);case"client-error":return this.addClientError(e.event);case"peer-connected":return this.addRTCPeerConnection(e.event);case"external-peer-attached":return this.attachExternalRTCPeer(e.event);case"peer-disconnected":return this.markRTCPeerDisconnected(e.event);case"data-channel-opened":return this.addRTCDataChannel(e.event);case"data-channel-message-sent":case"data-channel-message-received":return this.addRTCDataChannelMessage(e.event);case"data-channel-closed":return this.markRTCDataChannelClosed(e.event);case"media-track-opened":return this.addRTCMediaTrack(e.event);case"media-track-stats":return this.addRTCMediaTrackStats(e.event);case"media-track-closed":return this.markRTCMediaTrackClosed(e.event)}}catch(e){Object(o.d)(e)}}}queueEventFlush(){this.isFlushQueued||(this.isFlushQueued=!0,requestAnimationFrame(this.flushQueuedUpdates))}get exchanges(){return this.events.filter(e=>e.isHttp())}get websockets(){return this.exchanges.filter(e=>e.isWebSocket())}get rtcConnections(){return this.events.filter(e=>e.isRTCConnection())}get rtcDataChannels(){return this.events.filter(e=>e.isRTCDataChannel())}get rtcMediaTracks(){return this.events.filter(e=>e.isRTCMediaTrack())}get activeSources(){return s(this.exchanges).map(e=>e.request.source).uniqBy(e=>e.summary).value()}flushQueuedUpdates(){this.isFlushQueued=!1,this.eventQueue.forEach(this.updateFromQueuedEvent),this.eventQueue=[]}checkForOrphan(e){const t=this.orphanedEvents[e];t&&(delete this.orphanedEvents[e],this.updateFromQueuedEvent(t))}togglePause(){this.isPaused=!this.isPaused}addInitiatedRequest(e){if(-1===s.findIndex(this.events,{id:e.id})){const t=new U.a(this.apiStore,e);this.events.push(t)}}getMatchedRule(e){if(!e.matchedRuleId)return!1;const t=Object(Ct.f)(this.rulesStore.rules,{id:e.matchedRuleId});if(!t)return!1;if(Object(Ct.k)(t))throw new Error("Request event unexpectedly matched rule group");return t}addCompletedRequest(e){const t=s.findIndex(this.events,{id:e.id});let n;t>=0?n=this.events[t]:(n=new U.a(this.apiStore,Object.assign({},e)),this.events.push(n)),n.updateFromCompletedRequest(e,this.getMatchedRule(e))}markRequestAborted(e){const t=s.find(this.exchanges,{id:e.id});t?t.markAborted(e):this.orphanedEvents[e.id]={type:"abort",event:e}}setResponse(e){const t=s.find(this.exchanges,{id:e.id});t?t.setResponse(e):this.orphanedEvents[e.id]={type:"response",event:e}}addWebSocketRequest(e){const t=new z(this.apiStore,Object.assign({},e));t.updateFromCompletedRequest(e,this.getMatchedRule(e)),this.events.push(t)}addAcceptedWebSocketResponse(e){const t=s.find(this.websockets,{id:e.id});t?(t.setResponse(e),t.setAccepted(e)):this.orphanedEvents[e.id]={type:"websocket-accepted",event:e}}addWebSocketMessage(e){const t=s.find(this.websockets,{id:e.streamId});t?t.addMessage(e):this.orphanedEvents[e.streamId]={type:"websocket-message-"+e.direction,event:e}}markWebSocketClosed(e){const t=s.find(this.websockets,{id:e.streamId});t?t.markClosed(e):this.orphanedEvents[e.streamId]={type:"websocket-close",event:e}}addTlsTunnel(e){this.events.push(new Pt(e))}markTlsTunnelClosed(e){const t=s.find(this.events,{id:e.id});t?t.markClosed(e):this.orphanedEvents[e.id]={type:"tls-passthrough-closed",event:close}}addFailedTlsRequest(e){s.some(this.events,t=>t.isTlsFailure()&&t.upstreamHostname===e.hostname&&t.remoteIpAddress===e.remoteIpAddress)||this.events.push(new jt(e))}addClientError(e){if("ECONNRESET"===e.errorCode&&!e.request.method&&!e.request.url)return;if("ERR_SSL_DECRYPTION_FAILED_OR_BAD_RECORD_MAC"===e.errorCode)return;const t=new U.a(this.apiStore,Object.assign(Object.assign({},e.request),{protocol:e.request.protocol||"",method:e.request.method||"",url:e.request.url||(e.request.protocol||"http")+"://",path:e.request.path||"/",headers:e.request.headers}));"aborted"===e.response?t.markAborted(e.request):t.setResponse(e.response),this.events.push(t)}addRTCPeerConnection(e){this.events.push(new At(e))}attachExternalRTCPeer(e){const t=this.rtcConnections.find(t=>t.id===e.sessionId),n=this.rtcConnections.find(t=>t.isOtherHalfOf(e));t?(t.attachExternalPeer(e,n),n&&n.connectOtherHalf(t)):this.orphanedEvents[e.sessionId]={type:"external-peer-attached",event:e}}markRTCPeerDisconnected(e){const t=this.rtcConnections.find(t=>t.id===e.sessionId);t?t.markClosed(e):this.orphanedEvents[e.sessionId]={type:"peer-disconnected",event:e}}addRTCDataChannel(e){const t=this.rtcConnections.find(t=>t.id===e.sessionId);if(t){const n=new Dt(e,t);this.events.push(n),t.addStream(n)}else this.orphanedEvents[e.sessionId]={type:"data-channel-opened",event:e}}addRTCDataChannelMessage(e){const t=this.rtcDataChannels.find(t=>t.sessionId===e.sessionId&&t.channelId===e.channelId);t?t.addMessage(e):this.orphanedEvents[e.sessionId]={type:"data-channel-message-"+e.direction,event:e}}markRTCDataChannelClosed(e){const t=this.rtcDataChannels.find(t=>t.sessionId===e.sessionId&&t.channelId===e.channelId);t?t.markClosed(e):this.orphanedEvents[e.sessionId]={type:"data-channel-closed",event:e}}addRTCMediaTrack(e){const t=this.rtcConnections.find(t=>t.id===e.sessionId);if(t){const n=new Mt(e,t);this.events.push(n),t.addStream(n)}else this.orphanedEvents[e.sessionId]={type:"media-track-opened",event:e}}addRTCMediaTrackStats(e){const t=this.rtcMediaTracks.find(t=>t.sessionId===e.sessionId&&t.mid===e.trackMid);t?t.addStats(e):this.orphanedEvents[e.sessionId]={type:"media-track-stats",event:e}}markRTCMediaTrackClosed(e){const t=this.rtcMediaTracks.find(t=>t.sessionId===e.sessionId&&t.mid===e.trackMid);t?t.markClosed(e):this.orphanedEvents[e.sessionId]={type:"media-track-closed",event:e}}deleteEvent(e){if(this.events.remove(e),e.isRTCDataChannel()||e.isRTCMediaTrack())e.rtcConnection.removeStream(e);else if(e.isRTCConnection()){[...e.streams].forEach(e=>this.deleteEvent(e))}"cleanup"in e&&e.cleanup()}clearInterceptedData(e){const[t,n]=s.partition(this.events,e?()=>!1:e=>e.pinned);this.events.clear(),n.forEach(e=>{"cleanup"in e&&e.cleanup()}),this.events.push(...t),this.orphanedEvents={},"gc"in window&&window.gc()}loadFromHar(e){return Bt(this,void 0,void 0,(function*(){const{events:t,pinnedIds:n}=yield Object(Tt.c)(e).catch(e=>{throw e.errors.forEach(e=>{console.log(e)}),e}),[r,o]=s.partition(t,({type:e})=>"request"===e||"websocket-request"===e||"tls-client-error"===e);this.eventQueue.push(...s.sortBy(r,e=>e.event.timingEvents.startTime)),this.eventQueue.push(...o),this.queueEventFlush(),n.length&&requestAnimationFrame(Object(d.action)(()=>n.forEach(e=>{this.events.find(t=>t.id===e).pinned=!0})))}))}recordSentRequest(e){const t=new U.a(this.apiStore,Object.assign({},e));return t.updateFromCompletedRequest(e,!1),this.events.push(t),t}}Ft([d.observable],Ut.prototype,"isPaused",void 0),Ft([d.computed.struct],Ut.prototype,"exchanges",null),Ft([d.computed.struct],Ut.prototype,"websockets",null),Ft([d.computed.struct],Ut.prototype,"rtcConnections",null),Ft([d.computed.struct],Ut.prototype,"rtcDataChannels",null),Ft([d.computed.struct],Ut.prototype,"rtcMediaTracks",null),Ft([d.computed.struct],Ut.prototype,"activeSources",null),Ft([d.action.bound],Ut.prototype,"flushQueuedUpdates",null),Ft([d.action.bound],Ut.prototype,"togglePause",null),Ft([d.action],Ut.prototype,"addInitiatedRequest",null),Ft([d.action],Ut.prototype,"addCompletedRequest",null),Ft([d.action],Ut.prototype,"markRequestAborted",null),Ft([d.action],Ut.prototype,"setResponse",null),Ft([d.action],Ut.prototype,"addWebSocketRequest",null),Ft([d.action],Ut.prototype,"addAcceptedWebSocketResponse",null),Ft([d.action],Ut.prototype,"addWebSocketMessage",null),Ft([d.action],Ut.prototype,"markWebSocketClosed",null),Ft([d.action],Ut.prototype,"addTlsTunnel",null),Ft([d.action],Ut.prototype,"markTlsTunnelClosed",null),Ft([d.action],Ut.prototype,"addFailedTlsRequest",null),Ft([d.action],Ut.prototype,"addClientError",null),Ft([d.action],Ut.prototype,"addRTCPeerConnection",null),Ft([d.action],Ut.prototype,"attachExternalRTCPeer",null),Ft([d.action],Ut.prototype,"markRTCPeerDisconnected",null),Ft([d.action],Ut.prototype,"addRTCDataChannel",null),Ft([d.action],Ut.prototype,"addRTCDataChannelMessage",null),Ft([d.action],Ut.prototype,"markRTCDataChannelClosed",null),Ft([d.action],Ut.prototype,"addRTCMediaTrack",null),Ft([d.action],Ut.prototype,"addRTCMediaTrackStats",null),Ft([d.action],Ut.prototype,"markRTCMediaTrackClosed",null),Ft([d.action.bound],Ut.prototype,"deleteEvent",null),Ft([d.action.bound],Ut.prototype,"clearInterceptedData",null),Ft([d.action],Ut.prototype,"recordSentRequest",null);var Wt=n(650),zt=n(7),_t=n(23);function Vt(e,...t){return n=>a.createElement(e,Object.assign({},s.omit(n,t)))}function Gt(e){e.target===e.currentTarget&&"Enter"===e.key&&e.currentTarget.dispatchEvent(new MouseEvent("click",{bubbles:!0}))}const Jt=e=>t=>{t.stopPropagation(),e(t)},Kt=(e,t)=>n=>{const r=n.value;return!r||e(r)?n.setCustomValidity(""):n.setCustomValidity(t),n.reportValidity(),n.validity.valid};var Yt=n(20),Qt=n(28);const Xt=Object(p.i)(Vt(zt.b,"inverted")).attrs(e=>({icon:["fas","times"],size:"2x",tabIndex:0,onClick:e.onClose,onKeyPress:Gt}))`
    position: absolute;
    z-index: 1;
    cursor: pointer;

    color: ${e=>e.inverted?e.theme.mainBackground:e.theme.mainColor};

    top: ${e=>e.top||"10px"};
    right: ${e=>e.right||"15px"};

    &:hover {
        opacity: 0.6;
    }
`,Zt=Object(p.i)(zt.b).attrs(()=>({icon:["fas","external-link-alt"]}))`
    opacity: 0.5;
    margin-left: 5px;

    &:focus {
        outline: none;
        color: ${e=>e.theme.popColor};
    }
`,en=p.i.a`
    &[href] {
        color: ${e=>e.theme.linkColor};

        &:visited {
            color: ${e=>e.theme.visitedLinkColor};
        }
    }
`,tn=e=>e.href?a.createElement(en,Object.assign({},e,{target:"_blank",rel:"noreferrer noopener"}),e.children?a.createElement(a.Fragment,null,e.children," "):null,a.createElement(Zt,null)):null;var nn=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i};const rn=p.i.div`
    z-index: 0;

    position: absolute;
    bottom: -10px;
    right: -10px;
    z-index: 0;
    opacity: 0.2;

    > svg {
        &:not(:first-child) {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
`,on=Object(p.i)(Yt.d)`
    height: 100%;
    width: 100%;
    overflow: hidden;

    ${e=>{if(!e.expanded||!e.uiConfig)return`order: ${e.index};`;const t=Math.min(e.uiConfig.columnWidth,e.gridWidth),n=e.uiConfig.rowHeight;return`\n            order: ${Math.max(-1,e.index-t)};\n            grid-row: span ${n};\n            grid-column: span ${t};\n        `}}

    user-select: none;

    > :not(${rn}) {
        z-index: 1;
    }

    > h1:not(:last-child) {
        margin-bottom: 10px;
    }

    > p {
        color: ${e=>e.theme.mainColor};
        line-height: 1.2;

        &:not(:first-of-type) {
            margin-top: 10px;
        }
    }

    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`,sn=p.i.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background-color: rgba(0,0,0,0.2);
    box-shadow: inset 0 2px 10px 0 rgba(0,0,0,0.2);

    display: flex;
    align-items: center;
    justify-content: center;
`,an=Object(p.i)(Qt.a)`
    white-space: normal; /* Useful for layout in tiny screens, e.g. the 'proxy port' badge */

    margin-top: auto;
`;let cn=class extends a.Component{constructor(e){super(e),this.expanded=!1,this.cardRef=a.createRef(),this.onActivationStarted=()=>{j({category:"Interceptors",action:"Activated",value:this.props.interceptor.id})},this.activateInterceptor=(e={})=>{const{interceptor:t,interceptorStore:n}=this.props;return n.activateInterceptor(t.id,e)},this.onActivationSuccessful=(e={})=>{j({category:"Interceptors",action:"Successfully Activated",value:this.props.interceptor.id}),!1!==e.showRequests&&this.props.showRequests()}}render(){const{expanded:e,onActivationStarted:t,activateInterceptor:n,onActivationSuccessful:r}=this,{interceptor:o,index:i}=this.props,c=!o.isActivable,{uiConfig:l}=o,d=null==l?void 0:l.configComponent,u=s.isArray(o.iconProps)?o.iconProps:[o.iconProps],h=_t.j.width>=p.b?4:3;return a.createElement(on,{ref:this.cardRef,index:i,expanded:e,uiConfig:l,gridWidth:h,disabled:c,onKeyDown:Gt,onClick:this.expanded?void 0:this.onClick,tabIndex:c||this.expanded?void 0:0},a.createElement(rn,null,u.map((e,t)=>a.createElement(zt.b,Object.assign({key:t,size:"8x"},e)))),a.createElement("h1",null,o.name),d&&e?a.createElement(a.Fragment,null,a.createElement(Xt,{onClose:this.onClose}),a.createElement(d,{interceptor:o,activateInterceptor:n,reportStarted:t,reportSuccess:r,closeSelf:this.onClose})):a.createElement(a.Fragment,null,o.description.map((e,t)=>a.createElement("p",{key:t},e)),function(e){var t,n;if(null===(t=e.uiConfig)||void 0===t?void 0:t.customPill){const t=null===(n=e.uiConfig)||void 0===n?void 0:n.customPill;return a.createElement(t,null)}return e.isActive?a.createElement(an,{color:"#4caf7d"},"Activated"):e.isActivable?null:e.isSupported?a.createElement(an,null,"Not available",e.notAvailableHelpUrl?a.createElement(tn,{href:e.notAvailableHelpUrl}):null):a.createElement(an,{color:p.h},"Coming soon")}(o),o.inProgress&&a.createElement(sn,null,a.createElement(zt.b,{icon:["fac","spinner-arc"],size:"4x",spin:!0}))))}onClick(){const{onActivationStarted:e,activateInterceptor:t,onActivationSuccessful:n}=this,{interceptor:r}=this.props;r.inProgress||(r.isActivable?r.uiConfig?(this.expanded=!0,requestAnimationFrame(()=>{var e;null===(e=this.cardRef.current)||void 0===e||e.scrollIntoView({block:"nearest",behavior:"smooth"})})):(e(),t(r.activationOptions).then(()=>n()).catch(e=>Object(o.d)(e))):e())}onClose(){this.expanded=!1}};nn([d.observable],cn.prototype,"expanded",void 0),nn([d.action.bound],cn.prototype,"onClick",null),nn([d.action.bound],cn.prototype,"onClose",null),cn=nn([Object(u.d)("interceptorStore"),u.e],cn);var ln=n(13);const dn=p.i.div`
    display: flex;
    flex-direction: row;
    user-select: text;
    margin-top: 5px;
`,un=p.i.div`
    flex: 1 1 0;

    &:not(:last-child) {
        margin-right: 40px;
    }

    > h2 {
        font-size: ${e=>e.theme.headingSize};
        margin-bottom: 10px;
    }

    > ol {
        list-style: decimal;

        > li {
            margin-left: 20px;
            margin-bottom: 10px;
        }
    }

    > p {
        line-height: 1.3;

        &:not(:last-child) {
            margin-bottom: 10px;
        }
    }

    strong {
        font-weight: bold;
    }

    a[href] {
        color: ${e=>e.theme.linkColor};

        &:visited {
            color: ${e=>e.theme.visitedLinkColor};
        }
    }
`,pn=p.i.span`
    white-space: nowrap;
`,hn=Object(u.d)("proxyStore")(Object(u.e)(e=>a.createElement(an,{color:"#4caf7d"},"Proxy port: ",e.proxyStore.httpProxyPort))),mn=Object(p.i)(e=>a.createElement(Qt.b,{className:e.className,onClick:()=>Object(_t.f)("http-toolkit-ca-certificate.crt","application/x-x509-ca-cert",e.certContent)},a.createElement(zt.b,{icon:["fas","download"]})," Export CA certificate"))`
    margin: 0 0 10px 0;
`,gn={rowHeight:1,columnWidth:4,configComponent:Object(u.d)("proxyStore")(e=>{a.useEffect(()=>e.reportStarted(),[]);const{httpProxyPort:t,certPath:n,certContent:r}=e.proxyStore;return a.createElement(u.a,null,()=>a.createElement(dn,null,a.createElement(un,null,a.createElement("p",null,"To intercept traffic you need to:"),a.createElement("ol",null,a.createElement("li",null,a.createElement("strong",null,"send your traffic via the HTTP Toolkit proxy")),a.createElement("li",null,a.createElement("strong",null,"trust the certificate authority")," (if using HTTPS) ")),a.createElement("p",null,"The steps to do this manually depend on the client, but all the details you'll need are shown here."),a.createElement("p",null,"Want your client to be supported automatically? ",a.createElement(pn,null,a.createElement("a",{href:"https://github.com/httptoolkit/httptoolkit/issues/new"},"Send some feedback")),".")),a.createElement(un,null,a.createElement("h2",null,"1. Send traffic via HTTP Toolkit"),a.createElement("p",null,"To intercept an HTTP client on this machine, configure it to send traffic via"," ",a.createElement(ln.h,null,"http://localhost:",t),"."),a.createElement("p",null,"Most tools can be configured to do so by using the above address as an HTTP or HTTPS proxy."),a.createElement("p",null,"In other cases, it's also possible to forcibly reroute traffic using networking tools like iptables."),a.createElement("p",null,"Remote clients (e.g. phones) will need to use the IP address of this machine, not localhost.")),a.createElement(un,null,a.createElement("h2",null,"2. Trust the certificate authority"),a.createElement("p",null,a.createElement("em",null,"Only required to intercept traffic that uses HTTPS")),a.createElement("p",null,"HTTP Toolkit has generated a certificate authority (CA) on your machine. All intercepted HTTPS uses certificates from this CA."),r?a.createElement(mn,{certContent:r}):a.createElement("p",null,"The certificate is stored on your machine at ",a.createElement(ln.h,null,n),"."),a.createElement("p",null,"To intercept HTTPS traffic you need to configure your HTTP client to trust this certificate as a certificate authority, or to temporarily disable certificate checks entirely."))))}),customPill:hn};var fn=n(44);const bn=Object(p.i)(fn.a)`
    color: ${e=>e.theme.mainColor};

    &:hover, &:focus {
        color: ${e=>e.theme.popColor};
        outline: none;
    }

    &:active {
        color: ${e=>e.theme.mainColor};
    }
`,yn=()=>{const[e,t]=a.useState(),[n,r]=a.useState();return[n,()=>{r(!0),e&&(clearTimeout(e),t(void 0)),t(setTimeout(()=>r(void 0),2e3))}]},vn=e=>{const[t,n]=yn();return a.createElement(bn,{title:"Copy this to your clipboard",className:e.className,icon:t?["fas","check"]:["far","copy"],fixedWidth:!0,onClick:()=>{Object(_t.b)(e.content),n(),e.onClick()}})},xn=e=>{const[t,n]=yn();return a.createElement(Qt.b,{tabIndex:0,onClick:()=>{Object(_t.b)(e.content),n()}},a.createElement(zt.b,{icon:t?["fas","check"]:["far","copy"],fixedWidth:!0}),e.children)};var wn=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},En=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))};const Cn=Object(p.i)(e=>a.createElement("div",{className:e.className},a.createElement("code",{onCopy:e.onCopy},e.children),a.createElement(vn,{onClick:e.onCopy,content:e.children})))`
    display: inline-block;
    margin-top: 20px;

    ${e=>e.disabled&&p.e`
        opacity: 0.5;
        pointer-events: none;
    `}

    border: solid 1px ${e=>e.theme.containerBorder};
    background-color: ${e=>e.theme.highlightBackground};
    color: ${e=>e.theme.highlightColor};

    padding: 10px 75px 10px 20px;
    border-radius: 4px;

    > code {
        font-family: ${e=>e.theme.monoFontFamily};
        user-select: all;
    }

    position: relative;
    > button {
        padding: 10px 20px 10px 20px;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;

        border-radius: 0 4px 4px 0;
        border-left: solid 1px ${e=>e.theme.containerBorder};

        background-color: ${e=>e.theme.mainLowlightBackground};

        &:active {
            background-image: linear-gradient(transparent, rgba(0,0,0,.05) 40%, rgba(0,0,0,.1));
        }
    }

    > svg {
        margin: 1px 0 2px;
    }
`,Tn=p.i.div`
    user-select: text;

    > select {
        display: block;
        margin-top: 20px;
        margin-left: 0;
    }
`;let On=class extends a.Component{constructor(){super(...arguments),this.reportedActivated=!1,this.shellCommands={"...":{command:'eval "$(curl -sS localhost:..../setup)"',description:""}},this.selectedShell="..."}get interceptCommand(){return this.shellCommands[this.selectedShell].command}get shellDescription(){return this.shellCommands[this.selectedShell].description}get shouldShowDropdown(){const e="fulfilled"!==f.E.state||Object(f.F)(f.E.value,f.p),t="..."===this.selectedShell||Object.keys(this.shellCommands).length>1;return e&&t}selectShell(e){this.selectedShell=e,this.props.uiStore.preferredShell=e}reportActivated(){this.reportedActivated||(this.reportedActivated=!0,this.props.reportStarted())}componentDidMount(){return En(this,void 0,void 0,(function*(){const{port:e,commands:t}=yield this.props.activateInterceptor();if(Object(d.runInAction)(()=>{this.shellCommands=t||{Bash:{command:`eval "$(curl -sS localhost:${e}/setup)"`,description:"Bash-compatible"}};const{preferredShell:n}=this.props.uiStore;n&&n in this.shellCommands&&(this.selectedShell=n),this.shellCommands[this.selectedShell]||(this.selectedShell=Object.keys(this.shellCommands)[0])}),this.props.interceptor.isActive)this.reportedActivated=!0;else{const e=setInterval(()=>{this.props.interceptorStore.refreshInterceptors()},2e3);Object(u.c)(this,()=>clearInterval(e)),Object(d.when)(()=>this.props.interceptor.isActive,()=>{this.reportActivated(),this.props.reportSuccess(),clearInterval(e)})}}))}render(){return a.createElement(Tn,null,a.createElement("p",null,"Run the command below in any ",this.shellDescription," terminal on this machine, to immediately enable interception for all new processes started there."),this.shouldShowDropdown?a.createElement(Qt.c,{onChange:this.selectShell,value:this.selectedShell,options:Object.keys(this.shellCommands)}):null,a.createElement(Cn,{onCopy:this.reportActivated,disabled:"..."===this.selectedShell},this.interceptCommand))}};wn([d.observable],On.prototype,"reportedActivated",void 0),wn([d.observable],On.prototype,"shellCommands",void 0),wn([d.observable],On.prototype,"selectedShell",void 0),wn([d.computed],On.prototype,"interceptCommand",null),wn([d.computed],On.prototype,"shellDescription",null),wn([d.computed],On.prototype,"shouldShowDropdown",null),wn([d.action.bound],On.prototype,"selectShell",null),wn([d.action.bound],On.prototype,"reportActivated",null),On=wn([Object(u.d)("interceptorStore"),Object(u.d)("accountStore"),Object(u.d)("uiStore"),u.e],On);const Sn={columnWidth:2,rowHeight:1,configComponent:On};var jn=n(15),kn=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},Pn=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))};const Rn=p.i.div`
    user-select: text;

    > p {
        line-height: 1.2;

        &:not(:last-child) {
            margin-bottom: 10px;
        }
    }

    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
`,Hn=p.i.div`
    flex: 1 1 100%;
`,qn=p.i.hr`
    width: 100%;
    margin: 0 0 10px 0;
    border-top: solid 1px ${e=>e.theme.containerBorder};
`,An=Object(p.i)(jn.a)`
    font-size: ${e=>e.theme.textSize};
    font-weight: bold;
    padding: 10px 24px;

    width: 100%;
    flex-shrink: 0;

    &:not(:last-child) {
        margin-bottom: 10px;
    }
`,In=p.i.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    &:not(:last-child) {
        margin-bottom: 10px;
    }

    flex-shrink: 0;
`,Dn=Object(p.i)(jn.c)`
    font-size: ${e=>e.theme.textSize};
    font-weight: bold;
    padding: 10px 24px;

    width: 100%;
    word-break: break-word;
`,$n=Object(p.i)(jn.f)`
    &:hover {
        opacity: 0.6;
    }
`,Mn=navigator.platform.startsWith("Mac")?"mac":navigator.platform.startsWith("Win")?"win":navigator.platform.includes("Linux")?"linux":"unknown";let Fn=class extends a.Component{constructor(){super(...arguments),this.selectApplication=()=>Pn(this,void 0,void 0,(function*(){var e;const t=null!==(e=Ke.a.selectApplication)&&void 0!==e?e:()=>Object(_t.g)("path"),n=yield t();n?this.runApplication(n).then(()=>{this.props.uiStore.rememberElectronPath(n)}):this.props.closeSelf()}))}componentDidMount(){return Pn(this,void 0,void 0,(function*(){const{previousElectronAppPaths:e}=this.props.uiStore;0===e.length&&(this.selectApplication(),"mac"!==Mn&&this.props.closeSelf())}))}runApplication(e){return Pn(this,void 0,void 0,(function*(){const{activateInterceptor:t,reportStarted:n,reportSuccess:r}=this.props;n(),t({pathToApplication:e}).then(()=>{r()}).catch(t=>{this.props.uiStore.forgetElectronPath(e),Object(o.d)(t)})}))}render(){const e=this.props.uiStore,{previousElectronAppPaths:t,forgetElectronPath:n}=e,r="mac"===Mn?"application":"win"===Mn?"exe":"linux"===Mn?"binary":"application",o="a"===(i=r)[0]||"e"===i[0]?"an":"a";var i;return a.createElement(Rn,null,a.createElement("p",null,"Start an Electron ",r," with HTTP Toolkit's settings injected, to intercept all its HTTP & HTTPS traffic."),"mac"===Mn&&t.length<2&&a.createElement("p",null,"For .app bundles, you can intercept either the bundle (the .app directory) or the executable itself, typically stored in Contents/MacOS inside the bundle."),a.createElement("p",null,t.length?`You can also rerun a previously started ${r}, using the buttons below`:`Once you've run ${o} ${r}, it'll be saved and shown here so you can rerun it later`,"."),a.createElement(Hn,null),a.createElement(An,{onClick:this.selectApplication},"Select ",o," ",r),t.length>0&&a.createElement(qn,null),t.map(e=>a.createElement(In,{key:e},a.createElement(Dn,{title:e,onClick:()=>this.runApplication(e)},"Start ",function(e){if("win"===Mn)return s.last(e.split("\\"));{const t=e.split("/").filter(e=>"bin"!==e&&"run"!==e),n=s.find(t,e=>e.endsWith(".app"));return n?n.slice(0,-4):t[t.length-1]}}(e)),a.createElement($n,{onClick:()=>n(e)},a.createElement(zt.b,{icon:["fas","times"]})))))}};Fn=kn([Object(u.d)("uiStore"),u.e],Fn);const Bn={columnWidth:1,rowHeight:2,configComponent:Fn};var Nn=n(651),Ln=n(18),Un=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},Wn=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))};const zn=p.i.div`
    user-select: text;

    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;

    > p {
        line-height: 1.2;

        &:not(:last-child) {
            margin-bottom: 5px;
        }

        &:not(:first-child) {
            margin-top: 5px;
        }
    }

    > canvas {
        margin: 0 auto;
        /* Without white padding, the QR code sometimes isn't scannable */
        padding: 5px;
        background-color: #fff;
    }

    a[href] {
        color: ${e=>e.theme.linkColor};

        &:visited {
            color: ${e=>e.theme.visitedLinkColor};
        }
    }
`,_n=p.i.div`
    flex: 1 1 100%;
`;function Vn(e){return e.exchanges.filter(e=>"http://android.httptoolkit.tech/config"===e.request.url).map(e=>e.id)}function Gn(e,t,n,r){t.ensureRuleExists({id:"default-android-certificate",type:"http",activated:!0,matchers:[new Ln.i.GET,new ut.matchers.SimplePathMatcher("http://android.httptoolkit.tech/config")],completionChecker:new ut.completionCheckers.Always,handler:new Ln.o(200,void 0,JSON.stringify({certificate:e}),{"content-type":"application/json"})});const o=Vn(n);Object(d.when)(()=>s.difference(Vn(n),o).length>0).then(()=>{r()})}let Jn=class extends a.Component{componentDidMount(){return Wn(this,void 0,void 0,(function*(){const e=this.props.rulesStore,t=this.props.eventsStore,n=this.props.proxyStore,{reportStarted:r,reportSuccess:s}=this.props;n.refreshNetworkAddresses().then(()=>{0===n.externalNetworkAddresses.length&&(alert("Cannot activate Android interception as no network addresses could be detected.\n\nPlease open an issue at github.com/httptoolkit/httptoolkit"),Object(o.d)("Android QR activation failed - no network addresses"),this.props.closeSelf())}),Gn(n.certContent,e,t,0===Vn(t).length?s:()=>s({showRequests:!1})),r()}))}render(){const{certFingerprint:e,httpProxyPort:t,externalNetworkAddresses:n}=this.props.proxyStore,r={addresses:n,port:t,certFingerprint:e},o=(s=JSON.stringify(r),Object(M.l)(s).toString("base64").replace(/\+/g,"-").replace(/\//g,"_"));var s;return a.createElement(zn,null,a.createElement("p",null,"Scan the QR code below on your device to install the HTTP Toolkit app, and start intercepting HTTP & HTTPS traffic."),a.createElement("p",null,"Don't have a barcode scanner? Install the ",a.createElement("a",{href:"https://play.google.com/store/apps/details?id=tech.httptoolkit.android.v1&referrer="+o,target:"_blank",rel:"noreferrer noopener"},"HTTP Toolkit app")," manually instead."),a.createElement(_n,null),a.createElement(Nn,{size:160,value:"https://android.httptoolkit.tech/connect/?data="+o}),a.createElement(_n,null),a.createElement("p",null,"Once activated, this will send all HTTP & HTTPS traffic to HTTP Toolkit, and configure the device to trust its HTTPS certificate by default."),a.createElement("p",null,a.createElement("strong",null,"This won't work immediately for all apps.")," Some may need changes to trust HTTP Toolkit for HTTPS traffic. ",a.createElement("a",{href:"https://httptoolkit.com/docs/guides/android",target:"_blank",rel:"noreferrer noopener"},"See the docs")," for more details."))}};Jn=Un([Object(u.d)("proxyStore"),Object(u.d)("rulesStore"),Object(u.d)("eventsStore"),u.e],Jn);const Kn={columnWidth:2,rowHeight:2,configComponent:Jn};var Yn=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},Qn=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))};const Xn=p.i.div`
    user-select: text;

    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;

    > p {
        line-height: 1.2;

        &:not(:last-child) {
            margin-bottom: 5px;
        }

        &:not(:first-child) {
            margin-top: 5px;
        }
    }

    a[href] {
        color: ${e=>e.theme.linkColor};

        &:visited {
            color: ${e=>e.theme.visitedLinkColor};
        }
    }
`,Zn=p.i.ul`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    height: 100%;
`,er=p.i.li`
    margin: 0 -15px -15px;
    padding: 15px;
`,tr=Object(p.i)(jn.a)`
    font-size: ${e=>e.theme.textSize};
    font-weight: bold;
    padding: 10px 24px;
    width: 100%;

    > svg {
        margin-right: 10px;
    }
`;let nr=class extends a.Component{constructor(){super(...arguments),this.inProgressIds=[],this.onSuccess=()=>{this.props.reportSuccess({showRequests:this.deviceIds.length<=1})}}get deviceIds(){var e;return(null===(e=this.props.interceptor.metadata)||void 0===e?void 0:e.deviceIds)||[]}componentDidMount(){return Qn(this,void 0,void 0,(function*(){1===this.deviceIds.length&&(this.interceptDevice(this.deviceIds[0]),this.props.closeSelf())}))}render(){return a.createElement(Xn,null,a.createElement("p",null,"There are multiple ADB devices connected."),a.createElement("p",null,"Pick which device you'd like to intercept:"),a.createElement(Zn,null,this.deviceIds.map(e=>{const t=this.inProgressIds.includes(e);return a.createElement(er,{key:e},a.createElement(tr,{disabled:t,onClick:t?s.noop:()=>this.interceptDevice(e)},t?a.createElement(zt.b,{icon:["fas","spinner"],spin:!0}):e.includes("emulator-")?a.createElement(zt.b,{icon:["far","window-maximize"]}):e.match(/\d+\.\d+\.\d+\.\d+:\d+/)?a.createElement(zt.b,{icon:["fas","network-wired"]}):a.createElement(zt.b,{icon:["fas","mobile-alt"]}),e))})))}interceptDevice(e){const{inProgressIds:t,onSuccess:n,props:{proxyStore:r,rulesStore:o,eventsStore:i,reportStarted:a,activateInterceptor:c}}=this;Gn(r.certContent,o,i,n),a();const l=c({deviceId:e});t.push(e),l.finally(Object(d.action)(()=>{s.pull(t,e)}))}};Yn([d.computed],nr.prototype,"deviceIds",null),Yn([d.observable],nr.prototype,"inProgressIds",void 0),Yn([d.action.bound],nr.prototype,"interceptDevice",null),nr=Yn([Object(u.d)("proxyStore"),Object(u.d)("rulesStore"),Object(u.d)("eventsStore"),Object(u.d)("accountStore"),u.e],nr);const rr={columnWidth:1,rowHeight:2,configComponent:nr};var or=n(22),sr=n.n(or),ir=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},ar=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))};let cr=class extends a.Component{componentDidMount(){return ar(this,void 0,void 0,(function*(){const{activateInterceptor:e,reportStarted:t,reportSuccess:n,closeSelf:r}=this.props;r();try{yield e({},!1),t()}catch(n){if(!n.metadata||!0!==n.metadata.closeConfirmRequired)throw t(),n;if(!confirm(sr.a`
                Your browser is currently open, and needs to be
                restarted to enable interception. Restart it now?
            `.replace("\n"," ")))return;t(),yield e({closeConfirmed:!0})}n()}))}render(){return null}};cr=ir([u.e],cr);const lr={columnWidth:1,rowHeight:1,configComponent:cr};var dr=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i};const ur=p.i.div`
    text-align: center;
`,pr=Object(p.i)(zt.b).attrs(()=>({icon:["fas","spinner"],spin:!0,size:"2x"}))`
    display: block;
    margin: 0 auto 10px;
`,hr=p.i.div`
    max-height: 279px;
    overflow-y: auto;
    margin: 10px -15px;
`,mr=p.i.ul`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
`,gr=p.i.li`
    margin-bottom: -10px;
    padding: 10px;

    &:first-child {
        padding-top: 0;
    }

    &:last-child {
        padding-bottom: 0;
        margin-bottom: 0;
    }
`,fr=Object(p.i)(jn.a)`
    font-size: ${e=>e.theme.textSize};
    padding: 10px;
    width: 100%;

    display: flex;
    align-items: center;

    ${e=>"active"===e.state&&"&& { background-color: #4caf7d; }"}
`,br=Object(p.i)(zt.b)`
    margin-right: 10px;
`,yr=p.i.span`
    flex-grow: 1;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: center;

    ${e=>"left"===e.ellipseDirection?"direction: rtl;":""}
`;let vr=class extends a.Component{render(){const{targetName:e,targets:t,interceptTarget:n,ellipseDirection:r}=this.props;return 0===t.length?a.createElement(ur,null,a.createElement(pr,null),"Looking for running ",e," to intercept..."):a.createElement(hr,null,a.createElement(mr,null,s.map(t,e=>a.createElement(gr,{key:e.id},a.createElement(fr,{title:e.title,state:e.status,disabled:"available"!==e.status,onClick:"available"===e.status?()=>n(e.id):s.noop},"activating"===e.status?a.createElement(br,{icon:["fas","spinner"],spin:!0}):"active"===e.status?a.createElement(br,{icon:["fas","check"]}):null,a.createElement(yr,{ellipseDirection:r},e.content))))))}};vr=dr([u.e],vr);var xr=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i};let wr=class extends a.Component{constructor(){super(...arguments),this.jvmTargets={},this.updateTargets=Object(d.flow)(function*(){var e;const t=yield Object(ht.d)("attach-jvm");this.jvmTargets=null!==(e=null==t?void 0:t.jvmTargets)&&void 0!==e?e:{}}.bind(this)),this.inProgressPids=[]}componentDidMount(){this.updateTargets();const e=setInterval(this.updateTargets,2e3);Object(u.c)(this,()=>clearInterval(e))}render(){const e=Object.values(this.jvmTargets).filter(e=>!e.name.startsWith("org.apache.maven.wrapper.MavenWrapperMain ")),t=this.props.proxyStore.httpProxyPort;return a.createElement(Er,null,a.createElement("p",null,"Pick which JVM process you'd like to intercept:"),a.createElement(vr,{targetName:"JVM processes",interceptTarget:this.interceptTarget,ellipseDirection:"left",targets:e.map(e=>{const n=this.inProgressPids.includes(e.pid),r=void 0!==e.interceptedByProxy,o=e.interceptedByProxy===t,s=e.name.split(" ")[0];let i,c;if(!s.includes("/")&&!s.includes("\\")){const[e,...t]=s.split(".").reverse(),n=t.reverse().join(".");i=n?n+".":"",c=e}else{const[e,...t]=s.split(/\/|\\/).reverse(),n=t.reverse().join("/");i=n?n+"/":"",c=e}return{id:e.pid,title:e.name,status:n?"activating":o?"active":r?"unavailable":"available",content:a.createElement(a.Fragment,null,a.createElement(Tr,null,i),a.createElement(Or,null,c))}})}),a.createElement(Cr,null,"You can also launch JVM processes from an intercepted terminal, where they'll be intercepted automatically."))}interceptTarget(e){const{inProgressPids:t,props:{reportStarted:n,activateInterceptor:r,proxyStore:o}}=this;n();const i=r({targetPid:e});i.then(()=>{const t=this.jvmTargets[e];t&&(t.interceptedByProxy=o.httpProxyPort),this.props.reportSuccess({showRequests:!1})}),t.push(e),i.finally(Object(d.action)(()=>{s.pull(t,e)}))}};xr([d.observable.shallow],wr.prototype,"jvmTargets",void 0),xr([d.observable],wr.prototype,"inProgressPids",void 0),xr([d.action.bound],wr.prototype,"interceptTarget",null),wr=xr([Object(u.d)("proxyStore"),u.e],wr);const Er=p.i.div`
    user-select: text;

    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > p {
        line-height: 1.2;

        &:not(:last-child) {
            margin-bottom: 5px;
        }

        &:not(:first-child) {
            margin-top: 5px;
        }
    }

    a[href] {
        color: ${e=>e.theme.linkColor};

        &:visited {
            color: ${e=>e.theme.visitedLinkColor};
        }
    }
`,Cr=p.i.p`
    font-size: 85%;
    font-style: italic;
`,Tr=p.i.span`
    opacity: 0.6;
`,Or=p.i.span`
    font-weight: bold;
`,Sr={columnWidth:1,rowHeight:2,configComponent:wr};var jr=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i};const kr=p.i.div`
    user-select: text;

    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > p {
        line-height: 1.2;

        &:not(:last-child) {
            margin-bottom: 5px;
        }

        &:not(:first-child) {
            margin-top: 5px;
        }
    }

    a[href] {
        color: ${e=>e.theme.linkColor};

        &:visited {
            color: ${e=>e.theme.visitedLinkColor};
        }
    }
`,Pr=p.i.p`
    font-size: 85%;
    font-style: italic;
`;let Rr=class extends a.Component{constructor(){super(...arguments),this.targets={},this.updateTargets=Object(d.flow)(function*(){var e;const t=yield Object(ht.d)("docker-attach");this.targets=null!==(e=null==t?void 0:t.targets)&&void 0!==e?e:{}}.bind(this)),this.inProgressIds=[]}componentDidMount(){this.updateTargets();const e=setInterval(this.updateTargets,2e3);Object(u.c)(this,()=>clearInterval(e))}render(){const e=this.props.proxyStore.httpProxyPort,t=Object.values(this.targets).filter(e=>!e.image.startsWith("httptoolkit/docker-socks-tunnel"));return a.createElement(kr,null,a.createElement("p",null,"Pick a container to restart it with all traffic intercepted:"),a.createElement(vr,{targetName:"Docker containers",interceptTarget:this.interceptTarget,ellipseDirection:"right",targets:t.map(t=>{var n;const r=this.inProgressIds.includes(t.id),o=t.labels["tech.httptoolkit.docker.proxy"]===e.toString(),s=(null===(n=t.names[0])||void 0===n?void 0:n.replace(/^\//,""))||t.id.slice(0,8),i=t.id.startsWith(s)?`'${s}'`:`'${s}' (${t.id.slice(0,8)})`;return{id:t.id,title:`Container ${i}, from image '${t.image}'`,status:r?"activating":o?"active":"available",content:a.createElement(a.Fragment,null,a.createElement(Hr,null,s),a.createElement(qr,null,t.image))}})}),a.createElement(Pr,null,"You can also create Docker containers from an intercepted terminal, where they'll be intercepted automatically."))}interceptTarget(e){const{inProgressIds:t,props:{reportStarted:n,activateInterceptor:r,proxyStore:o}}=this;n();const i=r({containerId:e});i.then(()=>{const t=this.targets[e];t&&(t.labels["tech.httptoolkit.docker.proxy"]=o.httpProxyPort.toString()),this.props.reportSuccess({showRequests:!1})}),t.push(e),i.finally(Object(d.action)(()=>{s.pull(t,e)}))}};jr([d.observable.shallow],Rr.prototype,"targets",void 0),jr([d.observable],Rr.prototype,"inProgressIds",void 0),jr([d.action.bound],Rr.prototype,"interceptTarget",null),Rr=jr([Object(u.d)("proxyStore"),u.e],Rr);const Hr=p.i.div`
    font-weight: bold;
`,qr=p.i.div`
    opacity: 0.6;
`,Ar={columnWidth:1,rowHeight:2,configComponent:Rr};var Ir=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},Dr=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))};let $r=class extends a.Component{componentDidMount(){return Dr(this,void 0,void 0,(function*(){const{eventsStore:e,reportStarted:t,reportSuccess:n,closeSelf:r}=this.props;r(),window.open("https://httptoolkit.com/docs/guides/ios/","_blank","noreferrer noopener"),t();const o=Mr(e);Object(d.when)(()=>s.difference(Mr(e),o).length>0).then(()=>{n()})}))}render(){return null}};function Mr(e){return e.exchanges.filter(e=>s.isEqual(e.request.source.icon,zt.c.iOS)).map(e=>e.id)}$r=Ir([Object(u.d)("eventsStore"),u.e],$r);const Fr={columnWidth:1,rowHeight:1,configComponent:$r},Br=["browsers","web","pwa"],Nr=["jvm","java","scala","kotlin","clojure","groovy"],Lr=["mobile","phone","app"],Ur=["samsung","galaxy","nokia","lg","android","google","motorola",...Nr],Wr=["apple","ios","iphone","ipad"],zr=["command line","cli","docker","bash","cmd","shell","php","ruby","node","js",...Nr],_r=s.assign({style:{transform:"translateY(32px)"}},zt.c.Android),Vr=(e,t)=>Object.assign(Object.assign({},e),{color:t}),Gr=({accountStore:e,serverVersion:t})=>({webExtensionEnabled:e.featureFlags.includes("webrtc")||Object(f.F)(t||"",f.z)}),Jr={"docker-attach":{name:"Attach to Docker Container",description:["Intercept all traffic from running Docker containers"],uiConfig:Ar,iconProps:zt.c.Docker,tags:["bridge","services","images"]},"fresh-chrome":{name:"Chrome",description:["Intercept a fresh independent Chrome window"],iconProps:zt.c.Chrome,tags:Br,getActivationOptions:Gr},"existing-chrome":{name:"Global Chrome",description:["Intercept your main Chrome profile globally","This captures all default Chrome traffic, so may interfere with normal usage"],uiConfig:lr,iconProps:[zt.c.Chrome,{icon:["fas","globe"],color:"#fafafa",size:"2x"}],tags:Br,getActivationOptions:Gr},"fresh-chrome-beta":{name:"Chrome (Beta)",description:["Intercept a fresh independent Chrome window"],iconProps:Vr(zt.c.Chrome,"#DB4437"),tags:Br,getActivationOptions:Gr},"fresh-chrome-dev":{name:"Chrome (Dev)",description:["Intercept a fresh independent Chrome window"],iconProps:Vr(zt.c.Chrome,"#74929f"),tags:Br,getActivationOptions:Gr},"fresh-chrome-canary":{name:"Chrome (Canary)",description:["Intercept a fresh independent Chrome window"],iconProps:Vr(zt.c.Chrome,"#e8ab01"),tags:Br,getActivationOptions:Gr},"fresh-chromium":{name:"Chromium",description:["Intercept a fresh independent Chromium window"],iconProps:zt.c.Chromium,tags:Br,getActivationOptions:Gr},"fresh-chromium-dev":{name:"Chromium (Dev)",description:["Intercept a fresh independent Chromium window"],iconProps:Vr(zt.c.Chromium,"#74929f"),tags:Br,getActivationOptions:Gr},"fresh-brave":{name:"Brave",description:["Intercept a fresh independent Brave window"],iconProps:zt.c.Brave,tags:Br,getActivationOptions:Gr},"fresh-firefox":{name:"Firefox",description:["Intercept a fresh independent Firefox window"],iconProps:zt.c.Firefox,tags:Br,checkRequirements:({interceptorVersion:e})=>Object(f.F)(e,"^1.1.0")},"existing-arc":{name:"Global Arc Browser",description:["Intercept Arc Browser globally on this machine","This captures all Arc traffic, so may interfere with normal usage"],iconProps:zt.c.Arc,tags:Br,getActivationOptions:Gr,checkRequirements:({accountStore:e})=>e.featureFlags.includes("arc-browser")},"fresh-safari":{name:"Safari",description:["Intercept a fresh independent Safari window"],iconProps:zt.c.Safari,tags:Br},"fresh-edge":{name:"Edge",description:["Intercept a fresh independent Edge window"],iconProps:zt.c.Edge,tags:Br,getActivationOptions:Gr},"fresh-edge-beta":{name:"Edge (Beta)",description:["Intercept a fresh independent Edge window"],iconProps:Vr(zt.c.Edge,"#50e6ff"),tags:Br,getActivationOptions:Gr},"fresh-edge-dev":{name:"Edge (Dev)",description:["Intercept a fresh independent Edge window"],iconProps:Vr(zt.c.Edge,"#74929f"),tags:Br,getActivationOptions:Gr},"fresh-edge-canary":{name:"Edge (Canary)",description:["Intercept a fresh independent Edge window"],iconProps:Vr(zt.c.Edge,"#ffc225"),tags:Br,getActivationOptions:Gr},"fresh-opera":{name:"Opera",description:["Intercept a fresh independent Opera window"],iconProps:zt.c.Opera,tags:Br,checkRequirements:({interceptorVersion:e})=>Object(f.F)(e,"^1.0.3"),getActivationOptions:Gr},"attach-jvm":{name:"Attach to JVM",description:["Attach to any local running JVM process, including Java, Kotlin & Clojure"],iconProps:zt.c.Java,uiConfig:Sr,tags:Nr},"fresh-terminal":{name:"Fresh Terminal",description:["Open a new terminal that intercepts all processes & Docker containers"],iconProps:zt.c.Terminal,tags:zr},"existing-terminal":{name:"Existing Terminal",description:["Intercept all launched processes & Docker containers from an existing terminal window"],iconProps:Vr(zt.c.Terminal,"#dd44dd"),uiConfig:Sn,tags:zr},"android-adb":{name:"Android Device via ADB",description:["Intercept an Android device or emulator connected to ADB","Automatically injects system HTTPS certificates into rooted devices & most emulators"],notAvailableHelpUrl:"https://httptoolkit.com/docs/guides/android/#android-device-via-adb-interception-option-is-not-available",iconProps:_r,checkRequirements:({serverVersion:e})=>Object(f.F)(e||"",f.g),uiConfig:rr,tags:[...Lr,...Ur,"emulator","root","adb"]},"android-device":{name:"Android Device via QR code",description:["Intercept any Android device on your network","Manual setup required for HTTPS in some apps"],iconProps:Vr(_r,"#4285F4"),checkRequirements:({serverVersion:e})=>Object(f.F)(e||"",f.g),clientOnly:!0,uiConfig:Kn,tags:[...Lr,...Ur]},"manual-ios-device":{name:"iOS via Manual Setup",description:["Manually intercept all HTTP and HTTPS traffic from any iPhone or iPad"],iconProps:zt.c.iOS,clientOnly:!0,uiConfig:Fr,tags:[...Lr,...Wr]},"ios-device":{name:"Automatic iOS Device Setup",description:["Intercept all HTTP traffic from an iOS device on your network"],iconProps:zt.c.iOS,tags:[...Lr,...Wr]},"network-device":{name:"A Device on Your Network",description:["Intercept all HTTP traffic from another device on your network"],iconProps:zt.c.Network,tags:[...Lr,...Wr,...Ur,"lan","arp","wifi"]},"virtualbox-machine":{name:"A Virtualbox VM",description:["Intercept all traffic from a Virtualbox VM"],iconProps:zt.c.Desktop,tags:["virtual machine","vagrant"]},"system-proxy":{name:"Everything",description:["Intercept all HTTP traffic on this machine"],iconProps:zt.c.Desktop,tags:["local","machine","system","me"]},electron:{name:"Electron Application",description:["Launch an Electron application with all its traffic intercepted"],iconProps:zt.c.Electron,uiConfig:Bn,tags:["electron","desktop","postman"]},"manual-setup":{name:"Anything",description:["Manually configure any source using the proxy settings and CA certificate"],iconProps:zt.c.Unknown,clientOnly:!0,uiConfig:gn,tags:[]}};function Kr(e,t,n){const r=s.keyBy(e,"id");return s.mapValues(Jr,(e,o)=>{if(!e.clientOnly&&!r[o]||e.checkRequirements&&!e.checkRequirements({interceptorVersion:(r[o]||{}).version,accountStore:t,serverVersion:n}))return s.assign({},e,{id:o,isSupported:!1,isActive:!1,isActivable:!1,activationOptions:void 0});if(e.clientOnly)return s.assign({},e,{id:o,isSupported:!0,isActive:!1,isActivable:!0,activationOptions:e.getActivationOptions?e.getActivationOptions({accountStore:t,serverVersion:n}):void 0});{const i=r[o];return s.assign({},e,i,{id:o,isSupported:!0,activationOptions:e.getActivationOptions?e.getActivationOptions({accountStore:t,serverVersion:n}):void 0})}})}var Yr=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},Qr=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))};class Xr{constructor(e,t){this.proxyStore=e,this.accountStore=t,this.initialized=Object(A.c)(()=>Qr(this,void 0,void 0,(function*(){yield Promise.all([this.proxyStore.initialized,this.accountStore.initialized]),yield this.refreshInterceptors();const e=setInterval(()=>this.refreshInterceptors(),1e4);window.addEventListener("beforeunload",()=>{clearInterval(e)}),console.log("Interceptor store initialized")}))),this.activateInterceptor=(e,t)=>(this.interceptors[e].inProgress=!0,Object(ht.a)(e,this.proxyStore.httpProxyPort,t).then(e=>e||!0).finally(Object(d.action)(()=>{this.interceptors[e].inProgress=!1,this.refreshInterceptors()}))),this.interceptors=Kr([],t)}refreshInterceptors(){return Qr(this,void 0,void 0,(function*(){const e=yield Object(ht.e)(this.proxyStore.httpProxyPort),t=yield f.E;Object(d.runInAction)(()=>{const n=Kr(e,this.accountStore,t);!n["fresh-chrome"].isActivable&&n["existing-chrome"].isActivable&&(n["existing-chrome"].isActivable=!1),this.interceptors=n})}))}}Yr([d.observable],Xr.prototype,"interceptors",void 0),Yr([d.action.bound],Xr.prototype,"activateInterceptor",void 0);var Zr=n(14),eo=n(652),to=n(61),no=n(250),ro=n(55),oo=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},so=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))};const io=Zr.c({spec:Zr.l(),serverMatcher:ro.e,requestMatchers:Object(ro.d)(Zr.i(Zr.c({pathMatcher:ro.e,queryMatcher:Zr.l()})),Zr.d(({path:e})=>e,(e,t)=>({path:e,pathSpec:t.json.spec.paths[e]})))}),ao={"localhost:5001/api/v0":"ipfs","127.0.0.1:5001/api/v0":"ipfs","localhost:5002/api/v0":"ipfs","127.0.0.1:5002/api/v0":"ipfs","ipfs.infura.io:5001/api/v0":"ipfs","localhost:8545/":"ethereum","127.0.0.1:8545/":"ethereum","mainnet.":"ethereum","ropsten.":"ethereum","rinkeby.":"ethereum","kovan.":"ethereum","goerli.":"ethereum","mainnet-":"ethereum","web3.ens.domains/v1/mainnet":"ethereum"};class co{constructor(e){this.accountStore=e,this.initialized=Object(A.c)(()=>so(this,void 0,void 0,(function*(){yield this.accountStore.initialized,Object(d.observe)(this.accountStore,"accountDataLastUpdated",()=>{this.accountStore.isPaidUser||(this.customOpenApiSpecs={})}),yield Object(I.a)({storage:r,jsonify:!1,key:"api-store",store:this}),console.log("API store initialized")}))),this.customOpenApiSpecs={},this.publicApiCache={}}addCustomApi(e,t){this.customOpenApiSpecs[e]=t}deleteCustomApi(e){delete this.customOpenApiSpecs[e]}get customOpenApiInfo(){return s.mapValues(this.customOpenApiSpecs,e=>({info:s.cloneDeep(e.spec.info)}))}get customOpenApiSpecsByUrl(){return new Map(Object.entries(this.customOpenApiSpecs).map(([e,t])=>[new URL("https://"+e.replace(/\/$/,"")),t]).sort(([e,t],[n,r])=>e.port&&!n.port?-1:n.port&&!e.port?1:n.pathname.length-e.pathname.length))}getPrivateApi(e){const t=s.find([...this.customOpenApiSpecsByUrl.keys()],t=>t.hostname===e.hostname&&(!t.port||t.port===e.port||"443"===t.port&&"https"===e.protocol||"80"===t.port&&"http"===e.protocol)&&e.pathname.startsWith(t.pathname));return t?this.customOpenApiSpecsByUrl.get(t):void 0}getPublicApi(e){const{publicApiCache:t}=this;return t[e]||(t[e]=function(e){return so(this,void 0,void 0,(function*(){return(yield fetch(`/api/${e}.json`)).json()}))}(e).then(to.a).catch(t=>{throw console.log("Failed to build API "+e),Object(o.d)(t,{apiSpecId:e}),t})),t[e]}getApi(e){return so(this,void 0,void 0,(function*(){const{parsedUrl:t}=e;let n=this.getPrivateApi(t);if(n)return Promise.resolve(n);let r=function(e){const t=Object(eo.findApi)(e);if(t)return t;const n=Object.keys(ao).find(t=>e.startsWith(t));return n?ao[n]:void 0}(`${t.host}${t.pathname}`);if(!r)return;Array.isArray(r)||(r=[r]),r=r.filter(e=>"microsoft.com/graph"!==e);const i=yield Promise.all(r.map(e=>this.getPublicApi(e)));return 1===i.length?i[0]:function(e,t){const n=e.filter(e=>"openrpc"==e.type||Object(no.b)(e,t).matched);return 1===n.length?n[0]:0===n.length?s.maxBy(e,e=>e.spec.paths.length):(Object(o.d)("Overlapping APIs",n),s.maxBy(n,e=>Object.keys(e.spec.paths).length))}(i,e)}))}}oo([Object(I.b)("map",io),d.observable.shallow],co.prototype,"customOpenApiSpecs",void 0),oo([d.computed],co.prototype,"customOpenApiInfo",null),oo([d.computed],co.prototype,"customOpenApiSpecsByUrl",null);var lo=n(653),uo=function(){function e(){var t=Error.call(this,"ServiceWorker is not supported.");return Object.setPrototypeOf(t,e.prototype),t}return e.prototype=Object.create(Error.prototype),e}();var po=n(654),ho=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))};const mo=()=>Object(ht.i)().catch(console.warn);function go(){alert("This HTTP Toolkit installation is now very outdated, and this version is no longer supported.\n\nYou can continue to use HTTP Toolkit, but you may experience issues & instability.\n\nPlease update to the latest version from httptoolkit.com when you can, to access the many new features, bug fixes & performance improvements available there.")}var fo=n(655);const bo=p.i.nav`
    width: ${"80px"};
    flex-shrink: 0;

    background-color: ${e=>e.theme.mainBackground};
    color: ${e=>e.theme.mainColor};
    z-index: 5;

    border-right: 1px solid rgba(0,0,0,0.12);
    box-sizing: border-box;
    box-shadow: 0 0 30px rgba(0,0,0,0.2);

    font-size: ${e=>e.theme.textSize};

    display: flex;
    flex-direction: column;
`,yo=p.e`
    width: 70px;
    height: 70px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    box-sizing: border-box;
`,vo=p.i.img.attrs(()=>({src:fo,alt:"HTTP Toolkit logo"}))`
    ${yo}
    padding: 8px;
`,xo=Object(p.i)(P.a)`
    ${yo}

    color: ${e=>e.theme.mainColor};
    text-decoration: none;
    line-height: normal;

    width: calc(100% + 2px);
    margin: 0 -1px;

    cursor: pointer;
    user-select: none;
    &:hover, &:focus {
        outline: none;
        color: ${e=>e.theme.popColor};
    }

    border-width: 0 5px;
    border-style: solid;
    border-color: transparent;

    opacity: 0.6;

    ${e=>e.selected&&p.e`{
        opacity: 1;
        border-right-color: ${e=>e.theme.popColor};
    }`}

    > svg {
        margin-bottom: 5px;
    }
`,wo=p.i.div`
    margin-top: auto;
`,Eo=p.i.a`
    ${yo}

    ${e=>e.highlight&&p.e`
        color:  ${e.theme.popColor};
        font-weight: bold;
    `};

    &:hover, &:focus {
        outline: none;
        color: ${e=>e.highlight?e.theme.mainColor:e.theme.popColor};
    }

    text-decoration: none;

    margin-bottom: 5px;

    > svg {
        margin-bottom: 5px;
    }
`,Co=Object(p.i)(jn.f)`
    ${yo}

    opacity: 0.6;

    ${e=>e.highlight&&p.e`
        color:  ${e.theme.popColor};
        font-weight: bold;
    `};

    > svg {
        margin-bottom: 5px;
    }
`,To=Object(u.e)(e=>{const t=e.items.map((e,t)=>{const n=a.createElement(a.Fragment,null,a.createElement(zt.b,{size:"2x",icon:e.icon}),e.name);return"web"===e.type?{position:e.position,component:a.createElement(Eo,{key:e.name,title:e.title,highlight:e.highlight,href:e.url,target:"_blank"},n)}:"router"===e.type?{position:e.position,component:a.createElement(P.c,{key:e.name,path:e.url+"/*"},({match:t})=>a.createElement(xo,{to:e.url,title:e.title,selected:!!t},n))}:{position:e.position,component:a.createElement(Co,{key:e.name,title:e.title,highlight:e.highlight,onClick:e.onClick},n)}});return a.createElement(bo,null,a.createElement(vo,{title:or`
                UI version: ${f.y.slice(0,8)}
                Desktop version: ${"fulfilled"===f.C.state?f.C.value:"Unknown"}
                Server version: ${"fulfilled"===f.E.state?f.E.value:"Unknown"}
            `}),t.filter(e=>"top"===e.position).map(e=>e.component),a.createElement(wo,null),t.filter(e=>"bottom"===e.position).map(e=>e.component))}),Oo=p.i.div`
    &:not(:last-child) {
        margin-bottom: 30px;
    }

    font-size: ${e=>e.theme.headingSize};

    > svg {
        margin-right: 30px;
    }
`,So=Object(p.i)(e=>a.createElement(Yt.a,{className:e.className},a.createElement("h1",null,"Connected Sources"),e.activeSources.length?e.activeSources.map(e=>a.createElement(Oo,{key:e.ua,title:e.ua},a.createElement(zt.b,Object.assign({},e.icon,{fixedWidth:!0})),e.summary)):null))``,jo=p.i.input.attrs(()=>({type:"text"}))`
    width: 100%;
    padding: 15px;
    box-sizing: border-box;

    border-radius: 4px;

    border: 1px solid ${e=>e.theme.containerBorder};
    box-shadow: inset 0 2px 4px 1px rgba(0, 0, 0, 0.1);
    background-color: ${e=>e.theme.highlightBackground};
    color: ${e=>e.theme.highlightColor};

    font-size: ${e=>e.theme.headingSize};
`,ko=Object(p.i)(Vt(zt.b,"visible"))`
    position: absolute;

    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;

    display: ${e=>e.visible?"block":"none"};
`,Po=Object(p.i)(e=>a.createElement("div",{className:e.className},a.createElement(jo,{autoFocus:e.autoFocus,value:e.value,placeholder:e.placeholder,onChange:t=>e.onSearch(t.currentTarget.value)}),a.createElement(ko,{icon:["fas","times"],size:e.iconSize,onClick:()=>e.onSearch(""),visible:!!e.value})))`
    position: relative;
`;var Ro=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i};const Ho=p.i.section`
    display: grid;

    @media (min-width: ${p.b}px) {
        grid-gap: 40px;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 320px;
        padding: 60px 40px;
    }

    @media not (min-width: ${p.b}px) {
        grid-gap: 20px;
        grid-template-columns: 1fr 1fr 1fr;
        padding: 40px;
    }

    grid-auto-rows: minmax(200px, auto);
    grid-auto-flow: row dense;

    max-width: 1200px;
    margin: 0 auto 20px;

    > ${So} {
        @media not (min-width: ${p.b}px) {
            display: none;
        }

        order: -1;
        grid-column: 3 / span 2;
        overflow-y: auto;
        margin-bottom: 0;
    }
`,qo=p.i.div`
    order: -1;

    @media (min-width: ${p.b}px) {
        grid-column: 1 / span 2;
    }

    @media not (min-width: ${p.b}px) {
        grid-column: 1 / -1;
    }

    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    > h1 {
        font-size: ${e=>e.theme.loudHeadingSize};
        font-weight: bold;
        margin-bottom: 40px;
    }

    > p {
        font-size: ${e=>e.theme.headingSize};

        margin-bottom: 20px;
        text-align: left;
        line-height: 1.2;
    }
`,Ao=Object(p.i)(Po).attrs(()=>({autoFocus:!0,placeholder:"Browsers, mobile, docker...",iconSize:"2x"}))`
    @media (min-width: ${p.b}px) {
        margin: 20px 0 0;
    }
`;let Io=class extends a.Component{constructor(){super(...arguments),this.filter=!1,this.gridRef=a.createRef()}render(){const{interceptors:e}=this.props.interceptorStore,{activeSources:t}=this.props.eventsStore,n=!!this.filter&&this.filter.toLocaleLowerCase(),r=s.pickBy(e,e=>!n||s.includes(e.name.toLocaleLowerCase(),n)||s.includes(e.description.join(" ").toLocaleLowerCase(),n)||s.some(e.tags,e=>s.includes(e.toLocaleLowerCase(),n)));return s.some(r,e=>e.isActivable)||(r["manual-setup"]=e["manual-setup"]),a.createElement("div",{className:this.props.className},a.createElement(Ho,{ref:this.gridRef},a.createElement(qo,null,a.createElement("h1",null,"Intercept HTTP"),a.createElement("p",null,"To collect & view HTTP traffic, you need to connect a source of traffic, like a browser, mobile device, or docker container."),a.createElement("p",null,"Click an option below to connect a traffic source, or search for connectors that could work for you:"),a.createElement(Ao,{value:this.filter||"",onSearch:this.onSearchInput})),a.createElement(So,{activeSources:t}),s(r).sortBy(e=>-1*(0+(n&&(e.tags.includes(n)||e.name.toLocaleLowerCase().split(" ").includes(n))?100:0)+(e.isActive||e.isActivable?50:0)+(e.isSupported?25:0))).map((e,t)=>a.createElement(cn,{key:e.id,index:t,interceptor:e,showRequests:this.showRequests})).value()))}showRequests(){this.props.navigate("/view")}onSearchInput(e){this.filter=e||!1}};Ro([d.observable],Io.prototype,"filter",void 0),Ro([d.action.bound],Io.prototype,"showRequests",null),Ro([d.action.bound],Io.prototype,"onSearchInput",null),Io=Ro([Object(u.d)("interceptorStore"),Object(u.d)("eventsStore"),u.e],Io);const Do=Object(p.i)(Io)`
    height: 100%;
    overflow-y: auto;
    position: relative;
`;var $o=n(73),Mo=n(68),Fo=n(656);const Bo=Object(p.i)(Fo.a)`
    .Resizer {
        background: #000;
        opacity: .3;
        z-index: 1;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        -moz-background-clip: padding;
        -webkit-background-clip: padding;
        background-clip: padding-box;
    }

    .Resizer:hover {
        -webkit-transition: all 1s ease;
        transition: all 1s ease;
        opacity: 0.9;
    }

    .Resizer.horizontal {
        height: 11px;
        margin: -5px 0;
        border-top: 5px solid rgba(255, 255, 255, 0);
        border-bottom: 5px solid rgba(255, 255, 255, 0);
        cursor: row-resize;
        width: 100%;
    }

    .Resizer.horizontal:hover {
        border-top: 5px solid rgba(0, 0, 0, 0.2);
        border-bottom: 5px solid rgba(0, 0, 0, 0.2);
    }

    .Resizer.vertical {
        width: 11px;
        margin: 0 -5px;
        border-left: 5px solid rgba(255, 255, 255, 0);
        border-right: 5px solid rgba(255, 255, 255, 0);
        cursor: col-resize;
    }

    .Resizer.vertical:hover {
        border-left: 5px solid rgba(0, 0, 0, 0.2);
        border-right: 5px solid rgba(0, 0, 0, 0.2);
    }

    .Resizer.disabled {
        cursor: not-allowed;
    }

    .Resizer.disabled:hover {
        border-color: transparent;
    }

    .Pane {
        min-width: 0; /* Don't let flexbox force panes to expand */
    }

    ${({hiddenPane:e})=>e?`\n            .Resizer {\n                display: none !important;\n            }\n\n            .Pane${e} {\n                display: none !important;\n            }\n        `:""}
`,No=Object(p.i)(e=>a.createElement("div",Object.assign({},s.omit(e,["message","icon","spin"])),a.createElement(zt.b,{icon:e.icon,spin:!0===e.spin,className:"slow"===e.spin?"slow-spin":void 0}),e.children&&a.createElement(a.Fragment,null,a.createElement("br",null),e.children)))`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    color: ${e=>e.theme.containerWatermark};
    font-size: 40px;
    text-align: center;

    box-sizing: border-box;
    padding: 20px;
    height: 100%;
    width: 100%;

    margin: auto 0;

    > svg {
        font-size: 150px;
    }
`,Lo=["a:not([disabled])","button:not([disabled])","textarea:not([disabled])","input:not([disabled])","select:not([disabled])",'[tabindex]:not([disabled]):not([tabindex="-1"])'].join(",");function Uo(e){return s.filter(e.querySelectorAll(Lo),e=>null!==e.offsetParent)}var Wo=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))};function zo(e,t,n){return r=>{var o;const s=null===(o=n.current)||void 0===o?void 0:o.editor;if(!s)return;const i=s.getSelection(),a=[];t||a.push({type:"option",label:"Cut",enabled:!!i&&!i.isEmpty(),callback:()=>Wo(this,void 0,void 0,(function*(){var e;const t=s.getSelection();if(!t)return;const n=null===(e=s.getModel())||void 0===e?void 0:e.getValueInRange(t);n&&(yield Object(_t.b)(n),s.executeEdits("clipboard",[{range:t,text:"",forceMoveMarkers:!0}]))}))}),i&&!i.isEmpty()&&a.push({type:"option",label:"Copy",enabled:!!i&&!i.isEmpty(),callback:()=>{var e;const t=s.getSelection();if(!t)return;const n=null===(e=s.getModel())||void 0===e?void 0:e.getValueInRange(t);n&&Object(_t.b)(n)}}),i&&navigator.clipboard&&a.push({type:"option",label:"Paste",enabled:!t,callback:()=>Wo(this,void 0,void 0,(function*(){const e=s.getSelection();if(!e)return;const t=yield navigator.clipboard.readText();s.executeEdits("clipboard",[{range:e,text:t,forceMoveMarkers:!0}])}))}),e.handleContextMenuEvent(r,a)}}var _o=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},Vo=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))};let Go,Jo=Object(h.b)(100).then(()=>Ko());function Ko(e=5){return Vo(this,void 0,void 0,(function*(){try{const e=yield n.e(1).then(n.bind(null,1860)),t=yield n.e(1).then(n.t.bind(null,1537,7));Object(p.f)(t),t.editor.onDidChangeMarkers(e=>{const n=t.editor.getModelMarkers({});Object(d.runInAction)(()=>{Yo.clear(),n.forEach(e=>{var t;const n=e.resource,r=null!==(t=Yo.get(n))&&void 0!==t?t:[];r.push(e),Yo.set(n,r)})})}),Go=e.default}catch(t){if(console.log("Monaco load failed",Object(D.b)(t).message),e<=0)throw console.warn("Repeatedly failed to load monaco editor, giving up"),t;return Ko(e-1)}}))}const Yo=d.observable.map(),Qo=p.i.div`
    ${e=>e.expanded?"\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            height: auto !important;\n        ":"\n            max-height: 560px;\n        "}
`;let Xo=class extends a.Component{constructor(){super(...arguments),this.container=a.createRef(),this.editor=a.createRef(),this.onResize=s.throttle(()=>{this.editor.current&&this.editor.current.relayout()},50,{leading:!0,trailing:!0}),this.resizeObserver=new ResizeObserver(this.onResize),this.contentHeight=0}onContentSizeChange(e){this.contentHeight=Math.min(e.contentHeight,560)}componentDidUpdate(){this.editor.current&&this.editor.current.relayout()}componentDidMount(){this.container.current&&this.resizeObserver.observe(this.container.current)}componentWillUnmount(){this.resizeObserver.disconnect()}render(){var e;return a.createElement(Qo,{ref:this.container,expanded:!!this.props.expanded,style:{height:this.contentHeight+"px"},onContextMenu:zo(this.props.uiStore,!!(null===(e=this.props.options)||void 0===e?void 0:e.readOnly),this.editor)},a.createElement(ns,Object.assign({theme:this.props.uiStore.theme.monacoTheme},this.props,{ref:this.editor,onContentSizeChange:this.onContentSizeChange})))}};_o([d.action.bound],Xo.prototype,"onContentSizeChange",null),_o([d.observable],Xo.prototype,"contentHeight",void 0),Xo=_o([Object(u.d)("uiStore"),u.e],Xo);const Zo=p.i.div`
    ${e=>e.expanded?"\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            height: auto !important;\n        ":"\n            height: 100%;\n        "}
`;let es=class extends a.Component{constructor(){super(...arguments),this.container=a.createRef(),this.editor=a.createRef(),this.onResize=s.throttle(()=>{this.editor.current&&this.editor.current.relayout()},25,{leading:!0,trailing:!0}),this.resizeObserver=new ResizeObserver(this.onResize)}componentDidUpdate(){this.editor.current&&this.editor.current.relayout()}componentDidMount(){this.container.current&&this.resizeObserver.observe(this.container.current)}componentWillUnmount(){this.resizeObserver.disconnect()}render(){var e;return a.createElement(Zo,{ref:this.container,expanded:!!this.props.expanded,onContextMenu:zo(this.props.uiStore,!!(null===(e=this.props.options)||void 0===e?void 0:e.readOnly),this.editor)},a.createElement(ns,Object.assign({theme:this.props.uiStore.theme.monacoTheme},this.props,{ref:this.editor})))}};es=_o([Object(u.d)("uiStore"),u.e],es);const ts=Object(p.i)(e=>a.createElement("div",{className:e.className,"aria-label":"Press enter to focus this editor, and use escape to unfocus it later",tabIndex:0,onKeyDown:e=>{const t=e.currentTarget;if(e.target===t){if("Tab"===e.key){if(e.shiftKey)return;{const n=Uo(document.body),r=s.last(t.children),o=n.indexOf(r),i=n[o+1];return i?(i.focus(),void e.preventDefault()):(n[0].focus(),void e.preventDefault())}}if("Enter"===e.key){const n=Uo(t)[0];return void(n&&(n.focus(),e.preventDefault()))}}else if(t.contains(document.activeElement)&&"Escape"===e.key)return void t.focus()}},e.children,a.createElement("div",{tabIndex:0,onFocus:e=>{e.target===e.currentTarget&&e.currentTarget.parentElement.focus()}})))`
    height: 100%;
    width: 100%;
`;let ns=class extends a.Component{constructor(e){super(e),this.monacoEditorLoaded=!!Go,this.modelUri=void 0,this.registeredSchemaUri=void 0,this.monacoEditorLoaded||Jo.catch(()=>(Jo=Ko(0),Jo)).then(Object(d.action)(()=>this.monacoEditorLoaded=!0)),Object(d.reaction)(()=>this.props.contentId,()=>this.resetUIState())}relayout(){if(this.editor)try{this.editor.layout()}catch(e){return void console.log("Monaco layout error:",e)}}getMarkerController(){var e;return null===(e=this.editor)||void 0===e?void 0:e.getContribution("editor.contrib.markerController")}withoutFocusingEditor(e){if(!this.editor)return;const t=this.editor.focus;this.editor.focus=()=>{},e(),this.editor.focus=t}resetUIState(){return Vo(this,void 0,void 0,(function*(){this.editor&&this.monaco&&(this.editor.setSelection(new this.monaco.Selection(0,0,0,0)),this.relayout(),requestAnimationFrame(()=>{var e;this.editor&&this.monaco&&this.editor.setSelection(new this.monaco.Selection(0,0,0,0)),null===(e=this.getMarkerController())||void 0===e||e.close(!1)}))}))}onEditorDidMount(e,t){this.editor=e,this.monaco=t;const n=e.getModel();this.modelUri=null==n?void 0:n.uri,this.editor.onDidChangeModel(Object(d.action)(e=>{var t;this.modelUri=null!==(t=e.newModelUrl)&&void 0!==t?t:void 0})),this.props.onContentSizeChange&&this.editor.onDidContentSizeChange(this.props.onContentSizeChange),Object(u.c)(this,Object(d.reaction)(()=>{var e;return{markers:null!==(e=this.modelUri&&Yo.get(this.modelUri))&&void 0!==e?e:[]}},({markers:e})=>{var t;e.length&&(null===(t=this.props.options)||void 0===t?void 0:t.readOnly)&&requestAnimationFrame(()=>{this.withoutFocusingEditor(()=>{this.getMarkerController().showAtMarker(e[0])})})},{equals:d.comparer.structural}))}componentDidMount(){Object(u.c)(this,Object(d.autorun)(()=>{var e;if(!this.editor||!this.monaco)return;const t=this.monaco.languages.json.jsonDefaults.diagnosticsOptions;let n=t.schemas||[];const r=null===(e=this.modelUri)||void 0===e?void 0:e.toString();if(r){const e=this.props.schema,o=s.find(t.schemas||[],e=>e.uri===r);!e||o&&o.schema===e?e||(n=n.filter(e=>e!==o)):n=n.filter(e=>e!==o).concat({uri:r,fileMatch:[r],schema:e})}this.registeredSchemaUri&&r!=this.registeredSchemaUri&&(n=n.filter(e=>e.uri!==this.registeredSchemaUri));const o=Object.assign({},t,{validate:!0,schemas:n});s.isEqual(t,o)||this.monaco.languages.json.jsonDefaults.setDiagnosticsOptions(o),this.registeredSchemaUri=r}))}componentWillUnmount(){if(this.editor&&this.monaco&&this.registeredSchemaUri){const e=this.monaco.languages.json.jsonDefaults.diagnosticsOptions,t=(e.schemas||[]).filter(e=>e.uri!==this.registeredSchemaUri),n=Object.assign({},e,{schemas:t});s.isMatch(e,n)||this.monaco.languages.json.jsonDefaults.setDiagnosticsOptions(n),this.registeredSchemaUri=void 0}}render(){if(!this.monacoEditorLoaded||!Go)return Object(o.d)("Monaco editor failed to load"),null;const e=Object.assign({showFoldingControls:"always",scrollbar:{alwaysConsumeMouseWheel:!1},quickSuggestions:!1,parameterHints:{enabled:!1},codeLens:!1,minimap:{enabled:!1},contextmenu:!1,scrollBeyondLastLine:!1,colorDecorators:!1,renderValidationDecorations:"on",fontSize:16,wordWrap:"on"},this.props.options);return e.readOnly?a.createElement(Go,Object.assign({},this.props,{options:e,editorDidMount:this.onEditorDidMount})):a.createElement(ts,null,a.createElement(Go,Object.assign({},this.props,{options:e,editorDidMount:this.onEditorDidMount})))}};_o([d.observable],ns.prototype,"monacoEditorLoaded",void 0),_o([d.observable],ns.prototype,"modelUri",void 0),_o([d.action.bound],ns.prototype,"onEditorDidMount",null),ns=_o([u.e],ns);var rs=n(657),os=n(658);function ss(e){return e[0].toUpperCase()+e.slice(1)}function is(e){if((e=>e in Ln.i)(e))return e+" requests";switch(e){case"wildcard":case"default-wildcard":return"Any requests";case"ws-wildcard":case"default-ws-wildcard":return"Any WebSocket";case"rtc-wildcard":return"Any WebRTC connection";case"method":return"Sent with HTTP method";case"host":return"For a host";case"simple-path":return"For a URL";case"regex-path":return"For URLs matching";case"query":return"With query parameters including";case"exact-query-string":return"With exact query string";case"header":return"Including headers";case"cookie":return"With cookie";case"raw-body":return"With exact body";case"raw-body-includes":return"With body including";case"form-data":return"With form data";case"json-body":return"With JSON body";case"json-body-matching":return"With JSON body including";case"protocol":return"With protocol";case"port":return"For port";case"hostname":return"For hostname";case"eth-method":return"An Ethereum interaction";case"eth-params":return"With Ethereum parameters matching";case"ipfs-interaction":return"An IPFS interaction";case"ipfs-arg":return"With IPFS argument";case"has-rtc-data-channel":return"Including a data channel";case"has-rtc-video-track":return"Including a video track";case"has-rtc-audio-track":return"Including an audio track";case"has-rtc-media-track":return"Including any media track";case"rtc-page-hostname":return"Sent from a web page on a specific hostname";case"rtc-page-regex":return"Sent from a web page matching a URL regex";case"rtc-user-agent-regex":return"Sent by a user agent matching a regex";case"am-i-using":case"callback":case"multipart-form-data":case"raw-body-regexp":throw new Error(e+" handler should not be used directly");default:throw new D.a(e)}}function as(e){switch(e){case"simple":return"fixed response";case"file":return"file response";case"forward-to-host":case"ws-forward-to-host":return"forwarding";case"passthrough":case"ws-passthrough":return"passthrough";case"req-res-transformer":return"transform";case"request-breakpoint":case"response-breakpoint":case"request-and-response-breakpoint":return"breakpoint";case"timeout":return"timeout";case"close-connection":return"connection close";case"reset-connection":return"connection reset";case"ws-reject":return"reject";case"ws-listen":return"listen";case"ws-echo":return"echo";case"eth-call-result":case"eth-number-result":case"eth-hash-result":case"eth-receipt-result":case"eth-block-result":return"fixed result";case"eth-error":return"error";case"ipfs-cat-text":case"ipfs-add-result":case"ipns-resolve-result":case"ipns-publish-result":case"ipfs-pins-result":case"ipfs-pin-ls-result":return"fixed result";case"ipfs-cat-file":return"file";case"wait-for-duration":case"wait-for-rtc-data-channel":case"wait-for-rtc-track":case"wait-for-rtc-media":case"wait-for-rtc-message":case"create-rtc-data-channel":case"send-rtc-data-message":case"close-rtc-connection":case"echo-rtc":case"rtc-dynamic-proxy":return"WebRTC";case"json-rpc-response":case"rtc-peer-proxy":case"callback":case"stream":throw new Error(e+" handler should not be used directly");default:throw new D.a(e)}}function cs(e){const{matchers:t}=e;return 0===t.length?"Never":1===t.length?t[0].explain():2===t.length?`${t[0].explain()} ${t[1].explain()}`:t[0].explain()+" "+t.slice(1,-1).map(e=>e.explain()).join(", ")+(t.length>3?", and ":", ")+t.slice(-1)[0].explain()}function ls(e){if("steps"in e){const t=e.steps.map(e=>e.explain());return ss(t.length>1?t.slice(0,-1).join(", ")+" then "+t.slice(-1)[0]:t[0])}return ss(e.handler.explain())}const ds=Object(p.i)(e=>a.createElement("div",{className:e.className,title:e.status?e.message||void 0:"Waiting for response..."},"aborted"===e.status?a.createElement(zt.b,{icon:["fas","ban"]}):"WS:open"===e.status?a.createElement(a.Fragment,null,"WS ",a.createElement(zt.b,{icon:["fas","spinner"],spin:!0})):"WS:closed"===e.status?"WS":e.status||a.createElement(zt.b,{icon:["fas","spinner"],spin:!0})))`
    font-weight: bold;

    display: flex;
    align-items: center;

    .fa-spinner {
        padding: 6px;
    }

    .fa-ban {
        padding: 5px;
    }

    color: ${e=>Object(N.e)("WS:open"===e.status||"WS:closed"===e.status?void 0:e.status,e.theme)};
`;var us=n(251),ps=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))};const hs=Object(u.e)(e=>a.createElement(fn.a,{icon:["far","trash-alt"],title:`Clear all (${_t.a}+Shift+Delete)`,disabled:e.disabled,onClick:e.onClear})),ms=Object(u.d)("accountStore")(Object(u.e)(e=>{const{isPaidUser:t}=e.accountStore;return a.createElement(fn.a,{icon:["fas","save"],title:t?"Export these exchanges as a HAR file":"With Pro: Export requests & responses as a HAR file, to save for later or share with others",disabled:!t||0===e.events.length,onClick:()=>ps(void 0,void 0,void 0,(function*(){const t=JSON.stringify(yield Object(Tt.a)(e.events)),n=`HTTPToolkit_${g.format(Date.now(),"YYYY-MM-DD_HH-mm")}.har`;Object(_t.f)(n,"application/har+json;charset=utf-8",t)}))})})),gs=Object(u.d)("eventsStore","accountStore")(Object(u.e)(e=>{const{isPaidUser:t}=e.accountStore;return a.createElement(fn.a,{icon:["fas","folder-open"],title:t?"Import exchanges from a HAR file":"With Pro: Import requests & responses from HAR files, to examine past recordings or data from other tools",disabled:!t,onClick:()=>ps(void 0,void 0,void 0,(function*(){const t=yield Object(_t.g)("text",[".har","application/har","application/har+json"]);if(t){let n;try{n=JSON.parse(t),yield e.eventsStore.loadFromHar(n)}catch(e){Object(o.d)(e),"HARError"===e.name&&e.errors?alert(or`
                                HAR file is not valid.

                                ${e.errors.map(e=>Object(us.a)(n,e)).join("\n")}
                            `):alert(or`
                                Could not parse HAR file.

                                ${e.message||e}
                            `)}}}))})})),fs=Object(u.d)("eventsStore")(Object(u.e)(e=>{const{isPaused:t,togglePause:n}=e.eventsStore;return a.createElement(fn.a,{icon:["fas",t?"play":"pause"],title:(t?"Resume":"Pause")+" collecting intercepted exchanges",onClick:n})})),bs=e=>a.createElement(fn.a,{icon:["fas","level-down-alt"],title:"Scroll to the bottom of the list",onClick:e.onScrollToEnd});var ys=n(659),vs=n(62);function xs(e,t){let n=t.trim(),r=[];for(;n.length>0;){const t=e.map(e=>({filterClass:e,match:_(e.filterSyntax,n,0)})).filter(e=>!!e.match&&"full"===e.match.type)[0];if(!t)break;const o=t.match.fullyConsumed,s=n.slice(0,o);n=n.slice(o).trimLeft(),r.unshift(new t.filterClass(s))}return[new he(n),...s.flatten(r)]}function ws(e,t){const n=G(e[0].filter,t);return"full"===t.matchType?[new he(""),...s.flatten([new t.filterClass(n.trim())]),...e.slice(1)]:[new he(n),...e.slice(1)]}const Es=Object(p.i)(zt.b).attrs(()=>({icon:["fas","times"]}))`
    position: absolute;
    right: -20px;
    top: 50%;
    transform: translateY(-50%);
    transition: right 0.1s;
    cursor: pointer;

    padding: 6px;
    background-image: radial-gradient(
        ${e=>vs.f(e.theme.mainBackground,.9)} 50%,
        transparent 100%
    );

    &:hover {
        color: ${e=>e.theme.popColor};
    }
`,Cs=p.i.span`
    white-space: pre; /* Nowrap + show spaces accurately */
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 4px;
`,Ts=p.i.div`
    flex-shrink: 0;

    display: flex;
    align-items: center;

    position: relative;
    overflow: hidden;

    min-width: 0;
    max-width: 100%;
    box-sizing: border-box;

    margin-right: 5px;

    background-color: ${e=>e.theme.mainBackground};
    border: 1px solid ${e=>e.theme.containerWatermark};
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
    border-radius: 3px;

    cursor: pointer;

    &:hover, &:focus-within {
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.4);
    }

    &:hover {
        > ${Es} {
            right: 0;
        }
    }

    &:focus-within {
        outline: none;
        border-color: ${e=>e.theme.popColor};
    }

    &.is-selected {
        background-color: ${e=>e.theme.mainLowlightBackground};
        box-shadow: inset 0 0 12px -8px #000;
    }

    & ::selection {
        background-color: transparent;
    }
`;function Os(e){3===e.detail&&e.preventDefault()}const Ss=a.forwardRef((e,t)=>a.createElement(Ts,{ref:t,className:"filter-tag"+(e.isSelected?" is-selected":""),tabIndex:-1,onKeyDown:e.onKeyDown,onMouseDown:Os,title:"Match "+e.filter.filterDescription},a.createElement(Cs,null,e.filter.toString()),a.createElement(Es,{onClick:e.onDelete})));var js=n(660);const ks=p.i.span`
    font-weight: bold;
`,Ps=p.i.span`
    opacity: 0.7;
`,Rs=p.i.div`
    background-color: ${e=>e.isHighlighted?e.theme.highlightBackground:e.theme.mainBackground};

    ${e=>e.isHighlighted&&p.e`
        ${Ps} {
            opacity: 1;
        }
    `}

    width: 100%;
    cursor: pointer;

    font-size: ${e=>e.theme.textSize};
`,Hs=p.i.p`
    padding: 8px;
`,qs=Object(p.i)(Hs)`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: pre; /* Nowrap + show spaces accurately */

    ${e=>e.isHighlighted&&p.e`
        box-shadow: 0px -8px 10px -10px rgba(0,0,0,0.3);
    `}

    svg {
        margin-left: auto;
    }
`,As=Object(p.i)(fn.a).attrs(()=>({icon:["far","trash-alt"]}))`
    float: right;
    padding: 4px;
    margin: -4px -4px;
`,Is=Object(p.i)(Hs)`
    background-color: ${e=>e.theme.mainLowlightBackground};
    box-shadow:
        inset 0px 12px 8px -10px rgba(0,0,0,0.15),
        inset 0px -8px 8px -10px rgba(0,0,0,0.15);

    white-space: pre; /* Nowrap + show spaces accurately */
    overflow: hidden;
    text-overflow: ellipsis;
`,Ds=e=>{const{suggestion:t,query:n,isHighlighted:r,onDelete:o}=e,s=Object(M.j)(n.slice(t.index),t.value,t.showAs).length,i=n.slice(0,t.index+s),c=t.showAs.slice(s),l="Match "+t.filterClass.filterDescription(G(n,t),"template"===t.matchType);return a.createElement(Rs,{isHighlighted:r},a.createElement(qs,{isHighlighted:r},a.createElement(ks,null,i),a.createElement(Ps,null,c),o&&a.createElement(As,{title:"Delete this custom filter shortcut",onClick:e=>{o(),e.preventDefault(),e.stopPropagation()}})),r&&a.createElement(Is,{title:l},l))},$s=e=>"saveFilters"in e&&!0===e.saveFilters,Ms=p.i.div`
    background-color: ${e=>e.isHighlighted?e.theme.highlightBackground:e.theme.mainBackground};

    :not(:first-child) {
        border-top: 1px solid ${e=>e.theme.containerBorder};
    }

    ${e=>e.isHighlighted&&p.e`
        box-shadow: 0px -8px 10px -10px rgba(0,0,0,0.3);
        font-weight: bold;
    `}

    width: 100%;
    cursor: pointer;

    padding: 8px;
    box-sizing: border-box;

    font-size: ${e=>e.theme.textSize};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    svg {
        margin-right: 5px;
    }
`,Fs=e=>a.createElement(Ms,{isHighlighted:e.isHighlighted},e.isPaidUser?a.createElement(a.Fragment,null,a.createElement(zt.b,{icon:["fas","save"]}),"Save ",e.filterCount>1?`these ${e.filterCount} filters`:"this filter"," as ",`'${e.query}'`||"..."):a.createElement(a.Fragment,null,a.createElement(zt.b,{icon:["far","star"]}),"Get Pro to save ",e.filterCount>1?`these ${e.filterCount} filters`:"this filter"," as ",`'${e.query}'`||"...")),Bs=p.i.input`
    box-sizing: border-box;
    width: 100%;
    height: 100%;

    padding: 3px 0 4px 1px;
    border: none;
    outline: none;

    background-color: ${e=>e.theme.highlightBackground};
    color: ${e=>e.theme.highlightColor};
    font-size: ${e=>e.theme.textSize};

    ::placeholder {
        /*
        For some reason, I think related to react-split-pane setting 'user-select: text',
        the placeholder gets selected by selection.selectAllChildren. This stops that:
        */
        user-select: none;
    }
`,Ns=p.i.div`
    position: absolute;
    bottom: calc(100% + 10px);
    left: 0;
    right: 0;
    z-index: 1;

    background-color: ${e=>e.theme.mainBackground};
    border: 1px solid ${e=>e.theme.containerBorder};
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);

    border-radius: 4px;
    .react-autosuggest__suggestion:first-child > * {
        border-radius: 4px 4px 0 0;
    }
    .react-autosuggest__suggestion:last-child > *, .react-autosuggest__suggestion:last-child > * > * {
        border-radius: 0 0 4px 4px;
    }
    .react-autosuggest__suggestion:first-child:last-child > * {
        border-radius: 4px;
    }

    color: ${e=>e.theme.highlightColor};
    font-size: ${e=>e.theme.textSize};

    &:empty {
        display: none;
    }
`,Ls=e=>a.createElement(Bs,Object.assign({},e)),Us=e=>a.createElement(Ns,Object.assign({},e.containerProps),e.children),Ws=e=>{var t,n;const r=null===(n=null===(t=e.current)||void 0===t?void 0:t.input)||void 0===n?void 0:n.parentElement,o=null==r?void 0:r.querySelector("[role='listbox']");return((null==o?void 0:o.children.length)||0)>0},zs=e=>{const t=a.useRef(null),n=a.useMemo(()=>{return t=e.availableFilters,n=e.value,r=e.suggestionContext,V(t.map(e=>({key:e,syntax:e.filterSyntax})),n,0,{context:r}).map(({key:e,suggestion:t})=>Object.assign({filterClass:e},t));var t,n,r},[e.availableFilters,e.value,e.suggestionContext]),r=a.useCallback(n=>{n.suggestion&&!$s(n.suggestion)&&Ws(t)?"full"===n.suggestion.matchType?e.onFiltersConsidered(ws(e.activeFilters,n.suggestion)):e.onFiltersConsidered([new he(""),...e.activeFilters.slice(1)]):e.onFiltersConsidered(void 0)},[e.onFiltersConsidered,e.activeFilters,t]);let o=void 0;const i=a.useCallback((n,r)=>{if(Ws(t))if($s(r.suggestion)){if(!e.value)return;e.isPaidUser?e.onFiltersSaved(e.activeFilters.slice(1),e.value):e.getPro("save-filter")}else o=ws(e.activeFilters,r.suggestion),o.length!==e.activeFilters.length&&j({category:"Filters",action:"Create",value:r.suggestion.filterClass.filterName}),e.onFiltersChanged(o)},[o,e.value,e.isPaidUser,e.getPro,e.activeFilters,e.onFiltersChanged]),c=a.useCallback(()=>{const n=t.current;o&&o.length===e.activeFilters.length&&(n.justSelectedSuggestion=!1,n.revealSuggestions(),o=void 0),n.resetHighlightedSuggestion(),r({suggestion:null})},[o,i,e.activeFilters.length,t]),l=a.useCallback((e,t)=>e.trim().length>0||!["input-focused","input-changed","escape-pressed"].includes(t),[]),d=a.useCallback(t=>$s(t)?"":G(e.value,t),[e.value]),u=a.useCallback(t=>{t.target.value!==e.value&&e.onChange(t)},[e.onChange,e.value]),p=a.useMemo(()=>({type:"text",value:e.value,onChange:u,placeholder:e.placeholder,ref:e.searchInputRef}),[e.value,u,e.placeholder,e.searchInputRef]),h=e.activeFilters.length>1&&e.value.length>=1&&!e.value.includes(" ")&&1!==s.uniq(n.map(e=>e.filterClass)).length,m=!(h&&0===n.length),g=a.useMemo(()=>h?n.concat({saveFilters:!0,isPaidUser:e.isPaidUser,filterCount:e.activeFilters.length-1}):n,[h,e.isPaidUser,n,e.activeFilters]),f=a.useMemo(()=>{return t=e.onCustomFilterDeleted,n=e.value,(e,r)=>{if($s(e))return a.createElement(Fs,Object.assign({},e,r,{query:n}));const{filterClass:o}=e,s=o.isCustomFilter?()=>t(o):void 0;return a.createElement(Ds,Object.assign({suggestion:e},r,{query:n,onDelete:s}))};var t,n},[e.onCustomFilterDeleted,e.value]);return a.createElement(js,{ref:t,multiSection:!1,suggestions:g,highlightFirstSuggestion:m,shouldRenderSuggestions:l,onSuggestionsFetchRequested:s.noop,onSuggestionsClearRequested:c,onSuggestionHighlighted:r,onSuggestionSelected:i,getSuggestionValue:d,renderSuggestion:f,renderInputComponent:Ls,renderSuggestionsContainer:Us,inputProps:p})};var _s=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i};const Vs=p.i.div`
    position: relative;

    &:focus-within {
        border-color: ${e=>e.theme.highlightColor};
    }

    flex-grow: 1;
    min-width: 0; /* Don't let flexbox force this to expand given long tags */
    padding-right: ${e=>e.hasContents?"30px":"0"};

    border-radius: 4px;

    border: 1px solid ${e=>e.theme.containerBorder};
    box-shadow: inset 0 2px 4px 1px rgba(0, 0, 0, 0.1);
    background-color: ${e=>e.theme.highlightBackground};
    color: ${e=>e.theme.highlightColor};

    font-size: ${e=>e.theme.textSize};

    display: flex;

    &:hover, &:focus-within {
        flex-wrap: wrap;
    }
    &:not(:hover):not(:focus-within) {
        overflow: hidden;
    }

    /* Add a layer to act as a button background over non-wrapping content */
    &:after {
        content: "";
        position: absolute;
        display: block;

        z-index: 5;

        top: 4px;
        bottom: 4px;

        right: 0px;
        width: 36px;
        background: linear-gradient(
            to right,
            transparent 0%,
            ${e=>vs.f(e.theme.highlightBackground,.9)} 25%
        );
    }

    .react-autosuggest__container {
        flex-grow: 1;
        flex-basis: 100px; /* Shrink down to this, then wrap */
    }

    padding-bottom: 4px;
    > div {
        margin: 4px 0 0 4px;
    }
`,Gs=p.e`
    width: ${"30px"};
    padding: 4px 10px;
    box-sizing: border-box;

    /* This isn't needed for button, but is for buttonlink - unclear why but it works */
    display: flex;
    align-items: center;

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;

    /* Appears in front of the :after background layer */
    z-index: 10;
`,Js=Object(p.i)(fn.a)`${Gs}`,Ks=Object(p.i)(fn.b)`
    ${Gs}
    opacity: 0.8;
`;let Ys=class extends a.Component{constructor(){super(...arguments),this.boxRef=a.createRef(),this.tagRefs=new Map,this.selectedFilters=[],this.undoer=Object(ys.trackUndo)(()=>this.activeFilters,e=>this.onFiltersChanged(e)),this.updateSelectedTags=Object(d.action)(()=>{this.selectedFilters=this.getSelectedFilters()}),this.onKeyDown=e=>{var t;const n=this.boxRef.current;if(!n)return;const{onFiltersChanged:r,activeFilters:o}=this,s=(e=>{const t=document.getSelection();return!t||t.isCollapsed?[]:[...Array.from(e.querySelectorAll(".filter-tag")),e.querySelector("input")].filter(e=>t.containsNode(e,!0))})(n);if(!n.contains(document.activeElement))return void(s&&document.getSelection().removeAllRanges());if("a"===e.key&&Object(_t.c)(e))return this.selectAllFilterTags(),void e.preventDefault();if("z"===e.key.toLowerCase()&&Object(_t.c)(e))return e.shiftKey?this.undoer.redo():this.undoer.undo(),void e.preventDefault();const i=Array.from(n.querySelectorAll(".filter-tag")),a=n.querySelector("input"),c=[...i,a],l=document.activeElement,d=c.indexOf(l);if(l!==a&&"v"===e.key&&Object(_t.c)(e)){a.focus();const e=a.value.length;a.setSelectionRange(e,e)}else{var u,p;if(-1!==d)if(s.length>0){if("ArrowLeft"===e.key||"ArrowRight"===e.key){const t=s["ArrowLeft"===e.key?0:s.length-1];if(document.getSelection().removeAllRanges(),t.focus(),t===a){const t="ArrowLeft"===e.key?0:a.value.length;a.setSelectionRange(t,t)}e.preventDefault()}else if("Delete"===e.key||"Backspace"===e.key){const t=c.indexOf(s[s.length-1]);this.deleteSelectedFilters(),document.getSelection().removeAllRanges(),c.length-t<3&&(a.focus(),a.setSelectionRange(0,0)),e.preventDefault()}else if("Escape"===e.key){document.getSelection().removeAllRanges(),a.focus();const t=a.value.length;a.setSelectionRange(t,t),e.preventDefault()}else if(1===[...e.key].length&&!e.ctrlKey&&!e.altKey&&!e.metaKey){const e=a.selectionStart||a.value.length;this.deleteSelectedFilters(),document.getSelection().removeAllRanges(),a.setSelectionRange(e,e),a.focus()}}else if(a.selectionStart===a.selectionEnd){const n=null!==(t=a.selectionStart)&&void 0!==t?t:-1,s=l===a;if("Backspace"===e.key||"Delete"===e.key){let t=s?n<=0&&"Backspace"===e.key?1:null:c.length-1-d;t&&(r((u=o,0===(p=t)||0===u.length?u:[u[0],...u.slice(1,p),...u.slice(p+1)])),1===t&&a.focus(),e.preventDefault())}else if("ArrowLeft"===e.key&&d>0&&n<=0)c[d-1].focus(),e.preventDefault();else if("ArrowRight"===e.key&&d<c.length-1){const t=c[d+1];t.focus(),t===a&&a.setSelectionRange(0,0),e.preventDefault()}}}},this.onCopy=e=>{const{activeFilters:t}=this,n=s.orderBy(this.getSelectedFilters(),e=>t.indexOf(e),["desc"]);if(n.length>0){const t=n.map(e=>e.serialize()).join(" ");Object(_t.b)(t),e.preventDefault()}},this.onCut=e=>{this.onCopy(e),this.deleteSelectedFilters()},this.onPaste=e=>{var t,n;const r=this.boxRef.current,o=null==r?void 0:r.querySelector("input");if(!r||!o)return;e.preventDefault();const{selectedFilters:s,activeFilters:i,onFiltersChanged:a,props:{availableFilters:c}}=this,l=xs(c,e.clipboardData.getData("text")),d=l[0].filter,u=null!==(t=o.selectionStart)&&void 0!==t?t:0,p=null!==(n=o.selectionEnd)&&void 0!==n?n:0,h=i[0].filter,m=s.includes(i[0])?d:h.slice(0,u)+d+h.slice(p);a([new he(m),...l.slice(1),...i.slice(1).filter(e=>!s.includes(e))]),requestAnimationFrame(()=>{const e=u+d.length;o.setSelectionRange(e,e),o.focus()})},this.onInputChanged=e=>{const{onFiltersChanged:t,activeFilters:n}=this;t([new he(e.target.value),...n.slice(1)])},this.onFiltersCleared=()=>{var e;this.onFiltersChanged(pe());const t=null===(e=this.boxRef.current)||void 0===e?void 0:e.querySelector("input[type=text]");null==t||t.focus()}}get activeFilters(){return this.props.uiStore.activeFilterSet}onFiltersChanged(e){this.props.uiStore.activeFilterSet=e}get availableFilters(){const e=this.props.availableFilters,t=Object.entries(this.props.uiStore.customFilters).map(([t,n])=>function(e,t,n){const r=xs(n,t),o=""===r[0].filter?r.slice(1):r;return Object.assign((function(){return o}),{filterSyntax:[new oe(e)],filterDescription:()=>t,filterName:e,isCustomFilter:!0})}(t,n,e));return e.concat(t)}getSelectedFilters(){const e=document.getSelection();if(!e||e.isCollapsed)return[];const{boxRef:t,tagRefs:n,activeFilters:r}=this,o=t.current;o&&n.set(o.querySelector("input"),r[0]);const s=[];return Array.from(n.entries()).forEach(([t,r])=>{document.contains(t)?e.containsNode(t,!0)&&s.push(r):n.delete(t)}),s}componentDidMount(){this.updateSelectedTags(),document.addEventListener("selectionchange",this.updateSelectedTags),Object(u.c)(this,()=>{document.removeEventListener("selectionchange",this.updateSelectedTags)})}selectAllFilterTags(){const e=this.boxRef.current;e&&window.getSelection().setBaseAndExtent(e,0,e.querySelector("[role=listbox]"),0)}deleteSelectedFilters(){const{selectedFilters:e,onFiltersChanged:t,activeFilters:n}=this,r=e.includes(n[0])?"":n[0].filter||"";t([new he(r),...n.filter((t,n)=>n>0&&!e.includes(t))])}onFiltersSaved(e,t){const n=this.props.uiStore;n.customFilters[t]=e.map(e=>e.serialize()).reverse().join(" "),n.activeFilterSet=[new he(""),...n.activeFilterSet.slice(1)]}onCustomFilterDeleted(e){delete this.props.uiStore.customFilters[e.filterName]}render(){var e;const{boxRef:t,onCopy:n,onCut:r,onPaste:o,onKeyDown:s,onInputChanged:i,onFiltersCleared:c,onFiltersChanged:l,onFiltersSaved:d,onCustomFilterDeleted:u,tagRefs:p,selectedFilters:h,activeFilters:m,availableFilters:g,props:{accountStore:f,placeholder:b,searchInputRef:y,filterSuggestionContext:v,onFiltersConsidered:x}}=this,[w,...E]=m,C=null!==(e=null==w?void 0:w.filter)&&void 0!==e?e:"",T=!!C||!!E.length;return a.createElement(Vs,{ref:t,hasContents:T,onCopy:n,onCut:r,onPaste:o,onKeyDown:s},E.reverse().map((e,t)=>a.createElement(Ss,{key:t,filter:e,isSelected:h.includes(e),onDelete:()=>{return l((n=e,[(t=m)[0],...t.slice(1).filter((e,t)=>e!==n)]));var t,n},ref:t=>{t&&p.set(t,e)}})),a.createElement(zs,{value:C,onChange:i,placeholder:0===E.length?b:"...",searchInputRef:y,onFiltersConsidered:x,onFiltersChanged:l,onFiltersSaved:d,onCustomFilterDeleted:u,activeFilters:m,availableFilters:g,suggestionContext:v,isPaidUser:f.isPaidUser,getPro:f.getPro}),T?a.createElement(Js,{title:"Clear all search filters",icon:["fas","times"],onClick:c}):a.createElement(Ks,{icon:["fas","question"],title:"Open filtering docs",href:"https://httptoolkit.com/docs/reference/view-page/#filtering-intercepted-traffic",target:"_blank",rel:"noreferrer noopener"}))}};_s([d.observable.struct],Ys.prototype,"selectedFilters",void 0),_s([d.computed],Ys.prototype,"activeFilters",null),_s([d.action.bound],Ys.prototype,"onFiltersChanged",null),_s([d.computed],Ys.prototype,"availableFilters",null),_s([d.action.bound],Ys.prototype,"onFiltersSaved",null),_s([d.action.bound],Ys.prototype,"onCustomFilterDeleted",null),Ys=_s([Object(u.d)("uiStore"),Object(u.d)("accountStore"),u.e],Ys);const Qs=Object(p.i)(Object(u.e)(e=>a.createElement("div",{className:e.className},a.createElement("span",{className:"count"},e.filteredEventCount,e.eventCount!==e.filteredEventCount&&" / "+e.eventCount),a.createElement("span",{className:"label"},"requests"))))`
    margin-left: auto;
    padding: 0 10px;

    display: flex;
    flex-direction: column;
    align-items: flex-end;

    .count {
        font-size: 20px;
        font-weight: bold;
        white-space: nowrap;
    }

    .label {
        margin-top: -4px;
        font-size: ${e=>e.theme.textSize};
        opacity: 0.8;
        font-weight: lighter;
    }
`,Xs=p.i.div`
    display: flex;
`,Zs=Object(p.i)(Object(u.e)(e=>a.createElement("div",{className:e.className},a.createElement(Ys,{onFiltersConsidered:e.onFiltersConsidered,availableFilters:Je,filterSuggestionContext:e.allEvents,placeholder:"Filter by method, host, headers, status...",searchInputRef:e.searchInputRef}),a.createElement(Qs,{filteredEventCount:e.filteredCount[0],eventCount:e.filteredCount[1]}),a.createElement(Xs,null,a.createElement(fs,null),a.createElement(bs,{onScrollToEnd:e.onScrollToEnd}),a.createElement(ms,{events:e.filteredEvents}),a.createElement(gs,null),a.createElement(hs,{disabled:0===e.allEvents.length,onClear:e.onClear})))))`
    order: 1;

    min-height: ${38}px;
    width: 100%;
    padding-left: 2px;
    box-sizing: border-box;

    background-color: ${e=>e.theme.mainBackground};

    display: flex;
    align-items: center;
    justify-content: space-between;
`;var ei=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i};const ti=Object(p.i)(No)`
    position: absolute;
    top: ${38}px;
    bottom: 0;
    height: auto;

    line-height: 1.3;
`,ni=p.i.div`
    flex-grow: 1;
    position: relative;
    width: 100%;
    box-sizing: border-box;

    font-size: ${e=>e.theme.textSize};

    &::after { /* Insert shadow over table contents */
        content: '';
        position: absolute;
        top: ${38}px;
        bottom: 0;
        left: 0;
        right: 0;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 30px inset;
        pointer-events: none;
    }
`,ri=p.i.div`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 3px 0;
`,oi=Object(p.i)(Vt(zt.b,"pinned")).attrs(e=>({icon:["fas","thumbtack"],title:e.pinned?"This exchange is pinned, and won't be deleted by default":""}))`
    font-size: 90%;
    background-color: ${e=>e.theme.containerBackground};

    /* Without this, 0 width pins create a large & invisible but still clickable icon */
    overflow: hidden;

    transition: width 0.1s, padding 0.1s, margin 0.1s;

    ${e=>e.pinned?"\n            width: auto;\n            padding: 8px 7px;\n            && { margin-right: -3px; }\n        ":"\n            padding: 8px 0;\n            width: 0 !important;\n            margin: 0 !important;\n\n            > path {\n                display: none;\n            }\n        "}
`,si=Object(p.i)(ri)`
    transition: color 0.2s;
    color: ${e=>Object(N.f)(e.category)};

    background-color: currentColor;

    flex-basis: 5px;
    flex-shrink: 0;
    flex-grow: 0;
    height: 100%;
    padding: 0;

    border-left: 5px solid ${e=>e.theme.containerBackground};
`,ii=p.i.div`
    flex-basis: 10px;
    flex-shrink: 0;
`,ai=Object(p.i)(ri)`
    transition: flex-basis 0.1s;
    ${e=>e.pinned?"flex-basis: 50px;":"flex-basis: 71px;"}

    flex-shrink: 0;
    flex-grow: 0;
`,ci=Object(p.i)(ri)`
    flex-basis: 45px;
    flex-shrink: 0;
    flex-grow: 0;
`,li=Object(p.i)(ri)`
    flex-basis: 49px;
    flex-shrink: 0;
    flex-grow: 0;
    text-align: center;
`,di=Object(p.i)(ri)`
    flex-shrink: 1;
    flex-grow: 0;
    flex-basis: 500px;
`,ui=Object(p.i)(ri)`
    flex-shrink: 1;
    flex-grow: 0;
    flex-basis: 1000px;
`,pi=Object(p.i)(ri)`
    transition: flex-basis 0.1s;
    ${e=>e.pinned?"flex-basis: 109px;":"flex-basis: 130px;"}

    margin-right: 6px !important;

    flex-shrink: 0;
    flex-grow: 0;
`,hi=Object(p.i)(ri)`
    flex-shrink: 1;
    flex-grow: 0;
    flex-basis: 500px;

    > svg {
        padding-right: 0; /* Right, not left - it's rotated */
    }
`,mi=Object(p.i)(ri)`
    flex-shrink: 1;
    flex-grow: 0;
    flex-basis: 1000px;
`,gi=Object(p.i)(mi)`
    text-align: center;
`,fi=Object(p.i)(ri)`
    flex-shrink: 1;
    flex-grow: 0;
    flex-basis: 1000px;
`,bi=p.i.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    user-select: none;
    cursor: pointer;

    &.selected {
        background-color: ${e=>e.theme.highlightBackground};
        color: ${e=>e.theme.highlightColor};
        font-weight: bold;

        ${e=>e.theme===p.g&&p.e`
                ${ds} {
                    color: ${e=>e.theme.highlightColor};
                }
            `}
    }

    &:focus {
        outline: thin dotted ${e=>e.theme.popColor};
    }
`,yi=Object(p.i)(bi)`
    background-color: ${e=>e.theme.mainBackground};

    border-width: 2px 0;
    border-style: solid;
    border-color: transparent;
    background-clip: padding-box;
    box-sizing: border-box;

    &:hover ${si}, &.selected ${si} {
        border-color: currentColor;
    }

    > * {
        margin-right: 10px;
    }
`,vi=Object(p.i)(bi)`
    height: 28px !important; /* Important required to override react-window's style attr */
    margin: 2px 0;

    font-style: italic;
    justify-content: center;
    text-align: center;

    opacity: 0.7;

    &:hover {
        opacity: 1;
    }

    &.selected {
        opacity: 1;
        color: ${e=>e.theme.mainColor};
        background-color: ${e=>e.theme.mainBackground};
    }
`,xi=p.i.header`
    height: 38px;
    overflow: hidden;
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;

    background-color: ${e=>e.theme.mainBackground};
    color: ${e=>e.theme.mainColor};
    font-weight: bold;

    border-bottom: 1px solid ${e=>e.theme.containerBorder};
    box-shadow: 0 0 30px rgba(0,0,0,0.2);

    padding-right: 18px;
    box-sizing: border-box;

    > div {
        padding: 5px 0;
        margin-right: 10px;
        min-width: 0px;

        &:first-of-type {
            margin-left: 0;
        }
    }
`,wi=Object(u.e)(e=>{var t;const{index:n,style:r}=e,{events:o,selectedEvent:s,contextMenuBuilder:i}=e.data,c=o[n],l=s===c;if(c.isTlsFailure()||c.isTlsTunnel())return a.createElement(ji,{index:n,isSelected:l,style:r,tlsEvent:c});if(c.isHttp())return(null===(t=c.api)||void 0===t?void 0:t.isBuiltInApi)&&c.api.matchedOperation()?a.createElement(Si,{index:n,isSelected:l,style:r,exchange:c,contextMenuBuilder:i}):a.createElement(Ei,{index:n,isSelected:l,style:r,exchange:c,contextMenuBuilder:i});if(c.isRTCConnection())return a.createElement(Ti,{index:n,isSelected:l,style:r,event:c});if(c.isRTCDataChannel()||c.isRTCMediaTrack())return a.createElement(Oi,{index:n,isSelected:l,style:r,event:c});throw new D.a(c)}),Ei=Object(u.d)("uiStore")(Object(u.e)(({index:e,isSelected:t,style:n,exchange:r,contextMenuBuilder:o})=>{const{request:s,response:i,pinned:c,category:l}=r;return a.createElement(yi,{role:"row","aria-label":"row","aria-rowindex":e+1,"data-event-id":r.id,tabIndex:t?0:-1,onContextMenu:o.getContextMenuCallback(r),className:t?"selected":"",style:n},a.createElement(oi,{pinned:c}),a.createElement(si,{category:l,title:Object(N.b)(l)}),a.createElement(ai,{pinned:c},s.method),a.createElement(ci,null,"aborted"===i?a.createElement(ds,{status:"aborted"}):r.isBreakpointed?a.createElement(zt.e,{title:"Breakpointed, waiting to be resumed"}):r.isWebSocket()&&101===(null==i?void 0:i.statusCode)?a.createElement(ds,{status:r.closeState?"WS:closed":"WS:open",message:(r.closeState?"A closed":"An open")+" WebSocket connection"}):a.createElement(ds,{status:null==i?void 0:i.statusCode,message:null==i?void 0:i.statusMessage})),a.createElement(li,null,a.createElement(zt.b,Object.assign({title:s.source.summary},s.source.icon,{fixedWidth:!0})),r.matchedRule&&r.matchedRule.handlerStepTypes.some(e=>"passthrough"!==e&&"ws-passthrough"!==e&&"rtc-dynamic-proxy"!==e)&&a.createElement(zt.b,{title:`Handled by ${1===r.matchedRule.handlerStepTypes.length?as(r.matchedRule.handlerStepTypes[0]):"multi-step"} rule`,icon:["fas","theater-masks"],color:Object(N.f)("mutative"),fixedWidth:!0})),a.createElement(di,{title:s.parsedUrl.host},s.parsedUrl.host),a.createElement(ui,{title:s.parsedUrl.pathname+s.parsedUrl.search},s.parsedUrl.pathname+s.parsedUrl.search))})),Ci=Object(p.i)(zt.b).attrs(()=>({icon:["fas","spinner"],spin:!0,title:"Connected"}))`
    margin: 0 5px 0 0;
`,Ti=Object(u.e)(({index:e,isSelected:t,style:n,event:r})=>{const{category:o,pinned:s}=r;return a.createElement(yi,{role:"row","aria-label":"row","aria-rowindex":e+1,"data-event-id":r.id,tabIndex:t?0:-1,className:t?"selected":"",style:n},a.createElement(oi,{pinned:s}),a.createElement(si,{category:o,title:Object(N.b)(o)}),a.createElement(pi,null,!r.closeState&&a.createElement(Ci,null)," WebRTC"),a.createElement(li,{title:r.source.summary},a.createElement(zt.b,Object.assign({},r.source.icon,{fixedWidth:!0}))),a.createElement(gi,null,r.clientURL," ",a.createElement(zt.a,{direction:"right"})," ",r.remoteURL||"?"))}),Oi=Object(u.e)(({index:e,isSelected:t,style:n,event:r})=>{const{category:o,pinned:s}=r;return a.createElement(yi,{role:"row","aria-label":"row","aria-rowindex":e+1,"data-event-id":r.id,tabIndex:t?0:-1,className:t?"selected":"",style:n},a.createElement(oi,{pinned:s}),a.createElement(si,{category:o,title:Object(N.b)(o)}),a.createElement(pi,null,!r.closeState&&a.createElement(Ci,null)," WebRTC ",r.isRTCDataChannel()?"Data":"Media"),a.createElement(li,{title:r.rtcConnection.source.summary},a.createElement(zt.b,Object.assign({},r.rtcConnection.source.icon,{fixedWidth:!0}))),a.createElement(hi,null,a.createElement(zt.a,{direction:"right"})," ",r.rtcConnection.remoteURL),a.createElement(mi,null,r.isRTCDataChannel()?a.createElement(a.Fragment,null,r.label," ",a.createElement("em",null,"(",r.protocol?r.protocol+" - ":"",r.messages.length," message",1!==r.messages.length?"s":"",")")):a.createElement(a.Fragment,null,r.direction," ",r.type," ",a.createElement("em",null,Object(B.a)(r.totalBytesSent)," sent, ",Object(B.a)(r.totalBytesReceived)," received"))))}),Si=Object(u.e)(e=>{const{request:t,pinned:n,category:r}=e.exchange,o=e.exchange.api;return a.createElement(yi,{role:"row","aria-label":"row","aria-rowindex":e.index+1,"data-event-id":e.exchange.id,tabIndex:e.isSelected?0:-1,onContextMenu:e.contextMenuBuilder.getContextMenuCallback(e.exchange),className:e.isSelected?"selected":"",style:e.style},a.createElement(oi,{pinned:n}),a.createElement(si,{category:r,title:Object(N.b)(r)}),a.createElement(pi,null,o.service.shortName,": ",s.startCase(o.operation.name.replace("eth_",""))),a.createElement(li,{title:t.source.summary},a.createElement(zt.b,Object.assign({},t.source.icon,{fixedWidth:!0}))),a.createElement(fi,null,o.request.parameters.filter(e=>void 0!==e.value).map(e=>`${e.name}=${JSON.stringify(e.value)}`).join(", ")))}),ji=Object(u.e)(e=>{const{tlsEvent:t}=e,n=t.isTlsTunnel()?"Tunnelled TLS ":{closed:"Aborted ",reset:"Aborted ",unknown:"Aborted ","cert-rejected":"Certificate rejected for ","no-shared-cipher":"HTTPS setup failed for "}[t.failureCause];return a.createElement(vi,{role:"row","aria-label":"row","aria-rowindex":e.index+1,"data-event-id":t.id,tabIndex:e.isSelected?0:-1,className:e.isSelected?"selected":"",style:e.style},t.isTlsTunnel()&&t.isOpen()&&a.createElement(Ci,null)," ",n," connection to ",t.upstreamHostname||"unknown domain")});let ki=class extends a.Component{constructor(){super(...arguments),this.listBodyRef=a.createRef(),this.listRef=a.createRef(),this.KeyBoundListWindow=Object(u.e)(a.forwardRef((e,t)=>a.createElement("section",Object.assign({},e,{style:Object.assign({},e.style,{overflowY:"scroll"}),ref:t,onFocus:this.focusSelectedEvent,onKeyDown:this.onKeyDown,onMouseDown:this.onListMouseDown,tabIndex:this.isSelectedEventVisible()?-1:0})))),this.isSelectedEventVisible=()=>{if(!this.selectedEventId)return!1;const e=this.listBodyRef.current;return!!e&&!!e.querySelector(`[data-event-id='${this.selectedEventId}']`)},this.focusSelectedEvent=()=>{this.focusEvent(this.props.selectedEvent)},this.wasListAtBottom=!0,this.updateScrolledState=()=>{requestAnimationFrame(()=>{this.wasListAtBottom=this.isListAtBottom()})},this.onListMouseDown=e=>{if(0!==e.button)return;let t=e.target,n=null;for(;null===n&&t&&t!==this.listBodyRef.current;)n=t.getAttribute&&t.getAttribute("aria-rowindex"),t=t.parentElement;if(!n)return;const r=parseInt(n,10)-1;this.props.filteredEvents[r]!==this.props.selectedEvent?this.onEventSelected(r):this.onEventDeselected()}}get selectedEventId(){return this.props.selectedEvent?this.props.selectedEvent.id:void 0}get listItemData(){return{selectedEvent:this.props.selectedEvent,events:this.props.filteredEvents,contextMenuBuilder:this.props.contextMenuBuilder}}render(){const{events:e,filteredEvents:t,isPaused:n}=this.props;return a.createElement(ni,null,a.createElement(xi,null,a.createElement(ii,null),a.createElement(ai,null,"Method"),a.createElement(ci,null,"Status"),a.createElement(li,null,"Source"),a.createElement(di,null,"Host"),a.createElement(ui,null,"Path and query")),0===e.length?n?a.createElement(ti,{icon:["fas","pause"]},"Interception is paused, resume it to collect intercepted requests"):a.createElement(ti,{icon:["fas","plug"]},"Connect a client and intercept some requests, and they'll appear here"):0===t.length?a.createElement(ti,{icon:["fas","question"]},"No requests match this search filter",n?" and interception is paused":""):a.createElement(rs.a,null,({height:e,width:n})=>a.createElement(u.a,null,()=>a.createElement(os.a,{innerRef:this.listBodyRef,outerElementType:this.KeyBoundListWindow,ref:this.listRef,height:e-38,width:n,itemCount:t.length,itemSize:32,itemData:this.listItemData,onScroll:this.updateScrolledState},wi))))}focusEvent(e){const t=this.listBodyRef.current;if(t)if(e){const n=t.querySelector(`[data-event-id='${e.id}']`);null==n||n.focus()}else{t.parentElement.focus()}}isListAtBottom(){var e;const t=null===(e=this.listBodyRef.current)||void 0===e?void 0:e.parentElement;return!t||t.scrollTop+5>=t.scrollHeight-t.offsetHeight}componentDidMount(){this.updateScrolledState()}componentDidUpdate(){var e,t,n;(null===(t=null===(e=this.listBodyRef.current)||void 0===e?void 0:e.parentElement)||void 0===t?void 0:t.contains(document.activeElement))&&this.focusSelectedEvent(),this.wasListAtBottom&&!this.isListAtBottom()&&(null===(n=this.listRef.current)||void 0===n||n.scrollToItem(this.props.events.length-1))}scrollToEvent(e){var t;const n=this.props.filteredEvents.indexOf(e);-1!==n&&(null===(t=this.listRef.current)||void 0===t||t.scrollToItem(n),requestAnimationFrame(()=>this.focusEvent(e)))}scrollToCenterEvent(e){const t=this.listRef.current,n=this.listBodyRef.current;if(!t||!n)return;const r=n.parentElement,o=this.props.filteredEvents.indexOf(e);if(-1===o)return;const i=this.props.filteredEvents.length,a=r.clientHeight,c=a/2,l=32*o,d=Math.max(0,32*i-a),u=l-c+16;t.scrollTo(s.clamp(u,0,d)),requestAnimationFrame(()=>this.focusEvent(e))}scrollToEnd(){var e;null===(e=this.listRef.current)||void 0===e||e.scrollToItem(this.props.filteredEvents.length,"start")}onEventSelected(e){this.props.onSelected(this.props.filteredEvents[e])}onEventDeselected(){this.props.onSelected(void 0)}onKeyDown(e){const{moveSelection:t}=this.props;switch(e.key){case"ArrowDown":t(1);break;case"ArrowUp":t(-1);break;case"PageUp":t(-10);break;case"PageDown":t(10);break;case"Home":t(-1/0);break;case"End":t(1/0);break;default:return}e.preventDefault()}};ei([d.computed],ki.prototype,"selectedEventId",null),ei([d.computed],ki.prototype,"listItemData",null),ei([d.action.bound],ki.prototype,"onEventSelected",null),ei([d.action.bound],ki.prototype,"onEventDeselected",null),ei([d.action.bound],ki.prototype,"onKeyDown",null),ki=ei([u.e],ki);var Pi=n(345),Ri=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))};const Hi=e=>Ri(void 0,void 0,void 0,(function*(){const t=JSON.stringify(yield Object(Tt.a)([e],{bodySizeLimit:1/0})),n=`${e.request.method} ${e.request.parsedUrl.hostname}.har`;Object(_t.f)(n,"application/har+json;charset=utf-8",t)}));function qi(e,t,n={}){if(n.waitForBodyDecoding&&("pending"===e.request.body.decodedPromise.state||void 0===e.request.body.decodedPromise.state))return e.request.body.decodedPromise.catch(()=>{}).then(()=>qi(e,t,n));const r=Object(Tt.b)(e.request,!1,{bodySizeLimit:1/0}),o=Ai(r);return new Pi(o).convert(t.target,t.client)}const Ai=e=>{const t=e.postData?e.postData:"discarded:not-representable"===e._requestBodyStatus?{mimeType:"text/plain",text:"!!! UNREPRESENTABLE BINARY REQUEST BODY - BODY MUST BE EXPORTED SEPARATELY !!!"}:"discarded:too-large"===e._requestBodyStatus?{mimeType:"text/plain",text:"!!! VERY LARGE REQUEST BODY - BODY MUST BE EXPORTED & INCLUDED SEPARATELY !!!"}:"discarded:not-decodable"===e._requestBodyStatus?{mimeType:"text/plain",text:"!!! REQUEST BODY COULD NOT BE DECODED !!!"}:void 0;return Object.assign(Object.assign({},e),{postData:t,headers:e.headers.filter(e=>"content-length"!==e.name.toLowerCase()&&!e.name.startsWith(":"))})},Ii=s(Pi.availableTargets()).keyBy(e=>e.title).mapValues(e=>e.clients.map(t=>({target:e.key,client:t.key,name:t.title,description:t.description,link:t.link}))).value(),Di=e=>e.target+"~~"+e.client,$i=e=>{const[t,n]=e.split("~~");return s(Ii).values().flatten().find({target:t,client:n})},Mi=e=>({"php~~curl":"PHP ext-cURL","php~~http1":"PHP HTTP v1","php~~http2":"PHP HTTP v2","node~~native":"Node.js HTTP"}[Di(e)]||e.name);var Fi=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))};class Bi{constructor(e,t,n,r,o){this.accountStore=e,this.uiStore=t,this.onPin=n,this.onDelete=r,this.onBuildRuleFromExchange=o,this.BaseOptions={Pin:{type:"option",label:"Toggle Pinning",callback:this.onPin},Delete:{type:"option",label:"Delete",callback:this.onDelete}}}getContextMenuCallback(e){return t=>{const{isPaidUser:n}=this.accountStore,r=this.uiStore.exportSnippetFormat?$i(this.uiStore.exportSnippetFormat):void 0;e.isHttp()?this.uiStore.handleContextMenuEvent(t,[this.BaseOptions.Pin,{type:"option",label:"Copy Request URL",callback:e=>Object(_t.b)(e.request.url)},this.BaseOptions.Delete,...n?[]:[{type:"separator"},{type:"option",label:"With Pro:",enabled:!1,callback:()=>{}}],{type:"option",enabled:n,label:"Create Matching Mock Rule",callback:this.onBuildRuleFromExchange},{type:"option",enabled:n,label:"Export Exchange as HAR",callback:Hi},...r&&n?[{type:"option",label:`Copy as ${Mi(r)} Snippet`,callback:e=>Fi(this,void 0,void 0,(function*(){Object(_t.b)(yield qi(e,r,{waitForBodyDecoding:!0}))}))}]:[],{type:"submenu",enabled:n,label:"Copy as Code Snippet",items:Object.keys(Ii).map(e=>({type:"submenu",label:e,items:Ii[e].map(e=>({type:"option",label:Mi(e),callback:t=>Fi(this,void 0,void 0,(function*(){Object(d.runInAction)(()=>{this.uiStore.exportSnippetFormat=Di(e)}),Object(_t.b)(yield qi(t,e,{waitForBodyDecoding:!0}))}))}))}))}],e):this.uiStore.handleContextMenuEvent(t,[this.BaseOptions.Pin,this.BaseOptions.Delete],e)}}}var Ni=n(29);const Li=p.i.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,Ui=p.i.div`
    position: relative;
    overflow-y: scroll;

    flex-grow: 1;
    padding: 0 20px 0 20px;

    background-color: ${e=>e.theme.containerBackground};
`,Wi=p.i.div`
    min-height: 100%;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;

    /*
    * This padding could be padding on the scroll container, but doing so causes odd
    * behaviour where position: sticky headers don't take it into account, on OSX only.
    * Moving to the direct parent of the header makes that consistent, for some reason. Ew.
    */
    padding-top: 20px;
`,zi=e=>a.createElement(Ui,null,a.createElement(Wi,null,e.children));var _i=n(98),Vi=n(99),Gi=n(51),Ji=n(110),Ki=n(49),Yi=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i};const Qi=e=>"sent"===e.direction?"left":"right",Xi=a.memo(e=>a.createElement(ea,{messageDirection:Qi(e.message),onClick:()=>e.onClick(e.index),tabIndex:0,onKeyDown:t=>{var n,r,o,s;"Enter"===t.key&&e.onClick(e.index),"ArrowDown"===t.key&&(t.preventDefault(),null===(r=null===(n=t.currentTarget.nextElementSibling)||void 0===n?void 0:n.focus)||void 0===r||r.call(n)),"ArrowUp"===t.key&&(t.preventDefault(),null===(s=null===(o=t.currentTarget.previousElementSibling)||void 0===o?void 0:o.focus)||void 0===s||s.call(o))}},a.createElement(Zi,{selected:!1,messageDirection:Qi(e.message)}),a.createElement(ta,null,Object(M.c)(e.message.content.slice(0,200))),e.message.isBinary&&a.createElement(Qt.a,{color:p.j},"Binary"),a.createElement(Qt.a,null,Object(B.a)(e.message.content.byteLength)))),Zi=Object(p.i)(a.memo(e=>a.createElement("div",{className:e.className},a.createElement(zt.a,{direction:e.messageDirection}))))`
    width: 25px;
    flex-grow: 0;
    flex-shrink: 0;

    padding-right: 1px;
    box-sizing: border-box;
    margin: -4px 0;

    > svg {
        padding: 0;
        color: ${e=>e.selected?e.theme.popColor:e.theme.containerBorder};
    }

    text-align: center;
`,ea=p.i.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    border-style: solid;
    border-width: 0 5px 1px;

    border-color: transparent;
    border-${e=>e.messageDirection}-color: ${e=>e.theme.containerBorder};
    border-bottom-color: ${e=>e.theme.containerWatermark};

    cursor: pointer;
    &:hover, &:focus {
        outline: none;
        border-${e=>e.messageDirection}-color: ${e=>e.theme.popColor};
        background-color: ${e=>e.theme.mainBackground};
    }

    padding: 4px 15px 4px 0;

    ${Qt.a} {
        flex-shrink: 0;
        &:last-of-type {
            margin-right: 0;
        }
    }
`,ta=Object(p.i)(ln.e)`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    flex-grow: 1;
    width: auto;
    padding: 3px 0 4px;
`;let na=class extends a.Component{constructor(){super(...arguments),this.containerRef=a.createRef(),this.onEditorContentRendered=()=>{var e;if(this.containerRef.current===document.activeElement){const t=null===(e=this.containerRef.current)||void 0===e?void 0:e.querySelector(".monaco-editor textarea");null==t||t.focus()}}}componentDidMount(){Object(u.c)(this,Object(d.autorun)(()=>{this.props.message||this.setContentType(void 0)})),this.onMessageChanged()}componentDidUpdate(e){(null==e?void 0:e.message.messageIndex)!==this.props.message.messageIndex&&this.onMessageChanged()}onMessageChanged(){const e=this.containerRef.current;e.scrollIntoView({behavior:"smooth"});const t=e.querySelector(".monaco-editor textarea");t?t.focus():e.focus()}setContentType(e){e===this.props.message.contentType?this.selectedContentType=void 0:this.selectedContentType=e}render(){const{message:e,isPaidUser:t,onExportMessage:n,editorNode:r,streamId:o}=this.props,i=Object(Gi.c)(e.contentType,void 0,Object(M.b)(e.content)),c=s.includes(i,this.selectedContentType)?this.selectedContentType:e.contentType,l="sent"===e.direction?"left":"right";return a.createElement(ra,{ref:this.containerRef,tabIndex:-1,onKeyDown:e=>{var t,n,r,o;if(e.target===e.currentTarget)if(e.target===e.currentTarget&&"Enter"===e.key){const t=e.target.querySelector(".monaco-editor textarea");null==t||t.focus()}else"ArrowDown"===e.key?(e.preventDefault(),null===(n=null===(t=e.currentTarget.nextElementSibling)||void 0===t?void 0:t.focus)||void 0===n||n.call(t)):"ArrowUp"===e.key&&(e.preventDefault(),null===(o=null===(r=e.currentTarget.previousElementSibling)||void 0===r?void 0:r.focus)||void 0===o||o.call(r))}},a.createElement(oa,{messageDirection:l},a.createElement(Zi,{selected:!0,messageDirection:l}),a.createElement(ln.c,null,"sent"===e.direction?"Received from server":"Sent by client",":"),a.createElement(fn.a,{icon:["fas","download"],title:t?"Save this message as a file":"With Pro: Save this message as a file",disabled:!t,onClick:()=>n(e)}),a.createElement(Qt.c,{onChange:this.setContentType,value:c,options:i,nameFormatter:Gi.d}),a.createElement(Qt.a,null,Object(B.a)(e.content.byteLength))),a.createElement(sa,null,a.createElement(Ji.a,{contentId:`ws-${o}-${e.messageIndex}`,editorNode:r,contentType:c,cache:e.cache,expanded:!1,onContentRendered:this.onEditorContentRendered},e.content)))}};Yi([d.observable],na.prototype,"selectedContentType",void 0),Yi([d.action.bound],na.prototype,"setContentType",null),na=Yi([u.e],na);const ra=p.i.div`
    background-color: ${e=>e.theme.mainBackground};
    border-bottom: 1px solid ${e=>e.theme.containerWatermark};

    display: flex;
    flex-direction: column;
`,oa=p.i.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;

    padding: 4px 15px 4px 0;

    cursor: pointer;

    border-style: solid;
    border-width: 0 5px 1px;

    border-color: transparent;
    border-${e=>e.messageDirection}-color: ${e=>e.theme.popColor};
    border-bottom-color: ${e=>e.theme.containerWatermark};

    > ${ln.c} {
        flex-grow: 1;
        text-overflow: ellipsis;
        overflow: hidden;

        margin-left: -8px;
    }

    > ${fn.a} {
        margin: -5px 0;
    }

    ${Qt.a}, select {
        &:last-of-type {
            margin-right: 0;
        }
    }
`,sa=Object(p.i)(Ki.d)`
    /* Undo the whole-card specific bits of styling */
    border-top: none;
    margin: 0;
`;var ia=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i};function aa(e,t,n){return`${e} ${n?"message "+n:"messages"}.${t?"bin":"txt"}`}let ca=class extends a.Component{constructor(){super(...arguments),this.expandedRow=void 0,this.exportMessages=()=>{Object(_t.f)(aa(this.props.filenamePrefix,this.someBinaryMessages),this.someBinaryMessages?"application/octet-stream":"text/plain",this.props.messages.map(e=>e.content).join("\n\n---\n\n"))},this.exportMessage=e=>{const t=aa(this.props.filenamePrefix,e.isBinary,this.props.messages.indexOf(e));Object(_t.f)(t,e.isBinary?"application/octet-stream":"text/plain",e.content)}}get someBinaryMessages(){return this.props.messages.some(e=>e.isBinary)}render(){const{streamId:e,streamType:t,streamLabel:n,messages:r,isPaidUser:o,editorNode:s,collapsed:i,expanded:c,onCollapseToggled:l,onExpandToggled:d}=this.props;return a.createElement(Yt.b,{collapsed:i,onCollapseToggled:l,expanded:c},a.createElement("header",null,a.createElement(_i.a,null,d&&a.createElement(Vi.a,{expanded:c,onClick:d}),a.createElement(fn.a,{icon:["fas","download"],title:o?"Save these message as a file":"With Pro: Save these messages as a file",disabled:!o,onClick:this.exportMessages})),n&&a.createElement(Qt.a,{color:Object(N.f)("data"),title:n},n),a.createElement(Qt.a,null,r.length," message",1!==r.length?"s":""),a.createElement(Yt.c,{onCollapseToggled:l},t," messages")),a.createElement(la,{expanded:!!c},r.map((t,n)=>this.expandedRow===n?a.createElement(na,{key:"expanded",message:t,streamId:e,isPaidUser:o,onExportMessage:this.exportMessage,editorNode:s}):a.createElement(Xi,{key:n,message:t,index:n,onClick:this.expandRow}))))}expandRow(e){this.expandedRow=e}};ia([d.observable],ca.prototype,"expandedRow",void 0),ia([d.computed],ca.prototype,"someBinaryMessages",null),ia([d.action.bound],ca.prototype,"expandRow",null),ca=ia([u.e],ca);const la=p.i.div`
    width: calc(100% + 40px);
    margin: 0 -20px -20px -20px;

    border-top: solid 1px ${e=>e.theme.containerWatermark};
    background-color: ${e=>e.theme.mainLowlightBackground};

    display: flex;
    flex-direction: column;
    white-space: nowrap;

    position: relative;
    ${e=>e.expanded&&"\n        height: auto !important;\n        overflow-y: auto;\n    "}
`;var da=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i};const ua=p.i.section`
    ${e=>e.withinGrid&&p.e`
        display: contents;
    `}
`,pa=p.i.span`
    margin-right: 10px;

    ${e=>e.withinGrid&&p.e`
        display: contents;
    `}
`,ha=p.i.div`
    visibility: hidden;
    margin-top: -2px;
    margin-bottom: 6px;
    display: inline-block;

    max-height: 31px;
    overflow: hidden;
`;let ma=class extends a.Component{constructor(){super(...arguments),this.open=!1}render(){const{children:e,withinGrid:t=!1}=this.props,n=t||this.props.prefixTrigger,[r,o,...s]=a.Children.toArray(e);if(s.length)throw new Error("Collapsible section has extra children: "+s);if(!Object(_t.e)(r))throw new Error("Collapsible section 1st child must be a summary element");const i=!!o;if(i&&!Object(_t.e)(o))throw new Error("Collapsible section 2nd child must be a body element");const c=o,l=a.createElement(ba,{open:this.open,canOpen:i,withinGrid:t,onClick:this.toggleOpen}),d=a.cloneElement(r,{open:this.open,withinGrid:t},n?a.createElement(a.Fragment,null,l,a.createElement(pa,{withinGrid:t},r.props.children)):a.createElement(a.Fragment,null,a.createElement(pa,{withinGrid:t},r.props.children),i&&l)),u=i&&this.open?a.cloneElement(c,{withinGrid:t},t?c.props.children:a.createElement(a.Fragment,null,a.createElement(ha,null,d),c.props.children)):null;return a.createElement(ua,{withinGrid:t},d,u)}toggleOpen(e){e.preventDefault(),this.open=!this.open}};da([d.observable],ma.prototype,"open",void 0),da([d.action.bound],ma.prototype,"toggleOpen",null),ma=da([u.e],ma);const ga=["fas","minus"],fa=["fas","plus"],ba=Object(p.i)(e=>a.createElement("button",Object.assign({},s.omit(e,["open","canOpen","withinGrid"])),a.createElement(zt.b,{icon:e.open?ga:fa})))`
    border: none;
    background: none;

    position: relative;
    top: -1px;

    cursor: pointer;
    user-select: none;

    outline: none;
    &:focus {
        color: ${e=>e.theme.popColor};
    }
    &:hover {
        color: ${e=>e.theme.mainColor};
    }

    padding: 5px 10px;

    ${e=>e.withinGrid?p.e`
        margin: -3px 0 -5px -10px;
        align-self: baseline;
    `:p.e`
        margin: -5px 0 -5px -10px;
        vertical-align: baseline;
    `}

    scale: 0.7;
    color: ${e=>e.theme.containerWatermark};

    ${e=>!e.canOpen&&p.e`
        visibility: hidden;
    `}
`,ya=p.i.header`
    ${e=>e.withinGrid?p.e`
        display: contents;
    `:p.e`
        display: inline-block;
    `}

    margin: -6px 0 0 -20px;
    padding: 9px 0 12px 20px;

    box-sizing: border-box;

    ${e=>e.open&&!e.withinGrid&&p.e`
        z-index: 1;
        position: relative;

        background-color: ${e=>e.theme.mainBackground};

        &:before {
            content: '';
            position: absolute;
            right: -1px;
            bottom: 0;
            height: 35px;
            width: 1px;
            background-color: rgba(0,0,0,0.1);
            box-shadow: 1px 1px 5px rgba(0,0,0,0.2);
        }

        &:after {
            content: '';
            position: absolute;
            bottom: -1px;
            left: 0;
            right: 0;
            height: 1px;
            background-color: rgba(0,0,0,0.1);
            box-shadow: 1px 1px 5px rgba(0,0,0,0.2);
        }
    `}
`,va=p.i.div`
    ${e=>e.withinGrid?p.e`
        grid-column: 1 / -1; /* Full width grid row */
    `:p.e`
        margin-top: -37px; /* Pull up behind the summary section */
        margin-bottom: 10px; /* Spacing below (grid uses grid-gap) */
    `}

    background-color: ${e=>e.theme.mainLowlightBackground};
    box-shadow:
        inset 0px 12px 8px -10px rgba(0,0,0,0.15),
        inset 0px -8px 8px -10px rgba(0,0,0,0.15);

    padding: 8px 10px 10px 10px;

    word-break: break-all; /* Fallback for anybody without break-word */
    word-break: break-word;

    line-height: 1.3;

    position: relative;

    margin-left: -20px;
    margin-right: -20px;
    padding-left: 20px;
    padding-right: 20px;
`,xa=Object(u.e)(e=>{const{closeState:t,theme:n}=e,r="aborted"!==e.closeState?Object(F.e)(e.closeState.closeCode):void 0,o=r&&[a.createElement(ln.j,{key:"code-docs",content:r.summary}),a.createElement("p",{key:"docs-link"},a.createElement(tn,{href:"https://www.rfc-editor.org/rfc/rfc6455.html#section-7.4.1"},"Find out more"))];if("aborted"===t)return a.createElement(Yt.b,Object.assign({},e),a.createElement("header",null,a.createElement(Qt.a,{color:Object(N.g)("aborted",n)},"Aborted"),a.createElement(Yt.c,{onCollapseToggled:e.onCollapseToggled},"Connection closed")),a.createElement("div",null,"The connection was closed abruptly, without a clean close message."));{const{closeCode:r,closeReason:s}=t;return a.createElement(Yt.b,Object.assign({},e),a.createElement("header",null,a.createElement(Qt.a,{color:Object(N.g)(r,n)},null!=r?r:"No close code"),a.createElement(Yt.c,{onCollapseToggled:e.onCollapseToggled},"Connection closed")),a.createElement(ma,null,a.createElement(ya,null,a.createElement(ln.c,null,"Close code: "),r?a.createElement(ln.g,null,r):a.createElement(ln.a,null,"(No close code)")),o&&a.createElement(va,null,o)),a.createElement("div",null,a.createElement(ln.c,null,"Close reason: "),s?a.createElement(ln.g,null,s):a.createElement(ln.a,null,"(No reason provided)")))}});var wa=n(346);function Ea(e){e.target.style.display="initial"}var Ca=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i};const Ta=Object(p.i)(Object(u.d)("uiStore")(e=>c.a.createElement(Qt.a,{className:e.className,color:e.uiStore.theme.popColor},"PRO")))`
    font-size: ${e=>e.theme.textSize};

    color: ${p.h};
    background-color: rgba(225,66,31,0.2);
`,Oa=Object(p.i)(Ta)`
    margin-right: auto;
`,Sa=Object(p.i)(jn.f)`
    box-sizing: border-box;
    padding: 20px;

    margin: 0 auto;

    user-select: none;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    font-weight: bold;
    color: ${e=>e.theme.primaryInputColor};
    background-color: ${e=>e.theme.primaryInputBackground};
    border-radius: 4px;
    box-shadow: 0 2px 10px 0 rgba(0,0,0,0.3);

    > svg {
        margin-bottom: 5px;
    }

    &:hover {
        background-image: linear-gradient(transparent, rgba(0,0,0,.05) 40%, rgba(0,0,0,.1));
    }

    &:active {
        background-image: linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.05) 40%, transparent);
    }
`,ja=Object(u.d)("accountStore")(Object(u.e)(e=>c.a.createElement(ka,null,e.children,c.a.createElement(Sa,{onClick:()=>e.accountStore.getPro(e.source)},c.a.createElement(zt.b,{icon:["far","star"],size:"2x"}),"Get HTTP Toolkit Pro")))),ka=p.i.div`
    padding: 20px 25%;
    margin: 0 -20px -20px -20px;
    background-color: ${e=>e.theme.mainLowlightBackground};
    box-shadow: inset 0px 12px 8px -10px rgba(0,0,0,0.15);

    p {
        color: ${e=>e.theme.mainColor};
        line-height: 1.2;
        font-weight: bold;
        margin-bottom: 10px;
    }

    ${Sa} {
        width: 100%;
    }
`,Pa=p.i.div`
    filter: blur(1px);
    opacity: 0.6;

    pointer-events: none;
    user-select: none;
`,Ra=p.i.div`
    position: relative;
    min-height: 140px;
`,Ha=Object(p.i)(Sa)`
    position: absolute;
    top: 52%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
`;let qa=class extends c.a.Component{constructor(){super(...arguments),this.buttonRef=c.a.createRef()}render(){return c.a.createElement(Ra,null,c.a.createElement(Ha,{ref:this.buttonRef,onClick:()=>this.props.getPro(this.props.source)},c.a.createElement(zt.b,{icon:["far","star"],size:"2x"}),"Get Pro"),c.a.createElement(Pa,{inert:!0,ref:e=>e&&e.setAttribute("inert",""),onFocus:()=>this.buttonRef.current&&this.buttonRef.current.focus()},this.props.children))}};qa=Ca([u.e],qa);const Aa=Object(p.i)(e=>a.createElement("img",Object.assign({},e,{onLoad:Ea,style:{display:"none"}})))`
    float: right;
    height: 26px;

    border: 4px solid #ffffff;
    border-radius: 2px;
`,Ia=p.i.section`
    display: grid;
    grid-template-columns: 20px fit-content(40%) 1fr min-content;

    grid-gap: 5px 0;
    &:not(:last-child) {
        margin-bottom: 10px;
    }
`,Da=Object(p.i)(ya)`
    word-break: break-all; /* Fallback for anybody without break-word */
    word-break: break-word;
    font-family: ${e=>e.theme.monoFontFamily};
    line-height: 1.1;
`,$a=p.i.span`
    margin-right: 10px;
`,Ma=p.i.span`
    font-style: italic;
    opacity: ${e=>e.theme.lowlightTextOpacity};
    margin-right: 5px;
`,Fa=Object(p.i)(e=>a.createElement("div",{className:e.className},[e.param.required?"Required":"Optional",e.param.type,e.param.in].filter(e=>!!e).join(" ")," parameter",void 0!==e.param.defaultValue?". Defaults to "+e.param.defaultValue:"",void 0!==e.param.enum&&e.param.enum.length>0?a.createElement(a.Fragment,null,".",a.createElement("br",null),"Valid values: ",Object($.b)(e.param.enum.map(e=>JSON.stringify(e)))):"","."))`
    font-style: italic;
`,Ba=Object(p.i)(zt.b).attrs(()=>({icon:["fas","exclamation-triangle"]}))`
    color: ${e=>e.theme.warningColor};
    line-height: 1.2;

    &:not(:first-child) {
        margin-left: 9px;
    }

    &:not(:last-child) {
        margin-right: 9px;
    }
`,Na=Object(p.i)(e=>a.createElement("div",Object.assign({},e),a.createElement(Ba,null),a.createElement("span",null,e.children)))`
    color: ${e=>e.theme.popColor};

    :not(:last-child) {
        margin-bottom: 10px;
    }
`;function La(e){return"string"==typeof e?e:"number"==typeof e?e.toString(10):"boolean"==typeof e?e.toString():null==e?void 0:JSON.stringify(e)}const Ua=(e,t)=>[t.length&&t.map((e,t)=>a.createElement(Na,{key:e},e)),e&&a.createElement(ln.i,{key:"details",content:e})].filter(e=>!!e),Wa=p.i.div`
    display: grid;
    grid-template-columns: fit-content(30%) auto;
    grid-gap: 5px;
    margin-bottom: 10px;
`,za=p.i.div`
    font-family: ${e=>e.theme.monoFontFamily};
    word-break: break-all;
    text-align: right;
`,_a=p.i.pre`
    font-family: ${e=>e.theme.monoFontFamily};
    word-break: break-all;
    white-space: pre-wrap;
`,Va=e=>a.createElement(Wa,null,Object.entries(e.value).map(([e,t],n)=>[a.createElement(za,{key:n+"-key"},e,":"),a.createElement(_a,{key:n+"-value"},t)])),Ga=e=>{const{api:t}=e,n=t.request.parameters.filter(e=>!!e.value||e.required||e.defaultValue),r=n.length>5?n.filter(e=>!!e.value||e.required):n,o=Ua(t.operation.description,t.operation.warnings),s=!!o.length;return a.createElement(a.Fragment,null,a.createElement(ma,null,a.createElement(ya,null,a.createElement(ln.c,null,"Service:")," ",t.service.name,!t.service.description&&a.createElement(tn,{href:t.service.docsUrl})),t.service.description&&a.createElement(va,null,a.createElement(Aa,{src:t.service.logoUrl,alt:""}),a.createElement(ln.i,{content:t.service.description}),a.createElement(tn,{href:t.service.docsUrl},"Find out more"))),a.createElement(ma,null,a.createElement(ya,null,a.createElement(ln.c,null,"Operation:")," ",t.operation.name,!s&&a.createElement(tn,{href:t.operation.docsUrl}),t.operation.warnings.length?a.createElement(Ba,null):null),s&&a.createElement(va,null,o,a.createElement(tn,{href:t.operation.docsUrl},"Find out more"))),r.length>=1&&a.createElement(a.Fragment,null,a.createElement(ln.d,null,"Parameters"),a.createElement(Ia,null,r.map(e=>a.createElement(ma,{withinGrid:!0,key:e.name},a.createElement(Da,null,a.createElement($a,null,e.name,": "),a.createElement("span",null,La(e.value)||a.createElement(Ma,null,e.defaultValue?La(e.defaultValue)+" [default]":"[not set]")),e.warnings.length?a.createElement(Ba,null):a.createElement("div",null)),a.createElement(va,null,Ua(e.description,e.warnings),"object"===e.type&&Object.keys(e).length>1?a.createElement(Va,{value:e.value}):null,a.createElement(Fa,{param:e})))))))},Ja=Object(u.e)(e=>{const{apiName:t,apiExchange:n}=e;return a.createElement(Yt.b,Object.assign({},e),a.createElement("header",null,a.createElement(Yt.c,{onCollapseToggled:e.onCollapseToggled},t)),a.createElement(Ga,{api:n}))}),Ka=Object(u.e)(e=>{const{apiName:t}=e;return a.createElement(Yt.b,Object.assign({},e),a.createElement("header",null,a.createElement(Oa,null),a.createElement(Yt.c,{onCollapseToggled:e.onCollapseToggled},t)),a.createElement(ja,{source:"api"},a.createElement("p",null,"HTTP Toolkit Pro can show you more information about this API."),a.createElement("p",null,"Instantly understand this request with inline documentation for the endpoint, parameters, and responses."),a.createElement("p",null,"Automatically validate that this request & its body match the API schema. See all the parameters that you're ",a.createElement("em",null,"not")," sending too, and their default values, and get warned about deprecated or invalid endpoints and parameters.")))}),Ya=Object(p.i)(({source:e,className:t})=>e.icon!==zt.c.Unknown?a.createElement(zt.b,Object.assign({className:t,title:e.summary},e.icon)):null)`
    margin-left: 8px;
`;var Qa=n(661);function Xa(e){const t=Object(g.format)(e,"YYYY-MM-DD [at] HH:mm:ss"),n=Object(g.distanceInWordsToNow)(e);return Object(g.isFuture)(e)?a.createElement(a.Fragment,null,"will expire ",a.createElement("span",{title:t},"in ",n)):a.createElement(a.Fragment,null,"expired ",a.createElement("span",{title:t},n," ago"))}const Za=e=>{const t=Object(Qa.parse)(e.value),n=e.requestUrl.pathname.replace(/\/[^\/]*$/,"")||"/";return a.createElement(a.Fragment,null,t.map(t=>{var r;return"none"!==(null===(r=t.sameSite)||void 0===r?void 0:r.toLowerCase())||t.secure?a.createElement(ln.b,{key:t.name},a.createElement("p",null,"Set cookie '",a.createElement("code",null,t.name),"' to '",a.createElement("code",null,t.value),"'"),a.createElement("p",null,"This cookie will be sent in future",t.secure?" secure ":" secure and insecure ","requests to"," ",t.domain?a.createElement(a.Fragment,null,t.domain.replace(/^\./,"")," and subdomains"):a.createElement(a.Fragment,null,e.requestUrl.hostname,", but not its subdomains"),"/"===t.path||"/"===n?a.createElement(a.Fragment,null,"."):void 0!==t.path?a.createElement(a.Fragment,null,", for paths within '",t.path,"'."):a.createElement(a.Fragment,null,", for paths within '",n,"'.")),a.createElement("p",null,"The cookie is ",t.httpOnly?"not accessible from client-side scripts":"accessible from client-side scripts running on matching pages",void 0===t.sameSite||"lax"===t.sameSite.toLowerCase()?a.createElement(a.Fragment,null,". Matching requests triggered from other origins will ",t.httpOnly?"however":"also"," include this cookie, if they are top-level navigations (not subresources)."):"strict"===t.sameSite.toLowerCase()&&t.httpOnly?a.createElement(a.Fragment,null,", or sent in requests triggered from other origins."):"strict"!==t.sameSite.toLowerCase()||t.httpOnly?"none"===t.sameSite.toLowerCase()&&t.secure?a.createElement(a.Fragment,null,". Matching requests triggered from other origins will ",t.httpOnly?"however":"also"," include this cookie."):a.createElement(a.Fragment,null,". This cookie uses an unrecognized SameSite property, which may cause issues."):a.createElement(a.Fragment,null,", but will not be sent in requests triggered from other origins.")),a.createElement("p",null,"The cookie ",t.maxAge?a.createElement(a.Fragment,null,Xa(Object(g.addSeconds)(new Date,t.maxAge)),t.expires&&" ('max-age' overrides 'expires')"):t.expires?Xa(t.expires):"expires at the end of the current session",".")):a.createElement(ln.b,{key:t.name},a.createElement("p",null,"This attempts to set cookie '",a.createElement("code",null,t.name),"' to '",a.createElement("code",null,t.value),"'"),a.createElement("p",null,a.createElement("strong",null,"This will fail so this cookie will not be set"),", because ",a.createElement("code",null,"SameSite=None")," can only be used for cookies with the ",a.createElement("code",null,"Secure")," flag."))}))},ec=e=>{const{description:t}=Object(Rt.c)(e.value);return t?a.createElement(ln.b,null,a.createElement("p",null,t)):a.createElement("p",null,Object(F.a)("user-agent").summary)},tc=p.i.section`
    display: grid;
    grid-template-columns: 20px fit-content(30%) 1fr;

    grid-gap: 5px 0;
    &:not(:last-child) {
        margin-bottom: 10px;
    }
`,nc=Object(p.i)(ya)`
    word-break: break-all; /* Fallback for anybody without break-word */
    word-break: break-word;
    font-family: ${e=>e.theme.monoFontFamily};
    line-height: 1.1;
`,rc=p.i.span`
    margin-right: 10px;
`,oc=Object(p.i)(va)`
    line-height: 1.3;
`,sc=Object(p.i)(tn)`
    display: block;
    margin-top: 10px;
`,ic=Object(u.d)("accountStore")(Object(u.e)(e=>{const t=s.sortBy(e.headers,([e])=>e.toLowerCase());return 0===t.length?a.createElement(ln.a,null,"(None)"):a.createElement(tc,null,s.flatMap(t,([t,n],r)=>{const o=Object(F.a)(t),s=((e,t,n,r)=>{var o;if(e=e.toLowerCase(),r){if("set-cookie"===e)return a.createElement(Za,{value:t,requestUrl:n});if("user-agent"===e)return a.createElement(ec,{value:t})}const s=null===(o=Object(F.a)(e))||void 0===o?void 0:o.summary;return s&&a.createElement("p",null,s)})(t,n,e.requestUrl,e.accountStore.isPaidUser);return a.createElement(ma,{withinGrid:!0,key:`${t}-${r}`},a.createElement(nc,null,a.createElement(rc,null,t,": "),a.createElement("span",null,n)),s&&a.createElement(oc,null,s,o&&a.createElement(sc,{href:o.url},"Find out more")))}))})),ac=p.i.div`
    display: grid;
    grid-template-columns: fit-content(50%) auto;
    grid-gap: 5px;
`,cc=p.i.div`
    font-family: ${e=>e.theme.monoFontFamily};
    word-break: break-all;
    text-align: right;
`,lc=p.i.pre`
    font-family: ${e=>e.theme.monoFontFamily};
    word-break: break-all;
    white-space: pre-wrap;
`,dc=Object(p.i)(ln.c)`
    margin-top: 10px;
    grid-column: 1 / span 2;
`,uc=e=>{const t=[...e.url.searchParams];let n;try{n=decodeURIComponent(e.url.pathname)}catch(t){n=e.url.pathname}return a.createElement(ac,null,a.createElement(cc,null,"Protocol:")," ",a.createElement(lc,null,e.url.protocol.slice(0,-1)),(e.url.username||e.url.password)&&a.createElement(a.Fragment,null,a.createElement(cc,null,"Username:")," ",a.createElement(lc,null,e.url.username),a.createElement(cc,null,"Password:")," ",a.createElement(lc,null,e.url.password)),a.createElement(cc,null,"Host:")," ",a.createElement(lc,null,e.url.host),a.createElement(cc,null,"Path:")," ",a.createElement(lc,null,n),t.length?a.createElement(dc,null,"Parameters"):null,t.map(([e,t],n)=>[a.createElement(cc,{key:n+"-key"},e,":"),a.createElement(lc,{key:n+"-value"},t)]))},pc=Object(p.i)(Object(u.d)("uiStore")(e=>{const{stepTypes:t}=e.ruleData,n=1!==t.length?"multi-step":as(t[0]);return a.createElement(Qt.b,{color:Object(N.f)("mutative"),className:e.className,disabled:"deleted"===e.ruleData.status,onClick:"deleted"!==e.ruleData.status?e.onClick:void 0,title:`This request was handled by ${Object($.a)(n)} ${n} rule${"deleted"===e.ruleData.status?" which has since been deleted":"modified-types"===e.ruleData.status?" (which has since been modified)":""}.${"deleted"!==e.ruleData.status?"\nClick here to jump to the rule on the Mock page.":""}`},a.createElement(zt.b,{icon:["fas","theater-masks"]}),Object($.d)(n))}))`
    margin-right: auto;

    text-decoration: none;
    word-spacing: 0;

    > svg {
        margin-right: 5px;
    }
`,hc=e=>{const t=Object(F.b)(e.request.method),n=[t&&a.createElement(ln.j,{key:"method-docs",content:t.summary}),t&&a.createElement("p",{key:"method-link"},a.createElement(tn,{href:t.url},"Find out more"))].filter(e=>!!e);return a.createElement("div",null,a.createElement(ma,null,a.createElement(ya,null,a.createElement(ln.c,null,"Method:")," ",e.request.method),n.length?a.createElement(va,null,n):null),a.createElement(ln.d,null,"URL"),a.createElement(ma,{prefixTrigger:!0},a.createElement(ya,null,a.createElement(ln.f,null,e.request.parsedUrl.parseable?e.request.parsedUrl.toString():e.request.url)),a.createElement(va,null,a.createElement(uc,{url:e.request.parsedUrl}))),a.createElement(ln.d,null,"Headers"),a.createElement(ic,{headers:e.request.rawHeaders,requestUrl:e.request.parsedUrl}))},mc=Object(u.e)(e=>{const{exchange:t,matchedRuleData:n,onRuleClicked:r}=e,{request:o}=t,s=null==n?void 0:n.stepTypes.every(e=>"passthrough"===e||"ws-passthrough"===e);return a.createElement(Yt.b,Object.assign({},e,{direction:"right"}),a.createElement("header",null,n&&!s&&a.createElement(pc,{ruleData:n,onClick:r}),a.createElement(Ya,{source:o.source}),a.createElement(Qt.a,{color:Object(N.f)(t)},t.isWebSocket()?"WebSocket ":"",o.method," ",(o.hostname||"").replace(/\./g," . ")),a.createElement(Yt.c,{onCollapseToggled:e.onCollapseToggled},"Request")),a.createElement(hc,{request:o}))});var gc=n(69);const fc=Object(u.e)(e=>{const{response:t,requestUrl:n,theme:r,apiExchange:o}=e,s=Object(gc.get)(o,"response","description"),i=Object(F.c)(t.statusCode),c=[s&&a.createElement(ln.i,{key:"api-response-docs",content:s}),i&&a.createElement(ln.j,{key:"status-docs",content:i.summary}),i&&a.createElement("p",{key:"status-link"},a.createElement(tn,{href:i.url},"Find out more"))].filter(e=>!!e);return a.createElement(Yt.b,Object.assign({},e,{direction:"left"}),a.createElement("header",null,a.createElement(Qt.a,{color:Object(N.e)(t.statusCode,r)},t.statusCode),a.createElement(Yt.c,{onCollapseToggled:e.onCollapseToggled},"Response")),a.createElement("div",null,a.createElement(ma,null,a.createElement(ya,null,a.createElement(ln.c,null,"Status:")," ",t.statusCode," ",t.statusMessage||Object(F.d)(t.statusCode)),c.length?a.createElement(va,null,c):null),a.createElement(ln.d,null,"Headers"),a.createElement(ic,{headers:t.rawHeaders,requestUrl:n})))}),bc=Object(p.i)(ln.e)`
    margin-top: 10px;
`,yc=Object(u.d)("uiStore")(Object(u.e)(e=>a.createElement(Yt.b,Object.assign({},e.cardProps,{direction:"left"}),a.createElement("header",null,a.createElement(Qt.a,{color:Object(N.e)("aborted",e.uiStore.theme)},"Aborted"),a.createElement(Yt.c,{onCollapseToggled:e.cardProps.onCollapseToggled},"Response")),a.createElement("div",null,"The connection failed before a response could be completed",e.exchange.abortMessage?a.createElement(a.Fragment,null," with error:",a.createElement(bc,null,e.exchange.abortMessage)):"."))));var vc=n(19);const xc=["GET","HEAD","POST"],wc=[200,203,204,206,300,301,404,405,410,414,501],Ec=[300,301,308,410],Cc=["GET","HEAD","POST"],Tc=["Cache-Control","Content-Language","Content-Type","Expires","Last-Modified","Pragma"];function Oc(e){return e.toLowerCase().replace(/(\b\w)/g,e=>e.toUpperCase())}const Sc=Object(g.parse)(0);function jc(e){return Object(g.distanceInWordsStrict)(Sc,Object(g.parse)(1e3*e))}function kc(e){return Object(vc.c)(e.headers["cache-control"]).reduce((e,t)=>{const[n,r]=t.split("=");return e[n.trim()]=void 0===r||parseInt(r),e},{})}const Pc="May be cached in both private and shared caches",Rc="May only be cached in private caches";function Hc(e){const{request:t,response:n}=e;if("object"!=typeof n)return;if("OPTIONS"===t.method&&t.headers.origin)return{summary:Rc,explanation:or`
                OPTIONS responses are not cached through the normal HTTP response caching mechanisms.
                Only the CORS metadata for the resource is cached, and only by HTTP clients that
                implement CORS checks, such as browsers, not by intermediate caches.
            `};const r=kc(n);return void 0!==r.private?{summary:Rc,explanation:or`
                This response may only be cached by private caches, such as your browser cache,
                because it includes an explicit \`private\` Cache-Control directive.
            `}:void 0!==r.public?{summary:Pc,explanation:or`
                This response may be cached by both private HTTP client caches and shared caches
                such as CDNs and proxies, because it includes an explicit \`public\` Cache-Control
                directive.
            `}:void 0!==t.headers.authorization&&void 0===r["s-maxage"]&&void 0===r["must-revalidate"]&&void 0===r.public?{summary:Rc,explanation:or`
                This response may only be cached by private caches, such as your browser cache,
                because it includes an Authorization header, and doesn't include the explicit
                directives that would allow it to be stored by shared caches.

                Shared caches, such as CDNs and proxies, would only be allowed to store this
                response if it contained \`s-maxage\`, \`must-revalidate\` or \`public\`
                Cache-Control directives.
            `}:void 0===r["s-maxage"]||void 0!==r["max-age"]||void 0!==n.headers.expires||void 0!==r.public||wc.includes(n.statusCode)?{summary:Pc,explanation:or`
            This response may be cached by both private client caches & shared
            CDN or proxy caches, because it is cacheable and does not include
            either a \`private\` Cache-Control directive or an Authorization header.
        `}:{summary:"May only be cached in shared caches",explanation:or`
                This response may only be cached by shared caches, such as proxies & CDNs,
                not by private client caches, because it includes an \`s-maxage\` Cache-Control
                directive but is otherwise not cacheable by default, and does not include
                any other explicit caching directives.
            `}}function qc(e){const{request:t,response:n}=e;if("object"!=typeof n)return;if("OPTIONS"===t.method&&t.headers.origin){const e=s.union(Cc,Object(vc.c)(n.headers["access-control-allow-methods"]).map(e=>e.toUpperCase())),r=s.union(Tc,Object(vc.c)(n.headers["access-control-allow-headers"]).map(Oc)),o="true"===n.headers["Access-Control-Allow-Credentials"];return{summary:"Will match corresponding future CORS requests for this URL",explanation:or`
                The CORS configuration returned here may be used to avoid a preflight
                request for future CORS requests, when:

                * The CORS request would be sent to the same URL
                * The origin is \`${t.headers.origin}\`
                ${o?"":"* No credentials are being sent\n"}* The request method would be ${Object($.b)(e,", "," or ")}
                * There are no extra request headers other than ${Object($.b)(r)}
            `}}const r=Object(vc.c)(n.headers.vary).map(Oc),o=r.length>0,i=o?` that have the same ${Object($.b)(r)} header${r.length>1?"s":""}`:"",a=o?or`
        , as long as those requests have ${Object($.b)(r.map(e=>{const n=t.headers[e.toLowerCase()];return void 0===n?`no ${e} header`:`a ${e} header set to \`${n}\``}))}.

        ${r.length>1?"These headers are":"This header is"}
        required because ${r.length>1?"they're":"it's"} listed in
        the Vary header of the response.
    `:or`
        , regardless of header values or other factors.

        If this response is only valid for certain header configurations (e.g.
        Accept-Encoding or Accept-Language headers), it should include a Vary header.
    `;return"POST"===t.method?{summary:"Will match future GET & HEAD requests to this URL"+i,explanation:or`
                The response content & headers returned here may be used for future safe requests
                for the resource updated by this POST${a}
            `}:{summary:"Will match future GET & HEAD requests to this URL"+i,explanation:or`
            The response content & headers returned here may be used for future safe requests
            for the same resource${a}
        `}}function Ac(e){var t;const{request:n,response:r}=e;if("object"!=typeof r)return;const o=kc(r);if("OPTIONS"===n.method){const e=Object(vc.g)(r.headers["access-control-max-age"]);if(e){const t=parseInt(e,10);return{summary:"Expires after "+jc(t),explanation:or`
                    This CORS response includes an Access-Control-Max-Age header explicitly
                    set to ${t} seconds, which defines the valid lifetime for the
                    cached response. Once this expires it will immediately cease to be used.
                `}}return{summary:"Expires unpredictably, around 5 seconds",explanation:or`
                This CORS response does not include an Access-Control-Max-Age header, so
                does not explicitly specify when it should expire. That means the
                exact expiry is left up to the client implementation. This may be a
                small number of seconds, or it may be considered expired immediately.
            `}}if(o["no-cache"])return{summary:"Must be revalidated every time it's used",explanation:or`
                This response includes an explicit \`no-cache\` directive. This means that
                before the cached content can be used, the matching requests must always be
                forwarded to the origin server, and the response content must be revalidated.

                This requires a request to the origin server for every client request, but
                does still offer performance benefits compared to not caching at all,
                because conditional requests can be used to avoid redownloading the
                full response from scratch if it hasn't changed.
            `};const s=Object(vc.g)(r.headers.date),i=Object(vc.g)(r.headers.expires),a=o["max-age"],c=void 0!==o["s-maxage"]?o["s-maxage"]:a,l=void 0!==a||void 0!==i,d=void 0!==a?a:void 0!==i?Object(g.differenceInSeconds)(i,s?Object(g.parse)(s):Object(g.parse)(null!==(t=e.timingEvents.startTime)&&void 0!==t?t:Date.now())):void 0,u=void 0!==d&&d<=0;if(!l&&Ec.includes(r.statusCode))return{summary:"Never expires"+(c!==a?" from private caches, expires from shared caches after "+jc(c):""),explanation:or`
                This ${r.statusCode} response is intended to describe a permanent state,
                and has no explicitly defined expiry time, so by default most clients will
                cache it forever.

                ${c!==a?or`
                    The response does include a \`s-maxage\` directive however, set to ${c} seconds, which overrides this for shared caches such as CDNs and
                    proxies. In that specific case, the response will be considered stale
                    after ${jc(c)}. As there is no \`proxy-revalidate\`
                    directive, it may still be used whilst stale if necessary or explicitly
                    allowed by a client.

                    If the response included a specific expiry time for private caches, e.g.
                    with a \`max-age\` Cache-Control directive, that typically would limit the
                    lifetime of this response in those caches too. In general though in that
                    case it would be better to use a more accurate status code.
                `:or`
                    If this response did include a specific expiry time, e.g. with a max-age
                    Cache-Control directive, that would typically override this. In general
                    though in that case it would be better to use a more accurate status code.
                `}
            `};const p=c!==a?or`
        .

        This response also includes a \`s-maxage\` directive, set to ${jc(c)} seconds which overrides this expiry for shared caches such as CDNs or proxies.
        This means in that case, the response will become stale in ${jc(c)}
    `:"",h=l?u?or`
            This response expires immediately because it has ${a<=0?or`
                    a \`max-age\` directive set to ${a} seconds
                `:s?or`
                    an Expires header set to ${i}, which is
                    not after its Date header value (${s})
                `:or`
                    an Expires header set to ${i}, which is
                    before the response was received
                `}${p}
        `:void 0!==a?or`
            This response expires after ${a} seconds (${jc(a)}),
            as specified by its \`max-age\` directive${p}
        `:or`
            This response expires at ${i} (after ${jc(d)}),
            as specified by its Expires header${p}
        `:or`
            ${c===a?or`
                This response does not explicitly declare its expiry time. Caches
            `:or`
                This response only declares an explicit expiry time for shared caches, such
                as proxies or CDNs, not for private caches. Content in shared caches will
                expire after ${jc(c)}, as declared by the \`s-maxage\`
                Cache-Control directive, whilst content in private caches may expire
                unpredictably.

                Private caches
            `} may
            use a heuristic to decide when this response is considered stale, typically
            some percentage of the time since the content was last modified, often using
            the Last-Modified header value${r.headers["last-modified"]?` (${r.headers["last-modified"]})`:", although that is not explicitly defined in this response either"}
        `;if(u&&o["must-revalidate"])return{summary:"Must be revalidated every time it's used"+(c!==a?` (or after ${jc(c)} for shared caches)`:""),explanation:or`
                ${h}.

                In addition, it includes a \`must-revalidate\` directive.

                Together, these mean that before the cached content can be used${c!==a&&c>0?" by private caches":""} the matching requests must always be forwarded to the origin server,
                and the response content must be revalidated.

                This requires a request to the origin server for every client request, but
                does still offer performance benefits compared to not caching at all,
                because conditional requests can be used to avoid redownloading the
                full response from scratch if it hasn't changed.
            `};const m=void 0!==o["stale-while-revalidate"]&&void 0!==o["stale-if-error"]?"can be served stale temporarily whilst revalidating or if receiving errors":void 0!==o["stale-while-revalidate"]?"can be served stale whilst revalidating for "+jc(o["stale-while-revalidate"]):void 0!==o["stale-if-error"]?"can be served stale if errors are received for "+jc(o["stale-if-error"]):"",f=o["must-revalidate"]?", then must always be revalidated":o["proxy-revalidate"]&&m?`, then ${m} (but must be revalidated by shared caches)`:o["proxy-revalidate"]?", then must always be revalidated by shared caches, but may be used privately":m?", then "+m:"",b=void 0!==o["stale-while-revalidate"]&&void 0!==o["stale-if-error"]?or`
            The response includes both \`stale-while-revalidate\` and \`stale-if-error\`
            directives, set to ${o["stale-while-revalidate"]} seconds and ${o["stale-if-error"]} seconds respectively.

            \`stale-while-revalidate\` means that after the response has expired, new
            requests should trigger revalidation, but the stale content can still be served
            in the meantime, for ${jc(o["stale-while-revalidate"])} extra.

            \`stale-if-error\` means that after the response has expired, new
            requests should trigger revalidation, but the stale content can still be served
            in the meantime if any errors are encountered, for ${jc(o["stale-if-error"])} after the response expires.
        `:void 0!==o["stale-while-revalidate"]?or`
            The response includes a \`stale-while-revalidate\` directive set to ${o["stale-while-revalidate"]} seconds. This means that after the response has expired new requests
            should trigger revalidation, but the stale content can still be served in
            the meantime for ${jc(o["stale-while-revalidate"])} extra.
        `:void 0!==o["stale-if-error"]?or`
            The response includes a \`stale-if-error\` directive set to ${o["stale-if-error"]} seconds. This means that after the response has expired, new
            requests should trigger revalidation, but the stale content can still be
            served in the meantime if any errors are encountered, for ${jc(o["stale-if-error"])} after the response expires.
        `:"",y=o["must-revalidate"]?or`
            This response includes a \`must-revalidate\` directive, which means caches must
            ensure expired content is _always_ forwarded to & revalidated by the origin server,
            and expired content must never be used, even if the server is unavailable, if
            requested explicitly, or if serving stale content has been enabled elsewhere.
        `:o["proxy-revalidate"]?or`
            This response includes a \`proxy-revalidate\` directive, which means shared
            caches (e.g. CDNs or proxies) must ensure expired content is always forwarded
            to & revalidated by the origin server, and expired content must never be used,
            even if the server is unavailable, if requested explicitly, or if serving
            stale content has been enabled elsewhere.

            ${b||or`
                It does not include a \`must-revalidate\` directive, so private client caches
                are still allowed to use stale responses if necessary.
            `}
        `:or`
            ${b}

            As the response does not include a \`must-revalidate\` directive,
            expired responses may be used if explicitly requested or necessary, for
            example if the origin server is not responding.
        `;if(u)return{summary:`Expires immediately${c!==a?` (or after ${jc(c)} for shared caches)`:""}${f}`,explanation:or`
                ${h}.

                ${y}
            `};const v=!o.immutable&&d&&d>=31536e3;return{summary:void 0!==d?`Expires after ${jc(d)}${c!==a?` (${jc(c)} for shared caches)`:""}${f}`:`Expires unpredictably${c!==a?` for private caches, or after ${jc(c)} for shared caches`:""}${f}`,type:v?"suggestion":void 0,explanation:or`
            ${h}.

            ${y}

            ${v?or`
                :suggestion: This expiry time is more than a year away, which suggests that the
                content never changes. This could be more effective with the \`immutable\`
                Cache-Control directive, which completely avoids revalidation
                requests for this content in extra cases, such as explicit page refreshes,
                saving validation time.
            `:""}
        `}}function Ic(e,t){return parseFloat(e.toFixed(t))}const Dc=Object(u.e)(e=>{var t;let n;if("durationMs"in e)n=e.durationMs;else{const r=e.timingEvents,o=null!==(t=r.responseSentTimestamp)&&void 0!==t?t:r.abortedTimestamp;n=void 0!==o&&void 0!==r.startTimestamp?o-r.startTimestamp:void 0}return void 0===n?null:a.createElement(Qt.a,{className:e.className},n<100?Ic(n,2)+"ms":n<1e3?Ic(n,1)+"ms":n<1e4?Ic(n/1e3,3)+" seconds":Ic(n/1e3,1)+" seconds")}),$c=Object(u.d)("accountStore")(Object(u.e)(e=>{const{exchange:t,accountStore:n}=e,{isPaidUser:r}=n;return a.createElement(Yt.b,Object.assign({},e),a.createElement("header",null,r?a.createElement(Dc,{timingEvents:t.timingEvents}):a.createElement(Oa,null),a.createElement(Yt.c,{onCollapseToggled:e.onCollapseToggled},"Performance")),r?a.createElement("div",null,a.createElement(_c,{exchange:t}),a.createElement(Vc,{exchange:t})):a.createElement(ja,{source:"performance"},a.createElement("p",null,"See timing info, dive into the real and potential compression of every exchange, and understand how & where this response could be cached, for a full performance overview.")))}));function Mc(e){return"br"===e?"brotli":"zstd"===e?"zstandard":"gzip"===e||"x-gzip"===e?"gzip":"deflate"===e||"x-deflate"===e?"zlib":s.upperFirst(e)}const Fc=Object(u.e)(e=>{const{encodings:t,encodedBodyLength:n,decodedBodyLength:r}=e,o=r?Math.round(100*(1-n/r)):void 0;return a.createElement(a.Fragment,null,t.length?a.createElement(a.Fragment,null,"compressed with ",a.createElement("strong",null,Object($.b)(t,", "," and then ")),", making it ",void 0!==o&&r?a.createElement(a.Fragment,null,a.createElement("strong",null,o>=0?o+"% smaller":-o+"% bigger")," (",Object(B.a)(r)," to ",Object(B.a)(n),")"):a.createElement(zt.b,{icon:["fas","spinner"],spin:!0})):a.createElement("strong",null,"not compressed"))}),Bc=p.i.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-right: 10px;
`,Nc=Object(p.i)(Qt.a)`
    flex-shrink: 0;
`,Lc=Object(u.e)(e=>{const{encodings:t,encodedBodyLength:n,decodedBodyLength:r,encodingTestResults:o}=e;if(!s.isEmpty(o)&&r){const e=Math.round(100*(1-n/r));return a.createElement(Bc,null,s(o).omitBy((e,n)=>1===t.length&&n===t[0]).map((t,n)=>{const o=Math.round(100*(1-t/r));return a.createElement(Nc,{key:n,title:`${Object(B.a)(r)} would compress to ${Object(B.a)(t)} using ${n}`,color:o>e&&o>0?"#4caf7d":"#888"},s.upperFirst(n),": ",o,"%")}).valueOf())}return a.createElement(zt.b,{icon:["fas","spinner"],spin:!0})}),Uc=p.i.div`
    display: flex;
    align-items: center;

    margin-bottom: 10px;
    &:last-child {
        margin-bottom: 0;
    }
`,Wc=p.i.p`
    margin-bottom: 10px;
    line-height: 1.3;

    &:last-child {
        margin-bottom: 0;
    }
`,zc=Object(p.i)(Wc)`
    font-style: italic;
`,_c=Object(u.e)(e=>{const t=Object(vc.c)(e.exchange.request.headers["accept-encoding"]).map(Mc);return a.createElement(a.Fragment,null,["request","response"].map(n=>{const r=e.exchange[n],o=function(e){return e&&"aborted"!==e?Object(vc.c)(e.headers["content-encoding"]).filter(e=>!!e&&"identity"!==e).map(Mc):[]}(r);if("object"!=typeof r||!r.body.encoded.byteLength)return null;const i=r.body.encoded,c=r.body.decoded,l=c?c.byteLength:0,d=i.byteLength,u=s.mapKeys(Object(B.b)(r),(e,t)=>Mc(t));let p=s.minBy(Object.keys(u),e=>u[e]);const h=l&&p&&!(1===o.length&&p===o[0])&&u[p]<Math.min(d,l);return a.createElement(a.Fragment,{key:n},a.createElement(ln.d,null,s.upperFirst(n)," Compression"),a.createElement(Wc,null,"The ",n," body was ",a.createElement(Fc,{encodings:o,encodedBodyLength:d,decodedBodyLength:Object(gc.get)(c,"byteLength")}),"."),a.createElement(Uc,null,a.createElement(Lc,{encodings:o,encodedBodyLength:d,decodedBodyLength:Object(gc.get)(c,"byteLength"),encodingTestResults:u}),a.createElement(zc,null,!!h&&a.createElement(a.Fragment,null,a.createElement(zt.d,null),"This would be ",Math.round(100*(1-u[p]/d)),"% smaller ",l!==d&&`(${Math.round(100*(1-u[p]/l))}% total compression)`," with ",p,"response"===n&&t&&!s.includes(t,p)&&" (not supported by this client)","."),!!l&&!h&&l<d&&a.createElement(a.Fragment,null,a.createElement(zt.e,null),"This ",n," would be smaller without compression."))))}))}),Vc=Object(u.e)(e=>{if("object"!=typeof e.exchange.response)return null;const t=function(e){const{request:t,response:n}=e;if("object"!=typeof n)return;if(!xc.includes(t.method)){if("OPTIONS"===t.method&&t.headers.origin){const e=Object(vc.g)(n.headers["access-control-max-age"]),t=e?parseInt(e,10):void 0;return void 0!==t&&t>=1?{cacheable:!0,summary:"Cacheable",explanation:or`
                        OPTIONS preflight requests are not normally cacheable, and don't observe
                        standard Cache-Control mechanisms, but the CORS result itself will be
                        cached if a Access-Control-Max-Age header is provided, as here.

                        This only affects CORS behaviour for cross-origin requests, and should be
                        ignored (so not cached at all) by all other clients and proxies.
                    `}:void 0!==t&&t<=0?{cacheable:!1,summary:"Not cacheable",explanation:or`
                        OPTIONS preflight requests don't observe standard Cache-Control
                        mechanisms, but the CORS result itself can be cached if a
                        Access-Control-Max-Age header is provided.

                        In this case that header is set to ${e}, explicitly
                        requesting that this result should not be cached, and that clients
                        should not reuse this CORS response in future.
                    `}:{cacheable:!0,summary:"Very briefly cacheable",explanation:or`
                    OPTIONS preflight requests are not cacheable, unless an Access-Control-Max-Age
                    header is provided. Many clients will very briefly cache the CORS response
                    though, for example Chrome will cache this for 5 seconds.
                `}}return{cacheable:!1,summary:"Not cacheable",explanation:t.method+" requests are never cacheable."}}const r=kc(n),o=n.headers.etag||n.headers["last-modified"],s=o||!n.body.encoded.byteLength||r.immutable?"":or`
            :suggestion: This response doesn't however include any validation headers. That
            means that once it expires, the content must be requested again from scratch. If
            a Last-Modified or ETag header were included then these could be used to make
            conditional HTTP requests and revalidate cached content without re-requesting
            it, saving time and bandwidth.
        `;if(r["no-store"])return{cacheable:!1,summary:"Not cacheable",explanation:or`
                This response includes a \`no-store\` directive in its Cache-Control
                header. This explicitly tells all caches that this response should
                never be cached. It should never be persistently stored, should
                be removed from any volatile/temporary storage as soon as possible,
                and should be requested fresh from the network in future.
            `};if(Object(vc.c)(n.headers.pragma).includes("no-store"))return{cacheable:!1,summary:"Not cacheable",type:"suggestion",explanation:or`
                This response includes a \`no-store\` directive in its Pragma
                header. This explicitly tells all caches that this response should
                never be cached. It should never be persistently stored, should
                be removed from any volatile/temporary storage as soon as possible,
                and should be requested fresh from the network in future.

                :suggestion: This Pragma header is commonly supported, but officially
                deprecated. It's typically better to use \`Cache-Control: no-store\` instead.
            `};if(Object(vc.c)(n.headers.vary).includes("*"))return{cacheable:!1,summary:"Not cacheable",explanation:or`
                This response includes a \`*\` value in its Vary header. This tells caches
                that the response content may vary unpredictably, possibly including factors
                outside the request's content (e.g. the client's network address),
                and so must never be cached.
            `};if("POST"===t.method){const e=or`
            POST responses are not typically cacheable, but can be used in some
            specific circumstances to prepopulate GET & HEAD caches for the same URI.
            This is allowed by the spec, but not supported by many clients.

            A POST response may be cached and used by for future GET/HEAD requests only if:

            * Explicit freshness information is included (e.g. a \`max-age\` Cache-Control
                directive), and
            * a Content-Location header is included, set to the same
                URI as this request
        `,o=n.headers["content-location"]?new URL(Object(vc.g)(n.headers["content-location"]),t.url):void 0,i=!!r["max-age"]||void 0!==n.headers.expires,a=o&&o.toString().split("#")[0]===t.parsedUrl.toString().split("#")[0];return i&&a?{cacheable:!0,summary:"May be cacheable for future GET/HEAD requests",type:s?"suggestion":void 0,explanation:[e,"This response fulfills those conditions, so may be cacheable by some clients.",s].join("\n\n")}:{cacheable:!1,summary:"Not cacheable",explanation:e+"\n\nThis response does not fulfill those conditions, so is not cacheable by anybody."}}if(void 0!==r["max-age"]){let e;const t=n.headers.date?Object(g.parse)(Object(vc.g)(n.headers.date)):void 0;return t?n.headers.expires&&Math.abs(Object(g.differenceInSeconds)(Object(g.parse)(Object(vc.g)(n.headers.expires)),Object(g.addSeconds)(t,r["max-age"])))>60&&(e=or`
                :warning: This response also includes an Expires header, which appears to disagree
                with the expiry time calculated from the \`max-age\` directive. The Cache-Control
                headers take precedence, so this will only be used by clients that don't
                support that, but this could cause unpredictable behaviour. It's typically
                better to ensure these values agree on a single expiry time.
            `):e=or`
                :warning: However, this response does not include a Date header. That value
                would be used in combination with the \`max-age\` value to calculate
                the exact time to expire this content.

                Clients may infer their own expiry start time, potentially using the time they
                received this response, but it's strongly recommended to explicitly specify
                one in the response instead, to ensure this content expires reliably and
                predictably.
            `,{cacheable:!0,summary:"Cacheable",type:e?"warning":s?"suggestion":void 0,explanation:or`
                This response is cacheable because it specifies an explicit expiry time,
                using a \`max-age\` directive in its Cache-Control header.
                ${e?"\n"+e:s?"\n"+s:""}
            `}}if(void 0!==Object(vc.g)(n.headers.expires))return{cacheable:!0,summary:"Cacheable",type:"suggestion",explanation:or`
                This response is cacheable because it specifies an explicit expiry time,
                using an Expires header.

                :suggestion: The Expires header is commonly supported, but officially deprecated.
                It's typically better to use \`Cache-Control: max-age=<seconds>\` instead,
                or in addition.
            `};const i=wc.includes(n.statusCode);if(i||r.public){if(Ec.includes(n.statusCode))return{cacheable:!0,summary:"Cacheable",explanation:or`
                    ${n.statusCode} responses are cacheable by default. The lifetime of the
                    cached response isn't strictly specified, but since this status code is
                    intended to indicate a permanent change the overwhelming majority of clients
                    will cache it forever.
                `};const e=i?n.statusCode+" responses are cacheable by default":"This response includes a `public` Cache-Control directive, explicitly marking it cacheable";return o?r["no-cache"]?{cacheable:!0,summary:"Cacheable",explanation:or`
                    ${e}.

                    The response does not include any explicit expiry information,
                    but does include a \`no-cache\` directive, meaning the cached content will
                    be revalidated with the origin server on every request, making
                    expiry irrelevant.
                `}:{cacheable:!0,summary:"Probably cacheable",type:"warning",explanation:or`
                    ${e}. However this response does not explicitly
                    specify when it expires (e.g. with a \`max-age\` Cache-Control
                    directive), so its expiry behaviour is not well defined. Caches
                    may use a heuristic to decide when this response is no longer
                    considered fresh, and some clients may refuse to cache the response
                    entirely.

                    :warning: It's typically better to be explicit about how responses should
                    be cached and expired, rather than depending on this unpredictable behaviour.

                    If an explicit expiry time was set (e.g. using a \`max-age\` Cache-Control
                    directive), this would take precedence over any heuristics, and provide
                    reliable cache expiry. Alternatively this content would be reliably
                    excluded from caching if a \`no-store\` Cache-Control directive was present.
                `}:{cacheable:!1,summary:"Typically not cacheable",type:"warning",explanation:or`
                    ${e}. However most caches will not store a response
                    like this, which has no explicit expiry time and no way to revalidate
                    the content in future.

                    :warning: It's typically better to be explicit about if and how responses
                    should be cached, rather than depending on the unpredictable behaviour this
                    can cause.

                    This request would be reliably cached if an explicit expiry was set (e.g.
                    with a \`max-age\` Cache-Control directive). Alternatively this would be
                    reliably excluded from caching if a \`no-store\` Cache-Control directive
                    was present.
                `}}return void 0!==r["s-maxage"]?{cacheable:!0,summary:"Not cacheable by private (HTTP client) caches",explanation:or`
                This response is cacheable because it specifies an explicit expiry time,
                using an \`s-maxage\` Cache-Control directive. This only applies to shared
                caches (e.g. proxies and CDNs), and this response would otherwise not be
                cacheable, so it won't be cached by any HTTP user agents (e.g. browsers).
            `}:{cacheable:!1,summary:"Not cacheable",explanation:or`
            ${n.statusCode} responses are not cacheable by default.
            This could become cacheable if explicit caching headers were added,
            such as a \`max-age\` Cache-Control directive.
        `}}(e.exchange);if(!t)return null;const n=t.cacheable?[t,qc(e.exchange),Hc(e.exchange),Ac(e.exchange)]:[t];return a.createElement(a.Fragment,null,a.createElement(ln.d,null,"Caching"),n.map((e,t)=>a.createElement(ma,{prefixTrigger:!0,key:t},a.createElement(ya,null,e.summary," ","warning"===e.type&&a.createElement(zt.e,null),"suggestion"===e.type&&a.createElement(zt.d,null)),a.createElement(va,null,a.createElement(ln.j,{content:e.explanation})))))});var Gc=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i};const Jc=p.i.div`
    p {
        margin-bottom: 10px;
    }
`,Kc=p.i.div`
    display: flex;
    align-items: center;

    gap: 10px;
    margin-bottom: 10px;
`,Yc=p.i.div`
    margin: 0 -20px -20px -20px;
    border-top: solid 1px ${e=>e.theme.containerBorder};
    background-color: ${e=>e.theme.highlightBackground};
    color: ${e=>e.theme.highlightColor};
`,Qc={readOnly:!0,hover:{enabled:!1}},Xc=Object(u.e)(e=>{const{target:t,client:n,link:r,description:s}=e.exportOption;let i;try{i=qi(e.exchange,e.exportOption)}catch(e){console.log(`Failed to export request for ${t}--${n}`),Object(o.d)(e),i=sr.a`
            Could not generate a snippet for this request

            Is this unexpected? Please file a bug at github.com/httptoolkit/httptoolkit.
        `}return c.a.createElement(c.a.Fragment,null,c.a.createElement(Jc,null,c.a.createElement("p",null,c.a.createElement("strong",null,Mi(e.exportOption)),": ",s),c.a.createElement(Kc,null,c.a.createElement(tn,{href:r},"Find out more"),c.a.createElement(xn,{content:i}," ","Copy snippet"))),c.a.createElement(Yc,null,c.a.createElement(Xo,{contentId:null,value:i,language:{javascript:"javascript",node:"javascript",shell:"shell"}[t]||"text",options:Qc})))}),Zc=Object(p.i)(Object(u.e)(e=>c.a.createElement(Qt.b,{className:e.className,onClick:()=>Hi(e.exchange),disabled:!e.exchange.response||"aborted"===e.exchange.response},c.a.createElement(zt.b,{icon:["fas","download"]})," Save as HAR")))`
    margin-right: auto;
`;let el=class extends c.a.Component{render(){const{exchange:e,accountStore:t}=this.props,{isPaidUser:n}=t;return c.a.createElement(Yt.b,Object.assign({},this.props),c.a.createElement("header",null,n?c.a.createElement(Zc,{exchange:e}):c.a.createElement(Oa,null),c.a.createElement(Qt.c,{onChange:this.setSnippetOption,value:this.snippetOption,optGroups:Ii,keyFormatter:Di,nameFormatter:Mi}),c.a.createElement(Yt.c,{onCollapseToggled:this.props.onCollapseToggled},"Export")),n?c.a.createElement("div",null,c.a.createElement(Xc,{exchange:e,exportOption:this.snippetOption})):c.a.createElement(ja,{source:"export"},c.a.createElement("p",null,"Instantly export requests as code, for languages and tools including cURL, wget, JS (XHR, Node HTTP, Request, ...), Python (native or Requests), Ruby, Java (OkHttp or Unirest), Go, PHP, Swift, HTTPie, and a whole lot more."),c.a.createElement("p",null,"Want to save the exchange itself? Export one or all requests as HAR (the"," ",c.a.createElement("a",{href:"https://en.wikipedia.org/wiki/.har"},"HTTP Archive Format"),"), to import and examine elsewhere, share with your team, or store for future reference.")))}get snippetOption(){let e=this.props.uiStore.exportSnippetFormat||"shell~~curl";return $i(e)}setSnippetOption(e){this.props.uiStore.exportSnippetFormat=e}};Gc([d.computed],el.prototype,"snippetOption",null),Gc([d.action.bound],el.prototype,"setSnippetOption",null),el=Gc([Object(u.d)("accountStore"),Object(u.d)("uiStore"),u.e],el);var tl=n(117);const nl=Object(p.i)(Yt.e)`
    position: sticky;
    top: -10px;
    z-index: 2;

    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;

    flex-shrink: 0;
`,rl=p.e`
    padding: 10px 15px;
    font-weight: bold;
    font-size: ${e=>e.theme.textSize};

    margin: 10px 0 0 10px;
    align-self: stretch;
`,ol=p.i.p`
    width: 100%;
    margin-bottom: 10px;
    line-height: 1.3;

    a[href] {
        color: ${e=>e.theme.linkColor};

        &:visited {
            color: ${e=>e.theme.visitedLinkColor};
        }
    }
`,sl=Object(p.i)(jn.a)`${rl}`,il=Object(p.i)(jn.c)`${rl}`;function al(e){return t=>e.includes(t)}const cl=al(["invalid-http-version","invalid-method","client-unparseable","client-unparseable-url","header-overflow","invalid-headers"]),ll=al(["client-unparseable","client-unparseable-url","invalid-headers"]),dl=al(["untrusted","expired","not-yet-valid","wrong-host","tls-error","host-not-found","host-unreachable","dns-error","connection-refused"]),ul=al(["server-unparseable","connection-reset"]),pl=al(["client-timeout","server-timeout"]),hl=al(["untrusted","expired","not-yet-valid","wrong-host","tls-error"]),ml=al(["host-not-found","host-unreachable","dns-error","connection-refused","connection-reset","server-timeout"]),gl=e=>{const t="fulfilled"===f.C.state&&tl.valid(f.C.value)&&Object(f.F)(f.C.value,f.f);return a.createElement(nl,null,a.createElement(ol,null,a.createElement(zt.e,null)," ",cl(e.type)?a.createElement("strong",null,"This request could not be handled"):dl(e.type)?a.createElement("strong",null,"This request was not forwarded successfully"):a.createElement("strong",null,"This exchange was not completed successfully")),a.createElement(ol,null,cl(e.type)?a.createElement(a.Fragment,null,"The client's request ","invalid-method"===e.type?"used an unsupported HTTP method":"invalid-http-version"===e.type?"used an unsupported HTTP version":"invalid-headers"===e.type?"included an invalid or unparseable header":"client-unparseable-url"===e.type?"included an unparseable URL":"header-overflow"===e.type?"headers were too large to be processed":"client-unparseable"===e.type?"could not be parsed":Object(D.d)(e.type),", so HTTP Toolkit did not handle this request."):dl(e.type)?a.createElement(a.Fragment,null,"The upstream server ","wrong-host"===e.type?"responded with an HTTPS certificate for the wrong hostname":"expired"===e.type?"has an expired HTTPS certificate":"not-yet-valid"===e.type?"has an HTTPS certificate with a start date in the future":"untrusted"===e.type?"has an untrusted HTTPS certificate":"tls-error"===e.type?"failed to complete a TLS handshake":"host-unreachable"===e.type?"was not reachable on your network connection":"host-not-found"===e.type||"dns-error"===e.type?"hostname could be not found":"connection-refused"===e.type?"refused the connection":Object(D.d)(e.type),", so HTTP Toolkit did not forward the request."):pl(e.type)?a.createElement(a.Fragment,null,"The request timed out ","client-timeout"===e.type?"waiting for the client to send the complete request":"server-timeout"===e.type?"waiting for a response from the server":Object(D.d)(e.type)):"client-abort"===e.type?a.createElement(a.Fragment,null,"The client unexpectedly disconnected during the request, so the response could not be completed."):ul(e.type)?a.createElement(a.Fragment,null,"The upstream request failed because ","connection-reset"===e.type?"the connection to the server was reset":"server-unparseable"===e.type?"the response from the server was unparseable":Object(D.d)(e.type),", so HTTP Toolkit could not return a response to the client."):"unknown"===e.type?a.createElement(a.Fragment,null,"The request failed because of an unknown error, so HTTP Toolkit could not return a response."):Object(D.d)(e.type)),"tls-error"===e.type?a.createElement(a.Fragment,null,a.createElement(ol,null,"This could be caused by the server not supporting modern cipher standards or TLS versions, requiring a client certificate that hasn't been provided, or other TLS configuration issues."),a.createElement(ol,null,e.isPaidUser?a.createElement(a.Fragment,null,"From the Settings page you can configure client certificates, or whitelist this host to relax HTTPS requirements and allow self-signed certificates, which may resolve some TLS issues."):a.createElement(a.Fragment,null,"Pro users can relax HTTPS requirements for configured hosts to accept older TLS configurations and self-signed/invalid certificates, and configure per-host client certificates for authentication."))):"host-not-found"===e.type?a.createElement(a.Fragment,null,a.createElement(ol,null,"This typically means the host doesn't exist, although it could be an issue with your DNS or network configuration."),a.createElement(ol,null,"You can define mock responses for requests like this from the Mock page, to return fake data even for servers and hostnames that don't exist.")):"host-unreachable"===e.type?a.createElement(a.Fragment,null,a.createElement(ol,null,"This is typically an issue with your network connection or the host's DNS records."),a.createElement(ol,null,"You can define mock responses for requests like this from the Mock page, to return fake data even for servers and hostnames that aren't accessible.")):"dns-error"===e.type?a.createElement(a.Fragment,null,a.createElement(ol,null,"The DNS server hit an unknown error looking up this hostname. This is likely due to a issue in your DNS configuration or network connectivity, and may just be a temporary issue."),a.createElement(ol,null,"You can define mock responses for requests like this from the Mock page, to return fake data even for servers and hostnames that don't exist or aren't accessible.")):"untrusted"===e.type?a.createElement(ol,null,"By default unrecognized certificate authorities (CAs) are only accepted for localhost servers, but ",e.isPaidUser?"additional CAs can be trusted from the Settings page.":"Pro users can trust additional CAs or disable HTTPS validation for a host entirely."):hl(e.type)?a.createElement(ol,null,"By default this is only allowed for localhost servers, but ",e.isPaidUser?"other hosts can be added to the whitelist from the Settings page.":"Pro users can whitelist other custom hosts."):"connection-refused"===e.type?a.createElement(ol,null,"This typically means the server isn't running on the port you're using, though it is possible this is an intermittent connection issue. You can either try again, or mock requests like this to avoid sending them upstream at all."):"connection-reset"===e.type?a.createElement(ol,null,"This could be due to a connection issue, or an issue with the server. This may be an intermittent issue that will be solved by retrying the request, or you can mock requests like this to avoid sending them upstream at all."):"client-abort"===e.type?a.createElement(ol,null,"This could be due to connection issues, problems within the client, or that the client simply no longer wanted to receive the response and closed the connection intentionally."):"client-timeout"===e.type?a.createElement(ol,null,"This could be due to connection issues, problems within the client, or delays generating the complete body of the request. This might be resolved by retrying the request, or sending a simpler request with a smaller or easier to generate body."):"server-timeout"===e.type?a.createElement(ol,null,"This could be due to connection issues, problems within the server, or issues with handling this request specifically. This might be resolved by retrying the request, or you can mock requests like this to avoid sending them upstream at all."):ll(e.type)?a.createElement(ol,null,"This means the client sent HTTP Toolkit some fundamentally invalid data that does not follow the HTTP spec. That suggests either a major bug in the client, or that they're not sending HTTP at all."):"server-unparseable"===e.type?a.createElement(ol,null,"This means the server sent HTTP Toolkit some fundamentally invalid data that does not follow the HTTP spec. That suggests either a major bug in the server, or that they're not sending HTTP at all."):"header-overflow"===e.type?a.createElement(ol,null,f.C.value&&t?a.createElement(a.Fragment,null,"This means the request included more than 100KB of headers. The HTTP specification doesn't set a max length, but most servers will refuse to process anything longer than 8KB. This is likely an issue with your client, but if necessary you can increase the HTTP Toolkit limit by setting ",a.createElement("code",null,"max-http-header-size")," using the ",a.createElement("code",null,"HTTPTOOLKIT_NODE_OPTIONS")," environment variable."):f.C.value?a.createElement(a.Fragment,null,"In more recent HTTP Toolkit versions the built-in limit has been increased, so please update HTTP Toolkit to handle requests like these."):a.createElement(a.Fragment,null,"The HTTP specification doesn't set a max length for HTTP headers, but most servers will refuse to process anything longer than 8KB.")):"invalid-method"===e.type?a.createElement(ol,null,"Because this method is unrecognized, HTTP Toolkit doesn't know how it should be handled, and cannot safely forward it on elsewhere. If you think this method should be supported, please ",a.createElement("a",{href:"https://github.com/httptoolkit/httptoolkit/issues/new"},"get in touch"),"."):"invalid-http-version"===e.type?a.createElement(ol,null,"The client may be using a newer or experimental HTTP version that HTTP Toolkit doesn't yet support. If you think this version should be supported, please ",a.createElement("a",{href:"https://github.com/httptoolkit/httptoolkit/issues/new"},"get in touch"),"."):"unknown"===e.type?a.createElement(ol,null,"It's not clear what's gone wrong here, but for some reason HTTP Toolkit couldn't successfully and/or securely complete this request. This might be an intermittent issue, and may be resolved by retrying the request."):Object(D.d)(e.type),cl(e.type)&&a.createElement(ol,null,"The data shown below is a best guess from the data that was available and parseable, and may be incomplete or inaccurate."),a.createElement(sl,{onClick:e.ignoreError,onKeyPress:Gt},"Ignore"),ml(e.type)?a.createElement(sl,{onClick:e.mockRequest,onKeyPress:Gt},"Mock requests like this"):hl(e.type)?e.isPaidUser?a.createElement(sl,{onClick:()=>e.navigate("/settings"),onKeyPress:Gt},"Go to Settings"):a.createElement(sl,{onClick:()=>e.getPro("error-header-"+e.type),onKeyPress:Gt},"Get Pro"):null)},fl=p.i.div`
    height: ${38}px;
    flex-shrink: 0;
    width: 100%;
    padding-left: 5px;
    box-sizing: border-box;

    background-color: ${e=>e.theme.mainBackground};

    display: flex;

    align-items: center;
    justify-content: center;

    z-index: 1;
    box-shadow: 0 -10px 30px -5px rgba(0,0,0,0.1);
`,bl=Object(u.e)(e=>a.createElement(fn.a,{icon:["fas","eye"],title:"Scroll the list to show this exchange",onClick:e.onClick})),yl=Object(p.i)(Object(u.e)(e=>a.createElement(fn.a,{className:e.className,icon:["fas","thumbtack"],title:(e.pinned?"Unpin this exchange so it can be deleted":"Pin this exchange, so it can't be deleted")+` (${_t.a}+P)`,onClick:e.onClick})))`
    transition: transform 0.1s;

    ${e=>!e.pinned&&p.e`
        transform: rotate(45deg);
    `}
`,vl=Object(u.e)(e=>a.createElement(fn.a,{icon:["far","trash-alt"],title:`Delete this exchange (${_t.a}+Delete)`,onClick:e.onClick})),xl=Object(u.e)(e=>a.createElement(fn.a,{icon:["fas","theater-masks"],onClick:e.onClick,title:e.isPaidUser?"Create a mock rule from this exchange":"With Pro: create a mock rule from this exchange",disabled:!e.isExchange||!e.isPaidUser})),wl=Object(u.d)("rulesStore")(Object(u.e)(e=>{const{event:t}=e,{pinned:n}=t;return a.createElement(fl,null,a.createElement(bl,{onClick:()=>e.onScrollToEvent(e.event)}),a.createElement(yl,{pinned:n,onClick:Object(d.action)(()=>{t.pinned=!t.pinned})}),a.createElement(vl,{pinned:n,onClick:()=>e.onDelete(t)}),a.createElement(xl,{isExchange:t.isHttp(),isPaidUser:e.isPaidUser,onClick:()=>e.onBuildRuleFromExchange(e.event)}))})),El=e=>a.createElement(nl,null,a.createElement(ol,null,a.createElement(zt.e,null)," ",a.createElement("strong",null,"This request is paused at a breakpoint")),a.createElement(ol,null,Object(f.F)(f.E.value,f.c)?a.createElement(a.Fragment,null,"Edit the request and then resume to let your edited request continue to the target URL, respond directly to provide a response yourself, or close to immediately end the connection."):a.createElement(a.Fragment,null,"Respond directly to provide a response yourself, or edit the request as you'd like and then resume to let your edited request continue to the target URL.")),a.createElement(il,{onClick:e.onCreateResponse,onKeyPress:Gt},"Respond directly"),Object(f.F)(f.E.value,f.c)?a.createElement(il,{onClick:e.onClose,onKeyPress:Gt},"Close"):null,a.createElement(sl,{onClick:e.onResume,onKeyPress:Gt},"Resume")),Cl=e=>a.createElement(nl,null,a.createElement(ol,null,a.createElement(zt.e,null)," ",a.createElement("strong",null,"This response is paused at a breakpoint")),a.createElement(ol,null,Object(f.F)(f.E.value,f.c)?a.createElement(a.Fragment,null,"Edit it as you'd like and resume to let the edited response continue back to the client, or close to immediately end the connection."):a.createElement(a.Fragment,null,"Edit it as you'd like, then resume to let the edited response continue back to the client.")),Object(f.F)(f.E.value,f.c)?a.createElement(il,{onClick:e.onClose,onKeyPress:Gt},"Close"):null,a.createElement(sl,{onClick:e.onResume,onKeyPress:Gt},"Resume"));var Tl=n(111),Ol=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i};const Sl=e=>e.map(({key:e,value:t})=>[e,t]),jl=e=>e.map(({key:e,value:t,disabled:n})=>({key:!n&&e.startsWith(":")?e.slice(1):e,value:t,disabled:n})),kl=e=>e.map(({key:e,value:t,disabled:n})=>({key:!n&&e.startsWith(":")?e.slice(1).toLowerCase():e.toLowerCase(),value:t,disabled:n})),Pl=Object(u.e)(e=>{const{headers:t,onChange:n,allowEmptyValues:r,preserveKeyCase:o}=e;return a.createElement(Tl.a,{pairs:(s=t,(e=>e.map(({key:e,value:t})=>e.startsWith(":")?{key:e,value:t,disabled:!0}:{key:e,value:t}))(s.map(([e,t])=>({key:e,value:t})))),onChange:n,transformInput:o?jl:kl,convertResult:Sl,allowEmptyValues:r,keyPattern:vc.a,keyTitle:"Header names must contain only alphanumeric characters and !#$%&'*+-.^_`|~ symbols",keyPlaceholder:"Header name",valuePlaceholder:"Header value"});var s});let Rl=class extends a.Component{constructor(){super(...arguments),this.rawHeaders=this.props.convertToRawHeaders(this.props.headers),this.output=this.props.headers}componentDidMount(){Object(u.c)(this,Object(d.reaction)(()=>this.props.headers,e=>{if(!s.isEqual(e,this.output)){const t=this.props.convertToRawHeaders(e);Object(d.runInAction)(()=>{this.rawHeaders=t})}}))}onChangeRawHeaders(e){this.rawHeaders=e;const{allowEmptyValues:t,convertFromRawHeaders:n,onChange:r,onInvalidState:o}=this.props;if(t)this.output=n(e),r(this.output);else{if(e.some(([e,t])=>!t))return null==o?void 0:o();if(e.some(([e])=>!e))return null==o?void 0:o();this.output=n(e),r(this.output)}}render(){const{allowEmptyValues:e}=this.props,{rawHeaders:t,onChangeRawHeaders:n}=this;return a.createElement(Pl,{headers:t,onChange:n,allowEmptyValues:e})}};Ol([d.observable],Rl.prototype,"rawHeaders",void 0),Ol([d.action.bound],Rl.prototype,"onChangeRawHeaders",null),Rl=Ol([u.e],Rl);var Hl=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},ql=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};const Al=Object(p.i)(jn.e)`
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 10px;
`,Il=Object.values(ut.Method).filter(e=>"string"==typeof e),Dl=Object(p.i)(jn.d)`
    font-size: ${e=>e.theme.textSize};
    display: inline-block;

    width: auto;
    margin-left: 8px;
    margin-bottom: 5px;
`;let $l=class extends a.Component{render(){const e=this.props,{exchange:t,onChange:n}=e,r=ql(e,["exchange","onChange"]),{request:o}=t,{inProgressResult:s}=this.props.exchange.requestBreakpoint,i=s.rawHeaders||[],{method:c,url:l}=s;return a.createElement(Yt.b,Object.assign({},r,{direction:"right"}),a.createElement("header",null,a.createElement(Ya,{source:o.source}),a.createElement(Qt.a,{color:Object(N.f)(t)},c," ",(o.hostname||"").replace(/\./g," . ")),a.createElement(Yt.c,{onCollapseToggled:r.onCollapseToggled},"Request")),a.createElement("div",null,a.createElement(ln.c,null,"Method:"),a.createElement(Dl,{value:c,onChange:this.onMethodChanged},!Il.includes(c)&&a.createElement("option",{key:c,value:void 0},c),Il.map(e=>a.createElement("option",{key:e,value:e},e)))),a.createElement(ln.d,null,"URL"),a.createElement(Al,{value:l,onChange:this.onUrlChanged}),a.createElement(ln.d,null,"Headers"),a.createElement(Pl,{headers:i,onChange:this.onHeadersChanged,preserveKeyCase:!0}))}get isHttp2(){return 2===this.props.exchange.httpVersion}onMethodChanged(e){const t=e.target.value,{inProgressResult:n}=this.props.exchange.requestBreakpoint;t!==n.method&&(this.isHttp2?this.props.onChange({method:t,rawHeaders:Object(vc.j)(n.rawHeaders,{":method":t})}):this.props.onChange({method:t}))}onUrlChanged(e){const t=e.target.value,{inProgressResult:n}=this.props.exchange.requestBreakpoint;let r=n.rawHeaders;try{const e=new URL(t);r=this.isHttp2?Object(vc.j)(r,{":authority":e.host,":path":e.pathname+e.search,":scheme":e.protocol.slice(0,-1)}):Object(vc.j)(r,{host:e.host})}catch(e){}this.props.onChange({url:e.target.value,rawHeaders:r})}onHeadersChanged(e){this.props.onChange({rawHeaders:e})}};Hl([d.computed],$l.prototype,"isHttp2",null),Hl([d.action.bound],$l.prototype,"onMethodChanged",null),Hl([d.action.bound],$l.prototype,"onUrlChanged",null),Hl([d.action.bound],$l.prototype,"onHeadersChanged",null),$l=Hl([u.e],$l);const Ml=p.i.div`
    margin-top: 5px;

    display: flex;
    flex-direction: row;
    align-items: stretch;

    > :not(:last-child) {
        margin-right: 5px;
    }

    > :last-child {
        flex-grow: 1;
    }
`;function Fl(e,t){return e.toLowerCase()===Object(F.d)(t).toLowerCase()}const Bl=e=>{const{statusCode:t}=e,n=void 0===e.statusMessage||2===e.httpVersion?Object(F.d)(t):e.statusMessage;return a.createElement(Ml,{className:e.className},a.createElement(jn.e,{type:"number",min:"100",max:"999",invalid:!t,value:t,onChange:r=>{let o=""!==r.target.value?parseInt(r.target.value,10):void 0;if(s.isNaN(o))return;const i=Fl(n,t)?void 0:e.statusMessage;e.onChange(o,i)}}),a.createElement(jn.e,{disabled:2===e.httpVersion,value:n,onChange:n=>{let r=n.target.value;Fl(r,t)&&(r=void 0),e.onChange(t,r)}}))};var Nl=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},Ll=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};const Ul=p.i.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
`,Wl=Object(p.i)(Bl)`
    margin-left: 10px;
    margin-bottom: 5px;
    flex-basis: 100%;
`;let zl=class extends a.Component{render(){const e=this.props,{exchange:t,onChange:n,theme:r}=e,o=Ll(e,["exchange","onChange","theme"]),{inProgressResult:s}=t.responseBreakpoint,i=s.rawHeaders||[],{statusCode:c,statusMessage:l}=s;return a.createElement(Yt.b,Object.assign({},o,{direction:"left"}),a.createElement("header",null,a.createElement(Qt.a,{color:Object(N.e)(s.statusCode,r)},c),a.createElement(Yt.c,{onCollapseToggled:o.onCollapseToggled},"Response")),a.createElement(Ul,null,a.createElement(ln.c,null,"Status:"),a.createElement(Wl,{httpVersion:t.httpVersion,statusCode:c,statusMessage:l,onChange:this.onStatusChange})),a.createElement(ln.d,null,"Headers"),a.createElement(Pl,{headers:i,onChange:this.onHeadersChanged,preserveKeyCase:!0}))}onHeadersChanged(e){this.props.onChange({rawHeaders:e})}onStatusChange(e,t){var n;if(2===this.props.exchange.httpVersion){const{rawHeaders:r}=this.props.exchange.responseBreakpoint.inProgressResult;this.props.onChange({statusCode:e||NaN,statusMessage:t,rawHeaders:Object(vc.j)(r,{":status":null!==(n=null==e?void 0:e.toString())&&void 0!==n?n:""})})}else this.props.onChange({statusCode:e||NaN,statusMessage:t})}};Nl([d.action.bound],zl.prototype,"onHeadersChanged",null),Nl([d.action.bound],zl.prototype,"onStatusChange",null),zl=Nl([u.e],zl);var _l=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i};let Vl=class extends a.Component{constructor(){super(...arguments),this.contentType="text",this.onBodyChange=e=>{this.props.onChange(Object(M.l)(e,this.textEncoding))}}onChangeContentType(e){this.contentType=e}componentDidMount(){Object(u.c)(this,Object(d.reaction)(()=>Object(vc.d)(this.props.rawHeaders,"content-type"),e=>{this.contentType=Object(Gi.g)(e)||"text"},{fireImmediately:!0}))}get textEncoding(){return Object(M.h)(this.props.body)?"utf8":"binary"}render(){const{body:e,title:t,exchangeId:n,direction:r,collapsed:o,expanded:s,onCollapseToggled:i,onExpandToggled:c}=this.props,l=Object(M.c)(e,this.textEncoding);return a.createElement(Yt.b,{direction:r,collapsed:o,onCollapseToggled:i,expanded:s},a.createElement("header",null,a.createElement(Ki.c,{body:e,onBodyFormatted:this.onBodyChange,title:t,expanded:s,onExpandToggled:c,onCollapseToggled:i,selectedContentType:this.contentType,contentTypeOptions:Gi.a,onChangeContentType:this.onChangeContentType})),a.createElement(Ki.d,null,a.createElement($o.b,{contentId:`bp-${n}-${r}`,node:this.props.editorNode,language:this.contentType,value:l,onChange:this.onBodyChange,expanded:!!s})))}};_l([d.observable],Vl.prototype,"contentType",void 0),_l([d.action.bound],Vl.prototype,"onChangeContentType",null),_l([d.computed],Vl.prototype,"textEncoding",null),Vl=_l([u.e],Vl);var Gl=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i};const Jl=p.i.div`
    margin-top: auto;
`;let Kl=class extends a.Component{get cardProps(){return this.props.uiStore.viewCardProps}render(){var e,t;const{exchange:n,onDelete:r,onScrollToEvent:o,onBuildRuleFromExchange:i,uiStore:c,accountStore:l,navigate:d}=this.props,{isPaidUser:u}=l,{expandedViewCard:p}=c,{requestBreakpoint:h,responseBreakpoint:m}=n,g=u||(null===(e=n.api)||void 0===e?void 0:e.isBuiltInApi)?n.api:void 0,f=(null===(t=n.api)||void 0===t?void 0:t.matchedOperation())?(e=>{const t=!e.includes(" ")&&e.length>6?s.startCase(e):e;return t.length>75?t.slice(0,72).trimRight()+"…":t})(n.api.service.name):void 0,b=this.renderHeaderCard(n);if(p)return a.createElement(Li,null,b,this.renderExpandedCard(p,n,g));const y=h||m?this.renderBreakpointCards(n,f,g):this.renderNormalCards(n,f,g);return a.createElement(Li,null,a.createElement(zi,null,b,y),a.createElement(wl,{event:n,onDelete:r,onScrollToEvent:o,onBuildRuleFromExchange:i,navigate:d,isPaidUser:u}))}renderHeaderCard(e){const{accountStore:t,navigate:n}=this.props,{isPaidUser:r,getPro:s}=t,{requestBreakpoint:i,respondToBreakpointedRequest:c,responseBreakpoint:l,tags:d}=e;if(i)return a.createElement(El,{key:"breakpoint-header",onCreateResponse:c,onResume:i.resume,onClose:i.close});if(l)return a.createElement(Cl,{key:"breakpoint-header",onResume:l.resume,onClose:l.close});const u={key:"error-header",isPaidUser:r,getPro:s,navigate:n,mockRequest:this.mockRequest,ignoreError:this.ignoreError},p=function(e){return e.includes("passthrough-error:SELF_SIGNED_CERT_IN_CHAIN")||e.includes("passthrough-error:DEPTH_ZERO_SELF_SIGNED_CERT")||e.includes("passthrough-error:UNABLE_TO_VERIFY_LEAF_SIGNATURE")||e.includes("passthrough-error:UNABLE_TO_GET_ISSUER_CERT_LOCALLY")?"untrusted":e.includes("passthrough-error:CERT_HAS_EXPIRED")?"expired":e.includes("passthrough-error:CERT_NOT_YET_VALID")?"not-yet-valid":e.includes("passthrough-error:ERR_TLS_CERT_ALTNAME_INVALID")?"wrong-host":e.filter(e=>e.startsWith("passthrough-tls-error:")).length>0||e.includes("passthrough-error:EPROTO")||e.includes("passthrough-error:ERR_SSL_WRONG_VERSION_NUMBER")||e.includes("passthrough-error:ERR_SSL_DECRYPTION_FAILED_OR_BAD_RECORD_MAC")||e.includes("passthrough-error:ERR_SSL_CIPHER_OPERATION_FAILED")||e.includes("passthrough-error:ERR_SSL_BAD_RECORD_TYPE")||e.includes("passthrough-error:ERR_SSL_INTERNAL_ERROR")?"tls-error":e.includes("passthrough-error:ENOTFOUND")?"host-not-found":e.includes("passthrough-error:EHOSTUNREACH")||e.includes("passthrough-error:ENETUNREACH")?"host-unreachable":e.includes("passthrough-error:EAI_AGAIN")?"dns-error":e.includes("passthrough-error:ECONNREFUSED")?"connection-refused":e.includes("passthrough-error:ECONNRESET")?"connection-reset":e.includes("passthrough-error:ETIMEDOUT")?"server-timeout":e.includes("passthrough-error:HPE_INVALID_CONSTANT")||e.includes("passthrough-error:ERR_INVALID_HTTP_TOKEN")||e.includes("passthrough-error:ERR_HTTP_INVALID_STATUS_CODE")||e.includes("passthrough-error:ERR_INVALID_CHAR")?"server-unparseable":e.includes("http-2")||e.includes("client-error:HPE_INVALID_VERSION")?"invalid-http-version":e.includes("client-error:HPE_INVALID_METHOD")?"invalid-method":e.includes("client-error:HPE_INVALID_URL")?"client-unparseable-url":e.includes("client-error:HPE_INVALID_CONSTANT")||e.includes("client-error:HPE_INVALID_EOF_STATE")?"client-unparseable":e.includes("client-error:HPE_HEADER_OVERFLOW")?"header-overflow":e.includes("client-error:HPE_INVALID_CONTENT_LENGTH")||e.includes("client-error:HPE_INVALID_TRANSFER_ENCODING")||e.includes("client-error:HPE_INVALID_HEADER_TOKEN")||e.includes("client-error:HPE_UNEXPECTED_CONTENT_LENGTH")||e.includes("passthrough-error:HPE_INVALID_HEADER_TOKEN")?"invalid-headers":e.includes("client-error:ERR_HTTP_REQUEST_TIMEOUT")?"client-timeout":e.includes("client-error:ECONNABORTED")||e.includes("client-error:EPIPE")?"client-abort":e.filter(e=>e.startsWith("passthrough-error:")).length>0||e.filter(e=>e.startsWith("client-error:")).length>0?(Object(o.d)("Unrecognized error tag "+JSON.stringify(e)),"unknown"):void 0}(d);return p?a.createElement(gl,Object.assign({type:p},u)):null}renderApiCard(e,t){return e?t?a.createElement(Ja,Object.assign({},this.cardProps.api,{apiName:e,apiExchange:t})):a.createElement(Ka,Object.assign({},this.cardProps.api,{apiName:e})):null}renderExpandedCard(e,t,n){return"requestBody"===e?this.renderRequestBody(t,n):"responseBody"===e&&(t.isSuccessfulExchange()||t.responseBreakpoint)?this.renderResponseBody(t,n):"webSocketMessages"===e&&t.isWebSocket()&&t.wasAccepted()?this.renderWebSocketMessages(t):(Object(o.d)(`Expanded ${e}, but can't show anything`),null)}renderBreakpointCards(e,t,n){const{uiStore:r}=this.props,{requestBreakpoint:o}=e,s=[];if(o)s.push(a.createElement($l,Object.assign({},this.cardProps.request,{exchange:e,onChange:o.updateMetadata}))),s.push(this.renderRequestBody(e,n));else{const o=e.responseBreakpoint;s.push(this.renderApiCard(t,n)),s.push(a.createElement(mc,Object.assign({},this.cardProps.request,{matchedRuleData:this.matchedRuleData,onRuleClicked:this.jumpToRule,exchange:e}))),e.hasRequestBody()&&s.push(this.renderRequestBody(e,n)),s.push(a.createElement(zl,Object.assign({},this.cardProps.response,{exchange:e,onChange:o.updateMetadata,theme:r.theme}))),s.push(this.renderResponseBody(e,n))}return s}renderNormalCards(e,t,n){const{uiStore:r}=this.props,{response:o}=e,s=[];return s.push(this.renderApiCard(t,n)),s.push(a.createElement(mc,Object.assign({},this.cardProps.request,{matchedRuleData:this.matchedRuleData,onRuleClicked:this.jumpToRule,exchange:e}))),e.hasRequestBody()&&s.push(this.renderRequestBody(e,n)),"aborted"===o?s.push(a.createElement(yc,{key:this.cardProps.response.key,cardProps:this.cardProps.response,exchange:e})):o&&(s.push(a.createElement(fc,Object.assign({},this.cardProps.response,{response:o,requestUrl:e.request.parsedUrl,apiExchange:n,theme:r.theme}))),e.hasResponseBody()&&s.push(this.renderResponseBody(e,n))),e.isWebSocket()&&e.wasAccepted()?(s.push(this.renderWebSocketMessages(e)),e.closeState&&s.push(a.createElement(xa,Object.assign({},this.cardProps.webSocketClose,{theme:r.theme,closeState:e.closeState})))):(s.push(a.createElement(Jl,{key:"divider"})),s.push(a.createElement($c,Object.assign({exchange:e},this.cardProps.performance))),s.push(a.createElement(el,Object.assign({exchange:e},this.cardProps.export)))),s}renderRequestBody(e,t){var n;const{request:r,requestBreakpoint:o}=e;return o?a.createElement(Vl,Object.assign({},this.requestBodyParams(),{exchangeId:e.id,body:o.inProgressResult.body.decoded,rawHeaders:o.inProgressResult.rawHeaders,onChange:o.updateBody})):a.createElement(wa.a,Object.assign({},this.requestBodyParams(),{isPaidUser:this.props.accountStore.isPaidUser,url:e.request.url,message:r,apiBodySchema:null===(n=null==t?void 0:t.request)||void 0===n?void 0:n.bodySchema}))}renderResponseBody(e,t){var n;const{response:r,responseBreakpoint:o}=e;return o?a.createElement(Vl,Object.assign({},this.responseBodyParams(),{exchangeId:e.id,body:o.inProgressResult.body.decoded,rawHeaders:o.inProgressResult.rawHeaders,onChange:o.updateBody})):a.createElement(wa.a,Object.assign({},this.responseBodyParams(),{isPaidUser:this.props.accountStore.isPaidUser,url:e.request.url,message:r,apiBodySchema:null===(n=null==t?void 0:t.response)||void 0===n?void 0:n.bodySchema}))}renderWebSocketMessages(e){const t=e.request.url.split("/"),n=t[2].split(":")[0],r=t.length>=2?t[t.length-1]:void 0,o=`${n}${r?"- "+r:""} - websocket`;return a.createElement(ca,Object.assign({},this.cardProps.webSocketMessages,{key:`${this.cardProps.webSocketMessages.key}-${this.props.exchange.id}`,streamId:this.props.exchange.id,streamType:"WebSocket",editorNode:this.props.streamMessageEditor,isPaidUser:this.props.accountStore.isPaidUser,filenamePrefix:o,messages:e.messages}))}requestBodyParams(){return Object.assign(Object.assign({},this.cardProps.requestBody),{title:"Request Body",direction:"right",editorNode:this.props.requestEditor})}responseBodyParams(){return Object.assign(Object.assign({},this.cardProps.responseBody),{title:"Response Body",direction:"left",editorNode:this.props.responseEditor})}mockRequest(){const{exchange:e,rulesStore:t,navigate:n}=this.props,r=Object(Mo.f)(t,e.request);t.draftRules.items.unshift(r),n("/mock/"+r.id)}get matchedRuleData(){const{exchange:e,rulesStore:t}=this.props,{matchedRule:n}=e;if(!n)return;const r=Object(Ct.f)(t.draftRules,{id:n.id});if(!r)return{stepTypes:n.handlerStepTypes,status:"deleted"};const o=("handler"in r?[r.handler]:r.steps).map(e=>Object(Ni.h)(e));return s.isEqual(o,n.handlerStepTypes)?{stepTypes:n.handlerStepTypes,status:"unchanged"}:{stepTypes:n.handlerStepTypes,status:"modified-types"}}jumpToRule(){const{navigate:e,exchange:t}=this.props,{matchedRule:n}=t;n&&e("/mock/"+n.id)}ignoreError(){const{exchange:e}=this.props;e.tags=e.tags.filter(e=>!(e.startsWith("passthrough-error:")||e.startsWith("passthrough-tls-error:")||e.startsWith("client-error:")||["header-overflow","http-2"].includes(e)))}};Gl([d.action.bound],Kl.prototype,"mockRequest",null),Gl([d.computed],Kl.prototype,"matchedRuleData",null),Gl([d.action.bound],Kl.prototype,"jumpToRule",null),Gl([d.action.bound],Kl.prototype,"ignoreError",null),Kl=Gl([Object(u.d)("uiStore"),Object(u.d)("accountStore"),Object(u.d)("rulesStore"),u.e],Kl);const Yl=Object(p.i)(zt.b).attrs({icon:zt.c.Android.icon})`
    float: left;
    margin-right: 10px;
    margin-top: 3px;
    color: ${zt.c.Android.color};
`;class Ql extends a.Component{render(){const{failure:e,certPath:t}=this.props,n=yt(e.remoteIpAddress).split(" "),r=n[0],o=n.slice(1).join(" ");return a.createElement(Li,null,a.createElement(zi,null,a.createElement(Yt.e,null,a.createElement("header",null,a.createElement("h1",null,"Failed HTTPS Request")),a.createElement(ln.d,null,"Details"),a.createElement(ln.b,null,a.createElement("p",null,{closed:a.createElement(a.Fragment,null,"This connection was aborted and closed before any HTTP request was sent."),reset:a.createElement(a.Fragment,null,"This connection was aborted and reset before any HTTP request was sent."),"cert-rejected":a.createElement(a.Fragment,null,"This connection was aborted, before any HTTP request was sent, because the client did not trust the HTTP Toolkit certificate."),"no-shared-cipher":a.createElement(a.Fragment,null,"This connection was aborted, before any HTTP request was sent, because the client failed to agree on a TLS configuration."),unknown:a.createElement(a.Fragment,null,"This connection was aborted, before any HTTP request was sent, due to a TLS error.")}[e.failureCause]),a.createElement("p",null,"The request was sent by ",a.createElement(ln.h,null,r)," ",o,".")),a.createElement(ln.d,null,"Cause"),a.createElement(ln.b,null,"cert-rejected"===e.failureCause?a.createElement("p",null,"This means that the client hasn't yet been fully configured to work with HTTP Toolkit. It has the proxy settings, but it doesn't trust our certificate authority (CA), so we can't we can't intercept its HTTPS traffic."):"no-shared-cipher"===e.failureCause?a.createElement(a.Fragment,null,a.createElement("p",null,"This usually means that the client hasn't yet been 100% configured to work with HTTP Toolkit, although it's also possible that it has an unusual TLS setup."),a.createElement("p",null,"The former case is much more likely. That would mean that the client has the right proxy settings, but doesn't trust our certificate authority (CA), so we can't imitate HTTPS sites and we can't collect or see its HTTPS traffic.")):a.createElement(a.Fragment,null,a.createElement("p",null,"This could be caused by a few things:"),a.createElement("ul",null,a.createElement("li",null,"The client might no longer want to make the request"),a.createElement("li",null,"The client might have connection issues"),a.createElement("li",null,"The client might not trust our HTTPS certificate")))),a.createElement(ln.d,null,"Solutions"),a.createElement(ln.b,null,a.createElement("p",null,"cert-rejected"===e.failureCause?a.createElement(a.Fragment,null,"To resolve this, you need to configure the client to trust your HTTP Toolkit CA."):"no-shared-cipher"===e.failureCause?a.createElement(a.Fragment,null,"You probably need to ensure the client is configured to trust the HTTP Toolkit CA."):a.createElement(a.Fragment,null,"In the first two cases, this is not related to HTTP Toolkit. In the third case, you need to configure the client to trust your HTTP Toolkit CA.")),a.createElement("p",null,"How you do this depends on the specific client. Opening the certificate file on the device may prompt you to trust it device-wide, or you may need a specific option for the HTTP library or tool that's being used."),a.createElement("p",null,"Your HTTP Toolkit certificate is stored on your machine at ",a.createElement(ln.h,null,t)),a.createElement(Yl,null),a.createElement("p",null,a.createElement("strong",null,"For Android devices"),", modern apps will not trust your installed CA certificates by default. For apps targeting API level 24+, the app must opt in to trusting user CA certificates, or you need to inject a system certificate (only possible on rooted devices and emulators)."),a.createElement("p",null,"Trusting user CA certificates in your own app is a small & simple configuration change, see ",a.createElement("a",{href:"https://httptoolkit.com/docs/guides/android#intercepting-traffic-from-your-own-android-app"},"the HTTP Toolkit docs"),' for more details. Alternatively HTTP Toolkit can inject the system certificate for you automatically, on devices that support this, by connecting the device with ADB and using the "Android device via ADB" interception option.'),a.createElement("p",null,"Take a look at the ",a.createElement("a",{href:"https://httptoolkit.com/docs/guides/android/"},"Android interception guide")," for more information.")))))}}class Xl extends a.Component{render(){const{tunnel:e}=this.props,t=yt(e.remoteIpAddress).split(" "),n=t[0],r=t.slice(1).join(" ");return a.createElement(Li,null,a.createElement(zi,null,a.createElement(Yt.e,null,a.createElement("header",null,a.createElement("h1",null,"TLS Tunnel")),a.createElement(ln.d,null,"Details"),a.createElement(ln.b,null,a.createElement("p",null,"This TLS connection was not intercepted by HTTP Toolkit, as it matched a hostname that is configured for TLS passthrough in your settings.")),a.createElement(ln.b,null,a.createElement("p",null,"The connection was made from ",a.createElement(ln.h,null,n,":",e.remotePort)," ",r," to ",a.createElement(ln.h,null,e.upstreamHostname,":",e.upstreamPort),".")))))}}var Zl=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};const ed=Object(u.e)(e=>{var{dataChannel:t,isPaidUser:n,streamMessageEditor:r}=e,o=Zl(e,["dataChannel","isPaidUser","streamMessageEditor"]);return a.createElement(ca,Object.assign({},o,{key:t.id,streamId:t.id,streamType:"DataChannel",streamLabel:t.label,editorNode:r,isPaidUser:n,filenamePrefix:"DataChannel "+(t.label||t.channelId),messages:t.messages}))}),td=Object(u.e)(e=>a.createElement(nl,null,a.createElement(ol,null,"Part of a WebRTC Connection from ",a.createElement(ln.h,null,e.connection.clientURL)," to ",a.createElement(ln.h,null,e.connection.remoteURL)),a.createElement(il,{onClick:e.hideConnection,onKeyPress:Gt},"Hide"),a.createElement(sl,{onClick:e.jumpToConnection,onKeyPress:Gt},"Jump to connection")));var nd=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i};let rd=class extends a.Component{constructor(){super(...arguments),this.isConnectionHidden=!1,this.jumpToConnection=()=>{const{rtcConnection:e}=this.props.dataChannel;this.props.navigate("/view/"+e.id)}}hideConnection(){this.isConnectionHidden=!0}render(){const{dataChannel:e,streamMessageEditor:t,accountStore:n}=this.props;return a.createElement(Li,null,!this.isConnectionHidden&&a.createElement(td,{connection:e.rtcConnection,hideConnection:this.hideConnection,jumpToConnection:this.jumpToConnection}),a.createElement(ed,{dataChannel:e,isPaidUser:n.isPaidUser,streamMessageEditor:t,collapsed:!1,expanded:!0,onExpandToggled:this.jumpToConnection,onCollapseToggled:void 0}))}};nd([d.observable],rd.prototype,"isConnectionHidden",void 0),nd([d.action.bound],rd.prototype,"hideConnection",null),rd=nd([Object(u.d)("accountStore"),u.e],rd);var od=n(1508),sd=n(1509),id=n(1505),ad=n(1507),cd=n(1506),ld=n(1504),dd=n(1510);const ud=Object(N.f)("data"),pd=Object(N.f)("rtc-media"),hd=p.i.svg`
    background-color: ${e=>e.theme.mainLowlightBackground};
    color: ${e=>e.theme.mainColor};

    .axis-label {
        font-size: 15px;
    }

    .axis-tick text {
        font-size: 12px;
    }
`,md=({width:e,height:t,graphPaddingPx:n,data:r})=>{var o;const s=n,a=t-n,l=a-s,d=85+n,u=e-d,p=Object(sd.a)().domain([0,r.length-1]).range([0,u]),h=null!==(o=i.a.max(r.map(e=>Math.max(e.sent,e.received))))&&void 0!==o?o:0,m=Object(sd.a)().domain([0,h]).range([l/2,s]),g=Object(sd.a)().domain([0,h]).range([l/2,a]),f=r.map(e=>e.sent),b=r.map(e=>e.received);return c.a.createElement(hd,{width:e,height:t},c.a.createElement(ld.a,{left:d},c.a.createElement(gd,{label:"Received",data:b,xScale:p,yScale:g,fill:pd}),c.a.createElement(gd,{label:"Sent",data:f,xScale:p,yScale:m,fill:ud})))},gd=e=>c.a.createElement(c.a.Fragment,null,c.a.createElement(dd.a,{scale:e.yScale,label:e.label,labelOffset:55,labelClassName:"axis-label",tickFormat:e=>Object(B.a)(e.valueOf()),tickClassName:"axis-tick",numTicks:6}),c.a.createElement(id.a,{data:e.data,x:(t,n)=>e.xScale(n),y:t=>{var n;return null!==(n=e.yScale(t))&&void 0!==n?n:0},yScale:e.yScale,fill:e.fill,curve:cd.a}),c.a.createElement(ad.a,{data:e.data,x:(t,n)=>e.xScale(n),y:t=>{var n;return null!==(n=e.yScale(t))&&void 0!==n?n:0},stroke:"#222",strokeWidth:1.5,curve:cd.a}));var fd=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},bd=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};const yd=Object(u.e)(e=>{const{mediaTrack:t}=e,n=bd(e,["mediaTrack"]);return a.createElement(Yt.b,Object.assign({},n),a.createElement("header",null,a.createElement(_i.a,null,a.createElement(Vi.a,{expanded:n.expanded,onClick:n.onExpandToggled})),a.createElement(Qt.a,{color:ud},Object(B.a)(t.totalBytesSent)," sent"),a.createElement(Qt.a,{color:pd},Object(B.a)(t.totalBytesReceived)," received"),a.createElement(Yt.c,{onCollapseToggled:n.onCollapseToggled},"RTC ",t.type)),a.createElement(vd,null,a.createElement(xd,{mediaTrack:t})))}),vd=p.i.div`
    margin: 0 -20px -20px -20px;
    border-top: solid 1px ${e=>e.theme.containerBorder};
    background-color: ${e=>e.theme.highlightBackground};

    position: relative;
    flex-grow: 1;

    min-height: 400px;

    /* Fix the ParentSize measuring div to match our size exactly. */
    > div {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
`;let xd=class extends a.Component{get graphData(){const{stats:e}=this.props.mediaTrack;return s.map(e,e=>({sent:e.sentDelta,received:e.receivedDelta}))}render(){return a.createElement(od.a,null,e=>a.createElement(u.a,null,()=>a.createElement(md,{width:e.width,height:e.height,graphPaddingPx:10,data:this.graphData})))}};fd([d.computed],xd.prototype,"graphData",null),xd=fd([u.e],xd);var wd=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i};let Ed=class extends a.Component{constructor(){super(...arguments),this.isConnectionHidden=!1,this.jumpToConnection=()=>{const{rtcConnection:e}=this.props.mediaTrack;this.props.navigate("/view/"+e.id)}}hideConnection(){this.isConnectionHidden=!0}render(){const{mediaTrack:e}=this.props;return a.createElement(Li,null,!this.isConnectionHidden&&a.createElement(td,{connection:e.rtcConnection,hideConnection:this.hideConnection,jumpToConnection:this.jumpToConnection}),a.createElement(yd,{collapsed:!1,expanded:!0,onExpandToggled:this.jumpToConnection,onCollapseToggled:void 0,key:e.id,mediaTrack:e}))}};wd([d.observable],Ed.prototype,"isConnectionHidden",void 0),wd([d.action.bound],Ed.prototype,"hideConnection",null),Ed=wd([u.e],Ed);var Cd=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},Td=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};let Od=class extends a.Component{get hasData(){const{streams:e}=this.props.connection;return e.some(e=>e.isRTCDataChannel())}get hasAudio(){const{streams:e}=this.props.connection;return e.some(e=>e.isRTCMediaTrack()&&"audio"===e.type)}get hasVideo(){const{streams:e}=this.props.connection;return e.some(e=>e.isRTCMediaTrack()&&"video"===e.type)}render(){const e=this.props,{connection:t}=e,n=Td(e,["connection"]);return a.createElement(Yt.b,Object.assign({},n),a.createElement("header",null,a.createElement(Ya,{source:t.source}),this.hasData&&a.createElement(Qt.a,{color:Object(N.f)("data")},"Data"),this.hasVideo&&a.createElement(Qt.a,{color:Object(N.f)("image")},"Video"),this.hasAudio&&a.createElement(Qt.a,{color:Object(N.f)("css")},"Audio"),a.createElement(Yt.c,{onCollapseToggled:n.onCollapseToggled},"WebRTC Connection")),a.createElement(ma,null,a.createElement(ya,null,a.createElement(ln.c,null,"Connection type: "),a.createElement(ln.g,null,"host"===t.remoteCandidate.type?"Direct":"relay"===t.remoteCandidate.type?"TURN-relayed":"srflx"===t.remoteCandidate.type?"STUN-directed":"Peer-reflexive"," ",t.remoteCandidate.protocol.toUpperCase()))),a.createElement(ma,null,a.createElement(ya,null,a.createElement(ln.c,null,"From: "),a.createElement(ln.f,null,t.clientURL))),a.createElement(ma,null,a.createElement(ya,null,a.createElement(ln.c,null,"To: "),a.createElement(ln.f,null,t.remoteURL))),t.sourceURL&&a.createElement(a.Fragment,null,a.createElement(ln.d,null,"Source page: "),a.createElement(ma,{prefixTrigger:!0},a.createElement(ya,null,a.createElement(ln.f,null,t.sourceURL.toString())),a.createElement(va,null,a.createElement(uc,{url:t.sourceURL})))),t.source!==Rt.b&&a.createElement(a.Fragment,null,a.createElement(ln.d,null,"Client: "),a.createElement(ma,{prefixTrigger:!0},a.createElement(ya,null,a.createElement(ln.f,null,t.source.ua)),a.createElement(va,null,a.createElement("p",null,t.source.description)))))}};Cd([d.computed],Od.prototype,"hasData",null),Cd([d.computed],Od.prototype,"hasAudio",null),Cd([d.computed],Od.prototype,"hasVideo",null),Od=Cd([u.e],Od);var Sd=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},jd=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};let kd=class extends a.Component{render(){const e=this.props,{connection:t,type:n,sessionDescription:r,editorNode:o}=e,i=jd(e,["connection","type","sessionDescription","editorNode"]);return a.createElement(Yt.b,Object.assign({},i),a.createElement("header",null,a.createElement(Yt.c,{onCollapseToggled:i.onCollapseToggled},"local"===n?"Sent":"Received"," Session ",s.capitalize(r.type))),a.createElement(Ki.d,null,a.createElement(Ji.a,{contentId:`${t.id}:${n}:${r.type}:sdp`,editorNode:this.props.editorNode,contentType:"text",expanded:!1,cache:t.cache},r.sdp)))}};kd=Sd([u.e],kd);var Pd=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i};let Rd=class extends a.Component{constructor(){super(...arguments),this.dataChannelEditors=this.dataChannels.map(()=>$o.c()),this.streamCardState={}}get mediaTracks(){const{streams:e}=this.props.connection;return e.filter(e=>e.isRTCMediaTrack())}get dataChannels(){const{streams:e}=this.props.connection;return e.filter(e=>e.isRTCDataChannel())}toggleCollapse(e){var t,n;this.streamCardState[e]={collapsed:null===(n=!(null===(t=this.streamCardState[e])||void 0===t?void 0:t.collapsed))||void 0===n||n}}expandStream(e){this.props.navigate("/view/"+e)}render(){const{connection:e,uiStore:t,offerEditor:n,answerEditor:r,accountStore:o}=this.props,{localSessionDescription:s,remoteSessionDescription:i}=e,c="offer"===s.type,l=c?s:i,d=c?i:s,u=Object.assign(Object.assign({},t.viewCardProps.rtcSessionOffer),{direction:c?"right":"left"}),p=Object.assign(Object.assign({},t.viewCardProps.rtcSessionAnswer),{direction:c?"left":"right"});return a.createElement(Li,null,a.createElement(zi,null,a.createElement(Od,Object.assign({},t.viewCardProps.rtcConnection,{connection:e})),a.createElement(kd,Object.assign({},u,{connection:e,type:c?"local":"remote",sessionDescription:l,editorNode:n})),a.createElement(kd,Object.assign({},p,{connection:e,type:c?"remote":"local",sessionDescription:d,editorNode:r})),this.mediaTracks.map(e=>{var t;return a.createElement(yd,{key:e.id,mediaTrack:e,expanded:!1,collapsed:!!(null===(t=this.streamCardState[e.id])||void 0===t?void 0:t.collapsed),onCollapseToggled:this.toggleCollapse.bind(this,e.id),onExpandToggled:this.expandStream.bind(this,e.id)})}),this.dataChannels.map((e,t)=>{var n;return a.createElement(ed,{key:e.id,dataChannel:e,isPaidUser:o.isPaidUser,streamMessageEditor:this.dataChannelEditors[t],expanded:!1,collapsed:!!(null===(n=this.streamCardState[e.id])||void 0===n?void 0:n.collapsed),onCollapseToggled:this.toggleCollapse.bind(this,e.id),onExpandToggled:this.expandStream.bind(this,e.id)})}),this.dataChannelEditors.map((e,t)=>a.createElement($o.a,{key:t,node:e},a.createElement(Xo,{contentId:null})))))}};Pd([d.computed.struct],Rd.prototype,"mediaTracks",null),Pd([d.computed.struct],Rd.prototype,"dataChannels",null),Pd([d.observable],Rd.prototype,"streamCardState",void 0),Pd([d.action.bound],Rd.prototype,"toggleCollapse",null),Rd=Pd([Object(u.d)("uiStore"),Object(u.d)("accountStore"),u.e],Rd);var Hd=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i};const qd=e=>(Object(_t.h)("j",t=>{Object(_t.d)(t.target)||e.moveSelection(1)},[e.moveSelection]),Object(_t.h)("k",t=>{Object(_t.d)(t.target)||e.moveSelection(-1)},[e.moveSelection]),Object(_t.h)("Ctrl+p, Cmd+p",t=>{var n;(null===(n=e.selectedEvent)||void 0===n?void 0:n.isHttp())&&(e.onPin(e.selectedEvent),t.preventDefault())},[e.selectedEvent,e.onPin]),Object(_t.h)("Ctrl+Delete, Cmd+Delete",t=>{Object(_t.d)(t.target)||e.selectedEvent&&e.onDelete(e.selectedEvent)},[e.selectedEvent,e.onDelete]),Object(_t.h)("Ctrl+Shift+Delete, Cmd+Shift+Delete",t=>{e.onClear(),t.preventDefault()},[e.onClear]),Object(_t.h)("Ctrl+f, Cmd+f",t=>{e.onStartSearch(),t.preventDefault()},[e.onStartSearch]),null),Ad=["request","response","streamMessage"];let Id=class extends a.Component{constructor(){super(...arguments),this.editors=Ad.reduce((e,t)=>Object.assign(Object.assign({},e),{[t]:$o.c()}),{}),this.searchInputRef=a.createRef(),this.listRef=a.createRef(),this.contextMenuBuilder=new Bi(this.props.accountStore,this.props.uiStore,this.onPin,this.onDelete,this.onBuildRuleFromExchange)}get splitDirection(){return _t.j.width>=p.b?"vertical":"horizontal"}get confirmedSearchFilters(){return this.props.uiStore.activeFilterSet}get currentSearchFilters(){var e;return null!==(e=this.searchFiltersUnderConsideration)&&void 0!==e?e:this.confirmedSearchFilters}get filteredEventState(){const{events:e}=this.props.eventsStore,t=0===this.currentSearchFilters.length?e:e.filter(e=>this.currentSearchFilters.every(t=>t.matches(e)));return{filteredEvents:t,filteredEventCount:[t.length,e.length]}}get selectedEvent(){return s.find(this.props.eventsStore.events,{id:this.props.eventId})}componentDidMount(){Object(u.c)(this,Object(d.observe)(this,"selectedEvent",({oldValue:e,newValue:t})=>{"horizontal"===this.splitDirection&&!e&&t&&setTimeout(()=>{var e;this.selectedEvent&&(null===(e=this.listRef.current)||void 0===e||e.scrollToEvent(this.selectedEvent))},50)})),Object(u.c)(this,Object(d.autorun)(()=>{if(!this.props.eventId)return;const e=this.selectedEvent;if(!e)return void this.onSelected(void 0);const{expandedViewCard:t}=this.props.uiStore;t&&(e.isHttp()&&("requestBody"!==t||e.hasRequestBody()||e.requestBreakpoint)&&("responseBody"!==t||e.hasResponseBody()||e.responseBreakpoint)&&("webSocketMessages"!==t||e.isWebSocket())||Object(d.runInAction)(()=>{this.props.uiStore.expandedViewCard=void 0}))})),Object(u.c)(this,Object(d.observe)(this,"filteredEventState",({newValue:e,oldValue:t})=>{const n=e.filteredEvents,r=null==t?void 0:t.filteredEvents;r&&r!==n&&r!==this.props.eventsStore.events&&(r.length=0)}))}render(){const{isPaused:e,events:t}=this.props.eventsStore,{certPath:n}=this.props.proxyStore,{filteredEvents:r,filteredEventCount:o}=this.filteredEventState;let s;if(this.selectedEvent)if(this.selectedEvent.isHttp())s=a.createElement(Kl,{exchange:this.selectedEvent,requestEditor:this.editors.request,responseEditor:this.editors.response,streamMessageEditor:this.editors.streamMessage,navigate:this.props.navigate,onDelete:this.onDelete,onScrollToEvent:this.onScrollToCenterEvent,onBuildRuleFromExchange:this.onBuildRuleFromExchange});else if(this.selectedEvent.isTlsFailure())s=a.createElement(Ql,{failure:this.selectedEvent,certPath:n});else if(this.selectedEvent.isTlsTunnel())s=a.createElement(Xl,{tunnel:this.selectedEvent});else if(this.selectedEvent.isRTCDataChannel())s=a.createElement(rd,{dataChannel:this.selectedEvent,streamMessageEditor:this.editors.streamMessage,navigate:this.props.navigate});else if(this.selectedEvent.isRTCMediaTrack())s=a.createElement(Ed,{mediaTrack:this.selectedEvent,navigate:this.props.navigate});else{if(!this.selectedEvent.isRTCConnection())throw new D.a(this.selectedEvent);s=a.createElement(Rd,{connection:this.selectedEvent,offerEditor:this.editors.request,answerEditor:this.editors.response,navigate:this.props.navigate})}else s="vertical"===this.splitDirection?a.createElement(No,{key:"details",icon:["fas","arrow-left"]},"Select an exchange to see the full details."):null;const i="vertical"===this.splitDirection?300:200;return a.createElement("div",{className:this.props.className},a.createElement(qd,{selectedEvent:this.selectedEvent,moveSelection:this.moveSelection,onPin:this.onPin,onDelete:this.onDelete,onClear:this.onForceClear,onStartSearch:this.onStartSearch}),a.createElement(Bo,{split:this.splitDirection,primary:"second",defaultSize:"50%",minSize:i,maxSize:-i,hiddenPane:null===s?"2":void 0},a.createElement(Dd,null,a.createElement(Zs,{searchInputRef:this.searchInputRef,allEvents:t,filteredEvents:r,filteredCount:o,onFiltersConsidered:this.onSearchFiltersConsidered,onClear:this.onClear,onScrollToEnd:this.onScrollToEnd}),a.createElement(ki,{events:t,filteredEvents:r,selectedEvent:this.selectedEvent,isPaused:e,moveSelection:this.moveSelection,onSelected:this.onSelected,contextMenuBuilder:this.contextMenuBuilder,ref:this.listRef})),null!=s?s:a.createElement("div",null)),Object.values(this.editors).map((e,t)=>a.createElement($o.a,{key:t,node:e},a.createElement(Xo,{contentId:null}))))}onSearchFiltersConsidered(e){this.searchFiltersUnderConsideration=e}onSelected(e){this.props.navigate(e?"/view/"+e.id:"/view")}moveSelection(e){const{filteredEvents:t}=this.filteredEventState;if(0===t.length)return;const n=this.selectedEvent?s.findIndex(t,{id:this.selectedEvent.id}):-1,r=t[-1===n?e>=0?0:t.length-1:s.clamp(n+e,0,t.length-1)];this.onSelected(r),this.onScrollToEvent(r)}onPin(e){e.pinned=!e.pinned}onBuildRuleFromExchange(e){const{rulesStore:t,navigate:n}=this.props,r=Object(Mo.e)(e);t.draftRules.items.unshift(r),n("/mock/"+r.id)}onDelete(e){const{filteredEvents:t}=this.filteredEventState;if(e.pinned&&!confirm("Delete this pinned exchange?"))return;const n=t.indexOf(e),r=e===this.selectedEvent;if(-1!==n&&r&&t.length>0){const r=t[Math.min(n+1,t.length-1)];this.onSelected(r),Object(d.when)(()=>this.selectedEvent===r,()=>{this.props.eventsStore.deleteEvent(e)})}else this.props.eventsStore.deleteEvent(e)}onForceClear(){this.onClear(!1)}onClear(e=!0){const{events:t}=this.props.eventsStore,n=s.some(t,{pinned:!0}),r=t.length>0&&s.every(t,{pinned:!0});if(r){if(!confirm("Delete pinned traffic?"))return}else if(e&&t.length>0){if(!confirm(n?"Delete all non-pinned traffic?":"Delete all collected traffic?"))return}this.props.eventsStore.clearInterceptedData(r)}onStartSearch(){var e;null===(e=this.searchInputRef.current)||void 0===e||e.focus()}onScrollToEvent(e){var t;null===(t=this.listRef.current)||void 0===t||t.scrollToEvent(e)}onScrollToCenterEvent(e){var t;null===(t=this.listRef.current)||void 0===t||t.scrollToCenterEvent(e)}onScrollToEnd(){var e;null===(e=this.listRef.current)||void 0===e||e.scrollToEnd()}};Hd([d.computed],Id.prototype,"splitDirection",null),Hd([d.observable],Id.prototype,"searchFiltersUnderConsideration",void 0),Hd([Object(A.a)(250,{equals:d.comparer.structural})],Id.prototype,"currentSearchFilters",null),Hd([Object(A.a)(10)],Id.prototype,"filteredEventState",null),Hd([d.computed],Id.prototype,"selectedEvent",null),Hd([d.action.bound],Id.prototype,"onSearchFiltersConsidered",null),Hd([d.action.bound],Id.prototype,"onSelected",null),Hd([d.action.bound],Id.prototype,"moveSelection",null),Hd([d.action.bound],Id.prototype,"onPin",null),Hd([d.action.bound],Id.prototype,"onBuildRuleFromExchange",null),Hd([d.action.bound],Id.prototype,"onDelete",null),Hd([d.action.bound],Id.prototype,"onForceClear",null),Hd([d.action.bound],Id.prototype,"onClear",null),Hd([d.action.bound],Id.prototype,"onStartSearch",null),Hd([d.action.bound],Id.prototype,"onScrollToEvent",null),Hd([d.action.bound],Id.prototype,"onScrollToCenterEvent",null),Hd([d.action.bound],Id.prototype,"onScrollToEnd",null),Id=Hd([Object(u.d)("eventsStore"),Object(u.d)("proxyStore"),Object(u.d)("uiStore"),Object(u.d)("accountStore"),Object(u.d)("rulesStore"),u.e],Id);const Dd=p.i.div`
    position: relative;

    height: 100%;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
`,$d=Object(p.i)(Id)`
    height: 100vh;
    position: relative;
`;var Md=n(129),Fd=n(128),Bd=n(348);const Nd=p.i.div`
    position: absolute;
    left: -31px;
    top: calc(50% - 1px);
    transform: translateY(-50%);

    cursor: row-resize;

    opacity: 0;

    :focus, :active {
        outline: none;
        opacity: 0.5;
        color: ${e=>e.theme.popColor};
    }

    && svg {
        margin: 0;
    }
`,Ld=Object(p.i)(e=>a.createElement(Nd,Object.assign({},e),a.createElement(zt.b,{icon:["fas","grip-vertical"]})))``,Ud=p.i.div`
    position: absolute;
    top: ${e=>e.topOffset}px;
    right: 10px;

    display: none; /* Made flex by container, on hover/expand */
    flex-direction: row-reverse;
    align-items: center;
`,Wd=Object(p.i)(a.memo(e=>a.createElement(fn.a,{className:e.className,icon:e.icon,title:e.title,disabled:e.disabled,onClick:e.onClick})))`
    padding: 5px;
    margin: 0 5px;

    z-index: 10;

    font-size: 1.2em;

    > svg {
        display: block;
    }

    :disabled {
        opacity: 1;
        color: ${e=>e.theme.containerWatermark};
    }

    :not(:disabled) {
        cursor: pointer;
        color: ${e=>e.theme.primaryInputBackground};

        &:hover, &:focus {
            outline: none;
            color: ${e=>e.theme.popColor};
        }
    }
`,zd=p.i.div`
    position: absolute;
    top: calc(50% - ${e=>3*e.index}px);
    transform: translateY(-50%);
    height: 150%;

    left: calc(-5px + ${e=>10*e.index}px);
    right: ${e=>10*e.index}px;

    background-color: ${e=>e.theme.mainBackground};
    border-radius: 4px;
    box-shadow: 0 2px 10px 0 rgba(0,0,0,0.2);

    opacity: ${e=>(e.activated?1:.6)-.2*e.index};
    z-index: ${e=>9-e.index};

    border-left: 5px solid ${e=>e.borderColor};
`,_d=p.i.div`
    display: none; /* Made flex by container, on hover/expand */
    flex-direction: row;
    align-items: center;
    margin-left: 5px;
`,Vd=Object(p.i)(Wd)`
    font-size: 1em;
    padding: 0;
`,Gd=e=>a.createElement(Ud,{topOffset:-2},a.createElement(Wd,{title:"Delete these rules",icon:["far","trash-alt"],onClick:e.onDelete}),a.createElement(Wd,{title:"Clone this rule",icon:["far","clone"],onClick:e.onClone}),a.createElement(Wd,{title:e.toggleState?"Deactivate these rules":"Activate these rules",icon:["fas",e.toggleState?"toggle-on":"toggle-off"],onClick:e.onToggleActivation})),Jd=p.i.header`
    ${e=>e.collapsed?"\n            margin-top: 22px;\n            margin-bottom: 17px;\n        ":"\n            margin-top: 10px;\n        "}

    width: calc(100% - 5px - ${e=>40*e.depth}px);
    margin-left: calc(5px + ${e=>40*e.depth}px);

    transition: padding 0.1s ease-out;
    padding: ${e=>e.collapsed?"5px 20px 5px 15px":"5px 20px 5px 0px"};
    box-sizing: border-box;

    display: flex;
    align-items: center;

    position: relative;

    cursor: pointer;
    &:focus {
        outline: none;
        > h2 > svg {
            color: ${e=>e.theme.popColor};
        }
    }
    &:hover {
        ${Ld} {
            opacity: 0.5;
        }

        ${_d}, ${Ud} {
            display: flex;
        }

        ${e=>e.collapsed?p.e`
                > ${zd} {
                    box-shadow: 0 2px 20px 0 rgba(0,0,0,0.3);
                }
            `:"text-shadow: 0 0 5px rgba(0,0,0,0.2);"}
    }

    ${e=>e.editingTitle&&p.e`
        ${_d} {
            display: flex;
        }
    `}

    font-size: ${e=>e.theme.headingSize};

    > h2 {
        user-select: none;
        z-index: 10;

        > svg {
            margin-right: 10px;
        }
    }

    input[type=text] {
        margin: -7px 0;
        position: relative;
        top: -3px;
    }
`,Kd=(e,t)=>{const n={};return e&&e.transition&&(n.transition=e.transition.replace(/transform [\d.]+s/,"transform 100ms")),t.combineWith&&t.combineWith.endsWith("-tail")&&(n.opacity="1"),Object.assign(Object.assign({},e),n)},Yd=e=>Object(Ct.h)(e).every(e=>e.activated),Qd=Object(Bd.b)(e=>{const[t,n]=a.useState(!1),[r,o]=a.useState(e.group.title),s=Object(d.action)(()=>{e.group.collapsed=!e.group.collapsed}),i=()=>{n(!0),o(e.group.title)},c=e=>{o(e.target.value)},l=()=>{n(!1)},u=()=>{n(!1),e.updateGroupTitle(e.group.id,r)},p=Yd(e.group),h=Jt(Object(d.action)(()=>{Object(Ct.m)(e.group,e=>{e.activated=!p})})),m=Jt(()=>e.deleteGroup(e.path)),g=Jt(()=>e.cloneGroup(e.path));return a.createElement(Fd.b,{draggableId:e.group.id,index:e.index},(n,o)=>a.createElement(Bd.a,null,()=>a.createElement(Jd,Object.assign({depth:e.path.length-1,collapsed:e.collapsed,editingTitle:t},n.draggableProps,{style:Kd(n.draggableProps.style,o),ref:n.innerRef,onClick:s,onKeyPress:Gt,tabIndex:0}),a.createElement(Ld,Object.assign({},n.dragHandleProps)),a.createElement("h2",null,a.createElement(zt.b,{icon:["fas",e.group.collapsed?"chevron-down":"chevron-up"]}),t?a.createElement(jn.e,{autoFocus:!0,value:r,onChange:c,onClick:e=>e.stopPropagation(),onKeyPress:e=>{"Enter"===e.key&&u()}}):e.group.title),a.createElement(_d,null,t?a.createElement(a.Fragment,null,a.createElement(Vd,{title:"Save group name",icon:["fas","save"],onClick:Jt(u)}),a.createElement(Vd,{title:"Reset group name",icon:["fas","undo"],onClick:Jt(l)})):a.createElement(Vd,{title:"Edit group name",icon:["fas","edit"],onClick:Jt(i)})),a.createElement(Gd,{toggleState:p,onToggleActivation:h,onClone:g,onDelete:m}),e.collapsed&&e.group.items.slice(0,5).map((e,t)=>{const n=Object(Ct.k)(e)?void 0:e.matchers[0],r=void 0===n?void 0:n instanceof ut.matchers.MethodMatcher?ut.Method[n.method]:"unknown",o=void 0===r?"transparent":Object(N.d)(r),s=Object(Ct.k)(e)?Yd(e):e.activated;return a.createElement(zd,{key:t,index:t,borderColor:o,activated:s})}))))}),Xd=p.i.div`
    width: 100%;
    height: 30px;
    margin-bottom: -20px;
`,Zd=e=>a.createElement(Fd.b,{draggableId:e.group.id+"-tail",index:e.index,isDragDisabled:!0},e=>a.createElement(Xd,Object.assign({},e.draggableProps,{ref:e.innerRef})));var eu=n(668),tu=n(57),nu=n(46),ru=n(38),ou=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i};class su extends a.Component{}function iu(e){const{matcher:t}=e;if(!t)return null;const n=Object(Ni.h)(t),r={matcher:t,matcherIndex:0,onChange:e.onChange,onInvalidState:s.noop};switch(n){case"eth-method":return a.createElement(uu,Object.assign({},r));case"ipfs-interaction":return a.createElement(pu,Object.assign({},r));case"wildcard":case"ws-wildcard":case"default-wildcard":case"default-ws-wildcard":case"rtc-wildcard":case"GET":case"POST":case"PUT":case"PATCH":case"DELETE":case"HEAD":case"OPTIONS":return null;default:throw new D.a(n)}}function au(e){const{matcher:t}=e,{matcherClass:n}=e;let r="matcher"in e?Object(Ni.h)(e.matcher):Ni.c.get(e.matcherClass);if(!r)return null;if(Object(Ni.m)(r)){if(!t||Object(Ni.m)(t.type))throw new Error("Cannot configure hidden matcher type "+r);r=t.type}const o={matcher:t,matcherIndex:e.matcherIndex,onChange:e.onChange,onInvalidState:e.onInvalidState||s.noop};switch(r){case"method":return a.createElement(du,Object.assign({},o));case"host":return a.createElement(hu,Object.assign({},o));case"simple-path":return a.createElement(mu,Object.assign({},o));case"regex-path":return a.createElement(bu,Object.assign({},o));case"query":return a.createElement(vu,Object.assign({},o));case"exact-query-string":return a.createElement(xu,Object.assign({},o));case"header":return a.createElement(wu,Object.assign({},o));case"raw-body":return a.createElement(Cu,Object.assign({},o));case"raw-body-includes":return a.createElement(Tu,Object.assign({},o));case"json-body":return a.createElement(Su,Object.assign({},o));case"json-body-matching":return a.createElement(ju,Object.assign({},o));case"eth-params":return a.createElement(Ru,Object.assign({},o));case"ipfs-arg":return a.createElement(Pu,Object.assign({},o));case"has-rtc-data-channel":case"has-rtc-video-track":case"has-rtc-audio-track":case"has-rtc-media-track":return a.createElement(Hu,Object.assign({matcherKey:r,matcherClass:n},o));default:throw new D.a(r)}}const cu=p.i.label`
    margin: 5px 0;

    text-transform: uppercase;
    font-size: ${e=>e.theme.textSize};
    opacity: ${e=>e.theme.lowlightTextOpacity};
`,lu=p.i.div`
    display: flex;
    flex-direction: column;
`;let du=class extends su{constructor(){super(...arguments),this.fieldId=s.uniqueId(),this.method=ut.Method.GET}componentDidMount(){Object(u.c)(this,Object(d.autorun)(()=>{var e,t;const n=null!==(t=null===(e=this.props.matcher)||void 0===e?void 0:e.method)&&void 0!==t?t:ut.Method.GET;Object(d.runInAction)(()=>{this.method=n})})),this.props.matcher||this.props.onChange(new tu.i(this.method))}render(){const{method:e}=this,{matcherIndex:t}=this.props,n=ut.Method[e],r=Object.values(ut.Method).filter(e=>!isNaN(Number(e)));return a.createElement(lu,{title:n?`Matches all ${n} requests`:void 0},void 0!==t&&a.createElement(cu,{htmlFor:this.fieldId},0!==t&&"and "," with method"),a.createElement(jn.d,{id:this.fieldId,value:e,onChange:this.onChange},r.map(e=>a.createElement("option",{value:e,key:e},ut.Method[e]))))}onChange(e){this.method=parseInt(e.currentTarget.value,10),this.props.onChange(new tu.i(this.method))}};ou([d.observable],du.prototype,"method",void 0),ou([d.action.bound],du.prototype,"onChange",null),du=ou([u.e],du);let uu=class extends a.Component{constructor(){super(...arguments),this.fieldId=s.uniqueId(),this.method="eth_call"}componentDidMount(){Object(u.c)(this,Object(d.autorun)(()=>{var e,t;const n=null!==(t=null===(e=this.props.matcher)||void 0===e?void 0:e.methodName)&&void 0!==t?t:"eth_call";Object(d.runInAction)(()=>{this.method=n})})),this.props.matcher||this.props.onChange(new nu.h(this.method))}render(){const{method:e}=this;return a.createElement(lu,{title:`Match ${e} requests to Ethereum nodes`},a.createElement(cu,{htmlFor:this.fieldId},"Requesting a node to"),a.createElement(jn.d,{id:this.fieldId,value:e,onChange:this.onChange},Object.keys(nu.i).map(e=>a.createElement("option",{value:e,key:e},nu.i[e]))))}onChange(e){this.method=e.currentTarget.value,this.props.onChange(new nu.h(this.method))}};ou([d.observable],uu.prototype,"method",void 0),ou([d.action.bound],uu.prototype,"onChange",null),uu=ou([u.e],uu);let pu=class extends a.Component{constructor(){super(...arguments),this.fieldId=s.uniqueId(),this.interaction="cat"}componentDidMount(){Object(u.c)(this,Object(d.autorun)(()=>{var e,t;const n=null!==(t=null===(e=this.props.matcher)||void 0===e?void 0:e.interactionName)&&void 0!==t?t:"cat";Object(d.runInAction)(()=>{this.interaction=n})})),this.props.matcher||this.props.onChange(new ru.h(this.interaction))}render(){const{interaction:e}=this;return a.createElement(lu,{title:`Match ${e} IPFS interactions`},a.createElement(cu,{htmlFor:this.fieldId},"Requesting an IPFS node to"),a.createElement(jn.d,{id:this.fieldId,value:e,onChange:this.onChange},Object.keys(ru.i).map(e=>a.createElement("option",{value:e,key:e},ru.i[e]))))}onChange(e){this.interaction=e.currentTarget.value,this.props.onChange(new ru.h(this.interaction))}};ou([d.observable],pu.prototype,"interaction",void 0),ou([d.action.bound],pu.prototype,"onChange",null),pu=ou([u.e],pu);let hu=class extends su{constructor(){super(...arguments),this.fieldId=s.uniqueId(),this.host=""}componentDidMount(){Object(u.c)(this,Object(d.autorun)(()=>{const e=this.props.matcher?this.props.matcher.host:"";Object(d.runInAction)(()=>{this.host=e})}))}render(){const{host:e}=this,{matcherIndex:t}=this.props;return a.createElement(lu,{title:e?`Matches all requests to ${e}, regardless of their path or protocol`:void 0},void 0!==t&&a.createElement(cu,{htmlFor:this.fieldId},0!==t&&"and "," for host"),a.createElement(jn.e,{id:this.fieldId,invalid:!!this.error,spellCheck:!1,value:e,onChange:this.onChange,placeholder:"A specific host to match: example.com"}))}onChange(e){this.host=e.target.value;try{this.props.onChange(new ut.matchers.HostMatcher(this.host)),this.error=void 0,e.target.setCustomValidity("")}catch(t){console.log(t),this.error=Object(D.b)(t),this.props.onInvalidState(),e.target.setCustomValidity(this.error.message)}e.target.reportValidity()}};ou([d.observable],hu.prototype,"error",void 0),ou([d.observable],hu.prototype,"host",void 0),ou([d.action.bound],hu.prototype,"onChange",null),hu=ou([u.e],hu);let mu=class extends su{constructor(){super(...arguments),this.fieldId=s.uniqueId(),this.url=""}componentDidMount(){void 0!==this.props.matcherIndex&&Object(u.c)(this,Object(d.autorun)(()=>{const e=this.props.matcher?this.props.matcher.path:"";Object(d.runInAction)(()=>{this.url=e})}))}render(){const{url:e}=this,{matcherIndex:t}=this.props,n=/(\w+:\/\/)?([^/?#]+)?(\/[^?#]*)?/.exec(e)||[],[r,o,s,i]=n;return a.createElement(lu,{title:s||i?`Matches ${o?o.slice(0,-3):"any"} requests to ${s?"host "+s:"any host"} at ${i?"path "+i:"path /"}`:void 0},void 0!==t&&a.createElement(cu,{htmlFor:this.fieldId},0!==t&&"and "," for URL"),a.createElement(jn.e,{id:this.fieldId,invalid:!!this.error,spellCheck:!1,value:e,onChange:this.onChange,placeholder:"A specific URL to match: http://example.com/abc"}))}ensurePathIsValid(){if(!this.url)throw new Error("The URL must not be empty");this.url.match(/\w+:\//)&&new URL(this.url)}onChange(e){this.url=e.target.value.split("#")[0];try{this.ensurePathIsValid();const[t,n]=this.url.split("?");void 0===n?this.props.onChange(new ut.matchers.SimplePathMatcher(t)):(void 0!==this.props.matcherIndex&&(this.url=t),this.props.onChange(new ut.matchers.SimplePathMatcher(t),new ut.matchers.ExactQueryMatcher("?"+n))),this.error=void 0,e.target.setCustomValidity("")}catch(t){console.log(t),this.error=Object(D.b)(t),this.props.onInvalidState(),e.target.setCustomValidity(this.error.message)}e.target.reportValidity()}};ou([d.observable],mu.prototype,"error",void 0),ou([d.observable],mu.prototype,"url",void 0),ou([d.action.bound],mu.prototype,"onChange",null),mu=ou([u.e],mu);const gu=Object(p.i)(jn.e)`
    font-family: ${e=>e.theme.monoFontFamily};
`,fu=/([^\\]|^)\\(\?|u003F|x3F)|([^\\]|^)\[[^\]]*(\?|u003F|x3F)/;let bu=class extends su{constructor(){super(...arguments),this.fieldId=s.uniqueId(),this.pattern=""}componentDidMount(){Object(u.c)(this,Object(d.autorun)(()=>{const e=this.props.matcher?this.props.matcher.regexSource.replace(/\\\//g,"/"):"";Object(d.runInAction)(()=>{this.pattern=e})}))}render(){const{matcherIndex:e}=this.props;let t=[],n="like";if(!this.error&&this.props.matcher){const{regexSource:e}=this.props.matcher,r=new RegExp(e),o=new eu(r);o.defaultRange.subtract(32,47),o.defaultRange.subtract(58,64),o.defaultRange.subtract(123,126),o.max=10,t=s.uniq([o.gen(),o.gen(),o.gen()]).filter(e=>e.length&&e.match(r)).sort(),n=e.startsWith("^")&&e.endsWith("$")?"like":e.startsWith("^")?"that start with":e.endsWith("$")?"that end with":"including"}return a.createElement(lu,{title:0===t.length?void 0:1===t.length?`Would match absolute URLs ${n} ${t[0]}`:`Would match absolute URLs ${n}:\n\n${t.join("\n")}`},void 0!==e&&a.createElement(cu,{htmlFor:this.fieldId},0!==e&&"and "," for URLs matching"),a.createElement(gu,{id:this.fieldId,invalid:!!this.error,spellCheck:!1,value:this.pattern,onChange:this.onChange,placeholder:"Any regular expression: https?://abc.com/.*"}))}onChange(e){this.pattern=e.target.value;try{if(!this.pattern)throw new Error("A pattern to match is required");if(this.pattern.match(fu))throw new Error("Query strings are matched separately, so a literal ? character will never match");this.props.onChange(new ut.matchers.RegexPathMatcher(new RegExp(this.pattern))),this.error=void 0,e.target.setCustomValidity("")}catch(t){console.log(t),this.error=Object(D.b)(t),this.props.onInvalidState(),e.target.setCustomValidity(this.error.message)}e.target.reportValidity()}};ou([d.observable],bu.prototype,"error",void 0),ou([d.observable],bu.prototype,"pattern",void 0),ou([d.action.bound],bu.prototype,"onChange",null),bu=ou([u.e],bu);const yu=e=>s.mapValues(s.groupBy(e,({key:e})=>e),e=>1===e.length?e[0].value:e.map(e=>e.value));let vu=class extends su{render(){const{matcherIndex:e,matcher:t}=this.props,n=(r=(null==t?void 0:t.queryObject)||{},s.flatMap(Object.entries(r),([e,t])=>s.isArray(t)?t.map(t=>({key:e,value:t})):{key:e,value:t}));var r;return a.createElement(lu,null,void 0!==e&&a.createElement(cu,null,0!==e&&"and "," with query parameters including"),a.createElement(Tl.a,{pairs:n,convertResult:yu,onChange:this.onChange,keyPlaceholder:"Query parameter name",valuePlaceholder:"Query parameter value",allowEmptyValues:!0}))}onChange(e){try{if(Object.keys(e).some(e=>!e))throw new Error("Invalid query parameter; query parameter names can't be empty");0===Object.keys(e).length?this.props.onChange():this.props.onChange(new ut.matchers.QueryMatcher(e))}catch(e){console.log(e),this.props.onInvalidState()}}};ou([d.action.bound],vu.prototype,"onChange",null),vu=ou([u.e],vu);let xu=class extends su{constructor(){super(...arguments),this.fieldId=s.uniqueId(),this.query=""}componentDidMount(){Object(u.c)(this,Object(d.autorun)(()=>{const e=this.props.matcher?this.props.matcher.query:"";Object(d.runInAction)(()=>{this.query=e})}))}render(){const{matcherIndex:e}=this.props;return a.createElement(lu,null,void 0!==e&&a.createElement(cu,{htmlFor:this.fieldId},0!==e&&"and "," with query"),a.createElement(jn.e,{id:this.fieldId,invalid:!!this.error,spellCheck:!1,value:this.query,onChange:this.onChange,placeholder:"An exact query string to match, e.g. ?a=b"}))}onChange(e){this.query=e.target.value;try{this.props.onChange(new ut.matchers.ExactQueryMatcher(this.query)),this.error=void 0,e.target.setCustomValidity("")}catch(t){console.log(t),this.error=Object(D.b)(t),this.props.onInvalidState(),e.target.setCustomValidity(this.error.message)}e.target.reportValidity()}};ou([d.observable],xu.prototype,"error",void 0),ou([d.observable],xu.prototype,"query",void 0),ou([d.action.bound],xu.prototype,"onChange",null),xu=ou([u.e],xu);let wu=class extends su{render(){var e;const{matcherIndex:t}=this.props,n=(null===(e=this.props.matcher)||void 0===e?void 0:e.headers)||{};return a.createElement(lu,null,void 0!==t&&a.createElement(cu,null,0!==t&&"and "," with headers including"),a.createElement(Rl,{headers:n,convertToRawHeaders:this.convertInput,convertFromRawHeaders:this.convertResult,onChange:this.onChange,onInvalidState:this.props.onInvalidState}))}convertInput(e){return Object(vc.f)(e)}convertResult(e){return Object(vc.e)(Object(vc.h)(e))}onChange(e){0===Object.keys(e).length?this.props.onChange():this.props.onChange(new ut.matchers.HeaderMatcher(e))}};ou([d.action.bound],wu.prototype,"onChange",null),wu=ou([u.e],wu);const Eu=p.i.div`
    > div {
        border-radius: 4px;
        border: solid 1px ${e=>e.theme.containerBorder};
        padding: 1px;

        ${e=>e.error&&p.e`
            border-color: ${e=>e.theme.warningColor};
        `}
    }
`;class Cu extends su{render(){return a.createElement(Ou,Object.assign({},this.props,{matcherClass:ut.matchers.RawBodyMatcher,description:"with a decoded body exactly matching"}))}}class Tu extends su{render(){return a.createElement(Ou,Object.assign({},this.props,{matcherClass:ut.matchers.RawBodyIncludesMatcher,description:"with a decoded body including"}))}}let Ou=class extends su{constructor(){super(...arguments),this.content=""}componentDidMount(){Object(u.c)(this,Object(d.autorun)(()=>{const e=this.props.matcher?this.props.matcher.content:"";Object(d.runInAction)(()=>{this.content=e})})),this.onBodyChange(this.content)}render(){const{content:e}=this,{matcherIndex:t}=this.props;return a.createElement(lu,null,void 0!==t&&a.createElement(cu,null,0!==t&&"and "," ",this.props.description),a.createElement(Eu,null,a.createElement(Xo,{contentId:null,value:e,onChange:this.onBodyChange,language:"text"})))}onBodyChange(e){this.content=e,this.props.onChange(new this.props.matcherClass(e))}};ou([d.observable],Ou.prototype,"content",void 0),ou([d.action.bound],Ou.prototype,"onBodyChange",null),Ou=ou([u.e],Ou);class Su extends su{render(){return a.createElement(ku,Object.assign({},this.props,{matcherClass:ut.matchers.JsonBodyMatcher,description:"with a JSON body equivalent to"}))}}class ju extends su{render(){return a.createElement(ku,Object.assign({},this.props,{matcherClass:ut.matchers.JsonBodyFlexibleMatcher,description:"with a JSON body including"}))}}let ku=class extends su{constructor(){var e,t;super(...arguments),this.content=(null===(e=this.props.matcher)||void 0===e?void 0:e.body)?JSON.stringify(null===(t=this.props.matcher)||void 0===t?void 0:t.body,null,2):"{\n    \n}"}componentDidMount(){Object(u.c)(this,Object(d.reaction)(()=>{var e,t;return null!==(t=null===(e=this.props.matcher)||void 0===e?void 0:e.body)&&void 0!==t?t:{}},e=>{const t=Object(M.m)(this.content);void 0!==t&&s.isEqual(t,e)||Object(d.runInAction)(()=>{this.content=JSON.stringify(e,null,2)})})),this.onBodyChange(this.content)}render(){const{content:e,error:t}=this,{matcherIndex:n}=this.props;return a.createElement(lu,null,void 0!==n&&a.createElement(cu,null,0!==n&&"and "," ",this.props.description),a.createElement(Eu,{error:!!t},a.createElement(Xo,{contentId:null,value:e,onChange:this.onBodyChange,language:"json"})))}onBodyChange(e){this.content=e;try{const t=JSON.parse(e);this.props.onChange(new this.props.matcherClass(t)),this.error=void 0}catch(e){console.log(e),this.error=Object(D.b)(e),this.props.onInvalidState()}}};ou([d.observable],ku.prototype,"content",void 0),ou([d.observable],ku.prototype,"error",void 0),ou([d.action.bound],ku.prototype,"onBodyChange",null),ku=ou([u.e],ku);let Pu=class extends su{constructor(){super(...arguments),this.fieldId=s.uniqueId()}get interaction(){var e;return(null===(e=this.props.matcher)||void 0===e?void 0:e.interaction)||"cat"}componentDidMount(){Object(u.c)(this,Object(d.autorun)(()=>{var e;const t=(null===(e=this.props.matcher)||void 0===e?void 0:e.argValue)||void 0;Object(d.runInAction)(()=>{this.arg=t})}))}render(){var e;const{matcherIndex:t}=this.props,{placeholder:n,argType:r}=null!==(e=ru.b[this.interaction])&&void 0!==e?e:{placeholder:"",argType:"IPFS argument"};return a.createElement(lu,null,void 0!==t&&a.createElement(cu,{htmlFor:this.fieldId},0!==t&&"and "," for ",r),a.createElement(jn.e,{id:this.fieldId,spellCheck:!1,value:this.arg||"",onChange:this.onChange,placeholder:n}))}onChange(e){this.arg=e.target.value,this.props.onChange(new ru.c(this.interaction,this.arg))}};ou([d.observable],Pu.prototype,"arg",void 0),ou([d.computed],Pu.prototype,"interaction",null),ou([d.action.bound],Pu.prototype,"onChange",null),Pu=ou([u.e],Pu);let Ru=class extends su{constructor(){var e,t;super(...arguments),this.content=(null===(e=this.props.matcher)||void 0===e?void 0:e.params)?JSON.stringify(null===(t=this.props.matcher)||void 0===t?void 0:t.params,null,2):"[\n    \n]"}componentDidMount(){Object(u.c)(this,Object(d.reaction)(()=>{var e,t;return null!==(t=null===(e=this.props.matcher)||void 0===e?void 0:e.params)&&void 0!==t?t:{}},e=>{const t=Object(M.m)(this.content);void 0!==t&&s.isEqual(t,e)||Object(d.runInAction)(()=>{this.content=JSON.stringify(e,null,2)})})),this.onJsonChange(this.content)}render(){const{content:e,error:t}=this,{matcherIndex:n}=this.props;return a.createElement(lu,null,void 0!==n&&a.createElement(cu,null,0!==n&&"and "," with Ethereum parameters matching"),a.createElement(Eu,{error:!!t},a.createElement(Xo,{contentId:null,value:e,onChange:this.onJsonChange,language:"json"})))}onJsonChange(e){this.content=e;try{const t=JSON.parse(e);this.props.onChange(new nu.k(t)),this.error=void 0}catch(e){console.log(e),this.error=Object(D.b)(e),this.props.onInvalidState()}}};ou([d.observable],Ru.prototype,"content",void 0),ou([d.observable],Ru.prototype,"error",void 0),ou([d.action.bound],Ru.prototype,"onJsonChange",null),Ru=ou([u.e],Ru);let Hu=class extends su{componentDidMount(){Object(u.c)(this,Object(d.autorun)(()=>{const{matcher:e,matcherClass:t,onChange:n}=this.props;!e&&t&&n(new t)}))}render(){const{matcherIndex:e,matcherKey:t}=this.props;return a.createElement(lu,null,void 0!==e&&a.createElement(cu,null,0!==e&&"and "," ",is(t)))}};Hu=ou([u.e],Hu);var qu=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i};const Au=e=>Ni.c.get(e)||Ni.c.get(null==e?void 0:e.constructor),Iu=p.i.li`
    display: flex;
    flex-direction: row;
    margin: 5px 0;

    &:first-child {
        margin-top: 0;
    }

    &:last-child {
        margin-bottom: 0;
    }
`,Du=p.i.div`
    flex-grow: 1;
    flex-shrink: 1;
    width: 0; /* Required to keep body editors resizing properly */
`,$u=Object(p.i)(jn.a)`
    font-size: ${e=>e.theme.textSize};
    padding: 6px 10px;
    display: inline-block;
    margin-left: 5px;

    flex-grow: 0;
    flex-shrink: 0;
`,Mu=p.i.div`
    &:not(:empty) {
        margin-top: 5px;
    }
`,Fu=a.forwardRef((e,t)=>{const n=Object(Ni.g)(),[r,o]=s.partition(n,e=>"http"===Object(Ni.i)(Au(e)));return a.createElement(Iu,null,a.createElement(Du,null,a.createElement(jn.d,{ref:t,value:Au(e.matcher),onChange:t=>{const n=t.currentTarget.value;if(n){const t=(r=n,Ni.d[r]);e.onChange(new t)}var r}},void 0===e.matcher&&a.createElement("option",{value:""},"Never"),a.createElement(Nu,{matchers:r}),o.length>0&&a.createElement("optgroup",{label:"Experimental"},a.createElement(Nu,{matchers:o}))),a.createElement(Mu,null,a.createElement(iu,{matcher:e.matcher,onChange:e.onChange}))))});let Bu=class extends a.Component{render(){const{matcher:e,onChange:t,onDelete:n,matcherIndex:r}=this.props;return a.createElement(Iu,null,a.createElement(Du,null,a.createElement(au,{matcherIndex:r,matcher:e,onChange:t})),a.createElement($u,{onClick:n},a.createElement(zt.b,{icon:["far","trash-alt"]})))}};Bu=qu([u.e],Bu);const Nu=e=>a.createElement(a.Fragment,null,e.matchers.map(e=>{const t=Au(e),n=is(t);return a.createElement("option",{key:t,value:t},n)})),Lu=p.i.form`
    :not(:empty) {
        margin-top: 5px;
    }
`,Uu=p.i.option`
    color: ${e=>e.theme.containerWatermark};
`;let Wu=class extends a.Component{constructor(){super(...arguments),this.draftMatchers=[],this.invalidMatcherState=!1,this.dropdownRef=a.createRef()}selectMatcher(e){const t=e.target.value;this.matcherClass=Ni.d[t],this.updateDraftMatcher()}updateDraftMatcher(...e){this.draftMatchers=e,this.invalidMatcherState=!1}markMatcherInvalid(){this.invalidMatcherState=!0}saveMatcher(e){if(e&&e.preventDefault(),!this.draftMatchers.length)return;this.draftMatchers.forEach(e=>this.props.onAdd(e)),this.matcherClass=void 0,this.draftMatchers=[],this.invalidMatcherState=!1;const t=this.dropdownRef.current;t&&t.focus()}render(){var e;const{availableMatchers:t}=this.props,{matcherClass:n,draftMatchers:r,updateDraftMatcher:o,invalidMatcherState:s,markMatcherInvalid:i,saveMatcher:c}=this;return a.createElement(Iu,null,a.createElement(Du,null,a.createElement(jn.d,{onChange:this.selectMatcher,value:null!==(e=Au(n))&&void 0!==e?e:"",ref:this.dropdownRef},a.createElement(Uu,{value:""},"Add another matcher:"),a.createElement(Uu,{disabled:!0},"─────────────"),a.createElement(Nu,{matchers:t})),a.createElement(Lu,{onSubmit:!s&&r.length?c:e=>e.preventDefault()},r.length>=1?a.createElement(au,{matcherIndex:void 0,matcher:r[0],onChange:o,onInvalidState:i}):a.createElement(au,{matcherIndex:void 0,matcherClass:n,onChange:o,onInvalidState:i}))),a.createElement($u,{disabled:!r.length||s,onClick:c},a.createElement(zt.b,{icon:["fas","plus"]})))}};qu([d.observable],Wu.prototype,"matcherClass",void 0),qu([d.observable],Wu.prototype,"draftMatchers",void 0),qu([d.observable],Wu.prototype,"invalidMatcherState",void 0),qu([d.action.bound],Wu.prototype,"selectMatcher",null),qu([d.action.bound],Wu.prototype,"updateDraftMatcher",null),qu([d.action.bound],Wu.prototype,"markMatcherInvalid",null),qu([d.action.bound],Wu.prototype,"saveMatcher",null),Wu=qu([u.e],Wu);var zu=n(58);const _u=e=>Ni.a.get(e)||Ni.a.get(e.constructor),Vu=e=>a.createElement(a.Fragment,null,e.handlers.map(e=>{const t=_u(e),n=function(e){switch(e){case"simple":return"Return a fixed response";case"file":return"Return a response from a file";case"forward-to-host":return"Forward the request to a different host";case"passthrough":return"Pass the request on to its destination";case"req-res-transformer":return"Transform the real request or response automatically";case"request-breakpoint":return"Pause the request to manually edit it";case"response-breakpoint":return"Pause the response to manually edit it";case"request-and-response-breakpoint":return"Pause the request & response to manually edit them";case"timeout":return"Time out with no response";case"close-connection":return"Close the connection";case"reset-connection":return"Forcibly reset the connection";case"ws-passthrough":return"Pass the WebSocket through to its destination";case"ws-forward-to-host":return"Forward the WebSocket to a different host";case"ws-reject":return"Reject the WebSocket setup request";case"ws-listen":return"Accept the WebSocket but send no messages";case"ws-echo":return"Echo all messages";case"eth-call-result":return"Return a fixed eth_call result";case"eth-number-result":case"eth-hash-result":return"Return a fixed value";case"eth-receipt-result":return"Return a fixed transaction receipt";case"eth-block-result":return"Return fixed Ethereum block data";case"eth-error":return"Return an Ethereum error response";case"ipfs-cat-text":return"Return fixed IPFS content";case"ipfs-cat-file":return"Return IPFS content from a file";case"ipfs-add-result":return"Return a fixed IPFS add result";case"ipns-resolve-result":return"Return a fixed IPNS resolved address";case"ipns-publish-result":return"Return a fixed succesful IPNS result";case"ipfs-pins-result":return"Return a fixed IPFS pinning result";case"ipfs-pin-ls-result":return"Return a fixed list of IPFS pins";case"wait-for-duration":return"Sleep for a given duration";case"wait-for-rtc-data-channel":return"Wait for a data channel to be opened";case"wait-for-rtc-track":return"Wait for a media track to be opened";case"wait-for-rtc-media":return"Wait for any media to be received";case"wait-for-rtc-message":return"Wait for a data message to be received";case"create-rtc-data-channel":return"Create a data channel";case"send-rtc-data-message":return"Send a data message";case"close-rtc-connection":return"Close the WebRTC connection";case"echo-rtc":return"Echo all messages and media";case"rtc-dynamic-proxy":return"Proxy all traffic to the real remote peer";case"json-rpc-response":case"rtc-peer-proxy":case"callback":case"stream":throw new Error(e+" handler should not be used directly");default:throw new D.a(e)}}(t);return a.createElement("option",{key:t,value:t},n)})),Gu=Object(p.i)(jn.d)`
    &:not(:first-of-type) {
        margin-top: 10px;
    }
`,Ju=Object(u.d)("rulesStore","accountStore")(Object(u.e)(e=>{let[t,n]=s.partition(e.availableHandlers,t=>e.accountStore.isPaidUser||!Object(Ni.q)(e.ruleType,t));return t=s.sortBy(t,e=>_u(e).includes("breakpoint")?0:1),a.createElement(Gu,{value:_u(e.value),onChange:t=>{const n=((e,t)=>{switch(e){case"simple":return new Ln.o(200);case"file":return new Ln.e(200,void 0,"");case"passthrough":return new Ln.j(t);case"forward-to-host":return new Ln.d("",!0,t);case"req-res-transformer":return new Ln.q(t,{},{});case"request-breakpoint":return new Ln.l(t);case"response-breakpoint":return new Ln.n(t);case"request-and-response-breakpoint":return new Ln.k(t);case"timeout":return new Ln.p;case"close-connection":return new Ln.b;case"reset-connection":return new Ln.m;case"ws-passthrough":return new tu.j(t);case"ws-forward-to-host":return new tu.e("",!0,t);case"ws-echo":return new tu.b;case"ws-reject":return new tu.d(400);case"ws-listen":return new tu.c;case"eth-call-result":return new nu.b([],[]);case"eth-number-result":return new nu.j(0);case"eth-hash-result":return new nu.e("0x0");case"eth-receipt-result":return new nu.l(void 0);case"eth-block-result":return new nu.a(void 0);case"eth-error":return new nu.c("Unknown Error");case"ipfs-cat-text":return new ru.e("");case"ipfs-cat-file":return new ru.d("");case"ipfs-add-result":return new ru.a;case"ipns-resolve-result":return new ru.n;case"ipns-publish-result":return new ru.m;case"ipfs-pins-result":return new ru.l;case"ipfs-pin-ls-result":return new ru.k;case"rtc-dynamic-proxy":return new zu.c;case"echo-rtc":return new zu.d;case"close-rtc-connection":return new zu.a;case"wait-for-rtc-media":return new zu.k;case"wait-for-duration":return new zu.j(0);case"wait-for-rtc-data-channel":return new zu.i;case"wait-for-rtc-message":return new zu.l;case"create-rtc-data-channel":return new zu.b("mock-channel");case"send-rtc-data-message":return new zu.h(void 0,"");default:throw new D.a(e)}})(t.target.value,e.rulesStore);e.onChange(n)}},a.createElement(Vu,{handlers:t}),n.length&&a.createElement("optgroup",{label:"With HTTP Toolkit Pro:"},a.createElement(Vu,{handlers:n})))}));var Ku,Yu,Qu=n(164),Xu=n(249),Zu=n(130),ep=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},tp=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))};class np extends a.Component{}const rp=p.i.div`
    margin-top: 10px;
    font-size: ${e=>e.theme.textSize};
`,op=p.i.p`
    font-size: ${e=>e.theme.textSize};
    line-height: 1.3;
    opacity: ${e=>e.theme.lowlightTextOpacity};
    font-style: italic;
    overflow-wrap: break-word;

    &:not(:first-child) {
        margin-top: 10px;
    }
`;function sp(e){const{handler:t,onChange:n,onInvalidState:r}=e,o={ruleType:e.ruleType,handler:t,onChange:n,onInvalidState:r||s.noop},i=Object(Ni.h)(t);switch(i){case"simple":return a.createElement(up,Object.assign({},o));case"file":return a.createElement(gp,Object.assign({},o));case"forward-to-host":case"ws-forward-to-host":return a.createElement(bp,Object.assign({},o,{handlerKey:i}));case"passthrough":case"ws-passthrough":return a.createElement(Hp,Object.assign({},o));case"req-res-transformer":return a.createElement(Cp,Object.assign({},o));case"request-breakpoint":return a.createElement(qp,Object.assign({},o));case"response-breakpoint":return a.createElement(Ap,Object.assign({},o));case"request-and-response-breakpoint":return a.createElement(Ip,Object.assign({},o));case"timeout":return a.createElement(Dp,Object.assign({},o));case"close-connection":return a.createElement($p,Object.assign({},o));case"reset-connection":return a.createElement(Mp,Object.assign({},o));case"ws-echo":return a.createElement(Fp,Object.assign({},o));case"ws-reject":return a.createElement(up,Object.assign({},o));case"ws-listen":return a.createElement(Bp,Object.assign({},o));case"eth-call-result":return a.createElement(Lp,Object.assign({},o));case"eth-number-result":return a.createElement(Up,Object.assign({},o));case"eth-hash-result":return a.createElement(Wp,Object.assign({},o));case"eth-receipt-result":return a.createElement(_p,Object.assign({},o));case"eth-block-result":return a.createElement(Vp,Object.assign({},o));case"eth-error":return a.createElement(Gp,Object.assign({},o));case"ipfs-cat-text":return a.createElement(Jp,Object.assign({},o));case"ipfs-cat-file":return a.createElement(Kp,Object.assign({},o));case"ipfs-add-result":return a.createElement(Yp,Object.assign({},o));case"ipns-resolve-result":return a.createElement(Qp,Object.assign({},o));case"ipns-publish-result":return a.createElement(Xp,Object.assign({},o));case"ipfs-pins-result":return a.createElement(Zp,Object.assign({},o));case"ipfs-pin-ls-result":return a.createElement(eh,Object.assign({},o));case"rtc-dynamic-proxy":return a.createElement(Hp,Object.assign({},o));case"echo-rtc":return a.createElement(th,Object.assign({},o));case"close-rtc-connection":return a.createElement(nh,Object.assign({},o));case"wait-for-rtc-media":return a.createElement(rh,Object.assign({},o));case"wait-for-duration":return a.createElement(oh,Object.assign({},o));case"wait-for-rtc-data-channel":return a.createElement(sh,Object.assign({},o));case"wait-for-rtc-message":return a.createElement(ih,Object.assign({},o));case"create-rtc-data-channel":return a.createElement(ah,Object.assign({},o));case"send-rtc-data-message":return a.createElement(ch,Object.assign({},o));default:throw new D.a(i)}}const ip=p.i.h2`
    margin-bottom: 5px;
    &:not(:first-child) {
        margin-top: 10px;
    }

    text-transform: uppercase;
    opacity: ${e=>e.theme.lowlightTextOpacity};
    width: 100%;
`,ap=Object(p.i)(jn.d)`
    font-size: ${e=>e.theme.textSize};
    width: auto;
`,cp=Object(p.i)(jn.e)`
    width: 100%;
    box-sizing: border-box;
`,lp=p.i.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    margin: 5px 0;

    > ${ip} {
        align-self: flex-end;
        flex-grow: 1;
        margin-bottom: 0;
        margin: 0;
    }

    > button {
        padding-top: 0;
        padding-bottom: 0;
    }
`,dp=p.i.div`
    margin-top: 5px;

    > div {
        margin-top: 5px;
        border-radius: 4px;
        border: solid 1px ${e=>e.theme.containerBorder};
        padding: 1px;
    }
`;let up=class extends np{constructor(){super(...arguments),this.statusCode=this.props.handler instanceof Ln.o?this.props.handler.status:this.props.handler.statusCode,this.statusMessage=this.props.handler.statusMessage,this.rawHeaders=Object(vc.f)(this.props.handler.headers||{}),this.contentType="text",this.body=Object(M.b)(this.props.handler instanceof Ln.o?this.props.handler.data:this.props.handler.body)}get headers(){return Object(vc.h)(this.rawHeaders)}set headers(e){s.isEqual(e,this.headers)||void 0===e&&0===Object.keys(this.headers).length||(this.rawHeaders=Object(vc.f)(e||{}))}componentDidMount(){Object(u.c)(this,Object(d.reaction)(()=>JSON.stringify(s.pick(this,["statusCode","statusMessage","headers","body"])),()=>this.updateHandler())),Object(u.c)(this,Object(d.autorun)(()=>{const{status:e,statusMessage:t}=this.props.handler instanceof Ln.o?this.props.handler:Object.assign(Object.assign({},this.props.handler),{status:this.props.handler.statusCode});Object(d.runInAction)(()=>{this.statusCode=e,this.statusMessage=t})})),Object(u.c)(this,Object(d.autorun)(()=>{const{data:e}=this.props.handler instanceof Ln.o?this.props.handler:{data:this.props.handler.body};Object(d.runInAction)(()=>{this.body=Object(M.b)(e)})})),Object(u.c)(this,Object(d.autorun)(()=>{const{headers:e}=this.props.handler;Object(d.runInAction)(()=>{this.headers=e})})),Object(u.c)(this,Object(d.autorun)(()=>{const e=Object(Gi.g)(Object(vc.d)(this.rawHeaders,"content-type"));e&&Object(d.runInAction)(()=>{this.contentType=e})})),Object(u.c)(this,Object(d.observe)(this,"contentType",({oldValue:e,newValue:t})=>{const n=Object(vc.d)(this.rawHeaders,"content-type"),r=Object(Gi.f)(t);if(n){e===Object(Gi.g)(n)&&Object(d.runInAction)(()=>{Object(vc.i)(this.rawHeaders,"content-type",r)})}else Object(d.runInAction)(()=>{this.rawHeaders.push(["content-type",r])})})),Object(u.c)(this,Object(d.observe)(this,"body",({oldValue:e,newValue:t})=>{const n=Object(vc.d)(this.rawHeaders,"content-length");n&&parseInt(n||"",10)===Object(M.d)(e)&&Object(d.runInAction)(()=>{Object(d.runInAction)(()=>{Object(vc.i)(this.rawHeaders,"content-length",Object(M.d)(t).toString())})})}))}get textEncoding(){return Object(M.h)(this.body)?"utf8":"binary"}render(){const{statusCode:e,statusMessage:t,rawHeaders:n,body:r}=this,o=r.toString(this.textEncoding);return a.createElement(rp,null,a.createElement(ip,null,"Status"),a.createElement(Bl,{httpVersion:1,statusCode:e,statusMessage:t,onChange:this.setStatus}),a.createElement(ip,null,"Headers"),a.createElement(Pl,{headers:n,onChange:this.onHeadersChanged}),a.createElement(lp,null,a.createElement(ip,null,"Response body"),a.createElement(Zu.a,{format:this.contentType,content:r,onFormatted:this.setBody}),a.createElement(ap,{value:this.contentType,onChange:this.setContentType},a.createElement("option",{value:"text"},"Plain text"),a.createElement("option",{value:"json"},"JSON"),a.createElement("option",{value:"xml"},"XML"),a.createElement("option",{value:"html"},"HTML"),a.createElement("option",{value:"css"},"CSS"),a.createElement("option",{value:"javascript"},"JavaScript"))),a.createElement(dp,null,a.createElement(Xo,{contentId:null,language:this.contentType,value:o,onChange:this.setBody})))}setStatus(e,t){this.statusCode=e,this.statusMessage=t}onHeadersChanged(e){this.rawHeaders=e}setContentType(e){const t=e.target.value;this.contentType=t}setBody(e){this.body=Object(M.l)(e,this.textEncoding)}updateHandler(){var e;if(!this.statusCode||this.statusCode<100||this.statusCode>=1e3||this.rawHeaders.some(([e])=>!e.match(vc.b))||this.rawHeaders.some(([e,t])=>!t))return this.props.onInvalidState();this.props.onChange("http"===this.props.ruleType?new Ln.o(this.statusCode,this.statusMessage,this.body,this.headers):new tu.d(this.statusCode,null!==(e=this.statusMessage)&&void 0!==e?e:Object(F.d)(this.statusCode),this.headers,this.body))}};ep([d.observable],up.prototype,"statusCode",void 0),ep([d.observable],up.prototype,"statusMessage",void 0),ep([d.observable],up.prototype,"rawHeaders",void 0),ep([d.computed],up.prototype,"headers",null),ep([d.observable],up.prototype,"contentType",void 0),ep([d.observable],up.prototype,"body",void 0),ep([d.computed],up.prototype,"textEncoding",null),ep([d.action.bound],up.prototype,"setStatus",null),ep([d.action.bound],up.prototype,"onHeadersChanged",null),ep([d.action.bound],up.prototype,"setContentType",null),ep([d.action.bound],up.prototype,"setBody",null),up=ep([u.e],up);const pp=p.i.div`
    margin-top: 1px;
    display: flex;
    flex-direction: row;
    align-items: center;
`,hp=Object(p.i)(jn.a)`
    font-size: ${e=>e.theme.textSize};
    padding: 10px 24px;

    flex-grow: 1;
    white-space: nowrap;
`,mp=p.i.div`
    margin-left: 15px;
    flex-shrink: 1;

    font-family: ${e=>e.theme.monoFontFamily};
    word-break: break-word;
`;let gp=class extends np{constructor(){super(...arguments),this.statusCode=this.props.handler.status,this.statusMessage=this.props.handler.statusMessage,this.headers=this.props.handler.headers||{},this.filePath=(this.props.handler.filePath||"").toString(),this.selectFile=()=>tp(this,void 0,void 0,(function*(){const e=yield Object(_t.g)("path",[]);e&&Object(d.runInAction)(()=>{this.filePath=e})}))}componentDidMount(){Object(u.c)(this,Object(d.reaction)(()=>JSON.stringify(s.pick(this,["statusCode","statusMessage","headers","filePath"])),()=>this.updateHandler())),Object(u.c)(this,Object(d.autorun)(()=>{const{status:e,statusMessage:t,headers:n,filePath:r}=this.props.handler;Object(d.runInAction)(()=>{this.statusCode=e,this.statusMessage=t,this.headers=n||{},this.filePath=r})}))}render(){const{statusCode:e,statusMessage:t,headers:n}=this;return a.createElement(rp,null,a.createElement(ip,null,"Status"),a.createElement(Bl,{httpVersion:1,statusCode:e,statusMessage:t,onChange:this.setStatus}),a.createElement(ip,null,"Headers"),a.createElement(Rl,{headers:n,convertToRawHeaders:vc.f,convertFromRawHeaders:vc.h,onChange:this.onHeadersChanged}),a.createElement(ip,null,"Response body"),a.createElement(pp,null,a.createElement(hp,{onClick:this.selectFile},this.filePath?"Change file":a.createElement(a.Fragment,null,"Select file ",a.createElement(zt.e,null))),this.filePath&&a.createElement(mp,null,this.filePath)),a.createElement(op,null,"All matching requests will receive a ",this.statusCode," response, with the response body containing the contents of the selected file."),a.createElement(op,null,"This file will be read fresh for each request, so future changes to the file will immediately affect matching requests."))}setStatus(e,t){this.statusCode=e,this.statusMessage=t}onHeadersChanged(e){this.headers=e}updateHandler(){if(!this.statusCode||this.statusCode<100||this.statusCode>=1e3||s.some(Object.keys(this.headers),e=>!e.match(vc.b)))return this.props.onInvalidState();this.props.onChange(new Ln.e(this.statusCode,this.statusMessage,this.filePath,this.headers))}};ep([d.observable],gp.prototype,"statusCode",void 0),ep([d.observable],gp.prototype,"statusMessage",void 0),ep([d.observable],gp.prototype,"headers",void 0),ep([d.observable],gp.prototype,"filePath",void 0),ep([d.action.bound],gp.prototype,"setStatus",null),ep([d.action.bound],gp.prototype,"onHeadersChanged",null),gp=ep([u.e],gp);const fp=Object(p.i)(jn.e)`
    margin-top: 5px;
    width: 100%;
    box-sizing: border-box;
`;let bp=class extends np{constructor(){super(...arguments),this.updateHostHeader=!0}componentDidMount(){Object(u.c)(this,Object(d.autorun)(()=>{const e=this.props.handler?this.props.handler.forwarding.targetHost:"",t=!this.props.handler||this.props.handler.forwarding.updateHostHeader;Object(d.runInAction)(()=>{this.targetHost=e,this.updateHostHeader=!!t})}))}render(){const{targetHost:e,updateHostHeader:t,error:n,onTargetChange:r,onUpdateHeaderChange:o}=this,{targetHost:s}=this.props.handler.forwarding,i="ws-forward-to-host"===this.props.handlerKey?"WebSocket":"request";return a.createElement(rp,null,a.createElement(ip,null,"Replacement host"),a.createElement(fp,{value:e||"",invalid:!!n,spellCheck:!1,onChange:r}),a.createElement(ip,null,"Host header"),a.createElement(ap,{value:t.toString(),onChange:o,title:or`
                    Most servers will not accept ${i}s that arrive
                    with the wrong host header, so it's typically useful
                    to automatically change it to match the new host
                `},a.createElement("option",{value:"true"},"Update the host header automatically (recommended)"),a.createElement("option",{value:"false"},"Leave the host header untouched")),s&&a.createElement(op,null,"All matching ",i,"s will be forwarded to ",s,", keeping their existing path",s.includes("://")?"":", protocol,"," and query string.",t?" Their host header will be automatically updated to match.":""))}updateHandler(){try{if(!this.targetHost)throw new Error("A target host is required");let e;const t=this.targetHost.match(/^(\w+):\/\//);if(t){const n="ws-forward-to-host"===this.props.handlerKey?["ws","wss"]:["http","https"];if(!n.includes(t[1].toLowerCase()))throw new Error(`The protocol must be either ${n[0]} or ${n[1]}`);e=this.targetHost.slice(t[0].length)}else e=this.targetHost;if(e.includes("/"))throw new Error("The replacement host shouldn't include a path, since it won't be used");if(e.includes("?"))throw new Error("The replacement host shouldn't include a query string, since it won't be used");const n="ws-forward-to-host"===this.props.handlerKey?tu.e:Ln.d;this.props.onChange(new n(this.targetHost,this.updateHostHeader,this.props.rulesStore)),this.error=void 0}catch(e){throw console.log(e),this.error=Object(D.b)(e),this.props.onInvalidState&&this.props.onInvalidState(),e}}onTargetChange(e){this.targetHost=e.target.value;try{this.updateHandler(),e.target.setCustomValidity("")}catch(t){e.target.setCustomValidity(Object(D.b)(t).message)}e.target.reportValidity()}onUpdateHeaderChange(e){this.updateHostHeader="true"===e.target.value;try{this.updateHandler()}catch(e){}}};ep([d.observable],bp.prototype,"error",void 0),ep([d.observable],bp.prototype,"targetHost",void 0),ep([d.observable],bp.prototype,"updateHostHeader",void 0),ep([d.action.bound],bp.prototype,"onTargetChange",null),ep([d.action.bound],bp.prototype,"onUpdateHeaderChange",null),bp=ep([Object(u.d)("rulesStore"),u.e],bp);const yp=Object(p.i)(ip)`
    margin-top: 10px;
`,vp=p.i.hr`
    width: 100%;
    box-sizing: border-box;
    margin: 20px 0;
    border: solid 1px ${e=>e.theme.containerWatermark};
`,xp=p.i.div`
    margin: 0 0 5px;

    ${e=>e.active&&p.e`
        border-left: solid 5px ${e=>e.theme.containerWatermark};

        &:focus-within {
            border-left: solid 5px ${e=>e.theme.primaryInputBackground};
        }

        padding-left: 5px;
        margin: 10px 0 15px;
    `}
`,wp=p.i.div`
    > :first-child {
        margin-top: 0;
    }

    padding-top: 5px;
`,Ep=Object(p.i)(jn.d)`
    margin: 0;

    ${e=>"none"===e.value&&p.e`
        color: ${e=>e.theme.mainColor};
        background-color: ${e=>e.theme.mainBackground};
    `}
`;let Cp=class extends np{constructor(){super(...arguments),this.transformRequest=this.props.handler.transformRequest||{},this.transformResponse=this.props.handler.transformResponse||{},this.transformField=e=>t=>Object(d.action)(n=>{this[e]=Object.assign(Object.assign({},this[e]),{[t]:n}),this.updateHandler()})}render(){var e,t;return a.createElement(rp,null,a.createElement(yp,null,"Request Transforms:"),a.createElement(Tp,{replacementMethod:null===(e=this.transformRequest)||void 0===e?void 0:e.replaceMethod,onChange:this.transformField("transformRequest")("replaceMethod")}),a.createElement(Sp,{type:"request",transform:this.transformRequest,onChange:this.transformField("transformRequest")}),a.createElement(jp,{type:"request",transform:this.transformRequest,onChange:this.transformField("transformRequest")}),a.createElement(vp,null),a.createElement(yp,null,"Response Transforms:"),a.createElement(Op,{replacementStatus:null===(t=this.transformResponse)||void 0===t?void 0:t.replaceStatus,onChange:this.transformField("transformResponse")("replaceStatus")}),a.createElement(Sp,{type:"response",transform:this.transformResponse,onChange:this.transformField("transformResponse")}),a.createElement(jp,{type:"response",transform:this.transformResponse,onChange:this.transformField("transformResponse")}))}updateHandler(){this.props.onChange(new Ln.q(this.props.rulesStore,this.transformRequest,this.transformResponse))}};ep([d.observable],Cp.prototype,"transformRequest",void 0),ep([d.observable],Cp.prototype,"transformResponse",void 0),Cp=ep([Object(u.d)("rulesStore"),u.e],Cp);const Tp=e=>{var t;return a.createElement(xp,{active:!!e.replacementMethod},a.createElement(Ep,{value:null!==(t=e.replacementMethod)&&void 0!==t?t:"none",onChange:t=>{const n=t.target.value;"none"===n?e.onChange(void 0):e.onChange(n)}},a.createElement("option",{value:"none"},"Pass through the real request method"),Qu.a.map(e=>a.createElement("option",{key:e,value:e},"Replace the request method with ",e))))},Op=e=>{const t=void 0!==e.replacementStatus?"replace":"none";return a.createElement(xp,{active:"none"!==t},a.createElement(Ep,{value:null!=t?t:"none",onChange:t=>{"none"===t.target.value?e.onChange(void 0):e.onChange(200)}},a.createElement("option",{value:"none"},"Pass through the real response status"),a.createElement("option",{value:"replace"},"Replace the response status")),"replace"===t&&a.createElement(wp,null,a.createElement(Bl,{statusCode:e.replacementStatus,onChange:e.onChange,httpVersion:2,statusMessage:void 0})))};let Sp=Ku=class extends a.Component{constructor(){super(...arguments),this.convertResultFromRawHeaders=e=>"updateHeaders"===this.selected?Object(vc.h)(e.map(([e,t])=>[e,""===t?void 0:t])):Object(vc.h)(e),this.onTransformTypeChange=e=>{const t=e.currentTarget.value;this.clearValues(),"none"!==t&&this.props.onChange(t)({})}}get selected(){var e;return null!==(e=s.find(Ku.FIELDS,e=>void 0!==this.props.transform[e]))&&void 0!==e?e:"none"}get headers(){return"none"===this.selected?{}:this.props.transform[this.selected]||{}}render(){const{type:e}=this.props,{selected:t,convertResultFromRawHeaders:n,onTransformTypeChange:r,setHeadersValue:o}=this;return a.createElement(xp,{active:"none"!==t},a.createElement(Ep,{value:t,onChange:r},a.createElement("option",{value:"none"},"Pass through the real ",e," headers"),a.createElement("option",{value:"updateHeaders"},"Update the ",e," headers"),a.createElement("option",{value:"replaceHeaders"},"Replace the ",e," headers")),"none"!==t&&a.createElement(wp,null,a.createElement(Rl,{headers:this.headers,convertToRawHeaders:vc.f,convertFromRawHeaders:n,onChange:o,allowEmptyValues:"updateHeaders"===t})))}setHeadersValue(e){this.clearValues(),"none"!==this.selected&&this.props.onChange(this.selected)(e)}clearValues(){Ku.FIELDS.forEach(e=>this.props.onChange(e)(void 0))}};Sp.FIELDS=["replaceHeaders","updateHeaders"],ep([d.computed],Sp.prototype,"selected",null),ep([d.computed],Sp.prototype,"headers",null),ep([d.action.bound],Sp.prototype,"setHeadersValue",null),ep([d.action.bound],Sp.prototype,"onTransformTypeChange",void 0),ep([d.action.bound],Sp.prototype,"clearValues",null),Sp=Ku=ep([u.e],Sp);let jp=Yu=class extends a.Component{constructor(){super(...arguments),this.onTransformTypeChange=e=>{const t=e.currentTarget.value;this.clearValues(),"updateJsonBody"===t?this.props.onChange("updateJsonBody")({}):"replaceBody"===t?this.props.onChange("replaceBody")(""):"replaceBodyFromFile"===t&&this.props.onChange("replaceBodyFromFile")("")},this.selectBodyReplacementFile=()=>tp(this,void 0,void 0,(function*(){const e=yield Object(_t.g)("path",[]);e&&Object(d.runInAction)(()=>{this.clearValues(),this.props.onChange("replaceBodyFromFile")(e)})}))}get bodyReplacementBuffer(){return Object(M.b)(this.props.transform.replaceBody)}render(){var e;const{type:t,transform:n}=this.props,{bodyReplacementBuffer:r,onTransformTypeChange:o,setBodyReplacement:i,selectBodyReplacementFile:c,setJsonBodyUpdate:l}=this,d=null!==(e=s.find(Yu.FIELDS,e=>void 0!==n[e]))&&void 0!==e?e:"none";return a.createElement(xp,{active:"none"!==d},a.createElement(Ep,{value:d,onChange:o},a.createElement("option",{value:"none"},"Pass through the real ",t," body"),a.createElement("option",{value:"replaceBody"},"Replace the ",t," body with a fixed value"),a.createElement("option",{value:"replaceBodyFromFile"},"Replace the ",t," body with a file"),a.createElement("option",{value:"updateJsonBody"},"Update values within a JSON ",t," body")),"replaceBody"===d?a.createElement(kp,{type:t,body:r,updateBody:i}):"replaceBodyFromFile"===d?a.createElement(wp,null,a.createElement(pp,null,a.createElement(hp,{onClick:c},n.replaceBodyFromFile?"Change file":a.createElement(a.Fragment,null,"Select file ",a.createElement(zt.e,null))),n.replaceBodyFromFile&&a.createElement(mp,null,n.replaceBodyFromFile))):"updateJsonBody"===d?a.createElement(Rp,{type:t,body:n.updateJsonBody,updateBody:l}):null)}clearValues(){Yu.FIELDS.forEach(e=>this.props.onChange(e)(void 0))}setBodyReplacement(e){this.clearValues(),this.props.onChange("replaceBody")(e)}setJsonBodyUpdate(e){this.clearValues(),this.props.onChange("updateJsonBody")(e)}};jp.FIELDS=["replaceBody","replaceBodyFromFile","updateJsonBody"],ep([d.computed],jp.prototype,"bodyReplacementBuffer",null),ep([d.action.bound],jp.prototype,"clearValues",null),ep([d.action.bound],jp.prototype,"setBodyReplacement",null),ep([d.action.bound],jp.prototype,"setJsonBodyUpdate",null),jp=Yu=ep([u.e],jp);const kp=e=>{const[t,n]=a.useState("text");return a.createElement(wp,null,a.createElement(lp,null,a.createElement(ip,null,"Replacement ",e.type," body"),a.createElement(Zu.a,{format:t,content:e.body,onFormatted:e.updateBody}),a.createElement(ap,{value:t,onChange:e=>n(e.target.value)},a.createElement("option",{value:"text"},"Plain text"),a.createElement("option",{value:"json"},"JSON"),a.createElement("option",{value:"xml"},"XML"),a.createElement("option",{value:"html"},"HTML"),a.createElement("option",{value:"css"},"CSS"),a.createElement("option",{value:"javascript"},"JavaScript"))),a.createElement(dp,null,a.createElement(Xo,{contentId:null,language:t,value:Object(M.c)(e.body),onChange:e.updateBody})))},Pp=Object(p.i)(Zu.a)`
    padding-right: 0;
`,Rp=e=>{const[t,n]=a.useState(),[r,o]=a.useState(JSON.stringify(e.body,null,2));return a.useEffect(()=>{try{e.updateBody(JSON.parse(r)),n(void 0)}catch(e){n(Object(D.b)(e))}},[r]),a.createElement(wp,null,a.createElement(lp,null,a.createElement(ip,null,"JSON ",e.type," body patch"),t&&a.createElement(zt.e,{title:t.message}),a.createElement(Pp,{format:"json",content:Object(M.b)(r),onFormatted:o})),a.createElement(dp,null,a.createElement(Xo,{contentId:null,language:"json",value:r,onChange:e=>o(e)})))};let Hp=class extends np{render(){return a.createElement(rp,null,a.createElement(op,null,"All matching ",Object(Ni.o)(this.props.ruleType)?"requests":"websocket"===this.props.ruleType?"WebSockets":"webrtc"===this.props.ruleType?"data and media":Object(D.d)(this.props.ruleType)," will be transparently passed through to the upstream ","webrtc"===this.props.ruleType?"RTC peer, once one is connected":"target host","."))}};Hp=ep([u.e],Hp);let qp=class extends np{render(){return a.createElement(rp,null,a.createElement(op,null,"All matching traffic will breakpoint when a request is sent."),a.createElement(op,null,"Once a request is breakpointed, you can edit the request URL to redirect the request elsewhere, edit the method, headers, or body before they are sent upstream, or provide your own response manually so the request is never sent onwards at all."))}};qp=ep([u.e],qp);let Ap=class extends np{render(){return a.createElement(rp,null,a.createElement(op,null,"All matching traffic will breakpoint when a response is received from the upstream server."),a.createElement(op,null,"Once a response is breakpointed, you can rewrite the received message, to edit the status code, headers or body before they're returned to the downstream HTTP client."))}};Ap=ep([u.e],Ap);let Ip=class extends np{render(){return a.createElement(rp,null,a.createElement(op,null,"All matching traffic will breakpoint when a request is sent, and when a response is received."),a.createElement(op,null,"From a request breakpoint, you can edit the request URL to redirect the request elsewhere, edit the method, headers, or body before they are sent upstream, or provide your own response manually so the request is never sent onwards at all."),a.createElement(op,null,"From a response breakpoint, you can rewrite a received response, to edit the status code, headers or body before they're returned to the downstream HTTP client."))}};Ip=ep([u.e],Ip);let Dp=class extends np{render(){return a.createElement(rp,null,a.createElement(op,null,"When a matching ",Object(Ni.o)(this.props.ruleType)?"request":"websocket"===this.props.ruleType?"WebSocket":"webrtc"===this.props.ruleType?()=>{throw new Error("Not compatible with WebRTC rules")}:Object(D.d)(this.props.ruleType)," is received, the server will keep the connection open but do nothing. With no data or response, most clients will time out and abort the request after sufficient time has passed."))}};Dp=ep([u.e],Dp);let $p=class extends np{render(){return a.createElement(rp,null,a.createElement(op,null,"As soon as a matching ",Object(Ni.o)(this.props.ruleType)?"request":"websocket"===this.props.ruleType?"WebSocket":"webrtc"===this.props.ruleType?()=>{throw new Error("Not compatible with WebRTC rules")}:Object(D.d)(this.props.ruleType)," is received, the connection will be cleanly closed, with no response."))}};$p=ep([u.e],$p);let Mp=class extends np{render(){return a.createElement(rp,null,a.createElement(op,null,"As soon as a matching ",Object(Ni.o)(this.props.ruleType)?"request":"websocket"===this.props.ruleType?"WebSocket":"webrtc"===this.props.ruleType?()=>{throw new Error("Not compatible with WebRTC rules")}:Object(D.d)(this.props.ruleType)," is received, the connection will be killed with a TCP RST packet (or a RST_STREAM frame, for HTTP/2 requests)."))}};Mp=ep([u.e],Mp);let Fp=class extends np{render(){return a.createElement(rp,null,a.createElement(op,null,"The WebSocket will be opened successfully, but not forwarded upstream, and every message that's sent will be echoed back to the client until the client closes the connection."))}};Fp=ep([u.e],Fp);let Bp=class extends np{render(){return a.createElement(rp,null,a.createElement(op,null,"The WebSocket will be opened successfully, but not forwarded upstream. All messages from the client will be accepted, but no responses will be sent."))}};Bp=ep([u.e],Bp);const Np=`(${Xu.a.join("|")})(\\[\\])?`;let Lp=class extends np{constructor(){super(...arguments),this.typeValuePairs=[]}componentDidMount(){Object(u.c)(this,Object(d.autorun)(()=>{const{outputTypes:e,values:t}=this.props.handler,n=t.map(e=>Array.isArray(e)?e.join(", "):null==e?void 0:e.toString());Object(d.runInAction)(()=>{this.typeValuePairs=s.zip(e,n).map(([e,t])=>({key:e,value:t}))})}))}render(){const{typeValuePairs:e}=this,t=this.props.handler.result.result;return a.createElement(rp,null,a.createElement(ip,null,"Eth_Call return values"),a.createElement(Tl.a,{pairs:e,onChange:this.onChange,keyPlaceholder:"Return value type (e.g. string, int256, etc)",keyPattern:Np,valuePlaceholder:"Return value",allowEmptyValues:!0}),this.error?a.createElement(a.Fragment,null,a.createElement(op,null,a.createElement(zt.e,null)," Could not encode data. ",this.error.message)):a.createElement(a.Fragment,null,a.createElement(op,null,"Encoded return value:"),a.createElement(ln.e,null,t)),a.createElement(op,null,"All matching Ethereum JSON-RPC calls will be intercepted, and the encoded output above returned directly, without forwarding the call to the real Ethereum node."))}onChange(e){this.typeValuePairs=e;const t=this.typeValuePairs.map(({key:e,value:t})=>"string[]"===e?{key:e,value:t.split(/,\s?/g)}:e.startsWith("bytes")||e.endsWith("[]")?{key:e,value:t.split(/,\s?/g).map(e=>parseInt(e,10))}:{key:e,value:t});try{this.props.onChange(new nu.b(t.map(({key:e})=>e),t.map(({value:e})=>e))),this.error=void 0}catch(e){if(!Object(D.c)(e))throw e;if("INVALID_ARGUMENT"===e.code){const{argument:t,value:n,reason:r}=e;this.error="type"===t||"param"===t?new Error("Invalid type: "+n):"value"===t?new Error(`Invalid value: '${n}' (${r})`):e}else this.error=e;this.props.onInvalidState()}}};ep([d.observable],Lp.prototype,"typeValuePairs",void 0),ep([d.observable],Lp.prototype,"error",void 0),ep([d.action.bound],Lp.prototype,"onChange",null),Lp=ep([u.e],Lp);let Up=class extends np{constructor(){super(...arguments),this.value=this.props.handler.value}componentDidMount(){Object(u.c)(this,Object(d.autorun)(()=>{const{value:e}=this.props.handler;Object(d.runInAction)(()=>{0===e&&""===this.value||(this.value=e)})}))}render(){const{value:e}=this;return a.createElement(rp,null,a.createElement(ip,null,"Return value"),a.createElement(cp,{type:"number",min:0,value:e,onChange:this.onChange}),a.createElement(op,null,"All matching Ethereum JSON-RPC requests will be intercepted, and ",this.value," will be returned directly, without forwarding the call to the real Ethereum node."))}onChange(e){const t=e.target.value,n=""!==t?parseInt(t,10):"";s.isNaN(n)||(this.value=n,this.props.onChange(new nu.j(n||0)))}};ep([d.observable],Up.prototype,"value",void 0),ep([d.action.bound],Up.prototype,"onChange",null),Up=ep([u.e],Up);let Wp=class extends np{constructor(){super(...arguments),this.value=this.props.handler.value}componentDidMount(){Object(u.c)(this,Object(d.autorun)(()=>{const{value:e}=this.props.handler;Object(d.runInAction)(()=>{this.value=e})}))}render(){const{value:e}=this;return a.createElement(rp,null,a.createElement(ip,null,"Return hash value"),a.createElement(cp,{type:"text",value:e,onChange:this.onChange}),a.createElement(op,null,"All matching Ethereum JSON-RPC requests will be intercepted, and ",this.value," will be returned directly, without forwarding the call to the real Ethereum node."),a.createElement(op,null,a.createElement(zt.e,null)," In most cases, you will also want to add a rule for transaction receipts matching this value, to mock subsequent queries for the transaction's result."))}onChange(e){const t=e.target.value;/^0x[0-9a-fA-F]*$/.test(t)&&this.props.onChange(new nu.e(e.target.value))}};ep([d.observable],Wp.prototype,"value",void 0),ep([d.action.bound],Wp.prototype,"onChange",null),Wp=ep([u.e],Wp);let zp=class extends np{constructor(){super(...arguments),this.valueString=JSON.stringify(this.props.valueGetter(this.props.handler),null,2)}componentDidMount(){Object(u.c)(this,Object(d.reaction)(()=>JSON.stringify(this.props.valueGetter(this.props.handler),null,2),e=>{let t;try{t=JSON.stringify(JSON.parse(this.valueString),null,2)}catch(e){}e!==t&&Object(d.runInAction)(()=>{this.valueString=e,this.error=void 0})}))}render(){const{valueString:e,error:t}=this,{name:n,explanation:r}=this.props;return a.createElement(rp,null,a.createElement(lp,null,a.createElement(ip,null,n),t&&a.createElement(zt.e,{title:t.message}),a.createElement(Pp,{format:"json",content:Object(M.b)(e),onFormatted:this.onChange})),a.createElement(dp,null,a.createElement(Xo,{contentId:null,language:"json",value:e,onChange:this.onChange})),r.map((e,t)=>a.createElement(op,{key:t},e)))}onChange(e){this.valueString=e;try{const t=JSON.parse(e);this.props.onChange(this.props.handlerFactory(t)),this.error=void 0}catch(e){if(!Object(D.c)(e))throw e;this.error=e,this.props.onInvalidState()}}};ep([d.observable],zp.prototype,"valueString",void 0),ep([d.observable],zp.prototype,"error",void 0),ep([d.action.bound],zp.prototype,"onChange",null),zp=ep([u.e],zp);let _p=class extends np{render(){return a.createElement(zp,Object.assign({name:"Ethereum Transaction Receipt",explanation:["All matching Ethereum JSON-RPC requests will be intercepted, and this transaction receipt will returned directly, without forwarding the call to the real Ethereum node."],handlerFactory:e=>new nu.l(e),valueGetter:e=>e.receiptValue},this.props))}};_p=ep([u.e],_p);let Vp=class extends np{render(){return a.createElement(zp,Object.assign({name:"Ethereum Block Data",explanation:["All matching Ethereum JSON-RPC requests will be intercepted, and this fixed block data will returned directly, without forwarding the call to the real Ethereum node."],handlerFactory:e=>new nu.a(e),valueGetter:e=>e.blockValue},this.props))}};Vp=ep([u.e],Vp);let Gp=class extends np{constructor(){super(...arguments),this.errorMessage=this.props.handler.message,this.errorCode=this.props.handler.code||"",this.errorData=this.props.handler.data,this.errorName=this.props.handler.name}componentDidMount(){Object(u.c)(this,Object(d.reaction)(()=>JSON.stringify(s.pick(this,["errorMessage","errorCode","errorData","errorName"])),()=>this.updateHandler())),Object(u.c)(this,Object(d.autorun)(()=>{const{message:e,code:t,data:n,name:r}=this.props.handler;Object(d.runInAction)(()=>{this.errorMessage=e,this.errorData=n,this.errorName=r,""===this.errorCode&&0===t||(this.errorCode=t)})}))}render(){const{errorMessage:e,errorCode:t,errorData:n,errorName:r}=this;return a.createElement(rp,null,a.createElement(ip,null,"Error Message"),a.createElement(cp,{type:"text",value:e,onChange:this.onChangeMessage}),a.createElement(ip,null,"Error Code"),a.createElement(cp,{type:"number",value:t,onChange:this.onChangeCode}),a.createElement(ip,null,"Error Data"),a.createElement(cp,{type:"text",value:n,onChange:this.onChangeData}),a.createElement(ip,null,"Error Name"),a.createElement(cp,{type:"text",value:r||"",onChange:this.onChangeName}),a.createElement(op,null,"All matching Ethereum JSON-RPC requests will be intercepted, and this error response will returned directly, without forwarding the call to the real Ethereum node."))}onChangeMessage(e){this.errorMessage=e.target.value}onChangeCode(e){const t=e.target.value;if(!t)return void(this.errorCode="");const n=parseInt(t,10);s.isNaN(n)||(this.errorCode=n)}onChangeData(e){this.errorData=e.target.value}onChangeName(e){this.errorName=e.target.value}updateHandler(){this.props.onChange(new nu.c(this.errorMessage,this.errorData,this.errorCode||0,this.errorName))}};ep([d.observable],Gp.prototype,"inputError",void 0),ep([d.observable],Gp.prototype,"errorMessage",void 0),ep([d.observable],Gp.prototype,"errorCode",void 0),ep([d.observable],Gp.prototype,"errorData",void 0),ep([d.observable],Gp.prototype,"errorName",void 0),ep([d.action.bound],Gp.prototype,"onChangeMessage",null),ep([d.action.bound],Gp.prototype,"onChangeCode",null),ep([d.action.bound],Gp.prototype,"onChangeData",null),ep([d.action.bound],Gp.prototype,"onChangeName",null),Gp=ep([u.e],Gp);let Jp=class extends np{constructor(){super(...arguments),this.contentType="text",this.body=Object(M.b)(this.props.handler.data)}componentDidMount(){Object(u.c)(this,Object(d.autorun)(()=>{const{data:e}=this.props.handler;Object(d.runInAction)(()=>{this.body=Object(M.b)(e)})}))}get textEncoding(){return Object(M.h)(this.body)?"utf8":"binary"}render(){const{body:e}=this,t=e.toString(this.textEncoding);return a.createElement(rp,null,a.createElement(lp,null,a.createElement(ip,null,"IPFS content"),a.createElement(Zu.a,{format:this.contentType,content:e,onFormatted:this.setBody}),a.createElement(ap,{value:this.contentType,onChange:this.setContentType},a.createElement("option",{value:"text"},"Plain text"),a.createElement("option",{value:"json"},"JSON"),a.createElement("option",{value:"xml"},"XML"),a.createElement("option",{value:"html"},"HTML"),a.createElement("option",{value:"css"},"CSS"),a.createElement("option",{value:"javascript"},"JavaScript"))),a.createElement(dp,null,a.createElement(Xo,{contentId:null,language:this.contentType,value:t,onChange:this.setBody})))}setContentType(e){const t=e.target.value;this.contentType=t}setBody(e){this.body=Object(M.l)(e,this.textEncoding),this.props.onChange(new ru.e(this.body))}};ep([d.observable],Jp.prototype,"contentType",void 0),ep([d.observable],Jp.prototype,"body",void 0),ep([d.computed],Jp.prototype,"textEncoding",null),ep([d.action.bound],Jp.prototype,"setContentType",null),ep([d.action.bound],Jp.prototype,"setBody",null),Jp=ep([u.e],Jp);let Kp=class extends np{constructor(){super(...arguments),this.filePath=(this.props.handler.filePath||"").toString(),this.selectFile=()=>tp(this,void 0,void 0,(function*(){const e=yield Object(_t.g)("path",[]);e&&(Object(d.runInAction)(()=>{this.filePath=e}),this.props.onChange(new ru.d(this.filePath)))}))}componentDidMount(){Object(u.c)(this,Object(d.autorun)(()=>{const{filePath:e}=this.props.handler;Object(d.runInAction)(()=>{this.filePath=e})}))}render(){return a.createElement(rp,null,a.createElement(ip,null,"IPFS content"),a.createElement(pp,null,a.createElement(hp,{onClick:this.selectFile},this.filePath?"Change file":a.createElement(a.Fragment,null,"Select file ",a.createElement(zt.e,null))),this.filePath&&a.createElement(mp,null,this.filePath)),a.createElement(op,null,"All matching requests will receive a successful response containing the contents of the selected file."),a.createElement(op,null,"This file will be read fresh for each request, so future changes to the file will immediately affect matching requests."))}};ep([d.observable],Kp.prototype,"filePath",void 0),Kp=ep([u.e],Kp);let Yp=class extends np{constructor(){super(...arguments),this.resultPairs=[]}componentDidMount(){Object(u.c)(this,Object(d.autorun)(()=>{const{result:e}=this.props.handler;Object(d.runInAction)(()=>{this.resultPairs=e.map(({Name:e,Hash:t})=>({key:e,value:t}))})}))}render(){const{resultPairs:e}=this;return a.createElement(rp,null,a.createElement(ip,null,"IPFS Add Results"),a.createElement(Tl.a,{pairs:e,onChange:this.onChange,keyPlaceholder:"Name of the added file",valuePlaceholder:"Hash of the added file"}),a.createElement(op,null,"All matching IPFS Add calls will be intercepted, and the above results will always be returned directly, without forwarding the call to the real IPFS node."))}onChange(e){this.resultPairs=e,this.props.onChange(new ru.a(this.resultPairs.map(({key:e,value:t})=>({Name:e,Hash:t}))))}};ep([d.observable],Yp.prototype,"resultPairs",void 0),ep([d.action.bound],Yp.prototype,"onChange",null),Yp=ep([u.e],Yp);let Qp=class extends np{render(){return a.createElement(zp,Object.assign({name:"IPNS Resolve Result",explanation:["All matching requests will be receive this data as a successful IPNS resolution."],handlerFactory:e=>new ru.n(e),valueGetter:e=>e.result},this.props))}};Qp=ep([u.e],Qp);let Xp=class extends np{render(){return a.createElement(zp,Object.assign({name:"IPNS Publish Result",explanation:["All matching requests will be receive this data as a successful IPNS publish result."],handlerFactory:e=>new ru.m(e),valueGetter:e=>e.result},this.props))}};Xp=ep([u.e],Xp);let Zp=class extends np{render(){return a.createElement(zp,Object.assign({name:"IPFS Pinning Result",explanation:["All matching requests will be receive this data as a successful response."],handlerFactory:e=>new ru.l(e),valueGetter:e=>e.result},this.props))}};Zp=ep([u.e],Zp);let eh=class extends np{constructor(){super(...arguments),this.resultPairs=[]}componentDidMount(){Object(u.c)(this,Object(d.autorun)(()=>{const{result:e}=this.props.handler;Object(d.runInAction)(()=>{this.resultPairs=e.map(({Type:e,Cid:t})=>({key:e,value:t}))})}))}render(){const{resultPairs:e}=this;return a.createElement(rp,null,a.createElement(ip,null,"IPFS Pin Ls Results"),a.createElement(Tl.a,{pairs:e,onChange:this.onChange,keyPlaceholder:"Type of pin (recursive, direct, indirect)",valuePlaceholder:"CID of the pinned content"}),a.createElement(op,null,"All matching IPFS Pin Ls calls will be intercepted, and the above results will always be returned directly, without forwarding the call to the real IPFS node."))}onChange(e){this.resultPairs=e,this.props.onChange(new ru.k(this.resultPairs.map(({key:e,value:t})=>({Type:e,Cid:t}))))}};ep([d.observable],eh.prototype,"resultPairs",void 0),ep([d.action.bound],eh.prototype,"onChange",null),eh=ep([u.e],eh);let th=class extends np{render(){return a.createElement(rp,null,a.createElement(op,null,"Echo all sent data messages and all streamed video and audio media back to the intercepted peer wherever possible, until the connection is closed. No data will be forwarded to any connected remote peer."),a.createElement(op,null,"Note that in some cases echoing isn't possible - e.g. if the client opens a one-way video stream - in which case that data will simply be dropped."))}};th=ep([u.e],th);let nh=class extends np{render(){return a.createElement(rp,null,a.createElement(op,null,"Immediately close the WebRTC connection, with no further response and no data forwarded to any connected remote peer."))}};nh=ep([u.e],nh);let rh=class extends np{render(){return a.createElement(rp,null,a.createElement(op,null,"Wait until the next WebRTC media data is sent by the client."))}};rh=ep([u.e],rh);let oh=class extends np{constructor(){super(...arguments),this.duration=this.props.handler.durationMs}componentDidMount(){Object(u.c)(this,Object(d.autorun)(()=>{const{durationMs:e}=this.props.handler;Object(d.runInAction)(()=>{0===e&&""===this.duration||(this.duration=e)})}))}render(){const{duration:e}=this;return a.createElement(rp,null,"Wait for ",a.createElement(jn.e,{type:"number",min:"0",placeholder:"Duration (ms)",value:e,onChange:this.onChange})," milliseconds.")}onChange(e){const t=e.target.value,n=""===t?"":parseInt(t,10);s.isNaN(n)||(this.duration=n,this.props.onChange(new zu.j(n||0)))}};ep([d.observable],oh.prototype,"duration",void 0),ep([d.action.bound],oh.prototype,"onChange",null),oh=ep([u.e],oh);let sh=class extends np{render(){const{channelLabel:e}=this.props.handler;return a.createElement(rp,null,a.createElement(ip,null,"Channel Label"),a.createElement(cp,{placeholder:"The channel to wait for, or nothing to wait for any channel",value:null!=e?e:"",onChange:this.onChange}),a.createElement(op,null,"Wait until the client opens a WebRTC data channel ",e?`with the label "${e}"`:"with any label","."))}onChange(e){const t=e.target.value;this.props.onChange(new zu.i(t||""))}};ep([d.action.bound],sh.prototype,"onChange",null),sh=ep([u.e],sh);let ih=class extends np{render(){const{channelLabel:e}=this.props.handler;return a.createElement(rp,null,a.createElement(ip,null,"Channel Label"),a.createElement(cp,{placeholder:"The channel to watch for messages, or nothing to watch every channel",value:null!=e?e:"",onChange:this.onChange}),a.createElement(op,null,"Wait until the client sends a WebRTC data message ",e?`on a channel with the label "${e}"`:"on any data channel","."))}onChange(e){const t=e.target.value;this.props.onChange(new zu.l(t||""))}};ep([d.action.bound],ih.prototype,"onChange",null),ih=ep([u.e],ih);let ah=class extends np{render(){const{channelLabel:e}=this.props.handler;return a.createElement(rp,null,a.createElement(ip,null,"Channel Label"),a.createElement(cp,{placeholder:"A label for the channel that will be created",value:e,onChange:this.onChange}),a.createElement(op,null,'Create a data channel on the WebRTC connection labelled "',e,'".'))}onChange(e){const t=e.target.value;this.props.onChange(new zu.b(t))}};ep([d.action.bound],ah.prototype,"onChange",null),ah=ep([u.e],ah);let ch=class extends np{constructor(){super(...arguments),this.channelLabel=this.props.handler.channelLabel,this.contentType="text",this.message=Object(M.b)(this.props.handler.message)}componentDidMount(){Object(u.c)(this,Object(d.autorun)(()=>{const{channelLabel:e,message:t}=this.props.handler;Object(d.runInAction)(()=>{this.channelLabel=e,this.message=Object(M.b)(t)})}))}get textEncoding(){return Object(M.h)(this.message)?"utf8":"binary"}render(){const{channelLabel:e,message:t}=this,n=t.toString(this.textEncoding);return a.createElement(rp,null,a.createElement(ip,null,"Channel Label"),a.createElement(cp,{placeholder:"The channel to send the message to, or nothing to send on all open channels",value:null!=e?e:"",onChange:this.setChannelLabel}),a.createElement(lp,null,a.createElement(ip,null,"Message content"),a.createElement(Zu.a,{format:this.contentType,content:t,onFormatted:this.setMessage}),a.createElement(ap,{value:this.contentType,onChange:this.setContentType},a.createElement("option",{value:"text"},"Plain text"),a.createElement("option",{value:"json"},"JSON"),a.createElement("option",{value:"xml"},"XML"))),a.createElement(dp,null,a.createElement(Xo,{contentId:null,language:this.contentType,value:n,onChange:this.setMessage})),a.createElement(op,null,"Send ",0===t.length?"an empty":"the above"," message on ",e?`any open channel with the label "${e}"`:"every open data channel","."))}setContentType(e){const t=e.target.value;this.contentType=t}setChannelLabel(e){const t=e.target.value;this.channelLabel=t||void 0,this.updateHandler()}setMessage(e){this.message=Object(M.l)(e,this.textEncoding),this.updateHandler()}updateHandler(){this.props.onChange(new zu.h(this.channelLabel,this.message.toString(this.textEncoding)))}};ep([d.observable],ch.prototype,"channelLabel",void 0),ep([d.observable],ch.prototype,"contentType",void 0),ep([d.observable],ch.prototype,"message",void 0),ep([d.computed],ch.prototype,"textEncoding",null),ep([d.action.bound],ch.prototype,"setContentType",null),ep([d.action.bound],ch.prototype,"setChannelLabel",null),ep([d.action.bound],ch.prototype,"setMessage",null),ch=ep([u.e],ch);const lh=p.i.h2`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    flex-basis: 100%;
    width: 100%;
    box-sizing: border-box;

    /* Required to avoid overflow trimming hanging chars */
    padding: 5px;
    margin: -5px;

    font-style: italic;
`,dh=p.i.div`
    flex-basis: 100%;
    margin: -4px;
`,uh=Object(p.i)(jn.e)`
    width: 30%;
    margin-right: 5px;
    margin-bottom: 10px;
`,ph=Object(p.i)(Wd)`
    font-size: 1em;
    padding: 0;
    vertical-align: middle;
`,hh=e=>{var t;return a.createElement(dh,null,a.createElement(uh,{autoFocus:!0,value:e.value,placeholder:"A custom name for this rule",onChange:t=>{e.onEditTitle(t.target.value)},onClick:e=>e.stopPropagation(),onKeyPress:t=>{"Enter"===t.key&&e.onSave(t)}}),a.createElement(ph,{title:"Reset changes to rule name",icon:["fas","undo"],disabled:!e.onCancel,onClick:Jt(null!==(t=e.onCancel)&&void 0!==t?t:()=>{})}))};var mh=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i};const gh=Object(p.i)(Yt.d)`
    margin-top: 10px;

    width: calc(100% - ${e=>40*e.depth}px);
    margin-left: ${e=>40*e.depth}px;

    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    font-size: ${e=>e.theme.headingSize};

    overflow: initial;

    ${e=>e.collapsed&&!e.disabled?p.e`
            user-select: none;

            &:hover {
                ${Ud} {
                    display: flex;
                }

                ${Ld} {
                    opacity: 0.5;
                }
            }

            ${e.deactivated&&"opacity: 0.6;"}
        `:e.collapsed?"":p.e`
                ${Ud} {
                    display: flex;
                }
            `}

    border-left: 5px solid ${e=>e.borderColor};

    &:focus {
        outline: none;
        box-shadow: 0 0 1px 2px ${e=>vs.f(e.theme.popColor,.5)};
        background-color: ${e=>e.theme.mainBackground};
    }
`,fh=Object(p.i)(e=>a.createElement(gh,Object.assign({collapsed:!0,borderColor:"transparent"},s.omit(e,"onAdd"),{tabIndex:0,depth:0,onClick:e.onAdd,onKeyPress:Gt}),a.createElement(zt.b,{icon:["fas","plus"]}),"Add a new rule to rewrite requests or responses"))`
    > svg {
        margin: 0 5px;
    }

    margin-top: 20px;

    justify-content: center;
    background-color: ${e=>vs.f(e.theme.mainBackground,.4)};
    box-shadow: 0 0 4px 0 rgba(0,0,0,0.2);
`,bh=p.i.section`
    align-self: stretch;
    flex-grow: 1;
    flex-basis: 0;
    max-width: calc(50% - 30px);
`,yh=p.i.h1`
    ${e=>!e.collapsed&&p.e`
        opacity: 0.3;
    `}

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    /* Required to avoid overflow trimming hanging chars */
    padding: 5px;
    margin: -5px;
`,vh=Object(p.i)(zt.b).attrs(()=>({icon:["fas","arrow-left"]}))`
    transform: rotate(180deg);
    padding: 0 15px;
`,xh=p.i.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`,wh=p.i.div`
    margin-top: 20px;
    margin-bottom: 20px;
`,Eh=Object(p.i)(Ud)`
    background-image: radial-gradient(
        ${e=>vs.f(e.theme.mainBackground,.9)} 50%,
        transparent 100%
    );
    z-index: 1;
`,Ch=e=>a.createElement(Eh,{topOffset:7},a.createElement(Wd,{title:"Delete this rule",icon:["far","trash-alt"],onClick:e.onDelete}),a.createElement(Wd,{title:"Clone this rule",icon:["far","clone"],onClick:e.onClone}),a.createElement(Wd,{title:e.toggleState?"Deactivate this rule":"Activate this rule",icon:["fas",e.toggleState?"toggle-on":"toggle-off"],onClick:e.onToggleActivation}),a.createElement(Wd,{title:"Give this rule a custom name",icon:["fas","edit"],disabled:e.isEditingTitle,onClick:e.onSetCustomTitle}),a.createElement(Wd,{title:"Revert this rule to the last saved version",icon:["fas","undo"],disabled:!e.hasUnsavedChanges||e.isNewRule,onClick:e.onReset}),a.createElement(Wd,{icon:["fas",e.hasUnsavedChanges?"save":e.isCollapsed?"chevron-down":"chevron-up"],title:e.hasUnsavedChanges?"Save changes to this rule":e.isCollapsed?"Show rule details":"Hide rule details",onClick:e.hasUnsavedChanges?e.onSave:e.onToggleCollapse})),Th=(e,t)=>{const n={};return e&&e.transition&&(n.transition=e.transition.replace(/transform [\d.]+s/,"transform 100ms")),t.combineWith&&t.combineWith.endsWith("-tail")&&(n.opacity="1"),Object.assign(Object.assign({},e),n)};let Oh=class extends a.Component{constructor(){super(...arguments),this.initialMatcherSelect=a.createRef(),this.containerRef=null,this.saveRule=Jt(()=>{this.stopEditingTitle(),this.props.saveRule(this.props.path)}),this.resetRule=Jt(()=>{this.stopEditingTitle(),this.props.resetRule(this.props.path)}),this.deleteRule=Jt(()=>this.props.deleteRule(this.props.path)),this.cloneRule=Jt(()=>this.props.cloneRule(this.props.path)),this.toggleCollapse=Jt(()=>{requestAnimationFrame(()=>{var e;this.containerRef&&this.containerRef.scrollIntoView({block:"nearest",behavior:"smooth"}),this.initialMatcherSelect.current&&(this.initialMatcherSelect.current.focus(),null===(e=getSelection())||void 0===e||e.empty())}),this.props.toggleRuleCollapsed(this.props.rule.id),this.stopEditingTitle()})}render(){const{index:e,rule:t,path:n,isNewRule:r,hasUnsavedChanges:o,collapsed:s,disabled:i}=this.props,{isPaidUser:c,getPro:l}=this.props.accountStore,d=t.type,p=t.matchers.length?t.matchers[0]:void 0;let h;if("http"===d)h=p instanceof ut.matchers.MethodMatcher?Object(N.d)(ut.Method[p.method]):void 0!==p?Object(N.d)("unknown"):"transparent";else if("websocket"===d)h=Object(N.f)("websocket");else if("ethereum"===d)h=Object(N.f)("mutative");else if("ipfs"===d)h=Object(N.f)("html");else{if("webrtc"!==d)throw new D.a(d);h=Object(N.f)("rtc-data")}const m=Object(Ni.e)(d),g=Object(Ni.f)(d,p),f="handler"in t?[t.handler]:t.steps,b=!s||!t.title&&!this.titleEditState,y=!!this.titleEditState&&!s;return a.createElement(Fd.b,{draggableId:t.id,index:e,isDragDisabled:!s},(e,v)=>a.createElement(u.a,null,()=>a.createElement(gh,Object.assign({},e.draggableProps,{borderColor:h,ref:t=>{e.innerRef(t),this.containerRef=t},collapsed:s,deactivated:!t.activated,disabled:i,tabIndex:s?0:void 0,onClick:s?this.toggleCollapse:void 0,onKeyPress:Gt,depth:n.length-1,style:Th(e.draggableProps.style,v)}),a.createElement(Ch,{isCollapsed:s,isNewRule:r,hasUnsavedChanges:o,onToggleCollapse:this.toggleCollapse,onSave:this.saveRule,onReset:this.resetRule,toggleState:t.activated,onToggleActivation:this.toggleActivation,onClone:this.cloneRule,onDelete:this.deleteRule,isEditingTitle:y,onSetCustomTitle:this.startEnteringCustomTitle}),a.createElement(Ld,Object.assign({},e.dragHandleProps)),t.title&&!y&&a.createElement(lh,null,t.title),y&&a.createElement(hh,{value:t.title||"",onEditTitle:this.editTitle,onSave:this.saveRule,onCancel:this.titleEditState.originalTitle!==this.props.rule.title?this.cancelEditingTitle:void 0}),a.createElement(bh,null,b&&a.createElement(yh,{collapsed:s,title:cs(t)},cs(t)),!s&&a.createElement(xh,null,a.createElement(wh,null,"Match:"),a.createElement("ul",null,a.createElement(Fu,{ref:this.initialMatcherSelect,matcher:p,onChange:this.setInitialMatcher}),t.matchers.slice(1).map((e,n)=>a.createElement(Bu,{key:`${n}/${t.matchers.length}`,matcher:e,matcherIndex:n,onChange:(...e)=>this.updateMatcher(n+1,...e),onDelete:()=>this.deleteMatcher(e)})),t.matchers.length>0&&a.createElement(Wu,{key:t.type,availableMatchers:m,existingMatchers:t.matchers,onAdd:this.addMatcher})))),b&&a.createElement(vh,null),a.createElement(bh,null,b&&a.createElement(yh,{collapsed:s,title:ls(t)},ls(t)),!s&&a.createElement(xh,null,a.createElement(wh,null,"Then:"),f.map((e,t)=>a.createElement(Sh,{key:t,handler:e,handlerIndex:t,isPaidUser:c,getPro:l,ruleType:d,availableHandlers:g,updateHandler:this.updateHandler})))))))}toggleActivation(e){const{rule:t}=this.props;t.activated=!t.activated,e.stopPropagation()}setInitialMatcher(e){const t=this.props.rule.type,n=Object(Ni.i)(e);t===n?this.props.rule.matchers[0]=e:(this.props.rule.type=n,this.props.rule.matchers=Object(Mo.i)(n,e,this.props.rule.matchers));if("handler"in this.props.rule?!Object(Ni.j)(this.props.rule.handler,e):!this.props.rule.steps.every(t=>Object(Ni.j)(t,e))){const e=this.props.getRuleDefaultHandler(n);Object(Ni.s)(this.props.rule)?(this.props.rule.steps=[e],delete this.props.rule.handler):(this.props.rule.handler=e,delete this.props.rule.steps)}Object(Mo.j)(this.props.rule)}addMatcher(e){this.props.rule.matchers.push(e)}updateMatcher(e,...t){this.props.rule.matchers.splice(e,1,...t)}deleteMatcher(e){const t=this.props.rule;t.matchers=t.matchers.filter(t=>t!==e)}updateHandler(e,t){const n=this.props.rule;if("handler"in n){if(0!==e)throw new Error("Single-handler rules cannot have additional steps");n.handler=t}else n.steps[e]=t,Object(Ni.l)(t)?n.steps=n.steps.slice(0,e+1):e===n.steps.length-1&&n.steps.push(this.props.getRuleDefaultHandler(this.props.rule.type))}startEnteringCustomTitle(e){this.titleEditState={originalTitle:this.props.rule.title},this.props.collapsed&&this.props.toggleRuleCollapsed(this.props.rule.id),e.stopPropagation()}editTitle(e){this.props.rule.title=e||void 0}cancelEditingTitle(){this.titleEditState&&(this.editTitle(this.titleEditState.originalTitle),this.titleEditState=void 0)}stopEditingTitle(){var e;this.titleEditState&&(this.props.rule.title!==this.titleEditState.originalTitle&&(this.props.rule.title=(null===(e=this.props.rule.title)||void 0===e?void 0:e.trim())||void 0),this.titleEditState=void 0)}};mh([d.observable],Oh.prototype,"titleEditState",void 0),mh([d.action.bound],Oh.prototype,"toggleActivation",null),mh([d.action.bound],Oh.prototype,"setInitialMatcher",null),mh([d.action.bound],Oh.prototype,"addMatcher",null),mh([d.action.bound],Oh.prototype,"updateMatcher",null),mh([d.action.bound],Oh.prototype,"deleteMatcher",null),mh([d.action.bound],Oh.prototype,"updateHandler",null),mh([d.action.bound],Oh.prototype,"startEnteringCustomTitle",null),mh([d.action.bound],Oh.prototype,"editTitle",null),mh([d.action.bound],Oh.prototype,"cancelEditingTitle",null),mh([d.action.bound],Oh.prototype,"stopEditingTitle",null),Oh=mh([Object(u.d)("accountStore"),u.e],Oh);let Sh=class extends a.Component{componentDidMount(){Object(u.c)(this,Object(d.reaction)(()=>this.props.handler,()=>{this.demoHandler=void 0}))}render(){var e;const{isPaidUser:t,getPro:n,ruleType:r,availableHandlers:o,handler:i}=this.props,c=null!==(e=this.demoHandler)&&void 0!==e?e:i,l=!t&&c&&Object(Ni.p)(r,c);return a.createElement(a.Fragment,null,a.createElement(Ju,{value:c,ruleType:r,onChange:this.updateHandler,availableHandlers:o}),l?a.createElement(qa,{getPro:n,source:"rule-"+i.type},a.createElement(sp,{ruleType:r,handler:c,onChange:s.noop})):a.createElement(sp,{ruleType:r,handler:c,onChange:this.updateHandler}))}updateHandler(e){const{isPaidUser:t,handlerIndex:n,ruleType:r,updateHandler:o}=this.props;!t&&Object(Ni.p)(r,e)?this.demoHandler=e:o(n,e)}};mh([d.observable],Sh.prototype,"demoHandler",void 0),mh([d.action.bound],Sh.prototype,"updateHandler",null),Sh=mh([u.e],Sh);var jh=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i};const kh=p.i.ol`
    padding: 0 40px 20px;
    min-height: calc(100% - 40px);
`;let Ph=class extends a.Component{constructor(){super(...arguments),this.buildDragEndListener=(e,t)=>Object(d.action)(({source:n,destination:r,combine:o})=>{this.currentlyDraggingRuleId=void 0;const{draftRules:i}=this.props;if(o){const t=e[n.index],r=o.draggableId.endsWith("-tail"),s=r?o.draggableId.slice(0,-5):o.draggableId,a=Object(Ct.g)(i,{id:s}),c=Object(Ct.i)(i,a);return void(Object(Ct.k)(c)?this.props.moveRule(t,a.concat(r?c.items.length:0)):this.props.combineRulesAsGroup(t,a))}if(!r){if(this.wasGroupOpenBeforeDrag){const t=e[n.index];Object(Ct.i)(i,t).collapsed=!1}return}const{sourcePath:a,targetPath:c}=function(e,t,n,r){const o=e[n],i=e[r],a=Object(Ct.d)(o,i),c=Object(Ct.j)(t,i),l=s.last(i),d=c.items.length>l?Object(Ct.i)(t,i):void 0,u=o.slice(0,-1),p=i.slice(0,-1);if(d&&Object(Ct.k)(d)&&!d.collapsed&&a>0)return{sourcePath:o,targetPath:i.concat(0)};if(void 0===d&&a>0){const e=p.slice(0,-1),t=s.isEqual(u,e)?0:1;return{sourcePath:o,targetPath:i.slice(0,-2).concat(i[i.length-2]+t)}}if(!s.isEqual(u,p)){const e=s.last(i);return{sourcePath:o,targetPath:a<0?p.concat(e):p.concat(e+1)}}return{sourcePath:o,targetPath:i}}(e,t,n.index,r.index);if(this.props.moveRule(a,c),this.wasGroupOpenBeforeDrag){Object(Ct.i)(i,c).collapsed=!1}})}beforeDrag({draggableId:e}){this.currentlyDraggingRuleId=e;const t=Object(Ct.f)(this.props.draftRules,{id:e});t&&Object(Ct.k)(t)?(this.wasGroupOpenBeforeDrag=!t.collapsed,t.collapsed=!0):this.wasGroupOpenBeforeDrag=void 0}render(){const{draftRules:e,activeRules:t,addRule:n,saveRule:r,resetRule:o,deleteItem:i,cloneItem:c,toggleRuleCollapsed:l,updateGroupTitle:d,getRuleDefaultHandler:p,collapsedRulesMap:h}=this.props,{beforeDrag:m,buildDragEndListener:g,currentlyDraggingRuleId:f}=this,{ruleRows:b,indexMapping:y}=function e(t,n,r,o,i,c,l,d,u,p,h,m=t,g=[],f=0){const b={toggleRuleCollapsed:i,saveRule:c,resetRule:l,cloneRule:d,deleteRule:u,getRuleDefaultHandler:h};return m.items.reduce((m,y,v)=>{const x=g.concat(v);if(Object(Ct.k)(y)){if(m.ruleRows.push(a.createElement(Qd,{key:y.id,group:y,path:x,index:f+m.indexMapping.length,collapsed:!!y.collapsed,updateGroupTitle:p,cloneGroup:d,deleteGroup:u})),m.indexMapping.push(x),y.collapsed)return m;const s=e(t,n,r,o,i,c,l,d,u,p,h,y,x,f+m.indexMapping.length);m.ruleRows.push(...s.ruleRows),m.indexMapping.push(...s.indexMapping),m.ruleRows.push(a.createElement(Zd,{key:y.id+"-tail",group:y,index:f+m.indexMapping.length})),m.indexMapping.push(x.concat(y.items.length))}else{const e=r[y.id],i=function(e,t,n,r){const o=Object(Ct.g)(r,{id:e.id});if(!o)return"new";const i=Object(Ct.j)(n,t),a=Object(Ct.j)(r,o),c=a.items[s.last(o)];if(a.id!==i.id)return"changed";const l=s.intersectionBy(a.items,i.items,"id"),d=s.intersectionBy(i.items,a.items,"id");if(l.indexOf(c)!==d.indexOf(e))return"changed";if(!s.isEqualWith(c,e,Ct.b))return"changed";return!1}(y,x,t,n);m.ruleRows.push(a.createElement(Oh,Object.assign({key:y.id,index:f+m.indexMapping.length,path:x,rule:y,isNewRule:"new"===i,hasUnsavedChanges:!!i,collapsed:e,disabled:void 0!==o&&o!==y.id},b))),m.indexMapping.push(x)}return m},{indexMapping:[],ruleRows:[]})}(e,t,h,f,l,r,o,c,i,d,p);return a.createElement(Fd.a,{onBeforeCapture:m,onDragEnd:g(y,e)},a.createElement(Fd.c,{isCombineEnabled:!0,droppableId:"mock-rule-list"},e=>a.createElement(u.a,null,()=>a.createElement(kh,Object.assign({ref:e.innerRef},e.droppableProps),a.createElement(fh,{onAdd:n,disabled:void 0!==f}),b,e.placeholder))))}};jh([d.observable],Ph.prototype,"currentlyDraggingRuleId",void 0),jh([d.action.bound],Ph.prototype,"beforeDrag",null),Ph=jh([u.e],Ph);var Rh=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},Hh=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))};const qh=p.i.section`
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: stretch;
`,Ah=p.i.div`
    overflow-y: scroll;
    flex-grow: 1;
`,Ih=p.i.header`
    box-sizing: border-box;
    width: 100%;
    padding: 20px calc(40px + 16px) 20px 40px; /* ~16px to match scrollbar below */
    background-color: ${e=>e.theme.containerBackground};
    border-bottom: 1px solid rgba(0,0,0,0.12);
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    align-items: center;
`,Dh=p.i.h1`
    font-size: ${e=>e.theme.loudHeadingSize};
    font-weight: bold;
    flex-grow: 1;
`,$h=Object(p.i)(jn.a)`
    font-size: ${e=>e.theme.textSize};
    font-weight: bold;
    padding: 10px 24px;
    margin-left: 20px;

    svg {
        margin-right: 5px;
    }
`,Mh=Object(p.i)(jn.c)`
    border: none;
    font-size: 1.2em;
    padding: 5px 10px;
    margin-left: 10px;
`;let Fh=class extends a.Component{constructor(){super(...arguments),this.containerRef=a.createRef(),this.collapsedRulesMap=s.fromPairs(Object(Ct.m)(this.props.rulesStore.draftRules,e=>[e.id,e.id!==this.props.initialRuleId])),this.getRuleDefaultHandler=e=>Object(Mo.h)(e,this.props.rulesStore),this.importRules=()=>Hh(this,void 0,void 0,(function*(){const e=yield Object(_t.g)("text",[".htkrules","application/json","application/htkrules+json"]);if(e)try{this.props.rulesStore.loadSavedRules(JSON.parse(e))}catch(e){Object(o.d)(e),alert("Rules could not be imported: "+e)}})),this.exportRules=()=>Hh(this,void 0,void 0,(function*(){const e=JSON.stringify(Object(Md.d)(this.props.rulesStore.draftRules)),t=`HTTPToolkit_${g.format(Date.now(),"YYYY-MM-DD_HH-mm")}.htkrules`;Object(_t.f)(t,Md.b,e)}))}componentDidMount(){Object(u.c)(this,Object(d.autorun)(()=>{const e=Object(Ct.m)(this.props.rulesStore.draftRules,e=>e.id),t=s.keys(this.collapsedRulesMap),n=s.difference(t,e),r=s.difference(e,t);Object(d.runInAction)(()=>{n.forEach(e=>{delete this.collapsedRulesMap[e]}),r.forEach(e=>{this.collapsedRulesMap[e]=!0})})}));const{initialRuleId:e}=this.props,t=this.containerRef.current;if(e&&t){const n=t.querySelector(`[data-rbd-draggable-id="${e}"]`);requestAnimationFrame(()=>null==n?void 0:n.scrollIntoView())}}render(){const{rules:e,draftRules:t,areSomeRulesUnsaved:n,areSomeRulesNonDefault:r,deleteDraftItem:o,moveDraftRule:s,updateGroupTitle:i,combineDraftRulesAsGroup:c}=this.props.rulesStore,{isPaidUser:l}=this.props.accountStore;return a.createElement(qh,{ref:this.containerRef},a.createElement(Ih,null,a.createElement(Dh,null,"Mock & Rewrite HTTP"),a.createElement(Mh,{disabled:!r,onClick:this.resetToDefaults,onKeyPress:Gt,title:"Reset rules to default"},a.createElement(zt.b,{icon:["far","trash-alt"]})),a.createElement(Mh,{disabled:!l,onClick:this.importRules,onKeyPress:Gt,title:l?"Import a saved set of rules":"With Pro: Import a set of saved rules, so you can build your own ready-to-use collections of predefined rules"},a.createElement(zt.b,{icon:["fas","folder-open"]})),a.createElement(Mh,{disabled:!l||!r||0===t.items.length,onClick:this.exportRules,onKeyPress:Gt,title:l?"Export these rules":"With Pro: Export these rules, to save them for quick reuse later"},a.createElement(zt.b,{icon:["fas","download"]})),a.createElement(Mh,{disabled:!n,onClick:this.resetRuleDrafts,onKeyPress:Gt,title:"Revert changes since the last save"},a.createElement(zt.b,{icon:["fas","undo"]})),a.createElement($h,{disabled:!n,onClick:this.saveAll,onKeyPress:Gt,title:"Save all rule changes"},a.createElement(zt.b,{icon:["fas","save"]})," Save changes")),a.createElement(Ah,null,a.createElement(Ph,{activeRules:e,draftRules:t,collapsedRulesMap:this.collapsedRulesMap,addRule:this.addRule,saveRule:this.saveRule,resetRule:this.resetRule,cloneItem:this.cloneItem,deleteItem:o,toggleRuleCollapsed:this.toggleRuleCollapsed,updateGroupTitle:i,getRuleDefaultHandler:this.getRuleDefaultHandler,moveRule:s,combineRulesAsGroup:c})))}collapseAll(){Object.keys(this.collapsedRulesMap).forEach(e=>{this.collapsedRulesMap[e]=!0})}saveRule(e){const t=this.props.rulesStore.saveItem(e);this.collapsedRulesMap[t.id]=!0}resetRule(e){this.props.rulesStore.resetRule(e)}cloneItem(e){const t=this.props.rulesStore.draftRules,n=Object(Ct.c)(Object(Ct.i)(t,e));Object(Ct.k)(n)?n.collapsed=!0:this.collapsedRulesMap[n.id]=!0;const r=s.last(e);this.props.rulesStore.addDraftItem(n,[...e.slice(0,-1),r+1])}saveAll(){this.props.rulesStore.saveRules(),this.collapseAll()}resetToDefaults(){confirm("Reset all rules?")&&(this.props.rulesStore.resetRulesToDefault(),this.collapseAll())}resetRuleDrafts(){this.props.rulesStore.resetRuleDrafts(),this.collapseAll()}addRule(){const e=Object(Mo.g)(this.props.rulesStore);this.collapsedRulesMap[e.id]=!1,this.props.rulesStore.addDraftItem(e),setTimeout(()=>{const e=this.containerRef.current;if(!e)return;const t=e.querySelector("ol > section:nth-child(2) select");t&&t.focus()},100)}toggleRuleCollapsed(e){this.collapsedRulesMap[e]=!this.collapsedRulesMap[e]}};Rh([d.observable],Fh.prototype,"collapsedRulesMap",void 0),Rh([d.action.bound],Fh.prototype,"collapseAll",null),Rh([d.action.bound],Fh.prototype,"saveRule",null),Rh([d.action.bound],Fh.prototype,"resetRule",null),Rh([d.action.bound],Fh.prototype,"cloneItem",null),Rh([d.action.bound],Fh.prototype,"saveAll",null),Rh([d.action.bound],Fh.prototype,"resetToDefaults",null),Rh([d.action.bound],Fh.prototype,"resetRuleDrafts",null),Rh([d.action.bound],Fh.prototype,"addRule",null),Rh([d.action.bound],Fh.prototype,"toggleRuleCollapsed",null),Fh=Rh([Object(u.d)("rulesStore"),Object(u.d)("accountStore"),u.e],Fh);const Bh=Fh;var Nh=n(100),Lh=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};const Uh=p.i.div`
    overflow-y: auto;

    flex-grow: 1;
    flex-shrink: 1;

    margin: 0 -20px -20px -20px;
    padding: 0 20px 20px 20px;
`,Wh=Object(u.e)(e=>{var{headers:t,updateHeaders:n}=e,r=Lh(e,["headers","updateHeaders"]);return a.createElement(Nh.b,Object.assign({},r,{headerAlignment:"left"}),a.createElement("header",null,a.createElement(_i.a,null,a.createElement(Vi.a,{expanded:r.expanded,onClick:r.onExpandToggled})),a.createElement(Yt.c,{onCollapseToggled:r.onCollapseToggled},"Request Headers")),a.createElement(Uh,null,a.createElement(Pl,{headers:t,onChange:n})))});var zh=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i};let _h=class extends a.Component{constructor(){super(...arguments),this.contentType="text",this.updateBody=e=>{this.props.onBodyUpdated(Object(M.l)(e,this.textEncoding))}}onChangeContentType(e){this.contentType=e}get textEncoding(){return Object(M.h)(this.props.body)?"utf8":"binary"}render(){const{editorNode:e,expanded:t,onExpandToggled:n,onCollapseToggled:r,body:o}=this.props,s=Object(M.c)(o,this.textEncoding);return a.createElement(Nh.a,Object.assign({},this.props,{headerAlignment:"left"}),a.createElement("header",null,a.createElement(Ki.c,{body:o,onBodyFormatted:this.updateBody,title:"Request body",expanded:t,onExpandToggled:n,onCollapseToggled:r,selectedContentType:this.contentType,contentTypeOptions:Gi.a,onChangeContentType:this.onChangeContentType})),a.createElement(Ki.b,null,a.createElement($o.b,{node:e,contentId:"request",language:this.contentType,value:s,onChange:this.updateBody})))}};zh([d.observable],_h.prototype,"contentType",void 0),zh([d.action.bound],_h.prototype,"onChangeContentType",null),zh([d.computed],_h.prototype,"textEncoding",null),_h=zh([u.e],_h);var Vh=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},Gh=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))};const Jh=p.i.section`
    display: flex;
    flex-direction: column;
    height: 100%;

    ${e=>e.hasExpandedChild&&p.e`
        > * {
            /* CollapsibleCard applies its own display property to override this for the expanded card */
            display: none;
        }
    `}
`,Kh=Object.values(ut.Method).filter(e=>"string"==typeof e),Yh=Object(p.i)(jn.d)`
    font-size: ${e=>e.theme.textSize};
    display: inline-block;
    width: auto;
`,Qh=Object(p.i)(jn.e)`
`;let Xh=class extends a.Component{get cardProps(){return this.props.uiStore.sendCardProps}render(){const{requestInput:e,editorNode:t,uiStore:n}=this.props;return a.createElement(Jh,{hasExpandedChild:!!(null==n?void 0:n.expandedSendRequestCard)},a.createElement(Yh,{value:e.method,onChange:this.updateMethod},Kh.map(e=>a.createElement("option",{key:e,value:e},e))),a.createElement(Qh,{placeholder:"https://example.com/hello?name=world",value:e.url,onChange:this.updateUrl}),a.createElement(jn.a,{onClick:this.sendRequest},"Send ",a.createElement(zt.b,{icon:["far","paper-plane"]})),a.createElement(Wh,Object.assign({},this.cardProps.requestHeaders,{headers:e.headers,updateHeaders:this.updateHeaders})),a.createElement(_h,Object.assign({},this.cardProps.requestBody,{body:e.rawBody,onBodyUpdated:this.updateBody,editorNode:t})))}updateMethod(e){const{requestInput:t}=this.props;t.method=e.target.value}updateUrl(e){const{requestInput:t}=this.props;t.url=e.target.value}updateHeaders(e){const{requestInput:t}=this.props;t.headers=e}updateBody(e){const{requestInput:t}=this.props;t.rawBody=e}sendRequest(){return Gh(this,void 0,void 0,(function*(){this.props.sendRequest(this.props.requestInput)}))}};Vh([d.action.bound],Xh.prototype,"updateMethod",null),Vh([d.action.bound],Xh.prototype,"updateUrl",null),Vh([d.action.bound],Xh.prototype,"updateHeaders",null),Vh([d.action.bound],Xh.prototype,"updateBody",null),Vh([d.action.bound],Xh.prototype,"sendRequest",null),Xh=Vh([Object(u.d)("rulesStore"),Object(u.d)("uiStore"),u.e],Xh);var Zh=n(127);const em=e=>{const t=e.exchange.response;return a.createElement(Nh.b,{collapsed:!1},a.createElement("header",null,a.createElement(Qt.a,{color:Object(N.e)(t.statusCode,e.theme)},t.statusCode,": ",t.statusMessage||Object(F.d)(t.statusCode)),a.createElement(Qt.a,{title:"The size of the raw encoded response body"},Object(B.a)(t.body.encoded.byteLength)),a.createElement(Dc,{timingEvents:e.exchange.timingEvents})))};var tm=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};const nm=e=>{var{requestUrl:t,headers:n}=e,r=tm(e,["requestUrl","headers"]);return a.createElement(Nh.b,Object.assign({},r),a.createElement("header",null,a.createElement(_i.a,null,a.createElement(Vi.a,{expanded:r.expanded,onClick:r.onExpandToggled})),a.createElement(Yt.c,{onCollapseToggled:r.onCollapseToggled},"Response Headers")),a.createElement(ic,{requestUrl:t,headers:n}))};var rm=n(669),om=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i};const sm=p.i.section`
    display: flex;
    flex-direction: column;
    height: 100%;

    ${e=>e.hasExpandedChild&&p.e`
        > * {
            /* CollapsibleCard applies its own display property to override this for the expanded card */
            display: none;
        }
    `}
`;let im=class extends a.Component{get cardProps(){return this.props.uiStore.sendCardProps}render(){const{exchange:e,uiStore:t}=this.props;return e?a.createElement(sm,{hasExpandedChild:!!(null==t?void 0:t.expandedSentResponseCard)},e.isSuccessfulExchange()?this.renderSuccessfulResponse(e):e.isCompletedExchange()?this.renderAbortedResponse(e):this.renderInProgressResponse()):null}renderSuccessfulResponse(e){const{uiStore:t,editorNode:n}=this.props,r=e.response;return a.createElement(a.Fragment,null,a.createElement(em,{exchange:e,theme:t.theme}),a.createElement(nm,Object.assign({},this.cardProps.responseHeaders,{requestUrl:e.request.parsedUrl,headers:r.rawHeaders})),a.createElement(rm.a,Object.assign({},this.cardProps.responseBody,{isPaidUser:this.props.accountStore.isPaidUser,url:e.request.url,message:r,editorNode:n})))}renderAbortedResponse(e){return a.createElement(yc,{cardProps:this.cardProps.responseHeaders,exchange:e})}renderInProgressResponse(){return a.createElement(Zh.a,Object.assign({},this.cardProps.responseHeaders),a.createElement("header",null,a.createElement("h1",null,"Response...")))}};im=om([Object(u.d)("uiStore"),Object(u.d)("accountStore"),u.e],im);var am=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i};const cm=p.i.div`
    height: 100vh;
    position: relative;
`;let lm=class extends a.Component{constructor(){super(...arguments),this.requestEditorNode=$o.c({attributes:{style:"height: 100%"}}),this.responseEditorNode=$o.c({attributes:{style:"height: 100%"}})}render(){const{requestInput:e,sendRequest:t,sentExchange:n}=this.props.sendStore;return a.createElement(cm,null,a.createElement(Bo,{split:"vertical",primary:"second",defaultSize:"50%",minSize:300,maxSize:-300},a.createElement(Xh,{requestInput:e,sendRequest:t,editorNode:this.requestEditorNode}),a.createElement(im,{exchange:n,editorNode:this.responseEditorNode})),a.createElement($o.a,{node:this.requestEditorNode},a.createElement(es,{contentId:null})),a.createElement($o.a,{node:this.responseEditorNode},a.createElement(es,{contentId:null})))}};lm=am([Object(u.d)("sendStore"),u.e],lm);const dm=p.i.div`
    display: flex;
    flex-direction: row;
`,um=Object(p.i)(e=>a.createElement("nav",Object.assign({},Object(s.omit)(e,"isSelected"),{onClick:t=>{t.tabValue&&e.onClick(t.tabValue)}}),e.children.map(t=>a.cloneElement(t,{key:t.props.value,selected:e.isSelected(t.props.value)}))))`
    width: 80px;
    border-right: solid 2px ${e=>e.theme.containerBackground};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`,pm=Object(p.i)(e=>a.createElement(jn.f,{className:e.className,onClick:t=>{t.tabValue=e.value}},a.createElement(zt.b,{icon:e.icon,size:"2x"}),e.children))`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;

    width: 100%;
    font-size: ${e=>e.theme.textSize};
    box-sizing: border-box;

    padding: 10px 20px 10px 0;

    user-select: none;
    &:hover, &:focus {
        outline: none;
        color: ${e=>e.theme.popColor};
    }

    opacity: 0.6;
    ${e=>e.selected&&p.e`
        opacity: 1;
        font-weight: bold;
        border-right: solid 3px ${e.theme.popColor};
        padding-right: 22px;
        position: relative;
        right: -2px;
    `}

    > svg {
        margin-bottom: 10px;
    }
`;var hm=n(252);const mm=p.e`
    font-size: ${e=>e.theme.textSize};
    padding: 6px 16px;

    ${e=>e.highlight&&p.e`
        &:not(:disabled) {
            background-color: ${e=>e.theme.popColor};
        }
    `}
`,gm=Object(p.i)(jn.a)`${mm}`,fm=Object(p.i)(jn.b)`${mm}`,bm=p.i.p`
    font-style: italic;
    line-height: 1.3;
`,ym=Object(p.i)(ln.c)`
    &:not(header + &) {
        margin-top: 40px;
    }
`;var vm=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i};const xm=p.i.div`
    width: 100%;

    display: grid;
    grid-template-columns: auto min-content;
    grid-gap: 10px;
    margin: 10px 0;

    align-items: baseline;

    ${jn.e} {
        align-self: stretch;
    }
`,wm=p.i.div`
    min-width: 300px;
    font-family: ${e=>e.theme.monoFontFamily};
`;let Em=class extends a.Component{constructor(){super(...arguments),this.inputValue=""}render(){const{values:e,onDelete:t,placeholder:n}=this.props;return a.createElement(xm,null,e.map(e=>[a.createElement(wm,{key:"value-"+e},e),a.createElement(gm,{key:"delete-"+e,onClick:()=>t(e)},a.createElement(zt.b,{icon:["far","trash-alt"]}))]),a.createElement(jn.e,{placeholder:n,value:this.inputValue,onChange:this.changeInput}),a.createElement(gm,{disabled:!ft(this.inputValue)||e.includes(this.inputValue),onClick:this.addHost},a.createElement(zt.b,{icon:["fas","plus"]})))}addHost(e){this.props.onAdd(this.inputValue),this.inputValue=""}changeInput(e){this.inputValue=e.target.value,this.props.validationFn(e.target)}};vm([d.observable],Em.prototype,"inputValue",void 0),vm([d.action.bound],Em.prototype,"addHost",null),vm([d.action.bound],Em.prototype,"changeInput",null),Em=vm([u.e],Em);var Cm=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},Tm=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};const Om=Object(p.i)(gm).attrs(()=>({children:"Restart app to activate",onClick:()=>window.location.reload()}))`
    position: absolute;
    top: 18px;
    left: 20px;
    font-weight: bold;

    &:not(:disabled) {
        background-color: ${e=>e.theme.popColor};
    }

    ${e=>!e.visible&&"display: none;"}
`,Sm=Object(p.i)(zt.b).attrs(()=>({icon:["fas","save"]}))`
    margin-left: 10px;
    color: ${e=>e.theme.warningColor};
`,jm=p.i.div`
    display: grid;
    grid-template-columns: fit-content(45%) fit-content(45%) fit-content(10%);
    align-items: baseline;

    grid-gap: 10px;
    margin-bottom: 10px;

    input {
        padding: 5px 10px;
        border-radius: 4px;
        border: solid 1px ${e=>e.theme.containerBorder};

        & + ${zt.e} {
            visibility: hidden;
            align-self: center;
        }

        &:invalid {
            border-color: ${e=>e.theme.warningColor};
            background-color: ${e=>e.theme.warningBackground};
            color: ${e=>e.theme.mainColor};

            & + ${zt.e} {
                visibility: visible;
            }
        }
    }
`,km=p.i.p`
    margin-bottom: 10px;
`,Pm=Object(p.i)(jn.d)`
    display: inline-block;
    margin-top: 10px;
    width: auto;
    font-size: ${e=>e.theme.textSize};
    padding: 3px;
`,Rm=Kt((function(e){return!!(null==e?void 0:e.match(/^[A-Za-z0-9\-.]+$/))}),"Should be a valid hostname");let Hm=class extends a.Component{constructor(){var e,t;super(...arguments),this.minPortValue=((null===(e=this.props.proxyStore.portConfig)||void 0===e?void 0:e.startPort)||8e3).toString(),this.maxPortValue=((null===(t=this.props.proxyStore.portConfig)||void 0===t?void 0:t.endPort)||65535).toString()}onMinPortChange({target:{value:e}}){this.minPortValue=e,this.updatePortConfig()}onMaxPortChange({target:{value:e}}){this.maxPortValue=e,this.updatePortConfig()}get isCurrentPortInRange(){const{httpProxyPort:e,portConfig:t}=this.props.proxyStore;return t?e>=t.startPort&&e<=t.endPort:e>=8e3}get portConfig(){return{startPort:parseInt(this.minPortValue,10),endPort:parseInt(this.maxPortValue,10)}}get isCurrentPortConfigValid(){return wt(this.portConfig)}updatePortConfig(){this.isCurrentPortConfigValid&&this.props.proxyStore.setPortConfig(this.portConfig)}addTlsPassthroughHostname(e){const{tlsPassthroughConfig:t}=this.props.proxyStore;t.push({hostname:e})}removeTlsPassthroughHostname(e){const{tlsPassthroughConfig:t}=this.props.proxyStore,n=s.findIndex(t,t=>t.hostname===e);-1!==n&&t.splice(n,1)}render(){const e=this.props,{proxyStore:t}=e,n=Tm(e,["proxyStore"]),{httpProxyPort:r,http2Enabled:o,http2CurrentlyEnabled:i,tlsPassthroughConfig:c,currentTlsPassthroughConfig:l}=t;return a.createElement(Yt.b,Object.assign({},n),a.createElement("header",null,a.createElement(Yt.c,{onCollapseToggled:n.onCollapseToggled},"Proxy Settings")),a.createElement(Om,{visible:this.isCurrentPortConfigValid&&!this.isCurrentPortInRange||o!==i||!s.isEqual(c,l)}),a.createElement(jm,null,a.createElement(ln.c,null,"Minimum port"),a.createElement("input",{type:"number",required:!0,min:"1",max:"65535",value:this.minPortValue,onChange:this.onMinPortChange}),a.createElement(zt.e,null),a.createElement(ln.c,null,"Maximum port"),a.createElement("input",{type:"number",required:!0,min:this.minPortValue,max:"65535",value:this.maxPortValue,onChange:this.onMaxPortChange}),a.createElement(zt.e,null)),a.createElement(km,null,"The proxy is currently using port ",a.createElement("strong",null,r),this.isCurrentPortConfigValid&&!this.isCurrentPortInRange?", outside this range. Restart the app now to use this configuration.":"."),a.createElement(bm,null,"When opening HTTP Toolkit, it will start the proxy on the first port in this range that is available. If all ports in the range are in use, the first free port above 8000 will be used instead."),Object(f.F)(f.E.value,f.x)&&a.createElement(a.Fragment,null,a.createElement(ym,null,"TLS Passthrough ",!s.isEqual(c,l)&&a.createElement(Sm,null)),a.createElement(Em,{values:c.map(e=>e.hostname),onAdd:this.addTlsPassthroughHostname,onDelete:this.removeTlsPassthroughHostname,placeholder:"A hostname whose TLS connections should not be intercepted",validationFn:Rm}),a.createElement(bm,null,"Incoming TLS connections to these hostnames will bypass HTTP Toolkit, and will be forwarded upstream untouched instead of being intercepted. Clients will not see HTTP Toolkit's certificate, which may solve some connection issues, but traffic within these TLS connections will not be accessible.")),Object(f.F)(f.E.value,f.l)&&a.createElement(a.Fragment,null,a.createElement(ym,null,"HTTP/2 Support ",o!==i&&a.createElement(Sm,null)),a.createElement(Pm,{value:JSON.stringify(o),onChange:Object(d.action)(e=>{const n=e.currentTarget.value;n&&(t.http2Enabled=JSON.parse(n))})},a.createElement("option",{value:"true"},"Enabled for all clients"),a.createElement("option",{value:'"fallback"'},"Enabled only for HTTP/2-only clients"),a.createElement("option",{value:"false"},"Disabled for all clients"))))}};Cm([d.observable],Hm.prototype,"minPortValue",void 0),Cm([d.observable],Hm.prototype,"maxPortValue",void 0),Cm([d.action.bound],Hm.prototype,"onMinPortChange",null),Cm([d.action.bound],Hm.prototype,"onMaxPortChange",null),Cm([d.computed],Hm.prototype,"isCurrentPortInRange",null),Cm([d.computed],Hm.prototype,"portConfig",null),Cm([d.computed],Hm.prototype,"isCurrentPortConfigValid",null),Cm([d.action.bound],Hm.prototype,"addTlsPassthroughHostname",null),Cm([d.action.bound],Hm.prototype,"removeTlsPassthroughHostname",null),Hm=Cm([Object(u.d)("proxyStore"),u.e],Hm);var qm=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},Am=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};const Im=p.i.div`
    margin-top: 10px;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    > ${ym}, > ${bm} {
        flex-basis: 100%;
    }

    > ${zt.e} {
        align-self: center;
    }

    > ${jn.e} {
        flex-grow: 1;
    }

    > ${gm} {
        margin-left: 10px;
    }
`,Dm=Object(p.i)(jn.d)`
    width: auto;
    font-size: ${e=>e.theme.textSize};
    padding: 3px;

    margin-right: 10px;
`,$m=Kt(ft,"Should be a plain hostname, optionally with a specific port"),Mm=e=>!!(null==e?void 0:e.match(/^([^/@]*@)?[A-Za-z0-9\-.]+(:\d+)?$/)),Fm=Kt(Mm,"Should be a plain hostname, optionally with a specific port and/or username:password");let Bm=class extends a.Component{constructor(){super(...arguments),this.proxyType=this.props.rulesStore.upstreamProxyType,this.proxyHostInput=this.props.rulesStore.upstreamProxyHost||""}setProxyType(e){const t=e.currentTarget.value;if(this.proxyType=t,j({category:"Config",action:"Set Proxy",value:this.proxyType}),"direct"===t||"system"===t){this.props.rulesStore.upstreamProxyType=this.proxyType}}setProxyHostInput(e){Fm(e.target),this.proxyHostInput=e.target.value}saveProxyHost(){if("direct"===this.proxyType||"system"===this.proxyType)throw new Error(`Can't save proxy host for ${this.proxyType} proxy`);const e=this.props.rulesStore;e.upstreamProxyType=this.proxyType,e.upstreamProxyHost=this.proxyHostInput}addNoProxyHost(e){const{rulesStore:t}=this.props;t.upstreamNoProxyHosts=[...t.upstreamNoProxyHosts,e]}removeNoProxyHost(e){const{rulesStore:t}=this.props;t.upstreamNoProxyHosts=s.without(t.upstreamNoProxyHosts,e)}render(){const{effectiveSystemProxyConfig:e,upstreamProxyType:t,upstreamProxyHost:n,upstreamNoProxyHosts:r}=this.props.rulesStore,{proxyType:o,proxyHostInput:s,setProxyType:i,setProxyHostInput:c,saveProxyHost:l,addNoProxyHost:d,removeNoProxyHost:u}=this;return a.createElement(a.Fragment,null,a.createElement(ym,null,"Upstream Proxy"),a.createElement(Im,null,a.createElement(Dm,{value:o,onChange:i},a.createElement("option",{value:"system"},"Use system settings"),a.createElement("option",{value:"direct"},"Connect directly"),a.createElement("option",{value:"http"},"Use an HTTP proxy"),a.createElement("option",{value:"https"},"Use an HTTPS proxy"),a.createElement("option",{value:"socks4"},"Use a SOCKS 4 proxy"),a.createElement("option",{value:"socks4a"},"Use a SOCKS 4a proxy"),a.createElement("option",{value:"socks5"},"Use a SOCKS 5 proxy"),a.createElement("option",{value:"socks5h"},"Use a SOCKS 5h proxy")),"system"===o&&("ignored"===e||"unparseable"===e)&&a.createElement(zt.e,null),"system"===o&&e&&a.createElement(bm,null,"ignored"===e?a.createElement(a.Fragment,null,"The system is configured with a localhost proxy. To avoid issues with recursive proxy loops, this will be ignored and requests will be sent directly. Localhost proxies must be manually configured."):"unparseable"===e?a.createElement(a.Fragment,null,"The system proxy settings could not be parsed, so requests will be sent directly."):a.createElement(a.Fragment,null,"The configured system proxy is ",e.proxyUrl,".")),"direct"!==o&&"system"!==o&&a.createElement(a.Fragment,null,a.createElement(jn.e,{placeholder:`The ${o} proxy host details, e.g. example.com or user:pwd@example.com:8080`,value:s,onChange:c}),a.createElement(gm,{disabled:!Mm(s)||s===n&&o===t,onClick:l},a.createElement(zt.b,{icon:["fas","save"]})))),"direct"!==o&&"system"!==o&&a.createElement(a.Fragment,null,a.createElement(ym,null,"Non-proxied hosts"),a.createElement(Em,{placeholder:"A host whose traffic should not be sent via the proxy",onAdd:d,onDelete:u,values:r,validationFn:$m}),a.createElement(bm,null,"Requests to these hosts will always be sent directly, not via the configured proxy.")))}};qm([d.observable],Bm.prototype,"proxyType",void 0),qm([d.action.bound],Bm.prototype,"setProxyType",null),qm([d.observable],Bm.prototype,"proxyHostInput",void 0),qm([d.action.bound],Bm.prototype,"setProxyHostInput",null),qm([d.action.bound],Bm.prototype,"saveProxyHost",null),qm([d.action.bound],Bm.prototype,"addNoProxyHost",null),qm([d.action.bound],Bm.prototype,"removeNoProxyHost",null),Bm=qm([u.e],Bm);const Nm=p.i.div`
    display: grid;
    grid-template-columns: 1fr 1fr min-content;
    grid-gap: 10px;
    margin: 10px 0;

    align-items: baseline;

    ${jn.e} {
        align-self: stretch;
    }

    input[type=file] {
        display: none;
    }
`,Lm=p.i.div`
    font-style: italic;
`,Um=p.i.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;

    > :first-child {
        flex: 1 1;
    }

    > button {
        margin-left: 10px;
    }

    > svg {
        flex: 1 1 100%;
        text-align: center;
    }
`,Wm=Object(p.i)(zt.b).attrs(()=>({icon:["fas","spinner"],spin:!0}))`
    margin: 0 auto;
`;let zm=class extends a.Component{constructor(){super(...arguments),this.clientCertHostInput="",this.certFileInputRef=a.createRef(),this.decryptClientCertData=Object(d.flow)((function*(){const{pfx:e,passphrase:t}=this.clientCertData;this.clientCertState="processing",this.clientCertError=void 0;const n=yield Object(to.g)(e,t);this.handleClientCertValidationResult(n)}))}removeClientCertificate(e){const{clientCertificateHostMap:t}=this.props.rulesStore;delete t[e]}addClientCertificate(){const{clientCertificateHostMap:e}=this.props.rulesStore;e[this.clientCertHostInput]=this.clientCertData,j({category:"Config",action:"Add Client Cert"}),this.clientCertHostInput="",this.clientCertData=void 0,this.clientCertState=void 0}onClientCertSelected(e){const t=e.target;if(!t.files||!t.files.length)return;const n=t.files[0],r=new FileReader;r.readAsArrayBuffer(n),this.clientCertState="processing",this.clientCertError=void 0;const o=this;r.addEventListener("load",Object(d.flow)((function*(){let e;o.clientCertData={pfx:r.result,filename:n.name},e=yield Object(to.g)(o.clientCertData.pfx,void 0),"invalid-passphrase"===e?(e=yield Object(to.g)(o.clientCertData.pfx,""),"valid"===e&&(o.clientCertData.passphrase=""),o.handleClientCertValidationResult(e)):o.handleClientCertValidationResult(e)}))),r.addEventListener("error",()=>{o.clientCertState="error"})}handleClientCertValidationResult(e){this.clientCertError=void 0,"valid"===e?this.clientCertState="decrypted":"invalid-passphrase"===e?this.clientCertState="encrypted":"invalid-format"===e?(this.clientCertState="error",this.clientCertError="Parsing failed"):"missing-key"===e?(this.clientCertState="error",this.clientCertError="No private key found"):"missing-cert"===e?(this.clientCertState="error",this.clientCertError="No certificate found"):Object(D.d)(e)}dropClientCertData(){this.clientCertData=void 0,this.clientCertState=void 0}render(){const{clientCertificateHostMap:e}=this.props.rulesStore;return a.createElement(a.Fragment,null,a.createElement(ym,null,"Client Certificates"),a.createElement(Nm,null,Object.entries(e).map(([e,t])=>[a.createElement(wm,{key:"host-"+e},e),a.createElement(Lm,{key:"filename-"+e},t.filename),a.createElement(gm,{key:"delete-"+e,onClick:()=>this.removeClientCertificate(e)},a.createElement(zt.b,{icon:["far","trash-alt"]}))]),a.createElement(jn.e,{placeholder:"A host where the certificate should be used",value:this.clientCertHostInput,onChange:Object(d.action)(e=>{this.clientCertHostInput=e.target.value,$m(e.target)})}),void 0===this.clientCertState?a.createElement(a.Fragment,null,a.createElement(gm,{onClick:()=>this.certFileInputRef.current.click()},"Load a client certificate"),a.createElement("input",{ref:this.certFileInputRef,type:"file",accept:".pfx,.p12,application/x-pkcs12",onChange:this.onClientCertSelected})):"processing"===this.clientCertState?a.createElement(Wm,null):"decrypted"===this.clientCertState?a.createElement(Um,null,a.createElement(Lm,null,this.clientCertData.filename),a.createElement(gm,{onClick:this.dropClientCertData},a.createElement(zt.b,{icon:["fas","undo"],title:"Deselect this certificate"}))):"encrypted"===this.clientCertState?a.createElement(Um,null,a.createElement(jn.e,{placeholder:"The passphrase for "+this.clientCertData.filename,value:this.clientCertData.passphrase||"",onChange:Object(d.action)(e=>{this.clientCertData.passphrase=e.target.value})}),a.createElement(gm,{onClick:()=>this.decryptClientCertData()},a.createElement(zt.b,{icon:["fas","unlock"],title:"Decrypt with this passphrase"})),a.createElement(gm,{onClick:this.dropClientCertData},a.createElement(zt.b,{icon:["fas","undo"],title:"Deselect this certificate"}))):"error"===this.clientCertState?a.createElement(Um,null,a.createElement("p",null,a.createElement(zt.e,null)," ",this.clientCertError||"Invalid certificate"),a.createElement(gm,{onClick:this.dropClientCertData},a.createElement(zt.b,{icon:["fas","undo"],title:"Deselect this certificate"}))):Object(D.d)(this.clientCertState),a.createElement(gm,{disabled:!ft(this.clientCertHostInput)||"decrypted"!==this.clientCertState||!!e[this.clientCertHostInput],onClick:this.addClientCertificate},a.createElement(zt.b,{icon:["fas","plus"]}))),a.createElement(bm,null,"These certificates will be used for client TLS authentication, if requested by the server, when connecting to their corresponding hostname."))}};qm([d.observable],zm.prototype,"clientCertHostInput",void 0),qm([d.action.bound],zm.prototype,"removeClientCertificate",null),qm([d.action.bound],zm.prototype,"addClientCertificate",null),qm([d.observable],zm.prototype,"clientCertData",void 0),qm([d.observable],zm.prototype,"clientCertState",void 0),qm([d.observable],zm.prototype,"clientCertError",void 0),qm([d.action.bound],zm.prototype,"onClientCertSelected",null),qm([d.action.bound],zm.prototype,"dropClientCertData",null),zm=qm([u.e],zm);const _m=p.i.div`
    display: grid;
    grid-template-columns: 1fr min-content;
    grid-gap: 10px;
    margin: 10px 0;

    align-items: baseline;

    input[type=file] {
        display: none;
    }
`,Vm=p.i.div`
    font-style: italic;
`,Gm=Object(p.i)(gm)`
    grid-column: 1 / span 2;
`;let Jm=class extends a.Component{constructor(){super(...arguments),this.certFileButtonRef=a.createRef(),this.addCertificate=Object(d.flow)(function*(){const{rulesStore:e}=this.props,t=this.certFileButtonRef.current;try{const n=yield Object(_t.g)("arraybuffer",[".pem",".crt",".cert",".der","application/x-pem-file","application/x-x509-ca-cert"]),r=yield Object(to.e)(n);if(e.additionalCaCertificates.some(({rawPEM:e})=>e===r.rawPEM))return t.setCustomValidity("This CA is already trusted."),void t.reportValidity();e.additionalCaCertificates.push(r)}catch(e){console.warn(e);const n=Object(D.b)(e).message;t.setCustomValidity(`Could not load certificate: ${n}${n.endsWith(".")?"":"."} File must be a PEM or DER-formatted CA certificate.`),t.reportValidity()}}.bind(this))}removeCertificate(e){const{rulesStore:t}=this.props;s.pull(t.additionalCaCertificates,e)}render(){const{additionalCaCertificates:e}=this.props.rulesStore;return a.createElement(a.Fragment,null,a.createElement(ym,null,"Trusted CA Certificates"),a.createElement(_m,null,e.map(e=>{const{subject:{org:t,name:n},serial:r}=e;return[a.createElement(Vm,{key:r},[t&&(!n||n.length<=5)?t:void 0,n,r?`(serial ${r})`:void 0].filter(e=>!!e).join(" ")),a.createElement(gm,{key:"delete-"+r,onClick:()=>this.removeCertificate(e)},a.createElement(zt.b,{icon:["far","trash-alt"]}))]}),a.createElement(Gm,{onClick:this.addCertificate,type:"submit",ref:this.certFileButtonRef},"Load a CA certificate")),a.createElement(bm,null,"These Certificate Authority (CA) certificates will be considered as trusted certificate roots for all HTTPS requests, in addition to the existing set of built-in trusted CAs."))}};qm([d.action.bound],Jm.prototype,"removeCertificate",null),Jm=qm([u.e],Jm);let Km=class extends a.Component{unwhitelistHost(e){const{whitelistedCertificateHosts:t}=this.props.rulesStore,n=t.indexOf(e);n>-1&&t.splice(n,1)}addHostToWhitelist(e){this.props.rulesStore.whitelistedCertificateHosts.push(e),j({category:"Config",action:"Whitelist Host"})}render(){const e=this.props,{rulesStore:t}=e,n=Am(e,["rulesStore"]),{whitelistedCertificateHosts:r}=t;return a.createElement(Yt.b,Object.assign({},n),a.createElement("header",null,a.createElement(Yt.c,{onCollapseToggled:n.onCollapseToggled},"Connection Settings")),s.isString(f.E.value)&&Object(f.F)(f.E.value,f.s)&&a.createElement(Bm,{rulesStore:t}),s.isString(f.E.value)&&Object(f.F)(f.E.value,f.e)&&a.createElement(Jm,{rulesStore:t}),s.isString(f.E.value)&&Object(f.F)(f.E.value,f.b)&&a.createElement(a.Fragment,null,a.createElement(zm,{rulesStore:t})),a.createElement(ym,null,"Host HTTPS Whitelist"),a.createElement(Em,{placeholder:"A host to exclude from strict HTTPS checks",onAdd:this.addHostToWhitelist,onDelete:this.unwhitelistHost,values:r,validationFn:$m}),a.createElement(bm,null,"Requests to these hosts will skip certificate validation and accept some older TLS configurations. These requests will be successful regardless of any self-signed, expired or otherwise invalid HTTPS configurations."))}};qm([d.action.bound],Km.prototype,"unwhitelistHost",null),qm([d.action.bound],Km.prototype,"addHostToWhitelist",null),Km=qm([Object(u.d)("rulesStore"),u.e],Km);var Ym=n(244),Qm=n(670),Xm=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},Zm=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};const eg=Object(p.i)(gm).attrs(()=>({type:"submit"}))`
    grid-column: 1 / span 3;
`,tg=Object(p.i)(jn.e)`
    align-self: stretch;
`,ng=p.i.div`
    font-family: ${e=>e.theme.monoFontFamily};
`,rg=p.i.div`
    grid-column: 2;
    font-style: italic;

    display: flex;
    align-items: baseline;
`,og=Object(p.i)(gm)`
    margin-left: auto;
`,sg=Object(p.i)(gm)``,ig=Object(p.i)(gm)``,ag=p.i.div`
    display: grid;
    grid-template-columns: 1fr 1fr min-content;
    grid-gap: 10px;
    margin: 10px 0;
    align-items: baseline;
`;function cg(e,t){e.setCustomValidity(t||""),e.reportValidity()}let lg=class extends a.Component{constructor(){super(...arguments),this.uploadSpecButtonRef=a.createRef(),this.specProcessingInProgress=!1,this.enteredBaseUrl="",this.baseUrlInputRef=a.createRef(),this.uploadSpec=Object(d.flow)((function*(){cg(this.uploadSpecButtonRef.current);try{const e=yield Object(_t.g)("text",[".json",".yaml"]);if(!e)return;this.specProcessingInProgress=!0;let t,n=yield Object(h.a)(()=>JSON.parse(e)).catch(()=>Ym.parse(e)).catch(e=>{throw console.warn("OpenAPI spec parsing error:",e),new Error("File could not be parsed as either YAML or JSON")});if("2.0"===n.swagger)t=yield new Promise((e,t)=>{Qm.convertObj(n,{patch:!0,resolve:!1},(n,r)=>{if(n)return t(n);r.warnings&&r.warnings.length&&(console.warn("Some issues found whilst parsing spec:"),r.warnings.forEach(e=>console.warn(e))),e(r.openapi)})});else{if(!n.openapi||!tl.satisfies(n.openapi,"^3"))throw new Error("This file doesn't contain an OpenAPI v3 or Swagger v2 specification");t=n}yield Object(to.a)(t,["api.build.example"]),this.selectedSpec=t;const{servers:r}=t;if(r&&r.length>=1){let{url:e,variables:t}=r[0];t&&Object.entries(t).forEach(([t,n])=>{e=e.replace(`{${t}}`,n.default.toString())}),requestAnimationFrame(()=>this.onBaseUrl(e))}}catch(e){console.log(e),cg(this.uploadSpecButtonRef.current,Object(D.b)(e).message)}finally{this.specProcessingInProgress=!1}})).bind(this),this.saveApi=Object(d.flow)((function*(){const e=this.enteredBaseUrl.replace(/https?:\/\//,""),t=yield Object(to.a)(this.selectedSpec,["http://"+e,"https://"+e]);this.props.apiStore.addCustomApi(e,t),j({category:"Config",action:"Add API spec"}),this.enteredBaseUrl="",this.selectedSpec=void 0})).bind(this)}render(){const e=this.props,{apiStore:t}=e,n=Zm(e,["apiStore"]);return a.createElement(Yt.b,Object.assign({},n),a.createElement("header",null,a.createElement(Yt.c,{onCollapseToggled:n.onCollapseToggled},"API Settings")),a.createElement(ln.c,null,"OpenAPI specifications"),a.createElement(ag,null,s.map(t.customOpenApiInfo,(e,t)=>a.createElement(a.Fragment,{key:t},a.createElement(ng,null,t),a.createElement(rg,null,e.info.title),a.createElement(ig,{onClick:()=>this.deleteApi(t)},a.createElement(zt.b,{icon:["far","trash-alt"]})))),this.selectedSpec?a.createElement(a.Fragment,null,a.createElement(tg,{placeholder:"Base URL for requests to match against this spec",value:this.enteredBaseUrl,onChange:e=>this.onBaseUrl(e.target.value),ref:this.baseUrlInputRef}),a.createElement(rg,null,this.selectedSpec.info.title,a.createElement(og,{onClick:this.resetApiInputs},a.createElement(zt.b,{icon:["fas","undo"]}))),a.createElement(sg,{disabled:!this.selectedSpec||!this.enteredBaseUrl||!!this.baseUrlError,onClick:this.saveApi},a.createElement(zt.b,{icon:["fas","save"]}))):a.createElement(eg,{type:"submit",onClick:this.specProcessingInProgress?void 0:this.uploadSpec,ref:this.uploadSpecButtonRef},this.specProcessingInProgress?a.createElement(zt.b,{icon:["fas","spinner"],spin:!0}):"Load an OpenAPI or Swagger spec")),a.createElement(bm,null,"APIs added here will provide documentation and validation for all matching requests within their base URL."),a.createElement(bm,null,"HTTP Toolkit also includes built-in specifications for 2600+ popular public APIs."))}validateBaseUrl(e){if(e.startsWith("/"))throw new Error("Base URLs must specify a host");e.startsWith("http://")||e.startsWith("https://")||(e="https://"+e);const t=new URL(e);if(!["http:","https:"].includes(t.protocol))throw new Error("Base URLs must be HTTP or HTTPS");if(t.search)throw new Error("Base URLs can't contain query parameters");if(t.hash)throw new Error("Base URLs can't contain hash fragments");const n=Object.keys(this.props.apiStore.customOpenApiInfo),r=e.replace(/^https?:\/\//,"");if(n.includes(r))throw new Error("This URL is already mapped to an API")}onBaseUrl(e){this.enteredBaseUrl=e;const t=this.baseUrlInputRef.current;try{this.validateBaseUrl(e),this.baseUrlError=void 0,cg(t)}catch(e){this.baseUrlError=Object(D.b)(e),cg(t,e instanceof TypeError?"Not a valid URL":Object(D.b)(e).message)}}resetApiInputs(){this.enteredBaseUrl="",this.baseUrlError=void 0,this.selectedSpec=void 0}deleteApi(e){this.props.apiStore.deleteCustomApi(e)}};Xm([d.observable.ref],lg.prototype,"selectedSpec",void 0),Xm([d.observable],lg.prototype,"specProcessingInProgress",void 0),Xm([d.observable],lg.prototype,"enteredBaseUrl",void 0),Xm([d.observable],lg.prototype,"baseUrlError",void 0),Xm([d.action.bound],lg.prototype,"onBaseUrl",null),Xm([d.action.bound],lg.prototype,"resetApiInputs",null),Xm([d.action.bound],lg.prototype,"deleteApi",null),lg=Xm([Object(u.d)("apiStore"),u.e],lg);var dg=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i};const ug=p.i.section`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`,pg=p.i.div`
    height: 100%;
    width: 100%;
    overflow-y: auto;
`,hg=p.i.section`
    margin: 0px auto 20px;
    padding: 40px;
    max-width: 800px;
    position: relative;

    * {
        transition: background-color 0.3s, margin-bottom 0.1s;
    }
`,mg=p.i.h1`
    font-size: ${e=>e.theme.loudHeadingSize};
    font-weight: bold;
    margin-bottom: 40px;
`,gg=p.i.div`
    display: grid;
    grid-template-columns: fit-content(40%) 1fr;
    grid-gap: 10px;
`,fg=p.i.div`
    margin-top: 30px;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
`,bg=p.i.div`
    margin-top: 30px;

    strong {
        user-select: all;
    }
`,yg=p.i.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    border: 3px solid #999;
    margin: auto 20px;
`,vg=p.i.div`
    width: 60px;
    height: 60px;
    background-color: ${e=>e.theme[e.themeColor]};
`,xg=p.i.div`
    border: 3px solid #999;
    height: 300px;
    flex-grow: 1;
    margin: auto 0;
`,wg=Object(p.i)(zt.b).attrs(()=>({icon:["fas","spinner"],spin:!0}))`
    margin: 0 0 0 10px;
`;let Eg=class extends a.Component{constructor(){super(...arguments),this.confirmSubscriptionCancellation=()=>{const e=this.props.accountStore.userSubscription;if(!e)throw new Error("Can't cancel without a subscription");const t=at.SubscriptionPlans[e.plan].name;let n;if("active"===e.status)n=`It will remain usable until it expires in ${Object(g.distanceInWordsToNow)(e.expiry)} but will not renew.`;else{if("past_due"!==e.status)throw new Error("Cannot cancel subscription with status "+e.status);n="No more renewals will be attempted and it will deactivate immediately."}confirm([`This will cancel your HTTP Toolkit ${t} subscription.`,n,"Are you sure?"].join("\n\n"))&&this.props.accountStore.cancelSubscription().catch(e=>{alert(e.message)})}}render(){var e;const{uiStore:t}=this.props,{isPaidUser:n,isPastDueUser:r,userEmail:o,userSubscription:i,subscriptionPlans:c,isAccountUpdateInProcess:l,getPro:d,canManageSubscription:u,logOut:p}=this.props.accountStore,h=t.settingsCardProps;if(!n&&!r)return a.createElement(ug,null,a.createElement(jn.a,{onClick:()=>d("settings-page")},"Get Pro"));const m=i;return a.createElement(pg,null,a.createElement(hg,null,a.createElement(mg,null,"Settings"),a.createElement(Yt.b,Object.assign({},h.account),a.createElement("header",null,a.createElement(Yt.c,{onCollapseToggled:h.account.onCollapseToggled},"Account")),a.createElement(gg,null,a.createElement(ln.c,null,"Account email"),a.createElement(ln.g,null,o),a.createElement(ln.c,null,"Subscription status"),a.createElement(ln.g,null,{active:"Active",trialing:"Active (trial)",past_due:a.createElement("strong",{title:or`
                                            Your subscription payment failed, and will be reattempted.
                                            If retried payments fail your subscription will be cancelled.
                                        `},"Past due ",a.createElement(zt.e,null)),deleted:"Cancelled"}[m.status]||"Unknown",l&&a.createElement(wg,null)),a.createElement(ln.c,null,"Subscription plan"),a.createElement(ln.g,null,"fulfilled"===c.state?null===(e=c.value[m.plan])||void 0===e?void 0:e.name:s.startCase(m.plan)),a.createElement(ln.c,null,{active:"Next renews",trialing:"Renews",past_due:"Next payment attempt",deleted:"Ends"}[m.status]||"Current period ends"),a.createElement(ln.g,null,Object(g.distanceInWordsStrict)(new Date,m.expiry,{addSuffix:!0,partialMethod:"round"})," (",Object(g.format)(m.expiry.toString(),"Do [of] MMMM YYYY"),")")),a.createElement(fg,null,m.lastReceiptUrl&&a.createElement(fm,{href:m.lastReceiptUrl,target:"_blank",rel:"noreferrer noopener"},"View latest invoice"),u&&a.createElement(a.Fragment,null,m.updateBillingDetailsUrl&&a.createElement(fm,{href:m.updateBillingDetailsUrl,target:"_blank",rel:"noreferrer noopener",highlight:"past_due"===m.status},"Update billing details"),a.createElement(gm,{onClick:this.confirmSubscriptionCancellation,disabled:l},"Cancel subscription",l&&a.createElement(wg,null))),a.createElement(gm,{onClick:p},"Log out")),a.createElement(bg,null,"Questions? Email ",a.createElement("strong",null,"billing@httptoolkit.com"))),n&&a.createElement(a.Fragment,null,s.isString(f.E.value)&&Object(f.F)(f.E.value,f.r)&&a.createElement(a.Fragment,null,a.createElement(Hm,Object.assign({},h.proxy)),a.createElement(Km,Object.assign({},h.connection))),a.createElement(lg,Object.assign({},h.api)),a.createElement(Yt.b,Object.assign({},h.themes),a.createElement("header",null,a.createElement(Yt.c,{onCollapseToggled:h.themes.onCollapseToggled},"Themes")),a.createElement(dm,null,a.createElement(um,{onClick:e=>t.setTheme(e),isSelected:e=>"string"==typeof e?t.themeName===e:s.isEqual(e,t.theme)},a.createElement(pm,{icon:["fas","magic"],value:"automatic"},"Automatic"),a.createElement(pm,{icon:["fas","sun"],value:"light"},"Light"),a.createElement(pm,{icon:["fas","moon"],value:"dark"},"Dark"),a.createElement(pm,{icon:["fas","adjust"],value:"high-contrast"},"High Contrast")),a.createElement(yg,null,a.createElement(vg,{themeColor:"mainColor"}),a.createElement(vg,{themeColor:"mainBackground"}),a.createElement(vg,{themeColor:"highlightColor"}),a.createElement(vg,{themeColor:"highlightBackground"}),a.createElement(vg,{themeColor:"primaryInputColor"}),a.createElement(vg,{themeColor:"primaryInputBackground"}),a.createElement(vg,{themeColor:"containerWatermark"}),a.createElement(vg,{themeColor:"containerBorder"}),a.createElement(vg,{themeColor:"mainLowlightBackground"}),a.createElement(vg,{themeColor:"containerBackground"})),a.createElement(xg,null,a.createElement(es,{contentId:null,language:"html",defaultValue:hm})))))))}};Eg=dg([Object(u.d)("accountStore"),Object(u.d)("uiStore"),u.e],Eg);const Cg=Eg;var Tg=n(247);const Og=p.i.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background: ${e=>e.theme.modalGradient};

    z-index: 10;
    opacity: ${e=>e.opacity||.9};
`,Sg=Object(p.i)(jn.c)`
    padding: 5px 20px;
    margin: 20px auto;

    &:not([disabled]) {
        color: ${e=>e.theme.mainBackground};
        border-color: ${e=>e.theme.mainBackground};
    }

    border-color: rgba(255, 255, 255, 0.6);
    font-size: ${e=>e.theme.textSize};
`;var jg=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i};const kg=p.i.dialog`
    position: absolute;

    top: 50%;
    left: 50%;

    /* There's default styling for dialog, so undo it: */
    bottom: auto;
    right: auto;

    transform: translate(-50%, -50%);
    z-index: 99;

    display: flex;
    flex-direction: row;
    color: ${e=>e.theme.mainBackground};

    background-color: transparent;
    border: none;

    min-width: 850px;
    max-width: 980px;
    width: 90%;
`,Pg=p.i.section`
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding-right: 20px;
    max-width: 400px;
`,Rg=p.i.h1`
    font-size: ${e=>e.theme.loudHeadingSize};
    font-weight: bold;
    letter-spacing: -1px;
    text-align: center;
`,Hg=Object(p.i)(jn.f)`
    background: none;
    border: none;

    margin: 10px auto;
    padding: 10px 10px;

    font-family: ${e=>e.theme.fontFamily};
    font-size: ${e=>e.theme.headingSize};
    color: ${e=>e.theme.mainColor};

    display: flex;
    align-items: center;
    flex-direction: row;

    > svg {
        margin: 0 10px;
        z-index: 1;
    }
`,qg=p.i.span`
    padding: 10px 15px;
    border-radius: 8px;

    &:first-child {
        padding-right: 40px;
        margin-right: -40px;
    }

    &:last-child {
        padding-left: 40px;
        margin-left: -40px;
    }

    ${e=>e.selected&&p.e`
        background-color: ${e=>e.theme.mainBackground};
        border-bottom: 3px solid ${e=>e.theme.containerBorder};
        box-shadow: 0 4px 10px 0 rgba(0,0,0,0.1);
    `}

    ${e=>!e.selected&&p.e`
        color: ${e=>e.theme.mainBackground};
        opacity: 0.7;
    `}
`,Ag=p.i.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    width: 300px;
    margin: 50px auto 0;

    > p {
        margin-bottom: 10px;
        text-align: center;
        word-break: break-word;
    }
`,Ig=Object(p.i)(jn.c)`
    &:not(:last-child) {
        margin-bottom: 10px;
    }

    &:not([disabled]) {
        color: ${e=>e.theme.mainBackground};
        border-color: ${e=>e.theme.mainBackground};
    }
`,Dg=p.i.span`
    white-space: nowrap;
`,$g=p.i.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    color: ${e=>e.theme.mainColor};
    max-width: 830px;
`,Mg=p.i.section`
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 10px 0 rgba(0,0,0,0.1);
    border-radius: 4px;
    border: 1px solid ${e=>e.theme.containerBorder};

    > * {
        padding: 0 20px;
    }

    flex: 1 1;

    ${e=>e.highlighted?p.e`
        background-color: ${e=>e.theme.mainBackground};
        color: ${e=>e.theme.mainColor};

        z-index: 1;
        margin: -15px -5px -15px 0;

        flex-basis: 1%;

        > ${Fg} {
            padding: 37.5px 0;
        }
    `:p.e`
        background-color: ${e=>e.theme.mainLowlightBackground};
        opacity: 0.9;
    `}
`,Fg=p.i.div`
    width: 100%;
    padding: 30px 0;
    color: ${e=>e.theme.popColor};
    text-align: center;
    font-weight: bold;
    font-size: ${e=>e.theme.loudHeadingSize};
`,Bg=p.i.div`
    text-align: center;
    color: ${e=>e.theme.mainColor};
    margin: 0 20px;
`,Ng=p.i.div`
    font-size: ${e=>e.theme.largeHeadingSize};
    color: ${e=>e.theme.mainColor};
    font-weight: bold;
`,Lg=p.i.small`
    display: block;
    font-size: 80%;
    opacity: 0.8;
`,Ug=p.i.div`
    display: block;
    margin-top: 10px;
    font-size: ${e=>e.theme.headingSize};
`,Wg=p.i.ul`
    padding: 40px 20px 30px;
    font-size: ${e=>e.theme.textSize};
    line-height: 1.2;
`,zg=p.i.li`
    margin-top: 20px;
    margin-left: 0;
    list-style-type: none;

    &:first-child {
        margin-top: 0;
    }
`,_g=p.i.li`
    &:not(:first-child) {
        margin-top: 20px;
    }

    strong {
        color: ${e=>e.theme.popColor};
    }
`,Vg=Object(p.i)(_g)`
    list-style: circle;
    margin-left: 20px;
`,Gg=p.i.ul`
    margin-top: 15px;

    > ${Vg} {
        margin-top: 4px;
    }
`,Jg=p.i.div`
    margin-top: 0;
    margin-bottom: 20px;
    font-weight: bold;

    > ${jn.a} {
        text-align: center;
        width: 100%
    }
`,Kg=p.i.div`
    color: ${e=>e.theme.mainBackground};
    font-size: ${e=>e.theme.textSize};

    margin-top: 10px;
    text-align: center;
    line-height: 1.2;

    strong {
        font-weight: bold;
    }

    a {
        color: ${e=>e.theme.mainBackground};
    }

    p {
        margin-top: 10px;
    }
`,Yg=p.i.div`
    position: absolute;

    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%) scale(2);
    z-index: 99;

    display: flex;
    flex-direction: column;
    text-align: center;

    > p {
        max-width: 500px;
        line-height: 1.2;
    }

    > p, > svg {
        color: #fff;
        margin: 20px auto;
    }

    a[href] {
        color: #6e8ff4;
    }
`;let Qg=class extends a.Component{constructor(){super(...arguments),this.planCycle="monthly",this.getPlanMonthlyPrice=e=>{if(!this.isPricingAvailable)throw new Error("Can't query prices if pricing is not available");const t=this.props.plans.value[this.getSKU(e)];if("priceless"===t.prices)throw new Error("Can't show price for non-priced plan");return t.prices.monthly},this.getSKU=e=>`${e}-${this.planCycle}`,this.buyPlan=e=>{this.props.onPlanPicked(this.getSKU(e))},this.closePicker=()=>{this.props.onPlanPicked(void 0)}}render(){const{isPricingAvailable:e,planCycle:t,toggleCycle:n,buyPlan:r,closePicker:o,getPlanMonthlyPrice:s}=this,{email:i,logOut:c,logIn:l}=this.props;return e?a.createElement(kg,{open:!0},a.createElement(Pg,null,a.createElement(Rg,null,"Choose your Plan"),a.createElement(Hg,{onClick:n},a.createElement(qg,{selected:"monthly"===t},"Monthly"),a.createElement(Tg.a,{icon:["fas","annual"===t?"toggle-on":"toggle-off"]}),a.createElement(qg,{selected:"annual"===t},"Annual")),a.createElement(Kg,null,a.createElement("p",null,a.createElement("strong",null,"Cancel in two clicks, anytime"),". ",a.createElement("br",null),"Have questions? ",a.createElement("strong",null,a.createElement("a",{href:"https://httptoolkit.com/docs/guides/subscription-faq"},"Read the FAQ"))," or email billing@httptoolkit.com."),a.createElement("p",null,"By subscribing to a paid plan, you accept ",a.createElement(Dg,null,a.createElement("a",{href:"https://httptoolkit.com/terms-of-service"},"the HTTP Toolkit Terms of Service")),".")),a.createElement(Ag,null,i&&a.createElement("p",null,"Logged in as ",a.createElement(Dg,null,i),"."),i?a.createElement(Ig,{onClick:c},"Log out"):a.createElement(Ig,{onClick:l},"Log into existing account"),a.createElement(Ig,{onClick:o},"Cancel"))),a.createElement($g,null,a.createElement(Mg,{highlighted:!0},a.createElement(Fg,null,"Professional"),a.createElement(Bg,null,a.createElement(Ng,null,s("pro")," / month"),a.createElement(Lg,null,"plus local tax, paid ","annual"===this.planCycle?"annually":"monthly"),a.createElement(Ug,{title:"Licensed for a specific individual. See the terms of service for full details."},"Personal user account")),a.createElement(Wg,null,a.createElement(_g,null,a.createElement("strong",null,"Automated HTTP mocking & rewriting"),", including traffic redirection, mock responses, and errors & timeouts."),a.createElement(_g,null,a.createElement("strong",null,"Reusable mock rules"),". Persistent by default, plus import/export so you can store, reuse & share them later."),a.createElement(_g,null,a.createElement("strong",null,"Import/export for collected traffic"),", as either ",a.createElement("a",{href:"https://en.wikipedia.org/wiki/HAR_(file_format)",target:"_blank",rel:"noopener noreferrer"},"HARs")," or ready-to-use code for 20+ tools."),a.createElement(_g,null,a.createElement("strong",null,"Advanced HTTP debugging & inspection tools"),", including compression & caching performance analysis."),a.createElement(_g,null,a.createElement("strong",null,"Validation & API documentation for 2600+ built-in APIs"),", from AWS to GitHub to Stripe, plus your own custom ",a.createElement("a",{href:"https://swagger.io/docs/specification/about/",target:"_blank",rel:"noopener noreferrer"},"OpenAPI")," specs."),a.createElement(_g,null,a.createElement("strong",null,"Advanced customization"),", including UI themes, whitelisted & client certificates, ports, and upstream proxies."),a.createElement(_g,null,a.createElement("strong",null,"Support ongoing development!"))),a.createElement(Jg,null,a.createElement(jn.a,{onClick:()=>r("pro")},"Get Pro Now"))),a.createElement(Mg,null,a.createElement(Fg,null,"Team"),a.createElement(Bg,null,a.createElement(Ng,null,s("team")," / user / month"),a.createElement(Lg,null,"plus local tax, paid ","annual"===this.planCycle?"annually":"monthly"),a.createElement(Ug,{title:"One team license, linked to many individuals, who can be added and removed. See the terms of service for details."},"Team account")),a.createElement(Wg,null,a.createElement(zg,null,a.createElement("em",null,"All Professional features, and:")),a.createElement(_g,null,a.createElement("strong",null,"Centralized billing")," to simplify payment for your team"),a.createElement(_g,null,"Licensed to your team, rather than individuals"),a.createElement(_g,null,a.createElement("strong",null,"Centralized control")," to easily manage your team members and subscription"),a.createElement(_g,null,a.createElement("strong",null,"Team workspaces")," for low-friction collaboration ",a.createElement(Dg,null,"(",a.createElement("em",null,"coming soon"),")")),a.createElement(zg,null,"Options available on request:"),a.createElement(Gg,null,a.createElement(Vg,null,"Self-hosted infrastructure"),a.createElement(Vg,null,"Private support"),a.createElement(Vg,null,"Training & consultancy"),a.createElement(Vg,null,"Bulk discounts"))),a.createElement(Jg,null,a.createElement(jn.b,{href:"https://httptoolkit.com/contact"},"Get in touch"))))):a.createElement(Yg,null,a.createElement("p",null,"Unable to connect to HTTP Toolkit account servers..."),a.createElement("p",null,"Having problems? Open an issue ",a.createElement("a",{href:"https://github.com/httptoolkit/httptoolkit/issues/new/choose"},"on GitHub")," or email ",a.createElement("strong",null,"billing@httptoolkit.com")," to ask for help."),a.createElement(zt.b,{icon:["fac","spinner-arc"],spin:!0,size:"10x"}),a.createElement(Sg,{onClick:o},"Cancel"))}toggleCycle(){this.planCycle="annual"===this.planCycle?"monthly":"annual"}get isPricingAvailable(){return"fulfilled"===this.props.plans.state}};jg([d.observable],Qg.prototype,"planCycle",void 0),jg([d.action.bound],Qg.prototype,"toggleCycle",null),jg([d.computed],Qg.prototype,"isPricingAvailable",null),Qg=jg([u.e],Qg);const Xg=Object(p.i)(e=>a.createElement("div",{className:e.className},a.createElement("p",null,"The checkout has been opened in your browser.",a.createElement("br",null),"Please follow the steps there to complete your subscription."),a.createElement("p",null,"Have questions? Take a look at ",a.createElement("a",{href:"https://httptoolkit.com/docs/guides/subscription-faq"},"the FAQ")," or email ",a.createElement("strong",null,"billing@httptoolkit.com"),"."),a.createElement(zt.b,{icon:["fac","spinner-arc"],spin:!0,size:"10x"}),a.createElement(Sg,{onClick:e.onCancel},"Cancel checkout")))`
    > p {
        max-width: 500px;
        line-height: 1.2;
    }

    > p, > svg {
        color: #fff;
        margin: 20px auto;
    }

    a[href] {
        color: #6e8ff4;
    }

    text-align: center;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(2);
    z-index: 100;
`;var Zg=n(167),ef=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i};let tf=class extends a.Component{constructor(){super(...arguments),this.renderItem=(e,t)=>{if("separator"===e.type)return a.createElement(Zg.c,{key:t});if("option"===e.type)return a.createElement(Zg.a,{key:t,onClick:()=>e.callback(this.props.menuState.data),disabled:!1===e.enabled},e.label);if("submenu"===e.type)return a.createElement(Zg.d,{key:t,label:e.label,disabled:!1===e.enabled},e.items.map(this.renderItem));throw new D.a(e,e=>e.type)},this.onVisibilityChange=e=>{e||this.props.onHidden()}}componentDidMount(){Object(u.c)(this,Object(d.autorun)(()=>{const e=this.props.menuState;setTimeout(()=>{Zg.e.show({id:"menu",event:e.event})},10)}))}render(){return a.createElement(nf,{id:"menu",onVisibilityChange:this.onVisibilityChange},this.props.menuState.items.map(this.renderItem))}};tf=ef([u.e],tf);const nf=Object(p.i)(Zg.b)`
    --contexify-menu-bgColor: ${e=>e.theme.mainLowlightBackground};
    --contexify-item-color: ${e=>e.theme.mainColor};
    --contexify-separator-color: ${e=>e.theme.containerBorder};

    --contexify-rightSlot-color: ${e=>e.theme.containerWatermark};
    --contexify-activeRightSlot-color: ${e=>e.theme.mainColor};

    --contexify-arrow-color: ${e=>e.theme.containerWatermark};
    --contexify-activeArrow-color: ${e=>e.theme.mainColor};

    --contexify-activeItem-color: #fff;
    --contexify-activeItem-bgColor: #3498db;
`;var rf=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},of=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};const sf=p.i.div`
    display: flex;
    height: 100%;

    > :not(:first-child) {
        flex: 1 1;
        width: calc(100% - ${"80px"});
    }
`,af=e=>{var{children:t}=e,n=of(e,["children"]);const{pageComponent:r}=n,o=of(n,["pageComponent"]);return a.createElement(n.pageComponent,Object.assign({},o),t)},cf=e=>(Object(_t.h)("Ctrl+1,Cmd+1",t=>{e.navigate("/intercept"),t.preventDefault()},[e.navigate]),Object(_t.h)("Ctrl+2,Cmd+2",t=>{e.navigate("/view"),t.preventDefault()},[e.navigate]),Object(_t.h)("Ctrl+3,Cmd+3",t=>{e.navigate("/mock"),t.preventDefault()},[e.navigate]),Object(_t.h)("Ctrl+9,Cmd+9",t=>{e.canVisitSettings&&e.navigate("/settings"),t.preventDefault()},[e.navigate,e.canVisitSettings]),null);let lf=class extends a.Component{get canVisitSettings(){return this.props.accountStore.isPaidUser||this.props.accountStore.isPastDueUser}get canVisitSend(){return this.props.accountStore.featureFlags.includes("send")&&("fulfilled"!==f.E.state||Object(f.F)(f.E.value,f.w))}get menuItems(){return[{name:"Intercept",title:`Connect clients to HTTP Toolkit (${_t.a}+1)`,icon:["fas","plug"],position:"top",type:"router",url:"/intercept"},{name:"View",title:`View intercepted HTTP traffic (${_t.a}+2)`,icon:["fas","search"],position:"top",type:"router",url:"/view"},..."fulfilled"!==f.E.state||Object(f.F)(f.E.value,f.o)?[{name:"Mock",title:`Add rules to mock & rewrite HTTP traffic (${_t.a}+3)`,icon:["fas","theater-masks"],position:"top",type:"router",url:"/mock"}]:[],...this.canVisitSend?[{name:"Send",title:`Send HTTP requests directly (${_t.a}+4)`,icon:["far","paper-plane"],position:"top",type:"router",url:"/send"}]:[],this.canVisitSettings?{name:"Settings",title:`Reconfigure HTTP Toolkit and manage your account (${_t.a}+9)`,icon:["fas","cog"],position:"bottom",type:"router",url:"/settings"}:{name:"Get Pro",title:"Sign up for HTTP Toolkit Pro",icon:["far","star"],position:"bottom",type:"callback",onClick:()=>this.props.accountStore.getPro("sidebar")},{name:"Give feedback",title:"Suggest features or report issues",icon:["far","comment"],position:"bottom",highlight:!0,type:"web",url:"https://github.com/httptoolkit/httptoolkit/issues/new/choose"}]}componentDidMount(){Object(u.c)(this,H.listen(({location:e})=>function(e){if(!y)return;const t=O(e.href);S.includes(t)||(S.push(t),m.a.capture("$pageview",{$current_url:t,$set_once:Object.assign({},T())}))}(e)))}render(){const{modal:e,setSelectedPlan:t,subscriptionPlans:n,userEmail:r,logIn:o,logOut:s,cancelCheckout:i}=this.props.accountStore,{contextMenuState:c,clearHtmlContextMenu:l}=this.props.uiStore;return a.createElement(P.b,{history:H},a.createElement(cf,{navigate:H.navigate,canVisitSettings:this.canVisitSettings}),a.createElement(sf,{"aria-hidden":!!e,inert:!!e,ref:t=>t&&(e?t.setAttribute("inert",""):t.removeAttribute("inert"))},a.createElement(To,{items:this.menuItems}),a.createElement(P.e,null,a.createElement(P.d,{noThrow:!0,from:"/",to:"/intercept"}),a.createElement(af,{path:"/intercept",pageComponent:Do}),a.createElement(af,{path:"/view",pageComponent:$d}),a.createElement(af,{path:"/view/:eventId",pageComponent:$d}),a.createElement(af,{path:"/mock",pageComponent:Bh}),a.createElement(af,{path:"/mock/:initialRuleId",pageComponent:Bh}),a.createElement(af,{path:"/send",pageComponent:lm}),a.createElement(af,{path:"/settings",pageComponent:Cg}))),!!e&&a.createElement(Og,null),"pick-a-plan"===e&&a.createElement(Qg,{email:r,onPlanPicked:t,logOut:s,logIn:o,plans:n}),"post-checkout"===e&&a.createElement(Xg,{onCancel:i}),c&&a.createElement(tf,{menuState:c,onHidden:l}))}};rf([d.computed],lf.prototype,"canVisitSettings",null),rf([d.computed],lf.prototype,"canVisitSend",null),rf([d.computed],lf.prototype,"menuItems",null),lf=rf([Object(u.d)("accountStore"),Object(u.d)("uiStore"),u.e],lf);const df=lf,uf=Object(u.d)("uiStore")(Object(u.e)(e=>a.createElement(p.c,{theme:e.uiStore.theme},e.children)));var pf=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i};const hf=Object(p.i)(e=>a.createElement("section",{className:e.className},e.children))`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    color: ${e=>e.theme.mainColor};

    h1 {
        font-size: 300px;
        font-weight: bold;
        line-height: 230px;
        margin-bottom: 50px;
    }

    p {
        font-size: 50px;
        margin-bottom: 50px;
    }

    button {
        display: block;
        margin: 0 auto 40px;

        color: ${e=>e.theme.mainColor};
        background-color: ${e=>e.theme.mainBackground};
        box-shadow: 0 2px 10px 0 rgba(0,0,0,0.2);
        border-radius: 4px;
        border: none;

        padding: 20px;

        font-size: 50px;
        font-weight: bolder;

        &:not(:disabled) {
            cursor: pointer;

            &:hover {
                color: ${e=>e.theme.popColor};
            }
        }
    }
`;let mf=class extends a.Component{constructor(){super(...arguments),this.feedbackSent=!1}componentDidCatch(e,t){this.error=e,o.a.withScope(n=>{Object.keys(t).forEach(e=>{n.setExtra(e,t[e])}),o.a.captureException(e)}),j({category:"Error",action:"UI crashed"})}render(){return this.error?a.createElement(hf,null,a.createElement("h1",null,"Oh no!"),a.createElement("p",null,"Sorry, it's all gone wrong."),a.createElement("div",null,Object(o.c)()&&a.createElement("button",{disabled:this.feedbackSent,onClick:this.sendFeedback},"Tell us what happened"),a.createElement("button",{onClick:()=>window.location.reload()},"Reload HTTP Toolkit"))):this.props.children}sendFeedback(){o.a.showReportDialog(),this.feedbackSent=!0}};pf([d.observable],mf.prototype,"error",void 0),pf([d.observable],mf.prototype,"feedbackSent",void 0),pf([d.action],mf.prototype,"componentDidCatch",null),pf([d.action.bound],mf.prototype,"sendFeedback",null),mf=pf([u.e],mf);var gf=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))};document.dispatchEvent(new Event("load:executing")),r.config({name:"httptoolkit",version:1});const ff=new URLSearchParams(window.location.search).get("authToken");r.setItem("latest-auth-token",ff),Object(o.b)("https://548601eca36246bdac73dc086d231db1@sentry.io/1316304"),console.log(`Initialising UI (version ${f.y})`);d.configure({enforceActions:"observed"}),Object(h.b)(5e3).then((function(){return ho(this,void 0,void 0,(function*(){mo();try{const o=yield(e={scope:"/"},n="/ui-update-worker.js",r=t,"function"==typeof e?n=e(n):r=e,"serviceWorker"in navigator?navigator.serviceWorker.register(n,r):Promise.reject(new uo));console.log("Service worker loaded"),o.update().catch(console.log),setInterval(()=>{mo(),o.update().catch(console.log)},3e5)}catch(e){if(e instanceof uo)return void console.warn("Service worker not supported - cached & offline startup will not be available");throw e}var e,t,n,r}))})),function(){const{runtimeDependencies:e}=po;let t=!1;f.E.then(n=>{Object(f.F)(n,e["httptoolkit-server"])||t||(go(),t=!0)}).catch(()=>{}),f.C.then(n=>{Object(f.F)(n,e["httptoolkit-desktop"])||t||(go(),t=!0)}).catch(()=>{})}();const bf=new dt(()=>H.navigate("/settings")),yf=new co(bf),vf=new it(bf),xf=new Et(bf),wf=new Xr(xf,bf),Ef=new Wt.a(bf,xf,(function(e){return gf(this,void 0,void 0,(function*(){let t;return yield Cf.initialized,yield d.when(()=>(t=s.find(Cf.exchanges,{id:e}),!!t&&t.isCompletedRequest())),H.navigate("/view/"+e),t}))})),Cf=new Ut(xf,yf,Ef),Tf=new lo.a(Cf,Ef),Of={accountStore:bf,apiStore:yf,uiStore:vf,proxyStore:xf,eventsStore:Cf,interceptorStore:wf,rulesStore:Ef,sendStore:Tf},Sf=Promise.all(Object.values(Of).map(e=>e.initialized));y&&m.a.init(b,{api_host:"https://events.httptoolkit.tech",autocapture:!1,capture_pageview:!1,advanced_disable_decide:!0,disable_session_recording:!1,persistence:"memory"}),Sf.then(()=>{mo(),console.log("App started, rendering"),document.dispatchEvent(new Event("load:rendering")),l.render(a.createElement(u.b,Object.assign({},Of),a.createElement(uf,null,a.createElement(mf,null,a.createElement(p.a,null),a.createElement(df,null)))),document.querySelector("#app"))});Promise.race([Sf,Object(h.b)(1e4).then(()=>gf(void 0,void 0,void 0,(function*(){throw console.log("Previous server version was",yield f.D),Object.assign(new Error("Failed to initialize application"),{isTimeout:!0})})))]).catch(e=>{const t=Object.assign(new Event("load:failed"),{error:e});document.dispatchEvent(t),Object(o.d)(e),Sf.then(()=>{f.E.then(e=>gf(void 0,void 0,void 0,(function*(){console.log("Server version was",yield f.D,"now started late with",e),Object(o.d)("Successfully initialized application, but after timeout")})))})})},15:function(e,t,n){"use strict";n.d(t,"h",(function(){return o})),n.d(t,"f",(function(){return s})),n.d(t,"g",(function(){return i})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return d})),n.d(t,"e",(function(){return p})),n.d(t,"d",(function(){return h}));var r=n(2);const o=r.e`
    &[disabled] {
        cursor: default;
    }

    &:not([disabled]) {
        cursor: pointer;
        &:hover {
            background-image: linear-gradient(transparent, rgba(0,0,0,.05) 40%, rgba(0,0,0,.1));
        }

        &:active {
            background-image: linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.05) 40%, transparent);
        }
    }
`,s=r.i.button.attrs(()=>({type:"button"}))`
    /* Reset styles that get broken because <button> overrides them: */
    border: none;
    background: none;
    font-family: inherit;
    font-size: inherit;
    color: inherit;

    &[disabled] {
        cursor: default;
    }

    &:not([disabled]) {
        cursor: pointer;
    }
`,i=s.withComponent("a"),a=r.e`
    -webkit-appearance: none;
    cursor: pointer;
    padding: 15px 36px;
    border-radius: 4px;
    border: none;

    font-family: ${e=>e.theme.fontFamily};
    font-size: ${e=>e.theme.headingSize};

    display: block;
    text-decoration: none;
    text-align: center;
    font-weight: inherit;
    line-height: normal;

    ${o}
`,c=r.i.button`
    ${a}

    /*
     * Need both to ensure link button colours have higher
     * specificity than the a:visited default.
     */
    &, &:visited {
        color: ${e=>e.theme.primaryInputColor};
    }

    &[disabled] {
        background-color: ${e=>e.theme.containerWatermark};
    }

    &:not([disabled]) {
        background-color: ${e=>e.theme.primaryInputBackground};
    }
`;c.defaultProps={type:"button"};const l=c.withComponent("a"),d=r.i.button.attrs(()=>({type:"button"}))`
    ${a}

    background-color: transparent;

    &, &:visited {
        color: ${e=>e.theme.secondaryInputColor};
    }

    border-width: 2px;
    border-style: solid;

    &[disabled] {
        color: ${e=>e.theme.containerWatermark};
        border-color: ${e=>e.theme.containerWatermark};
    }

    &:not([disabled]) {
        border-color: ${e=>e.theme.secondaryInputBorder};
    }
`,u=r.e`
    border-color: ${e=>e.theme.warningColor};
    background-color: ${e=>e.theme.warningBackground};
    color: ${e=>e.theme.mainColor};
`,p=r.i.input.attrs(e=>({type:e.type||"text"}))`
    font-size: ${e=>e.theme.textInputFontSize};
    padding: 5px 10px;
    border-radius: 4px;
    border: solid 1px ${e=>e.theme.containerBorder};

    min-width: 20px; /* Without this, editable headers especially refuse to shrink */

    background-color: ${e=>e.theme.textInputBackground};
    color: ${e=>e.theme.textInputColor};

    &:disabled {
        opacity: 0.6;
    }

    &:invalid {
        ${u}
    }

    &:read-only {
        cursor: default;
        outline: none;
    }

    ${e=>e.invalid&&u}
`,h=r.i.select`
    ${o}

    font-size: ${e=>e.theme.headingSize};
    font-family: ${e=>e.theme.fontFamily};

    width: 100%;
    border-radius: 4px;
`},164:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(12);const o=Object.values(r.Method).filter(e=>"string"==typeof e)},17:function(e,t,n){"use strict";n.d(t,"k",(function(){return i})),n.d(t,"l",(function(){return a})),n.d(t,"d",(function(){return c})),n.d(t,"j",(function(){return l})),n.d(t,"i",(function(){return d})),n.d(t,"n",(function(){return u})),n.d(t,"e",(function(){return p})),n.d(t,"f",(function(){return h})),n.d(t,"g",(function(){return m})),n.d(t,"h",(function(){return g})),n.d(t,"m",(function(){return f})),n.d(t,"c",(function(){return b})),n.d(t,"b",(function(){return y})),n.d(t,"a",(function(){return x}));var r=n(4),o=n(79),s=n(1);function i(e){return r.isObject(e)&&"items"in(e||{})}function a(e){return i(e)&&"isRoot"in e&&!0===e.isRoot}function c(e,t){let n=0;for(;void 0!==e[n]&&void 0!==t[n];){const r=t[n]-e[n];if(0!==r)return r;n+=1}return void 0!==e[n]?-1:void 0!==t[n]?1:0}function l(e,t){return d(e,t.slice(0,-1))}function d(e,t){return t.reduce((e,n,r)=>{if(!i(e))throw new Error(`Invalid path ${t} at step #${r}, found ${e}`);return e.items[n]},e)}function u(e,t,n){const o=t.slice(0,-1),s=r.last(t),i=o.length?d(e,o):e;return i.items[s]=n,i}function p(e,t){const n=l(e,t),o=r.last(t);n.items.splice(o,1),0!==n.items.length||a(n)||p(e,t.slice(0,-1))}function h(e,t){return r.isMatch(e,t)?e:r.reduce(e.items,(e,n)=>e||(i(n)?h(n,t):r.isMatch(n,t)?n:void 0),void 0)}function m(e,t,n=[]){return r.isMatch(e,t)?n:r.reduce(e.items,(e,o,s)=>e||(i(o)?m(o,t,n.concat(s)):r.isMatch(o,t)?n.concat(s):void 0),void 0)}const g=e=>f(e,e=>e);function f(e,t,n=[],r=0){return e.items.reduce((e,o,s)=>{const a=r+s;return i(o)?e.concat(f(o,t,n.concat(s),a)):e.concat([t(o,n.concat(s),a)])},[])}function b(e){return i(e)?(n=e,Object.assign(Object.assign({},n),{items:n.items.map(e=>b(e)),collapsed:!0,id:o()})):(t=e,Object(s.observable)(Object.assign(Object.assign({},t),{matchers:[...t.matchers],id:o()})));var t,n}const y=(e,t)=>i(e)?!!i(t)&&v(e,t):!i(t)&&w(e,t),v=(e,t)=>e.id===t.id&&e.title===t.title&&r.isEqualWith(e.items,t.items,y),x=Symbol("custom-rule-is-equals"),w=(e,t)=>{if(e&&t&&e[x]&&e[x]===t[x]){return(0,e[x])(e,t)}return r.isFunction(e)&&r.isFunction(t)?e.toString()===t.toString():r.isObject(e)&&r.isObject(t)&&(Object.values(e).includes(void 0)||Object.values(t).includes(void 0))?r.isEqualWith(r.omitBy(e,e=>void 0===e),r.omitBy(t,e=>void 0===e),w):void 0}},18:function(e,t,n){"use strict";(function(e){n.d(t,"i",(function(){return d})),n.d(t,"r",(function(){return u})),n.d(t,"c",(function(){return p})),n.d(t,"a",(function(){return h})),n.d(t,"o",(function(){return m})),n.d(t,"e",(function(){return g})),n.d(t,"j",(function(){return f})),n.d(t,"d",(function(){return b})),n.d(t,"q",(function(){return y})),n.d(t,"l",(function(){return v})),n.d(t,"n",(function(){return x})),n.d(t,"k",(function(){return w})),n.d(t,"p",(function(){return E})),n.d(t,"b",(function(){return C})),n.d(t,"m",(function(){return T})),n.d(t,"h",(function(){return O})),n.d(t,"g",(function(){return S})),n.d(t,"f",(function(){return j}));var r=n(4),o=n(12),s=n(14),i=n(21),a=n(164),c=n(55),l=n(17);const d=r.reduce(a.a,(e,t)=>(e[t]=class extends o.matchers.MethodMatcher{constructor(){super(o.Method[t]),this.uiType=t}explain(){return o.Method[this.method]+" requests"}},e),{});class u extends o.matchers.WildcardMatcher{explain(){return"Any requests"}}class p extends o.matchers.WildcardMatcher{constructor(){super(...arguments),this.uiType="default-wildcard"}explain(){return"Any other requests"}}class h extends o.matchers.RegexPathMatcher{constructor(){super(/^https?:\/\/amiusing\.httptoolkit\.tech\/?$/),this.uiType="am-i-using"}explain(){return"for amiusing.httptoolkit.tech"}}class m extends o.requestHandlerDefinitions.SimpleHandlerDefinition{explain(){return`respond with status ${this.status}${Object(i.d)(this.data)?" and static content":""}`}}s.b(m,{data:s.d(e=>!e||"string"==typeof e||Object(i.i)(e)?e:{type:"Buffer",data:[...e]},t=>t?"string"==typeof t?t:e.from(t.data):void 0),"*":Object.assign(s.d(e=>e,e=>e),{pattern:{test:e=>"data"!==e}})},()=>new m(200));class g extends o.requestHandlerDefinitions.FileHandlerDefinition{explain(){return`respond with status ${this.status} and content from ${this.filePath||"a file"}`}}class f extends o.requestHandlerDefinitions.PassThroughHandlerDefinition{constructor(e){super(e.activePassthroughOptions)}}s.b(f,{type:s.k()},e=>new f(e.args.rulesStore));class b extends o.requestHandlerDefinitions.PassThroughHandlerDefinition{constructor(e,t,n){super(Object.assign(Object.assign({},n.activePassthroughOptions),{forwarding:{targetHost:e,updateHostHeader:t}})),this.uiType="forward-to-host"}}s.b(b,{uiType:Object(c.b)(()=>"forward-to-host"),type:s.k(),forwarding:s.h(s.k())},e=>{const t=e.json;return new b(t.forwarding.targetHost,t.forwarding.updateHostHeader,e.args.rulesStore)});class y extends o.requestHandlerDefinitions.PassThroughHandlerDefinition{constructor(e,t,n){super(Object.assign(Object.assign({},e.activePassthroughOptions),{transformRequest:t,transformResponse:n})),this.uiType="req-res-transformer"}explain(){const e=r.pickBy(this.transformRequest||{},e=>void 0!==e),t=r.pickBy(this.transformResponse||{},e=>void 0!==e);return r.isEmpty(e)&&r.isEmpty(t)?super.explain():r.isEmpty(e)||r.isEmpty(t)?r.isEmpty(e)?"automatically transform the response from the target host":"automatically transform the request then pass it through to the target host":"automatically transform the request and response"}[l.a](e,t){return r.isEqual(e.transformRequest,t.transformRequest)&&r.isEqual(e.transformResponse,t.transformResponse)}}s.b(y,{uiType:Object(c.b)(()=>"req-res-transformer"),transformRequest:s.i(s.c({updateHeaders:c.f,updateJsonBody:c.f,replaceBody:c.c,"*":Object.assign(s.l(),{pattern:{test:()=>!0}})})),transformResponse:s.i(s.c({updateHeaders:c.f,updateJsonBody:c.f,replaceBody:c.c,"*":Object.assign(s.l(),{pattern:{test:()=>!0}})}))},e=>{const t=e.json;return new y(e.args.rulesStore,t.transformRequest,t.transformResponse)});class v extends o.requestHandlerDefinitions.PassThroughHandlerDefinition{constructor(e){super(Object.assign(Object.assign({},e.activePassthroughOptions),{beforeRequest:e.triggerRequestBreakpoint})),this.uiType="request-breakpoint"}explain(){return"manually rewrite the request before it's forwarded"}}s.b(v,{uiType:Object(c.b)(()=>"request-breakpoint"),type:s.k()},e=>new v(e.args.rulesStore));class x extends o.requestHandlerDefinitions.PassThroughHandlerDefinition{constructor(e){super(Object.assign(Object.assign({},e.activePassthroughOptions),{beforeResponse:e.triggerResponseBreakpoint})),this.uiType="response-breakpoint"}explain(){return"manually rewrite the response before it's returned"}}s.b(x,{uiType:Object(c.b)(()=>"response-breakpoint"),type:s.k()},e=>new x(e.args.rulesStore));class w extends o.requestHandlerDefinitions.PassThroughHandlerDefinition{constructor(e){super(Object.assign(Object.assign({},e.activePassthroughOptions),{beforeRequest:e.triggerRequestBreakpoint,beforeResponse:e.triggerResponseBreakpoint})),this.uiType="request-and-response-breakpoint"}explain(){return"manually rewrite the request and response"}}s.b(w,{uiType:Object(c.b)(()=>"request-and-response-breakpoint"),type:s.k()},e=>new w(e.args.rulesStore));const E=o.requestHandlerDefinitions.TimeoutHandlerDefinition,C=o.requestHandlerDefinitions.CloseConnectionHandlerDefinition,T=o.requestHandlerDefinitions.ResetConnectionHandlerDefinition,O=Object.assign(Object.assign(Object.assign({},r.omit(o.matchers.MatcherLookup,["method"])),d),{wildcard:u,"default-wildcard":p,"am-i-using":h}),S=[u,...Object.values(d)],j=Object.assign(Object.assign({},o.requestHandlerDefinitions.HandlerDefinitionLookup),{passthrough:f,simple:m,file:g,"forward-to-host":b,"req-res-transformer":y,"request-breakpoint":v,"response-breakpoint":x,"request-and-response-breakpoint":w})}).call(this,n(25).Buffer)},19:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return s})),n.d(t,"f",(function(){return i})),n.d(t,"h",(function(){return a})),n.d(t,"d",(function(){return c})),n.d(t,"i",(function(){return l})),n.d(t,"j",(function(){return d})),n.d(t,"g",(function(){return u})),n.d(t,"c",(function(){return p})),n.d(t,"e",(function(){return h}));var r=n(4);const o="^[!#$%&'*+\\-.^_`\\|~A-Za-z0-9]+$",s=new RegExp(o),i=e=>Object.entries(e||{}).reduce((e,[t,n])=>(Array.isArray(n)?e=e.concat(n.map(e=>[t,e])):e.push([t,n||""]),e),[]),a=e=>e.reduce((e,[t,n])=>{const r=t.toLowerCase(),o=e[r];return void 0===o?e[r]=n:"string"==typeof o?e[r]=[o,n]:o.push(n),e},{}),c=(e,t)=>{if(Array.isArray(e)){t=t.toLowerCase();const n=r.findLast(e,([e])=>e.toLowerCase()===t);return null==n?void 0:n[1]}{const n=e[t];return Array.isArray(n)?n[n.length-1]:n}},l=(e,t,n)=>{const o=t.toLowerCase();if(Array.isArray(e)){const s=r.findLast(e,([e])=>e.toLowerCase()===o);s?s[1]=n:e.push([t,n])}else{e[Object.keys(e).find(e=>e.toLowerCase()===o)||t]=n}},d=(e,t)=>(e=r.cloneDeep(e),Object.entries(t).forEach(([t,n])=>l(e,t,n)),e);function u(e){return Array.isArray(e)?e[e.length-1]:e}function p(e,t=","){return Array.isArray(e)?r.flatMap(e,e=>e.split(t).map(e=>e.trim())):e?e.split(t).map(e=>e.trim()):[]}function h(e){return r.mapValues(r.pickBy(e,(e,t)=>e&&t),e=>r.isArray(e)?e.join(", "):e)}},2:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"j",(function(){return l})),n.d(t,"h",(function(){return d})),n.d(t,"g",(function(){return h})),n.d(t,"d",(function(){return m})),n.d(t,"f",(function(){return b})),n.d(t,"i",(function(){return y})),n.d(t,"e",(function(){return v})),n.d(t,"c",(function(){return E})),n.d(t,"a",(function(){return C}));var r=n(245),o=n(62),s=n(565),i=n.n(s);n(738);const a={textInputFontSize:"13px",textSize:"15px",subHeadingSize:"18px",headingSize:"20px",largeHeadingSize:"24px",loudHeadingSize:"38px"},c=1100,l="#f1971f",d="#e1421f",u=Object.assign(Object.assign({fontFamily:"Lato, Arial, sans-serif",monoFontFamily:"'Fira Mono', monospace",mainBackground:"#fafafa",mainLowlightBackground:"#eaeaea",mainColor:"#222",lowlightTextOpacity:.65,pillContrast:.8,primaryInputBackground:"#1076b9",primaryInputColor:"#fafafa",secondaryInputBorder:"#7ab2e2",secondaryInputColor:"#1665af",textInputBackground:"#fafafa",textInputColor:"#222222",highlightBackground:"#ffffff",highlightColor:"#222",popColor:d,warningColor:l,warningBackground:"#f1971f40",containerBackground:"#d8e2e6",containerWatermark:"#a0afaf",containerBorder:"#888",linkColor:"#0000EE",visitedLinkColor:"#551A8B",monacoTheme:"vs-custom",modalGradient:"radial-gradient(#40404b, #111118)"},a),{globalCss:""}),p=Object.assign(Object.assign({fontFamily:"Lato, Arial, sans-serif",monoFontFamily:"'Fira Mono', monospace",mainBackground:"#222222",mainLowlightBackground:"#303030",mainColor:"#efefef",lowlightTextOpacity:.6,pillContrast:.8,primaryInputBackground:"#0868c1",primaryInputColor:"#fafafa",secondaryInputBorder:"#1b5b96",secondaryInputColor:"#6babe6",textInputBackground:"#fafafa",textInputColor:"#222222",highlightBackground:"#111111",highlightColor:"#efefef",popColor:d,warningColor:l,warningBackground:"#f1971f40",containerBackground:"#3c3c41",containerWatermark:"#757580",containerBorder:"#000000",linkColor:"#8699ff",visitedLinkColor:"#ac7ada",monacoTheme:"vs-dark-custom",modalGradient:"radial-gradient(#ffffff,#9c9c9c)"},a),{globalCss:r.css`
        ::-webkit-scrollbar {
            background-color: ${e=>o.a(.2,e.theme.containerBackground)};
        }

        ::-webkit-scrollbar-thumb {
            background-color: ${e=>o.c(.2,e.theme.containerBackground)};
        }

        /* Standard, but poorly supported: */
        scrollbar-color: dark;
    `}),h=Object.assign(Object.assign({fontFamily:"Lato, Arial, sans-serif",monoFontFamily:"'Fira Mono', monospace",mainBackground:"#000000",mainLowlightBackground:"#262626",mainColor:"#ffffff",lowlightTextOpacity:.8,pillContrast:.95,primaryInputBackground:"#0868c1",primaryInputColor:"#ffffff",secondaryInputBorder:"#ffffff",secondaryInputColor:"#ffffff",textInputBackground:"#ffffff",textInputColor:"#000000",highlightBackground:"#ffffff",highlightColor:"#000",popColor:d,warningColor:l,warningBackground:"#f1971f40",containerBackground:"#404045",containerWatermark:"#a0a0b0",containerBorder:"#000000",linkColor:"#8699ff",visitedLinkColor:"#ac7ada",monacoTheme:"hc-black-custom",modalGradient:"#c0c0c0"},a),{globalCss:""}),m={light:u,dark:p,"high-contrast":h},g={"editorWarning.foreground":"#ff0000"},f=["vs","vs-dark","hc-black"];function b(e){f.forEach(t=>{e.editor.defineTheme(t+"-custom",{base:t,inherit:!0,rules:[],colors:g})})}const{default:y,css:v,createGlobalStyle:x,keyframes:w,ThemeProvider:E}=r,C=x`
    ${i.a};

    body {
        font-family: ${e=>e.theme.fontFamily};
        color: ${e=>e.theme.mainColor};
        background-color: ${e=>e.theme.containerBackground};
    }

    input {
        font-family: ${e=>e.theme.fontFamily};
    }

    em {
        font-style: italic;
    }

    strong {
        font-weight: bold;
    }

    :active {
        outline: none;
    }

    .slow-spin {
        animation: fa-spin 5s infinite linear;
    }

    /* Override Auth0's style choices to match the rest of the UI */
    .auth0-lock {
        font-family: ${e=>e.theme.fontFamily} !important;

        .auth0-lock-overlay {
            display: none; /* We have our own overlay we'll use instead */
        }

        .auth0-lock-widget {
            box-shadow: 0 2px 10px 0 rgba(0,0,0,0.2) !important;
            overflow: visible !important;
        }

        .auth0-lock-form {
            .auth0-lock-name {
                font-size: ${a.headingSize} !important;
            }

            p, .auth0-lock-social-button-text {
                font-size: ${a.textSize} !important;
            }
        }
    }

    /* Override some Monaco CSS internals */
    .monaco-editor {
        /* Our editors don't have real filenames, so hide that from error popups: */
        .zone-widget .filename {
            display: none;
        }
    }

    ${e=>e.theme.globalCss}
`},20:function(e,t,n){"use strict";n.d(t,"d",(function(){return d})),n.d(t,"e",(function(){return u})),n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h})),n.d(t,"c",(function(){return g}));var r=n(0),o=n(5),s=n(2),i=n(7),a=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i};const c=Object(s.i)(e=>r.createElement(i.b,{className:e.className,icon:["fas",e.collapsed?"chevron-down":"chevron-up"],onClick:e.onClick}))`
    cursor: pointer;
    user-select: none;

    padding: 4px 10px;

    ${e=>"right"===e.headerAlignment?"margin: 0 -10px 0 -3px;":"margin: 0 -3px 0 -10px;"}

    &:hover {
        color: ${e=>e.theme.popColor};
    }
`,l=s.i.section.attrs(e=>{var t;return{onClick:e.disabled?void 0:e.onClick,onKeyDown:e.disabled?void 0:e.onKeyDown,tabIndex:e.disabled?void 0:e.tabIndex,headerAlignment:null!==(t=e.headerAlignment)&&void 0!==t?t:"right"}})`
    box-sizing: border-box;

    ${e=>e.disabled&&"\n        opacity: 0.5;\n    "}

    ${e=>!e.disabled&&e.onClick&&"\n        cursor: pointer;\n\n        &:hover {\n            box-shadow: 0 2px 20px 0 rgba(0,0,0,0.3);\n        }\n\n        &:active {\n            box-shadow: unset;\n        }\n    "}

    background-color: ${e=>e.theme.mainBackground};
    border-radius: 4px;
    box-shadow: 0 2px 10px 0 rgba(0,0,0,0.2);

    position: relative;

    > header h1, > h1 {
        font-size: ${e=>e.theme.headingSize};
        font-weight: bold;
    }

    > header {
        display: flex;
        align-items: center;
        justify-content: flex-end;

        ${e=>"left"===e.headerAlignment&&"\n            flex-direction: row-reverse;\n        "}

        gap: 8px;
    }
`,d=Object(s.i)(l)`
    padding: 15px;

    > header:not(:last-child), > h1:not(:last-child) {
        margin-bottom: 15px;
    }
`,u=Object(s.i)(l)`
    padding: 20px;
    margin-bottom: 20px;

    > header, > h1 {
        text-transform: uppercase;
        text-align: right;
        color: ${e=>e.theme.containerWatermark};

        &:not(:last-child) {
            margin-bottom: 20px;
        }
    }
`,p=Object(s.i)(u)`
    padding: 30px;

    > header:not(:last-child), > h1:not(:last-child) {
        margin-bottom: 30px;
    }
`;let h=class extends r.Component{constructor(){super(...arguments),this.cardRef=r.createRef(),this.toggleCollapse=()=>{this.props.onCollapseToggled&&(requestAnimationFrame(()=>{this.cardRef.current&&this.cardRef.current.scrollIntoView({block:"nearest",behavior:"smooth"})}),this.props.onCollapseToggled())},this.onKeyDown=e=>{e.target===this.cardRef.current&&"Enter"===e.key&&this.toggleCollapse()}}render(){var e,t;return r.createElement(m,{className:this.props.className,collapsed:this.props.collapsed,expanded:null!==(e=this.props.expanded)&&void 0!==e&&e,direction:this.props.direction,headerAlignment:null!==(t=this.props.headerAlignment)&&void 0!==t?t:"right",tabIndex:0,ref:this.cardRef,onKeyDown:this.onKeyDown},this.renderChildren())}renderChildren(){const{children:e,collapsed:t,headerAlignment:n}=this.props,o=!!this.props.onCollapseToggled;return r.Children.map(e,(e,s)=>{if(0!==s)return t?null:e;if(!o)return e;if("header"!==e.type)throw new Error("First child of collapsible card must be a header but was "+("string"==typeof e.type?e.type:e.type.name));return r.cloneElement(e,{},r.Children.toArray(e.props.children).concat(r.createElement(c,{key:"collapse-icon",collapsed:t,onClick:this.toggleCollapse,headerAlignment:null!=n?n:"right"})))})}};h=a([o.e],h);const m=Object(s.i)(u)`
    display: flex;
    flex-direction: column;

    transition: margin-bottom 0.1s;

    ${e=>e.collapsed&&s.e`
        :not(:last-child) {
            margin-bottom: -16px;
        }
    `}

    ${e=>e.expanded&&s.e`
        /* Override the Send container setting this to 'none', which hides non-expanded parts: */
        display: flex !important;

        height: 100%;
        width: 100%;
        border-radius: 0;
        margin: 0;

        flex-shrink: 1;
        min-height: 0;

        ${"starting"===e.expanded?"\n                padding-top: 40px;\n                padding-bottom: 40px;\n            ":"transition: padding 0.1s;"}
    `}

    &:focus {
        ${c} {
            color: ${e=>e.theme.popColor};
        }
    }

    &:focus-within {
        header h1 {
            color: ${e=>e.theme.popColor};
        }

        outline: none;
        border-color: ${e=>e.theme.popColor};
    }

    ${e=>{return"right"===(t=e.direction)?s.e`
        padding-right: 15px;
        border-right: solid 5px ${e=>e.theme.containerBorder};
    `:"left"===t?s.e`
        padding-left: 15px;
        border-left: solid 5px ${e=>e.theme.containerBorder};
    `:"";var t}};
`,g=Object(s.i)(e=>r.createElement("h1",{className:e.className,onClick:e.onCollapseToggled},e.children))`
    cursor: pointer;
    user-select: none;
`},21:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return o})),n.d(t,"e",(function(){return s})),n.d(t,"g",(function(){return i})),n.d(t,"j",(function(){return a})),n.d(t,"f",(function(){return c})),n.d(t,"h",(function(){return h})),n.d(t,"l",(function(){return m})),n.d(t,"c",(function(){return g})),n.d(t,"i",(function(){return f})),n.d(t,"b",(function(){return b})),n.d(t,"d",(function(){return y})),n.d(t,"m",(function(){return v})),n.d(t,"k",(function(){return x}));var r=n(4);const o="undefined"==typeof window;function s(){return{}}function i(...e){for(let t of e)if(r.isArray(t)&&r.isFunction(t[0])){const[e,n]=t;if(e()&&n)return n}else if(t)return t}function a(e,...t){let n="";const r=Math.min(e.length,...t.map(e=>e.length));for(let o=0;o<r;o++){const r=e[o];if(!t.every(e=>e[o]===r))break;n+=r}return n}function c(e){return{byteLength:e}}const l=new TextEncoder,d=new TextDecoder("utf8",{fatal:!0}),u=new TextDecoder("utf8",{fatal:!1}),p=new TextDecoder("latin1",{fatal:!1});function h(e){try{const t=e.slice(0,1024);return d.decode(t),!0}catch(e){return!1}}function m(t,n="utf8"){if("utf8"===n)return e.from(l.encode(t));if("binary"===n)return e.from(t,n);throw new Error("Cannot decode string from unrecogized encoding: "+n)}function g(e,t="utf8"){if("utf8"===t)return u.decode(e);if("binary"===t)return p.decode(e);throw new Error("Cannot convert buffer to unrecogized encoding: "+t)}function f(e){return e&&"Buffer"===e.type&&!!e.data}function b(t){return t?e.isBuffer(t)?t:"string"==typeof t?m(t):f(t)?e.from(t.data):e.from(t.buffer,t.byteOffset,t.byteLength):e.from([])}function y(e){return e?"string"==typeof e?new Blob([e]).size:f(e)?e.data.length:e.length:0}function v(e){try{return JSON.parse(e)}catch(e){return}}function x(e,t,n){return r.isArray(e)?e.map(e=>x(e,t)):r.isPlainObject(e)?r.mapValues(e,(e,n)=>x(e,t,n)):t(e,n)}}).call(this,n(25).Buffer)},23:function(e,t,n){"use strict";n.d(t,"e",(function(){return d})),n.d(t,"j",(function(){return u})),n.d(t,"a",(function(){return p})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return m})),n.d(t,"h",(function(){return g})),n.d(t,"f",(function(){return f})),n.d(t,"g",(function(){return b})),n.d(t,"i",(function(){return y})),n.d(t,"b",(function(){return v}));var r=n(0),o=n(672),s=n(1),i=n(9),a=n(60),c=n(26),l=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))};function d(e){return e&&!!e.$$typeof}const u=Object(s.observable)({height:window.innerHeight,width:window.innerWidth});window.addEventListener("resize",Object(s.action)(()=>{u.height=window.innerHeight,u.width=window.innerWidth}));const p=navigator.platform.startsWith("Mac")?"⌘":"Ctrl";function h(e){return navigator.platform.startsWith("Mac")?e.metaKey:e.ctrlKey}const m=e=>{if(!e)return!1;const t=e,n=t.tagName;return t.isContentEditable||"TEXTAREA"===n||"INPUT"===n||"SELECT"===n},g=(e,t,n)=>Object(o.a)(e,t,{filter:()=>!0},n);function f(e,t,n){const r=document.createElement("a"),o=new Blob([n],{type:t}),s=window.URL.createObjectURL(o);r.setAttribute("href",s),r.setAttribute("download",e),r.style.display="none",document.body.appendChild(r),r.click(),document.body.removeChild(r),setTimeout(()=>window.URL.revokeObjectURL(s),1e4)}function b(e="arraybuffer",t=[]){var n;if("path"===e&&!i.C.value)try{const e=window.prompt("Path selection can only be used from Electron. Please enter a path manually:");return Promise.resolve(e)}catch(e){if(!(null===(n=null==e?void 0:e.message)||void 0===n?void 0:n.includes("prompt() is and will not be supported")))return Promise.reject(e);console.warn("Unexpected Electron prompt() error")}const r=document.createElement("input");r.setAttribute("type","file"),t.length>0&&r.setAttribute("accept",t.join(","));const o=Object(a.c)();return r.addEventListener("change",()=>{if(!r.files||!r.files.length)return o.resolve(null);const t=r.files[0];if("path"===e)o.resolve(t.path);else{const n=new FileReader;n.addEventListener("load",()=>{o.resolve(n.result)}),n.addEventListener("error",e=>{o.reject(e)}),"text"===e?n.readAsText(t):n.readAsArrayBuffer(t)}}),r.click(),Promise.race([o.promise,Object(a.b)(6e5)]).catch(()=>{}).then(()=>r.remove()),o.promise}function y(e,t){const[n,o]=r.useState(t);return r.useEffect(()=>{const t=new ResizeObserver(()=>{const t=e.current;t?o(t.clientWidth):Object(c.d)("Element resized, but no ref available")});return e.current?t.observe(e.current):Object(c.d)("No element to observe for resizing!"),()=>t.disconnect()},[]),n}function v(e){return l(this,void 0,void 0,(function*(){if(navigator.clipboard)try{return void(yield navigator.clipboard.writeText(e))}catch(e){console.warn("Copy to clipboard with navigator.clipboard failed",e)}const t=document.createElement("textarea");try{t.value=e,t.style.position="absolute",t.style.left="-9999px",document.body.prepend(t),t.select(),document.execCommand("copy")}catch(e){throw console.warn("Copy to clipboard fallback failed",e),e}finally{t.remove()}}))}},24:function(e,t,n){"use strict";function r(e){return"object"==typeof e&&(e instanceof Error||e.message||e.code||e.stack)}function o(e){return r(e)?e:new Error(e.message||e.toString())}n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return s})),n.d(t,"d",(function(){return i}));class s extends Error{constructor(e,t=(e=>e)){super("Unhandled case value: "+t(e))}}const i=(e,t=(e=>e))=>{throw new s(e,t)}},246:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return i}));var r=n(1),o=n(21),s=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i};class i{constructor(e,t){this.messageIndex=t,this.cache=r.observable.map(new Map,{deep:!1}),this.inputMessage=e}get direction(){return this.inputMessage.direction}get content(){return Object(o.b)(this.inputMessage.content)}get isBinary(){return this.inputMessage.isBinary}get contentType(){if(this.inputMessage.isBinary)return"raw";const e=this.content.slice(0,10).toString("utf-8");return e.includes("{")||e.includes("[")?"json":"text"}get timestamp(){return this.inputMessage.eventTimestamp}cleanup(){this.inputMessage.content=e.from([]),this.cache.clear()}}s([r.observable],i.prototype,"inputMessage",void 0),s([r.computed],i.prototype,"content",null)}).call(this,n(25).Buffer)},249:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return i}));var r=n(4),o=n(673);const s=o.a.encode.bind(o.a),i=["bool","int","uint",...r.flatMap(r.range(8,257,8),e=>["int"+e,"uint"+e]),"address","string","bytes",...r.range(1,33).map(e=>"bytes"+e)]},250:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return v}));var r=n(4),o=n(69),s=n(341),i=n.n(s),a=n(644),c=n.n(a),l=n(21),d=n(19),u=n(251),p=n(84);const h=new i.a({coerceTypes:"array",strict:!1,strictSchema:!1,formats:new Proxy({},{get:(e,t)=>!(t in e)||e[t]})});function m(e,t,n){if(!t||!n||"aborted"===n)return{};const o=Object(d.g)(n.headers["content-type"])||"*/*",s=t.content;if(!s)return{};const i=r.sortBy(Object.keys(s),e=>r.sumBy(e,e=>"*"===e?1:0)),a=r.find(i,e=>null!==new RegExp("^"+e.replace(/\*/g,".*").replace(/;.*/g,"")).exec(o));return a?Object.assign({description:t.description,components:e.components},s[a].schema):{}}function g(e,t){const{parsedUrl:n}=t,r=`${n.protocol}//${n.hostname}${n.pathname}`,o=e.serverMatcher.exec(r);return o?r.slice(o[0].length):n.pathname}function f(e){return e?e.replace(/(<([^>]+)>)/gi,""):e}c()(h);class b{constructor(e,t){this.isBuiltInApi=!0===e.spec.info["x-httptoolkit-builtin-api"];const{request:n}=t;this.service=new y(e.spec),this._spec=e.spec,this._opSpec=v(e,n),this.operation=new x(this._opSpec),this.request=new w(e.spec,this._opSpec,n),t.response&&this.updateWithResponse(t.response)}updateWithResponse(e){"aborted"!==e&&void 0!==e&&(this.response=new E(this._spec,this._opSpec,e))}matchedOperation(){return this._opSpec.matched}}class y{constructor(e){var t,n,r;const{info:o}=e;this.name=o.title,this.shortName=null!==(t=o["x-httptoolkit-short-name"])&&void 0!==t?t:this.name.split(" ")[0],this.logoUrl=null===(n=o["x-logo"])||void 0===n?void 0:n.url,this.description=Object(p.a)(o.description),this.docsUrl=null===(r=null==e?void 0:e.externalDocs)||void 0===r?void 0:r.url}}function v(e,t){const n=function(e,t){const{parsedUrl:n}=t,o=`${n.protocol}//${n.host}${n.pathname}`;if(e.serverMatcher.exec(o))for(let t of e.requestMatchers.keys())if(t.pathMatcher.exec(o)&&r.every(t.queryMatcher,(e,t)=>{const o=n.searchParams.getAll(t);return e?"string"==typeof e?r.includes(o,e):r.intersection(o,e).length===e.length:o.length>0}))return e.requestMatchers.get(t)}(e,t),{pathSpec:s,path:i}=n||{pathSpec:Object(l.e)(),path:g(e,t)},a=(Object(d.g)(t.headers["x-http-method-override"])||t.method).toLowerCase();let c=Object(o.get)(s,a);return c||"head"!==a||(c=Object(o.get)(s,"get")),{method:a,path:i,pathSpec:s,spec:c||Object(l.e)(),matched:void 0!==c}}class x{constructor(e){this.warnings=[],this.name=f(Object(p.a)(Object(l.g)([()=>(Object(o.get)(e.spec,"summary","length")||1/0)<40,e.spec.summary],Object(o.get)(e.spec,"operationId"),[()=>(Object(o.get)(e.spec,"description","length")||1/0)<40,e.spec.description],e.pathSpec.summary)||`${e.method.toUpperCase()} ${e.path}`).__html),this.description=Object(p.a)(Object(l.g)([()=>Object(o.get)(e.spec,"description")!==this.name,Object(o.get)(e.spec,"description")],[()=>Object(o.get)(e.spec,"summary")!==this.name,Object(o.get)(e.spec,"summary")],e.pathSpec.description)),e.matched||this.warnings.push(`Unknown operation '${this.name}'.`),e.spec.deprecated&&this.warnings.push(`The '${this.name}' operation is deprecated.`),this.docsUrl=Object(o.get)(e.spec,"externalDocs","url"),this.warnings=this.warnings.map(e=>f(e))}}class w{constructor(e,t,n){this.parameters=function(e,t,n){if(!t)return[];const o=n.parsedUrl.searchParams;return r.uniqBy(t,e=>`${e.name}::${e.in}`).map(t=>{const r=t.schema,s={specParam:t,name:t.name,in:t.in,description:Object(p.a)(t.description),required:t.required||"path"===t.in,type:r&&r.type,defaultValue:r&&r.default,enum:r&&(r.enum||r.items&&r.items.enum),deprecated:t.deprecated||!1,warnings:[]};switch(t.in){case"query":let r=o.getAll(t.name);return s.type&&"boolean"===s.type&&t.allowEmptyValue&&(r=r.map(e=>""===e||e)),Object.assign(Object.assign({},s),{value:Object(l.g)([()=>r.length>1,r],[()=>1===r.length,r[0]])});case"path":const i=new RegExp(e.replace(`{${t.name}}`,"([^/]+)").replace(/\{[^\}]+\}/g,"[^/]+")+"$","i").exec(n.parsedUrl.pathname);return Object.assign(Object.assign({},s),{value:i?i[1]:void 0});case"header":return Object.assign(Object.assign({},s),{value:n.headers[t.name.toLowerCase()]});default:return Object.assign(Object.assign({},s),{value:void 0})}}).map(e=>{const{specParam:t}=e,n=t.style||{query:"form",path:"simple",header:"simple",cookie:"form"}[t.in];if("array"===e.type&&(("simple"===n||"form"===n&&!1===t.explode)&&(e.value=r.isString(e.value)?e.value.split(","):e.value),"spaceDelimited"===n&&(e.value=r.isString(e.value)?e.value.split(" "):e.value),"pipeDelimited"===n&&(e.value=r.isString(e.value)?e.value.split("|"):e.value)),e.required&&void 0===e.value&&void 0===e.defaultValue&&e.warnings.push(`The '${e.name}' ${t.in} parameter is required.`),e.deprecated&&void 0!==e.value&&e.warnings.push(`The '${e.name}' ${t.in} parameter is deprecated.`),t.schema&&void 0!==e.value){const n={value:e.value};!h.validate({type:"object",properties:{value:t.schema}},n)&&h.errors&&e.warnings.push(...h.errors.map(t=>Object(u.a)(n,t,t=>t.replace(/^\/value/,e.name)))),e.value=n.value}return Object.assign(Object.assign({},e),{warnings:e.warnings.map(e=>f(e))})})}(t.path,(t.pathSpec.parameters||[]).concat(t.spec.parameters||[]),n),this.bodySchema=m(e,t.spec.requestBody,n)}}class E{constructor(e,t,n){const r=t.spec.responses?t.spec.responses[n.statusCode.toString()]||t.spec.responses.default:void 0;this.description=r&&r.description!==n.statusMessage?Object(p.a)(r.description):void 0,this.bodySchema=m(e,r,n)}}},251:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(4),o=(n(645),n(67));const s=(e,t)=>0===t.length?e:s(e[t[0]],t.slice(1));function i(e,t,n=r.identity){var i;const a=(null===(i=t.instancePath)||void 0===i?void 0:i.length)?s(e,t.instancePath.slice(1).split("/")):e;return(n(t.instancePath)||"Document")+` (${Object(o.c)(JSON.stringify(a),50)}) ${t.message}${"enum"===t.keyword?` (${Object(o.b)(t.params.allowedValues,", ",", or ")})`:""}.`}},252:function(e,t){e.exports='<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="UTF-8">\n  <link rel=\'shortcut icon\' type=\'image/x-icon\' href=\'/favicon.ico\' />\n  <script type="application/json" id="amiusing">\n    { "amiusing": true }\n  <\/script>\n  <title>\n    Are you using HTTP Toolkit? Yes!\n  </title>\n  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">\n  <style>\n    html {\n      height: 100%;\n    }\n\n    body {\n      min-height: 100%;\n      box-sizing: border-box;\n      margin: 0;\n      padding: 8px;\n\n      background-color: #d8e2e6;\n      font-family: Lato;\n      line-height: 1.3;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n    }\n\n    .content {\n      max-width: 600px;\n    }\n\n    h1 {\n      font-size: 36pt;\n    }\n\n    p {\n      font-size: 18pt;\n    }\n\n    .logo {\n      display: block;\n      margin: 40px auto;\n      height: 200px;\n      width: 200px;\n    }\n  </style>\n</head>\n<body>\n  <div class="content">\n    <h1>You\'re being intercepted by HTTP Toolkit</h1>\n    <p>\n      This response came from HTTP Toolkit, which is currently intercepting this connection.\n    </p>\n    <p>\n      All requests made by this browser will be recorded by HTTP Toolkit.\n      Take a look at the \'View\' tab there now to see the request & response\n      that brought you this page, or start browsing elsewhere to collect more data.\n    </p>\n  </div>\n  <link href="https://fonts.googleapis.com/css?family=Lato&display=block" rel="stylesheet" />\n</body>\n</html>'},253:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(4),o=n(22),s=n(17),i=n(68);function a(e){if(!e)return e;if(void 0!==e.version)throw new Error(o`
            Could not migrate rules from unknown format (${e.version}).
            Please restart HTTP Toolkit to update.
        `);if(e.rules){e.id="root",e.title="HTTP Toolkit Rules",e.isRoot=!0;const[t,n]=r.partition(e.rules,e=>e.id.startsWith("default-"));t.length?e.items=[...n,Object(i.b)(t)]:e.items=n,delete e.rules}return e.items=e.items.map(c),e}function c(e){return Object(s.k)(e)?e.items=e.items.map(c):e=function(e){void 0===e.type&&(e.type="http");const{handler:t}=e;"passthrough"===(null==t?void 0:t.type)&&t.forwardToLocation&&!t.forwarding&&(t.forwarding={targetHost:t.forwardToLocation,updateHostHeader:!0});return e}(e),e}},255:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return i}));var r=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))};function o(e){const t=/\r?\n/,n=new TextDecoder;let o,s="";return new ReadableStream({start(){o=e.getReader()},pull(e){var i;return r(this,void 0,void 0,(function*(){const{done:r,value:a}=yield o.read();r&&(s.length>0&&e.enqueue(s),e.close());const c=n.decode(a,{stream:!0});s+=c;const l=s.split(t);s=null!==(i=l.pop())&&void 0!==i?i:"";for(const t of l)e.enqueue(t)}))},cancel(e){o.cancel(e)}})}function s(e){let t;return new ReadableStream({start(){t=e.getReader()},pull(e){return r(this,void 0,void 0,(function*(){const{done:n,value:r}=yield t.read();if(n)return e.close();e.enqueue(JSON.parse(r))}))},cancel(e){t.cancel(e)}})}const i=()=>new ReadableStream({start(e){e.close()}})},259:function(e,t,n){"use strict";n.d(t,"b",(function(){return w})),n.d(t,"a",(function(){return E})),n.d(t,"c",(function(){return C}));var r=n(4),o=n(1),s=n(22),i=n.n(s),a=n(26),c=n(21),l=n(60),d=n(19),u=n(9),p=n(61),h=n(36),m=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},g=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))};class f{constructor(e,t,n){this.getContentEncodingHeader=n,this.updateEncodedBody=r.throttle(()=>{const e=Object(h.d)((()=>g(this,void 0,void 0,(function*(){const t=this.contentEncodings,n=yield Object(p.c)(this._decodedBody,t).catch(e=>(Object(a.d)(e,{encodings:t}),this._decodedBody));return Object(o.runInAction)(()=>{this._encodingPromise===e&&(this._encodedBody=n)}),n})))());this._encodingPromise=e},500,{leading:!0,trailing:!0}),this._decodedBody=e,t?(this._encodedBody=t,this._encodingPromise=Object(h.d)(Promise.resolve(t))):(this._encodedBody=void 0,this.updateEncodedBody()),Object(o.reaction)(()=>this._decodedBody,()=>this.updateEncodedBody()),Object(o.reaction)(()=>this.contentEncodings,()=>this.updateEncodedBody())}updateDecodedBody(e){this._decodedBody=e}get contentEncodings(){return Object(d.c)(this.getContentEncodingHeader())}get contentLength(){var e;return(null===(e=this._encodedBody)||void 0===e?void 0:e.byteLength)||0}get encoded(){return this._encodingPromise}get decoded(){return this._decodedBody}}m([o.observable.ref],f.prototype,"_decodedBody",void 0),m([o.observable.ref],f.prototype,"_encodedBody",void 0),m([o.observable.ref],f.prototype,"_encodingPromise",void 0),m([o.action],f.prototype,"updateDecodedBody",null),m([o.computed.struct],f.prototype,"contentEncodings",null),m([o.computed],f.prototype,"contentLength",null);var b=n(50),y=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},v=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))};function x(e){return Object(p.b)(e.body.buffer,Object(d.c)(e.headers["content-encoding"])).catch(e=>{Object(a.d)(e);const t=i.a`
            HTTP TOOLKIT ERROR: Could not decode body, \
            check content-encoding
        `;return{encoded:Object(c.l)(t),decoded:Object(c.l)(t)}})}function w(e){var t;return v(this,void 0,void 0,(function*(){const{encoded:n,decoded:r}=yield x(e);Object(o.observable)(e.headers);return new O({method:e.method,url:e.url,rawHeaders:null!==(t=e.rawHeaders)&&void 0!==t?t:Object(d.f)(e.headers)},r,n)}))}function E(e){return new S({statusCode:200,statusMessage:void 0,rawHeaders:2===e?[[":status","200"]]:[]},Object(c.l)(""),Object(c.l)(""))}function C(e){var t;return v(this,void 0,void 0,(function*(){const n=Object(b.d)(e.statusCode)===e.statusMessage?void 0:e.statusMessage,{encoded:r,decoded:o}=yield x(e);return new S({statusCode:e.statusCode,statusMessage:n,rawHeaders:null!==(t=e.rawHeaders)&&void 0!==t?t:Object(d.f)(e.headers)},o,r)}))}class T{constructor(e,t,n){this.resume=()=>v(this,void 0,void 0,(function*(){var e;this.deferred.resolve(Object.assign(Object.assign(Object.assign({},this.resultMetadata),Object(u.F)(yield u.E,u.t)?{rawBody:yield this.editableBody.encoded}:{body:yield this.editableBody.encoded}),{headers:(e=Object(d.h)(this.resultMetadata.rawHeaders),r.omitBy(e,(e,t)=>t.startsWith(":")))}))})),this.deferred=Object(l.c)(),this.resultMetadata=e,this.editableBody=new f(t,n,()=>Object(d.d)(this.resultMetadata.rawHeaders,"Content-Encoding")),Object(o.observe)(this.editableBody,"contentLength",({oldValue:e,newValue:t})=>{const{rawHeaders:n}=this.resultMetadata;parseInt(Object(d.d)(n,"Content-Length")||"",10)===e&&this.updateMetadata({rawHeaders:Object(d.j)(n,{"Content-Length":t.toString()})})});let s=Object(d.d)(this.resultMetadata.rawHeaders,"Content-Length");Object(o.reaction)(()=>Object(d.d)(this.resultMetadata.rawHeaders,"Content-Length"),e=>{if(void 0===s&&""===e){const{rawHeaders:e}=this.resultMetadata;this.updateMetadata({rawHeaders:Object(d.j)(e,{"Content-Length":this.editableBody.contentLength.toString()})})}s=e})}get inProgressResult(){return Object.assign({body:this.editableBody},this.resultMetadata)}updateMetadata(e){this.resultMetadata=Object.assign(Object.assign({},this.resultMetadata),r.omit(e,"body","rawBody"))}updateBody(e){this.editableBody.updateDecodedBody(e)}waitForCompletedResult(){return this.deferred.promise}reject(e){this.deferred.reject(e)}}y([o.observable.shallow],T.prototype,"resultMetadata",void 0),y([o.action.bound],T.prototype,"updateMetadata",null),y([o.action.bound],T.prototype,"updateBody",null);class O extends T{constructor(){super(...arguments),this.close=()=>{this.deferred.resolve({response:"close"})}}respondDirectly(e){this.deferred.resolve({response:e})}}class S extends T{constructor(){super(...arguments),this.close=()=>{this.deferred.resolve("close")}}}},26:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return l})),n.d(t,"e",(function(){return d})),n.d(t,"d",(function(){return p}));var r=n(102);n.d(t,"a",(function(){return r}));var o=n(79),s=n(9),i=n(101);let a=!1;function c(){return a}function l(e){e&&(r.init({dsn:e,release:s.y,ignoreErrors:["ResizeObserver loop limit exceeded"],beforeSend:function(e,t){const n=null==t?void 0:t.originalException;return n instanceof i.a&&(e.fingerprint=["{{ default }}",n.operationName,...n.errorCode?[n.errorCode.toString()]:[]]),e}}),a=!0,s.E.then(e=>u("version:server",e)),s.C.then(e=>u("version:desktop",e)),"undefined"!=typeof window&&window.addEventListener("beforeunload",()=>{r.getCurrentHub().getClient().getOptions().enabled=!1,a=!1}),r.configureScope(e=>{const t=o();e.setUser({id:t,username:"anon-"+t})}))}function d(e){a&&r.configureScope(t=>{t.setUser({id:e,email:e})})}function u(e,t){a&&r.configureScope(n=>{n.setTag(e,t)})}function p(e,t={}){console.log("Reporting error:",e,t),a&&r.withScope(n=>{Object.entries(t).forEach(([e,t])=>{n.setExtra(e,t)}),"string"==typeof e?r.captureMessage(e):e instanceof Error?r.captureException(e):(console.warn("Reporting non-error",e),r.captureMessage("Non-error thrown: "+e))})}},28:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return h}));var r=n(4),o=n(0),s=n(62),i=n(2),a=n(15);function c(e){return s.b(e.mainBackground)>.5?s.a(.4,e.mainBackground):s.c(.4,e.mainBackground)}const l=i.e`
    display: inline-block;
    border-radius: 4px;
    padding: 4px 8px;

    text-align: center;
    text-transform: none;
    font-weight: bold;
    word-spacing: 3px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    color: ${e=>function(e,t){const n=s.d(.3,e,t.mainBackground),r=s.g(t.pillContrast,e),o=s.g(1-t.pillContrast,e);return s.f(s.e(n,o,r),t.pillContrast)}(e.color||c(e.theme),e.theme)};

    background-color: ${e=>{return t=e.color||c(e.theme),s.f(t,.3);var t}};
`,d=i.i.span`
    ${l}
`,u=Object(i.i)(a.f)`
    ${l}
    ${a.h}

    line-height: 1;

    &[disabled] {
        opacity: 0.5;
    }
`,p=Object(i.i)(d.withComponent("select"))`
    text-align: left;
    border: none;

    height: 24px;
    padding: 0 4px 3px 8px;

    font-size: ${e=>e.theme.textSize};
    font-family: ${e=>e.theme.fontFamily};

    ${a.h}

    * {
        background-color: ${e=>{return t=e.color||c(e.theme),n=e.theme,s.d(.3,t,n.mainBackground);var t,n}};
    }
`,h=e=>{const t=e.keyFormatter||(e=>e.toString()),n=e.nameFormatter||(e=>e.toString());return o.createElement(p,{onChange:t=>e.onChange(t.target.value),value:t(e.value)},"options"in e?e.options.map(e=>o.createElement("option",{key:t(e),value:t(e)},n(e))):r.map(e.optGroups,(e,r)=>o.createElement("optgroup",{key:r,label:r},e.map(e=>o.createElement("option",{key:t(e),value:t(e)},n(e))))))}},29:function(e,t,n){"use strict";n.d(t,"h",(function(){return d})),n.d(t,"d",(function(){return m})),n.d(t,"k",(function(){return g})),n.d(t,"c",(function(){return f})),n.d(t,"b",(function(){return y})),n.d(t,"a",(function(){return x})),n.d(t,"j",(function(){return w})),n.d(t,"g",(function(){return C})),n.d(t,"i",(function(){return T})),n.d(t,"e",(function(){return S})),n.d(t,"m",(function(){return j})),n.d(t,"f",(function(){return R})),n.d(t,"l",(function(){return q})),n.d(t,"p",(function(){return I})),n.d(t,"q",(function(){return D})),n.d(t,"o",(function(){return F})),n.d(t,"n",(function(){return B})),n.d(t,"t",(function(){return N})),n.d(t,"r",(function(){return L})),n.d(t,"s",(function(){return U}));var r=n(4),o=n(9),s=n(18),i=n(57),a=n(46),c=n(38),l=n(58);const d=e=>{var t;return null!==(t=e.uiType)&&void 0!==t?t:e.type},u={host:o.k,"raw-body":o.a,"raw-body-regexp":o.a,"raw-body-includes":o.a,"json-body":o.a,"json-body-matching":o.a,"eth-method":o.n,"rtc-wildcard":o.u,file:o.j,"req-res-transformer":o.q,"ws-echo":o.A,"ws-listen":o.A,"ws-reject":o.A,"reset-connection":o.d},p=e=>{if(!e||"*"===e)return!0;if("fulfilled"!==o.E.state)return!1;const t=o.E.value;return Object(o.F)(t,e)},h={http:s.h,websocket:i.h,ethereum:a.g,ipfs:c.j,webrtc:l.f},m=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},h.http),h.websocket),h.ethereum),h.ipfs),h.webrtc),g=(e,t)=>{const n=d(e);return!!h[t][n]},f=new Map(Object.entries(m).map(([e,t])=>[t,e])),b={http:s.f,websocket:i.f,ethereum:a.d,ipfs:c.f,webrtc:l.g},y=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},b.http),b.websocket),b.ethereum),b.ipfs),b.webrtc),v=Object.assign({},l.g),x=new Map(Object.entries(y).map(([e,t])=>[t,e])),w=(e,t)=>{const n=d(e),r=T(t),o=b[r][n],s=P[n];return!(void 0!==s&&!s(t))&&void 0!==o},E=[...s.g,...i.g,...a.f,...c.g,...l.e],C=()=>E.filter(e=>{const t=f.get(e);return p(u[t])}),T=e=>{const t=r.isString(e)?m[e]:e.constructor;if(s.g.includes(t))return"http";if(i.g.includes(t))return"websocket";if(a.f.includes(t))return"ethereum";if(c.g.includes(t))return"ipfs";if(l.e.includes(t))return"webrtc";throw new Error("Unknown type for initial matcher class: "+t.name)},O=["callback","am-i-using","default-wildcard","default-ws-wildcard","multipart-form-data","raw-body-regexp","hostname","port","protocol","form-data","cookie","rtc-page-hostname","rtc-page-regex","rtc-user-agent-regex"],S=e=>Object.values(h[e]).filter(e=>{const t=f.get(e);return!O.includes(t)&&(!E.includes(e)&&p(u[t]))}),j=e=>O.includes(e),k=["json-rpc-response","rtc-peer-proxy","callback","stream","wait-for-rtc-track"],P={"eth-call-result":e=>e instanceof a.h&&"eth_call"===e.methodName,"eth-number-result":e=>e instanceof a.h&&["eth_getBalance","eth_blockNumber","eth_gasPrice"].includes(e.methodName),"eth-hash-result":e=>e instanceof a.h&&["eth_sendRawTransaction","eth_sendTransaction"].includes(e.methodName),"eth-receipt-result":e=>e instanceof a.h&&"eth_getTransactionReceipt"===e.methodName,"eth-block-result":e=>e instanceof a.h&&["eth_getBlockByHash","eth_getBlockByNumber"].includes(e.methodName),"ipfs-cat-text":e=>e instanceof c.h&&"cat"===e.interactionName,"ipfs-cat-file":e=>e instanceof c.h&&"cat"===e.interactionName,"ipfs-add-result":e=>e instanceof c.h&&"add"===e.interactionName,"ipns-resolve-result":e=>e instanceof c.h&&"name/resolve"===e.interactionName,"ipns-publish-result":e=>e instanceof c.h&&"name/publish"===e.interactionName,"ipfs-pins-result":e=>e instanceof c.h&&["pin/add","pin/rm"].includes(e.interactionName),"ipfs-pin-ls-result":e=>e instanceof c.h&&"pin/ls"===e.interactionName},R=(e,t)=>Object.values(b[e]).filter(e=>{const n=x.get(e);if(k.includes(n))return!1;const r=P[n];return!!(void 0===r||t&&r(t))&&p(u[n])}),H=["echo-rtc","rtc-peer-proxy","rtc-dynamic-proxy","close-rtc-connection"],q=e=>{const t=d(e);return!Object.keys(v).includes(t)||H.includes(t)},A=[s.o,s.e,s.d,s.q,s.p,s.b,s.m,i.b,i.d,i.c],I=(e,t)=>("http"===e||"websocket"===e)&&r.some(A,e=>t instanceof e),D=(e,t)=>("http"===e||"websocket"===e)&&A.includes(t),$=(...e)=>t=>e.includes(t),M=e=>t=>e(t.type),F=$("http","ethereum","ipfs"),B=M(F),N=M($("websocket")),L=M($("webrtc")),U=L},32:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return p})),n.d(t,"f",(function(){return m})),n.d(t,"e",(function(){return g})),n.d(t,"g",(function(){return f})),n.d(t,"d",(function(){return b}));var r=n(4),o=n(19),s=n(51);const i=e=>{var t;return((null===(t=Object(o.g)(e.headers.accept))||void 0===t?void 0:t.split(","))||[]).map(e=>Object(s.b)(e))},a=e=>Object(s.b)(Object(o.g)(e.headers["content-type"])),c=e=>r.includes(["POST","PATCH","PUT","DELETE"],e.request.method),l=["application/json","application/xml","application/rss","text/plain","text/xml","text/json","multipart/form-data","application/x-www-form-urlencoded","application/x-protobuf"],d=["image","js","css","html","font","data","rtc-data","rtc-media","mutative","websocket","incomplete","aborted","unknown"];function u(e){if(e.isHttp()){if(!e.isCompletedExchange())return c(e)?"mutative":"incomplete";if(!e.isSuccessfulExchange())return"aborted";if(e.isWebSocket())return"websocket";if(c(e))return"mutative";if((e=>{const t=i(e.request);return!!(t.length>0&&t.every(e=>e.startsWith("image/")))||("image"===e.request.headers["sec-fetch-dest"]||a(e.response).startsWith("image/"))})(e))return"image";if("script"===(t=e).request.headers["sec-fetch-dest"]||r.includes(["text/javascript","application/javascript","application/x-javascript","application/ecmascript"],a(t.response)))return"js";if((e=>"style"===e.request.headers["sec-fetch-dest"]||r.includes(["text/css"],a(e.response)))(e))return"css";if((e=>"document"===e.request.headers["sec-fetch-dest"]||"text/html"===a(e.response))(e))return"html";if((e=>"font"===e.request.headers["sec-fetch-dest"]||a(e.response).startsWith("font/")||r.includes(["application/font-woff","application/x-font-woff","application/font-otf","application/font","application/vnd.ms-fontobject","application/x-font-ttf","application/x-font-typetype","application/x-font-opentype"],a(e.response)))(e))return"font";if((e=>{const t=i(e.request);return!!(t.length>0&&t.every(e=>l.includes(e)))||r.includes(l,a(e.response))})(e))return"data"}else{if(e.isRTCDataChannel())return"rtc-data";if(e.isRTCMediaTrack())return"rtc-media"}var t;return"unknown"}function p(e){const t=m(e);return`${r.startCase(r.findKey(h,e=>e===t))}: ${{mutative:"a request that might affect the server state (unlike a GET request)",incomplete:"an incomplete request",aborted:"an aborted request",image:"a request for an image",js:"a request for JavaScript",css:"a request for CSS",html:"a request for HTML",font:"a request for a font file",data:"an API request",websocket:"a WebSocket stream","rtc-data":"a WebRTC data stream","rtc-media":"a WebRTC media stream",unknown:"an unknown type of request"}[e]}`}const h={black:"#000",grey:"#888",red:"#ce3939",lightGreen:"#4caf7d",brightGreen:"#409309",orange:"#ff8c38",yellow:"#e9f05b",lightBlue:"#2fb4e0",darkBlue:"#5a80cc",purple:"#6e40aa",pink:"#dd3a96"};function m(e){switch("string"==typeof e?e:e.category){case"incomplete":case"aborted":return h.black;case"mutative":return h.red;case"data":case"rtc-data":return h.purple;case"websocket":return h.lightBlue;case"image":return h.lightGreen;case"font":case"rtc-media":return h.brightGreen;case"js":return h.orange;case"css":return h.yellow;case"html":return h.darkBlue;case"unknown":return h.grey}}function g(e,t){return!e||"aborted"===e||e<100||e>=600?t.mainColor:e>=500?h.red:e>=400?h.orange:e>=300?h.darkBlue:e>=200?h.lightGreen:101===e?h.lightBlue:e>=100?h.grey:h.black}function f(e,t){return e&&"aborted"!==e?1e3===e||1001===e?h.lightGreen:e>=1002&&e<=3e3?h.red:e>=3e3?h.orange:h.black:t.mainColor}function b(e){return"GET"===e?h.lightGreen:"POST"===e?h.orange:"DELETE"===e?h.red:"PUT"===e?h.purple:"PATCH"===e?h.pink:"HEAD"===e?h.darkBlue:"OPTIONS"===e?h.lightBlue:h.grey}},342:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return a}));var r=n(4),o=n(255),s=n(101),i=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))};class a{constructor(e){this.authToken=e}apiRequest(e,t,n={},o){var a,c,l,d;return i(this,void 0,void 0,(function*(){const i=`${e} ${t}`,u=yield fetch(`http://127.0.0.1:45457${t}${Object.keys(n).length?"?"+new URLSearchParams(r.mapValues(n,e=>e.toString())).toString():""}`,{method:e,headers:Object.assign(Object.assign({},this.authToken?{Authorization:"Bearer "+this.authToken}:{}),{"content-type":"application/json"}),body:o?JSON.stringify(o):void 0}).catch(e=>{var t;throw new s.a(`fetch failed with '${null!==(t=e.message)&&void 0!==t?t:e}'`,i)});if(!u.ok){const e=yield u.json().catch(e=>null);throw console.error(u.status,e),new s.a(`unexpected ${u.status} ${u.statusText} - ${(null===(a=null==e?void 0:e.error)||void 0===a?void 0:a.code)?(null===(c=null==e?void 0:e.error)||void 0===c?void 0:c.code)+" -":""}${null!==(d=null===(l=null==e?void 0:e.error)||void 0===l?void 0:l.message)&&void 0!==d?d:"[unknown]"}`,i,u.status)}return u}))}apiJsonRequest(e,t,n={},r){return i(this,void 0,void 0,(function*(){return yield(yield this.apiRequest(e,t,n,r)).json()}))}apiNdJsonRequest(e,t,n={},r){return i(this,void 0,void 0,(function*(){const s=yield this.apiRequest(e,t,n,r);return s.body?Object(o.c)(Object(o.a)(s.body)):Object(o.b)()}))}getServerVersion(){return i(this,void 0,void 0,(function*(){return(yield this.apiJsonRequest("get","/version")).version}))}getConfig(e){return i(this,void 0,void 0,(function*(){return(yield this.apiJsonRequest("GET","/config",{proxyPort:e})).config}))}getNetworkInterfaces(){return i(this,void 0,void 0,(function*(){return(yield this.apiJsonRequest("GET","/config/network-interfaces")).networkInterfaces}))}getInterceptors(e){return i(this,void 0,void 0,(function*(){return(yield this.apiJsonRequest("GET","/interceptors",{proxyPort:e})).interceptors}))}getDetailedInterceptorMetadata(e){return i(this,void 0,void 0,(function*(){return(yield this.apiJsonRequest("GET",`/interceptors/${e}/metadata`)).interceptorMetadata}))}activateInterceptor(e,t,n){return i(this,void 0,void 0,(function*(){return(yield this.apiJsonRequest("POST",`/interceptors/${e}/activate/${t}`,{},n)).result}))}sendRequest(t,n){var r;return i(this,void 0,void 0,(function*(){const o=Object.assign(Object.assign({},t),{rawBody:null===(r=t.rawBody)||void 0===r?void 0:r.toString("base64")}),s=Object.assign(Object.assign({},n),n.clientCertificate?{clientCertificate:Object.assign(Object.assign({},n.clientCertificate),{pfx:n.clientCertificate.pfx.toString("base64")})}:{}),a=yield this.apiNdJsonRequest("POST","/client/send",{},{request:o,options:s}),c=a.getReader();return new ReadableStream({pull(t){return i(this,void 0,void 0,(function*(){const{done:n,value:r}=yield c.read();if(n)return t.close();"response-body-part"===r.type?t.enqueue(Object.assign(Object.assign({},r),{rawBody:e.from(r.rawBody,"base64")})):t.enqueue(r)}))},cancel(e){a.cancel(e)}})}))}triggerServerUpdate(){return i(this,void 0,void 0,(function*(){yield this.apiJsonRequest("POST","/update")}))}}}).call(this,n(25).Buffer)},344:function(e,t,n){"use strict";(function(e){n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return s}));var r=n(14);const o=r.c({url:r.l(),method:r.l(),headers:r.l(),requestContentType:r.l(),rawBody:r.d(e=>e.toString("base64"),t=>e.from(t,"base64"))}),s="__rule_param_reference__"}).call(this,n(25).Buffer)},346:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return m}));var r=n(0),o=n(1),s=n(5),i=n(19),a=n(51),c=n(20),l=n(49),d=n(127),u=n(110),p=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i};const h=["text","raw","base64","image"];let m=class extends r.Component{componentDidMount(){Object(s.c)(this,Object(o.autorun)(()=>{this.props.message||this.onChangeContentType(void 0)}))}onChangeContentType(e){e===this.props.message.contentType?this.selectedContentType=void 0:this.selectedContentType=e}render(){const{title:t,url:n,message:o,apiBodySchema:s,direction:p,isPaidUser:m,collapsed:g,expanded:f,onCollapseToggled:b,onExpandToggled:y}=this.props,v=Object(a.c)(o.contentType,Object(i.g)(o.headers["content-type"]),o.body),x=v.includes(this.selectedContentType)?this.selectedContentType:o.contentType,w=o.body.decoded;if(w)return r.createElement(c.b,{direction:p,collapsed:g,onCollapseToggled:b,expanded:f},r.createElement("header",null,r.createElement(l.e,{body:w,mimeType:Object(i.d)(o.headers,"content-type"),downloadFilename:Object(l.f)(n,o.headers),title:t,expanded:!!f,onExpandToggled:y,onCollapseToggled:b,selectedContentType:x,contentTypeOptions:v,onChangeContentType:this.onChangeContentType,isPaidUser:m})),r.createElement(l.d,null,r.createElement(u.a,{contentId:`${o.id}-${p}`,editorNode:this.props.editorNode,rawContentType:Object(i.g)(o.headers["content-type"]),contentType:x,schema:s,expanded:!!f,cache:o.cache},w)));if(!w&&o.body.decodingError){const s=o.body.decodingError,i=e.isBuffer(o.body.encoded)?o.body.encoded:void 0,a=h.includes(this.selectedContentType)?this.selectedContentType:"text";return r.createElement(c.b,{direction:p,collapsed:g,onCollapseToggled:b,expanded:f},r.createElement("header",null,r.createElement(l.e,{body:i,mimeType:"application/octet-stream",downloadFilename:Object(l.f)(n,o.headers),title:t,expanded:f,onExpandToggled:y,onCollapseToggled:b,selectedContentType:a,contentTypeOptions:h,onChangeContentType:this.onChangeContentType,isPaidUser:m})),r.createElement(l.a,{direction:this.props.direction,error:s,headers:o.rawHeaders}),i&&r.createElement(l.d,null,r.createElement(u.a,{contentId:`${o.id}-${p}`,editorNode:this.props.editorNode,contentType:a,expanded:!!f,cache:o.cache},i)))}return r.createElement(d.a,{direction:p,collapsed:g,onCollapseToggled:b,expanded:f},r.createElement("header",null,r.createElement(l.e,{body:void 0,title:t,expanded:!!f,onExpandToggled:y,onCollapseToggled:b,selectedContentType:x,contentTypeOptions:v,onChangeContentType:this.onChangeContentType,isPaidUser:m})))}};p([o.observable],m.prototype,"selectedContentType",void 0),p([o.action.bound],m.prototype,"onChangeContentType",null),m=p([s.e],m)}).call(this,n(25).Buffer)},36:function(e,t,n){"use strict";n.d(t,"d",(function(){return i})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return d}));var r=n(1),o=n(564),s=n(60);function i(e){const t=Object(o.a)(e),n=t.then;t.then=function(){const e=n.apply(this,arguments);return i(e)};const r=t.catch;return t.catch=function(){const e=r.apply(this,arguments);return i(e)},t}function a(e){return"object"==typeof e&&"then"in e&&"catch"in e&&"case"in e&&"value"in e&&"state"in e}function c(e){const{resolve:t,promise:n}=Object(s.c)(),o=i(n.then(e));["then","catch","case"].forEach(e=>{const n=o[e];o[e]=function(){return t(),n.apply(this,arguments)}});let a=r.observable.box();Object.defineProperty(o,"value",{get:()=>(t(),a.get()),set:e=>{t(),a.set(e)}});let c=r.observable.box();return Object.defineProperty(o,"state",{get:()=>(t(),c.get()),set:e=>{t(),c.set(e)}}),o}function l(e,t){let n;return function(){return n?n.atom.reportObserved():(n={value:e.apply(this),atom:Object(r.createAtom)("DebounceAtom")},setTimeout(()=>{const{atom:e}=n;n=void 0,e.reportChanged()},t)),n.value}}function d(e,t,n){var o;let s,i,a;return"number"==typeof e?(i=e,a=null!==(o=t)&&void 0!==o?o:{},(e,t,n)=>{if(!n.get)throw new Error("debounceComputed requires a getter");return Object(r.computed)(a)(e,t,Object.assign(Object.assign({},n),{get:l(n.get,i)}))}):(s=e,i=t,a=null!=n?n:{},Object(r.computed)(l(s,i),a))}},38:function(e,t,n){"use strict";n.d(t,"i",(function(){return a})),n.d(t,"h",(function(){return c})),n.d(t,"b",(function(){return l})),n.d(t,"o",(function(){return d})),n.d(t,"c",(function(){return u})),n.d(t,"e",(function(){return g})),n.d(t,"d",(function(){return f})),n.d(t,"a",(function(){return b})),n.d(t,"n",(function(){return y})),n.d(t,"m",(function(){return v})),n.d(t,"l",(function(){return x})),n.d(t,"k",(function(){return w})),n.d(t,"j",(function(){return E})),n.d(t,"g",(function(){return C})),n.d(t,"f",(function(){return T}));var r=n(12),o=n(14),s=n(21),i=n(18);const a={cat:"Read IPFS content",add:"Add a file or directory to IPFS","name/resolve":"Resolve an IPNS name","name/publish":"Publish an IPNS name","pin/add":"Pin some IPFS content","pin/rm":"Unpin some IPFS content","pin/ls":"List the pinned IPFS content"};class c extends r.matchers.SimplePathMatcher{constructor(e="cat"){super("/api/v0/"+e),this.interactionName=e,this.uiType="ipfs-interaction"}explain(){return`IPFS ${this.interactionName} requests`}}const l={cat:{argType:"IPFS path",placeholder:"The path to the IPFS object(s) to be read"},"name/resolve":{argType:"IPNS name",placeholder:"The IPNS name to resolve"},"name/publish":{argType:"IPFS path",placeholder:"The IPFS path of the object to be published"},"pin/add":{argType:"IPFS path",placeholder:"The IPFS path to the object(s) to be pinned"},"pin/rm":{argType:"IPFS path",placeholder:"The IPFS path to the object(s) to be unpinned"}},d=e=>Object.keys(l).includes(e);class u extends r.matchers.QueryMatcher{constructor(e,t){super(t?{arg:t}:{}),this.interaction=e,this.argValue=t,this.uiType="ipfs-arg"}explain(){var e,t,n;return"for "+(null!==(e=this.argValue)&&void 0!==e?e:"any "+(null!==(n=null===(t=l[this.interaction])||void 0===t?void 0:t.argType)&&void 0!==n?n:"value"))}}const p=e=>Object.assign({"cache-control":"no-cache",connection:"close",date:(new Date).toUTCString(),"content-type":"application/json; charset=utf-8"},void 0!==e?{"content-length":Object(s.d)(e).toString()}:{}),h=()=>({"cache-control":"no-cache",connection:"close",date:(new Date).toUTCString(),"content-type":"application/json; charset=utf-8","transfer-encoding":"chunked","x-chunked-output":"1"}),m=o.f(i.f.simple);class g extends i.f.simple{constructor(e){super(200,void 0,e,p(e)),this.result=e,this.uiType="ipfs-cat-text"}explain(){return"Return fixed IPFS content"}}o.b(g,m.props,()=>new g(""));class f extends i.f.file{constructor(e){super(200,void 0,e,p()),this.path=e,this.uiType="ipfs-cat-file"}explain(){return"Return IPFS content from "+(this.path||"a file")}}class b extends i.f.simple{constructor(e=[{Name:"uploaded-file.txt",Hash:"QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco"}]){super(200,void 0,e.map(e=>JSON.stringify(e)).join("\n"),h()),this.result=e,this.uiType="ipfs-add-result"}explain(){return`Return ${0===this.result.length?"an empty":"fixed"} IPFS add result${this.result.length>1?"s":""}`}}o.b(b,m.props,()=>new b);class y extends i.f.simple{constructor(e={Path:"/ipfs/QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco"}){super(200,void 0,JSON.stringify(e),p(JSON.stringify(e))),this.result=e,this.uiType="ipns-resolve-result"}explain(){return"Return a fixed IPNS resolved address"}}o.b(y,m.props,()=>new y);class v extends i.f.simple{constructor(e={Name:"QmY7Yh4UquoXHLPFo2XbhXkhBvFoPwmQUSa92pxnxjQuPU",Value:"/ipfs/QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco"}){super(200,void 0,JSON.stringify(e),p(JSON.stringify(e))),this.result=e,this.uiType="ipns-publish-result"}explain(){return"Return a fixed IPNS resolve result"}}o.b(v,m.props,()=>new v);class x extends i.f.simple{constructor(e={Pins:["QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco"]}){super(200,void 0,JSON.stringify(e),p(JSON.stringify(e))),this.result=e,this.uiType="ipfs-pins-result"}explain(){return"Return fixed IPFS pinning results"}}o.b(x,m.props,()=>new x);class w extends i.f.simple{constructor(e=[{Type:"direct",Cid:"QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco"}]){super(200,void 0,e.map(e=>JSON.stringify(e)).join("\n"),h()),this.result=e,this.uiType="ipfs-pin-ls-result"}explain(){return"Return fixed list of IPFS pins"}}o.b(w,m.props,()=>new w);const E={"ipfs-interaction":c,"ipfs-arg":u,query:r.matchers.QueryMatcher,"exact-query-string":r.matchers.ExactQueryMatcher,protocol:r.matchers.ProtocolMatcher,host:r.matchers.HostMatcher,hostname:r.matchers.HostnameMatcher,port:r.matchers.PortMatcher,header:r.matchers.HeaderMatcher,cookie:r.matchers.CookieMatcher},C=[c],T={"ipfs-cat-text":g,"ipfs-cat-file":f,"ipfs-add-result":b,"ipns-publish-result":v,"ipns-resolve-result":y,"ipfs-pins-result":x,"ipfs-pin-ls-result":w,passthrough:i.f.passthrough,"forward-to-host":i.f["forward-to-host"],timeout:i.f.timeout,"close-connection":i.f["close-connection"],"request-breakpoint":i.f["request-breakpoint"],"response-breakpoint":i.f["response-breakpoint"],"request-and-response-breakpoint":i.f["request-and-response-breakpoint"]}},44:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c}));var r=n(0),o=n(2),s=n(7),i=n(15);const a=Object(o.i)(e=>r.createElement(i.f,{className:e.className,title:e.title,tabIndex:e.disabled?-1:0,disabled:e.disabled,onClick:e.onClick},r.createElement(s.b,{icon:e.icon,fixedWidth:!!e.fixedWidth})))`
    color: ${e=>e.theme.mainColor};
    font-size: ${e=>e.theme.textSize};
    padding: 5px 10px;

    &:disabled {
        opacity: 0.5;
    }

    &:not([disabled]) {
        &:hover, &:focus {
            outline: none;
            color: ${e=>e.theme.popColor};
        }
    }
`,c=Object(o.i)(e=>r.createElement(i.g,{className:e.className,title:e.title,href:e.href,target:e.target,rel:e.rel},r.createElement(s.b,{icon:e.icon,fixedWidth:!!e.fixedWidth})))`
    color: ${e=>e.theme.mainColor};
    font-size: ${e=>e.theme.textSize};
    padding: 5px 10px;

    &:hover, &:focus {
        outline: none;
        color: ${e=>e.theme.popColor};
    }
`},46:function(e,t,n){"use strict";n.d(t,"i",(function(){return i})),n.d(t,"h",(function(){return a})),n.d(t,"k",(function(){return c})),n.d(t,"b",(function(){return l})),n.d(t,"j",(function(){return d})),n.d(t,"e",(function(){return u})),n.d(t,"l",(function(){return p})),n.d(t,"a",(function(){return h})),n.d(t,"c",(function(){return m})),n.d(t,"g",(function(){return g})),n.d(t,"f",(function(){return f})),n.d(t,"d",(function(){return b}));var r=n(12),o=n(18),s=n(249);const i={eth_call:"Call a contract method (without a transaction)",eth_sendRawTransaction:"Submit a signed transaction",eth_sendTransaction:"Submit an unsigned transaction",eth_getTransactionReceipt:"Return the receipt of a submitted transaction",eth_getBalance:"Return the balance of an account",eth_gasPrice:"Return the current gas price",eth_blockNumber:"Return the latest block number",eth_getBlockByNumber:"Return information about a block by number",eth_getBlockByHash:"Return information about a block by hash"};class a extends r.matchers.JsonBodyFlexibleMatcher{constructor(e="eth_call"){super({jsonrpc:"2.0",method:e}),this.methodName=e,this.uiType="eth-method"}explain(){return`Ethereum ${this.methodName} requests`}}class c extends r.matchers.JsonBodyFlexibleMatcher{constructor(e){super({params:e}),this.params=e,this.uiType="eth-params"}explain(){return"matching "+JSON.stringify(this.params)}}class l extends o.f["json-rpc-response"]{constructor(e,t){super({result:Object(s.b)(e,t)}),this.outputTypes=e,this.values=t,this.uiType="eth-call-result"}explain(){return this.values.length?"Return an eth_call result of "+this.values.join(", "):"Return an empty eth_call result"}}class d extends o.f["json-rpc-response"]{constructor(e){super({result:"0x"+e.toString(16)}),this.value=e,this.uiType="eth-number-result"}explain(){return"Return "+this.value}}class u extends o.f["json-rpc-response"]{constructor(e){super({result:e}),this.value=e,this.uiType="eth-hash-result"}explain(){return"Return transaction hash "+this.value}}class p extends o.f["json-rpc-response"]{constructor(e={status:"0x1",transactionHash:"012345",blockNumber:"0x100",blockHash:"0x1",from:"0x0",to:"0x0",cumulativeGasUsed:"0x1",gasUsed:"0x1",effectiveGasPrice:"0x0",contractAddress:null,logs:[],logsBloom:"0x0",type:"0x0"}){super({result:e}),this.receiptValue=e,this.uiType="eth-receipt-result"}explain(){return"Return a fixed transaction receipt"}}class h extends o.f["json-rpc-response"]{constructor(e={difficulty:"0x1",extraData:"0x0",gasLimit:"0x1",gasUsed:"0x1",hash:"0x1234",logsBloom:"0x0",miner:"0x1",mixHash:"0x0",nonce:"0x0",number:"0x0",parentHash:"0x1",receiptsRoot:"0x1",sha3Uncles:"0x1",size:"0x1",stateRoot:"0x1",timestamp:"0x1",totalDifficulty:"0x1",transactions:["0x1234"],transactionsRoot:"0x1",uncles:[]}){super({result:e}),this.blockValue=e,this.uiType="eth-block-result"}explain(){return"Return fixed block data"}}class m extends o.f["json-rpc-response"]{constructor(e,t="0x",n=-32099,r){super({error:{message:e,data:t,code:n,name:r}}),this.message=e,this.data=t,this.code=n,this.name=r,this.uiType="eth-error"}explain(){return"Fail with "+(this.message?`"${this.message}"`:"code "+this.code)}}const g={"eth-method":a,"eth-params":c,protocol:r.matchers.ProtocolMatcher,host:r.matchers.HostMatcher,hostname:r.matchers.HostnameMatcher,port:r.matchers.PortMatcher,"simple-path":r.matchers.SimplePathMatcher,"regex-path":r.matchers.RegexPathMatcher,header:r.matchers.HeaderMatcher,query:r.matchers.QueryMatcher,"exact-query-string":r.matchers.ExactQueryMatcher,cookie:r.matchers.CookieMatcher},f=[a],b={"eth-call-result":l,"eth-number-result":d,"eth-hash-result":u,"eth-receipt-result":p,"eth-block-result":h,"eth-error":m,passthrough:o.f.passthrough,"forward-to-host":o.f["forward-to-host"],timeout:o.f.timeout,"close-connection":o.f["close-connection"],"request-breakpoint":o.f["request-breakpoint"],"response-breakpoint":o.f["response-breakpoint"],"request-and-response-breakpoint":o.f["request-and-response-breakpoint"]}},47:function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return b}));var r={};n.r(r),n.d(r,"clear",(function(){return a})),n.d(r,"getItem",(function(){return c})),n.d(r,"removeItem",(function(){return l})),n.d(r,"setItem",(function(){return d}));var o=n(4),s=n(1),i=n(14);function a(){return new Promise((e,t)=>{try{window.localStorage.clear(),e(null)}catch(e){t(e)}})}function c(e){return new Promise((t,n)=>{try{t(window.localStorage.getItem(e))}catch(e){n(e)}})}function l(e){return new Promise((t,n)=>{try{window.localStorage.removeItem(e),t(null)}catch(e){n(e)}})}function d(e,t){return new Promise((n,r)=>{try{window.localStorage.setItem(e,t),n(null)}catch(e){r(e)}})}function u(e){return"object"==typeof e&&e&&Object.keys(e).map(t=>u(e[t])),e}function p(e){return e?Object(i.i)(e):Object(i.d)(u,e=>e)}const h={object:p,list:function(e){return Object(i.g)(p(e))},map:function(e){return Object(i.h)(p(e))}};function m(e,t){const n=function e(t){const n={};return Object.keys(t).forEach(r=>{"object"==typeof t[r]?t[r].type in h&&("object"==typeof t[r].schema?n[r]=h[t[r].type](e(t[r].schema)):n[r]=h[t[r].type](t[r].schema)):!0===t[r]&&(n[r]=!0)}),Object(i.c)(n)}(t);return Object(i.o)(e,n),e}var g=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))};function f(...e){const[t,n]=e;return t in h?Object(i.m)(h[t](n)):1===e.length?e=>m(e,t):i.m.apply(null,e)}function b(e){return g(this,void 0,void 0,(function*(){const{key:t,store:n,storage:a,jsonify:c,dataTransform:l,customArgs:d}=o.defaults(e,{customArgs:{},storage:r,jsonify:!0,dataTransform:o.identity}),u=Object(i.f)(n),p=yield a.getItem(t);if(p){const e=c?JSON.parse(p):p;e&&"object"==typeof e&&Object(s.runInAction)(()=>{Object(i.p)(u,n,l(e),void 0,d)})}Object(s.reaction)(()=>Object(i.n)(u,n),e=>a.setItem(t,c?JSON.stringify(e):e))}))}},49:function(e,t,n){"use strict";n.d(t,"d",(function(){return v})),n.d(t,"b",(function(){return x})),n.d(t,"f",(function(){return w})),n.d(t,"e",(function(){return E})),n.d(t,"c",(function(){return C})),n.d(t,"a",(function(){return O}));var r=n(4),o=n(0),s=n(2),i=n(7),a=n(19),c=n(23),l=n(51),d=n(56),u=n(20),p=n(98),h=n(28),m=n(99),g=n(44),f=n(13);const b=Object(s.i)(f.b)`
    ${e=>"left"===e.direction?"margin: 0 -20px 0 -15px;":"right"===e.direction?"margin: 0 -15px 0 -20px;":"margin: 0 -20px 0 -20px;"}

    padding: 10px 30px 0;

    font-size: ${e=>e.theme.textSize};
    color: ${e=>e.theme.mainColor};
    background-color: ${e=>e.theme.warningBackground};
    border-top: solid 1px ${e=>e.theme.containerBorder};

    svg {
        margin-left: 0;
    }
`;var y=n(130);const v=s.i.div`
    margin: 0 -20px -20px -20px;
    border-top: solid 1px ${e=>e.theme.containerBorder};
    background-color: ${e=>e.theme.highlightBackground};
    color: ${e=>e.theme.highlightColor};

    .monaco-editor-overlaymessage {
        display: none;
    }

    position: relative;
    flex-grow: 1;

    /*
    Allows shrinking smaller than content, to allow scrolling overflow e.g. for
    scrollable URL param content
    */
    min-height: 0;
`,x=Object(s.i)(v)`
    flex-shrink: 1;
`;function w(e,t){const n=Object(a.d)(t,"content-disposition")||"",o=/ filename="([^"]+)"/.exec(n);if(o){const e=o[1];return r.last(r.last(e.split("/")).split("\\"))}const s=r.last(e.split("/"));if(null==s?void 0:s.includes("."))return s}const E=e=>{const{body:t}=e;return o.createElement(o.Fragment,null,t&&o.createElement(o.Fragment,null,o.createElement(p.a,null,o.createElement(m.a,{expanded:e.expanded,onClick:e.onExpandToggled}),o.createElement(g.a,{icon:["fas","download"],title:e.isPaidUser?"Save this body as a file":"With Pro: Save this body as a file",disabled:!e.isPaidUser,onClick:()=>Object(c.f)(e.downloadFilename||"",e.mimeType||"application/octet-stream",t)})),o.createElement(h.a,null,Object(d.a)(t.byteLength))),o.createElement(h.c,{onChange:e.onChangeContentType,value:e.selectedContentType,options:e.contentTypeOptions,nameFormatter:l.d}),o.createElement(u.c,{onCollapseToggled:e.onCollapseToggled},e.title))},C=e=>{const{body:t}=e;return o.createElement(o.Fragment,null,o.createElement(p.a,null,o.createElement(m.a,{expanded:e.expanded,onClick:e.onExpandToggled}),o.createElement(y.a,{format:e.selectedContentType,content:t,onFormatted:e.onBodyFormatted})),o.createElement(h.a,null,Object(d.a)(t)),o.createElement(h.c,{onChange:e.onChangeContentType,value:e.selectedContentType,options:e.contentTypeOptions,nameFormatter:l.d}),o.createElement(u.c,{onCollapseToggled:e.onCollapseToggled},e.title))},T=Object(s.i)(f.e)`
    padding: 0;
    margin: 10px 0;
`,O=e=>o.createElement(b,{direction:e.direction},o.createElement("p",null,o.createElement(i.e,null)," Body decoding failed for encoding '",Object(a.d)(e.headers,"content-encoding"),"' due to:"),o.createElement(T,null,e.error.code?e.error.code+": ":"",e.error.message||e.error.toString()),o.createElement("p",null,"This typically means either the ",o.createElement("code",null,"content-encoding")," header is incorrect or unsupported, or the body was corrupted. The raw content (not decoded) is shown below."))},50:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return l})),n.d(t,"e",(function(){return d})),n.d(t,"b",(function(){return u})),n.d(t,"d",(function(){return p}));const r={100:{name:"100 Continue",mdnSlug:"Web/HTTP/Status/100",summary:"The HTTP 100 Continue informational status response code indicates that everything so far is OK and that the client should continue with the request or ignore it if it is already finished."},101:{name:"101 Switching Protocols",mdnSlug:"Web/HTTP/Status/101",summary:"The HTTP 101 Switching Protocols response code indicates the protocol the server is switching to as requested by a client which sent the message including the Upgrade request header."},103:{name:"103 Early Hints",mdnSlug:"Web/HTTP/Status/103",summary:"The HTTP 103 Early Hints information response status code is primarily intended to be used with the Link header to allow the user agent to start preloading resources while the server is still preparing a response."},200:{name:"200 OK",mdnSlug:"Web/HTTP/Status/200",summary:"The HTTP 200 OK success status response code indicates that the request has succeeded. A 200 response is cacheable by default."},201:{name:"201 Created",mdnSlug:"Web/HTTP/Status/201",summary:"The HTTP 201 Created success status response code indicates that the request has succeeded and has led to the creation of a resource. The new resource is effectively created before this response is sent back and the new resource is returned in the body of the message, its location being either the URL of the request, or the content of the Location header."},202:{name:"202 Accepted",mdnSlug:"Web/HTTP/Status/202",summary:"The HTTP 202 Accepted response status code indicates that the request has been accepted for processing, but the processing has not been completed; in fact, processing may not have started yet. The request might or might not eventually be acted upon, as it might be disallowed when processing actually takes place."},203:{name:"203 Non-Authoritative Information",mdnSlug:"Web/HTTP/Status/203",summary:"The HTTP 203 Non-Authoritative Information response status indicates that the request was successful but the enclosed payload has been modified by a transforming proxy from that of the origin server's 200 (OK) response ."},204:{name:"204 No Content",mdnSlug:"Web/HTTP/Status/204",summary:"The HTTP 204 No Content success status response code indicates that the request has succeeded, but that the client doesn't need to go away from its current page. A 204 response is cacheable by default. An ETag header is included in such a response."},205:{name:"205 Reset Content",mdnSlug:"Web/HTTP/Status/205",summary:"The HTTP 205 Reset Content response status tells the client to reset the document view, so for example to clear the content of a form, reset a canvas state, or to refresh the UI."},206:{name:"206 Partial Content",mdnSlug:"Web/HTTP/Status/206",summary:"The HTTP 206 Partial Content success status response code indicates that the request has succeeded and has the body contains the requested ranges of data, as described in the Range header of the request."},300:{name:"300 Multiple Choices",mdnSlug:"Web/HTTP/Status/300",summary:"The HTTP 300 Multiple Choices redirect status response code indicates that the request has more than one possible responses. The user-agent or the user should choose one of them. As there is no standardized way of choosing one of the responses, this response code is very rarely used."},301:{name:"301 Moved Permanently",mdnSlug:"Web/HTTP/Status/301",summary:"The HTTP 301 Moved Permanently redirect status response code indicates that the resource requested has been definitively moved to the URL given by the Location headers. A browser redirects to this page and search engines update their links to the resource (in 'SEO-speak', it is said that the 'link-juice' is sent to the new URL)."},302:{name:"302 Found",mdnSlug:"Web/HTTP/Status/302",summary:"The HTTP 302 Found redirect status response code indicates that the resource requested has been temporarily moved to the URL given by the Location header. A browser redirects to this page but search engines don't update their links to the resource (in 'SEO-speak', it is said that the 'link-juice' is not sent to the new URL)."},303:{name:"303 See Other",mdnSlug:"Web/HTTP/Status/303",summary:"The HTTP 303 See Other redirect status response code indicates that the redirects don't link to the newly uploaded resources, but to another page (such as a confirmation page or an upload progress page). This response code is usually sent back as a result of PUT or POST. The method used to display this redirected page is always GET."},304:{name:"304 Not Modified",mdnSlug:"Web/HTTP/Status/304",summary:"The HTTP 304 Not Modified client redirection response code indicates that there is no need to retransmit the requested resources. It is an implicit redirection to a cached resource. This happens when the request method is safe, like a GET or a HEAD request, or when the request is conditional and uses a If-None-Match or a If-Modified-Since header."},307:{name:"307 Temporary Redirect",mdnSlug:"Web/HTTP/Status/307",summary:'The method and the body of the original request are reused to perform the redirected request. In the cases where you want the method used to be changed to GET, use 303 See Other instead. This is useful when you want to give an answer to a PUT method that is not the uploaded resources, but a confirmation message (like "You successfully uploaded XYZ").'},308:{name:"308 Permanent Redirect",mdnSlug:"Web/HTTP/Status/308",summary:"The request method and the body will not be altered, whereas 301 may incorrectly sometimes be changed to a GET method."},400:{name:"400 Bad Request",mdnSlug:"Web/HTTP/Status/400",summary:"The HTTP 400 Bad Request response status code indicates that the server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing)."},401:{name:"401 Unauthorized",mdnSlug:"Web/HTTP/Status/401",summary:"The HTTP 401 Unauthorized client error status response code indicates that the request has not been applied because it lacks valid authentication credentials for the target resource."},402:{name:"402 Payment Required",mdnSlug:"Web/HTTP/Status/402",summary:"The HTTP 402 Payment Required is a nonstandard client error status response code that is reserved for future use."},403:{name:"403 Forbidden",mdnSlug:"Web/HTTP/Status/403",summary:"The HTTP 403 Forbidden client error status response code indicates that the server understood the request but refuses to authorize it."},404:{name:"404 Not Found",mdnSlug:"Web/HTTP/Status/404",summary:"The HTTP 404 Not Found client error response code indicates that the server can't find the requested resource. Links that lead to a 404 page are often called broken or dead links and can be subject to link rot."},405:{name:"405 Method Not Allowed",mdnSlug:"Web/HTTP/Status/405",summary:"The HTTP 405 Method Not Allowed response status code indicates that the request method is known by the server but is not supported by the target resource."},406:{name:"406 Not Acceptable",mdnSlug:"Web/HTTP/Status/406",summary:"The HTTP 406 Not Acceptable client error response code indicates that the server cannot produce a response matching the list of acceptable values defined in the request's proactive content negotiation headers, and that the server is unwilling to supply a default representation."},407:{name:"407 Proxy Authentication Required",mdnSlug:"Web/HTTP/Status/407",summary:"The HTTP 407 Proxy Authentication Required  client error status response code indicates that the request has not been applied because it lacks valid authentication credentials for a proxy server that is between the browser and the server that can access the requested resource."},408:{name:"408 Request Timeout",mdnSlug:"Web/HTTP/Status/408",summary:"The HTTP 408 Request Timeout response status code means that the server would like to shut down this unused connection. It is sent on an idle connection by some servers, even without any previous request by the client."},409:{name:"409 Conflict",mdnSlug:"Web/HTTP/Status/409",summary:"The HTTP 409 Conflict response status code indicates a request conflict with current state of the target resource."},410:{name:"410 Gone",mdnSlug:"Web/HTTP/Status/410",summary:"The HTTP 410 Gone client error response code indicates that access to the target resource is no longer available at the origin server and that this condition is likely to be permanent."},411:{name:"411 Length Required",mdnSlug:"Web/HTTP/Status/411",summary:"The HTTP 411 Length Required client error response code indicates that the server refuses to accept the request without a defined Content-Length header."},412:{name:"412 Precondition Failed",mdnSlug:"Web/HTTP/Status/412",summary:"The HTTP 412 Precondition Failed client error response code indicates that access to the target resource has been denied. This happens with conditional requests on methods other than GET or HEAD when the condition defined by the If-Unmodified-Since or If-None-Match headers is not fulfilled. In that case, the request, usually an upload or a modification of a resource, cannot be made and this error response is sent back."},413:{name:"413 Payload Too Large",mdnSlug:"Web/HTTP/Status/413",summary:"The HTTP 413 Payload Too Large response status code indicates that the request entity is larger than limits defined by server; the server might close the connection or return a Retry-After header field."},414:{name:"414 URI Too Long",mdnSlug:"Web/HTTP/Status/414",summary:"The HTTP 414 URI Too Long response status code indicates that the URI requested by the client is longer than the server is willing to interpret."},415:{name:"415 Unsupported Media Type",mdnSlug:"Web/HTTP/Status/415",summary:"The HTTP 415 Unsupported Media Type client error response code indicates that the server refuses to accept the request because the payload format is in an unsupported format."},416:{name:"416 Range Not Satisfiable",mdnSlug:"Web/HTTP/Status/416",summary:"The HTTP 416 Range Not Satisfiable error response code indicates that a server cannot serve the requested ranges. The most likely reason is that the document doesn't contain such ranges, or that the Range header value, though syntactically correct, doesn't make sense."},417:{name:"417 Expectation Failed",mdnSlug:"Web/HTTP/Status/417",summary:"The HTTP 417 Expectation Failed client error response code indicates that the expectation given in the request's Expect header could not be met."},418:{name:"418 I'm a teapot",mdnSlug:"Web/HTTP/Status/418",summary:"The HTTP 418 I'm a teapot client error response code indicates that the server refuses to brew coffee because it is, permanently, a teapot. A combined coffee/tea pot that is temporarily out of coffee should instead return 503. This error is a reference to Hyper Text Coffee Pot Control Protocol defined in April Fools' jokes in 1998 and 2014."},422:{name:"422 Unprocessable Entity",mdnSlug:"Web/HTTP/Status/422",summary:"The HTTP 422 Unprocessable Entity response status code indicates that the server understands the content type of the request entity, and the syntax of the request entity is correct, but it was unable to process the contained instructions."},425:{name:"425 Too Early",mdnSlug:"Web/HTTP/Status/425",summary:"The HTTP 425 Too Early response status code indicates that the server is unwilling to risk processing a request that might be replayed, which creates the potential for a replay attack."},426:{name:"426 Upgrade Required",mdnSlug:"Web/HTTP/Status/426",summary:"The HTTP 426 Upgrade Required client error response code indicates that the server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol."},428:{name:"428 Precondition Required",mdnSlug:"Web/HTTP/Status/428",summary:"The HTTP 428 Precondition Required response status code indicates that the server requires the request to be conditional."},429:{name:"429 Too Many Requests",mdnSlug:"Web/HTTP/Status/429",summary:'The HTTP 429 Too Many Requests response status code indicates the user has sent too many requests in a given amount of time ("rate limiting").'},431:{name:"431 Request Header Fields Too Large",mdnSlug:"Web/HTTP/Status/431",summary:"The HTTP 431 Request Header Fields Too Large response status code indicates that the server refuses to process the request because the request’s HTTP headers are too long."},451:{name:"451 Unavailable For Legal Reasons",mdnSlug:"Web/HTTP/Status/451",summary:"The HTTP 451 Unavailable For Legal Reasons client error response code indicates that the user requested a resource that is not available due to legal reasons, such as a web page for which a legal action has been issued."},500:{name:"500 Internal Server Error",mdnSlug:"Web/HTTP/Status/500",summary:"The HTTP 500 Internal Server Error server error response code indicates that the server encountered an unexpected condition that prevented it from fulfilling the request."},501:{name:"501 Not Implemented",mdnSlug:"Web/HTTP/Status/501",summary:"The HTTP 501 Not Implemented server error response code means that the server does not support the functionality required to fulfill the request."},502:{name:"502 Bad Gateway",mdnSlug:"Web/HTTP/Status/502",summary:"The HTTP 502 Bad Gateway server error response code indicates that the server, while acting as a gateway or proxy, received an invalid response from the upstream server."},503:{name:"503 Service Unavailable",mdnSlug:"Web/HTTP/Status/503",summary:"The HTTP 503 Service Unavailable server error response code indicates that the server is not ready to handle the request."},504:{name:"504 Gateway Timeout",mdnSlug:"Web/HTTP/Status/504",summary:"The HTTP 504 Gateway Timeout server error response code indicates that the server, while acting as a gateway or proxy, did not get a response in time from the upstream server that it needed in order to complete the request."},505:{name:"505 HTTP Version Not Supported",mdnSlug:"Web/HTTP/Status/505",summary:"The HTTP 505 HTTP Version Not Supported response status code indicates that the HTTP version used in the request is not supported by the server."},506:{name:"506 Variant Also Negotiates",mdnSlug:"Web/HTTP/Status/506",summary:"The HTTP 506 Variant Also Negotiates response status code may be given in the context of Transparent Content Negotiation (see RFC 2295). This protocol enables a client to retrieve the best variant of a given resource, where the server supports multiple variants."},507:{name:"507 Insufficient Storage",mdnSlug:"Web/HTTP/Status/507",summary:"The HTTP 507 Insufficient Storage response status code may be given in the context of the Web Distributed Authoring and Versioning (WebDAV) protocol (see RFC 4918)."},508:{name:"508 Loop Detected",mdnSlug:"Web/HTTP/Status/508",summary:"The HTTP 508 Loop Detected response status code may be given in the context of the Web Distributed Authoring and Versioning (WebDAV) protocol."},510:{name:"510 Not Extended",mdnSlug:"Web/HTTP/Status/510",summary:"The HTTP  510 Not Extended response status code is sent in the context of the HTTP Extension Framework, defined in RFC 2774."},511:{name:"511 Network Authentication Required",mdnSlug:"Web/HTTP/Status/511",summary:"The HTTP 511 Network Authentication Required response status code indicates that the client needs to authenticate to gain network access."}},o={1e3:{name:"Normal Closure",summary:"A normal WebSocket closure, meaning that the purpose for which the connection was established has been fulfilled."},1001:{name:"Going Away",summary:'An endpoint is "going away", such as a server going down or a browser having navigated away from a page.'},1002:{name:"Protocol Error",summary:"An endpoint terminated the connection due to a protocol error"},1003:{name:"Unsupported Data",summary:"An endpoint is terminating the connection because it has received a type of data it cannot accept (e.g., an endpoint that understands only text data MAY send this if it receives a binary message)."},1004:{name:"Reserved",summary:"This close code is not used. A specific meaning might be defined in future."},1005:{name:"No Close Code Received",summary:"This is a reserved value that must not be sent by an endpoint. It is designated for use in applications expecting a status code, to indicate that no status code was actually present."},1006:{name:"Abnormal Closure",summary:"This is a reserved value that must not be sent by an endpoint. It is designated for use in applications expecting a status code, to indicate that the connection was closed abnormally, e.g., without sending or receiving a Close control frame."},1007:{name:"Invalid Frame Payload Data",summary:"An endpoint is terminating the connection because it has received data within a message that was not consistent with the type of the message (e.g., non-UTF-8 data within a text message)."},1008:{name:"Policy Violation",summary:"An endpoint is terminating the connection because it has received a message that violates its policy. This is a generic status code that can be returned when there is no other more suitable status code (e.g., 1003 or 1009) or if there is a need to hide specific details about the policy."},1009:{name:"Message Too Large",summary:"An endpoint is terminating the connection because it has received a message that is too big for it to process."},1010:{name:"Mandatory Extension",summary:"The client is terminating the connection because it has expected the server to negotiate one or more extensions, but the server didn't return them in the response message of the WebSocket handshake.  The list of extensions that are needed SHOULD appear in the /reason/ part of the Close frame."},1011:{name:"Internal Error",summary:"The server is terminating the connection because it encountered an unexpected condition that prevented it from fulfilling the request."},1012:{name:"Service Restart",summary:"The server is terminating the connection because it is restarting."},1013:{name:"Try Again Later",summary:"The server is terminating the connection due to a temporary condition, such as being overloaded."},1014:{name:"Bad Gateway",summary:"The server was acting as a gateway or proxy, and received an invalid response from an upstream server."},1015:{name:"TLS Handshake",summary:"This is a reserved value that must not be sent by an endpoint. It is designated for use in applications expecting a status code, to indicate that the connection was closed due to a failure to perform a TLS handshake (e.g., the server certificate can't be verified)."}},s={accept:{mdnSlug:"Web/HTTP/Headers/Accept",name:"Accept",summary:"The Accept request HTTP header advertises which content types, expressed as MIME types, the client is able to understand."},"accept-ch":{mdnSlug:"Web/HTTP/Headers/Accept-CH",name:"Accept-CH",summary:"The Accept-CH header is set by the server to specify which Client Hints headers a client should include in subsequent requests."},"accept-ch-lifetime":{mdnSlug:"Web/HTTP/Headers/Accept-CH-Lifetime",name:"Accept-CH-Lifetime",summary:"The Accept-CH-Lifetime header is set by the server to specify the persistence of Accept-CH header value that specifies for which Client Hints headers client should include in subsequent requests."},"accept-charset":{mdnSlug:"Web/HTTP/Headers/Accept-Charset",name:"Accept-Charset",summary:"The Accept-Charset request HTTP header advertises which character encodings the client understands."},"accept-encoding":{mdnSlug:"Web/HTTP/Headers/Accept-Encoding",name:"Accept-Encoding",summary:"The Accept-Encoding request HTTP header advertises which content encoding, usually a compression algorithm, the client is able to understand."},"accept-language":{mdnSlug:"Web/HTTP/Headers/Accept-Language",name:"Accept-Language",summary:"The Accept-Language request HTTP header advertises which languages the client is able to understand, and which locale variant is preferred."},"accept-patch":{mdnSlug:"Web/HTTP/Headers/Accept-Patch",name:"Accept-Patch",summary:"The Accept-Patch response HTTP header advertises which media-type the server is able to understand."},"accept-ranges":{mdnSlug:"Web/HTTP/Headers/Accept-Ranges",name:"Accept-Ranges",summary:"The Accept-Ranges response HTTP header is a marker used by the server to advertise its support of partial requests."},"access-control-allow-credentials":{mdnSlug:"Web/HTTP/Headers/Access-Control-Allow-Credentials",name:"Access-Control-Allow-Credentials",summary:"The Access-Control-Allow-Credentials response header tells browsers whether to expose the response to frontend JavaScript code when the request's credentials mode (Request.credentials) is include."},"access-control-allow-headers":{mdnSlug:"Web/HTTP/Headers/Access-Control-Allow-Headers",name:"Access-Control-Allow-Headers",summary:"The Access-Control-Allow-Headers response header is used in response to a preflight request which includes the Access-Control-Request-Headers to indicate which HTTP headers can be used during the actual request."},"access-control-allow-methods":{mdnSlug:"Web/HTTP/Headers/Access-Control-Allow-Methods",name:"Access-Control-Allow-Methods",summary:"The Access-Control-Allow-Methods response header specifies the method or methods allowed when accessing the resource in response to a preflight request."},"access-control-allow-origin":{mdnSlug:"Web/HTTP/Headers/Access-Control-Allow-Origin",name:"Access-Control-Allow-Origin",summary:"The Access-Control-Allow-Origin response header indicates whether the response can be shared with requesting code from the given origin."},"access-control-expose-headers":{mdnSlug:"Web/HTTP/Headers/Access-Control-Expose-Headers",name:"Access-Control-Expose-Headers",summary:"The Access-Control-Expose-Headers response header indicates which headers can be exposed as part of the response by listing their names."},"access-control-max-age":{mdnSlug:"Web/HTTP/Headers/Access-Control-Max-Age",name:"Access-Control-Max-Age",summary:"The Access-Control-Max-Age response header indicates how long the results of a preflight request (that is the information contained in the Access-Control-Allow-Methods and Access-Control-Allow-Headers headers) can be cached."},"access-control-request-headers":{mdnSlug:"Web/HTTP/Headers/Access-Control-Request-Headers",name:"Access-Control-Request-Headers",summary:"The Access-Control-Request-Headers request header is used by browsers when issuing a preflight request, to let the server know which HTTP headers the client might send when the actual request is made."},"access-control-request-method":{mdnSlug:"Web/HTTP/Headers/Access-Control-Request-Method",name:"Access-Control-Request-Method",summary:"The Access-Control-Request-Method request header is used by browsers when issuing a preflight request, to let the server know which HTTP method will be used when the actual request is made."},age:{mdnSlug:"Web/HTTP/Headers/Age",name:"Age",summary:"The Age header contains the time in seconds the object has been in a proxy cache."},allow:{mdnSlug:"Web/HTTP/Headers/Allow",name:"Allow",summary:"The Allow header lists the set of methods supported by a resource."},"alt-svc":{mdnSlug:"Web/HTTP/Headers/Alt-Svc",name:"Alt-Svc",summary:"The Alt-Svc HTTP response header is used to advertise alternative services through which the same resource can be reached."},authorization:{mdnSlug:"Web/HTTP/Headers/Authorization",name:"Authorization",summary:"The HTTP Authorization request header contains the credentials to authenticate a user agent with a server, usually, but not necessarily, after the server has responded with a 401 Unauthorized status and the WWW-Authenticate header."},"cache-control":{mdnSlug:"Web/HTTP/Headers/Cache-Control",name:"Cache-Control",summary:"The Cache-Control HTTP header holds directives (instructions) for caching in both requests and responses."},"clear-site-data":{mdnSlug:"Web/HTTP/Headers/Clear-Site-Data",name:"Clear-Site-Data",summary:"The Clear-Site-Data header clears browsing data (cookies, storage, cache) associated with the requesting website."},connection:{mdnSlug:"Web/HTTP/Headers/Connection",name:"Connection",summary:"The Connection general header controls whether or not the network connection stays open after the current transaction finishes."},"content-disposition":{mdnSlug:"Web/HTTP/Headers/Content-Disposition",name:"Content-Disposition",summary:"In a regular HTTP response, the Content-Disposition response header is a header indicating if the content is expected to be displayed inline in the browser, that is, as a Web page or as part of a Web page, or as an attachment, that is downloaded and saved locally."},"content-encoding":{mdnSlug:"Web/HTTP/Headers/Content-Encoding",name:"Content-Encoding",summary:"The Content-Encoding entity header is used to compress the media-type."},"content-language":{mdnSlug:"Web/HTTP/Headers/Content-Language",name:"Content-Language",summary:"The Content-Language entity header is used to describe the language(s) intended for the audience, so that it allows a user to differentiate according to the users' own preferred language."},"content-length":{mdnSlug:"Web/HTTP/Headers/Content-Length",name:"Content-Length",summary:"The Content-Length entity header indicates the size of the entity-body, in bytes, sent to the recipient."},"content-location":{mdnSlug:"Web/HTTP/Headers/Content-Location",name:"Content-Location",summary:"The Content-Location header indicates an alternate location for the returned data."},"content-range":{mdnSlug:"Web/HTTP/Headers/Content-Range",name:"Content-Range",summary:"The Content-Range response HTTP header indicates where in a full body message a partial message belongs."},"content-security-policy":{mdnSlug:"Web/HTTP/Headers/Content-Security-Policy",name:"Content-Security-Policy",summary:"The HTTP Content-Security-Policy response header allows web site administrators to control resources the user agent is allowed to load for a given page."},"content-security-policy-report-only":{mdnSlug:"Web/HTTP/Headers/Content-Security-Policy-Report-Only",name:"Content-Security-Policy-Report-Only",summary:"The HTTP Content-Security-Policy-Report-Only response header allows web developers to experiment with policies by monitoring (but not enforcing) their effects."},"content-type":{mdnSlug:"Web/HTTP/Headers/Content-Type",name:"Content-Type",summary:"The Content-Type entity header is used to indicate the media type of the resource."},cookie:{mdnSlug:"Web/HTTP/Headers/Cookie",name:"Cookie",summary:"The Cookie HTTP request header contains stored HTTP cookies previously sent by the server with the Set-Cookie header."},cookie2:{mdnSlug:"Web/HTTP/Headers/Cookie2",name:"Cookie2",summary:'The obsolete Cookie2 HTTP request header used to advise the server that the user agent understands "new-style" cookies, but nowadays user agents will use the Cookie header instead, not this one.'},"cross-origin-embedder-policy":{mdnSlug:"Web/HTTP/Headers/Cross-Origin-Embedder-Policy",name:"Cross-Origin-Embedder-Policy",summary:"The HTTP Cross-Origin-Embedder-Policy (COEP) response header prevents a document from loading any cross-origin resources that don't explicitly grant the document permission (using CORP or CORS)."},"cross-origin-opener-policy":{mdnSlug:"Web/HTTP/Headers/Cross-Origin-Opener-Policy",name:"Cross-Origin-Opener-Policy",summary:"The HTTP Cross-Origin-Opener-Policy (COOP) response header allows you to ensure a top-level document does not share a browsing context group with cross-origin documents."},"cross-origin-resource-policy":{mdnSlug:"Web/HTTP/Headers/Cross-Origin-Resource-Policy",name:"Cross-Origin-Resource-Policy",summary:"The HTTP Cross-Origin-Resource-Policy response header conveys a desire that the browser blocks no-cors cross-origin/cross-site requests to the given resource."},dnt:{mdnSlug:"Web/HTTP/Headers/DNT",name:"DNT",summary:"The DNT (Do Not Track) request header indicates the user's tracking preference."},dpr:{mdnSlug:"Web/HTTP/Headers/DPR",name:"DPR",summary:"The DPR header is a Client Hints headers which represents the client device pixel ratio (DPR), which is the the number of physical device pixels corresponding to every CSS pixel."},date:{mdnSlug:"Web/HTTP/Headers/Date",name:"Date",summary:"The Date general HTTP header contains the date and time at which the message was originated."},"device-memory":{mdnSlug:"Web/HTTP/Headers/Device-Memory",name:"Device-Memory",summary:"The Device-Memory header is a Device Memory API header that works like Client Hints header which represents the approximate amount of RAM client device has."},digest:{mdnSlug:"Web/HTTP/Headers/Digest",name:"Digest",summary:"The Digest response HTTP header provides a digest of the requested resource."},etag:{mdnSlug:"Web/HTTP/Headers/ETag",name:"ETag",summary:"The ETag HTTP response header is an identifier for a specific version of a resource."},"early-data":{mdnSlug:"Web/HTTP/Headers/Early-Data",name:"Early-Data",summary:"The Early-Data header is set by an intermediary to indicate that the request has been conveyed in TLS early data, and also indicates that the intermediary understands the 425 (Too Early) status code."},expect:{mdnSlug:"Web/HTTP/Headers/Expect",name:"Expect",summary:"The Expect HTTP request header indicates expectations that need to be fulfilled by the server in order to properly handle the request."},"expect-ct":{mdnSlug:"Web/HTTP/Headers/Expect-CT",name:"Expect-CT",summary:"The Expect-CT header lets sites opt in to reporting and/or enforcement of Certificate Transparency requirements, to prevent the use of misissued certificates for that site from going unnoticed."},expires:{mdnSlug:"Web/HTTP/Headers/Expires",name:"Expires",summary:"The Expires header contains the date/time after which the response is considered stale."},"feature-policy":{mdnSlug:"Web/HTTP/Headers/Feature-Policy",name:"Feature-Policy",summary:"The HTTP Feature-Policy header provides a mechanism to allow and deny the use of browser features in its own frame, and in content within any <iframe> elements in the document."},forwarded:{mdnSlug:"Web/HTTP/Headers/Forwarded",name:"Forwarded",summary:"The Forwarded header contains information from the reverse proxy servers that is altered or lost when a proxy is involved in the path of the request."},from:{mdnSlug:"Web/HTTP/Headers/From",name:"From",summary:"The From request header contains an Internet email address for a human user who controls the requesting user agent."},host:{mdnSlug:"Web/HTTP/Headers/Host",name:"Host",summary:"The Host request header specifies the host and port number of the server to which the request is being sent."},"if-match":{mdnSlug:"Web/HTTP/Headers/If-Match",name:"If-Match",summary:"The If-Match HTTP request header makes the request conditional."},"if-modified-since":{mdnSlug:"Web/HTTP/Headers/If-Modified-Since",name:"If-Modified-Since",summary:"The If-Modified-Since request HTTP header makes the request conditional: the server will send back the requested resource, with a 200 status, only if it has been last modified after the given date."},"if-none-match":{mdnSlug:"Web/HTTP/Headers/If-None-Match",name:"If-None-Match",summary:"The If-None-Match HTTP request header makes the request conditional."},"if-range":{mdnSlug:"Web/HTTP/Headers/If-Range",name:"If-Range",summary:"The If-Range HTTP request header makes a range request conditional: if the condition is fulfilled, the range request will be issued and the server sends back a 206 Partial Content answer with the appropriate body."},"if-unmodified-since":{mdnSlug:"Web/HTTP/Headers/If-Unmodified-Since",name:"If-Unmodified-Since",summary:"The If-Unmodified-Since request HTTP header makes the request conditional: the server will send back the requested resource, or accept it in the case of a POST or another non-safe method, only if it has not been last modified after the given date."},"keep-alive":{mdnSlug:"Web/HTTP/Headers/Keep-Alive",name:"Keep-Alive",summary:"The Keep-Alive general header allows the sender to hint about how the connection may be used to set a timeout and a maximum amount of requests."},"large-allocation":{mdnSlug:"Web/HTTP/Headers/Large-Allocation",name:"Large-Allocation",summary:"The non-standard Large-Allocation response header tells the browser that the page being loaded is going to want to perform a large allocation."},"last-modified":{mdnSlug:"Web/HTTP/Headers/Last-Modified",name:"Last-Modified",summary:"The Last-Modified response HTTP header contains the date and time at which the origin server believes the resource was last modified."},link:{mdnSlug:"Web/HTTP/Headers/Link",name:"Link",summary:"The HTTP Link entity-header field provides a means for serialising one or more links in HTTP headers."},location:{mdnSlug:"Web/HTTP/Headers/Location",name:"Location",summary:"The Location response header indicates the URL to redirect a page to."},nel:{mdnSlug:"Web/HTTP/Headers/NEL",name:"NEL",summary:"The HTTP NEL response header is used to configure network request logging."},origin:{mdnSlug:"Web/HTTP/Headers/Origin",name:"Origin",summary:"The Origin request header indicates where a fetch originates from."},pragma:{mdnSlug:"Web/HTTP/Headers/Pragma",name:"Pragma",summary:"The Pragma HTTP/1.0 general header is an implementation-specific header that may have various effects along the request-response chain."},"proxy-authenticate":{mdnSlug:"Web/HTTP/Headers/Proxy-Authenticate",name:"Proxy-Authenticate",summary:"The HTTP Proxy-Authenticate response header defines the authentication method that should be used to gain access to a resource behind a proxy server."},"proxy-authorization":{mdnSlug:"Web/HTTP/Headers/Proxy-Authorization",name:"Proxy-Authorization",summary:"The HTTP Proxy-Authorization request header contains the credentials to authenticate a user agent to a proxy server, usually after the server has responded with a 407 Proxy Authentication Required status and the Proxy-Authenticate header."},"public-key-pins":{mdnSlug:"Web/HTTP/Headers/Public-Key-Pins",name:"Public-Key-Pins",summary:"The HTTP Public-Key-Pins response header used to associate a specific cryptographic public key with a certain web server to decrease the risk of MITM attacks with forged certificates, however, it has been removed from modern browsers and is no longer supported."},"public-key-pins-report-only":{mdnSlug:"Web/HTTP/Headers/Public-Key-Pins-Report-Only",name:"Public-Key-Pins-Report-Only",summary:"The HTTP Public-Key-Pins-Report-Only response header was used to send reports of pinning violation to the report-uri specified in the header but, unlike Public-Key-Pins still allows browsers to connect to the server if the pinning is violated."},range:{mdnSlug:"Web/HTTP/Headers/Range",name:"Range",summary:"The Range HTTP request header indicates the part of a document that the server should return."},referer:{mdnSlug:"Web/HTTP/Headers/Referer",name:"Referer",summary:"The Referer request header contains the address of the page making the request."},"referrer-policy":{mdnSlug:"Web/HTTP/Headers/Referrer-Policy",name:"Referrer-Policy",summary:"The Referrer-Policy HTTP header controls how much referrer information (sent via the Referer header) should be included with requests."},"retry-after":{mdnSlug:"Web/HTTP/Headers/Retry-After",name:"Retry-After",summary:"The Retry-After response HTTP header indicates how long the user agent should wait before making a follow-up request."},"save-data":{mdnSlug:"Web/HTTP/Headers/Save-Data",name:"Save-Data",summary:"The Save-Data header field is a boolean which, in requests, indicates the client's preference for reduced data usage."},"sec-fetch-dest":{mdnSlug:"Web/HTTP/Headers/Sec-Fetch-Dest",name:"Sec-Fetch-Dest",summary:"The Sec-Fetch-Dest fetch metadata header indicates the request's destination, that is how the fetched data will be used."},"sec-fetch-mode":{mdnSlug:"Web/HTTP/Headers/Sec-Fetch-Mode",name:"Sec-Fetch-Mode",summary:"The Sec-Fetch-Mode fetch metadata header indicates the request's mode."},"sec-fetch-site":{mdnSlug:"Web/HTTP/Headers/Sec-Fetch-Site",name:"Sec-Fetch-Site",summary:"The Sec-Fetch-Site fetch metadata header indicates the relationship between a request initiator's origin and the origin of the resource."},"sec-fetch-user":{mdnSlug:"Web/HTTP/Headers/Sec-Fetch-User",name:"Sec-Fetch-User",summary:"The Sec-Fetch-User fetch metadata header indicates whether or not a navigation request was triggered by a user activation."},"sec-websocket-accept":{mdnSlug:"Web/HTTP/Headers/Sec-WebSocket-Accept",name:"Sec-WebSocket-Accept",summary:"The Sec-WebSocket-Accept header is used in the websocket opening handshake."},server:{mdnSlug:"Web/HTTP/Headers/Server",name:"Server",summary:"The Server header describes the software used by the origin server that handled the request — that is, the server that generated the response."},"server-timing":{mdnSlug:"Web/HTTP/Headers/Server-Timing",name:"Server-Timing",summary:"The Server-Timing header communicates one or more metrics and descriptions for a given request-response cycle."},"set-cookie":{mdnSlug:"Web/HTTP/Headers/Set-Cookie",name:"Set-Cookie",summary:"The Set-Cookie HTTP response header is used to send a cookie from the server to the user agent, so the user agent can send it back to the server later."},"set-cookie2":{mdnSlug:"Web/HTTP/Headers/Set-Cookie2",name:"Set-Cookie2",summary:"The obsolete Set-Cookie2 HTTP response header used to send cookies from the server to the user agent, but has been deprecated by the specification."},sourcemap:{mdnSlug:"Web/HTTP/Headers/SourceMap",name:"SourceMap",summary:"The SourceMap HTTP response header links generated code to a source map, enabling the browser to reconstruct the original source and present the reconstructed original in the debugger."},"strict-transport-security":{mdnSlug:"Web/HTTP/Headers/Strict-Transport-Security",name:"Strict-Transport-Security",summary:"The HTTP Strict-Transport-Security response header (often abbreviated as HSTS) lets a web site tell browsers that it should only be accessed using HTTPS, instead of using HTTP."},te:{mdnSlug:"Web/HTTP/Headers/TE",name:"TE",summary:"The TE request header specifies the transfer encodings the user agent is willing to accept."},"timing-allow-origin":{mdnSlug:"Web/HTTP/Headers/Timing-Allow-Origin",name:"Timing-Allow-Origin",summary:"The Timing-Allow-Origin response header specifies origins that are allowed to see values of attributes retrieved via features of the Resource Timing API, which would otherwise be reported as zero due to cross-origin restrictions."},tk:{mdnSlug:"Web/HTTP/Headers/Tk",name:"Tk",summary:"The Tk response header indicates the tracking status that applied to the corresponding request."},trailer:{mdnSlug:"Web/HTTP/Headers/Trailer",name:"Trailer",summary:"The Trailer response header allows the sender to include additional fields at the end of chunked messages in order to supply metadata that might be dynamically generated while the message body is sent, such as a message integrity check, digital signature, or post-processing status."},"transfer-encoding":{mdnSlug:"Web/HTTP/Headers/Transfer-Encoding",name:"Transfer-Encoding",summary:"The Transfer-Encoding header specifies the form of encoding used to safely transfer the payload body to the user."},"upgrade-insecure-requests":{mdnSlug:"Web/HTTP/Headers/Upgrade-Insecure-Requests",name:"Upgrade-Insecure-Requests",summary:"The HTTP Upgrade-Insecure-Requests request header sends a signal to the server expressing the client’s preference for an encrypted and authenticated response, and that it can successfully handle the upgrade-insecure-requests CSP directive."},"user-agent":{mdnSlug:"Web/HTTP/Headers/User-Agent",name:"User-Agent",summary:"The User-Agent request header is a characteristic string that lets servers and network peers identify the application, operating system, vendor, and/or version of the requesting user agent."},vary:{mdnSlug:"Web/HTTP/Headers/Vary",name:"Vary",summary:"The Vary HTTP response header determines how to match future request headers to decide whether a cached response can be used rather than requesting a fresh one from the origin server."},via:{mdnSlug:"Web/HTTP/Headers/Via",name:"Via",summary:"The Via general header is added by proxies, both forward and reverse proxies, and can appear in the request headers and the response headers."},"www-authenticate":{mdnSlug:"Web/HTTP/Headers/WWW-Authenticate",name:"WWW-Authenticate",summary:"The HTTP WWW-Authenticate response header defines the authentication method that should be used to gain access to a resource."},"want-digest":{mdnSlug:"Web/HTTP/Headers/Want-Digest",name:"Want-Digest",summary:"The Want-Digest HTTP header is primarily used in a HTTP request, to ask the responder to provide a digest of the requested resource using the Digest response header."},warning:{mdnSlug:"Web/HTTP/Headers/Warning",name:"Warning",summary:"The Warning general HTTP header contains information about possible problems with the status of the message."},"x-content-type-options":{mdnSlug:"Web/HTTP/Headers/X-Content-Type-Options",name:"X-Content-Type-Options",summary:"The X-Content-Type-Options response HTTP header is a marker used by the server to indicate that the MIME types advertised in the Content-Type headers should not be changed and be followed."},"x-dns-prefetch-control":{mdnSlug:"Web/HTTP/Headers/X-DNS-Prefetch-Control",name:"X-DNS-Prefetch-Control",summary:"The X-DNS-Prefetch-Control HTTP response header controls DNS prefetching, a feature by which browsers proactively perform domain name resolution on both links that the user may choose to follow as well as URLs for items referenced by the document, including images, CSS, JavaScript, and so forth."},"x-forwarded-for":{mdnSlug:"Web/HTTP/Headers/X-Forwarded-For",name:"X-Forwarded-For",summary:"The X-Forwarded-For (XFF) header is a de-facto standard header for identifying the originating IP address of a client connecting to a web server through an HTTP proxy or a load balancer."},"x-forwarded-host":{mdnSlug:"Web/HTTP/Headers/X-Forwarded-Host",name:"X-Forwarded-Host",summary:"The X-Forwarded-Host (XFH) header is a de-facto standard header for identifying the original host requested by the client in the Host HTTP request header."},"x-forwarded-proto":{mdnSlug:"Web/HTTP/Headers/X-Forwarded-Proto",name:"X-Forwarded-Proto",summary:"The X-Forwarded-Proto (XFP) header is a de-facto standard header for identifying the protocol (HTTP or HTTPS) that a client used to connect to your proxy or load balancer."},"x-frame-options":{mdnSlug:"Web/HTTP/Headers/X-Frame-Options",name:"X-Frame-Options",summary:"The X-Frame-Options HTTP response header can be used to indicate whether or not a browser should be allowed to render a page in a <frame>, <iframe>, <embed> or <object>."},"x-xss-protection":{mdnSlug:"Web/HTTP/Headers/X-XSS-Protection",name:"X-XSS-Protection",summary:"The HTTP X-XSS-Protection response header is a feature of Internet Explorer, Chrome and Safari that stops pages from loading when they detect reflected cross-site scripting (XSS) attacks."}},i={connect:{mdnSlug:"Web/HTTP/Methods/CONNECT",name:"CONNECT",summary:"The HTTP CONNECT method starts two-way communications with the requested resource."},delete:{mdnSlug:"Web/HTTP/Methods/DELETE",name:"DELETE",summary:"The HTTP DELETE request method deletes the specified resource."},get:{mdnSlug:"Web/HTTP/Methods/GET",name:"GET",summary:"The HTTP GET method requests a representation of the specified resource."},head:{mdnSlug:"Web/HTTP/Methods/HEAD",name:"HEAD",summary:"The HTTP HEAD method requests the headers that would be returned if the HEAD request's URL was instead requested with the HTTP GET method."},options:{mdnSlug:"Web/HTTP/Methods/OPTIONS",name:"OPTIONS",summary:"The HTTP OPTIONS method requests permitted communication options for a given URL or server."},patch:{mdnSlug:"Web/HTTP/Methods/PATCH",name:"PATCH",summary:"The HTTP PATCH request method applies partial modifications to a resource."},post:{mdnSlug:"Web/HTTP/Methods/POST",name:"POST",summary:"The HTTP POST method sends data to the server."},put:{mdnSlug:"Web/HTTP/Methods/PUT",name:"PUT",summary:"The HTTP PUT request method creates a new resource or replaces a representation of the target resource with the request payload."},trace:{mdnSlug:"Web/HTTP/Methods/TRACE",name:"TRACE",summary:"The HTTP TRACE method performs a message loop-back test along the path to the target resource, providing a useful debugging mechanism."}};function a(e,t){const n=e[t];if(n)return{url:"https://developer.mozilla.org/en-US/docs/"+n.mdnSlug,name:n.name,summary:n.summary}}function c(e){return a(s,e.toLowerCase())}function l(e){const t=a(r,e.toString());if(t)return t.message=t.name.split(" ").slice(1).join(" "),t}function d(e){if(e)return o[e.toString()]}function u(e){return a(i,e.toLowerCase())}function p(e){if(!e)return"";const t=r[e.toString()];return t?t.name.slice(4):""}},51:function(e,t,n){"use strict";(function(e){n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return s})),n.d(t,"e",(function(){return a})),n.d(t,"g",(function(){return c})),n.d(t,"d",(function(){return l})),n.d(t,"f",(function(){return d})),n.d(t,"c",(function(){return p}));var r=n(4);const o=e=>{const t=(e||"").split(";")[0],[n,o]=t.split(/\/(.+)/);if(!o)return n;const s=o.split("+").map(e=>n+"/"+e);return r.find(s,e=>!!i[e])||r.last(s)},s=["text","json","xml","html","css","javascript"],i={"application/json":"json","text/json":"json","application/xml":"xml","text/xml":"xml","application/rss":"xml","application/javascript":"javascript","application/x-javascript":"javascript","application/ecmascript":"javascript","text/javascript":"javascript","text/plain":"text","text/csv":"text","application/x-www-form-urlencoded":"url-encoded","text/markdown":"markdown","text/x-markdown":"markdown","text/x-yaml":"yaml","text/yaml":"yaml","application/yaml":"yaml","image/png":"image","image/gif":"image","image/jpg":"image","image/jpeg":"image","image/svg":"image","image/tiff":"image","image/webp":"image","image/avif":"image","image/x-icon":"image","image/vnd.microsoft.icon":"image","text/css":"css","text/html":"html","application/xhtml":"html","application/octet-stream":"raw"};function a(e){const t=o(e);return i[t]}function c(e){const t=o(e),n=i[t];if(s.includes(n))return n}function l(e){return"raw"===e?"Hex":"json"===e?"JSON":"url-encoded"===e?"URL-Encoded":r.capitalize(e)}function d(e){return r.findKey(i,t=>t===e)}function u(e){return e>=65&&e<=90||e>=97&&e<=122||e>=48&&e<=57||43===e||47===e||61===e}function p(t,n,r){let o=new Set([t]);r&&!e.isBuffer(r)&&(r=r.decoded);const s=r&&r.slice(0,1).toString("ascii");return"{"!==s&&"["!==s||o.add("json"),"<"===s&&o.add("xml"),n&&n.startsWith("image/svg")&&o.add("xml"),r&&r.length>0&&r.length%4==0&&r.length<1e5&&r.every(u)&&o.add("base64"),o.add("text"),o.add("raw"),Array.from(o)}}).call(this,n(25).Buffer)},55:function(e,t,n){"use strict";(function(e){n.d(t,"b",(function(){return s})),n.d(t,"e",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"f",(function(){return c})),n.d(t,"d",(function(){return d})),n.d(t,"a",(function(){return u}));var r=n(14),o=n(21);const s=e=>r.d(e,()=>r.a),i=r.d(e=>({source:e.source,flags:e.flags}),e=>new RegExp(e.source,e.flags)),a=r.d(e=>void 0!==e?Object(o.b)(e).toString("base64"):void 0,t=>void 0!==t?e.from(t,"base64"):void 0),c=r.d(e=>e?JSON.stringify(e,(e,t)=>void 0===t?"__http_toolkit_undefined_placeholder__":t):void 0,e=>e?Object(o.k)(JSON.parse(e),e=>"__http_toolkit_undefined_placeholder__"===e?void 0:e):void 0);function l(e,t,n){let r,o;if(e.deserializer(t,(e,t)=>{e?o=e:r=t},n,void 0),o)throw o;return r}const d=(e,t)=>r.d(n=>Array.from(n.entries()).map(n=>[e.serializer(n[0]),t.serializer(n[1])]),(n,r,o,s)=>s(null,new Map(n.map(n=>[l(e,n[0],r),l(t,n[1],r)])))),u=e=>!!r.f(e);r.c({"*":!0})}).call(this,n(25).Buffer)},56:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return a}));var r=n(1),o=n(61);function s(t,n=!0){const r=e.isBuffer(t)?t.byteLength:"string"==typeof t?t.length:t;let o=n?1e3:1024,s=n?["bytes","kB","MB","GB","TB","PB","EB","ZB","YB"]:["bytes","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],i=0===r?0:Math.floor(Math.log(r)/Math.log(o)),a=1===r?"byte":s[i];return(r/Math.pow(o,i)).toFixed(1).replace(/\.0$/,"")+" "+a}const i=Symbol("encoded-body-test");function a(e){if(!e.body.decoded)return;const t=e.cache,n=t.get(i);if(n)return n.get();{const n=r.observable.box();return t.set(i,n),Object(o.f)(e.body.decoded).then(Object(r.action)(e=>{n.set(e)})).catch(()=>{}),n.get()}}}).call(this,n(25).Buffer)},57:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"d",(function(){return d})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return h})),n.d(t,"i",(function(){return m})),n.d(t,"j",(function(){return g})),n.d(t,"e",(function(){return f})),n.d(t,"h",(function(){return b})),n.d(t,"g",(function(){return y})),n.d(t,"f",(function(){return v}));var r=n(4),o=n(12),s=n(14),i=n(164),a=n(55),c=n(18);const{EchoWebSocketHandlerDefinition:l,RejectWebSocketHandlerDefinition:d,ListenWebSocketHandlerDefinition:u}=o.webSocketHandlerDefinitions;class p extends c.r{constructor(){super(...arguments),this.uiType="ws-wildcard"}explain(){return"Any WebSocket"}}class h extends c.r{constructor(){super(...arguments),this.uiType="default-ws-wildcard"}explain(){return"Any other WebSockets"}}class m extends o.matchers.MethodMatcher{explain(){return"started with "+o.Method[this.method]}}class g extends o.webSocketHandlerDefinitions.PassThroughWebSocketHandlerDefinition{constructor(e){super(e.activePassthroughOptions)}}s.b(g,{type:s.k()},e=>new g(e.args.rulesStore));class f extends o.webSocketHandlerDefinitions.PassThroughWebSocketHandlerDefinition{constructor(e,t,n){super(Object.assign(Object.assign({},n.activePassthroughOptions),{forwarding:{targetHost:e,updateHostHeader:t}})),this.uiType="ws-forward-to-host"}}s.b(f,{uiType:Object(a.b)(()=>"ws-forward-to-host"),type:s.k(),forwarding:s.h(s.k())},e=>{const t=e.json;return new f(t.forwarding.targetHost,t.forwarding.updateHostHeader,e.args.rulesStore)});const b=Object.assign(Object.assign({},r.omit(c.h,i.a)),{method:m,"ws-wildcard":p,"default-ws-wildcard":h}),y=[p],v=Object.assign(Object.assign({},o.webSocketHandlerDefinitions.WsHandlerDefinitionLookup),{"ws-passthrough":g,"ws-forward-to-host":f})},571:function(e,t,n){"use strict";function r(){return new Worker(n.p+"app.worker.js")}n.d(t,"a",(function(){return r}))},58:function(e,t,n){"use strict";n.d(t,"f",(function(){return u})),n.d(t,"e",(function(){return p})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return m})),n.d(t,"a",(function(){return g})),n.d(t,"k",(function(){return f})),n.d(t,"j",(function(){return b})),n.d(t,"i",(function(){return y})),n.d(t,"l",(function(){return v})),n.d(t,"b",(function(){return x})),n.d(t,"h",(function(){return w})),n.d(t,"g",(function(){return E}));var r=n(12),o=n(145);const{Serializable:s}=r.PluggableAdmin.Serialization;class i extends s{constructor(){super(...arguments),this.type="rtc-wildcard"}explain(){return"WebRTC connections"}}const{HasDataChannelMatcherDefinition:a,HasVideoTrackMatcherDefinition:c,HasAudioTrackMatcherDefinition:l,HasMediaTrackMatcherDefinition:d}=o.MatcherDefinitions,u=Object.assign(Object.assign({},o.MatcherDefinitions.MatcherDefinitionLookup),{"rtc-wildcard":i}),p=[i],{DynamicProxyStepDefinition:h,EchoStepDefinition:m,CloseStepDefinition:g,WaitForMediaStepDefinition:f,WaitForDurationStepDefinition:b,WaitForChannelStepDefinition:y,WaitForMessageStepDefinition:v,CreateChannelStepDefinition:x,SendStepDefinition:w}=o.HandlerStepDefinitions,E=Object.assign({},o.HandlerStepDefinitions.StepDefinitionLookup)},60:function(e,t,n){"use strict";function r(e){return new Promise(t=>setTimeout(t,e))}function o(e){try{const t=e();return Promise.resolve(t)}catch(e){return Promise.reject(e)}}function s(){let e=void 0,t=void 0,n=new Promise((n,r)=>{e=n,t=r});return{resolve:e,reject:t,promise:n}}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return s}))},61:function(e,t,n){"use strict";(function(e){n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return h})),n.d(t,"f",(function(){return m})),n.d(t,"a",(function(){return g})),n.d(t,"g",(function(){return f})),n.d(t,"e",(function(){return b})),n.d(t,"d",(function(){return y}));var r=n(570),o=n.n(r),s=n(88),i=n(571),a=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))};const c=new i.a;let l=0;const d=new s.EventEmitter;function u(e,t=[]){const n=l++;return new Promise((r,s)=>{c.postMessage(Object.assign({id:n},e),t),d.once(n.toString(),e=>{e.error?s(o()(e.error)):r(e)})})}function p(t,n){return a(this,void 0,void 0,(function*(){if(0===n.length||1===n.length&&"identity"===n[0]||0===t.length)return{encoded:t,decoded:t};try{const r=yield u({type:"decode",buffer:t.buffer,encodings:n},[t.buffer]);return{encoded:e.from(r.inputBuffer),decoded:e.from(r.decodedBuffer)}}catch(t){throw t.inputBuffer&&(t.inputBuffer=e.from(t.inputBuffer)),t}}))}function h(t,n){return a(this,void 0,void 0,(function*(){if(0===n.length||1===n.length&&"identity"===n[0])return t;const r=yield u({type:"encode",buffer:t.buffer,encodings:n});return e.from(r.encodedBuffer)}))}function m(e){return a(this,void 0,void 0,(function*(){return(yield u({type:"test-encodings",decodedBuffer:e})).encodingSizes}))}function g(e,t){return a(this,void 0,void 0,(function*(){return(yield u({type:"build-api",spec:e,baseUrlOverrides:t})).api}))}function f(e,t){return a(this,void 0,void 0,(function*(){return(yield u({type:"validate-pkcs12",buffer:e,passphrase:t})).result}))}function b(e){return a(this,void 0,void 0,(function*(){return(yield u({type:"parse-cert",buffer:e})).result}))}function y(e,t){return a(this,void 0,void 0,(function*(){return(yield u({type:"format",buffer:e,format:t})).formatted}))}c.addEventListener("message",e=>{d.emit(e.data.id.toString(),e.data)})}).call(this,n(25).Buffer)},647:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(24),o=n(84),s=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))};function i(e,t){return s(this,void 0,void 0,(function*(){try{const n=yield t.request.body.decodedPromise;if(!(null==n?void 0:n.length))throw new Error("No JSON-RPC request body");let r,o;try{if(r=JSON.parse(null==n?void 0:n.toString()),"2.0"!==r.jsonrpc)throw new Error("JSON-RPC request body had bad 'jsonrpc' field: "+r.jsonrpc);o=r.method}catch(e){throw console.warn(e),new Error("Could not parse JSON-RPC request body")}const s=e.requestMatchers[o];if(!s)throw new Error("Unrecognized JSON-RPC method name: "+o);return new a(e,t,{methodSpec:s,parsedBody:r})}catch(n){return new a(e,t,n)}}))}class a{constructor(e,t,n){var o,s;this._rpcMethod=n,this.isBuiltInApi=!0===e.spec.info["x-httptoolkit-builtin-api"],this.service=new c(e),Object(r.c)(n)?(this.operation={name:"Unrecognized request to JSON-RPC API",warnings:[null!==(o=n.message)&&void 0!==o?o:n.toString()]},this.request={parameters:[]}):(this.operation=new l(n,null===(s=e.spec.externalDocs)||void 0===s?void 0:s["x-method-base-url"]),this.request=new u(n,t))}updateWithResponse(e){"aborted"===e||void 0===e||Object(r.c)(this._rpcMethod)||(this.response=new p(this._rpcMethod))}matchedOperation(){return this._rpcMethod&&!Object(r.c)(this._rpcMethod)}}class c{constructor(e){var t,n,r;this.name=e.spec.info.title,this.shortName=null!==(t=e.spec.info["x-httptoolkit-short-name"])&&void 0!==t?t:this.name.split(" ")[0],this.logoUrl=null===(n=e.spec.info["x-logo"])||void 0===n?void 0:n.url,this.description=Object(o.a)(e.spec.info.description),this.docsUrl=null===(r=e.spec.externalDocs)||void 0===r?void 0:r.url}}class l{constructor(e,t){var n,r;this.warnings=[];const{methodSpec:s}=e;this.name=s.name,this.description=Object(o.a)([s.summary,s.description].filter(e=>!!e).join("\n\n")),this.docsUrl=null!==(r=null===(n=s.externalDocs)||void 0===n?void 0:n.url)&&void 0!==r?r:t?t+s.name.toLowerCase():void 0,s.deprecated&&this.warnings.push(`The '${this.name}' method is deprecated.`)}}const d=e=>e?e.charAt(0).toUpperCase()+e.slice(1):void 0;class u{constructor(e,t){const{methodSpec:n,parsedBody:r}=e;this.parameters=n.params.map((e,t)=>{var n,s;const i=e.schema;return{name:e.name,description:Object(o.a)([e.summary,e.description,d(null==i?void 0:i.title),...(null===(n=null==i?void 0:i.oneOf)||void 0===n?void 0:n.length)?["One of:",i.oneOf.map(e=>`* ${d(e.title)}: ${e.description||e.type||"unknown"}`).join("\n")]:[]].filter(e=>!!e).join("\n\n")),in:"body",required:!!e.required,deprecated:!!e.deprecated,type:null==i?void 0:i.type,value:r.params[t],defaultValue:null==i?void 0:i.default,enum:(null==i?void 0:i.enum)||(null===(s=null==i?void 0:i.items)||void 0===s?void 0:s.enum),warnings:[...e.deprecated?[`The '${e.name}' parameter is deprecated.`]:[],...e.required&&void 0===r.params[t]&&i&&void 0===i.default?[`The '${e.name}' parameter is required.`]:[]]}})}}class p{constructor(e){const t=e.methodSpec.result;this.description=Object(o.a)(t.description),this.bodySchema={type:"object",properties:{id:{type:"number"},jsonrpc:{type:"string",enum:["2.0"]},result:t.schema,error:{type:"object",properties:{code:{type:"number"},message:{type:"string"}}}},required:["id","jsonrpc"]}}}},650:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return O}));var r=n(4),o=n(12),s=n(1),i=n(79),a=n(14),c=n(343),l=n(117),d=n(36),u=n(47),p=n(26),h=n(118),m=n(9),g=n(29),f=n(17),b=n(68),y=n(129),v=n(253),x=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},w=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))};const E=a.c({passphrase:a.k(),filename:a.k(),pfx:a.d(c.encode,c.decode)}),C=(e,t)=>Object(y.c)(Object(y.d)(e),{rulesStore:t}),T=e=>"docker-tunnel-proxy-"+e;class O{constructor(e,t,n){this.accountStore=e,this.proxyStore=t,this.jumpToExchange=n,this.initialized=Object(d.c)(()=>w(this,void 0,void 0,(function*(){yield Promise.all([this.accountStore.initialized,this.proxyStore.initialized]),yield this.loadSettings();const{setRequestRules:e,setWebSocketRules:t,setRTCRules:n,serverVersion:o}=this.proxyStore;Object(s.reaction)(()=>this.activePassthroughOptions,()=>{this.rules=C(this.rules,this),this.draftRules=C(this.draftRules,this)}),Object(s.reaction)(()=>this.upstreamProxyType,e=>{"direct"!==e&&"system"!==e||(this.upstreamProxyHost=void 0)}),yield new Promise(i=>{Object(s.reaction)(()=>r.cloneDeep(Object(f.h)(this.rules).filter(e=>e.activated&&e.matchers.length)),r=>w(this,void 0,void 0,(function*(){try{yield Promise.all([e(...r.filter(g.n)),...l.satisfies(o,m.B)?[t(...r.filter(g.t))]:[],...l.satisfies(o,m.u)?[n(...r.filter(g.r).map(({matchers:e,steps:t})=>({matchers:e.slice(1),steps:t})))]:[]]),i()}catch(e){console.log("Failed to activate stored rules",e,JSON.stringify(r)),Object(p.d)("Failed to activate configured ruleset"),alert("Configured rules could not be activated, so were reset to default."),this.resetRulesToDefault()}})),{fireImmediately:!0})}),console.log("Rules store initialized")}))),this.upstreamProxyType="system",this.upstreamProxyHost=void 0,this.upstreamNoProxyHosts=[],this.whitelistedCertificateHosts=["localhost"],this.clientCertificateHostMap={},this.additionalCaCertificates=[],this.triggerRequestBreakpoint=e=>this.triggerBreakpoint(e.id,t=>t.triggerRequestBreakpoint(e)),this.triggerResponseBreakpoint=e=>this.triggerBreakpoint(e.id,t=>t.triggerResponseBreakpoint(e)),this.triggerBreakpoint=Object(s.flow)((function*(e,t){const n=yield this.jumpToExchange(e);return yield t(n)}))}loadSettings(){var e;return w(this,void 0,void 0,(function*(){const{accountStore:t}=this;yield Object(u.a)({key:"rules-store",store:this,dataTransform:e=>r.omit(e,"rules")});try{const t=JSON.parse(null!==(e=localStorage.getItem("rules-store"))&&void 0!==e?e:"{}");Object(s.runInAction)(()=>{"draftWhitelistedCertificateHosts"in t&&(this.whitelistedCertificateHosts=t.draftWhitelistedCertificateHosts),"draftClientCertificateHostMap"in t&&(this.clientCertificateHostMap=t.draftClientCertificateHostMap)})}catch(e){Object(p.d)(e)}if(t.mightBePaidUser)if(yield Object(u.a)({key:"rules-store",store:this,dataTransform:e=>({rules:Object(v.a)(e.rules)}),customArgs:{rulesStore:this}}).catch(e=>{var t,n;console.log("Failed to load last-run rules",e,null===(n=JSON.parse(null!==(t=localStorage.getItem("rules-store"))&&void 0!==t?t:"{}"))||void 0===n?void 0:n.rules),Object(p.d)(e),alert("Could not load rules from last run.\n\n"+e)}),this.rules){this.resetRuleDrafts();Object(b.a)(this,this.proxyStore).forEach(e=>this.ensureRuleExists(e))}else this.resetRulesToDefault();else this.resetRulesToDefault();this.ensureRuleDoesNotExist("default-forwarding-rule"),Object(h.b)("httpToolkitForwardingDefault").then(Object(s.action)(e=>{const[t,n]=e.split("|"),r=Object(b.d)(t,n,this);this.ensureRuleExists(r)})),"socks"===this.upstreamProxyType&&Object(s.runInAction)(()=>{this.upstreamProxyType="socks5h"}),Object(s.observe)(t,"accountDataLastUpdated",()=>{t.isPaidUser||(this.whitelistedCertificateHosts=["localhost"],this.clientCertificateHostMap={},this.upstreamProxyType="system",this.upstreamNoProxyHosts=[])})}))}get activePassthroughOptions(){const t={ignoreHostHttpsErrors:this.whitelistedCertificateHosts,trustAdditionalCAs:this.additionalCaCertificates.map(e=>({cert:e.rawPEM})),clientCertificateHostMap:r.mapValues(this.clientCertificateHostMap,t=>({pfx:e.from(t.pfx),passphrase:t.passphrase})),proxyConfig:this.proxyConfig,lookupOptions:this.proxyStore.dnsServers.length?{servers:this.proxyStore.dnsServers}:void 0,simulateConnectionErrors:!0};return r.cloneDeep(t)}get effectiveSystemProxyConfig(){const{systemProxyConfig:e}=this.proxyStore;if(!e)return;const{proxyUrl:t}=e;try{const n=new URL(t),{hostname:r}=n;return"localhost"===r||r.startsWith("127.0.0")?"ignored":e}catch(e){return console.log("Could not parse proxy",t),Object(p.d)(e),"unparseable"}}get userProxyConfig(){if("direct"!==this.upstreamProxyType){if("system"===this.upstreamProxyType){const e=this.effectiveSystemProxyConfig;return!e||r.isString(e)?void 0:e}return{proxyUrl:`${this.upstreamProxyType}://${this.upstreamProxyHost}`,noProxy:this.upstreamNoProxyHosts}}}get proxyConfig(){const{userProxyConfig:e}=this,{httpProxyPort:t}=this.proxyStore;if(this.proxyStore.ruleParameterKeys.includes(T(t))){const n={[o.MOCKTTP_PARAM_REF]:T(t)};return e?[n,e]:n}return e}saveRules(){this.rules=this.draftRules,this.resetRuleDrafts()}resetRuleDrafts(){this.draftRules=r.cloneDeep(this.rules)}resetRulesToDefault(){this.rules=Object(b.c)(this,this.proxyStore),this.resetRuleDrafts()}get areSomeRulesUnsaved(){return!r.isEqualWith(this.draftRules,this.rules,f.b)}get areSomeRulesNonDefault(){const e=Object(b.c)(this,this.proxyStore);return!r.isEqualWith(this.draftRules,e,f.b)}resetRule(e){const{draftRules:t,rules:n}=this,o=Object(f.i)(t,e);if(Object(f.k)(o))throw new Error("Can't reset single rule group");const i=o.id,a=Object(f.g)(n,{id:i});if(!a)throw new Error("Can't reset a new rule");const c=Object(f.i)(n,a),l=Object(f.j)(n,a),d=Object(f.j)(t,e);let u=Object(f.f)(t,{id:l.id});if(!u){let e=[l];for(;e.length;){const o=a.slice(0,-e.length),i=Object(f.j)(n,o),c=Object(f.f)(t,{id:i.id});c?(u=e.reduce(({draftParent:e,activeParent:t},n)=>{const o=Object(s.observable)(r.clone(Object.assign(Object.assign({},n),{items:[]}))),i=r.intersectionBy(e.items,t.items,"id"),a=r.intersectionBy(t.items,e.items.concat(n),"id"),c=r.findIndex(a,{id:n.id});if(c>0){const t=i[c-1],n=r.findIndex(e.items,{id:t.id})+1;e.items.splice(n,0,o)}else e.items.unshift(o);return{draftParent:o,activeParent:n}},{draftParent:c,activeParent:i}).draftParent,e=[]):e.unshift(i)}}const p=r.cloneDeep(c);d.id===u.id?Object(f.n)(t,e,p):(r.remove(d.items,{id:p.id}),u.items.splice(0,0,p),0!==d.items.length||Object(f.l)(d)||this.deleteDraftItem(Object(f.g)(this.draftRules,{id:d.id})));const h=u.items,m=l.items,g=r.intersectionBy(h,m,"id"),b=r.intersectionBy(m,h,"id"),y=r.findIndex(b,{id:i});if(r.findIndex(g,{id:i})!==y)if(r.remove(h,{id:i}),r.remove(g,{id:i}),y>0){const e=g[y-1],t=r.findIndex(h,{id:e.id})+1;h.splice(t,0,p)}else h.unshift(p)}saveItem(e){const{draftRules:t,rules:n}=this,o=Object(f.i)(t,e),i=Object(f.j)(t,e);let a=Object(f.f)(n,{id:i.id});a||(a=this.saveItem(e.slice(0,-1)));const c=o.id,l=Object(f.g)(n,{id:c}),d=Object(s.observable)(r.cloneDeep(r.omit(o,"items")));if(Object(f.k)(o))if(l){const e=Object(f.i)(n,l);d.items=r.cloneDeep(e.items)}else d.items=[];if(l){const e=Object(f.j)(n,l);if(e===a)Object(f.n)(n,l,d);else{const t=r.last(l);if(e.items.splice(t,1),a.items.push(d),0===e.items.length&&!Object(f.l)(e)){const t=Object(f.g)(n,{id:e.id});Object(f.e)(n,t)}}}else a.items.push(d);const u=r.differenceBy(a.items,i.items,"id"),p=r.intersectionBy(a.items,i.items,"id"),h=r.intersectionBy(i.items,a.items,"id");if(r.findIndex(h,{id:c})===r.findIndex(p,{id:c}))return d;const m=r.sortBy(p,e=>r.findIndex(i.items,{id:e.id}));return u.forEach(e=>{const t=Math.min(a.items.indexOf(e),a.items.length);m.splice(t,0,e)}),a.items=m,d}addDraftItem(e,t){if(!t)return void this.draftRules.items.unshift(e);const n=Object(f.j)(this.draftRules,t),o=r.last(t);n.items.splice(o,0,e)}deleteDraftItem(e){Object(f.e)(this.draftRules,e)}moveDraftRule(e,t){const n=Object(f.j)(this.draftRules,e),o=Object(f.j)(this.draftRules,t),s=r.last(e),i=r.last(t),[a]=n.items.splice(s,1);o.items.splice(i,0,a),0!==n.items.length||Object(f.l)(n)||this.deleteDraftItem(Object(f.g)(this.draftRules,{id:n.id}))}combineDraftRulesAsGroup(e,t){const n=Object(f.i)(this.draftRules,e),o=Object(f.j)(this.draftRules,t),s=r.last(t),a=o.items[s];o.items[s]={id:i(),title:"New group",items:[a,n]},this.deleteDraftItem(e)}updateGroupTitle(e,t){const n=Object(f.f)(this.draftRules,{id:e}),r=Object(f.f)(this.rules,{id:e});n.title=t,r&&(r.title=t)}ensureRuleExists(e){const t=Object(f.g)(this.rules,{id:e.id}),n=t?Object(f.i)(this.rules,t):void 0,r=Object(f.g)(this.draftRules,{id:e.id}),o=r?Object(f.i)(this.draftRules,r):void 0;if(Object(f.b)(e,n)&&Object(f.b)(e,o))return;if(r)return Object(f.n)(this.draftRules,r,e),void this.saveItem(r);let s=Object(f.g)(this.draftRules,{id:"default-group"});if(s){Object(f.i)(this.draftRules,s).items.unshift(e)}else this.draftRules.items.push(Object(b.b)([e])),s=[this.draftRules.items.length-1];this.saveItem(s.concat(0))}ensureRuleDoesNotExist(e){const t=Object(f.g)(this.rules,{id:e});t&&Object(f.e)(this.rules,t);const n=Object(f.g)(this.draftRules,{id:e});n&&Object(f.e)(this.draftRules,n)}loadSavedRules(e){this.rules=Object(y.c)(e,{rulesStore:this}),this.resetRuleDrafts()}}x([s.computed.struct],O.prototype,"activePassthroughOptions",null),x([u.b,s.observable],O.prototype,"upstreamProxyType",void 0),x([u.b,s.observable],O.prototype,"upstreamProxyHost",void 0),x([Object(u.b)("list"),s.observable],O.prototype,"upstreamNoProxyHosts",void 0),x([s.computed],O.prototype,"effectiveSystemProxyConfig",null),x([s.computed.struct],O.prototype,"userProxyConfig",null),x([s.computed.struct],O.prototype,"proxyConfig",null),x([Object(u.b)("list"),s.observable],O.prototype,"whitelistedCertificateHosts",void 0),x([Object(u.b)("map",E),s.observable],O.prototype,"clientCertificateHostMap",void 0),x([Object(u.b)("list"),s.observable],O.prototype,"additionalCaCertificates",void 0),x([Object(u.b)("object",y.a),s.observable],O.prototype,"rules",void 0),x([s.observable],O.prototype,"draftRules",void 0),x([s.action.bound],O.prototype,"saveRules",null),x([s.action.bound],O.prototype,"resetRuleDrafts",null),x([s.action.bound],O.prototype,"resetRulesToDefault",null),x([s.computed],O.prototype,"areSomeRulesUnsaved",null),x([s.computed],O.prototype,"areSomeRulesNonDefault",null),x([s.action.bound],O.prototype,"resetRule",null),x([s.action.bound],O.prototype,"saveItem",null),x([s.action.bound],O.prototype,"addDraftItem",null),x([s.action.bound],O.prototype,"deleteDraftItem",null),x([s.action.bound],O.prototype,"moveDraftRule",null),x([s.action.bound],O.prototype,"combineDraftRulesAsGroup",null),x([s.action.bound],O.prototype,"updateGroupTitle",null),x([s.action.bound],O.prototype,"ensureRuleExists",null),x([s.action.bound],O.prototype,"ensureRuleDoesNotExist",null),x([s.action.bound],O.prototype,"loadSavedRules",null)}).call(this,n(25).Buffer)},653:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return f}));var r=n(4),o=n(1),s=n(79),i=n(12),a=n(26),c=n(36),l=n(47),d=n(24),u=n(19),p=n(66),h=n(344),m=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},g=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))};class f{constructor(t,n){this.eventStore=t,this.rulesStore=n,this.initialized=Object(c.c)(()=>g(this,void 0,void 0,(function*(){yield Promise.all([this.eventStore.initialized,this.rulesStore.initialized]),yield Object(l.a)({key:"send-store",store:this}),console.log("Send store initialized")}))),this.requestInput={url:"",method:"GET",headers:[],requestContentType:"text",rawBody:e.from([])},this.sendRequest=e=>g(this,void 0,void 0,(function*(){var t,n;const r=s(),i=this.rulesStore.activePassthroughOptions,a=new URL(e.url),c=y(a),l=`${a.hostname}:${c}`,d=(null===(t=i.clientCertificateHostMap)||void 0===t?void 0:t[l])||(null===(n=i.clientCertificateHostMap)||void 0===n?void 0:n[a.hostname])||void 0,h={ignoreHostHttpsErrors:i.ignoreHostHttpsErrors,trustAdditionalCAs:this.rulesStore.additionalCaCertificates.map(e=>({cert:e.rawPEM})),clientCertificate:d,proxyConfig:v(this.rulesStore.proxyConfig),lookupOptions:i.lookupOptions},m=yield p.h({url:e.url,method:e.method,headers:e.headers,rawBody:e.rawBody},h),g=this.eventStore.recordSentRequest({id:r,matchedRuleId:!1,method:e.method,url:e.url,protocol:a.protocol.slice(0,-1),path:a.pathname,hostname:a.hostname,headers:Object(u.h)(e.headers),rawHeaders:e.headers,body:{buffer:e.rawBody},timingEvents:{},tags:["httptoolkit:manually-sent-request"]});b(m,g).catch(Object(o.action)(e=>{g.markAborted({id:g.id,error:e,timingEvents:Object.assign(Object.assign({},g.timingEvents),{abortedTimestamp:performance.now()}),tags:e.code?["passthrough-error:"+e.code]:[]})})),Object(o.runInAction)(()=>{this.sentExchange=g})}))}}m([Object(l.b)("object",h.b),o.observable],f.prototype,"requestInput",void 0),m([o.observable],f.prototype,"sentExchange",void 0);const b=Object(o.flow)((function*(t,n){var r;const o=t.getReader(),s=Object.assign({},n.timingEvents);let i,c=[];for(;;){const{done:t,value:l}=yield o.read();if(t)return;const p=l.type;switch(p){case"request-start":s.startTime=Date.now(),s.startTimestamp=l.timestamp,s.bodyReceivedTimestamp=l.timestamp;break;case"response-head":i=l,s.headersSentTimestamp=l.timestamp;break;case"response-body-part":c.push(l.rawBody);break;case"response-end":if(!i)throw new Error("Received response-end before response-head!");s.responseSentTimestamp=l.timestamp,n.setResponse({id:n.id,statusCode:i.statusCode,statusMessage:null!==(r=i.statusMessage)&&void 0!==r?r:"",headers:Object(u.h)(i.headers),rawHeaders:i.headers,body:{buffer:e.concat(c)},tags:[],timingEvents:s});break;case"error":throw l.error.message?new Error(l.error.message+(l.error.code?` (${l.error.code})`:"")):(Object(a.d)("Unknown response error for sent request: "+JSON.stringify(l.error)),new Error("Unknown response error"));default:throw new d.a(p)}}})),y=e=>e.port?parseInt(e.port,10):"https:"===e.protocol||"wss:"===e.protocol?443:80;function v(e){if(e){if(r.isArray(e))return e.map(e=>v(e));if(i.MOCKTTP_PARAM_REF in e){const t=e[i.MOCKTTP_PARAM_REF];return{[h.a]:t}}return e}}}).call(this,n(25).Buffer)},654:function(e){e.exports=JSON.parse('{"name":"httptoolkit-ui","private":true,"description":"Beautiful, cross-platform & open-source HTTP(S) debugging proxy, analyzer & client.","main":"dist/main.js","files":["dist","src"],"scripts":{"prebuild":"rimraf dist","build":"run-script-os","build:default":"env-cmd -f ./automation/ts-node.env.js node --max_old_space_size=4096 node_modules/.bin/webpack --config ./automation/webpack.prod.ts","build:windows":"env-cmd -f ./automation/ts-node.env.js node --max_old_space_size=4096 node_modules/webpack/bin/webpack.js --config ./automation/webpack.prod.ts","bundle-stats":"npm-run-all bundle-stats:build bundle-stats:show","bundle-stats:build":"run-script-os","bundle-stats:build:default":"npm run build:default -- --no-devtool --profile --json | tail -n +14 > stats.json","bundle-stats:build:windows":"npm run build:windows -- --no-devtool --profile --json | powershell -Command \\"$input | Select -Skip 5\\" > stats.json","bundle-stats:show":"webpack-bundle-analyzer ./stats.json","server:setup":"ts-node -P ./automation/tsconfig.json ./automation/setup-server.ts","server:start":"cross-env OCLIF_TS_NODE=0 node .httptoolkit-server/httptoolkit-server/bin/run start","start":"npm-run-all --parallel --print-label start:server start:web","start:server":"npm-run-all server:setup server:start","start:web":"env-cmd -f ./automation/ts-node.env.js webpack-dev-server --config ./automation/webpack.dev.ts","start:prod":"npm-run-all build start:prod:webserver","start:prod:webserver":"static-server ./dist -o","test":"npm-run-all test:unit test:integration","test:unit":"env-cmd -f ./automation/ts-node.env.js karma start ./test/unit/karma.conf.js","test:unit:dev":"npm run test:unit -- --single-run=false --auto-watch","test:unit:debug":"npm run test:unit -- --single-run=false --browsers Chrome","test:integration":"npm-run-all server:setup build test:integration:run","test:integration:run":"env-cmd -f ./test/integration/ts-node.env mocha --exit -r ts-node/register \'test/integration/**/*.spec.ts\'"},"author":"Tim Perry <tim@httptoolkit.com>","license":"AGPL-3.0-or-later","runtimeDependencies":{"httptoolkit-server":">=1.0.0","httptoolkit-desktop":">=1.1.0"},"dependencies":{"@ethersproject/abi":"^5.7.0","@fortawesome/fontawesome-svg-core":"^1.2.27","@fortawesome/free-brands-svg-icons":"^5.12.1","@fortawesome/free-regular-svg-icons":"^5.12.1","@fortawesome/free-solid-svg-icons":"^5.12.1","@fortawesome/react-fontawesome":"^0.1.8","@httptoolkit/accounts":"^1.0.1","@httptoolkit/auth0-lock":"^11.26.3","@httptoolkit/httpsnippet":"^2.1.1","@open-rpc/meta-schema":"^1.14.2","@reach/router":"^1.2.1","@sentry/browser":"^4.2.4","@sentry/webpack-plugin":"^1.14.0","@types/auth0-js":"^8.11.8","@types/auth0-lock":"^11.4.10","@types/base64-arraybuffer":"^0.1.0","@types/dedent":"^0.7.0","@types/dompurify":"0.0.32","@types/har-format":"^1.2.5","@types/inline-style-prefixer":"^3.0.1","@types/js-beautify":"^1.8.0","@types/json-schema":"^7.0.3","@types/jsonwebtoken":"^8.3.0","@types/lodash":"^4.14.146","@types/node":"^15.3.0","@types/node-forge":"^1.3.2","@types/qrcode.react":"^1.0.0","@types/reach__router":"^1.2.4","@types/react":"^16.14.29","@types/react-autosuggest":"^10.0.1","@types/react-dom":"^16.8.25","@types/react-fontawesome":"^1.6.4","@types/react-window":"^1.8.1","@types/remarkable":"^1.7.3","@types/semver":"^7.3.1","@types/serialize-error":"^2.1.0","@types/set-cookie-parser":"0.0.3","@types/styled-components":"^5.1.4","@types/traverse":"^0.6.32","@types/ua-parser-js":"^0.7.33","@types/uuid":"^3.4.4","@types/workbox-webpack-plugin":"^5.1.5","@types/yaml":"^1.2.0","@vx/axis":"^0.0.199","@vx/curve":"^0.0.199","@vx/group":"^0.0.199","@vx/responsive":"^0.0.199","@vx/shape":"^0.0.199","ajv":"^8.12.0","ajv-formats":"^2.1.1","auth0-js":"^9.13.2","base64-arraybuffer":"^0.2.0","d3-scale":"^4.0.2","date-fns":"^1.30.1","dedent":"^0.7.0","deserialize-error":"0.0.3","dompurify":"^2.1.1","graphql":"^14.7.0","har-validator":"^5.1.3","http-encoding":"^1.3.0","js-beautify":"^1.8.8","jsonwebtoken":"^8.4.0","localforage":"^1.7.3","lodash":"^4.17.21","mobx":"^5.15.0","mobx-persist":"^0.4.1","mobx-react":"^5.4.0","mobx-react-lite":"^2.2.2","mobx-shallow-undo":"^1.0.0","mobx-utils":"^5.1.0","mockrtc":"^0.3.1","mockttp":"^3.5.0","monaco-editor":"^0.27.0","node-forge":"^1.3.0","openapi-directory":"^1.3.0","openapi3-ts":"^1.3.0","polished":"^3.2.0","posthog-js":"^1.57.2","qrcode.react":"^1.0.0","randexp":"^0.5.3","react":"^16.14.0","react-autosuggest":"^10.0.4","react-beautiful-dnd":"^12.2.0","react-contexify":"^6.0.0","react-dom":"^16.14.0","react-hotkeys-hook":"^2.1.3","react-monaco-editor":"^0.45.0","react-reverse-portal":"^2.1.1","react-split-pane":"^0.1.84","react-virtualized-auto-sizer":"^1.0.2","react-window":"^1.8.5","remarkable":"^1.7.4","semver":"^7.5.2","serialize-error":"^3.0.0","serializr":"^1.5.4","set-cookie-parser":"^2.3.5","styled-components":"^5.0.0","styled-reset":"^1.1.2","swagger2openapi":"^5.3.2","traverse":"^0.6.6","ts-node":"^8.6.2","typed-error":"^3.2.0","typesafe-get":"^2.1.1","typescript":"^5.1.6","ua-parser-js":"^0.7.33","uuid":"^3.3.2","xml-beautifier":"^0.4.0","yaml":"^1.7.2"},"devDependencies":{"@types/chai":"^4.1.7","@types/chai-as-promised":"^7.1.0","@types/chai-enzyme":"^0.6.6","@types/copy-webpack-plugin":"^4.4.3","@types/enzyme":"^3.9.0","@types/enzyme-adapter-react-16":"^1.0.5","@types/html-webpack-plugin":"3.2.0","@types/mocha":"^7.0.1","@types/node-fetch":"^2.1.4","@types/puppeteer":"^1.11.1","@types/sinon":"^9.0.8","@types/ssri":"^7.1.0","@types/targz":"^1.0.1","@types/tmp":"^0.1.0","@types/webpack":"^4.4.17","@types/webpack-dev-server":"^3.1.1","@types/webpack-env":"^1.13.6","@types/webpack-merge":"^4.1.3","arraybuffer-loader":"^1.0.8","cache-loader":"^4.1.0","chai":"^4.2.0","chai-as-promised":"^7.1.1","chai-deep-match":"^1.2.1","chai-enzyme":"^1.0.0-beta.1","copy-webpack-plugin":"^5.0.0","cross-env":"^7.0.3","css-loader":"^1.0.0","env-cmd":"^10.1.0","enzyme":"^3.9.0","enzyme-adapter-react-16":"^1.10.0","file-loader":"^2.0.0","fork-ts-checker-notifier-webpack-plugin":"^5.0.0","fork-ts-checker-webpack-plugin":"^6.5.3","google-fonts-plugin":"^5.0.2","html-webpack-plugin":"^3.2.0","json-loader":"^0.5.7","karma":"^3.1.1","karma-chai":"^0.1.0","karma-chrome-launcher":"^3.1.0","karma-mocha":"^2.0.1","karma-mocha-reporter":"^2.2.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","mocha":"^10.2.0","monaco-editor-webpack-plugin":"^4.1.2","node-fetch":"^2.6.7","npm-run-all":"^4.1.5","puppeteer":"^1.18.1","raw-loader":"^0.5.1","rimraf":"^4.3.1","run-script-os":"^1.1.6","service-worker-loader":"^4.0.0","sinon":"^9.2.1","source-map-loader":"^0.2.4","ssri":"^8.0.1","static-server":"^2.2.1","style-loader":"^0.21.0","targz":"^1.0.1","thread-loader":"^3.0.4","tmp":"0.0.33","ts-loader":"^8.3.0","typescript-styled-plugin":"^0.15.0","umd-compat-loader":"^2.1.1","webpack":"^4.44.2","webpack-bundle-analyzer":"^4.3.0","webpack-cli":"^3.1.2","webpack-dev-server":"^3.9.0","webpack-merge":"^4.1.4","workbox-webpack-plugin":"^6.0.2","worker-loader":"^3.0.8"}}')},655:function(e,t,n){e.exports=n.p+"339233e471b772666625b377b42622f3.svg"},66:function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"j",(function(){return b})),n.d(t,"g",(function(){return v})),n.d(t,"c",(function(){return x})),n.d(t,"f",(function(){return w})),n.d(t,"e",(function(){return E})),n.d(t,"d",(function(){return C})),n.d(t,"a",(function(){return T})),n.d(t,"h",(function(){return O})),n.d(t,"i",(function(){return S}));var r=n(108),o=n(21),s=n(60),i=n(9),a=n(101),c=n(4),l=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))};class d{constructor(e){this.authToken=e}graphql(e,t,n){return l(this,void 0,void 0,(function*(){const r=yield fetch("http://127.0.0.1:45457",{method:"POST",headers:Object.assign(Object.assign({},this.authToken?{Authorization:"Bearer "+this.authToken}:{}),{"content-type":"application/json"}),body:JSON.stringify({operationName:e,query:t,variables:n})}).catch(t=>{var n;throw new a.a(`fetch failed with '${null!==(n=t.message)&&void 0!==n?n:t}'`,e)});if(!r.ok)throw console.error(r),new a.a(`unexpected status ${r.status} ${r.statusText}`,e,r.status);const{data:o,errors:s}=yield r.json();if(s&&s.length){console.error(s);const t=s.length>1?`s (${s.length})`:"";throw new a.a(`GraphQL error${t}: ${s.map(e=>`${e.message} at ${e.path.join(".")}`).join(", ")}`,e)}return o}))}getServerVersion(){return l(this,void 0,void 0,(function*(){return(yield this.graphql("getVersion","\n            query getVersion {\n                version\n            }\n        ",{})).version}))}getConfig(e){return l(this,void 0,void 0,(function*(){const t=yield this.graphql("getConfig",`\n            ${Object(i.F)(yield i.E,i.i)?"query getConfig($proxyPort: Int!) {":"query getConfig {"}\n                config {\n                    certificatePath\n                    ${Object(i.F)(yield i.E,i.g)?"\n                        certificateContent\n                        certificateFingerprint\n                    ":""}\n                }\n\n                ${Object(i.F)(yield i.E,i.g)?"networkInterfaces":""}\n\n                ${Object(i.F)(yield i.E,i.s)?"systemProxy {\n                    proxyUrl\n                    noProxy\n                }":""}\n\n                ${Object(i.F)(yield i.E,i.i)?"\n                    dnsServers(proxyPort: $proxyPort)\n                    ruleParameterKeys\n                ":""}\n            }\n        `,{proxyPort:e});return Object.assign(Object.assign({},t.config),{networkInterfaces:t.networkInterfaces||{},systemProxy:t.systemProxy,dnsServers:t.dnsServers||[],ruleParameterKeys:t.ruleParameterKeys||[]})}))}getNetworkInterfaces(){return l(this,void 0,void 0,(function*(){if(!Object(i.F)(yield i.E,i.g))return{};return(yield this.graphql("getNetworkInterfaces","\n            query getNetworkInterfaces {\n                networkInterfaces\n            }\n        ",{})).networkInterfaces}))}getInterceptors(e){return l(this,void 0,void 0,(function*(){return(yield this.graphql("getInterceptors",`\n            query getInterceptors($proxyPort: Int!) {\n                interceptors {\n                    id\n                    version\n                    isActive(proxyPort: $proxyPort)\n                    isActivable\n\n                    ${Object(i.F)(yield i.E,i.m)?"metadata":""}\n                }\n            }\n        `,{proxyPort:e})).interceptors}))}getDetailedInterceptorMetadata(e){return l(this,void 0,void 0,(function*(){if(!Object(i.F)(yield i.E,i.h))return;return(yield this.graphql("getDetailedInterceptorMetadata","\n            query getDetailedInterceptorMetadata($id: ID!) {\n                interceptor(id: $id) {\n                    metadata(type: DETAILED)\n                }\n            }\n        ",{id:e})).interceptor.metadata}))}activateInterceptor(e,t,n){return l(this,void 0,void 0,(function*(){const r=(yield this.graphql("Activate","\n            mutation Activate($id: ID!, $proxyPort: Int!, $options: Json) {\n                activateInterceptor(id: $id, proxyPort: $proxyPort, options: $options)\n            }\n        ",{id:e,proxyPort:t,options:n})).activateInterceptor;return c.isBoolean(r)?{success:r,metadata:void 0}:r}))}triggerServerUpdate(){return l(this,void 0,void 0,(function*(){yield this.graphql("TriggerUpdate","\n            mutation TriggerUpdate {\n                triggerUpdate\n            }\n        ",{})}))}}var u,p=n(342),h=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))};const m=o.a?r.getItem("latest-auth-token").then(e=>{var t;if(e)return e;return null!==(t=new URLSearchParams(self.location.search).get("authToken"))&&void 0!==t?t:void 0}):Promise.resolve(null!==(u=new URLSearchParams(window.location.search).get("authToken"))&&void 0!==u?u:void 0),g=Object(s.c)(),f=()=>g.resolve(),b=()=>g.promise,y=m.then(e=>h(void 0,void 0,void 0,(function*(){yield b();const t=new p.a(e),n=new d(e);let r;for(;!r;)r=yield t.getServerVersion().catch(()=>(console.log("Couldn't get version from REST API"),n.getServerVersion().catch(()=>{console.log("Couldn't get version from GraphQL API")}))),r||(yield Object(s.b)(100));return Object(i.F)(r,i.v)?t:n})));function v(){return h(this,void 0,void 0,(function*(){return(yield y).getServerVersion()}))}function x(e){return h(this,void 0,void 0,(function*(){return(yield y).getConfig(e)}))}function w(){return h(this,void 0,void 0,(function*(){return(yield y).getNetworkInterfaces()}))}function E(e){return h(this,void 0,void 0,(function*(){return(yield y).getInterceptors(e)}))}function C(e){return h(this,void 0,void 0,(function*(){return(yield y).getDetailedInterceptorMetadata(e)}))}function T(e,t,n){return h(this,void 0,void 0,(function*(){const r=yield(yield y).activateInterceptor(e,t,n);if(r.success)return r.metadata;console.log("Activation result",JSON.stringify(r));throw Object.assign(new a.a("failed to activate interceptor "+e,"activate-interceptor-"+e),r)}))}function O(e,t){return h(this,void 0,void 0,(function*(){const n=yield y;if(!(n instanceof p.a))throw new Error("Requests cannot be sent via the GraphQL API client");return n.sendRequest(e,t)}))}function S(){return h(this,void 0,void 0,(function*(){return(yield y).triggerServerUpdate().catch(console.log)}))}},669:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return g}));var r=n(4),o=n(0),s=n(1),i=n(5),a=n(19),c=n(51),l=n(127),d=n(49),u=n(110),p=n(100),h=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i};const m=["text","raw","base64","image"];let g=class extends o.Component{componentDidMount(){Object(i.c)(this,Object(s.autorun)(()=>{this.props.message||this.onChangeContentType(void 0)}))}onChangeContentType(e){e===this.props.message.contentType?this.selectedContentType=void 0:this.selectedContentType=e}render(){const{url:t,message:n,isPaidUser:s,collapsed:i,expanded:h,onCollapseToggled:g,onExpandToggled:f}=this.props,b=Object(c.c)(n.contentType,Object(a.g)(n.headers["content-type"]),n.body),y=r.includes(b,this.selectedContentType)?this.selectedContentType:n.contentType,v=n.body.decoded;if(v)return o.createElement(p.a,{collapsed:i,onCollapseToggled:g,expanded:h},o.createElement("header",null,o.createElement(d.e,{body:v,mimeType:Object(a.d)(n.headers,"content-type"),downloadFilename:Object(d.f)(t,n.headers),title:"Response body",expanded:h,onExpandToggled:f,onCollapseToggled:g,selectedContentType:y,contentTypeOptions:b,onChangeContentType:this.onChangeContentType,isPaidUser:s})),o.createElement(d.b,null,o.createElement(u.a,{contentId:n.id,editorNode:this.props.editorNode,rawContentType:Object(a.g)(n.headers["content-type"]),contentType:y,expanded:!!h,cache:n.cache},v)));if(!v&&n.body.decodingError){const a=n.body.decodingError,c=e.isBuffer(n.body.encoded)?n.body.encoded:void 0,l=r.includes(m,this.selectedContentType)?this.selectedContentType:"text";return o.createElement(p.a,{collapsed:i,onCollapseToggled:g,expanded:h},o.createElement("header",null,o.createElement(d.e,{body:c,mimeType:"application/octet-stream",downloadFilename:Object(d.f)(t,n.headers),title:"Response body",expanded:h,onExpandToggled:f,onCollapseToggled:g,selectedContentType:l,contentTypeOptions:m,onChangeContentType:this.onChangeContentType,isPaidUser:s})),o.createElement(d.a,{error:a,headers:n.rawHeaders}),c&&o.createElement(d.b,null,o.createElement(u.a,{contentId:n.id,editorNode:this.props.editorNode,contentType:l,expanded:!!h,cache:n.cache},c)))}return o.createElement(l.a,{collapsed:i,onCollapseToggled:g,expanded:h},o.createElement("header",null,o.createElement(d.e,{body:void 0,title:"Response body",expanded:h,onExpandToggled:f,onCollapseToggled:g,selectedContentType:y,contentTypeOptions:b,onChangeContentType:this.onChangeContentType,isPaidUser:s})))}};h([s.observable],g.prototype,"selectedContentType",void 0),h([s.action.bound],g.prototype,"onChangeContentType",null),g=h([i.e],g)}).call(this,n(25).Buffer)},67:function(e,t,n){"use strict";function r(e,t){return e.length<=t?e:e.slice(0,t-3)+"..."}function o(e,t=", ",n=" and "){return 1===e.length?e[0]:e.slice(0,-1).join(t)+n+e[e.length-1]}n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i})),n.d(t,"d",(function(){return a}));const s=["a","e","i","o","u","y"];function i(e){return s.includes(e[0])?"an":"a"}function a(e){return e[0].toUpperCase()+e.slice(1)}},68:function(e,t,n){"use strict";n.d(t,"g",(function(){return f})),n.d(t,"i",(function(){return b})),n.d(t,"j",(function(){return y})),n.d(t,"h",(function(){return v})),n.d(t,"f",(function(){return w})),n.d(t,"e",(function(){return E})),n.d(t,"b",(function(){return C})),n.d(t,"a",(function(){return T})),n.d(t,"c",(function(){return O})),n.d(t,"d",(function(){return S}));var r=n(79),o=n(1),s=n(12),i=n(89),a=n(21),c=n(252),l=n(9),d=n(50),u=n(29),p=n(18),h=n(57),m=n(38),g=n(58);function f(e){return Object(o.observable)({id:r(),type:"http",activated:!0,matchers:[],completionChecker:new s.completionCheckers.Always,handler:v("http",e)})}function b(e,t,n){return[t,...(n||[]).slice(1).filter(t=>Object(u.k)(t,e))]}function y(e){var t;if("ipfs"!==e.type)return;const n=null===(t=e.matchers[0])||void 0===t?void 0:t.interactionName;if(!n)return;const r=e.matchers.findIndex(e=>"ipfs-arg"===Object(u.h)(e));if(m.o(n)){const t=new m.c(n,void 0);-1===r?e.matchers.splice(1,0,t):e.matchers.splice(r,1,t)}else-1!==r&&e.matchers.splice(r,1)}function v(e,t){switch(e){case"http":return new p.j(t);case"websocket":return new h.j(t);case"ethereum":case"ipfs":return new p.j(t);case"webrtc":return new g.c}}function x(e){const t=!!e.body.decoded&&e.body.decoded.length<1e4,n=t&&"json"===e.contentType&&!!Object(a.m)(e.body.decoded.toString())?[new s.matchers.JsonBodyMatcher(Object(a.m)(e.body.decoded.toString()))]:t?[new s.matchers.RawBodyMatcher(e.body.decoded.toString())]:[],r=e.parsedUrl.toString().split("?"),o=r[0],c=r.slice(1).join("?");return[new(p.i[e.method]||p.r),new s.matchers.SimplePathMatcher(o),new s.matchers.QueryMatcher(i.parse(c)),...n]}function w(e,t){return{id:r(),type:"http",activated:!0,matchers:x(t),handler:new p.l(e),completionChecker:new s.completionCheckers.Always}}function E(e){const{statusCode:t,statusMessage:n,headers:o}=e.isSuccessfulExchange()?e.response:{statusCode:200,statusMessage:"OK",headers:{}},i=e.isSuccessfulExchange()&&e.response.body.encoded.byteLength<=1048576&&!!e.response.body.decoded?e.response.body.decoded:"A mock response",c=Object.assign({},o);return delete c.date,delete c.expires,delete c[":status"],delete c["content-encoding"],c["content-length"]&&(c["content-length"]=Object(a.d)(i).toString()),{id:r(),type:"http",activated:!0,matchers:x(e.request),handler:new p.o(t,n||Object(d.d)(t),i,c),completionChecker:new s.completionCheckers.Always}}const C=e=>({id:"default-group",title:"Default rules",collapsed:!0,items:e}),T=(e,t)=>[{id:"default-amiusing",type:"http",activated:!0,matchers:[new p.i.GET,new p.a],completionChecker:new s.completionCheckers.Always,handler:new p.o(200,void 0,c,{"content-type":"text/html","cache-control":"no-store","httptoolkit-active":"true"})},...Object(l.F)(t.serverVersion,l.j)?[{id:"default-certificate",type:"http",activated:!0,matchers:[new p.i.GET,new s.matchers.SimplePathMatcher("amiusing.httptoolkit.tech/certificate")],completionChecker:new s.completionCheckers.Always,handler:new p.e(200,void 0,t.certPath,{"content-type":"application/x-x509-ca-cert"})}]:[],{id:"default-wildcard",type:"http",activated:!0,matchers:[new p.c],completionChecker:new s.completionCheckers.Always,handler:new p.j(e)},{id:"default-ws-wildcard",type:"websocket",activated:!0,matchers:[new h.a],completionChecker:new s.completionCheckers.Always,handler:new h.j(e)}],O=(e,t)=>({id:"root",title:"HTTP Toolkit Rules",isRoot:!0,items:[C(T(e,t))]}),S=(e,t,n)=>({id:"default-forwarding-rule",type:"http",activated:!0,matchers:[new p.r,new s.matchers.HostMatcher(e)],completionChecker:new s.completionCheckers.Always,handler:new p.d(t,!0,n)})},682:function(e,t,n){n(683),e.exports=n(1480)},7:function(e,t,n){"use strict";n.d(t,"c",(function(){return Ee})),n.d(t,"b",(function(){return Ce})),n.d(t,"d",(function(){return Te})),n.d(t,"f",(function(){return Oe})),n.d(t,"e",(function(){return Se})),n.d(t,"g",(function(){return je})),n.d(t,"a",(function(){return ke}));var r=n(0),o=n(2),s=n(166),i=n(574),a=n(575),c=n(573),l=n(576),d=n(577),u=n(578),p=n(579),h=n(580),m=n(581),g=n(582),f=n(583),b=n(584),y=n(585),v=n(586),x=n(587),w=n(588),E=n(589),C=n(590),T=n(591),O=n(592),S=n(593),j=n(594),k=n(595),P=n(596),R=n(597),H=n(598),q=n(599),A=n(600),I=n(601),D=n(602),$=n(603),M=n(604),F=n(605),B=n(606),N=n(607),L=n(608),U=n(609),W=n(610),z=n(611),_=n(612),V=n(613),G=n(614),J=n(615),K=n(616),Y=n(617),Q=n(618),X=n(619),Z=n(620),ee=n(621),te=n(622),ne=n(623),re=n(624),oe=n(625),se=n(626),ie=n(627),ae=n(628),ce=n(629),le=n(630),de=n(631),ue=n(632),pe=n(633),he=n(634),me=n(635),ge=n(636),fe=n(637),be=n(638),ye=n(639),ve=n(640),xe=n(641);var we=n(247);s.b.add({prefix:"fac",iconName:"spinner-arc",icon:[50,50,[],"","M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z"]},c.faArrowLeft,i.faSpinner,a.faTrashAlt,l.faSearch,d.faPlug,u.faNetworkWired,p.faDesktop,h.faTerminal,m.faQuestion,g.faTimes,f.faChevronUp,b.faChevronDown,y.faBan,v.faComment,x.faToggleOn,w.faToggleOff,E.faCopy,C.faExternalLinkAlt,T.faPlus,O.faMinus,S.faExclamationTriangle,j.faLightbulb,k.faCog,P.faStar,R.faMagic,H.faSun,q.faMoon,A.faAdjust,I.faUpload,D.faDownload,$.faPlay,M.faPause,F.faGem,B.faTheaterMasks,N.faGripVertical,L.faUndo,U.faSave,W.faFolderOpen,z.faUnlock,_.faEdit,V.faWindowMaximize,G.faMobileAlt,J.faExpand,K.faCompressArrowsAlt,Y.faThumbtack,Q.faEye,X.faCaretDown,Z.faAlignLeft,ee.faClone,te.faCheck,ne.faLevelDownAlt,re.faPaperPlane,oe.faChrome,se.faFirefox,ie.faDocker,ae.faAndroid,ce.faApple,le.faSafari,de.faEdge,ue.faInternetExplorer,pe.faOpera,{prefix:"fac",iconName:"brave-browser",icon:[11.1,13.23,[],"","m 5.53752561206,8.23273389478 c 0.07589,0 0.562136,0.174874 0.952332,0.380547 0.39017,0.205699 0.672941,0.351155 0.76334,0.408778 0.09038,0.05764 0.03526,0.166326 -0.04706,0.225614 -0.08235,0.05928 -1.188755,0.932071 -1.296127,1.028532 -0.107394,0.09649 -0.265189,0.255822 -0.372477,0.255822 -0.107288,0 -0.265105,-0.159332 -0.372478,-0.255822 -0.107393,-0.09646 -1.213784,-0.969245 -1.296127,-1.028532 -0.08235,-0.05928 -0.137439,-0.167962 -0.04706,-0.225614 0.09041,-0.05761 0.37317,-0.203079 0.763368,-0.408778 0.390141,-0.205673 0.876414,-0.380547 0.952305,-0.380547 z m 0.0059,-6.216331 c 0.03726,0.001 0.247208,0.01141 0.547814,0.113516 0.332248,0.112822 0.692182,0.253848 0.858305,0.253848 0.166126,0 1.398212,-0.239745 1.398212,-0.239745 0,0 1.460117,1.798085 1.460117,2.182382 0,0.384295 -0.183677,0.485723 -0.368352,0.6855 -0.184673,0.199778 -0.991233,1.072279 -1.094811,1.18431 -0.103578,0.112061 -0.319207,0.28194 -0.192371,0.587712 0.126834,0.305775 0.313945,0.694866 0.105872,1.089514 -0.208099,0.394647 -0.564572,0.658056 -0.792993,0.614507 -0.228419,-0.04357 -0.764862,-0.329155 -0.962134,-0.459604 -0.197272,-0.130452 -0.822508,-0.655744 -0.822508,-0.856734 0,-0.200962 0.646305,-0.561821 0.765694,-0.643814 0.119441,-0.08196 0.664051,-0.399302 0.67521,-0.523856 0.01115,-0.124579 0.0069,-0.161108 -0.153831,-0.468883 -0.160725,-0.307805 -0.450169,-0.71853 -0.401992,-0.991811 0.04818,-0.273252 0.514985,-0.415351 0.848119,-0.543515 0.333078,-0.128132 0.974454,-0.370165 1.054553,-0.407791 0.08015,-0.03766 0.05946,-0.07349 -0.183289,-0.09695 -0.24268,-0.02344 -0.93143,-0.11657 -1.241942,-0.0284 -0.310514,0.08816 -0.841003,0.222315 -0.883974,0.293448 -0.04297,0.07114 -0.08088,0.07353 -0.03675,0.318918 0.0441,0.245385 0.271308,1.422841 0.293347,1.631983 0.02206,0.209143 0.06521,0.347404 -0.156157,0.398964 -0.221387,0.05155 -0.594031,0.141082 -0.722085,0.141082 -0.128053,0 -0.500724,-0.08953 -0.722085,-0.141082 -0.221388,-0.05155 -0.178251,-0.189821 -0.156185,-0.398964 0.02207,-0.209142 0.249242,-1.386598 0.293376,-1.631983 0.0441,-0.245386 0.0061,-0.247783 -0.03675,-0.318918 -0.04297,-0.07114 -0.573487,-0.205278 -0.884001,-0.293448 -0.310513,-0.08816 -0.999234,0.005 -1.241942,0.0284 -0.242707,0.02344 -0.263418,0.05928 -0.18329,0.09695 0.08012,0.03762 0.721504,0.279654 1.054581,0.407791 0.333108,0.128171 0.799944,0.270263 0.848119,0.543515 0.04818,0.273281 -0.241294,0.684006 -0.401992,0.991811 -0.160724,0.307775 -0.164988,0.3443 -0.153829,0.468883 0.01115,0.124552 0.555766,0.441892 0.675182,0.523856 0.119415,0.08199 0.765693,0.442852 0.765693,0.643814 0,0.20099 -0.625209,0.726284 -0.822481,0.856734 -0.197272,0.130452 -0.733713,0.416028 -0.962134,0.459604 -0.22842,0.04355 -0.584894,-0.21986 -0.792992,-0.614507 -0.20807,-0.394648 -0.02096,-0.783739 0.105846,-1.089514 0.126835,-0.305772 -0.08877,-0.475652 -0.192372,-0.587712 -0.103552,-0.112035 -0.910138,-0.984532 -1.094811,-1.18431 -0.184675,-0.199777 -0.368325,-0.301205 -0.368325,-0.6855 0,-0.384297 1.460119,-2.182382 1.460119,-2.182382 0,0 1.232086,0.239745 1.39821,0.239745 0.166123,0 0.526058,-0.141026 0.858306,-0.253848 0.300606,-0.102072 0.510551,-0.112467 0.547815,-0.113516 z m 5.143909,1.157116 0.304561,-0.761542 c 0,0 -0.387622,-0.423078 -0.858308,-0.902568 -0.470683,-0.479489 -1.467428,-0.197436 -1.467428,-0.197436 l -1.135179,-1.311968 h -1.993525 -1.993488 l -1.135179,1.311968 c 0,0 -0.996745,-0.282053 -1.467428,0.197436 -0.470686,0.47949 -0.858308,0.902568 -0.858308,0.902568 l 0.304561,0.761542 -0.387622,1.128209 c 0,0 1.140025,4.398751 1.273616,4.935921 0.263029,1.057696 0.442998,1.466672 1.190555,2.002574 0.747558,0.535898 2.104237,1.466672 2.325735,1.607698 0.221498,0.141026 0.498373,0.38125 0.747558,0.38125 0.249185,0 0.52606,-0.240224 0.747558,-0.38125 0.221498,-0.141026 1.578177,-1.0718 2.325735,-1.607698 0.747557,-0.535902 0.927525,-0.944878 1.190555,-2.002574 0.133563,-0.53717 1.273616,-4.935921 1.273616,-4.935921 z"]},{prefix:"fac",iconName:"arc-browser",icon:[56.4,67.36,[],"","m 58.458706,45.75 -3.5,-7.36 -6.63,-13.95 -0.01,0.01 c 0,0 0,-0.01 0.01,-0.01 l -9.64,-20.28 a 7.292,7.292 0 0 0 -6.58,-4.16 c -2.81,0 -5.37,1.62 -6.58,4.16 l -9.83,20.68 c 2.76,3.65 7.64,6.65 12.49,7.68 l 3.18,-6.68 c 0.3,-0.63 1.2,-0.63 1.5,0 l 3.11,6.54 h 0.02 -0.02 l 6.33,13.32 3.11,6.54 a 7.28,7.28 0 0 0 6.59,4.16 c 0.65,0 1.3,-0.09 1.94,-0.27 4.39,-1.21 6.47,-6.26 4.51,-10.38 m -22.49,-13.37 c -1.42,0.34 -2.87,0.52 -4.32,0.52 -1.13,0 -2.3,-0.13 -3.47,-0.38 -4.85,-1.03 -9.73,-4.03 -12.49,-7.68 -0.69,-0.91 -1.25,-1.86 -1.64,-2.83 -1.51,-3.73 -5.7600005,-5.53 -9.4900005,-4.03 -3.73000009,1.51 -5.53000009,5.76 -4.03000009,9.49 C 2.2387054,31.71 5.2587055,35.6 9.0487055,38.8 a 37.84,37.84 0 0 0 12.7700005,7.08 c 3.21,1.03 6.54,1.6 9.82,1.6 3.64,0 7.23,-0.63 10.65,-1.78 z m 25.54,-23.1800005 a 7.29,7.29 0 0 0 -8.58,5.7200005 c -0.7,3.5 -2.34,6.759999 -4.6,9.53 l 6.63,13.96 c 6.12,-5.31 10.64,-12.54 12.26,-20.63 0.79,-3.96 -1.77,-7.8000005 -5.71,-8.5800005 M 9.0487055,38.8 l -3.32,6.98 c -1.69,3.549999 -0.42,7.92 3.06,9.769999 3.6900005,1.96 8.2300005,0.43 10.0100005,-3.299999 l 3.03,-6.37 A 37.885,37.885 0 0 1 9.0487055,38.8"]},he.faCodeBranch,me.faNpm,ge.faNodeJs,fe.faPhp,be.faPython,ye.faAtom,ve.faGlobe,xe.faJava);const Ee={Chrome:{icon:["fab","chrome"],color:"#1da462"},Chromium:{icon:["fab","chrome"],color:"#4489f4"},Firefox:{icon:["fab","firefox"],color:"#e66000"},Safari:{icon:["fab","safari"],color:"#448aff"},Edge:{icon:["fab","edge"],color:"#2c75be"},IE:{icon:["fab","internet-explorer"],color:"#00baf0"},Opera:{icon:["fab","opera"],color:"#cb0b1e"},Brave:{icon:["fac","brave-browser"],color:"#fb542b"},Arc:{icon:["fac","arc-browser"],color:"#ff536a"},Git:{icon:["fas","code-branch"],color:"#f05033"},Php:{icon:["fab","php"],color:"#8892bf"},Ruby:{icon:["fas","gem"],color:"#CC342D"},Faraday:{icon:["fas","gem"],color:"#CC342D"},Excon:{icon:["fas","gem"],color:"#CC342D"},Typhoeus:{icon:["fas","gem"],color:"#CC342D"},Rubybindings:{icon:["fas","gem"],color:"#CC342D"},Npm:{icon:["fab","npm"],color:"#cc3534"},Node:{icon:["fab","node-js"],color:"#3c873a"},Got:{icon:["fab","node-js"],color:"#3c873a"},Axios:{icon:["fab","node-js"],color:"#3c873a"},Nodebindings:{icon:["fab","node-js"],color:"#3c873a"},Pip:{icon:["fab","python"],color:"#646464"},Python:{icon:["fab","python"],color:"#4584b6"},Urlfetch:{icon:["fab","python"],color:"#4584b6"},Pycurl:{icon:["fab","python"],color:"#4584b6"},Pythonbindings:{icon:["fab","python"],color:"#4584b6"},Java:{icon:["fab","java"],color:"#007396"},Reactornetty:{icon:["fab","java"],color:"#007396"},Jetty:{icon:["fab","java"],color:"#007396"},Jakarta:{icon:["fab","java"],color:"#007396"},Akka:{icon:["fab","java"],color:"#007396"},Intellij:{icon:["fab","java"],color:"#007396"},Ktor:{icon:["fab","java"],color:"#007396"},Ahc:{icon:["fab","java"],color:"#007396"},Android:{icon:["fab","android"],color:"#78C257"},Okhttp:{icon:["fab","android"],color:"#78C257"},Fbandroidsdk:{icon:["fab","android"],color:"#78C257"},Iphone:{icon:["fab","apple"],color:"#000"},iOS:{icon:["fab","apple"],color:"#000"},Ios:{icon:["fab","apple"],color:"#000"},Ipad:{icon:["fab","apple"],color:"#000"},Darwin:{icon:["fab","apple"],color:"#000"},Docker:{icon:["fab","docker"],color:"#0db7ed"},Terminal:{icon:["fas","terminal"],color:"#20c20e"},Network:{icon:["fas","network-wired"],color:"#888"},Electron:{icon:["fas","atom"],color:"#9FEAF9"},Desktop:{icon:["fas","desktop"],color:"#888"},Unknown:{icon:["fas","question"],color:"#888"}},Ce=r.memo(we.a),Te=Object(o.i)(Ce).attrs(()=>({icon:["fas","lightbulb"]}))`
    margin: 0 6px;
    color: #2fb4e0;
`,Oe=Pe({prefix:"fas",iconName:"lightbulb"},{styles:{margin:"0 6px",color:"#2fb4e0"}}),Se=Object(o.i)(Ce).attrs(()=>({icon:["fas","exclamation-triangle"]}))`
    margin: 0 6px;
    color: ${e=>e.theme.warningColor};
`,je=Pe({prefix:"fas",iconName:"exclamation-triangle"},{styles:{margin:"0 6px",color:o.j}}),ke=Object(o.i)(Ce).attrs(()=>({icon:["fas","arrow-left"]}))`
    ${e=>"right"===e.direction?"transform: rotate(180deg);":""}
    padding: 0 15px;
`;function Pe(e,t){return Object(s.a)(e,t).html.join("")}},84:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(646),o=n(257);const s=new r({html:!0,linkify:!0,linkTarget:"_blank"});function i(e){if(e){const t=s.render(e).replace(/\n$/,"");return{__html:o.sanitize(t)}}}o.addHook("afterSanitizeAttributes",(function(e){(e.hasAttribute("target")||"target"in e)&&(e.setAttribute("target","_blank"),e.setAttribute("rel","noreferrer")),e.hasAttribute("target")||!e.hasAttribute("xlink:href")&&!e.hasAttribute("href")||e.setAttribute("xlink:show","new")})),o.addHook("afterSanitizeAttributes",(function(e){if(e.hasAttribute("href")){const t=e.getAttribute("href");(null==t?void 0:t.startsWith("/"))&&e.removeAttribute("href")}}))},859:function(e,t){},861:function(e,t){},867:function(e,t){},868:function(e,t){},869:function(e,t){},888:function(e,t){},9:function(e,t,n){"use strict";n.d(t,"y",(function(){return d})),n.d(t,"C",(function(){return u})),n.d(t,"E",(function(){return p})),n.d(t,"D",(function(){return h})),n.d(t,"F",(function(){return m})),n.d(t,"f",(function(){return g})),n.d(t,"r",(function(){return f})),n.d(t,"o",(function(){return b})),n.d(t,"k",(function(){return y})),n.d(t,"b",(function(){return v})),n.d(t,"j",(function(){return x})),n.d(t,"g",(function(){return w})),n.d(t,"m",(function(){return E})),n.d(t,"l",(function(){return C})),n.d(t,"a",(function(){return T})),n.d(t,"B",(function(){return O})),n.d(t,"h",(function(){return S})),n.d(t,"q",(function(){return j})),n.d(t,"s",(function(){return k})),n.d(t,"c",(function(){return P})),n.d(t,"i",(function(){return R})),n.d(t,"e",(function(){return H})),n.d(t,"p",(function(){return q})),n.d(t,"t",(function(){return A})),n.d(t,"A",(function(){return I})),n.d(t,"z",(function(){return D})),n.d(t,"n",(function(){return $})),n.d(t,"u",(function(){return M})),n.d(t,"x",(function(){return F})),n.d(t,"d",(function(){return B})),n.d(t,"v",(function(){return N})),n.d(t,"w",(function(){return L}));var r=n(108),o=n(117),s=n(21),i=n(36),a=n(66),c=n(118),l=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))};const d="db02520c73b11249e57d8b1ad7ff18bd1e9cc2d8",u=Object(i.c)(()=>l(void 0,void 0,void 0,(function*(){return Object(c.b)("httpToolkitDesktopVersion")}))),p=Object(i.c)(()=>Object(a.j)().then(a.g).then(e=>(r.setItem("last-server-version",e),e))),h=r.getItem("last-server-version").then(e=>e||s.a?e:localStorage.getItem("last-server-version"));function m(e,t){return"string"==typeof e&&o.satisfies(e,t,{includePrerelease:!0})}const g="^0.1.20 || ^1.0.0",f="^0.1.14 || ^1.0.0",b="^0.1.21 || ^1.0.0",y="^0.1.22 || ^1.0.0",v="^0.1.26 || ^1.0.0",x="^0.1.28 || ^1.0.0",w="^0.1.30 || ^1.0.0",E="^0.1.31 || ^1.0.0",C="^0.1.44 || ^1.0.0",T="^1.1.4",O="^1.1.3",S="^1.2.0",j="^1.4.0",k="^1.4.1",P="^1.4.2",R="^1.5.0",H="^1.7.0",q="^1.8.0",A="^1.9.0",I="^1.9.0",D="^1.10.3",$="^1.11.0",M="^1.11.0",F="^1.12.0",B="^1.12.0",N="^1.13.0",L="^1.13.0"},90:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(1),o=n(32),s=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i};class i{constructor(){this.searchIndex="",this.pinned=!1,this.cache=r.observable.map(new Map,{deep:!1})}isHttp(){return!1}isWebSocket(){return!1}isTlsFailure(){return!1}isTlsTunnel(){return!1}isRTCConnection(){return!1}isRTCDataChannel(){return!1}isRTCMediaTrack(){return!1}get category(){return Object(o.c)(this)}}s([r.computed],i.prototype,"category",null),s([r.observable],i.prototype,"searchIndex",void 0),s([r.observable],i.prototype,"pinned",void 0)},910:function(e,t){},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n(4),o=n(0),s=n(2),i=n(7),a=n(23);const c=s.i.div`
    overflow: hidden;
    display: flex;
    flex-direction: inherit;
`,l=s.i.div`
    position: relative;
`,d=s.i.div`
    position: absolute;
    left: 0;
    top: 100%;
    z-index: 1;
    display: flex;
    flex-direction: column;

    background-color: ${e=>e.theme.mainBackground};
    padding-bottom: 2px;

    opacity: 0;
    pointer-events: none;
    &:hover, &:focus-within {
        opacity: 1;
        pointer-events: auto;
    }
`,u=s.i.div`
    flex-grow: 1;
    flex-shrink: 1;
    min-width: 0;

    position: relative;
    display: flex;

    /* Match the parent (typically card header) flex direction, but justify
       content in the opposite direction */
    flex-direction: inherit;
    justify-content: flex-start;
`,p=Object(s.i)(i.b)`
    color: ${e=>e.theme.mainColor};
    font-size: ${e=>e.theme.textSize};
    padding: 5px 10px;

    &:hover + ${d} {
        opacity: 1;
        pointer-events: auto;
    }
`;function h(){"blur"in(document.activeElement||{})&&document.activeElement.blur()}const m=e=>{var t,n;const s=o.useRef(null),i=Object(a.i)(s,1/0);null===(t=s.current)||void 0===t||t.children;const m=Array.from((null===(n=s.current)||void 0===n?void 0:n.querySelectorAll("button"))||[]),g=r.max(m.map(e=>e.clientWidth)),f=g?Math.max(Math.floor(i/g),1):1/0,b=o.Children.toArray(e.children),[y,v]=f>=b.length?[b,[]]:[b.slice(0,f-1),b.slice(f-1)];return o.createElement(u,{ref:s,className:e.className},o.createElement(c,null,y),v.length>0&&o.createElement(l,null,o.createElement(p,{icon:["fas","caret-down"],title:"Show more"}),o.createElement(d,{onClick:h},v)))}},99:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),o=n(44);const s=e=>r.createElement(o.a,{icon:["fas",e.expanded?"compress-arrows-alt":"expand"],onClick:e.onClick,title:e.expanded?"Shrink this area, so you can see other details":"Expand this area to view it in more detail, hiding other areas"})}});
//# sourceMappingURL=app.js.map