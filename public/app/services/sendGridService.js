angular.module('dw-store').service('sendGridService', function($http) {

    //add $q if needed

    $http({
      method: 'Post',
      url: '/v3/templates/{template_id}/versions',
    })

    var request = sg.emptyRequest()
    request.body = {
        "active": 1,
        "html_content": "<%body%>",
        "name": "example_version_name",
        "plain_content": "<%body%>",
        "subject": "<%subject%>",
        "template_id": "ddb96bbc-9b92-425e-8979-99464621b543"
    };
    request.method = 'POST'
    request.path = '/v3/templates/{template_id}/versions'
    sg.API(request, function (error, response) {
        console.log(response.statusCode)
        console.log(response.body)
        console.log(response.headers)
    })

});


