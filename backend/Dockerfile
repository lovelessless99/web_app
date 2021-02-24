FROM python:3.9

# set working directory
COPY . /home/app/backend
WORKDIR /home/app/backend

# install required libraries
RUN pip3 install pandas requests flask flask-cors pymongo

# This is the runtime command for the container
CMD python3 app.py

# for flask web server
EXPOSE 8081
