(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{265:function(e,t,o){"use strict";o.r(t);var n=o(7),r=(o(49),o(39),{middleware:function(e){e.store;var t=e.redirect,o=localStorage.getItem("UsertAuthID");if(console.log("UsertAuthID=",o),!o)return t("/auth")},data:function(){return{columns:[{label:"id",field:"id",type:"number",width:"50px",tooltip:"Порядковый номер позиции справочника"},{label:"Наименование позиции справочника",field:"Name",width:"500px",filterOptions:{enabled:!0},html:!0},{label:"Описание",field:"Description",filterOptions:{enabled:!0}}],selectedRows:[]}},asyncData:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var o,n,r,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=e.app,n={params:{module:"dictionary",form:"Material",id:0}},t.next=4,o.$axios.$get("http://localhost:3001/api",n);case 4:return r=t.sent,console.log("formList=",r),l=r.map((function(e){return{id:e.id,Name:'<a href="/dictionary/Material/'+e.id+'">'+e.Name+"</a>",Description:e.Description}})),t.abrupt("return",{rows:l});case 8:case"end":return t.stop()}}),t)})))()},methods:{selectionChanged:function(e){this.$data.selectedRows=e.selectedRows},createRow:function(){this.$axios.$post("http://localhost:3001/api",{module:"dictionary",form:"Material"}),this.$nuxt.refresh()},deleteRow:function(){var e={data:{module:"dictionary",form:"Material",columnList:this.$data.selectedRows}};this.$axios.$delete("http://localhost:3001/api",e),this.$nuxt.refresh()}}}),l=o(38),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("main",[o("h1",[e._v("Справочник Номенклатуры")]),e._v(" "),e._m(0),e._v(" "),o("nuxt-link",{attrs:{to:"/dictionary"}},[o("button",[e._v("Выход")])]),e._v(" "),o("button",{on:{click:e.createRow}},[e._v(" (+) Создать")]),e._v(" "),e._m(1),e._v(" "),o("div",[o("vue-good-table",{attrs:{columns:e.columns,rows:e.rows,"fixed-header":!0,"select-options":{enabled:!0,selectOnCheckboxOnly:!0},compactMode:""},on:{"on-selected-rows-change":e.selectionChanged}},[o("div",{attrs:{slot:"selected-row-actions"},slot:"selected-row-actions"},[o("button",{on:{click:e.deleteRow}},[e._v(" (-) Удалить")])])])],1)],1)}),[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("label",[e._v("----------")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("label",[e._v("----------")])])}],!1,null,null,null);t.default=component.exports}}]);