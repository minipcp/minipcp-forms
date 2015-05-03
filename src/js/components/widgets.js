var React = require('react'),
    Input = require('react-bootstrap/lib/Input');


var Field = React.createClass({
    render: function () {
        return (
            <Input type="text" label="Teste"/>
        );
    }
});

module.exports = {
    Field: Field
}
