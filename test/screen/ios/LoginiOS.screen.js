class LoginScreeniOS{
    get userInput(){

        const selectorAndroid = '//*[@text="Email"]'
        const selectorIOS = '//XCUIElementTypeTextField'
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS
        return $(`${selector}`)
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