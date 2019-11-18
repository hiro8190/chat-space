$(function(){
  
  function buildMessage(message){
    
    var image = message.image.url ? message.image.url : '';
  
    var html = `<div class="message" data-message-id="${message.id}">
                  <div class="upper-message">
                  <div class="upper-message__user-name">
                    ${message.user_name}
                  </div>
                  <div class="upper-message__date">
                    ${message.created_at}
                  </div>
                </div>
                <div class="lower-message">
                  <p class="lower-message__content">
                    ${message.content}
                  </p>
                  <img class="lower-message__image" src = '${image}'></img>
                </div>`
    return html;
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(message){
      var html = buildMessage(message);
      $('.messages').append(html);
      $('.new_message')[0].reset();
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight});
      $('.form__submit').prop('disabled', false);
    })
    .fail(function(){
      alert('error');
    })
  })
    var reloadMessages = function(){
      if (window.location.href.match(/\/groups\/\d+\/messages/)){
      var href = 'api/messages#index {:format=>"json"}'
      var last_message_id = $('.message:last').data('message-id');
      
      $.ajax({
        url:  href,
        type: 'GET',
        data: {id: last_message_id},
        dataType: 'json'
      })

      .done(function(messages){
        var insertHTML='';
          messages.forEach(function(message){
            insertHTML = buildMessage(message);
            $('.messages').append(insertHTML);
            $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight});
          });
      })
      .fail(function(){
        alert("自動更新に失敗しました")
      });
     };
   };
  setInterval(reloadMessages, 7000);
})