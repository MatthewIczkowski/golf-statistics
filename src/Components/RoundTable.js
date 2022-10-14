import React from 'react';
import useFirestore from '../Hooks/useFirestore';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const RoundTable = () => {
    const { docs } = useFirestore('rounds');
    // console.log(docs);

    const handleDelete = (e) => {
        console.log(e);
        console.log("delete button clicked");
    }

    return (
        <div>
            <table>
                <tr>
                    <th>Course Name</th>
                    <th>Holes</th>
                    <th>Score</th>
                    <th>Delete Round</th>
                </tr>
                {docs && docs.map(doc => (
                    <tr key={doc.id}>
                        <td>{doc.courseName}</td>
                        <td>{doc.holes}</td>
                        <td>{doc.score}</td>
                        <td><DeleteForeverIcon color="primary" onClick={handleDelete} /></td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default RoundTable