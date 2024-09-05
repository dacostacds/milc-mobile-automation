class LoginScreen{
    get userInput(){
        const selectorAndroid = '//*[@resource-id="com.milcgroup.one:id/login_email_edit_text"]';
        const selectorIOS = '//XCUIElementTypeTextField';
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS;
        return $(`${selector}`);
    }

    get passwordInput(){
        const selectorAndroid = '//*[@text="Password"]';
        const selectorIOS= '//XCUIElementTypeSecureTextField';
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS;
        return $(`${selector}`);
    }

    get signInBtn(){
        const selectorAndroid = '//*[@text="Log in"]';
        const selectorIOS= '//XCUIElementTypeButton[@name="Sign in"]';
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS;
        return $(`${selector}`);
    }

    get remindMeCheckbox(){
        return $('//*[@text="Remember me"]');
    }

    get forgotPass(){
        return $('//*[@text="Forgot password?"]');
    }

    get loginProgress(){
        const selectorAndroid = '//*[@resource-id="com.milcgroup.one:id/alertDialogLoading"]';
        const selectorIOS = '~Loading';
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS;
        return $(`${selector}`);
    }

    async login(user, password){
        await this.userInput.addValue(user);
        await this.passwordInput.addValue(password);
        await this.signInBtn.click();

        await driver.waitUntil(async () => {
            const loginProgress = await this.loginProgress.isExisting();
            return !loginProgress;
        }, {timeout: 80000, timeoutMsg: "Timed out waiting for login"});
    }
    
}

export default new LoginScreen();