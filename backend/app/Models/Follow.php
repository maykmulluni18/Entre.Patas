<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\UUID;

class Follow extends Model
{
    use HasFactory;
    protected $fillable = [
        'date',
        'state',
        'adoption_id',
        'low'

    ];

    public function adoption()
    {
        return $this->belongsTo(Adoption::class);
    }
}
