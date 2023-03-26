const contactRightDiv = document.getElementById("contact-right");
const originalContent = contactRightDiv.innerHTML;

const infoHTML = `<h3 class="mb-4">Πληροφορίες</h3>
                  <span class="d-flex">
                      <i class="fa-sharp fa-solid fa-envelope"></i>
                      <div class="margin-div">mini.perf.store@gmail.com</div>
                  </span>
                  <span class="d-flex">
                      <i class="fa-sharp fa-solid fa-phone"></i>
                      <div class="margin-div">+306940524924</div>
                  </span>
                  <span class="d-flex">
                      <i class="fa-sharp fa-solid fa-location-dot"></i>
                      <div class="margin-div">Θεσσαλονίκη, Ελλάδα</div>
                  </span>
                  <span class="d-flex">
                      <i class="fa-sharp fa-solid fa-clock"></i>
                      <div class="margin-div">10:00-20:00</div>
                  </span>`;

function replaceContactRightContent() {
  console.log(window.innerWidth);
  if (window.innerWidth < 768) {
    contactRightDiv.innerHTML = infoHTML;
  } else {
    // restore original content if width is greater than 792
    contactRightDiv.innerHTML = originalContent;
  }
}

replaceContactRightContent();
window.addEventListener("resize", replaceContactRightContent);
