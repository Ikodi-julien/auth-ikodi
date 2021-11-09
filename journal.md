# Journal auth.ikodi

## 09/11/2021

Fait :
* Modification des routes (légères) dans auth-server pour séparer la logique d'identification liée aux identifiants (email / password / firstname / lastname) de l'accès au contenu du profil de chaque utilisateur (avatar / tags / channels / recommended / ...)
* Mise en place des tests d'integration pour l'api de concord + réorganisation des tests.

Prochaines étapes :
* Connecter Concord (en profiter pour refaire la table cron du scrapper),
  - Modifier les champs dans auth-server, ajouter nickname, faire que juste le pseudo soit obligatoire,
  - signup depuis le front ->
  - login depuis le front ->
  - les channels et tags sont reçus et dispo ->
  - page discovery s'affiche bien ->
  - page chatroom s'affiche bien ->
  - page home s'affiche bien ->
  - changement de mail ou pseudo ok ->
  - changement de pwd ->
* Revoir l'organisation des repos pour le dépoiement, faire un schéma.
- Mise en place du login avec Google et Github,
- Mise en place de l'envoi de mail en cas d'oubli de mot de passe,
- Déploiement.

## 08/11/2021

Fait :
- Le formulaire de login renvoi les messages d'erreur prévu -> ok,
- Le formulaire de login renvoit les jwt en cookie httponly -> ok,
- Le formulaire de création de compte renvoi les erreurs prévues -> ok,
- Le formulaire de création de compte permet de créer un compte -> ok
- Le login success redirige vers ikodi.eu (en attente de récup de l'app d'origine) -> ok
- Le signup success fait ensuite le login -> ok

Ce que j'ai appris :
- Avec une bonne préparation, tout est plus simple :-)
- Le fait d'avoir passé du temps sur les tests me fait clairement gagner du temps ici (même si quand même c'est overkill pour une petite app comme ça).

## 07/11/2021

Fait :
- Fin des tests de composants (initiaux) de l'app Vue,

Ce que j'ai appris :
- A faire des tests sur les composants Vue, plus compliqué qu'il n'y parait d'autant qu'il faut tester le résultat affiché plutôt que les props ou les méthodes.
- Bon côté, c'est probablement quasi identique avec React,

Prochaines étapes :
- Connexion serveur avec le front Vue,

## 05/11/2021

Fait :
- config du projet pour utiliser vue-test-utils avec chai -> ok
- tests du composant LoginForm.vue -> ok

Ce que j'ai appris :
- C'est la galère à configurer, à ce stade avec Vue il y a des incompatibilités de version entre vue2 / vue3 et vue-utils. ESLint, c'est la galère aussi pour les mêmes raisons.
- Utiliser vue-cli pour paramétrer le projet c'est beaucoup plus efficace car tout est prévu compatible direct. D'ailleur recréer un projet avec les bons params et copier-coller le dossier src semble fonctionner rapidement.

Prochaines étapes :
- Finir de mettre en place les tests des composants Vue,

## 04/11/2021

Choix librairie de tests composants Vue3 -> https://testing-library.com/docs/vue-testing-library/examples

## 03/11/2021

Mise en place DELETE /me, tests d'intégration + jwt.verify, redis.verify -> ok
Mise en place PUT /me, tests d'intégration + jwt.verify, redis.verify -> ok
Mise en place PUT /me/password, tests d'intégration + jwt.verify, redis.verify -> ok
Mise en place de tests unitaires sur services de l'api (fonctions jwt et redis), -> ok

## 02/11/2021 ()

Mise en place GET /me, tests d'intégration ok (login with access_token and refresh_token);
Mise en place de redis pour stockage info logout,
Loggout : route + redis -> ok
Mise en place /me pour récup infos perso fonctionnel avec JWT et logout.

## 01/11/2021 (environ 3h / jour depuis la dernière entrée, 6h aujourd'hui)

L'app express est en place, la base postgreSQL est créée (avec script create.sql) et connectée à l'app express avec queries async/await.
Les premières routes sont créées, notamment /signup, /login, 
Les tests d'intégration sont en place et utilisés façon TDD.
Cryptage du mot de passe + tests (bcrypt),
Mise en place des JWT + cookiehttponly avec tests d'intégration,

## 28/10/2021

Le landing est fait avec composants et tout et tout, modals quasi finies mais je viens de tomber sur un exemple d'authentification par techno blockchain avec web3.js, je vais donc me renseigner d'avantage sur la faisabilité même si ça semble réservé aux apps décentralisées. -> pour app sur blockchain uniquement ou alors avec paiement de gas fee donc voilà...

## 25/10/2021 (9h - 10h)

Fin des wireframes.


## 24/10/2021 (2h)

Création du README.md, réflexion sur l'architecture globale dans le whimsical.
Début du wireframe selon modèle de Topics.
Création du repo et du projet dans repo github.

Demain: Continuer les wireframes.