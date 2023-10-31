class LoginScreeniOS{
    get userInput(){
        return $("//XCUIElementTypeTextField");
    }

    get passwordInput(){
        return $("//XCUIElementTypeSecureTextField");
    }

    get signInBtn(){
        return $("//XCUIElementTypeButton[@name='Sign in']");
    }

    get loading(){
        return $("~Loading");
    }
    
}

export default new LoginScreeniOS();