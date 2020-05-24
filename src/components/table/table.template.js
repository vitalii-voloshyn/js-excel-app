const CODES = {
  A: 65,
  Z: 90
}

function toCell() {
  return `
  <div class="cell" contenteditable></div>
  `
}

function toColumn(el) {
  return `
    <div class="column">
      ${el}
    </div>
  `
}

function createRow(index, content) {
  return `
    <div class="row">
    <div class="row-info">${index ? index : ''}</div>
    <div class="row-data">${content}</div>
    </div>
  `
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index)
}

export function createTable(rowCount = 15) {
  const columnCount = CODES.Z - CODES.A + 1
  const rows = []
  const cols = new Array(columnCount).fill('')
  .map(toChar)
  .map(toColumn)
  .join('')
  rows.push(createRow( null, cols))

  for (let i = 0; i < rowCount; i++) {
    const cells = new Array(columnCount).fill('')
    .map(toCell)
    .join('')

    rows.push(createRow(i + 1, cells))
  }

  return rows.join('')
}
