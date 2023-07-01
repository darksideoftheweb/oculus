'use strict'

const tabItem = document.querySelectorAll('.tabs__btn-item')
const tabContent = document.querySelectorAll('.tabs__content-item')

tabItem.forEach((item) => {
  item.addEventListener('click', (e) => {
    const tabTarget = e.target
    console.log(tabTarget)
    const dataTarget = tabTarget.dataset.button
    console.log(dataTarget)

    tabItem.forEach((item) => {
      item.classList.remove('tabs__btn-item--active')
    })
    tabContent.forEach((item) => {
      item.classList.remove('tabs__content-item--active')
    })

    tabTarget.classList.add('tabs__btn-item--active')
    document.querySelector(`#${dataTarget}`).classList.add('tabs__content-item--active')
  })
})