import React from 'react';
import './App.css'
import slugify from 'slugify';
import Features from './Features';
import Customizer from './Customizer';
import ListItem from './ListItem';
import Cart from './Cart';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});


export default class AppTest extends React.Component {
  state = {
    features: Features,
    selected: {
          Processor: {
            name: '17th Generation Intel Core HB (7 Core with donut spare)',
            cost: 700
          },
          'Operating System': {
            name: 'Ubuntu Linux 16.04',
            cost: 200
          },
          'Video Card': {
            name: 'Toyota Corolla 1.5v',
            cost: 1150.98
          },
          Display: {
            name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
            cost: 1500
          }
        }
      }
  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
    console.log(`updateFeature selected is ${selected}`)
  };
      render() {
        //return an ARRAY of all the Object's keys and map over that array to get a heading and index
        const features = Object.keys(this.state.features).map((feature, idx) => {
          const featureHash = feature + '-' + idx;
          const options = this.state.features[feature].map(item => {
            const itemHash = slugify(JSON.stringify(item));
            return (
              <div key={itemHash} className="feature__item">
                  <ListItem
                    type="radio"
                    id={itemHash}
                    className="feature__option"
                    name={slugify(feature)}
                    
                    options={`${item.name} ${item.cost}`}
                    checked={item.name === this.state.selected[feature].name}
                    onChange={e => this.updateFeature(feature, item)}
                    cost={USCurrencyFormat.format(item.cost)}
                    />
                  
              </div>
              )
            
          })
            return (
              <Customizer key={featureHash} name={feature}>
                  {options}
              </Customizer>
              )
            })

        const summary = Object.keys(this.state.selected).map((feature, idx) => {
          const featureHash = feature + '-' + idx;
          const selectedOption = this.state.selected[feature];
          //console.log(`feature is ${feature}`)
          return (
            <Cart
              key={featureHash}
              feature={feature}>
              <div className="summary__option" >
              <div className="summary__option__label">{feature} </div>
              <div className="summary__option__value">{selectedOption.name}</div>
              <div className="summary__option__cost">
                {USCurrencyFormat.format(selectedOption.cost)}
              </div>
              </div>
            </Cart>
           
            )
          })
        
          const total = Object.keys(this.state.selected).reduce(
            (acc, curr) => acc + this.state.selected[curr].cost, 0
          );
        return (
          <div className="App">
            <header>
              <h1>ELF Computing | Laptops</h1>
            </header>
            <main>
            <form className="main__form">
              <h2>Customize your laptop</h2>
              {features}
            </form>
            <section className="main__summary">
              <h2>Your cart</h2>
              {summary}
              <div className="summary__total">
                <div className="summary__total__label">Total</div>
                <div className="summary__total__value">
                  {USCurrencyFormat.format(total)}
                </div>
              </div>
            </section>
            </main>
          </div>
        )
      }
}