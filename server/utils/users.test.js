const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
    let users; 

    beforeEach(() => {
        users = new Users();
        users.users = [
            {
                id: '1',
                name: 'Tom',
                room: 'bunq ballers'
            },
            {
                id: '2',
                name: 'Mike',
                room: 'rabo ballers'
            },
            {
                id: '3',
                name: 'Iga',
                room: 'bunq ballers'
            }
        ]
    });

    it('should add new user', () => {
        let users = new Users();
        let user = {
            id: '123',
            name: 'Tom',
            room: 'bunq ballers'
        };

        let resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        let userId = '1';
        let user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove user', () => {
        let userId = '99';
        let user = users.removeUser(userId);

        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
        let userId = '1';
        let user = users.getUser(userId);

        expect(user.id).toBe(userId);
    });

    it('should not find user', () => {
        let userId = '99';
        let user = users.getUser(userId);

        expect(user).toNotExist();
    });

    it('should return names for bunq ballers', () => {
        let userList = users.getUserList('bunq ballers');

        expect(userList).toEqual(['Tom', 'Iga']);
    });

    it('should return names for rabo ballers', () => {
        let userList = users.getUserList('rabo ballers');

        expect(userList).toEqual(['Mike']);
    });
});