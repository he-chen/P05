import React, { Component } from 'react';
import Translation from './Translation';

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ListView,
} from 'react-native';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

//We change this and add some foncs to realise 
//the display of the list of factures when we need.
var dataSource = null;

export default class History extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{height:height*0.08}}/>
		<View style={styles.containerMain}>
			<View style = {styles.containerText}>
				<Text style = {styles.title}>
					{Translation[lang].histo}
				</Text>
				<Text style = {styles.instructions}>
					{Translation[lang].visio_factures}
				</Text>
			</View>
			
			<View style = {styles.header}>
				<View style = {styles.listHeader}>
					<Text style = {{textAlign: 'center',}}>
						{Translation[lang].montant_com}
					</Text>
				</View>
				<View style = {styles.listHeader}>
					<Text style = {{textAlign: 'center',}}>
						{Translation[lang].date_fact}
					</Text>
				</View>
				<View style = {styles.listHeader}>
					<Text style = {{textAlign: 'center',}}>
						{Translation[lang].date_paie}
					</Text>
				</View>
				<View style = {styles.listHeader}>
					<Text style = {{textAlign: 'center',}}>
						{Translation[lang].lien}
					</Text>
				</View>
			</View>
			
			{(() => {
				if (dataSource != null)
					return (
						<ListView />
					);
				else
					return (
						<View style = {styles.containerFacture}>
							<Text>
								{Translation[lang].aucune_fact}
							</Text>
						</View>
					);
			})()}
		</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  containerMain: {
    backgroundColor: '#F5FCFF',
	flexGrow: 0,
	flexShrink: 0,
	justifyContent: 'center',
	alignItems: 'center',
	flexDirection: 'column',
	width: width,
	height: height * 0.89,
	alignSelf: 'center',
  },
  containerText: {
    backgroundColor: '#F5FCFF',
	flexGrow: 0,
	flexShrink: 0,
	justifyContent: 'center',
	alignItems: 'center',
	flexDirection: 'column',
	width: width,
	height: height * 0.37,
	alignSelf: 'center',
  },
  containerFacture: {
	width: width,
	height: height * 0.38,
	flexGrow: 0,
	flexShrink: 0,
	justifyContent: 'center',
	alignItems: 'center',
	alignSelf: 'center',
	backgroundColor: '#F5FCFF',
	padding: 5,
	borderWidth: 1,  
    borderRadius: 5,
	margin: 10,
    borderColor: '#CCC',
	width: 0.92 * width + 20,
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
	color: '#333333',
  },
  instructions: {
    fontSize: 15,
	textAlign: 'center',
    marginBottom: 5,
  },
  header: {
	width: width,
	height: height * 0.12,
	alignItems: 'flex-end',
	flexDirection: 'row',
	justifyContent: 'center',
  },
  listHeader: {
	justifyContent: 'center',
	alignSelf: 'center',	
    padding: 5,  
    margin: 3,  
    width: 0.23 * width,  
    height: height * 0.12, 
    alignItems: 'center',
    borderWidth: 1,  
    borderRadius: 5,  
    borderColor: '#CCC',
  },
});