import { Icon } from "../Icon"

const Unsuccess = () => {
    return(
        <div className='thank-you display-f center-f'>
            <h1 className='bold'>BAŞARISIZ</h1>
            <Icon name="unsuccess" />
            <p>Birşeyler yanlış gitti. Lütfen kampanya linkinden gelip kayıt formunu eksiksiz doldurduğunuzdan emin olun.</p>
        </div>
    )
}

export default Unsuccess