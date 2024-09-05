import Buttons from "../../../utils/android/Button";

class PenScreen{

    get addNewPenBtn(){
        const selectorAndroid = '//*[@resource-id="com.milcgroup.one:id/add_new_pen_fab"]';
        const selectorIOS = '~Añadir';
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS;
        return $(`${selector}`);
    }

    get threeDots(){
        const selectorAndroid = '//*[@resource-id="com.milcgroup.one:id/pen_item_action_more"]';
        const selectorIOS = '//XCUIElementTypeButton[@name="more"]';
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS;
        return $(`${selector}`);
    }

    async deletePen(){
        let penPresent = await this.threeDots.isDisplayed();
        while(penPresent === true){
            this.threeDots.click();
            await Buttons.removeBtn.click();
            await Buttons.deleteBtn.click();
            penPresent = await this.threeDots.isDisplayed();
        }
    }

    async deletePenByName(penName){
        // Check for pen and delete
        if ((await $('//*[contains(@text,'+penName+'"]')).isDisplayed()) {
            await $('//*[contains(@text,'+penName+'"]/following-sibling::*[@resource-id="com.milcgroup.one:id/pen_item_action_more"]').click();
            await Buttons.removeBtn.click();
            await Buttons.deleteBtn.click();
        }
    }
}

export default new PenScreen();