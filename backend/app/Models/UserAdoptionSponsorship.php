<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserAdoptionSponsorship extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'fullname',
        'email',
        'phone',
        'direction',
        'low'

    ];
}
