const app = require('express')();
app.listen(
  process.env.PORT || 3000,
  () => console.log('Server running...')
)

app.get('/api/account/customer', async function (req,res) {

  res.status(418).send({firstName: 'Sandy'})

});
