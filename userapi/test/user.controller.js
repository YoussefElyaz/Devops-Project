const { expect } = require('chai')
const userController = require('../src/controllers/user')
const db = require('../src/dbClient')

describe('User', () => {
  
  beforeEach(() => {
    // Clean the DataBase 
    db.flushdb()
  })
  
  describe('Create', () => {

    it('create a new user', (done) => {
      const user = {
        username: 'Youssef',
        firstname: 'Youssef',
        lastname: 'ELYAZIGHI'
      }
      userController.create(user, (err, result) => {
        expect(err).to.be.equal(null)
        expect(result).to.be.equal('OK')
        done()
      })
    })

    it('Wrong user parameters', (done) => {
      const user = {
        firstname: 'Youssef',
        lastname: 'ELYAZIGHI'
      }
      userController.create(user, (err, result) => {
        expect(err).to.not.be.equal(null)
        expect(result).to.be.equal(null)
        done()
      })
    })

    it('Avoid creating an existing user', (done)=> {
      const user = {
        username: 'Youssef',
        firstname: 'Youssef',
        lastname: 'ELYAZIGHI'
      }
      // Create User
      userController.create(user, () => {
        // Create the same User
        userController.create(user, (err, result) => {
          expect(err).to.not.be.equal(null)
          expect(result).to.be.equal(null)
          done()
        })
      })
    })
  })

  describe('Get', ()=> {

    it('get a user by username', (done) => {
      const user = {
        username: 'Youssef',
        firstname: 'Youssef',
        lastname: 'ELYAZIGHI'
      }
      // Create a user
      userController.create(user, () => {
        // Get an existing user
        userController.get(user.username, (err, result) => {
          expect(err).to.be.equal(null)
          expect(result).to.be.deep.equal({
            firstname: 'Youssef',
            lastname: 'ELYAZIGHI'
          })
          done()
        })
      })
    })
  
    it('Cannot get a user when he doesnt exist', (done) => {
      userController.get('invalid', (err, result) => {
        expect(err).to.not.be.equal(null)
        expect(result).to.be.equal(null)
        done()
      })
    })
  
  })
})
