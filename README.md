# Auth IKODI

## Présentation

Ayant créé plusieurs applications nécessitant une authentification et la création d'un compte utilisateur, le projet est de créer une interface utilisateur couplée à une API rest permettant la création d'un compte utilisateur unique autorisant l'accès à toutes ces applications.

## Fonctionnalités

- Interface utilisateur dédiée commune,
- Création de compte et login,
- Authentification par email + mot de passe ou api tiers (google, github),
- Authorisation par jsonwebtoken, y compris transport données utilisateur dans le payload,
- Transversalité avec autres applications, un seul login pour une identification sur les autres applications,
- Vérification d'email par envoi de lien de confirmation,
- Reset du mot de passe par envoi de mail avec token,

### User Stories

En tant qu'utilisateur, je veux avoir une interface visuelle donnant les différents choix de connexion / creation de compte / réinitialisation de mot de passe.  
En tant qu'utilisateur, je veux pouvoir créer un compte.  
En tant qu'utilisateur, je veux pouvoir me connecter.
En tant qu'utilisateur, je veux pouvoir supprimer mon compte (depuis une app ikodi).  
En tant qu'utilisateur, je veux pouvoir récupérer mon compte en cas d'oubli de mot de passe.  
En tant qu'utilisateur, je veux pouvoir me connecter à toutes les app ikodi grace à ce compte.

En tant que webmaster, je veux que les échanges soient sécurisés,
En tant que webmaster, je veux que la validité des emails des utilisateurs soit vérifiée,

## Stack technique

### Frontend :
- Vue.js,
- Axios,
- Tests avec mocha + chaï,

### Backend:
- API REST avec express, axios, cors,
- Base de donnée persistante PostgreSQL + callback,
- Redis pour le status de l’utilisateur,
- Authentification :
    - Formulaire email + password avec cryptage ou
    - API tiers (google, github, linkedin)
- Authorisation par token JWT en cookie http-only,
- Envoi de mails avec Nodemailer,
- EJS comme moteur de vues des pages envoyées par le serveur.

### Déploiement :
- Instance EC2 d’AWS,
- Connexion ssh,
- Proxy nginx,
