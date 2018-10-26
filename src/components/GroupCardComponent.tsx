import * as React from 'react';
// import GroupsResponse from './GroupsResponse';
import Response from '../Response/Response';
import { Button, Card } from 'antd'
import Axios, { AxiosResponse } from 'axios';
import IGroup from 'src/models/IGroup';

export default class GroupCardComponent extends React.Component<{ group: IGroup }, Response<IGroup>>{
    constructor(props: { group: IGroup }) {
        super(props);
        this.joinGroup = this.joinGroup.bind(this);
        this.state = { data: props.group, error: "", statuscode: 0 };
        console.log("Name: " + props.group.name + " -- State: " + JSON.stringify(this.state) + " -- Props: " + JSON.stringify(this.props));
    }

    public render() {
        const flag = this.state.data.maxSize > this.state.data.users.length ? false : true
        const availableSlots = this.state.data.maxSize - this.state.data.users.length;
        return (
            <div style={{ paddingTop: 10, paddingBottom: 10 }}>
                <Card
                    title={'Group name: ' + this.state.data.name}
                    extra={<Button disabled={flag} type='primary' icon="usergroup-add" onClick={this.joinGroup}>Join</Button>}
                    style={{ width: '100%' }}>
                    <p>Available slots: {availableSlots}</p>
                    <p><b>Users in this group:</b></p>
                    {this.state.data.users.length !== 0 ? (
                        <ul>
                            {this.state.data.users.map((userid: string) => <li key={userid}>{userid}</li>)}
                        </ul>
                    ) : (<li>No users in this group!</li>)}
                </Card>
            </div>
        );
    }
    private async joinGroup() {
        const userID = "Coolie33faeafadd3dd33";// get this info from coolie
        const gropupID = this.state.data._id;

        const result: AxiosResponse<Response<IGroup>> =
            await Axios.post('http://localhost:3000/groups/join',
                { "data": { "user_id": userID, "group_id": gropupID } });

        if (result === null || result.data === null || result.data.data === null) {
            alert("Not good: " + result.data.error);
            return;
        }

        this.setState(result.data);
    }
}