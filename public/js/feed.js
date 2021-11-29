const createReviewFormHandler = async (event) => {
  event.preventDefault();

  // get values
  const review_text = document.querySelector("#review-text").value.trim();
  const name = document.querySelector("#name").value.trim();
  if (review_text && name) {
    const response = await fetch("api/profile/createreview", {
      method: "POST",
      body: JSON.stringify({ review_text, name }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      console.log("-------- ACCOUNT CREATED ----------");
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
};
document
  .querySelector("#review-button")
  .addEventListener("click", createReviewFormHandler);
