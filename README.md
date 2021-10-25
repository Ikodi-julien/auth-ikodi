# Auth IKODI

## Présentation

Afin d'apprendre les langages de programmation et le développement web, j'ai créé plusieurs applications nécessitant la création d'un compte utilisateur.
A ce jour : chronofit, topics, concord et multiplicorne.

Pour l'instant, chacune de ces applications fait appel a une base de données différente. Le projet est de créer une interface utilisateur couplée à une API rest permettant la création d'un compte utilisateur unique autorisant l'accès à toutes ces applications.

## Fonctionnalités

### User Stories

En tant qu'utilisateur, je veux avoir une interface visuelle donnant les différents choix de connexion / creation de compte / réinitialisation de mot de passe.  
En tant qu'utilisateur, je veux pouvoir créer un compte.  
En tant qu'utilisateur, je veux pouvoir me connecter.
En tant qu'utilisateur, je veux pouvoir supprimer mon compte (depuis une app ikodi).  
En tant qu'utilisateur, je veux pouvoir récupérer mon compte en cas d'oubli de mot de passe.  
En tant qu'utilisateur, je veux pouvoir me connecter à toutes les app ikodi grace à ce compte.

## Arborescence

url: https://auth.ikodi.eu

Accès à l’application depuis une app ikodi  
url: https://auth.ikodi.eu/?app=appname

Formulaire de creation d'un compte  
url: https://auth.ikodi.eu/signup

Formulaire de renvoi de mot de passe  
url: https://auth.ikodi.eu/sendpass

## Stack technique

### App Front : 
- Framework : Vue + Vuex
- json-server
- axios

### API :
- Framework : Express
- JWT
- cors
- Bases de données :
    -  PostgreSQL
- Swagger

## Endpoints
voir auth.ikodi.eu/doc (quand sera prêt !)
