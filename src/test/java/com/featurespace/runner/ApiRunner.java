package com.featurespace.runner;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

    @RunWith(Cucumber.class)
    @CucumberOptions(
            plugin = {"html:target/default-html-reports",
                    "json:target/cucumber.json",
                    "rerun:target/rerun.txt"
                    },
            features = "src/test/resources/features",
            glue = "com/featurespace/API_stepDefinitions",
            tags =  "@important"
    )
    public class ApiRunner {

    }

