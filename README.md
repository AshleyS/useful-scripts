Run the following:

`mkdir /etc/apache2/sites-available`

`mkdir /etc/apache2/sites-enabled`

Add the following to the bottom of __/private/etc/apache2/httpd.conf__

`# Include the virtual host configurations:

<VirtualHost *:80>
    ServerName default
    DocumentRoot /Library/WebServer/Documents/
    <Directory />
        ServerSignature Off
    </Directory>
</VirtualHost>`

`Include /private/etc/apache2/sites-enabled/`
