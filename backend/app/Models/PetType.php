<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\UUID;

class PetType extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'low'

    ];
    public function pets()
    {
        return $this->hasMany(Pet::class);
    }
}