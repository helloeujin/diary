import { AdMobInterstitial, AdMobRewarded } from "expo-ads-admob";
import React, { useState } from "react";
import { Alert } from "react-native";
import styled from "styled-components/native";
import colors from "../colors";

const View = styled.View`
  background-color: ${colors.bgColor};
  flex: 1;
  padding: 0px 30px;
`;
const Title = styled.Text`
  color: ${colors.textColor};
  margin: 50px 0px;
  text-align: center;
  font-size: 28px;
  font-weight: 500;
`;

const TextInput = styled.TextInput`
  background-color: white;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 18px;
`;

const Btn = styled.TouchableOpacity`
  width: 100%;
  margin-top: 30px;
  background-color: ${colors.btnColor};
  padding: 10px 20px;
  align-items: center;
  border-radius: 20px;
  font-size: 18px;
  font-weight: 500;
`;

const BtnText = styled.Text`
  color: white;
  font-weight: 500;
  font-size: 18px;
`;

const Emotions = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
  justify-content: space-between;
`;

const Emotion = styled.TouchableOpacity`
  background-color: white;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  padding: 10px;
  border-radius: 10px;
  border-width: ${(props) => (props.selected ? "2px" : "0px")};
  border-color: rgba(0, 0, 0, 0.5);
`;

const EmotionText = styled.Text`
  font-size: 24px;
`;

const emotions = ["🤯", "🥲", "🤬", "🤗", "🥰", "😊", "🤩"];

////////////////////
const Write = ({ navigation: { goBack } }) => {
  const [selectedEmotion, setEmotion] = useState(null);
  const [feelings, setFeelings] = useState("");
  const onChangeText = (text) => setFeelings(text);
  const onEmotionPress = (face) => setEmotion(face);

  const onSubmit = async () => {
    // if (feelings === "" || selectedEmotion === null) {
    //   return Alert.alert("Please complete form.");
    // }

    // Display an interstitial
    // await AdMobInterstitial.setAdUnitID(
    //   "ca-app-pub-3940256099942544/4411468910"
    // ); // Test ID, Replace with your-admob-unit-id
    // await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true });
    // await AdMobInterstitial.showAdAsync();

    // Display a rewarded ad
    await AdMobRewarded.setAdUnitID("ca-app-pub-3940256099942544/1712485313");
    await AdMobRewarded.requestAdAsync();
    await AdMobRewarded.showAdAsync();

    AdMobRewarded.addEventListener("rewardedVideoUserDidEarnReward", () => {
      // console.log("reward won!");
      AdMobRewarded.addEventListener("rewardedVideoDidDismiss", () => {
        // console.log("reward dismissed");
        goBack();
      });
    });
  };

  //   console.log(feelings, selectedEmotion);

  return (
    <View>
      <Title>How do you feel today?</Title>

      <Emotions>
        {emotions.map((emotion, index) => (
          <Emotion
            selected={emotion === selectedEmotion}
            onPress={() => onEmotionPress(emotion)}
            key={index}
          >
            <EmotionText>{emotion}</EmotionText>
          </Emotion>
        ))}
      </Emotions>

      <TextInput
        returnKeyType="done"
        onSubmitEditing={onSubmit}
        onChangeText={onChangeText}
        value={feelings}
        placeholder="Write your feelings..."
      />

      <Btn onPress={onSubmit}>
        <BtnText>Save</BtnText>
      </Btn>
    </View>
  );
};

export default Write;
