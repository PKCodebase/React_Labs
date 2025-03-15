import { event } from "jquery";
import { Component } from "react";
import classnames from "classnames";


class AddBook extends Component{

    state={
        bookId : '',
        bookName : '',
        author : '',
        price : '',
        pub:'',
        myerrors:{}
      
    }

    mychangeHandler = (myevent) =>{
        myevent.preventDefault(); 
        console.log("My Change Handler");

        this.setState({
         [myevent.target.name]:myevent.target.value,  
        });
        
    }


    mysubmitHandler = (myevent) =>{
        myevent.preventDefault();
        console.log("Submit Handler");
        if(this.validateBookForm()){
            console.log("Before Reset",this.state);

            this.setState({ 
                bookId : '', 
                bookName : '', 
                author : '', 
                price : '', 
                pub : '',
                myerrors : { } 
            });

            console.log("After Reset", this.state);
        }
       
    };

    validateBookForm(){
        console.log("validateBookForm");
        const{bookId,bookName,author,price,pub} = this.state;

        let isValid = true;
        let errors = {};

        if(bookId===null || bookId.length===0){
            isValid = false;
            errors["mybookId"] ="BookId is Required";
        }else if(bookId.length<=4){
            isValid = false;
            errors["mybookId"] ="BookId minlength is 5";
        }else if(bookId.length>=8){ 
            isValid=false; 
            errors["mybookId"] ="BookId maxlength is 7";
        }

        if(bookName===null || bookName.length===0){ 
            isValid=false; 
            errors["mybookName"] ="BookName is Required"; 
            }else if(bookName.length<=5){ 
            isValid=false; 
            errors["mybookName"] ="BookName minlength is 5"; 
            }else if(bookName.length>=11){ 
            isValid=false; 
            errors["mybookName"] ="BookName maxlength is 7";
        }


        if(author===null || author.length===0){ 
            isValid=false; 
            errors["myauthor"] ="Author is Required";
            }else if(author.length<=5){ 
            isValid=false; 
            errors["myauthor"] ="Author minlength is 5"; 
            }else if(author.length>=11){ 
            isValid=false; 
            errors["myauthor"] ="Author maxlength is 7"; 
        }

        if(price===null || price.length===0){ 
            isValid=false; 
            errors["myprice"] ="Price is Required"; 
         }

         if(pub===null || pub.length===0){ 
            isValid=false; 
            errors["mypub"] ="Pub is Required";
        }
        this.setState({ 
            myerrors : errors 
            }); 

            return isValid;
    }

    render(){

        const{bookId,bookName,author,price,pub} = this.state;

        return(
            <div className="container col-md-6">
              <h2 className="text-center">AddBook form</h2>
              <form onSubmit={this.mysubmitHandler}>
             
            <div className="form-group">
                <label htmlFor="bookId">Book Id: </label>
                <input 
                type="text"
                name="bookId"
                className={classnames("form-control form-control-lg", 
                    {
                        "is-invalid":this.state.myerrors.mybookId, 
                    "is-valid":!this.state.myerrors.mybookId
                })}

                placeholder="Enter BookId....."
                value={bookId}
                onChange={this.mychangeHandler}/>
                <div className="text-danger">{this.state.myerrors.mybookId}</div>
            </div>

            <div className="form-group">
                <label htmlFor="bookName">Book Name: </label>
                <input 
                type="text"
                name="bookName"
                className={classnames("form-control form-control-lg", 
                    {
                        "is-invalid":this.state.myerrors.mybookName, 
                    "is-valid":!this.state.myerrors.mybookName
                })}

                placeholder="Enter BookName....."
                value={bookName}
                onChange={this.mychangeHandler}/>
                <div className="text-danger">{this.state.myerrors.mybookName}</div>
            </div>

            <div className="form-group">
                <label htmlFor="author">Author: </label>
                <input 
                type="text"
                name="author"
                className={classnames("form-control form-control-lg", 
                    {
                        "is-invalid":this.state.myerrors.myauthor, 
                    "is-valid":!this.state.myerrors.myauthor
                })}

                placeholder="Enter author....."
                value={author}
                onChange={this.mychangeHandler}/>
                <div className="text-danger">{this.state.myerrors.myauthor}</div>
            </div>


            <div className="form-group">
                <label htmlFor="price">Price: </label>
                <input 
                type="text"
                name="price"
                className={classnames("form-control form-control-lg", 
                    {
                        "is-invalid":this.state.myerrors.myprice, 
                    "is-valid":!this.state.myerrors.myprice
                })}

                placeholder="Enter Price....."
                value={price}
                onChange={this.mychangeHandler}/>
                <div className="text-danger">{this.state.myerrors.myprice}</div>
            </div>


            <div className="form-group">
                <label htmlFor="pub">Publications: </label>
                <input 
                type="text"
                name="pub"
                className={classnames("form-control form-control-lg", 
                    {
                        "is-invalid":this.state.myerrors.mypub, 
                    "is-valid":!this.state.myerrors.mypub
                })}

                placeholder="Enter publications....."
                value={pub}
                onChange={this.mychangeHandler}/>
                <div className="text-danger">{this.state.myerrors.mypub}</div>
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