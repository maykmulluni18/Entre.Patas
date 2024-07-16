<?php

namespace App\Http\Controllers;

use App\Models\Pet;
use Illuminate\Http\Request;
use App\Models\Adoption;
use Illuminate\Support\Facades\DB;

class AdoptionController extends Controller
{
    //
    public function index()
    {
        try {
            $pets = DB::select('
            SELECT
                uss.id,
                uss.name,
                uss.fullname,
                uss.email,
                uss.direction,
                uss.phone,
                aas.user_adop_spon_id,
                aas.date AS fecha_Adop,
                pts.name AS name_mascota,
                pty.name AS type_name_masc,
                pts.state,
                pts.id AS idMascota
            FROM
                adoptions aas
            INNER JOIN
                user_adoption_sponsorships uss ON uss.id = aas.user_adop_spon_id
            INNER JOIN
                pets pts ON pts.id = aas.pet_id
                INNER JOIN pet_types pty ON pty.id = pts.pet_type_id;');

            return response()->json(['data' => $pets], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    // Crear un nuevo registro
    public function create(Request $request)
    {
        try {
            // Validar los datos recibidos (opcional pero recomendado)
            $validatedData = $request->validate([
                'user_adop_spon_id' => 'required',
                'pet_id' => 'required',
                // Puedes agregar más reglas de validación según tus necesidades
            ]);

            // Obtener los datos validados del request
            $data = [
                'user_adop_spon_id' => $validatedData['user_adop_spon_id'],
                'pet_id' => $validatedData['pet_id'],
                'date' => now(), // Agregar la fecha actual del servidor
                'state' => 'Adoptado', // Asignar el estado inicial
            ];

            // Crear el registro en la base de datos
            $adoption = Adoption::create($data);

            return response()->json(['message' => 'Adoption created successfully', 'data' => $adoption], 201);

        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }


    // Actualizar un registro existente
    public function update(Request $request, $id)
    {
        try {


            return response()->json(['message' => 'TypeRace updated successfully'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    // Deshabilitar un registro
    public function disable($id)
    {
        try {



            return response()->json(['message' => 'TypeRace disabled successfully'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    // Habilitar un registro previamente deshabilitado
    public function enable($id)
    {
        try {


            return response()->json(['message' => 'TypeRace enabled successfully'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    public function cancelAdoption($id)
    {
        try {

            // Buscar la mascota por su ID
            $pet = Pet::findOrFail($id);

            // Actualizar solo el estado
            $pet->state = 'No Adoptado'; // Asignar directamente el valor 'Adoptado'
            $pet->save();

            return response()->json(['message' => 'state updated successfully', 'pet' => $pet], 201);

        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    public function habilitarAdoption($id)
    {
        try {

            // Buscar la mascota por su ID
            $pet = Pet::findOrFail($id);

            // Actualizar solo el estado
            $pet->state = 'Adoptado'; // Asignar directamente el valor 'Adoptado'
            $pet->save();

            return response()->json(['message' => 'state updated successfully', 'pet' => $pet], 201);

        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }
}
