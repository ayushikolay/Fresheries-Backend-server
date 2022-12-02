"use strict";(self["webpackChunkfresheries"]=self["webpackChunkfresheries"]||[]).push([[819],{819:function(e,s,t){t.r(s),t.d(s,{default:function(){return m}});var r=function(){var e=this,s=e._self._c;return s("div",[s("SellerNavBar"),s("div",{staticClass:"loginpage"},[e._m(0),s("div",{staticClass:"signup-box"},[s("form",{attrs:{method:"POST"},on:{submit:function(s){return s.preventDefault(),e.onSignUp()}}},[s("div",{staticClass:"error",attrs:{id:"err"}},[e._v(e._s(e.error))]),s("div",{staticClass:"section"},[s("label",{attrs:{for:"name"}},[e._v("Owner Name")]),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.name,expression:"name",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"Enter your name",id:"name"},domProps:{value:e.name},on:{input:function(s){s.target.composing||(e.name=s.target.value.trim())},blur:function(s){return e.$forceUpdate()}}})]),s("div",{staticClass:"section"},[s("label",{attrs:{for:"shopName"}},[e._v("Shop Name")]),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.shopName,expression:"shopName",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"Enter your shop name",id:"shopName"},domProps:{value:e.shopName},on:{input:function(s){s.target.composing||(e.shopName=s.target.value.trim())},blur:function(s){return e.$forceUpdate()}}})]),s("div",{staticClass:"error"},[e._v(e._s(e.errors.name))]),s("div",{staticClass:"section"},[s("label",{attrs:{for:"email"}},[e._v("Email ID")]),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.email,expression:"email",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"Enter your email",id:"email"},domProps:{value:e.email},on:{input:function(s){s.target.composing||(e.email=s.target.value.trim())},blur:function(s){return e.$forceUpdate()}}})]),s("div",{staticClass:"error"},[e._v(e._s(e.errors.email))]),s("div",{staticClass:"section"},[s("label",{attrs:{for:"pass"}},[e._v("Password")]),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.password,expression:"password",modifiers:{trim:!0}}],attrs:{type:"password",placeholder:"Enter your password",id:"pass"},domProps:{value:e.password},on:{input:function(s){s.target.composing||(e.password=s.target.value.trim())},blur:function(s){return e.$forceUpdate()}}})]),s("div",{staticClass:"error"},[e._v(e._s(e.errors.password))]),s("div",{staticClass:"section"},[s("label",{attrs:{for:"repass"}},[e._v("Confirm Password")]),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.cpassword,expression:"cpassword",modifiers:{trim:!0}}],attrs:{type:"password",placeholder:"Re-enter your password",id:"repass"},domProps:{value:e.cpassword},on:{input:function(s){s.target.composing||(e.cpassword=s.target.value.trim())},blur:function(s){return e.$forceUpdate()}}})]),s("div",{staticClass:"error"},[e._v(e._s(e.errors.cpassword))]),e._m(1),s("br"),s("br")]),e._m(2),s("p",[e._v(" Already have an account? "),s("router-link",{attrs:{to:{name:"SellerLogin"},id:"accCreate"}},[e._v(" SIGN IN ")])],1)])])],1)},a=[function(){var e=this,s=e._self._c;return s("h1",{staticClass:"heading"},[s("span",[e._v("S")]),s("span",[e._v("E")]),s("span",[e._v("L")]),s("span",[e._v("L")]),s("span",[e._v("E")]),s("span",[e._v("R")]),s("span",{attrs:{id:"space"}},[e._v(" ")]),s("span",[e._v("R")]),s("span",[e._v("E")]),s("span",[e._v("G")]),s("span",[e._v("I")]),s("span",[e._v("S")]),s("span",[e._v("T")]),s("span",[e._v("E")]),s("span",[e._v("R")])])},function(){var e=this,s=e._self._c;return s("div",[s("button",{staticClass:"button",attrs:{type:"submit",id:"signBtn"}},[e._v("SIGN UP")])])},function(){var e=this,s=e._self._c;return s("p",[e._v(" *By registering,you agree to our "),s("br"),s("a",{staticStyle:{color:"grey"},attrs:{href:"#"}},[e._v("Terms and Condition")]),e._v(" and "),s("a",{staticStyle:{color:"grey"},attrs:{href:"#"}},[e._v("Policy Privacy")])])}],i=(t(7658),t(70)),o=t(162),n={name:"SellerRegister",components:{SellerNavBar:o.Z},data(){return{name:"",shopName:"",email:"",password:"",cpassword:"",errors:[],error:""}},methods:{async onSignUp(){let e=await i.ZP.post("https://fresheries-api.onrender.com/api/sellerSignUp",{name:this.name,shopName:this.shopName,email:this.email,password:this.password,cpassword:this.cpassword});console.log(e),201!=e.status||this.errors.length?this.error=e.data:(localStorage.setItem("seller-info",JSON.stringify(e.data)),this.$router.push({name:"Dashboard"}))},mounted(){let e=localStorage.getItem("seller-info");e&&this.$router.push({name:"Dashboard"})}}},l=n,p=t(1001),c=(0,p.Z)(l,r,a,!1,null,"c6f7e39c",null),m=c.exports},162:function(e,s,t){t.d(s,{Z:function(){return p}});var r=function(){var e=this,s=e._self._c;return s("div",[s("link",{attrs:{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"}}),s("link",{attrs:{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.13.0/css/all.css",crossorigin:"anonymous"}}),s("header",{staticClass:"header-section"},[e._m(0),s("nav",{staticClass:"navigation"},[s("router-link",{attrs:{to:{name:"SellerLogin"},"active-class":"active"}},[s("button",{attrs:{id:"signUpbtn"}},[e._v("Sign In")])]),s("router-link",{attrs:{to:{name:"SellerRegister"},"active-class":"active"}},[s("button",{attrs:{id:"signUpbtn"}},[e._v("Sign Up")])])],1)])])},a=[function(){var e=this,s=e._self._c;return s("div",{staticClass:"logo"},[s("a",{attrs:{href:"/"}},[s("i",{staticClass:"fas fa-shopping-basket"})]),s("span",[s("a",{attrs:{href:"/"}},[e._v("Fresheries")]),s("br"),s("small",[e._v("SUPER MARKET")])]),s("br")])}],i={name:"SellerNavBar"},o=i,n=t(1001),l=(0,n.Z)(o,r,a,!1,null,"f0ce7546",null),p=l.exports}}]);
//# sourceMappingURL=819.d6ace201.js.map