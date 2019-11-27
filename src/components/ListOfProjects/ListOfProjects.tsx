import React from 'react'
import { db } from '../../firebase/firebase'
export interface ListOfProjectsProps {

}

export interface ListOfProjectsState {
    projects: Iprojects[];
}

interface Iprojects {
    added: Idate;
    description: string;
    mainGoals: string;
    programmingLang: string;
    projectName: string;
    shortDescription: string;
    seconds: number;
}

interface Idate {
    seconds: number;
    nanoseconds: number;
}



class ListOfProjects extends React.Component<ListOfProjectsProps, ListOfProjectsState> {
    state = {
        projects: []
    }
    componentDidMount() {
        const projects: Iprojects[] = []
        db.collection('projects').get().then(data => data.docs.forEach(doc => {
            console.log(doc.data())
            const dbData: any = doc.data()
            projects.push(dbData)
            this.setState({
                projects
            })
        }))
    }
    render() {
        let listProjects
        if (this.state.projects) {
            const mappedProjects = this.state.projects.map((project: Iprojects, index: number) => {
                return (
                    <li key={index}>
                        <div>{project.projectName}</div>
                        <div>{project.description}</div>
                        <div>{project.shortDescription}</div>
                        <div>{project.programmingLang}</div>
                        <div>{project.mainGoals}</div>
                        <div>{project.added.seconds}</div>
                    </li>
                )
            })
            listProjects = mappedProjects
        }
        return (
            <>
                <h1>List of projects</h1>
                {listProjects}
            </>
        );
    }
}

export default ListOfProjects;