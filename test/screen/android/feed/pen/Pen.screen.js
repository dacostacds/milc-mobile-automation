import Buttons from "../../../../utils/android/Buttons";

class PenScreen{

    get addNewPenBtn(){
        return $('//*[@resource-id="com.milcgroup.one:id/add_new_pen_fab"]');
    }

    get threeDots(){
        return $('//*[@resource-id="com.milcgroup.one:id/pen_item_action_more"]');
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