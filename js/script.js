import {
  companyDetails,
  perfume_Imgs,
  fragranceDetails,
  popularDescription,
  collectionDetails,
  percentageDetails,
  tableData
} from "./dummy_data.js";

const container = document.getElementById("company_details");

container.innerHTML = companyDetails
  .map(
    (item) => `
        <div class="company_item">
            <div>
            <h2 class="company_title">${item.title}</h2>
            <p class="company_description">${item.description}</p>
            </div>
        </div>
    `
  )
  .join("");

// ------------------ Perfume Images Section ------------------

const Perfume_Images = perfume_Imgs.img;
let currentIndex = 0;

const mainImage = document.getElementById("mainImg");
const thumb_Container = document.getElementById("thumb");
const thumb_Containers = document.getElementById("thumbs_two");
const PrevBtn = document.getElementById("prevBtn");
const NextBtn = document.getElementById("nextBtn");
const dots = document.getElementById("dots");

function initGallery() {
  mainImage.src = perfume_Imgs[0].img;

  perfume_Imgs.forEach((item, index) => {
    const thumb = document.createElement("img");
    thumb.src = item.img;
    thumb.className = "thumb" + (index === 0 ? " active" : "");
    thumb.addEventListener("click", () => changeImage(index));
    thumb_Container.appendChild(thumb);

    const thumbs = document.createElement("img");
    thumbs.src = item.img;
    thumbs.className = "thumb" + (index === 0 ? " active" : "");
    thumbs.addEventListener("click", () => changeImage(index));
    thumb_Containers.appendChild(thumbs);

    const dot = document.createElement("span");
    dot.className = "dot" + (index === 0 ? " active" : "");
    dot.addEventListener("click", () => changeImage(index));
    dots.appendChild(dot);
  });
}

function changeImage(index) {
  mainImage.style.opacity = 0;

  setTimeout(() => {
    currentIndex = index;
    mainImage.src = perfume_Imgs[currentIndex].img;
    mainImage.style.opacity = 1;

    document
      .querySelectorAll(".thumb")
      .forEach((el, i) => el.classList.toggle("active", i === currentIndex));
    document
      .querySelectorAll(".dot")
      .forEach((el, i) => el.classList.toggle("active", i === currentIndex));
  }, 100);
}

NextBtn.addEventListener("click", () => {
  const nextIndex = (currentIndex + 1) % perfume_Imgs.length;
  changeImage(nextIndex);
});

PrevBtn.addEventListener("click", () => {
  const prevIndex =
    (currentIndex - 1 + perfume_Imgs.length) % perfume_Imgs.length;
  changeImage(prevIndex);
});

initGallery();

const rating = 4.7;
document.getElementById("fill").style.width = (rating / 5) * 100 + "%";

// --------------Fragrance Section------------------

const fragranceContainers = document.querySelectorAll(".fragrance_List");

fragranceContainers.forEach((fragranceContainer) => {
  fragranceContainer.innerHTML = fragranceDetails
    .map(
      (item) => `
    <div class="fragrance_item">
      <div class="top_row"><div></div>
        ${
          item.bestSeller
            ? '<div class="best_seller">BEST-SELLER</div>'
            : `<div class="seller"></div>`
        }
      </div>
      <div class="radio_row">
        <input type="radio" name="fragrance" ${
          item.bestSeller ? "checked" : ""
        } />
        <span class="List_Text">${item.title}</span>
      </div>
      <img src="${item.img}" alt="${item.title}" class="fragrance_img" />
    </div>
  `
    )
    .join("");
});

const whatsIncludedContainers = document.querySelectorAll(".whats_included");

whatsIncludedContainers.forEach((whatsIncludedContainer) => {
  whatsIncludedContainer.innerHTML = fragranceDetails
    .map(
      (item) => `
    <div class="included_item">
      <img src="${item.img}" alt="${item.title}" class="included_img" />
    </div>
  `
    )
    .join("");
});

// description section

const highlightText = (text) => {
  return text
    .replace(/Free/gi, '<span class="description_bold">Free</span>')
    .replace(
      /50% OFF Shipping/gi,
      '<span class="description_bold">50% OFF Shipping</span>'
    );
};

const descriptionContainers = document.querySelectorAll(".Popular_description");

descriptionContainers.forEach((descriptionContainer) => {
  descriptionContainer.innerHTML = popularDescription
    .map(
      (item) => `
    <div class="description_item">
      <p class="description_text"><span><svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.4767 4.74797C11.2705 4.5325 11.0573 4.31047 10.9769 4.11523C10.9025 3.93641 10.8981 3.64 10.8938 3.35289C10.8855 2.81914 10.8768 2.2143 10.4563 1.79375C10.0357 1.3732 9.43086 1.36445 8.89711 1.35625C8.61 1.35187 8.31359 1.3475 8.13477 1.27312C7.94008 1.19273 7.7175 0.979453 7.50203 0.773281C7.12469 0.410703 6.69594 0 6.125 0C5.55406 0 5.12586 0.410703 4.74797 0.773281C4.5325 0.979453 4.31047 1.19273 4.11523 1.27312C3.9375 1.3475 3.64 1.35187 3.35289 1.35625C2.81914 1.36445 2.2143 1.3732 1.79375 1.79375C1.3732 2.2143 1.36719 2.81914 1.35625 3.35289C1.35187 3.64 1.3475 3.93641 1.27312 4.11523C1.19273 4.30992 0.979453 4.5325 0.773281 4.74797C0.410703 5.12531 0 5.55406 0 6.125C0 6.69594 0.410703 7.12414 0.773281 7.50203C0.979453 7.7175 1.19273 7.93953 1.27312 8.13477C1.3475 8.31359 1.35187 8.61 1.35625 8.89711C1.36445 9.43086 1.3732 10.0357 1.79375 10.4563C2.2143 10.8768 2.81914 10.8855 3.35289 10.8938C3.64 10.8981 3.93641 10.9025 4.11523 10.9769C4.30992 11.0573 4.5325 11.2705 4.74797 11.4767C5.12531 11.8393 5.55406 12.25 6.125 12.25C6.69594 12.25 7.12414 11.8393 7.50203 11.4767C7.7175 11.2705 7.93953 11.0573 8.13477 10.9769C8.31359 10.9025 8.61 10.8981 8.89711 10.8938C9.43086 10.8855 10.0357 10.8768 10.4563 10.4563C10.8768 10.0357 10.8855 9.43086 10.8938 8.89711C10.8981 8.61 10.9025 8.31359 10.9769 8.13477C11.0573 7.94008 11.2705 7.7175 11.4767 7.50203C11.8393 7.12469 12.25 6.69594 12.25 6.125C12.25 5.55406 11.8393 5.12586 11.4767 4.74797ZM10.8451 6.89664C10.5831 7.17008 10.3119 7.45281 10.168 7.80008C10.0302 8.13367 10.0242 8.51484 10.0188 8.88398C10.0133 9.2668 10.0073 9.66766 9.83719 9.83719C9.66711 10.0067 9.26898 10.0133 8.88398 10.0188C8.51484 10.0242 8.13367 10.0302 7.80008 10.168C7.45281 10.3119 7.17008 10.5831 6.89664 10.8451C6.6232 11.107 6.34375 11.375 6.125 11.375C5.90625 11.375 5.62461 11.1059 5.35336 10.8451C5.08211 10.5842 4.79719 10.3119 4.44992 10.168C4.11633 10.0302 3.73516 10.0242 3.36602 10.0188C2.9832 10.0133 2.58234 10.0073 2.41281 9.83719C2.24328 9.66711 2.23672 9.26898 2.23125 8.88398C2.22578 8.51484 2.21977 8.13367 2.08195 7.80008C1.93813 7.45281 1.66687 7.17008 1.40492 6.89664C1.14297 6.6232 0.875 6.34375 0.875 6.125C0.875 5.90625 1.14406 5.62461 1.40492 5.35336C1.66578 5.08211 1.93813 4.79719 2.08195 4.44992C2.21977 4.11633 2.22578 3.73516 2.23125 3.36602C2.23672 2.9832 2.24273 2.58234 2.41281 2.41281C2.58289 2.24328 2.98102 2.23672 3.36602 2.23125C3.73516 2.22578 4.11633 2.21977 4.44992 2.08195C4.79719 1.93813 5.07992 1.66687 5.35336 1.40492C5.6268 1.14297 5.90625 0.875 6.125 0.875C6.34375 0.875 6.62539 1.14406 6.89664 1.40492C7.16789 1.66578 7.45281 1.93813 7.80008 2.08195C8.13367 2.21977 8.51484 2.22578 8.88398 2.23125C9.2668 2.23672 9.66766 2.24273 9.83719 2.41281C10.0067 2.58289 10.0133 2.98102 10.0188 3.36602C10.0242 3.73516 10.0302 4.11633 10.168 4.44992C10.3119 4.79719 10.5831 5.07992 10.8451 5.35336C11.107 5.6268 11.375 5.90625 11.375 6.125C11.375 6.34375 11.1059 6.62539 10.8451 6.89664ZM8.62203 4.50297C8.66271 4.5436 8.69498 4.59185 8.717 4.64496C8.73901 4.69808 8.75034 4.75501 8.75034 4.8125C8.75034 4.86999 8.73901 4.92692 8.717 4.98004C8.69498 5.03315 8.66271 5.0814 8.62203 5.12203L5.55953 8.18453C5.5189 8.22521 5.47065 8.25748 5.41754 8.2795C5.36442 8.30151 5.30749 8.31284 5.25 8.31284C5.19251 8.31284 5.13558 8.30151 5.08246 8.2795C5.02935 8.25748 4.9811 8.22521 4.94047 8.18453L3.62797 6.87203C3.54588 6.78994 3.49976 6.6786 3.49976 6.5625C3.49976 6.4464 3.54588 6.33506 3.62797 6.25297C3.71006 6.17088 3.8214 6.12476 3.9375 6.12476C4.0536 6.12476 4.16494 6.17088 4.24703 6.25297L5.25 7.25648L8.00297 4.50297C8.0436 4.46229 8.09185 4.43002 8.14496 4.40801C8.19808 4.38599 8.25501 4.37466 8.3125 4.37466C8.36999 4.37466 8.42692 4.38599 8.48004 4.40801C8.53315 4.43002 8.5814 4.46229 8.62203 4.50297Z" fill="url(#paint0_linear_17025_275)" fill-opacity="0.6"/>
<defs>
<linearGradient id="paint0_linear_17025_275" x1="6.125" y1="0" x2="6.125" y2="12.25" gradientUnits="userSpaceOnUse">
<stop stop-color="#032E15"/>
<stop offset="1" stop-color="#016630"/>
</linearGradient>
</defs>
</svg>
</span>${highlightText(item)}</p>
    </div>
  `
    )
    .join("");
});

//Colection Section

const collectionContainer = document.getElementById("collection_list");

collectionContainer.innerHTML = collectionDetails
  .map(
    (item, idx) => `
                  <div class="collection_item">
                    <input type="radio" name="collection" id="collection-${idx}" />
                    <div class="subscription-header">
                        <label for="collection-${idx}" class="accordion-title bold_Collection">${item.title}</label>
                        <label class="bold_Collection" for="collection-${idx}">
                          <i class="fa-solid fa-plus icon-plus" aria-hidden="true"></i>
                          <i class="fa-solid fa-minus icon-minus" aria-hidden="true"></i>
                        </label>
                    </div>
                    <div class="collection-content">
                        <p class="Popular_description">${item.description}</p>
                    </div>
                </div>
  `
  )
  .join("");

const collectionRadios = document.querySelectorAll('input[name="collection"]');
function updateActiveCollection() {
  document
    .querySelectorAll(".collection_item")
    .forEach((it) => it.classList.remove("active"));
  const checked = document.querySelector('input[name="collection"]:checked');
  if (checked) {
    const parent = checked.closest(".collection_item");
    if (parent) parent.classList.add("active");
  }
}
collectionRadios.forEach((r) =>
  r.addEventListener("change", updateActiveCollection)
);
if (collectionRadios.length) {
  collectionRadios[0].checked = true;
  updateActiveCollection();
}


// Percentage Section

const percentageContainer = document.getElementById("percentage_item");

percentageContainer.innerHTML = percentageDetails.map(
  (item)=>`
    <div class="percentage_detail">
      <h2 class="percentage_value" data-target="${parseInt(item.percentage,10)}">0%</h2>
      <p class="percentage_description">${item.description}</p>
    </div>
  `
).join("");

const percentageValues = percentageContainer.querySelectorAll('.percentage_value');

function animateValue(el, duration = 1500) {
  const target = parseInt(el.dataset.target, 10) || 0;
  let start = null;
  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const current = Math.floor(progress * target);
    el.textContent = current + '%';
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      el.textContent = target + '%';
    }
  }
  requestAnimationFrame(step);
}

if (percentageValues.length) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        percentageValues.forEach((el) => {
          if (!el.dataset.animated) {
            animateValue(el);
            el.dataset.animated = 'true';
          }
        });
        obs.disconnect();
      }
    });
  }, { threshold: 0.3 });
  observer.observe(percentageContainer);
}



const tableBody = document.getElementById("tableBody");

tableBody.innerHTML = tableData
  .map((row) => {
    const cells = row
      .map((cell, idx) => {
        if (idx === 0) return `<td>${cell}</td>`;
        if (/^t$/i.test(String(cell))) {
          const cls = idx === 1 ? 'fa-solid fa-circle-check icon-yes table-icon' : 'fa-regular fa-circle-check icon-yes table-icon';
          return `<td><i class="${cls}" aria-hidden="true"></i></td>`;
        }

        if (/^f$/i.test(String(cell))) {
          return `<td><i class="fa-regular fa-circle-xmark icon-no table-icon" aria-hidden="true"></i></td>`;
        }
        return `<td>${cell}</td>`;
      })
      .join("");

    return `<tr>${cells}</tr>`;
  })
  .join("");