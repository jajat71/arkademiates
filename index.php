<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <title>Kelola Programmer Baru</title>
</head>

<body>
    <div class="container">

        <div class="text-center">
            <h5>Kelola Programmer Baru</h5></div>

        <div class="row" style="margin-top:20px">
            <div class="col-lg-12 col-md-12">
                <div class="card">
                    <div class="card-header">
                        Tambah Programmer Baru
                    </div>
                    <div class="card-body">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" id="name">
                            <div class="input-group-append">
                                <button type="button" class="btn btn-primary" onclick="simpanData()" type="button">Simpan Data</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="areaSkils">

        </div>

    </div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script type="text/javascript" src="script/main.js"></script>
    <script type="text/javascript">
        $(function() {
            loadData();
        })
    </script>
</body>

</html>