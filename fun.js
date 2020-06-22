class Form {
  static addEle(item) {
    if (item.classList.contains("add-new")) {
      const div = document.createElement("div");
      div.innerHTML = `
        <input />
        <input type="submit" value="Add" class="add-new" />
        <input type="submit" value="Remove" class="remove" />
        <br />
        <br />
         `;
      item.parentElement.insertAdjacentElement("afterend", div);
    }
  }

  static removeEle(item) {
    if (item.classList.contains("remove")) {
      item.parentElement.remove();
    }
  }
}

document.querySelector("#section").addEventListener("click", (e) => {
  e.preventDefault();

  Form.addEle(e.target);
});

document.querySelector("#section").addEventListener("click", (e) => {
  Form.removeEle(e.target);
});
