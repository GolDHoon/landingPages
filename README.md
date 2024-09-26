# ipconfig /flushdns

# sudo nano /etc/nginx/sites-available/{domain}

```shell
#http
server {
    listen 80;
    server_name {domain}  www.{domain};

    location / {
        add_header 'Access-Control-Allow-Origin' '*';
        add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
        add_header 'Access-Control-Allow-Headers' 'Origin, Content-Type, Accept, Authorization';
        root /www/{domain};
        try_files $uri $uri/ /index.html;
    }
}
```
```shell
#https
server {
    listen 80;
    server_name {domain} www.{domain};

    location / {
        add_header 'Access-Control-Allow-Origin' '*';
        add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
        add_header 'Access-Control-Allow-Headers' 'Origin, Content-Type, Accept, Authorization';
        if ($request_method = 'OPTIONS') {
            return 204;
        }
        return 301 https://$host$request_uri;
    }
}

server {
    listen 443 ssl;
    server_name {domain} www.{domain};

    ssl_certificate  /etc/ssl/certs/{domain}_crt.pem;
    ssl_certificate_key  /etc/ssl/certs/{domain}_key.pem;
    ssl_session_timeout 5m;

    ssl_protocols   TLSv1.2;
    ssl_ciphers     ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384;
    ssl_prefer_server_ciphers on;

    location / {
        add_header 'Access-Control-Allow-Origin' '*';
        add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
        add_header 'Access-Control-Allow-Headers' 'Origin, Content-Type, Accept, Authorization';
        if ($request_method = 'OPTIONS') {
            return 204;
        }
        root /www/{domain};
        index index.html;
    }
}
```
# sudo ln -s /etc/nginx/sites-available/{domain} /etc/nginx/sites-enabled/
# sudo service nginx restart

