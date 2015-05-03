var React = require('react'),
    widgets = require('./components/widgets');

module.exports = React.createClass({
    render: function () {
        return (
            <section>
                <h1>MiniPCP Forms Component</h1>
                <widgets.Field/>
            </section>
        );
    }
});
