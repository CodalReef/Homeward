(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{112:function(t,e,n){t.exports=n(164)},144:function(t,e,n){t.exports=n.p+"static/media/share.67ac1dde.png"},145:function(t,e,n){t.exports=n.p+"static/media/more.5d38f063.png"},146:function(t,e,n){t.exports=n.p+"./fonts/Poppins-ExtraBoldItalic.ttf"},147:function(t,e,n){t.exports=n.p+"./fonts/Poppins-Black.ttf"},148:function(t,e,n){t.exports=n.p+"./fonts/Poppins-BlackItalic.ttf"},149:function(t,e,n){t.exports=n.p+"./fonts/Poppins-Bold.ttf"},150:function(t,e,n){t.exports=n.p+"./fonts/Poppins-BoldItalic.ttf"},151:function(t,e,n){t.exports=n.p+"./fonts/Poppins-ExtraLight.ttf"},152:function(t,e,n){t.exports=n.p+"./fonts/Poppins-ExtraLightItalic.ttf"},153:function(t,e,n){t.exports=n.p+"./fonts/Poppins-Italic.ttf"},154:function(t,e,n){t.exports=n.p+"./fonts/Poppins-Light.ttf"},155:function(t,e,n){t.exports=n.p+"./fonts/Poppins-LightItalic.ttf"},156:function(t,e,n){t.exports=n.p+"./fonts/Poppins-Medium.ttf"},157:function(t,e,n){t.exports=n.p+"./fonts/Poppins-MediumItalic.ttf"},158:function(t,e,n){t.exports=n.p+"./fonts/Poppins-Regular.ttf"},159:function(t,e,n){t.exports=n.p+"./fonts/Poppins-SemiBold.ttf"},160:function(t,e,n){t.exports=n.p+"./fonts/Poppins-SemiBoldItalic.ttf"},161:function(t,e,n){t.exports=n.p+"./fonts/Poppins-Thin.ttf"},162:function(t,e,n){t.exports=n.p+"./fonts/Poppins-ThinItalic.ttf"},164:function(t,e,n){"use strict";n.r(e),n.d(e,"unpackAsset",(function(){return C})),n.d(e,"default",(function(){return L}));var o=n(7),i=n.n(o),r=n(10),a=n.n(r),c=n(8),s=n.n(c),l=n(9),p=n.n(l),u=n(2),f=n.n(u),d=n(14),m=n.n(d),h=n(169),y=n(110),g=n(170),P=n(0),E=n(57),x=(n(163),n(58)),v=n(108),w=n(27),B=n(5);function I(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=f()(t);if(e){var i=f()(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return p()(this,n)}}var S=function(t){var e=t.text,n=t.title,o=t.onPress;return P.createElement(B.a,{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}},P.createElement(B.a,{style:{borderRadius:20,backgroundColor:"white",alignItems:"center",justifyContent:"center"}},P.createElement(w.a,{style:{fontFamily:"Poppins-SemiBold",color:"#444444",fontSize:20}},n),P.createElement(w.a,{onPress:o,style:{fontFamily:"Poppins-SemiBold",color:o?"blue":"#444444",fontSize:15}},e)))},b=function(t){var e=t.text;return P.createElement(S,{text:e,title:"Error"})},R=function(t){s()(o,t);var e=I(o);function o(){return i()(this,o),e.apply(this,arguments)}return a()(o,[{key:"componentDidMount",value:function(){var t=this;window.onfocus=function(){return t.forceUpdate()}}},{key:"render",value:function(){var t,e,o=window.location,i=o.origin,r=o.pathname,a=new URLSearchParams(window.location.search),c=a.get("link"),s=a.get("manifest");if(!c||!s)return P.createElement(S,{title:"Welcome to Homeward",text:"Click Here for Usage Instruction",onPress:function(){return v.a.openURL("https://github.com/CodalReef/Homeward")}});var l=decodeURIComponent(c),p=JSON.parse(decodeURIComponent(s)),u=a.get("timestamp");if(null!=u){if(!p)return P.createElement(b,{text:"No Manifest Provided"});if(!l)return P.createElement(b,{text:"No Link Provided"});var f=new Blob([JSON.stringify(p)],{type:"application/json"}),d=URL.createObjectURL(f);null==(t=document.getElementById("manifest-link"))||t.setAttribute("href",d);var m=p.icons,h=(void 0===m?[]:m).find((function(t){return"180x180"===t.sizes}));null==(e=document.getElementById("apple-touch-icon-link"))||e.setAttribute("href",(null==h?void 0:h.src)||""),document.body.style.backgroundColor=p.theme_color||"white";var y=navigator.appVersion.toLowerCase(),g=y.includes("ios")&&y.includes("safari"),E=y.includes("android")&&y.includes("chrome"),I=p.name&&p.name[0]||"U",R=Number.parseInt(u);return(new Date).getTime()-R<=1e4?P.createElement(B.a,{style:{height:"100%",width:"100%",backgroundColor:p.theme_color,alignItems:"center",paddingTop:85}},P.createElement(w.a,{style:{color:"white",fontSize:200,fontWeight:"900"}},I),P.createElement(B.a,{style:{height:70}}),g&&P.createElement(B.a,{style:{borderRadius:20,backgroundColor:"white",alignItems:"center",justifyContent:"center"}},P.createElement(w.a,{style:{fontFamily:"Poppins-SemiBold",color:"#444444",fontSize:15,padding:15}},"Tap the"),P.createElement(x.a,{source:n(144),resizeMode:"cover",style:{width:30,height:30,borderRadius:7}}),P.createElement(w.a,{style:{fontFamily:"Poppins-SemiBold",color:"#444444",fontSize:15,padding:15}},"button below to Save to Homescreen.")),E&&P.createElement(B.a,{style:{borderRadius:20,backgroundColor:"white",alignItems:"center",justifyContent:"center"}},P.createElement(w.a,{style:{fontFamily:"Poppins-SemiBold",color:"#444444",fontSize:15,padding:15}},"Tap the"),P.createElement(x.a,{source:n(145),resizeMode:"cover",style:{width:30,height:30,borderRadius:7}}),P.createElement(w.a,{style:{fontFamily:"Poppins-SemiBold",color:"#444444",fontSize:15,padding:15}},"button above to Save to Homescreen.")),!g&&!E&&P.createElement(B.a,{style:{borderRadius:20,backgroundColor:"white",alignItems:"center",justifyContent:"center"}},P.createElement(w.a,{style:{fontFamily:"Poppins-SemiBold",color:"#444444",fontSize:15,padding:15}},"Use the Browser"),P.createElement(w.a,{style:{fontFamily:"Poppins-SemiBold",color:"#444444",fontSize:15,padding:15}},"to Save to Homescreen."))):null===l?P.createElement(w.a,null,name," + No Link was Provided"):(window.location.replace(l),P.createElement(B.a,{style:{height:"100%",width:"100%",backgroundColor:p.theme_color,alignItems:"center",paddingTop:80}},P.createElement(w.a,{style:{color:"white",fontSize:200,fontWeight:"900"}},I),P.createElement(B.a,{style:{height:70}}),P.createElement(B.a,{style:{borderRadius:20,backgroundColor:"white",alignItems:"center",justifyContent:"center"}},P.createElement(w.a,{style:{fontFamily:"Poppins-SemiBold",color:"#444444",fontSize:15,padding:15}},"Added to Homescreen"))))}var k="?";a.forEach((function(t,e){return k+=e+"="+encodeURIComponent(t)+"&"}));var C=""+i+r+(k+="timestamp="+(new Date).getTime().toString());window.location.replace(C)}}]),o}(P.Component);function k(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=f()(t);if(e){var i=f()(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return p()(this,n)}}console.disableYellowBox=!0;var C=function(t){return t},L=function(t){s()(o,t);var e=k(o);function o(){var t;i()(this,o);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={fontsAreLoaded:!1},t}return a()(o,[{key:"componentWillMount",value:function(){return m.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.awrap(g.a({"Poppins-ExtraBoldItalic":C(n(146)),"Poppins-Black":C(n(147)),"Poppins-BlackItalic":C(n(148)),"Poppins-Bold":C(n(149)),"Poppins-BoldItalic":C(n(150)),"Poppins-ExtraBold":C(n(83)),"Poppins-ExtraItalic":C(n(83)),"Poppins-ExtraLight":C(n(151)),"Poppins-ExtraLightItalic":C(n(152)),"Poppins-Italic":C(n(153)),"Poppins-Light":C(n(154)),"Poppins-LightItalic":C(n(155)),"Poppins-Medium":C(n(156)),"Poppins-MediumItalic":C(n(157)),"Poppins-Regular":C(n(158)),"Poppins-SemiBold":C(n(159)),"Poppins-SemiBoldItalic":C(n(160)),"Poppins-Thin":C(n(161)),"Poppins-ThinItalic":C(n(162))}));case 2:this.setState({fontsAreLoaded:!0});case 3:case"end":return t.stop()}}),null,this,null,Promise)}},{key:"render",value:function(){return this.state.fontsAreLoaded?P.createElement(P.Fragment,null,P.createElement(E.a,{hidden:!1}),P.createElement(R,null)):P.createElement(y.a,null)}}]),o}(P.Component);Object(h.a)(L)},83:function(t,e,n){t.exports=n.p+"./fonts/Poppins-ExtraBold.ttf"}},[[112,1,2]]]);
//# sourceMappingURL=app.4e838f46.chunk.js.map