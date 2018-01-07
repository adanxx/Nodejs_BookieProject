$("#user_review").validate({
    rules: {
        review: "required",
        rating: {
            required: true,
            number: true,
            max: 10
        }
    },
    messages: {
        review: "Please enter a review",
        rating: {
            required: "Please enter a rating",
            number: "Please enter a number"
        }
    },
    submitHandler: function (form, event) {
        event.preventDefault();
        postData();
    }
});