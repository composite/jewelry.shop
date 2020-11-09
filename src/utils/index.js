
/**
 * 해당 표현식 및 변수가 정의되어 있는지 여부
 * @param value 표현식 및 변수
 * @returns {boolean} null 및 undefined 가 아니면 ture, 아니면 false
 */
export function isset (value) {
  return value !== undefined && value !== null
}

/**
 * 해당 식이 함수인지 여부
 * @param {function} func 함수
 * @returns {boolean} 함수면 true, 아니면 false
 */
export function isFunction (func) {
  return !!(func && ({}.toString.call(func) === '[object Function]' || typeof func === 'function'))
}

/**
 * 무작위의 유일한 문자열 생성기
 * @returns {string} 유일한 문자열?
 */
export function createUniqueString () {
  const timestamp = +new Date() + ''
  const randomNum = ~~((1 + Math.random()) * 65536) + ''
  return (+(randomNum + timestamp)).toString(32)
}

/**
 * 숫자 열거자 생성
 * @param {number} end 반복할 숫자
 * @param {number} start 시작할 숫자
 * @param {number} step 증감 숫자
 * @returns {Generator<Number>}
 */
export function* fori (end, start = 1, step = 1) {
  if (isNaN(+end)) throw new TypeError('num is not a number.')
  if (isNaN(+start)) throw new TypeError('start is not a number.')
  if (isNaN(+step)) throw new TypeError('step is not a number.')
  for (let i = start; i <= end; i += step) yield i
}

/**
 * 숫자 배열 생성
 * @param {number} end 반복할 숫자
 * @param {number} start 시작할 숫자
 * @param {number} step 증감 숫자
 * @returns {Array<Number>}
 */
export function fora (end, start = 1, step = 1) {
  const result = []
  for (let i = start; i <= end; i += step) result.push(i)
  return result
}

export const DEBUG = process.env.DEV || process.env.NODE_ENV === 'development'

export default {
  isset,
  createUniqueString,
  fori,
  fora,
  DEBUG
}

export * as DomUtils from './dom'
export * as StringUtils from './string'
export * as Validation from './validation'
export * as AsyncUtil from './async'
