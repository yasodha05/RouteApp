export interface State {
  jsonToken:string;
    isAuthenticated:boolean;
}

const initialState:State = {
  jsonToken:null,
isAuthenticated:false
}

export function authReducer(state = initialState, action) {

}
