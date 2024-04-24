function carregar() {
let msg = window.document.getElementById('msg')
let img = window.document.getElementById('imagem')
let saudacao = window.document.getElementById('saudacao')
let data = new Date()
let hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12) {
    img.src = 'foto-manhaa.jpg'
    document.body.style.background = '#ECCD9E'
    saudacao.innerHTML = 'Bom dia!'
} else if (hora >= 12 && hora < 18) {
    img.src = 'foto-tarde.jpg'
    document.body.style.background = '#FF7A11'
    saudacao.innerHTML = 'Boa tarde!'
} else {
    img.src = 'foto-noite.jpg'
    document.body.style.background = '#0F64A1'
    saudacao.innerHTML = 'Boa noite!'
}
}