import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


export default class OrganizationList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { search: '' }; 
    }

    handleChange = (event) => {
        this.setState({search: event.target.value});
    }

    render() {
        let organizationCards;
        let matchedOrganizations = this.props.organizations;

        if (this.state.search) {
            matchedOrganizations = this.props.organizations.filter((organization) => {
                let orgName = organization.name.toLowerCase();
                let search = this.state.search.toLowerCase();
                return orgName.includes(search);
            })
        }
        organizationCards = matchedOrganizations.map((organization) => {
            return <OrganizationCard key={organization.name} organization={organization} />
        })

        return (
            <div id='organization-list' className="container">
                <OrganizationSearchBar handleChange={()=>{this.handleChange}} />
                {organizationCards}
            </div>
        );
    }
}

class OrganizationCard extends React.Component {
    render() {
        let org = this.props.organization;
        return (
            <a target="_blank" href={org.website} rel="noopener noreferrer">
                <Card id={org.name} className='org-card'>
                    <CardImg src={org.image} alt={org.name + " Logo"} />
                    <CardBody>
                        <CardTitle>{org.name}</CardTitle>
                        <CardText>{org.info}</CardText>
                    </CardBody>
                </Card>
            </a>

        );
    }
}

class OrganizationSearchBar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="orgSearchBar">Search for Organization to Donate:</Label>
                    <Input type="text" name="orgSearch" id="orgSearch" placeholder="Eg. American Red Cross" onChange = {(event)=>{this.props.handleChange(event)}} />
                </FormGroup>
            </Form>

        );
    }
}
