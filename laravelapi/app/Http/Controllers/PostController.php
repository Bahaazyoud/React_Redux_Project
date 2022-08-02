<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Post;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public  function PostAPI()
    {
        $posts = Post::all();
        return $posts;
    }

    public function single_post($id)
    {
        $single_post= Post::find($id);
        return $single_post;
    }






    public function index()
    {
        return Post::all();

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StorePostRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate(['image'=>'mimes:jpg,png|image' ]);
        $post= new Post();
        $post->content=$request->content;
        $post->image=$request->image;
        $post->user_id=$request->user_id;
        if($request->hasfile('image')){
            $file=$request->file('image');
            $ex=$file->getClientOriginalExtension();
            $filename=time().'.'.$ex;
            $file->move('uploads/',$filename);
            $post->image=$filename;
        }
        $post->save();
         return redirect("http://localhost:3004/");
    }
    public function join(Request $request)
    {
        $postInfo= DB::table('users')
        ->join('posts', 'users.id', '=', 'posts.user_id')->get();
        return $postInfo;
    }
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function userProfile()
    {
        $userPost= DB::table('users')
        ->join('posts', 'users.id', '=', 'posts.user_id')->where('user_id',1)->get();
        return $userPost;
    }
    public function show(Post $post)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatePostRequest  $request
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatePostRequest $request, Post $post)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function Posts()
    {
        $posts = Post::all();
        return $posts;
    }


    public function destroy($post)
    {
        $app=Post::find($post);
         $app->delete();
         return redirect()->back()->with('success','Post has been ignored');
    }
}