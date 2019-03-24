import api.helpers.base_name as names
import api.helpers.base_errors as errors
from api.helpers.service import Sql
from datetime import datetime
import time


def fire():
    sql_data = dict()
    sql_data[names.ID_USER] = 1
    sql_data[names.ID_CONCERT] = 1
    try:
        sql_data['time_int'] = Sql.exec(query="""
    select
    max(time) as time
    , sum(time_int) 
    from fire 
    where id_concert = 1
    group by to_char(time, 'HH:MI:SS') 
    order by time desc limit 1
    """)[0]['sum'] - 1
        if sql_data['time_int'] < 0:
            sql_data['time_int'] = 0
        datas = Sql.exec(file="D:/artist_and_people/backend/api/sql/insert_fire.sql", args=sql_data)
    except:
        print('alarm')
    return


while True:
    time.sleep(1)
    fire()
