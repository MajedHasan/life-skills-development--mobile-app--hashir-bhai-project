import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'
import { Camera } from "expo-camera"
import { Video } from "expo-av"
import { useRef } from 'react'
import { useEffect } from 'react'


const CaptureVideo = ({ navigation, route }) => {

    // ================ For Video Capture
    let cameraRef = useRef();
    const [hasCameraPermission, setHasCameraPermission] = useState();
    const [hasMicrophonePermission, setHasMicrophonePermission] = useState();
    const [isRecording, setIsRecording] = useState(false);
    const [video, setVideo] = useState();


    useEffect(() => {
        (async () => {
            const cameraPermission = await Camera.requestCameraPermissionsAsync();
            const microphonePermission = await Camera.requestMicrophonePermissionsAsync();

            setHasCameraPermission(cameraPermission.status === "granted");
            setHasMicrophonePermission(microphonePermission.status === "granted");
        })();
    }, []);
    if (hasCameraPermission === undefined || hasMicrophonePermission === undefined) {
        return <Text>Requestion permissions...</Text>
    } else if (!hasCameraPermission) {
        return <Text>Permission for camera not granted.</Text>
    }

    let recordVideo = () => {
        setIsRecording(true);
        let options = {
            quality: "1080p",
            maxDuration: 60,
            mute: false
        };

        cameraRef.current.recordAsync(options).then((recordedVideo) => {
            setVideo(recordedVideo);
            setIsRecording(false);
        });
    };

    let stopRecording = () => {
        setIsRecording(false);
        cameraRef.current.stopRecording();
    };

    if (video) {
        return (
            <SafeAreaView style={styles.container}>
                <Video
                    style={styles.video}
                    source={{ uri: video.uri }}
                    useNativeControls
                    resizeMode='contain'
                    isLooping
                />
                <Button title="Share" onPress={shareVideo} />
                <Button title="Discard" onPress={() => setVideo(undefined)} />
            </SafeAreaView>
        )
    }





    return (
        <>
            <Camera style={styles.container} ref={cameraRef}>
                <View style={styles.buttonContainer}>
                    <Button title={isRecording ? "Stop Recording" : "Record Video"} onPress={isRecording ? stopRecording : recordVideo} />
                </View>
            </Camera>
        </>
    )
}

export default CaptureVideo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        backgroundColor: "#fff",
        alignSelf: "flex-end"
    },
    video: {
        flex: 1,
        alignSelf: "stretch"
    }
})