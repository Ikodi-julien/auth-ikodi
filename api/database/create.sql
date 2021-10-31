DROP TABLE IF EXISTS users;

BEGIN;

CREATE TABLE users OWNER TO ikodiauth(
    id SERIAL PRIMARY KEY,
    firstname character varying(50) NOT NULL,
    lastname character varying(50) NOT NULL,
    password character varying(255) NOT NULL,
    email character varying(255)
);

INSERT INTO users ("firstname", "lastname", "password", "email") VALUES
('Julien', 'Pellin', '$2b$10$EUaudgeyxHm8Tl0PwEQxi.fGH.8BXR8J3aLyMCZfsDqoIqsdWAeby', 'test@test.fr'),
('Bob', 'Le chat', '$un mdp bidon $yuiopyxHm8Tl0PwEQxi.fGH.8BXR8J3aLyMCZfsDqoIqsdWAeby', 'boblechat@gmail.com');

COMMIT;
