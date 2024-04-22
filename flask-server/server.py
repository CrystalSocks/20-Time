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
                'Reed Powell': {
                    'img': '/src/assets/reed.JPEG',
                    'email': 'reedjpow@gmail.com'
                },
                'Jacob Wallace': {
                    'img': '/src/assets/wallace.JPG',
                    # 'email': 'wallace.jacob@hardingacademymemphis.org'
                    'email': 'powell.reed@hardinglions.net'
                },
                'Janelle Phipps': {
                    'img': '/src/assets/phipps.JPG',
                    'email': 'phipps.janelle@hardingacademymemphis.org'
                },
                'Rachel Cox': {
                    'img': '/src/assets/coxr.JPG',
                    'email': 'cox.rachel@hardingacademymemphis.org'
                },
                'Charli Gonder': {
                    'img': '/src/assets/gonder.JPG',
                    'email': 'gonder.charli@hardingacademymemphis.org'
                },
                'Andrea Campbell': {
                    'img': '/src/assets/campbell.JPG',
                    'email': 'campbell.andrea@hardingacademymemphis.org'
                },
                'Jane Morgan': {
                    'img': '/src/assets/morgan.JPG',
                    'email': 'morgan.jane@hardingacademymemphis.org'
                },
                'Lisa Jo Perdue': {
                    'img': '/src/assets/perdue.JPEG',
                    'email': 'perdue.lisa@hardingacademymemphis.org'
                },
                'Jenny Radmer': {
                    'img': '/src/assets/radmer.JPG',
                    'email': 'radmer.jenny@hardingacademymemphis.org'
                },
                'Rob Kurzinsky': {
                    'img': '/src/assets/rob.JPG',
                    'email': 'kurzinsky.rob@hardingacademymemphis.org'
                },
                'Colby Canterbury': {
                    'img': '/src/assets/canterbury.JPEG',
                    'email': 'canterbury.colby@hardingacademymemphis.org'
                },
                'Jason Knight': {
                    'img': '/src/assets/knight.JPG',
                    'email': 'knight.jason@hardingacademymemphis.org'
                },
            },
        }
    )

@app.route("/send", methods=['GET', 'POST'])
def send():
    if request.method == "POST":
        email = request.json['email']
        u_name = request.json['u_name']
        u_email = request.json['u_email']
        t_name = request.json['t_name']
        class_hr = request.json['class_hr']
        return_teacher = request.json['return_teacher']
        reason = request.json['reason']

        sendMailTo(email, u_name, u_email, t_name, reason, return_teacher, class_hr)
        print('mail sent')
    return jsonify (
        {
            "email": ''
        }
    )
    

def sendMailTo(email, u_name, u_email, t_name, reason, return_teacher, class_hr):
    send_mail.send('bibf uhde cgkc mwtc', email, u_name, u_email, t_name, reason, return_teacher, class_hr)

if __name__ == "__main__":
    app.run(debug=True, port=8080)