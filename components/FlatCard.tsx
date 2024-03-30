import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCard() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Card</Text>
      <View style={styles.container}>
        <View style={[styles.card,styles.c1]}>
            <Text>Red</Text>
        </View>
        <View style={[styles.card,styles.c2]}>
            <Text>Green</Text>
        </View>
        <View style={[styles.card,styles.c3]}>
            <Text>Blue</Text>
        </View>

        {/* <View style={[styles.card,styles.c3]}>
            <Text>Blue</Text>
        </View>
        <View style={[styles.card,styles.c3]}>
            <Text>Blue</Text>
        </View> */}

      </View>
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
        padding:8
    },
    card:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        height:100,
        width:100,
        margin:8
    },
    c1:{
        backgroundColor:'red'
    },
    c2:{
        backgroundColor:'green'
    },
    c3:{
        backgroundColor:'blue'
    }
})