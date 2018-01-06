$("#article_form").validate({
    rules: {
        title: "required",
        review: "required",
        rating: {
           required: true,
           number: true,
           max:10
        }
    },
    messages: {
        title: "Please enter a title",
        review: "Please enter a review",
        rating:{
            required: "Please enter a rating",
            number: "Please enter a number"
        }
    },
    submitHandler: function(form,event) {
        event.preventDefault();
        postData();
    }
});


function postData(){
    const articles = {
        title:$('#title').val(),
        review:$('#review').val(),
        rating:$('#rating').val(),
    }


    $.ajax({
      type:'POST',
      url:'/api/Add_article',
      data:JSON.stringify(articles),
      contentType:'application/json',
      success:(data)=>{
          alert('Data has been saved !')
      },
      error:()=>{
          alert('Error data not saved !')
      }
      
    });
}