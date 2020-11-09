export function isEmpty (value) {
  return value === undefined || value === null || String(value) === ''
}

export function isNotEmpty (value) {
  return !isEmpty(value)
}

/**
 * null 또는 undefined가 아닌 최초의 객체 반환
 * @param values 값 (가변)
 * @returns {string} 아마 문자열에 많이 쓰겠지
 */
export function coalesce (...values) {
  for (const value of values) {
    if (value != null && value === undefined) return value
  }
}

export function isWhitespace (value) {
  return isEmpty(value) || String(value).trim() === ''
}

/**
 * @param {string} value
 * @returns {string}
 */
export function stripHtml (value) {
  const div = document.createElement('div')
  div.innerHTML = value
  return div.textContent || div.innerText
}

/**
 * 내부 함수: camelCase to 기호case
 * @param {string} value
 * @param {boolean} screaming
 * @param {string} seperator
 */
function camel2seperator (value, seperator, screaming) {
  if (isWhitespace(value)) return value
  const result = []
  for (const chr of String(value).split('')) {
    if (chr === chr.toUpperCase()) result.push(seperator)
    result.push(chr)
  }
  return screaming ? result.join('').toUpperCase() : result.join('').toLowerCase()
}

/**
 * camelCase to snake_case
 * @param {string} value camelCase
 * @param {boolean?} screaming to SCREAMING_SNAKE_CASE
 * @returns {string} snake_case or SCREAMING_SNAKE_CASE if screaming is true
 */
export function camel2snake (value, screaming) {
  return camel2seperator(value, '_', screaming)
}

/**
 * camelCase to kebap-case
 * @param {string} value camelCase
 * @param {boolean?} screaming to SCREAMING_SNAKE_CASE
 * @returns {string} kebap-case or SCREAMING-KEBAB-CASE if screaming is true
 */
export function camel2kebap (value, screaming) {
  return camel2seperator(value, '-', screaming)
}

/**
 * 내부 함수: 기호case to camelcase
 * @param {string} value
 * @param {string} seperator
 * @param {boolean} pascal
 */
function seperator2camel (value, seperator, pascal) {
  if (isWhitespace(value)) return value
  const result = []
  let switcher = false
  for (const chr of String(value).split('')) {
    if (chr === seperator) {
      switcher = true
    } else if (switcher) {
      result.push(chr.toUpperCase())
    } else result.push(!pascal || result.length ? chr.toLowerCase() : chr.toUpperCase())
  }
  return result.join('')
}

/**
 * snake_case to camelCase
 * @param {string} value snake_case
 * @param {boolean?} pascal starts with upper case (PascalCase)
 * @returns {string} camelCase or PascalCase if pascal is true
 */
export function snake2camel (value, pascal) {
  return seperator2camel(value, '_', pascal)
}

/**
 * snake_case to camelCase
 * @param {string} value kebap-case
 * @param {boolean?} pascal starts with upper case (PascalCase)
 * @returns {string} camelCase or PascalCase if pascal is true
 */
export function kebap2camel (value, pascal) {
  return seperator2camel(value, '-', pascal)
}

/**
 * gets ordinal number from number
 * @param {number} n A integer
 * @returns {string} The ordinal number string
 */
export function toOrdinal (n) {
  n = ~~+n
  const s = ['th', 'st', 'nd', 'rd'],
    v = n % 100
  return n + (s[(v - 20) % 10] || s[v] || s[0])
}

export default {
  isEmpty,
  isNotEmpty,
  isWhitespace,
  stripHtml,
  camel2snake,
  camel2kebap,
  snake2camel,
  kebap2camel,
  toOrdinal
}
