// Function to create a job using the form
const createJobFormHandler = async (event) => {
<<<<<<< HEAD
    event.preventDefault();
    console.log("SOMETHING SOMETHING ---------------------")


    // get values
    // const company = document.querySelector("#company").value.trim();
    const title = document.querySelector("#job-title").value.trim();
    // const location = document.querySelector("#location").value.trim();
    const description = document.querySelector("#job-desc").value.trim();
    const salary = document.querySelector("#job-salary").value.trim();
    // const url = document.querySelector("#url").value.trim();
    // const status = document.querySelector("#status").value.trim();

    if (title && description && salary) {
        console.log("RUNNING POST REQUEST")
        // create post request, add commented out values to the body
        const response = await fetch("api/profile/createjob", {
            method: "POST",
            body: JSON.stringify({ title, description, salary }),
            headers: { "Content-Type": "application/json"}
        });

        if (response.ok) {
            console.log("-------- ACCOUNT CREATED ----------")
            document.location.replace('/profile');
        } else {
            alert(response.statusText);
        }
    }
};

const createReviewFormHandler = async (event) => {
    event.preventDefault();

    // get values
    const reviewText = document.querySelector("#review-text").value.trim();
    const reviewName = document.querySelector("#review-name").value.trim();

    if (reviewText && reviewName) {
        const response = await fetch("api/profile/createreview", {
            method: "POST",
            body: JSON.stringify({ reviewText, reviewName }),
            headers: { "Content-Type": "application/json"}
        });

        if (response.ok) {
            console.log("-------- ACCOUNT CREATED ----------")
            document.location.replace('/profile');
        } else {
            alert(response.statusText);
        }

    }

};

document.querySelector("#job-button").addEventListener("click", createJobFormHandler);
// document.querySelector("#review-button").addEventListener("click", createReviewFormHandler);
=======
  event.preventDefault();

  // get values
  const job_title = document.querySelector("#job-title").value.trim();
  const job_company = document.querySelector("#job-company");
  const description = document.querySelector("#job-desc").value.trim();
  const salary = document.querySelector("#job-salary").value.trim();

  if (job_title && description && salary && job_company) {
    // create post request
    const response = await fetch("api/users/profile", {
      method: "POST",
      body: JSON.stringify({ job_company, job_title, description, salary }),
      headers: { "Content-Type": "application/json" },
    });
  }

  if (response.ok) {
    console.log("REPLACING LOCATION !!!!!!!!!!!");
    document.location.replace("/profile");
  } else {
    alert(response.statusText);
  }
};

const createReviewFormHandler = async (event) => {
  // get values
};


// // jquery research
// $(".dropdown-menu li a").click(function() {
//   $(this).parents(".dropdown").find('.btn').html($(this).text());
//   $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
// });
// vanilla js research










document
  .querySelector("#job-submit")
  .addEventListener("click", createJobFormHandler);
>>>>>>> 21eb5b19837ccf2c0c6e538037b0b283b42085db
