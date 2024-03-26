class LoginScreen {
    get userInput(){
        return $('//*[@text="Email"]');
    }

    get passwordInput(){
        return $('//*[@text="Password"]');
    }

    get remindMeCheckbox(){
        return $('//*[@text="Remember me"]');
    }

    get loginBtn(){
        return $('//*[@text="Log in"]');
    }

    get forgotPass(){
        return $('//*[@text="Forgot password?"]');
    }

    get loginProgress(){
        return $('//*[@resource-id="com.milcgroup.one:id/alertDialogLoading"]');
    }

    async login(user, password){
        await this.userInput.addValue(user);
        await this.passwordInput.addValue(password);
        await this.loginBtn.click();

        await driver.waitUntil(async () => {
            const loginProgress = await this.loginProgress.isExisting();
            return !loginProgress;
        }, {timeout: 80000, timeoutMsg: "Timed out waiting for login"});
    }
}

export default new LoginScreen();