import LoginScreen from "../../screen/android/Login.screen";
import HomeScreen from "../../screen/android/Home.screen";

class LoginSelectModule {
    
    async loginEnterFeed(user, password){
        await LoginScreen.login(user, password);

        await HomeScreen.feedModule.click();

    }

    async loginEnterFacility(user, password){
        await LoginScreen.login(user, password);

        await HomeScreen.facilityModule.click();
    }
}

export default new LoginSelectModule();