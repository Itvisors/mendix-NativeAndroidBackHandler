import { BackHandler, View } from "react-native";
import { createElement, useEffect } from "react";

export function BackHandlerComponent({ onBack, widgetName }) {
    useEffect(() => {
        const backAction = () => {
            console.info("BackHandlerComponent: hardware back received");
            onBack();
            return false;
        };

        const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);

        return () => backHandler.remove();
    }, [onBack]);

    return <View testID={`${widgetName}$backhandlercomponent`}></View>;
}
