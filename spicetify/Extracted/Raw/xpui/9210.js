"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[9210],{19210:(e,t,i)=>{i.r(t),i.d(t,{SNACKBAR_ID:()=>j,default:()=>C});var n=i(29969),r=i(98866),a=i(52618),o=i.n(a),u=(i(39350),i(82860),i(53005),i(30758)),c=i(25741),s=i(48346),f=i(70675),l=i(8539),d=(i(83603),i(11034),i(88287),i(92031),i(76133),i(67187)),g=i(80687),m=i(58184),v=i(95477);const p="dRD7dgAMZVRuTdelaf6B",h="sFr9SHK1H3ZYdz2_jWqY",b="AckhtqapSIpyTPpQGw7y";var R=i(86070),_="dialog-robot";var x=function(){var e,t,i=(0,u.useState)(!0),n=(0,r.A)(i,2),a=n[0],o=n[1];return a?(0,R.jsx)(g.j,{"data-testid":_,id:_,"aria-label":"Dialog robot",dialogTitle:l.Ru.get("user-fraud-verification.dialog-alert.title"),colorSet:"invertedLight",className:p,body:(0,R.jsx)(m.E,{as:"p",children:(e=l.Ru.get("user-fraud-verification.dialog-alert.describe"),t=function(e){return(0,R.jsx)(d.N_,{to:"/playlist/37i9dQZF1DWUcRrhkfhG22",className:h,children:e},e)},e.split(/(\{0\}.*)\{1\}/).map((function(e){return e.startsWith("{0}")?t(e.split("{0}")[1]):e})))}),footer:(0,R.jsx)(v.$,{className:b,onClick:function(){return o(!1)},children:l.Ru.get("user-fraud-verification.dialog-alert.ok")})}):null},A=i(65982),T=i(43810),k=i(30040),I=i(20176),N=i(92975),w=i(3532),y=i(82543),S=i(27338),j="snackbar-user-fraud-verification";const C=function(e){var t=e.verificationId,i=(0,u.useRef)(Date.now()),a=(0,u.useState)(!1),d=(0,r.A)(a,2),g=d[0],m=d[1],v=(0,u.useState)(!1),p=(0,r.A)(v,2),h=p[0],b=p[1],_=(0,u.useState)(!1),C=(0,r.A)(_,2),D=C[0],F=C[1],O=(0,w.vh)(),P=function(){var e=(0,w.vh)();return(0,A.n)({mutationFn:function(e){var t=k.n.getInstance();return(0,I.s)(t,e)},onError:function(t,i){e.send((0,T.D)({id:i,method:"IN_APP_VERIFICATION_V0",error_message:t instanceof N.O?t.message:null,http_method:"put",http_path:"/verification/".concat(i)}))}}).mutate}(),V=(0,S.d)(),E=V.isTrustedRef,q=V.isTrustedFn,W=function(){var e=(0,n.A)(o().mark((function e(n,r){var a,u;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Date.now()-i.current,u=r.type,e.next=4,q(r);case 4:O.send((0,f.Y)({id:t,method:"IN_APP_VERIFICATION_V0",action:n,interaction_details:{reaction_time:"".concat(a),event_triggered:JSON.stringify({type:u,isTrusted:E.current})}})),t&&P(t);case 6:case"end":return e.stop()}}),e)})));return function(t,i){return e.apply(this,arguments)}}();return h?null:D?(0,R.jsx)(x,{}):g?(0,R.jsx)(c.qb,{"data-testid":j,className:(0,s.Ju)("announcement"),showSnackbar:!0,children:l.Ru.get("user-fraud-verification.snackbar.message")}):(0,R.jsx)(y.T,{"aria-label":l.Ru.get("user-fraud-verification.confirm-dialog.title"),titleText:l.Ru.get("user-fraud-verification.confirm-dialog.title"),descriptionText:l.Ru.get("user-fraud-verification.confirm-dialog.description"),onConfirm:function(e){W("human",e),m(!0)},onClose:function(e){W("robot",e),F(!0)},onOutside:function(e){W("robot",e),b(!0)},confirmText:l.Ru.get("user-fraud-verification.confirm-dialog.confirm"),confirmLabel:l.Ru.get("user-fraud-verification.confirm-dialog.label"),cancelText:l.Ru.get("user-fraud-verification.confirm-dialog.cancel")})}}}]);
//# sourceMappingURL=9210.js.map