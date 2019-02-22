var fileInput = document.getElementById("csv");

readFile = function () {
  var reader = new FileReader();
  reader.onload = function () {

    console.log(reader.result);
    var str = reader.result;
    var rows = str.split("\n");
    var titles = rows[0].split(",");

    console.log(titles.length);
    var i;

    //build table header
    var table = document.createElement("TABLE");
    table.classList.add("table");
    // table.classList.add("table-striped");
    var thead = document.createElement("THEAD");
    var tr = document.createElement("TR");
    for (i = 3; i < titles.length; i++) {
      var th = document.createElement("TH");
      var t = document.createTextNode(titles[i]);
      th.appendChild(t);
      tr.appendChild(th);
    }
    thead.appendChild(tr);
    table.appendChild(thead);

    //build talbe body
    var tbody = document.createElement("TBODY");
    for (i = 1; i < rows.length; i++) {
        var body_tr = document.createElement("TR");
        var content = rows[i].split(",");

        var j;
        for (j = 3; j < content.length; j++) {
          var body_th = document.createElement("TD");
          var body_t = document.createTextNode(content[j]);
          body_th.appendChild(body_t);
          body_tr.appendChild(body_th);
        }

        tbody.appendChild(body_tr);
        table.appendChild(tbody);
    }

    // document.body.appendChild(table);

    var element = document.getElementById("table");
    element.appendChild(table);
  };

  reader.readAsBinaryString(fileInput.files[0]);
};

fileInput.addEventListener('change', readFile);
