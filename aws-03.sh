#Switch to super user 
sudo su

#Check httpd service status 
service httpd status

#Install httpd service 
yum install httpd -y

#Start httpd service
service httpd start

#Change directory to /var/www/html/  
cd /var/www/html/

#Create index.html file 
touch index.html

#Edit index.html file. Press "i" for insert mode, Press "Esc" for vi mode, Type ":wq" to write and quite from vi mode
vi index.html

#See the content of index.html file 
cat index.html
