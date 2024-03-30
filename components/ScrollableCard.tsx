import {ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ScrollableCard() {
  return (
    <View >
      <Text style={styles.headingText}>ScrollableCard</Text>
      <ScrollView horizontal style={styles.container}>
        <View style={[styles.card,styles.scrollable]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card,styles.scrollable]}>
            <Text>Here</Text>
        </View>
        <View style={[styles.card,styles.scrollable]}>
            <Text>to</Text>
        </View>
        <View style={[styles.card,styles.scrollable]}>
            <Text>scroll</Text>
        </View>
        <View style={[styles.card,styles.scrollable]}>
            <Text>cards</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:10,
    },
    container:{
        flex:1,
        flexDirection:'row',
        // padding:8
    },
    card:{
        width:100,
        height:100,
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderRadius:5,
        margin:4
    },
    scrollable:{
        backgroundColor:'red'
    }
})