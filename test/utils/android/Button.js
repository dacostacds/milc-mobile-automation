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
        const selectorAndroid = '//*[@text="Remove"]';
        const selectorIOS = '~Delete Pen';
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS;
        return $(`${selector}`);
    }

    get deleteBtn(){
        const selectorAndroid = '//*[@text="DELETE"]';
        const selectorIOS = '//XCUIElementTypeStaticText[@name="Delete"]';
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS;
        return $(`${selector}`);
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