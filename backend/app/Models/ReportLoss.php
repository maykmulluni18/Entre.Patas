<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReportLoss extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'age',
        'sex',
        'color',
        'description',
        'date_end',
        'state',
        'number',
        'low'

    ];
}
