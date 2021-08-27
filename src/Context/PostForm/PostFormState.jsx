import { postFormContext } from "./postFormContext"

export const PostFormState = ({children}) => {
   return(
      <postFormContext.Provider>
         {children}
      </postFormContext.Provider>
   )
}