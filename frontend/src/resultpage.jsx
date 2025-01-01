import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './r.module.css'
const ResultsPage = () => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3000/results')
            .then(response => {
                setResults(response.data);  
                setLoading(false);  
            })
            .catch(err => {
                setError('Error fetching results'); 
                setLoading(false);  
            });
    }, []);  

    if (loading) {
        return <div>Loading...</div>;  
    }
    if (error) {
        return <div>{error}</div>; 
    }

    return (
        <div className={styles.container}>
            <h2>Student Results</h2>
            <table border="1" color="white">
                <thead>
                    <tr>
                        <th>Roll Number</th>
                        <th>sub 1Marks</th>
                        <th>sub 2 Marks</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map(result => (
                        <tr key={result._id}>
                            <td>{result.rollno}</td>
                            <td>{result.sub1}</td>
                            <td>{result.sub2}</td>
                        </tr>
))}
                </tbody>
            </table>
        </div>
    );
};

export default ResultsPage;
