import React, {Component} from 'react';
import './App.css';
import {inject, observer} from 'mobx-react';
import {Button, Form, FormGroup, Label, Input, FormText,Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,} from 'reactstrap';


@inject('progApplicationStore')
@observer
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            url: '',
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();

        const application = {
            title: this.state.title,
            description: this.state.description,
            url: this.state.url,
        };
        this.props.progApplicationStore.addApplication(application);
        this.setState({
            title: '',
            description: '',
            url: '',
        });
    }

    render() {
        const {progApplicationStore} = this.props;
        return (
            <div className="App">
                <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
                    <div className="container">
                        <a href="../" className="navbar-brand">Mother Cave</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarResponsive"
                                aria-controls="navbarResponsive" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav">

                            </ul>

                        </div>
                    </div>
                </div>
                <main className="container">
                    <h2>We have {progApplicationStore.applicationCount} Application inserted in our store</h2>

                    <Form onSubmit={this.onSubmit}>
                        <FormGroup>
                            <Label for="title">Application Name <span className="text-danger">*</span></Label>
                            <Input type="text" name="title" id="title" placeholder="Enter application name..."
                                   required
                                   onChange={this.onChange}
                                   value={this.state.title}/>
                            <FormText color="muted">You can use an anonymous name.</FormText>
                        </FormGroup>
                        <FormGroup>

                            <Label for="description">Application Description <span
                                className="text-danger">*</span></Label>
                            <Input type="textarea" name="description" id="description"
                                   placeholder="Write what the application s about..."
                                   required
                                   onChange={this.onChange}
                                   value={this.state.description}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="url">Application URL <span className="text-danger">*</span></Label>
                            <Input type="url" name="url" id="url" placeholder="Enter application URL..."
                                   onChange={this.onChange}
                                   value={this.state.url}/>
                        </FormGroup>
                        <Button >Submit</Button>
                    </Form>
                    { this.props.progApplicationStore.applications.map((application) =>{
                        <Card key={application}>
                            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                            <CardBody>
                                <CardTitle>{application.title}</CardTitle>
                                <CardSubtitle><a hre={application.url}>Application URL</a></CardSubtitle>

                                <CardText>{application.description}</CardText>
                                <Button>Button</Button>
                            </CardBody>
                        </Card>
                    })
                    }


                </main>
            </div>
        );
    }
}

export default App;
