'use strict';

function Homepage() {
  return (
    <div>
      Welcome! <br /> <br />
      <a href="/cards">Look at the Cards</a> <br /> <br />
      <img src="/static/img/balloonicorn.jpg" alt="Balloonicorn"></img> <br /> <br />
      <a href="/about">About us!</a>
    </div>);
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
