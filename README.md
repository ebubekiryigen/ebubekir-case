# Projede kullanılan paketler:

Form kontrolü için react hook form paketini kullandım.
Url den utm bilgilerini almak için react router dom paketini kullandım.
Uluslar arası telefon numarası için react intel tel input paketini kullandım.
Uluslar arası telefon numarası kontrolü için libphonenumber-js paketini kullandım.

# Case için senaryo

Facebook üzerinden oluşturulan bir reklam çalışması için utm linki oluşturuldu kullanıcı linke tıklayarak sisteme kayıt olması için forma yönlendiriliyor kayıt olduktan sonra black friday sale kampanyasına katılmış oluyor.

# Case kod ilerleyişi

Kullanıcı linke tıkladığında useEffect ile kullanıcı sayfaya ilk defa giriş yaptığında utm_source, utm_medium ve utm_term parametrelerinin olup olmadığını kontrol ediyor eğer var ise formu gösteriyor eğer yok ise hata mesajı gösteriyor. Eğer kullanıcı linke tıkladığında utm bilgileri ile geldiyse ancak daha sonra url kısmından herhangi bir utm bilgisini sildiğinde tekrar hata mesajını gösteriyor buradaki amaç utm bilgisinin art niyetli değiştirilmesi ya da bilinçsizlik durumunda sistemin yanıltılmaması. Url doğru bir şekilde geliyorsa utm bilgileri localstorage 'utm' adı ile kaydediliyor. daha sonra form üzerinde react hook form paketi ile mail ve kullanıcı adı doğruluğu kontrol ediliyor. Telefon için ise libphonenumber paketi ile birlikte kontrol işlemi gerçekleştiriliyor. Kayıt olduktan sonra kayıt bilgileri sessionStorage 'user' adı ile kaydediliyor ve teşekkür sayfasına yönlendiriliyor ve sayfada kullanıcın kayıt bilgileri ve utm bilgileri ile bir yazı yer alıyor. kullanıcı eğer form sayfasına gelmeden direk confirm sayfasına gitmek ister ise sistem localStorage utm bilgileri ve sessionStorage user bilgilerin olup olmadığını kontrol ediyor eğer yok ise hata mesajı verdiriyor.

# Not

Teşekkürler sayfasına giderken url de utm bilgilerinin yer alıp almıyacağı konusunda emin olamadım bu yüzden utm bilgilerini url de yer aldırtmadım ve localStorageden çekdim eğer aldırmam gerekiyorsada navigate işlemi sırasında;

navigate('/confirmation') kodu yerine
navigate('/confirmation?utm_source=facebook&utm_medium=cpc&utm_term=black+friday+sale') şeklinde yönlendirilip teşekkürler sayfasında react router dom paketi ile url deki parametreleri yakalyıp bu şekilde de işlem yapabilirdim.
