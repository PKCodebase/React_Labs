import { event } from "jquery";
import { Component } from "react";


class AddBook extends Component{

    state={
        bookId : 'A-101',
        bookName : '',
        author : '',
        price : '',
        pub:'',
      
    }

    mychangeHandler = (myevent) =>{
        myevent.preventDefault(); 
        console.log("My Change Handler");

        this.setState({
         [myevent.target.name]:myevent.target.value,  
        });
        
    }

    // myclickHandler = (myevent) =>{
    //     myevent.preventDefault();
    //     console.log("Button clicked   - myclickHandler");
    //     console.log(this.state);
    // };

    mysubmitHandler = (myevent) =>{
        myevent.preventDefault();
        console.log("Submit Handler");
        console.log(this.state);
    };

    render(){

        const{bookId,bookName,author,price,pub} = this.state;

        return(
            <div className="container col-md-6">
              <h2 className="text-center">Add Book form</h2>
              <form onSubmit={this.mysubmitHandler}>
             
             {/* <div className="form-group">
                <label htmlFor="username">Username: </label>
                <input 
                type="text"
                name="username"
                className="form-control form-control-lg"
                placeholder="Enter Username....."
                required
                value={this.state.username}
                onChange={this.mychangeHandler}/>
            </div>

            <div className="form-group">
                <label htmlFor="password">Password: </label>
                <input 
                type="password"
                name="password"
                className="form-control form-control-lg"
                placeholder="Enter password....."
                required
                value={this.state.password}
                onChange={this.mychangeHandler}/>
            </div> */}

            <div className="form-group">
                <label htmlFor="bookId">Book Id: </label>
                <input 
                type="text"
                name="bookId"
                className="form-control form-control-lg"
                placeholder="Enter BookId....."
                value={bookId}
                onChange={this.mychangeHandler}/>
            </div>

            <br/>

            <div className="form-group">
                <label htmlFor="bookName">Book Name:</label>
                <input
                type="text"
                name="bookName"
                className="form-control form-control-lg"
                placeholder="Enter BookName...."
                value={bookName}
                onChange={this.mychangeHandler}
                />
            </div>

            <br/>

            <div className="form-group">
              <label htmlFor="author">Author:</label>
              <input
              type="text"
              name="author"
              className="form-control form-control-lg"
              placeholder="Enter Author..."
              value={author}    
              onChange={this.mychangeHandler}/>
            </div>

            <br/>

            <div className="form-group">
                <label htmlFor="price">Price:</label>
                <input 
                type="text"
                name="price"
                className="form-control form-control-lg"
                placeholder="Enter Price...."
                value={price}
                onChange={this.mychangeHandler}
                />
            </div>

            <br/>

            <div className="form-group">
                <label htmlFor="pub">Publication:</label>
                <input 
                type="text"
                name="pub"
                className="form-control form-control-lg"
                placeholder="Enter Publication...."
                value={pub}
                onChange={this.mychangeHandler}
                />
            </div>

            

                <br/>
                
            <input 
                type="submit"
                value="Add Book"
                className="btn btn-primary btn-lg"
            />

              </form>
            </div>
        );
    }
}

export default AddBook;