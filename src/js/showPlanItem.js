import {planItemData} from './data';

export function showPlanItem() {
  const planList = document.querySelector('.plan__list');
  const template = document.getElementById('planItem');

  planItemData.forEach((planItem) => {
    const {title, price, info, link, dark} = planItem;
    const clone = template.content.cloneNode(true);
    const planItemElement = clone.querySelector('.plan__item');
    const titleElement = clone.querySelector('.plan__title');
    const priceElement = clone.querySelector('.plan__price');
    const infoElement = clone.querySelector('.plan__info');
    const linkElement = clone.querySelector('.plan__link');

    titleElement.textContent = title;
    infoElement.innerHTML = `
      <p>${info.info_1}</p>
      <p>${info.info_2}</p>
      <p>${info.info_3}</p>
    `;
    linkElement.href = link;

    if (price) {
      priceElement.innerHTML = `$${price}<span>/month</span>`;
    } else {
      priceElement.textContent = 'Free';
    }

    if (dark) {
      planItemElement.classList.add('plan__item--dark');
      linkElement.classList.add('btn--secondary');
    } else {
      linkElement.classList.add('btn--outline');
    }

    planList.appendChild(clone);
  });
}
