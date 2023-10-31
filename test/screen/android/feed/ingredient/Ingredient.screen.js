class IngredientScreen{
    get addNewIngredientBtn(){
        return $('//*[@resource-id="com.milcgroup.one:id/add_new_ingredient_fab"]');
    }

}

export default new IngredientScreen();