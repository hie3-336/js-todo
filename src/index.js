const onClickAdd = () => {
  // テキストボックスの値を取得して初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIncompleteList(inputText);
};

// targetの親要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

const createIncompleteList = (text) => { 
  // trタグ作成
  const tr = document.createElement("tr");

  // 完了チェックボックス
  const checkboxTd = document.createElement("td");
  checkboxTd.className = "w-25";
  const completeCheckbox = document.createElement('input');
  completeCheckbox.setAttribute('type','checkbox');
  checkboxTd.appendChild(completeCheckbox);

  // タスクテキスト
  const textTd = document.createElement("td");
  textTd.innerText = text;

  const buttonsTd = document.createElement("td");

  // 編集ボタン
  const editButton = document.createElement("button");
  editButton.className = "btn btn-primary";
  editButton.innerText = "編集";
  const editForm = document.createElement("input");
  editForm.setAttribute('value',text);

  // 編集完了ボタン
  const editCompButton = document.createElement("button");
  editCompButton.className = "btn btn-primary";
  editCompButton.innerText = "完了";

  //編集ボタンを押した時の処理
  editButton.addEventListener("click", () => {
    textTd.innerText = "";
    textTd.appendChild(editForm);
    buttonsTd.appendChild(editCompButton);
    editButton.style.display = "none";
    deleteButton.style.display = "none";
  });

  // 編集完了ボタンを押した時の処理
  editCompButton.addEventListener("click", () => {
    textTd.removeChild(editForm);
    textTd.innerText = editForm.value;
    buttonsTd.removeChild(editCompButton);
    editButton.style.display = "block";
    deleteButton.style.display = "block";
  });

  // 削除ボタン作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.className = "btn btn-danger ms-2";
  buttonsTd.className = "d-flex justify-content-end";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(buttonsTd.parentNode);
  });

  // tdタグの下に編集・削除ボタンを配置
  buttonsTd.appendChild(editButton);
  buttonsTd.appendChild(deleteButton);

  // trタグの下にtdタグを配置
  tr.appendChild(checkboxTd);
  tr.appendChild(textTd);
  tr.appendChild(buttonsTd);

  // todoリストを配置
  document.getElementById("incomplete-list").appendChild(tr);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
