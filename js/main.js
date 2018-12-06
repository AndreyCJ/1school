// SideMenu
const main = document.getElementById('main');
function openSideMenu() {
  document.getElementById('sideNav').style.width = '300px';
  // main.style.marginLeft = '300px';
} 

function closeSideMenu() {
  document.getElementById('sideNav').style.width = '0px';
  // document.getElementById('main').style.marginLeft = '0px';
}