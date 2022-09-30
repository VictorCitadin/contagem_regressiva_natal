setInterval(() => {
  findDate()
})

function findDate() {
  let currentTime = new Date(),
    christmasYear = currentTime.getFullYear()

  //o metodo getMonth() retorna o mês (de 0 a 11)
  if (currentTime.getMonth() == 11 && currentTime.getDate() > 25) {
    christmasYear += 1
  }

  let christmasTime = new Date(christmasYear, 11, 25)
  let dateDiff = Math.floor(christmasTime - currentTime)
  let DIAS = 0,
    HORAS = 0,
    MINUTOS = 0,
    SEGUNDOS = 0

  if (
    currentTime.getMonth() != 11 ||
    (currentTime.getMonth() == 11 && currentTime.getDate() != 25)
  ) {
    DIAS = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    HORAS = Math.floor((dateDiff) % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    MINUTOS = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    SEGUNDOS = Math.floor((dateDiff % (1000 * 60)) / 1000);
  }
  displayDate(
    setZero(DIAS),
    setZero(HORAS),
    setZero(MINUTOS),
    setZero(SEGUNDOS)
  )
}

function displayDate(d, h, m, s) {
  document.getElementById('dias').innerHTML = d
  document.getElementById('horas').innerHTML = h
  document.getElementById('minutos').innerHTML = m
  document.getElementById('segundos').innerHTML = s
}

function setZero(timeValue) {
  if (timeValue < 10) {
    timeValue * '0' + timeValue
  }
  return timeValue
}
