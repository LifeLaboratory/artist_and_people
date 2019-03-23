select * from fire f
join session s on s.id_user = f.id_user
where "session" = '{session}'