(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{243:function(t,e,r){var content=r(254);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(61).default)("a7969f6a",content,!0,{sourceMap:!1})},253:function(t,e,r){"use strict";r(243)},254:function(t,e,r){var o=r(60)(!1);o.push([t.i,".grid-container{display:grid;grid-template-columns:1fr 5fr;grid-row-gap:10px}.grid-item{box-sizing:border-box;text-align:center;font-size:1.1em;padding:1.5em;color:#fff}",""]),t.exports=o},269:function(t,e,r){"use strict";r.r(e);var o=r(7),n=(r(49),{middleware:function(t){t.store;var e=t.redirect,r=localStorage.getItem("UsertAuthID");if(console.log("UsertAuthID=",r),!r)return e("/auth")},data:function(){return{formData:{Clients:[],Contractors:[],selectedClient:"",selectedContractor:""}}},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,n,data,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.app,o=t.params,n={params:{module:"dictionary",form:"Material",id:o.id}},e.next=4,r.$axios.$get("http://localhost:3001/api",n);case 4:return data=e.sent,l={id:data._id._Value,Name:data._Name._Value,Description:data._Description._Value,selectedClient:data._Client_id._Value,selectedContractor:data._Contractor_id._Value},n={params:{module:"dictionary",form:"Client",id:0}},e.next=9,r.$axios.$get("http://localhost:3001/api",n);case 9:return data=e.sent,l.Clients=data,n={params:{module:"dictionary",form:"Contractor",id:0}},e.next=14,r.$axios.$get("http://localhost:3001/api",n);case 14:return data=e.sent,l.Contractors=data,e.abrupt("return",{formData:l});case 17:case"end":return e.stop()}}),e)})))()},methods:{saveFormData:function(){var t={module:"dictionary",form:"Material",data:{id:this.$data.formData.id,Name:this.$data.formData.Name,Description:this.$data.formData.Description,Client_id:this.$data.formData.selectedClient,Contractor_id:this.$data.formData.selectedContractor}};console.log("formData=",t),this.$axios.$post("http://localhost:3001/api",t)}}}),l=(r(253),r(38)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",[t._v("Номенклатура")]),t._v(" "),t._m(0),t._v(" "),r("nuxt-link",{attrs:{to:"/dictionary/Material"}},[r("button",[t._v("Выход")])]),t._v(" "),r("button",{on:{click:t.saveFormData}},[t._v("Сохранить")]),t._v(" "),t._m(1),t._v(" "),r("div",{staticClass:"grid-container"},[r("label",[t._v("Наименование")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.Name,expression:"formData.Name"}],attrs:{type:"text",placeholder:"Введите наименование"},domProps:{value:t.formData.Name},on:{input:function(e){e.target.composing||t.$set(t.formData,"Name",e.target.value)}}}),t._v(" "),r("label",[t._v("Описание")]),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formData.Description,expression:"formData.Description"}],domProps:{value:t.formData.Description},on:{input:function(e){e.target.composing||t.$set(t.formData,"Description",e.target.value)}}}),t._v(" "),r("label",[t._v("Клиент")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.formData.selectedClient,expression:"formData.selectedClient"}],on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.formData,"selectedClient",e.target.multiple?r:r[0])}}},t._l(t.formData.Clients,(function(e){return r("option",{domProps:{value:e.id}},[t._v(t._s(e.Name))])})),0),t._v(" "),r("label",[t._v("Контрагент")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.formData.selectedContractor,expression:"formData.selectedContractor"}],on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.formData,"selectedContractor",e.target.multiple?r:r[0])}}},t._l(t.formData.Contractors,(function(e){return r("option",{domProps:{value:e.id}},[t._v(t._s(e.Name))])})),0)])],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("label",[t._v("----------")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("label",[t._v("----------")])])}],!1,null,null,null);e.default=component.exports}}]);