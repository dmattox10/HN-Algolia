import { Badge } from 'reactstrap'

export const Query = props => {
    return (
        <Badge color='primary' onClick={ () => props.setSearch() }>{ props.query }</Badge>
    )
}