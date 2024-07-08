<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\UUID;

class Pet extends Model
{
    use HasFactory, UUID;
    protected $fillable = [
        'name',
        'age',
        'sex',
        'color',
        'imagen',
        'description',
        'date_end',
        'sterilized',
        'vaccination',
        'state',
        'peso',
        'tamanio',
        'pet_type_id',
        'type_race_id',
        'low'

    ];

    public function petType()
    {
        return $this->belongsTo(PetType::class);
    }

    public function typeRace()
    {
        return $this->belongsTo(TypeRace::class);
    }
}
