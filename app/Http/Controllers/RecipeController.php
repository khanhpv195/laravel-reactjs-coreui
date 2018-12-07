<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\Eloquent\RecipeEloquentRepository;
use App\Recipe;
class RecipeController extends Controller
{
    protected $recipeRepository;

    function __construct(
        RecipeEloquentRepository $recipeRepository

    )
    {
        // parent::__construct();
        $this->RecipeEloquentRepository = $recipeRepository;

    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       $recipe = $this->RecipeEloquentRepository->all();
       return response()->json($recipe);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('test');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $recipe = $this->RecipeEloquentRepository->create($request->all());

        return response()->json('Product Added Successfully.');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $recipe = $this->RecipeEloquentRepository->update($request->all(),$id);

        return response()->json('Product Delete Successfully.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $recipe = $this->RecipeEloquentRepository->delete($id);

        return response()->json('Product Delete Successfully.');
    }
}
