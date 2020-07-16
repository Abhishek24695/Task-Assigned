function Home()
{
    this.txtGSO = element(by.xpath('//a[@id="hyplinkMember"]'));
    this.labelWFH = element(by.xpath('//input[@id="chkWFH"]//following::label'));
    this.linkMsgList = element(by.xpath('//a[@title="Message List"]'));
    this.linkGoals = element(by.xpath('//a[@title="GoalSheet"]'));
    this.linkLogout = element(by.xpath('//a[@title="LogOut"]'));
    this.radioBtn = element(by.xpath('//input[@id="chkWFH"]'));
   
    this.doLogout = function()
    {
        browser.actions().mouseMove(this.linkLogout).click().perform();
        console.log("Succesfully Logout");

    };

   
};

module.exports = new Home();
