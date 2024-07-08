<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AdoptionAnswer extends Model
{
    use HasFactory;
    protected $fillable = [
        'answer',
        'user_adoption_sponsorship_id',
        'adoption_questionnaire_id'
    ];

    public function adoptionQuestionnaire()
    {
        return $this->belongsTo(AdoptionQuestionnaire::class);
    }

    public function userAdoptionSponsorship()
    {
        return $this->belongsTo(UserAdoptionSponsorship::class);
    }
}
