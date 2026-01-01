import { companyDetails, perfume_Imgs } from "./dummy_data.js";

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
