import Button from "../../../utils/android/Button";

class NewPenScreen {

    get penEnableSwitch(){
        return $('//*[@resource-id="com.milcgroup.one:id/new_pen_enable_switch"]');
    }

    get penNumberInput(){
        return $('//*[@resource-id="com.milcgroup.one:id/new_pen_number_edit_text"]');
    }

    get penNameInput(){
        return $('//*[@resource-id="com.milcgroup.one:id/new_pen_name_edit_text"]');
    }

    get penCountInput(){
        return $('//*[@resource-id="com.milcgroup.one:id/new_pen_count_edit_text"]');
    }

    get penCapacityInput(){
        return $('//*[@resource-id="com.milcgroup.one:id/new_pen_capacity_edit_text"]');
    }

    get penTargetDmInput(){
        return $('//*[@resource-id="com.milcgroup.one:id/new_pen_dm_target_edit_textt"]');
    }

    get penGoalInput(){
        return $('//*[@resource-id="com.milcgroup.one:id/new_pen_dm_goal_intake_edit_text"]');
    }

    get goalFixedSwitch(){
        return $('//*[@resource-id="com.milcgroup.one:id/new_pen_intake_goal_fixed_switch"]');
    }

    get penGroupType(){
        return $('//*[@text="Select group type"]');
    }

    get penType(){
        return $('//*[@text="Select pen type"]');
    }

    async addPenNumber(number){
        await this.penNumberInput.addValue(number);
    }

    async addPenName(name){
        await this.penNameInput.addValue(name);
    }

    async addPenCount(count){
        await this.penCountInput.addValue(count);
    }

    async addPenCapacity(capacity){
        await this.penCapacityInput.addValue(capacity);
    }

    async addPenTargetDM(target){
        await this.penTargetDmInput.addValue(target);
    }

    async addPenGoalDM(goal){
        await this.penGoalInput.addValue(goal);
    }

    async enableFixedGoal(){
        if ((await this.goalFixedSwitch.isSelected())==false) {
            await this.goalFixedSwitch.click();
        }
    }

    async disableFixedGoal(){
        if ((await this.goalFixedSwitch.isSelected())) {
            await this.goalFixedSwitch.click();
        }
    }

    async enablePen(){
        if ((await this.penEnableSwitch.isSelected())==false) {
            await this.penEnableSwitch.click();
        }
    }

    async disablePen(){
        if ((await this.penEnableSwitch.isSelected())) {
            await this.penEnableSwitch.click();
        }
    }

    async selectGroupType(group){
        await this.penGroupType.click();
        await $('//*[@text="'+group+'"]').click();
        await Button.chooseBtn.click();
    }

    async selectPenType(type){
        await this.penType.click();
        await $('//*[@text="'+type+'"]').click();
        await Button.chooseBtn.click();
    }

    async createPen(penNumber, penName, penCount, penCapacity, penTargetDM, penGoalDM, penGroup, penType){
        // Complete fields
        await this.addPenNumber(penNumber);
        await this.addPenName(penName);
        await this.addPenCount(penCount);
        await this.addPenCapacity(penCapacity);
        await this.addPenTargetDM(penTargetDM);
        await this.addPenGoalDM(penGoalDM);
        await this.selectGroupType(penGroup);
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
        await this.selectPenType(penType);

        // Save pen
        await Button.saveBtn.click();
    }
}

export default new NewPenScreen();