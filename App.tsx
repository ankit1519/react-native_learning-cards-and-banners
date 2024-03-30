import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCard from './components/FlatCard'
import ScrollableCard from './components/ScrollableCard'
import FancyCard from './components/FancyCard'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard/>
        <ScrollableCard/>
        <FancyCard/>
        <FancyCard/>
        <FancyCard/>
        <FancyCard/>
        <FancyCard/>
        <FancyCard/>
        <FancyCard/>
        <FancyCard/>
        <FancyCard/>

      </ScrollView>
    </SafeAreaView>
  )
}

export default App