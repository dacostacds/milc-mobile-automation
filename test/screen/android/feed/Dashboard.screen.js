class DashboardScreen {

    get ingredientsBtn(){
        return $('//*[@resource-id="com.milcgroup.one:id/ingredients_button"]');
    }

    get recipesBtn(){
        return $('//*[@resource-id="com.milcgroup.one:id/recipes_button"]');
    }

    get pensBtn(){
        return $('//*[@resource-id="com.milcgroup.one:id/pens_button"]');
    }

    get loadsBtn(){
        return $('//*[@resource-id="com.milcgroup.one:id/feed_sheet_button"]');
    }

    get feedingHistoryBtn(){
        return $('//*[@resource-id="com.milcgroup.one:id/feeding_history_button"]');
    }

    get inventoryBtn(){
        return $('//*[@resource-id="com.milcgroup.one:id/inventory_button"]');
    }
}

export default new DashboardScreen();