<?php

namespace App\Http\Controllers;
use Symfony\Component\HttpFoundation\Session\Session;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{

    public  function getInfo($id)
    {
        $data = User::find($id);
        return $data;
    }

    public function update(Request $request, $id)
    {

        $validator = Validator::make(
            $request->all(),
            [
                'name' => 'required|string',
                'email' => 'email|required|unique:users',
                'password' => 'required|min:8',
                'phone' => 'required|min:10|max:10',
                'image' => 'max:5048|required',
            ]
        );

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()->all()]);
        }

        $user = User::find($id);
        $user->name = $request->name;
        $user->email = $request->email;
        $user->phone = $request->phone;
        // $user->image = $request->image;
        if($request->hasFile('image')){
            $image = $request->file('image');
            $filename = time().'.'.$image->getClientOriginalExtension();
            $destinationPath = public_path('/img');
            $image->move($destinationPath, $filename);
            $user->image = $filename;
        }
        $user->password = Hash::make($request->password);

        $user->save();
    }

    public function registerAPI(Request $request)
    {
        $validator = Validator::make(
            $request->all(),
            [
                'name' => 'required|string',
                'email' => 'email|required|unique:users',
                'password' => 'required|min:8',
                'phone' => 'required|min:10|max:10',
                'image' => 'required|max:5048',
            ]

        );

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()->all()]);
        }
        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->phone = $request->phone;
        $user->image = $request->image;
        $user->password = Hash::make($request->input('password'));
        $user->save();
        return response($user, 201);
    }

    public function loginAPI(Request $request)
    {

        $validator = Validator::make(
            $request->all(),
            [
                'email' => 'email|required',
                'password' => 'required|min:8',
            ]
        );

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()->all()]);
        }

        $user = User::where('email', $request->input('email'))->first();

        if (!$user || !Hash::check($request->input('password'), $user->password)) {
            return response()->json([
                'errors' => ['Email or Password is incorrect']
            ]);
        }
        return response($user, 201);
    }

    public function getUser($id)
    {
        $user = User::find($id);
        return $user;
    }

    public function getAllUsers()
    {
        $users = User::all();
        return $users;
    }
<<<<<<< HEAD
}
=======
    

    public function Users()
    {
        $users = User::all();
        return $users;
    }


    public function destroy($user)
    {
        $app=User::find($user);
         $app->delete();
         return redirect()->back()->with('success','Application has been ignored');
    }
}
>>>>>>> 0f0abf2de664f9f722949d933fa79c6e5c4ac064