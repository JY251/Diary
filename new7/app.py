from flask import Flask, jsonify, render_template, request
import json

app = Flask(__name__)

@app.route('/')
def index():
  return render_template('index.html')

@app.route('/api/diary', methods=['GET'])
def get_diary_data():
  date = request.args.get('date')
  try:
    with open(f"diary_data/{date}.json", 'r') as file:
      diary_data = json.load(file)
      return jsonify(diary_data)
  except FileNotFoundError:
    return jsonify({"error": "Diary data not found for the specified date"}), 404

if __name__ == '__main__':
  app.run(debug=True)