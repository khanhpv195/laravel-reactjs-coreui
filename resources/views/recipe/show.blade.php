@extends('layouts.master')
@section('content')
    <article class="content_text">
        <h4 class="title">{{ $recipe->title }}</h4>
        <p class="chapter">Ăn sáng</p>
        <p>
            <img class="img-fluid" src="{{URL::to('/')}}/{{ $recipe->images }}" alt=""/>
        </p>
        <p>{{ $recipe->description }}.</p>
          <iframe  style="width:100%;height:350px" src="{{ $recipe->url_video }}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p>{{ $recipe->content }}.</p>


        <a href="/"><img style="width:90px; margin-top:2%;clear:both" src="http://218.234.17.80:8000/img/button_03.png"></a>
    </article>

@endsection
