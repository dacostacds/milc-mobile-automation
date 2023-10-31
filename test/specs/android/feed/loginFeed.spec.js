import DashboardScreen from "../../../screen/android/feed/Dashboard.screen";
import HomeeScreen from "../../../screen/android/Home.screen";
import LoginnScreen from "../../../screen/android/Login.screen";

describe('Login Feed', () => {
    it('Successfull login feed', async () => {
        LoginnScreen.login(process.env.User, process.env.Password);

        await HomeeScreen.feedModule.click();

        // assert feed dashboard element is displayed
        await expect(DashboardScreen.pensBtn).toBeDisplayed();
    });
});