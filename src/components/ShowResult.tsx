import React from 'react'
import {useSelector} from 'react-redux';
import {useTypedSelector} from '../hooks/useTypedSelector';

const ShowResult:React.FC = () => {
    const {sum} = useTypedSelector((state:any) => state.count);
 
    return (
        <div>
            <h2>{sum}</h2>
        
        </div>
    )
}

export default ShowResult
