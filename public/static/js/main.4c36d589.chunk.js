(this.webpackJsonpcarpool=this.webpackJsonpcarpool||[]).push([[0],{279:function(e,t,n){},280:function(e,t,n){},416:function(e,t,n){},418:function(e,t,n){},419:function(e,t,n){},537:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),i=n(26),a=n.n(i),s=(n(279),n(59)),r=n(3),l=(n(280),n(19)),u=n(4),d=n(108),j=n(114),b=Object(c.createContext)(""),h=n(9),f=n.n(h),p=n(37),O=n(112),x=n.n(O),g="http://192.168.0.105:3000",m=x.a.create({headers:{"content-type":"application/x-www-form-urlencoded"}});m.interceptors.request.use((function(e){var t=localStorage.getItem("token");return t&&(e.headers.authorization=t),e}),(function(e){return Promise.reject(e)})),m.interceptors.response.use((function(e){if(e.data.code)if(200===e.data.code);else u.n.alert({content:e.data.message||e.data.msg});return e}));var v={get:function(){var e=Object(p.a)(f.a.mark((function e(t,n){var c,o=arguments;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=o.length>2&&void 0!==o[2]&&o[2],n.timestamp=(new Date).getTime(),c||(n.cookie=encodeURIComponent(localStorage.getItem("cookie"))),e.next=5,m.get(g+t,{params:n,withCredentials:!0});case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),post:function(){var e=Object(p.a)(f.a.mark((function e(t,n){var c,o=arguments;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=o.length>2&&void 0!==o[2]&&o[2],n.timestamp=(new Date).getTime(),c||(n.cookie=encodeURIComponent(localStorage.getItem("cookie"))),e.next=5,m.post(g+t,{params:n,withCredentials:!0});case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},y=function(e){return v.get("/login/cellphone",e,!0)},k=function(e){return v.get("/captcha/sent",e,!0)},S=function(e){return v.get("/captcha/verify",e,!0)},I=function(e){return v.get("/user/detail",e)},w=function(e){return v.get("/likelist",e)},C=function(e){return v.get("/cellphone/existence/check",e)},N=function(e){return v.get("/register/cellphone",e)},T=function(e){return v.get("/song/detail",e)},E=function(e){return v.get("/song/url",e)},z=function(e){return v.get("/banner?type=2",e)},F=function(e){return v.get("/check/music",e)},P=function(e){return v.get("/cloudsearch",e)},A=function(e){return v.get("/recommend/songs",e)},B=function(e){return v.get("/lyric",e)},L=function(e){return v.get("/like",e)},R=function(e){return v.get("/logout",e)};n(416);function U(e,t){var n=!0;return function(c){if(!n)return!1;n=!1,setTimeout((function(){e(c),n=!0}),t)}}function D(e){var t=document.getElementsByTagName("html")[0].style.fontSize.split("px")[0];if("string"===typeof e&&e.includes("px")>-1){var n=e.split("px")[0];return"".concat(Number(n)/Number(t),"rem")}return"".concat(e/Number(t),"rem")}function q(e,t){var n,c=parseInt(e),o=0,i=0;c>=60&&(o=parseInt(c/60),c=parseInt(c%60),o>=60&&(i=parseInt(o/60),o=parseInt(o%60)));var a=""+parseInt(c);return a<10&&(a="0"+a),o>0?(a=parseInt(o)+":"+a,o<10&&(a="0"+a)):a="00:"+a,i>0?(a=parseInt(i)+":"+a,i<10&&(a="0"+a)):a="00:"+a,a="".concat(a,".").concat(null===(n=(""+e).split(".")[1])||void 0===n?void 0:n.substring(0,3))}var M=n(2);function J(e){var t=e.onBottom,n=e.children,o=e.style,i=e.id,a=e.className,l=Object(c.useState)(0),u=Object(r.a)(l,2),d=u[0],j=u[1],b=Object(c.useRef)(null),h=Object(c.useState)(!1),f=Object(r.a)(h,2),p=(f[0],f[1]);return Object(c.useEffect)((function(){b.current.onscroll=U((function(){(function(e){var t=e.clientHeight,n=e.scrollHeight,c=e.scrollTop;return Number(c)+Number(t)>=Number(n)-50&&(console.log(d,n),d===n?(console.log("\u5230\u5e95\u4f46\u662f\u4e0d\u52a0\u8f7d"),!1):(j(n),!0))})(b.current)&&t&&t()}),1e3)}),[d]),Object(c.useEffect)((function(){return function(){p(!0)}}),[]),Object(M.jsxs)("div",{className:"d-list ".concat(a),id:i,ref:b,style:Object(s.a)({},o),children:[n,Object(M.jsx)("div",{style:{width:"100%",height:"20vh"}})]})}var V,W,K=function(e){var t=e.item,n=e.setLoading,o=e.key,i=e.like,a=e.setIds,s=e.ids,r=Object(c.useContext)(b),d=r.setUrl,j=r.setAvator,h=r.setTitle,O=r.id,x=r.setId;return Object(M.jsx)(u.d,{onClick:function(){t.id!==O&&(n(!0),F({id:t.id}).then((function(e){e.data.success?E({id:t.id}).then((function(e){x(t.id),d(e.data.data[0].url),j(t.al.picUrl),h(t.name+"-"+t.ar[0].name),n(!1)})):u.y.show(e.message)})).catch((function(e){n(!1),u.y.show("\u6682\u65e0\u7248\u6743\u6216\u8bf7\u6c42\u5931\u8d25")})))},className:"animated faster fadeIn cardBody ".concat(t.id===O?"card-active":""),children:Object(M.jsx)(u.u,{rightActions:[{key:"pin",text:i?"\u5220\u9664":"\u6211\u559c\u6b22",color:i?"danger":"warning",onClick:function(){var e=Object(p.a)(f.a.mark((function e(n){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.stopPropagation(),i){e.next=4;break}return L({id:t.id}).then((function(e){u.y.show("\u6dfb\u52a0\u6210\u529f")})),e.abrupt("return");case 4:L({id:t.id,like:!1}).then((function(e){u.y.show("\u5220\u9664\u6210\u529f"),s.push(t.id),a(Object(l.a)(s))}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}],leftActions:[{key:"pin",text:"\u6211\u559c\u6b22",color:"warning",onClick:function(){var e=Object(p.a)(f.a.mark((function e(n){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.stopPropagation(),L({id:t.id}).then((function(e){u.y.show("\u6dfb\u52a0\u6210\u529f")}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}],className:"cardBody ".concat(t.id===O?"card-active":""),children:Object(M.jsxs)(u.j,{columns:9,gap:10,children:[Object(M.jsx)(u.j.Item,{span:3,children:Object(M.jsx)(u.a,{className:"songsImg",src:t.al.picUrl})}),Object(M.jsxs)(u.j.Item,{span:6,style:{display:"flex",flexDirection:"column",alignItems:"start",justifyContent:"space-between"},children:[Object(M.jsx)(u.f,{direction:"end",style:{fontSize:"16px"},content:t.name}),Object(M.jsx)("span",{style:{fontSize:"13px"},children:t.ar[0].name})]})]})})},o)},_=0;var H=function e(t){var n=Object(c.useState)([]),o=Object(r.a)(n,2),i=o[0],a=o[1],s=Object(c.useContext)(b),h=(s.setUrl,s.setAvator,s.setTitle,s.setMusicList),f=(s.id,s.setId,Object(c.useState)([])),p=Object(r.a)(f,2),O=p[0],x=p[1],g=Object(c.useState)(""),m=Object(r.a)(g,2),v=m[0],y=m[1],k=Object(c.useState)(""),S=Object(r.a)(k,2),I=S[0],w=S[1],C=Object(c.useState)(!1),N=Object(r.a)(C,2),T=N[0],E=N[1],F=Object(c.useState)([]),B=Object(r.a)(F,2),L=B[0],R=B[1],U=Object(c.useRef)(null),q=Object(c.useState)("-1"),H=Object(r.a)(q,2),Y=H[0],$=H[1];function X(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;E(!0),V&&P({keywords:V,offset:_,type:n}).then((function(n){if(t){var c=n.data.result.songs;a(c),h(c),_=0}else{var o=W.concat(n.data.result.songs);a(o),h(o),_+=30}e()}))}return Object(c.useEffect)((function(){return z({}).then((function(e){x(e.data.banners)})),localStorage.getItem("userInfo")&&A({}).then((function(e){R(e.data.data.dailySongs),h(e.data.data.dailySongs)})),function(){w("")}}),[]),Object(c.useEffect)((function(){W=i}),[i]),Object(c.useEffect)((function(){var e=O.map((function(e,t){return Object(M.jsx)(u.v.Item,{onClick:function(){window.open(e.pic)},children:Object(M.jsx)("div",{style:{height:"100%",width:"100%"},children:Object(M.jsx)("img",{style:{height:"100%",width:"100%",objectFit:"cover"},src:e.pic,alt:e.typeTitle})})})}));y(e)}),[O]),Object(c.useEffect)((function(){console.log(v)}),[v]),e.search=function(e){w(e),V=e,$("1"),X((function(){E(!1)}),!0)},Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(d.a,{children:Object(M.jsx)(j.a,{children:Object(M.jsx)(u.l,{ref:U,placeholder:"\u641c\u7d22",value:I,type:"search",onChange:function(e){w(e),V=e},onKeyDown:function(e){13===e.keyCode&&(V=I,T||(a([]),V&&(_=0,X((function(){var e;E(!1),null===(e=U.current)||void 0===e||e.blur()}))),""===V&&(E(!1),_=0),$("1")))}})})}),Object(M.jsx)(u.m,{visible:T,children:Object(M.jsx)("div",{className:"overlayContent",children:T&&Object(M.jsx)(u.t,{style:{"--size":"48px"},color:"primary"})})}),Object(M.jsxs)(u.x,{onChange:function(e){$(e)},activeKey:Y,className:"main",children:[Object(M.jsx)(u.x.Tab,{title:Object(M.jsx)(u.b,{content:"".concat(L.length),style:{"--right":"-10px","--top":"8px"},children:"\u6bcf\u65e5\u63a8\u8350"}),children:Object(M.jsx)(J,{style:{height:"80vh"},children:Object(M.jsxs)(u.r,{onRefresh:function(){localStorage.getItem("userInfo")&&(R([]),h([]),A({}).then((function(e){R(Object(l.a)(e.data.data.dailySongs)),h(Object(l.a)(e.data.data.dailySongs))})))},children:[Object(M.jsx)(u.v,{autoplay:!0,loop:!0,allowTouchMove:!0,style:{height:D("120px"),"--border-radius":"8px"},slideSize:100,children:v}),L.map((function(e,t){return Object(M.jsx)(K,{item:e,like:!1,setLoading:E},t)})),0===L.length&&Object(M.jsx)(u.g,{description:"\u83b7\u53d6\u63a8\u8350\u6b4c\u66f2\u8bf7\u5148\u767b\u5f55"})]})})},"-1"),Object(M.jsx)(u.x.Tab,{title:Object(M.jsx)(u.b,{content:"".concat(i.length),style:{"--right":"-10px","--top":"8px"},children:"\u6b4c\u66f2\u641c\u7d22"}),style:{height:"100%"},children:Object(M.jsxs)(J,{onBottom:function(){X((function(){E(!1)}),!1)},children:[i.map((function(e,t){return Object(M.jsx)(K,{item:e,like:!1,setLoading:E},t)})),0===i.length&&Object(M.jsx)(u.g,{description:"\u6682\u65e0\u6570\u636e"})]})},"1")]})]})};var Y,$=function(e){var t=Object(c.useState)(!1),n=Object(r.a)(t,2),o=n[0],i=n[1],a=Object(c.useState)({}),d=Object(r.a)(a,2),j=d[0],h=d[1],f=Object(c.useState)(0),p=Object(r.a)(f,2),O=p[0],x=p[1],g=Object(c.useState)([]),m=Object(r.a)(g,2),v=(m[0],m[1]),y=Object(c.useContext)(b).setMusicList;return Object(c.useEffect)((function(){var t;if(localStorage.getItem("userInfo"))return(null===(t=j=JSON.parse(localStorage.getItem("userInfo")))||void 0===t?void 0:t.avatarImgId)||e.history.replace("/login"),I({uid:j.userId}).then((function(e){h(Object(s.a)({},e.data))})),w({uid:j.userId}).then((function(e){x(e.data.ids.length),T({ids:e.data.ids.join(",")}).then((function(e){200===e.data.code&&(v(Object(l.a)(e.data.songs)),y(Object(l.a)(e.data.songs)))}))})),function(){};e.history.replace("/login")}),[]),Object(c.useEffect)((function(){var e;return(null===(e=j)||void 0===e?void 0:e.profile)&&i(!0),function(){}}),[j]),Object(M.jsxs)(M.Fragment,{children:[o&&Object(M.jsx)(M.Fragment,{children:Object(M.jsxs)("div",{style:{height:"100%",padding:"20px",zIndex:"10",overflow:"scroll"},children:[Object(M.jsx)(u.d,{className:"animated faster fadeIn",children:Object(M.jsxs)(u.j,{columns:6,children:[Object(M.jsx)(u.j.Item,{span:6,style:{display:"flex",justifyContent:"center"},children:Object(M.jsx)(u.a,{src:j.profile.avatarUrl})}),Object(M.jsx)(u.j.Item,{style:{height:"10px"}}),Object(M.jsx)(u.j.Item,{span:6,style:{display:"flex",justifyContent:"center"},children:Object(M.jsxs)(u.j,{columns:3,gap:20,style:{fontSize:"17px"},children:[Object(M.jsxs)(u.j.Item,{span:1,children:[j.profile.follows," \u5173\u6ce8"]}),Object(M.jsxs)(u.j.Item,{span:1,children:[j.profile.followeds," \u7c89\u4e1d"]}),Object(M.jsxs)(u.j.Item,{span:1,children:["lv.",j.level]})]})}),Object(M.jsx)(u.j.Item,{style:{height:"10px"}}),Object(M.jsx)(u.j.Item,{span:6,style:{display:"flex",justifyContent:"center"},children:Object(M.jsx)("span",{style:{fontSize:"25px"},children:j.profile.nickname})}),Object(M.jsx)(u.j.Item,{style:{height:"10px"}}),Object(M.jsx)(u.j.Item,{span:6,children:Object(M.jsx)(u.f,{direction:"end",style:{fontSize:"14px"},expandText:"\u66f4\u591a",collapseText:"\u6536\u8d77",content:"\u4e2a\u4eba\u7b7e\u540d:".concat(j.profile.signature)})})]})}),Object(M.jsx)(u.c,{style:{marginTop:"30px",padding:"0"},onClick:function(){e.history.push("/song")},children:Object(M.jsx)(u.d,{children:Object(M.jsxs)(u.j,{columns:10,gap:20,children:[Object(M.jsx)(u.j.Item,{span:3,children:Object(M.jsx)(u.a,{src:j.profile.backgroundUrl,style:{height:"100%",width:"100%"}})}),Object(M.jsxs)(u.j.Item,{span:5,style:{display:"flex",flexDirection:"column",justifyContent:"center"},children:[Object(M.jsx)("span",{style:{fontSize:"23px"},children:"\u6211\u559c\u6b22\u7684\u97f3\u4e50"}),Object(M.jsx)("br",{}),Object(M.jsxs)("span",{style:{fontSize:"16px"},children:[O,"\u9996"]})]})]})})}),Object(M.jsx)("div",{style:{height:"10vh",width:"100%"}}),Object(M.jsx)(u.c,{color:"danger",size:"large",block:!0,onClick:function(){R({}).then((function(t){200===t.data.code&&(localStorage.clear(),e.history.replace("/login"))}))},children:"\u9000\u51fa\u767b\u5f55"})]})}),!o&&Object(M.jsx)(M.Fragment,{children:Object(M.jsxs)(u.j,{columns:1,style:{padding:"20px"},children:[Object(M.jsx)(u.s.Title,{animated:!0}),Object(M.jsx)(u.s.Paragraph,{lineCount:4,animated:!0}),Object(M.jsx)(u.s,{animated:!0,style:{width:"100%",height:"80px",borderRadius:"5px"}})]})})]})},X=0;var Z=function(e){var t=Object(c.useState)(!0),n=Object(r.a)(t,2),o=n[0],i=n[1],a=Object(c.useState)({}),s=Object(r.a)(a,2),d=s[0],j=(s[1],Object(c.useState)([])),h=Object(r.a)(j,2),f=h[0],p=h[1],O=Object(c.useContext)(b),x=(O.setUrl,O.setAvator,O.setTitle,O.id,O.setId,O.setMusicList),g=Object(c.useState)(!0),m=Object(r.a)(g,2),v=(m[0],m[1]),y=Object(c.useState)(!1),k=Object(r.a)(y,2),S=k[0],I=k[1],C=Object(c.useState)([]),N=Object(r.a)(C,2),E=N[0],z=N[1];Object(c.useEffect)((function(){if(localStorage.getItem("userInfo")){var t;if(null===(t=d=JSON.parse(localStorage.getItem("userInfo")))||void 0===t?void 0:t.avatarImgId)return F(X=0),function(){};e.history.replace("/login")}else e.history.replace("/login")}),[]),Object(c.useEffect)((function(){return d.profile&&i(!0),function(){}}),[d]),Object(c.useEffect)((function(){0===f.length?X=0:X++,Y=f,x(Object(l.a)(f))}),[f]);var F=function(e){return v(!1),I(!0),w({uid:d.userId}).then((function(t){T({ids:t.data.ids.slice(10*e,10*e+9).join(",")}).then((function(e){if(200===e.data.code){var t=Y.concat(e.data.songs);p(t)}I(!1)}))}))};return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(u.o,{back:"",onBack:function(){e.history.go(-1)},children:"\u6211\u559c\u6b22\u7684\u97f3\u4e50"}),Object(M.jsx)(u.m,{visible:S,children:Object(M.jsx)("div",{className:"overlayContent",children:S&&Object(M.jsx)(u.t,{style:{"--size":"48px"},color:"primary"})})}),o&&Object(M.jsx)(M.Fragment,{children:Object(M.jsxs)("div",{style:{height:"100%",padding:"0",zIndex:"10",overflow:"scroll"},children:[Object(M.jsx)(J,{onBottom:function(){F(X)},style:{height:"90vh"},id:"songsList",className:"main",children:f.map((function(e,t){return E.includes(e.id)?null:Object(M.jsx)(K,{ids:E,setIds:z,item:e,like:!0,setLoading:I},t)}))}),Object(M.jsx)(u.h,{style:{"--initial-position-bottom":"60px","--initial-position-right":"24px"},onClick:function(){console.log("\u5b9a\u4f4d"),document.getElementById("songsList").scrollTo({top:0,behavior:"smooth"})},children:"\u9876"})]})})]})};n(418);function G(e){var t,n,o=e.total,i=e.current,a=e.onClick,s=e.style,l=e.showTime,u=e.disable,d=Object(c.useState)("0%"),j=Object(r.a)(d,2),b=j[0],h=j[1],f=Object(c.useState)(0),p=Object(r.a)(f,2),O=p[0],x=p[1],g=Object(c.useState)(0),m=Object(r.a)(g,2),v=m[0],y=m[1],k=Object(c.useState)(!1),S=Object(r.a)(k,2),I=(S[0],S[1]),w=Object(c.useState)("0%"),C=Object(r.a)(w,2),N=C[0],T=C[1];return Object(c.useEffect)((function(){x(o),y(i)}),[]),Object(c.useEffect)((function(){h("".concat(v/O*100,"%")),T("".concat(v/O*100-.5,"%"))}),[v,O]),Object(c.useEffect)((function(){y(i),x(o)}),[o,i]),Object(M.jsxs)("div",{className:"process",children:[l&&Object(M.jsx)("div",{className:"text",style:s,children:"".concat((null===(t=q(v))||void 0===t?void 0:t.split(".")[0])||"00:00:00"," / ").concat((null===(n="".concat(q(o)))||void 0===n?void 0:n.split(".")[0])||"00:00:00")}),Object(M.jsxs)("div",{className:"total",onMouseDown:function(e){if(!u){var t=(e.clientX-e.currentTarget.getBoundingClientRect().left)/e.currentTarget.clientWidth;t<0&&(t=0),t>1&&(t=1),y(o*t),I(!0),a&&a(o*t,e)}},onMouseUp:function(){u||I(!1)},children:[Object(M.jsx)("div",{className:"current",onClick:function(){return!1},style:{width:b}}),Object(M.jsx)("div",{className:"flag",style:{left:N}})]})]})}G.defaultProps={total:0,current:0,showTime:!0,disable:!1};var Q=G;n(419);function ee(e){var t=e.src,n=e.autoPlay,o=e.controls,i=e.next,a=e.title,s=e.avator,l=e.showProcess,d=e.onEnd,j=e.onClick,h=Object(c.useRef)(null),f=Object(c.useState)(0),p=Object(r.a)(f,2),O=p[0],x=p[1],g=Object(c.useState)(10),m=Object(r.a)(g,2),v=m[0],y=m[1],k=Object(c.useContext)(b),S=k.setCurrentTime,I=k.setTotalTime,w=k.setAudioStatus,C=k.setIndex,N=Object(c.useState)(!1),T=Object(r.a)(N,2),E=T[0],z=T[1];return ee.port=function(e){h.current.currentTime=e,S(e),x(e)},Object(c.useEffect)((function(){return h.current&&(ee.current=h.current,h.current.onloadedmetadata=function(){console.log("\u52a0\u8f7d\u6570\u636e"),ee.loadingData=!0,C(0)},h.current.oncanplay=function(){var e;console.log("\u97f3\u9891\u52a0\u8f7d\u5b8c\u6bd5\uff0c\u51c6\u5907\u64ad\u653e"),null===(e=h.current)||void 0===e||e.play()},h.current.ontimeupdate=function(){var e,t;x(null===(e=h.current)||void 0===e?void 0:e.currentTime),S(null===(t=h.current)||void 0===t?void 0:t.currentTime)},h.current.onpause=function(){console.log("\u6682\u505c"),z(!0),w(!0)},h.current.onplay=function(){var e,t,n;console.log("\u64ad\u653e",null===(e=h.current)||void 0===e?void 0:e.duration),z(!1),w(!1),y(null===(t=h.current)||void 0===t?void 0:t.duration),I(null===(n=h.current)||void 0===n?void 0:n.duration),ee.loadingData=!1}),function(){}}),[]),Object(c.useEffect)((function(){return function(){}}),[t]),Object(c.useEffect)((function(){var e,t,n,c;(null===(e=h.current)||void 0===e?void 0:e.paused)||(null===(t=h.current)||void 0===t||t.play(),y(null===(n=h.current)||void 0===n?void 0:n.duration),I(null===(c=h.current)||void 0===c?void 0:c.duration))}),[O]),Object(M.jsxs)("div",{className:"Audio",onClick:function(){j&&j()},children:[Object(M.jsx)("div",{className:"audio_img",children:s&&Object(M.jsx)("img",{alt:"",src:s})}),Object(M.jsxs)("div",{className:"audio_body",children:[Object(M.jsxs)("div",{className:"audio_header",children:[Object(M.jsx)(u.p,{content:a.split("-")[0],style:{padding:"0",color:"black",boxSizing:"border-box",background:"rgb(238, 238, 238)",border:"none",height:"25px"},icon:Object(M.jsx)(M.Fragment,{})}),Object(M.jsx)(u.f,{direction:"end",content:a.split("-")[1],style:{paddingLeft:"5px"}})]}),Object(M.jsxs)("div",{className:"control",children:[l&&Object(M.jsx)(Q,{total:v,current:O,onClick:function(e){h.current.currentTime=e,h.current.play()}}),o&&Object(M.jsxs)("div",{className:"controls",children:[Object(M.jsx)(u.c,{style:{borderRadius:"100px"},onClick:function(e){e.stopPropagation(),h.current&&(h.current.paused?h.current.play():h.current.pause())},children:Object(M.jsx)("i",{className:"iconfont ".concat(E?"icon-bofang":"icon-zanting")})}),i&&Object(M.jsx)(u.c,{style:{borderRadius:"100px"},onClick:function(e){e.stopPropagation(),i&&i()},children:Object(M.jsx)("i",{className:"iconfont icon-24gf-next"})})]})]}),Object(M.jsx)("audio",{ref:h,id:"audio",src:t,autoPlay:n,onEnded:function(){console.log("\u7ed3\u675f\u64ad\u653e"),ee.loadingData=!0,d&&d()}})]})]})}ee.loadingData=!0,ee.current=null,ee.defaultProps={audioArr:[],src:"",autoPlay:!0,controls:!0,next:function(){},avator:""};var te,ne=ee,ce=n(25),oe=n(540),ie=n(541),ae=n(539),se=n(226),re=n.n(se),le=[{key:"/home",title:"\u97f3\u4e50",icon:Object(M.jsx)(oe.a,{})},{key:"/personalCenter",title:"\u4e2a\u4eba\u4e2d\u5fc3",icon:Object(M.jsx)(ie.a,{})}],ue=[],de=-1;var je,be=function(e){var t=Object(ce.g)().pathname,n=Object(c.useState)(""),o=Object(r.a)(n,2),i=o[0],a=o[1],l=Object(c.useState)("\u6682\u65e0"),d=Object(r.a)(l,2),j=d[0],h=d[1],f=Object(c.useState)(!1),p=Object(r.a)(f,2),O=p[0],x=p[1],g=Object(c.useState)({}),m=Object(r.a)(g,2),v=(m[0],m[1]),y=Object(c.useState)([]),k=Object(r.a)(y,2),S=k[0],I=k[1],w=Object(c.useState)(-1),C=Object(r.a)(w,2),N=C[0],T=C[1],z=Object(c.useState)(!1),P=Object(r.a)(z,2),A=P[0],L=P[1],R=Object(c.useState)([]),U=Object(r.a)(R,2),J=U[0],V=U[1],W=Object(c.useState)(),K=Object(r.a)(W,2),_=K[0],Y=K[1],X=Object(c.useState)("00:00:00"),G=Object(r.a)(X,2),ee=G[0],oe=G[1],ie=Object(c.useState)(-1),se=Object(r.a)(ie,2),je=se[0],be=se[1],he=Object(c.useState)(!0),fe=Object(r.a)(he,2),pe=fe[0],Oe=fe[1],xe=Object(c.useState)("control"),ge=Object(r.a)(xe,2),me=ge[0],ve=ge[1],ye=Object(c.useState)(0),ke=Object(r.a)(ye,2),Se=ke[0],Ie=ke[1],we=Object(c.useState)(!0),Ce=Object(r.a)(we,2),Ne=Ce[0],Te=Ce[1],Ee=Object(c.useState)("/song"!==t),ze=Object(r.a)(Ee,2),Fe=ze[0],Pe=ze[1],Ae=Object(c.useState)([]),Be=Object(r.a)(Ae,2),Le=Be[0],Re=Be[1],Ue=Object(c.useState)({}),De=Object(r.a)(Ue,2),qe=De[0],Me=De[1],Je=Object(c.useState)(!1),Ve=Object(r.a)(Je,2),We=Ve[0],Ke=Ve[1],_e=Object(c.useState)(!1),He=Object(r.a)(_e,2),Ye=He[0],$e=He[1];Object(c.useEffect)((function(){return window.onhashchange=function(e){console.log(window.location.hash);var t=window.location.hash;Pe("#/home"===t||"#/personalCenter"===t)},function(){}}),[]),Object(c.useEffect)((function(){te=A}),[A]),Object(c.useEffect)((function(){B({id:N}).then((function(e){var t,n,c,o,i,a=null===(t=e.data.lrc)||void 0===t||null===(n=t.lyric)||void 0===n?void 0:n.replace(/(\n)/g,"<br/>").split("<br/>").filter((function(e){return e.length>11}));(V(a),null===(c=e.data.tlyric)||void 0===c?void 0:c.lyric)?(a=null===(o=e.data.tlyric)||void 0===o||null===(i=o.lyric)||void 0===i?void 0:i.replace(/(\n)/g,"<br/>").split("<br/>"),Re(a),Ke(!0)):Ke(!1);be(0)}))}),[i]),Object(c.useEffect)((function(){var e;console.log(J),be(0),ue=[],null===(e=document.getElementById("songsWord"))||void 0===e||e.scrollTo({top:0,behavior:"smooth"}),null===J||void 0===J||J.forEach((function(e){e.split("]")[1]&&ue.push(e.split("]")[0].split("[")[1])})),void 0===ue[0]?Oe(!0):Oe(!1)}),[J]),Object(c.useEffect)((function(){var e={};Le.map((function(t,n){var c=t.split("]")[0].split("[")[1],o=t.split("]")[1];e[c]=o+"d-t-f"+n})),Me(Object(s.a)({},e))}),[Le]),Object(c.useEffect)((function(){console.log(qe)}),[qe]),Object(c.useEffect)((function(){var e,t,n,c=(null===(e=qe[ue[je]])||void 0===e?void 0:e.split("d-t-f")[1])?(null===(t=qe[ue[je]])||void 0===t?void 0:t.split("d-t-f")[1])-4:0;null===(n=document.getElementById("songsWord"))||void 0===n||n.scrollTo({top:Ye?34*(je-4+c)+120:34*(je-4),behavior:"smooth"})}),[Ye]),Object(c.useEffect)((function(){te&&oe(q(_))}),[_]),Object(c.useEffect)((function(){for(var e=de;je<ue.length;e++)if("00:".concat(ue[e+1])>=ee){be(e);break}}),[ee]),Object(c.useEffect)((function(){if(console.log(je+"[\u6b4c\u8bcd]"),de=je,je>4){var e,t,n,c=(null===(e=qe[ue[je]])||void 0===e?void 0:e.split("d-t-f")[1])?(null===(t=qe[ue[je]])||void 0===t?void 0:t.split("d-t-f")[1])-4:0;null===(n=document.getElementById("songsWord"))||void 0===n||n.scrollTo({top:Ye?34*(je-4+c)+120:34*(je-4),behavior:"smooth"})}else{var o;null===(o=document.getElementById("songsWord"))||void 0===o||o.scrollTo({top:0,behavior:"smooth"})}}),[je]),Object(c.useEffect)((function(){if(console.log(je+"[\u6b4c\u8bcd]"),de=je,je>4){var e,t,n,c=(null===(e=qe[ue[je]])||void 0===e?void 0:e.split("d-t-f")[1])?(null===(t=qe[ue[je]])||void 0===t?void 0:t.split("d-t-f")[1])-4:0;null===(n=document.getElementById("songsWord"))||void 0===n||n.scrollTo({top:Ye?34*(je-4+c)+120:34*(je-4),behavior:"smooth"})}else{var o;null===(o=document.getElementById("songsWord"))||void 0===o||o.scrollTo({top:0,behavior:"smooth"})}return function(){}}),[me]);var Xe=function(){var e=S.length,t=Math.floor(e*Math.random());F({id:S[t].id}).then((function(e){E({id:S[t].id}).then((function(e){T(S[t].id),a(e.data.data[0].url),x(S[t].al.picUrl),h(S[t].name+"-"+S[t].ar[0].name)}))})).catch((function(e){u.y.show("\u6682\u65e0\u7248\u6743\u6216\u8bf7\u6c42\u5931\u8d25")}))};return Object(M.jsx)("div",{className:"App",children:Object(M.jsxs)(b.Provider,{value:{url:i,setUrl:a,setTitle:h,setAvator:x,setNext:v,setMusicList:I,setId:T,id:N,setContent:V,setCurrentTime:Y,setTotalTime:Ie,setAudioStatus:Te,setIndex:be},children:[Object(M.jsx)("div",{className:"body",children:Object(M.jsxs)(ce.d,{children:[Object(M.jsx)(ce.b,{path:"/home",component:H,exact:!0}),Object(M.jsx)(ce.b,{path:"/personalCenter",component:$,exact:!0}),Object(M.jsx)(ce.b,{path:"/song",component:Z,exact:!0}),Object(M.jsx)(ce.b,{path:"/search",component:re.a,exact:!0}),Object(M.jsx)(ce.a,{to:"/home"})]})}),Object(M.jsx)(ne,{title:j,src:i,showProcess:!1,avator:O,onEnd:function(){Xe()},next:function(){Xe()},onClick:function(){L(!0)}}),Fe&&Object(M.jsx)(u.w,{activeKey:t,onChange:function(t){e.history.replace("".concat(t))},children:le.map((function(e){return Object(M.jsx)(u.w.Item,{icon:e.icon,title:e.title},e.key)}))}),Object(M.jsx)(u.q,{visible:A,className:"popup",onMaskClick:function(){L(!1)},bodyStyle:{height:"100vh"},children:Object(M.jsxs)(u.x,{onChange:function(e){ve(e)},activeKey:me,children:[Object(M.jsx)(u.x.Tab,{title:"\u6b4c\u66f2",children:Object(M.jsxs)("div",{id:"control",style:{position:"relative",height:"100%",overflowY:"scroll"},children:[Object(M.jsx)(u.c,{fill:"none",style:{position:"fixed",top:0,right:0},onClick:function(){L(!1)},children:Object(M.jsx)(ae.a,{})}),Object(M.jsxs)(u.j,{columns:3,gap:10,children:[Object(M.jsx)(u.j.Item,{onClick:function(){ve("songWord")},span:3,style:{padding:"10px"},children:Object(M.jsx)(u.a,{className:"control-img ".concat(Ne?"control-img-animation-pause":"control-img-animation"),src:O,style:{width:"100%"}})}),Object(M.jsxs)(u.j.Item,{span:3,style:{padding:"10px"},children:[Object(M.jsx)(u.e,{className:"popUpsongName",style:{fontSize:"20px"},children:Object(M.jsx)("span",{onClick:function(){"#/song"!==window.location.hash&&(L(!1),H.search(j.split("-")[0]))},children:Object(M.jsx)(u.p,{content:j.split("-")[0],style:{padding:"0",color:"black",boxSizing:"border-box",border:"none",height:D("70px"),fontSize:D("25px"),background:"white",flex:100,justifyContent:"center"},icon:Object(M.jsx)(M.Fragment,{})})})}),Object(M.jsx)(u.e,{style:{fontSize:"17px"},children:Object(M.jsx)("span",{onClick:function(){"#/song"!==window.location.hash&&(L(!1),H.search(j.split("-")[1]))},children:j.split("-")[1]})})]}),Object(M.jsx)(u.j.Item,{span:3,style:{padding:"10px"},children:Object(M.jsx)(Q,{total:Se,current:_,onClick:function(e){ne.port(e)}})}),Object(M.jsx)(u.j.Item,{span:1,style:{textAlign:"right"},children:Object(M.jsx)(u.c,{style:{borderRadius:"100px",width:"60px",height:"60px",transform:"rotate(180deg)"},onClick:function(e){e.stopPropagation(),u.y.show("\u4e0a\u4e00\u9996")},children:Object(M.jsx)("i",{style:{fontSize:D("25px")},className:"iconfont icon-24gf-next"})})}),Object(M.jsx)(u.j.Item,{span:1,style:{textAlign:"center"},children:Object(M.jsx)(u.c,{style:{borderRadius:"100px",width:"60px",height:"60px"},onClick:function(e){e.stopPropagation(),ne.current.paused?ne.current.play():ne.current.pause()},children:Object(M.jsx)("i",{style:{fontSize:D("25px")},className:"iconfont ".concat(Ne?"icon-bofang":"icon-zanting")})})}),Object(M.jsx)(u.j.Item,{span:1,children:Object(M.jsx)(u.c,{style:{borderRadius:"100px",width:"60px",height:"60px"},onClick:function(e){e.stopPropagation(),Xe()},children:Object(M.jsx)("i",{style:{fontSize:D("25px")},className:"iconfont icon-24gf-next"})})})]})]})},"control"),Object(M.jsx)(u.x.Tab,{title:"\u6b4c\u8bcd",children:Object(M.jsxs)("div",{id:"songsWord",style:{position:"relative",height:"100%",overflowY:"scroll"},children:[Object(M.jsx)(u.c,{fill:"none",style:{position:"fixed",top:0,right:0},onClick:function(){L(!1)},children:Object(M.jsx)(ae.a,{})}),Object(M.jsx)(u.e,{children:"\u6b4c\u8bcd-\u70b9\u51fb\u53ef\u8df3\u8f6c\u6307\u5b9a\u8fdb\u5ea6"}),(pe||2===J.length)&&Object(M.jsx)(u.e,{children:"*\u8be5\u6b4c\u8bcd\u4e0d\u652f\u6301\u6eda\u52a8\u4ee5\u53ca\u5b9a\u4f4d*"}),null===J||void 0===J?void 0:J.map((function(e,t){var n;return Object(M.jsxs)("div",{onClick:function(){if(!pe&&!ne.loadingData){if(2===J.length)return;be(t),ne.port("".concat(60*ue[t].split(":")[0]+1*ue[t].split(":")[1]))}},children:[!e.split("]")[1]&&Object(M.jsx)(u.e,{id:"divider".concat(t),className:"".concat(je===t?"dividerActive":"divider"),style:{opacity:"0",height:"0px"}}),e.split("]")[1]&&Object(M.jsx)(u.e,{id:"divider".concat(t),className:"".concat(je===t?"dividerActive":"divider"),children:pe?e:e.split("]")[1]}),Ye&&(null===(n=qe[ue[t]])||void 0===n?void 0:n.split("d-t-f")[0])&&Object(M.jsxs)(u.e,{id:"divider".concat(t),className:"".concat(je===t?"dividerZhActive":"divider"),children:[Object(M.jsx)("span",{children:"\u8bd1: "})," "," "+qe[ue[t]].split("d-t-f")[0]]})]})})),We&&Object(M.jsx)(u.h,{style:{"--initial-position-bottom":"60px","--initial-position-right":"24px"},onClick:function(){$e(!Ye)},children:"\u8bd1"}),Object(M.jsx)("div",{style:{height:"80vh",width:"100%"}})]})},"songWord")]})})]})})},he=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,542)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),o(e),i(e),a(e)}))},fe=(n(535),n(536),n(142));var pe=function(e){var t=u.i.useForm(),n=Object(r.a)(t,1)[0],o=Object(c.useState)(!0),i=Object(r.a)(o,2),a=i[0],s=i[1],l=Object(c.useState)(0),d=Object(r.a)(l,2),j=d[0],b=d[1];function h(e,t,n){if(t&&!t.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57]|19[0-9])[0-9]{8}$/))return s(!0),void n("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u624b\u673a\u53f7");s(!1),n()}return Object(c.useEffect)((function(){return clearInterval(je),je=setInterval((function(){b(j-1)}),1e3),function(){}}),[j]),Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(u.o,{style:{background:"white",boxShadow:"0px 1px 1px rgba(0, 0, 0, 0.16)"},back:"",backArrow:!1,right:Object(M.jsx)(M.Fragment,{children:Object(M.jsx)(u.c,{onClick:function(){e.history.replace("/home")},fill:"none",children:"\u8df3\u8fc7"})}),children:"\u767b\u5f55"}),Object(M.jsxs)(u.x,{onChange:function(e){console.log(e)},children:[Object(M.jsx)(u.x.Tab,{title:"\u5bc6\u7801\u767b\u5f55",children:Object(M.jsxs)(u.i,{layout:"horizontal",form:n,footer:Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(u.c,{onClick:function(){n.validateFields().then((function(t,c){c||y(n.getFieldsValue()).then((function(t){200===t.data.code&&(localStorage.setItem("token",t.data.token),localStorage.setItem("userInfo",JSON.stringify(t.data.profile)),localStorage.setItem("cookie",JSON.stringify(t.data.cookie)),document.cookie=t.data.cookie,localStorage.setItem("account",JSON.stringify(t.data.account)),e.history.replace("/home"))}))}))},block:!0,color:"primary",size:"large",children:"\u767b\u5f55"}),Object(M.jsx)(u.j.Item,{style:{height:"10px"}}),Object(M.jsx)(u.c,{block:!0,size:"large",onClick:function(){e.history.replace("/regist")},children:"\u6ce8\u518c"})]}),children:[Object(M.jsx)(u.i.Item,{label:"\u624b\u673a\u53f7",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u624b\u673a\u53f7"},{validator:h}],name:"phone",children:Object(M.jsx)(u.l,{placeholder:"\u8bf7\u8f93\u5165\u624b\u673a\u53f7",onChange:function(){}})}),Object(M.jsx)(u.i.Item,{label:"\u5bc6\u7801",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801"}],name:"password",children:Object(M.jsx)(u.l,{placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801",type:"password",onChange:function(){}})})]})},"password"),Object(M.jsx)(u.x.Tab,{title:"\u9a8c\u8bc1\u7801\u767b\u5f55",children:Object(M.jsxs)(u.i,{layout:"horizontal",form:n,footer:Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(u.c,{onClick:function(){n.validateFields().then((function(t,c){c||S({phone:n.getFieldValue("phone"),captcha:n.getFieldValue("captcha")}).then((function(t){var c;(null===(c=t.data)||void 0===c?void 0:c.data)&&(y({phone:n.getFieldValue("phone"),captcha:n.getFieldValue("captcha")}).then((function(e){200===e.data.code&&(localStorage.setItem("token",e.data.token),localStorage.setItem("userInfo",JSON.stringify(e.data.profile)),localStorage.setItem("cookie",JSON.stringify(e.data.cookie)),localStorage.setItem("account",JSON.stringify(e.data.account)),document.cookie=e.data.cookie)})),e.history.replace("/home"))}))}))},block:!0,color:"primary",size:"large",children:"\u767b\u5f55"}),Object(M.jsx)(u.j.Item,{style:{height:"10px"}}),Object(M.jsx)(u.c,{block:!0,size:"large",onClick:function(){e.history.replace("/regist")},children:"\u6ce8\u518c"})]}),children:[Object(M.jsx)(u.i.Item,{label:"\u624b\u673a\u53f7",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u624b\u673a\u53f7"},{validator:h}],name:"phone",children:Object(M.jsx)(u.l,{placeholder:"\u8bf7\u8f93\u5165\u624b\u673a\u53f7",onChange:function(){}})}),Object(M.jsx)(u.i.Item,{label:"\u77ed\u4fe1\u9a8c\u8bc1\u7801",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801"}],name:"captcha",extra:Object(M.jsxs)(u.c,{color:"primary",disabled:a,fill:"none",onClick:function(e){k({phone:n.getFieldValue("phone")}).then((function(e){e.data.data?(s(!0),b(60)):u.y.show("\u53d1\u9001\u5931\u8d25")}))},children:["\u53d1\u9001\u9a8c\u8bc1\u7801",j>0?"(".concat(j,"s)"):""]}),children:Object(M.jsx)(u.l,{clearable:!0,placeholder:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801",type:"text",onChange:function(){}})})]})},"captcha")]})]})},Oe="";var xe=function(e){var t=u.i.useForm(),n=Object(r.a)(t,1)[0],o=Object(c.useState)(!0),i=Object(r.a)(o,2),a=i[0],s=i[1],l=Object(c.useState)(0),d=Object(r.a)(l,2),j=d[0],b=d[1];function h(){return(h=Object(p.a)(f.a.mark((function e(t,n,c){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n||n.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57]|19[0-9])[0-9]{8}$/)){e.next=4;break}return s(!0),c("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u624b\u673a\u53f7"),e.abrupt("return");case 4:if(!n){e.next=12;break}return e.next=7,C({phone:n});case 7:if(!e.sent.data.hasPassword){e.next=12;break}return u.y.show("\u8be5\u624b\u673a\u53f7\u5df2\u6ce8\u518c"),s(!0),e.abrupt("return");case 12:s(!1),c();case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(u.o,{back:"",backArrow:!1,style:{background:"white",boxShadow:"0px 1px 1px rgba(0, 0, 0, 0.16)"},children:"\u6ce8\u518c"}),Object(M.jsxs)(u.i,{form:n,layout:"horizontal",footer:Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(u.c,{onClick:function(){n.validateFields().then((function(e,t){e||S({phone:n.getFieldValue("phone"),captcha:n.getFieldValue("captcha")}).then((function(e){var t;(null===(t=e.data)||void 0===t?void 0:t.data)?function(){var e=n.getFieldsValue();N(e).then((function(e){console.log(e.data)}))}():u.y.show("\u9a8c\u8bc1\u7801\u9519\u8bef")}))}))},block:!0,color:"primary",size:"large",children:"\u6ce8\u518c"}),Object(M.jsx)(u.j.Item,{style:{height:"10px"}}),Object(M.jsx)(u.c,{block:!0,size:"large",onClick:function(){e.history.replace("/login")},children:"\u8fd4\u56de\u767b\u5f55"})]}),children:[Object(M.jsx)(u.i.Item,{label:"\u6635\u79f0",name:"nickname",rules:[{required:!0,message:"\u6635\u79f0\u4e0d\u80fd\u4e3a\u7a7a"}],children:Object(M.jsx)(u.l,{placeholder:"\u8bf7\u8f93\u5165\u6635\u79f0",onChange:function(){}})}),Object(M.jsx)(u.i.Item,{label:"\u624b\u673a\u53f7",rules:[{required:!0,message:"\u624b\u673a\u53f7\u4e0d\u80fd\u4e3a\u7a7a"},{validator:function(e,t,n){return h.apply(this,arguments)}}],name:"phone",children:Object(M.jsx)(u.l,{placeholder:"\u8bf7\u8f93\u5165\u624b\u673a\u53f7",onChange:function(){}})}),Object(M.jsx)(u.i.Item,{label:"\u5bc6\u7801",rules:[{required:!0,message:"\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a"}],name:"password",children:Object(M.jsx)(u.l,{type:"password",placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801",onChange:function(e){Oe=e}})}),Object(M.jsx)(u.i.Item,{label:"\u786e\u8ba4\u5bc6\u7801",rules:[{required:!0,message:"\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a"},{validator:function(e,t,n){t&&t!==Oe&&n("\u5bc6\u7801\u4e0d\u4e00\u81f4"),n()}}],name:"password2",children:Object(M.jsx)(u.l,{type:"password",placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801",onChange:function(){}})}),Object(M.jsx)(u.i.Item,{label:"\u77ed\u4fe1\u9a8c\u8bc1\u7801",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801"}],name:"captcha",extra:Object(M.jsxs)(u.c,{color:"primary",disabled:a,fill:"none",onClick:function(e){k({phone:n.getFieldValue("phone")}).then((function(e){e.data.data?(s(!0),b(60)):u.y.show("\u53d1\u9001\u5931\u8d25")}))},children:["\u53d1\u9001\u9a8c\u8bc1\u7801",j>0?"(".concat(j,"s)"):""]}),children:Object(M.jsx)(u.l,{clearable:!0,placeholder:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801",type:"text",onChange:function(){}})})]})]})};a.a.render(Object(M.jsx)(o.a.StrictMode,{children:Object(M.jsx)(fe.a,{children:Object(M.jsxs)(ce.d,{children:[Object(M.jsx)(ce.b,{path:"/login",component:pe,exact:!0}),Object(M.jsx)(ce.b,{path:"/regist",component:xe,exact:!0}),Object(M.jsx)(ce.b,{path:"/",component:be})]})})}),document.getElementById("root")),he()}},[[537,1,2]]]);
//# sourceMappingURL=main.4c36d589.chunk.js.map