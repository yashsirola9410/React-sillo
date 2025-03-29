import {useEffect , useState} from 'react'
import appwriteService from "../appwrite/config"
import {useNavigate , useParams} from 'react-router-dom';
import {Container , PostForm} from '../components' 

function EditPost() {
    const navigate = useNavigate()
    const [post , setPost] = useState(null)
    const{slug} = useParams()


    useEffect(()=>{
        if(slug) {
            appwriteService.getPost(slug).then((post)=>{
                  if(post){
                    setPost(post)
                  }
            })
        }else{
            navigate('/')
        }
    },[slug, navigate])
  return post?(
    <div className='py-8'> 
      <Container>
        <PostForm post={post}/>
      </Container>
    </div>
  ):null
}

export default EditPost
