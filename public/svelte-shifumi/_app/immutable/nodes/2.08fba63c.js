import{S as G,i as A,s as V,k,l as w,n as b,J as ie,K as z,b as E,L as W,H as L,h as d,M as X,q as S,a as H,m as $,r as N,c as D,G as v,u as Y,g as y,v as B,f as q,d as O,N as x,o as Ie,y as P,z as j,A as T,B as R,I as ee,t as Se,O as Ne,e as K,x as Z,P as Pe,Q as ue,R as Te,w as Re,T as Ue,U as He,V as te,W as le}from"../chunks/index.a1f4a0c3.js";import{w as De}from"../chunks/index.d6ed92c2.js";const Ge=!0,vt=Object.freeze(Object.defineProperty({__proto__:null,prerender:Ge},Symbol.toStringTag,{value:"Module"}));const Ae=t=>Math.floor(Math.random()*t),Ve=t=>Object.keys(t),se=(t=0)=>new Promise(e=>setTimeout(e,t)),fe=(t,e,l=t.length-e,...s)=>[...t.slice(0,e),...s,...t.slice(e+l)],Le=t=>t[0].toUpperCase()+t.substring(1);var ce=(t=>(t.MENU="MENU",t.GAME="GAME",t))(ce||{}),ae=(t=>(t.HUMAN="HUMAN",t.COMPUTER="COMPUTER",t))(ae||{}),ne=(t=>(t.INTRO="INTRO",t.CHOICE="CHOICE",t.SCORE="SCORE",t))(ne||{}),Oe=(t=>(t.STONE="STONE",t.SCISSOR="SCISSOR",t.PAPER="PAPER",t))(Oe||{});const J=Ve(Oe),F=De({scene:"MENU",players:[{number:1,type:"HUMAN"},{number:2,type:"COMPUTER"}],step:"INTRO",choices:[null,null]}),U={state:F,setScene(t){F.update(e=>({...e,scene:t}))},setPlayer(t,e){F.update(l=>({...l,players:fe(l.players,e,1,t)}))},setStep(t){F.update(e=>({...e,step:t}))},setChoice(t,e){F.update(l=>({...l,choices:fe(l.choices,e,1,t)}))},resetChoices(){F.update(t=>({...t,choices:[null,null]}))}};function je(t){let e,l,s,r;return{c(){e=k("input"),this.h()},l(a){e=w(a,"INPUT",{type:!0,src:!0,alt:!0,class:!0}),this.h()},h(){b(e,"type","image"),ie(e.src,l=t[4])||b(e,"src",l),b(e,"alt",t[3]),b(e,"class","svelte-6994vq"),z(e,"clickable",t[0]),z(e,"disabled",t[1]),z(e,"active",t[2])},m(a,n){E(a,e,n),s||(r=W(e,"click",t[5]),s=!0)},p(a,[n]){n&16&&!ie(e.src,l=a[4])&&b(e,"src",l),n&8&&b(e,"alt",a[3]),n&1&&z(e,"clickable",a[0]),n&2&&z(e,"disabled",a[1]),n&4&&z(e,"active",a[2])},i:L,o:L,d(a){a&&d(e),s=!1,r()}}}function Be(t,e,l){let s,r,a,{choice:n}=e,{number:c}=e,{clickable:i=!1}=e,{disabled:h=!1}=e,{active:_=!1}=e;const o=X(),u=()=>i&&o("click");return t.$$set=f=>{"choice"in f&&l(6,n=f.choice),"number"in f&&l(7,c=f.number),"clickable"in f&&l(0,i=f.clickable),"disabled"in f&&l(1,h=f.disabled),"active"in f&&l(2,_=f.active)},t.$$.update=()=>{t.$$.dirty&64&&l(8,s=(n==null?void 0:n.toLowerCase())||""),t.$$.dirty&448&&l(4,r=n?`images/choices/${s}_${c}.png`:""),t.$$.dirty&256&&l(3,a=Le(s))},[i,h,_,a,r,u,n,c,s]}class Me extends G{constructor(e){super(),A(this,e,Be,je,V,{choice:6,number:7,clickable:0,disabled:1,active:2})}}function he(t,e,l){const s=t.slice();return s[9]=e[l],s[11]=l,s}function _e(t){let e,l;function s(){return t[6](t[11])}return e=new Me({props:{choice:t[9],number:t[0].number,clickable:!t[3],disabled:t[1],active:t[2][t[11]]}}),e.$on("click",s),{c(){P(e.$$.fragment)},l(r){j(e.$$.fragment,r)},m(r,a){T(e,r,a),l=!0},p(r,a){t=r;const n={};a&1&&(n.number=t[0].number),a&8&&(n.clickable=!t[3]),a&2&&(n.disabled=t[1]),a&4&&(n.active=t[2][t[11]]),e.$set(n)},i(r){l||(y(e.$$.fragment,r),l=!0)},o(r){O(e.$$.fragment,r),l=!1},d(r){R(e,r)}}}function qe(t){let e,l,s,r=t[0].number+"",a,n,c,i,h=J,_=[];for(let u=0;u<h.length;u+=1)_[u]=_e(he(t,h,u));const o=u=>O(_[u],1,1,()=>{_[u]=null});return{c(){e=k("div"),l=k("h2"),s=S("Player "),a=S(r),n=H(),c=k("div");for(let u=0;u<_.length;u+=1)_[u].c();this.h()},l(u){e=w(u,"DIV",{class:!0});var f=$(e);l=w(f,"H2",{});var m=$(l);s=N(m,"Player "),a=N(m,r),m.forEach(d),n=D(f),c=w(f,"DIV",{class:!0});var p=$(c);for(let M=0;M<_.length;M+=1)_[M].l(p);p.forEach(d),f.forEach(d),this.h()},h(){b(c,"class","flex mx-auto"),b(e,"class","flex flex-column w-full")},m(u,f){E(u,e,f),v(e,l),v(l,s),v(l,a),v(e,n),v(e,c);for(let m=0;m<_.length;m+=1)_[m]&&_[m].m(c,null);i=!0},p(u,[f]){if((!i||f&1)&&r!==(r=u[0].number+"")&&Y(a,r),f&31){h=J;let m;for(m=0;m<h.length;m+=1){const p=he(u,h,m);_[m]?(_[m].p(p,f),y(_[m],1)):(_[m]=_e(p),_[m].c(),y(_[m],1),_[m].m(c,null))}for(B(),m=h.length;m<_.length;m+=1)o(m);q()}},i(u){if(!i){for(let f=0;f<h.length;f+=1)y(_[f]);i=!0}},o(u){_=_.filter(Boolean);for(let f=0;f<_.length;f+=1)O(_[f]);i=!1},d(u){u&&d(e),x(_,u)}}}function ze(t,e,l){let s,r,a,{player:n}=e;const c=X();let i=null;const h=u=>{l(5,i=J[u]),c("input",i)},_=()=>{const u=Ae(J.length);h(u)};Ie(()=>s&&_());const o=u=>h(u);return t.$$set=u=>{"player"in u&&l(0,n=u.player)},t.$$.update=()=>{t.$$.dirty&1&&l(1,s=n.type==="COMPUTER"),t.$$.dirty&34&&l(3,r=s||!!i),t.$$.dirty&34&&l(2,a=J.map(u=>!s&&i===u))},[n,s,a,r,h,i,o]}class Ke extends G{constructor(e){super(),A(this,e,ze,qe,V,{player:0})}}function me(t,e,l){const s=t.slice();return s[6]=e[l],s[8]=l,s}function pe(t){let e,l;function s(...r){return t[3](t[8],...r)}return e=new Ke({props:{player:t[6]}}),e.$on("input",s),{c(){P(e.$$.fragment)},l(r){j(e.$$.fragment,r)},m(r,a){T(e,r,a),l=!0},p(r,a){t=r;const n={};a&1&&(n.player=t[6]),e.$set(n)},i(r){l||(y(e.$$.fragment,r),l=!0)},o(r){O(e.$$.fragment,r),l=!1},d(r){R(e,r)}}}function Ze(t){let e,l,s=t[0].players,r=[];for(let n=0;n<s.length;n+=1)r[n]=pe(me(t,s,n));const a=n=>O(r[n],1,1,()=>{r[n]=null});return{c(){e=k("div");for(let n=0;n<r.length;n+=1)r[n].c();this.h()},l(n){e=w(n,"DIV",{class:!0});var c=$(e);for(let i=0;i<r.length;i+=1)r[i].l(c);c.forEach(d),this.h()},h(){b(e,"class","flex")},m(n,c){E(n,e,c);for(let i=0;i<r.length;i+=1)r[i]&&r[i].m(e,null);l=!0},p(n,[c]){if(c&5){s=n[0].players;let i;for(i=0;i<s.length;i+=1){const h=me(n,s,i);r[i]?(r[i].p(h,c),y(r[i],1)):(r[i]=pe(h),r[i].c(),y(r[i],1),r[i].m(e,null))}for(B(),i=s.length;i<r.length;i+=1)a(i);q()}},i(n){if(!l){for(let c=0;c<s.length;c+=1)y(r[c]);l=!0}},o(n){r=r.filter(Boolean);for(let c=0;c<r.length;c+=1)O(r[c]);l=!1},d(n){n&&d(e),x(r,n)}}}function Fe(t,e,l){let s,r;const a=X(),{state:n}=U;ee(t,n,h=>l(0,r=h));const c=async({detail:h},_)=>{U.setChoice(h,_),await Se(),s&&a("done")};U.resetChoices();const i=(h,_)=>c(_,h);return t.$$.update=()=>{t.$$.dirty&1&&(s=r.choices.every(h=>h))},[r,n,c,i]}class de extends G{constructor(e){super(),A(this,e,Fe,Ze,V,{})}}const Je="100ms",Qe={transitionDuration:Je};function We(t){let e,l;return{c(){e=k("div"),l=S(t[0]),this.h()},l(s){e=w(s,"DIV",{class:!0});var r=$(e);l=N(r,t[0]),r.forEach(d),this.h()},h(){b(e,"class","text-primary svelte-1p1j81z"),z(e,"hidden",t[1])},m(s,r){E(s,e,r),v(e,l)},p(s,[r]){r&1&&Y(l,s[0]),r&2&&z(e,"hidden",s[1])},i:L,o:L,d(s){s&&d(e)}}}const ge=200;function Xe(t,e,l){const s=X(),r=parseInt(Qe.transitionDuration);let a="",n=!0;const c=async i=>{l(0,a=i),l(1,n=!1),await se(r+ge),l(1,n=!0),await se(r),l(0,a=""),await se(ge)};return Ie(async()=>{await c("Shi"),await c("Fu"),await c("Mi"),s("done")}),[a,n]}class be extends G{constructor(e){super(),A(this,e,Xe,We,V,{})}}function ve(t,e,l){const s=t.slice();return s[7]=e[l],s[9]=l,s}function ye(t){let e,l,s,r=t[7].number+"",a,n,c,i,h,_;return i=new Me({props:{choice:t[0].choices[t[9]],number:t[7].number}}),{c(){e=k("div"),l=k("h2"),s=S("Player "),a=S(r),n=H(),c=k("div"),P(i.$$.fragment),h=H(),this.h()},l(o){e=w(o,"DIV",{class:!0});var u=$(e);l=w(u,"H2",{});var f=$(l);s=N(f,"Player "),a=N(f,r),f.forEach(d),n=D(u),c=w(u,"DIV",{class:!0});var m=$(c);j(i.$$.fragment,m),m.forEach(d),h=D(u),u.forEach(d),this.h()},h(){b(c,"class","flex mx-auto"),b(e,"class","flex flex-column w-full")},m(o,u){E(o,e,u),v(e,l),v(l,s),v(l,a),v(e,n),v(e,c),T(i,c,null),v(e,h),_=!0},p(o,u){(!_||u&1)&&r!==(r=o[7].number+"")&&Y(a,r);const f={};u&1&&(f.choice=o[0].choices[o[9]]),u&1&&(f.number=o[7].number),i.$set(f)},i(o){_||(y(i.$$.fragment,o),_=!0)},o(o){O(i.$$.fragment,o),_=!1},d(o){o&&d(e),R(i)}}}function Ye(t){let e,l,s,r,a,n,c,i,h,_,o,u,f,m=t[0].players,p=[];for(let g=0;g<m.length;g+=1)p[g]=ye(ve(t,m,g));const M=g=>O(p[g],1,1,()=>{p[g]=null});return{c(){e=k("div");for(let g=0;g<p.length;g+=1)p[g].c();l=H(),s=k("h2"),r=S(t[1]),a=H(),n=k("button"),c=S("Replay"),i=H(),h=k("button"),_=S("Menu"),this.h()},l(g){e=w(g,"DIV",{class:!0});var C=$(e);for(let re=0;re<p.length;re+=1)p[re].l(C);C.forEach(d),l=D(g),s=w(g,"H2",{});var I=$(s);r=N(I,t[1]),I.forEach(d),a=D(g),n=w(g,"BUTTON",{class:!0});var Q=$(n);c=N(Q,"Replay"),Q.forEach(d),i=D(g),h=w(g,"BUTTON",{class:!0});var oe=$(h);_=N(oe,"Menu"),oe.forEach(d),this.h()},h(){b(e,"class","flex"),b(n,"class","btn btn-primary mx mt"),b(h,"class","btn btn-primary mx mt")},m(g,C){E(g,e,C);for(let I=0;I<p.length;I+=1)p[I]&&p[I].m(e,null);E(g,l,C),E(g,s,C),v(s,r),E(g,a,C),E(g,n,C),v(n,c),E(g,i,C),E(g,h,C),v(h,_),o=!0,u||(f=[W(n,"click",t[4]),W(h,"click",t[5])],u=!0)},p(g,[C]){if(C&1){m=g[0].players;let I;for(I=0;I<m.length;I+=1){const Q=ve(g,m,I);p[I]?(p[I].p(Q,C),y(p[I],1)):(p[I]=ye(Q),p[I].c(),y(p[I],1),p[I].m(e,null))}for(B(),I=m.length;I<p.length;I+=1)M(I);q()}(!o||C&2)&&Y(r,g[1])},i(g){if(!o){for(let C=0;C<m.length;C+=1)y(p[C]);o=!0}},o(g){p=p.filter(Boolean);for(let C=0;C<p.length;C+=1)O(p[C]);o=!1},d(g){g&&d(e),x(p,g),g&&d(l),g&&d(s),g&&d(a),g&&d(n),g&&d(i),g&&d(h),u=!1,Ne(f)}}}function xe(t,e,l){let s;const r=X(),{state:a}=U;ee(t,a,_=>l(0,s=_));let n;const c=_=>r(_),i=()=>c("start"),h=()=>c("menu");return t.$$.update=()=>{if(t.$$.dirty&1)if(s.choices[0]===s.choices[1])l(1,n="Nobody wins :(");else{const _=s.choices.map(f=>J.findIndex(m=>f===m)),o=_[1]-_[0];l(1,n=`Player ${o===1||o===-2?1:2} wins :)`)}},[s,n,a,c,i,h]}class $e extends G{constructor(e){super(),A(this,e,xe,Ye,V,{})}}function et(t){let e,l,s;var r=$e;function a(n){return{}}return r&&(e=Z(r,a()),e.$on("start",t[2]),e.$on("menu",t[5])),{c(){e&&P(e.$$.fragment),l=K()},l(n){e&&j(e.$$.fragment,n),l=K()},m(n,c){e&&T(e,n,c),E(n,l,c),s=!0},p(n,c){if(r!==(r=$e)){if(e){B();const i=e;O(i.$$.fragment,1,0,()=>{R(i,1)}),q()}r?(e=Z(r,a()),e.$on("start",n[2]),e.$on("menu",n[5]),P(e.$$.fragment),y(e.$$.fragment,1),T(e,l.parentNode,l)):e=null}},i(n){s||(e&&y(e.$$.fragment,n),s=!0)},o(n){e&&O(e.$$.fragment,n),s=!1},d(n){n&&d(l),e&&R(e,n)}}}function tt(t){let e,l,s;var r=de;function a(n){return{}}return r&&(e=Z(r,a()),e.$on("done",t[4])),{c(){e&&P(e.$$.fragment),l=K()},l(n){e&&j(e.$$.fragment,n),l=K()},m(n,c){e&&T(e,n,c),E(n,l,c),s=!0},p(n,c){if(r!==(r=de)){if(e){B();const i=e;O(i.$$.fragment,1,0,()=>{R(i,1)}),q()}r?(e=Z(r,a()),e.$on("done",n[4]),P(e.$$.fragment),y(e.$$.fragment,1),T(e,l.parentNode,l)):e=null}},i(n){s||(e&&y(e.$$.fragment,n),s=!0)},o(n){e&&O(e.$$.fragment,n),s=!1},d(n){n&&d(l),e&&R(e,n)}}}function lt(t){let e,l,s;var r=be;function a(n){return{}}return r&&(e=Z(r,a()),e.$on("done",t[3])),{c(){e&&P(e.$$.fragment),l=K()},l(n){e&&j(e.$$.fragment,n),l=K()},m(n,c){e&&T(e,n,c),E(n,l,c),s=!0},p(n,c){if(r!==(r=be)){if(e){B();const i=e;O(i.$$.fragment,1,0,()=>{R(i,1)}),q()}r?(e=Z(r,a()),e.$on("done",n[3]),P(e.$$.fragment),y(e.$$.fragment,1),T(e,l.parentNode,l)):e=null}},i(n){s||(e&&y(e.$$.fragment,n),s=!0)},o(n){e&&O(e.$$.fragment,n),s=!1},d(n){n&&d(l),e&&R(e,n)}}}function nt(t){let e,l,s,r;const a=[lt,tt,et],n=[];function c(i,h){return i[0].step===ne.INTRO?0:i[0].step===ne.CHOICE?1:i[0].step===ne.SCORE?2:-1}return~(e=c(t))&&(l=n[e]=a[e](t)),{c(){l&&l.c(),s=K()},l(i){l&&l.l(i),s=K()},m(i,h){~e&&n[e].m(i,h),E(i,s,h),r=!0},p(i,[h]){let _=e;e=c(i),e===_?~e&&n[e].p(i,h):(l&&(B(),O(n[_],1,1,()=>{n[_]=null}),q()),~e?(l=n[e],l?l.p(i,h):(l=n[e]=a[e](i),l.c()),y(l,1),l.m(s.parentNode,s)):l=null)},i(i){r||(y(l),r=!0)},o(i){O(l),r=!1},d(i){~e&&n[e].d(i),i&&d(s)}}}function rt(t,e,l){let s;const{state:r}=U;ee(t,r,h=>l(0,s=h));const a=()=>U.setStep("INTRO"),n=()=>U.setStep("CHOICE"),c=()=>U.setStep("SCORE"),i=()=>U.setScene("MENU");return a(),[s,r,a,n,c,i]}class st extends G{constructor(e){super(),A(this,e,rt,nt,V,{})}}function Ce(t,e,l){const s=t.slice();return s[3]=e[l][0],s[4]=e[l][1],s}function Ee(t){let e,l=t[4]+"",s;return{c(){e=k("option"),s=S(l),this.h()},l(r){e=w(r,"OPTION",{});var a=$(e);s=N(a,l),a.forEach(d),this.h()},h(){e.__value=t[3],e.value=e.__value},m(r,a){E(r,e,a),v(e,s)},p:L,d(r){r&&d(e)}}}function it(t){let e,l,s,r=t[0].number+"",a,n,c,i,h,_=Object.entries(t[1]),o=[];for(let u=0;u<_.length;u+=1)o[u]=Ee(Ce(t,_,u));return{c(){e=k("div"),l=k("h2"),s=S("Player "),a=S(r),n=H(),c=k("select");for(let u=0;u<o.length;u+=1)o[u].c();this.h()},l(u){e=w(u,"DIV",{class:!0});var f=$(e);l=w(f,"H2",{});var m=$(l);s=N(m,"Player "),a=N(m,r),m.forEach(d),n=D(f),c=w(f,"SELECT",{class:!0});var p=$(c);for(let M=0;M<o.length;M+=1)o[M].l(p);p.forEach(d),f.forEach(d),this.h()},h(){b(c,"class","mx-auto mt"),t[0].type===void 0&&Pe(()=>t[2].call(c)),b(e,"class","flex flex-column w-full")},m(u,f){E(u,e,f),v(e,l),v(l,s),v(l,a),v(e,n),v(e,c);for(let m=0;m<o.length;m+=1)o[m]&&o[m].m(c,null);ue(c,t[0].type,!0),i||(h=W(c,"change",t[2]),i=!0)},p(u,[f]){if(f&1&&r!==(r=u[0].number+"")&&Y(a,r),f&2){_=Object.entries(u[1]);let m;for(m=0;m<_.length;m+=1){const p=Ce(u,_,m);o[m]?o[m].p(p,f):(o[m]=Ee(p),o[m].c(),o[m].m(c,null))}for(;m<o.length;m+=1)o[m].d(1);o.length=_.length}f&3&&ue(c,u[0].type)},i:L,o:L,d(u){u&&d(e),x(o,u),i=!1,h()}}}function ct(t,e,l){let{player:s}=e;const r={[ae.HUMAN]:"Human",[ae.COMPUTER]:"Computer"};function a(){s.type=Te(this),l(0,s),l(1,r)}return t.$$set=n=>{"player"in n&&l(0,s=n.player)},[s,r,a]}class at extends G{constructor(e){super(),A(this,e,ct,it,V,{player:0})}}function ke(t,e,l){const s=t.slice();return s[4]=e[l],s[5]=e,s[6]=l,s}function we(t){let e,l,s;function r(n){t[3](n,t[4],t[5],t[6])}let a={};return t[4]!==void 0&&(a.player=t[4]),e=new at({props:a}),Re.push(()=>Ue(e,"player",r)),{c(){P(e.$$.fragment)},l(n){j(e.$$.fragment,n)},m(n,c){T(e,n,c),s=!0},p(n,c){t=n;const i={};!l&&c&1&&(l=!0,i.player=t[4],He(()=>l=!1)),e.$set(i)},i(n){s||(y(e.$$.fragment,n),s=!0)},o(n){O(e.$$.fragment,n),s=!1},d(n){R(e,n)}}}function ot(t){let e,l,s,r,a,n,c,i=t[0].players,h=[];for(let o=0;o<i.length;o+=1)h[o]=we(ke(t,i,o));const _=o=>O(h[o],1,1,()=>{h[o]=null});return{c(){e=k("div");for(let o=0;o<h.length;o+=1)h[o].c();l=H(),s=k("button"),r=S("Play"),this.h()},l(o){e=w(o,"DIV",{class:!0});var u=$(e);for(let m=0;m<h.length;m+=1)h[m].l(u);u.forEach(d),l=D(o),s=w(o,"BUTTON",{type:!0,class:!0});var f=$(s);r=N(f,"Play"),f.forEach(d),this.h()},h(){b(e,"class","flex"),b(s,"type","button"),b(s,"class","btn btn-primary mt")},m(o,u){E(o,e,u);for(let f=0;f<h.length;f+=1)h[f]&&h[f].m(e,null);E(o,l,u),E(o,s,u),v(s,r),a=!0,n||(c=W(s,"click",t[2]),n=!0)},p(o,[u]){if(u&1){i=o[0].players;let f;for(f=0;f<i.length;f+=1){const m=ke(o,i,f);h[f]?(h[f].p(m,u),y(h[f],1)):(h[f]=we(m),h[f].c(),y(h[f],1),h[f].m(e,null))}for(B(),f=i.length;f<h.length;f+=1)_(f);q()}},i(o){if(!a){for(let u=0;u<i.length;u+=1)y(h[u]);a=!0}},o(o){h=h.filter(Boolean);for(let u=0;u<h.length;u+=1)O(h[u]);a=!1},d(o){o&&d(e),x(h,o),o&&d(l),o&&d(s),n=!1,c()}}}function ut(t,e,l){let s;const{state:r}=U;ee(t,r,c=>l(0,s=c));const a=()=>U.setScene("GAME");function n(c,i,h,_){h[_]=c,r.set(s)}return[s,r,a,n]}class ft extends G{constructor(e){super(),A(this,e,ut,ot,V,{})}}function ht(t){let e,l,s,r,a;return{c(){e=k("a"),l=te("svg"),s=te("path"),r=te("path"),a=te("path"),this.h()},l(n){e=w(n,"A",{href:!0,"aria-label":!0,target:!0,rel:!0,class:!0});var c=$(e);l=le(c,"svg",{viewBox:!0,style:!0,"aria-hidden":!0,class:!0});var i=$(l);s=le(i,"path",{d:!0}),$(s).forEach(d),r=le(i,"path",{class:!0,d:!0,fill:!0}),$(r).forEach(d),a=le(i,"path",{d:!0,fill:!0}),$(a).forEach(d),i.forEach(d),c.forEach(d),this.h()},h(){b(s,"d","M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"),b(r,"class","octo-arm svelte-19ojewf"),b(r,"d",`M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6
      C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9
      134.4,103.2`),b(r,"fill","currentColor"),b(a,"d",`M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4
      142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4
      163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4
      C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0
      205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1
      C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z`),b(a,"fill","currentColor"),b(l,"viewBox","0 0 250 250"),b(l,"style",t[0]),b(l,"aria-hidden","true"),b(l,"class","svelte-19ojewf"),b(e,"href",t[1]),b(e,"aria-label","View source on GitHub"),b(e,"target","_blank"),b(e,"rel","noopener"),b(e,"class","svelte-19ojewf")},m(n,c){E(n,e,c),v(e,l),v(l,s),v(l,r),v(l,a)},p(n,[c]){c&1&&b(l,"style",n[0]),c&2&&b(e,"href",n[1])},i:L,o:L,d(n){n&&d(e)}}}function _t(t,e,l){let s,r,{url:a}=e,{background:n="#25292e"}=e,{color:c="#fff"}=e;return t.$$set=i=>{"url"in i&&l(2,a=i.url),"background"in i&&l(3,n=i.background),"color"in i&&l(4,c=i.color)},t.$$.update=()=>{t.$$.dirty&4&&l(1,s=`https://github.com/${a}`),t.$$.dirty&24&&l(0,r=`fill: ${n}; color: ${c};`)},[r,s,a,n,c]}class mt extends G{constructor(e){super(),A(this,e,_t,ht,V,{url:2,background:3,color:4})}}function pt(t){let e,l,s,r,a,n,c,i,h,_,o,u;e=new mt({props:{url:"pascalgermain/svelte-shifumi"}});var f=t[0];function m(p){return{}}return f&&(o=Z(f,m())),{c(){P(e.$$.fragment),l=H(),s=k("main"),r=k("img"),n=H(),c=k("h1"),i=S("Shifumi"),h=H(),_=k("div"),o&&P(o.$$.fragment),this.h()},l(p){j(e.$$.fragment,p),l=D(p),s=w(p,"MAIN",{class:!0});var M=$(s);r=w(M,"IMG",{src:!0,alt:!0,width:!0,height:!0}),n=D(M),c=w(M,"H1",{});var g=$(c);i=N(g,"Shifumi"),g.forEach(d),h=D(M),_=w(M,"DIV",{class:!0});var C=$(_);o&&j(o.$$.fragment,C),C.forEach(d),M.forEach(d),this.h()},h(){ie(r.src,a="images/logo.svg")||b(r,"src",a),b(r,"alt","Svelte logo"),b(r,"width","166"),b(r,"height","200"),b(_,"class","mx-auto mt scene svelte-1yapdrk"),b(s,"class","text-center svelte-1yapdrk")},m(p,M){T(e,p,M),E(p,l,M),E(p,s,M),v(s,r),v(s,n),v(s,c),v(c,i),v(s,h),v(s,_),o&&T(o,_,null),u=!0},p(p,[M]){if(M&1&&f!==(f=p[0])){if(o){B();const g=o;O(g.$$.fragment,1,0,()=>{R(g,1)}),q()}f?(o=Z(f,m()),P(o.$$.fragment),y(o.$$.fragment,1),T(o,_,null)):o=null}},i(p){u||(y(e.$$.fragment,p),o&&y(o.$$.fragment,p),u=!0)},o(p){O(e.$$.fragment,p),o&&O(o.$$.fragment,p),u=!1},d(p){R(e,p),p&&d(l),p&&d(s),o&&R(o)}}}function dt(t,e,l){let s,r;const a={[ce.MENU]:ft,[ce.GAME]:st},{state:n}=U;return ee(t,n,c=>l(2,r=c)),t.$$.update=()=>{t.$$.dirty&4&&l(0,s=a[r.scene])},[s,n,r]}class yt extends G{constructor(e){super(),A(this,e,dt,pt,V,{})}}export{yt as component,vt as universal};