function Verify() {
    let imageCapture;

    function openCamera() {
        const constraints = {
            audio: false,
            video: {
                facingMode: "user",
                width: { ideal: 1280 },
                height: { ideal: 720 }
            }
        };
        const video = document.querySelector('video');

        navigator.mediaDevices
            .getUserMedia(constraints)
            .then((stream) => {
                let videoTrack = stream.getVideoTracks()[0];
                imageCapture = new ImageCapture(videoTrack);
                video.srcObject = stream;
                video.play();
            })
            .catch((err) => {
                alert('Open camera to verify your identity!')
                console.log(err);
            });
    }

    function verifyAndVote() {
        imageCapture
            .takePhoto()
            .then(blob => {
                // 將 Blob 轉成 ImageBitmap
                return createImageBitmap(blob)
            })
            .then(imageBitmap => {
                alert('Success');
                window.location.href = '/issues.html'
            })
            .catch(console.log);
    }

    React.useEffect(() => {
        openCamera();
    }, []);

    return (
        <div className="verify">
            <video />
            <div className="vote" onClick={() => verifyAndVote()}>Verify & Vote</div>
        </div>
    );
}

function App() {
    return (
        <React.Fragment>
            <Header />
            <Verify />
        </React.Fragment>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));