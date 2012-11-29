Run the following:

  mkdir /etc/apache2/sites-available
  mkdir /etc/apache2/sites-enabled

Add the following to the bottom of */private/etc/apache2/httpd.conf*:

  Include /private/etc/apache2/sites-enabled/
