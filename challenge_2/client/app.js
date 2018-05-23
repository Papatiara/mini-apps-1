
var app = {
  server: 'http://localhost:3000/?',


send: function(message) {
  console.log(message)
    $.ajax({
      url: app.server,
      type: 'POST',
      data: message,
      contentType: 'application/json',
      success: function (data) {
        console.log(data)
        var result = [];
        var splitData = data.split(',')
        // console.log(splitData);
        for (var i = 1; i <= splitData.length; i++) {
          if (i % 5 === 0) {
            result.push(splitData[i] + '\n')
          } else {
            result.push(splitData[i])
          }
        }
      
        console.log(result.join())
        $("#past").append(result);
        console.log('success!!')
      },
      error: function (error) {
        console.error('error', error);
      }
    });
  }
}
  $( document ).ready(function() {
    console.log( "ready!" );
  $(function(){
    $('#target').on('click', function(e){;
      e.preventDefault();
         var n_input = $('#form').val();
         console.log(n_input)
         app.send(n_input)
    });
  });
  });