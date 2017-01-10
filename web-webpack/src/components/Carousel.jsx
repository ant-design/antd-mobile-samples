import { Carousel } from 'antd-mobile';

export default class My extends React.Component {
  render() {
    const data = [
      {
        img: 'http://img.fancyedu.com/sys/ic/operation/1482377088291_banner1.png',
        link: 'lessonDetail'
      },
      {
        img: 'http://img.fancyedu.com/sys/ic/operation/1482377088291_banner1.png',
        link: 'lessonDetail'
      },
      {
        img: 'http://img.fancyedu.com/sys/ic/operation/1482377088291_banner1.png',
        link: 'lessonDetail'
      }
    ];
    return (
      <Carousel dots infinite selectedIndex={1} className="xxx" style={{ backgroundColor: 'blue', margin: 10 }}>
        {data.map((d, i) => {
          return <a href={d.link} key={i}><img style={{ verticalAlign: 'top' }} src={d.img}/></a>;
        })}
      </Carousel>
    );
  }
}
