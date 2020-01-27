from flask import Flask, session
from flask import render_template, request, escape

app = Flask(__name__)

@app.route('/')
def entry_page() -> 'html':
    return render_template('index.html', the_title='Welcome to Tetris on the web!')


app.secret_key = 'SuperSecretKey1234'


if __name__ == '__main__':
    app.run(debug=True)
