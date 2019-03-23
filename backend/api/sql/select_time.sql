select
       case when start > now() then "end"
            else start
        end::text as "time"
from times
where id_concert = '{id_concert}'