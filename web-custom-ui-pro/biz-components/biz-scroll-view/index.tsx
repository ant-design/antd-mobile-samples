/**
 *  视觉稿：
 */
import * as React from 'react';
import classNames from 'classnames';
import throttle from 'lodash.throttle';

export interface TsProps {
  data: Array<any>;
  visibleItemsAmount?: number;
  style?: {};
  scrollEventThrottle?: number;
  prefixCls?: string;
  className?: string;
}
export interface TsState {
  offset: number;
}

export default class BizScrollView extends React.Component<TsProps, TsState> {
  static defaultProps = {
    prefixCls: 'biz-scroll-view',
    scrollEventThrottle: 20,
    data: [],
  };
  _onScroll: any;
  indicatorWidth: number;
  scrollWidth: number;
  refs: any;

  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
    };
  }

  componentDidMount() {
    this._onScroll = throttle(this.onScroll, this.props.scrollEventThrottle);
    // 直接在 jsx 里 onScroll , throttle 不会生效
    this.refs.scrollview.addEventListener('scroll', this._onScroll);
    this.componentDidUpdate();
  }
  componentWillUnmount() {
    this.refs.scrollview.removeEventListener('scroll', this._onScroll);
  }
  componentDidUpdate() {
    this.indicatorWidth = this.refs.indicator.clientWidth;
    this.scrollWidth = this.refs.scrollview.scrollWidth;
    // this.visibleWidth = this.refs.scrollview.clientWidth;
  }

  onScroll = () => {
    // console.log('sss', this.scrollWidth, this.indicatorWidth, this.refs.scrollview.scrollLeft);
    this.setState({
      offset: this.refs.scrollview.scrollLeft * this.indicatorWidth / this.scrollWidth,
    });
  }

  render() {
    const { className, prefixCls, visibleItemsAmount = 4, data } = this.props;
    const wrapCls = classNames({
      [className as string]: !!className,
      [prefixCls as string]: true,
    });
    return (<div className={wrapCls}>
      <div className={`${prefixCls}-list`} ref="scrollview">
        {data.map((item, index) => {
          return (<div key={index}
            className={`${prefixCls}-list-item`}
            style={{width: `${100 / visibleItemsAmount}%`}}
          >
            {item}
          </div>);
        })}
      </div>
      <div className={`${prefixCls}-indicator`} ref="indicator">
        <div className={`${prefixCls}-indicator-scroller`}
          style={{ width: `${visibleItemsAmount / data.length * 100}%`, left: this.state.offset }}
        />
      </div>
    </div>);
  }
}
