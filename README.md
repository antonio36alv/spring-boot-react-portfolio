# Portfolio

### GitHub username: antonio36alv

![Spring Boot Badge](https://img.shields.io/badge/Java-Spring%20Boot-green)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;![Thymeleaf Badge](https://img.shields.io/badge/JavaScript-React-blue)

[Deployed Website](www.antonioalv.com)

[My GitHub](https://github.com/antonio36alv)

<!-- add main screenshot here -->

<!-- add video demo here -->

## Description

My Developer portfolio, which is hosted on AWS EC2 and connected to an RDS MySQL database. Front end is done with React.js and back end is done with Spring Boot. 

It is bundled together as one jar with the use of the maven-frontend-plugin. Also containerized with the use of Docker.

<!-- - Pages are restricted according to whether or not a user is logged in -->

<!-- TODOs -->
<!-- add main screenshot -->
<!-- add video demo -->
<!-- table of contents, if necessary if necessary -->
<!-- add instructions or link on how to override profile within IntelliJ -->
<!-- double check how to override port number -->

## Installions/Requirements

- Java 8+

- Maven

- All the dependencies included within the [pom.xml](./pom.xml) file. IntelliJ is my preferred IDE, which takes care of importing dependencies present in the pom.xml.

# How to run

In your terminal you can run:

```
mvn clean install
```

which will produce a jar within the target directory. From there you can run:

```
java -jar target/<name of jar file>
```

There are two application.properties files, one being the default and the other being for a development enviroment (application-dev.properties).

If you use IntelliJ there is a way to override which enviroment you want each time you run it without having to create a new jar file see [here](https://stackoverflow.com/questions/39738901/how-do-i-activate-a-spring-boot-profile-when-running-from-intellij#44374099). 

Through the command line you simply run:

```
java -jar -Dspring.profiles.active=dev target/<name of jar file>
```

For the default application.properties file you do not need to add the ```-Dspring.profiles.active``` argument. This application runs on port 8080, which

can be changed within either application.properties file or you can override it when running by adding this argument: ```-Dserver.port=<Port number>```.

With the use of Docker, traffic to port 80 will be forwarded to port 8080 (the application's port). Database credentials within both application.properties files

are set using enviromental variables. This are set within the host machine and then passed to the Docker container using the ```env-file=<Host env file name>```

argument at runtime.

### Features

- AWS Deployment (EC2, RDS and domain name setup through Route 53)

- MySQL

- JPA/Hibernate (ORM)

- Docker