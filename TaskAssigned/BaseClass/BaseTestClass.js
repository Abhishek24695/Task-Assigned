function baseClass()
{

    this.getURL = async function()
    {
        browser.ignoreSynchronization = true;
        await browser.manage().window().maximize();
        await browser.get('https://ourgoalplan.com/Login.aspx');
        
    };

    this.saveJSON = async function(fileName='',json='""')
    {
        const fs = require('fs');
        return(fs.writeFile(fileName,JSON.stringify(json,null,2),"utf8",function(err, result){
                if(err) console.log('error', err);
   
            }
        ));
    }
    
}

module.exports = new baseClass();