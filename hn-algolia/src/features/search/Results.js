import { useSelector, useDispatch } from 'react-redux'
import { searchResults } from './searchSlice'
import cuid from 'cuid'
import { ListGroup } from 'reactstrap'

import { Container } from 'reactstrap'
import { Loader } from '../../components/Loader'
import { Entry } from '../../components/Entry'
import { Error } from '../../components/Error'

export const Results = () => {
    const results = useSelector(searchResults)

    const searchStatus = useSelector(state => state.search.status)
    const error = useSelector(state => state.search.error)

    let content

    if (searchStatus === 'loading') {
        content = <Loader />
    } else if (searchStatus === 'succeeded') {
        content = <ListGroup>{results.hits.map(entry => (
            <Entry data={ entry } key={ cuid() } />
        ))}</ListGroup>
    } else if (searchStatus === 'failed') {
        content = <Error data={ error } />
    }

    return (
        <Container>
            <h2>Results</h2>
            { content }
        </Container>
    )
}