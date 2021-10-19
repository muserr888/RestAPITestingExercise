package com.apitesting.API_stepDefinitions;

import com.apitesting.POJO.NearestPostcodeResponse;
import com.apitesting.POJO.NearestResponse;
import com.apitesting.utilities.ConfigurationReader;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.http.ContentType;
import io.restassured.response.Response;

import static io.restassured.RestAssured.given;

public class PostcodeNearestStepDef {

    Response response;
    String baseURL = ConfigurationReader.get("baseUrl");
    NearestPostcodeResponse[] nearestPostcodeResponses;
    NearestResponse nearestResponse;


    @When("the user sends a GET request to find nearest postcodes {string}")
    public void theUserSendsAGETRequestToFindNearestPostcodes(String pathUrl) {

         nearestResponse  = given().accept(ContentType.JSON)
                .and().pathParam("POSTCODE", "CB3 0FA").
                when().get(baseURL+pathUrl)
                .then().extract().as(NearestResponse.class);

        response = given().accept(ContentType.JSON)
                .and().pathParam("POSTCODE", "CB3 0FA").
                when().get(baseURL+pathUrl)
                .then().extract().response();

    }

    @Then("the nearest endpoint returns status {int}")
    public void theNearestEndpointReturnsStatus(int expectedStatusCode) {

        response.then().assertThat().statusCode(expectedStatusCode);
    }

    @Then("the nearest endpoint content type is {string}")
    public void theNearestEndpointContentTypeIs(String expectedContentType) {

        response.then().assertThat().contentType(expectedContentType);
    }

    @Then("the payload data reflects the nearest postcodes, their countries and regions")
    public void thePayloadDataReflectsTheNearestPostcodesTheirCountriesAndRegions() {

        NearestPostcodeResponse[] postcodeResponses = nearestResponse.getResult();

        for (int i = 0; i < postcodeResponses.length; i++) {
            System.out.println(postcodeResponses[i]);
        }
     }
}
