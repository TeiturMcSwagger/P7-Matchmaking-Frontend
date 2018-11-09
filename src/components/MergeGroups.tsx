import * as React from "react";
import axios from 'axios';
import { Button } from '../UI'
import { GroupService, UserService, GroupResponse } from "../services/interfaces";
import { __await } from 'tslib';
import { GroupServiceApi } from 'src/services/groupServiceApi';
import { RouteComponentProps, withRouter } from 'react-router';

interface GroupStates {
    fromGroupid: string,
    toGroupid: string,
}

interface GroupProps {
    fromGroupid: string,
    toGroupid: string
}

export default class MergeGroups extends React.Component<RouteComponentProps & GroupProps, GroupStates> {
    private groupService;
    constructor(props: RouteComponentProps & GroupProps){
        super(props);
        // this.fromGroupid = this.props.userService.getUserInfo().groupId;
        // this.toGroupid = this.props.userService.getUserInfo().groupId;
        this.groupService = new GroupServiceApi();
        this.state = { fromGroupid: this.props.fromGroupid,
                       toGroupid: this.props.toGroupid,
                        };
    }

    private handleClick = async () => {
        console.log("Inside handler for button click")
       const response = await this.groupService.mergeGroups(this.props.fromGroupid, this.props.toGroupid);
       console.log("Request accepted: " + `/groups/${this.props.toGroupid}`)
        // request.then((response) => {
        //     console.log("Request accepted: " + JSON.stringify(response))
        this.props.history.replace(`/groups/${this.props.toGroupid}`);
 //       this.props.onMergeHandler(response);
        // });
    };
    public render() {
        return (
            <div>
                <ul>
                    <Button onClick={this.handleClick}> Join as a team </Button>
                </ul>
            </div>
        )
    }
}

//export default withRouter(MergeGroups);