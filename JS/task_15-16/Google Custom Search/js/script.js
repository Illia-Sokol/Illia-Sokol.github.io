$(function () {
      $('#search-box__button').on('click', printValue)

      $('#search-box__input').keyup( function(event) {
        if(event.which === 13) {
          printValue();
        }
      })

      function printValue () {
        var input = $('#search-box__input')
        var searchText = input.val();
        console.log(searchText);
        googleSearch(searchText);
      }

      function GoogleCallback(result) {
        console.log('result', result)
        var template = $('#myTest').html();
        var content = tmpl(template, result)
        $('#demo').prepend(content)
      }

      function googleSearch(searchText) {
        $.getJSON("https:www.googleapis.com/customsearch/v1?key=AIzaSyBFBGvioil72TMHARrEgqbu5boYRF5MZmw&cx=000978185509461210800:vyaidmyxf6i&q=" + searchText + '"', function (result) {
         GoogleCallback(result)
       });
      };
    });