from flask import Flask
from flask_restful import Resource, Api


app = Flask(__name__)
api = Api(app)

class Login(Resource):
    def post(self):
        return 'Hello World!'


api.add_resource(Login, '/login')   

if __name__ == '__main__':
    app.run(debug=True)

