import React from 'react';
import { RefreshControl, ListView, Carousel, SwipeAction } from 'antd-mobile';

class Carou extends React.Component {
  state = {
    data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
    initialHeight: 400,
  }
  render() {
    return (
      <Carousel infinite>
        {this.state.data.map(ii => (
          <a key={ii}
            style={{
              display: 'block', height: this.state.initialHeight,
              background: `url(https://zos.alipayobjects.com/rmsportal/${ii || 'QcWDkUhvYIVEcvtosxMF'}.png) no-repeat`,
              backgroundSize: 'cover'
            }}
          />
        ))}
      </Carousel>
    );
  }
}

let pageIndex = 0;

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.initData = [];
    for (let i = 0; i < 20; i++) {
      this.initData.push(`r${i}`);
    }
    this.state = {
      dataSource: dataSource.cloneWithRows(this.initData),
      refreshing: false,
    };
  }
  componentDidMount() {
    this.props.changeTitle('Stage 1');
  }
  onRefresh() {
    this.setState({ refreshing: true });
    setTimeout(() => {
      this.initData = [`ref${pageIndex++}`, ...this.initData];
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.initData),
        refreshing: false,
      });
    }, 1000);
  }
  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderHeader={() => <div>ListView + RefreshControl + SwipeAction</div>}
        renderRow={(rowData, sectionID, rowID) => {
          return (
            <div key={rowID} style={{ padding: 10 }}>
              <div>{rowData}</div>
              {Number(rowID) % 2 === 0 ? <Carou /> : <SwipeAction
                autoClose
                right={[
                  {
                    text: 'Cancel',
                    onPress: () => console.log('cancel'),
                    style: { backgroundColor: '#ddd', color: 'white' },
                  },
                  {
                    text: 'Delete',
                    onPress: () => console.log('delete'),
                    style: { backgroundColor: '#F4333C', color: 'white' },
                  },
                ]}
              >
                <div style={{ padding: 40, backgroundColor: '#f1f1f1' }}>drag left</div>
              </SwipeAction>}
            </div>
          );
        }}
        renderSeparator={(sectionID, rowID) => (
          <div key={`${sectionID}-${rowID}`} style={{ backgroundColor: '#F5F5F9', height: 8 }} />
        )}
        initialListSize={10}
        pageSize={5}
        scrollRenderAheadDistance={200}
        scrollEventThrottle={20}
        style={{
          height: document.body.clientHeight,
        }}
        contentContainerStyle={{ position: 'relative' }}
        scrollerOptions={{ scrollbars: true }}
        refreshControl={<RefreshControl
          refreshing={this.state.refreshing}
          onRefresh={this.onRefresh}
        />}
      />
    );
  }
}


