    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
        <form action="{{ route('front.fb') }}" method="POST">
            @csrf
            <div class="class="form-group"">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
            </div>
            <button type="submit" class="btn btn-default">Submit</button>
        </form>
    </body>
    </html>
