select
max(time) as time
, sum(time_int)::integer as count
from fire
where id_concert = 1
group by to_char(time, 'HH:MI:SS')
order by time