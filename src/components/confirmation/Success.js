import { Icon } from "../Icon"

const Success = ({utm,user}) => {
    return(
        <div className='thank-you display-f center-f'>
            <h1 className='bold'>TEŞEKKÜR EDERİZ</h1>
            <Icon name="success" />
            <p>Merhaba <span className='bold'>{user?.name}</span> sistemimize <span className='bold'>{utm?.utm_source}</span> üzerinden geldiğinizi görüyoruz. Kayıt olduğun için teşekkür ederiz. Sistemimize telefon numaranız: <span className='bold'>{user?.phone}</span> ve mail adresiniz: <span className='bold'>{user?.email}</span> olarak kaydedildi. Artık <span className='bold'>{utm?.utm_term}</span> kampanyasından haberdar olabileceksiniz.
            Kanpanya medium bilgisi : <span className='bold'>{utm?.utm_medium}</span>
            </p>
        </div>
    )
}

export default Success