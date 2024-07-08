<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User; // Asegúrate de importar el modelo correspondiente
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class UserController extends Controller
{
    //
    public function register(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'name' => 'required|string|max:255',
                'email' => 'required|string|email|max:255|unique:users',
                'password' => 'required|string|confirmed|min:8',
            ], [
                'name.max' => 'El nombre no puede tener más de 255 caracteres.',
                'email.unique' => 'El correo electrónico ya está en uso.',
                'password.min' => 'La contraseña debe tener al menos 8 caracteres.',
                'password.confirmed' => 'La confirmación de la contraseña no coincide.',
            ]);

            User::create([
                'name' => $validatedData['name'],
                'email' => $validatedData['email'],
                'password' => Hash::make($validatedData['password']),
            ]);

            return response()->json(['message' => 'Usuario registrado exitosamente'], 201);

        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json(['message' => $e->validator->errors()->first()], 422);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error al registrar el usuario'], 500);
        }
    }

    public function login(Request $request)
    {
        try {
            // Validar el correo electrónico
            $request->validate([
                'email' => 'required|string|email',
            ], [
                'email.email' => 'El correo electrónico proporcionado no es válido.',
            ]);
        } catch (ValidationException $e) {
            return response()->json(['message' => $e->getMessage()], 422);
        }

        try {
            // Validar la contraseña
            $request->validate([
                'password' => 'required|string',
            ], [
                'password.required' => 'Por favor, ingrese la contraseña.',
            ]);
        } catch (ValidationException $e) {
            return response()->json(['message' => $e->getMessage()], 422);
        }

        try {
            // Verificar las credenciales
            if (!Auth::attempt($request->only('email', 'password'))) {
                throw new \Exception('Las credenciales proporcionadas son incorrectas.');
            }

            $user = $request->user();

            $token = $user->createToken('token')->plainTextToken;

            return response()->json(['token' => $token], 201);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 422);
        }
    }




}
