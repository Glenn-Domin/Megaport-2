const business = {
    name: 'Megaport',
    address: {
        office: {
            unit: 'Level 3',
            street: '825 Ann Street',
            suburb: 'Fortitude Valley',
            city: 'Brisbane',
            state: 'Queensland',
            postcode: 4006,
        }
    },
    industry: {
        type: 'Internet and telecommunications',
        asxListed: true
    }
};

/**
 * Get the value of the data at the specified path in the supplied object.
 *
 * @param {string} path - The dot-separated path e.g. 'address.office.state'
 * @param {object} obj - The object to search (defaults to the global `window` object)
 * @returns {any} The value at the specified path, or undefined if not found
 */
function getValue(path, obj = window) {
    const pathList = path.split('.');

    for (let index = 0; index < pathList.length; index++) {
        if (index !== (pathList.length - 1)) {
            const pathStart = pathList[0];
            const pathEnd = pathList.slice(1).join('.');
            return getValue(pathEnd, obj[pathStart]);
        }
        return obj[pathList[index]];
    }
    return false;
}

getValue('address.office.state', business);