(function(e){function t(t){for(var o,i,r=t[0],c=t[1],u=t[2],p=0,d=[];p<r.length;p++)i=r[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);l&&l(t);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(o=!1)}o&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},a={app:0},s=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var u=0;u<r.length;u++)t(r[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0301":function(e,t,n){},"0935":function(e,t,n){"use strict";n("2e50")},"0b18":function(e,t,n){"use strict";n("bf72")},"0e7b":function(e,t,n){},"194b":function(e,t,n){"use strict";n("f97b")},"2d48":function(e,t,n){e.exports=n.p+"img/auth-hero.64407225.png"},"2e50":function(e,t,n){},"2e9a":function(e,t,n){},3167:function(e,t,n){"use strict";n("4419")},"42aa":function(e,t,n){"use strict";n("0301")},4419:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");function a(e,t,n,a,s,i){var r=Object(o["k"])("Landing"),c=Object(o["k"])("SignupModal"),u=Object(o["k"])("SendPassModal");return Object(o["h"])(),Object(o["b"])("section",null,[Object(o["e"])(r,{onToggleSignup:i.toggleSignup,onToggleSendpass:i.toggleSendpass},null,8,["onToggleSignup","onToggleSendpass"]),Object(o["e"])(c,{showSignup:s.showSignup,onToggleSignup:i.toggleSignup},null,8,["showSignup","onToggleSignup"]),Object(o["e"])(u,{showSendpass:s.showSendpass,onToggleSendpass:i.toggleSendpass},null,8,["showSendpass","onToggleSendpass"])])}var s={class:"landing"};function i(e,t,n,a,i,r){var c=Object(o["k"])("Hero"),u=Object(o["k"])("Options");return Object(o["h"])(),Object(o["b"])("section",s,[Object(o["e"])(c),Object(o["e"])(u,{onToggleSignup:r.toggleSignup,onToggleSendpass:t[0]||(t[0]=function(t){return e.$emit("toggle-sendpass")})},null,8,["onToggleSignup"])])}var r=n("2d48"),c=n.n(r),u=function(e){return Object(o["j"])("data-v-53f308db"),e=e(),Object(o["i"])(),e},l={class:"hero"},p=u((function(){return Object(o["c"])("img",{src:c.a,alt:"hero img",class:"hero__img"},null,-1)})),d=u((function(){return Object(o["c"])("div",{class:"hero__text"},"Se connecter ou créer un compte",-1)})),m=[p,d];function b(e,t,n,a,s,i){return Object(o["h"])(),Object(o["b"])("div",l,m)}var g={name:"Hero"},f=(n("c8ca"),n("6b0d")),h=n.n(f);const O=h()(g,[["render",b],["__scopeId","data-v-53f308db"]]);var j=O,v={class:"options"},w={class:"options__socialaccounts"},S=["href"],k=["href"],y={class:"options__formcontainer"},P={class:"options__createprofile"};function _(e,t,n,a,s,i){var r=Object(o["k"])("Button"),c=Object(o["k"])("Divider"),u=Object(o["k"])("LoginForm");return Object(o["h"])(),Object(o["b"])("div",v,[Object(o["c"])("div",w,[Object(o["c"])("a",{href:this.GOOGLE_URL},[Object(o["e"])(r,{text:"Google",color:"white",icon:'<img src="https://img.icons8.com/color/25/000000/google-logo.png"/>'})],8,S),Object(o["c"])("a",{href:this.GITHUB_URL},[Object(o["e"])(r,{text:"Github",color:"white",icon:'<img src="https://img.icons8.com/fluency/25/000000/github.png"/>'})],8,k),Object(o["e"])(r,{text:"Linkedin",color:"white",icon:'<img src="https://img.icons8.com/fluency/25/000000/linkedin.png"/>'})]),Object(o["e"])(c,{text:"OU"}),Object(o["c"])("div",y,[Object(o["e"])(u)]),Object(o["c"])("p",{onClick:t[0]||(t[0]=function(t){return e.$emit("toggle-sendpass")}),className:"options__forgotpassword",id:"toggle-sendpass"}," Mot de passe perdu ? "),Object(o["e"])(c),Object(o["c"])("div",P,[Object(o["e"])(r,{onClick:t[1]||(t[1]=function(t){return e.$emit("toggle-signup")}),text:"Create profile",width:"80%",className:"--grey",dataTest:"toggle-signup"})])])}n("ac1f"),n("1276"),n("7db0"),n("d3b7");var x=["href","data-test"],L=["innerHTML"];function T(e,t,n,a,s,i){return Object(o["h"])(),Object(o["b"])("button",{style:Object(o["g"])({backgroundColor:n.color,width:n.width}),class:Object(o["f"])("btn ".concat(n.className)),href:n.href,"data-test":n.dataTest},[Object(o["o"])(Object(o["c"])("span",{innerHTML:n.icon},null,8,L),[[o["n"],i.isIcon]]),Object(o["d"])(" "+Object(o["l"])(n.text),1)],14,x)}var U={name:"Button",props:{href:{type:String,default:"https://ikodi.eu"},text:{type:String,default:"Bouton"},width:{type:String,default:"fit-content"},className:{type:String,default:""},color:{type:String},icon:{type:String},dataTest:{type:String}},computed:{isIcon:function(){return"undefined"!==typeof this.icon}}};n("0935");const C=h()(U,[["render",T],["__scopeId","data-v-6d7ec0a8"]]);var M=C,B={class:"divider"};function F(e,t,n,a,s,i){return Object(o["h"])(),Object(o["b"])("div",B,[Object(o["c"])("span",null,Object(o["l"])(n.text),1)])}var I={name:"Divider",props:{text:{type:String}}};n("5a1e");const $=h()(I,[["render",F],["__scopeId","data-v-79bd1b90"]]);var R=$,V={class:"group"};function E(e,t,n,a,s,i){var r=this,c=Object(o["k"])("Button");return Object(o["h"])(),Object(o["b"])("form",{onSubmit:t[5]||(t[5]=Object(o["p"])((function(){return i.onSubmit&&i.onSubmit.apply(i,arguments)}),["prevent"]))},[Object(o["o"])(Object(o["c"])("input",{type:"email",name:"email",placeholder:"Email","onUpdate:modelValue":t[0]||(t[0]=function(e){return r.email=e})},null,512),[[o["m"],this.email]]),Object(o["c"])("div",V,[Object(o["o"])(Object(o["c"])("input",{type:"password",name:"password",placeholder:"Mot de passe",onInput:t[1]||(t[1]=function(){return i.checkPwd&&i.checkPwd.apply(i,arguments)}),"onUpdate:modelValue":t[2]||(t[2]=function(e){return s.password=e}),class:Object(o["f"])(this.isPwdOk?"--valid":"")},null,34),[[o["m"],s.password]]),Object(o["c"])("span",{class:Object(o["f"])(this.isPwdOk?"--valid":"--invalid")},Object(o["l"])(this.isPwdOk?"Ok !":"Minimum 5 caractères dont au moins une majuscule et un nombre"),3)]),Object(o["o"])(Object(o["c"])("input",{type:"text",name:"app","onUpdate:modelValue":t[3]||(t[3]=function(e){return r.app=e})},null,512),[[o["n"],!1],[o["m"],this.app]]),Object(o["e"])(c,{onClick:t[4]||(t[4]=function(t){return e.$emit("submit")}),text:"Connexion",className:"--blue",width:"80%"})],32)}n("841c"),n("3ca3"),n("ddb0"),n("9861"),n("00b4");var G="https://auth.ikodi.eu/google",A="https://auth.ikodi.eu/github",N="https://auth.ikodi.eu",D={post:function(e,t){var n=document.createElement("form");for(var o in n.method="post",n.action=e,t){var a=document.createElement("input");a.setAttribute("name",o),a.setAttribute("value",t[o]),n.appendChild(a)}document.body.appendChild(n),n.submit(),document.body.removeChild(n)},verifyLoginForm:function(e){for(var t in e)if(""===e[t])return{valid:!1,message:"Il manque l'email ou le mot de passe"};return{valid:!0}},verifySignupForm:function(e){return""===e.firstname&&""===e.lastname?{valid:!1,message:"Renseigner au moins un du prénom ou du nom"}:""===e.email||""===e.password1||""===e.password2?{valid:!1,message:"Email et mots de passe obligatoires"}:e.password1!==e.password2?{valid:!1,message:"Les mots de passe sont différents"}:{valid:!0}},alertCode:function(e){switch(e){case"empty":alert("Au moins un des champs n'est pas rempli");break;case"invalidemail":alert("Le format de l'email est invalide");break;case"usernotindb":alert("Cet email ne correspond à aucun compte connu");break;case"isapisignup":alert("Compte créer à partir d'un compte Google ou Github ou autre, donc peut-être réessayer avec un de ceux là ?");break;case"invalidpwd":alert("Erreur de mot de passe");break;case"diffpwd":alert("Les mots de passe ne sont pas identiques");break;case"minname":alert("Au minimun un nom ou un pseudo est nécessaire");break;case"exist":alert("Un compte existe déjà pour cet email, utiliser le lien pour récupérer un mot de passe perdu");break;case"inactive":alert("L'email pour ce compte n'a pas été confirmé. Vous pouvez soit suivre le lien reçu par mail (valable 10 minutes) ou recréer un compte puis valider le nouveau lien reçu");break;case"invalidpwd":alert("Le mot de passe doit contenir au minimu 5 caractères dont au moins une majuscule et un nombre");break;default:break}}},H=D,z={name:"LoginForm",components:{Button:M},data:function(){return{email:"",password:"",app:"auth",user:{},isPwdOk:!1}},mounted:function(){var e=window.location.search,t=new URLSearchParams(e);this.app=t.get("app");var n=t.get("code");n&&H.alertCode(n)},methods:{onSubmit:function(){var e={email:this.email,password:this.password,app:this.app},t=H.verifyLoginForm(e);if(!t.valid)return alert(t.message);H.post("".concat(N,"/login"),e)},checkPwd:function(){var e=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,50}$/.test(this.password);this.isPwdOk=e}},emits:["submit"]};n("194b");const Z=h()(z,[["render",E]]);var q=Z,J={components:{Button:M,Divider:R,LoginForm:q},data:function(){return{GOOGLE_URL:G,GITHUB_URL:A}},mounted:function(){try{var e=document.cookie.split("; "),t=e.find((function(e){return"app_ikodi"===e.substring(0,9)}));t.split("=")[1]}catch(n){console.log(n)}},emits:["toggle-signup","toggle-sendpass"]};n("9f54");const K=h()(J,[["render",_],["__scopeId","data-v-2bba3efd"]]);var Q=K,W={name:"Landing",components:{Hero:j,Options:Q},methods:{toggleSignup:function(){this.$emit("toggle-signup")}},emits:["toggle-signup","toggle-sendpass"]};n("56dd");const X=h()(W,[["render",i],["__scopeId","data-v-2ac923ba"]]);var Y=X,ee={class:"formcontainer"},te=Object(o["c"])("h1",{class:"modal__title"},"Création de compte",-1);function ne(e,t,n,a,s,i){var r=Object(o["k"])("Divider"),c=Object(o["k"])("SignupForm");return Object(o["h"])(),Object(o["b"])("section",{class:Object(o["f"])(n.showSignup?"modal --showModal":"modal")},[Object(o["c"])("div",ee,[Object(o["c"])("i",{class:"fas fa-times",onClick:t[0]||(t[0]=function(t){return e.$emit("toggle-signup")})}),te,Object(o["e"])(r),Object(o["e"])(c,{onToggleSignup:t[1]||(t[1]=function(t){return e.$emit("toggle-signup")})})])],2)}var oe={class:"group"},ae={class:"group"};function se(e,t,n,a,s,i){var r=this,c=Object(o["k"])("Button");return Object(o["h"])(),Object(o["b"])("form",{onSubmit:t[8]||(t[8]=Object(o["p"])((function(){return i.onSubmit&&i.onSubmit.apply(i,arguments)}),["prevent"]))},[Object(o["o"])(Object(o["c"])("input",{type:"text",name:"firstname",placeholder:"Prénom","onUpdate:modelValue":t[0]||(t[0]=function(e){return s.firstname=e})},null,512),[[o["m"],s.firstname]]),Object(o["o"])(Object(o["c"])("input",{type:"text",name:"lastname",placeholder:"Nom","onUpdate:modelValue":t[1]||(t[1]=function(e){return s.lastname=e})},null,512),[[o["m"],s.lastname]]),Object(o["o"])(Object(o["c"])("input",{type:"email",name:"email",placeholder:"Email","onUpdate:modelValue":t[2]||(t[2]=function(e){return s.email=e})},null,512),[[o["m"],s.email]]),Object(o["c"])("div",oe,[Object(o["o"])(Object(o["c"])("input",{type:"password",name:"password1",placeholder:"Mot de passe",onInput:t[3]||(t[3]=function(){return i.checkPwd1&&i.checkPwd1.apply(i,arguments)}),"onUpdate:modelValue":t[4]||(t[4]=function(e){return s.password1=e}),class:Object(o["f"])(this.isPwd1Ok?"--valid":"")},null,34),[[o["m"],s.password1]]),Object(o["c"])("span",{class:Object(o["f"])(this.isPwd1Ok?"--valid":"--invalid")},Object(o["l"])(this.isPwd1Ok?"Ok !":"Minimum 5 caractères dont au moins une majuscule et un nombre"),3)]),Object(o["c"])("div",ae,[Object(o["o"])(Object(o["c"])("input",{type:"password",name:"password2",placeholder:"Confirmation du mot de passe","onUpdate:modelValue":t[5]||(t[5]=function(e){return s.password2=e}),onInput:t[6]||(t[6]=function(){return i.checkPwd2&&i.checkPwd2.apply(i,arguments)}),class:Object(o["f"])(this.isPwd1Ok&&this.isPwd2Ok?"--valid":"")},null,34),[[o["m"],s.password2]])]),Object(o["o"])(Object(o["c"])("input",{type:"text",name:"app","onUpdate:modelValue":t[7]||(t[7]=function(e){return r.app=e})},null,512),[[o["n"],!1],[o["m"],this.app]]),Object(o["e"])(c,{text:"Valider",className:"--blue",width:"80%"})],32)}var ie=n("1da1"),re=(n("96cf"),n("25f0"),n("bc3a")),ce=n.n(re),ue={name:"SignupForm",components:{Button:M},data:function(){return{firstname:"",lastname:"",email:"",password1:"",password2:"",app:"",isPwd1Ok:!1,isPwd2Ok:!1}},mounted:function(){var e=window.location.search,t=new URLSearchParams(e);this.app=t.get("app")},methods:{onSubmit:function(){var e=this;return Object(ie["a"])(regeneratorRuntime.mark((function t(){var n,o,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n={firstname:e.firstname,lastname:e.lastname,email:e.email,password1:e.password1,password2:e.password2,app:e.app},o=H.verifySignupForm(n),o.valid){t.next=4;break}return t.abrupt("return",alert(o.message));case 4:return t.prev=4,t.next=7,ce.a.post("".concat(N,"/signup"),n);case 7:a=t.sent,a.data.code&&H.alertCode(a.data.code),e.$emit("toggle-signup"),t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](4),t.t0.response?alert(t.t0.response.data.message):alert(t.t0.toString());case 15:case"end":return t.stop()}}),t,null,[[4,12]])})))()},checkPwd1:function(){var e=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,50}$/.test(this.password1);this.isPwd1Ok=e,this.checkPwd2()},checkPwd2:function(){return console.log("checkPwd2"),this.isPwd2Ok=this.password1===this.password2}},emits:["toggle-signup"]};n("42aa");const le=h()(ue,[["render",se]]);var pe=le,de={name:"SignupModal",props:{showSignup:{type:Boolean,default:!1}},components:{Divider:R,SignupForm:pe},emits:["toggle-signup"]};n("0b18");const me=h()(de,[["render",ne]]);var be=me,ge={class:"formcontainer"},fe=Object(o["c"])("h1",{class:"modal__title"},"Réinitialiser le mot de passe",-1);function he(e,t,n,a,s,i){var r=Object(o["k"])("Divider"),c=Object(o["k"])("SendPassForm");return Object(o["h"])(),Object(o["b"])("section",{class:Object(o["f"])(n.showSendpass?"modal --showModal":"modal")},[Object(o["c"])("div",ge,[Object(o["c"])("i",{class:"fas fa-times",onClick:t[0]||(t[0]=function(t){return e.$emit("toggle-sendpass")})}),fe,Object(o["e"])(r),Object(o["e"])(c,{onToggleSendpass:t[1]||(t[1]=function(t){return e.$emit("toggle-sendpass")})})])],2)}function Oe(e,t,n,a,s,i){var r=this,c=Object(o["k"])("Button");return Object(o["h"])(),Object(o["b"])("form",{onSubmit:t[1]||(t[1]=Object(o["p"])((function(){return i.onSubmit&&i.onSubmit.apply(i,arguments)}),["prevent"]))},[Object(o["o"])(Object(o["c"])("input",{type:"email",name:"email",placeholder:"Email","onUpdate:modelValue":t[0]||(t[0]=function(e){return r.email=e})},null,512),[[o["m"],this.email]]),Object(o["e"])(c,{text:"Envoyer",className:"--blue",width:"100%"})],32)}var je={name:"SendPassForm",components:{Button:M},data:function(){return{email:""}},methods:{onSubmit:function(e){var t=this;return Object(ie["a"])(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n={email:t.email},""!==t.email){e.next=3;break}return e.abrupt("return",alert("Champ email vide"));case 3:return e.prev=3,e.next=6,ce.a.post("".concat(N,"/forgot-pwd"),n);case 6:o=e.sent,alert(o.data.message),t.$emit("toggle-sendpass"),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](3),e.t0.response?alert(e.t0.response.data.message):alert(e.t0.toString());case 14:case"end":return e.stop()}}),e,null,[[3,11]])})))()}},emits:["toggle-sendpass"]};const ve=h()(je,[["render",Oe]]);var we=ve,Se={name:"SendPassModal",props:{showSendpass:{type:Boolean,default:!1}},components:{Divider:R,SendPassForm:we}};n("3167");const ke=h()(Se,[["render",he]]);var ye=ke,Pe={name:"App",components:{Landing:Y,SignupModal:be,SendPassModal:ye},data:function(){return{showSignup:!1,showSendpass:!1}},methods:{toggleSignup:function(){this.showSignup=!this.showSignup},toggleSendpass:function(){this.showSendpass=!this.showSendpass}}};n("acbc");const _e=h()(Pe,[["render",a]]);var xe=_e;Object(o["a"])(xe).mount("#app")},"56dd":function(e,t,n){"use strict";n("0e7b")},"5a1e":function(e,t,n){"use strict";n("8422")},8422:function(e,t,n){},"9f54":function(e,t,n){"use strict";n("d299")},acbc:function(e,t,n){"use strict";n("b14d")},b14d:function(e,t,n){},bf72:function(e,t,n){},c8ca:function(e,t,n){"use strict";n("2e9a")},d299:function(e,t,n){},f97b:function(e,t,n){}});
//# sourceMappingURL=app.48748445.js.map