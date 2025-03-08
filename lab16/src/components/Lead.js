
import { Component } from 'react';
import { PropTypes } from 'prop-types';
class Lead extends Component{
    state={
        showLeadInfo:false
    };

    onShowClick = ()=>{
        this.setState({
            showLeadInfo:!this.state.showLeadInfo
        });
    };
    onDeleteClick =() =>{
        this.props.mydeleteClickHandler();
    };
    render(){
        const{lead} = this.props;
        let myleadInfo = null;
        if(this.state.showLeadInfo){
            myleadInfo=(
                <ul className='list-group'>
                    <li className='list-group-item'>Email:{lead.email}</li>
                    <li className='list-group-item'>Phone:{lead.phone}</li>
                </ul>
                
            );
        }
        return(
            <div className='card card-body mb-3'>
                <h4>{lead.name}-Interested for{lead.course}
                <i onClick={this.onShowClick} className='fas fa-sort-down' 
                style={{cursor:"pointer",color:"green",fontSize:"40px"}}
                />
                <i onClick={this.onDeleteClick} className="fas fa-times" 
                style={{cursor:"pointer",float:"right",color:"red"}}
                />
                </h4>
                {myleadInfo}
            </div>
        );
    }
}

Lead.propTypes={
    lead:PropTypes.object.isRequired,
    deleteClickHandler:PropTypes.func.isRequired
};
export default Lead;