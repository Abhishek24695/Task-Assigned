describe("protractor Demo test",function()
{
    
    var baseTestObj =  require("../BaseClass/BaseTestClass.js");
    var data = require("../Resources/Data.json");
    var loginPageobj =  require("../PageObject/LoginPage.js");
    var homePageobj =  require("../PageObject/HomePage.js");
    var result = require("../Output/Result.json");
    
    

    it('Assigned test',async function(){
            await baseTestObj.getURL();
            await loginPageobj.doLogin(data.Login.userName,data.Login.passWord);
            browser.sleep(2000);
            var textGSO = await homePageobj.txtGSO.getText();
            var textWFH = await homePageobj.labelWFH.getText();
            var textMsg = await homePageobj.linkMsgList.getText();
            var textGoal = await homePageobj.linkGoals.getText();
            var txtLogout = await homePageobj.linkLogout.getText();
            console.log(textGSO);

            var jsonObj = {"name":textGSO,"WFH":textWFH,"MsgLink":textMsg,"Goal":textGoal,"Logout":txtLogout};
            
            console.log(JSON.stringify(jsonObj));
            await homePageobj.doLogout();
            /*const fs = require('fs');
            return(fs.writeFile(

            "E://ProTest/TaskAssigned/Output/Result.json",JSON.stringify(jsonObj,null,2),"utf8",function(err, result){
                if(err) console.log('error', err);
   
            }
        ));*/
            await baseTestObj.saveJSON(result,jsonObj);

    })
    
})