# coding=utf-8
from api.helpers import base_errors as errors
from api.helpers import base_name as names
from flask_restful import Resource, reqparse
from api.src.Concerts import list_concerts


class Concert(Resource):
    def __init__(self):
        self.__parser = reqparse.RequestParser()
        self.__args = self.__parser.parse_args()

    def parse_data(self):
        data = dict()
        return data

    def get(self):
        try:
            data = self.parse_data()
            answer = list_concerts()
            return answer, 200, {'Access-Control-Allow-Origin': '*'}
        except:
            return {}, 400, {'Access-Control-Allow-Origin': '*'}

    def option(self):
        return "OK", errors.OK, {'Access-Control-Allow-Origin': '*'}
