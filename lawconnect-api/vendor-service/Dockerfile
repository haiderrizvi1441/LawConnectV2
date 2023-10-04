FROM openjdk:17

ARG JAR_FILE=target/*.jar 

COPY ${JAR_FILE} vendorservice.jar

ENTRYPOINT [ "java", "-jar", "/vendorservice.jar" ]

EXPOSE 8080