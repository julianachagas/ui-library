import './styles/tabs.css';

export default class Tabs {
  constructor(container) {
    this.container = container;
    this.tabsList = container.querySelector('.tabs-list');
    this.tabs = container.querySelectorAll('.trigger');
    this.contents = container.querySelectorAll('.content');
  }

  init() {
    this.tabsList.addEventListener('click', e => {
      if (e.target.classList.contains('trigger')) {
        this.toggleTabs(e);
        this.toggleContent(e);
      }
    });
  }

  toggleTabs(e) {
    this.tabs.forEach(tab => {
      // add class active if the current tab is equal to the clicked tab, otherwise remove the class active
      tab.classList.toggle('active', tab === e.target);
    });
  }

  toggleContent(e) {
    const targetContent = this.container.querySelector(e.target.dataset.target);
    this.contents.forEach(content => {
      content.classList.toggle('active', content === targetContent);
    });
  }
}
