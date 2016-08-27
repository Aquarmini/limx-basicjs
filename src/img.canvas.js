/**
 * Created by limx on 2016/8/27.
 */
/**
 *
 * @param event js 事件对象
 * @param callback 回调函数 data为图片数据流
 * @param width 压缩后的宽度 0为自适应
 * @param height 压缩后的高度 0为自适应
 * @constructor
 */
function CanvasCompress(event, width, height, callback) {
    var file = event.currentTarget.files[0];
    var reader = new FileReader();
    reader.onload = function (e) {
        var image = $('<img/>');
        image.on('load', function () {
            //计算长宽
            if (width == 0 && height == 0) {
                width = 100;
                height = 100;
            }
            else if (width == 0) {
                width = height / this.height * this.width;
            }
            else if (height == 0) {
                height = width / this.width * this.height;
            }

            var canvas = document.createElement('canvas');
            canvas.width = width;
            canvas.height = height;
            var context = canvas.getContext('2d');
            context.clearRect(0, 0, width, height);
            var imageWidth;
            var imageHeight;
            var offsetX = 0;
            var offsetY = 0;
            var rateWidth = this.width / width;
            var rateHeight = this.height / height;
            if (rateWidth > rateHeight) {
                imageWidth = Math.round(height * this.width / this.height);
                imageHeight = height;
                offsetX = -Math.round((imageWidth - width) / 2);
            } else {
                imageHeight = Math.round(width * this.height / this.width);
                imageWidth = width;
                offsetY = -Math.round((imageHeight - height) / 2);
            }
            context.drawImage(this, offsetX, offsetY, imageWidth, imageHeight);
            var data = canvas.toDataURL('image/jpeg');
            callback(data);
        });
        image.attr('src', e.target.result);
    };
    reader.readAsDataURL(file);
}

/**
 * 图片裁剪
 * @param file 图片地址 图片流
 * @param width 宽
 * @param height 高
 * @param callback 回调函数
 * @constructor
 */
function CanvasImgCompress(file, width, height, callback) {
    var image = $('<img/>');
    image.on('load', function () {
        //计算长宽
        if (width == 0 && height == 0) {
            width = 100;
            height = 100;
        }
        else if (width == 0) {
            width = height / this.height * this.width;
        }
        else if (height == 0) {
            height = width / this.width * this.height;
        }

        var canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, width, height);
        var imageWidth;
        var imageHeight;
        var offsetX = 0;
        var offsetY = 0;
        var rateWidth = this.width / width;
        var rateHeight = this.height / height;
        if (rateWidth > rateHeight) {
            imageWidth = Math.round(height * this.width / this.height);
            imageHeight = height;
            offsetX = -Math.round((imageWidth - width) / 2);
        } else {
            imageHeight = Math.round(width * this.height / this.width);
            imageWidth = width;
            offsetY = -Math.round((imageHeight - height) / 2);
        }
        context.drawImage(this, offsetX, offsetY, imageWidth, imageHeight);
        var data = canvas.toDataURL('image/jpeg');
        callback(data);
    });
    image.attr('src', file);
}

/**
 * 是否支持画布
 * @returns {boolean}
 */
function isCanvasSupported() {
    var elem = document.createElement('canvas');
    return !!(elem.getContext && elem.getContext('2d'));
}

/**
 * 旋转90度
 * @param file 图片地址 图片流
 * @param callback 回调函数
 * @constructor
 */
function CanvasRotate(file, callback) {
    var image = $('<img/>');
    image.on('load', function () {
        var canvas = document.createElement('canvas');

        canvas.width = this.height;
        canvas.height = this.width;
        //清除画布
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);

        //设置原点
        context.translate(Math.round(canvas.width), Math.round(0));
        context.rotate(0.5 * Math.PI);
        context.drawImage(this, 0, 0, canvas.height, canvas.width);

        var data = canvas.toDataURL('image/jpeg');
        callback(data);
    });
    image.attr('src', file);
}

/**
 * canvas画布读取上传图片数据流
 * @param event js 事件对象
 * @param callback 回调函数
 * @constructor
 */
function CanvasReader(event, callback) {
    var file = event.currentTarget.files[0];
    var reader = new FileReader();
    reader.onload = function (e) {
        var image = $('<img/>');
        image.on('load', function () {
            var canvas = document.createElement('canvas');
            canvas.width = this.width;
            canvas.height = this.height;
            var context = canvas.getContext('2d');
            context.clearRect(0, 0, this.width, this.height);
            context.drawImage(this, 0, 0, this.width, this.height);
            var data = canvas.toDataURL('image/jpeg');
            callback(data);
        });
        image.attr('src', e.target.result);
    };
    reader.readAsDataURL(file);
}