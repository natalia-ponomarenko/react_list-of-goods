import React from 'react';
import './App.css';
import { Button } from './Button';

const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

class App extends React.Component {
  state = {
    isStartButtonVisible: true,
    goods: goodsFromServer,
  }

  showList = () => {
    this.setState(prevState => ({
      isStartButtonVisible: !prevState.isStartButtonVisible,
      goods: prevState.goods,
    }));
  }

  reverseList = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  }

  sortAlphabetically = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort(
        (current, next) => current.localeCompare(next),
      ),
    }));
  }

  sortByLength = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort(
        (current, next) => next.length - current.length,
      ),
    }));
  }

  resetList = () => {
    this.setState(() => ({
      goods: goodsFromServer,
    }));
  }

  render() {
    const { isStartButtonVisible, goods } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        {isStartButtonVisible && (
          <Button
            callback={this.showList}
            text="Start"
          />
        )
        }

        {!isStartButtonVisible && (
          <>
            <ul>
              {goods.map(product => (
                <li key={product}>
                  {product}
                </li>
              ))}
            </ul>

            <Button
              callback={this.reverseList}
              text="Reverse"
            />

            <Button
              callback={this.sortAlphabetically}
              text="Sort Alphabetically"
            />

            <Button
              callback={this.sortByLength}
              text="Sort By Length"
            />

            <Button
              callback={this.resetList}
              text="Reset"
            />
          </>
        )
      }
      </div>
    );
  }
}

export default App;
