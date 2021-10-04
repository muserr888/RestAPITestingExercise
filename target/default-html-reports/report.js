$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/postcode.feature");
formatter.feature({
  "name": "Query the postcode",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@important"
    }
  ]
});
formatter.scenario({
  "name": "The user sends a valid get request",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@important"
    },
    {
      "name": "@positive"
    }
  ]
});
formatter.step({
  "name": "the user sends a GET request to \"/postcodes/{POSTCODE}\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.featurespace.API_stepDefinitions.PostcodeStepDef.theUserSendsAGETRequestTo(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the endpoint returns status 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.featurespace.API_stepDefinitions.PostcodeStepDef.the_endpoint_returns_status(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the content type is \"application/json\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.featurespace.API_stepDefinitions.PostcodeStepDef.the_content_type_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "print the country and region for the given postcode",
  "keyword": "Then "
});
formatter.match({
  "location": "com.featurespace.API_stepDefinitions.PostcodeStepDef.printTheCountryAndRegionForTheGivenPostcode()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "The user sends a valid get request",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@important"
    },
    {
      "name": "@positive"
    }
  ]
});
formatter.step({
  "name": "the user sends a GET request to validate endpoint \"/postcodes/{POSTCODE}/validate\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.featurespace.API_stepDefinitions.PostcodeValidateStepDef.theUserSendsAGETRequestToValidateEndpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate  status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.featurespace.API_stepDefinitions.PostcodeValidateStepDef.validateStatusCodeIs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate the content type is \"application/json\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.featurespace.API_stepDefinitions.PostcodeValidateStepDef.validateTheContentTypeIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate status and result of the given postcode",
  "keyword": "Then "
});
formatter.match({
  "location": "com.featurespace.API_stepDefinitions.PostcodeValidateStepDef.validateStatusAndResultOfTheGivenPostcode()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "The user sends a valid get request",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@important"
    },
    {
      "name": "@positive"
    }
  ]
});
formatter.step({
  "name": "the user sends a GET request to find nearest postcodes \"/postcodes/{POSTCODE}/nearest\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.featurespace.API_stepDefinitions.PostcodeNearestStepDef.theUserSendsAGETRequestToFindNearestPostcodes(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the nearest endpoint returns status 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.featurespace.API_stepDefinitions.PostcodeNearestStepDef.theNearestEndpointReturnsStatus(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the nearest endpoint content type is \"application/json\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.featurespace.API_stepDefinitions.PostcodeNearestStepDef.theNearestEndpointContentTypeIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the payload data reflects the nearest postcodes, their countries and regions",
  "keyword": "Then "
});
formatter.match({
  "location": "com.featurespace.API_stepDefinitions.PostcodeNearestStepDef.thePayloadDataReflectsTheNearestPostcodesTheirCountriesAndRegions()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "(Negative) The user sends an invalid get request",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@negative"
    }
  ]
});
formatter.step({
  "name": "the user sends a GET request for \"\u003cpostcode\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the endpoint returns status 404",
  "keyword": "Then "
});
formatter.step({
  "name": "the payload data reflects that postcode was not found",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "postcode"
      ]
    },
    {
      "cells": [
        "BC0 3AF"
      ]
    },
    {
      "cells": [
        "EN3 8UY"
      ]
    },
    {
      "cells": [
        "BC3 0FA"
      ]
    }
  ]
});
formatter.scenario({
  "name": "(Negative) The user sends an invalid get request",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@important"
    },
    {
      "name": "@negative"
    }
  ]
});
formatter.step({
  "name": "the user sends a GET request for \"BC0 3AF\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.featurespace.API_stepDefinitions.PostcodeStepDef.the_user_sends_a_GET_request_for(java.lang.String)"
});
formatter.result({
  "error_message": "java.net.URISyntaxException: Illegal character in authority at index 7: http://api.postcodes.ioBC0 3AF\r\n\tat java.net.URI$Parser.fail(URI.java:2847)\r\n\tat java.net.URI$Parser.parseAuthority(URI.java:3185)\r\n\tat java.net.URI$Parser.parseHierarchical(URI.java:3096)\r\n\tat java.net.URI$Parser.parse(URI.java:3052)\r\n\tat java.net.URI.\u003cinit\u003e(URI.java:588)\r\n\tat io.restassured.internal.http.URIBuilder.convertToURI(URIBuilder.java:91)\r\n\tat io.restassured.internal.http.URIBuilder$convertToURI$0.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl.generateRequestUriForLogging(RequestSpecificationImpl.groovy:1103)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1267)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1034)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:818)\r\n\tat groovy.lang.GroovyObject.invokeMethod(GroovyObject.java:39)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:194)\r\n\tat io.restassured.internal.RequestSpecificationImpl.newFilterContext(RequestSpecificationImpl.groovy:1064)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1267)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1034)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:818)\r\n\tat groovy.lang.GroovyObject.invokeMethod(GroovyObject.java:39)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:203)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1653)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1267)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1034)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:818)\r\n\tat groovy.lang.GroovyObject.invokeMethod(GroovyObject.java:39)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:203)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1661)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1267)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1034)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:818)\r\n\tat groovy.lang.GroovyObject.invokeMethod(GroovyObject.java:39)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:203)\r\n\tat io.restassured.internal.RequestSpecificationImpl.get(RequestSpecificationImpl.groovy:171)\r\n\tat io.restassured.internal.RequestSpecificationImpl.get(RequestSpecificationImpl.groovy)\r\n\tat com.featurespace.API_stepDefinitions.PostcodeStepDef.the_user_sends_a_GET_request_for(PostcodeStepDef.java:80)\r\n\tat ✽.the user sends a GET request for \"BC0 3AF\"(file:///C:/Users/Muserref%20Akdag/IdeaProjects/Featurespace_Api_Framework/src/test/resources/features/postcode.feature:27)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "the endpoint returns status 404",
  "keyword": "Then "
});
formatter.match({
  "location": "com.featurespace.API_stepDefinitions.PostcodeStepDef.the_endpoint_returns_status(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the payload data reflects that postcode was not found",
  "keyword": "And "
});
formatter.match({
  "location": "com.featurespace.API_stepDefinitions.PostcodeStepDef.thePayloadDataReflectsThatPostcodeWasNotFound()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "(Negative) The user sends an invalid get request",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@important"
    },
    {
      "name": "@negative"
    }
  ]
});
formatter.step({
  "name": "the user sends a GET request for \"EN3 8UY\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.featurespace.API_stepDefinitions.PostcodeStepDef.the_user_sends_a_GET_request_for(java.lang.String)"
});
formatter.result({
  "error_message": "java.net.URISyntaxException: Illegal character in authority at index 7: http://api.postcodes.ioEN3 8UY\r\n\tat java.net.URI$Parser.fail(URI.java:2847)\r\n\tat java.net.URI$Parser.parseAuthority(URI.java:3185)\r\n\tat java.net.URI$Parser.parseHierarchical(URI.java:3096)\r\n\tat java.net.URI$Parser.parse(URI.java:3052)\r\n\tat java.net.URI.\u003cinit\u003e(URI.java:588)\r\n\tat io.restassured.internal.http.URIBuilder.convertToURI(URIBuilder.java:91)\r\n\tat io.restassured.internal.http.URIBuilder$convertToURI$0.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl.generateRequestUriForLogging(RequestSpecificationImpl.groovy:1103)\r\n\tat sun.reflect.GeneratedMethodAccessor35.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1267)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1034)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:818)\r\n\tat groovy.lang.GroovyObject.invokeMethod(GroovyObject.java:39)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:194)\r\n\tat io.restassured.internal.RequestSpecificationImpl.newFilterContext(RequestSpecificationImpl.groovy:1064)\r\n\tat sun.reflect.GeneratedMethodAccessor34.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1267)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1034)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:818)\r\n\tat groovy.lang.GroovyObject.invokeMethod(GroovyObject.java:39)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:203)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1653)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1267)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1034)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:818)\r\n\tat groovy.lang.GroovyObject.invokeMethod(GroovyObject.java:39)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:203)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1661)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1267)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1034)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:818)\r\n\tat groovy.lang.GroovyObject.invokeMethod(GroovyObject.java:39)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:203)\r\n\tat io.restassured.internal.RequestSpecificationImpl.get(RequestSpecificationImpl.groovy:171)\r\n\tat io.restassured.internal.RequestSpecificationImpl.get(RequestSpecificationImpl.groovy)\r\n\tat com.featurespace.API_stepDefinitions.PostcodeStepDef.the_user_sends_a_GET_request_for(PostcodeStepDef.java:80)\r\n\tat ✽.the user sends a GET request for \"EN3 8UY\"(file:///C:/Users/Muserref%20Akdag/IdeaProjects/Featurespace_Api_Framework/src/test/resources/features/postcode.feature:27)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "the endpoint returns status 404",
  "keyword": "Then "
});
formatter.match({
  "location": "com.featurespace.API_stepDefinitions.PostcodeStepDef.the_endpoint_returns_status(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the payload data reflects that postcode was not found",
  "keyword": "And "
});
formatter.match({
  "location": "com.featurespace.API_stepDefinitions.PostcodeStepDef.thePayloadDataReflectsThatPostcodeWasNotFound()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "(Negative) The user sends an invalid get request",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@important"
    },
    {
      "name": "@negative"
    }
  ]
});
formatter.step({
  "name": "the user sends a GET request for \"BC3 0FA\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.featurespace.API_stepDefinitions.PostcodeStepDef.the_user_sends_a_GET_request_for(java.lang.String)"
});
formatter.result({
  "error_message": "java.net.URISyntaxException: Illegal character in authority at index 7: http://api.postcodes.ioBC3 0FA\r\n\tat java.net.URI$Parser.fail(URI.java:2847)\r\n\tat java.net.URI$Parser.parseAuthority(URI.java:3185)\r\n\tat java.net.URI$Parser.parseHierarchical(URI.java:3096)\r\n\tat java.net.URI$Parser.parse(URI.java:3052)\r\n\tat java.net.URI.\u003cinit\u003e(URI.java:588)\r\n\tat io.restassured.internal.http.URIBuilder.convertToURI(URIBuilder.java:91)\r\n\tat io.restassured.internal.http.URIBuilder$convertToURI$0.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl.generateRequestUriForLogging(RequestSpecificationImpl.groovy:1103)\r\n\tat sun.reflect.GeneratedMethodAccessor35.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1267)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1034)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:818)\r\n\tat groovy.lang.GroovyObject.invokeMethod(GroovyObject.java:39)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:194)\r\n\tat io.restassured.internal.RequestSpecificationImpl.newFilterContext(RequestSpecificationImpl.groovy:1064)\r\n\tat sun.reflect.GeneratedMethodAccessor34.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1267)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1034)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:818)\r\n\tat groovy.lang.GroovyObject.invokeMethod(GroovyObject.java:39)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:203)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1653)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1267)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1034)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:818)\r\n\tat groovy.lang.GroovyObject.invokeMethod(GroovyObject.java:39)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:203)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1661)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1267)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1034)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:818)\r\n\tat groovy.lang.GroovyObject.invokeMethod(GroovyObject.java:39)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:203)\r\n\tat io.restassured.internal.RequestSpecificationImpl.get(RequestSpecificationImpl.groovy:171)\r\n\tat io.restassured.internal.RequestSpecificationImpl.get(RequestSpecificationImpl.groovy)\r\n\tat com.featurespace.API_stepDefinitions.PostcodeStepDef.the_user_sends_a_GET_request_for(PostcodeStepDef.java:80)\r\n\tat ✽.the user sends a GET request for \"BC3 0FA\"(file:///C:/Users/Muserref%20Akdag/IdeaProjects/Featurespace_Api_Framework/src/test/resources/features/postcode.feature:27)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "the endpoint returns status 404",
  "keyword": "Then "
});
formatter.match({
  "location": "com.featurespace.API_stepDefinitions.PostcodeStepDef.the_endpoint_returns_status(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the payload data reflects that postcode was not found",
  "keyword": "And "
});
formatter.match({
  "location": "com.featurespace.API_stepDefinitions.PostcodeStepDef.thePayloadDataReflectsThatPostcodeWasNotFound()"
});
formatter.result({
  "status": "skipped"
});
});