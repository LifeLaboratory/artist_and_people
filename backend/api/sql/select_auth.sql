select "session", information
from users
join session s on s.id_user = users.id_user
where "login" = '{login}'
    and "password" = '{password}'
limit 1