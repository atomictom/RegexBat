from flask import render_template
from app import app, debug

class Problem(object):

    """ Attributes:
            name
            prev -- link
            next -- link
            description
            examples -- list
            footnote -- optional
    """

    defaults = {
        'name': 'Example Problem',
        'description': 'An example of what a problem might look like',
        'examples': ['example1', 'example2', 'getitalreadydammit1'],
        'footnote': 'Some additional information',
        'prev': 'google.com',
        'next': 'google.com',
    }

    def __init__(self, **kwargs):
        self.__dict__.update(Problem.defaults)
        self.__dict__.update(kwargs)

@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html', problem=Problem())
