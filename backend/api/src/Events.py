import api.helpers.base_name as names
import api.helpers.base_errors as errors
from api.helpers.service import Sql


def event(user_data):
    check = [names.ID_CONCERT, names.DESCRIPTION]
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
    answer = insert_event(user_data)
    return answer


def insert_event(data):
    try:
        event_data = Sql.exec(file="api/sql/insert_event.sql", args=data)
    except:
        return {names.ANSWER: errors.SQL_EXEC,
                names.DATA: {"error_info": "Ошибка запроса к базе данных"}}
    return {names.ANSWER: errors.OK, names.DATA: event_data[0]}


def get_event(data):
    try:
        event_data = Sql.exec(file="api/sql/select_event.sql", args=data)
    except:
        return {names.ANSWER: errors.SQL_EXEC,
                names.DATA: {"error_info": "Ошибка запроса к базе данных"}}
    return {names.ANSWER: errors.OK, names.DATA: event_data[0]}
