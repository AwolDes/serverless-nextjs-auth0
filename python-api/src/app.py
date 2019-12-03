from flask import Flask, request
import logging
import json

from flask.logging import default_handler
from flask_restful import Api
from flask_cors import CORS
from src.user.user import User
from flask_restful import Resource

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})
api = Api(app)

# TODO: PERMISSION CHECKS ON ALL ROUTES
# Currently not scoped, at all. Relying on security through auth0
api.add_resource(User, '/users/<string:user_id>')


if __name__ == '__main__':
    app.run(debug=True)