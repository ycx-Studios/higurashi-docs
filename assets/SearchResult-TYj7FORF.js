import{u as U,f as Z,g as ee,h as j,i as te,j as ae,t as se,k as le,l as B,m as D,n as re,p as M,q as a,s as O,v as _,R as I,x as ue,y as ie,z as oe,A as ne,B as ce,C as ve,D as he,E as de,O as pe,F as ye,G as me,P as ge,H as fe,I as He,J as T}from"./app-DrRWkB8S.js";const ke=["/","/about.html","/guide/","/patch/list.html","/patch/onikakushi.html","/patch/","/patch/tsumihoroboshi.html","/patch/watanagashi.html","/guide/07th-mod/faq-bgm-se.html","/guide/07th-mod/faq-linux-steam-deck.html","/guide/07th-mod/faq.html","/guide/07th-mod/main.html","/guide/07th-mod/","/guide/07th-mod/shortcuts.html","/guide/07th-mod/uninstall.html","/404.html","/category/","/category/%E6%B1%89%E5%8C%96%E8%A1%A5%E4%B8%81/","/tag/","/tag/%E6%B1%89%E5%8C%96%E8%A1%A5%E4%B8%81/","/article/","/star/","/timeline/"],Re="SEARCH_PRO_QUERY_HISTORY",p=U(Re,[]),Qe=()=>{const{queryHistoryCount:s}=T,l=s>0;return{enabled:l,queryHistory:p,addQueryHistory:r=>{l&&(p.value.length<s?p.value=Array.from(new Set([r,...p.value])):p.value=Array.from(new Set([r,...p.value.slice(0,s-1)])))},removeQueryHistory:r=>{p.value=[...p.value.slice(0,r),...p.value.slice(r+1)]}}},P=s=>ke[s.id]+("anchor"in s?`#${s.anchor}`:""),xe="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:L}=T,y=U(xe,[]),Ce=()=>{const s=L>0;return{enabled:s,resultHistory:y,addResultHistory:l=>{if(s){const r={link:P(l),display:l.display};"header"in l&&(r.header=l.header),y.value.length<L?y.value=[r,...y.value]:y.value=[r,...y.value.slice(0,L-1)]}},removeResultHistory:l=>{y.value=[...y.value.slice(0,l),...y.value.slice(l+1)]}}},we=s=>{const l=ce(),r=j(),E=ve(),i=B(!1),g=he([]);return de(()=>{const{search:R,terminate:m}=pe(),Q=()=>{g.value=[],i.value=!1},f=He(h=>{i.value=!0,h?R(h,r.value,l.value).then(d=>{var x,H;return((H=(x=l.value).searchFilter)==null?void 0:H.call(x,d,h,r.value,E.value))??d}).then(d=>{g.value=d,i.value=!1}).catch(d=>{console.error(d),Q()}):Q()},T.searchDelay);M([s,r],()=>f(s.value),{immediate:!0}),ye(()=>{m()})}),{searching:i,results:g}};var Se=Z({name:"SearchResult",props:{query:{type:String,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(s,{emit:l}){const r=ee(),E=j(),i=te(ae),{enabled:g,addQueryHistory:R,queryHistory:m,removeQueryHistory:Q}=Qe(),{enabled:f,resultHistory:h,addResultHistory:d,removeResultHistory:x}=Ce(),H=g||f,S=se(s,"query"),{results:k,searching:Y}=we(S),u=le({isQuery:!0,index:0}),c=B(0),v=B(0),$=D(()=>H&&(m.value.length>0||h.value.length>0)),q=D(()=>k.value.length>0),A=D(()=>k.value[c.value]||null),z=()=>{const{isQuery:e,index:t}=u;t===0?(u.isQuery=!e,u.index=e?h.value.length-1:m.value.length-1):u.index=t-1},G=()=>{const{isQuery:e,index:t}=u;t===(e?m.value.length-1:h.value.length-1)?(u.isQuery=!e,u.index=0):u.index=t+1},J=()=>{c.value=c.value>0?c.value-1:k.value.length-1,v.value=A.value.contents.length-1},V=()=>{c.value=c.value<k.value.length-1?c.value+1:0,v.value=0},K=()=>{v.value<A.value.contents.length-1?v.value+=1:V()},N=()=>{v.value>0?v.value-=1:J()},b=e=>e.map(t=>me(t)?t:a(t[0],t[1])),W=e=>{if(e.type==="customField"){const t=ge[e.index]||"$content",[o,w=""]=fe(t)?t[E.value].split("$content"):t.split("$content");return e.display.map(n=>a("div",b([o,...n,w])))}return e.display.map(t=>a("div",b(t)))},C=()=>{c.value=0,v.value=0,l("updateQuery",""),l("close")};return re("keydown",e=>{if(s.isFocusing){if(q.value){if(e.key==="ArrowUp")N();else if(e.key==="ArrowDown")K();else if(e.key==="Enter"){const t=A.value.contents[v.value];R(s.query),d(t),r.push(P(t)),C()}}else if(f){if(e.key==="ArrowUp")z();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:t}=u;u.isQuery?(l("updateQuery",m.value[t]),e.preventDefault()):(r.push(h.value[t].link),C())}}}}),M([c,v],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>a("div",{class:["search-pro-result-wrapper",{empty:S.value?!q.value:!$.value}],id:"search-pro-results"},S.value===""?H?$.value?[g?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},i.value.queryHistory),m.value.map((e,t)=>a("div",{class:["search-pro-result-item",{active:u.isQuery&&u.index===t}],onClick:()=>{l("updateQuery",e)}},[a(O,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},e),a("button",{class:"search-pro-remove-icon",innerHTML:_,onClick:o=>{o.preventDefault(),o.stopPropagation(),Q(t)}})]))])):null,f?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},i.value.resultHistory),h.value.map((e,t)=>a(I,{to:e.link,class:["search-pro-result-item",{active:!u.isQuery&&u.index===t}],onClick:()=>{C()}},()=>[a(O,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[e.header?a("div",{class:"content-header"},e.header):null,a("div",e.display.map(o=>b(o)).flat())]),a("button",{class:"search-pro-remove-icon",innerHTML:_,onClick:o=>{o.preventDefault(),o.stopPropagation(),x(t)}})]))])):null]:i.value.emptyHistory:i.value.emptyResult:Y.value?a(ue,{hint:i.value.searching}):q.value?a("ul",{class:"search-pro-result-list"},k.value.map(({title:e,contents:t},o)=>{const w=c.value===o;return a("li",{class:["search-pro-result-list-item",{active:w}]},[a("div",{class:"search-pro-result-title"},e||i.value.defaultTitle),t.map((n,X)=>{const F=w&&v.value===X;return a(I,{to:P(n),class:["search-pro-result-item",{active:F,"aria-selected":F}],onClick:()=>{R(s.query),d(n),C()}},()=>[n.type==="text"?null:a(n.type==="title"?ie:n.type==="heading"?oe:ne,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[n.type==="text"&&n.header?a("div",{class:"content-header"},n.header):null,a("div",W(n))])])})])})):i.value.emptyResult)}});export{Se as default};