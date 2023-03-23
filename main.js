const body = document.querySelector('body');
const container = document.querySelector('.container');
const colorText = document.querySelector('.color_text');
const values = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

function getGradientColor(items) {
  let color = '#';


  items.forEach((id) => {

    if (id <= 5) {
      const random = Math.floor(Math.random() * items.length);
      color += values[random]

    }

  })

  return color
}

function setGradient() {
  const col1 = getGradientColor(values);
  const col2 = getGradientColor(values);
  const randomDeg = Math.floor(Math.random() * 360);
  const bgColor = `linear-gradient(${randomDeg}deg, ${col1}, ${col2})`
  body.style.background = bgColor;
  colorText.textContent = bgColor;

}

container.addEventListener('click', setGradient)

window.addEventListener('keydown', (e) => {
  if (e.which == 13) {

    setGradient()
  }
})