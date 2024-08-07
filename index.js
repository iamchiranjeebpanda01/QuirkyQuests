document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  root.setAttribute("class", "ms-5 mt-5 me-5 mb-5");

  const heading = document.createElement("h1");
  heading.innerText = "Welcome to QuirkyQuests! 🎉";

  const description = document.createElement("div");
  description.setAttribute("class", "lead mt-4");
  description.innerText =
    "Tired of boring to-do lists? Let QuirkyQuests turn your daily grind into a series of fun and adventurous quests! Whether it's slaying the laundry dragon or conquering the mountain of emails, we've got you covered. Get ready to tackle your tasks with a smile and a sense of adventure. Let's make productivity fun again!";

  root.appendChild(heading);
  root.appendChild(description);

  const createQuest = document.createElement("div");
  createQuest.setAttribute("class", "mt-4 h5");
  createQuest.innerText =
    "Embark on your next adventure! 🌟🗺️ Add your quest below:";
  root.appendChild(createQuest);

  const createQuestForm = document.createElement("form");
  createQuestForm.innerHTML = `<div class="form-floating mb-2">
    <input type="text" class="form-control" id="questName">
    <label for="questName">New Quest &#128481;</label>
</div>
<button type="button" class="btn btn-danger btn-sm" id="createButton">Create Quest&#128521;</button>`;
  root.appendChild(createQuestForm);

  const questList = [];
  const questListDiv = document.createElement("div");
  questListDiv.setAttribute("class", "mt-5");

  const renderList = () => {
    questListDiv.innerHTML = "";

    questList.map((item, index) => {
      const itemDiv = document.createElement("div");
      itemDiv.setAttribute("key", index);
      itemDiv.setAttribute("class", "mb-3 h5");

      if (item.isComplete) {
        itemDiv.innerHTML = `🏳 <span id="quest${index}" class="text-decoration-line-through">${item.name}</span>`;
      } else {
        itemDiv.innerHTML = `🗡 <span id="quest${index}">${item.name}</span>`;
      }

      itemDiv.addEventListener("mouseover", () => {
        itemDiv.style.cursor = "pointer";
      });

      itemDiv.addEventListener("click", () => {
        questList.forEach((quest) => {
          if (quest.name === item.name) {
            quest.isComplete = !item.isComplete;
          }
        });

        renderList();
      });

      questListDiv.appendChild(itemDiv);
    });

    root.appendChild(questListDiv);
  };

  const createButton = document.getElementById("createButton");

  createButton.addEventListener("click", () => {
    const inputElement = document.getElementById("questName");
    if (inputElement.value.trim().length !== 0) {
      questList.push({
        name: inputElement.value,
        isComplete: false,
      });
      inputElement.value = "";
    }
    renderList();
  });

  renderList();
});
