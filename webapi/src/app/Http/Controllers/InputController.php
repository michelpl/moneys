<?php

namespace App\Http\Controllers;

use App\Models\Input;
use Illuminate\Http\Client\Response;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Collection;

class InputController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function list(string $id = ''): Collection
    {
        return Input::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function create(Request $request): array
    {
        Input::create($request->all());
        return $request->all();
    }

    /**
     * Display the specified resource.
     */
    public function show(Input $input)
    {
        return 1;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Input $input)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Input $input)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function delete(string $id): void
    {
        $post = Input::find($id);
        $post->delete();
    }
}
