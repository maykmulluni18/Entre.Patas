<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\UUID;

class Adoption extends Model
{
    use HasFactory, UUID;
    protected $fillable = [
        'user_adop_spon_id',
        'pet_id',
        'date',
        'state',
        'low'
    ];

    public function user_adop_spon_id()
    {
        return $this->belongsTo(UserAdoptionSponsorship::class);
    }

    public function pet()
    {
        return $this->belongsTo(Pet::class);
    }
}
