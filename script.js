// Select all FAQ items
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const question = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");
  const arrow = item.querySelector(".arrow");

  // Toggle function for the accordion
  const toggleFAQ = () => {
    const isExpanded = question.getAttribute("aria-expanded") === "true";
    
    // Close all open faq items for exclusive opening
    faqItems.forEach(i => {
      const q = i.querySelector(".faq-question");
      const a = i.querySelector(".faq-answer");
      const ar = i.querySelector(".arrow");
      q.setAttribute("aria-expanded", "false");
      a.style.maxHeight = null;
      a.setAttribute("aria-hidden", "true");
      ar.innerHTML = "&#9660;";
    });

    if (!isExpanded) {
      question.setAttribute("aria-expanded", "true");
      answer.setAttribute("aria-hidden", "false");
      // Set maxHeight to scrollHeight for smooth slide down
      answer.style.maxHeight = answer.scrollHeight + "px";
      arrow.innerHTML = "&#9650;";
    }
  };

  // Click event
  question.addEventListener("click", toggleFAQ);

  // Enable keyboard interactivity (Enter and Space)
  question.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleFAQ();
    }
  });
});
