<?php

namespace App\Http\Controllers;

use App\Models\Input;
use App\Models\Transaction;
use Illuminate\Http\Client\Response;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\Response as HttpResponse;

class InputController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function list(string $userId, int $year, int $month)
    {
        return Input::where(
            [
                'user_id' => (int) $userId,
                'year' => (int) $year,
                'month' => (int) $month
            ]
        )
            ->orderBy('model, month, updated_at')
            ->get();
    }

    public function all()
    {
        return Input::all();
    }

    public function find(string $id)
    {
        return Input::where('_id', $id)->first();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function create(Request $request)
    {
        return Input::create($request->all());
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $transaction = Input::find($id);
        if ($transaction) {
            Input::where('_id', $id)->update($request->all());
            return;
        }
        return response('', HttpResponse::HTTP_NOT_FOUND);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function delete(string $id): false | string
    {
        $transaction = Input::find($id);
        if ($transaction) {
            return $transaction->delete();

        }

        return response('', HttpResponse::HTTP_NOT_FOUND);
    }
}
