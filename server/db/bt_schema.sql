-- bug_tracking_schema.sql
-- Initialize: $> psql -U dbuser -d dbname -a -f filename.sql
-- Run db$> psql -U postgres
-- Enter: password

DROP DATABASE IF EXISTS bugtracker;

CREATE DATABASE bugtracker;

\c bugtracker;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  user_name TEXT UNIQUE
);

CREATE TABLE threat_levels (
  id SERIAL PRIMARY KEY,
  threat_level TEXT
);

CREATE TABLE bugs (
  id SERIAL PRIMARY KEY,
  bug_description TEXT,
  reported_by INTEGER REFERENCES users(id),
  created_date DATE,
  assigned_to INTEGER REFERENCES users(id),
  threat_level TEXT
);

-- INSERT INTO table_name (column_names ...) VALUES ('val1', val2', ...);
INSERT INTO users (user_name) VALUES ('Bailey');
INSERT INTO users (user_name) VALUES ('Jeff');
INSERT INTO users (user_name) VALUES ('Daniel');
INSERT INTO users (user_name) VALUES ('Nick');
INSERT INTO users (user_name) VALUES ('Teddi');
INSERT INTO users (user_name) VALUES ('Surj');
 
INSERT INTO threat_levels (threat_level) VALUES ('Critical');
INSERT INTO threat_levels (threat_level) VALUES ('Important');
INSERT INTO threat_levels (threat_level) VALUES ('Low-Priority');
INSERT INTO threat_levels (threat_level) VALUES ('None');

-- test bug reports
INSERT INTO bugs (bug_description, reported_by, created_date, assigned_to, threat_level) 
  VALUES ('Test bug report 1',
    '1', '01/01/2020', '5', 'Critical');
INSERT INTO bugs (bug_description, reported_by, created_date, assigned_to, threat_level) 
  VALUES ('Test bug report 2',
    '2', '01/02/2020', '4', 'Important');
