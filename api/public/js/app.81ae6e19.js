(function(e){function t(t){for(var o,a,r=t[0],c=t[1],l=t[2],p=0,d=[];p<r.length;p++)a=r[p],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);u&&u(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,r=1;r<n.length;r++){var c=n[r];0!==s[c]&&(o=!1)}o&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},s={app:0},i=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"16fe":function(e,t,n){"use strict";n("df2f")},2470:function(e,t,n){},"2d48":function(e,t,n){e.exports=n.p+"img/auth-hero.64407225.png"},"2e9a":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");function s(e,t,n,s,i,a){var r=Object(o["t"])("Landing"),c=Object(o["t"])("SignupModal"),l=Object(o["t"])("SendPassModal"),u=Object(o["t"])("ProfileModal"),p=Object(o["t"])("CookieConsent");return Object(o["p"])(),Object(o["g"])("section",null,[Object(o["j"])(r,{onToggleSignup:a.toggleSignup,onToggleSendpass:a.toggleSendpass,onToggleProfile:a.toggleProfile,user:i.user},null,8,["onToggleSignup","onToggleSendpass","onToggleProfile","user"]),Object(o["j"])(c,{showSignup:i.showSignup,onToggleSignup:a.toggleSignup},null,8,["showSignup","onToggleSignup"]),Object(o["j"])(l,{showSendpass:i.showSendpass,onToggleSendpass:a.toggleSendpass},null,8,["showSendpass","onToggleSendpass"]),Object(o["j"])(u,{showProfile:i.showProfile,onToggleProfile:a.toggleProfile,user:i.user},null,8,["showProfile","onToggleProfile","user"]),Object(o["j"])(p)])}var i=n("1da1"),a=(n("96cf"),{class:"landing"});function r(e,t,n,s,i,r){var c=Object(o["t"])("Hero"),l=Object(o["t"])("Options");return Object(o["p"])(),Object(o["g"])("section",a,[Object(o["j"])(c),Object(o["j"])(l,{onToggleSignup:t[0]||(t[0]=function(t){return e.$emit("toggle-signup")}),onToggleSendpass:t[1]||(t[1]=function(t){return e.$emit("toggle-sendpass")}),onToggleProfile:t[2]||(t[2]=function(t){return e.$emit("toggle-profile")}),user:n.user},null,8,["user"])])}var c=n("2d48"),l=n.n(c),u=function(e){return Object(o["r"])("data-v-53f308db"),e=e(),Object(o["q"])(),e},p={class:"hero"},d=u((function(){return Object(o["h"])("img",{src:l.a,alt:"hero img",class:"hero__img"},null,-1)})),m=u((function(){return Object(o["h"])("div",{class:"hero__text"},"Se connecter ou créer un compte",-1)})),b=[d,m];function h(e,t,n,s,i,a){return Object(o["p"])(),Object(o["g"])("div",p,b)}var f={name:"Hero"},g=(n("c8ca"),n("6b0d")),j=n.n(g);const O=j()(f,[["render",h],["__scopeId","data-v-53f308db"]]);var w=O,v=(n("99af"),function(e){return Object(o["r"])("data-v-16f256ac"),e=e(),Object(o["q"])(),e}),k={class:"options"},y={class:"options__socialaccounts"},P=["href"],S=["href"],x={class:"options__formcontainer"},C={class:"options__wide"},V={class:"options"},I=Object(o["i"])(" Vous êtes connecté en tant que "),_=v((function(){return Object(o["h"])("br",null,null,-1)})),A={class:"options__wide"},L={class:"options__wide"},U={class:"options__wide"},M={class:"options__wide"};function T(e,t,n,s,i,a){var r=Object(o["t"])("Button"),c=Object(o["t"])("Divider"),l=Object(o["t"])("LoginForm");return Object(o["p"])(),Object(o["g"])(o["a"],null,[Object(o["A"])(Object(o["h"])("div",k,[Object(o["h"])("div",y,[Object(o["h"])("a",{href:"".concat(this.GOOGLE_URL,"?app=").concat(this.app)},[Object(o["j"])(r,{text:"Google",color:"white",icon:'<img src="https://img.icons8.com/color/25/000000/google-logo.png"/>'})],8,P),Object(o["h"])("a",{href:"".concat(this.GITHUB_URL,"?app=").concat(this.app)},[Object(o["j"])(r,{text:"Github",color:"white",icon:'<img src="https://img.icons8.com/fluency/25/000000/github.png"/>'})],8,S)]),Object(o["j"])(c,{text:"OU"}),Object(o["h"])("div",x,[Object(o["j"])(l)]),Object(o["h"])("p",{onClick:t[0]||(t[0]=function(t){return e.$emit("toggle-sendpass")}),className:"options__forgotpassword",id:"toggle-sendpass"}," Mot de passe perdu ? "),Object(o["j"])(c),Object(o["h"])("div",C,[Object(o["j"])(r,{onClick:t[1]||(t[1]=function(t){return e.$emit("toggle-signup")}),text:"Créer un compte",width:"80%",className:"--grey",dataTest:"toggle-signup"})])],512),[[o["x"],!n.user.isLoggued]]),Object(o["A"])(Object(o["h"])("div",V,[Object(o["h"])("h2",null,[I,_,Object(o["h"])("em",null,Object(o["u"])(this.user.nickname),1)]),Object(o["h"])("div",A,[Object(o["h"])("div",L,[Object(o["j"])(r,{onClick:t[2]||(t[2]=function(t){return e.$emit("toggle-profile")}),text:"Modifier mes infos",width:"80%",className:"--blue",dataTest:"toggle-profile"})]),Object(o["h"])("div",U,[Object(o["j"])(r,{onClick:a.logout,text:"Déconnexion",width:"80%",className:"--grey"},null,8,["onClick"])]),Object(o["h"])("div",M,[Object(o["j"])(r,{onClick:a.deleteMe,text:"Supprimer ce compte",width:"80%",className:"--grey"},null,8,["onClick"])])])],512),[[o["x"],n.user.isLoggued]])],64)}n("d3b7"),n("25f0"),n("ac1f"),n("841c"),n("3ca3"),n("ddb0"),n("9861");var F=["href","data-test"],R=["innerHTML"];function B(e,t,n,s,i,a){return Object(o["p"])(),Object(o["g"])("button",{style:Object(o["o"])({backgroundColor:n.color,width:n.width}),class:Object(o["n"])("btn ".concat(n.className)),href:n.href,"data-test":n.dataTest},[Object(o["A"])(Object(o["h"])("span",{innerHTML:n.icon},null,8,R),[[o["x"],a.isIcon]]),Object(o["i"])(" "+Object(o["u"])(n.text),1)],14,F)}var N={name:"Button",props:{href:{type:String,default:"https://ikodi.eu"},text:{type:String,default:"Bouton"},width:{type:String,default:"fit-content"},className:{type:String,default:""},color:{type:String},icon:{type:String},dataTest:{type:String}},computed:{isIcon:function(){return"undefined"!==typeof this.icon}}};n("6b25");const $=j()(N,[["render",B],["__scopeId","data-v-b616205a"]]);var D=$,E={class:"divider"};function G(e,t,n,s,i,a){return Object(o["p"])(),Object(o["g"])("div",E,[Object(o["h"])("span",null,Object(o["u"])(n.text),1)])}var q={name:"Divider",props:{text:{type:String}}};n("5a1e");const H=j()(q,[["render",G],["__scopeId","data-v-79bd1b90"]]);var z=H,J={class:"inputrow"},Z=Object(o["h"])("label",{for:"email"},"Email :",-1),K=Object(o["h"])("div",{class:"icon"},null,-1),Q={class:"group"},W={class:"inputrow"},X=Object(o["h"])("label",{for:"password"},"Mot de passe :",-1),Y=["type"];function ee(e,t,n,s,i,a){var r=this,c=Object(o["t"])("FontAwesomeIcon"),l=Object(o["t"])("Button");return Object(o["p"])(),Object(o["g"])("form",{onSubmit:t[5]||(t[5]=Object(o["B"])((function(){return a.onSubmit&&a.onSubmit.apply(a,arguments)}),["prevent"]))},[Object(o["h"])("div",J,[Z,Object(o["A"])(Object(o["h"])("input",{type:"email",name:"email",placeholder:"Email",max:"250","onUpdate:modelValue":t[0]||(t[0]=function(e){return r.email=e})},null,512),[[o["w"],this.email]])]),K,Object(o["h"])("div",Q,[Object(o["h"])("div",W,[X,Object(o["A"])(Object(o["h"])("input",{type:i.pwdIsVisible?"text":"password",name:"password",placeholder:"Mot de passe",minlength:"8",max:"250",onInput:t[1]||(t[1]=function(){return a.checkPwd&&a.checkPwd.apply(a,arguments)}),"onUpdate:modelValue":t[2]||(t[2]=function(e){return i.password=e}),class:Object(o["n"])(this.isPwdOk?"--valid":"")},null,42,Y),[[o["v"],i.password]]),Object(o["h"])("span",{class:Object(o["n"])(this.isPwdOk?"--valid":"--invalid")},Object(o["u"])(this.isPwdOk?"Ok !":"Minimum 8 caractères dont au moins une majuscule et un nombre"),3),Object(o["j"])(c,{icon:a.visibleIcon,class:"icon",onClick:a.toggleVisible},null,8,["icon","onClick"])])]),Object(o["A"])(Object(o["h"])("input",{type:"text",name:"app","onUpdate:modelValue":t[3]||(t[3]=function(e){return r.app=e})},null,512),[[o["x"],!1],[o["w"],this.app]]),Object(o["j"])(l,{onClick:t[4]||(t[4]=function(t){return e.$emit("submit")}),text:"Connexion",className:"--blue",width:"80%"})],32)}var te="https://auth.ikodi.eu/google",ne="https://auth.ikodi.eu/github",oe="https://auth.ikodi.eu",se=(n("00b4"),{post:function(e,t){var n=document.createElement("form");for(var o in n.method="post",n.action=e,t){var s=document.createElement("input");s.setAttribute("name",o),s.setAttribute("value",t[o]),n.appendChild(s)}document.body.appendChild(n),n.submit(),document.body.removeChild(n)},verifyLoginForm:function(e){for(var t in e)if(""===e[t])return{valid:!1,message:"Il manque l'email ou le mot de passe"};return se.testRegexPwd(e.password)?{valid:!0}:{valid:!1,message:"Le mot de passe doit être composé de 5 caractères au minimum dont au moins une majuscule et un nombre."}},verifySignupForm:function(e){var t=[];return""!==e.email&&""!==e.password1&&""!==e.password2||t.push("Email et mots de passe obligatoires"),e.password1!==e.password2&&t.push("Les mots de passe sont différents"),se.testRegexPwd(e.password1)||t.push("Le mot de passe doit être composé de 8 caractères au minimum dont au moins une majuscule et un nombre."),t.length?{valid:!1,messages:t}:{valid:!0}},verifyProfileForm:function(e){var t=[];return""!==e.email&&""!==e.password||t.push("Email et mot de passe obligatoires"),t.length?{valid:!1,messages:t}:{valid:!0}},alertCode:function(e){var t={empty:"Au moins un des champs n'est pas rempli",invalidemail:"Le format de l'email est invalide",usernotindb:"Cet email ne correspond à aucun compte connu",isapisignup:"Compte créer à partir d'un compte Google ou Github ou autre, donc peut-être réessayer avec un de ceux là ?",diffpwd:"Les mots de passe ne sont pas identiques",minname:"Au minimun un nom ou un pseudo est nécessaire",exist:"Un compte existe déjà pour cet email, utiliser le lien pour récupérer un mot de passe perdu",inactive:"L'email pour ce compte n'a pas été confirmé. Vous pouvez soit suivre le lien reçu par mail (valable 10 minutes) ou recréer un compte puis valider le nouveau lien reçu",invalidpwd:"Le mot de passe doit contenir au minimum 8 caractères dont au moins une majuscule et un nombre"},n=t[e]||"Oups, ce n'est pas le message prévu...";alert(n)},testRegexPwd:function(e){return/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,50}$/.test(e)}}),ie=se,ae=n("c074"),re=n("ad3d"),ce={name:"LoginForm",components:{Button:D,FontAwesomeIcon:re["a"]},data:function(){return{email:"",password:"",app:"auth",user:{},isPwdOk:!1,pwdIsVisible:!1}},computed:{visibleIcon:function(){return this.pwdIsVisible?ae["b"]:ae["a"]}},mounted:function(){var e=window.location.search,t=new URLSearchParams(e);this.app=t.get("app");var n=t.get("code");n&&ie.alertCode(n)},methods:{onSubmit:function(){var e={email:this.email,password:this.password,app:this.app},t=ie.verifyLoginForm(e);if(!t.valid)return alert(t.message);ie.post("".concat(oe,"/login"),e)},checkPwd:function(){var e=ie.testRegexPwd(this.password);this.isPwdOk=e},toggleVisible:function(e){this.pwdIsVisible=!this.pwdIsVisible}},emits:["submit"]};const le=j()(ce,[["render",ee]]);var ue=le,pe=n("bc3a"),de=n.n(pe),me={components:{Button:D,Divider:z,LoginForm:ue},data:function(){return{GOOGLE_URL:te,GITHUB_URL:ne,app:app}},props:{user:{type:Object,default:{isLoggued:!1}}},methods:{logout:function(){console.log("youou");try{de.a.post("http://localhost:5050/logout",{},{withCredentials:!0}),alert("Vous êtes déconnecté"),window.location.reload()}catch(e){console.log(e)}},deleteMe:function(){if(window.confirm("Confirmez-vous la suppression du compte associé à ".concat(this.user.email," ? Cette action est définitive.")))try{de.a.delete("http://localhost:5050/me/credentials",{withCredentials:!0}),window.location.reload()}catch(e){console.log(e),alert("Il semble que cela n'a pas fonctionné, pour cette raison: \"".concat(e.toString(),'"'))}}},mounted:function(){var e=window.location.search,t=new URLSearchParams(e);this.app=t.get("app")},emits:["toggle-signup","toggle-sendpass","toggle-profile"]};n("16fe");const be=j()(me,[["render",T],["__scopeId","data-v-16f256ac"]]);var he=be,fe={name:"Landing",props:{user:{type:Object,default:{isLoggued:!1}}},components:{Hero:w,Options:he},emits:["toggle-signup","toggle-sendpass","toggle-profile"]};n("fe77");const ge=j()(fe,[["render",r],["__scopeId","data-v-466d85de"]]);var je=ge,Oe={class:"formcontainer"},we=Object(o["h"])("h1",{class:"modal__title"},"Création de compte",-1),ve=Object(o["h"])("p",null,[Object(o["h"])("em",null,"* Saisie obligatoire")],-1);function ke(e,t,n,s,i,a){var r=Object(o["t"])("Divider"),c=Object(o["t"])("SignupForm");return Object(o["p"])(),Object(o["g"])("section",{class:Object(o["n"])(n.showSignup?"modal --showModal":"modal")},[Object(o["h"])("div",Oe,[Object(o["h"])("i",{class:"fas fa-times",onClick:t[0]||(t[0]=function(t){return e.$emit("toggle-signup")})}),we,Object(o["j"])(r),Object(o["j"])(c,{onToggleSignup:t[1]||(t[1]=function(t){return e.$emit("toggle-signup")})}),ve])],2)}var ye={class:"inputrow"},Pe=Object(o["h"])("label",{for:"nickname"},"Pseudo :",-1),Se={class:"inputrow"},xe=Object(o["h"])("label",{for:"firstname"},"Prénom :",-1),Ce={class:"inputrow"},Ve=Object(o["h"])("label",{for:"lastname"},"Nom :",-1),Ie={class:"inputrow"},_e=Object(o["h"])("label",{for:"email"},[Object(o["h"])("span",null,"*"),Object(o["i"])("Email :")],-1),Ae={class:"group"},Le={class:"inputrow"},Ue=Object(o["h"])("label",{for:"password1"},[Object(o["h"])("span",null,"*"),Object(o["i"])("Mot de passe :")],-1),Me=["type"],Te={class:"group"},Fe={class:"inputrow"},Re=Object(o["h"])("label",{for:"password2"},[Object(o["h"])("span",null,"*"),Object(o["i"])("Confirmation :")],-1),Be=["type"];function Ne(e,t,n,s,i,a){var r=this,c=Object(o["t"])("FontAwesomeIcon"),l=Object(o["t"])("Button");return Object(o["p"])(),Object(o["g"])("form",{onSubmit:t[9]||(t[9]=Object(o["B"])((function(){return a.onSubmit&&a.onSubmit.apply(a,arguments)}),["prevent"]))},[Object(o["h"])("div",ye,[Pe,Object(o["A"])(Object(o["h"])("input",{type:"text",name:"nickname",placeholder:"Pseudo","onUpdate:modelValue":t[0]||(t[0]=function(e){return i.nickname=e})},null,512),[[o["w"],i.nickname]])]),Object(o["h"])("div",Se,[xe,Object(o["A"])(Object(o["h"])("input",{type:"text",name:"firstname",placeholder:"Prénom","onUpdate:modelValue":t[1]||(t[1]=function(e){return i.firstname=e})},null,512),[[o["w"],i.firstname]])]),Object(o["h"])("div",Ce,[Ve,Object(o["A"])(Object(o["h"])("input",{type:"text",name:"lastname",placeholder:"Nom","onUpdate:modelValue":t[2]||(t[2]=function(e){return i.lastname=e})},null,512),[[o["w"],i.lastname]])]),Object(o["h"])("div",Ie,[_e,Object(o["A"])(Object(o["h"])("input",{type:"email",name:"email",placeholder:"Email","onUpdate:modelValue":t[3]||(t[3]=function(e){return i.email=e})},null,512),[[o["w"],i.email]])]),Object(o["h"])("div",Ae,[Object(o["h"])("div",Le,[Ue,Object(o["A"])(Object(o["h"])("input",{type:i.pwdIsVisible?"text":"password",name:"password1",placeholder:"Choix du mdp",minlength:"8",onInput:t[4]||(t[4]=function(){return a.checkPwd1&&a.checkPwd1.apply(a,arguments)}),"onUpdate:modelValue":t[5]||(t[5]=function(e){return i.password1=e}),class:Object(o["n"])(this.isPwd1Ok?"--valid":"")},null,42,Me),[[o["v"],i.password1]]),Object(o["h"])("span",{class:Object(o["n"])(this.isPwd1Ok?"--valid":"--invalid pwdInfo")},Object(o["u"])(this.isPwd1Ok?"Ok !":"Minimum 8 caractères dont au moins une majuscule et un nombre"),3),Object(o["j"])(c,{icon:a.visibleIcon,class:"icon",onClick:a.toggleVisible},null,8,["icon","onClick"])])]),Object(o["h"])("div",Te,[Object(o["h"])("div",Fe,[Re,Object(o["A"])(Object(o["h"])("input",{type:i.pwdIsVisible?"text":"password",name:"password2",placeholder:"Confirmation du mdp",minlength:"8","onUpdate:modelValue":t[6]||(t[6]=function(e){return i.password2=e}),onInput:t[7]||(t[7]=function(){return a.checkPwd2&&a.checkPwd2.apply(a,arguments)}),class:Object(o["n"])(this.isPwd1Ok&&this.isPwd2Ok?"--valid":"")},null,42,Be),[[o["v"],i.password2]]),Object(o["j"])(c,{icon:a.visibleIcon,class:"icon",onClick:a.toggleVisible},null,8,["icon","onClick"])])]),Object(o["A"])(Object(o["h"])("input",{type:"text",name:"app","onUpdate:modelValue":t[8]||(t[8]=function(e){return r.app=e})},null,512),[[o["x"],!1],[o["w"],this.app]]),Object(o["j"])(l,{text:"Valider",className:"--blue",width:"80%"})],32)}n("159b");var $e={name:"SignupForm",components:{Button:D,FontAwesomeIcon:re["a"]},props:{user:{type:Object,default:{isLoggued:!1}}},data:function(){return{nickname:"",firstname:"",lastname:"",email:"",password1:"",password2:"",app:"auth",isPwd1Ok:!1,isPwd2Ok:!1,pwdIsVisible:!1}},computed:{visibleIcon:function(){return this.pwdIsVisible?ae["b"]:ae["a"]}},mounted:function(){var e=window.location.search,t=new URLSearchParams(e);this.app=t.get("app")},methods:{onSubmit:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,o,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n={nickname:e.nickname,firstname:e.firstname,lastname:e.lastname,email:e.email,password1:e.password1,password2:e.password2,app:e.app},o=ie.verifySignupForm(n),o.valid){t.next=4;break}return t.abrupt("return",o.messages.forEach((function(e){return alert(e)})));case 4:return t.prev=4,t.next=7,de.a.post("".concat(oe,"/signup"),n);case 7:if(s=t.sent,!s.data.code){t.next=10;break}return t.abrupt("return",ie.alertCode(s.data.code));case 10:s.data.message&&(alert(s.data.message),e.$emit("toggle-signup")),t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](4),t.t0.response?alert(t.t0.response.data.message):alert(t.t0.toString());case 16:case"end":return t.stop()}}),t,null,[[4,13]])})))()},checkPwd1:function(){var e=ie.testRegexPwd(this.password1);this.isPwd1Ok=e,this.checkPwd2()},checkPwd2:function(){return console.log("checkPwd2"),this.isPwd2Ok=this.password1===this.password2},toggleVisible:function(){this.pwdIsVisible=!this.pwdIsVisible}},emits:["toggle-signup"]};const De=j()($e,[["render",Ne]]);var Ee=De,Ge={name:"SignupModal",props:{showSignup:{type:Boolean,default:!1}},components:{Divider:z,SignupForm:Ee},emits:["toggle-signup"]};const qe=j()(Ge,[["render",ke]]);var He=qe,ze={class:"formcontainer"},Je=Object(o["h"])("h1",{class:"modal__title"},"Réinitialiser le mot de passe",-1);function Ze(e,t,n,s,i,a){var r=Object(o["t"])("Divider"),c=Object(o["t"])("SendPassForm");return Object(o["p"])(),Object(o["g"])("section",{class:Object(o["n"])(n.showSendpass?"modal --showModal":"modal")},[Object(o["h"])("div",ze,[Object(o["h"])("i",{class:"fas fa-times",onClick:t[0]||(t[0]=function(t){return e.$emit("toggle-sendpass")})}),Je,Object(o["j"])(r),Object(o["j"])(c,{onToggleSendpass:t[1]||(t[1]=function(t){return e.$emit("toggle-sendpass")})})])],2)}function Ke(e,t,n,s,i,a){var r=this,c=Object(o["t"])("Button");return Object(o["p"])(),Object(o["g"])("form",{onSubmit:t[1]||(t[1]=Object(o["B"])((function(){return a.onSubmit&&a.onSubmit.apply(a,arguments)}),["prevent"]))},[Object(o["A"])(Object(o["h"])("input",{type:"email",name:"email",placeholder:"Email","onUpdate:modelValue":t[0]||(t[0]=function(e){return r.email=e})},null,512),[[o["w"],this.email]]),Object(o["j"])(c,{text:"Envoyer",className:"--blue",width:"100%"})],32)}var Qe={name:"SendPassForm",components:{Button:D},data:function(){return{email:""}},methods:{onSubmit:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n={email:t.email},""!==t.email){e.next=3;break}return e.abrupt("return",alert("Champ email vide"));case 3:return e.prev=3,e.next=6,de.a.post("".concat(oe,"/forgot-pwd"),n);case 6:o=e.sent,alert(o.data.message),t.$emit("toggle-sendpass"),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](3),e.t0.response?alert(e.t0.response.data.message):alert(e.t0.toString());case 14:case"end":return e.stop()}}),e,null,[[3,11]])})))()}},emits:["toggle-sendpass"]};const We=j()(Qe,[["render",Ke]]);var Xe=We,Ye={name:"SendPassModal",props:{showSendpass:{type:Boolean,default:!1}},components:{Divider:z,SendPassForm:Xe}};const et=j()(Ye,[["render",Ze]]);var tt=et,nt={class:"formcontainer"},ot=Object(o["h"])("h1",{class:"modal__title"},"Modifier le Profil",-1),st={class:"modal__title"},it=Object(o["h"])("p",null,[Object(o["h"])("em",null,"* Saisie obligatoire")],-1);function at(e,t,n,s,i,a){var r=Object(o["t"])("Divider"),c=Object(o["t"])("ProfileForm"),l=Object(o["t"])("PasswordForm");return Object(o["p"])(),Object(o["g"])("section",{class:Object(o["n"])(n.showProfile?"modal --showModal":"modal")},[Object(o["h"])("div",nt,[Object(o["h"])("i",{class:"fas fa-times",onClick:t[0]||(t[0]=function(t){return e.$emit("toggle-profile")})}),ot,Object(o["j"])(r),Object(o["j"])(c,{onToggleProfile:t[1]||(t[1]=function(t){return e.$emit("toggle-profile")}),user:n.user},null,8,["user"]),Object(o["A"])(Object(o["h"])("h2",st,"Modifier le mot de passe",512),[[o["x"],!n.user.apisignup]]),Object(o["j"])(r),Object(o["A"])(Object(o["j"])(l,{onToggleProfile:t[2]||(t[2]=function(t){return e.$emit("toggle-profile")}),user:n.user,pwdIsVisible:e.pwdIsVisible},null,8,["user","pwdIsVisible"]),[[o["x"],!n.user.apisignup]]),it])],2)}var rt={class:"inputrow"},ct=Object(o["h"])("label",{for:"nickname"},"Pseudo :",-1),lt={class:"inputrow"},ut=Object(o["h"])("label",{for:"firstname"},"Prénom :",-1),pt={class:"inputrow"},dt=Object(o["h"])("label",{for:"lastname"},"Nom :",-1),mt={class:"inputrow"},bt=Object(o["h"])("label",{for:"email"},[Object(o["h"])("span",null,"*"),Object(o["i"])("Email :")],-1),ht=["disabled"],ft={class:"inputrow"},gt=Object(o["h"])("label",{for:"password"},[Object(o["h"])("span",null,"*"),Object(o["i"])("Mot de passe :")],-1),jt=["type"];function Ot(e,t,n,s,i,a){var r=this,c=Object(o["t"])("FontAwesomeIcon"),l=Object(o["t"])("Button");return Object(o["p"])(),Object(o["g"])("form",{onSubmit:t[6]||(t[6]=Object(o["B"])((function(){return a.onSubmit&&a.onSubmit.apply(a,arguments)}),["prevent"])),class:"partial"},[Object(o["h"])("div",rt,[ct,Object(o["A"])(Object(o["h"])("input",{type:"text",name:"nickname","onUpdate:modelValue":t[0]||(t[0]=function(e){return n.user.nickname=e})},null,512),[[o["w"],n.user.nickname]])]),Object(o["h"])("div",lt,[ut,Object(o["A"])(Object(o["h"])("input",{type:"text",name:"firstname",placeholder:"Prénom","onUpdate:modelValue":t[1]||(t[1]=function(e){return n.user.firstname=e})},null,512),[[o["w"],n.user.firstname]])]),Object(o["h"])("div",pt,[dt,Object(o["A"])(Object(o["h"])("input",{type:"text",name:"lastname",placeholder:"Nom","onUpdate:modelValue":t[2]||(t[2]=function(e){return n.user.lastname=e})},null,512),[[o["w"],n.user.lastname]])]),Object(o["h"])("div",mt,[bt,Object(o["A"])(Object(o["h"])("input",{type:"email",name:"email","onUpdate:modelValue":t[3]||(t[3]=function(e){return n.user.email=e}),disabled:n.user.apisignup},null,8,ht),[[o["w"],n.user.email]])]),Object(o["A"])(Object(o["h"])("div",ft,[gt,Object(o["A"])(Object(o["h"])("input",{type:i.pwdIsVisible?"text":"password",name:"password","onUpdate:modelValue":t[4]||(t[4]=function(e){return i.password=e})},null,8,jt),[[o["v"],i.password]]),Object(o["j"])(c,{icon:a.visibleIcon,class:"icon",onClick:a.toggleVisible},null,8,["icon","onClick"])],512),[[o["x"],!n.user.apisignup]]),Object(o["A"])(Object(o["h"])("input",{type:"text",name:"app","onUpdate:modelValue":t[5]||(t[5]=function(e){return r.app=e})},null,512),[[o["x"],!1],[o["w"],this.app]]),Object(o["j"])(l,{text:"Valider le profil",className:"--blue",width:"80%"})],32)}var wt={name:"ProfileForm",components:{Button:D,FontAwesomeIcon:re["a"]},props:{user:{type:Object,default:{isLoggued:!1}}},data:function(){return{password:"",app:null,pwdIsVisible:!1}},computed:{visibleIcon:function(){return this.pwdIsVisible?ae["b"]:ae["a"]}},created:function(){var e=window.location.search,t=new URLSearchParams(e);this.app=t.get("app")},methods:{onSubmit:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,o,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n={nickname:e.user.nickname,firstname:e.user.firstname,lastname:e.user.lastname,email:e.user.email,apisignup:e.user.apisignup,password:e.user.apisignup?"apisignup":e.password,app:e.app},o=ie.verifyProfileForm(n),o.valid){t.next=4;break}return t.abrupt("return",o.messages.forEach((function(e){return alert(e)})));case 4:return t.prev=4,t.next=7,de.a.put("".concat(oe,"/me/credentials"),n,{withCredentials:!0});case 7:if(s=t.sent,!s.data.code){t.next=10;break}return t.abrupt("return",ie.alertCode(s.data.code));case 10:s.data.message&&(alert(s.data.message),e.$emit("toggle-profile")),t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](4),t.t0.response?alert(t.t0.response.data.message):alert(t.t0.toString());case 16:case"end":return t.stop()}}),t,null,[[4,13]])})))()},toggleVisible:function(){this.pwdIsVisible=!this.pwdIsVisible}},emits:["toggle-profile"]};const vt=j()(wt,[["render",Ot]]);var kt=vt,yt={class:"group"},Pt={class:"inputrow"},St=Object(o["h"])("label",{for:"password"},[Object(o["h"])("span",null,"*"),Object(o["i"])("Mot de passe :")],-1),xt=["type"],Ct={class:"group"},Vt={class:"inputrow"},It=Object(o["h"])("label",{for:"password1"},[Object(o["h"])("span",null,"*"),Object(o["i"])("Nouveau :")],-1),_t=["type"],At={class:"group"},Lt={class:"inputrow"},Ut=Object(o["h"])("label",{for:"password2"},[Object(o["h"])("span",null,"*"),Object(o["i"])("Confirmation :")],-1),Mt=["type"];function Tt(e,t,n,s,i,a){var r=this,c=Object(o["t"])("FontAwesomeIcon"),l=Object(o["t"])("Button");return Object(o["p"])(),Object(o["g"])("form",{onSubmit:t[7]||(t[7]=Object(o["B"])((function(){return a.onSubmit&&a.onSubmit.apply(a,arguments)}),["prevent"])),class:"partial"},[Object(o["h"])("div",yt,[Object(o["h"])("div",Pt,[St,Object(o["A"])(Object(o["h"])("input",{type:i.pwdIsVisible?"text":"password",name:"password",placeholder:"Mot de passe actuel",max:"250",onInput:t[0]||(t[0]=function(){return e.checkPwd&&e.checkPwd.apply(e,arguments)}),"onUpdate:modelValue":t[1]||(t[1]=function(e){return i.password=e})},null,40,xt),[[o["v"],i.password]]),Object(o["j"])(c,{icon:a.visibleIcon,class:"icon",onClick:a.toggleVisible},null,8,["icon","onClick"])])]),Object(o["h"])("div",Ct,[Object(o["h"])("div",Vt,[It,Object(o["A"])(Object(o["h"])("input",{type:i.pwdIsVisible?"text":"password",name:"password1",placeholder:"Nouveau mot de passe",onInput:t[2]||(t[2]=function(){return a.checkPwd1&&a.checkPwd1.apply(a,arguments)}),"onUpdate:modelValue":t[3]||(t[3]=function(e){return i.password1=e}),class:Object(o["n"])(this.isPwd1Ok?"--valid":"")},null,42,_t),[[o["v"],i.password1]]),Object(o["h"])("span",{class:Object(o["n"])(this.isPwd1Ok?"--valid":"--invalid")},Object(o["u"])(this.isPwd1Ok?"Ok !":"Minimum 8 caractères dont au moins une majuscule et un nombre"),3),Object(o["j"])(c,{icon:a.visibleIcon,class:"icon",onClick:a.toggleVisible},null,8,["icon","onClick"])])]),Object(o["h"])("div",At,[Object(o["h"])("div",Lt,[Ut,Object(o["A"])(Object(o["h"])("input",{type:i.pwdIsVisible?"text":"password",name:"password2",placeholder:"Nouveau mot de passe","onUpdate:modelValue":t[4]||(t[4]=function(e){return i.password2=e}),onInput:t[5]||(t[5]=function(){return a.checkPwd2&&a.checkPwd2.apply(a,arguments)}),class:Object(o["n"])(this.isPwd1Ok&&this.isPwd2Ok?"--valid":"")},null,42,Mt),[[o["v"],i.password2]]),Object(o["j"])(c,{icon:a.visibleIcon,class:"icon",onClick:a.toggleVisible},null,8,["icon","onClick"])])]),Object(o["A"])(Object(o["h"])("input",{type:"text",name:"app","onUpdate:modelValue":t[6]||(t[6]=function(e){return r.app=e})},null,512),[[o["x"],!1],[o["w"],this.app]]),Object(o["j"])(l,{text:"Valider le mot de passe",className:"--blue",width:"80%"})],32)}var Ft={name:"PasswordForm",components:{Button:D,FontAwesomeIcon:re["a"]},props:{user:{type:Object,default:{isLoggued:!1}}},data:function(){return{password:"",password1:"",password2:"",app:"auth",isPwd1Ok:!1,isPwd2Ok:!1,pwdIsVisible:!1}},computed:{visibleIcon:function(){return this.pwdIsVisible?ae["b"]:ae["a"]}},mounted:function(){var e=window.location.search,t=new URLSearchParams(e);this.app=t.get("app")},methods:{onSubmit:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n={password:e.password,newPassword:e.password1,app:e.app},!e.isPwd1Ok||!e.isPwd2Ok){t.next=14;break}return t.prev=2,t.next=5,de.a.put("".concat(oe,"/me/password"),n,{withCredentials:!0});case 5:if(o=t.sent,!o.data.code){t.next=8;break}return t.abrupt("return",ie.alertCode(o.data.code));case 8:o.data.message&&(alert(o.data.message),e.$emit("toggle-profile")),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](2),t.t0.response?alert(t.t0.response.data.message):alert(t.t0.toString());case 14:case"end":return t.stop()}}),t,null,[[2,11]])})))()},checkPwd1:function(){var e=ie.testRegexPwd(this.password1);this.isPwd1Ok=e,this.checkPwd2()},checkPwd2:function(){return console.log("checkPwd2"),this.isPwd2Ok=this.password1===this.password2},toggleVisible:function(e){this.pwdIsVisible=!this.pwdIsVisible}},emits:["toggle-profile"]};const Rt=j()(Ft,[["render",Tt]]);var Bt=Rt,Nt={name:"ProfileModal",props:{showProfile:{type:Boolean,default:!1},user:{type:Object,default:{}}},components:{Divider:z,ProfileForm:kt,PasswordForm:Bt},emits:["toggle-profile"]};const $t=j()(Nt,[["render",at]]);var Dt=$t,Et={key:0,class:"cookie-consent",role:"dialog"},Gt={class:"cookie-consent-message"},qt={class:"cookie-consent-compliance",type:"button"};function Ht(e,t,n,s,i,a){return Object(o["p"])(),Object(o["e"])(o["b"],{name:n.transition},{default:Object(o["z"])((function(){return[i.show?(Object(o["p"])(),Object(o["g"])("div",Et,[Object(o["s"])(e.$slots,"message",{},(function(){return[Object(o["h"])("span",Gt,[Object(o["i"])(Object(o["u"])(n.message)+" ",1),Object(o["s"])(e.$slots,"link",{},(function(){return[Object(o["h"])("a",Object(o["m"])({href:n.href,target:n.target,rel:n.rel},{class:"cookie-consent-link",role:"button"}),Object(o["u"])(n.linkLabel),17)]}))])]})),Object(o["h"])("div",{onClick:t[0]||(t[0]=function(){return a.dismiss&&a.dismiss.apply(a,arguments)})},[Object(o["s"])(e.$slots,"button",{},(function(){return[Object(o["h"])("button",qt,Object(o["u"])(n.buttonLabel),1)]}))])])):Object(o["f"])("",!0)]})),_:3},8,["name"])}n("a9e3"),n("1276"),n("a15b");var zt={name:"CookieConsent",props:{transition:{type:String,default:"cookie-consent-transition"},message:{type:String,default:"Ce site utilise des cookies internes, uniquement pour son fonctionnement.\n        Aucun cookies ni aucune informations saisies sur les sites du domaine ikodi.eu ne sont utilisés à des fins commerciales."},linkLabel:{type:String,default:"Plus d'infos"},buttonLabel:{type:String,default:"Compris"},href:{type:String,default:"https://www.cnil.fr/fr/definition/cookie"},target:{type:String,default:"_blank"},rel:{type:String,default:"noopener"},cookieName:{type:String,default:"cookieconsent_status"},cookiePath:{type:String,default:"/"},cookieDomain:{type:String,default:""},cookieExpiryDays:{type:Number,default:365}},data:function(){return{show:void 0}},computed:{cookie:function(){return!this.getCookie(this.cookieName)}},beforeMount:function(){this.show=this.cookie},methods:{dismiss:function(){this.show=!1,this.setCookie(this.cookieName,1,this.cookieExpiryDays,this.cookieDomain,this.cookiePath)},getCookie:function(e){var t="; ".concat(document.cookie),n=t.split("; ".concat(e,"="));return 2!==n.length?void 0:n.pop().split(";").shift()},setCookie:function(e,t,n,o,s){var i=new Date;i.setDate(i.getDate()+(n||365));var a=["".concat(e,"=").concat(t),"expires=".concat(i.toUTCString()),"path=".concat(s||"/")];o&&a.push("domain=".concat(o)),document.cookie=a.join(";")}}};const Jt=j()(zt,[["render",Ht]]);var Zt=Jt,Kt={name:"App",components:{Landing:je,SignupModal:He,SendPassModal:tt,ProfileModal:Dt,CookieConsent:Zt},data:function(){return{showSignup:!1,showSendpass:!1,showProfile:!1,user:{isLoggued:!1,id:"-1",nickname:"",firstname:"",lastname:"",email:"",apisignup:!1}}},mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,de.a.get("http://localhost:5050/me",{withCredentials:!0});case 3:n=t.sent,console.log(n.data),e.user.id=n.data.id,e.user.nickname=n.data.nickname,e.user.firstname=n.data.firstname,e.user.lastname=n.data.lastname,e.user.email=n.data.email,e.user.apisignup=n.data.apisignup,e.user.isLoggued=!0,t.next=17;break;case 14:t.prev=14,t.t0=t["catch"](0),console.log(t.t0.message);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})))()},methods:{toggleSignup:function(){this.showSignup=!this.showSignup},toggleSendpass:function(){this.showSendpass=!this.showSendpass},toggleProfile:function(){this.showProfile=!this.showProfile}}};n("7fbf");const Qt=j()(Kt,[["render",s]]);var Wt=Qt;Object(o["d"])(Wt).mount("#app")},"56df":function(e,t,n){},"5a1e":function(e,t,n){"use strict";n("8422")},"6b25":function(e,t,n){"use strict";n("f448")},"7fbf":function(e,t,n){"use strict";n("2470")},8422:function(e,t,n){},c8ca:function(e,t,n){"use strict";n("2e9a")},df2f:function(e,t,n){},f448:function(e,t,n){},fe77:function(e,t,n){"use strict";n("56df")}});
//# sourceMappingURL=app.81ae6e19.js.map