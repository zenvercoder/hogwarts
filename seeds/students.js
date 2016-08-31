exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return knex('students').del()
        .then(function () {
            return Promise.all([
                // Inserts seed entries
                knex('students').insert({
                    parent: 'Lily Potter',
                    name: 'Harry Potter',
                    house: 'Gryffindor'
                }),
                knex('students').insert({
                    parent: 'James Potter',
                    name: 'Harry Potter',
                    house: 'Gryffindor'
                }),
                knex('students').insert({
                    parent: 'Mr. Weasley',
                    name: 'Ron Weasley',
                    house: 'Gryffindor'
                })
            ]);
        });
};

// runs top to bottoms, if not alphabetical out of order, they'll be out of order, if keys that don't exist, it will break
// this will craft the sql statement for you, just pass a normal js object and it will figure it out for you

