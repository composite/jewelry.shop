/**
 * 비동기 상호배제 객체
 * @constructor
 */
export function Mutex () {
  const unlockError = () => {throw new Error('already unlocked')}

  let mutex = Promise.resolve()
  let unlocker = unlockError
  let locked = false

  /**
   * 비동기 상호 배제 시작
   * @returns {Promise<function>} unlock 함수 제공. 반드시 사용해야 의도치 않는 비동기 프로세스 유발 방지!
   */
  this.lock = () => {
    if (locked) throw new Error('already locked')
    let begin = { unlock: () => {} }
    mutex = mutex.then(() => {
      locked = false
      unlocker = unlockError
      return new Promise(begin)
    })
    return new Promise(resolve => {
      locked = true
      unlocker = begin = resolve
    })
  }

  /**
   * 상호 배타 수행 여부
   * @returns {boolean} 상호 배타시 true, 아니면 false
   */
  this.isLocked = () => {
    return locked
  }

  /**
   * 상호 배타 해제
   * @returns {Mutex} 체이닝
   */
  this.unlock = () => {
    unlocker()
    return this
  }
}

/**
 * 비동기 상호배제 단일 개체
 * @type {Mutex} 비동기 상호 배제 기능 제공
 */
export const mutex = new Mutex()
const _mutex = new Mutex()

function traslateReplace (o) {
  return (m, p) => {
    if (!isNaN(o[p])) {
      return (o[p] === ~~o[p] ? ~~o[p] : o[p]).format()
    }
    return o[p] || ''
  }
} traslateReplace.pattern = /{{(\w+)}}/g

export default {
  Mutex,
  mutex
}
