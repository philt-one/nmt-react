# Import required packages
from flask import Flask, request, jsonify, Response
from flask_cors import CORS
import json
import time

import os
from pkg.endetranslator import EnDeTranslator


# FLASK Backend API
app = Flask(__name__)
CORS(app)
translator = EnDeTranslator("./model/averaged-ende-export500k-v2")

@app.route('/translate', methods=['POST'])
def translate_processor():
	content = request.json

	source_input = content["source"]
	uuid = content["uuid"]
	language = "en-de"

	output = translator.translate([source_input])
	data = { \
		"uuid": str(uuid), \
		"language": language, \
		"time": time.strftime('%XT%xZ%Z'), \
		"source": source_input, \
		"output": output[0] \
	}
	
	r = json.dumps(data, ensure_ascii=False)
	r = Response(response=r, status=200, mimetype="application/json")
	r.headers["Content-Type"] = "application/json; charset=utf-8"
	return r

if __name__ == "__main__":
	app.run(host= '0.0.0.0',debug=True)