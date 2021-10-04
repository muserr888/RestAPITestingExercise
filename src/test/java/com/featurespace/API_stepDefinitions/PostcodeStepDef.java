package com.featurespace.API_stepDefinitions;

import com.featurespace.utilities.ConfigurationReader;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.http.ContentType;
import io.restassured.response.Response;

import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.equalTo;
import static org.junit.Assert.assertEquals;

public class PostcodeStepDef {

    Response response;
    String baseURL = ConfigurationReader.get("baseUrl");


    /**
     * Given accept type is JSON
     * when the user sends get request to postcode endpoint
     * then response status code must be 200
     * and body is JSON format
     * @param pathUrl
     */

    @When("the user sends a GET request to {string}")
    public void theUserSendsAGETRequestTo(String pathUrl) {

        response = given().accept(ContentType.JSON)
                .and().pathParam("POSTCODE", "CB3 0FA").
                when().get(baseURL + pathUrl)
                .then().statusCode(200)
                .and().assertThat().body("result.postcode", equalTo("CB3 0FA"),
                        "result.country", equalTo("England"),
                        "result.region", equalTo("East of England")).extract().response();

    }

    @Then("the endpoint returns status {int}")
    public void the_endpoint_returns_status(int expectedStatusCode) {

        response.then().assertThat().statusCode(expectedStatusCode);
    }

    @Then("the content type is {string}")
    public void the_content_type_is(String string) {

        response.then().assertThat().contentType("application/json");
    }


    /**
     * given accept type is Json
     * And path param postcode is CB3 0FA
     * When user sends a get request to postcodes/{POSTCODE}
     * Then status code is 200
     * And content type is Json
     * And json data has following
     * "postcode": "CB3 0FA",
     * "country": "England",
     * "region": "East of England",
     * @param
     */
    @Then("print the country and region for the given postcode")
    public void printTheCountryAndRegionForTheGivenPostcode() {

        String country = response.then().extract().path("result.country");
        String region = response.then().extract().path("result.region");
        System.out.println("Country: " + country + "\t" + "Region: " + region);
    }


    @When("the user sends a GET request for {string}")
    public void the_user_sends_a_GET_request_for(String pathUrl) {

        given().accept(ContentType.JSON)
                .and().pathParam("postcode", "")
                .when().get(baseURL + pathUrl);
        assertEquals(response.getStatusCode(), 404);

    }

    @And("the payload data reflects that postcode was not found")
    public void thePayloadDataReflectsThatPostcodeWasNotFound() {

        response.then().assertThat().body("error", equalTo("Postcode not found"));
    }


}
