import api.helpers.base_name as names
import api.helpers.base_errors as errors
from api.helpers.service import Sql
from api.src.Authentication import auth


def registration(user_data):
    check = [names.LOGIN, names.PASSWORD, names.NAME, names.INFORMATION]
    auth_data = dict.fromkeys(check, '')
    error = False
    for data in check:
        if user_data.get(data, None) is None:
            auth_data[data] = 'Пустой параметр!'
            error = True
        else:
            auth_data[data] = user_data[data]
    if error:
        return {names.ANSWER: errors.CHECK_DATA, names.DATA: auth_data}
    answer = insert_user(auth_data)
    return answer


def insert_user(user_data):
    try:
        auth_data = Sql.exec(file="api/sql/inserst_auth.sql", args=user_data)
    except:
        return {names.ANSWER: errors.SQL_EXEC,
                names.DATA: {"error_info": "Ошибка запроса к базе данных"}}
    if auth_data is not None:
        answer = auth(user_data)
        return answer
    else:
        return {names.ANSWER: errors.SQL_EXEC,
                names.DATA: {"error_info": "Ошибка запроса к базе данных"}}

