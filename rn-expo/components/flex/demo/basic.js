import { Button, Flex, WingBlank, WhiteSpace } from 'antd-mobile-rn'
import React from 'react'
import { View, Text, ScrollView } from 'react-native'

const Circle = props => {
  const size = props.size || 20
  const style = {
    borderRadius: size / 2,
    backgroundColor: '#527fe4',
    width: size,
    height: size,
    margin: 1
  }
  return (<View style={style} />)
}

export default class FlexExample extends React.Component {
  render () {
    return (
      <ScrollView style={{ flex: 1 }} automaticallyAdjustContentInsets={false} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
        <WingBlank style={{ marginTop: 20, marginBottom: 5 }}>
          <Text style={{ marginBottom: 10 }}>Blocks direction</Text>
          <Text>direction='row':</Text>
          <Text>span horizontal，starting from the left</Text>
        </WingBlank>
        <WingBlank style={{ marginBottom: 5 }}>
          <Flex>
            <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
              <Button size='small'>Button 1</Button>
            </Flex.Item>
            <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
              <Button size='small'>Button 2</Button>
            </Flex.Item>
            <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
              <Button size='small'>Button 3</Button>
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WingBlank style={{ marginTop: 5, marginBottom: 5 }}>
          <Text>direction='column':</Text>
          <Text>span vertical，starting fom top</Text>
        </WingBlank>
        <WingBlank style={{ marginBottom: 5 }}>
          <Flex direction='column'>
            <Flex.Item style={{ paddingBottom: 4 }}><Button size='small'>Button1</Button></Flex.Item>
            <Flex.Item style={{ paddingBottom: 4 }}><Button size='small'>Button2</Button></Flex.Item>
            <Flex.Item style={{ paddingBottom: 4 }}><Button size='small'>Button3</Button></Flex.Item>
          </Flex>
        </WingBlank>
        <WingBlank style={{ marginTop: 5, marginBottom: 5 }}>
          <Text style={{ marginTop: 20, marginBottom: 20 }}>Alignment of the items inside block</Text>
          <Text>justify='start':</Text>
        </WingBlank>
        <WingBlank style={{ marginBottom: 5 }}>
          <Flex justify='start'>
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
          </Flex>
        </WingBlank>
        <WingBlank style={{ marginTop: 5, marginBottom: 5 }}>
          <Text>justify='center':</Text>
        </WingBlank>
        <WingBlank style={{ marginBottom: 5 }}>
          <Flex justify='center'>
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
          </Flex>
        </WingBlank>
        <WingBlank style={{ marginTop: 5, marginBottom: 5 }}>
          <Text>justify='end':</Text>
        </WingBlank>
        <WingBlank style={{ marginBottom: 5 }}>
          <Flex justify='end'>
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
          </Flex>
        </WingBlank>
        <WingBlank style={{ marginTop: 5, marginBottom: 5 }}>
          <Text>justify='between':equal spacing between items</Text>
        </WingBlank>
        <WingBlank style={{ marginBottom: 5 }}>
          <Flex justify='between'>
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
          </Flex>
        </WingBlank>
        <WingBlank style={{ marginTop: 5, marginBottom: 5 }}>
          <Text>justify='around':interval between two sides of each item is equal</Text>
        </WingBlank>
        <WingBlank style={{ marginBottom: 5 }}>
          <Flex justify='around'>
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
          </Flex>
        </WingBlank>
        <WingBlank style={{ marginTop: 5, marginBottom: 5 }}>
          <Text style={{ marginTop: 20, marginBottom: 20 }}>Block alignment on the cross axis</Text>
          <Text>align='start':</Text>
        </WingBlank>
        <WingBlank style={{ marginBottom: 5 }}>
          <Flex align='start' style={{ height: 30 }}>
            <Text style={{ fontSize: 20, borderWidth: 1, borderStyle: 'solid', borderColor: '#527fe4' }}>Block</Text>
            <Text style={{ fontSize: 18, borderWidth: 1, borderStyle: 'solid', borderColor: '#527fe4' }}>Block</Text>
            <Text style={{ fontSize: 16, borderWidth: 1, borderStyle: 'solid', borderColor: '#527fe4' }}>Block</Text>
            <Text style={{ fontSize: 14, borderWidth: 1, borderStyle: 'solid', borderColor: '#527fe4' }}>Block</Text>
          </Flex>
        </WingBlank>
        <WingBlank style={{ marginTop: 5, marginBottom: 5 }}>
          <Text>align='center':</Text>
        </WingBlank>
        <WingBlank style={{ marginBottom: 5 }}>
          <Flex align='center' style={{ height: 30 }}>
            <Text style={{ fontSize: 20, borderWidth: 1, borderStyle: 'solid', borderColor: '#527fe4' }}>Block</Text>
            <Text style={{ fontSize: 18, borderWidth: 1, borderStyle: 'solid', borderColor: '#527fe4' }}>Block</Text>
            <Text style={{ fontSize: 16, borderWidth: 1, borderStyle: 'solid', borderColor: '#527fe4' }}>Block</Text>
            <Text style={{ fontSize: 14, borderWidth: 1, borderStyle: 'solid', borderColor: '#527fe4' }}>Block</Text>
          </Flex>
        </WingBlank>
        <WingBlank style={{ marginTop: 5, marginBottom: 5 }}>
          <Text>align='end':</Text>
        </WingBlank>
        <WingBlank style={{ marginBottom: 5 }}>
          <Flex align='end' style={{ height: 30 }}>
            <Text style={{ fontSize: 20, borderWidth: 1, borderStyle: 'solid', borderColor: '#527fe4' }}>Block</Text>
            <Text style={{ fontSize: 18, borderWidth: 1, borderStyle: 'solid', borderColor: '#527fe4' }}>Block</Text>
            <Text style={{ fontSize: 16, borderWidth: 1, borderStyle: 'solid', borderColor: '#527fe4' }}>Block</Text>
            <Text style={{ fontSize: 14, borderWidth: 1, borderStyle: 'solid', borderColor: '#527fe4' }}>Block</Text>
          </Flex>
        </WingBlank>
        <WingBlank style={{ marginTop: 5, marginBottom: 5 }}>
          <Text>align='stretch': If the item is not set to height or set to auto, it will fill the height of the entire container</Text>
        </WingBlank>
        <WingBlank style={{ marginBottom: 5 }}>
          <WingBlank>
            <Flex align='stretch' style={{ height: 70 }}>
              <Text style={{ fontSize: 20, borderWidth: 1, borderStyle: 'solid', borderColor: '#527fe4' }}>Block</Text>
              <Text style={{ fontSize: 18, borderWidth: 1, borderStyle: 'solid', borderColor: '#527fe4' }}>Block</Text>
              <Text style={{ fontSize: 16, borderWidth: 1, borderStyle: 'solid', borderColor: '#527fe4' }}>Block</Text>
              <Text style={{ fontSize: 14, borderWidth: 1, borderStyle: 'solid', borderColor: '#527fe4' }}>Block</Text>
            </Flex>
          </WingBlank>
        </WingBlank>
        <WingBlank style={{ marginTop: 5, marginBottom: 5 }}>
          <Text style={{ marginBottom: 10 }}>Wrap parameters</Text>
          <Text>wrap='wrap':</Text>
        </WingBlank>
        <WingBlank style={{ marginBottom: 5 }}>
          <Flex wrap='wrap'>
            {'ooooooooooooooooooooooooooooo'.split('').map((char, i) => <Circle key={`${i}-${char}`} />)}
          </Flex>
        </WingBlank>
        <WingBlank style={{ marginTop: 5, marginBottom: 5 }}>
          <Text>wrap='nowrap':</Text>
        </WingBlank>
        <WingBlank style={{ marginBottom: 5 }}>
          <Flex wrap='nowrap'>
            {'ooooooooooooooooooooooooooooo'.split('').map((char, i) => <Circle key={`${i}-${char}`} />)}
          </Flex>
        </WingBlank>
        <WhiteSpace />
      </ScrollView>)
  }
}
