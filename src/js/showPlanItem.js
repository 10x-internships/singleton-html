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
    const infoElement = clone.querySelectorAll('.plan__info p');
    const linkElement = clone.querySelector('.plan__link');

    titleElement.textContent = title;
    infoElement[0].textContent = info.info_1;
    infoElement[1].textContent = info.info_2;
    infoElement[2].textContent = info.info_3;
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
