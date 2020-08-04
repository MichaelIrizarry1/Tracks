import CreateDataContext from './CreateDataContext';
import tracker from '../api/tracker';


const authReducer = (state,action) =>{

    switch(action.type){

        default:
            return state;
    }


};

const SignUp = (dispatch) => {

    return async ({email,password}) => {
        try{
            const response = await tracker.post('/signin',{email,password});
            console.log(response.data);
        }catch(err){
            console.log(err.message);

        }


    };

};

const SignIn = (dispatch) => {

    return ({email,password}) => {



    };

};

const SignOut = (dispatch) => {

    return () => {



    };

};

export const {Provider,Context} = CreateDataContext(
    authReducer,
    {SignUp,SignIn,SignOut},
    {isSignedIn:false}
    
    
    
 ) ;