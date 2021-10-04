package com.featurespace.API_stepDefinitions;

import com.featurespace.POJO.ValidateResponse;
import com.featurespace.utilities.ConfigurationReader;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import org.junit.Assert;

import static io.restassured.RestAssured.given;

public class PostcodeValidateStepDef {

    Response response;
    ValidateResponse validateResponse;
    String baseURL = ConfigurationReader.get("baseUrl");

    @When("the user sends a GET request to validate endpoint {string}")
    public void theUserSendsAGETRequestToValidateEndpoint(String pathUrl) {
        validateResponse = given().accept(ContentType.JSON)
                .and().pathParam("POSTCODE", "CB3 0FA").
                when().get(baseURL+pathUrl)
                .then().extract().as(ValidateResponse.class);

        response = given().accept(ContentType.JSON)
                .and().pathParam("POSTCODE", "CB3 0FA").
                when().get(baseURL+pathUrl)
                .then().extract().response();
    }

    @Then("validate  status code is {int}")
    public void validateStatusCodeIs(int expectedStatusCode) {

        response.then().assertThat().statusCode(expectedStatusCode);
    }

    @Then("validate the content type is {string}")
    public void validateTheContentTypeIs(String expectedContentType) {

        response.then().assertThat().contentType(expectedContentType);
    }

    @Then("validate status and result of the given postcode")
    public void validateStatusAndResultOfTheGivenPostcode() {

        int expectedStatus = 200;
        int actualStatus = validateResponse.getStatus();
        boolean actualResult = validateResponse.getResult();

        Assert.assertEquals(expectedStatus,actualStatus);
        Assert.assertTrue(actualResult);
    }


}
