TESTS AVANT DEPLOIEMENT AUTH-SERVER + CONCORD

* L'utilisateur peut se logguer ou créer un compte :
  - Redirection sur l'app auth-ikodi depuis l'app d'origine -> ok

  * LOGIN :
    - Message d'info si input vide -> ok
    - Message d'info si email pas valide -> 
    - Message d'info si les identifiants sont invalides -> 
    - Message d'info si email valid mais mdp non -> 
    - Message d'info si compte créé mais inactif -> 
    - Le login success redirige vers l'app d'origine -> 
    - Le nouvel utilisateur est dans le BDD de auth-server et de l'app origine -> 
  * SIGNUP :
    - Création de compte via auth-ikodi -> ok
    - Message d'info si input vide -> 
    - Message d'info si email pas valide -> 
    - Message d'info si password différents -> 
    - Message d'info si compte exist et valide -> 
    - Le signup success envoi un mail pour confirmer l'adresse fournie -> 
    - Suivre le lien du mail valide le compte, loggue et redirige sur l'app d'origine -> 
    - Un deuxième signup success sur un compte inactif supprime celui-ci et en créé un autre -> 
    - Le nouvel utilisateur est dans le BDD de auth-server et de l'app origine -> 