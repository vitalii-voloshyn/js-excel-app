import ExcelComponent from '@core/ExcelComponent';
import { createTable } from '@/components/table/table.template';
import { resizeHandler } from '@/components/table/table.resize';
import { shouldResize } from '@/components/table/table.functions';

class Table extends ExcelComponent {
  static classname = 'excel__table';
  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown']
    })
  }
  toHTML() {
    return createTable(25)
  }

  onMousedown(e) {
    if (shouldResize(e)) {
    resizeHandler(e, this.$root)
    }
  }
}

export default Table
