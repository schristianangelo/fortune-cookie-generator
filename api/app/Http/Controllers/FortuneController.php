<?php

namespace App\Http\Controllers;
use App\Models\Quote;
use Illuminate\Http\Request;

class FortuneController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function view() {
        $minCount = 1;
        $maxCount = Quote::all()->count();
        $id = rand($minCount, $maxCount);
        $Quote = Quote::find($id);
        return $Quote;
    }

    public function update($id, Request $request) {
        $Quote = Quote::findOrFail($id);
        $Quote->description = $request->description;
        $Quote->save();
        return "Updated";
    }

    //
}
