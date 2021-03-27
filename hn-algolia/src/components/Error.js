import { Card, CardHeader, CardBody, CardTitle, CardText } from 'reactstrap'

export const Error = props => {
    return (
        <Card className='text-white bg-danger mb-3'>
            <CardHeader>Something Went Wrong...</CardHeader>
            <CardBody>
                <CardTitle>Sorry</CardTitle>
                <CardText>{ props.data }</CardText>
            </CardBody>
        </Card>
    )
}