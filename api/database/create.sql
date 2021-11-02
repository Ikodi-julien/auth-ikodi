DROP SCHEMA IF EXISTS auth CASCADE;

BEGIN;
CREATE SCHEMA auth;
ALTER SCHEMA auth OWNER TO "ikodiauth";

CREATE TABLE auth.users (
    id SERIAL PRIMARY KEY,
    firstname character varying(50) NOT NULL,
    lastname character varying(50) NOT NULL,
    password character varying(255) NOT NULL,
    email character varying(255)
);

ALTER TABLE auth.users OWNER TO "ikodiauth";

INSERT INTO auth.users ("firstname", "lastname", "password", "email") VALUES
('Julien', 'Pellin', '$2b$10$EUaudgeyxHm8Tl0PwEQxi.fGH.8BXR8J3aLyMCZfsDqoIqsdWAeby', 'juledev@nodejs.fr'),
('Bob', 'Le chat', '$2b$10$xWIp3.jmgJlzW.ypqttEtuW0LdQ7Ohyx2rh.SZn07rhjaXigu1Bhu', 'boblechat@gmail.com');

COMMIT;
