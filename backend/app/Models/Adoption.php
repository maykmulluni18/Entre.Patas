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

    public function userAdoptionSponsorship()
    {
        return $this->belongsTo(UserAdoptionSponsorship::class, 'user_adop_spon_id');
    }

    public function pet()
    {
        return $this->belongsTo(Pet::class, 'pet_id');
    }
}
