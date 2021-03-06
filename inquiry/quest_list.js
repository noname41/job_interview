var data = '[{' +
  '"text": "Что вы понимаете под Базой данных:",' +
  '"id": "1",' +
  '"type": "radio",' +
  '"options": [' +
  '  "специальным образом организованная и хранящаяся на внешнем носителе совокупность взаимосвязанных данных о некотором объекте;",' +
  '  "произвольный набор информации;",' +
  '  "совокупность программ для хранения и обработки больших массивов информации;",' +
  '  "интерфейс, поддерживающий наполнение и манипулирование данными;",' +
  '  "компьютерная программа, позволяющая в некоторой предметной области делать выводы, сопоставимые с выводами человека-эксперта." ' +
  ']' +
  '},' +
  '{' +
  ' "text": "Система управления базами данных представляет собой программный продукт, входящий в состав:",' +
  ' "id": "2",' +
  ' "type": "radio",' +
  ' "options": [' +
  '   "прикладного программного обеспечения;",' +
  '   "операционной системы;",' +
  '   "уникального программного обеспечения;",' +
  '   "системного программного обеспечения;",' +
  '   "систем программирования."' +
  ' ]' +
  ' },' +
  ' {' +
  '   "text": "Перечислите преимущества централизованного подхода к хранению и управлению данными.",' +
  '   "id": "3",' +
  '   "type": "checkbox",' +
  '   "options": [' +
  '     "возможность общего доступа к данным",' +
  '     "поддержка целостности данных",' +
  '     "соглашение избыточности",' +
  '     "сокращение противоречивости"' +
  '   ]' +
  ' },' +
  ' {' +
  '   "text": "Как называется набор хранимых записей одного типа?",' +
  '   "id": "4",' +
  '   "type": "radio",' +
  '   "options": [' +
  '     "хранимый файл",' +
  '     "представление базы данных",' +
  '     "логическая таблица базы данных",' +
  '     "физическая таблица базы данных",' +
  '     "ничего из вышеперечисленного"' +
  '   ]' +
  ' },' +
  ' {' +
  '   "text": "Какие существуют комманды SQL?",' +
  '   "id": "5",' +
  '   "type": "checkbox",' +
  '   "options": [' +
  '   "DDL",' +
  '   "DCL",' +
  '   "DML",' +
  '   "DTL"' +
  ' ]' +
  ' },' +
  ' {' +
  '   "text": "Какие комманды относят к DDL?",' +
  '   "id": "6",' +
  '   "type": "checkbox",' +
  '   "options": [' +
  '     "INSERT",' +
  '     "COMMIT",' +
  '     "ALTER",' +
  '     "CREATE",' +
  '     "DELETE"' +
  '   ]' +
  ' },' +
  ' {' +
  '   "text": "Дано утверждение: Независимость данных - это возможность изменения логической и физической структуры базы данных без изменения представлений пользователей. Верно ли оно?",' +
  '   "id": "7",' +
  '   "type": "radio",' +
  '   "options": [' +
  '     "Да",' +
  '     "Нет"' +
  '   ]' +
  ' },' +
  ' {' +
  '   "text": "Вставьте понятие Тип обьекта в нужный пропуск",' +
  '   "id": "8",' +
  '   "type": "radio",' +
  '   "options": [' +
  '     "____ может быть чем угодно, будь то место, класс или объект, который существует в реальном мире независимо.",' +
  '     "____ представляет собой набор сущностей, имеющих похожие атрибуты.",' +
  '     "____ в базе данных представляет определенный тип объектов."' +
  '   ]' +
  ' },' +
  ' {' +
  '   "text": "Сколько поддерживается курсоров в PL/SQL?",' +
  '   "id": "9",' +
  '   "type": "radio",' +
  '   "options": [' +
  '     "1",' +
  '     "2",' +
  '     "3",' +
  '     "4"' +
  '   ]' +
  ' },' +
  ' {' +
  '   "text": "Что вернет SQL-запрос с использованием CROSS JOIN?",' +
  '   "id": "10",' +
  '   "type": "radio",' +
  '   "options": [' +
  '     "Этот запрос SQL возвращает результат из обеих таблиц, имеющих общее значение в строках.",' +
  '     "Этот запрос возвращает все записи, где каждая строка из первой таблицы объединяется с каждой строкой второй таблицы.",' +
  '     "Этот запрос возвращает комбинированный результат LEFT JOIN и RIGHT JOIN"' +
  '   ]' +
  ' }' +
  ' ]'

function getData() {
  return this.data;
}