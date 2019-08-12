import React from 'react';
import { ScrollView, StyleSheet, FlatList, Text, AsyncStorage, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import {Table} from "react-native-table-component";

export default class RecentCleans extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      cleans: [],
      error: null,
      loggedIn: false
    }
  }
  async componentDidMount(){
    try {
      let token = await AsyncStorage.getItem("token");
      await this.getRecentCleans(token);
      this.setState({loggedIn: true });
    } catch {
      this.setState({ loggedIn: false });
    }
  }

  getRecentCleans = async (token) => {
    try{
      let cleans = await fetch('https://pilot.readylist.com/mobile/get_recent_cleans.php', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "jwt": token
        })
      }).then(res => res.json());
      this.setState({cleans: cleans.recent_cleans});
    } catch(error){
      alert(error.message)
    }
  }

  render() {
    return (












      <ScrollView style = { styles.container } >


        { !this.state.loggedIn ? (
          <Text>Please Login!</Text>
        ): (

            <FlatList
              data={this.state.cleans}
              renderItem={({ item }) => (
                <>

                  <View/>
                  <Text>{item.date},{item.room}</Text>
                  <Text>{item.room}</Text>
                  <Text>{item.inspector}</Text>
                </>
              )}
            />
        )}
      </ScrollView>




    );

  }
}




RecentCleans.navigationOptions = {
  title: 'Recent Cleans',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    width: "90%"
  },

});
