@important
Feature: Query the postcode

 @positive
  Scenario: The user sends a valid get request
    When the user sends a GET request to "/postcodes/{POSTCODE}"
    Then the endpoint returns status 200
    Then the content type is "application/json"
    Then print the country and region for the given postcode

  @positive
  Scenario: The user sends a valid get request
    When the user sends a GET request to validate endpoint "/postcodes/{POSTCODE}/validate"
    Then validate  status code is 200
    Then validate the content type is "application/json"
    Then validate status and result of the given postcode

  @positive
  Scenario: The user sends a valid get request
    When the user sends a GET request to find nearest postcodes "/postcodes/{POSTCODE}/nearest"
    Then the nearest endpoint returns status 200
    Then the nearest endpoint content type is "application/json"
    Then the payload data reflects the nearest postcodes, their countries and regions

  @negative
  Scenario Outline: (Negative) The user sends an invalid get request
    When the user sends a GET request for "<postcode>"
    Then the endpoint returns status 404
    And the payload data reflects that postcode was not found

    Examples:
      | postcode |
      | BC0 3AF  |
      | EN3 8UY  |
      | BC3 0FA  |

