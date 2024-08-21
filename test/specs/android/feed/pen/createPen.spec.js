import DashboardScreen from "../../../../screen/feed/Dashboard.screen";
import LoginSelectModule from "../../../../utils/android/LoginSelectModule";
import PenScreen from "../../../../screen/android/feed/pen/Pen.screen";
import NewPenScreen from "../../../../screen/android/feed/pen/NewPen.screen";
import penData from "../../../../data/pen.data.json";
import PenDetailScreen from "../../../../screen/android/feed/pen/PenDetail.screen";

describe('Create pen', () => {

    before(async () => {
        await LoginSelectModule.loginEnterFeed(process.env.User, process.env.Password);

        await DashboardScreen.pensBtn.click();

        await PenScreen.deletePen();
    });

    beforeEach(async () => {
        await PenScreen.addNewPenBtn.click();
    });

    after(async () => {
        await driver.back();
    })

    afterEach(async () => {
        await driver.back();
    })

    it('Create pen enabled', async () => {
        // Create pen
        await NewPenScreen.enablePen();
        await NewPenScreen.createPen(
            penData.penEnabledNumber, 
            penData.penEnabledName, 
            penData.penCount, 
            penData.penCapacity, 
            penData.penTargetDM, 
            penData.penGoalDM, 
            penData.penGroupDry, 
            penData.penTypeDry
        );
        // Assert - Pen is enabled and have the correct data
        expect (await PenDetailScreen.penEnableSwitch.getAttribute("checked")).toBe("true");
        await expect(PenDetailScreen.penCount).toHaveText(penData.penCount);
        await expect(PenDetailScreen.penTargetDM).toHaveTextContaining(penData.penTargetDM);
        await expect(PenDetailScreen.penNumber).toHaveText(penData.penEnabledNumber);
        await expect(PenDetailScreen.penName).toHaveText(penData.penEnabledName);
        await expect(PenDetailScreen.penCapacity).toHaveText(penData.penCapacity);
        await expect(PenDetailScreen.penGoalDM).toHaveTextContaining(penData.penGoalDM);
        await expect(PenDetailScreen.penGroup).toHaveText(penData.penGroupDry);
        await expect(PenDetailScreen.penType).toHaveText(penData.penTypeDry);
    });

    it('Create pen disabled', async () => {
        // Create pen
        await NewPenScreen.disablePen();
        await NewPenScreen.createPen(
            penData.penDisabledNumber, 
            penData.penDisabledName, 
            penData.penCount, 
            penData.penCapacity, 
            penData.penTargetDM, 
            penData.penGoalDM, 
            penData.penGroupDry, 
            penData.penTypeDry
        );
        // Assert - Pen is disabled and have the correct data
        expect (await PenDetailScreen.penEnableSwitch.getAttribute("checked")).toBe("false");
        await expect(PenDetailScreen.penCount).toHaveText(penData.penCount);
        await expect(PenDetailScreen.penTargetDM).toHaveTextContaining(penData.penTargetDM);
        await expect(PenDetailScreen.penNumber).toHaveText(penData.penDisabledNumber);
        await expect(PenDetailScreen.penName).toHaveText(penData.penDisabledName);
        await expect(PenDetailScreen.penCapacity).toHaveText(penData.penCapacity);
        await expect(PenDetailScreen.penGoalDM).toHaveTextContaining(penData.penGoalDM);
        await expect(PenDetailScreen.penGroup).toHaveText(penData.penGroupDry);
        await expect(PenDetailScreen.penType).toHaveText(penData.penTypeDry);
    });
});