<?php
/**
 * Created by PhpStorm.
 * User: ThuyTT35
 * Date: 12/29/2017
 * Time: 10:58 AM
 */

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
