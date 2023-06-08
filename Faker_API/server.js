const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');

const createUser = () => {
    const newUser = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        phoneNumber: faker.phone.number('501-###-###'),
        email: faker.internet.email(),
        password: faker.internet.password(),
        _id: faker.string.uuid()
    };
    return newUser;
};

const createCompany = () => {
    const newCompany = {
        name: faker.company.name(),
        address: {
            street: faker.location.street(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country()
        },
        _id: faker.string.uuid()
    };
    return newCompany;
};

app.get("/api/users/new", (req, res) => {
    const newFakeUser = createUser();
    res.json(newFakeUser);
});

app.get("/api/companies/new", (req, res) => {
    const newFakeCompany = createCompany();
    res.json(newFakeCompany);
});

app.get("/api/user/company", (req, res) => {
    const newUser = createUser();
    const newCompany = createCompany();

    const newFakeUserCompany = {
        user: newUser,
        company: newCompany
    };
    res.json(newFakeUserCompany);
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );