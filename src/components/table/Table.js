import ExcelComponent from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.template';

class Table extends ExcelComponent {
  static classname = 'excel__table';

  toHTML() {
    return createTable(25)
  }
}

export default Table
