var js_data = JSON.parse(getData());
var i = 0;

function divInit() {
  //console.log(i);
  var div1 = document.createElement('div');
  document.getElementById("answers").innerHTML = "";

  var type;
  if (i < js_data.length) {
    type = js_data[i].type;

    js_data[i].options.forEach(
      function(item, j) {
        var label = document.createElement('label');
        var input = document.createElement("input");
        var span = document.createElement('span');
        if (type == "checkbox")
          span.className = "checkmark";
        else {
          span.className = "radiomark";
        }
        input.name = "chck";
        input.type = type;
        input.value = j;
        input.setAttribute('onclick', 'check()');
        label.className = "answers-ans";
        label.innerHTML = item; //array
        label.appendChild(input);
        label.appendChild(span);
        document.getElementById("answers").appendChild(label);
      });
    document.getElementById("q_text").textContent = "Вопрос " + (i + 1) + ". " + js_data[i].text;
    //  document.getElementById("answers").innerHTML = div1.outerHTML;
    document.getElementById("btn_next").disabled = true;
    i++;
    if (i == js_data.length) {
      var btn = "<input id='btn_check' type='button' value='Закончить опрос' onclick='endInq();'></input>";
      document.getElementById("btn_next").value = "Закончить опрос";
      document.getElementById("btn_next").setAttribute('onclick', 'endInq()');
      //document.getElementById("btn_next").id = "btn_check";


    };
  }
}

function check() {
  var ele = document.getElementsByName('chck');
  var flag = 0;
  for (var i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      console.log(i + 1);
      flag = 1;
    }
  }
  if (flag == 1)
    document.getElementById("btn_next").disabled = false;
  else
    document.getElementById("btn_next").disabled = true;
}


function startInq() {
  document.getElementById("div-btn").remove();

  var div2 = " <div id='task'>" +
    "  <div id='quest'>" +
    "    <p><span id='q_text'></span>" +
    "    <div id='answers'></div>" +
    "</div>" +
    "   <input id='btn_next' type='button' disabled = true;  value='Следующий вопрос' onclick='divInit();'></input>" +
    "  </div> ";
  document.getElementById("main").innerHTML = div2;
  divInit();
}

function endInq() {
  //происходит проверка или тип того
  document.getElementById("main").innerHTML = "<span id='bb_phrase'><b> Спасибо за прохождение опроса</b> </span>";
}
//проверку на последний вопрос - кнопку поменять на "Проверить"
//обновляем содержимое div'a другими элементами p (вопрос и варианты)