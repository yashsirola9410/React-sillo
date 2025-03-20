import {useState , useEffect} from 'react'
import PropTypes from 'prop-types'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

function AuthLayout({ children }) {
    const navigate = useNavigate()
    const [loader , setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)
    const authentication = useSelector(state => state.auth.authentication)


    
    useEffect(() => {
        if(authentication && authStatus !== authentication){
           navigate("/login")
        }else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
        setLoader(false)
    } ,[authStatus , navigate , authentication])
  return loader ? <h1>Loading...</h1> : <>{children}</>
}



AuthLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AuthLayout

