import React, { Component } from 'react';

class CreateProject extends Component {
    state = {}
    render() {
        return (
            <>
                <h1>Project info</h1>
                <label htmlFor="">Project name</label>
                <br />
                <input type="text" />
                <br />
                <label htmlFor="">Programming languages</label>
                <br />
                <input type="text" />
                <br />
                <label htmlFor="">Description</label>
                <br />
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <br />
                <label htmlFor="">Main Goals</label>
                <br />
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <br />
                <label htmlFor="">Contact</label>
                <br />
                <input type="text" />
                <br />
                <button>Save</button>
            </>
        );
    }
}

export default CreateProject;