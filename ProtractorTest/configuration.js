var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
  specs: ['RegistrationForm.js'],
  
  capabilities: {
	  'browserName': 'chrome'
  },
  
  onPrepare: function(){
	  browser.manage().window().maximize();
	  
	  //html report
	  jasmine.getEnv().addReporter(
		  new Jasmine2HtmlReporter({
		  savePath: 'target/screenshots'
		  })
	  );
  }
};