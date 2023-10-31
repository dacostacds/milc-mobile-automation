class PenDetail{

    get penEnableSwitch(){
        return $('//*[@resource-id="com.milcgroup.one:id/pen_enabled_switch"]');
    }

    get penCount(){
        return $('//*[@resource-id="com.milcgroup.one:id/pen_count_value_textview"]');
    }

    get penTargetDM(){
        return $('//*[@resource-id="com.milcgroup.one:id/pen_target_dm_hd_value_textview"]');
    }

    get penNumber(){
        return $('//*[@resource-id="com.milcgroup.one:id/pen_number_value_textview"]');
    }

    get penName(){
        return $('//*[@resource-id="com.milcgroup.one:id/pen_name_value_textview"]');
    }

    get penCapacity(){
        return $('//*[@resource-id="com.milcgroup.one:id/pen_capacity_value_textview"]');
    }

    get penGoalDM(){
        return $('//*[@resource-id="com.milcgroup.one:id/pen_goal_dm_hd_value_textview"]');
    }

    get penGroup(){
        return $('//*[@resource-id="com.milcgroup.one:id/primary_pen_type_value"]');
    }

    get penType(){
        return $('//*[@resource-id="com.milcgroup.one:id/secondary_pen_type_value"]');
    }

    async validatePenValues(penNumber, penName, penCount, penCapacity, penTargetDM, penGoalDM, penGroup, penType){
        await expect(this.penCount).toHaveText(penCount);
        await expect(this.penTargetDM).toHaveTextContaining(penTargetDM);
        await expect(this.penNumber).toHaveText(penNumber);
        await expect(this.penName).toHaveText(penName);
        await expect(this.penCapacity).toHaveText(penCapacity);
        await expect(this.penGoalDM).toHaveTextContaining(penGoalDM);
        await expect(this.penGroup).toHaveText(penGroup);
        await expect(this.penType).toHaveText(penType);
    }
}

export default new PenDetail();