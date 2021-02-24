from flask import abort, redirect, Flask, request, jsonify, session
from flask_cors import CORS
from pymongo import MongoClient
import pandas as pd
import json

app = Flask(__name__)
CORS(app)
app.secret_key = "Fkking"

# declare constants
HOST = '0.0.0.0'
PORT = 8081 

client = MongoClient('mongodb://mongodb:27017/')
db = client.test_db # SQL: Database Name
collection = db['user_data'] # SQL: Table Name

def json_response(payload, status=200):
        return (json.dumps(payload), status, {'content-type': 'application/json'})

@app.route("/")
def hello_world():
        return "Hello World!"


@app.route("/index")
def hello_index():
        return "This is index!"

@app.route("/hey/<username>")
def hello_hey(username):
        return f"Hey! {username}"


@app.route("/my/<int:number>")
def hello_number(number):
        return f"Hey! My number is {number}"

@app.route("/project/")
def hello_project():
        return f"This is projects page"

@app.route("/about") # recommand
def hello_about():
        return json_response(f"This is about page")

@app.route("/array_dict") # recommand
def hello_array_dict():
        array = [
                {"name" : "Lawrence", "ID" : "0756554", "Sex" : "Male" },
                {"name" : "Louis"   , "ID" : "0756555", "Sex" : "Male" },
                {"name" : "Mary"    , "ID" : "0859334", "Sex" : "Female" },
                
        ]
        final = {}
        final['result'] = array
        return json_response(final)


@app.route("/google") # redirect
def hello_google():
        return redirect("https://www.google.com")

@app.route("/my_First_POST/test", methods=["POST"])
def test_POST():
        my_data = request.get_json()
        print(my_data)
        get_name = my_data.get("name")
        get_id   = my_data.get("ID")
        get_sex  = my_data.get("sex")
        return jsonify(name=get_name, ID=get_id, sex=get_sex)



# 登入
@app.route("/try/login", methods=["POST"])
def test_login():
        get_data = request.get_json()
        print(get_data)
        if not get_data:
                return jsonify(msg="pass parameter failed")

        username = get_data.get('username')
        password = get_data.get('password')

        if not all([username, password]):
                return jsonify(msg="some parameters missed")

        if username == "lawrence" and password == "love":
                # if valid, save login state in session 
                session['username'] = username
                return jsonify(msg='login success')
        
        else: return jsonify(msg='username or password wrong')


        
# 確認登入狀態
@app.route("/session", methods=["GET"])
def test_session():
        username = session.get("username")
        return jsonify(msg=f"user is {username}") if username else jsonify(msg=f"user not login!")

# 登出
@app.route("/try/logout", methods=["GET"])
def test_logout():
        session.clear()
        return jsonify(msg="logout success!") 


@app.route("/<username>") # recommand
def fetch_data(username):
        cursor = collection.find({'name': username})
        final = {}
        final['result'] = [ {k:v} for data in cursor for k,v in data.items() if k != '_id' ]
        return json_response(final)


@app.route("/form", methods=["POST"]) # recommand
def form_data():
        get_data = request.get_json()
        # print(get_data)
        if not get_data: return jsonify(msg="pass parameter failed")

        username = get_data.get('username')
        sex = get_data.get('sex')
        city = get_data.get('city')
        hobby = get_data.get('hobby')

        if not all([username, sex, city, hobby]): return jsonify(msg="some parameters missed")

        data = {
                'username': username,
                'sex'     : sex,
                'city'    : city,
                'hobby'   : hobby
        }
        collection.insert_one(data)
        return jsonify(msg="uploading success")

@app.route("/get_table", methods=["GET"]) # recommand
def get_all_data():
       cursor = collection.find({})
       df =  pd.DataFrame(list(cursor))
       del df['_id']
       records = df.to_dict('records') 
       return json_response(records)

if __name__ == "__main__":
        app.run(host=HOST,debug=True,port=PORT)
