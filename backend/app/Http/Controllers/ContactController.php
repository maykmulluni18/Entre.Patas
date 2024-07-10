<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    //
    // Obtener todos los registros
    public function index()
    {
        try {
            $contacts = Contact::all();
            return response()->json($contacts, 200);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    // Crear un nuevo registro
    public function create(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'name' => 'required',
                'fullname' => 'required',
                'email' => 'required',
                'phone' => 'required',
                'direction' => 'required',
                'type' => 'required',
            ]);
            if ($validator->fails()) {
                return response()->json(['errors' => $validator->errors()], 422);
            }
            $validatedData = $validator->validated();

            $contact = Contact::create($validatedData);

            return response()->json(['message' => 'Contact created successfully', 'contact' => $contact], 201);
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
