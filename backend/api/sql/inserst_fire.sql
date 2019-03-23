insert into fire ("id_user", "id_concert", "qty")
select
  "id_user"
, '{id_concert}'
, 1
from (
  select "id_user"
  from "session"
  where "session" = '{session}'
  limit 1
) nd
returning id_fire