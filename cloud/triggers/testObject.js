Parse.Cloud.beforeSave("TestObject", function(request, response) {
  if (!request.object.get("contact")) {
    response.error(" please enter a phone number for signup");
  } else {
    response.success();
  }
});
