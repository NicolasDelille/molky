(this.webpackJsonpmolky=this.webpackJsonpmolky||[]).push([[0],[,,,,function(e,n,t){e.exports={Board:"Board_Board__2Vm6-",Buttons:"Board_Buttons__29Nyt",Row:"Board_Row__3xdzD",Action:"Board_Action__-eJqV"}},,function(e,n,t){e.exports={Button:"Button_Button__3R1xi",selected:"Button_selected__1LYm5"}},,function(e,n,t){e.exports={WinnerPage:"WinnerBanner_WinnerPage__ZHNK6",WinnerBanner:"WinnerBanner_WinnerBanner__1Ll-z"}},,,function(e,n,t){e.exports={Table:"Score_Table__3uOIQ"}},function(e,n,t){e.exports={Game:"Game_Game__2P9KR"}},function(e,n,t){e.exports={App:"App_App__16ZpL"}},,,,,,function(e,n,t){},,function(e,n,t){"use strict";t.r(n);var a=t(1),c=t.n(a),r=t(10),o=t.n(r),i=(t(19),t(9)),s=t(14),u=t(2),l=t(6),j=t.n(l),d=t(0),b=function(e){var n=e.selected,t=e.value,a=e.onClick;return Object(d.jsx)("button",{onClick:a,type:"button",className:n?"".concat(j.a.Button," ").concat(j.a.selected):j.a.Button,children:t})},m=t(11),O=t.n(m),v=function(e){var n=e.scoreBoard;return Object(d.jsxs)("table",{className:O.a.Table,children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Name"}),Object(d.jsx)("th",{children:"Score"})]})}),Object(d.jsx)("tbody",{children:n.map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.name}),Object(d.jsx)("td",{children:e.score})]},e.name)}))})]})},x=t(8),h=t.n(x),_=function(e){var n=e.winner,t=e.onNewGame;return Object(d.jsx)("div",{className:h.a.WinnerPage,children:Object(d.jsxs)("div",{className:h.a.WinnerBanner,children:[Object(d.jsxs)("p",{children:[n," a gagn\xe9!"]}),Object(d.jsx)("button",{onClick:function(){t()},children:"Nouvelle Partie"})]})})},f=t(4),p=t.n(f),B=[[{value:7},{value:9},{value:8}],[{value:5},{value:11},{value:12},{value:6}],[{value:3},{value:10},{value:4}],[{value:1},{value:2}]],N=function(e){var n=e.onPlay,t=e.winner,c=e.scoreBoard,r=e.onNewGame,o=Object(a.useState)(),i=Object(u.a)(o,2),s=i[0],l=i[1];return Object(d.jsxs)("div",{className:p.a.Board,children:[Object(d.jsxs)("div",{className:p.a.Buttons,children:[B.map((function(e,n){return Object(d.jsx)("div",{className:p.a.Row,children:e.map((function(e){return Object(d.jsx)(b,{value:e.value,onClick:function(){return n=e.value,void l((function(e){return e===n?null:n}));var n},selected:s===e.value},e.value)}))},n)})),t&&Object(d.jsx)(_,{winner:t,onNewGame:r})]}),Object(d.jsx)(v,{scoreBoard:c}),Object(d.jsxs)("div",{className:p.a.Action,children:[Object(d.jsx)("button",{onClick:function(){n(s),l()},disabled:!0,children:"Annuler"}),Object(d.jsx)("button",{onClick:function(){n(s),l()},disabled:t,children:"Valider"})]})]})},g=t(12),w=t.n(g),y=function(e){var n=e.currentPlayer;return Object(d.jsx)("div",{className:w.a.Game,children:n})},P=t(13),k=t.n(P),C=[{name:"Martin"},{name:"Thibaut"},{name:"Nicolas"},{name:"Corentin"},{name:"Benjamin"}],G=C.map((function(e){return{name:e.name,score:0}}));var S=function(){var e=C,n=Object(a.useState)(e[0].name),t=Object(u.a)(n,2),c=t[0],r=t[1],o=Object(a.useState)([]),l=Object(u.a)(o,2),j=l[0],b=l[1],m=Object(a.useState)(null),O=Object(u.a)(m,2),v=O[0],x=O[1],h=Object(a.useState)(G),_=Object(u.a)(h,2),f=_[0],p=_[1];return Object(d.jsxs)("div",{className:k.a.App,children:[Object(d.jsx)(y,{currentPlayer:c}),Object(d.jsx)(N,{onPlay:function(e){var n=e,t=!1;void 0===e&&(n=0),b([].concat(Object(s.a)(j),[{player:c,score:n}]));var a=f.map((function(e){return c===e.name?(e.score+n>=50&&(x(c),t=!0,console.log("GameOver: ".concat(t))),Object(i.a)(Object(i.a)({},e),{},{score:e.score+n})):e}));if(p(a),!t){var o=(C.findIndex((function(e){return e.name===c}))+1)%C.length;r(C[o].name)}},winner:v,scoreBoard:f,onNewGame:function(){p(G),x(null)}})]})},A=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,22)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,r=n.getLCP,o=n.getTTFB;t(e),a(e),c(e),r(e),o(e)}))};o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(S,{})}),document.getElementById("root")),A()}],[[21,1,2]]]);
//# sourceMappingURL=main.d4313855.chunk.js.map