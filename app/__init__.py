#!/usr/bin/env python
from werkzeug.debug import DebuggedApplication
from flask import Flask
from config import basedir

# Global variables
app = Flask(__name__)
app.config.from_object('config')
app.config.from_object('secrets')
application = DebuggedApplication(app, True)

# Global definitions
def debug(s):
    debug_file = "/tmp/flask-debug"
    with open(debug_file, 'a') as out:
        out.write(s + "\n")

from app import views
