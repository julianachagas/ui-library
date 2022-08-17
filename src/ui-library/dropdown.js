import './styles/dropdown.css';

export default class Dropdown {
  constructor(containers) {
    this.containers = containers;
  }

  init() {
    this.containers.forEach(item => {
      const trigger = item.querySelector('.trigger');
      const content = item.querySelector('.content');
      trigger.addEventListener('click', () => {
        trigger.classList.toggle('active');
        content.classList.toggle('active');
      });
    });
  }
}
