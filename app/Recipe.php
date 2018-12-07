<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Recipe extends Model
{
    protected $table='recipes';
    protected $fillable = [
        'title',
       'description',
       'content',
        'images',
       'url_video',
       'user_id',
    ];
}
