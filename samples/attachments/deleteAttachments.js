import  * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-5.0";
class DeleteAttachments{
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
     * <h3> Delete Attachments</h3>
     * This method is used to Delete attachments of a single record with ID and print the response.
     * @param {String} moduleAPIName The API Name of the record's module
     * @param {BigInt} recordId  The ID of the record to delete attachments
     * @param {bigint[]} attachmentIds The array of attachment IDs to be deleted
     */
    static async deleteAttachments(moduleAPIName, recordId, attachmentIds) {
        //example
        // let moduleAPIName = "module_api_name";
        // let recordId = 32267003n;
        // let attachmentIds = [32267024n, 32267034n, 32267198n]
        let attachmentsOperations = new ZOHOCRMSDK.Attachments.AttachmentsOperations();
        let paramInstance = new ZOHOCRMSDK.ParameterMap();
        for (let attachmentId of attachmentIds) {
            //Add the ids to parameter map instance
            await paramInstance.add(ZOHOCRMSDK.Attachments.DeleteAttachmentsParam.IDS, attachmentIds);
        }
        //Call deleteAttachments method that takes paramInstance as parameter
        let response = await attachmentsOperations.deleteAttachments(recordId, moduleAPIName, paramInstance);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.Attachments.ActionWrapper) {
                    let actionResponses = responseObject.getData();
                    actionResponses.forEach(actionResponse => {
                        if (actionResponse instanceof ZOHOCRMSDK.Attachments.SuccessResponse) {
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
                        else if (actionResponse instanceof ZOHOCRMSDK.Attachments.APIException) {
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
                else if (responseObject instanceof ZOHOCRMSDK.Attachments.APIException) {
                    console.log("Status: " + responseObject.getStatus().getValue());
                    console.log("Code: " + responseObject.getCode().getValue());
                    console.log("Details");
                    let details = responseObject.getDetails();
                    if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }
                    console.log("Message: " + responseObject.getMessage());
                }
            }
        }
    }
}
await DeleteAttachments.initialize();
let moduleAPIName = "leads";
let recordId = 44024800774074n;
let attachmentIds = [20032n,400032n];
await DeleteAttachments.deleteAttachments(moduleAPIName,recordId,attachmentIds);