(function(e){function t(t){for(var o,s,r=t[0],c=t[1],u=t[2],p=0,d=[];p<r.length;p++)s=r[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);l&&l(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(o=!1)}o&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},a={app:0},i=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var u=0;u<r.length;u++)t(r[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0133":function(e,t,n){},"0935":function(e,t,n){"use strict";n("2e50")},"221d":function(e,t,n){"use strict";n("c536")},"254e":function(e,t,n){},"2d48":function(e,t,n){e.exports=n.p+"img/auth-hero.64407225.png"},"2e50":function(e,t,n){},"2e9a":function(e,t,n){},"30cd":function(e,t,n){"use strict";n("9a8c")},3167:function(e,t,n){"use strict";n("4419")},4419:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");function a(e,t,n,a,i,s){var r=Object(o["p"])("Landing"),c=Object(o["p"])("SignupModal"),u=Object(o["p"])("SendPassModal"),l=Object(o["p"])("ProfileModal"),p=Object(o["p"])("CookieConsent");return Object(o["l"])(),Object(o["e"])("section",null,[Object(o["h"])(r,{onToggleSignup:s.toggleSignup,onToggleSendpass:s.toggleSendpass,onToggleProfile:s.toggleProfile},null,8,["onToggleSignup","onToggleSendpass","onToggleProfile"]),Object(o["h"])(c,{showSignup:i.showSignup,onToggleSignup:s.toggleSignup},null,8,["showSignup","onToggleSignup"]),Object(o["h"])(u,{showSendpass:i.showSendpass,onToggleSendpass:s.toggleSendpass},null,8,["showSendpass","onToggleSendpass"]),Object(o["h"])(l,{showProfile:i.showProfile,onToggleProfile:s.toggleProfile},null,8,["showProfile","onToggleProfile"]),Object(o["h"])(p)])}var i={class:"landing"};function s(e,t,n,a,s,r){var c=Object(o["p"])("Hero"),u=Object(o["p"])("Options");return Object(o["l"])(),Object(o["e"])("section",i,[Object(o["h"])(c),Object(o["h"])(u,{onToggleSignup:t[0]||(t[0]=function(t){return e.$emit("toggle-signup")}),onToggleSendpass:t[1]||(t[1]=function(t){return e.$emit("toggle-sendpass")}),onToggleProfile:t[2]||(t[2]=function(t){return e.$emit("toggle-profile")})})])}var r=n("2d48"),c=n.n(r),u=function(e){return Object(o["n"])("data-v-53f308db"),e=e(),Object(o["m"])(),e},l={class:"hero"},p=u((function(){return Object(o["f"])("img",{src:c.a,alt:"hero img",class:"hero__img"},null,-1)})),d=u((function(){return Object(o["f"])("div",{class:"hero__text"},"Se connecter ou créer un compte",-1)})),m=[p,d];function f(e,t,n,a,i,s){return Object(o["l"])(),Object(o["e"])("div",l,m)}var b={name:"Hero"},g=(n("c8ca"),n("6b0d")),h=n.n(g);const O=h()(b,[["render",f],["__scopeId","data-v-53f308db"]]);var j=O,v=(n("99af"),{class:"options"}),w={class:"options__socialaccounts"},k=["href"],S=["href"],y={class:"options__formcontainer"},P={class:"options__createprofile"},_={class:"options__createprofile"};function x(e,t,n,a,i,s){var r=Object(o["p"])("Button"),c=Object(o["p"])("Divider"),u=Object(o["p"])("LoginForm");return Object(o["l"])(),Object(o["e"])("div",v,[Object(o["f"])("div",w,[Object(o["f"])("a",{href:"".concat(this.GOOGLE_URL,"?app=").concat(this.app)},[Object(o["h"])(r,{text:"Google",color:"white",icon:'<img src="https://img.icons8.com/color/25/000000/google-logo.png"/>'})],8,k),Object(o["f"])("a",{href:"".concat(this.GITHUB_URL,"?app=").concat(this.app)},[Object(o["h"])(r,{text:"Github",color:"white",icon:'<img src="https://img.icons8.com/fluency/25/000000/github.png"/>'})],8,S),Object(o["h"])(r,{text:"Linkedin",color:"#bdbdc6",icon:'<img src="https://img.icons8.com/fluency/25/000000/linkedin.png"/>'})]),Object(o["h"])(c,{text:"OU"}),Object(o["f"])("div",y,[Object(o["h"])(u)]),Object(o["f"])("p",{onClick:t[0]||(t[0]=function(t){return e.$emit("toggle-sendpass")}),className:"options__forgotpassword",id:"toggle-sendpass"}," Mot de passe perdu ? "),Object(o["h"])(c),Object(o["f"])("div",P,[Object(o["h"])(r,{onClick:t[1]||(t[1]=function(t){return e.$emit("toggle-signup")}),text:"Créer un compte",width:"80%",className:"--grey",dataTest:"toggle-signup"})]),Object(o["f"])("div",_,[Object(o["h"])(r,{onClick:t[2]||(t[2]=function(t){return e.$emit("toggle-profile")}),text:"Modifier mes infos",width:"80%",className:"--grey",dataTest:"toggle-profile"})])])}n("ac1f"),n("841c"),n("d3b7"),n("3ca3"),n("ddb0"),n("9861");var C=["href","data-test"],L=["innerHTML"];function T(e,t,n,a,i,s){return Object(o["l"])(),Object(o["e"])("button",{style:Object(o["k"])({backgroundColor:n.color,width:n.width}),class:Object(o["j"])("btn ".concat(n.className)),href:n.href,"data-test":n.dataTest},[Object(o["u"])(Object(o["f"])("span",{innerHTML:n.icon},null,8,L),[[o["s"],s.isIcon]]),Object(o["g"])(" "+Object(o["q"])(n.text),1)],14,C)}var M={name:"Button",props:{href:{type:String,default:"https://ikodi.eu"},text:{type:String,default:"Bouton"},width:{type:String,default:"fit-content"},className:{type:String,default:""},color:{type:String},icon:{type:String},dataTest:{type:String}},computed:{isIcon:function(){return"undefined"!==typeof this.icon}}};n("0935");const U=h()(M,[["render",T],["__scopeId","data-v-6d7ec0a8"]]);var $=U,D={class:"divider"};function B(e,t,n,a,i,s){return Object(o["l"])(),Object(o["e"])("div",D,[Object(o["f"])("span",null,Object(o["q"])(n.text),1)])}var F={name:"Divider",props:{text:{type:String}}};n("5a1e");const I=h()(F,[["render",B],["__scopeId","data-v-79bd1b90"]]);var N=I,R={class:"group"};function A(e,t,n,a,i,s){var r=this,c=Object(o["p"])("Button");return Object(o["l"])(),Object(o["e"])("form",{onSubmit:t[5]||(t[5]=Object(o["v"])((function(){return s.onSubmit&&s.onSubmit.apply(s,arguments)}),["prevent"]))},[Object(o["u"])(Object(o["f"])("input",{type:"email",name:"email",placeholder:"Email",max:"250","onUpdate:modelValue":t[0]||(t[0]=function(e){return r.email=e})},null,512),[[o["r"],this.email]]),Object(o["f"])("div",R,[Object(o["u"])(Object(o["f"])("input",{type:"password",name:"password",placeholder:"Mot de passe",max:"250",onInput:t[1]||(t[1]=function(){return s.checkPwd&&s.checkPwd.apply(s,arguments)}),"onUpdate:modelValue":t[2]||(t[2]=function(e){return i.password=e}),class:Object(o["j"])(this.isPwdOk?"--valid":"")},null,34),[[o["r"],i.password]]),Object(o["f"])("span",{class:Object(o["j"])(this.isPwdOk?"--valid":"--invalid")},Object(o["q"])(this.isPwdOk?"Ok !":"Minimum 5 caractères dont au moins une majuscule et un nombre"),3)]),Object(o["u"])(Object(o["f"])("input",{type:"text",name:"app","onUpdate:modelValue":t[3]||(t[3]=function(e){return r.app=e})},null,512),[[o["s"],!1],[o["r"],this.app]]),Object(o["h"])(c,{onClick:t[4]||(t[4]=function(t){return e.$emit("submit")}),text:"Connexion",className:"--blue",width:"80%"})],32)}n("00b4");var E="https://auth.ikodi.eu/google",V="https://auth.ikodi.eu/github",q="https://auth.ikodi.eu",G={post:function(e,t){var n=document.createElement("form");for(var o in n.method="post",n.action=e,t){var a=document.createElement("input");a.setAttribute("name",o),a.setAttribute("value",t[o]),n.appendChild(a)}document.body.appendChild(n),n.submit(),document.body.removeChild(n)},verifyLoginForm:function(e){for(var t in e)if(""===e[t])return{valid:!1,message:"Il manque l'email ou le mot de passe"};return e.password.length<5?{valid:!1,message:"Le mot de passe doit être composé de 5 caractères au minimum dont au moins une majuscule et un nombre."}:{valid:!0}},verifySignupForm:function(e){var t=[];return""===e.firstname&&""===e.lastname&&t.push("Renseigner au moins un du prénom ou du nom"),""!==e.email&&""!==e.password1&&""!==e.password2||t.push("Email et mots de passe obligatoires"),e.password1!==e.password2&&t.push("Les mots de passe sont différents"),/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,50}$/.test(e.password1)||t.push("Le mot de passe doit être composé de 5 caractères au minimum dont au moins une majuscule et un nombre."),t.length?{valid:!1,messages:t}:{valid:!0}},alertCode:function(e){switch(e){case"empty":alert("Au moins un des champs n'est pas rempli");break;case"invalidemail":alert("Le format de l'email est invalide");break;case"usernotindb":alert("Cet email ne correspond à aucun compte connu");break;case"isapisignup":alert("Compte créer à partir d'un compte Google ou Github ou autre, donc peut-être réessayer avec un de ceux là ?");break;case"diffpwd":alert("Les mots de passe ne sont pas identiques");break;case"minname":alert("Au minimun un nom ou un pseudo est nécessaire");break;case"exist":alert("Un compte existe déjà pour cet email, utiliser le lien pour récupérer un mot de passe perdu");break;case"inactive":alert("L'email pour ce compte n'a pas été confirmé. Vous pouvez soit suivre le lien reçu par mail (valable 10 minutes) ou recréer un compte puis valider le nouveau lien reçu");break;case"invalidpwd":alert("Le mot de passe doit contenir au minimum 5 caractères dont au moins une majuscule et un nombre");break;default:break}}},z=G,H={name:"LoginForm",components:{Button:$},data:function(){return{email:"",password:"",app:"auth",user:{},isPwdOk:!1}},mounted:function(){var e=window.location.search,t=new URLSearchParams(e);this.app=t.get("app");var n=t.get("code");n&&z.alertCode(n)},methods:{onSubmit:function(){var e={email:this.email,password:this.password,app:this.app},t=z.verifyLoginForm(e);if(!t.valid)return alert(t.message);z.post("".concat(q,"/login"),e)},checkPwd:function(){var e=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,50}$/.test(this.password);this.isPwdOk=e}},emits:["submit"]};n("a060");const Z=h()(H,[["render",A]]);var J=Z,K={components:{Button:$,Divider:N,LoginForm:J},data:function(){return{GOOGLE_URL:E,GITHUB_URL:V,app:app}},mounted:function(){var e=window.location.search,t=new URLSearchParams(e);this.app=t.get("app")},emits:["toggle-signup","toggle-sendpass","toggle-profile"]};n("bec2");const Q=h()(K,[["render",x],["__scopeId","data-v-1c08182a"]]);var W=Q,X={name:"Landing",components:{Hero:j,Options:W},emits:["toggle-signup","toggle-sendpass","toggle-profile"]};n("30cd");const Y=h()(X,[["render",s],["__scopeId","data-v-19d0bdba"]]);var ee=Y,te=function(e){return Object(o["n"])("data-v-3496a4dc"),e=e(),Object(o["m"])(),e},ne={class:"formcontainer"},oe=te((function(){return Object(o["f"])("h1",{class:"modal__title"},"Création de compte",-1)}));function ae(e,t,n,a,i,s){var r=Object(o["p"])("Divider"),c=Object(o["p"])("SignupForm");return Object(o["l"])(),Object(o["e"])("section",{class:Object(o["j"])(n.showSignup?"modal --showModal":"modal")},[Object(o["f"])("div",ne,[Object(o["f"])("i",{class:"fas fa-times",onClick:t[0]||(t[0]=function(t){return e.$emit("toggle-signup")})}),oe,Object(o["h"])(r),Object(o["h"])(c,{onToggleSignup:t[1]||(t[1]=function(t){return e.$emit("toggle-signup")})})])],2)}var ie={class:"group"},se={class:"group"};function re(e,t,n,a,i,s){var r=this,c=Object(o["p"])("Button");return Object(o["l"])(),Object(o["e"])("form",{onSubmit:t[8]||(t[8]=Object(o["v"])((function(){return s.onSubmit&&s.onSubmit.apply(s,arguments)}),["prevent"]))},[Object(o["u"])(Object(o["f"])("input",{type:"text",name:"firstname",placeholder:"Prénom","onUpdate:modelValue":t[0]||(t[0]=function(e){return i.firstname=e})},null,512),[[o["r"],i.firstname]]),Object(o["u"])(Object(o["f"])("input",{type:"text",name:"lastname",placeholder:"Nom","onUpdate:modelValue":t[1]||(t[1]=function(e){return i.lastname=e})},null,512),[[o["r"],i.lastname]]),Object(o["u"])(Object(o["f"])("input",{type:"email",name:"email",placeholder:"Email","onUpdate:modelValue":t[2]||(t[2]=function(e){return i.email=e})},null,512),[[o["r"],i.email]]),Object(o["f"])("div",ie,[Object(o["u"])(Object(o["f"])("input",{type:"password",name:"password1",placeholder:"Mot de passe",onInput:t[3]||(t[3]=function(){return s.checkPwd1&&s.checkPwd1.apply(s,arguments)}),"onUpdate:modelValue":t[4]||(t[4]=function(e){return i.password1=e}),class:Object(o["j"])(this.isPwd1Ok?"--valid":"")},null,34),[[o["r"],i.password1]]),Object(o["f"])("span",{class:Object(o["j"])(this.isPwd1Ok?"--valid":"--invalid")},Object(o["q"])(this.isPwd1Ok?"Ok !":"Minimum 5 caractères dont au moins une majuscule et un nombre"),3)]),Object(o["f"])("div",se,[Object(o["u"])(Object(o["f"])("input",{type:"password",name:"password2",placeholder:"Confirmation du mot de passe","onUpdate:modelValue":t[5]||(t[5]=function(e){return i.password2=e}),onInput:t[6]||(t[6]=function(){return s.checkPwd2&&s.checkPwd2.apply(s,arguments)}),class:Object(o["j"])(this.isPwd1Ok&&this.isPwd2Ok?"--valid":"")},null,34),[[o["r"],i.password2]])]),Object(o["u"])(Object(o["f"])("input",{type:"text",name:"app","onUpdate:modelValue":t[7]||(t[7]=function(e){return r.app=e})},null,512),[[o["s"],!1],[o["r"],this.app]]),Object(o["h"])(c,{text:"Valider",className:"--blue",width:"80%"})],32)}var ce=n("1da1"),ue=(n("96cf"),n("159b"),n("25f0"),n("bc3a")),le=n.n(ue),pe={name:"SignupForm",components:{Button:$},data:function(){return{firstname:"",lastname:"",email:"",password1:"",password2:"",app:"auth",isPwd1Ok:!1,isPwd2Ok:!1}},mounted:function(){var e=window.location.search,t=new URLSearchParams(e);this.app=t.get("app")},methods:{onSubmit:function(){var e=this;return Object(ce["a"])(regeneratorRuntime.mark((function t(){var n,o,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n={firstname:e.firstname,lastname:e.lastname,email:e.email,password1:e.password1,password2:e.password2,app:e.app},o=z.verifySignupForm(n),o.valid){t.next=4;break}return t.abrupt("return",o.messages.forEach((function(e){return alert(e)})));case 4:return t.prev=4,t.next=7,le.a.post("".concat(q,"/signup"),n);case 7:if(a=t.sent,!a.data.code){t.next=10;break}return t.abrupt("return",z.alertCode(a.data.code));case 10:a.data.message&&(alert(a.data.message),e.$emit("toggle-signup")),t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](4),t.t0.response?alert(t.t0.response.data.message):alert(t.t0.toString());case 16:case"end":return t.stop()}}),t,null,[[4,13]])})))()},checkPwd1:function(){var e=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,50}$/.test(this.password1);this.isPwd1Ok=e,this.checkPwd2()},checkPwd2:function(){return console.log("checkPwd2"),this.isPwd2Ok=this.password1===this.password2}},emits:["toggle-signup"]};n("f688");const de=h()(pe,[["render",re]]);var me=de,fe={name:"SignupModal",props:{showSignup:{type:Boolean,default:!1}},components:{Divider:N,SignupForm:me},emits:["toggle-signup"]};n("f4c8");const be=h()(fe,[["render",ae],["__scopeId","data-v-3496a4dc"]]);var ge=be,he={class:"formcontainer"},Oe=Object(o["f"])("h1",{class:"modal__title"},"Réinitialiser le mot de passe",-1);function je(e,t,n,a,i,s){var r=Object(o["p"])("Divider"),c=Object(o["p"])("SendPassForm");return Object(o["l"])(),Object(o["e"])("section",{class:Object(o["j"])(n.showSendpass?"modal --showModal":"modal")},[Object(o["f"])("div",he,[Object(o["f"])("i",{class:"fas fa-times",onClick:t[0]||(t[0]=function(t){return e.$emit("toggle-sendpass")})}),Oe,Object(o["h"])(r),Object(o["h"])(c,{onToggleSendpass:t[1]||(t[1]=function(t){return e.$emit("toggle-sendpass")})})])],2)}function ve(e,t,n,a,i,s){var r=this,c=Object(o["p"])("Button");return Object(o["l"])(),Object(o["e"])("form",{onSubmit:t[1]||(t[1]=Object(o["v"])((function(){return s.onSubmit&&s.onSubmit.apply(s,arguments)}),["prevent"]))},[Object(o["u"])(Object(o["f"])("input",{type:"email",name:"email",placeholder:"Email","onUpdate:modelValue":t[0]||(t[0]=function(e){return r.email=e})},null,512),[[o["r"],this.email]]),Object(o["h"])(c,{text:"Envoyer",className:"--blue",width:"100%"})],32)}var we={name:"SendPassForm",components:{Button:$},data:function(){return{email:""}},methods:{onSubmit:function(e){var t=this;return Object(ce["a"])(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n={email:t.email},""!==t.email){e.next=3;break}return e.abrupt("return",alert("Champ email vide"));case 3:return e.prev=3,e.next=6,le.a.post("".concat(q,"/forgot-pwd"),n);case 6:o=e.sent,alert(o.data.message),t.$emit("toggle-sendpass"),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](3),e.t0.response?alert(e.t0.response.data.message):alert(e.t0.toString());case 14:case"end":return e.stop()}}),e,null,[[3,11]])})))()}},emits:["toggle-sendpass"]};const ke=h()(we,[["render",ve]]);var Se=ke,ye={name:"SendPassModal",props:{showSendpass:{type:Boolean,default:!1}},components:{Divider:N,SendPassForm:Se}};n("3167");const Pe=h()(ye,[["render",je]]);var _e=Pe,xe={class:"formcontainer"},Ce=Object(o["f"])("h1",{class:"modal__title"},"Modifier le Profil",-1);function Le(e,t,n,a,i,s){var r=Object(o["p"])("Divider"),c=Object(o["p"])("SignupForm");return Object(o["l"])(),Object(o["e"])("section",{class:Object(o["j"])(n.showProfile?"modal --showModal":"modal")},[Object(o["f"])("div",xe,[Object(o["f"])("i",{class:"fas fa-times",onClick:t[0]||(t[0]=function(t){return e.$emit("toggle-profile")})}),Ce,Object(o["h"])(r),Object(o["h"])(c,{onToggleProfile:t[1]||(t[1]=function(t){return e.$emit("toggle-profile")})})])],2)}var Te={name:"ProfileModal",props:{showProfile:{type:Boolean,default:!1}},components:{Divider:N,SignupForm:me},emits:["toggle-profile"]};n("94ad");const Me=h()(Te,[["render",Le]]);var Ue=Me,$e={key:0,class:"cookie-consent",role:"dialog"},De={class:"cookie-consent-message"},Be={class:"cookie-consent-compliance",type:"button"};function Fe(e,t,n,a,i,s){return Object(o["l"])(),Object(o["c"])(o["a"],{name:n.transition},{default:Object(o["t"])((function(){return[i.show?(Object(o["l"])(),Object(o["e"])("div",$e,[Object(o["o"])(e.$slots,"message",{},(function(){return[Object(o["f"])("span",De,[Object(o["g"])(Object(o["q"])(n.message)+" ",1),Object(o["o"])(e.$slots,"link",{},(function(){return[Object(o["f"])("a",Object(o["i"])({href:n.href,target:n.target,rel:n.rel},{class:"cookie-consent-link",role:"button"}),Object(o["q"])(n.linkLabel),17)]}))])]})),Object(o["f"])("div",{onClick:t[0]||(t[0]=function(){return s.dismiss&&s.dismiss.apply(s,arguments)})},[Object(o["o"])(e.$slots,"button",{},(function(){return[Object(o["f"])("button",Be,Object(o["q"])(n.buttonLabel),1)]}))])])):Object(o["d"])("",!0)]})),_:3},8,["name"])}n("a9e3"),n("1276"),n("a15b");var Ie={name:"CookieConsent",props:{transition:{type:String,default:"cookie-consent-transition"},message:{type:String,default:"Ce site utilise des cookies internes, uniquement pour son fonctionnement.\n        Aucun cookies ni aucune informations saisies sur les sites du domaine ikodi.eu ne sont utilisés à des fins commerciales."},linkLabel:{type:String,default:"Plus d'infos"},buttonLabel:{type:String,default:"Compris"},href:{type:String,default:"https://www.cnil.fr/fr/definition/cookie"},target:{type:String,default:"_blank"},rel:{type:String,default:"noopener"},cookieName:{type:String,default:"cookieconsent_status"},cookiePath:{type:String,default:"/"},cookieDomain:{type:String,default:""},cookieExpiryDays:{type:Number,default:365}},data:function(){return{show:void 0}},computed:{cookie:function(){return!this.getCookie(this.cookieName)}},beforeMount:function(){this.show=this.cookie},methods:{dismiss:function(){this.show=!1,this.setCookie(this.cookieName,1,this.cookieExpiryDays,this.cookieDomain,this.cookiePath)},getCookie:function(e){var t="; ".concat(document.cookie),n=t.split("; ".concat(e,"="));return 2!==n.length?void 0:n.pop().split(";").shift()},setCookie:function(e,t,n,o,a){var i=new Date;i.setDate(i.getDate()+(n||365));var s=["".concat(e,"=").concat(t),"expires=".concat(i.toUTCString()),"path=".concat(a||"/")];o&&s.push("domain=".concat(o)),document.cookie=s.join(";")}}};const Ne=h()(Ie,[["render",Fe]]);var Re=Ne,Ae={name:"App",components:{Landing:ee,SignupModal:ge,SendPassModal:_e,ProfileModal:Ue,CookieConsent:Re},data:function(){return{showSignup:!1,showSendpass:!1,showProfile:!1}},methods:{toggleSignup:function(){this.showSignup=!this.showSignup},toggleSendpass:function(){this.showSendpass=!this.showSendpass},toggleProfile:function(){this.showProfile=!this.showProfile}}};n("221d");const Ee=h()(Ae,[["render",a]]);var Ve=Ee;Object(o["b"])(Ve).mount("#app")},"5a1e":function(e,t,n){"use strict";n("8422")},"5b59":function(e,t,n){},8422:function(e,t,n){},"94ad":function(e,t,n){"use strict";n("0133")},"97e8":function(e,t,n){},"9a8c":function(e,t,n){},a060:function(e,t,n){"use strict";n("b8ac")},b8ac:function(e,t,n){},bec2:function(e,t,n){"use strict";n("5b59")},c536:function(e,t,n){},c8ca:function(e,t,n){"use strict";n("2e9a")},f4c8:function(e,t,n){"use strict";n("254e")},f688:function(e,t,n){"use strict";n("97e8")}});
//# sourceMappingURL=app.f5030506.js.map