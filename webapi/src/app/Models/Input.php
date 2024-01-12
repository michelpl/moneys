<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use MongoDB\Laravel\Eloquent\Model;

class Input extends Model
{
    use HasFactory;
    protected $connection = 'mongodb';
    protected $collection = 'input';
    protected $fillable = [
        'user_id',
        'description',
        'model',
        'month',
        'year',
        'amount',
        'paid_amount',
        'due_date',
        'payment_date',
        'notes',
        'value_type',
        'categories'
    ];
}
