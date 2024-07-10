<?php

namespace App\Http\Controllers;

use App\Models\Donation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class DonationController extends Controller
{
    //
    public function index()
    {
        try {
            // Obtén todos los registros de la tabla donations
            $donations = Donation::all();

            // Retorna los registros en formato JSON
            return response()->json($donations, 200);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    // Crear un nuevo registro
    public function create(Request $request)
    {
        try {
            // Validar los datos de entrada
            $validator = Validator::make($request->all(), [
                'name' => 'required',
                'fullname' => 'required',
                'email' => 'required',
                'phone' => 'required',
                'quantity' => 'required',
            ]);

            if ($validator->fails()) {
                return response()->json(['errors' => $validator->errors()], 422);
            }
            $validatedData = $validator->validated();

            // Crear un nuevo registro en la tabla donations
            $donation = Donation::create($validatedData);

            // Retornar una respuesta en formato JSON
            return response()->json(['message' => 'Donation created successfully', 'donation' => $donation], 201);
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
}
