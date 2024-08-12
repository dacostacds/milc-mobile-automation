import HomeScreen from "../screen/Home.screen";
import LoginScreen from "../screen/Login.screen";


describe('Login', () => {
    it('Successfull login', async () => {
        await LoginScreen.userInput.setValue(process.env.User);
        await LoginScreen.passwordInput.setValue(process.env.Password);
        await LoginScreen.signInBtn.click();

        await driver.waitUntil(async () => {
            const loginProgress = await LoginScreen.loginProgress.isExisting();
            return !loginProgress;
        }, {timeout: 50000, timeoutMsg: "Timed out waiting for login"});

        // assert home screen is displayed
        await expect(HomeScreen.homeTitle).toBeDisplayed();
    });
});