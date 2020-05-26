const CODES = {
  A: 65,
  Z: 90
}

function toCell(_, index) {
  return `
  <div class="cell" contenteditable data-col="${index}">
  </div>
  `
}

function toColumn(title, index) {
  return `
    <div class="column" data-type="resizible" data-col="${index}">
      ${title}
      <div class="col-resize" data-resize="col"></div>
    </div>
  `
}

function createRow(index, content) {
  const resize = index ?
    `<div class="row-resize" data-resize="row"></div>`
      : ''
  return `
    <div class="row" data-type="resizible">
    <div class="row-info">
    ${index ? index : ''}
    ${resize}
    </div>
    <div class="row-data">
    ${content}
    </div>
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
