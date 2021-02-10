import React, {Fragment} from 'react'

import {useSelector} from 'react-redux';
import {useTypedSelector} from '../hooks/useTypedSelector';

const ShowResult:React.FC = () => {
    const {sum} = useTypedSelector((state:any) => state.count);
 
    return (
        <Fragment>
            <h2>{sum}</h2>
        </Fragment>
    )
}

export default ShowResult
