# coding=utf-8
from api.helpers import base_errors as errors
from api.helpers import base_name as names
from api.helpers.service import Gis as gs
from flask_restful import Resource, reqparse
from api.src.Questions import insert_quest, select_quest


class Quest(Resource):
    def __init__(self):
        self.__parser = reqparse.RequestParser()
        self.__parser.add_argument(names.QUESTION)
        parse_result = self.__parser.add_argument(names.ANSWERS, action='append')
        self.__args = self.__parser.parse_args()

    def parse_data(self):
        data = dict()
        data[names.QUESTION] = self.__args.get(names.QUESTION, None)
        data[names.ANSWERS] = self.__args.get(names.ANSWERS, None)
        return data

    def post(self):
        data = self.parse_data()
        answer = insert_quest(data)
        return answer, 200, {'Access-Control-Allow-Origin': '*'}

    def get(self):
        answer = select_quest()
        return answer, 200, {'Access-Control-Allow-Origin': '*'}

    def option(self):
        return "OK", errors.OK, {'Access-Control-Allow-Origin': '*'}
