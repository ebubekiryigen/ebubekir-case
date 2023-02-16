import { Icon } from "../../components/Icon"

function PageNotFound() {
    return(
        <section className='container display-f center-f height-v'>
            <div className='thank-you display-f center-f'>
                <h1 className='bold'>SAYFA BULUNAMADI</h1>
                <Icon name="unsuccess" />
                <p>Birşeyler yanlış gitti. Lütfen linki kontrol edip tekrar deneyiniz</p>
            </div>
        </section>
    )
}

export default PageNotFound