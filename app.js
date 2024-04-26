const webCamElement = document.getElementById("webCam");
const canvasElement = document.getElementById("canvas");
const ctx = canvasElement.getContext("2d");
const webcam = new Webcam(webCamElement, "user", canvasElement);
const selfie = document.getElementById('snap')
webcam.start();

function saveImg() {
    const dataURI = canvasElement.toDataURL();
    console.log(dataURI)
    const a = document.createElement("a")
    document.body.appendChild(a)
    a.href = dataURI;
    a.download = "selfie.png"
    a.click()
    document.body.removeChild(a)
}

selfie.addEventListener('click', () => {
    let picture = webcam.snap();
    selfie.herf = picture;
    saveImg();
})
function takeAPicture() {
    let picture = webcam.snap();
    saveImg()
}