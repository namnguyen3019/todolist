//By conventional using: _
import _ from 'lodash';
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPostsAndUsers = () => async (dispatch, getState) =>{
  //await to make sure get data from request.
  await dispatch(fetchPosts());
  
  const userIds = _.uniq(_.map(getState().posts, 'userId'));

  userIds.forEach(id => dispatch(fetchUser(id)));

}

export const fetchPosts = () => async (dispatch) => {
    //? why using jsonPlaceholder.get('/post') doesn't work
  const response = await jsonPlaceholder.get('https://jsonplaceholder.typicode.com/posts');

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = (id) => async dispatch =>{
  const response = await jsonPlaceholder.get(`https://jsonplaceholder.typicode.com/users/${id}`);

  dispatch({type: 'FETCH_USER', payload: response.data});
}

// export const fetchUser = (id) => dispatch => {
//   _fetchUser(id, dispatch);
// }
// //_ indicate that it is private function, dont use it if you dont really know what you are doing
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    
//   dispatch({type: 'FETCH_USER', payload: response.data});
// })

//Return not the plain object, but the request.
// It's not what you think
