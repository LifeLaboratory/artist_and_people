import api.helpers.base_name as names
import api.helpers.base_errors as errors
from api.helpers.service import Sql


def insert_quest(user_data):
    try:
        auth_data = Sql.exec(file="api/sql/select_user_auth.sql", args=user_data)
    except:
        return {names.ANSWER: errors.SQL_EXEC,
                names.DATA: {"error_info": "Ошибка запроса к базе данных"}}
    auth = Sql.exec(file="api/sql/select_auth.sql", args=user_data)
    return {names.ANSWER: errors.OK, names.DATA: auth[0]}

