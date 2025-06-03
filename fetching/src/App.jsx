import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  const [fact, setFact] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('')

  const fetchigCataData = async () => {
    setLoading(true);
    setError('');
    try {

      const response = await axios.get("https://catfact.ninja/fact");
      setFact(response.data.fact)
    } catch (error) {
      setError("Failed to fetch cat fact,", error)
    } finally {
      setLoading(false);
    }
  }


  return (
    <div style={{
      textAlign: "center", padding: "50px", fontFamily: "Arial"
    }}>
      <h1>Random Text For Cat Fact</h1>
      <button onClick={fetchigCataData}>
        Get all Cat Data
      </button>
      {
        loading && <p>Loading...</p>
      }

      {
        error && <p style={{ color: 'red' }}>ERROR : {error}</p>
      }

      {
        fact && <p style={{ marginTop: "20px" }}>{fact}</p>
      }

    </div>
  )
}

export default App
