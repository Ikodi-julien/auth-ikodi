TESTS AVANT DEPLOIEMENT AUTH-SERVER + CONCORD

* L'utilisateur peut se logguer ou créer un compte :
  - Redirection sur l'app auth-ikodi depuis l'app d'origine -> ok

  * LOGIN :
    - Message d'info si input vide -> ok
    - Message d'info si email pas valide -> ok
    - Message d'info si les identifiants sont invalides -> ok
    - Message d'info si email ok mais mdp nok -> ok
    - Le login success redirige vers l'app d'origine -> ok
    - Le nouvel utilisateur est dans le BDD de auth-server et de l'app origine -> ok
  * SIGNUP :
    - Création de compte via auth-ikodi -> ok
    - Le signup success loggue et redirige vers l'app d'origine -> ok
    - Message d'info si input vide -> ok
    - Message d'info si password différents -> ok 
    - Message d'info si email pas valide -> ok
    - Le nouvel utilisateur est dans le BDD de auth-server et de l'app origine -> ok