#!bin/bash

#By default commands in user data gets executed with root user. Hence, "sudo su" command is optional. 
sudo su

yum install httpd -y
cd /var/www/html/
echo "<html><h1>Greetings from $(hostname)</h1></html>" > index.html
service httpd start
