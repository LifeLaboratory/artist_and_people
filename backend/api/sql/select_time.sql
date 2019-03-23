select
       case when start > now() then "end" - now()
            else start - now()
        end::text as "time"
from times
where id_concert = '{id_concert}'