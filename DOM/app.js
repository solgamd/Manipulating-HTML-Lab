    // Task #1
document.addEventListener('DOMContentLoaded', function () {
    let btn = document.createElement('button');
    document.body.appendChild(btn);
    btn.offsetTop;
    btn.id = 'btnTop';

    let btnText = document.createTextNode('Random floaty button!');
    btn.appendChild(btnText);

    btn.addEventListener('click', function () {
        alert("Good work with that button clickin\'!");
    });
    // Task #2
    document.getElementById('btn2').addEventListener('click', function () {
        alert(document.getElementById('texty').value);
    })
    // Task #3
    document.getElementById('divvy').addEventListener('mouseover', function () {
        document.getElementById('divvy').style.background = 'purple';
    })
    document.getElementById('divvy').addEventListener('mouseout', function () {
        document.getElementById('divvy').style.background = 'turquoise';
    });
    // Task #4
    document.getElementById('p1').addEventListener('click', function () {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        let rgb = 'rgb(' + r + ',' + g + ',' + b + ')'
        document.getElementById('p1').style.color = rgb;
    })
    // Task #5
    let anotherBtn = document.createElement('button');
    document.body.appendChild(anotherBtn);
    let anotherBtnText = document.createTextNode("What\'s my name?")
    anotherBtn.appendChild(anotherBtnText);
    anotherBtn.id = 'anotherBtnId';

    let emptyDiv = document.createElement('div');
    document.body.appendChild(emptyDiv);
    emptyDiv.id = 'emptyDivId';

    anotherBtn.addEventListener('click', function () {
        let name = document.createElement('span');
        let nameText = document.createTextNode('Who wants to know?');
        emptyDiv.appendChild(name);
        name.appendChild(nameText);
    })
    //Task #6
    let amigos = ['dasher', 'dancer', 'prancer', 'vixen', 'comet', 'cupid', 'donner', 'blitzen', 'rudolph', 'olive'];
    let amigoCount = 0;

    document.getElementById('lastBtn').addEventListener('click', function friendList() {
        if (amigoCount >= 10) {
            return;
        }
        ;
        console.log('worked');
        let list = document.getElementById('listy');
        let listItem = document.createElement('li');
        let itemText = document.createTextNode(amigos[amigoCount]);
        amigoCount++

        list.appendChild(listItem);
        listItem.appendChild(itemText);
    })
})