const {db} = require('../db')
const {User, Board, Cheese} = require('../index')

describe('Testing User Model', ()=>{

    beforeAll(async () => {
        await db.sync({ force: true });
    })
    test('Name and email should be added to User Model', async ()=>{
        const testUser = await User.create({
            name: 'admin',
            email: 'admin@gmail.com'
        })
        
        expect(testUser.name).toBe('admin')
        expect(testUser.email).toBe('admin@gmail.com')
    })
    test('Data type for name and email should both be string', async ()=>{
        const testUser = await User.create({
            name: 'admin',
            email: 'admin@gmail.com'
        })
        
        expect(typeof testUser.name && typeof testUser.email).toBe('string')
    })

})

describe('Testing Cheese model', ()=>{
    beforeAll(async () =>{
        await db.sync({force:true})
    })
    test ('Cheese model should be created', async()=>{
        const testCheese = await Cheese.create({
            title: 'bree',
            description: 'creamy, tasy, delicious.'
        })

        expect(testCheese.title).toBe('bree')
        expect(testCheese.description).toBe('creamy, tasy, delicious.')

    })
})

