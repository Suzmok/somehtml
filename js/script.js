

const body = document.body
const header = document.createElement('header')
header.classList.add('header')
const headerContainer2 = document.createElement('div')
headerContainer2.classList.add('container2')
const logo_block = document.createElement('div')
logo_block.classList.add('logo_block')
const logoImg = document.createElement('img')
logoImg.src = '../img/logo/logo.png'
const h1 = document.createElement('h1')
h1.textContent = "SLOGAN SLOGAN SLOGAN"
logo_block.append(logoImg, h1)
headerContainer2.append(logo_block)

const nav = document.createElement('nav')
nav.classList.add('without_burger')
const ul = document.createElement('ul')
let navarr = ['Главная', 'О нас', 'О проекте', 'Скачать', 'Контакты']
navarr.forEach(el => {
   const li = document.createElement('li')
   const navA = document.createElement('a')
   navA.classList.add('menu_item')
   navA.textContent = el
   li.append(navA)
   ul.append(li)
})
nav.append(ul)


const main = document.createElement('main')
main.classList.add('main')
const top_content = document.createElement('div')
top_content.classList.add('top_content')
const wrap = document.createElement('div')
wrap.classList.add('wrap', 'container1')
let toptextarr = ['Часто ли Вы опаздываете на работу (учёбу)?', 'Часто ли Вы опаздываете на работу (учёбу)?', 'Часто ли Вы опаздываете на работу (учёбу)?']
toptextarr.forEach(elem => {
   const things = document.createElement('div')
   things.classList.add('things')
   const top_img = document.createElement('img')
   top_img.classList.add('cards')
   top_img.src = '../img/top_content/top_content_im1.png'
   const things_span = document.createElement('span')
   things_span.classList.add('t_cont_text')
   things_span.textContent = elem
   things.append(top_img, things_span)
   wrap.append(things)
})
top_content.append(wrap)

const about_us_block = document.createElement('div')
about_us_block.classList.add('about_us_block')
const aub_container1 = document.createElement('div')
aub_container1.classList.add('container1')
const about_us_text = document.createElement('p')
about_us_text.classList.add('about_us_text')
about_us_text.textContent = "О приложении"
const play_button = document.createElement('div')
play_button.classList.add('play_botton')
const about_us = document.createElement('img')
about_us.classList.add('about_us')
about_us.src = '../img/about_us/about.png'
const play_b = document.createElement('img')
play_b.classList.add('play_b')
play_b.src = '../img/about_us/play-button.png'
play_button.append(about_us, play_b)
aub_container1.append(about_us_text, play_button)



const aub_container2 = document.createElement('div')
aub_container2.classList.add('container2')
const mobile_card = document.createElement('div')
mobile_card.classList.add('mobile_card')
const a_b1 = document.createElement('img')
a_b1.classList.add('a_b')
a_b1.id = "first"
a_b1.src = '../img/about_us/card.png'
const a_b2 = document.createElement('img')
a_b2.classList.add('a_b')
a_b2.id = "second"
a_b2.src = '../img/about_us/card.png'
const a_b3 = document.createElement('img')
a_b3.classList.add('a_b')
a_b3.id = "third"
a_b3.src = '../img/about_us/card.png'
const a_b4 = document.createElement('img')
a_b4.classList.add('a_b')
a_b4.id = "fourth"
a_b4.src = '../img/about_us/card.png'
const a_b5 = document.createElement('img')
a_b5.classList.add('a_b')
a_b5.id = "fifth"
a_b5.src = '../img/about_us/card.png'




mobile_card.append(a_b1, a_b2, a_b3, a_b4, a_b5)
aub_container2.append(mobile_card)
about_us_block.append(aub_container1, aub_container2)

const about_project_block = document.createElement('div')
about_project_block.classList.add('about_project_block')
const about_project_text = document.createElement('div')
about_project_text.classList.add('about_project_text', 'container1')
const about_p_t = document.createElement('p')
about_p_t.classList.add('about_p_t')
about_p_t.textContent = "О проетке"
const about_p_t2 = document.createElement('p')
about_p_t2.classList.add('about_p_t2')
about_p_t2.textContent = "Курс для начинающих предпринимателей, направленный на качественный результат за 6 недель.Опытные бизнесмены, инвесторы и профессионалы в своем деле помогают участникам на всех этапах развития их бизнеса: от разработки идеи до ее реализации."

about_project_text.append(about_p_t,about_p_t2)
about_project_block.append(about_project_text)

const download = document.createElement('div')
download.classList.add('download')
const downloadContainer2 = document.createElement('div')
downloadContainer2.classList.add('container2')
const dC2div = document.createElement('div')
const dC2p = document.createElement('p')
dC2p.textContent = "Скачать"
const icons = document.createElement('div')
icons.classList.add('icons')
const android = document.createElement('img')
android.src = './img/download/android.png'
const qr = document.createElement('img')
qr.src = './img/download/icon_qr.png'
const bottom_text = document.createElement('div')
bottom_text.classList.add('bottom_text')
const b_t_span = document.createElement('span')
b_t_span.textContent = `Курс для начинающих предпринимателей, направленный на качественный результат за 6 недель.
Опытные
бизнесмены, инвесторы и профессионалы в своем деле помогают участникам на всех этапах развития
их
бизнеса: от разработки идеи до ее реализации.`
dC2div.append(dC2p)
icons.append(android,qr)
bottom_text.append(b_t_span)
download.append(dC2div,icons,bottom_text)

const footer = document.createElement('footer')
footer.classList.add('footer')
const footerContainer2 = document.createElement('div')
footerContainer2.classList.add('container2')
const footer_some_text = document.createElement('div')
footer_some_text.classList.add('footer_some_text')
const footer_some = document.createElement('p')
footer_some.textContent = "SOME"
footer_some_text.append(footer_some)

const footer_icons = document.createElement('div')
footer_icons.classList.add('footer_icons')
let iconsArr = ["./img/footer/vk_icon.png","./img/footer/instagram_icon.png","./img/footer/facebook_icon.png"]
iconsArr.forEach(element => {
   const icImage = document.createElement('img')
   icImage.src = element
   footer_icons.append(icImage)
});

const footer_info = document.createElement('div')
footer_info.classList.add('footer_info')
const fi_div = document.createElement('div')
const main_text = document.createElement('p')
main_text.classList.add('main_text')
main_text.textContent = "Контакты"
const fi_ul = document.createElement('ul')
let foot1  = ["Tel.: +996 (312) 915000 +","Еxt.","Fax: +996 (312) 915 028"]
foot1.forEach(el => {
   const fi_ul_li = document.createElement('li')
   fi_ul_li.textContent = el
   fi_ul.append(fi_ul_li)
}) 
fi_div.append(main_text,fi_ul)

const fi_div2 = document.createElement('div')
const main_text2 = document.createElement('p')
main_text2.classList.add('main_text')
main_text2.textContent = "Адреса"
const fi_ul2 = document.createElement('ul')
let foot2  = ["American University of Central Asia","7/6 Aaly Tokombaev Street","Bishkek, Kyrgyz Republic 720060"]
foot2.forEach(el => {
   const fi_ul_li2 = document.createElement('li')
   fi_ul_li2.textContent = el
   fi_ul2.append(fi_ul_li2)
}) 
fi_div2.append(main_text2,fi_ul2)

const fi_div3 = document.createElement('div')
const main_text3 = document.createElement('p')
main_text3.classList.add('main_text')
main_text3.textContent = "Помощь"
const fi_ul3 = document.createElement('ul')
let foot3  = [ "Помощь","Помощь","Помощь"]
foot3.forEach(el => {
   const fi_ul_li3 = document.createElement('li')
   fi_ul_li3.textContent = el
   fi_ul3.append(fi_ul_li3)
}) 
fi_div3.append(main_text3,fi_ul3)


footer_info.append(fi_div,fi_div2,fi_div3)

footerContainer2.append(footer_some_text,footer_icons,footer_info)

footer.append(footerContainer2)
header.append(headerContainer2, nav)
main.append(top_content, about_us_block,about_project_block,download)
body.append(header, main,footer)