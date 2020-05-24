import ExcelComponent from '@core/ExcelComponent';

class Formula extends ExcelComponent {
  static classname = 'excel__formula';

  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click']
    })
  }
  toHTML() {
    return `
    <div class="info">fx</div>
    <div class="input" contenteditable spellcheck="false"></div>
    `
  }
  onInput(e) {
    console.log('Formula: input', e.target.textContent.trim())
  }

  onClick() {
    console.log('onClick')
  }
}


export default Formula
