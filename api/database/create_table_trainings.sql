DROP TABLE IF EXISTS auth.trainings;

BEGIN;
CREATE TABLE auth.trainings (
	id serial NOT NULL PRIMARY KEY,
  user_id int NOT NULL,
	name text NOT NULL,
  type text not null,
  duration int not NULL,
  timecap int not null,
  exos json[] NOT NULL,
  created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES auth.users(id)
);

ALTER TABLE auth.trainings OWNER TO "ikodiauth";

INSERT INTO auth.trainings ("user_id", "name", "type", "duration", "timecap", "exos")
VALUES
(50, 'create sql 0', 'EMOM', 6, 0,
  array[
    '{
      "name": "exo 1",
      "description": "desc de l''exo 1",
      "duration": 1.9,
      "reps": 2,
      "weight": 2
    }',
    '{
      "name": "exo 2",
      "description": "desc de l''exo 2",
      "duration": 1.9,
      "reps": 3,
      "weight": 0
    }',
    '{
      "name": "exo 2",
      "description": "desc de l''exo 3",
      "duration": 1.9,
      "reps": 3,
      "weight": 0
    }'
  ]::json[]
),
(50, 'create_sql_1', 'FORTIME', 6, 0,
  array[
    '{
      "name": "exo 11",
      "description": "desc de l''exo 11",
      "duration": 1.9,
      "reps": 2,
      "weight": 2
    }',
    '{
      "name": "exo 21",
      "description": "desc de l''exo 21",
      "duration": 1.9,
      "reps": 3,
      "weight": 0
    }',
    '{
      "name": "exo 21",
      "description": "desc de l''exo 31",
      "duration": 1.9,
      "reps": 3,
      "weight": 0
    }'
  ]::json[]
);
COMMIT;