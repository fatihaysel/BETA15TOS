module.exports=function(t){var e={};function a(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,a),n.l=!0,n.exports}return a.m=t,a.c=e,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(o,n,function(e){return t[e]}.bind(null,n));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=9)}([function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat.Model},function(t,e){t.exports=flarum.core.compat["tags/models/Tag"]},function(t,e){t.exports=flarum.core.compat["components/Button"]},,,function(t,e){t.exports=flarum.core.compat["tags/components/EditTagModal"]},function(t,e){t.exports=flarum.core.compat["components/Modal"]},function(t,e){t.exports=flarum.core.compat["utils/Stream"]},function(t,e,a){"use strict";a.r(e);var o=a(0),n=a(1),r=a.n(n),s=a(3),i=a.n(s),l=a(2),p=a.n(l),u=a(6),c=a.n(u);var d=a(7),f=a.n(d),g=a(8),v=a.n(g),b=function(t){var e,a;function o(){return t.apply(this,arguments)||this}a=t,(e=o).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a;var n=o.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.template=v()(this.attrs.model.template())},n.className=function(){return"TagTemplateModal Modal--large"},n.title=function(){return app.translator.trans("askvortsov-discussion-templates.admin.tag_template_modal.title")},n.content=function(){return[m("div",{className:"Modal-body"},m("div",{className:"Form"},m("p",null,app.translator.trans("askvortsov-discussion-templates.admin.tag_template_modal.customize_text")),m("div",{className:"Form-group"},m("textarea",{className:"FormControl",rows:"30",bidi:this.template})),m(i.a,{type:"submit",className:"Button Button--primary",loading:this.loading,disabled:!this.changed()},app.translator.trans("askvortsov-discussion-templates.admin.tag_template_modal.submit_button"))))]},n.changed=function(){return this.template()!==this.attrs.model.template()},n.onsubmit=function(t){t.preventDefault();var e=this.attrs.model,a=this.template();this.loading=!0,app.request({method:"PATCH",url:app.forum.attribute("apiUrl")+"/tags/"+e.id()+"/template",body:{data:{template:a}}}).then((function(){e.data.attributes.template=a,app.modal.close()}))},o}(f.a);app.initializers.add("askvortsov/flarum-discussion-templates",(function(){p.a.prototype.template=r.a.attribute("template"),Object(o.extend)(c.a.prototype,"fields",(function(t){var e=this;this.tag.id()&&t.add("tag-template-modal-button",m("fieldset",null,m("legend",null,app.translator.trans("askvortsov-discussion-templates.admin.tags.tag_template_heading")),m("div",{className:"helpText"},app.translator.trans("askvortsov-discussion-templates.admin.tags.tag_template_text")),m(i.a,{className:"Button Button--primary",onclick:function(){app.modal.show(b,{model:e.tag})}},app.translator.trans("askvortsov-discussion-templates.admin.tags.tag_template_button"))),-20)}))}))}]);
//# sourceMappingURL=admin.js.map