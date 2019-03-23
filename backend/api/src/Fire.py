import api.helpers.base_name as names
import api.helpers.base_errors as errors
from api.helpers.service import Sql


def select_fire(sql_data):
    data = Sql.exec(file="api/sql/select_fire.sql", args=sql_data)
    return {names.ANSWER: errors.OK, names.DATA: data}


def fire(sql_data):
    try:
        data = Sql.exec(file="api/sql/select_fire.sql", args=sql_data)
    except:
        return {names.ANSWER: errors.SQL_EXEC,
                names.DATA: {"error_info": "Ошибка запроса к базе данных"}}
    if data is None:
        data = Sql.exec(file="api/sql/insert_fire.sql", args=sql_data)
    else:
        data = Sql.exec(file="api/sql/update_fire.sql", args=sql_data)
    return {names.ANSWER: errors.OK, names.DATA: data[0]}
