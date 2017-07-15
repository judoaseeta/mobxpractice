import * as React from 'react';

class AddClassMate extends React.PureComponent<{
    addMate: (mate: ClassMate) => void;
}, {
    name: string,
    phone: string
}> {
    state = {
        name: '',
        phone: ''
    };
    render() {
        return(
            <form>
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    name="name" 
                    value={this.state.name}
                    onChange={this.inputHandler}
                />
                <label htmlFor="phone">Phone</label>
                <input 
                    type="text" 
                    name="phone"
                    value={this.state.phone}
                    onChange={this.inputHandler}
                />
                <button
                    disabled={this.checkLength()}
                    onClick={this.submitHandler}
                >submit
                </button>
            </form>
        );
    }
    private inputHandler = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name] : value
        });
    }
    private checkLength = (): boolean => {
        return !(this.state.name.length > 1);
    }
    private submitHandler = (e: any) => {
        e.preventDefault();
        let newMate: ClassMate = {
            name: this.state.name,
            phoneNumber: this.state.phone
        };
        this.props.addMate(newMate);
    }
}
export default AddClassMate;