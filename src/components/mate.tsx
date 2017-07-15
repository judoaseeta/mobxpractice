import * as React from 'react';

class Mate extends React.PureComponent<{
    index: number,
    classmate: ClassMate,
    removeClassMate(i: number): void
}, {}> {
    render() {
        return(
            <li key={this.props.index}>
                  {this.props.classmate.name} - {this.props.classmate.phoneNumber}
                  <span onClick={this.ClickHandler}>-X</span>
            </li>
        );
    }
    private ClickHandler = () => {
        this.props.removeClassMate(this.props.index);
    }
}
export default Mate;