import api.helpers.base_name as names
import api.helpers.base_errors as errors
from api.helpers.service import Sql
from api.src.Authentication import auth
from datetime import datetime


def list_concerts():
    try:
        data = Sql.exec(file="api/sql/select_concerts.sql")
    except:
        return {names.ANSWER: errors.SQL_EXEC,
                names.DATA: {"error_info": "Ошибка запроса к базе данных"}}
    post_process_data(data)
    return {names.ANSWER: errors.OK, names.DATA: data}


def post_process_data(data):
    for d in data:
        d[names.DATETIME] = datetime.strftime(d.get(names.DATETIME), "%Y.%m.%d %H:%M:%S")
