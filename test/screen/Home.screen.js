class Home {
    get homeTitle(){
        const selectorAndroid = '//*[@text="Home"]';
        const selectorIOS = '~one';
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS;
        return $(`${selector}`);
    }

    get feedModule(){
        return $('//*[@resource-id="com.milcgroup.one:id/one_facility_module_feed_image_view"]');
    }

    get facilityModule(){
        return $('//*[@resource-id="com.milcgroup.one:id/one_facility_module_facility_image_view"]');
    }
}

export default new Home();