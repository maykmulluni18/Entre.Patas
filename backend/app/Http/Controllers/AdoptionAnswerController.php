<?php

namespace App\Http\Controllers;

use App\Models\AdoptionAnswer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

class AdoptionAnswerController extends Controller
{
    //
    public function indexAnswer($id)
    {
        try {
            $answers = DB::select('SELECT
                uss.id,
                uss.name,
                uss.fullname,
                uss.email,
                uss.direction,
                uss.phone ,
                SUM(aas.answer) AS suma_answer
            FROM
                adoption_answers aas
            INNER JOIN
                user_adoption_sponsorships uss ON uss.id = aas.user_adoption_sponsorship_id
            WHERE aas.user_adoption_sponsorship_id = ?
            GROUP BY
                uss.id, uss.name, uss.fullname, uss.email, uss.direction, uss.phone', [$id]);

            return response()->json(['data' => $answers], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            '*.answer' => 'required',
            '*.user_adoption_sponsorship_id' => 'required',
            '*.adoption_questionnaire_id' => 'required',
        ]);

        try {
            if ($validator->fails()) {
                return response()->json(['errors' => $validator->errors()], 422);
            }
            $data = $request->all();

            foreach ($data as $answerData) {
                AdoptionAnswer::create($answerData);
            }
            return response()->json(['message' => 'Answers created successfully'], 201);
            

        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }
}
