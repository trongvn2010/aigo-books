const prod = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.BASE_URL': prod ? 'https://aigo-books.herokuapp.com' : 'http://localhost:3000',
  'process.env.NAMESPACE': 'https://aigo-books.herokuapp.com',
  'process.env.CLIENT_ID': 'jw3E3wAoKteBG9wjcMj9dsJ55hVxqtaB'
}
