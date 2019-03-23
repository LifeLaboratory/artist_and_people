select
sum(time_int)::integer as count
from fire
where id_user = '{id_user}' and id_concert = '{id_concert}'