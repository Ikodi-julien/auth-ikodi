DROP SCHEMA IF EXISTS auth CASCADE;

BEGIN;
CREATE SCHEMA auth;
ALTER SCHEMA auth OWNER TO "ikodiauth";

CREATE TABLE auth.users (
    id SERIAL PRIMARY KEY,
    firstname character varying(50),
    lastname character varying(50),
    nickname character varying(50),
    password character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    apisignup boolean not null default false
);

ALTER TABLE auth.users OWNER TO "ikodiauth";

-- ALTER SEQUENCE auth.users_id_seq RESTART WITH 30;

INSERT INTO auth.users ("firstname", "lastname", "nickname", "password", "email") VALUES
('Julien', 'Pellin', 'Ju', '$2b$10$EUaudgeyxHm8Tl0PwEQxi.fGH.8BXR8J3aLyMCZfsDqoIqsdWAeby', 'juledev@nodejs.fr'),
('Bob', 'Le chat', 'Bob', '$2b$10$xWIp3.jmgJlzW.ypqttEtuW0LdQ7Ohyx2rh.SZn07rhjaXigu1Bhu', 'boblechat@gmail.com'),
('Consuelo', 'Marvin', 'Consuelo_Marvin', '$2b$10$DTmRdIGSqc8F0raCn5mSaOhyHVFGsLg5ztfQLFGSQE0bkMYyoqK7i', 'Cooper78@hotmail.com'),
('Jennings', 'Koelpin', 'Jennings79', '$2b$10$Uab4qp19UJECBjsp8FikOuj4DOMNCTGS1yQIgv5zYXCBSmKioFuPi', 'Ardella39@gmail.com'),
('Dixie', 'Emard', 'Dixie_Emard21', '$2b$10$MPI0l/q80n0PtY7/81Ojfuv5LKVi0RqyQqx4alwaGszcNtJvK01Nq', 'Johan.Jones56@yahoo.com'),
('Eve', 'Will', 'Eve40', '$2b$10$sLd3nC.nxqaks.wXCtAGo.Txmykls0A0p0X09kEJDWM5332kE2gvG', 'Arely.Hintz@hotmail.com'),
('Jackson', 'Erdman', 'Jackson_Erdman26', '$2b$10$vFoDQrQm5FEZDxE9KHQdsu63HRXc0vRPSbv.vE3.SDVIuaiEG0Rfm', 'Beulah.Will@gmail.com'),
('Kurt', 'Bayer', 'Kurt35', '$2b$10$/Pt/R./Bs3rgbyD.4LW4sO6X/Q18fxcDF0R0O0rUpWRYQ2QXhBo2e', 'Stuart18@gmail.com'),
('Aurore', 'Braun', 'Aurore_Braun', '$2b$10$Oss2xDR01wjw9GKMiC1/UuDjgP..X8FgjSswVdthvws9IabWRT2aC', 'Coby_Sauer42@hotmail.com'),
('Reece', 'Klein', 'Reece.Klein', '$2b$10$yevOE4EJesDHC5XKMCYDjeamS1brXkZsX6shnEWSxwWLcghfmm8O2', 'Meaghan_Torphy@gmail.com'),
('Norene', 'Schinner', 'Norene.Schinner8', '$2b$10$y4Vza7e2RB37YGRFCZcghe5P5fek/lf7OVfoMjfdBcZP3QrpTJUdS', 'Tierra_Davis1@gmail.com'),
('Autumn', 'Herman', 'Autumn20', '$2b$10$zkWZNvtpjPhnxVwZS.r3mO0PoUyl7xyo8WRAO/SpESWkTT/tVYbmq', 'Raul.Stark@hotmail.com'),
('Erwin', 'Willms', 'Erwin_Willms50', '$2b$10$GM7Htj8T9gLPB9DiXO.y6u9sD9olDRS867cg9KHbZcMcolAJ3lbuq', 'Arvilla.Schuppe@yahoo.com'),
('Tianna', 'Bode', 'Tianna.Bode66', '$2b$10$KykClU7Al98ug/jWaZ9BOue.X5D83fFZ0AADviPDQw4OVbYNtdDty', 'Chet19@hotmail.com'),
('Gracie', 'Larson', 'Gracie22', '$2b$10$JyB3Jg3LK.S4ZlAmrsUBauM7SjVJn0.BYojo17W7V68gsWx4dRrly', 'Jabari_Konopelski92@gmail.com'),
('Juliet', 'Spencer', 'Juliet_Spencer', '$2b$10$prSXxOaNZJfveFzFdkfEEuUKC7whhzeJfM0FgFrrBeePs8SMCHF4y', 'Marian_Hansen@hotmail.com'),
('Clotilde', 'Kunze', 'Clotilde27', '$2b$10$DnerKy3SZRoxcqON1D7SVOzwJO63.PDhVLkIcxmLiLB6FQ7NSITKe', 'Mina69@yahoo.com'),
('Loren', 'Douglas', 'Loren.Douglas', '$2b$10$t1ZUAVHevmn9j8jMCMi.HurBJq77LdXwikPjcHcaYtsH02QHe2a1e', 'Ceasar_Stiedemann@gmail.com'),
('Mellie', 'Cruickshank', 'Mellie.Cruickshank', '$2b$10$o3S6iekS8Nolu0ZLaZlhA.RAz4sYQN0WMiEy3pte1AeOw1fq0feTW', 'Stephanie3@yahoo.com'),
('Reyes', 'Johns', 'Reyes23', '$2b$10$G3Nj1gmwVI8bFzUS1YalBOFB5vzchTTKgWppesLbmM5iNuAYE4YmC', 'Wiley.Rau21@hotmail.com'),
('Elisabeth', 'Maggio', 'Elisabeth.Maggio', '$2b$10$HE31Cg8K4.8HY46txgRcNu/87hYpNuldaKxyX6BACg1/rLGpSpmHm', 'Hermann_Hegmann39@yahoo.com'),
('Micaela', 'Schmitt', 'Micaela.Schmitt31', '$2b$10$W9HW1lcFAlg8EbOBUQ61ZOzu2MmOdNSYGzXZWjHLdYjKSGLDuzBzq', 'Jody.Cummerata@yahoo.com'),
('Emilia', 'Koss', 'Emilia_Koss75', '$2b$10$w0KE3G.a0g7xZTs0MDoUeuhUDtyATohn8kTH.dgDGeO.zQKBaVtve', 'Rosemary50@yahoo.com'),
('Madeline', 'Sipes', 'Madeline_Sipes', '$2b$10$kcGukzz4uzJ9xAdT4GkJv.8SvMCCuOmS8X2BhtAtgUY4p9JvNPc4W', 'Amos.Tremblay65@hotmail.com'),
('Noble', 'Wuckert', 'Noble.Wuckert', '$2b$10$GoUAFDuGi45eegcFXXMDW.Hr.fszwoOec7z/yDsPCt.xUVEogPaM.', 'Rocky.Blanda25@yahoo.com'),
('Jovany', 'Cole', 'Jovany_Cole94', '$2b$10$L8jwqduuQZur9VjHTbgu3usQZgxrKglpUiM4k5pIdXG7pgMz/ImfK', 'Izabella_Herzog@hotmail.com'),
('Zaria', 'Kreiger', 'Zaria.Kreiger73', '$2b$10$FIlP.fpQJ78RhfTmUUUphu15R2dkPfgMS3XviNdc5jn57r6/biPDi', 'Jovanny86@yahoo.com');

COMMIT;
