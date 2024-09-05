class RecipeDetailScreen{
    get recipeDm(){
        return $('//*[@resource-id="com.milcgroup.one:id/recipe_detail_dm_value"]');
    }

    get recAmountDm(){
        return $('//*[@resource-id="com.milcgroup.one:id/recipe_detail_dm_per_head"]');
    }

    get recConstDm(){
        return $('//*[@resource-id="com.milcgroup.one:id/recipe_detail_dm_per_head"]');
    }

    get recAmountAf(){
        return $('//*[@resource-id="com.milcgroup.one:id/recipe_detail_af_per_head"]');
    }

    get recCostDm(){
        return $('//*[@resource-id="com.milcgroup.one:id/recipe_detail_cost_per_weight"]');
    }

    get recDensity(){
        return $('//*[@resource-id="com.milcgroup.one:id/recipe_detail_density_value"]');
    }

    get recIngName(){
        return $('//*[@resource-id="com.milcgroup.one:id/recipe_ingredient_name"]');
    }

}

export default new RecipeDetailScreen();