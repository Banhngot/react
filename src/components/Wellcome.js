import React, { Component } from 'react'

class Wellcome extends Component {

    // state = {
    //     name: 'Eric',
    //     age: 24,
    // }

    // handleOnChangeName = (event) => {
    //     this.setState({
    //         name: event.target.value
    //     })
    // }

    // handleOnClick = (event) => {
    //     alert('click me')
    // }

    // render() {
    //     return (
    //         <>
    //             <div className='frist'>
    //                 {/* <p>Hello my name is  {this.state.name}</p> */}
    //                 <h1>hello</h1>
    //             </div>

    //             <div className='second'>
    //                 <input value={this.state.name} type='text'
    //                     onChange={(event) => this.handleOnChangeName(event)}
    //                 />
    //                 My name is {this.state.name}

    //             </div>

    //             <div className='third'>
    //                 <button onClick={() => this.handleOnClick()}>Click me</button>
    //             </div>

    //         </>
    //     )
    // }

    // Form HTML 

    state = {
        fristname: '',
        lastname: '',
    }

    handleOnChangFristName = (event) => {
        this.setState({
            fristname: event.target.value
        }
        )
    }

    handleOnChangLastName = (event) => {
        this.setState({
            lastname: event.target.value
        })
    }

    handOnClick = () => {
        alert('click me')
    }

    render() {
        return (
            <>
                <form >
                    <label htmlFor="fname">First name:</label><br />
                    <input
                        type="text"
                        onChange={(event) => this.handleOnChangFristName(event)}
                        value={this.state.fristname} />
                    <br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input type="text"
                        onChange={(event) => this.handleOnChangLastName(event)}
                        value={this.state.lastname}
                    />
                    <br />
                    <br />
                    <button onClick={(event) => this.handOnClick(event)}>submit</button>
                </form>

                <div><p>vui</p></div>
            </>
        )
    }

}

export default Wellcome