import { assert } from 'chai';
import visiblePoints, { length, dotProduct, angle, crossProduct } from '../src/visible-points';

describe('helper functions', () => {
  describe('length', () => {
    it('should return 3 for 0, 3', () => {
      assert.equal(3, length([0, 3]))
    })
  })

  describe('dotProduct', () => {
    it('should return 3 for [2, 2] and (0, 3)', () => {
      assert.equal(6, dotProduct([2, 2], [0, 3]))
    })
  })

  describe('crossProduct', () => {
    it('should return -6 for (2, 2) and (0, 3)', () => {
      assert.equal(-6, crossProduct([2, 2], [0, 3]))
    })
    it('should return 6 for (0, 3) and (2, 2) ', () => {
      assert.equal(6, crossProduct([0, 3], [2, 2]))
    })
  })

  describe('angle', () => {
    it('should return π/4 for (2, 2) and (0, 3)', () => {
      assert.closeTo(45, angle([2, 2], [0, 3]), .0001)
    })
  })
})

describe('visiblePoints', () => {
  it('should return 6 for example points', () => {
    let points = [[1, 1], [3, 1], [3, 2], [3, 3],
                  [1, 3], [2, 5], [1, 5], [-1, -1],
                  [-1, -2], [-2, -3], [-4, -4]]
    assert.equal(6, visiblePoints(points))
  })

  it('should return 6 for example points', () => {
    let points = [[-2,2], [-2,-2], [-5,0]]
    console.log(angle([-2, 2], [-5, 0]))
    assert.equal(2, visiblePoints(points))
  })

  it('should return 2 for other example points', () => {
    let points = [[3,3], [-4,4], [-2,-2], [1,-1], [10,-10]]
    assert.equal(2, visiblePoints(points))
  })
})

