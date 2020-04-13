(this["webpackJsonpcovid-19-ve"]=this["webpackJsonpcovid-19-ve"]||[]).push([[0],{158:function(e,t,a){},159:function(e,t,a){},160:function(e,t,a){},165:function(e,t,a){},166:function(e,t,a){},167:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(26),s=a.n(o),c=a(4),i=a.n(c),l=a(10),d=a(44),u=a(45),m=a(49),f=a(50),h=function(e){var t="".concat("https://api.covid19api.com/country/venezuela/status/").concat(e,"/live");return new Promise(function(){var e=Object(l.a)(i.a.mark((function e(a,n){var r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,{"Access-Control-Allow-Origin":"https://api.covid19api.com"});case 3:r=e.sent,o=r.json(),a(o),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),n(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,a){return e.apply(this,arguments)}}())},p=function(){var e=Object(l.a)(i.a.mark((function e(){var t,a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("confirmed");case 2:return t=e.sent,e.next=5,h("recovered");case 5:return a=e.sent,e.next=8,h("deaths");case 8:return n=e.sent,console.log({confirmed:t,recovered:a,deaths:n}),e.abrupt("return",Promise.all([t,a,n]).then((function(e){return{confirmed:e[0],recovered:e[1],deaths:e[2]}}),(function(e){return e})));case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=(a(57),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Footer"},r.a.createElement("div",null,r.a.createElement("h1",null,"Designed with \u2764 by"," ",r.a.createElement("a",{href:"https://github.com/CodingLeonardo",target:"_blank",className:"Footer-link",rel:"noopener noreferrer"},"@LeonardoCoding")))))}),b=(a(58),function(e){var t=e.children;return r.a.createElement("div",{className:"Layout"},r.a.createElement("div",{className:"Layout-app"},r.a.createElement("div",null,t)),r.a.createElement(v,null))}),E=(a(59),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Header"},r.a.createElement("h1",{className:"Header-title"},"Covid-19 - ",r.a.createElement("span",{className:"Header-ven"},"Ven"),r.a.createElement("span",{className:"Header-ezu"},"ezu"),r.a.createElement("span",{className:"Header-ela"},"ela"))))}),g=a(27),C=a(47),k=a.n(C),y=function(e){var t=e.data,a=e.title;return n.createElement(g.a,{width:0,height:0,data:t,options:{responsive:!0,scales:{xAxes:[{gridLines:{display:!1},ticks:{beginAtZero:!0}}]},title:{display:!0,text:a,fontSize:20,padding:30,fontColor:"#01113E"},legend:{position:"bottom",labels:{padding:25,boxWidth:25,fontColor:"black"}},tooltips:{backgroundColor:"#072D95",titleFontSize:20,xPadding:20,yPadding:20,bodyFontSize:15,bodySpacing:10,mode:"x-axis"},elements:{line:{borderWidth:4,fill:!1},point:{borderWidth:2,backgroundColor:"white"}}}})},N=function(e){var t=e.data;return n.createElement(g.b,{width:0,height:0,data:t,options:{title:{display:!0,text:"Todos los casos totales de COVID-19 Venezuela",fontSize:20,padding:30,fontColor:"#01113E"},legend:{position:"bottom",labels:{padding:25,boxWidth:25,fontColor:"black"}},tooltips:{backgroundColor:"#072D95",titleFontSize:20,xPadding:20,yPadding:20,bodyFontSize:15,bodySpacing:10},elements:{arc:{}}}})},x=function(e){var t=e.data,a=e.type,r=t.confirmed,o=t.recovered,s=t.deaths;if("Line"===a)return n.createElement(y,{title:"Todos los casos desde el primer reporte COVID-19 Venezuela",data:{labels:r.map((function(e){return new Intl.DateTimeFormat("es-VE",{month:"long",day:"numeric"}).format(new Date(e.Date))})),datasets:[{label:"Confirmados",data:r.map((function(e){return e.Cases})),borderColor:"#E8BF13"},{label:"Recuperados",data:o.map((function(e){return e.Cases})),borderColor:"#01113E"},{label:"Muertes",data:s.map((function(e){return e.Cases})),borderColor:"#A4061C"}]}});if("Pie"===a){var c=r[r.length-1].Cases,i=o[o.length-1].Cases,l=s[s.length-1].Cases;return n.createElement(N,{data:{labels:["Confirmados","Recuperados","Muertes"],datasets:[{backgroundColor:["#E8BF13","#01113E","#A4061C"],borderColor:["#E8BF13","#01113E","#A4061C"],data:[c,i,l]}]}})}if("LineProyection"===a){var d=(new k.a).proyectionRange(30,r[r.length-1].Cases,r[r.length-2].Cases);return n.createElement(y,{title:"Proyeccion de los casos confirmados de COVID-19 Venezuela",data:{labels:d.map((function(e){return"".concat(e.Day," Dia")})),datasets:[{label:"Confirmados",data:d.map((function(e){return e.Cases})),borderColor:"#E8BF13"}]}})}return""},w=(a(158),function(e){var t=e.children;return r.a.createElement("div",{className:"ContainerChart"},t)}),F=function(e){var t=e.charts;return r.a.createElement("div",{className:"ContainerCharts"},t.map((function(e,t){return r.a.createElement(w,{key:t},r.a.createElement(x,{data:e.data,type:e.type}))})))},P=(a(159),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"sk-cube-grid"},r.a.createElement("div",{className:"sk-cube sk-cube1"}),r.a.createElement("div",{className:"sk-cube sk-cube2"}),r.a.createElement("div",{className:"sk-cube sk-cube3"}),r.a.createElement("div",{className:"sk-cube sk-cube4"}),r.a.createElement("div",{className:"sk-cube sk-cube5"}),r.a.createElement("div",{className:"sk-cube sk-cube6"}),r.a.createElement("div",{className:"sk-cube sk-cube7"}),r.a.createElement("div",{className:"sk-cube sk-cube8"}),r.a.createElement("div",{className:"sk-cube sk-cube9"})))}),D=(a(160),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"PageLoading"},r.a.createElement(P,null)))}),z=a(48),L=a.n(z),O=(a(165),function(e){var t=e.message;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"PageError"},r.a.createElement("h1",{className:"PageError-message"},t)))}),S=function(e){Object(f.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={charts:["Line","Pie"],data:{confirmed:[],recovered:[],deaths:[]},loading:!1,error:null},e}return Object(u.a)(a,[{key:"fetchData",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({loading:!0}),p().then((function(e){t.setState({loading:!1,data:{confirmed:e.confirmed,recovered:e.recovered,deaths:e.deaths}})}),(function(e){console.log(e),t.setState({loading:!1,error:e})}));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"renderCharts",value:function(){return this.state.loading?r.a.createElement(D,null):this.state.error?r.a.createElement(O,{message:this.state.error.message}):!this.state.loading&&this.state.data.confirmed.length>0&&this.state.data.recovered.length>0&&this.state.data.deaths.length>0?r.a.createElement(L.a,null,r.a.createElement(E,null),r.a.createElement(F,{charts:[{data:{confirmed:this.state.data.confirmed,recovered:this.state.data.recovered,deaths:this.state.data.deaths},type:"Line"},{data:{confirmed:this.state.data.confirmed,recovered:[],deaths:[]},type:"LineProyection"},{data:{confirmed:this.state.data.confirmed,recovered:this.state.data.recovered,deaths:this.state.data.deaths},type:"Pie"}]})):void 0}},{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,null,this.renderCharts()))}}]),a}(n.Component);a(166);s.a.render(r.a.createElement(S,null),document.getElementById("app"))},51:function(e,t,a){e.exports=a(167)},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){}},[[51,1,2]]]);
//# sourceMappingURL=main.4593a016.chunk.js.map