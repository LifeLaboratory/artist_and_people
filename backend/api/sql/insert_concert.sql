INSERT INTO concerts (name, datetime, place, id_artist, organizer, age)
VALUES ('{name}', 'datetime', '{place}', '{id_artist}', '{organizer}', '{age}')
returning id_concert
