<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\UUID;

class ReportLoss extends Model
{
    use HasFactory, UUID;
    protected $fillable = [
        'imagen',
        'name',
        'age',
        'sex',
        'color',
        'description',
        'date_end',
        'state',
        'telefono',
        'low'

    ];
}
