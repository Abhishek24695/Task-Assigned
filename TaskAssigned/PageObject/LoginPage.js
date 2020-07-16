function Login()
{
    this.txtBoxUserName = element(by.xpath('//input[@id="txtName"]'));
    this.txtBoxPwd = element(by.xpath('//input[@id="txtPassword"]'));
    this.btnLogin = element(by.xpath('//input[@id="btnLogin"]'));
   
    this.doLogin = function(username,password)
    {
        this.txtBoxUserName.sendKeys(username);
        this.txtBoxPwd.sendKeys(password);
        this.btnLogin.click();
    };

   
};

module.exports = new Login();
