
import HomeScreeniOS from "../../screen/ios/HomeiOS.screen";
import LoginiOSScreen from "../../screen/ios/LoginiOS.screen";

describe('Login', () => {
    it('Successfull login', async () => {
        await LoginiOSScreen.userInput.clearValue();
        await LoginiOSScreen.userInput.addValue(process.env.User);
        await LoginiOSScreen.passwordInput.addValue(process.env.Password);
        await LoginiOSScreen.signInBtn.click();

        await driver.waitUntil(async () => {
            const loginProgress = await LoginiOSScreen.loading.isExisting();
            return !loginProgress;
        }, {timeout: 50000, timeoutMsg: "Timed out waiting for login"});

        await expect(HomeScreeniOS.homeTitle).toBeDisplayed();
    });
});