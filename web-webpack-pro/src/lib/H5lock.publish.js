(function() {
    window.H5lock = function(obj) {
        this.height = obj.height;
        this.width = obj.width;
        this.chooseType = obj.chooseType;
        this.container = obj.container;
        this.inputEnd = obj.inputEnd;
    };

    H5lock.prototype.drawCle = function(x, y) { // 初始化解锁密码面板
        this.ctx.strokeStyle = '#CFE6FF';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.arc(x, y, this.r, 0, Math.PI * 2, true);
        this.ctx.closePath();
        this.ctx.stroke();
    }
    H5lock.prototype.drawPoint = function() { // 初始化圆心
        for (var i = 0; i < this.lastPoint.length; i++) {
            this.ctx.fillStyle = '#CFE6FF';
            this.ctx.beginPath();
            this.ctx.arc(this.lastPoint[i].x, this.lastPoint[i].y, this.r / 2, 0, Math.PI * 2, true);
            this.ctx.closePath();
            this.ctx.fill();
        }
    }
    H5lock.prototype.drawStatusPoint = function(type, psw) { // 初始化状态线条
        var obj = {
            'right': '#2CFF26',
            'notright': 'red'
        };
        type = obj[type];


        for (var i = 0; i < this.prevPoint.length; i++) {
            this.ctx.strokeStyle = type;
            this.ctx.beginPath();
            this.ctx.arc(this.prevPoint[i].x, this.prevPoint[i].y, this.r, 0, Math.PI * 2, true);
            this.ctx.closePath();
            this.ctx.stroke();
        }
    }
    H5lock.prototype.drawLine = function(po, lastPoint) { // 解锁轨迹
        this.ctx.beginPath();
        this.ctx.lineWidth = 3;
        this.ctx.moveTo(this.lastPoint[0].x, this.lastPoint[0].y);

        for (var i = 1; i < this.lastPoint.length; i++) {
            this.ctx.lineTo(this.lastPoint[i].x, this.lastPoint[i].y);
        }
        this.ctx.lineTo(po.x, po.y);
        this.ctx.stroke();
        this.ctx.closePath();

    }
    H5lock.prototype.createCircle = function() { // 创建解锁点的坐标，根据canvas的大小来平均分配半径
        var n = this.chooseType;
        var count = 0;
        this.r = this.ctx.canvas.width / (2 + 4 * n); // 公式计算
        this.lastPoint = [];
        this.arr = [];
        this.restPoint = [];
        var r = this.r;
        for (var i = 0; i < n; i++) {
            for (var j = 0; j < n; j++) {
                count++;
                var obj = {
                    x: j * 4 * r + 3 * r,
                    y: i * 4 * r + 3 * r,
                    index: count
                };
                this.arr.push(obj);
                this.restPoint.push(obj);
            }
        }
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        for (var i = 0; i < this.arr.length; i++) {
            this.drawCle(this.arr[i].x, this.arr[i].y);
        }
        //return arr;
    }
    H5lock.prototype.getPosition = function(e) { // 获取touch点相对于canvas的坐标
        var rect = e.currentTarget.getBoundingClientRect();
        var po = {
            x: e.touches[0].clientX - rect.left,
            y: e.touches[0].clientY - rect.top
        };
        return po;
    }
    H5lock.prototype.update = function(po) { // 核心变换方法在touchmove时候调用
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

        for (var i = 0; i < this.arr.length; i++) { // 每帧先把面板画出来
            this.drawCle(this.arr[i].x, this.arr[i].y);
        }

        this.drawPoint(this.lastPoint); // 每帧花轨迹
        this.drawLine(po, this.lastPoint); // 每帧画圆心

        for (var i = 0; i < this.restPoint.length; i++) {
            if (Math.abs(po.x - this.restPoint[i].x) < this.r && Math.abs(po.y - this.restPoint[i].y) < this.r) {
                this.drawPoint(this.restPoint[i].x, this.restPoint[i].y);
                this.lastPoint.push(this.restPoint[i]);
                this.restPoint.splice(i, 1);
                break;
            }
        }

    }
    H5lock.prototype.storePass = function(psw) { // touchend结束之后对密码和状态的处理
        this.prevPoint = psw;
        var str = '';
        for (var i = 0; i < psw.length; i++) {
            str += psw[i].index;
        }
        this.inputEnd && this.inputEnd(str);
    }
    H5lock.prototype.setChooseType = function(type) {
        chooseType = type;
        init();
    }
    H5lock.prototype.updatePassword = function() {
        window.localStorage.removeItem('password');
        window.localStorage.removeItem('chooseType');
        this.pswObj = {};
        this.reset();
    }
    H5lock.prototype.initDom = function() {
        var wrap = document.getElementById(this.container);
        var canvasEle = document.createElement('canvas');
        canvasEle.id = "canvas";
        canvasEle.width = this.width;
        canvasEle.height = this.height;
        // wrap.setAttribute('style','position: absolute;top:0;left:0;right:0;bottom:0;');
        // wrap.innerHTML = str;
        wrap.appendChild(canvasEle)
            // document.body.appendChild(wrap);
    }
    H5lock.prototype.init = function() {
        this.initDom();
        this.pswObj = window.localStorage.getItem('password') ? {
            step: 2,
            spassword: window.localStorage.getItem('password')
        } : {};
        this.lastPoint = [];
        this.prevPoint = [];
        this.touchFlag = false;
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.createCircle();
        this.bindEvent();
    }
    H5lock.prototype.reset = function() {
        this.createCircle();
    }
    H5lock.prototype.bindEvent = function() {
        var self = this;
        this.canvas.addEventListener("touchstart", function(e) {
            e.preventDefault(); // 某些android 的 touchmove不宜触发 所以增加此行代码
            var po = self.getPosition(e);

            for (var i = 0; i < self.arr.length; i++) {
                if (Math.abs(po.x - self.arr[i].x) < self.r && Math.abs(po.y - self.arr[i].y) < self.r) {

                    self.touchFlag = true;
                    self.drawPoint(self.arr[i].x, self.arr[i].y);
                    self.lastPoint.push(self.arr[i]);
                    self.restPoint.splice(i, 1);
                    break;
                }
            }
        }, false);
        this.canvas.addEventListener("touchmove", function(e) {
            if (self.touchFlag) {
                self.update(self.getPosition(e));
            }
        }, false);
        this.canvas.addEventListener("touchend", function(e) {
            if (self.touchFlag) {
                self.touchFlag = false;
                self.storePass(self.lastPoint);
                setTimeout(function() {
                    self.reset();
                }, 300);
            }
        }, false);
    }
})();