const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/parapharmacie');

const app = express();
const path = require('path');
const multer = require('multer');
const bcrypt = require('bcrypt')

// import body parser module
const bodyParser = require("body-parser");
const user = require('./models/signup');
const product = require('./models/products');
const shop = require('./models/shopSingle');
const checkout = require('./models/checkout');
const contact = require('./models/contact');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/images', express.static(path.join('backend/images')))

const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg',

}

const storage = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];
        let error = new Error("Mime type is invalid");
        if (isValid) {
            error = null;
        }
        cb(null, 'backend/images')
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + '-' + Date.now() + '-crococoder-' + '.' +
            extension;
        cb(null, imgName);
    }
});


// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});


// business logic SIGNUP (add user)
app.post('/users/signup', (req, res) => {
    bcrypt.hash(req.body.password, 10).then((cryptedPwd) => {
        console.log('here signup', req.body);
        const userObj = new user({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: cryptedPwd,
            tel: req.body.tel
        });
        userObj.save((err, result) => {
            console.log('resultat after save', result);
            if (err) {
                res.status(200).json({
                    message: 'Email exist'
                });
            } else {
                res.status(200).json({
                    message: 'success'
                })

            }
        });
    });
});

// business logic LOGIN
app.post('/users/login', (req, res) => {
    console.log('here into login', req.body);
    user.findOne({ email: req.body.email }).then(
        (emailResult) => {
            console.log('result after find email', emailResult);
            if (!emailResult) {
                res.status(200).json({
                    message: '0',

                })
            }
            return bcrypt.compare(req.body.password, emailResult.password)
        }
    ).then(
        (passwordResult) => {
            if (!passwordResult) {
                res.status(200).json({
                    message: '1'
                })
            }
            user.findOne({ email: req.body.email }).then(
                (findedUser) => {

                    console.log("findedUser", findedUser);
                    res.status(200).json({
                        user: findedUser,
                        message: '2',

                    });
                }
            )
        }
    )

})


// business logic ADD PRODUCT
app.post("/products", multer({ storage: storage }).single("img"), (req, res) => {
    console.log("add all products", req.body);
    let url = req.protocol + "://" + req.get("host");
    const productObject = new product({
        productName: req.body.productName,
        price: req.body.price,
        quantity: req.body.quantity,
        mark: req.body.mark,
        description: req.body.description,
        idEmp: req.body.idEmp,
        img: url + "/images/" + req.file.filename,
    });
    productObject.save();
});

// business logic GET ALL PRODUCT
app.get('/products', (req, res) => {
    product.find((err, doc) => {
        if (err) {
            console.log('erreur', err);
        } else {
            res.status(200).json({
                findedProduct: doc,
            });
        }
    });
});

// business logic GET ALL PRODUCT BY ID
app.get('/products/:id', (req, res) => {
    product.findOne({ _id: req.params.id }).then(
        (result) => {
            res.status(200).json({
                findedProduct: result
            })
        }
    )
})


// business logic ADD SHOP SINGLE
app.post('/shops', (req, res) => {
    console.log('shops', req.body);
    const shopObject = new shop({
        img: req.body.img,
        numberShop: req.body.numberShop,
        productName: req.body.productName,
        price: req.body.price,
        idProd: req.body.idProd,
        somme: req.body.somme,
        idEmp: req.body.idEmp,
    });
    shopObject.save().then((result) => {
        if (result) {
            res.status(200).json({
                message: 'added shop with success'
            });
        }
    });
});

// business logic GET ALL SHOP
app.get('/shops', (req, res) => {
    shop.find((err, doc) => {
        if (err) {
            console.log('erreur', err);
        } else {
            res.status(200).json({
                findedShop: doc,
            });
        }
    });
});

// business logic GET USER BI ID
app.get('/shops/:id', (req, res) => {
    shop.findOne({ _id: req.params.id }).then(

        (result) => {
            res.status(200).json({
                findedSingle: result

            })

        }

    )

})



// business logic EDIT PRODUCT

app.put('/products/:id', (req, res) => {
    product.updateOne({ _id: req.params.id }, req.body).then((result) => {
        if (result) {
            res.status(200).json({
                message: 'Update with success'
            });
        }
    });
});

// business logic DELETE SHOP

app.delete('/shops/:id', (req, res) => {
    shop.deleteOne({ _id: req.params.id }).then((result) => {
        if (result) {
            res.status(200).json({
                message: 'delete with success'
            });
        }
    });
});


// business logic GET USER BI ID
app.get('/users/:id', (req, res) => {
    user.findOne({ _id: req.params.id }).then(

        (result) => {
            res.status(200).json({
                findedUser: result

            })

        }

    )

})

// business logic GET ALL USER
app.get('/users', (req, res) => {
    user.find((err, doc) => {
        if (err) {
            console.log('erreur', err);
        } else {
            res.status(200).json({
                finded: doc,
            });
        }
    });
});

// business logic ADD checkout
app.post('/checkout', (req, res) => {
    console.log('checkout', req.body);
    const checkoutObject = new checkout({
        fName: req.body.fName,
        lName: req.body.lName,
        country: req.body.country,
        adress: req.body.adress,
        phone: req.body.phone,
        aEmail: req.body.aEmail,
        note: req.body.note,
        poste: req.body.poste,
        idEmpl: req.body.idEmpl,

    });
    checkoutObject.save().then((result) => {
        if (result) {
            res.status(200).json({
                message: 'added checkout with success'
            });
        }
    });
});

// business logic GET ALL CHECKOUT
app.get('/checkout', (req, res) => {
    checkout.find((err, doc) => {
        if (err) {
            console.log('erreur', err);
        } else {
            res.status(200).json({
                findedCheckout: doc,
            });
        }
    });
});

// business logic GET CHECKOUT BI ID
app.get('/checkout/:id', (req, res) => {
    checkout.findOne({ _id: req.params.id }).then(

        (result) => {
            res.status(200).json({
                checkout: result

            })

        }

    )

})

// business logic DELETE PRODUCT
app.delete('/products/:id', (req, res) => {
    product.deleteOne({ _id: req.params.id }).then((result) => {
        if (result) {
            res.status(200).json({
                message: 'delete with success'
            });
        }
    });
});
// business logic DELETE PRODUCT
app.delete('/shops', (req, res) => {
    shop.deleteMany((result) => {
        if (result) {
            res.status(200).json({
                message: 'delete with success'
            });
        }
    });
});

// business logic ADD CONTACT
app.post('/contact', (req, res) => {
    console.log('contact', req.body);
    const contactObject = new contact({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message,
    });
    contactObject.save().then((result) => {
        if (result) {
            res.status(200).json({
                message: 'added contact with success'
            });
        }
    });
});


// business logic GET ALL CONTACT
app.get('/contact', (req, res) => {
    contact.find((err, doc) => {
        if (err) {
            console.log('erreur', err);
        } else {
            res.status(200).json({
                findedContatct: doc,
            });
        }
    });
});

// business logic GET CONTACT BI ID
app.get('/contact/:id', (req, res) => {
    contact.findOne({ _id: req.params.id }).then(

        (result) => {
            res.status(200).json({
                findedContact: result

            })

        }

    )
})

// business logic DELETE MESSAGE
app.delete('/contact/:id', (req, res) => {
    contact.deleteOne({ _id: req.params.id }).then((result) => {
        if (result) {
            res.status(200).json({
                message: 'delete with success'
            });
        }
    });
});

app.put('/users/:id', (req, res) => {
    user.updateOne({ _id: req.params.id }, req.body).then((result) => {
        if (result) {
            res.status(200).json({
                message: 'Update with success'
            });
        }
    });
});
module.exports = app;