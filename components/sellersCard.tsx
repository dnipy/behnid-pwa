import Image from "next/image"
import logo from '../assets/logo.png'
import { StarsOutlined , CategoryOutlined} from '@mui/icons-material'

export const SellerCard = (props : {name : string ,username : string ,created_at : string})=>{
    return (
        <div className="mt-3 mb-3 col-sm-12 col-lg-5">
            <div className="sellerCard" >
                <div className="row p-3">
                    
                    <div className="col-4" style={{borderRadius:'5px', border:'1px solid #ededed',marginRight:'10px'}} >
                        <Image src={logo}  />
                    </div>

                    <div className="col-7 pt-3" >
                        <h4>{props.name}</h4>
                        <h6>فروشگاه انلاین {props.username}</h6>
                        
                        <p>عضو از تاریخ {props.created_at}</p>
                       
                        <div className="row justify-content-evenly pt-2">
                            <div className="col-5">
                                <p>4.7 <StarsOutlined className="pb-1"/> </p>
                            </div>
                            <div className="col-5">
                                فعال
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
