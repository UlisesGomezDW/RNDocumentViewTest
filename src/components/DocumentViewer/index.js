import React from 'react';
import {
  Platform,
  Button,
  Alert
} from 'react-native';

import OpenFile from 'react-native-doc-viewer';


export default function DocumentViewerExample() {
  
  const handlePress = () => {
   if(Platform.OS === 'ios'){
      //IOS
      OpenFile.openDoc([{
        url:"https://www.cmu.edu/blackboard/files/evaluate/tests-example.xls",
        fileNameOptional:"sampleXLS"
      }], (error, url) => {
         if (error) {
           console.error(error);
         } else {
           console.log(url)
         }
       })
    }
  }

  const handlePressPDF = () => {
    if(Platform.OS === 'ios'){
       //IOS
       OpenFile.openDoc([{
         url:"http://www.pdf995.com/samples/pdf.pdf",
         fileNameOptional:"samplePDF"
       }], (error, url) => {
          if (error) {
            console.error(error);
          } else {
            console.log(url)
          }
        })
     }
   }  

  const handlePressPPTT = () => {
    if(Platform.OS === 'ios'){
       //IOS
       OpenFile.openDoc([{
         url: "https://file-examples-com.github.io/uploads/2017/08/file_example_PPT_250kB.ppt",
         fileNameOptional: "PPTT"
       }], (error, url) => {
          if (error) {
            Alert.alert(error);
          } else {
            Alert.alert(url)
          }
        })
     }
   }

  const handlePressBinaryinUrl = () => {
    if(Platform.OS === 'ios'){
      //IOS
      OpenFile.openDocBinaryinUrl([{
        url:"https://storage.googleapis.com/need-sure/example",
        fileName:"sample",
        fileType:"xml"
      }], (error, url) => {
          if (error) {
            console.error(error);
          } else {
            console.log(url)
          }
        })
    }
  }

  
  const handlePressVideo = (video) => {
    if(Platform.OS === 'ios'){
      OpenFile.playMovie(video, (error, url) => {
                if (error) {
                    console.error(error);
                } else {
                    console.log(url)
                }
            })
    }
  }
  
  return(
        <>  
            <Button
            onPress={handlePress}
            title="Press Me Open Doc Url"
            accessibilityLabel="See a Document"
            />
            <Button
            onPress={handlePressPPTT}
            title="Open Power Point"
            accessibilityLabel="See a Presentation View"
            />
            <Button
            onPress={handlePressPDF}
            title="Open PDF"
            accessibilityLabel="See a Presentation View"
            />
            <Button
            onPress={handlePressBinaryinUrl}
            title="Press Me Open BinaryinUrl"
            accessibilityLabel="See a Document"
            />
            <Button
            onPress={()=>handlePressVideo("http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4")}
            title="Press Me Open Video"
            accessibilityLabel="See a Document"
            />
        </>
  )  
}