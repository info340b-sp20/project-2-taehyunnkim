(this.webpackJsonpproject2=this.webpackJsonpproject2||[]).push([[0],{108:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(65),o=a.n(i),s=(a(80),a(111)),c=a(112),l=a(113),u=a(114),m=a(115);function d(){return r.a.createElement(s.a,{color:"white",light:!0,expand:"md"},r.a.createElement("div",{className:"container"},r.a.createElement("img",{id:"projectLogo",src:"./img/proj_logo.png",alt:"logo with red connection"}),r.a.createElement(c.a,{href:"/"},"Disaster Live"),r.a.createElement(l.a,{className:"ml-auto",navbar:!0},r.a.createElement(u.a,null,r.a.createElement(m.a,{href:"/about"},"About")),r.a.createElement(u.a,null,r.a.createElement(m.a,{href:"/donate"},"Donate")))))}var p=a(32),f=a(33),g=a(36),h=a(35),b=a(116),v=a(117),E=a(118),w=a(119),y=a(120),j=function(e){Object(g.a)(a,e);var t=Object(h.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(f.a)(a,[{key:"render",value:function(){var e=this.props.organization;return r.a.createElement("a",{target:"_blank",href:e.website,rel:"noopener noreferrer"},r.a.createElement(b.a,{id:e.name,className:"org-card","aria-label":e.name+" card: click to visit their website"},r.a.createElement(v.a,{src:e.image,alt:e.name+" Logo"}),r.a.createElement(E.a,null,r.a.createElement(w.a,null,e.name),r.a.createElement(y.a,null,e.info))))}}]),a}(r.a.Component),O=function(e){Object(g.a)(a,e);var t=Object(h.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(f.a)(a,[{key:"render",value:function(){var e=this.props.organizations.map((function(e){return r.a.createElement(j,{key:e.name,organization:e})}));return r.a.createElement("div",{id:"organization-list",className:"container","aria-label":"list of organizations for donation"},e)}}]),a}(r.a.Component),k=a(66),C=a(28),N=a.n(C),x=a(42),R=a(13),S=a(121),_=a(122),z=a(124),D=a(123),A=a(67),L=a(31),T=a(68),W=a.n(T);function I(e){var t,a=e.disasters,i=Object(n.useState)(0),o=Object(R.a)(i,2),s=o[0],c=o[1],l=[],u=Object(A.a)(a);try{var m=function(){var e=t.value;e.disasters.forEach((function(t){l.push(r.a.createElement(U,{key:t.id,country:e.country,disaster:t}))}))};for(u.s();!(t=u.n()).done;)m()}catch(h){u.e(h)}finally{u.f()}var d=l.length/4,p=4*s,f=p+4,g=[];return g=a.length>4?l.slice(p,f):l,r.a.createElement("div",{className:"card-list-container"},r.a.createElement("div",{id:"card-container"},g),r.a.createElement(W.a,{previousLabel:"<",nextLabel:">",breakLabel:"...",breakClassName:"break-me",pageCount:d,marginPagesDisplayed:1,pageRangeDisplayed:1,forcePage:s,onPageChange:function(e){c(e.selected)},containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active",initialPage:s}))}function U(e){var t=e.country,a=e.disaster;return r.a.createElement(L.b,{to:"/articles/"+t+"-"+a.disasterType+"-"+a.id},r.a.createElement("div",{className:"card","aria-label":a.disasterType+"in"+t},r.a.createElement("h1",null,a.disasterType),r.a.createElement("h2",null,t)))}var H=a(29),M=function(e){var t=e.countries,a=Object(n.useState)([]),i=Object(R.a)(a,2),o=i[0],s=i[1];return Object(n.useEffect)((function(){var e;e=t.map((function(e){var t=e.toLowerCase();return"republic of congo"===t?"republic of the congo":"dr congo"===t?"democratic republic of the congo":t})),s(e)}),[t]),r.a.createElement(H.ComposableMap,{projectionConfig:{rotate:[-10,0,0],scale:147}},r.a.createElement(H.Sphere,{stroke:"#E4E5E6",strokeWidth:.5}),r.a.createElement(H.Graticule,{stroke:"#E4E5E6",strokeWidth:.5}),r.a.createElement(H.Geographies,{geography:"https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json"},(function(e){return e.geographies.map((function(e){var t=o.includes(e.properties.NAME_LONG.toLowerCase());return r.a.createElement(H.Geography,{key:e.rsmKey,geography:e,stroke:"#FFF",fill:t?"#ff6961":"#D6D6DA"})}))})),")}")};function F(){var e=Object(n.useState)([]),t=Object(R.a)(e,2),a=t[0],i=t[1],o=Object(n.useState)([]),s=Object(R.a)(o,2),c=s[0],l=s[1],u=Object(n.useState)([]),m=Object(R.a)(u,2),d=m[0],p=m[1],f=Object(n.useState)(!1),g=Object(R.a)(f,2),h=g[0],b=g[1],v=Object(n.useState)("World"),E=Object(R.a)(v,2),w=E[0],y=E[1];Object(n.useEffect)((function(){(function(){var e=Object(x.a)(N.a.mark((function e(){var t,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J();case 2:t=e.sent,a=t.map((function(e){return e.country})),p(a),i(t),l(t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var j=d.map((function(e){return r.a.createElement(S.a,{key:e,onClick:function(e){var t=a.filter((function(t){return t.country===e.target.textContent}));l(t),y(e.target.textContent)}},e)}));return r.a.createElement("div",{className:"container center"},r.a.createElement(M,{countries:d}),r.a.createElement(_.a,{isOpen:h,toggle:function(){return b((function(e){return!e}))}},r.a.createElement(z.a,{caret:!0},w),r.a.createElement(D.a,null,r.a.createElement(S.a,{onClick:function(){l(a),y("World")}},"World"),j)),r.a.createElement(I,{disasters:c}))}function J(){return fetch("https://api.reliefweb.int/v1/disasters?appname=project2&limit=1000&filter[field]=status&filter[value]=current").then((function(e){return e.json()})).then((function(e){var t=[];return e.data.forEach((function(e){var a=e.fields.name,n=e.id,r=a.indexOf(":"),i=a.indexOf("-");if(-1!==r){var o=a.substring(0,r),s=o.indexOf("/"),c=a.substring(r+2,i-1);if(-1===s)if(0===t.length)t.push({country:o,disasters:[{disasterType:c,id:n}]});else{var l=!0;t.forEach((function(e){e.country===o&&(e.disasters.push({disasterType:c,id:n}),l=!1)})),l&&t.push({country:o,disasters:[{disasterType:c,id:n}]})}else o.split("/").forEach((function(e){if(0===t.length)t.push({country:e,disasters:[{disasterType:c,id:n}]});else{var a=!0;t.forEach((function(t){t.country===e&&(t.disasters.push({disasterType:c,id:n}),a=!1)})),a&&t.push({country:e,disasters:[{disasterType:c,id:n}]})}}))}})),t})).catch((function(e){return console.log(e)}))}function K(e){var t=e.match.params.data,a=t.substring(0,t.indexOf("-")),i=(t=t.substring(t.indexOf("-")+1,t.length)).substring(0,t.indexOf("-")),o=t=t.substring(t.indexOf("-")+1,t.length),s=Object(n.useState)([]),c=Object(R.a)(s,2),l=c[0],u=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(x.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P(o);case 2:t=e.sent,u(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()})),r.a.createElement("div",{id:"disaster-details",className:"container"},r.a.createElement("h1",null,i),r.a.createElement("h3",null,a),r.a.createElement("section",{dangerouslySetInnerHTML:{__html:l}}))}function P(e){var t=fetch("https://api.reliefweb.int/v1/disasters/"+e).then((function(e){return e.json()})).then((function(e){return t=e.data[0].fields.profile["overview-html"]})).catch((function(e){return console.log(e)}));return t}var G=function(e){Object(g.a)(a,e);var t=Object(h.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(f.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container containerText"},r.a.createElement("section",null,r.a.createElement("h1",null,"About"),r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{className:"map-img",src:"./img/simple_map.png",alt:"world map with red dots"})),r.a.createElement("p",null,"Disaster Live is a web application designed by University of Washington students to inform users of world disasters. We created this project as a source of information for users who currently reside in disaster-struck areas or for those travellers planning ahead."),r.a.createElement("p",null,"The Disaster Live webpage contains information on ongoing worldwide disaster, disaster-related news, and global disaster relief organizations. Users may find relevant and current information by using the drop-down menus on the main landing page."),r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{className:"donation-webpage",src:"./img/donationpage.png",alt:"donation webpage"})),r.a.createElement("p",null,'For those who wish to support the organizations listed, the user simply needs to click the "donate" menu from the landing page. From there, the UI will guide them as they select which organization they wish to support. With the simplicity and user-friendly interface of Disaster Live, users have an all-in-one solution for researching and supporting their favorite organizations.'),r.a.createElement("h1",null,"About Team"),r.a.createElement("p",null,"Eric Kim, Jisu Kim, Sharon Lin, and Xi Yan")))}}]),a}(r.a.Component),B=a(9);function X(){return r.a.createElement("footer",null,r.a.createElement("p",null,"\xa9 2020 Eric Kim, Sharon Lin, Jisu Kim, Xi Yan"),r.a.createElement("p",null,"Disaster API: https://reliefweb.int/help/api"),r.a.createElement("p",null,"Organization Details from Wikipedia"))}var Y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,null),r.a.createElement(B.c,null,r.a.createElement(B.a,{exact:!0,path:"/",component:F}),r.a.createElement(B.a,{path:"/articles/:data",component:K}),r.a.createElement(B.a,{path:"/donate"},r.a.createElement(O,{organizations:k})),r.a.createElement(B.a,{path:"/about",component:G})),r.a.createElement(X,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(104);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L.a,null,r.a.createElement(Y,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},66:function(e){e.exports=JSON.parse('[{"name":"American Red Cross","info":"The American Red Cross, also known as The American National Red Cross, is a humanitarian organization that provides emergency assistance, disaster relief, and disaster preparedness education in the United States.","image":"./img/americanredcross.jpg","website":"https://www.redcross.org/"},{"name":"International Rescue Committee","info":"The International Rescue Committee is a global humanitarian aid, relief, and development nongovernmental organization.","image":"./img/1200px-International_Rescue_Committee_Logo.svg.png","website":"https://www.rescue.org/"},{"name":"Direct Relief","info":"Direct Relief is a nonprofit, nonpartisan organization with a stated mission to \u201cimprove the health and lives of people affected by poverty or emergency situations by mobilizing and providing essential medical resources needed for their care.","image":"./img/Direct-Relief-Square.png","website":"https://www.directrelief.org/"},{"name":"World Relief","info":"World Relief is an international nonprofit organization aiming to help vulnerable people","image":"./img/0.png","website":"https://worldrelief.org/"},{"name":"Americares","info":"Americares is a global non-profit organization focused on health and development that respond to individuals affected by poverty, disaster, or crisis.","image":"./img/15395657_640x640.jpg","website":"https://www.americares.org/"},{"name":"United Nations Office for Disaster Risk Reduction (UNDRR)","info":"As the United Nations Office for Disaster Risk Reduction, UNDRR brings governments, partners and communities together reduce disaster risk and losses to ensure a safer, sustainable future.","image":"./img/banner-logo-nuevo-english.png","website":"https://www.undrr.org/"},{"name":"Care International","info":"Care International is a major international humanitarian agency delivering emergency relief and long-term international development projects. ","image":"./img/unnamed.jpg","website":"https://www.care-international.org/"},{"name":"Mercy Corps","info":"Mercy Corps is a global non-governmental, humanitarian aid organization operating in transitional contexts that have undergone, or have been undergoing, various forms of economic, environmental, social and political instabilities.","image":"./img/220px-Mercy_Corps_Logo-e1551237651171.png","website":"https://www.mercycorps.org/"},{"name":"Catholic Relief Services","info":"Catholic Relief Services is the international humanitarian agency of the Catholic community in the United States.","image":"./img/download.png","website":"https://www.crs.org/"},{"name":"All Hands and Hearts \u2013 Smart Response","info":"All Hands And Hearts is a volunteer-powered disaster relief organization that addresses the immediate and long-term needs of communities impacted by natural disasters.","image":"./img/220px-All_Hands_And_Hearts_-_Smart_Response_new_logo_(2018).png","website":"https://www.allhandsandhearts.org/"}]')},75:function(e,t,a){e.exports=a(108)},80:function(e,t,a){}},[[75,1,2]]]);
//# sourceMappingURL=main.3a99e1de.chunk.js.map