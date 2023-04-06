import { View } from "react-native";
import { DatePicker } from "../../components/DatePicker/DatePicker";
import {gql, useLazyQuery} from "@apollo/client"

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

    const handleConfirmDatePicker = (value) => {
        console.log(value);

        loadEvent({
            variables:{
                year: 1942,
                month: 3,
                day: 6,
            }
        })
    }

    return (
        <View>
            <DatePicker onConfirm={handleConfirmDatePicker}/>
        </View>
    )

}

/*export const SelectEventScreen = () => {
    return (
        <View>
            <DatePicker/>
        </View>
    );
};
*/