(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{165:function(t,e,o){var content=o(167);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(17).default)("77d6318b",content,!0,{sourceMap:!1})},166:function(t,e,o){"use strict";var l=o(165);o.n(l).a},167:function(t,e,o){(t.exports=o(16)(!1)).push([t.i,"fieldset.no-colored-frames{border-color:#afafaf!important}fieldset.no-colored-frames legend{color:var(--ac-color)}",""])},168:function(t,e,o){"use strict";var l={computed:{noFrameColors:function(){return this.$store.state.postwoman.settings.DISABLE_FRAME_COLORS||!1}},props:{label:{type:String,default:"Section"},collapsed:{type:Boolean}},methods:{collapse:function(t){t.target.parentNode.querySelector(".collapsible").classList.toggle("hidden")}}},n=(o(166),o(12)),component=Object(n.a)(l,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("fieldset",{class:{"no-colored-frames":t.noFrameColors},attrs:{id:t.label.toLowerCase()}},[o("legend",{on:{click:function(e){return e.preventDefault(),t.collapse(e)}}},[t._v(t._s(t.label)+" ↕")]),t._v(" "),o("div",{staticClass:"collapsible",class:{hidden:t.collapsed}},[t._t("default")],2)])},[],!1,null,null,null);e.a=component.exports},169:function(t,e,o){var content=o(172);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(17).default)("7d7fde3e",content,!0,{sourceMap:!1})},171:function(t,e,o){"use strict";var l=o(169);o.n(l).a},172:function(t,e,o){(t.exports=o(16)(!1)).push([t.i,".color{display:inline-block;vertical-align:middle;padding:8px 15px;margin:5px;background-color:rgba(93,93,93,.2);border-radius:4px}.color.active{background-color:rgba(93,93,93,.3)}.color .preview{vertical-align:middle;display:inline-block;width:36px;height:36px;border-radius:100%;margin-right:10px;position:relative}.color .preview .activeTick{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);fill:#fff}.color.vibrant .preview .activeTick{fill:#000}",""])},180:function(t,e,o){"use strict";o.r(e);o(57);var section=o(168),l={props:{color:{type:String,required:!0},name:{type:String},active:{type:Boolean,default:!1}}},n=(o(171),o(12)),r=Object(n.a)(l,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"color",attrs:{"data-color":t.color}},[o("span",{staticClass:"preview",style:{backgroundColor:t.color}},[t.active?o("svg",{staticClass:"activeTick",attrs:{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg","fill-rule":"evenodd","clip-rule":"evenodd"}},[o("path",{attrs:{d:"M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z"}})]):t._e()]),t._v("\n    "+t._s(t.name||t.color)+"\n")])},[],!1,null,null,null).exports,c={data:function(){return{themes:[{color:"#121212",name:"Dark (Default)",class:""},{color:"#DFDFDF",name:"Light",vibrant:!0,class:"light"}],colors:[{color:"#51ff0d",name:"Lime (Default)",vibrant:!0},{color:"#FFC107",name:"Yellow",vibrant:!0},{color:"#E91E63",name:"Pink",vibrant:!1},{color:"#e74c3c",name:"Red",vibrant:!1},{color:"#9b59b6",name:"Purple",vibrant:!1},{color:"#2980b9",name:"Blue",vibrant:!1}],settings:{THEME_CLASS:this.$store.state.postwoman.settings.THEME_CLASS||"",THEME_COLOR:"",THEME_COLOR_VIBRANT:!0,DISABLE_FRAME_COLORS:this.$store.state.postwoman.settings.DISABLE_FRAME_COLORS||!1}}},components:{"pw-section":section.a,swatch:r},methods:{applyTheme:function(t){this.applySetting("THEME_CLASS",t),document.documentElement.className=t},setActiveColor:function(t,e){null==e&&(e=!0),document.documentElement.style.setProperty("--ac-color",t),document.documentElement.style.setProperty("--act-color",e?"#121212":"#fff"),this.applySetting("THEME_COLOR",t.toUpperCase()),this.applySetting("THEME_COLOR_VIBRANT",e)},getActiveColor:function(){var t;return"#".concat((t=window.getComputedStyle(document.documentElement).getPropertyValue("--ac-color"),t.replace(/#/g,"").replace(/ /g,"")).toUpperCase())},applySetting:function(t,e){this.settings[t]=e,this.$store.commit("postwoman/applySetting",[t,e])},toggleSetting:function(t){this.settings[t]=!this.settings[t],this.$store.commit("postwoman/applySetting",[t,this.settings[t]])}},beforeMount:function(){this.settings.THEME_COLOR=this.getActiveColor()}},d=Object(n.a)(c,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"page"},[o("pw-section",{staticClass:"blue",attrs:{label:"Theme"}},[o("ul",[o("li",[o("h3",[t._v("Background")]),t._v(" "),o("div",{staticClass:"backgrounds"},t._l(t.themes,function(e){return o("span",{key:e.class,on:{click:function(o){return t.applyTheme(e.class)}}},[o("swatch",{class:{vibrant:e.vibrant},attrs:{color:e.color,name:e.name,active:t.settings.THEME_CLASS===e.class}})],1)}),0)])]),t._v(" "),o("br"),o("br"),t._v(" "),o("ul",[o("li",[o("h3",[t._v("Color")]),t._v(" "),o("div",{staticClass:"colors"},t._l(t.colors,function(e){return o("span",{key:e.color,on:{click:function(o){return o.preventDefault(),t.setActiveColor(e.color,e.vibrant)}}},[o("swatch",{class:{vibrant:e.vibrant},attrs:{color:e.color,name:e.name,active:t.settings.THEME_COLOR===e.color.toUpperCase()}})],1)}),0),t._v(" "),o("p",[o("input",{attrs:{id:"disableFrameColors",type:"checkbox"},domProps:{checked:!t.settings.DISABLE_FRAME_COLORS},on:{change:function(e){return t.toggleSetting("DISABLE_FRAME_COLORS")}}}),t._v(" "),o("label",{attrs:{for:"disableFrameColors"}},[t._v("Enable multi-colored frames")])])])])])],1)},[],!1,null,null,null);e.default=d.exports}}]);