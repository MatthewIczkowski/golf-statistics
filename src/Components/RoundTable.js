import React from 'react'
import useFirestore from '../Hooks/useFirestore'

const RoundTable = () => {
    const { docs } = useFirestore('rounds');
    // console.log(docs);

    return (
        <div>
            <table>
                <tr>
                    <th>Course Name</th>
                    <th>Holes</th>
                    <th>Score</th>
                </tr>
                {docs && docs.map(doc => (
                    <tr key={doc.id}>
                        <td>{doc.courseName}</td>
                        <td>{doc.holes}</td>
                        <td>{doc.score}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default RoundTable