import featureData from './data';

// Show data to HTML using template tag
export function showFeatureItem() {
  const featureList = document.querySelector('.feature__list');
  const template = document.getElementById('featureItem');

  featureData.forEach((featureItem) => {
    const clone = template.content.cloneNode(true);
    const icon = clone.querySelector('.feature__icon img');
    const featureTitle = clone.querySelector('.feature__title');
    const featureDesc = clone.querySelector('.feature__desc');
    const featureLink = clone.querySelector('.feature__link');

    icon.src = featureItem.icon;
    icon.alt = featureItem.title;
    featureTitle.textContent = featureItem.title;
    featureDesc.textContent = featureItem.desc;
    featureLink.href = featureItem.link;
    featureList.appendChild(clone);
  });
}
