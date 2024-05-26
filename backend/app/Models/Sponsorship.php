<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sponsorship extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'user_id',
        'pet_id',
        'imagen',
        'description',
        'date',
        'low'

    ];

    public function user()
    {
        return $this->belongsTo(UserAdoptionSponsorship::class);
    }

    public function pet()
    {
        return $this->belongsTo(Pet::class);
    }
}
