import { Platform, View } from "react-native";
import { createElement, useCallback } from "react";
import { BackHandlerComponent } from "./components/BackHandlerComponent";

export function NativeAndroidBackHandler(props) {
    const { onBackAction } = props;
    const handleBack = useCallback(() => {
        if (onBackAction && onBackAction.canExecute && !onBackAction.isExecuting) {
            onBackAction.execute();
        }
    }, [onBackAction]);

    // The back handler is Android only. Only render the component for Android
    if (Platform.OS === "ios") {
        return <View testID={`${props.name}$iosnoop`}></View>;
    }

    return <BackHandlerComponent onBack={handleBack} widgetName={props.name} />;
}
