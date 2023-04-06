import {gql, useQuery} from '@apollo/client'
import { View, Text } from "react-native"

const GET_EVENT = gql `
query getEvent {
    event(id: 10) {
        name,
        source,
        description
    }
}
`;

export const WelcomeScreen = () => {

    const data = useQuery(GET_EVENT);

    console.log(data);
    if(data.loading) {
        return <View>

        <Text> Ещё немного </Text>

          </View>
    }
    else {
        return (data.data.event.description)
    }
   
    }


/*export const WelcomeScreen = () => {
    return <View>
        <Text>Welcome Screen </Text>
    </View>
}
*/