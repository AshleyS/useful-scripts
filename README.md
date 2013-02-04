# Readme

## Apache 2 scripts

### Setup
Run the following:

```
$ mkdir /etc/apache2/sites-available

$ mkdir /etc/apache2/sites-enabled
```

Add the following to the bottom of __/private/etc/apache2/httpd.conf__

```
# Include the virtual host configurations:

<VirtualHost *:80>
    ServerName default
    DocumentRoot /Library/WebServer/Documents/
    <Directory />
        ServerSignature Off 
    </Directory>
</VirtualHost>

Include /private/etc/apache2/sites-enabled/
```

### Usage
1. Create vhost "example.com" in `/etc/apache2/sites-available/`
1. `$ a2ensite example.com`
