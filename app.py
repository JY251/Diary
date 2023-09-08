# !pip install Flask
# pip install Flask

from flask import Flask, request, render_template
import os


app = Flask(__name__)

diary_entries = {}

@app.route('/')
def index():
  return render_template('index.html', entries=diary_entries)

@app.route('/add_entry', methods=['POST'])
def add_entry():
  date = request.form['date']
  entry = request.form['entry']
  diary_entries[date] = entry
  return render_template('index.html', entries=diary_entries)

if __name__ == '__main__':
  app.run(debug=True)
  # app.run(host='0.0.0.0', port=5000)