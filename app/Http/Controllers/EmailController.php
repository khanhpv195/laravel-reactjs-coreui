<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Session;
use Illuminate\Http\Request;
use Mail;

class EmailController extends Controller
{
   public function sendMail(Request $request)
   {
    $input = $request->all();
    set_time_limit(0);
    ini_set('max_execution_time', 300);
        Mail::send('email.template', array('email'=>$input["email"]), function($message){
	        $message->to($input["email"], 'Visitor')->subject('Visitor Feedback!');
	    });
        Session::flash('flash_message', 'Send message successfully!');

        return view('email.email');
   }
}
