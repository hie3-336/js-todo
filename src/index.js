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

  // 編集ボタン
  const editButton = document.createElement("button");
  editButton.className = "btn btn-primary";
  editButton.innerText = "編集";
  editButton.addEventListener("click", () => {
    //編集ボタンを押した時の処理

  });
  // 削除ボタン作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.className = "btn btn-danger ms-2";

  const buttonsTd = document.createElement("td");
  buttonsTd.className = "d-flex justify-content-end";
  buttonsTd.appendChild(editButton);
  buttonsTd.appendChild(deleteButton);
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(buttonsTd.parentNode);
  });

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
