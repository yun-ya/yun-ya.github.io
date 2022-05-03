fetch('https://yun-ya.github.io/BS/Portfolio/JavaScript/LOL/LOL.json')
.then(response => response.json())
.then(text => {
  // console.log(text.champions)
  text.champions.forEach(el => {
    addcard(el);
  });

  $('.card').click(function(){
    let ctitle = this.querySelector('.card-title').textContent
    console.log(ctitle);
    let mtitle = document.getElementById('mtitle');
    let mimg = document.getElementById('mimg');
    let mbody = document.getElementsByClassName('modal-body')[0];
    let span = document.getElementById('role');
    let div = document.getElementById('stats');
    text.champions.forEach(item =>{
      if(item.name == ctitle){
      mtitle.innerHTML = item.name;
      mimg.src = item.splashImageUrl;
      span.innerHTML = 'Role：<br>'
      for(let role in item.roles){
        span.innerHTML += `${item.roles[role]} <br>`;
      }
      span.innerHTML +='<hr>'
      let p = document.createElement('p');
      for(let stat in item.stats){
        console.log(stat,item.stats[stat])
        p.append(`${stat}：${item.stats[stat]}<br>`)
        div.innerHTML = p.textContent
      }
      mbody.append(span);
      mbody.append(div);
      }
    })
  })
  

})
.catch(ex => {
  console.log(ex)

})
let row = document.getElementById('row');
let data = document.getElementById('data');

function addcard(el) {
let templatecard = $g('#templatecard');
let cloneContent = templatecard.content.cloneNode(true);
let img = cloneContent.querySelector('img');
let ctitle = cloneContent.querySelector('h5');
img.src = el.profileImageUrl;
ctitle.textContent = el.name;
row.append(cloneContent);

}