class DashboardScreen {

    get ingredientsBtn(){
        const selectorAndroid = '//*[@resource-id="com.milcgroup.one:id/ingredients_button"]';
        const selectorIOS = '~icIngredientsButton';
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS;
        return $(`${selector}`);
    }

    get recipesBtn(){
        const selectorAndroid = '//*[@resource-id="com.milcgroup.one:id/recipes_button"]';
        const selectorIOS = '~icRecipesButton';
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS;
        return $(`${selector}`);
    }

    get pensBtn(){
        const selectorAndroid = '//*[@resource-id="com.milcgroup.one:id/pens_button"]';
        const selectorIOS = '~icPensButton';
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS;
        return $(`${selector}`);
    }

    get loadsBtn(){
        const selectorAndroid = '//*[@resource-id="com.milcgroup.one:id/feed_sheet_button"]';
        const selectorIOS = '~icLoadsButton';
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS;
        return $(`${selector}`);
    }

    get feedingHistoryBtn(){
        const selectorAndroid = '//*[@resource-id="com.milcgroup.one:id/feeding_history_button"]';
        const selectorIOS = '~icFeedingHistoryButton';
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS;
        return $(`${selector}`);
    }

    get inventoryBtn(){
        const selectorAndroid = '//*[@resource-id="com.milcgroup.one:id/inventory_button"]';
        const selectorIOS = '~icInventoryButton';
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS;
        return $(`${selector}`);
    }
}

export default new DashboardScreen();