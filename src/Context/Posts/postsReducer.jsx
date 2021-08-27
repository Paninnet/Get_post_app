export const SHOW_ALL_POSTS = "SHOW_ALL_POSTS"
export const ADD_NEW_POST = "ADD_NEW_POST"
export const DELETE_POST = "DELETE_POST"
export const SELECTED = "SELECTED" 
export const SEARCH = "SEARCH"
export const LOADING = "LOADING"
export const SELECTED_ID ="SELECTED_ID"

export const postsReducer = (state, action) => {
   debugger
   switch (action.type) {
      case LOADING: {
         return{...state , loading:true}
      }
      case SHOW_ALL_POSTS:
         return{...state, postsData:action.postsData.data,  filteredPost:action.postsData.data, loading:false}
      case ADD_NEW_POST:
         return {...state,  postsData:[action.postsData,...state.postsData]}
      case DELETE_POST:
         return{...state, filteredPost:state.filteredPost.filter(post=> post.id !== action.filteredPost) }
      case SELECTED:
         return{...state ,value: action.value, ...state.filteredPost.sort((a,b) => a[action.value].localeCompare(b[action.value]))}
      case SELECTED_ID:
         return{...state ,value: action.value, ...state.filteredPost.sort((a,b) => a[action.value] - b[action.value])}
      case SEARCH:
         return {...state, filteredPost:state.postsData.filter(post =>post.title.toLowerCase().includes(action.serchText.toLowerCase())) }
      default:
        return {...state }
   }
}

