<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <form action="{{ route('recipe.store') }}" method="POST">
        @csrf
        <form><div class="card"><div class="card-header"><strong>Create Product</strong></div><div class="card-body"><div class="row"><div class="col-12"><div class="position-relative form-group"><label for="name" class="">Title</label><input id="title" placeholder="Enter your title" required="" name="title" type="text" class="form-control" value="Mỹ có thể trả giá vì lạm dụng lệnh cấm vận"></div></div><div class="col-12"><div class="position-relative form-group"><label for="name" class="">Content</label><textarea name="content" id="textarea-input" rows="9" placeholder="Content..." class="form-control">Mỹ có thể trả giá vì lạm dụng lệnh cấm vậnMỹ có thể trả giá vì lạm dụng lệnh cấm vậnMỹ có thể trả giá vì lạm dụng lệnh cấm vận</textarea></div></div><div class="col-12"><div class="position-relative form-group"><label for="name" class="">Description</label><input id="body" placeholder="Enter your description" required="" name="description" type="text" class="form-control" value="Mỹ có thể trả giá vì lạm dụng lệnh cấm vận"></div></div><div class="col-12"><div class="position-relative form-group"><label for="name" class="">Images</label><input id="images" placeholder="Enter your url" required="" name="images" type="text" class="form-control" value="Mỹ có thể trả giá vì lạm dụng lệnh cấm vận"></div></div><div class="col-12"><div class="position-relative form-group"><label for="name" class="">Video</label><input id="url_video" placeholder="Enter your url" required="" name="url_video" type="text" class="form-control" value="Mỹ có thể trả giá vì lạm dụng lệnh cấm vận"></div></div><div class="col-12"><div class="position-relative form-group"><label for="name" class="">User</label><input id="user_id" placeholder="Enter your id" required="" name="user_id" type="number" class="form-control" value="1"></div></div><div class="col-12"><button type="submit" class="btn btn-lg btn-primary">Create</button></div></div></div></div></form>
    </form>
</body>
</html>
