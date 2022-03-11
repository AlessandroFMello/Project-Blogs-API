const express = require('express');
const { userRoute } = require('./routes');
const { errorMiddleware } = require('./middlewares');

const app = express();
app.use(express.json());

app.use('/user', userRoute);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use(errorMiddleware);

app.listen(3000, () => console.log('ouvindo porta 3000!'));