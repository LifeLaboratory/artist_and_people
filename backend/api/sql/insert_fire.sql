insert into fire ("id_user", "id_concert", "time", "time_int")
VALUES (
  '{id_user}'
, '{id_concert}'
, now()
, '{time_int}'
)
returning time_int