import * as ZOHOCRMSDK  from "@zohocrm/nodejs-sdk-5.0";
class UpdateRecordsOwner
{
    static async initialize(){
        let environment = ZOHOCRMSDK.USDataCenter.PRODUCTION();
        let token =(new ZOHOCRMSDK.OAuthBuilder())
            .clientId("1000.xxxx")
            .clientSecret("xxxx")
            .refreshToken("1000.xxxx.xxxx")
            .build();
        await (await new ZOHOCRMSDK.InitializeBuilder())
            .environment(environment)
            .token(token)
            .initialize();
    }
    static async updateRecordsOwner(moduleAPIName) {
        let changeOwnerOperations = new ZOHOCRMSDK.ChangeOwner.ChangeOwnerOperations(moduleAPIName);

        let massWrapper = new ZOHOCRMSDK.ChangeOwner.MassWrapper();

        let Ids = [];

        Ids.push("44024001177154");

        Ids.push("440248004002");

        massWrapper.setIds(Ids);

        let owner = new ZOHOCRMSDK.ChangeOwner.Owner();

        owner.setId(440248054001n);

        await massWrapper.setOwner(owner);

        massWrapper.setNotify(false);

        let relatedModules = [];

        let relatedModule = new ZOHOCRMSDK.ChangeOwner.RelatedModules();

        relatedModule.setId(347706114686005n);

        relatedModule.setAPIName("Tasks");

        relatedModules.add(relatedModule);

        relatedModule = new ZOHOCRMSDK.ChangeOwner.RelatedModules();

        relatedModule.setId(347706114686005n);

        relatedModule.setAPIName("Tasks");

        relatedModules.add(relatedModule);

        massWrapper.setRelatedModules(relatedModules);

        let response = await changeOwnerOperations.massUpdate(massWrapper);

        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());

            let responseObject = response.getObject();

            if (responseObject != null) {

                if (responseObject instanceof ZOHOCRMSDK.ChangeOwner.ActionWrapper) {
                    let changeowners = responseObject.getData();

                    changeowners.forEach(changeowner => {

                        if (changeowner instanceof ZOHOCRMSDK.ChangeOwner.SuccessResponse) {
                            console.log("Status:" + changeowner.getStatus().getValue());

                            console.log("Code : " + changeowner.getCode().getValue());

                            console.log("Details: ");

                            let details = changeowner.getDetails();

                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                            console.log("Message: " + changeowner.getMessage());
                        } else if (changeowner instanceof ZOHOCRMSDK.ChangeOwner.APIException) {
                            console.log("Status: " + changeowner.getStatus().getValue());

                            // Get the Code
                            console.log("Code: " + changeowner.getCode().getValue());

                            let details = changeowner.getDetails();

                            console.log("Details: ");

                            // Get the details map
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }

                            // Get the Message
                            console.log("Message: " + changeowner.getMessage());
                        }
                    });
                } else if (responseObject instanceof ZOHOCRMSDK.ChangeOwner.APIException) {
                    console.log("Status: " + responseObject.getStatus().getValue());

                    // Get the Code
                    console.log("Code: " + responseObject.getCode().getValue());

                    let details = responseObject.getDetails();

                    console.log("Details: ");

                    // Get the details map
                    if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }

                    // Get the Message
                    console.log("Message: " + responseObject.getMessage());
                }
            }
        }
    }
}
let moduleAPIName = "Leads";
await UpdateRecordsOwner.initialize();
await UpdateRecordsOwner.updateRecordsOwner(moduleAPIName);