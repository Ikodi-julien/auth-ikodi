(function(e){function t(t){for(var o,a,r=t[0],c=t[1],l=t[2],p=0,d=[];p<r.length;p++)a=r[p],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);u&&u(t);while(d.length)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(o=!1)}o&&(s.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},i={app:0},s=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0d01":function(e,t,n){"use strict";n("be7a")},4915:function(e,t,n){e.exports=n.p+"img/chronofit-v2.fadfbd68.png"},"4acf":function(e,t,n){e.exports=n.p+"img/multiplicorne_portfolio.a69758c0.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");function i(e,t,n,i,s,a){var r=Object(o["t"])("Landing"),c=Object(o["t"])("SignupModal"),l=Object(o["t"])("SendPassModal"),u=Object(o["t"])("ProfileModal"),p=Object(o["t"])("CookieConsent");return Object(o["p"])(),Object(o["g"])("section",null,[Object(o["j"])(r,{onToggleSignup:a.toggleSignup,onToggleSendpass:a.toggleSendpass,onToggleProfile:a.toggleProfile,user:s.user},null,8,["onToggleSignup","onToggleSendpass","onToggleProfile","user"]),Object(o["j"])(c,{showSignup:s.showSignup,onToggleSignup:a.toggleSignup},null,8,["showSignup","onToggleSignup"]),Object(o["j"])(l,{showSendpass:s.showSendpass,onToggleSendpass:a.toggleSendpass},null,8,["showSendpass","onToggleSendpass"]),Object(o["j"])(u,{showProfile:s.showProfile,onToggleProfile:a.toggleProfile,user:s.user},null,8,["showProfile","onToggleProfile","user"]),Object(o["j"])(p)])}var s=n("1da1"),a=(n("96cf"),{class:"landing"});function r(e,t,n,i,s,r){var c=Object(o["t"])("Hero"),l=Object(o["t"])("Options");return Object(o["p"])(),Object(o["g"])("section",a,[Object(o["j"])(c),Object(o["j"])(l,{onToggleSignup:t[0]||(t[0]=function(t){return e.$emit("toggle-signup")}),onToggleSendpass:t[1]||(t[1]=function(t){return e.$emit("toggle-sendpass")}),onToggleProfile:t[2]||(t[2]=function(t){return e.$emit("toggle-profile")}),user:n.user},null,8,["user"])])}var c=n("7cdb"),l=n.n(c),u=n("83d2"),p=n.n(u),d=n("cff1"),m=n.n(d),b=n("4915"),h=n.n(b),f=n("6eb5"),g=n.n(f),j=n("4acf"),O=n.n(j),w=n("db62"),v=n.n(w),k=function(e){return Object(o["r"])("data-v-4885259a"),e=e(),Object(o["q"])(),e},P={class:"hero"},y=k((function(){return Object(o["h"])("div",{class:"links"},[Object(o["h"])("a",{href:"https://portfolio.ikodi.eu"},[Object(o["h"])("img",{src:l.a,alt:"Ikodi"}),Object(o["h"])("p",null,"Portfolio")]),Object(o["h"])("a",{href:"https://blog.ikodi.eu"},[Object(o["h"])("img",{src:p.a,alt:"Le Blog"}),Object(o["h"])("p",null,"Le Blog")]),Object(o["h"])("a",{href:"https://concord.ikodi.eu"},[Object(o["h"])("img",{src:m.a,alt:"concord"}),Object(o["h"])("p",null,"Concord")]),Object(o["h"])("a",{href:"https://chronofit.ikodi.eu"},[Object(o["h"])("img",{src:h.a,alt:"chronofit"}),Object(o["h"])("p",null,"Chronofit")]),Object(o["h"])("a",{href:"https://ikodi.eu/games"},[Object(o["h"])("img",{src:g.a,alt:"Les jeux"}),Object(o["h"])("p",null,"Les jeux")]),Object(o["h"])("a",{href:"https://ikodi.eu/games"},[Object(o["h"])("img",{src:O.a,alt:"Multiplicorne"}),Object(o["h"])("p",null,"Multiplicorne")]),Object(o["h"])("a",{href:"https://feedback.ikodi.eu"},[Object(o["h"])("img",{src:v.a,alt:"Multiplicorne"}),Object(o["h"])("p",null,"Feedback")])],-1)})),S=k((function(){return Object(o["h"])("h1",{class:"hero__text"},"Se connecter ou créer un compte",-1)})),x=[y,S];function C(e,t,n,i,s,a){return Object(o["p"])(),Object(o["g"])("div",P,x)}var I={name:"Hero"},V=(n("68c6"),n("6b0d")),_=n.n(V);const L=_()(I,[["render",C],["__scopeId","data-v-4885259a"]]);var A=L,M=(n("99af"),function(e){return Object(o["r"])("data-v-d6660bee"),e=e(),Object(o["q"])(),e}),U={class:"options"},T={class:"options__socialaccounts"},F=["href"],B=["href"],R={class:"options__formcontainer"},N={class:"options__wide"},$={class:"options"},D=Object(o["i"])(" Vous êtes connecté en tant que "),E=M((function(){return Object(o["h"])("br",null,null,-1)})),G={class:"options__wide"},q={class:"options__wide"},H={class:"options__wide"},z={class:"options__wide"};function J(e,t,n,i,s,a){var r=Object(o["t"])("Button"),c=Object(o["t"])("Divider"),l=Object(o["t"])("LoginForm");return Object(o["p"])(),Object(o["g"])(o["a"],null,[Object(o["A"])(Object(o["h"])("div",U,[Object(o["h"])("div",T,[Object(o["h"])("a",{href:"".concat(this.GOOGLE_URL,"?app=").concat(this.app)},[Object(o["j"])(r,{text:"Google",color:"white",icon:'<img src="https://img.icons8.com/color/25/000000/google-logo.png"/>'})],8,F),Object(o["h"])("a",{href:"".concat(this.GITHUB_URL,"?app=").concat(this.app)},[Object(o["j"])(r,{text:"Github",color:"white",icon:'<img src="https://img.icons8.com/fluency/25/000000/github.png"/>'})],8,B)]),Object(o["j"])(c,{text:"OU"}),Object(o["h"])("div",R,[Object(o["j"])(l)]),Object(o["h"])("p",{onClick:t[0]||(t[0]=function(t){return e.$emit("toggle-sendpass")}),className:"options__forgotpassword",id:"toggle-sendpass"}," Mot de passe perdu ? "),Object(o["j"])(c),Object(o["h"])("div",N,[Object(o["j"])(r,{onClick:t[1]||(t[1]=function(t){return e.$emit("toggle-signup")}),text:"Créer un compte",width:"80%",className:"--green",dataTest:"toggle-signup"})])],512),[[o["x"],!n.user.isLoggued]]),Object(o["A"])(Object(o["h"])("div",$,[Object(o["h"])("h2",null,[D,E,Object(o["h"])("em",null,Object(o["u"])(this.user.nickname),1)]),Object(o["h"])("div",G,[Object(o["h"])("div",q,[Object(o["j"])(r,{onClick:t[2]||(t[2]=function(t){return e.$emit("toggle-profile")}),text:"Modifier mes infos",width:"80%",className:"--blue",dataTest:"toggle-profile"})]),Object(o["h"])("div",H,[Object(o["j"])(r,{onClick:a.logout,text:"Déconnexion",width:"80%",className:"--grey"},null,8,["onClick"])]),Object(o["h"])("div",z,[Object(o["j"])(r,{onClick:a.deleteMe,text:"Supprimer ce compte",width:"80%",className:"--grey"},null,8,["onClick"])])])],512),[[o["x"],n.user.isLoggued]])],64)}n("d3b7"),n("25f0"),n("ac1f"),n("841c"),n("1276"),n("3ca3"),n("ddb0"),n("9861");var Z=["href","data-test"],K=["innerHTML"];function Q(e,t,n,i,s,a){return Object(o["p"])(),Object(o["g"])("button",{style:Object(o["o"])({backgroundColor:n.color,width:n.width}),class:Object(o["n"])("btn ".concat(n.className)),href:n.href,"data-test":n.dataTest},[Object(o["A"])(Object(o["h"])("span",{innerHTML:n.icon},null,8,K),[[o["x"],a.isIcon]]),Object(o["i"])(" "+Object(o["u"])(n.text),1)],14,Z)}var W={name:"Button",props:{href:{type:String,default:"https://ikodi.eu"},text:{type:String,default:"Bouton"},width:{type:String,default:"fit-content"},className:{type:String,default:""},color:{type:String},icon:{type:String},dataTest:{type:String}},computed:{isIcon:function(){return"undefined"!==typeof this.icon}}};n("0d01");const X=_()(W,[["render",Q],["__scopeId","data-v-7344e511"]]);var Y=X,ee={class:"divider"};function te(e,t,n,i,s,a){return Object(o["p"])(),Object(o["g"])("div",ee,[Object(o["h"])("span",null,Object(o["u"])(n.text),1)])}var ne={name:"Divider",props:{text:{type:String}}};n("5a1e");const oe=_()(ne,[["render",te],["__scopeId","data-v-79bd1b90"]]);var ie=oe,se={class:"inputrow"},ae=Object(o["h"])("label",{for:"email"},"Email :",-1),re=Object(o["h"])("div",{class:"icon"},null,-1),ce={class:"group"},le={class:"inputrow"},ue=Object(o["h"])("label",{for:"password"},"Mot de passe :",-1),pe=["type"];function de(e,t,n,i,s,a){var r=this,c=Object(o["t"])("FontAwesomeIcon"),l=Object(o["t"])("Button");return Object(o["p"])(),Object(o["g"])("form",{onSubmit:t[5]||(t[5]=Object(o["B"])((function(){return a.onSubmit&&a.onSubmit.apply(a,arguments)}),["prevent"]))},[Object(o["h"])("div",se,[ae,Object(o["A"])(Object(o["h"])("input",{type:"email",name:"email",placeholder:"Email",max:"250","onUpdate:modelValue":t[0]||(t[0]=function(e){return r.email=e})},null,512),[[o["w"],this.email]])]),re,Object(o["h"])("div",ce,[Object(o["h"])("div",le,[ue,Object(o["A"])(Object(o["h"])("input",{type:s.pwdIsVisible?"text":"password",name:"password",placeholder:"Mot de passe",minlength:"8",max:"250",onInput:t[1]||(t[1]=function(){return a.checkPwd&&a.checkPwd.apply(a,arguments)}),"onUpdate:modelValue":t[2]||(t[2]=function(e){return s.password=e}),class:Object(o["n"])(this.isPwdOk?"--valid":"")},null,42,pe),[[o["v"],s.password]]),Object(o["h"])("span",{class:Object(o["n"])(this.isPwdOk?"--valid":"--invalid")},Object(o["u"])(this.isPwdOk?"Ok !":"Minimum 8 caractères dont au moins une majuscule et un nombre"),3),Object(o["j"])(c,{icon:a.visibleIcon,class:"icon",onClick:a.toggleVisible},null,8,["icon","onClick"])])]),Object(o["A"])(Object(o["h"])("input",{type:"text",name:"app","onUpdate:modelValue":t[3]||(t[3]=function(e){return r.app=e})},null,512),[[o["x"],!1],[o["w"],this.app]]),Object(o["j"])(l,{onClick:t[4]||(t[4]=function(t){return e.$emit("submit")}),text:"Connexion",className:"--blue",width:"80%"})],32)}var me="https://auth.ikodi.eu/google",be="https://auth.ikodi.eu/github",he="https://auth.ikodi.eu",fe=(n("00b4"),{post:function(e,t){var n=document.createElement("form");for(var o in n.method="post",n.action=e,t){var i=document.createElement("input");i.setAttribute("name",o),i.setAttribute("value",t[o]),n.appendChild(i)}document.body.appendChild(n),n.submit(),document.body.removeChild(n)},verifyLoginForm:function(e){for(var t in e)if(""===e[t])return{valid:!1,message:"Il manque l'email ou le mot de passe"};return fe.testRegexPwd(e.password)?{valid:!0}:{valid:!1,message:"Le mot de passe doit être composé de 5 caractères au minimum dont au moins une majuscule et un nombre."}},verifySignupForm:function(e){var t=[];return""!==e.email&&""!==e.password1&&""!==e.password2||t.push("Email et mots de passe obligatoires"),e.password1!==e.password2&&t.push("Les mots de passe sont différents"),fe.testRegexPwd(e.password1)||t.push("Le mot de passe doit être composé de 8 caractères au minimum dont au moins une majuscule et un nombre."),t.length?{valid:!1,messages:t}:{valid:!0}},verifyProfileForm:function(e){var t=[];return""!==e.email&&""!==e.password||t.push("Email et mot de passe obligatoires"),t.length?{valid:!1,messages:t}:{valid:!0}},alertCode:function(e){var t={empty:"Au moins un des champs n'est pas rempli",invalidemail:"Le format de l'email est invalide",usernotindb:"Cet email ne correspond à aucun compte connu",isapisignup:"Compte créer à partir d'un compte Google ou Github ou autre, donc peut-être réessayer avec un de ceux là ?",diffpwd:"Les mots de passe ne sont pas identiques",minname:"Au minimun un nom ou un pseudo est nécessaire",exist:"Un compte existe déjà pour cet email, utiliser le lien pour récupérer un mot de passe perdu",inactive:"L'email pour ce compte n'a pas été confirmé. Vous pouvez soit suivre le lien reçu par mail (valable 10 minutes) ou recréer un compte puis valider le nouveau lien reçu",invalidpwd:"Le mot de passe doit contenir au minimum 8 caractères dont au moins une majuscule et un nombre",badpwd:"Ce n'est pas le mot de passe enregistré pour ce compte"},n=t[e]||"Oups, ce n'est pas le message prévu...";alert(n)},testRegexPwd:function(e){return/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,50}$/.test(e)}}),ge=fe,je=n("c074"),Oe=n("ad3d"),we={name:"LoginForm",components:{Button:Y,FontAwesomeIcon:Oe["a"]},data:function(){return{email:"",password:"",app:"auth",user:{},isPwdOk:!1,pwdIsVisible:!1}},computed:{visibleIcon:function(){return this.pwdIsVisible?je["b"]:je["a"]}},mounted:function(){var e=window.location.search,t=new URLSearchParams(e);this.app=t.get("app");var n=t.get("code");n&&ge.alertCode(n)},methods:{onSubmit:function(){var e={email:this.email,password:this.password,app:this.app},t=ge.verifyLoginForm(e);if(!t.valid)return alert(t.message);ge.post("".concat(he,"/login"),e)},checkPwd:function(){var e=ge.testRegexPwd(this.password);this.isPwdOk=e},toggleVisible:function(e){this.pwdIsVisible=!this.pwdIsVisible}},emits:["submit"]};const ve=_()(we,[["render",de]]);var ke=ve,Pe=n("bc3a"),ye=n.n(Pe),Se={components:{Button:Y,Divider:ie,LoginForm:ke},data:function(){return{GOOGLE_URL:me,GITHUB_URL:be,app:app}},props:{user:{type:Object,default:{isLoggued:!1}}},methods:{logout:function(){try{ye.a.post("".concat(he,"/logout"),{},{withCredentials:!0}),alert("Vous êtes déconnecté"),window.location.reload()}catch(e){console.log(e)}},deleteMe:function(){if(window.confirm("Confirmez-vous la suppression du compte associé à ".concat(this.user.email," ? Cette action est définitive.")))try{ye.a.delete("".concat(he,"/me/credentials"),{withCredentials:!0}),window.location.reload()}catch(e){console.log(e),alert("Il semble que cela n'a pas fonctionné, pour cette raison: \"".concat(e.toString(),'"'))}}},mounted:function(){var e=window.location.search,t=document.cookie.split("appname=")[1];if(console.log("appName",t),t&&""!==t&&"null"!==t)return document.cookie="appname=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",void(window.location.href="https://".concat(t,".ikodi.eu"));var n=new URLSearchParams(e);this.app=n.get("app")},emits:["toggle-signup","toggle-sendpass","toggle-profile"]};n("eaf2");const xe=_()(Se,[["render",J],["__scopeId","data-v-d6660bee"]]);var Ce=xe,Ie={name:"Landing",props:{user:{type:Object,default:{isLoggued:!1}}},components:{Hero:A,Options:Ce},emits:["toggle-signup","toggle-sendpass","toggle-profile"]};n("fe77");const Ve=_()(Ie,[["render",r],["__scopeId","data-v-466d85de"]]);var _e=Ve,Le={class:"formcontainer"},Ae=Object(o["h"])("h1",{class:"modal__title"},"Création de compte",-1),Me=Object(o["h"])("p",null,[Object(o["h"])("em",null,"* Saisie obligatoire")],-1);function Ue(e,t,n,i,s,a){var r=Object(o["t"])("Divider"),c=Object(o["t"])("SignupForm");return Object(o["p"])(),Object(o["g"])("section",{class:Object(o["n"])(n.showSignup?"modal --showModal":"modal")},[Object(o["h"])("div",Le,[Object(o["h"])("i",{class:"fas fa-times",onClick:t[0]||(t[0]=function(t){return e.$emit("toggle-signup")})}),Ae,Object(o["j"])(r),Object(o["j"])(c,{onToggleSignup:t[1]||(t[1]=function(t){return e.$emit("toggle-signup")})}),Me])],2)}var Te={class:"inputrow"},Fe=Object(o["h"])("label",{for:"nickname"},"Pseudo :",-1),Be={class:"inputrow"},Re=Object(o["h"])("label",{for:"firstname"},"Prénom :",-1),Ne={class:"inputrow"},$e=Object(o["h"])("label",{for:"lastname"},"Nom :",-1),De={class:"inputrow"},Ee=Object(o["h"])("label",{for:"email"},[Object(o["h"])("span",null,"*"),Object(o["i"])("Email :")],-1),Ge={class:"group"},qe={class:"inputrow"},He=Object(o["h"])("label",{for:"password1"},[Object(o["h"])("span",null,"*"),Object(o["i"])("Mot de passe :")],-1),ze=["type"],Je={class:"group"},Ze={class:"inputrow"},Ke=Object(o["h"])("label",{for:"password2"},[Object(o["h"])("span",null,"*"),Object(o["i"])("Confirmation :")],-1),Qe=["type"];function We(e,t,n,i,s,a){var r=this,c=Object(o["t"])("FontAwesomeIcon"),l=Object(o["t"])("Button");return Object(o["p"])(),Object(o["g"])("form",{onSubmit:t[9]||(t[9]=Object(o["B"])((function(){return a.onSubmit&&a.onSubmit.apply(a,arguments)}),["prevent"]))},[Object(o["h"])("div",Te,[Fe,Object(o["A"])(Object(o["h"])("input",{type:"text",name:"nickname",placeholder:"Pseudo","onUpdate:modelValue":t[0]||(t[0]=function(e){return s.nickname=e})},null,512),[[o["w"],s.nickname]])]),Object(o["h"])("div",Be,[Re,Object(o["A"])(Object(o["h"])("input",{type:"text",name:"firstname",placeholder:"Prénom","onUpdate:modelValue":t[1]||(t[1]=function(e){return s.firstname=e})},null,512),[[o["w"],s.firstname]])]),Object(o["h"])("div",Ne,[$e,Object(o["A"])(Object(o["h"])("input",{type:"text",name:"lastname",placeholder:"Nom","onUpdate:modelValue":t[2]||(t[2]=function(e){return s.lastname=e})},null,512),[[o["w"],s.lastname]])]),Object(o["h"])("div",De,[Ee,Object(o["A"])(Object(o["h"])("input",{type:"email",name:"email",placeholder:"Email","onUpdate:modelValue":t[3]||(t[3]=function(e){return s.email=e})},null,512),[[o["w"],s.email]])]),Object(o["h"])("div",Ge,[Object(o["h"])("div",qe,[He,Object(o["A"])(Object(o["h"])("input",{type:s.pwdIsVisible?"text":"password",name:"password1",placeholder:"Choix du mdp",minlength:"8",onInput:t[4]||(t[4]=function(){return a.checkPwd1&&a.checkPwd1.apply(a,arguments)}),"onUpdate:modelValue":t[5]||(t[5]=function(e){return s.password1=e}),class:Object(o["n"])(this.isPwd1Ok?"--valid":"")},null,42,ze),[[o["v"],s.password1]]),Object(o["h"])("span",{class:Object(o["n"])(this.isPwd1Ok?"--valid":"--invalid pwdInfo")},Object(o["u"])(this.isPwd1Ok?"Ok !":"Minimum 8 caractères dont au moins une majuscule et un nombre"),3),Object(o["j"])(c,{icon:a.visibleIcon,class:"icon",onClick:a.toggleVisible},null,8,["icon","onClick"])])]),Object(o["h"])("div",Je,[Object(o["h"])("div",Ze,[Ke,Object(o["A"])(Object(o["h"])("input",{type:s.pwdIsVisible?"text":"password",name:"password2",placeholder:"Confirmation du mdp",minlength:"8","onUpdate:modelValue":t[6]||(t[6]=function(e){return s.password2=e}),onInput:t[7]||(t[7]=function(){return a.checkPwd2&&a.checkPwd2.apply(a,arguments)}),class:Object(o["n"])(this.isPwd1Ok&&this.isPwd2Ok?"--valid":"")},null,42,Qe),[[o["v"],s.password2]]),Object(o["j"])(c,{icon:a.visibleIcon,class:"icon",onClick:a.toggleVisible},null,8,["icon","onClick"])])]),Object(o["A"])(Object(o["h"])("input",{type:"text",name:"app","onUpdate:modelValue":t[8]||(t[8]=function(e){return r.app=e})},null,512),[[o["x"],!1],[o["w"],this.app]]),Object(o["j"])(l,{text:"Valider",className:"--blue",width:"80%"})],32)}n("159b");var Xe={name:"SignupForm",components:{Button:Y,FontAwesomeIcon:Oe["a"]},props:{user:{type:Object,default:{isLoggued:!1}}},data:function(){return{nickname:"",firstname:"",lastname:"",email:"",password1:"",password2:"",app:"auth",isPwd1Ok:!1,isPwd2Ok:!1,pwdIsVisible:!1}},computed:{visibleIcon:function(){return this.pwdIsVisible?je["b"]:je["a"]}},mounted:function(){var e=window.location.search,t=new URLSearchParams(e);this.app=t.get("app")},methods:{onSubmit:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,o,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n={nickname:e.nickname,firstname:e.firstname,lastname:e.lastname,email:e.email,password1:e.password1,password2:e.password2,app:e.app},o=ge.verifySignupForm(n),o.valid){t.next=4;break}return t.abrupt("return",o.messages.forEach((function(e){return alert(e)})));case 4:return t.prev=4,t.next=7,ye.a.post("".concat(he,"/signup"),n);case 7:if(i=t.sent,!i.data.code){t.next=10;break}return t.abrupt("return",ge.alertCode(i.data.code));case 10:i.data.message&&(alert(i.data.message),e.$emit("toggle-signup")),t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](4),t.t0.response?alert(t.t0.response.data.message):alert(t.t0.toString());case 16:case"end":return t.stop()}}),t,null,[[4,13]])})))()},checkPwd1:function(){var e=ge.testRegexPwd(this.password1);this.isPwd1Ok=e,this.checkPwd2()},checkPwd2:function(){return console.log("checkPwd2"),this.isPwd2Ok=this.password1===this.password2},toggleVisible:function(){this.pwdIsVisible=!this.pwdIsVisible}},emits:["toggle-signup"]};const Ye=_()(Xe,[["render",We]]);var et=Ye,tt={name:"SignupModal",props:{showSignup:{type:Boolean,default:!1}},components:{Divider:ie,SignupForm:et},emits:["toggle-signup"]};const nt=_()(tt,[["render",Ue]]);var ot=nt,it={class:"formcontainer"},st=Object(o["h"])("h1",{class:"modal__title"},"Réinitialiser le mot de passe",-1);function at(e,t,n,i,s,a){var r=Object(o["t"])("Divider"),c=Object(o["t"])("SendPassForm");return Object(o["p"])(),Object(o["g"])("section",{class:Object(o["n"])(n.showSendpass?"modal --showModal":"modal")},[Object(o["h"])("div",it,[Object(o["h"])("i",{class:"fas fa-times",onClick:t[0]||(t[0]=function(t){return e.$emit("toggle-sendpass")})}),st,Object(o["j"])(r),Object(o["j"])(c,{onToggleSendpass:t[1]||(t[1]=function(t){return e.$emit("toggle-sendpass")})})])],2)}function rt(e,t,n,i,s,a){var r=this,c=Object(o["t"])("Button");return Object(o["p"])(),Object(o["g"])("form",{onSubmit:t[1]||(t[1]=Object(o["B"])((function(){return a.onSubmit&&a.onSubmit.apply(a,arguments)}),["prevent"]))},[Object(o["A"])(Object(o["h"])("input",{type:"email",name:"email",placeholder:"Email","onUpdate:modelValue":t[0]||(t[0]=function(e){return r.email=e})},null,512),[[o["w"],this.email]]),Object(o["j"])(c,{text:"Envoyer",className:"--blue",width:"100%"})],32)}var ct={name:"SendPassForm",components:{Button:Y},data:function(){return{email:""}},methods:{onSubmit:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n={email:t.email},""!==t.email){e.next=3;break}return e.abrupt("return",alert("Champ email vide"));case 3:return e.prev=3,e.next=6,ye.a.post("".concat(he,"/forgot-pwd"),n);case 6:o=e.sent,alert(o.data.message),t.$emit("toggle-sendpass"),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](3),e.t0.response?alert(e.t0.response.data.message):alert(e.t0.toString());case 14:case"end":return e.stop()}}),e,null,[[3,11]])})))()}},emits:["toggle-sendpass"]};const lt=_()(ct,[["render",rt]]);var ut=lt,pt={name:"SendPassModal",props:{showSendpass:{type:Boolean,default:!1}},components:{Divider:ie,SendPassForm:ut}};const dt=_()(pt,[["render",at]]);var mt=dt,bt={class:"formcontainer"},ht=Object(o["h"])("h1",{class:"modal__title"},"Modifier le Profil",-1),ft={class:"modal__title"},gt=Object(o["h"])("p",null,[Object(o["h"])("em",null,"* Saisie obligatoire")],-1);function jt(e,t,n,i,s,a){var r=Object(o["t"])("Divider"),c=Object(o["t"])("ProfileForm"),l=Object(o["t"])("PasswordForm");return Object(o["p"])(),Object(o["g"])("section",{class:Object(o["n"])(n.showProfile?"modal --showModal":"modal")},[Object(o["h"])("div",bt,[Object(o["h"])("i",{class:"fas fa-times",onClick:t[0]||(t[0]=function(t){return e.$emit("toggle-profile")})}),ht,Object(o["j"])(r),Object(o["j"])(c,{onToggleProfile:t[1]||(t[1]=function(t){return e.$emit("toggle-profile")}),user:n.user},null,8,["user"]),Object(o["A"])(Object(o["h"])("h2",ft,"Modifier le mot de passe",512),[[o["x"],!n.user.apisignup]]),Object(o["j"])(r),Object(o["A"])(Object(o["j"])(l,{onToggleProfile:t[2]||(t[2]=function(t){return e.$emit("toggle-profile")}),user:n.user},null,8,["user"]),[[o["x"],!n.user.apisignup]]),gt])],2)}var Ot={class:"inputrow"},wt=Object(o["h"])("label",{for:"nickname"},"Pseudo :",-1),vt={class:"inputrow"},kt=Object(o["h"])("label",{for:"firstname"},"Prénom :",-1),Pt={class:"inputrow"},yt=Object(o["h"])("label",{for:"lastname"},"Nom :",-1),St={class:"inputrow"},xt=Object(o["h"])("label",{for:"email"},[Object(o["h"])("span",null,"*"),Object(o["i"])("Email :")],-1),Ct=["disabled"],It={class:"inputrow"},Vt=Object(o["h"])("label",{for:"password"},[Object(o["h"])("span",null,"*"),Object(o["i"])("Mot de passe :")],-1),_t=["type"];function Lt(e,t,n,i,s,a){var r=this,c=Object(o["t"])("FontAwesomeIcon"),l=Object(o["t"])("Button");return Object(o["p"])(),Object(o["g"])("form",{onSubmit:t[6]||(t[6]=Object(o["B"])((function(){return a.onSubmit&&a.onSubmit.apply(a,arguments)}),["prevent"])),class:"partial"},[Object(o["h"])("div",Ot,[wt,Object(o["A"])(Object(o["h"])("input",{type:"text",name:"nickname","onUpdate:modelValue":t[0]||(t[0]=function(e){return n.user.nickname=e})},null,512),[[o["w"],n.user.nickname]])]),Object(o["h"])("div",vt,[kt,Object(o["A"])(Object(o["h"])("input",{type:"text",name:"firstname",placeholder:"Prénom","onUpdate:modelValue":t[1]||(t[1]=function(e){return n.user.firstname=e})},null,512),[[o["w"],n.user.firstname]])]),Object(o["h"])("div",Pt,[yt,Object(o["A"])(Object(o["h"])("input",{type:"text",name:"lastname",placeholder:"Nom","onUpdate:modelValue":t[2]||(t[2]=function(e){return n.user.lastname=e})},null,512),[[o["w"],n.user.lastname]])]),Object(o["h"])("div",St,[xt,Object(o["A"])(Object(o["h"])("input",{type:"email",name:"email","onUpdate:modelValue":t[3]||(t[3]=function(e){return n.user.email=e}),disabled:n.user.apisignup},null,8,Ct),[[o["w"],n.user.email]])]),Object(o["A"])(Object(o["h"])("div",It,[Vt,Object(o["A"])(Object(o["h"])("input",{type:s.pwdIsVisible?"text":"password",name:"password","onUpdate:modelValue":t[4]||(t[4]=function(e){return s.password=e})},null,8,_t),[[o["v"],s.password]]),Object(o["j"])(c,{icon:a.visibleIcon,class:"icon",onClick:a.toggleVisible},null,8,["icon","onClick"])],512),[[o["x"],!n.user.apisignup]]),Object(o["A"])(Object(o["h"])("input",{type:"text",name:"app","onUpdate:modelValue":t[5]||(t[5]=function(e){return r.app=e})},null,512),[[o["x"],!1],[o["w"],this.app]]),Object(o["j"])(l,{text:"Valider le profil",className:"--blue",width:"80%"})],32)}var At={name:"ProfileForm",components:{Button:Y,FontAwesomeIcon:Oe["a"]},props:{user:{type:Object,default:{isLoggued:!1}}},data:function(){return{password:"",app:null,pwdIsVisible:!1}},computed:{visibleIcon:function(){return this.pwdIsVisible?je["b"]:je["a"]}},created:function(){var e=window.location.search,t=new URLSearchParams(e);this.app=t.get("app")},methods:{onSubmit:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,o,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n={nickname:e.user.nickname,firstname:e.user.firstname,lastname:e.user.lastname,email:e.user.email,apisignup:e.user.apisignup,password:e.user.apisignup?"apisignup":e.password,app:e.app},o=ge.verifyProfileForm(n),o.valid){t.next=4;break}return t.abrupt("return",o.messages.forEach((function(e){return alert(e)})));case 4:return t.prev=4,t.next=7,ye.a.put("".concat(he,"/me/credentials"),n,{withCredentials:!0});case 7:if(i=t.sent,!i.data.code){t.next=10;break}return t.abrupt("return",ge.alertCode(i.data.code));case 10:i.data.message&&(alert(i.data.message),e.$emit("toggle-profile")),t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](4),t.t0.response?alert(t.t0.response.data.message):alert(t.t0.toString());case 16:case"end":return t.stop()}}),t,null,[[4,13]])})))()},toggleVisible:function(){this.pwdIsVisible=!this.pwdIsVisible}},emits:["toggle-profile"]};const Mt=_()(At,[["render",Lt]]);var Ut=Mt,Tt={class:"group"},Ft={class:"inputrow"},Bt=Object(o["h"])("label",{for:"password"},[Object(o["h"])("span",null,"*"),Object(o["i"])("Mot de passe :")],-1),Rt=["type"],Nt={class:"group"},$t={class:"inputrow"},Dt=Object(o["h"])("label",{for:"password1"},[Object(o["h"])("span",null,"*"),Object(o["i"])("Nouveau :")],-1),Et=["type"],Gt={class:"group"},qt={class:"inputrow"},Ht=Object(o["h"])("label",{for:"password2"},[Object(o["h"])("span",null,"*"),Object(o["i"])("Confirmation :")],-1),zt=["type"];function Jt(e,t,n,i,s,a){var r=this,c=Object(o["t"])("FontAwesomeIcon"),l=Object(o["t"])("Button");return Object(o["p"])(),Object(o["g"])("form",{onSubmit:t[7]||(t[7]=Object(o["B"])((function(){return a.onSubmit&&a.onSubmit.apply(a,arguments)}),["prevent"])),class:"partial"},[Object(o["h"])("div",Tt,[Object(o["h"])("div",Ft,[Bt,Object(o["A"])(Object(o["h"])("input",{type:s.pwdIsVisible?"text":"password",name:"password",placeholder:"Mot de passe actuel",max:"250",onInput:t[0]||(t[0]=function(){return e.checkPwd&&e.checkPwd.apply(e,arguments)}),"onUpdate:modelValue":t[1]||(t[1]=function(e){return s.password=e})},null,40,Rt),[[o["v"],s.password]]),Object(o["j"])(c,{icon:a.visibleIcon,class:"icon",onClick:a.toggleVisible},null,8,["icon","onClick"])])]),Object(o["h"])("div",Nt,[Object(o["h"])("div",$t,[Dt,Object(o["A"])(Object(o["h"])("input",{type:s.pwdIsVisible?"text":"password",name:"password1",placeholder:"Nouveau mot de passe",onInput:t[2]||(t[2]=function(){return a.checkPwd1&&a.checkPwd1.apply(a,arguments)}),"onUpdate:modelValue":t[3]||(t[3]=function(e){return s.password1=e}),class:Object(o["n"])(this.isPwd1Ok?"--valid":"")},null,42,Et),[[o["v"],s.password1]]),Object(o["h"])("span",{class:Object(o["n"])(this.isPwd1Ok?"--valid":"--invalid")},Object(o["u"])(this.isPwd1Ok?"Ok !":"Minimum 8 caractères dont au moins une majuscule et un nombre"),3),Object(o["j"])(c,{icon:a.visibleIcon,class:"icon",onClick:a.toggleVisible},null,8,["icon","onClick"])])]),Object(o["h"])("div",Gt,[Object(o["h"])("div",qt,[Ht,Object(o["A"])(Object(o["h"])("input",{type:s.pwdIsVisible?"text":"password",name:"password2",placeholder:"Nouveau mot de passe","onUpdate:modelValue":t[4]||(t[4]=function(e){return s.password2=e}),onInput:t[5]||(t[5]=function(){return a.checkPwd2&&a.checkPwd2.apply(a,arguments)}),class:Object(o["n"])(this.isPwd1Ok&&this.isPwd2Ok?"--valid":"")},null,42,zt),[[o["v"],s.password2]]),Object(o["j"])(c,{icon:a.visibleIcon,class:"icon",onClick:a.toggleVisible},null,8,["icon","onClick"])])]),Object(o["A"])(Object(o["h"])("input",{type:"text",name:"app","onUpdate:modelValue":t[6]||(t[6]=function(e){return r.app=e})},null,512),[[o["x"],!1],[o["w"],this.app]]),Object(o["j"])(l,{text:"Valider le mot de passe",className:"--blue",width:"80%"})],32)}var Zt={name:"PasswordForm",components:{Button:Y,FontAwesomeIcon:Oe["a"]},props:{user:{type:Object,default:{isLoggued:!1}}},data:function(){return{password:"",password1:"",password2:"",app:"auth",isPwd1Ok:!1,isPwd2Ok:!1,pwdIsVisible:!1}},computed:{visibleIcon:function(){return this.pwdIsVisible?je["b"]:je["a"]}},mounted:function(){var e=window.location.search,t=new URLSearchParams(e);this.app=t.get("app")},methods:{onSubmit:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n={password:e.password,newPassword:e.password1,app:e.app},!e.isPwd1Ok||!e.isPwd2Ok){t.next=14;break}return t.prev=2,t.next=5,ye.a.put("".concat(he,"/me/password"),n,{withCredentials:!0});case 5:if(o=t.sent,!o.data.code){t.next=8;break}return t.abrupt("return",ge.alertCode(o.data.code));case 8:o.data.message&&(alert(o.data.message),e.$emit("toggle-profile")),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](2),t.t0.response?alert(t.t0.response.data.message):alert(t.t0.toString());case 14:case"end":return t.stop()}}),t,null,[[2,11]])})))()},checkPwd1:function(){var e=ge.testRegexPwd(this.password1);this.isPwd1Ok=e,this.checkPwd2()},checkPwd2:function(){return console.log("checkPwd2"),this.isPwd2Ok=this.password1===this.password2},toggleVisible:function(e){this.pwdIsVisible=!this.pwdIsVisible}},emits:["toggle-profile"]};const Kt=_()(Zt,[["render",Jt]]);var Qt=Kt,Wt={name:"ProfileModal",props:{showProfile:{type:Boolean,default:!1},user:{type:Object,default:{}}},components:{Divider:ie,ProfileForm:Ut,PasswordForm:Qt},emits:["toggle-profile"]};const Xt=_()(Wt,[["render",jt]]);var Yt=Xt,en={key:0,class:"cookie-consent",role:"dialog"},tn={class:"cookie-consent-message"},nn={class:"cookie-consent-compliance",type:"button"};function on(e,t,n,i,s,a){return Object(o["p"])(),Object(o["e"])(o["b"],{name:n.transition},{default:Object(o["z"])((function(){return[s.show?(Object(o["p"])(),Object(o["g"])("div",en,[Object(o["s"])(e.$slots,"message",{},(function(){return[Object(o["h"])("span",tn,[Object(o["i"])(Object(o["u"])(n.message)+" ",1),Object(o["s"])(e.$slots,"link",{},(function(){return[Object(o["h"])("a",Object(o["m"])({href:n.href,target:n.target,rel:n.rel},{class:"cookie-consent-link",role:"button"}),Object(o["u"])(n.linkLabel),17)]}))])]})),Object(o["h"])("div",{onClick:t[0]||(t[0]=function(){return a.dismiss&&a.dismiss.apply(a,arguments)})},[Object(o["s"])(e.$slots,"button",{},(function(){return[Object(o["h"])("button",nn,Object(o["u"])(n.buttonLabel),1)]}))])])):Object(o["f"])("",!0)]})),_:3},8,["name"])}n("a9e3"),n("a15b");var sn={name:"CookieConsent",props:{transition:{type:String,default:"cookie-consent-transition"},message:{type:String,default:"Ce site utilise des cookies internes, uniquement pour son fonctionnement.\n        Aucun cookies ni aucune informations saisies sur les sites du domaine ikodi.eu ne sont utilisés à des fins commerciales."},linkLabel:{type:String,default:"Plus d'infos"},buttonLabel:{type:String,default:"Compris"},href:{type:String,default:"https://www.cnil.fr/fr/definition/cookie"},target:{type:String,default:"_blank"},rel:{type:String,default:"noopener"},cookieName:{type:String,default:"cookieconsent_status"},cookiePath:{type:String,default:"/"},cookieDomain:{type:String,default:""},cookieExpiryDays:{type:Number,default:365}},data:function(){return{show:void 0}},computed:{cookie:function(){return!this.getCookie(this.cookieName)}},beforeMount:function(){this.show=this.cookie},methods:{dismiss:function(){this.show=!1,this.setCookie(this.cookieName,1,this.cookieExpiryDays,this.cookieDomain,this.cookiePath)},getCookie:function(e){var t="; ".concat(document.cookie),n=t.split("; ".concat(e,"="));return 2!==n.length?void 0:n.pop().split(";").shift()},setCookie:function(e,t,n,o,i){var s=new Date;s.setDate(s.getDate()+(n||365));var a=["".concat(e,"=").concat(t),"expires=".concat(s.toUTCString()),"path=".concat(i||"/")];o&&a.push("domain=".concat(o)),document.cookie=a.join(";")}}};const an=_()(sn,[["render",on]]);var rn=an,cn={name:"App",components:{Landing:_e,SignupModal:ot,SendPassModal:mt,ProfileModal:Yt,CookieConsent:rn},data:function(){return{showSignup:!1,showSendpass:!1,showProfile:!1,user:{isLoggued:!1,id:"-1",nickname:"",firstname:"",lastname:"",email:"",apisignup:!1}}},mounted:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ye.a.get("".concat(he,"/me"),{withCredentials:!0});case 3:n=t.sent,console.log(n.data),e.user.id=n.data.id,e.user.nickname=n.data.nickname,e.user.firstname=n.data.firstname,e.user.lastname=n.data.lastname,e.user.email=n.data.email,e.user.apisignup=n.data.apisignup,e.user.isLoggued=!0,t.next=17;break;case 14:t.prev=14,t.t0=t["catch"](0),console.log(t.t0.message);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})))()},methods:{toggleSignup:function(){this.showSignup=!this.showSignup},toggleSendpass:function(){this.showSendpass=!this.showSendpass},toggleProfile:function(){this.showProfile=!this.showProfile}}};n("c08d");const ln=_()(cn,[["render",i]]);var un=ln;Object(o["d"])(un).mount("#app")},"56df":function(e,t,n){},"5a1e":function(e,t,n){"use strict";n("8422")},"68c6":function(e,t,n){"use strict";n("cc18")},"6eb5":function(e,t,n){e.exports=n.p+"img/games_medley.600b61aa.png"},"7cdb":function(e,t,n){e.exports=n.p+"img/portfolio_portfolio.da9c0b79.png"},"83d2":function(e,t,n){e.exports=n.p+"img/blog_20210104.15a4a183.png"},8422:function(e,t,n){},be7a:function(e,t,n){},c08d:function(e,t,n){"use strict";n("c16b")},c16b:function(e,t,n){},cc18:function(e,t,n){},cff1:function(e,t,n){e.exports=n.p+"img/concord-portefolio.7c665a68.png"},db62:function(e,t,n){e.exports=n.p+"img/feedback_portfolio.61bd2016.png"},e743:function(e,t,n){},eaf2:function(e,t,n){"use strict";n("e743")},fe77:function(e,t,n){"use strict";n("56df")}});
//# sourceMappingURL=app.5a132626.js.map