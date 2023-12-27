"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[988],{30:function(e,r,n){n.d(r,{a:function(){return l},k:function(){return u}});var t=n(861),a=n(439),s=n(757),i=n.n(s),c=n(791),o=n(972),u=function(){var e=(0,c.useState)([]),r=(0,a.Z)(e,2),n=r[0],s=r[1],u=(0,c.useState)(null),p=(0,a.Z)(u,2),l=p[0],f=p[1],d=(0,c.useState)(!1),v=(0,a.Z)(d,2),h=v[0],x=v[1];return(0,c.useEffect)((function(){x(!0);var e=function(){var e=(0,t.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.XT)();case 3:r=e.sent,s(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),f(e.t0.message);case 10:return e.prev=10,x(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),{movies:n,error:l,isLoading:h}},p=n(689),l=function(){var e=(0,c.useState)([]),r=(0,a.Z)(e,2),n=r[0],s=r[1],u=(0,c.useState)(null),l=(0,a.Z)(u,2),f=l[0],d=l[1],v=(0,c.useState)(!1),h=(0,a.Z)(v,2),x=h[0],m=h[1],g=(0,p.UO)().movieId;return(0,c.useEffect)((function(){if(m(!0),g){var e=function(){var e=(0,t.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.TP)(g);case 3:r=e.sent,s(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),d(e.t0.message);case 10:return e.prev=10,m(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(){return e.apply(this,arguments)}}();e()}}),[g]),{movie:n,error:f,isLoading:x}}},988:function(e,r,n){n.r(r),n.d(r,{default:function(){return h}});var t=n(87),a="GoBackBtn_back__GzHdy",s=n(184),i=function(e){var r=e.path;return(0,s.jsxs)(t.rU,{to:r,className:a,children:["Go back"," "]})},c="MovieInfo_img__fx+Ux",o="MovieInfo_title__oNnRW",u="MovieInfo_info__z1mCF",p=function(e){var r=e.movie,n=r.title,t=r.poster_path,a=r.release_date,i=r.vote_average,p=r.overview,l=r.genres;if(l){var f=l.map((function(e){return e.name})).join(", ");return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{style:{display:"flex",gap:"10px"},children:[(0,s.jsx)("img",{className:c,src:t?"https://image.tmdb.org/t/p/w500/".concat(t):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:n,width:250}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("h2",{className:o,children:[n," ",a[0],a[1],a[2],a[3]]}),(0,s.jsxs)("p",{className:u,children:["User Score: ",Math.round(10*i),"%"]}),(0,s.jsx)("p",{className:o,children:"Overview"}),(0,s.jsx)("p",{className:u,children:p}),(0,s.jsx)("p",{className:o,children:"Genres"}),(0,s.jsx)("p",{className:u,children:f})]})]}),(0,s.jsx)("h3",{className:o,children:"Additional information"})]})}},l=n(30),f=n(791),d=n(154),v=n(689),h=function(){var e,r,n=(0,l.a)(),a=n.movie,c=n.error,o=n.isLoading,u=(0,v.TH)(),h=(0,f.useRef)(null!==(e=null===(r=u.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/");return(0,s.jsxs)(s.Fragment,{children:[o&&(0,s.jsx)(d.Z1,{visible:!0,height:"100",width:"100",color:"#4fa94d",ariaLabel:"three-circles-loading",wrapperStyle:{margin:"0 47%"}}),c&&(0,s.jsx)("h2",{children:"Something went wrong"}),(0,s.jsx)(i,{path:h.current}),(0,s.jsx)(p,{movie:a}),(0,s.jsxs)("ul",{style:{listStyle:"none",display:"flex",gap:"10px"},children:[(0,s.jsx)("li",{children:(0,s.jsx)(t.rU,{to:"cast",style:{margin:"0",padding:"5px",color:"rgb(56, 35, 1)",fontWeight:"400",lineHeight:"120%",border:"1px solid rgb(201, 166, 109)",borderRadius:"10px",boxShadow:"0px 2px 10px 1px rgb(212, 186, 145)",textDecoration:"none"},children:"Cast"})}),(0,s.jsx)("li",{children:(0,s.jsx)(t.rU,{to:"reviews",style:{margin:"0",padding:"5px",color:"rgb(56, 35, 1)",fontWeight:"400",lineHeight:"120%",border:"1px solid rgb(201, 166, 109)",borderRadius:"10px",boxShadow:"0px 2px 10px 1px rgb(212, 186, 145)",textDecoration:"none"},children:"Reviews"})})]}),(0,s.jsx)(f.Suspense,{fallback:(0,s.jsx)("div",{children:"Loading subpage..."}),children:(0,s.jsx)(v.j3,{})})]})}},972:function(e,r,n){n.d(r,{Ph:function(){return u},TP:function(){return o},XT:function(){return c},tx:function(){return l},zv:function(){return p}});var t=n(861),a=n(757),s=n.n(a),i=n(294);i.Z.defaults.baseURL="https://api.themoviedb.org/3";var c=function(){var e=(0,t.Z)(s().mark((function e(){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/trending/all/day",{params:{api_key:"e6063733392c5a83365cb21715c07af9"}});case 2:return r=e.sent,n=r.data.results,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,t.Z)(s().mark((function e(r){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(r),{params:{api_key:"e6063733392c5a83365cb21715c07af9"}});case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),u=function(){var e=(0,t.Z)(s().mark((function e(r){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("search/movie",{params:{query:r,api_key:"e6063733392c5a83365cb21715c07af9"}});case 2:return n=e.sent,t=n.data.results,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(s().mark((function e(r){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(r,"/credits"),{params:{api_key:"e6063733392c5a83365cb21715c07af9"}});case 2:return n=e.sent,t=n.data.cast,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(s().mark((function e(r){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(r,"/reviews"),{params:{api_key:"e6063733392c5a83365cb21715c07af9"}});case 2:return n=e.sent,t=n.data.results,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=988.5bd8c3e3.chunk.js.map