<?php
namespace App\Repositories\Eloquent;

use App\Product;
use App\Repositories\BaseEloquentRepository;


class ProductEloquentRepository extends BaseEloquentRepository
{

    /**
     * @return mixed
     */
    public function model()
    {
        return Product::class;
    }


}
