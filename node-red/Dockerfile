FROM shawoo/node-red-rpi
# USER root
# WORKDIR /usr/src/node-red
RUN npm install --only=production
RUN npm install --save node-red-contrib-qrcode-generator
RUN npm install --save node-red-node-ping
RUN npm install --save node-red-node-snmp

#RUN apt-get update
#RUN apt-get install inetutils-ping -y
