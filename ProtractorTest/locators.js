function Locators(){
	this.goToSite				= browser.get("https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login");
	//register page objects
	this.registerPageTitle 		= "AngularJS User Registration and Login Example";
	this.registerBtn 			= element(by.linkText("Register"));
	this.firstName 				= element(by.id("firstName"));
	this.lastName 				= element(by.name("lastName"));
	this.userName 				= element(by.id("username"));
	this.password 				= element(by.id("password"));
	this.regPageRegisterBtn 	= element(by.buttonText("Register"));
	this.successMsg 			= "Registration successful";
	this.successMsgAlert		= element(by.css("div[class='ng-binding ng-scope alert alert-success']"));
	//login page objects
	this.loginPageUserName 		= element(by.id("username"));
	this.loginPagePassword 		= element(by.id("password"));
	this.loginBtn 				= element(by.buttonText("Login"));
	this.getUserName 			= element(by.css("h1[class='ng-binding ng-scope']"));
	this.logoutBtn 				= element(by.linkText("Logout"));
	//banking locators
	this.goToBankSiteUrl 		= "https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login";
	this.bankName 				= "XYZ Bank";
	this.bankTitle 				= element(by.css("strong[class='mainHeading']"));
	this.customerLoginBtn 		= element(by.buttonText("Customer Login"));
	this.firstUser 				= element(by.model("custId")).element(by.css("option[value='1']"));
	this.secondUser 			= element(by.model("custId")).element(by.css("option[value='2']"));
	this.thirdUser 				= element(by.model("custId")).element(by.css("option[value='3']"));
	this.fourthUser 			= element(by.model("custId")).element(by.css("option[value='4']"));
	this.loggedInUserName 		= element(by.css("span[class='fontBig ng-binding']"));
	this.depositBtn 			= element(by.css("button[ng-class='btnClass2']"));
	this.depositAmount 			= element(by.model("amount"));
	this.amtDepositBtn			= element(by.css("button[class='btn btn-default']"));
	this.depositSuccessMsg		= element(by.css("span[class='error ng-binding']"));
	this.withdrawl				= element(by.buttonText("Withdrawl"));
	this.withdrawlAmount 		= element(by.model("amount"));
	this.amtWithdrawlBtn		= element(by.css("button[class='btn btn-default']"));
	this.withdrawlSuccessMsg	= element(by.css("span[class='error ng-binding']"));
	this.transactionBtn			= element(by.buttonText("Transactions"));
	this.transactionTable 		= element.all(by.repeater("tx in transactions | orderBy:sortType:sortReverse | sDate:startDate:end"));
	this.resetBtn				= element(by.buttonText("Reset"));
	this.backBtn				= element(by.buttonText("Back"));
};

module.exports = new Locators();