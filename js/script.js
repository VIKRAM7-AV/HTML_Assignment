import { companyDetails } from "./dummy_data.js";

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
