<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\UUID;

class UserAdoptionSponsorship extends Model
{
    use HasFactory, UUID;
    protected $fillable = [
        'name',
        'fullname',
        'email',
        'phone',
        'direction',
        'low'
    ];
    public function adoptionAnswer()
    {
        return $this->hasMany(AdoptionAnswer::class);
    }
}
