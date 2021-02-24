FROM node:12

COPY . /home/app/frontend
WORKDIR /home/app/frontend

RUN npm install --global @angular/cli
RUN npm install
CMD ng serve --host 0.0.0.0 --disable-host-check
EXPOSE 4200