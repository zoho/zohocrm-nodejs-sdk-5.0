import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-5.0";
class ConvertLead{
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
     * <h3> Convert Lead</h3>
     * This method is used to Convert a Lead record and print the response.
     * @param {BigInt} leadId The ID of the Lead to be converted.
     */
    static async convertLead(leadId) {
        //example
        //let leadId = 02034003n;
        let recordOperations = new ZOHOCRMSDK.Record.RecordOperations();
        let request = new ZOHOCRMSDK.Record.ConvertBodyWrapper();
        //Array to hold LeadConverter instances
        let data = [];
        let record = new ZOHOCRMSDK.Record.LeadConverter();
        record.setOverwrite(true);
        record.setNotifyLeadOwner(true);
        record.setNotifyNewEntityOwner(true);
        let accounts = new ZOHOCRMSDK.Record.Record();
        accounts.setId(347706112263002n);
        await record.setAccounts(accounts);

        let contacts = new ZOHOCRMSDK.Record.Record();
        contacts.setId(347706112263005n);
        await record.setContacts(contacts);

        let minifieduser = new ZOHOCRMSDK.Users.MinifiedUser();
        minifieduser.setId(33423423421323n);
        await record.setAssignTo(minifieduser);
        let deals = new ZOHOCRMSDK.Record.Record();
        /*
         * Call addFieldValue method that takes two arguments
         * Import the "@zohocrm/nodejs-sdk-2.1/core/com/zoho/crm/api/record/field" file
         * 1 . Call Field "." and choose the module from the displayed list and press "." and choose the field name from the displayed list.
         * 2 . Value
         */
        await deals.addFieldValue(ZOHOCRMSDK.Record.Field.Deals.DEAL_NAME, "deal_name");
        await deals.addFieldValue(ZOHOCRMSDK.Record.Field.Deals.DESCRIPTION, "deals description");
        await deals.addFieldValue(ZOHOCRMSDK.Record.Field.Deals.CLOSING_DATE, new Date(2021, 2, 13));
        await deals.addFieldValue(ZOHOCRMSDK.Record.Field.Deals.STAGE, new ZOHOCRMSDK.Choice("Closed Won"));
        await deals.addFieldValue(ZOHOCRMSDK.Record.Field.Deals.AMOUNT, 50.7);
        deals.addKeyValue("Pipeline", new ZOHOCRMSDK.Choice("Qualification"));
        /*
         * Call addKeyValue method that takes two arguments
         * 1 . A string that is the Field's API Name
         * 2 . Value
         */
        deals.addKeyValue("Custom_field", "Value");
        deals.addKeyValue("Custom_field_2", "value");
        await record.setDeals(deals);
        //Add the instance to array
        data.push(record);
        request.setData(data);
        //Call convertLead method that takes ConvertBodyWrapper instance and leadId as parameter
        let response = await recordOperations.convertLead(leadId, request);
        if (response != null) {
            console.log("Status Code: " + response.getStatusCode());
            let responseObject = response.getObject();
            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.Record.ActionWrapper) {
                    let convertActionResponses = responseObject.getData();
                    convertActionResponses.forEach(convertActionResponse => {
                        if (convertActionResponse instanceof ZOHOCRMSDK.Record.SuccessResponse) {
                            console.log("LeadConvert Accounts ID: " + convertActionResponse.getAccounts());
                            console.log("LeadConvert Contacts ID: " + convertActionResponse.getContacts());
                            console.log("LeadConvert Deals ID: " + convertActionResponse.getDeals());
                        }
                        else if (convertActionResponse instanceof ZOHOCRMSDK.Record.APIException) {
                            console.log("Status: " + convertActionResponse.getStatus().getValue());
                            console.log("Code: " + convertActionResponse.getCode().getValue());
                            console.log("Details");
                            let details = convertActionResponse.getDetails();
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                            console.log("Message: " + convertActionResponse.getMessage().getValue());
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
await ConvertLead.initialize();
let leadId = 4002300010088n
await ConvertLead.convertLead(leadId);