# can be pulled from meepz/my-portfolio-jar
FROM openjdk:14-alpine

WORKDIR /app

ADD target/portfolio-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 443

EXPOSE 8080

CMD ["java", "-jar", "-Dspring.profiles.active=prod", "app.jar"]
# docker run -p 80:8080 -p 443:443 --name portfolio -d --env-file=<env file for aws/rds> -v <path to keystore for ssl>:<repeat> <image name>
