
from factories.response_factory import success_response, err_response
from flask import request
from flask_restful import Resource, reqparse
from utils.logging import log_event

class User(Resource):
    def get(self, user_id):
        log_event(f"GET: /users/{user_id}")
        try:
            user = {
                'user_id': user_id
            }
            return success_response(user)
        except Exception:
            return err_response('Error getting user', 500)
