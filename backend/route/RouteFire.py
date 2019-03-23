# coding=utf-8
from api.helpers import base_errors as errors
from api.helpers import base_name as names
from api.helpers.service import Gis as gs
from flask_restful import Resource, reqparse
from api.src.Fire import fire, select_fire
import json
from flask import jsonify
from flask import json

HEADER = {"Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With",
           "Access-Control-Allow-Methods": "GET, PUT, POST"}


class Fire(Resource):
    def __init__(self):
        self.__parser = reqparse.RequestParser()
        self.__parser.add_argument(names.ID_USER)
        self.__parser.add_argument(names.ID_CONCERT)
        self.__args = self.__parser.parse_args()

    def parse_data(self):
        data = dict()
        data[names.ID_USER] = self.__args.get(names.ID_USER, None)
        data[names.ID_CONCERT] = self.__args.get(names.ID_CONCERT, None)
        return data

    def get(self):
        try:
            data = self.parse_data()
            answer = select_fire(data)
            return answer, 200, HEADER
        except:
            return {}, 400, HEADER

    def post(self):
        try:
            data = self.parse_data()
            answer = fire(data)
            return answer, 200, HEADER
        except:
            return {}, 400, HEADER

    def option(self):
        return "OK", 200, HEADER

    def options(self):
        return "OK", 200, HEADER
