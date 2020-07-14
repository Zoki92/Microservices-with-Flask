import sys
import os
import datetime
from flask_sqlalchemy import SQLAlchemy
from flask import Flask, jsonify

db = SQLAlchemy()

# Application factory pattern script
def create_app(script_info=None):

    # instantiate the app
    app = Flask(__name__)

    # set config
    app_settings = os.getenv("APP_SETTINGS")
    app.config.from_object(app_settings)

    # set up extensions
    db.init_app(app)

    # register blueprint
    from project.api.users import users_blueprint

    app.register_blueprint(users_blueprint)

    # shell context for flask cli

    app.shell_context_processor({"app": app, "db": db})
    return app
