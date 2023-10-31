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

}

export default new Buttons();