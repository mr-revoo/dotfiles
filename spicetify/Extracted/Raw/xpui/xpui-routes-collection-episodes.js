"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[6080],{42094:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(98866),i=r(30758),a=r(33165),o=r(27770),l=r(58184),s=r(95477),c=r(8539),u=r(63994);const d="hOOwEKqNuXrNvOCB1SgZ",A="csEdkIN9z2LjJIuZraqz";var f=r(86070),p=function(e){var t=e.uri,r=(0,u.A)(t),p=(0,n.A)(r,2),g=p[0],E=p[1],h=(0,a.Zp)(),y=(0,i.useCallback)((function(){E(!1),h("/",{replace:!0})}),[h,E]);return(0,f.jsxs)("div",{className:d,children:[(0,f.jsx)(o.b,{size:"xxlarge"}),(0,f.jsxs)("div",{className:A,children:[(0,f.jsx)(l.E,{as:"p",variant:"titleSmall",children:c.Ru.get("forbidden-page.title")}),(0,f.jsx)(l.E,{as:"p",variant:"bodySmall",children:c.Ru.get("forbidden-page.description")})]}),g&&(0,f.jsx)(s.$,{colorSet:"invertedLight",onClick:y,children:c.Ru.get("remove_from_your_library")})]})}},36883:(e,t,r)=>{r.d(t,{M:()=>p});var n=r(66569),i=(r(59208),r(60989),r(9555),r(80710),r(83603),r(80766),r(10866),r(43864),r(18535),r(41681),r(62980),r(75231),r(21977),r(26980),r(76133),r(46825),r(30278)),a=(r(46686),r(63763),r(15525),r(30758));function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var l=[],s=function(e){var t,r=(null===(t=l.find((function(t){return t.key===e})))||void 0===t?void 0:t.heights)||{},i=(0,a.useCallback)((function(t){if(e){var r=l.findIndex((function(t){return t.key===e}));-1===r?l.push({key:e,heights:t}):(l[r].heights=t,l.push(l.splice(r,1)[0])),l.length>10&&l.shift()}}),[e]),s=(0,a.useRef)(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){(0,n.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},r));return(0,a.useEffect)((function(){return function(){i(s.current)}}),[i]),s.current},c=function(e,t){for(var r=[],n=e,i=t;n>0;){var a=Math.ceil(n/i);r.push({first:e-n,nrItems:a}),n-=a,i--}return r},u=r(86070);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,n.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f=function e(t){var r,n,a=t.itemsInNode,o=t.renderItem,l=t.renderPlaceholder,s=t.estimatedHeight,d=t.scrollNodeRef,f=t.nrRowsOverscan,p=void 0===f?10:f,g=t.nrInitialInView,E=void 0===g?0:g,h=t.firstIndex,y=t.heights,m=t.fanOut,x=void 0===m?2:m,b=(0,i.Wx)({root:d.current,rootMargin:"".concat(p*s,"px 0px"),initialInView:h<E}),v=b.ref,C=b.inView,P=b.entry,O="".concat(h,"-").concat(a);null!==(r=y[O])&&void 0!==r||(y[O]=s*a),null!=P&&null!==(n=P.boundingClientRect)&&void 0!==n&&n.height&&(y[O]=P.boundingClientRect.height);var D=y[O];return 0===a?null:C?1===a?(0,u.jsx)("div",{ref:v,role:"presentation",children:o(h,D)}):(0,u.jsx)("div",{ref:v,role:"presentation",children:c(a,x).map((function(r,n){var i=r.first,a=r.nrItems;return(0,u.jsx)(e,A(A({},t),{},{itemsInNode:a,firstIndex:h+i}),n)}))}):(0,u.jsx)("div",{ref:v,role:"presentation",children:l("".concat(D,"px"))})},p=function(e){var t=s(e.persistanceKey);return(0,u.jsx)(f,A(A({},e),{},{itemsInNode:e.totalCount,firstIndex:0,heights:t,nrInitialInView:e.nrInitialInView}))}},55998:(e,t,r)=>{r.r(t),r.d(t,{default:()=>bt});var n,i=r(66569),a=(r(9555),r(62980),r(75231),r(21977),r(30758)),o=r(94740),l=r(17635),s=r(8539),c=r(24942),u=r(57528),d=r(43219),A=r(35242),f=(r(40313),r(24847),r(56168)),p=r(77612),g=(r(82368),r(58470),r(94541)),E=r(68966),h=function(e){return e.SHOW_ALPHABETICAL="SHOW_ALPHABETICAL",e.BOOK_ALPHABETICAL="BOOK_ALPHABETICAL",e.EPISODE_ALPHABETICAL="EPISODE_ALPHABETICAL",e.PLAYLIST_ALPHABETICAL="PLAYLIST_ALPHABETICAL",e.ALBUM_ALPHABETICAL="ALBUM_ALPHABETICAL",e.ADDED_AT="ADDED_AT",e.CREATOR_NAME="CREATOR_NAME",e.CREATOR_NAME_ALPHABETICAL="CREATOR_NAME_ALPHABETICAL",e.ALBUM_CREATOR_NAME="ALBUM_CREATOR_NAME",e.RECENTLY_PLAYED="RECENTLY_PLAYED",e.MOST_RELEVANT="MOST_RELEVANT",e.CUSTOM_ORDER="CUSTOM_ORDER",e}({}),y={"show-alphabetical":h.SHOW_ALPHABETICAL,"book-alphabetical":h.BOOK_ALPHABETICAL,"episode-alphabetical":h.EPISODE_ALPHABETICAL,"playlist-alphabetical":h.PLAYLIST_ALPHABETICAL,"album-alphabetical":h.ALBUM_ALPHABETICAL,"recently-added":h.ADDED_AT,"creator-name":h.CREATOR_NAME,"creator-name-alphabetical":h.CREATOR_NAME_ALPHABETICAL,"album-creator-name":h.ALBUM_CREATOR_NAME,"recently-played":h.RECENTLY_PLAYED,"playlist-most-relevant":h.MOST_RELEVANT,"playlist-custom-order":h.CUSTOM_ORDER},m=(n={},(0,i.A)((0,i.A)((0,i.A)((0,i.A)((0,i.A)((0,i.A)((0,i.A)((0,i.A)((0,i.A)((0,i.A)(n,h.RECENTLY_PLAYED,{key:"recently-played",get value(){return s.Ru.get("collection.sort.recently-played")}}),h.ADDED_AT,{key:"recently-added",get value(){return s.Ru.get("collection.sort.recently-added")}}),h.SHOW_ALPHABETICAL,{key:"show-alphabetical",get value(){return s.Ru.get("collection.sort.alphabetical")}}),h.BOOK_ALPHABETICAL,{key:"book-alphabetical",get value(){return s.Ru.get("collection.sort.alphabetical")}}),h.EPISODE_ALPHABETICAL,{key:"episode-alphabetical",get value(){return s.Ru.get("collection.sort.alphabetical")}}),h.PLAYLIST_ALPHABETICAL,{key:"playlist-alphabetical",get value(){return s.Ru.get("collection.sort.alphabetical")}}),h.ALBUM_CREATOR_NAME,{key:"album-creator-name",get value(){return s.Ru.get("collection.sort.creator")}}),h.CREATOR_NAME,{key:"creator-name",get value(){return s.Ru.get("collection.sort.creator")}}),h.CREATOR_NAME_ALPHABETICAL,{key:"creator-name-alphabetical",get value(){return s.Ru.get("collection.sort.alphabetical")}}),h.ALBUM_ALPHABETICAL,{key:"album-alphabetical",get value(){return s.Ru.get("collection.sort.alphabetical")}}),(0,i.A)((0,i.A)(n,h.MOST_RELEVANT,{key:"playlist-most-relevant",get value(){return s.Ru.get("collection.sort.most-relevant")}}),h.CUSTOM_ORDER,{key:"playlist-custom-order",get value(){return s.Ru.get("collection.sort.custom-order")}}));h.ADDED_AT,h.ALBUM_ALPHABETICAL,h.CREATOR_NAME,(0,i.A)((0,i.A)((0,i.A)({},h.ADDED_AT,{field:p.uY.ADDED_AT,order:p.xB.DESC}),h.ALBUM_ALPHABETICAL,{field:p.uY.NAME,order:p.xB.ASC}),h.CREATOR_NAME,{field:p.uY.ARTIST_NAME,order:p.xB.ASC});h.ADDED_AT,h.CREATOR_NAME_ALPHABETICAL,(0,i.A)((0,i.A)({},h.ADDED_AT,{field:p.af.ADDED_AT,order:p.xB.DESC}),h.CREATOR_NAME_ALPHABETICAL,{field:p.af.NAME,order:p.xB.ASC});h.ADDED_AT,h.SHOW_ALPHABETICAL,(0,i.A)((0,i.A)({},h.ADDED_AT,{field:p.WW.ADDED_AT,order:p.xB.DESC}),h.SHOW_ALPHABETICAL,{field:p.WW.NAME,order:p.xB.ASC});h.ADDED_AT,h.BOOK_ALPHABETICAL,(0,i.A)((0,i.A)({},h.ADDED_AT,p.Ev.ADDED_AT),h.BOOK_ALPHABETICAL,p.Ev.NAME);h.MOST_RELEVANT,h.RECENTLY_PLAYED,h.ADDED_AT,h.PLAYLIST_ALPHABETICAL,h.CUSTOM_ORDER,(0,i.A)((0,i.A)((0,i.A)((0,i.A)((0,i.A)({},h.ADDED_AT,{field:E.nw.ADDED_AT,order:E.xB.DESC}),h.RECENTLY_PLAYED,{field:E.nw.RECENTLY_PLAYED,order:E.xB.ASC}),h.PLAYLIST_ALPHABETICAL,{field:E.nw.NAME,order:E.xB.ASC}),h.MOST_RELEVANT,{field:E.nw.RELEVANCE,order:E.xB.DESC}),h.CUSTOM_ORDER,void 0);h.ADDED_AT,h.ADDED_AT,h.ADDED_AT,h.MOST_RELEVANT,h.ADDED_AT;var x=r(86070),b=function(e){return e===h.ADDED_AT?p.xB.DESC:p.xB.ASC},v={option:h.ADDED_AT,order:p.xB.DESC},C=(0,i.A)((0,i.A)({},p.xB.ASC,p.xB.DESC),p.xB.DESC,p.xB.ASC),P=(0,a.createContext)({setSortState:function(){throw new Error("setSortState must be used within a LibrarySortProvider")},sortState:v}),O=a.memo((function(e){var t=e.uri,r=e.children,n=e.defaultSortOption,i={option:n,order:b(n)};return(0,x.jsx)(f.E,{uri:t,defaultState:i,sortContext:P,children:r})})),D=r(90577),L=r(96331),T=r(46600),j=r(28781),_=r(60093),R=r(46492),I=r(54118),S=r(82342),w=r(70678),k=(r(45803),r(83834)),N=r(67161),B=r(89457),M=r(58400),H=(r(83603),r(76133),r(4414)),U=a.memo((function(e){var t,r=e.sortOptions,n=e.onSort,i=(0,a.useContext)(P),o=i.sortState,l=i.setSortState,s=(0,a.useCallback)((function(e){var t=y[e];null==n||n(t),l(function(e,t,r){return t!==e?{option:e,order:b(e)}:{option:e,order:C[r]}}(t,o.option,o.order))}),[n,l,o.option,o.order]),c=r.map((function(e){return m[e]})),u=m[o.option];return(0,x.jsx)(H.g,{options:c,onSelect:s,selected:u,sortOrder:(t=o.order,t===p.xB.ASC?g.H.ASC:g.H.DESC)})}));const W="gWfUTJg52F5eTzM6M82w";var Y=a.memo((function(e){var t=e.canSort,r=e.canFilter,n=e.filterPlaceholder,i=e.sortOptions,o=(0,M.r)(N.E,{}),l=o.spec,s=o.logger,c=(0,a.useCallback)((function(){s.logInteraction(l.filterFieldFactory().keyStrokeFilter())}),[s,l]),u=(0,a.useCallback)((function(){s.logInteraction(l.filterFieldFactory().hitClearFilter())}),[s,l]);return(0,x.jsxs)("div",{className:W,children:[r?(0,x.jsx)(a.Suspense,{fallback:null,children:(0,x.jsx)(B.S,{placeholder:n,onFilter:c,onClear:u})}):null,t?(0,x.jsx)(U,{sortOptions:i}):null]})})),V=r(55937),F=r(10139),z=r(93655),K=r(44671),G=(r(60989),r(23833),(0,i.A)((0,i.A)((0,i.A)({},p.ci.NAME,d.lU.TITLE),p.ci.SHOW_NAME,d.lU.SHOW),p.ci.ADDED_AT,d.lU.ADDED_AT)),Z=[h.ADDED_AT,h.CREATOR_NAME,h.EPISODE_ALPHABETICAL],q=(0,i.A)((0,i.A)((0,i.A)({},h.ADDED_AT,p.ci.ADDED_AT),h.CREATOR_NAME,p.ci.SHOW_NAME),h.EPISODE_ALPHABETICAL,p.ci.NAME);var Q=function(e,t){if(function(e){return Z.includes(e)}(e))return{field:q[e],order:t}},X=function(e,t){if(Z.includes(e))return function(e){if(null!=e&&e.field){var t=G[e.field];if(t)return d.SL[t].map((function(t){return e.order?"".concat(t," ").concat(e.order):t})).join(",")}}(Q(e,t))};const J="wmGcau34_eXQOX37kUTc",$="Yxy9nPtcdgz7zbBsWVKg";var ee=function(e){var t=e.metadata,r=e.canSort,n=e.backgroundColor,i=e.isPlaying,a=e.isOnline,o=e.togglePlay,l=(0,V.t)(),c=t.uri,u=t.name,d=t.totalLength>0,A=(0,K.j)();return(0,x.jsx)(F.E,{backgroundColor:n,children:(0,x.jsxs)(z.S,{children:[d&&(0,x.jsx)(k.D,{onClick:function(){return o()},isPlaying:i,size:A,uri:c,disabled:!a,ariaPlayLabel:s.Ru.get("playlist.a11y.play",u),ariaPauseLabel:s.Ru.get("playlist.a11y.pause",u)}),r&&(0,x.jsx)("div",{className:$,children:(0,x.jsx)(Y,{canSort:l.getCapabilities().canSort,canFilter:l.getCapabilities().canFilter,filterPlaceholder:s.Ru.get("playlist.search_in_playlist"),sortOptions:Z})})]})})},te=r(59950),re=r(29969),ne=r(98866),ie=r(52618),ae=r.n(ie),oe=(r(59208),r(80710),r(15525),r(26527),r(80766),r(10866),r(43864),r(18535),r(41681),r(26980),r(46825),r(3356)),le=r(93697),se=r(86001),ce=r(17893),ue=r(32028),de=(r(2944),r(87349)),Ae=r(53485),fe=r(51106),pe=r(55897),ge=r(62247),Ee=r(68360);const he="sxxBMk7G1OGo4uYIgPdQ",ye="wpP88qSwGpDQbc_ogyXW";var me=r(37302),xe=r(68262),be=r(52756),ve=r(86116),Ce=r(63994),Pe=r(22840),Oe=r(22058),De=r(54229),Le=r(72368),Te=r(59417),je={small:64,standard:300,large:640,xlarge:1024},_e=a.memo((function(e){var t,r,n,i,o,s,c,u,d,f,p=e.index,g=e.contextUri,E=e.episode,h=e.onRemove,y=e.usePlayContextItem,m=(0,a.useRef)(E.duration.milliseconds-E.timeLeft.milliseconds),b=E.uri,v=(0,a.useState)(0===E.timeLeft.milliseconds),C=(0,ne.A)(v,2),P=C[0],O=C[1],L=(0,a.useContext)(A.g).filter,j=(0,me.P)(),R=j.draggable,I=j.onDragStart,S=(0,ce.y)(),w=(0,xe.W)(),k=(0,Ce.A)(b,!0),N=(0,ne.A)(k,1)[0],B=(0,Te.g)(E.uri,E.isPlayable),M=(0,D.n)(),H=y({uri:b,index:p}),U=H.isPlaying,W=H.isActive,Y=H.togglePlay,V=(0,Pe.S)(1e4,(function(e){var t;return(null==e||null===(t=e.item)||void 0===t?void 0:t.uri)===b})),F=(0,ne.A)(V,1)[0];(0,a.useEffect)((function(){U&&(m.current=F)}),[U,F]);var z=(0,_.P)({uri:b,pages:[{items:[{type:Oe.c.EPISODE,uri:b,uid:null,provider:null}]}]},{featureIdentifier:"your_library",referrerIdentifier:"your_library"}),K=z.isPlaying,G=z.isActive,Z=z.togglePlay;(0,a.useEffect)((function(){N||h()}),[N,h]),(0,a.useEffect)((function(){U||E.duration.milliseconds<=m.current&&O(!0)}),[U,E.duration.milliseconds]);var q=(0,a.useCallback)((function(e){e||(m.current=0),O(e)}),[]),Q=(0,a.useCallback)((function(e){var t;if(e.target===e.currentTarget){var r="".concat(E.name);null!==(t=E.show)&&void 0!==t&&t.name&&(r+=" • ".concat(E.show.name)),I(e,{itemUris:[b],dragLabelText:r,contextUri:g})}}),[g,E.name,null===(t=E.show)||void 0===t?void 0:t.name,b,I]),X=(0,a.useCallback)((function(){w({type:"click",targetUri:b,intent:"navigate"})}),[b,w]),J=(0,a.useCallback)((function(){M?(w({type:"click",intent:U?"pause":"play"}),Y()):(w({type:"click",intent:K?"pause":"play"}),Z())}),[M,U,K,w,Y,Z]),$=(0,a.useCallback)((function(e){return(0,x.jsx)(Le.M,{searchWords:[L],textToHighlight:e})}),[L]),ee=null!==(r=null===(n=E.podcastSubscription)||void 0===n?void 0:n.isPaywalled)&&void 0!==r&&r,te=null!==(i=null===(o=E.podcastSubscription)||void 0===o?void 0:o.isUserSubscribed)&&void 0!==i&&i,re=(0,De.b)({isExplicit:E.isExplicit,isMOGEFRestricted:E.is19PlusOnly,isPaywalled:ee}).badges,ie=!1;(W||!M&&G)&&(ie=!0);var ae=(0,l.NC)(T.cKd,{loadingValue:!1});return N?(0,x.jsxs)(le.pZ,{value:"row",index:p,children:[(0,x.jsx)("hr",{className:he,"aria-hidden":!0}),(0,x.jsx)(de.h,{menu:(0,x.jsx)(Ae.b,{uri:b,contextUri:g,showUri:null===(s=E.show)||void 0===s?void 0:s.uri,isPlayed:P,onMarkAsPlayed:q}),children:ae?(0,x.jsx)(pe.k,{requestId:E.requestId,index:p,uri:b,uid:b,size:S,images:E.images.map((function(e){return{url:e.url,width:e.width||(e.label?je[e.label]:null),height:e.height||(e.label?je[e.label]:null)}})),isPaywalled:ee,isUserSubscribed:te,name:E.name,highlightText:$,showName:null===(c=E.show)||void 0===c?void 0:c.name,showUri:null===(u=E.show)||void 0===u?void 0:u.uri,description:E.description,isPlayable:B,fullyPlayed:P,durationMs:E.duration.milliseconds,releaseDate:E.release.date||"",resumePositionMs:m.current,draggable:R,handleDragStart:Q,handlePlaybackClick:J,handleClick:X,isCurrentlyPlaying:ie,isPlaying:M?U:K,position:ie?F:void 0,episodeSharingInfo:null,onMarkAsPlayed:q,badges:(0,x.jsxs)(x.Fragment,{children:[re.explicit&&(0,x.jsx)(be.g,{}),re.paid&&(0,x.jsx)(Ee.K,{}),re.nineteen&&(0,x.jsx)(ve.q,{size:16})]}),playButtonWrapper:function(e){var t;return(0,x.jsx)(ge.f,{enabled:ee&&!te,showUri:(null===(t=E.show)||void 0===t?void 0:t.uri)||void 0,children:e})}}):(0,x.jsx)(fe.R,{requestId:E.requestId,index:p,uri:b,uid:b,size:S,images:E.images.map((function(e){return{url:e.url,width:e.width||(e.label?je[e.label]:null),height:e.height||(e.label?je[e.label]:null)}})),isPaywalled:ee,isUserSubscribed:te,name:E.name,highlightText:$,showName:null===(d=E.show)||void 0===d?void 0:d.name,showUri:null===(f=E.show)||void 0===f?void 0:f.uri,description:E.description,isPlayable:B,fullyPlayed:P,durationMs:E.duration.milliseconds,releaseDate:E.release.date||"",resumePositionMs:m.current,handleDragStart:Q,handlePlaybackClick:J,handleClick:X,isCurrentlyPlaying:ie,isPlaying:M?U:K,position:ie?F:void 0,episodeSharingInfo:null,onMarkAsPlayed:q,badges:(0,x.jsxs)(x.Fragment,{children:[re.explicit&&(0,x.jsx)(be.g,{}),re.paid&&(0,x.jsx)(Ee.K,{}),re.nineteen&&(0,x.jsx)(ve.q,{size:16})]}),playButtonWrapper:function(e){var t;return(0,x.jsx)(ge.f,{enabled:ee&&!te,showUri:(null===(t=E.show)||void 0===t?void 0:t.uri)||void 0,children:e})}})})]}):null}));function Re(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Ie(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Re(Object(r),!0).forEach((function(t){(0,i.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Re(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Se=a.memo((function(e){var t=e.contextUri,r=e.usePlayContextItem,n=(0,a.useContext)(j.Z),o=(0,a.useContext)(P).sortState,l=(0,a.useState)({totalLength:0,unfilteredTotalLength:0,offset:0,items:[],limit:50}),s=(0,ne.A)(l,2),c=s[0],u=s[1],d=(0,a.useRef)(!1),f=(0,a.useRef)(0),p=(0,a.useRef)(0),g=(0,a.useContext)(A.g).filter,E=(0,a.useCallback)((function(){p.current++}),[]),h=(0,ue.x)((0,i.A)((0,i.A)({},se.E.MEDIUM,0),se.E.LARGE,600)),y=h.ref,m=h.breakpoint,b=(0,a.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=function(){var e=(0,re.A)(ae().mark((function e(t){var r;return ae().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.getEpisodes({offset:t-p.current,limit:50,sort:Q(o.option,o.order),filter:g});case 2:return r=e.sent,p.current=0,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r=f.current;null!==r&&(d.current||(d.current=!0,t(Number(r)).then((function(t){u((function(n){var i=Number(t.offset)+t.items.length,a=e?[]:(0,te.A)(n.items);return a.splice.apply(a,[Number(r),t.items.length].concat((0,te.A)(t.items))),f.current=i<t.totalLength?i:null,Ie(Ie({},t),{},{items:a})})),d.current=!1}))))}),[g,n,o]);return(0,a.useEffect)((function(){f.current=0,b(!0)}),[b]),(0,x.jsx)(ce.o.Provider,{value:m,children:(0,x.jsx)(le.pZ,{value:"track-list",children:(0,x.jsx)("div",{ref:y,children:(0,x.jsx)(oe._,{onReachBottom:b,triggerOnInitialLoad:!0,children:c.items.map((function(e,n){return(0,x.jsx)("div",{className:ye,children:(0,x.jsx)(_e,{index:n,episode:e,contextUri:t,onRemove:E,usePlayContextItem:r},"".concat(e.uri,"/").concat(n))},"".concat(n).concat(e.uri))}))})})})})})),we=r(58184),ke=r(64741),Ne=r(79851),Be=r(61350),Me=r(18520),He=r(51414),Ue=r(66932),We=r(7138),Ye=r(74460),Ve=r(88352),Fe=function(e){var t=e.metadata,r=e.backgroundColor,n=e.isPlaying,i=e.isOnline,o=e.togglePlay,l=t.uri,c=t.name,u=t.images,d=t.totalLength,A=t.owner,f=(0,a.useMemo)((function(){return{id:A.username,uri:A.uri,name:A.username,displayName:A.displayName||void 0,images:A.images||[]}}),[A]);return(0,x.jsxs)(Me.z,{backgroundColor:r,children:[(0,x.jsxs)(ke.h,{children:[(0,x.jsx)(k.D,{size:"medium",onClick:function(){return o()},isPlaying:n,uri:l,disabled:!i,ariaPlayLabel:s.Ru.get("playlist.a11y.play",c),ariaPauseLabel:s.Ru.get("playlist.a11y.pause",c)}),(0,x.jsx)(Ne.X,{text:c})]}),(0,x.jsx)(He.K,{images:u,name:c,shape:Be.u.ROUNDED_CORNERS,renderImage:function(){return(0,x.jsx)(Ve.b,{})}}),(0,x.jsxs)(Ue.Y,{children:[(0,x.jsx)(we.E,{variant:"bodySmallBold",children:s.Ru.get("playlist")}),(0,x.jsx)(Ye.mm,{canEdit:!1,onClick:function(){},children:c}),(0,x.jsx)(We.t,{creators:[f],totalItems:d,hasEpisodes:!0})]})]})},ze=r(41978),Ke=r(96839),Ge=r(68688),Ze=r(33165),qe=r(94411),Qe=r(36883),Xe=r(85670),Je=r(67208),$e=(0,a.createContext)(null);function et(e){var t=e.children,r=e.playlist;return(0,x.jsx)($e.Provider,{value:r,children:t})}function tt(){var e=(0,a.useContext)($e);if(null===e)throw new Error("Trying to use 'ListPlatformDataContext' without 'ListPlatformDataProvider'!");return e}var rt=r(37916),nt=r(76875),it=function(e){var t=(0,l.NC)(T.G6N);return(0,a.useMemo)((function(){return{metadataOptions:{decorateFormatListData:!0,withSync:!0,hydrateCollaboratorsWithMembers:t},contentsOptions:{offset:0,limit:25,filter:e}}}),[t,e])};function at(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ot(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?at(Object(r),!0).forEach((function(t){(0,i.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):at(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var lt=(0,a.createContext)(null);function st(e){var t=e.children,r=tt(),n=(0,a.useContext)(nt.w),i=(0,a.useContext)(A.g).filter,o=it(i).contentsOptions,l=(0,a.useCallback)(function(){var e=(0,re.A)(ae().mark((function e(t,i){var a;return ae().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.getContents(r.metadata.uri,ot(ot({},o),{},{offset:t,limit:i}));case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),[n,o,r.metadata.uri]),s=(0,rt.E)({nrItems:r.contents.totalLength,fetch:l,limit:50,initialItems:r.contents.items});return(0,x.jsx)(lt.Provider,{value:s,children:t})}var ct=function(e){var t=e.renderItem,r=(0,Xe.v7)(),n=function(){var e=(0,a.useContext)(lt);if(null===e)throw new Error("Trying to use 'ListPlatformItemsContext' without 'ListPlatformItemsProvider'!");return e}(),i=n.getItem,o=n.nrValidItems,l=n.invalidateCache,s=tt().metadata;(0,Je.H)(s.uri,l);var c=(0,a.useCallback)((function(e){return(0,x.jsx)("div",{style:{height:e}})}),[]),u=(0,a.useCallback)((function(e,r){var n=i(e);return n?t(n,e):c("".concat(r,"px"))}),[i,t,c]),d="POP"===(0,Ze.wQ)()?0:10;return(0,x.jsx)(qe.R,{firstInteractiveIsWrapper:!0,"aria-rowcount":o,"aria-colcount":6,children:(0,x.jsx)(Qe.M,{totalCount:o,estimatedHeight:200,renderItem:u,renderPlaceholder:c,scrollNodeRef:r,nrRowsOverscan:10,persistanceKey:s.uri,nrInitialInView:d})})};const ut="GoSuH0kHfyFDx68nwg1T";var dt=a.memo((function(e){var t=e.usePlayContextItem,r=e.contextUri,n=(0,ue.x)((0,i.A)((0,i.A)({},se.E.MEDIUM,0),se.E.LARGE,600)),o=n.ref,l=n.breakpoint,s=(0,a.useCallback)((function(e,n){return(0,x.jsx)("div",{className:ut,children:(0,x.jsx)(_e,{index:n,episode:e,contextUri:r,onRemove:function(){},usePlayContextItem:t},"".concat(e.uri,"/").concat(n))},"".concat(n).concat(e.uri))}),[r,t]);return(0,x.jsx)(ce.o.Provider,{value:l,children:(0,x.jsx)(le.pZ,{value:"track-list",children:(0,x.jsx)("div",{ref:o,children:(0,x.jsx)(ct,{renderItem:s})})})})})),At=r(6541),ft=r(42094),pt=function(e){var t=e.children,r=e.uri,n=(0,a.useContext)(nt.w).getCapabilities(),i=(0,a.useContext)(A.g).filter,o=it(i),l=o.metadataOptions,c=o.contentsOptions,d=(0,At.W)(r,l,c),f=d.data,p=d.isLoading,g=d.isError;return!f||p?(0,x.jsx)(u.A,{hasError:g,errorMessage:s.Ru.get("error.not_found.title.playlist"),loadOffline:n.canModifyOffline}):f.metadata.permissions&&!f.metadata.permissions.canView?(0,x.jsx)(ft.Z,{uri:r}):(0,x.jsx)(et,{playlist:f,children:t})},gt=function(e){var t=e.children,r=e.uri;return(0,x.jsx)(A.s,{uri:r,children:(0,x.jsx)(pt,{uri:r,children:(0,x.jsx)(st,{children:t})})})};const Et="zX8QX7OLPnU9eLrJV3Cd";var ht=function(){var e=(0,L.z)("#006450"),t=(0,D.n)(),r=(0,ze.d4)(Ge.Ht).user,n=tt().metadata,i=(0,_.P)({uri:n.uri,metadata:{}},{featureIdentifier:"your_library",referrerIdentifier:"your_library"},{shuffle:!1,repeat:I.p.REPEAT_NONE}),a=i.isPlaying,l=i.togglePlay,u=i.usePlayContextItem,d=r?(0,Ke.fH)(r.id,"your-episodes").toURI():"";return(0,x.jsxs)("section",{className:Et,"data-testid":"your-episodes-page",children:[(0,x.jsx)(S.Q,{children:s.Ru.get("sidebar.your_episodes")}),(0,x.jsx)(Fe,{metadata:n,backgroundColor:e,isPlaying:a,isOnline:t,togglePlay:l}),(0,x.jsxs)("div",{children:[(0,x.jsx)(ee,{metadata:n,backgroundColor:e,isPlaying:a,isOnline:t,togglePlay:l,canSort:!1}),(0,x.jsx)("div",{className:"contentSpacing",children:n.totalLength>0?(0,x.jsx)(dt,{usePlayContextItem:u,contextUri:d}):(0,x.jsx)(c.p,{message:s.Ru.get("collection.empty-page.episodes-subtitle"),title:s.Ru.get("collection.empty-page.episodes-title"),linkTo:"/genre/podcasts-web",linkTitle:s.Ru.get("collection.empty-page.shows-cta"),renderInline:!0,children:(0,x.jsx)(o.P,{"aria-hidden":"true"})})})]})]})};const yt=(0,a.memo)((function(){return(0,x.jsx)(gt,{uri:"spotify:playlist:37i9dQZF1FgnTBfUlzkeKt",children:(0,x.jsx)(ht,{})})}));var mt=function(e){var t=e.metadata,r=e.canSort,n=(0,L.z)("#006450"),l=(0,D.n)(),u=(0,a.useContext)(P).sortState,f=(0,a.useContext)(A.g).filter,p=(0,_.P)({uri:t.uri,metadata:(0,i.A)((0,i.A)({},R.W.SORTING_CRITERIA,X(u.option,u.order)),R.W.FILTERING_PREDICATE,(0,d.ly)(f))},{featureIdentifier:"your_library",referrerIdentifier:"your_library"},{shuffle:!1,repeat:I.p.REPEAT_NONE}),g=p.isPlaying,E=p.togglePlay,h=p.usePlayContextItem;return(0,x.jsxs)("section",{className:J,"data-testid":"your-episodes-page",children:[(0,x.jsx)(S.Q,{children:s.Ru.get("sidebar.your_episodes")}),(0,x.jsx)(Fe,{metadata:t,backgroundColor:n,isPlaying:g,isOnline:l,togglePlay:E}),(0,x.jsxs)("div",{children:[(0,x.jsx)(ee,{metadata:t,backgroundColor:n,isPlaying:g,isOnline:l,togglePlay:E,canSort:r}),(0,x.jsx)("div",{className:"contentSpacing",children:t.totalLength>0?(0,x.jsx)(Se,{contextUri:t.uri,usePlayContextItem:h}):(0,x.jsx)(c.p,{message:s.Ru.get("collection.empty-page.episodes-subtitle"),title:s.Ru.get("collection.empty-page.episodes-title"),linkTo:"/genre/podcasts-web",linkTitle:s.Ru.get("collection.empty-page.shows-cta"),renderInline:!0,children:(0,x.jsx)(o.P,{"aria-hidden":"true"})})})]})]})},xt=(0,a.memo)((function(){var e=(0,a.useContext)(j.Z).getCapabilities(),t=(0,w.u)();return t?(0,x.jsx)(O,{uri:t.uri,defaultSortOption:h.ADDED_AT,children:(0,x.jsx)(A.s,{uri:t.uri,children:(0,x.jsx)(mt,{metadata:t,canSort:e.canSortTracksAndEpisodes&&t.totalLength>0})})}):(0,x.jsx)(u.A,{hasError:!1,errorMessage:s.Ru.get("error.not_found.title.page"),loadOffline:e.canModifyOffline})}));const bt=(0,a.memo)((function(){return(0,l.NC)(T.ucV)?(0,x.jsx)(yt,{}):(0,x.jsx)(xt,{})}))}}]);
//# sourceMappingURL=xpui-routes-collection-episodes.js.map