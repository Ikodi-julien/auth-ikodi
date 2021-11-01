# Journal auth.ikodi

## 01/11/2021 (environ 3h / jour depuis la dernière entrée, 6h aujourd'hui)

L'app express est en place, la base postgreSQL est créée (avec script create.sql) et connectée à l'app express avec queries async/await.
Les premières routes sont créées, notamment /signup, /login, 
Les tests d'intégration sont en place et utilisés façon TDD.
Cryptage du mot de passe + tests (bcrypt),
Mise en place des JWT + cookiehttponly avec tests d'intégration,

Prochaines étapes :
- Mise en place de redis pour mise en cache user loggued puis middleware,
- Faire le loggout avec route + redis,
- Mise en place /me pour récup infos perso fonctionnel avec JWT et logout
- Mettre en place les tests unitaires des composants Vue,
- Connexion serveur avec le front Vue,
- Mise en place de l'envoi de mail en cas d'oubli de mot de passe,

## 28/10/2021

Le landing est fait avec composants et tout et tout, modals quasi finies mais je viens de tomber sur un exemple d'authentification par techno blockchain avec web3.js, je vais donc me renseigner d'avantage sur la faisabilité même si ça semble réservé aux apps décentralisées. -> pour app sur blockchain uniquement ou alors avec paiement de gas fee donc voilà...

## 25/10/2021 (9h - 10h)

Fin des wireframes.


## 24/10/2021 (2h)

Création du README.md (genre de CDC), réflexion sur l'architecture globale dans le whimsical.
Début du wireframe selon modèle de Topics.
Création du repo et du projet dans repo github.

Demain: Continuer les wireframes.