import $ from '@core/dom'
import ExcelComponent from '@core/ExcelComponent'
import TableSelection from './TableSelection'
import { createTable } from '@/components/table/table.template'
import { resizeHandler } from '@/components/table/table.resize'
import { shouldResize } from '@/components/table/table.functions'
import { isCell, nextSelector, matrix } from './table.functions'

class Table extends ExcelComponent {
  static classname = 'excel__table'
  constructor($root, options) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown', 'keydown', 'input'],
      ...options
    })
  }
  toHTML() {
    return createTable(25)
  }

  prepare() {
    this.selection = new TableSelection()
  }

  init() {
    super.init()
    const $cell = this.$root.find(`[data-id="0:0"]`)
    this.selection.select($cell)
    this.$emit('table:select', $cell)
    this.$on('formula:input', (text) => {
      this.selection.current.text((text))
    })
    this.$on('formula:done', () => {
      this.selection.current.focus()
    })
  }

  onMousedown(e) {
    if (shouldResize(e)) {
      resizeHandler(e, this.$root)
    } else if (isCell(e)) {
      const $target = $(e.target)
      if (e.shiftKey) {
        const $cells = matrix($target, this.selection.current)
          .map(id => this.$root.find(`[data-id="${id}"]`))
        this.selection.selectGroup($cells)
      } else {
        this.selection.select($target)
      }
    }
  }

  onKeydown(event) {
    const keys = [
      'Tab',
      'Enter',
      'ArrowLeft',
      'ArrowRight',
      'ArrowDown',
      'ArrowUp'
    ]
    const { key } = event
    if (keys.includes(key)) {
      event.preventDefault()
      const id = this.selection.current.id(true)
      const $next = this.$root.find(nextSelector(key, id))
      this.selection.select($next)
      this.$emit('table:select', $next)
    }
  }

  onInput(e) {
    this.$emit('table:input', $(e.target).text())
  }
}


export default Table


