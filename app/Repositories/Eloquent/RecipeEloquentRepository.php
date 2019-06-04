<?php
namespace App\Repositories\Eloquent;

use App\Recipe;
use App\Category;
use App\Repositories\BaseEloquentRepository;


class RecipeEloquentRepository extends BaseEloquentRepository
{

    /**
     * @return mixed
     */
    public function model()
    {
        return Recipe::class;
    }

    public function createAll($data)
    {
        $result = new Recipe($data);
        return $result;
    }

    public function getCategory()
    {
        $category = Category::all();
        return $category;
    }
}
