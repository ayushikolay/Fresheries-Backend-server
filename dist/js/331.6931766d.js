"use strict";(self["webpackChunkfresheries"]=self["webpackChunkfresheries"]||[]).push([[331],{8155:function(t,s,a){a.r(s),a.d(s,{default:function(){return w}});var e=function(){var t=this,s=t._self._c;return s("div",[s("Navigation"),s("section",{attrs:{id:"home"}},[s("div",{staticClass:"hero-content"},[s("HeroContent",{attrs:{name:"",btnName:"Explore More"}})],1),t._m(0)]),s("section",{staticClass:"features",attrs:{id:"features"}},[t._m(1),s("div",{staticClass:"box-container"},[s("CardComp",{attrs:{imageUrl:"fresh.jpg",serviceName:"Fresh & Organic",description:"Get Fresh, organic and healthy products deliver at your doorstep.",btnName:"Read More"}}),s("div",{staticClass:"box blink_border"},[s("img",{attrs:{src:a(8686),alt:""}}),s("h3",{staticClass:"blink_me"},[t._v("Trusted Seller")]),s("p",[t._v(" You can now shop from your nearby trusted seller by your own choice. ")]),s("router-link",{attrs:{to:{name:"SellerCategory"}}},[s("button",{staticClass:"btn"},[t._v("Shop Now")])])],1),s("CardComp",{attrs:{imageUrl:"easy_payments.jpg",serviceName:"Easy Payments",description:"Make online payments, cash on delivery easily.",btnName:"Read More"}})],1)]),s("section",{attrs:{id:"categories"}},[t._m(2),s("div",{staticClass:"box-container"},[s("CardComp",{attrs:{imageUrl:"cat-1.png",serviceName:"Vegetables",description:"Upto 45% off",btnName:"Shop Now"}}),s("CardComp",{attrs:{imageUrl:"cat-2.png",serviceName:"Fresh Fruits",description:"Upto 45% off",btnName:"Shop Now"}}),s("CardComp",{attrs:{imageUrl:"cat-3.png",serviceName:"Dairy Products",description:"Upto 45% off",btnName:"Shop Now"}})],1)]),s("section",{staticClass:"products",attrs:{id:"products"}},[t._m(3),s("div",{staticClass:"product-item-list"},t._l(t.products,(function(t){return s("div",{key:t.id},[s("ProductCard",{attrs:{_id:t._id,image:t.image,title:t.title,stock:t.stock,discount:t.discount,ratings:t.ratings,cost:t.cost,prev_cost:t.prev_cost}})],1)})),0)]),s("FooterSec")],1)},r=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"img-section"},[s("img",{attrs:{src:a(2270),alt:""}})])},function(){var t=this,s=t._self._c;return s("h1",{staticClass:"heading"},[s("span",[t._v("F")]),s("span",[t._v("E")]),s("span",[t._v("A")]),s("span",[t._v("T")]),s("span",[t._v("U")]),s("span",[t._v("R")]),s("span",[t._v("E")]),s("span",[t._v("S")])])},function(){var t=this,s=t._self._c;return s("h1",{staticClass:"heading"},[s("span",[t._v("C")]),s("span",[t._v("A")]),s("span",[t._v("T")]),s("span",[t._v("E")]),s("span",[t._v("G")]),s("span",[t._v("O")]),s("span",[t._v("R")]),s("span",[t._v("I")]),s("span",[t._v("E")]),s("span",[t._v("S")])])},function(){var t=this,s=t._self._c;return s("h1",{staticClass:"heading"},[s("span",[t._v("P")]),s("span",[t._v("R")]),s("span",[t._v("O")]),s("span",[t._v("D")]),s("span",[t._v("U")]),s("span",[t._v("C")]),s("span",[t._v("T")]),s("span",[t._v("S")])])}],i=(a(7658),a(6995)),n=function(){var t=this,s=t._self._c;return s("div",{staticClass:"box"},[s("img",{attrs:{src:a(7173)("./"+t.imageUrl)}}),s("h3",[t._v(t._s(t.serviceName))]),s("p",[t._v(t._s(t.description))]),s("a",{staticClass:"btn",attrs:{href:"#"}},[t._v(t._s(t.btnName))])])},o=[],c={name:"CardComp",props:{imageUrl:String,serviceName:String,description:String,btnName:String}},l=c,p=a(1001),u=(0,p.Z)(l,n,o,!1,null,"355c3b2b",null),d=u.exports,v=a(1415),_=function(){var t=this,s=t._self._c;return s("div",{staticClass:"product-item"},[s("router-link",{staticClass:"product-img",attrs:{to:{name:"view-product",params:{title:t.title}}}},[s("img",{attrs:{src:"https://fresheries-api.onrender.com/"+t.image,alt:"product_img"}}),s("div",{staticClass:"product-absolute-options"},[s("span",{staticClass:"offer-badge-1"},[t._v(t._s(t.discount)+"% OFF")]),s("span",{staticClass:"like-icon",attrs:{title:"wishlist"}})])]),s("div",{staticClass:"product-text-dt"},[s("p",[t._v(t._s(t.stock))]),s("h4",[t._v(t._s(t.title))]),s("div",{staticClass:"product-price"},[t._v(" RS."+t._s(t.cost)),s("span",[t._v("Rs."+t._s(t.prev_cost))])]),t._m(0)])],1)},m=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"qty-cart"},[s("div",{staticClass:"stars"},[s("i",{staticClass:"fas fa-star"}),s("i",{staticClass:"fas fa-star"}),s("i",{staticClass:"fas fa-star"}),s("i",{staticClass:"fas fa-star"}),s("i",{staticClass:"fas fa-star-half-alt"})]),s("span",{staticClass:"cart-icon"},[s("i",{staticClass:"fas fa-shopping-cart"})])])}],f={name:"ProductComp",props:{_id:String,image:String,title:String,stock:String,discount:Number,ratings:Number,cost:Number,prev_cost:Number}},h=f,C=(0,p.Z)(h,_,m,!1,null,"02854f89",null),g=C.exports,b=a(6596),N=a(6018),S={name:"HomePage",data(){return{products:[]}},mounted(){let t=localStorage.getItem("user-info");t||this.$router.push({name:"Login"})},async created(){this.products=await N.Z.getAllProduct()},components:{Navigation:i.Z,HeroContent:v.Z,CardComp:d,ProductCard:g,FooterSec:b.Z}},y=S,k=(0,p.Z)(y,e,r,!1,null,"523f5434",null),w=k.exports},6995:function(t,s,a){a.d(s,{Z:function(){return l}});var e=function(){var t=this,s=t._self._c;return s("div",[s("link",{attrs:{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"}}),s("link",{attrs:{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.13.0/css/all.css",crossorigin:"anonymous"}}),s("header",{staticClass:"header-section"},[s("router-link",{staticClass:"routerLink",attrs:{to:{name:"Home"}}},[s("div",{staticClass:"logo"},[s("a",{attrs:{href:""}},[s("i",{staticClass:"fas fa-shopping-basket"})]),s("span",[s("a",{attrs:{href:""}},[t._v("Fresheries")]),s("br"),s("small",[t._v("SUPER MARKET")])]),s("br")])]),t._m(0),t._m(1),t._m(2),s("div",{staticClass:"cart-section"},[s("a",{staticClass:"fas fa-shopping-cart",attrs:{href:""}}),s("div",{attrs:{id:"cardItem"}},[t._v(t._s(t.$store.state.cart.length))])]),s("div",{staticClass:"profile-section"},[s("button",{attrs:{id:"signUpbtn"},on:{click:t.logout}},[t._v("Logout")])])],1)])},r=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"search-section"},[s("input",{attrs:{type:"search",placeholder:"Select your location",id:"search-box"}}),s("label",{staticClass:"fas fa-location",attrs:{for:"search-box"}})])},function(){var t=this,s=t._self._c;return s("nav",{staticClass:"navigation"},[s("a",{attrs:{href:"/home"}},[t._v("Home")]),s("a",{attrs:{href:"/home#features"}},[t._v("Features")]),s("a",{attrs:{href:"/home#categories"}},[t._v("Categories")]),s("a",{attrs:{href:"/home#products"}},[t._v("Products")]),s("a",{attrs:{href:"/home#contact"}},[t._v("Contact")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"wishlist",attrs:{title:"Wishlist"}},[s("a",{staticClass:"fas fa-heart",attrs:{href:""}})])}],i=(a(7658),{name:"NavBar",methods:{logout(){localStorage.clear(),this.$router.push({name:"Login"})}}}),n=i,o=a(1001),c=(0,o.Z)(n,e,r,!1,null,"cb58586c",null),l=c.exports}}]);
//# sourceMappingURL=331.6931766d.js.map