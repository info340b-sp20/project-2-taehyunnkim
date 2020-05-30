import React from 'react';
import {Card, CardImg, CardText, CardBody,
    CardTitle, Col, Row} from 'reactstrap';

class OrganizationCard extends React.Component {
    render() {
        let org = this.props.organization;
        return(
            <Col sm="4">
                <Card id={org.name}>
                    <CardImg top width="100%" src={org.image} alt={org.name + " Logo"}/>
                    <CardBody>
                        <CardTitle>{org.name}</CardTitle>
                        <CardText>{org.info}</CardText>
                    </CardBody>
                </Card>
            </Col>

        );
    }
}

export default class OrganizationList extends React.Component {
    render() {
        let organizationCards = this.props.organizations.map((organization)=>{
            return <OrganizationCard organization={organization}/>
        })
        return(
            <div className="orgniazationList">
                <Row>
                    {organizationCards}
                </Row>
            </div>
        );
    }
}