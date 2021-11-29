// Function to create a job using the form
const createJobFormHandler = async (event) => {
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