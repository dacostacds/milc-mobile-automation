import DashboardScreen from "../../../screen/feed/Dashboard.screen";
import HomeeScreen from "../../../screen/Home.screen";
import LoginnScreen from "../../../screen/Login.screen";

describe('Login Feed', () => {
    it('Successfull login feed', async () => {
        await LoginnScreen.login(process.env.User, process.env.Password);

        await HomeeScreen.feedModule.click();

        // assert feed dashboard element is displayed
        await expect(DashboardScreen.pensBtn).toBeDisplayed();
    });
});