from flask import Flask, jsonify, abort, request
from flask_cors import CORS
from subprocess import Popen, TimeoutExpired, PIPE
import send_mail
import os

app = Flask(__name__)
cors = CORS(app, origins='*')

# Members API Route
@app.route("/api/users", methods=['GET']) # only allows get requests
def users():
    return jsonify(
        {
            "users": {
                'Reed': {
                    'img': '/src/assets/IMG_20171025_174106.JPG',
                    'email': 'reedjpow@gmail.com'
                },
                'Luke': {
                    'img': '/src/assets/IMG_0019.JPG',
                    'email': 'reedjpow@gmail.com'
                },
                'Mercer': {
                    'img': '/src/assets/IMG_1290.jpg',
                    'email': 'reedjpow@gmail.com'
                },
                'Flynn': {
                    'img': '/src/assets/IMG_1018.JPG',
                    'email': 'reedjpow@gmail.com'
                }
            }
        }
    )

@app.route("/send", methods=['GET', 'POST'])
def send():
    if request.method == "POST":
        email = request.json['email']
        sendMailTo(email)
        print('mail sent')
    return jsonify (
        {
            "email": ''
        }
    )
    

def sendMailTo(email):
    send_mail.send('bibf uhde cgkc mwtc', email)

if __name__ == "__main__":
    app.run(debug=True, port=8080)