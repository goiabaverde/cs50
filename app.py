import sqlite3
from flask import Flask, render_template, request, session, redirect, flash
from datetime import datetime
import jinja2
import cs50
import sys

app = Flask(__name__)
app.secret_key = "super secret key"
@app.route("/", methods=["POST", "GET"])
def home():
    return render_template("index13.0.html")
   

@app.route("/results", methods=["POST", "GET"])
def results():
    if request.method=="POST":
            a = request.form.get("a")
            b = request.form.get("b")
            c = request.form.get("c")
            now = datetime.now()
            date = now.strftime("%m/%d %I:%M:%p")
            con = sqlite3.connect("history.db")
            cur=con.cursor()
            cur.execute("INSERT INTO history (a, b, c, date) VALUES(?, ?, ?, ?)", (a, b, c, date))
            con.commit()
            con.close()
            return render_template("results9.0.html", a = a, b = b,c = c)

@app.route("/delete", methods=["POST", "GET"])
def delete():
    if request.method == "POST":
        try:
            der = sqlite3.connect("history.db")
            dlr=der.cursor()
            dlr.execute("DELETE FROM history")
            der.commit()
            return redirect("/history")
        except:    
            return render_template("historic6.0.html")
        finally:
            der.close()

@app.route("/history")
def history():
    rer = sqlite3.connect("history.db")
    rer.row_factory = sqlite3.Row
    dur=rer.cursor()
    dur.execute("SELECT * FROM history")
    results = dur.fetchall()
    return render_template("historic6.0.html", history=results)
app.run()