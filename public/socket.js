var socket = io.connect('https://latin-chat.herokuapp.com/', {'forceNew' : true})

socket.on('messages', function(data){
    $('#history').empty();
    for (let i = 0; i < data.length; i++) {
        $('#history').append(  `<div class="incoming_msg">
                                    <div class="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"> </div>
                                    <div class="received_msg">
                                        <div class="received_withd_msg">
                                            <p><strong>` + data[i].user + `</strong><br />` + data[i].text + `</p>
                                            <span class="time_date">` + data[i].date + `</span>
                                        </div>
                                    </div>
                                </div>`)
    }
})

function sendMessage(){
    var message = {
        user: $('#user').val(),
        text: $('#text').val(),
        date: '6 nov'
    }
    socket.emit('new-message', message)

}