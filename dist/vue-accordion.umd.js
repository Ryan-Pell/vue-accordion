(function(n,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(n=typeof globalThis<"u"?globalThis:n||self,e(n["vue-accordion"]={},n.Vue))})(this,function(n,e){"use strict";const a=e.defineComponent({name:"accordion",props:["visible","style","class"],components:{Transition:e.Transition},methods:{close(o){o.style.height="0"},open(o){o.style.height=o.scrollHeight+"px"}}}),c=(o,s)=>{const t=o.__vccOpts||o;for(const[i,r]of s)t[i]=r;return t};function l(o,s,t,i,r,f){return e.openBlock(),e.createBlock(e.Transition,{onBeforeEnter:o.close,onLeave:o.close,onEnter:o.open,onBeforeLeave:o.open},{default:e.withCtx(()=>[e.withDirectives(e.createElementVNode("div",{style:e.normalizeStyle({transition:"150ms ease-out",...o.style,overflow:"hidden"}),class:e.normalizeClass(o.class)},[e.renderSlot(o.$slots,"default")],6),[[e.vShow,o.visible]])]),_:3},8,["onBeforeEnter","onLeave","onEnter","onBeforeLeave"])}const d=c(a,[["render",l]]);n.accordion=d,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})});