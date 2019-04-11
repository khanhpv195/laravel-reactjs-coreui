
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="description" content="Công thức nấu ăn, cách làm món ăn ngon mỗi ngày. Với hơn hàng ngàn món ăn ngon, cách làm chi tiết được chia sẻ từ cộng đồng những người yêu thích nấu ăn" />
    <meta name="keywords" content="công thức, món ăn, món ngon, làm bánh, cách làm bánh, công thức nấu ăn, món ngon mỗi ngày, cách làm món ngon, hướng dẫn nấu ăn" />
    <link rel="icon" href="images/favicon-96x96.png" />
    <link rel="stylesheet" href="{{ asset('css/bootstrap.min.css') }}">
    <link href="{{ asset('css/style.css') }}" rel="stylesheet">
    <script
  src="https://code.jquery.com/jquery-3.3.1.js"
  integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
  crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css">
    <title>Recipe Hub</title>

</head>

<body>


    <div class="container-fuild">
        <header class="nav header bg">
            <nav class="navbar navbar-light content">
                <img src="http://218.234.17.80:8000/img/law-cut-icon_03.png">
                <a class="navbar-brand" href="/">RECIPE</a>

            </nav>
        </header>
        <div class="container-fuild content">
            <div class="row" style="margin-top:1%">
                <div class="col-md-9 col-xs-12 col-sm-12">
                       <div class="row">
                        <div class="col-md-12" style="padding-right:3.1%;">
                            <form action="#" method="POST">
                                <input type="hidden" name="_token" value="mX8P3BfLpsPWEmm1JHMj190w6jjobHH26equr94g">                                <div class="input-group">
                                    <input type="text" class="form-control search" name="txtSearch" id="autocomplete" required/>
                                    <button type="submit" class=" btn-success"><i class="fa fa-search"></i></button>
                                </div>
                            </form>
                        </div>
                       </div>
                        <br>
                        <div class="row">
                            <div class="col-md-12">
                                <div id="idterm1" class="img-top col-md-2 col-xs-12 col-sm-12" style="margin-right:4%;">
                                   <a href="#" class="imgg" > <img style="width:99px;height:100px" src="{{ asset('images/breakfast.png') }}" alt=""></a>
                                    <a href="#"   class="active_not">Breakfast</a>
                                </div>
                                <div id="idterm2" class="img-top col-md-2 col-xs-12 col-sm-12" style="margin-right:4%;">
                                    <a href="#"  class="imgg"><img style="width:99px;height:100px" src="{{ asset('images/popcorn.png') }}" alt="" ></a>
                                    <a  href="#"  class="active_not">Popcorn</a>
                                </div>
                                <div id="idterm3" class="img-top col-md-2 col-xs-12 col-sm-12" style="margin-right:4%;">
                                  <a href="#"  class="imgg"><img style="width:99px;height:100px" src="{{ asset('images/maincourse.png') }}" ></a>
                                    <a href="#"  class="active_not" href="#">Main Course</a>
                                </div>
                                <div id="idterm4" class="img-top col-md-2 col-xs-12 col-sm-12" style="margin-right: 3%;">
                                   <a href="#"  class="imgg"><img style="width:99px;height:100px" src="{{ asset('images/dessert.png') }}"></a>
                                    <a href="#"  class="active_not" href="#">Dessert<a>
                                </div>
                                <div id="idterm5" class="img-top col-md-2 col-xs-12 col-sm-12" style="margin-rigth:0%;">
                                    <a href="#" class="imgg"><img  style="width:99px;height:100px" src="{{ asset('images/vegetable.png') }}" alt=""></a>
                                    <a href="#"  class="active_not" href="#">Vegetables</a></a>
                                </div>
                            </div>

                        </div>
                        <br>
                        <div class="row">
                                <div class="col-md-12 col-xs-12 col-sm-12" style="padding-right: 3%;">
                                    @yield('content')

                                </div>
                             </div>
                </div>
                <div class="col-md-3 col-xs-12 col-sm-12">
                        <ul class="list-group" style="margin-top:1%;" id="list-search">
                                <li id="list" class="list-group-item disabled"><strong>Famous Searches</strong></li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">Kottu</li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">Fried Rice</li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">Mango Juice</li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">Burger</li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">Nasigurang</li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">Mix Rice</li>
                            </ul>
                            <br>
                    <img data-src="holder.js/200x200" src="{{ asset('images/cooky-recipe-636799168377709209.jpg') }}" data-holder-rendered="true" class="banner1">
                    <img data-src="holder.js/200x200" src="{{ asset('images/cooky-recipe-cover-r42705.jpg') }}" data-holder-rendered="true" class="banner2">

                </div>

            </div>
        </div>

        <footer>
            <div class="footer-copyright text-center py-3">© 2018 Copyright:
                <a href="#"> Black</a>
            </div>
        </footer>
        <script>


        </script>
    </div>
</body>

</html>
