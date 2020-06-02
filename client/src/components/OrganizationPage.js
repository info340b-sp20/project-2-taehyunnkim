import React from 'react';
import {Card, CardImg, CardText, CardBody,
    CardTitle} from 'reactstrap';

class OrganizationCard extends React.Component {
    render() {
        let org = this.props.organization;
        return(
            <a target="_blank" href={org.website} rel="noopener noreferrer">
                <Card id={org.name} className='org-card' aria-label={org.name+" card: click to visit their website"}> 
                    <CardImg src={org.image} alt={org.name + " Logo"}/>
                    <CardBody>
                        <CardTitle>{org.name}</CardTitle>
                        <CardText>{org.info}</CardText>
                    </CardBody>
                </Card>
            </a>

        );
    }
}

export default class OrganizationList extends React.Component {
    render() {
        let organizationCards = this.props.organizations.map((organization)=>{
            return <OrganizationCard key={organization.name} organization={organization}/>
        })
        return(
            <div id='organization-list' className="container" aria-label="list of organizations for donation">
                {organizationCards}
            </div>
        );
    }
}