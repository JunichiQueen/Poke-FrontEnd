import React, { Component } from 'react';
import { Table } from 'reactstrap';


export default class PokeList extends Component{
    render(){
        return(
            <div>
                <h2 className="text-center">User List</h2>
                <Table className="text-center" striped>
                    {/* <tbody>
                        {this.props.data.map((item) => (
                            <tr key={item._id}><td><User username={item.username}/></td></tr>
                        )
                        )}
                    </tbody> */}
                </Table>
            </div>
        )
    }
}