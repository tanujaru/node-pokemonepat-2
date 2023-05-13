const React = require('react');
//new pokeymon
class New extends React.Component {
  render() {
    return (
        <div>
            <h1>New Pokemon page</h1>
            <form action="/pokemon" method="POST">
                Name: <input type="text" name="name" /><br/>
                IMG: <input type="url" name="img" /><br/>
                <input type="submit" name="" value="Create Pokemon"/>
             </form>
             <a href="/pokemon"> back to the page </a>
        </div>);
  }
}

module.exports = New;