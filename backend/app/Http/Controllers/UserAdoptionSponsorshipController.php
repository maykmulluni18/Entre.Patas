<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UserAdoptionSponsorship;
use Illuminate\Support\Facades\Validator;

class UserAdoptionSponsorshipController extends Controller
{
    // Obtener todos los registros
    public function index()
    {
        try {
            $userAdoptionSponsorships = UserAdoptionSponsorship::all();
            return response()->json(['data' => $userAdoptionSponsorships], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    // Crear un nuevo registro
    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'fullname' => 'required',
            'email' => 'required|email',
            'phone' => 'required',
            'direction' => 'required',
            'low' => 'required|boolean',
        ]);

        try {
            if ($validator->fails()) {
                return response()->json(['errors' => $validator->errors()], 422);
            }

            $validatedData = $validator->validated();
            $userAdoptionSponsorship = UserAdoptionSponsorship::create($validatedData);
            return response()->json(['message' => 'User Adoption Sponsorship created successfully', 'data' => $userAdoptionSponsorship], 201);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    // Actualizar un registro existente
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'fullname' => 'required',
            'email' => 'required|email',
            'phone' => 'required',
            'direction' => 'required',
            'low' => 'required|boolean',
        ]);

        try {
            if ($validator->fails()) {
                return response()->json(['errors' => $validator->errors()], 422);
            }

            $validatedData = $validator->validated();

            $userAdoptionSponsorship = UserAdoptionSponsorship::findOrFail($id);
            $userAdoptionSponsorship->update($validatedData);
            return response()->json(['message' => 'User Adoption Sponsorship updated successfully', 'data' => $userAdoptionSponsorship], 200);

        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    // Obtener un registro específico
    public function show($id)
    {
        try {
            $userAdoptionSponsorship = UserAdoptionSponsorship::findOrFail($id);
            return response()->json(['data' => $userAdoptionSponsorship], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    // Deshabilitar un registro
    public function disable($id)
    {
        try {
            $userAdoptionSponsorship = UserAdoptionSponsorship::findOrFail($id);
            $userAdoptionSponsorship->update(['low' => 0]); // Asume que "low" es el campo de estado
            return response()->json(['message' => 'User Adoption Sponsorship disabled successfully'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    // Habilitar un registro previamente deshabilitado
    public function enable($id)
    {
        try {
            $userAdoptionSponsorship = UserAdoptionSponsorship::findOrFail($id);
            $userAdoptionSponsorship->update(['low' => 1]); // Asume que "low" es el campo de estado
            return response()->json(['message' => 'User Adoption Sponsorship enabled successfully'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    // Listar los registros habilitados
    public function listEnabled()
    {
        try {
            $userAdoptionSponsorships = UserAdoptionSponsorship::where('low', 1)->get();
            return response()->json(['data' => $userAdoptionSponsorships], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }
}
