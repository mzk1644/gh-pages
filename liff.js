window.onload = function () {
    liff
        .init({
            liffId: "1653535539-8VnpZ2EZ"
        })
        .then(() => {
            // start to use LIFF's api
            initializeApp();
        });
};

function initializeApp() {
    document.getElementById('languagefield').textContent = liff.getOS();
    document.getElementById('viewtypefield').textContent = liff.getLanguage();
    document.getElementById('useridfield').textContent = liff.getVersion();
}
