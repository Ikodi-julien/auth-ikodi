TESTS AVANT DEPLOIEMENT AUTH-SERVER + CONCORD

* L'utilisateur peut se logguer ou créer un compte :
  - Redirection sur l'app auth-ikodi depuis l'app d'origine -> ok

  * LOGIN :
    - Message d'info si input vide -> ok
    - Message d'info si email pas valide -> ok
    - Message d'info si les identifiants sont invalides -> ok
    - Message d'info si email valid mais mdp non -> ok
    - Message d'info si compte créé mais inactif -> ok
    - Le login success redirige vers l'app d'origine -> ok
    - Le nouvel utilisateur est dans le BDD de auth-server et de l'app origine -> ok
  * SIGNUP :
    - Création de compte via auth-ikodi -> ok
    - Message d'info si input vide -> ok
    - Message d'info si password différents ->  ok
    - Message d'info si email pas valide -> ok
    - Message d'info si compte exist et valide -> ok
    - Le signup success envoi un mail pour confirmer l'adresse fournie -> ok
    - Suivre le lien du mail valide le compte, loggue et redirige sur l'app d'origine -> ok
    - Un deuxième signup success sur un compte inactif supprime celui-ci et en créé un autre -> ok
    - Le nouvel utilisateur est dans le BDD de auth-server et de l'app origine -> ok