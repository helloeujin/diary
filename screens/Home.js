import React from "react";
import styled from "styled-components/native";
import colors from "../colors";
import { Ionicons } from "@expo/vector-icons";
import { AdMobBanner } from "expo-ads-admob";

const View = styled.View`
  flex: 1;
  align-items: center;
  padding: 0px 30px;
  padding-top: 100px;
  background-color: ${colors.bgColor};
`;
const Title = styled.Text`
  color: ${colors.textColor};
  font-size: 38px;
  margin-bottom: 20px;
  width: 100%;
`;
const Btn = styled.TouchableOpacity`
  position: absolute;
  bottom: 50px;
  right: 50px;
  height: 80px;
  width: 80px;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.btnColor};
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
`;
const BtnText = styled.Text`
  color: white;
`;

// "ca-app-pub-3940256099942544/6300978111"
const Home = ({ navigation: { navigate } }) => (
  <View>
    <Title>My journal</Title>

    <AdMobBanner
      bannerSize="fullBanner"
      adUnitID="ca-app-pub-3940256099942544/2934735716"
    />

    <Btn onPress={() => navigate("Write")}>
      <Ionicons name="add" color="white" size={40} />
    </Btn>
  </View>
);

export default Home;
