let todoItemCount = 0;
let completeItemCount = 0;

// タスク入力処理
const onClickAdd = () => {
  const inputText = document.getElementById("js-add-text").value;
  document.getElementById("js-add-text").value = "";
  createIncompleteList(inputText);
};

// タスク削除処理
const deleteFromIncompleteList = (target) => {
  document.getElementById("js-todo-list").removeChild(target);
};

// タスク数更新処理
const updateTaskCount = () => {
  document.getElementById("js-todo-count").textContent = todoItemCount;
  document.getElementById("js-complete-count").textContent = completeItemCount;
  document.getElementById("js-incomplete-count").textContent = todoItemCount - completeItemCount;
}

const createIncompleteList = (text) => { 
  // trタグ作成
  const tr = document.createElement("tr");

  // 完了チェックボックス
  const checkboxTd = document.createElement("td");
  checkboxTd.className = "w-25";
  const completeCheckbox = document.createElement('input');
  completeCheckbox.setAttribute('type','checkbox');
  checkboxTd.appendChild(completeCheckbox);

  // タスク完了をチェックした時の処理
  completeCheckbox.addEventListener("change", () => {
    if (completeCheckbox.checked){
      completeItemCount++;
    } else {
      completeItemCount--;
    }
    updateTaskCount();
  })

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
    todoItemCount--;
    if (completeCheckbox.checked){
      completeItemCount--;
    } 
    updateTaskCount();
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
  document.getElementById("js-todo-list").appendChild(tr);

  todoItemCount++;
  updateTaskCount();
};

document
  .getElementById("js-add-button")
  .addEventListener("click", () => onClickAdd());
