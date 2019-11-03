						DEV REQUIREMENTS (some of this are optional)
--------------------------------------------------------------------------

SPRING BOOT PREREQUISSITES
    - Java JDK installed (find the latest at oracle.com)
    - download and install maven (this is optional if you're going to use Spring Tool Suite as your IDE)
    - install Postman (optional) help on testing and try out the REST API endpoints
    - spring initializer (optional find this here: https://start.spring.io)

PERSISTENCE LAYER
    - install MySql

JAVASCRIPT TOOLS
    - Install Node ( nodejs. org)
    - install angular cli tool
    - download and install Tomcat
    - visual studio code (optional as a code editor)

						
                        DEPLOYMENT INSTRUCTIONS
--------------------------------------------------------------------------
IN SPRING TOOL SUITE:
-Import Maven project/ POM.xml files from grinds-server folder (File>Import>Existing Maven...FILEPATH)
-In Application.properties ensure correct SQL password are expressed in 'spring.datasource.password' and saved.
-Run GrindsApplication.java as a Java Application. If successful 'Tomcat started on port(s): 8080 (http) with context path '' should appear in the console.

IN VS CODE:
-Open grinds-ui folder into the workspace.
-In the built-in terminal, navigate to the grinds-ui file path and enter the command 'npm install'
-Once installed enter the command 'npm run start' to compile the program code.
-If compiled successfully the application should run in the browser on localhost:4200.
