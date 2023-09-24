from flask import Flask, render_template
from flask_socketio import SocketIO, emit
from flask_bootstrap import Bootstrap

app = Flask(__name__)
@app.route("/")
def home():
    return render_template("index.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/demo-3")
def wip():
    return render_template("demo-3.html")

@app.route("/call")
def call():
    return render_template("call.html")


if __name__ == '__main__':
    app.run()
