describe("Registration Form", function(){
	var locatorObj = require("./locators.js");
	var data = require("./data.js");
	
	function getPageTitle(title){
		browser.getTitle().then(function(text){
			console.log(text);
			expect(text).toEqual(title);
		})
	}
	
	function getBankName(title){
		locatorObj.bankTitle.getText().then(function(text){
			console.log(text);
			expect(text).toEqual(title);
		})
	}
	
	it("Register", function(){
		locatorObj.goToSite;
		locatorObj.registerBtn.click();
		getPageTitle(locatorObj.registerPageTitle);
		locatorObj.firstName.sendKeys(data.UserData.firstName);
		locatorObj.lastName.sendKeys(data.UserData.lastName);
		locatorObj.userName.sendKeys(data.UserData.userName);
		locatorObj.password.sendKeys(data.UserData.password);
		locatorObj.regPageRegisterBtn.click();
		locatorObj.successMsgAlert.getText().then(function(text){
			expect(text).toEqual(locatorObj.successMsg);
		})	
	})
	
	it("Login", function(){
		locatorObj.loginPageUserName.sendKeys(data.UserData.userName);
		locatorObj.loginPagePassword.sendKeys(data.UserData.password);
		locatorObj.loginBtn.click();
		locatorObj.getUserName.getText().then(function(text){
			console.log(text);
			expect(text).toEqual("Hi "+data.UserData.firstName+"!");
		})
		locatorObj.logoutBtn.click();
	})
	
	it("XYZBanking Login", function(){
		browser.get(locatorObj.goToBankSiteUrl);
		getBankName(locatorObj.bankName);
		locatorObj.customerLoginBtn.click();
		locatorObj.firstUser.click();
		locatorObj.loginBtn.click();
		locatorObj.loggedInUserName.getText().then(function(text){
			expect(text).toEqual(data.UserData.firstUserName)
		})	
	})
	
	it("Deposit", function(){
		locatorObj.depositBtn.click();
		locatorObj.depositAmount.sendKeys(data.UserData.depositAmount);
		locatorObj.amtDepositBtn.click();
		locatorObj.depositSuccessMsg.getText().then(function(text){
			expect(text).toEqual(data.UserData.depositSuccessMsg);
		})
	})
	
	it("Withdrawl", function(){
		locatorObj.withdrawl.click();
		locatorObj.withdrawlAmount.sendKeys(data.UserData.withdrawlAmount);
		locatorObj.amtWithdrawlBtn.click();
		locatorObj.withdrawlSuccessMsg.getText().then(function(text){
			expect(text).toEqual(data.UserData.withdrawlSuccessMsg);
		})
	})
	
	it("Transaction Details", function(){
		locatorObj.transactionBtn.click();
		locatorObj.transactionTable.each(function(row){
			row.element(by.css("td:nth-child(2)")).getText().then(function(text){console.log("Transaction Amount: "+text);})
			row.element(by.css("td:nth-child(3)")).getText().then(function(text){console.log("Transaction type: "+text);})
		})
	})
		
})