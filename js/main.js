import "./style.css";

function codedString(str) {
  let coded = "";
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    // Если символ равен следующему
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      // Если символ повторяется, добавляем количество и символ
      if (count > 1) {
        coded += count + str[i];
        // coded = coded + (count + str[i]);
      } else {
        // Если не повторяется, добавляем только символ
        coded += str[i];
      }
      count = 1; // Сброс
    }
  }
  return coded;
}

document.getElementById("encodeButton").addEventListener("click", function () {
  const input = document.getElementById("text_enter").value;
  const result = codedString(input);
  document.getElementById("result").textContent = result;
});

document.getElementById("copyBTN").addEventListener("click", function () {
  const textResult = document.getElementById("result").textContent;
  if (textResult) {
    navigator.clipboard.writeText(textResult).then(() => {
      alert("Результат скопирован в буфер обмена");
    });
  } else {
    alert("Сначала закодируйте строку!");
  }
});
