class RecipeScreen{

    get addNewRecipeBtn(){
        return $('//*[@resource-id="com.milcgroup.one:id/add_new_recipe_fab"]');
    }
}

export default new RecipeScreen();