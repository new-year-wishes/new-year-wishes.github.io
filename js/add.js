$(document).ready(function () {
  toastr.options.rtl = true;
  toastr.options.positionClass = "toast-bottom-center";
  toastr.options.timeOut = 0;
  toastr.options.extendedTimeOut = 0;
  toastr.info("مهلت ارسال آرزو به اتمام رسیده است");
  $("form#form").submit(function (e) {
    e.preventDefault();
    return;
    var formData = new FormData($(this)[0]);
    if (!$("input#image")[0].files?.length) {
      formData.delete("image");
    }
    $("form#form button").attr("disabled", "disabled");
    toastr.info("در حال ارسال ...");
    $.ajax({
      method: "post",
      processData: false,
      contentType: false,
      cache: false,
      data: formData,
      enctype: "multipart/form-data",
      url: "https://iutcessa-new-year-15.onrender.com/submit/",
      success: function (response) {
        $("form#form button").removeAttr("disabled");
        $("form#form textarea").val("");
        toastr.success("ثبت شد");
      },
      error: function (err) {
        toastr.error("خطا");
        $("form#form button").removeAttr("disabled");
      },
    });
  });
});
