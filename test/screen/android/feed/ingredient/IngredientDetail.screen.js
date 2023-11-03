class IngredientDetailScreen {

    get ingredientName(){
        return $('//*[@resource-id="com.milcgroup.one:id/ingredient_name_value_textview"]');
    }

    get ingredientTolerance(){
        return $('//*[@resource-id="com.milcgroup.one:id/ingredient_tolerance_value_textview"]');
    }

    get ingredientCost(){
        return $('//*[@resource-id="com.milcgroup.one:id/ingredient_location_item_dm_cost_textview"]');
    }

    get ingredientDM(){
        return $('//*[@resource-id="com.milcgroup.one:id/ingredient_location_dm_percentage_textview"]');
    }

    get ingredientNote(){
        return $('//*[@resource-id="com.milcgroup.one:id/ingredient_notes_textview"]');
    }
}

export default new IngredientDetailScreen();