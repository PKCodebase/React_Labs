import { event } from "jquery";
import { Component } from "react";

import MyTextInput1 from "../mycomponents/MyTextInput1";
import MyTextInput from "../mycomponents/MyTextInput";


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
             
           <MyTextInput 
           mytype = "text"
           myname = "bookId"
           mylabel = "Book Id"
           placeholder="Enter BookId....."
           myvalue={bookId}
           myonChange={this.mychangeHandler}
           myerror={this.state.myerrors.mybookId}
           />

          <MyTextInput 
           mytype = "password"
           myname = "bookName"
           mylabel = "Book Name"
           placeholder="Enter Book Name....."
           myvalue={bookName}
           myonChange={this.mychangeHandler}
           myerror={this.state.myerrors.mybookName}
           />


          <MyTextInput 
           mytype = "text"
           myname = "author"
           mylabel = "Author"
           placeholder="Enter Author Name....."
           myvalue={author}
           myonChange={this.mychangeHandler}
           myerror={this.state.myerrors.myauthor}
           />



          <MyTextInput1 
          mytype="text" 
          myname="price" 
          mylabel="Price" 
          myplacehodler="Enter Price" 
          myvalue={price} 
          myonChange={this.mychangeHandler} 
          myerror={this.state.myerrors.myprice} 
          /> 

           <MyTextInput1 
           mytype = "text"
           myname = "pub"
           mylabel = "Publications"
           placeholder="Enter Publications....."
           myvalue={pub}
           myonChange={this.mychangeHandler}
           myerror={this.state.myerrors.mypub}
           />

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