exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return knex('activity').del()
        .then(function () {
            return Promise.all([
                // Inserts seed entries
                knex('activity').insert({
                    id: 1,
                    location: 'Confluence Park',
                    name: 'frisby',
                    duration: 60,
                    is_free: true
                }),
                knex('activity').insert({
                    id: 2,
                    location: 'Cherry Creek Golf Club',
                    name: 'golf',
                    duration: 240,
                    is_free: false
                }),
                knex('activity').insert({
                    id: 3,
                    location: 'North Table Mountain',
                    name: 'hiking',
                    duration: 240,
                    is_free: true
                })
            ]);
        });
};


// runs top to bottoms, if not alphabetical out of order, they'll be out of order, if keys that don't exist, it will break

// this will craft the sql statement for you, just pass a normal js object and it will figure it out for you

