# Kullandıklarım
- Reactjs
- SCSS
- React Router -> Taskta buton'a tıklanıldığında istenilen "navigate" işlemini yapmak için kullandım.
- React Redux -> Genel olarak sayfa içlerinde state'leri azaltmak için kullanmaya çalıştım.
- Redux Persist -> Veri kaydı, input'taki value'nun "Show More.." butonuna tıklanıldıktan sonra da silinmemesi için "localStorage" yerine kullandım.
- React Portal -> Add New Record sayfasındaki inputların validate işleminde hata alındığında çıkan "error" "modal'ını" portal ile yaptım.

# Bilinen Hata  
- Verilen mockData "nested array" halinde olduğu için bunu en azından kendim görmeye alışkın olduğum [key-value] haline çevirmek istedim. Gelen veriyi "redux persist" ile storage'da tuttum. "New Add Record" menüsünde yeni kayıt eklendiğinde de sorun yok, çevirdiğim ve redux'ta state içinde tuttuğum verinin içine geliyor, tarayıcının storage'ına baktığımda redux persist tarafından da sorun olmadığını verinin orada olduğunu görüyorum ilk eklendiği etapta. Fakat sorunum şurada başlıyor tüm veriler persistte dururken sayfa değiştirdiğim zaman eklenilen yeni kayıt gidiyor. Bu sorun yüksek ihtimal verilen data'yı [key-value] haline çevirdiğimde sayfa her render edildiğinde sürekli üstüne yazmasından dolayı ama bir türlü çözemedim.
- Pagination'da noktalamayı istenilen yere getiremedim.
