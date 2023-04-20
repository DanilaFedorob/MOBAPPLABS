import { View, Text } from "react-native";
import { DatePicker } from "../../components/DatePicker/DatePicker";
import {gql, useLazyQuery, useQuery} from "@apollo/client"

const GET_EVENT_DATE = gql`
query getEventDate($year: Int, $month: Int, $day: Int){
    eventDate(year: $year, month: $month, day: $day){
        name
        description
    }
}
`;

export const SelectEventScreen = () => {
    const [loadEvent, {loading, data}] = useLazyQuery(GET_EVENT_DATE);
    const isLoading = useQuery(GET_EVENT_DATE);
    const handleConfirmDatePicker = (value) => {
        console.log(value);

        loadEvent({
            variables:{
                year: parseInt (value[0]),
                month: (value[1]),
                day: (value[2]),
            },
        });
    };
    console.log(isLoading)
    if (isLoading.loading)
    return  <View>
            <DatePicker onConfirm={handleConfirmDatePicker}/>
            <Text>Загрузка</Text>
        </View>
    else if (isLoading.client)
    return <View>
        <DatePicker onConfirm={handleConfirmDatePicker}/>
    </View>    
    else return <View><Text>Пусто</Text></View>

}

/*export const SelectEventScreen = () => {
    return (
        <View>
            <DatePicker/>
        </View>
    );
};
*/