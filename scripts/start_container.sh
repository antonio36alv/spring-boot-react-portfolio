#!/bin/bash
# to be changed as soon as certificates are setup
sudo docker run -d --name portfolio -p 80:8080 -p 443:443 --env-file=/etc/profile.d/aws-credentials-env -v /etc/letsencrypt/live/www.antonioalv.com:/etc/letsencrypt/live/www.antonioalv.com/ meepz/my-portfolio-jar:latest