// Task #1
$('document').ready(function() {
    let btn1 = $('<button>' + "Say Something Nice" + '</button>');
    $(btn1).appendTo('body');
    $(btn1).css({
        'background-color' : 'orange',
        'z-index': '10',
        'font-size' : '16px'
    })
// Task #2
    $(btn1).click(function() {
        alert("Good work with that button clickin\'!")
    })
    $('#btn2').append('<h4>' + 'Alert me!' + '</h4>')
    $('#btn2').click(function() {
        alert($('input[type="text"]').val());
    });
// Task #3
    $('#divvy').css({
        'height': '100px',
        'width':'100px',
        'background-color': 'gray',
        'border' : 'solid black 5px'
    });
    $('#divvy').mouseover(function () {
        $('#divvy').css('background-color', 'teal');
    })

    $('#divvy').mouseout(function () {
        $('#divvy').css('background-color', 'gray');
    })
// Task #4
    $('#p1').click(function () {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        let rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
        $('#p1').css('color', (rgb));
    }) 
// Task #5
    let name = $('<span>' + 'Megatron' + '</span>');
    $('#btn3').append("<h3>" + "What/'s my name?" + "</h3>")
    
    $('#btn3').click(function () {
        $('#emptyDiv').append(name);
    })
// Task #6
    let amigos = ['dasher', 'dancer', 'prancer', 'vixen', 'comet', 'cupid', 'donner', 'blitzen', 'rudolph', 'olive'];
    let amigoCount = 0;
    $('#lastBtn').append("<h3>" + "On...!" + "</h3>")

    $('#lastBtn').click(function friendList() {
        if (amigoCount >= 10) {
            return;
        };
        console.log('worked');
        let item = $('<li>' + amigos[amigoCount] + '</li>');
        item.appendTo($('#list'))
        amigoCount++
    })
})  