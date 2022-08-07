import Image from "next/image"
import logo from '../assets/logo.png'
import { StarsOutlined , CategoryOutlined} from '@mui/icons-material'
import { useRouter } from "next/router"


interface IreqCard {
    id : Number,
    name : string,
    user_id:string,
    categorieID ? :string,
    description : string,
    count : string
}

export const ReqCard = (props : IreqCard)=>{
    const router = useRouter()
    const limitedDescribe  = props.description?.substring(0,30)
    return (
        <div className="mt-3 mb-3 col-sm-12 col-lg-5" onClick={()=>router.replace(`/requests/${props.id}`)} >
            <div className="sellerCard" >
                <div className="row p-3">
                    
                    <div className="col-4" style={{borderRadius:'5px', border:'1px solid #ededed',marginRight:'10px'}} >
                        <Image src={logo}  />
                    </div>

                    <div className="col-7 pt-3" >
                        <h4>{props.user_id}</h4>
                        <h6>{props.name}</h6>
                        <hr></hr>

                        <b>{limitedDescribe}...</b>
                        
                        <p> <CategoryOutlined className="pb-1 pt-1"/> {props.categorieID ? props.categorieID : 'بدون دسته بندی' }  </p>
                        

                        <div className="row justify-content-evenly pt-2">
                            <div className="col-5">
                                <p> <StarsOutlined className="pb-1"/> {props.count}  </p>
                            </div>
                            <div className="col-5">
                                <p>تهران , تهران</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
