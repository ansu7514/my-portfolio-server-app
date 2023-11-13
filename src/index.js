const exrpess = require('express');

const app = exrpess();
app.set('port', process.env.PORT || 3101);

app.get('/', (req, res) => {
    res.send(`
        <div>
            <h2>my-portfolio-server-app<h2/>
        </div>
    `);
});

app.listen(app.get('port'), () => {
    console.log('server port: ', app.get('port'));
});