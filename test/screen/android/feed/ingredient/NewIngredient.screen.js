class NewIngredientScreen{
    get globalIngredientInput(){
        return $('//*[@resource-id="com.milcgroup.one:id/add_ingredient_global_auto_complete"]');
    }

    get ingredientNameInput(){
        return $('//*[@resource-id="com.milcgroup.one:id/add_ingredient_name_edit_text"]');
    }

    get toleranceInput(){
        return $('//*[@resource-id="com.milcgroup.one:id/add_ingredient_tolerance_edit_text"]');
    }

    get dmInput(){
        return $('//*[@resource-id="com.milcgroup.one:id/add_ingredient_dm_percentage_edit_text"]');
    }

    get costMethodView(){
        return $('//*[@resource-id="com.milcgroup.one:id/add_ingredient_cost_method_image_view"]');
    }

    get costInput(){
        return $('//*[@resource-id="com.milcgroup.one:id/add_ingredient_cost_edit_text"]');
    }

}

export default new NewIngredientScreen();