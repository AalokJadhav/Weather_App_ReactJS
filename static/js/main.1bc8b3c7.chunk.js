(this.webpackJsonpweather_app=this.webpackJsonpweather_app||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),n=a(6),r=a.n(n),i=(a(12),a(13),a(5),a.p+"static/media/footer_logo.bcea899f.png"),l=a(0),o=function(){var e=(new Date).getFullYear();return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("footer",{className:"footer",children:[Object(l.jsx)("span",{className:"footer_span",style:{float:"left",paddingLeft:"8%"},children:Object(l.jsx)("img",{src:i,style:{height:"35px",paddingBottom:"1%"},alt:""})}),Object(l.jsxs)("div",{className:"footer__copyright",children:["Made with ",Object(l.jsx)("span",{style:{color:"red"},children:"\u2764\ufe0f"}),"\xa0 by\xa0",Object(l.jsxs)("a",{className:"footer_link",target:"_blank",rel:"noreferrer",href:"https://github.com/AalokJadhav",children:[" ","Alok Jadhav"]}),Object(l.jsxs)("span",{className:"footer_span",style:{float:"right",paddingRight:"10%"},children:[" \xa9 ",e," | All rights reserved."]})]})]})})},j=a(3),h=a.n(j),d=a(7),b=a(4),p=function(){var e=Object(s.useState)(null),t=Object(b.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(),r=Object(b.a)(n,2),i=r[0],o=r[1];return Object(s.useEffect)((function(){var e=function(){var e=Object(d.a)(h.a.mark((function e(){var t,a,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="http://api.openweathermap.org/data/2.5/weather?q=".concat(i,"&units=metric&appid=ed1e00e80be4245950828394a0ebada3"),e.next=3,fetch(t);case 3:return a=e.sent,e.next=6,a.json();case 6:s=e.sent,console.log(s),c(s.main);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[i]),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"box",children:[Object(l.jsx)("div",{className:"inputData",children:Object(l.jsx)("input",{placeholder:"Enter Your City..",type:"search",value:i,className:"inputField",onChange:function(e){o(e.target.value)}})}),a?Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"info",children:[Object(l.jsxs)("h2",{className:"location ",children:[Object(l.jsx)("i",{className:"fas fa-street-view",style:{color:"magenta"}}),"\xa0",i]}),Object(l.jsxs)("h1",{className:"temp",children:[a.temp,"\xb0Cel"]}),Object(l.jsxs)("h3",{className:"tempmin_max",children:["Min ",a.temp_min,"\xb0Cel   | Max ",a.temp_max,"\xb0Cel"]})]}),Object(l.jsx)("div",{className:"wave -one"}),Object(l.jsx)("div",{className:"wave -two"}),Object(l.jsx)("div",{className:"wave -three"})]}):Object(l.jsx)("p",{className:"errorMsg",children:"No Data Found..!"})]})})};var u=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{className:"heading",children:"Welcome to Weather App "}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)(p,{}),Object(l.jsx)(o,{})]})},m=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),s(e),c(e),n(e),r(e)}))};r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(u,{})}),document.getElementById("root")),m()},5:function(e,t,a){}},[[16,1,2]]]);
//# sourceMappingURL=main.1bc8b3c7.chunk.js.map