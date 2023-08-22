//
//
// Параметры таблицы
//
//

const filterList = document.querySelector(".filterlist");
const table = document.querySelector(".table2");
const innerTable = table.lastElementChild;
const cols = [...innerTable.children];
const cells = [...innerTable.querySelectorAll("[data-value]")];
const categories = [...innerTable.children[0].querySelectorAll("ul")].map(
  (item) => item.classList[0]
);
const alwaysOnValues = [
  "range_ground",
  "range_helicopters",
  "range_airplanes",
  "stabilizer",
  "ap_power",
  "he_power",
];

function getValues(category, property) {
  return [
    ...innerTable.querySelectorAll(
      `ul.${category} [data-property="${property}"]`
      // `li:not([style="display: none;"]) ul.${category} [data-property="${property}"]`
    ),
  ].map((item) => item.dataset.value);
}

function getCategoryValues(category) {
  return [
    ...innerTable.querySelectorAll(
      `li:not([style="display: none;"]) ul.${category} [data-property]`
    ),
  ].map((item) => item.dataset.value);
}

function getPropertyLabel(category, property) {
  return table.querySelector(
    `ul.${category} [data-property="${property}"] button`
  ).innerText;
}

function getValueLabel(category, property, value) {
  return innerTable.querySelector(
    `ul.${category} [data-property="${property}"][data-value="${value}"]`
  ).innerText;
}

function getCategoryIndex(category) {
  return [...cols[0].children].indexOf(cols[0].querySelector(`ul.${category}`));
}

function getPropertyIndex(category, property) {
  const categoryIndex = getCategoryIndex(category);
  return [...cols[0].children[categoryIndex].children].indexOf(
    cols[0].children[categoryIndex].querySelector(`[data-property=${property}]`)
  );
}

// function getValueLabels(category, property) {
//   return [
//     ...innerTable.querySelectorAll(
//       `li:not([style="display: none;"]) ul.${category} [data-property=${property}]`
//     ),
//   ].map((item) => item.innerText);
// }
// [...innerTable.querySelectorAll(`li:not(style="display: none;") ul.${category} [data-property=${property}]`)]
// [...innerTable.querySelectorAll(`ul.info [data-property="year"]`)].map((item) => item.innerText)

function hideElements(CSSselector) {
  [...table.querySelectorAll(CSSselector)].forEach(
    (element) => (element.style.display = "none")
  );
}

function showElements(CSSselector) {
  [...table.querySelectorAll(CSSselector)].forEach(
    (element) => (element.style.display = null)
  );
}

//
//
// Скрытие строк и категорий при загрузке
//
//

// // Скрывать строки и категории, где все значения пустые
// categories.forEach((category) => {
//   const properties = [
//     ...innerTable.querySelector(`ul.${category}`).children,
//   ].map((item) => item.dataset.property);

//   properties.forEach((property) => {
//     const values = getValues(category, property);
//     const propertySumm = values.join("");

//     // скрывать ряд, в котором все значения пустые (кроме исключений)
//     if (!alwaysOnValues.includes(property) && !propertySumm.length) {
//       const CSSselector = `ul.${category} [data-property=${property}]`;
//       hideElements(CSSselector);
//     }
//   });

//   // скрывать категорию, в которой все значения пустые
//   const categorySumm = getCategoryValues(category)
//     .filter((item) => item !== "–")
//     .join("");
//   if (!categorySumm.length) {
//     const CSSselector = `.${category}`;
//     hideElements(CSSselector);
//   }
// });

// getCategoryValues("autocannon").filter((item) => item !== "–")

// Cкрывать категорию, в которой все значения пустые
function hideEmptyCategories() {
  categories.forEach((category) => {
    const categorySumm = getCategoryValues(category)
      .filter((item) => item !== "–")
      .join("");
    if (!categorySumm.length) {
      const CSSselector = `.${category}`;
      hideElements(CSSselector);
    }
  });
}

// Скрывать строки и категории, где все значения пустые
function hideEmptyStrings() {
  categories.forEach((category) => {
    const properties = [
      ...innerTable.querySelector(`ul.${category}`).children,
    ].map((item) => item.dataset.property);

    properties.forEach((property) => {
      const values = getValues(category, property);
      const propertySumm = values.filter((item) => item !== "–").join("");

      // скрывать ряд, в котором все значения пустые (кроме исключений)
      if (!alwaysOnValues.includes(property) && !propertySumm.length) {
        const CSSselector = `ul.${category} [data-property=${property}]`;
        hideElements(CSSselector);
      }
    });
  });
}

hideEmptyCategories();
hideEmptyStrings();

function showAllCategories() {
  categories.forEach((category) => {
    const CSSselector = `.${category}`;
    showElements(CSSselector);
  });
}

//
//
// Фильтр
//
//

let filterConditions = [];
// const filterConditions = [
//   ["info", "cost", ["110", "100"]],
//   ["info", "year", ["1985", "1982"]],
// ];

// Открывать и закрывать filterPopup
table.addEventListener("click", ({ target }) => {
  const filterButtons = [...table.querySelectorAll(".filter>button")];
  if (!filterButtons.includes(target)) return;

  const filterPopup = target.nextElementSibling;
  // if (filterPopup.dataset.visible === "false") openFilterPopup(filterPopup);
  if (filterPopup.dataset.visible === "false") openFilterPopup(filterPopup);
  else closeFilterPopup(filterPopup);
});

// Закрывать окно фильтров при клике снаружи
document.addEventListener("click", ({ target }) => {
  const currentOpenedFilter = table.querySelector(
    ".filter form[data-visible=true]"
  );
  if (target.closest(".filter")) return;
  if (currentOpenedFilter && !currentOpenedFilter.contains(target))
    closeFilterPopup(currentOpenedFilter);
});

table.addEventListener("submit", (event) => {
  event.preventDefault();
  const filterPopup = event.target;
  const filterButton = filterPopup
    .closest(".filter")
    .querySelector(".filter>button");
  const tablePropertyRow = filterPopup.closest("[data-property]");
  const category = tablePropertyRow.closest("ul").classList[0];
  const property = tablePropertyRow.dataset.property;
  const availableCheckboxes = [
    ...filterPopup.querySelectorAll("[type='checkbox']"),
  ];
  const selectedValues = availableCheckboxes
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);
  const allValues = [...new Set(getValues(category, property))];

  // TODO это понадобится? см. ниже
  // const thisCategoryCondition = filterConditions.filter(
  //   (item) => item[0] == category && item[1] == property
  // );

  // удаляем старое значение, чтобы оно не задваивалось, затем ставим новое
  // TODO можно попроще? это фильтр всего, кроме текущего значения
  filterConditions = filterConditions.filter(
    (item) => item[0] != category || item[1] != property
  );
  // filterConditions = filterConditions.filter(
  //   (item) => item !== thisCategoryCondition
  // );

  if (selectedValues.length < allValues.length) {
    addSelectedConditionsToFilterConditions();
    showFilterButton(filterButton);
  } else hideFilterButton(filterButton);
  applyFilters(filterAllConditions(filterConditions));
  closeFilterPopup(filterPopup);

  function addSelectedConditionsToFilterConditions() {
    filterConditions.push([category, property, selectedValues]);
  }
});

filterList.addEventListener("click", ({ target }) => {
  const buttons = [...filterList.querySelectorAll("button:not(#resetFilters)")];
  const resetFiltersButton = filterList.querySelector("#resetFilters");
  // if (!buttons.includes(target)) return;
  // deleteFilter(target);
  if (buttons.includes(target)) deleteFilter(target);
  else if (target === resetFiltersButton) resetFilters();
  else return;
});

function deleteFilter(targetButton) {
  const category = targetButton.dataset.category;
  const property = targetButton.dataset.property;
  const filterButton = table.querySelector(
    `ul.${category} [data-property="${property}"] .filter>button`
  );

  filterConditions = filterConditions.filter(
    (item) => item[0] != category || item[1] != property
  );

  applyFilters(filterAllConditions(filterConditions));
  hideFilterButton(filterButton);
}

function resetFilters() {
  cols.forEach((col) => (col.style.display = null));
  filterConditions = [];
  hideAllFilterButtons();
  showAllCategories();
  hideEmptyCategories();
  addFilterChips();
}

function openFilterPopup(filterPopup) {
  // Закрыть текущее окно
  const currentOpenedFilter = table.querySelector(
    ".filter form[data-visible=true]"
  );
  if (currentOpenedFilter) closeFilterPopup(currentOpenedFilter);
  const filterButton = filterPopup
    .closest(".filter")
    .querySelector(".filter>button");
  filterPopup.innerHTML = getFilterPopupTemplate(filterPopup);
  filterPopup.dataset.visible = true;

  const popupHeight = filterPopup.getBoundingClientRect().height;
  const availableSpace = Math.abs(
    filterButton.getBoundingClientRect().bottom -
      table.getBoundingClientRect().bottom
  );
  if (availableSpace < popupHeight) {
    filterPopup.style.top = `${availableSpace - popupHeight}px`;
  } else {
    filterPopup.style.top = 0;
  }
}

function closeFilterPopup(filterPopup) {
  filterPopup.dataset.visible = false;
}

function getFilterPopupTemplate(filterPopup) {
  const tablePropertyRow = filterPopup.closest("[data-property]");
  const category = tablePropertyRow.closest("ul").classList[0];
  const property = tablePropertyRow.dataset.property;
  const propertyLabel = tablePropertyRow.querySelector(
    "[data-property]>div>button"
  ).innerHTML;

  const thisCategoryConditions = filterConditions.filter(
    (item) => item[0] == category && item[1] == property
  );
  // TODO может вырезать? но нужно приравнять, иначе найденный не совпадает с фильтром
  const otherConditions = filterConditions.filter(
    (item) => item[0] != category || item[1] != property
  );

  const values = filterAllConditions(otherConditions).map(
    (item) =>
      item.children[getCategoryIndex(category)].children[
        getPropertyIndex(category, property)
      ].dataset.value
  );

  const summValues = values.reduce(
    (summ, value) => ((summ[value] = summ[value] + 1 || 1), summ),
    {}
  );

  const options = Object.entries(summValues)
    .map(([value, summ]) => {
      // TODO вот тут ваще непонятно
      const checked =
        !thisCategoryConditions.length ||
        thisCategoryConditions[0][2].includes(value)
          ? "checked"
          : "";
      const label = getValueLabel(category, property, value);
      return `<label class="w-full"><input type="checkbox" value="${value}" ${checked} onchange="checkButton()" /><p class="flex-grow text-white">${label}</p><span class="text-gray-400">(${summ})</span></label>`;
    })
    .join("");

  return `
    <p class="px-3 py-1.5 border-b border-slate-600 text-lg">${propertyLabel}</p>
    <div class="mr-1.5 pl-3 pr-1.5 flex flex-col gap-1 flex-shrink overflow-y-auto">
      ${options}
    </div>
    <button type="button" class="btn btn-ghost px-3" data-selected="true" onclick="selectAll(this)">Выделить все</button>
    <button type="submit" class="btn btn-primary h-6 py-1.5 rounded-none">Применить</button>
  `;
  // return `
  //   <p class="text-lg">${propertyLabel}</p>
  //   <div class="flex flex-col gap-1 flex-shrink overflow-y-auto">
  //     ${options}
  //   </div>
  //   <button type="button" class="btn btn-ghost" data-selected="true" onclick="selectAll(this)">Выделить все</button>
  //   <button type="submit" class="btn btn-primary">Применить</button>
  // `;
}

function checkButton() {
  const form = table.querySelector(".filter form[data-visible=true]");
  let checkboxes = [...form.querySelectorAll("[type='checkbox']")];
  let activeCheckboxes = checkboxes.filter((checkbox) => checkbox.checked);
  const submitButton = form.querySelector("button[type='submit']");
  submitButton.disabled = !activeCheckboxes.length;
}

//  так фильтруются числовые значения
//   return array.filter((item) => {
//     return (
//       item.children[categoryIndex].children[propertyIndex].dataset.value > value
//     );
//   });

function filter(array, category, property, values) {
  const categoryIndex = getCategoryIndex(category);
  const propertyIndex = getPropertyIndex(category, property);
  return array.filter((item) =>
    values.includes(
      item.children[categoryIndex].children[propertyIndex].dataset.value
    )
  );
}

function filterAllConditions(filterConditions) {
  let filteredItems = cols;

  filterConditions.forEach(
    (condition) =>
      (filteredItems = filter(
        filteredItems,
        condition[0],
        condition[1],
        condition[2]
      ))
  );

  return filteredItems;
}

function applyFilters(filteredItems) {
  cols.forEach((col) => (col.style.display = "none"));
  filteredItems.forEach((item) => (item.style.display = null));
  showAllCategories();
  hideEmptyCategories();
  addFilterChips();
}

function addFilterChips() {
  const chips = filterConditions
    .map((condition) => {
      const category = condition[0];
      const property = condition[1];
      const propertyLabel = getPropertyLabel(category, property);
      const values = condition[2];
      const valueLabels = values
        .map((value) => getValueLabel(category, property, value))
        .join(", ");
      return `
      <button class="chip chip-primary w-fit" data-category=${category} data-property=${property}>${propertyLabel}: ${valueLabels}
        <div class="w-2 h-2 bg-[url('/img/icons/cross_white.svg')] pointer-events-none"
        aria-hidden="true">
      </button>`;
    })
    .join("");

  filterList.innerHTML = getFilterChips();

  function getFilterChips() {
    return `${chips} <button id="resetFilters" class="chip chip-secondary w-fit">Сбросить все фильтры</button>`;
  }
}

// с этим можно тренироваться
// filter(cols, "info", "cost", ["110"]);
// filter(cols, "info", "cost", ["15", "30"]);
// filter(cols, "info", "year", ["1985"])
// filter(filter(cols, "info", "cost", ["110"]), "info", "year", ["1985"])
// applyFilters(filter(cols, "info", "cost", ["15", "30"]));
// на выходе массив, который можно вставить в другое место
// для множественных фильтров фильтр вставляется в аргумент другого фильтра
// applyFilters(filter(filter(cols, "info", "year", ["1985"]), "info", "cost", ["110"]));

function showFilterButton(filterButton) {
  filterButton.dataset.visible = true;
}

function hideFilterButton(filterButton) {
  filterButton.dataset.visible = false;
}

function hideAllFilterButtons() {
  const activeFilterButtons = [
    ...table.querySelectorAll(".filter button[data-visible=true]"),
  ];
  activeFilterButtons.forEach((button) => hideFilterButton(button));
}

function selectAll(button) {
  const form = button.closest("form");
  const checkboxes = form.querySelectorAll("[type='checkbox']");
  const selected = button.dataset.selected == "true";
  if (selected) {
    checkboxes.forEach((checkbox) => (checkbox.checked = false));
    button.dataset.selected = false;
  } else {
    checkboxes.forEach((checkbox) => (checkbox.checked = true));
    button.dataset.selected = true;
  }
  checkButton();
}

//
//
// Работа кнопок сортировки
//
//

table.addEventListener("click", ({ target }) => {
  const sortingButtons = [
    ...table.querySelectorAll(
      "[data-property]>div>button, [data-property]>div>button+div"
    ),
  ];

  if (!sortingButtons.includes(target)) return;

  const tablePropertyRow = target.closest("[data-property]");
  const category = target.closest("ul").classList[0];
  const property = tablePropertyRow.dataset.property;
  const direction = tablePropertyRow.dataset.direction;

  if (!direction) clearSortingDataset();

  if (direction != "descending") {
    changeSortingDirection("descending");
    sortTable(category, property, false);
  } else {
    changeSortingDirection("ascending");
    sortTable(category, property, true);
  }

  function changeSortingDirection(newDirection) {
    tablePropertyRow.dataset.direction = newDirection;
  }

  function clearSortingDataset() {
    const sortingCells = [...table.querySelectorAll("[data-direction]")];
    sortingCells.forEach((cell) => cell.removeAttribute("data-direction"));
  }
});

//
//
// Сортировка таблицы
//
//

function sortTable(category, property, ascending) {
  const categoryIndex = getCategoryIndex(category);
  const propertyIndex = getPropertyIndex(category, property);
  const value =
    cols[0].children[categoryIndex].children[propertyIndex].dataset.value;

  function address(col) {
    return col.children[categoryIndex].children[propertyIndex];
  }

  const sortedData = cols.sort((a, b) => {
    // Сортировка буквенных значений
    if (!isNumber(value)) {
      if (ascending) {
        return (
          (address(a).dataset.value > address(b).dataset.value) -
          (address(a).dataset.value < address(b).dataset.value)
        );
      } else
        return (
          (address(b).dataset.value > address(a).dataset.value) -
          (address(b).dataset.value < address(a).dataset.value)
        );
    }
    // Сортировка цифровых значений
    if (isNumber(value)) {
      if (ascending) {
        return address(a).dataset.value - address(b).dataset.value;
      } else return address(b).dataset.value - address(a).dataset.value;
    }
  });
  innerTable.append(...sortedData);
}

function isNumber(value) {
  return /^\d+$/.test(value);
}
