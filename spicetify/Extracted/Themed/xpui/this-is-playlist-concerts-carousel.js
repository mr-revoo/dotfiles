<<<<<<< HEAD
"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[3632],{647:(e,t,r)=>{r.d(t,{o:()=>v});var n=r(98866),s=r(58634),a=r(29969),c=r(52618),o=r.n(c),i=r(30040),l=r(34630),u=function(){var e=(0,a.A)(o().mark((function e(t,r){var n,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.aw)(i.n.getInstance(),t,r);case 2:return s=e.sent,e.abrupt("return",null===(n=s.body)||void 0===n?void 0:n.found[0]);case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),d=function(e){var t=(0,n.A)(e.queryKey,2),r=(t[0],t[1]),s=r.username,a=r.concertUri;return u(s,a)},v=function(e){var t=["concertInCollection",e];return(0,s.I)({queryKey:t,queryFn:d,retry:!1,enabled:!!e.username})}},91906:(e,t,r)=>{r.r(t),r.d(t,{ConcertsCarousel:()=>E,default:()=>E});r(83603),r(76133);var n=r(30758),s=r(58184),a=r(73547),c=r(95212),o=r(8539),i=r(72002),l=r(79464),u=(r(59208),r(9555),r(80710),r(80766),r(10866),r(43864),r(18535),r(41681),r(62980),r(75231),r(21977),r(26980),r(46825),r(66569)),d=r(71309),v=r(80047),m=r(69798),f=r(79079),p=r(86070);function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var j=function(e){var t=e.artistName,r=e.artistConcertsUri,n=e.position,a=e.spec,c=(0,l.s)(),i=a.concertsCarouselFactory().allEventsCardFactory({position:n,uri:r}),u=(0,m.t)(i);return(0,p.jsx)("section",{ref:u,children:(0,p.jsx)("div",{className:f.A.cards,children:(0,p.jsx)("div",{className:f.A.allEventsCard,children:(0,p.jsxs)("div",{className:f.A.cardContent,children:[(0,p.jsx)(s.E,{as:"p",variant:"bodySmall",semanticColor:"textSubdued",className:f.A.subtitle,children:o.Ru.get("concerts_on_tour")}),(0,p.jsx)(s.E,{as:"h1",variant:"bodyMediumBold",className:f.A.title,semanticColor:"textBase",children:t}),(0,p.jsx)(v.A,{to:r,className:f.A.cardLink,onClick:function(){var e=i.hitUiNavigate({destination:r});c.logInteraction(e)},children:(0,p.jsx)(d.n,{as:"span",size:"small",className:f.A.cardButton,children:o.Ru.get("concerts_see_all_events")})})]})})})})};const h=function(e){return e.artistName&&e.artistConcertsUri?(0,p.jsx)(j,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){(0,u.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e)):null};var y=r(98866),x=(r(23833),r(41978)),g=r(49599),C=r(94740),O=r(647),A=r(10131),N=r(68688),w=r(30040),P=r(34630),I=r(82092);function B(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var U=function(e){var t=e.concertUri,r=e.concertTitle,a=e.venue,c=e.imageUrl,i=e.date,u=e.spec,d=e.position,b=(0,I.d)().enqueueSnackbar,j=(0,x.d4)(N.F6),h=(0,O.o)({username:j,concertUri:t}),B=(null==h?void 0:h.data)||!1,U=(0,n.useState)(B),k=(0,y.A)(U,2),E=k[0],F=k[1],R=(0,A.l4)(i),S=t.split(":")[2],D=(0,l.s)(),_=u.concertsCarouselFactory().concertCardFactory({position:d,uri:t}),q=(0,m.t)(_),M=function(){var e=_.interestedButtonFactory();E?((0,P.Jr)(w.n.getInstance(),S),b(o.Ru.get("concerts_removed-from-your-saved-events")),D.logInteraction(e.hitRemoveInterest())):((0,P.m9)(w.n.getInstance(),S),b(o.Ru.get("concerts_added-to-your-saved-events")),D.logInteraction(e.hitAddInterest())),F(!E)};return(0,p.jsx)("section",{ref:q,children:(0,p.jsx)("div",{className:f.A.cards,children:(0,p.jsxs)("div",{className:f.A.tourCard,"data-testid":"on-tour-card",children:[c&&(0,p.jsx)("img",{className:f.A.cardImage,src:c,alt:""}),(0,p.jsx)(v.A,{to:t,className:f.A.eventCard,onClick:function(){var e=_.hitUiNavigate({destination:t});D.logInteraction(e)},children:(0,p.jsxs)("div",{className:f.A.cardContent,children:[(0,p.jsx)(s.E,{as:"p",variant:"bodySmall",semanticColor:"textSubdued",className:f.A.subtitle,children:[(0,A.Y)(R),(0,A.WB)(R)].join(" • ")}),(0,p.jsx)(s.E,{as:"h1",variant:"bodyMediumBold",className:f.A.title,semanticColor:"textBase",children:r}),(0,p.jsx)(s.E,{as:"h3",variant:"bodyMediumBold",semanticColor:"textSubdued",className:f.A.venue,children:a})]})}),(0,p.jsx)("div",{className:f.A.interestedIcon,onClick:M,onKeyPress:M,role:"button",tabIndex:0,children:E?(0,p.jsx)(g.k,{semanticColor:"textBrightAccent"}):(0,p.jsx)(C.P,{semanticColor:"textBase"})})]})})})};const k=function(e){return e.concertTitle&&e.concertUri?(0,p.jsx)(U,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?B(Object(r),!0).forEach((function(t){(0,u.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):B(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e)):null};const E=function(e){var t=e.liveEvents,r=e.artistConcertsUri,u=e.artistName,d=e.spec,v=(0,n.useRef)(null),m=(0,l.s)();return(0,p.jsxs)("div",{className:f.A.concertsCarousel,children:[(0,p.jsx)(s.E,{as:"h1",variant:"bodyMediumBold",semanticColor:"textBase",children:o.Ru.get("concerts")}),(0,p.jsxs)("div",{className:f.A.carouselContent,ref:v,children:[t.map((function(e,t){return(0,p.jsx)("div",{className:f.A.eventCard,children:(0,p.jsx)(k,{concertUri:e.uri,concertTitle:e.title,venue:e.venue,imageUrl:e.imageUrl,date:e.startDate,position:t+1,spec:d})},t)})),(0,p.jsx)("div",{className:f.A.eventCard,children:(0,p.jsx)(h,{artistConcertsUri:r,artistName:u,spec:d,position:t.length+1})})]}),t.length>0&&(0,p.jsxs)("div",{className:f.A.concertsCarouselControls,children:[(0,p.jsx)(i.a,{size:"sm",onClick:function(){var e;null===(e=v.current)||void 0===e||e.scrollBy({left:-420,behavior:"smooth"});var t=d.concertsCarouselFactory().previousButtonFactory().hitUiReveal();m.logInteraction(t)},icon:a.g,ariaLabel:o.Ru.get("carousel.left"),tabIndex:-1,className:f.A.carouselControlPrev}),(0,p.jsx)(i.a,{size:"sm",onClick:function(){var e;null===(e=v.current)||void 0===e||e.scrollBy({left:420,behavior:"smooth"});var t=d.concertsCarouselFactory().nextButtonFactory().hitUiReveal();m.logInteraction(t)},icon:c.V,ariaLabel:o.Ru.get("carousel.right"),tabIndex:-1,className:f.A.carouselControlNext})]})]})}}}]);
=======
"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[1021],{14755:(e,t,s)=>{s.d(t,{w:()=>o});var a=s(41194),n=s(13188),r=s(70867);const c=e=>{const[t,{username:s,concertUri:a}]=e.queryKey;return(async(e,t)=>{const s=await(0,r.A0)(n.b.getInstance(),e,t);return s.body?.found[0]})(s,a)},o=e=>{const t=["concertInCollection",e];return(0,a.a)({queryKey:t,queryFn:c,retry:!1,enabled:!!e.username})}},73205:(e,t,s)=>{s.r(t),s.d(t,{ConcertsCarousel:()=>U,default:()=>U});s(86277);var a=s(50959),n=s(69736),r=s(92075),c=s(94260),o=s(85648),i=s(55842),l=s(6370),d=s(60046),u=s(80626),m=s(97607),x=s(11527);const v=e=>{const{artistName:t,artistConcertsUri:s,position:a,spec:r}=e,c=(0,u.$P)(),i=r.concertsCarouselFactory().allEventsCardFactory({position:a,uri:s}),v=(0,u.Wi)(i);return(0,x.jsx)("section",{ref:v,children:(0,x.jsx)("div",{className:m.Z.cards,children:(0,x.jsx)("div",{className:m.Z.allEventsCard,children:(0,x.jsxs)("div",{className:m.Z.cardContent,children:[(0,x.jsx)(n.x,{as:"p",variant:"bodySmall",semanticColor:"textSubdued",className:m.Z.subtitle,children:o.ag.get("concerts_on_tour")}),(0,x.jsx)(n.x,{as:"h1",variant:"bodyMediumBold",className:m.Z.title,semanticColor:"textBase",children:t}),(0,x.jsx)(d.default,{to:s,className:m.Z.cardLink,onClick:()=>{const e=i.hitUiNavigate({destination:s});c.logInteraction(e)},children:(0,x.jsx)(l.P,{as:"span",size:"small",className:m.Z.cardButton,children:o.ag.get("concerts_see_all_events")})})]})})})})},h=e=>e.artistName&&e.artistConcertsUri?(0,x.jsx)(v,{...e}):null;var C=s(35869),g=s(82322),j=s(26520),b=s(14755),y=s(5863),N=s(87350),Z=s(13188),p=s(70867),f=s(19039);const I=e=>{const{concertUri:t,concertTitle:s,venue:r,imageUrl:c,date:i,spec:l,position:v}=e,{enqueueSnackbar:h}=(0,f.D)(),I=(0,C.v9)(N.n5),B=(0,b.w)({username:I,concertUri:t}),U=B?.data||!1,[k,F]=(0,a.useState)(U),_=(0,y.CH)(i),w=t.split(":")[2],S=(0,u.$P)(),E=l.concertsCarouselFactory().concertCardFactory({position:v,uri:t}),P=(0,u.Wi)(E),K=()=>{const e=E.interestedButtonFactory();k?((0,p.FB)(Z.b.getInstance(),w),h(o.ag.get("concerts_removed-from-your-saved-events")),S.logInteraction(e.hitRemoveInterest())):((0,p.l7)(Z.b.getInstance(),w),h(o.ag.get("concerts_added-to-your-saved-events")),S.logInteraction(e.hitAddInterest())),F(!k)};return(0,x.jsx)("section",{ref:P,children:(0,x.jsx)("div",{className:m.Z.cards,children:(0,x.jsxs)("div",{className:m.Z.tourCard,"data-testid":"on-tour-card",children:[c&&(0,x.jsx)("img",{className:m.Z.cardImage,src:c,alt:""}),(0,x.jsx)(d.default,{to:t,className:m.Z.eventCard,onClick:()=>{const e=E.hitUiNavigate({destination:t});S.logInteraction(e)},children:(0,x.jsxs)("div",{className:m.Z.cardContent,children:[(0,x.jsx)(n.x,{as:"p",variant:"bodySmall",semanticColor:"textSubdued",className:m.Z.subtitle,children:[(0,y.xE)(_),(0,y.hK)(_)].join(" • ")}),(0,x.jsx)(n.x,{as:"h1",variant:"bodyMediumBold",className:m.Z.title,semanticColor:"textBase",children:s}),(0,x.jsx)(n.x,{as:"h3",variant:"bodyMediumBold",semanticColor:"textSubdued",className:m.Z.venue,children:r})]})}),(0,x.jsx)("div",{className:m.Z.interestedIcon,onClick:K,onKeyPress:K,role:"button",tabIndex:0,children:k?(0,x.jsx)(g.K,{semanticColor:"textBrightAccent"}):(0,x.jsx)(j.G,{semanticColor:"textBase"})})]})})})},B=e=>e.concertTitle&&e.concertUri?(0,x.jsx)(I,{...e}):null,U=e=>{const{liveEvents:t,artistConcertsUri:s,artistName:l,spec:d}=e,v=(0,a.useRef)(null),C=(0,u.$P)();return(0,x.jsxs)("div",{className:m.Z.concertsCarousel,children:[(0,x.jsx)(n.x,{as:"h1",variant:"bodyMediumBold",semanticColor:"textBase",children:o.ag.get("concerts")}),(0,x.jsxs)("div",{className:m.Z.carouselContent,ref:v,children:[t.map(((e,t)=>(0,x.jsx)("div",{className:m.Z.eventCard,children:(0,x.jsx)(B,{concertUri:e.uri,concertTitle:e.title,venue:e.venue,imageUrl:e.imageUrl,date:e.startDate,position:t+1,spec:d})},t))),(0,x.jsx)("div",{className:m.Z.eventCard,children:(0,x.jsx)(h,{artistConcertsUri:s,artistName:l,spec:d,position:t.length+1})})]}),t.length>0&&(0,x.jsxs)("div",{className:m.Z.concertsCarouselControls,children:[(0,x.jsx)(i.E,{size:"sm",onClick:()=>{v.current?.scrollBy({left:-420,behavior:"smooth"});const e=d.concertsCarouselFactory().previousButtonFactory().hitUiReveal();C.logInteraction(e)},icon:r.e,ariaLabel:o.ag.get("carousel.left"),tabIndex:-1,className:m.Z.carouselControlPrev}),(0,x.jsx)(i.E,{size:"sm",onClick:()=>{v.current?.scrollBy({left:420,behavior:"smooth"});const e=d.concertsCarouselFactory().nextButtonFactory().hitUiReveal();C.logInteraction(e)},icon:c.V,ariaLabel:o.ag.get("carousel.right"),tabIndex:-1,className:m.Z.carouselControlNext})]})]})}}}]);
>>>>>>> origin/master
//# sourceMappingURL=this-is-playlist-concerts-carousel.js.map