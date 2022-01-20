--
-- PostgreSQL database dump
--

-- Dumped from database version 12.9 (Ubuntu 12.9-2.pgdg20.04+1)
-- Dumped by pg_dump version 12.9 (Ubuntu 12.9-2.pgdg20.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: auth; Type: SCHEMA; Schema: -; Owner: ikodiauth
--

CREATE SCHEMA auth;


ALTER SCHEMA auth OWNER TO ikodiauth;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: users; Type: TABLE; Schema: auth; Owner: ikodiauth
--

CREATE TABLE auth.users (
    id integer NOT NULL,
    firstname character varying(50),
    lastname character varying(50),
    nickname character varying(50),
    password character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    active boolean DEFAULT false NOT NULL,
    emailtoken character varying(255),
    apisignup boolean DEFAULT false NOT NULL
);


ALTER TABLE auth.users OWNER TO ikodiauth;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: auth; Owner: ikodiauth
--

CREATE SEQUENCE auth.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE auth.users_id_seq OWNER TO ikodiauth;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: auth; Owner: ikodiauth
--

ALTER SEQUENCE auth.users_id_seq OWNED BY auth.users.id;


--
-- Name: users id; Type: DEFAULT; Schema: auth; Owner: ikodiauth
--

ALTER TABLE ONLY auth.users ALTER COLUMN id SET DEFAULT nextval('auth.users_id_seq'::regclass);


--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: ikodiauth
--

COPY auth.users (id, firstname, lastname, nickname, password, email, active, emailtoken, apisignup) FROM stdin;
1	Julien	Pellin	Ju	$2b$10$EUaudgeyxHm8Tl0PwEQxi.fGH.8BXR8J3aLyMCZfsDqoIqsdWAeby	juledev@nodejs.fr	f	\N	f
2	Bob	Le chat	Bob	$2b$10$xWIp3.jmgJlzW.ypqttEtuW0LdQ7Ohyx2rh.SZn07rhjaXigu1Bhu	boblechat@gmail.com	f	\N	f
3	Consuelo	Marvin	Consuelo_Marvin	$2b$10$DTmRdIGSqc8F0raCn5mSaOhyHVFGsLg5ztfQLFGSQE0bkMYyoqK7i	Cooper78@hotmail.com	f	\N	f
4	Jennings	Koelpin	Jennings79	$2b$10$Uab4qp19UJECBjsp8FikOuj4DOMNCTGS1yQIgv5zYXCBSmKioFuPi	Ardella39@gmail.com	f	\N	f
5	Dixie	Emard	Dixie_Emard21	$2b$10$MPI0l/q80n0PtY7/81Ojfuv5LKVi0RqyQqx4alwaGszcNtJvK01Nq	Johan.Jones56@yahoo.com	f	\N	f
6	Eve	Will	Eve40	$2b$10$sLd3nC.nxqaks.wXCtAGo.Txmykls0A0p0X09kEJDWM5332kE2gvG	Arely.Hintz@hotmail.com	f	\N	f
7	Jackson	Erdman	Jackson_Erdman26	$2b$10$vFoDQrQm5FEZDxE9KHQdsu63HRXc0vRPSbv.vE3.SDVIuaiEG0Rfm	Beulah.Will@gmail.com	f	\N	f
8	Kurt	Bayer	Kurt35	$2b$10$/Pt/R./Bs3rgbyD.4LW4sO6X/Q18fxcDF0R0O0rUpWRYQ2QXhBo2e	Stuart18@gmail.com	f	\N	f
9	Aurore	Braun	Aurore_Braun	$2b$10$Oss2xDR01wjw9GKMiC1/UuDjgP..X8FgjSswVdthvws9IabWRT2aC	Coby_Sauer42@hotmail.com	f	\N	f
10	Reece	Klein	Reece.Klein	$2b$10$yevOE4EJesDHC5XKMCYDjeamS1brXkZsX6shnEWSxwWLcghfmm8O2	Meaghan_Torphy@gmail.com	f	\N	f
11	Norene	Schinner	Norene.Schinner8	$2b$10$y4Vza7e2RB37YGRFCZcghe5P5fek/lf7OVfoMjfdBcZP3QrpTJUdS	Tierra_Davis1@gmail.com	f	\N	f
12	Autumn	Herman	Autumn20	$2b$10$zkWZNvtpjPhnxVwZS.r3mO0PoUyl7xyo8WRAO/SpESWkTT/tVYbmq	Raul.Stark@hotmail.com	f	\N	f
13	Erwin	Willms	Erwin_Willms50	$2b$10$GM7Htj8T9gLPB9DiXO.y6u9sD9olDRS867cg9KHbZcMcolAJ3lbuq	Arvilla.Schuppe@yahoo.com	f	\N	f
14	Tianna	Bode	Tianna.Bode66	$2b$10$KykClU7Al98ug/jWaZ9BOue.X5D83fFZ0AADviPDQw4OVbYNtdDty	Chet19@hotmail.com	f	\N	f
15	Gracie	Larson	Gracie22	$2b$10$JyB3Jg3LK.S4ZlAmrsUBauM7SjVJn0.BYojo17W7V68gsWx4dRrly	Jabari_Konopelski92@gmail.com	f	\N	f
16	Juliet	Spencer	Juliet_Spencer	$2b$10$prSXxOaNZJfveFzFdkfEEuUKC7whhzeJfM0FgFrrBeePs8SMCHF4y	Marian_Hansen@hotmail.com	f	\N	f
17	Clotilde	Kunze	Clotilde27	$2b$10$DnerKy3SZRoxcqON1D7SVOzwJO63.PDhVLkIcxmLiLB6FQ7NSITKe	Mina69@yahoo.com	f	\N	f
18	Loren	Douglas	Loren.Douglas	$2b$10$t1ZUAVHevmn9j8jMCMi.HurBJq77LdXwikPjcHcaYtsH02QHe2a1e	Ceasar_Stiedemann@gmail.com	f	\N	f
19	Mellie	Cruickshank	Mellie.Cruickshank	$2b$10$o3S6iekS8Nolu0ZLaZlhA.RAz4sYQN0WMiEy3pte1AeOw1fq0feTW	Stephanie3@yahoo.com	f	\N	f
20	Reyes	Johns	Reyes23	$2b$10$G3Nj1gmwVI8bFzUS1YalBOFB5vzchTTKgWppesLbmM5iNuAYE4YmC	Wiley.Rau21@hotmail.com	f	\N	f
21	Elisabeth	Maggio	Elisabeth.Maggio	$2b$10$HE31Cg8K4.8HY46txgRcNu/87hYpNuldaKxyX6BACg1/rLGpSpmHm	Hermann_Hegmann39@yahoo.com	f	\N	f
22	Micaela	Schmitt	Micaela.Schmitt31	$2b$10$W9HW1lcFAlg8EbOBUQ61ZOzu2MmOdNSYGzXZWjHLdYjKSGLDuzBzq	Jody.Cummerata@yahoo.com	f	\N	f
23	Emilia	Koss	Emilia_Koss75	$2b$10$w0KE3G.a0g7xZTs0MDoUeuhUDtyATohn8kTH.dgDGeO.zQKBaVtve	Rosemary50@yahoo.com	f	\N	f
24	Madeline	Sipes	Madeline_Sipes	$2b$10$kcGukzz4uzJ9xAdT4GkJv.8SvMCCuOmS8X2BhtAtgUY4p9JvNPc4W	Amos.Tremblay65@hotmail.com	f	\N	f
25	Noble	Wuckert	Noble.Wuckert	$2b$10$GoUAFDuGi45eegcFXXMDW.Hr.fszwoOec7z/yDsPCt.xUVEogPaM.	Rocky.Blanda25@yahoo.com	f	\N	f
26	Jovany	Cole	Jovany_Cole94	$2b$10$L8jwqduuQZur9VjHTbgu3usQZgxrKglpUiM4k5pIdXG7pgMz/ImfK	Izabella_Herzog@hotmail.com	f	\N	f
27	Zaria	Kreiger	Zaria.Kreiger73	$2b$10$FIlP.fpQJ78RhfTmUUUphu15R2dkPfgMS3XviNdc5jn57r6/biPDi	Jovanny86@yahoo.com	f	\N	f
45	ju		ju-	$2b$10$SfxrpMbofSWGZIu/1rr2TuGlr.z8AXanJ0ta56shhmgssJ47RJ7Di	ju@pr.poiurtyroiu	f	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDUsImVtYWlsIjoianVAcHIucG9pdXJ0eXJvaXUiLCJwYXNzd29yZCI6ImJvYlA3IiwiYXBwIjpudWxsLCJpYXQiOjE2NDEzMDk3NjAsImV4cCI6MTY0MTMxMDY2MH0.fuggj4UkSG8aXy8bfOkiL6gzHWpMOg0oNjnp3h9W-m8	f
35	ju	pell	ju-pell	$2b$10$gwrrmYiSI8xUB1cZ1kAKqe.uFPAYUbHe39bVsCnWJI.lBnTnCZIuO	ju@pe.fr	t	\N	f
32	bob		bob-	$2b$10$Ttyl639Aggr2zcZYums5oePImrwxMGxHU.sZj6mO7x.mz3NkllvAu	bob@bob.fr	t	\N	f
50			jupellin39	$2b$10$9C4afPiCOzE2gnKFfWu85.Pwf59vUR01G.ydTy.nS0/jz7Xb6b2V6	jupellin39@gmail.com	t	\N	f
\.


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: auth; Owner: ikodiauth
--

SELECT pg_catalog.setval('auth.users_id_seq', 50, true);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: auth; Owner: ikodiauth
--

ALTER TABLE ONLY auth.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

