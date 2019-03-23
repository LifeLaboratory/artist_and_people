import api.helpers.base_name as names
import api.helpers.base_errors as errors
from api.helpers.service import Sql
from datetime import datetime


def select_fire(sql_data):
    data = Sql.exec(file="api/sql/select_fire.sql", args=sql_data)
    _dict = dict()
    _list = []
    for i in range(len(data)):
        _list.append(
            [i, data[i]['count']])
        _dict[i] = data[i]['count']
    count_fire = Sql.exec(file="api/sql/select_count_fire.sql", args=sql_data)
    return {'count_fire': count_fire[0]['sum'], names.DATA: _list}


def fire(sql_data):
    try:
        sql_data['time_int'] = 1
        datas = Sql.exec(file="api/sql/insert_fire.sql", args=sql_data)
    except:
        return {names.ANSWER: errors.SQL_EXEC,
                names.DATA: {"error_info": "Ошибка запроса к базе данных"}}
    data = Sql.exec(file="api/sql/update_fire.sql", args=sql_data)
    return {names.ANSWER: errors.OK, names.DATA: data[0]}
