(this["webpackJsonpcovid-19-ve"]=this["webpackJsonpcovid-19-ve"]||[]).push([[0],{18:function(e,t,a){e.exports=a(41)},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(11),l=a.n(c),r=a(12),i=a(13),o=a(16),m=a(17),u=a(14),d=a.n(u),h=function(e,t){var a="https://api.covid19api.com/country/venezuela/status/".concat(e,"/live");try{d.a.get(a).then((function(a){"confirmed"===e&&t.setState({confirmed:a.data}),"recovered"===e&&t.setState({recovered:a.data}),"deaths"===e&&t.setState({deaths:a.data})}))}catch(n){console.error(n)}},b=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"flex items-center justify-center w-full h-10 bg-tertiary-100 shadow-inner"},s.a.createElement("div",null,s.a.createElement("h1",{className:"text-white"},"Designed with \u2764 by"," ",s.a.createElement("a",{href:"https://github.com/LeonardoCoding",target:"_blank",className:"underline",rel:"noopener noreferrer"},"@LeonardoCoding")))))},v=a(15),f=a.n(v),p={particles:{number:{value:88,density:{enable:!0,value_area:700}},color:{value:["#aa73ff","#f8c210","#83d238","#33b1f8"]},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:15}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1.5,opacity_min:.15,sync:!1}},size:{value:3,random:!1,anim:{enable:!0,speed:2,size_min:.15,sync:!1}},line_linked:{enable:!0,distance:110,color:"#33b1f8",opacity:.25,width:2},move:{enable:!0,speed:5,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"bubble"},onclick:{enable:!1,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:10,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0},E=function(e){var t=e.children;return s.a.createElement("div",{className:"flex justify-center items-center absolute"},s.a.createElement("div",{className:"absolute z-10"},t),s.a.createElement(f.a,{className:"h-almost absolute w-screen bg-secondary-200",params:p}))},y=function(e){var t=e.children;return s.a.createElement("div",{className:"h-full w-full"},s.a.createElement("div",{className:"flex justify-center items-center h-almost"},s.a.createElement(E,null,t)),s.a.createElement("div",{className:"h-10"},s.a.createElement(b,null)))},g=function(e){var t,a=e.status,n=e.cases;return"Confirmados"===a&&(t="hover:bg-primary-500"),"Recuperados"===a&&(t="hover:bg-tertiary-400"),"Muertes"===a&&(t="hover:bg-secondary-400"),s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"container-cases mobile-s:w-full mobile-m:w-full mobile-l:w-full p-6 transition duration-500 rounded hover:text-white ".concat(t)},s.a.createElement("h1",{className:"text-2xl"},a),s.a.createElement("span",null,n)))},x=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"sk-cube-grid"},s.a.createElement("div",{className:"sk-cube sk-cube1"}),s.a.createElement("div",{className:"sk-cube sk-cube2"}),s.a.createElement("div",{className:"sk-cube sk-cube3"}),s.a.createElement("div",{className:"sk-cube sk-cube4"}),s.a.createElement("div",{className:"sk-cube sk-cube5"}),s.a.createElement("div",{className:"sk-cube sk-cube6"}),s.a.createElement("div",{className:"sk-cube sk-cube7"}),s.a.createElement("div",{className:"sk-cube sk-cube8"}),s.a.createElement("div",{className:"sk-cube sk-cube9"})))},k=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"flex justify-center items-center h-screen bg-secondary-100"},s.a.createElement(x,null)))},N=(a(40),function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={confirmed:[],recovered:[],deaths:[]},e}return Object(i.a)(a,[{key:"fetchData",value:function(){h("confirmed",this),h("recovered",this),h("deaths",this)}},{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){return this.state.confirmed.length||this.state.recovered.length||this.state.deaths.length?this.state.confirmed.length>0&&this.state.recovered.length>0&&this.state.deaths.length>0?s.a.createElement(s.a.Fragment,null,s.a.createElement(y,null,s.a.createElement("div",{className:"flex justify-center items-center flex-col"},s.a.createElement("div",null,s.a.createElement("h1",{className:"text-5xl text-center mobile-s:text-4xl mobile-m:text-4xl mobile-l:text-4xl text-gray-900 "},"Covid-19 - ",s.a.createElement("span",{className:"text-primary-300"},"Ven"),s.a.createElement("span",{className:"text-tertiary-300"},"ezu"),s.a.createElement("span",{className:"text-secondary-300"},"ela"))),s.a.createElement("div",{className:"container-flex w-full flex-row h-64 mobile-s:h-auto mobile-s:flex-col mobile-m:h-auto mobile-m:flex-col mobile-l:h-auto mobile-l:flex-col shadow-2xl rounded bg-primary-300"},s.a.createElement(g,{status:"Confirmados",cases:this.state.confirmed[this.state.confirmed.length-1].Cases}),s.a.createElement(g,{status:"Recuperados",cases:this.state.recovered[this.state.recovered.length-1].Cases}),s.a.createElement(g,{status:"Muertes",cases:this.state.deaths[this.state.deaths.length-1].Cases}))))):"":s.a.createElement(k,null)}}]),a}(n.Component));l.a.render(s.a.createElement(N,null),document.getElementById("app"))}},[[18,1,2]]]);
//# sourceMappingURL=main.fcd7381c.chunk.js.map