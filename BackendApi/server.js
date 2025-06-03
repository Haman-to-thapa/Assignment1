import express from 'express'

const app = express()
const PORT = 3000;

function isPrim(n) {
  if (typeof n !== 'number' || n < 2 || !Number.isInteger(n)) return false; // primes are integers >=2
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  const limit = Math.sqrt(n);
  for (let i = 3; i <= limit; i += 2) {
    if (n % i === 0) return false;
  }

  return true;
}

app.get('/is-prime', (req, res) => {
  const num = parseInt(req.query.number, 10);

  if (isNaN(num)) {
    return res.status(400).json({ error: 'Please provide a valid number' });
  }

  res.json({ number: num, isPrime: isPrim(num) });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
