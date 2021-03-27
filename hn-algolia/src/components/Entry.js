import { ListGroupItemHeading, ListGroupItemText, ListGroupItem, NavLink } from 'reactstrap'

export const Entry = props => {
    const { title, story_text, url } = props.data
    return (
        <ListGroupItem>
            <ListGroupItemHeading>{ title }</ListGroupItemHeading>
            <ListGroupItemText>{ story_text }</ListGroupItemText>
            {url ? <NavLink to={url} /> : null}
        </ListGroupItem>
    )
}