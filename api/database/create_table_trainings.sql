DROP TABLE IF EXISTS auth.trainings;

BEGIN;
CREATE TABLE auth.trainings (
	id serial NOT NULL PRIMARY KEY,
  user_id int NOT NULL,
	training json NOT NULL,
  FOREIGN KEY (user_id) REFERENCES auth.users(id)
);

ALTER TABLE auth.trainings OWNER TO "ikodiauth";

INSERT INTO auth.trainings ("user_id", "training")
VALUES
(50,'{
  "name": "test",
  "duration": 6,
  "timecap": 0,
  "exos":
      [{
        "name": "exo 1",
        "description": "desc de l''exo 1",
        "duration": 1.9,
        "reps": 2,
        "weight": 2
      },
      {
        "name": "exo 2",
        "description": "desc de l''exo 2",
        "duration": 1.9,
        "reps": 3,
        "weight": 0
      },
      {
        "name": "exo 2",
        "description": "desc de l''exo 3",
        "duration": 1.9,
        "reps": 3,
        "weight": 0
      }]
  }'
);
COMMIT;