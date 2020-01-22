import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [
        { id: 1, name: 'Matthieu' },
        { id: 2, name: 'Toto' }
      ],
      newCustomer: ''
    };
  }

  handleChange = (event) => {
    // On récupère la valeur saisie dans le formulaire d'ajout
    console.log(event.target.value);
    this.setState({ newCustomer: event.target.value });
  }

  /**
   * Traitement du formulaire
   */
  handleSubmit = (event) => {
    event.preventDefault();
    console.log('FORMmmmm : ' + this.state.newCustomer);

    // Ajouter le nouveau client dans le state...
    let customers = this.state.customers.slice(); // slice() permet de faire une copie du tableau
    customers.push({ id: customers.length + 1, name: this.state.newCustomer });
    // On remplace le tableau customers
    this.setState({ customers: customers });
  }

  handleDelete = (event, index) => {
    // Supprimer le client cliqué du tableau
    let customers = this.state.customers.slice();

    // Je dois trouver dans le tableau, le client qui a l'index concerné
    customers.splice(index, 1);

    this.setState({ customers: customers });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.customers.map((customer, index) =>
            <li key={customer.id}>
              {customer.name} <button onClick={(e) => this.handleDelete(e, index)}>X</button>
            </li>
          )}
        </ul>

        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.newCustomer} onChange={this.handleChange} />
          <button>Ajouter</button>
        </form>
      </div>
    );
  }
}

export default App;
