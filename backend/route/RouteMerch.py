# coding=utf-8
from api.helpers import base_errors as errors
from api.helpers import base_name as names
from api.helpers.service import Gis as gs
from flask_restful import Resource, reqparse
from api.src.Time import get_time
import json
from flask import jsonify
from flask import json


class Time(Resource):
    def __init__(self):
        self.__parser = reqparse.RequestParser()
        self.__args = self.__parser.parse_args()

    def get(self):
        answer = {
            ''
        }
        return answer, 200, {'Access-Control-Allow-Origin': '*'}

    def option(self):
        return "OK", errors.OK, {'Access-Control-Allow-Origin': '*'}
