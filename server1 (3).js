const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const path = require('path');

// Initialize Express
const app = express();
const port = 3002;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB URI and Client Setup
const uri = 'mongodb://localhost:27017'; // Replace with your MongoDB URI
const client = new MongoClient(uri);

// Route to serve the HTML form
app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'feedback.html'));
});
app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'feedback.html'));
});

// Route to handle form submission
app.post('/submit', async (req, res) => {
    const { name, contact,date,reason,food_rating, ambience, service_rating, comment } = req.body;
    try {
        // Connect to MongoDB
        await client.connect();
        const database = client.db('Signature_Spice'); // Replace with your database name
        const collection = database.collection('feedback_form'); // Replace with your collection name

        // Insert data into MongoDB
        const result = await collection.insertOne({
            name, contact,date,reason,food_rating, ambience, service_rating, comment,createdAt: new Date()
        });

        res.redirect('index.html')
    } catch (err) {
        console.error(err);
        res.status(500).send('Error occurred while submitting the form');
    } finally {
        // Close the connection
        await client.close();
    }
});

app.post('/booking-done', async (req, res) => {
    const { date,time,counter,name,mobileno,email,request } = req.body;
    try {
        // Connect to MongoDB
        await client.connect();
        const database = client.db('Signature_Spice'); // Replace with your database name
        const collection = database.collection('table-booking'); // Replace with your collection name
        const date1=new Date();
        if (date>=date){
            const result = await collection.insertOne({
                date,time,counter,name,mobileno,email,request,createdAt: new Date()
            });
        }
        // Insert data into MongoDB
        res.redirect('payment1.html')
    } catch (err) {
        console.error(err);
        res.status(500).send('Error occurred while submitting the form');
    } finally {
        // Close the connection
        await client.close();
    }
});

app.post('/contact', async (req, res) => {
    const { name, contact_us, comment } = req.body;
    try {
        // Connect to MongoDB
        await client.connect();
        const database = client.db('Signature_Spice'); // Replace with your database name
        const collection = database.collection('contact-us'); // Replace with your collection name

        // Insert data into MongoDB
        const result = await collection.insertOne({
            name, contact_us, comment,createdAt: new Date()
        });
        res.redirect('index.html')
    } catch (err) {
        console.error(err);
        res.status(500).send('Error occurred while submitting the form');
    } finally {
        // Close the connection
        await client.close();
    }
});


app.post('/orderconfirm', async (req, res) => {
    const { name, phone, address, country, city, totalPriceInput, totalQuantityInput } = req.body;
    try {
        // Connect to MongoDB
        await client.connect();
        const database = client.db('Signature_Spice'); // Replace with your database name
        const collection = database.collection('orders'); // Replace with your collection name

        // Insert data into MongoDB
        const result = await collection.insertOne({
            name, phone, address, country, city , totalPriceInput, totalQuantityInput ,createdAt: new Date()
        });
        res.redirect('payment.html')
    } catch (err) {
        console.error(err);
        res.status(500).send('Error occurred while submitting the form');
    } finally {
        // Close the connection
        await client.close();
    }
});
app.get('/api/latest-order', async (req, res) => {
    try {
        await client.connect();
        const database = client.db('Signature_Spice');
        const collection = database.collection('orders');

        const latestOrder = await collection.findOne({}, { sort: { createdAt: -1 } });

        if (latestOrder) {
            res.json({ totalPriceInput: latestOrder.totalPriceInput });
        } else {
            res.status(404).json({ error: 'No orders found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error fetching the order' });
    } finally {
        await client.close();
    }
});

// app.get('/api/latest-order1', async (req, res) => {
//     try {
//         await client.connect();
//         const database = client.db('Signature_Spice');
//         const collection = database.collection('table-booking');

//         const latestOrder = await collection.findOne({}, { sort: { createdAt: -1 } });

//         if (latestOrder) {
//             res.json({ counter: latestOrder.counter });
//         } else {
//             res.status(404).json({ error: 'No orders found' });
//         }
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ error: 'Error fetching the order' });
//     } finally {
//         await client.close();
//     }
// });


app.get('/api/latest-order1', async (req, res) => {
    try {
        await client.connect();
        const database = client.db('Signature_Spice');
        const collection = database.collection('table-booking');

        const latestOrder = await collection.findOne({}, { sort: { createdAt: -1 } });

        if (latestOrder) {
            const counter = latestOrder.counter;
            const totalAmount = counter * 250; // Calculate total amount per guest
            res.json({ counter: counter, totalAmount: totalAmount });
        } else {
            res.status(404).json({ error: 'No orders found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error fetching the order' });
    } finally {
        await client.close();
    }
});




// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});