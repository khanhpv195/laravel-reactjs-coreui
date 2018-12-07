<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/email',function(){
    return view('email.email');
});

Route::post('/message/send', ['uses' => 'EmailController@sendMail', 'as' => 'front.fb']);
// Auth::routes();
Route::group(['middleware' => 'auth'], function () {
    Route::get('/', function () {
        return view('welcome');
    });

    Route::resource('/api/products','ProductController');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
