DROP DATABASE IF EXISTS personal_project_endeavernote;
CREATE DATABASE personal_project_endeavernote;

\c personal_project_endeavernote;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  full_name VARCHAR NOT NULL,
  email VARCHAR NOT NULL,
  profile_pic VARCHAR,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE notebooks (
  id SERIAL PRIMARY KEY,
  notebook_type VARCHAR NOT NULL,
  user_id INT REFERENCES notebooks(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE notes (
  id SERIAL PRIMARY KEY,
  title VARCHAR,
  notebook_id INT REFERENCES notebooks(id) ON DELETE CASCADE,
  body TEXT NOT NULL,
  tag VARCHAR,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (full_name, email, profile_pic) VALUES ('Jonelle Bain', 'jbain@gmail.com', 'https://static.boredpanda.com/blog/wp-content/uploads/2018/04/5acb63d83493f__700-png.jpg'), ('Max Mezalon', 'jmezalon@gmail.com', 'https://expo.advance.net/img/45df1909ad/width960/f2a_nederlandsekooikerhondjegrandbassetgriffonvendeen.jpeg'), ('Josh Lue', 'josh.luen@yahoo.com', 'https://www.guidedogs.org/wp-content/uploads/2018/01/Mobile.jpg'),
('Ciara Johns', 'ciarajohns@hotmail.com', 'https://thenypost.files.wordpress.com/2018/10/102318-dogs-color-determine-disesases-life.jpg?quality=90&strip=all&w=618&h=410&crop=1'),
('Kenny Joseph', 'kennkenn@aol.com', 'https://img.huffingtonpost.com/asset/5b7fdeab1900001d035028dc.jpeg?cache=sixpwrbb1s&ops=1910_1000');

INSERT INTO notebooks (notebook_type, user_id) VALUES ('Scientology', 1), ('Trash', 3), ('Math', 2), ('favorite', 4);

INSERT INTO notes (title, notebook_id, body, tag) VALUES
('In The beginning', 1, 'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'beginning'),
('Spiritual Science', 1, 'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and  essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'science'),
('scrapt', 3, 'nevermind i this is not good.', 'deleted'),
('Square Roots', 2, 'i love math and i love learning about scare roots. math is the best honestly. 2 to second power is 4. yayyy', 'roots'),
('rational numbers', 2, 'yeah.. ration numbers are cool. math is the best honestly. fun fact. i love rational numbers more than irrationals', 'numbers'),
('Spiritual Science', 4, 'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and  essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'science'),
('Square Roots', 4, 'i love math and i love learning about scare roots. math is the best honestly. 2 to second power is 4. yayyy', 'roots')
