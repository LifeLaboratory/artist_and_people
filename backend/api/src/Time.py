import api.helpers.base_name as names
import api.helpers.base_errors as errors
from api.helpers.service import Sql


def get_time(data):
    try:
        auth_data = Sql.exec(file="api/sql/select_time.sql", args=data)
    except:
        return {names.ANSWER: errors.SQL_EXEC,
                names.DATA: {"error_info": "Ошибка запроса к базе данных"}}
    return {names.ANSWER: errors.OK, names.DATA: auth_data[0]}






