openssl req -config req.conf -new -sha256 -newkey rsa:2048 -nodes -keyout ateam.key -x509 -days 3650 -out ateam.crt


mkcert-v1.4.3-windows-amd64.exe ateam.feg.cn sap560 localhost 127.0.0.1 ::1 10.17.15.104

mkcert-v1.4.3-windows-amd64.exe -install


    ssl_certificate      ssl/ateam.crt;
    ssl_certificate_key  ssl/ateam.key;
    ssl_session_timeout   10m;
    ssl_session_cache shared:WEB:10m;
    ssl_ciphers ECDHE-RSA-AES256-SHA384:AES256-SHA256:RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM;
    ssl_prefer_server_ciphers  on;
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
