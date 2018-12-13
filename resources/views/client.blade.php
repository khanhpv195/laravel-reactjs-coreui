@extends('layouts.master')
@section('content')
<div id="iterm">

 </div>
 <script>
    var arr = [];
    $.ajax({
        url: "http://127.0.0.1:8000/api/recipe",
        type: "get",
        dateType: "text",
        success: function(JsonResult) {
            var htmlResult = "";
            Object.keys(JsonResult).forEach(function(key) {
                var title = JsonResult[key].title;
                var description = JsonResult[key].description;
                var img = JsonResult[key].images;
                htmlResult += "<ul class='list-unstyled'><li class='media'> <img class='mr-3 img-thumbnail' src='"+img+"'><div class='media-body'> <h5 class='mt-0 mb-1'><a href=''>"+title+"</a></h5> <p>"+description+"<p></p></li></div></ul>"

            })
            $("#iterm").append(htmlResult);
        }
    });
 </script>
@endsection
