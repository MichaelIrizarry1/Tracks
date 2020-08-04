import React from 'react';

import { View, Text, Button} from 'react-native';

function TrackListScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Track List</Text>
        <Button
        title="Go to Details"
        onPress={() => navigation.navigate('TrackDetails')}
      />
        
      </View>
    );
  }


  export default TrackListScreen;