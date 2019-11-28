import React, { Component } from 'react';
import { db } from '../../firebase/firebase'

interface CreateProjectState {
    projectName: string,
    // do zmiany na tablice
    programmingLang: string,
    description: string,
    shortDescription: string,
    mainGoals: string,
    contact: string,
}

class CreateProject extends Component<CreateProjectState> {
    state = {
        projectName: '',
        programmingLang: 'Javascript',
        description: '',
        shortDescription: '',
        mainGoals: '',
        errors: {
            projectName: false,
            programmingLang: false,
            description: false,
            shortDescription: false,
            mainGoals: false,
        }
    }

    errorMessages = {
        projectName: 'required/max 6 words',
        programmingLang: 'choose at least 3 ',
        description: 'description should be at least 12 words',
        shortDescription: 'max 10-12 words,required',
        mainGoals: 'required ? ?',
    }

    //any do zmiany
    handleInputChange = (e: any): void => {
        const name = e.target.name
        const value = e.target.value
        this.setState({
            [name]: value
        });
    }

    onSubmit = (): void => {
        const { projectName, programmingLang, description, shortDescription, mainGoals } = this.state;
        // connection to firebase db
        // db.collection('projects').get().then(data => data.docs.forEach(doc => {
        //     console.log(doc.data())
        // }))
        const added = new Date()
        db.collection('projects').add({
            projectName,
            shortDescription,
            description,
            programmingLang,
            mainGoals,
            added
        })
    }

    render() {
        return (
            <>
                <h1>Project info</h1>
                <br />
                <label htmlFor="">Photo/logo</label>
                <br />
                <input type="file" name="photo" id="" onChange={this.handleInputChange} />
                <br />
                <div>Your logo</div>
                <br />
                <label htmlFor="">Project name*</label>
                <br />
                <input name='projectName' type="text" onChange={this.handleInputChange} value={this.state.projectName} />
                <br />
                <div>{this.errorMessages.projectName}</div>
                <br />
                <label htmlFor="">Programming languages*</label>
                <br />
                <select name="programmingLang" id="" onChange={this.handleInputChange}>
                    <option value="Javascript">Javascript</option>
                    <option value="Javascripttt">Javascripttt</option>
                    <option value="Javascript">Javascript</option>
                    <option value="Javascript">Javascript</option>
                    <option value="Javascript">Javascript</option>
                    <option value="Javascript">Javascript</option>
                    <option value="Javascript">Javascript</option>
                </select>
                <br />
                <div>{this.errorMessages.programmingLang}</div>
                <br />
                <label htmlFor="">Description*</label>
                <br />
                <textarea name="description" id="" cols={30} rows={10} onChange={this.handleInputChange} value={this.state.description} ></textarea>
                <br />
                <div>{this.errorMessages.description}</div>
                <br />
                <label htmlFor="">Main Goals</label>
                <br />
                <textarea name="mainGoals" id="" cols={30} rows={10} onChange={this.handleInputChange} value={this.state.mainGoals} ></textarea>
                <br />
                <div>{this.errorMessages.mainGoals}</div>
                <br />
                <label htmlFor="">Short Description*</label>
                <br />
                <input name='shortDescription' type="text" onChange={this.handleInputChange} value={this.state.shortDescription} />
                <br />
                <div>{this.errorMessages.shortDescription}</div>
                <br />
                <button onClick={this.onSubmit} >Save</button>
            </>
        );
    }
}

export default CreateProject;