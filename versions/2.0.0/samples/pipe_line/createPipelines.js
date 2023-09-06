import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-5.0";
class CreatePipelines{
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
    /**
     * <h3> create Pipelines</h3>
     * This method is used to create Pipelines
     * @param {BigInt} layoutId The id of the Layout
     */
    static async createPipelines(layoutId) {
        let pipelineOperations = new ZOHOCRMSDK.Pipeline.PipelineOperations(layoutId);
        let pipeline = new ZOHOCRMSDK.Pipeline.Pipeline();
        pipeline.setDisplayValue("Adfasfs23d3ew122");
        let pickList = new ZOHOCRMSDK.Pipeline.Maps();
        pickList.setSequenceNumber(1);
        pickList.setId(34770616805n);
        pickList.setDisplayValue("Closed Won");
        pipeline.setMaps([pickList]);
        let body = new BodyWrapper();
        body.setPipeline([pipeline]);
        //Call createPipelines method that takes BodyWrapper instance as parameter
        let response = await pipelineOperations.createPipeline(body);
        if (response != null) {
            console.log("Status code " + response.getStatusCode());
            let actionHandler = response.getObject();
            if (actionHandler instanceof ZOHOCRMSDK.Pipeline.ActionWrapper) {
                let actionWrapper = actionHandler;
                let actionResponses = actionWrapper.getPipeline();
                actionResponses.forEach(actionResponse => {
                    if (actionResponse instanceof ZOHOCRMSDK.Pipeline.SuccessResponse) {
                        console.log("Status: " + actionResponse.getStatus().getValue());
                        console.log("Code: " + actionResponse.getCode().getValue());
                        console.log("Details: ");
                        let details = actionResponse.getDetails();
                        if (details != null) {
                            Array.from(details.keys()).forEach(key => {
                                console.log(key + ": " + details.get(key));
                            });
                        }
                        console.log("Message: " + actionResponse.getMessage());
                    }
                    else if (actionResponse instanceof ZOHOCRMSDK.Pipeline.APIException) {
                        console.log("Status: " + actionResponse.getStatus().getValue());
                        console.log("Code: " + actionResponse.getCode().getValue());
                        console.log("Details");
                        let details = actionResponse.getDetails();
                        if (details != null) {
                            Array.from(details.keys()).forEach(key => {
                                console.log(key + ": " + details.get(key));
                            });
                        }
                        console.log("Message: " + actionResponse.getMessage());
                    }
                });
            }
            else if (actionHandler instanceof ZOHOCRMSDK.Pipeline.APIException) {
                console.log("Status: " + actionHandler.getStatus().getValue());
                console.log("Code: " + actionHandler.getCode().getValue());
                console.log("Details");
                let details = actionHandler.getDetails();
                if (details != null) {
                    Array.from(details.keys()).forEach(key => {
                        console.log(key + ": " + details.get(key));
                    });
                }
                console.log("Message: " + actionHandler.getMessage());
            }
        }
    }
}
await CreatePipelines.initialize();
let layoutId = 502111n;
await CreatePipelines.createPipelines(layoutId);