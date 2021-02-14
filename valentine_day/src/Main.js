/**
 * Created by Rychou on 2018/4/19.
 */
import React, { Component } from 'react'
import $ from 'jquery'
import url from './audio/gbqq.mp3' // 引入背景音乐文件


class Main extends Component {
    state = {
        date: {},
    }
    componentDidMount() {
        this.print();
        setInterval(() => {
            this.time(2020, 9, 15) // 你们的纪念日
        }, 1000
        )
        var audio = document.getElementById("audio");
        setTimeout(() => audio.play(), 8500) // 背景音乐在页面加载后，延迟播放的时长，单位：毫秒。
    }
    print = () => {
        $.fn.autotype = function () {
            var _this = $(this);
            var str = _this.html();
            // 正则替换代码行之间添加的多个空格，不去除换行输出会有明显的停顿：实际是在输出多个空格
            str = str.replace(/(\s){2,}/g, "$1");
            var index = 0;
            $(this).html('');
            var timer = function fn() {
                var args = arguments;
                var current = str.slice(index, index + 1);
                // html标签完整输出,如：<p>
                if (current == '<') {
                    index = str.indexOf('>', index) + 1;
                }
                else {
                    index++;
                }
                //位运算符: 根据setInterval运行奇偶次来判断是否加入下划线字符“_”，使输入效果更逼真
                if (index < str.length - 1) { //打印字符倒数第2个字符开始，不加下划线字符，以防止结束符可能会多输出一下划线字符
                    _this.html(str.substring(0, index) + (index & 1 ? '_' : ''));
                } else {
                    _this.html(str.substring(0, index));
                    clearTimeout(timer);
                };
                setTimeout(fn, 200)
            };
            // 延迟1s开始
            setTimeout(timer, 1000);
        };
        $("#autotype").autotype();
    }
    time = (year, month, day) => {
        var dateNow = new Date();
        var dateJNR = new Date(year, month - 1, day);
        // var anniversary = parseInt((dateNow - dateJNR) / (365*24*3600*1000))
        var d = parseInt((dateNow - dateJNR) / (24 * 3600 * 1000));
        var hour = parseInt(((dateNow - dateJNR) / (3600 * 1000)) % 24);
        var minute = parseInt((dateNow - dateJNR) / (1000 * 60) % 60);
        var second = parseInt((dateNow - dateJNR) / 1000 % 60);
        this.setState({ date: { d: d, hour: hour, minute: minute, second: second } });
    };
    render() {
        const date = () => {
            if (this.state.date.d !== undefined) {
                const { d, hour, minute, second } = this.state.date
                return (<p>我们已经一起走过了: <span className="date-text">{d}</span> 天 <span className="date-text">{hour}</span> 小时 <span className="date-text">{minute}</span> 分 <span className="date-text">{second}</span> 秒 </p>
                )
            }
        }
        return (
            <div className="App animated bounceInLeft">
                <div className="date">{date()}</div>
                <div id="autotype">
                    <h1 style={{ fontWeight: 900 }}>哈喽！小倩子，哦不......倩姐</h1>
                    <p >在煽情开始之前，先放首歌当背景音乐吧！Music!</p>
                    <p>今天是我们的第一个情人节，从2020年9月15日认识你到现在，我们一起经历了许许多多的事情，有欢笑和陪伴，也曾因为一些事情冷落过彼此，但是我们都走过来了。
                </p>
                    <p>记得第一次见到你，是在实验楼208打扫卫生。那一天你是如此的美丽动人，临走时的惊鸿一瞥，尽管不到0.05秒，可我的心却被电得久久不能平息，从此我的心里便留下了这一瞬间的永恒。那一天，海安的风很大，却丝毫不能吹散我关于你的回忆。
                </p>
                    <p>第一次和你出去玩，那一天我们玩得很晚。海安博物馆是我逛过的最有意思的博物馆，因为有你，我发现，普通的出行不再平凡，陪伴彼此的每一刻都有美好。我们走过的每一步都会留下许多特别的回忆。晚饭时我们敞开心扉，倾诉着话不完的经历，第一次你会为了赶时间和我看电影在自助餐上狼吞虎咽，我也会尽量吃完你拿的那些吃不完的食物。那晚的电影不是很好看，可是你在我旁边压低音量嗑瓜的样子，的确使我忍俊不禁。当时看着你活泼大方且腼腆的侧脸，我心中隐约觉得“一定是她，没错了”。那一晚我们玩得很晚，晚到不知不觉就要门禁了。不的不说，有你的时光过得真的很快，快到去沭阳玩的那天仿佛被订成了相片，被定格只有那一刻，却又能勾起我的无限回忆。
                </p>
                    <p>想知道喜欢你是什么感觉吗，有时候因为你的不开心和冷淡,我会委屈得想哭鼻子，有时候又因为有你在身边，我会开心的飞起来，有时候会因为太过想你，不停的期盼相遇那天的到来，喜欢你，也太难了吧！所以，你能喜欢我一下下好嘛？我会很乖的！
                </p>
                    <p>你不用刻意温柔，可以冲我耍脾气，可以生气，可以皱眉，我把一生的耐心都给你，我来哄你就好！因为我喜欢那个会在我难过时安慰我的你，我喜欢那个会在我没有动力时给我鼓励的你，我喜欢那个会说“如何你想的话，我会陪你”的那个你。不，这些都不够，因为我很贪心，所以，我会喜欢各个方面的你。
                </p>
                    <p>我不善于文字表达，写这一个网页和说那么多话也就想表达“我爱你”这简单的三个字而已，说煽情一点就是：“我的心室是单人间，只住得下你一人！”
                        好期待早点开学，早点和你相见。因为等的越久，相见时就越幸福，我希望那份幸福快点到来，源源不断~~~
                </p>
                    <p>最后，祝我亲爱的小倩子情人节快乐！！！</p>
                    <div style={{ textAlign: 'right' }}>
                        <p>爱你的♥矗</p>
                        <p>2021年2月14日</p>
                    </div>
                </div>
                <audio id="audio" src={url}></audio>
            </div>

        )
    }
}
export default Main