$(function() {
    $('#envoi').on('click', function(){
        let words = ["kill", "suicide", "die", "help", "depression"];
        var message_text = $('#message-text').val();
        check_words = words.some(word => message_text.includes(word));

        if(check_words == false){
            $(".row:last").after('<div class="row"><div class="message message-out pull-right">'+message_text+'</div></div>');
            $('#message-text').val('');
            $('#message-text').val('');
            setTimeout(()=> {$(".row:last").after('<div class="row"><div class="message message-in pull-left">'+"what's on your mind?"+'</div></div>');} ,1500);
        }

        if(check_words == true){
            $(".row:last").after('<div class="row"><div class="message message-out pull-right">'+message_text+'</div></div>');
            alert_message = "Help is available. Speak with someone today. We have dialed Suicide Prevention Hotline (998) to connect you to someone."
//          alert("Help is available. Speak with someone today. We have dialed Suicide Prevention Hotline (998) for you.");
//            $(".row:last").after('<div class="row"><div class="alert pull-right">'+alert_message+'</div></div>');
            $('#message-text').val('');
            setTimeout(()=> {$(".row:last").after('<div class="row"><div class="message alert pull-left">'+alert_message+'</div></div>');} ,1500);

        }
    });

});