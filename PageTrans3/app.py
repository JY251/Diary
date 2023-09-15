from flask import Flask, render_template

app = Flask(__name__, template_folder='./')

@app.route('/')
def hello_world():
  # return 'Hello, World!'
  return render_template('index.html')

@app.route('/index2.html')
def serve_index2():
  return render_template('index2.html')

if __name__ == '__main__':
  app.run()