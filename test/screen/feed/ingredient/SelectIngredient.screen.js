import Button from "../../../utils/android/Button";

class SelectIngredientScreen{

    get ingHandAddedSwitch(){
        return $('//*[@resource-id="com.milcgroup.one:id/add_ingredient_manual_advance"]');
    }

    get ingSwitchEqSwitch(){
        return $('//*[@resource-id="com.milcgroup.one:id/add_ingredient_switch_equipment"]');
    }

    get ingAfHdRadioBtn(){
        return $('//*[@resource-id="com.milcgroup.one:id/add_ingredient_radio_af"]');
    }

    get ingDmHdRadioBtn(){
        return $('//*[@resource-id="com.milcgroup.one:id/add_ingredient_radio_dm"]');
    }

    get ingAmountInput(){
        return $('//*[@resource-id="com.milcgroup.one:id/add_ingredient_amount_edit_text"]');
    }

    get ingDelayInput(){
        return $('//*[@resource-id="com.milcgroup.one:id/add_ingredient_delay_edit_text"]');
    }

    async addAmount(amount){
        await this.ingAmountInput.addValue(amount)
    }
    
    async addIngToRecByName(ingName, amount){
        // Select ingredient, set amount and add
        await $('//*[@text="'+ingName+'"]').click();
        await this.addAmount(amount);
        await Button.addBtn.click();
    }
}

export default new SelectIngredientScreen();