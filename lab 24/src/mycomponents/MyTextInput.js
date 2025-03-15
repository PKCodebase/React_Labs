import React from 'react';
const MyTextInput = (props) =>{
    return(
        <div className='container'>
            <div className='form-group'>
                <label htmlFor='bookId'>MyBook Id : </label>
                <input 
                type='text'
                name='booId'
                placeholder='Enter MyBookId.....'
                value={bookId}
                onChange={this.myChangeHandler}
                />
            </div>
        </div>
    )

}