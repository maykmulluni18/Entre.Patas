<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AdoptionQuestionnaire extends Model
{
    use HasFactory;
    protected $fillable = [
        'question',

    ];

    public function adoptionAnswer()
    {
        return $this->hasMany(AdoptionAnswer::class);
    }
}
