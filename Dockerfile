# can be pulled from meepz/my-portfolio-jar
FROM openjdk:14-alpine

WORKDIR /app

ADD target/portfolio-0.0.1-SNAPSHOT.jar app.jar

CMD ["java", "-jar", "app.jar"]
# docker run -p 80:8080 --name portfolio -d --env-file=<env file for aws/rds> -v <path to keystore for ssl>:<repeat> <image name>
