# coding=utf-8
from api.helpers import base_errors as errors
from api.helpers import base_name as names
from flask_restful import Resource, reqparse
from api.src.Registration import registration


class Reg(Resource):
    def __init__(self):
        self.__parser = reqparse.RequestParser()
        self.__parser.add_argument(names.LOGIN)
        self.__parser.add_argument(names.PASSWORD)
        self.__parser.add_argument(names.NAME)
        self.__parser.add_argument(names.INFORMATION)
        self.__args = self.__parser.parse_args()

    def parse_data(self):
        data = dict()
        data[names.LOGIN] = self.__args.get(names.LOGIN, None)
        data[names.PASSWORD] = self.__args.get(names.PASSWORD, None)
        data[names.NAME] = self.__args.get(names.NAME, None)
        data[names.INFORMATION] = self.__args.get(names.INFORMATION, None)
        return data

    def post(self):
        try:
            data = self.parse_data()
            answer = registration(data)
            return answer, 200, {'Access-Control-Allow-Origin': '*'}
        except:
            return {}, 400, {'Access-Control-Allow-Origin': '*'}

    def option(self):
        return "OK", errors.OK, {'Access-Control-Allow-Origin': '*'}
