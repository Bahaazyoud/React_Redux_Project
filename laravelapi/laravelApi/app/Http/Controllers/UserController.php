<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
class UserController extends Controller
{
    public  function getInfo($id)
    {

        $data = User::find($id);
                return $data;
    }

    public function update(Request $request,$id)
    {


        $user=User::find($id);


    $user->name=$request->name;
    $user->email=$request->email;
    $user->age=$request->age;
    $user->address=$request->address;
    $user->phone=$request->phone;

    $user->save();
}


    public function registerAPI(Request $request)
    {

        $validator = Validator::make(
            $request->all(),
            [
                'name' => 'required|string',
                'email' => 'email|required|unique:users',
                'pass' => 'required|min:8',
                'phone' => 'required|min:10|max:10',
            ]
        );

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()->all()]);
        }

        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->phone = $request->phone;
        $user->password = Hash::make($request->input('pass'));
        $user->save();

        return response($user, 201);
    }

    public function loginAPI(Request $request)
    {


        $validator = Validator::make(
            $request->all(),
            [
                'email' => 'email|required',
                'pass' => 'required|min:8',
            ]
        );

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()->all()]);
        }

        $user = User::where('email', $request->input('email'))->first();

        if (!$user || !Hash::check($request->input('pass'), $user->password)) {
            return response()->json([
                'errors' => ['Email or Password is incorrect']
            ]);
        }
        return response($user, 201);
    }
//git user
    public function getUser($id)
    {
        $user = User::find($id);
        return $user;
    }

}
