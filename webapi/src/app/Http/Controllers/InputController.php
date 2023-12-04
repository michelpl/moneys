<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreInputRequest;
use App\Http\Requests\UpdateInputRequest;
use App\Models\Input;

class InputController extends Controller
{
    private $with;

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Input::all();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreInputRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Input $input)
    {
        //
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
    public function update(UpdateInputRequest $request, Input $input)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Input $input)
    {
        //
    }
}
