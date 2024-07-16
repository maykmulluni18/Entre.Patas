<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UserAdoptionSponsorship;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use App\Models\User; // Asegúrate de importar el modelo correspondiente
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

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
            'email' => 'required|string|email|max:255|unique:users,email|unique:user_adoption_sponsorships,email',
            'phone' => 'required',
            'direction' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $validatedData = $validator->validated();

        try {
            // Crear el registro en UserAdoptionSponsorship
            $userAdoptionSponsorship = UserAdoptionSponsorship::create($validatedData);

            // Generar una contraseña aleatoria
            $randomPassword = Str::random(12);

            // Crear el usuario
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($randomPassword),
                'type' => '2',
            ]);

            // Enviar el correo electrónico con las credenciales de acceso
            Mail::send('email', ['user' => $user, 'password' => $randomPassword], function ($message) use ($user) {
                $message->to($user->email);
                $message->subject('Sus credenciales de acceso');
            });

            return response()->json(['message' => 'User Adoption Sponsorship created successfully', 'data' => $userAdoptionSponsorship], 201);
        } catch (\Illuminate\Database\QueryException $e) {
            // Captura la excepción de duplicado de correo electrónico
            if ($e->errorInfo[1] == 1062) {
                return response()->json(['message' => 'El correo electrónico ya está registrado.'], 409);
            }
            return response()->json(['message' => $e->getMessage()], 500);
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
            'email' => 'required|string|email|max:255|unique:users,email',
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

    public function loginUsers(Request $request)
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

            // $user = $request->user();

            // Obtener el usuario autenticado
            $user = Auth::user();

            // Verificar si el usuario tiene el estado correcto
            if ($user->type != 2 || $user->low != 1) {
                Auth::logout(); // Cerrar la sesión del usuario
                return response()->json(['message' => 'No tiene permiso para iniciar sesión.'], 403);
            }

            $token = $user->createToken('token')->plainTextToken;

            return response()->json(['token' => $token], 201);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 422);
        }
    }
}
