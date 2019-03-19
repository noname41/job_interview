var js_data = JSON.parse(getData());
var i = 0;

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


function divInit() {
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
    document.getElementById("btn_next").disabled = true;
    i++;
    if (i == js_data.length) {
      var btn = "<input id='btn_check' type='button' value='Закончить опрос' onclick='endInq();'></input>";
      document.getElementById("btn_next").value = "Закончить опрос";
      document.getElementById("btn_next").setAttribute('onclick', 'endInq()');
    };
  }
}

function endInq() {
  //происходит проверка или тип того
  document.getElementById("main").innerHTML = "<span id='bb_phrase'><b> Спасибо за прохождение опроса</b> </span>";
}



//validation

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

function validateInfo() {
  var inputs = document.querySelectorAll('input:not([type="submit"])');
  var submit = document.querySelector('input[type="submit"]');
  re = new RegExp(inputs[0].getAttribute("pattern"));

  re1 = new RegExp(submit.getAttribute("pattern"));

  if (re.test(inputs[0].value))
    inputs[0].setCustomValidity('');
  else
    inputs[0].setCustomValidity('Only A-Z, a-z letters');


  if (re.test(inputs[1].value)) inputs[1].setCustomValidity('');
  else
    inputs[1].setCustomValidity('Only A-Z, a-z letters');


  if (re1.test(submit.value)) submit.setCustomValidity('');
  else
    submit.setCustomValidity('Адрес электронной почты неполный.');
}