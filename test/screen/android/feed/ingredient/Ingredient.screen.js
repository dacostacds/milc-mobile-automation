import Button from "../../../../utils/android/Button";

class IngredientScreen{
    get addNewIngredientBtn(){
        return $('//*[@resource-id="com.milcgroup.one:id/add_new_ingredient_fab"]');
    }

    get threeDots(){
        return $('//*[@resource-id="com.milcgroup.one:id/ingredient_item_action"]');
    }

    get removeIngBtn(){
        return $('//*[@text="Remove ingredient"]')
    }

    async deleteIngredient(){
        let ingPresent = await this.threeDots.isDisplayed();
        while(ingPresent === true){
            this.threeDots.click();
            this.removeIngBtn.click();
            await Button.deleteBtn.click()
            ingPresent = await this.threeDots.isDisplayed();
        }
    }

}

export default new IngredientScreen();