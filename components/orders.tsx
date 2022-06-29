import Image from "next/image"
import logo from '../assets/logo.png'
import { StarsOutlined , CategoryOutlined} from '@mui/icons-material'

export const OrderCard = ()=>{
    return (
        <div className="mt-3 mb-3 col-sm-11 col-lg-11 slid">
            <div className="sellerCard order" >
                <div className="row p-3">
                    
                    <div className="col-4" style={{borderRadius:'5px', border:'1px solid #ededed',marginRight:'10px'}} >
                        <Image src={logo}  />
                    </div>

                    <div className="col-7 pt-3" >
                        <h4>فروشگاه بهنید</h4>
                        <h6>فروشگاه انلاین و رسمی بهنید</h6>
                        
                        <p>مواد غذایی <CategoryOutlined className="pb-1 pt-1"/> </p>
                        

                        <div className="row justify-content-evenly pt-2">
                            <div className="col-5">
                                <p>4.7 <StarsOutlined className="pb-1"/> </p>
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