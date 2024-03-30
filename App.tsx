import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCard from './components/FlatCard'
import ScrollableCard from './components/ScrollableCard'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard/>
        <ScrollableCard/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App