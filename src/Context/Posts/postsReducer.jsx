export const SHOW_ALL_POSTS = "SHOW_ALL_POSTS"
export const ADD_NEW_POST = "ADD_NEW_POST"
export const DELETE_POST = "DELETE_POST"
export const SELECTED = "SELECTED" 
export const SEARCH = "SEARCH"
export const LOADING = "LOADING"
export const SELECTED_ID ="SELECTED_ID"
export const SHOW_ACTIVE_PAGE = "SHOW_ACTIVE_PAGE"
// export const SHOW_PREV_PAGE ="SHOW_PREV_PAGE"

export const postsReducer = (state, action) => {
   switch (action.type) {
      case LOADING: {
         return{...state , loading:true}
      }
      case SHOW_ALL_POSTS:
         return{...state, totalPage:action.postsData.headers['x-total-count'], postsData:action.postsData.data,  filteredPost:action.postsData.data,  loading:false}
      case ADD_NEW_POST:
         return {...state,  filteredPost:[action.filteredPost,...state.filteredPost]}
      case DELETE_POST:
         return{...state, filteredPost:state.filteredPost.filter(post=> post.id !== action.filteredPost) }
      case SELECTED:
         return{...state ,value: action.value, ...state.filteredPost.sort((a,b) => a[action.value].localeCompare(b[action.value]))}
      case SELECTED_ID:
         return{...state ,value: action.value, ...state.filteredPost.sort((a,b) => a[action.value] - b[action.value])}
      case SEARCH:
         return {...state, filteredPost:state.postsData.filter(post =>post.title.toLowerCase().includes(action.serchText.toLowerCase())) }
         
      case SHOW_ACTIVE_PAGE:
         debugger
         return {...state, currentPage:action.page}
      default:
        return {...state }
   }
}

