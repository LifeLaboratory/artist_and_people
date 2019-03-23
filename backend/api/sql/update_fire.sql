UPDATE fire
SET qty = (select qty from fire f
            join session s on s.id_user = f.id_user
            where "session" = '{session}') + 1
WHERE id_fire = (select id_user from session
            where "session" = '{session}')
returning qty