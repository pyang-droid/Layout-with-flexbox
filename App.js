import React from "react";
import { StatusBar } from "expo-status-bar";
import Flex from "./Components/flex"; 
import Flex2 from "./Components/flex_direction";
import LayoutDirection from "./Components/Layout Direction";
import JustifyContent from "./Components/Justify Content";
import { ScrollView, View } from "react-native";
import AlignItems from "./Components/Align Items";
import AlignContent from "./Components/Align Content";
import FlexWrap from "./Components/Flex Wrap";
import FlexBasis from "./Components/Flex Basis";
import RowGap from "./Components/Row Gap";
import WidthHeight from "./Components/WidthHeight";
import Position from "./Components/Position";





export default function App() {
  return (
   <ScrollView>
   <View style={{height: 600}}>
    <Flex />
    </View>
    
    <View style={{height: 600}}>
    <Flex2 /> 
    </View>

    <View style={{height: 600}}>
    <LayoutDirection />
    </View>

    <View style={{height: 600}}>
    <JustifyContent />
    </View> 

    <View style={{height: 600}}>
    <AlignItems />
    </View>

    <View style={{height: 600}}>
    <AlignContent />
    </View>

    <View style={{height: 600}}>
    <FlexWrap />
    </View>

    <View style={{height: 600}}>
    <FlexBasis />
    </View>

    <View style={{height: 600}}>
    <RowGap />
    </View>

    <View style={{height: 600}}>
    <WidthHeight />
    </View> 

    <View style={{height: 600}}>
    <Position />
    </View>

    <StatusBar style="auto" />
    </ScrollView>
  );
}