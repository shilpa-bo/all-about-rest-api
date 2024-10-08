const Joi = require('joi')
const express = require('express')
const app = express();
app.use(express.json()) //adding a piece of middleware, app.use(middleware) in the request processing pipeline
const port = process.env.PORT || 3000 //set environment variable with export PORT=5000

function validateCourse(course) {
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });
    return schema.validate(course);
}
const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'},
    {id: 4, name: 'course4'}
];
//defind a route, specify path/url and then a callback function/route handler
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api/courses', (req, res) => {
    // normally we would get the courses from a database and we would return it
    res.send(courses);
});

// want to implement a path with course id 
// maybe we can use this to display the NASA APOD /:year/:date/:month
app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c=>c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with the given ID was not found');
    res.send(course);

});

app.post('/api/courses/', (req, res) => {
    // input validation:
    const { error } = validateCourse(req.body) //result.error
    if(error) return res.status(400).send(error.details[0].message);

    const course = {
        id: courses.length + 1,
        name: req.body.name,
    };
    courses.push(course);
    res.send(course); //we assign id on server, so we need to return the course object to the client, client needs to know ID
});

app.put('/api/courses/:id', (req, res) => {
    // Look up the course with the given ID
    // if not existing, return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('The course with the given ID was not found')
    /// If we try to update with an invalid value
    const { error } = validateCourse(req.body) //result.error, variable destructuring
    if(error) return res.status(400).send(error.details[0].message);

    // update course
    // return the updated course- HTTP put request
    course.name = req.body.name;
    res.send(course);

});

app.delete('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('The course with the given ID was not found')
    // Delete
    const index = courses.indexOf(course);
    courses.splice(index, 1); //splice method removes object from courses array by index, and how many objects to remove

    // Return the same course
    res.send(course)
});

app.listen(port, () => {
    console.log(`Lisening on port ${port}...`)
});


