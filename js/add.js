$(document).ready(function () {
  $("form#form").submit(function (e) {
    e.preventDefault();
    var formData = new FormData($(this)[0]);
    if (!$("input#image")[0].files?.length) {
      formData.delete("image");
    }
    console.log(...formData);
    $.ajax({
      method: "post",
      processData: false,
      contentType: false,
      cache: false,
      data: formData,
      enctype: "multipart/form-data",
      url: "https://iutcessa-new-year-15.onrender.com/submit/",
      success: function (response) {
        console.log(response);
      },
    });
  });
});
