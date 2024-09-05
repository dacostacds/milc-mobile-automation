class RecipeIngredientScreen {

    get recIngAfHd(){
        return $('//*[@resource-id="com.milcgroup.one:id/recipe_ingredient_item_af_hd"]');
    }

    get recIngDmHd(){
        return $('//*[@resource-id="com.milcgroup.one:id/recipe_ingredient_item_dm_hd"]');
    }
}

export default new RecipeIngredientScreen();