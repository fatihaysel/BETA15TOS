module.exports=function(t){var o={};function n(r){if(o[r])return o[r].exports;var e=o[r]={i:r,l:!1,exports:{}};return t[r].call(e.exports,e,e.exports,n),e.l=!0,e.exports}return n.m=t,n.c=o,n.d=function(t,o,r){n.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,o){if(1&o&&(t=n(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var e in t)n.d(r,e,function(o){return t[o]}.bind(null,e));return r},n.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(o,"a",o),o},n.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},n.p="",n(n.s=7)}([function(t,o){t.exports=flarum.core.compat.app},function(t,o){t.exports=flarum.core.compat["components/Button"]},function(t,o,n){"use strict";function r(t,o){t.prototype=Object.create(o.prototype),t.prototype.constructor=t,t.__proto__=o}n.d(o,"a",(function(){return r}))},function(t,o){t.exports=flarum.core.compat["components/Modal"]},function(t,o){t.exports=flarum.core.compat["components/Switch"]},function(t,o){t.exports=flarum.core.compat.extend},function(t,o){t.exports=flarum.core.compat["utils/DiscussionControls"]},function(t,o,n){"use strict";n.r(o);var r=n(0),e=n.n(r),a=n(5),u=n(1),i=n.n(u),s=n(6),c=n.n(s),l=n(2),p=n(3),f=n.n(p),d=n(4),b=n.n(d),y="migratetoflarum-fake-data.forum.generator.",g=function(t){function o(){return t.apply(this,arguments)||this}Object(l.a)(o,t);var n=o.prototype;return n.oninit=function(o){t.prototype.oninit.call(this,o),this.bulk=!1,this.userCount=0,this.postCount=0,this.dirty=!1,this.loading=!1},n.title=function(){return e.a.translator.trans(y+"title")},n.content=function(){var t=this;return m(".Modal-body",[m(".Form-group",[b.a.component({state:this.bulk,onchange:function(o){t.bulk=o}},e.a.translator.trans(y+"bulk-mode")),m(".helpText",e.a.translator.trans(y+"bulk-mode-description"))]),m(".Form-group",[m("label",e.a.translator.trans(y+"user-count")),m("input.FormControl",{type:"number",min:"0",value:this.userCount+"",oninput:function(o){t.userCount=parseInt(o.target.value),t.dirty=!0}})]),m(".Form-group",[m("label",e.a.translator.trans(y+"post-count")),m("input.FormControl",{type:"number",min:"0",value:this.postCount+"",oninput:function(o){t.postCount=parseInt(o.target.value),t.dirty=!0}})]),m(".Form-group",[i.a.component({disabled:!this.dirty,className:"Button Button--primary",onclick:function(){t.loading=!0,e.a.request({url:e.a.forum.attribute("apiUrl")+"/fake-data",method:"POST",body:{bulk:t.bulk,user_count:t.userCount,discussion_count:0,discussion_ids:[t.attrs.discussion.id()],post_count:t.postCount}}).then((function(){t.loading=!1,e.a.modal.close(),window.location.reload()})).catch((function(o){throw t.loading=!1,m.redraw(),o}))}},e.a.translator.trans(y+"send"))])])},o}(f.a);e.a.initializers.add("migratetoflarum-fake-data",(function(t){Object(a.extend)(c.a,"moderationControls",(function(o,n){o.add("migratetoflarum-fake-data",i.a.component({icon:"fas fa-database",onclick:function(){t.modal.show(g,{discussion:n})}},t.translator.trans("migratetoflarum-fake-data.forum.link.generate-replies")))}))}))}]);
//# sourceMappingURL=forum.js.map