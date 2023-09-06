import * as ZOHOCRMSDK from "@zohocrm/nodejs-sdk-5.0";

class UpdateShiftHours
{
    static async initialize()
    {
        let environment = ZOHOCRMSDK.USDataCenter.PRODUCTION();
        let token = (new ZOHOCRMSDK.OAuthBuilder())
            .clientId("1000.xxxx")
            .clientSecret("xxxx")
            .refreshToken("1000.xxxx.xxxx")
            .build();
        await (await new ZOHOCRMSDK.InitializeBuilder())
            .environment(environment)
            .token(token)
            .initialize();
    }
    static async updateShiftHours()
    {
        let shiftHoursOerations = new ZOHOCRMSDK.HoursShift.ShiftHoursOperations("4342342342343443");
        let request = new ZOHOCRMSDK.HoursShift.BodyWrapper();
        let shiftHours = [];
        let shiftHour = new ZOHOCRMSDK.HoursShift.ShiftHours();
        shiftHour.setId(4042342334323n);
        await shiftHour.setTimezone(moment.tz.zone('Asia/Kolkata'));
        shiftHour.setName("Shift hours updated");
        shiftHour.setSameAsEveryday(true);
        let dailyTimings = [];
        dailyTimings.push("10:00");
        dailyTimings.push("19:00");
        shiftHour.setDailyTiming(dailyTimings);
        // when same_as_everyday is false
        let customTimings = [];
        let customTiming = new ZOHOCRMSDK.HoursShift.ShiftCustomTiming();
        let shiftTiming = [];
        shiftTiming.push("10:00");
        shiftTiming.push("19:00");
        customTiming.setShiftTiming(shiftTiming);
        customTiming.setDays("Monday");
        customTimings.push(customTiming);
        let customTiming1 = new ZOHOCRMSDK.HoursShift.ShiftCustomTiming();
        let shiftTiming1 = [];
        shiftTiming1.push("10:00");
        shiftTiming1.push("19:00");
        customTiming1.setShiftTiming(shiftTiming1);
        customTiming1.setDays("Monday");
        customTimings.push(customTiming1);
        shiftHour.setCustomTiming(customTimings);
        let users = [];
        let user = new ZOHOCRMSDK.HoursShift.Users();
        user.setId(40423378721312n);
        user.setEffectiveFrom(new Date(2020, 12, 12));
        users.push(user);
        shiftHour.setUsers(users);
        let holidays =[];
        let holiday = new ZOHOCRMSDK.HoursShift.Holidays();
        holiday.setDate(new Date(2020, 12, 12));
        holiday.setId(4232240323214n);
        holiday.setName("Holiday Name");
        holiday.setYear(2020);
        holidays.push(holiday);
        shiftHour.setHolidays(holidays);
        //
        let breakHours = [];
        let breakHour = new ZOHOCRMSDK.HoursShift.BreakHours();
        let breakDays = [];
        breakDays.push(new ZOHOCRMSDK.Choice("Monday"));
        breakHour.setBreakDays(breakDays);
        // if same_as_everyDay is true
        breakHour.setSameAsEveryday(true);
        let dailyTimingForBreakHours = [];
        dailyTimingForBreakHours.push("11:00");
        dailyTimingForBreakHours.push("11:00");
        breakHour.setDailyTiming(dailyTimingForBreakHours);
        breakHours.push(breakHour);
        shiftHour.setBreakHours(breakHours);
        // if same_as_EveryDay is false
        breakHour.setSameAsEveryday(false);
        let customTimingForBreakHours = [];
        let customTimingForBreakHour = new ZOHOCRMSDK.HoursShift.BreakCustomTiming();
        let breaktimings = [];
        breaktimings.push("12:00");
        breaktimings.push("12:15");
        customTimingForBreakHour.setBreakTiming(breaktimings);
        customTimingForBreakHour.setDays("Monday");
        customTimingForBreakHours.push(customTimingForBreakHour);
        breakHour.setCustomTiming(customTimingForBreakHours);
        breakHours.push(breakHour);
        shiftHour.setBreakHours(breakHours);
        //
        shiftHours.push(shiftHour);
        request.setShiftHours(shiftHours);
        let response = shiftHoursOerations.updateShiftHours(request);
        if (response != null)
        {
            console.log("Status Code : " + response.getStatusCode() + "\n");
            let actionHandler = response.getObject();
            if (actionHandler instanceof ZOHOCRMSDK.HoursShift.ActionWrapper)
            {
                let actionWrapper = actionHandler;
                let actionResponses = actionWrapper.getShiftHours();
                if (actionResponses != null)
                {
                    actionResponses.forEach(actionResponse => {
                        if (actionResponse instanceof ZOHOCRMSDK.HoursShift.SuccessResponse)
                        {
                            let successResponse = actionResponse;
                            console.log("Status: " + successResponse.getStatus().getValue() + "\n");
                            console.log("Code: " + successResponse.getCode().getValue() + "\n");
                            console.log("Details  \n");
                            let details = successResponse.getDetails();
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key) + "\n");
                                });
                            }
                            console.log("Message: " + successResponse.getMessage() instanceof ZOHOCRMSDK.Choice ? successResponse.getMessage().getValue() : successResponse.getMessage());
                        }
                        else if (actionResponse instanceof ZOHOCRMSDK.HoursShift.APIException)
                        {
                            let exception = actionResponse;
                            console.log("Status: " + exception.getStatus().getValue() +"\n");
                            console.log("Code: " + exception.getCode().getValue() + "\n");
                            console.log("Details \n");
                            let details = exception.getDetails();
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key) + "\n");
                                });
                            }
                            console.log("Message: " + exception.getMessage() instanceof ZOHOCRMSDK.Choice ? exception.getMessage().getValue() : exception.getMessage());
                        }
                    });
                }
            }
            else if (actionHandler instanceof ZOHOCRMSDK.HoursShift.APIException)
            {
                let exception = actionHandler;
                console.log("Status: " + exception.getStatus().getValue() + "\n");
                console.log("Code: " + exception.getCode().getValue() + "\n");
                console.log("Details \n");
                let details = exception.getDetails();
                if (details != null) {
                    Array.from(details.keys()).forEach(key => {
                        console.log(key + ": " + details.get(key) + "\n");
                    });
                }
                console.log("Message: " + exception.getMessage() instanceof ZOHOCRMSDK.Choice ? exception.getMessage().getValue() : exception.getMessage());
            }
        }
    }
}
await UpdateShiftHours.initialize();
await UpdateShiftHours.updateShiftHours();