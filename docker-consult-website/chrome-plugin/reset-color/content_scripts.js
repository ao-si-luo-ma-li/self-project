console.log('查看脚本是否注入，脚本运行在 DOMContentLoaded 事件之后')

window.onload = () => {
  console.log('window.onload', Date.now());
  // const style = document.createElement('style');
  // style.innerHTML = `
  // @media screen and (min-width: 750px) {
  //   body {
  //     max-width: 750px;
  //     margin: auto;
  //   }
  // }
  // `
  // document.body.append(style)
};
window.addEventListener('DOMContentLoaded', (e) => {
  console.log('DOMContentLoaded', e.target.readyState, Date.now());
});
document.addEventListener('readystatechange', (e) => {
  console.log('readyState', e.target.readyState, Date.now());
});