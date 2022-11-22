#!bin/bash

#By default commands in user data gets executed with root user. Hence, "sudo su" command is optional. 
sudo su

yum install httpd -y
cd /var/www/html/
mkdir forum
cd forum/
echo "<h1>Forum page of $(curl http://169.254.169.254/latest/meta-data/instance-id)</h1>" > index.html
service httpd start
