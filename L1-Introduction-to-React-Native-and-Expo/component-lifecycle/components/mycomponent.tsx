import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

class TrackedComponent extends Component {
  componentWillUnmount() {
    console.log("▶︎ componentWillUnmount: Child component is being removed.");
  }

  render() {
    return <Text style={styles.childText}>I am the tracked child component.</Text>;
  }
}

class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      showChild: true,
    };
  }

  componentDidMount() {
    console.log("▶︎ componentDidMount: Parent component has mounted.");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("▶︎ componentDidUpdate: Parent component has updated.");
    if (prevState.count !== this.state.count) {
      console.log(`   - Count changed from ${prevState.count} to ${this.state.count}`);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Lifecycle Demo</Text>
        <Text>Count: {this.state.count}</Text>

        {this.state.showChild && <TrackedComponent />}

        <View style={styles.buttonContainer}>
          <Button
            title="Increment Count"
            onPress={() => this.setState({ count: this.state.count + 1 })}
          />
          <Button
            title="Toggle Child Component"
            onPress={() => this.setState({ showChild: !this.state.showChild })}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    margin: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  buttonContainer: {
    marginTop: 15,
    width: '90%'
  },
  childText: {
    marginVertical: 10,
    fontStyle: 'italic',
    color: 'purple'
  }
});

export default LifecycleDemo;