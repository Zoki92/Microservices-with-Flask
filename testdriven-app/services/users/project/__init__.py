import os
from flask_sqlalchemy import SQLAlchemy
from flask import Flask
from flask_debugtoolbar import DebugToolbarExtension
from flask_cors import CORS
from flask_migrate import Migrate
from flask_bcrypt import Bcrypt


db = SQLAlchemy()

toolbar = DebugToolbarExtension()
migrate = Migrate()

bcrypt = Bcrypt()


# Application factory pattern script
def create_app(script_info=None):

    # instantiate the app
    app = Flask(__name__)

    # enable CORS
    CORS(app)

    # set config
    app_settings = os.getenv("APP_SETTINGS")
    app.config.from_object(app_settings)

    # set up extensions
    db.init_app(app)

    # init flask toolbar
    toolbar.init_app(app)

    # init flask migrate
    migrate.init_app(app, db)

    # setup bcrypt for password hashing
    bcrypt.init_app(app)

    # register blueprint
    from project.api.users import users_blueprint

    app.register_blueprint(users_blueprint)

    # shell context for flask cli

    app.shell_context_processor({"app": app, "db": db})
    return app
