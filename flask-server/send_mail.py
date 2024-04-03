import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.image import MIMEImage
import os

def send(pw, email):
    bot_email = 'hardingsignout@gmail.com'
    password_key = pw  # for security
    to_addy = email

    # SMTP server and port for the library
    gmail_server = "smtp.gmail.com"
    gmail_port = 587

    # Start Connection
    server = smtplib.SMTP(gmail_server, gmail_port)
    server.ehlo()  # extended hello - ensures connection is secure
    server.starttls()  # enables encryption - Transport Layer Security (TLS)

    # after connection established, login
    server.login(bot_email, password_key)

    message = MIMEMultipart("alternative")  # creates MIME object called message - "alt." subtype includes plain text & HTML

    text_content = "test test test"
    message.attach(MIMEText(text_content))

    img_path = 'assets/IMG_1086.jpg'
    img = open(os.path.realpath(img_path), 'rb').read()  # reads image from location

    message.attach(MIMEImage(img, name=os.path.basename(img_path)))
    server.sendmail(
        from_addr=bot_email,
        to_addrs=to_addy,
        msg=message.as_string()
    )

    server.quit()

    