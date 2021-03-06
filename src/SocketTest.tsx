import * as React from 'react';
import WSGroupService from './services/WSGroupService';

export default class SocketTest extends React.Component<{}, {count : number}> {
    private WSGroupService : WSGroupService;
    constructor(props : {}){
        super(props);
        this.state = {"count" : 1};
        this.WSGroupService = new WSGroupService("");
        this.WSGroupService.registerEventHandler('timer', this.onTimerCallback);
        this.onButtonHit = this.onButtonHit.bind(this);
        // this.WSGroupService.subscribeToTimer(this.state.count);
    }

    public render(){
        return (
            <div>
                <p>{this.state.count}</p>
                // eslint-disable-next-line
                {/* <button onClick={this.onButtonHit}>Increment count</button> */}
            </div>
        );
    }   
    
    private onTimerCallback = (count : number) : void => {
        this.setState({ "count" : count});
    }

    private onButtonHit(){
        console.log('Button hit!');
        // this.WSGroupService.incTimer(this.state.count);
    }
}