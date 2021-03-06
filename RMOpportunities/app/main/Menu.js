import React, { Component } from 'react';
import {
   StyleSheet,
   Text,
   Dimensions,
   View,
   BackAndroid,
   TouchableHighlight,
   Picker,
   DeviceEventEmitter,
   ScrollView,
} from 'react-native';

import Translation from './Translation';
import Benefits from './Benefits';
import CreateClassified from './CreateClassified';
import OffersCategory from'./OffersCategory';
import Buy from'./Buy';
import Sell from'./Sell';
import Reuse from'./Reuse';
import AccountInformation from './AccountInformation';
import EditAccount from './EditAccount';
import History from './History';
import PasswordUpdate from './PasswordUpdate';
import ProductAlerts from './ProductAlerts';
import ViewClassifieds from './ViewClassifieds';
import ViewConnections from './ViewConnections';
import ViewNegociations from './ViewNegociations';
import Company from'./Company';
import Contact from './Contact';
import Manifeste from './Manifeste';
import Pricing from './Pricing';
import FAQ from './FAQ';
import Press from'./Press';
import Supporters from'./Supporters';


var width = Dimensions.get('window').width;
//Will be contained in the navigationBar drawer.
//Allow to navigate to others pages of the app
export default class ContenuMenu extends Component {
   render() {
      return (
         <ScrollView style={{backgroundColor:'white'}}>
            {(() => {
                //User logged in?
               if (connection == 0)
               return (
                  <View>

                     <TouchableHighlight underlayColor="#FFFFFF" onPress={()=>this.navigate('Benefits')} >
                        <Text style={styles.titreMenu}>{Translation[lang].pk}</Text>
                     </TouchableHighlight>
                     <View style={styles.separation}></View>

                     <TouchableHighlight>
                        <Text style={styles.titreMenu}>{Translation[lang].annonces}</Text>
                     </TouchableHighlight>
                     <TouchableHighlight underlayColor="#FFFFFF" onPress={()=>this.navigate('OffersCategory')}>
                        <Text style={styles.sousTitreMenu}>{Translation[lang].voir_offres}</Text>
                     </TouchableHighlight>
                     <TouchableHighlight>
                        <Text style={styles.sousTitreMenu}>{Translation[lang].voir_demande}</Text>
                     </TouchableHighlight>
                     <TouchableHighlight underlayColor="#FFFFFF" onPress={()=>this.navigate('CreateClassified')}>
                        <Text style={styles.sousTitreMenu}>{Translation[lang].aj_annonce}</Text>
                     </TouchableHighlight>

                     <View style={styles.separation}></View>
                     <Text style={styles.titreMenu}>{Translation[lang].conseils}</Text>
                     <TouchableHighlight underlayColor="#FFFFFF"  onPress={()=>this.navigate('Buy')}>
                        <Text style={styles.sousTitreMenu}>{Translation[lang].acheter}</Text>
                     </TouchableHighlight>
                     <TouchableHighlight underlayColor="#FFFFFF"  onPress={()=>this.navigate('Sell')}>
                        <Text style={styles.sousTitreMenu}>{Translation[lang].vendre}</Text>
                     </TouchableHighlight>
                     <TouchableHighlight underlayColor="#FFFFFF"  onPress={()=>this.navigate('Reuse')}>
                        <Text style={styles.sousTitreMenu}>{Translation[lang].reutil}</Text>
                     </TouchableHighlight>

                     <View style={styles.separation}></View>
                     <Text style={styles.titreMenu}>{Translation[lang].a_propos}</Text>
                     <TouchableHighlight underlayColor="#FFFFFF" onPress={()=>this.navigate('Company')}>
                        <Text style={styles.sousTitreMenu}>{Translation[lang].lentreprise}</Text>
                     </TouchableHighlight>
                     <TouchableHighlight underlayColor="#FFFFFF" onPress={()=>this.navigate('Supporters')}>
                        <Text style={styles.sousTitreMenu}>{Translation[lang].soutiens}</Text>
                     </TouchableHighlight>
                     <TouchableHighlight underlayColor="#FFFFFF" onPress={()=>this.navigate('Press')}>
                        <Text style={styles.sousTitreMenu}>{Translation[lang].presse}</Text>
                     </TouchableHighlight>
                     <TouchableHighlight >
                        <Text style={styles.sousTitreMenu}>{Translation[lang].blog}</Text>
                     </TouchableHighlight>

                     <View style={styles.separation}></View>
                     <Text style={styles.titreMenu}>{Translation[lang].decouvrir}</Text>
                     <TouchableHighlight underlayColor="#FFFFFF" onPress={()=>this.navigate('Manifeste')}>
                        <Text style={styles.sousTitreMenu}>{Translation[lang].manifeste}</Text>
                     </TouchableHighlight>
                     <TouchableHighlight underlayColor="#FFFFFF" onPress={()=>this.navigate('Pricing')}>
                        <Text style={styles.sousTitreMenu}>{Translation[lang].tarifs}</Text>
                     </TouchableHighlight>
                     <TouchableHighlight underlayColor="#FFFFFF" onPress={()=>this.navigate('FAQ')}>
                        <Text style={styles.sousTitreMenu}>{Translation[lang].faq}</Text>
                     </TouchableHighlight>

                     <View style={styles.separation}></View>
                     <TouchableHighlight underlayColor="#FFFFFF" onPress={()=>this.navigate('Contact')}>
                        <Text style={styles.titreMenu}>{Translation[lang].contact}</Text>
                     </TouchableHighlight>

                     <View style={styles.separation}></View>
                     <TouchableHighlight >
                        <Text style={styles.titreMenu}>{Translation[lang].langue}</Text>
                     </TouchableHighlight>
                     <View>
                        <Picker
                           selectedValue={lang}
                           onValueChange={this._onLangChange.bind(this,'value')}
                           style={styles.picker} >
                           <Picker.Item label="Français" value='fr' />
                           <Picker.Item label="English" value='en' />
                        </Picker>
                     </View>
                  </View>
               );
               else
               return(
                  <View>
                     <View style={styles.separation}></View>
                     <TouchableHighlight>
                        <Text style={styles.titreMenu}>{Translation[lang].compte}</Text>
                     </TouchableHighlight>
                     <TouchableHighlight underlayColor="#FFFFFF" onPress={()=>this.navigate('AccountInformation')}>
                        <Text style={styles.sousTitreMenu}>{Translation[lang].voir_compte}</Text>
                     </TouchableHighlight>
                     <TouchableHighlight underlayColor="#FFFFFF"  onPress={()=>this.navigate('PasswordUpdate')}>
                        <Text style={styles.sousTitreMenu}>{Translation[lang].modif_mdp}</Text>
                     </TouchableHighlight>
                     <TouchableHighlight underlayColor="#FFFFFF"  onPress={()=>this.navigate('ProductAlerts')}>
                        <Text style={styles.sousTitreMenu}>{Translation[lang].alertes}</Text>
                     </TouchableHighlight>
                     <TouchableHighlight underlayColor="#FFFFFF"  onPress={()=>this.navigate('ViewClassifieds')}>
                        <Text style={styles.sousTitreMenu}>{Translation[lang].mes_annonces}</Text>
                     </TouchableHighlight>
                     <TouchableHighlight underlayColor="#FFFFFF"  onPress={()=>this.navigate('ViewNegociations')}>
                        <Text style={styles.sousTitreMenu}>{Translation[lang].nego}</Text>
                     </TouchableHighlight>
                     <TouchableHighlight underlayColor="#FFFFFF"  onPress={()=>this.navigate('ViewConnections')}>
                        <Text style={styles.sousTitreMenu}>{Translation[lang].mises_en_rel}</Text>
                     </TouchableHighlight>
                     <TouchableHighlight underlayColor="#FFFFFF"  onPress={()=>this.navigate('History')}>
                        <Text style={styles.sousTitreMenu}>{Translation[lang].factures}</Text>
                     </TouchableHighlight>
                     <TouchableHighlight underlayColor="#FFFFFF"  onPress={()=>this.navigate('EditAccount')}>
                        <Text style={styles.sousTitreMenu}>{Translation[lang].modif_compte}</Text>
                     </TouchableHighlight>

                     <View style={styles.separation}></View>

                     <TouchableHighlight>
                        <Text style={styles.titreMenu}>{Translation[lang].annonces}</Text>
                     </TouchableHighlight>
                     <TouchableHighlight underlayColor="#FFFFFF" onPress={()=>this.navigate('OffersCategory')}>
                        <Text style={styles.sousTitreMenu}>{Translation[lang].voir_offres}</Text>
                     </TouchableHighlight>
                     <TouchableHighlight>
                        <Text style={styles.sousTitreMenu}>{Translation[lang].voir_demande}</Text>
                     </TouchableHighlight>
                     <TouchableHighlight underlayColor="#FFFFFF" onPress={()=>this.navigate('CreateClassified')}>
                        <Text style={styles.sousTitreMenu}>{Translation[lang].aj_annonce}</Text>
                     </TouchableHighlight>

                     <View style={styles.separation}></View>
                     <Text style={styles.titreMenu}>{Translation[lang].conseils}</Text>
                     <TouchableHighlight underlayColor="#FFFFFF"  onPress={()=>this.navigate('Buy')}>
                        <Text style={styles.sousTitreMenu}>{Translation[lang].acheter}</Text>
                     </TouchableHighlight>
                     <TouchableHighlight underlayColor="#FFFFFF"  onPress={()=>this.navigate('Sell')}>
                        <Text style={styles.sousTitreMenu}>{Translation[lang].vendre}</Text>
                     </TouchableHighlight>
                     <TouchableHighlight underlayColor="#FFFFFF"  onPress={()=>this.navigate('Reuse')}>
                        <Text style={styles.sousTitreMenu}>{Translation[lang].reutil}</Text>
                     </TouchableHighlight>

                     <View style={styles.separation}></View>
                     <Text style={styles.titreMenu}>{Translation[lang].decouvrir}</Text>
                     <TouchableHighlight underlayColor="#FFFFFF" onPress={()=>this.navigate('Manifeste')}>
                        <Text style={styles.sousTitreMenu}>{Translation[lang].manifeste}</Text>
                     </TouchableHighlight>
                     <TouchableHighlight underlayColor="#FFFFFF" onPress={()=>this.navigate('Pricing')}>
                        <Text style={styles.sousTitreMenu}>{Translation[lang].tarifs}</Text>
                     </TouchableHighlight>
                     <TouchableHighlight underlayColor="#FFFFFF" onPress={()=>this.navigate('FAQ')}>
                        <Text style={styles.sousTitreMenu}>{Translation[lang].faq}</Text>
                     </TouchableHighlight>

                     <View style={styles.separation}></View>
                     <TouchableHighlight >
                        <Text style={styles.titreMenu}>{Translation[lang].langue}</Text>
                     </TouchableHighlight>
                     <View>
                        <Picker
                           selectedValue={lang}
                           onValueChange={this._onLangChange.bind(this,'value')}
                           style={styles.picker} >
                           <Picker.Item label="Français" value='fr' />
                           <Picker.Item label="English" value='en' />
                        </Picker>
                     </View>
                  </View>
               );
            })()}
         </ScrollView>
      );
   }

   onBackAndroid = () => {
      BackAndroid.removeEventListener('closeDrawer', this.onBackAndroid);
      this.props.closeDrawer();
   };
   //When the user want to change the language, whe change the global variable and we emit 'nvBar' to update the page
   _onLangChange = (key: string, value: string) => {
      lang = value;
      this.props.closeDrawer();
      DeviceEventEmitter.emit('nvBar');
   };
    //Function that will change the rendered page depending on what the user touched
   navigate(property) {
      this.props.closeDrawer();
      const { navigator } = this.props.navigator.refs;
      if (navigator) {
         if (property==='Benefits'){
            navigator.push({
               name: 'Benefits',
               component: Benefits,
            })
         }else if (property==='AccountInformation') {
            navigator.push({
               name: 'AccountInformation',
               component: AccountInformation,
            })
         }else if (property==='PasswordUpdate') {
            navigator.push({
               name: 'PasswordUpdate',
               component: PasswordUpdate,
            })
         }else if (property==='ProductAlerts') {
            navigator.push({
               name: 'ProductAlerts',
               component: ProductAlerts,
            })

         }else if (property==='ViewClassifieds') {
            navigator.push({
               name: 'ViewClassifieds',
               component: ViewClassifieds,
            })

         }else if (property==='ViewNegociations') {
            navigator.push({
               name: 'ViewNegociations',
               component: ViewNegociations,
            })
         }else if (property==='ViewConnections') {
            navigator.push({
               name: 'ViewConnections',
               component: ViewConnections,
            })

         }else if (property==='History') {
            navigator.push({
               name: 'History',
               component: History,
            })

         }else if (property==='EditAccount') {
            navigator.push({
               name: 'EditAccount',
               component: EditAccount,
            })

         }else if (property==='CreateClassified') {
            navigator.push({
               name: 'CreateClassified',
               component: CreateClassified,
            })
         }else if (property==='OffersCategory') {
            navigator.push({
               name: 'OffersCategory',
               component: OffersCategory,
            })
         }else if (property==='Buy') {
            navigator.push({
               name: 'Buy',
               component: Buy,
            })

         }else if (property==='Sell') {
            navigator.push({
               name: 'Sell',
               component: Sell,
            })

         }else if (property==='Reuse') {
            navigator.push({
               name: 'Reuse',
               component: Reuse,
            })
         }else if (property==='Company') {
            navigator.push({
               name: 'Company',
               component: Company,
            })
         }else if (property==='Contact') {
            navigator.push({
               name: 'Contact',
               component: Contact,
            })
         }else if (property==='Pricing') {
            navigator.push({
               name: 'Pricing',
               component: Pricing,
            })
         }else if (property==='FAQ') {
            navigator.push({
               name: 'FAQ',
               component: FAQ,
            })
         }else if (property==='Manifeste') {
            navigator.push({
               name: 'Manifeste',
               component: Manifeste,
            })
         }else if (property==='Press') {
            navigator.push({
               name: 'Press',
               component: Press,
            })
         }else if (property==='Supporters') {
            navigator.push({
               name: 'Supporters',
               component: Supporters,
            })
         }
      }
   };

}



const styles = StyleSheet.create({

   titreMenu:{
      marginTop: 2,
      marginBottom:1,
      color:"#A4D04A",
      fontWeight:'bold' ,
      fontSize: 20,
      textAlign: 'center',
   },
   sousTitreMenu:{
      margin: 2,
      fontSize: 15,
      textAlign: 'left',
   },
   separation:{
      borderTopWidth: 2,
      marginTop:10,
      marginBottom:1,
      marginRight:20,
      marginLeft:20,
      borderTopColor:"#A4D04A",
   },
   containerPicker: {
      flexGrow: 0,
      flexShrink: 0,
      justifyContent: 'center',
      flexWrap: 'wrap',
      flexDirection: 'row',
      width: width,
      height:50,
      alignSelf: 'center',
   },
});
