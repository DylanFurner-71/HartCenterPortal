var faker = require('faker');
const jwt = require('jsonwebtoken')
const {saveUserForTest, removeAllUser} = require('../../models/studentModel');

const ownerOne = faker.random.number();
const ownerTwo = faker.random.number();
const users = [
    {
        smu_id : ownerOne,
        firstname : faker.name.firstName(),
        lastname : faker.name.lastName(),
        smu_email:faker.internet.email(),
        alt_email: faker.internet.email(),
        password : 'masnadisawesomefuckyea',
        token : jwt.sign({Owner : ownerOne},'secretkey'),

    },
    {
        Owner : ownerTwo,
        firstname : faker.name.firstName(),
        lastname : faker.name.lastName(),
        email:faker.internet.email(),
        password : 'masnadisawesomefuckyea'
    }
]

const populateUsers = (done) =>{
    removeAllUser().then((result)=>{
        if(result){
            var userOne = saveUserForTest(users[0]);
            var userTwo = saveUserForTest(users[1]);
            return Promise.all([userOne,userTwo])
        }
    }).then(()=>done());
};

module.exports = {users, populateUsers};