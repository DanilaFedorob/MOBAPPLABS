import { Button, Picker } from "antd-mobile";
import { useState } from "react";
import { View } from "react-native-web";

export const DatePicker = ({onConfirm}) => {
const [visible, setVisible] = useState (false);
return (
    <View>
        <Button onClick={() => setVisible(true)}> Выбрать дату </Button>
        <Picker
        title="Календарь"
        visible={visible}
        columns={(value) => {
            if (value[0]==1944 && value [1]==2)
                return[
                    [
                        { label: "1941", value: "1941"},
                        { label: "1942", value: "1942"},
                        { label: "1943", value: "1943"},
                        { label: "1944", value: "1944"},
                    ],
                    [
                        { label: "1", value: "1"},
                        { label: "2", value: "2"},
                        { label: "3", value: "3"},
                        { label: "4", value: "4"},
                        { label: "5", value: "5"},
                        { label: "6", value: "6"},
                        { label: "7", value: "7"},
                        { label: "8", value: "8"},
                        { label: "9", value: "9"},
                        { label: "10", value: "10"},
                        { label: "11", value: "11"},
                        { label: "12", value: "12"},
                    ],
                    [
                        { label: "1", value: "1"},
                        { label: "2", value: "2"},
                        { label: "3", value: "3"},
                        { label: "4", value: "4"},
                        { label: "5", value: "5"},
                        { label: "6", value: "6"},
                        { label: "7", value: "7"},
                        { label: "8", value: "8"},
                        { label: "9", value: "9"},
                        { label: "10", value: "10"},
                        { label: "11", value: "11"},
                        { label: "12", value: "12"},
                        { label: "13", value: "13"},
                        { label: "14", value: "14"},
                        { label: "15", value: "15"},
                        { label: "16", value: "16"},
                        { label: "17", value: "17"},
                        { label: "18", value: "18"},
                        { label: "19", value: "19"},
                        { label: "20", value: "20"},
                        { label: "21", value: "21"},
                        { label: "22", value: "22"},
                        { label: "23", value: "23"},
                        { label: "24", value: "24"},
                        { label: "25", value: "25"},
                        { label: "26", value: "26"},
                        { label: "27", value: "27"},
                        { label: "28", value: "28"},
                        { label: "29", value: "29"},
                        { label: "30", value: "30"},
                        { label: "31", value: "31"},

                    ],
                ];
                    else return [
                        [
                            { label: "1941", value: "1941"},
                            { label: "1942", value: "1942"},
                            { label: "1943", value: "1943"},
                            { label: "1944", value: "1944"},
                        ],
                        [
                            { label: "1", value: "1"},
                            { label: "2", value: "2"},
                            { label: "3", value: "3"},
                            { label: "4", value: "4"},
                            { label: "5", value: "5"},
                            { label: "6", value: "6"},
                            { label: "7", value: "7"},
                            { label: "8", value: "8"},
                            { label: "9", value: "9"},
                            { label: "10", value: "10"},
                            { label: "11", value: "11"},
                            { label: "12", value: "12"},
                        ],
                        [
                            { label: "1", value: "1"},
                            { label: "2", value: "2"},
                            { label: "3", value: "3"},
                            { label: "4", value: "4"},
                            { label: "5", value: "5"},
                            { label: "6", value: "6"},
                            { label: "7", value: "7"},
                            { label: "8", value: "8"},
                            { label: "9", value: "9"},
                            { label: "10", value: "10"},
                            { label: "11", value: "11"},
                            { label: "12", value: "12"},
                            { label: "13", value: "13"},
                            { label: "14", value: "14"},
                            { label: "15", value: "15"},
                            { label: "16", value: "16"},
                            { label: "17", value: "17"},
                            { label: "18", value: "18"},
                            { label: "19", value: "19"},
                            { label: "20", value: "20"},
                            { label: "21", value: "21"},
                            { label: "22", value: "22"},
                            { label: "23", value: "23"},
                            { label: "24", value: "24"},
                            { label: "25", value: "25"},
                            { label: "26", value: "26"},
                            { label: "27", value: "27"},
                            { label: "28", value: "28"},
                    ],
                ];
        }
        
        }
        onClose={() => {
            setVisible(false);
        }}
        onConfirm={onConfirm}
        />
    </View>
);
};