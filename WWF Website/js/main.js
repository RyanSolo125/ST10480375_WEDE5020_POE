
// accordian interaction
document.querySelectorAll(".accordion-btn").forEach(button => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
  });
});


// lightbox gallery
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");

if (lightbox) {
  document.querySelectorAll(".lightbox-img").forEach(img => {
    img.addEventListener("click", () => {
      lightboxImage.src = img.src;
      lightbox.style.display = "flex";
    });
  });

  lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
  });
}


// services content

const servicesList = document.getElementById("services-list");

if (servicesList) {
  const services = [
    { text: "Wildlife protection and habitat conservation. WWF works to safeguard endangered species such as rhinos, elephants, tigers, and pandas. We focus on protecting forests, grasslands, wetlands, and other critical habitats that are essential for biodiversity. Through scientific research, anti-poaching initiatives, and habitat restoration, we help ensure wildlife can thrive for generations to come.", img: "images/service1.jpg" },
    { text: "Climate change awareness and solutions. WWF campaigns for urgent action to address climate change by promoting renewable energy, reducing carbon emissions, and encouraging sustainable lifestyles. We work with governments, businesses, and communities to develop solutions that protect the planet and build resilience against environmental challenges.", img: "images/service2.jpg" },
    { text: "Marine and freshwater preservation. WWF protects oceans, rivers, and lakes, addressing threats such as overfishing, pollution, and habitat loss. We work to conserve marine species including dolphins, turtles, and coral reefs, while promoting sustainable fishing practices and clean waterways to maintain healthy ecosystems.", img: "images/service3.jpg" },
    { text: "Education and engagement. WWF inspires people of all ages through educational programmes, school initiatives, and community projects. We provide resources and guidance that empower individuals to take action for nature and understand the importance of protecting wildlife, habitats, and the climate for the future of the planet.", img: "images/service4.jpg" }
  ];

  services.forEach(s => {
    servicesList.innerHTML += `
      <li>
        <p>${s.text}</p>
        <img src="${s.img}">
      </li>`;
  });
}

// enquiry form validation

const enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {
  enquiryForm.addEventListener("submit", e => {
    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    if (name.value.trim().length < 2) return alert("Name must be at least 2 characters.");
    if (!email.value.includes("@")) return alert("Enter a valid email address.");
    if (message.value.trim().length < 10) return alert("Message must be at least 10 characters.");

    // ajax submission
    fetch("submit.php", { method: "POST", body: new FormData(enquiryForm) })
      .then(() => alert("Your enquiry was successfully sent!"))
      .catch(() => alert("Failed to send enquiry."));
  });
}


// contact form validation

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", e => {
    e.preventDefault();

    const fields = contactForm.querySelectorAll("input, textarea");
    for (let field of fields) {
      if (field.value.trim() === "") {
        alert("Please fill in all fields.");
        return;
      }
    }

    fetch("sendMail.php", { method: "POST", body: new FormData(contactForm) })
      .then(() => alert("Message sent successfully!"))
      .catch(() => alert("Could not send message."));
  });
}
