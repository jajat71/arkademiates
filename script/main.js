function simpanData() {
    var name = $("#name").val();

    if (name != "") {
        $.ajax({
            type: 'post',
            url: 'insertUser.php',
            data: {
                name: name
            },
            success: function(res) {
                loadData();
            }
        });

        $("#name").val('');
    } else {
        alert("Nama Belum diisi");
    }

}

function simpanSkill(index) {
    var name = $("#nameSkill" + index).val();
    var id = $("#id" + index).val();

    if (name != "") {
        $.ajax({
            type: 'post',
            url: 'insertSkill.php',
            data: {
                name: name,
                id: id
            },
            success: function(res) {
                loadData();
            }
        });
    } else {
        alert("Nama Belum diisi");
    }

}

function loadData() {
    $.ajax({
        type: 'post',
        url: 'showUser.php',
        success: function(x) {
            var html = '';
            var res = JSON.parse(x);

            for (var i = 0; i < res.length; i++) {
                html += `<div class="row" style="margin-top:20px">
                          <div class="col-lg-12 col-md-12">
                            <div class="card">
                              <div class="card-header">
                                Nama : ` + res[i].name + `
                              </div>
                              <div class="card-body">
                                <div class="row">
                                  <div class="col-lg-7">` + res[i].skills + `</div>
                                  <div class="col-lg-5">
                                    <input type="hidden" readonly class="form-control" id="id` + i + `" disabled value="` + res[i].id + `">
                                    <div class="input-group mb-3">
                                      <input type="text" class="form-control" name='inputSkill' id="nameSkill` + i + `">
                                      <div class="input-group-append">
                                        <button type="button" class="btn btn-success" onclick="simpanSkill(` + i + `)" type="button">Simpan Skil</button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>`;

                $("#areaSkils").html(html);
            }
        }
    });
}