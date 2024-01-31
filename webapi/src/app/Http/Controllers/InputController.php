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
        if (Input::create($request->all())) {
            return response($request->all(), HttpResponse::HTTP_CREATED);
        }
        return response('', HttpResponse::HTTP_BAD_REQUEST);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $transaction = $this->find($id);

        if (!empty($transaction)) {
            $transaction->user_id = $request->user_id;
            $transaction->description = $request->description;
            $transaction->model = $request->model;
            $transaction->month = $request->month;
            $transaction->year = $request->year;
            $transaction->amount = $request->amount;
            $transaction->paid_amount = $request->paid_amount;
            $transaction->due_date = $request->due_date;
            $transaction->payment_date = $request->payment_date;
            $transaction->notes = $request->notes;
            $transaction->value_type = 'flat';
            $transaction->categories = $request->categories;
            $transaction->save();
            
            return response('', HttpResponse::HTTP_OK);
        }
        $this->create($request);
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
