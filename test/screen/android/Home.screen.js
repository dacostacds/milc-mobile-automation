class HomeScreen {
    get homeTitle(){
        return $('//*[@text="Home"]');
    }

    get feedModule(){
        return $('//*[@resource-id="com.milcgroup.one:id/one_facility_module_feed_image_view"]');
    }

    get facilityModule(){
        return $('//*[@resource-id="com.milcgroup.one:id/one_facility_module_facility_image_view"]');
    }
}

export default new HomeScreen();