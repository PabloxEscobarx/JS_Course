let user = {
    data: {
        a: 1,
        b: 2,
        c: 3,
        d: {
            a1: 1,
            b1: 2,
            c1: 3,
            d1: {
                a2: 3,
                b2: 3,
                c2: 3,
            }
        },
    }
};


function freezeObj(obj) {
    for (let key in obj) {

        if (typeof obj[key] == 'object') {
            Object.freeze(obj[key])
            freezeObj(obj[key]);
        } else {

            console.log(obj[key]);
        }

    }
    return obj;
};
freezeObj(user);