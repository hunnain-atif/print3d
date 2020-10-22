const price = [
    {
        "_id": 0,
        "name": "Any",
        "array": []
    },
    {
        "_id": 1,
        "name": "$0 to $24.99",
        "array": [0, 24.99]
    },
    {
        "_id": 2,
        "name": "$25 to $49.99",
        "array": [25, 49.99]
    },
    {
        "_id": 3,
        "name": "$50 to $74.99",
        "array": [50, 74.99]
    },
    {
        "_id": 4,
        "name": "$75 to $99.99",
        "array": [75, 99.99]
    },
    {
        "_id": 5,
        "name": "More than $100",
        "array": [100, 1500000]
    }
]

const categories = [
    {
        "_id": 1, 
        "name": "3D-Model"
    }, 
    {
        "_id": 2, 
        "name": "3D-Printed Object"
    }
]

export {
    price, categories
}