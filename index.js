//alert('test');

var btns = document.querySelectorAll('button');

//btn1.addEventListener('click',handleClick);

//btn[0].addEventListener('click',handleClick);
// 반복문 사용
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', handleClick);
}

// 전체 화면에 키보드 이벤트 달기
document.addEventListener('keypress', handleKey);

function handleKey(e) {
    //alert('키 눌렀음');
    // 어떤 키보드 키를 눌렀는가?
    //console.log(this); 항상 document객체가 나온다.
    // Event 객체는 addEventListener에 함수의 매개변수로 입력됨
    //console.log(e.key);
    drumBit(e.key);
}

function handleClick() {
    //alert('클릭했음!');
    //    var audio = new Audio('sounds/tom-1.mp3');
    //    audio.play();
    //console.log(this.textContent);
    // 7개의 버튼중 어떤 버튼을 눌렀는지 키값으로 판별
    drumBit(this.textContent);
}

function drumBit(key) {
    switch (key) {
        case 'w':
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;

        case 'a':
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;

        case 's':
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;

        case 'd':
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;

        case 'j':
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;

        case 'k':
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;

        case 'l':
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;

        default:
            return;
    }

    animationDrum(key);
}

function animationDrum(key) {
    // 모든 버튼은 키값과 같은 클래스를 가지므로 '.'클래스 이름으로 선택
    var btn = document.querySelector('.' + key); // 키값에 해당하는 버튼을 선택
    btn.classList.add('pressed');
    // 0.1초 뒤에 클래스 제거
    setTimeout(function () {
        btn.classList.remove('pressed');
    }, 100);
}