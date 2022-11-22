#!bin/bash

#By default commands in user data gets executed with root user. Hence, "sudo su" command is optional. 
sudo su

yum install httpd -y
cd /var/www/html/
mkdir forum
cd forum/
echo "<h1>Greetings from LC</h1>" > index.html
service httpd start
