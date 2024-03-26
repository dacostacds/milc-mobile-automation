class Buttons {

    get chooseBtn(){
        return $('//*[@text="CHOOSE"]');
    }

    get saveBtn(){
        return $('//*[@text="Save"]');
    }

    get editBtn(){
        return $('//*[@text="Edit"]');
    }

    get removeBtn(){
        return $('//*[@text="Remove"]');
    }

    get deleteBtn(){
        return $('//*[@text="DELETE"]');
    }

    get addBtn(){
        return $('//*[@text="ADD"]');
    }

    get cancelBtn(){
        return $('//*[@text="CANCEL"]');
    }

    get doneBtn(){
        return $('//*[@text="Done"]');
    }

}

export default new Buttons();