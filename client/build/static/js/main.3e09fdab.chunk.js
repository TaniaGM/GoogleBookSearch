(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{18:function(e,t,n){e.exports=n(47)},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},3:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(12),c=n.n(l),i=n(13),o=n(14),u=n(17),s=n(16);n(23);var m=function(){return r.a.createElement("div",{className:"jumbotron text-center"},r.a.createElement("h1",null,"Tania's Book Club"),r.a.createElement("p",null,"Stop reading crap and find a good book!"))};n(24);var h=function(e){return r.a.createElement("div",{className:"wrapper"},e.children)};n(3);var p=function(){return r.a.createElement("nav",{className:"navbar navbar-dark bg-blue"},r.a.createElement("a",{className:"navbar-brand",href:"/"},"TBC"))};n(25);var d=function(e){return r.a.createElement("div",{className:"input-group input-group-lg",id:"inputDiv"},r.a.createElement("input",Object.assign({className:"form-control",id:"searchInput",type:"text"},e)))};n(26);var f=function(e){var t=e.type,n=void 0===t?"default":t,a=e.className,l=e.children,c=e.onClick;return r.a.createElement("button",{onClick:c,className:["btn btn-lg","btn-".concat(n),a].join(" ")},l)},E=n(15),v=n.n(E),b=function(e){return v.a.get("/api/search",{params:{query:e}})};n(44);var k=function(e){var t=e.src;return r.a.createElement("div",{className:"thumbnail",role:"img","aria-label":"Book Image",style:{backgroundImage:"url(".concat(t,")")}})};function g(e){var t=e.fluid,n=e.children;return r.a.createElement("div",{className:"container".concat(t?"-fluid":"")},n)}function y(e){var t=e.fluid,n=e.children;return r.a.createElement("div",{className:"row".concat(t?"-fluid":"")},n)}function N(e){var t=e.size,n=e.children;return r.a.createElement("div",{className:t.split(" ").map((function(e){return"col-"+e})).join(" ")},n)}n(45);function S(e){var t=e.children;return r.a.createElement("ul",{className:"list-group"},t)}function x(e){var t=e.thumbnail,n=void 0===t?"https://placehold.it/300x300":t,a=e.title,l=e.authors,c=e.description,i=e.link;return r.a.createElement("li",{className:"list-group-item list-container"},r.a.createElement(g,null,r.a.createElement(y,null,r.a.createElement(N,{size:"xs-4 sm-2"},r.a.createElement(k,{src:n})),r.a.createElement(N,{size:"xs-8 sm-9"},r.a.createElement("h3",null,a),r.a.createElement("p",null,"Authors: ",l),r.a.createElement("p",null,"Description: ",c),r.a.createElement("a",{rel:"noreferrer noopener",target:"_blank",href:i},"More details"),r.a.createElement(f,{onClick:"/save",type:"outline-dark",className:"input-lg save-btn"},"Save")))))}var j=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={books:[],bookSearch:""},e.newQuery=function(t){var n=t.target,a=n.name,r=n.value;e.setState({[a]:r})},e.searchQuery=function(t){t.preventDefault(),console.log("Search button clicked!"),b(e.state.bookSearch).then((function(t){return e.setState({books:t.data})})).catch((function(e){return console.log(e)}))},e}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement(h,null,r.a.createElement(p,null),r.a.createElement(m,null),r.a.createElement(g,null,r.a.createElement(y,null,r.a.createElement(N,{size:"md-12"},r.a.createElement("form",null,r.a.createElement(g,null,r.a.createElement(y,null,r.a.createElement(N,{size:"xs-9 sm-10"},r.a.createElement(d,{name:"bookSearch",value:this.state.bookSearch,onChange:this.newQuery,placeholder:"Search for a non crappy book!"})),r.a.createElement(N,{size:"xs-3 sm-2"},r.a.createElement(f,{onClick:this.searchQuery,type:"outline-light",className:"input-lg"},"Search"))))))),r.a.createElement(y,null,r.a.createElement(N,{size:"12"},this.state.books.length?r.a.createElement(S,null,this.state.books.map((function(e){return r.a.createElement(x,{key:e.industryIdentifiers[0].identifier,thumbnail:e.thumbnail,title:e.title,authors:e.authors,description:e.description,link:e.link})}))):r.a.createElement("h1",{className:"text-center"},"No books to display...")))))}}]),n}(a.Component);n(46);c.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.3e09fdab.chunk.js.map