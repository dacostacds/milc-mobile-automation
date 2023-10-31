import HomeScreen from "../../screen/android/Home.screen";
import LoginScreen from "../../screen/android/Login.screen";

describe('Login', () => {
    it('Successfull login', async () => {
        await LoginScreen.userInput.addValue(process.env.User);
        await LoginScreen.passwordInput.addValue(process.env.Password);
        await LoginScreen.loginBtn.click();

        await driver.waitUntil(async () => {
            const loginProgress = await LoginScreen.loginProgress.isExisting();
            return !loginProgress;
        }, {timeout: 50000, timeoutMsg: "Timed out waiting for login"});

        // assert home screen is displayed
        await expect(HomeScreen.homeTitle).toBeDisplayed();
    });
});