(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e){e.exports={spotify:{authorize:{url:"https://accounts.spotify.com/authorize",method:"GET",example:"https://accounts.spotify.com/authorize?client_id=5fe01282e94241328a84e7c5cc169164&redirect_uri=http:%2F%2Fexample.com%2Fcallback&scope=user-read-private%20user-read-email&response_type=token&state=123",response_char:{type:"queryString",values:{success:{access_token:"",token_type:"",expires_in:"",state:""},error:{error:"access_denied",state:""}}},params:{type:"queryString",values:{client_id:{required:!0},response_type:{required:!0,default:"token"},redirect_uri:{required:!0,default:"http://localhost:3000/"},state:{required:!1},scope:{required:!1},show_dialog:{required:!1}}}}}}},28:function(e){e.exports={spotify:{web_api_base_url:"https://api.spotify.com",client_id:"cc06663b77eb4129898db96d87f41e26",secret:"f7e93094aaca4807925f6cbf16f78252"}}},38:function(e,t,n){e.exports=n(58)},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(33),o=n.n(c),i=(n(43),n(44),n(45),n(9)),l=n(10),s=n(12),u=n(11),m=n(13),p=(n(46),n(73)),d=n(72),f=(a.Component,function(e){return r.a.createElement("input",{type:"text",placeholder:"search"})}),h=function(e){return r.a.createElement("div",null,"Search results")},v=function(e){return r.a.createElement("div",null,"Artist Banner")},b=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"Album Grid")}}]),t}(a.Component),E=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={songs:[{name:"song 1"},{name:"song 2"}]},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,this.state.songs&&r.a.createElement("ul",null,this.state.songs.map(function(e){return r.a.createElement("li",null,"song.name")})))}}]),t}(a.Component),y=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"Track Player")}}]),t}(a.Component),g=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p.a,{position:"static",color:"default"},r.a.createElement(d.a,null,r.a.createElement(f,null),r.a.createElement("div",{style:{flex:"1"}}))),r.a.createElement("div",{className:"dash-container"},r.a.createElement("div",{className:"search-container"},r.a.createElement(h,null)),r.a.createElement("div",{className:"artist-container"},r.a.createElement("div",{className:"artist-banner"},r.a.createElement(v,null)),r.a.createElement("div",{className:"album-container"},r.a.createElement("div",{className:"album-grid"},r.a.createElement(b,null)),r.a.createElement("div",{className:"album-songs"},r.a.createElement(E,null)))),r.a.createElement("div",{className:"track-player"},r.a.createElement(y,null))))}}]),t}(a.Component),_=n(35),w=n(18),O=n(28),j=n(23),k=function(){console.log("config"),console.log(O),console.log("URLS"),console.log(j);var e={response_type:j.spotify.authorize.params.values.response_type.default,client_id:O.spotify.client_id,redirect_uri:j.spotify.authorize.params.values.redirect_uri.default},t=function(e,t){var n="";for(var a in t)if(t.hasOwnProperty(a)){var r=t[a];n+=a+"="+encodeURIComponent(r)+"&"}n.length>0&&(n=n.substring(0,n.length-1),e=e+"?"+n);return e}(j.spotify.authorize.url,e);window.location=t};var N=function(){var e=window.location.hash.substring(1).split("&").reduce(function(e,t){if(t){var n=t.split("=");e[n[0]]=decodeURIComponent(n[1])}return e},{});return window.location.hash="",e.access_token||k(),r.a.createElement(_.a,{style:{height:"100%"}},r.a.createElement("div",{className:"App"},r.a.createElement(w.c,null,r.a.createElement(w.a,{path:"/",component:g}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[38,1,2]]]);
//# sourceMappingURL=main.648ae2f8.chunk.js.map