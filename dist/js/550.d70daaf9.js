"use strict";(self["webpackChunkfresheries"]=self["webpackChunkfresheries"]||[]).push([[550],{3088:function(t,e,a){a.r(e),a.d(e,{default:function(){return f}});var r=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"parent"}},[e("div",[e("SellerNav"),e("SideBar")],1),e("div",[e("form",{ref:t.formData,on:{submit:function(e){return e.preventDefault(),t.onUpdate.apply(null,arguments)}}},[e("h1",[t._v("Edit Product")]),t.error?e("div",[t._v(t._s(t.error))]):t._e(),e("div",{staticClass:"form-row"},[e("div",{staticClass:"col"},[e("label",{attrs:{for:"title"}},[t._v("Product Name")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.title,expression:"formData.title"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"Product name",rules:t.rules},domProps:{value:t.formData.title},on:{input:function(e){e.target.composing||t.$set(t.formData,"title",e.target.value)}}})]),e("div",{staticClass:"col"},[e("label",{attrs:{for:"category"}},[t._v("Category")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.formData.category,expression:"formData.category"}],staticClass:"form-control",attrs:{id:"category",rules:t.rules},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.formData,"category",e.target.multiple?a:a[0])}}},[e("option",{attrs:{selected:"",hidden:""}},[t._v("Choose...")]),e("option",{attrs:{value:"vegetables"}},[t._v("vegetables")]),e("option",{attrs:{value:"fruits"}},[t._v("fruits")]),e("option",{attrs:{value:"dairy"}},[t._v("dairy")])])]),e("br")]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"image"}},[t._v("Upload Product Image  ")]),e("input",{staticClass:"form-control-file",attrs:{type:"file",id:"image",rules:t.rules},on:{change:t.selectFile}}),e("img",{attrs:{src:`https://fresheries-api.onrender.com/${this.formData.image}`,width:"120px",alt:"preview-image"}})]),e("div",{staticClass:"form-row"},[e("div",{staticClass:"form-group col-md-6"},[e("label",{attrs:{for:"cost"}},[t._v("Cost")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.cost,expression:"formData.cost"}],staticClass:"form-control",attrs:{type:"number",rules:t.rules,id:"cost"},domProps:{value:t.formData.cost},on:{input:function(e){e.target.composing||t.$set(t.formData,"cost",e.target.value)}}})]),e("div",{staticClass:"form-group col-md-4"},[e("label",{attrs:{for:"prev_cost"}},[t._v("Previous Cost")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.prev_cost,expression:"formData.prev_cost"}],staticClass:"form-control",attrs:{type:"number",id:"prev_cost",rules:t.rules},domProps:{value:t.formData.prev_cost},on:{input:function(e){e.target.composing||t.$set(t.formData,"prev_cost",e.target.value)}}})]),e("div",{staticClass:"form-group col-md-2"},[e("label",{attrs:{for:"choice[distance]"}},[t._v("Distance")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.choice.distance,expression:"formData.choice.distance"}],staticClass:"form-control",attrs:{type:"number",id:"choice.distance",rules:t.rules,step:"any"},domProps:{value:t.formData.choice.distance},on:{input:function(e){e.target.composing||t.$set(t.formData.choice,"distance",e.target.value)}}})]),e("br"),e("button",{staticClass:"btn",attrs:{type:"submit",id:"signUpbtn"}},[t._v(" Update Product ")])])])])])},o=[],s=(a(7658),a(4702)),i=a(7476),l=a(2492),c=a.n(l),n=a(6018),m={name:"EditProduct",data(){return{formData:{title:"",category:"",image:null,stock:"Available(In Stock)",discount:6,cost:null,prev_cost:null,ratings:4,location:"Agra, Uttar Pradesh",choice:{seller_name:"",distance:null}},image:"",rules:[t=>!!t||"This field is required"],error:"",product:{}}},components:{SellerNav:s.Z,SideBar:i.Z},mounted(){let t=localStorage.getItem("seller-info");t||this.$router.push({name:"SellerLogin"});let e=JSON.parse(localStorage.getItem("seller-info")).shopName;this.formData.choice.seller_name=e},async created(){const t=await n.Z.getProductByID(this.$route.params.id);this.formData=t},methods:{selectFile(t){this.image=t.target.files[0]},async onUpdate(){const t=new FormData;t.append("title",this.formData.title),t.append("category",this.formData.category),t.append("image",this.image),t.append("stock",this.formData.stock),t.append("discount",this.formData.discount),t.append("cost",this.formData.cost),t.append("prev_cost",this.formData.prev_cost),t.append("ratings",this.formData.ratings),t.append("location",this.formData.location),t.append("choice.seller_name",this.formData.choice.seller_name),t.append("choice.distance",this.formData.choice.distance),t.append("old_image",this.formData.image);const e=await n.Z.updateProduct(this.$route.params.id,t);c().fire("Success",e.message,"success"),this.$router.push({name:"Dashboard",params:{message:e.message}})}}},u=m,d=a(1001),p=(0,d.Z)(u,r,o,!1,null,"76d116cb",null),f=p.exports}}]);
//# sourceMappingURL=550.d70daaf9.js.map