import { ListGroupItemHeading, ListGroupItemText, ListGroupItem } from 'reactstrap'

export const Entry = props => {
    const { title, story_text, url } = props.data
    return (
        <ListGroupItem>
            <ListGroupItemHeading>{ title }</ListGroupItemHeading>
            <ListGroupItemText>{ story_text }</ListGroupItemText>
            {url ? <a href={url}>Read More</a> : null}
        </ListGroupItem>
    )
}