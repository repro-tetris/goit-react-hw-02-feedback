(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var c,a,r=n(1),i=n.n(r),o=n(5),s=n.n(o),u=n(6),l=n(7),j=n(8),b=n(11),d=n(10),h=n(0),v=function(e){var t=e.title,n=e.children;return Object(h.jsxs)("section",{children:[Object(h.jsx)("h2",{children:t}),n]})},O=n(2),f=n(3),x=f.a.button(c||(c=Object(O.a)(["\n  padding: 8px;\n  margin-left: 4px;\n  margin-right: 4px;\n  cursor: pointer;\n  border-radius: 8px;\n  &:hover {\n    background-color: greenyellow;\n  }\n"]))),g=function(e){var t=e.title,n=e.onClick;return Object(h.jsx)(x,{onClick:function(){return n()},children:t})},p=function(e){var t=e.options,n=e.onLeaveFeedback,c=Object.keys(t);return Object(h.jsx)("div",{children:c.map((function(e){return Object(h.jsx)(g,{title:e,onClick:function(){n(e)}},e)}))})},k=f.a.p(a||(a=Object(O.a)(["\n  span {\n    margin-left: 8px;\n  }\n"]))),m=function(e){var t=e.title,n=e.value;return Object(h.jsxs)(k,{children:[t,":",Object(h.jsx)("span",{children:n})]})},F=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,r=e.positivePercentage;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(m,{title:"Good",value:t}),Object(h.jsx)(m,{title:"Neutral",value:n}),Object(h.jsx)(m,{title:"Bad",value:c}),Object(h.jsx)(m,{title:"Total",value:a}),Object(h.jsx)(m,{title:"Positive feedback",value:r})]})},P=function(e){var t=e.message;return Object(h.jsx)("p",{children:t})},w=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}))},e.countPositiveFeedbackPercentage=function(){var t=e.state.good,n=e.countTotalFeedback();return 0===n?"%":Math.round(100*t/n)+"%"},e.handleButton=function(t){e.setState((function(e){return Object(u.a)({},t,e[t]+1)}))},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,c=e.bad,a=this.countTotalFeedback();return Object(h.jsxs)("div",{children:[Object(h.jsx)(v,{title:"Please leave feedback",children:Object(h.jsx)(p,{options:this.state,onLeaveFeedback:this.handleButton})}),Object(h.jsx)(v,{title:"Statistics",children:a>0?Object(h.jsx)(F,{good:t,neutral:n,bad:c,total:a,positivePercentage:this.countPositiveFeedbackPercentage()}):Object(h.jsx)(P,{message:"No feedback given"})})]})}}]),n}(i.a.Component);n(21);s.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(w,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.0a4f58f3.chunk.js.map