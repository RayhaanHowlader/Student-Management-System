import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ResultsPage = () => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isEntered, setIsEntered] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:3000/results')
            .then(response => {
                setResults(response.data);  
                setLoading(false); 
                setTimeout(() => setIsEntered(true), 300); 
            })
            .catch(err => {
                setError('Error fetching results'); 
                setLoading(false);  
            });
    }, []);  

    if (loading) {
        return <div className='flex justify-center items-center h-screen'>Loading...</div>;  
    }
    if (error) {
        return <div className='text-red-500 text-center'>{error}</div>; 
    }

    return (
        < >
        <div className=''>
        <h2 className='p-0 -mb-5 font-bold text-3xl font-serif'>Result's Section</h2>
        <div  className={`container flex-col mx-auto px-4 py-8 ${isEntered?'enter':''}  `}>

            <h2 className='text-2xl text-gray-900 font-bold text-center  font-serif mb-0'>Student's Results</h2>
            <table className='w-full border-collapse shadow-md rounded-lg overflow-hidden' border='1' color="white">
                <thead>
                    <tr className='text-left bg-gray-500'>
                        <th className='p-4'>Roll Number</th>
                        <th className='p-4'>sub 1Marks</th>
                        <th className='p-4'>sub 2 Marks</th>
                    </tr>
                </thead>
                <tbody className='bg-slate-100'>
                    {results.map(result => (
                        <tr key={result._id}  >
                            <td className='p-4 border-b text-gray-900 border-black'>{result.rollno}</td>
                            <td className='p-4 border-b text-gray-900 border-black'>{result.sub1}</td>
                            <td className='p-4 border-b text-gray-900 border-black'>{result.sub2}</td>
                        </tr>
))}
                </tbody>
            </table>
        </div>
        </div>
        </>
    );
};

export default ResultsPage;
