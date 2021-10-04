package com.featurespace.POJO;


public class NearestResponse {
    int status;
    NearestPostcodeResponse[] result;

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public NearestPostcodeResponse[] getResult() {
        return result;
    }

    public void setResult(NearestPostcodeResponse[] result) {
        this.result = result;
    }
}
