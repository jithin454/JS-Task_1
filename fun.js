class Form {
  static addElement(item) {
    if (item.classList.contains("add-new")) {
      const div = document.createElement("div");
      div.innerHTML = `
        <input type="text" value="input" />
        <input type="submit" value="Add" class="add-new" />
        <input type="submit" value="Remove" class="remove" />
        <br />
        <br />
         `;
      item.parentElement.insertAdjacentElement("afterend", div);
    }
  }

  static removeElement(item) {
    if (item.classList.contains("remove")) {
      item.parentElement.remove();
    }
  }
}

document.querySelector("#section").addEventListener("click", (e) => {
  e.preventDefault();

  Form.addElement(e.target);
});

document.querySelector("#section").addEventListener("click", (e) => {
  Form.removeElement(e.target);
});
