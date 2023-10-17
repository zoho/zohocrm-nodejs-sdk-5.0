import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-5.0";
class AssignTerritoriesToMultipleRecords{
    static async initialize(){
        let environment = ZOHOCRMSDK.USDataCenter.PRODUCTION();
        let token =(new ZOHOCRMSDK.OAuthBuilder())
            .clientId("1000.xxxx")
            .clientSecret("xxxxxx")
            .refreshToken("1000.xxxxx.xxxxx")
            .build();
        await (await new ZOHOCRMSDK.InitializeBuilder())
            .environment(environment)
            .token(token)
            .initialize();
    }
    static async assignTerritoriesToMultipleRecords(moduleAPIName) {
        //API Name of the module to assignTerritoriesToMultipleRecords
        //let moduleAPIName = "Leads";
        let recordOperations = new ZOHOCRMSDK.Record.RecordOperations();
        let request = new ZOHOCRMSDK.Record.BodyWrapper();
        //List of Record instances
        let records = [];
        let record1 = new ZOHOCRMSDK.Record.Record();
        record1.setId(44024804074n);
        /*
         * Call addKeyValue method that takes two arguments
         * 1 . A string that is the Field's API Name
         * 2 . Value
         */
        let territory = new ZOHOCRMSDK.Record.Territory();
        territory.setId(440248390040n);
        record1.addKeyValue("Territories", [territory]);
        //Add Record instance to the list
        records.push(record1);
        request.setData(records);
        //Call assignTerritoriesToMultipleRecords method that takes ModuleAPIName and  BodyWrapper instance as parameter.
        let response = await recordOperations.assignTerritoriesToMultipleRecords(moduleAPIName, request);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            let responseObject = response.getObject();
            if (responseObject != null) {
                if(responseObject instanceof ZOHOCRMSDK.Record.ActionWrapper) {
                    let actionResponses = responseObject.getData();
                    actionResponses.forEach(actionResponse => {
                        if (actionResponse instanceof ZOHOCRMSDK.Record.SuccessResponse) {
                            console.log("Status: " + actionResponse.getStatus().getValue());
                            console.log("Code: " + actionResponse.getCode().getValue());
                            console.log("Details");
                            let details = actionResponse.getDetails();
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                        else if (actionResponse instanceof ZOHOCRMSDK.Record.APIException) {
                            console.log("Status: " + actionResponse.getStatus().getValue());
                            console.log("Code: " + actionResponse.getCode().getValue());
                            console.log("Details");
                            let details = actionResponse.getDetails();
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                    });
                }
                else if (responseObject instanceof ZOHOCRMSDK.Record.APIException) {
                    console.log("Status: " + responseObject.getStatus().getValue());
                    console.log("Code: " + responseObject.getCode().getValue());
                    console.log("Details");
                    let details = responseObject.getDetails();
                    if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }
                    console.log("Message: " + responseObject.getMessage().getValue());
                }
            }
        }
    }
}
await AssignTerritoriesToMultipleRecords.initialize();
let moduleAPIName = "leads";
await AssignTerritoriesToMultipleRecords.assignTerritoriesToMultipleRecords(moduleAPIName);
