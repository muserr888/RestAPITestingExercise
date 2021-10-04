**API TESTING EXERCISE**

Codes and Test prepared by:

Muserref AKDAG

Software QA Engineer

muserefakdag@gmail.com

https://www.linkedin.com/in/muserrefakdag177b20217

----------------------------------------------------------------------------------------------

**Project Title:** Featurespace API Testing

**Test Framework:** BDD Framework with RestAssured

----------------------------------------------------------------------------------------------

**System Requirements:**

- Java 8+ SDK

-Install the plug-ins "Cucumber for Java" and "Gherkin" for IDE

----------------------------------------------------------------------------------------------

**URL:** htpp://api.postcodes.io

**Endpoints:**

GET /postcodes/{POSTCODE}

GET /postcodes/{POSTCODE}/validate

GET /postcodes/{POSTCODE}/nearest

------------------------------------------------------------------------------------------------

**QA:**

Write a Java application that allows a user to query and show details for a given UK postcode

------------------------------------------------------------------------------------------

**Test RUN**

Notes: To run all Scenarios, use @important tag in the ApiRunner class/Cucumber Options

**1. Way:**

-   Clone the projects
-   Import maven dependencies from POM
-   Go **src -> test-> com-> featurespace-> runners-> ApiRunner** and RUN
-   To generate "HTML Maven Cucumber Report" ;

Open Maven right side panel Double Click Project's Lifecycle Click "verify"

**2. Way:**

-   Run from command line invoke mvn clean verify

**Test Report Locations:**

Cucumber HTML Plugin Reports **target -> cucumber-html-reports > overview-features.html** (Right Click and Open in any Browser )

**Cucumber Test Feature Scenarios:**

#### 1) Validate postcode parameter

a- In this Scenario, it tests the endpoint "/postcodes/{POSTCODE} with following url ([http://postcodes.io](http://postcodes.io))

b- To run separately this scenario, use the `@``positive` tag in the ApiRunner class/Cucumber Options

#### 2) Print the country and region for that postcode

a- In this Scenario, it tests the endpoint "/postcodes/{POSTCODE}/validate" with above-mentioned url

b- To run separately this scenario, use the `@``positive` tag in the ApiRunner class/Cucumber Options

#### 3) Print a list of the nearest postcodes, their countries and regions

a- In this Scenario, it tests the endpoint "/postcodes/{POSTCODE}/nearest" with above-mentioned url

b- To run separately this scenario, use the `@``positive` tag in the ApiRunner class/Cucumber Options

#### 4) Invalid postcode

To run separately this scenario, use the `@``negative` tag in the ApiRunner class/Cucumber Options