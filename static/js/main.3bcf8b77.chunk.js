(this["webpackJsonpcovid-19-tracker"]=this["webpackJsonpcovid-19-tracker"]||[]).push([[0],{20:function(e,a,t){e.exports=t(49)},48:function(e,a,t){},49:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(12),o=t.n(c);function l(e){return r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-title"},r.a.createElement("div",{className:"nav-title-main"},e.title)))}var s=t(2),i=t.n(s),d=t(13),m=t(14),u=t(15),v=t(19),g=t(18),h=t(16),p=t.n(h).a.create({baseURL:"https://covid19.mathdro.id/api"}),E=t(17),b=t.n(E);function f(e){var a=e.color,t=e.category,n=e.count,c=e.ratePercentage;return r.a.createElement("div",{className:"ui raised card"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"description",style:{height:"80px"}},r.a.createElement("div",{className:"ui horizontal statistic"},r.a.createElement("div",{className:"value"},r.a.createElement(b.a,{end:n,separator:","})),r.a.createElement("div",{className:"label"},t)))),r.a.createElement("div",{className:"extra content",style:{backgroundColor:"".concat(a),height:"40px"}},r.a.createElement("span",{className:"right floated",style:{color:"white"}},c)))}var y=function(e){Object(v.a)(t,e);var a=Object(g.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={globalConfirmed:0,globalRecovered:0,globaldeaths:0,lastUpdated:""},e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(d.a)(i.a.mark((function e(){var a,t,n,r,c,o,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get("/");case 2:a=e.sent,console.log(a.data),t=a.data.confirmed.value,n=a.data.recovered.value,r=a.data.deaths.value,c="".concat(new Date(a.data.lastUpdate).toLocaleDateString()," ").concat(new Date(a.data.lastUpdate).toLocaleTimeString()),o="".concat(Math.round(n/t*100)," % Recoverey Rate"),l="".concat(Math.round(r/t*100)," % Fatality Rate"),this.setState({globalConfirmed:t,globalRecovered:n,globaldeaths:r,lastUpdated:c,recoverRatePercentage:o,deathRatePercentage:l});case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,a=e.globalConfirmed,t=e.globalRecovered,n=e.globaldeaths,c=e.recoverRatePercentage,o=e.deathRatePercentage;return r.a.createElement("div",{className:"ui segment basic global-summary"},r.a.createElement("h2",{class:"ui center aligned header"},"Global Status",r.a.createElement("div",{class:"sub header"},"Last updated on ",this.state.lastUpdated,".")),r.a.createElement("div",{className:"ui three cards"},r.a.createElement(f,{color:"orange",category:"Confirmed",count:a,ratePercentage:""}),r.a.createElement(f,{color:"olive",category:"Recovered",count:t,ratePercentage:c}),r.a.createElement(f,{color:"red",category:"Deaths",count:n,ratePercentage:o})))}}]),t}(n.Component);var w=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l,{title:"Covid-19 Tracker",sub:"Global"}),r.a.createElement("div",{style:{padding:"10px"}},r.a.createElement(y,null)))};t(48),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.3bcf8b77.chunk.js.map