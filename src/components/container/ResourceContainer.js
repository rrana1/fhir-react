import React from 'react';
import CodeBlock from './CodeBlock';

class ResourceContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jsonOpen:
        typeof this.props.jsonOpen === 'undefined'
          ? false
          : this.props.jsonOpen,
    };
  }

  render() {
    return (
      <div className="fhir-container__ResourceContainer__card">
        <div className="fhir-container__ResourceContainer__card-body">
          {this.props.children}
          <div className="fhir-container__ResourceContainer__json-button-wrapper">
            <button
              type="button"
              className="fhir-container__ResourceContainer__json-button"
              onClick={() => this.setState({ jsonOpen: !this.state.jsonOpen })}
              data-target={`${this.props.fhirResource.resourceType}/${this.props.fhirResource.id}`}
            >
              JSON
            </button>
          </div>
          <div
            className={
              this.state.jsonOpen
                ? 'fhir-container__ResourceContainer__json--visible'
                : 'fhir-container__ResourceContainer__json--hidden'
            }
          >
            <CodeBlock code={this.props.fhirResource} />
          </div>
        </div>
      </div>
    );
  }
}

export default ResourceContainer;
