const sliderWrap = document.querySelector('#slider_wrap');
const panels = sliderWrap.querySelector('.panel');
const slider = panels.querySelectorAll('.panel li');
const btns = sliderWrap.querySelectorAll('.btns li');
const ring = document.querySelector('.rot0');


//각각의 버튼들에게 클릭햇을시 slider index값을 맞춰서 btn색상도 변경시켜라
btns.forEach(function(btn,idx){

  btn.addEventListener('click',function(e){
    e.preventDefault();

    // let isOn = e.currentTarget.classList.contains('on');
    // if(isOn) return;
    //   activation(idx);
    let isOn = e.currentTarget.classList.contains('on');
    if(isOn)return 
    slideMove(idx);
  });
});

function slideMove(idx){
  for(const btn of btns){
    btn.classList.remove('on');
    btns[idx].classList.add('on');
  }

  new Animate(panels, {
    prop : 'margin-left',
    value : -100*idx + '%',
    duration : 1000,
  });
  // new Animate(ring,{
  //   prop:'transform',
  //   value :rotate( 50*idx +'deg'),
  //   duration:1000
  // });
}