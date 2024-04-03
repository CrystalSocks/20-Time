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
            "users": [
                'reed',
                'luke',
                'mercer',
                'flynn'
            ]
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