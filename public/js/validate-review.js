$("#user_review").validate({
    rules: {
        review: "required",
        rating: {
            required: true,
            number: true,
            max: 12
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

function postData(){
    const review = {
        id:$('#user_review').data('id'),
        titlePost:$('#titlePost').val(),
        review:$('#review').val(),
        rating:$('#rating').val()
    }


    $.ajax({
      type:'POST',
      url:'/api/add_review',
      data:JSON.stringify(review),
      contentType:'application/json',
      success:()=>{
        window.location.reload(false)
      },
      error:()=>{
          alert('Error data not saved !')
      }
      
    });
}