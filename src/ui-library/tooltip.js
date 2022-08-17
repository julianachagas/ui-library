import './styles/tooltip.css';

export default class Tooltip {
  constructor(elements) {
    this.elements = elements;
  }

  init() {
    this.elements.forEach(item => {
      // create tooltip
      const tip = document.createElement('div');
      tip.classList.add('tip');
      const message = item.getAttribute('data-message');
      tip.textContent = message;
      item.appendChild(tip);
      // create tooltip arrow
      const tooltipArrow = document.createElement('div');
      tooltipArrow.classList.add('tooltip-arrow');
      tip.appendChild(tooltipArrow);
      // add event listeners on the current element
      item.addEventListener('mouseenter', () => {
        tip.classList.add('active');
      });
      item.addEventListener('mouseleave', () => {
        tip.classList.remove('active');
      });
    });
    // define position of the tooltips:
    this.getTooltipsPosition();
  }

  getTooltipsPosition() {
    this.elements.forEach(item => {
      // get position of the current element (the one that will have the tooltip)
      const elementPosition = item.getBoundingClientRect();
      const tip = item.querySelector('.tip');
      const arrow = item.querySelector('.tooltip-arrow');
      // define tooltip y position, above the element:
      let top = elementPosition.top - 3 - tip.offsetHeight;
      if (top < 0) {
        // if crossing the top window edge, show below instead
        top = elementPosition.top + item.offsetHeight + 3;
        // change position of tooltip arrow
        arrow.style.top = 'initial';
        arrow.style.bottom = '100%';
        arrow.style.transform = 'rotate(180deg)';
      }
      // define tooltip x position:
      let left =
        elementPosition.left + (item.offsetWidth - tip.offsetWidth) / 2;
      if (left < 0) {
        // if crossing the left window edge:
        left = 5;
      }
      tip.style.top = `${top}px`;
      tip.style.left = `${left}px`;
    });
  }
}
