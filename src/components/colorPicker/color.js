var width = 256;
var can = document.getElementById('canvas');
var ctx = can.getContext('2d');
var curColor = 'rgba(255,0,0,1)';
var cur = document.getElementById('cur');
var rgbValue = document.getElementById('rgb_value');
var hexValue = document.getElementById('hex_value');
var colorShow = document.getElementById('color_show');

var aColorInput = document.getElementsByClassName('color_input');

function colorBar() {
    var gradientBar = ctx.createLinearGradient(0, 0, 0, width);
    gradientBar.addColorStop(0, '#f00');
    gradientBar.addColorStop(1 / 6, '#f0f');
    gradientBar.addColorStop(2 / 6, '#00f');
    gradientBar.addColorStop(3 / 6, '#0ff');
    gradientBar.addColorStop(4 / 6, '#0f0');
    gradientBar.addColorStop(5 / 6, '#ff0');
    gradientBar.addColorStop(1, '#f00');

    ctx.fillStyle = gradientBar;
    ctx.fillRect(0, 0, 20, width);
}

function rgb2hex(rgb) {
    var aRgb = rgb instanceof Array ? rgb : (rgb.split(',') || [0, 0, 0]);
    var temp;
    return [
        (temp = Number(aRgb[0]).toString(16)).length == 1 ? ('0' + temp) : temp,
        (temp = Number(aRgb[1]).toString(16)).length == 1 ? ('0' + temp) : temp,
        (temp = Number(aRgb[2]).toString(16)).length == 1 ? ('0' + temp) : temp,
    ].join('');
}

function hex2rgb(hex) {
    if(hex.length == 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    return [
        parseInt(hex[0] + hex[1], 16),
        parseInt(hex[2] + hex[3], 16),
        parseInt(hex[4] + hex[5], 16),
    ].join();
}

function putCurDom(color) {
    if(/([0-9a-f]{3}|[0-9a-f]{6})/i.test(color)) {
        // hex
        color = hex2rgb(color);
    } else if(color instanceof Array) {
        color = color.join(',');
    } else if(/\d{1,3}(\,\d{1,3}){2}/i.test(color)) {

    } else {
        return;
    }
}

function colorBox(color) {
    // 底色填充，也就是（举例红色）到白色
    var gradientBase = ctx.createLinearGradient(30, 0, width + 30, 0);
    gradientBase.addColorStop(1, color);
    gradientBase.addColorStop(0, 'rgba(255,255,255,1)');
    ctx.fillStyle = gradientBase;
    ctx.fillRect(30, 0, width, width);
    // 第二次填充，黑色到透明
    var my_gradient1 = ctx.createLinearGradient(0, 0, 0, width);
    my_gradient1.addColorStop(0, 'rgba(0,0,0,0)');
    my_gradient1.addColorStop(1, 'rgba(0,0,0,1)');
    ctx.fillStyle = my_gradient1;
    ctx.fillRect(30, 0, width, width);
}

function bind() {
    can.addEventListener('click', function(e) {
        var ePos = {
            x: e.offsetX || e.layerX,
            y: e.offsetY || e.layerY
        }
        var rgbaStr = '#000';
        if(ePos.x >= 0 && ePos.x < 20 && ePos.y >= 0 && ePos.y < width) {
            // in
            rgbaStr = getRgbaAtPoint(ePos, 'bar');
            colorBox('rgba(' + rgbaStr + ')');
        } else if(ePos.x >= 30 && ePos.x < 30 + width && ePos.y >= 0 && ePos.y < width) {
            rgbaStr = getRgbaAtPoint(ePos, 'box');
        } else {
            return;
        }
        outColor(rgbaStr.slice(0, 3).join());
        cur.style.left = ePos.x + 'px';
        cur.style.top = ePos.y + 'px';
        cur.style.outlineColor = (rgbaStr[0] > 256 / 2 || rgbaStr[1] > 256 / 2 || rgbaStr[2] > 256 / 2) ? '#000' : '#fff';
    });

    can.addEventListener('mousedown', function(e) {
        var ePos = {
            x: e.layerX || e.offsetX,
            y: e.layerY || e.offsetY
        }
        if(ePos.x >= 30 && ePos.x < 30 + width && ePos.y >= 0 && ePos.y < width) {
            document.onmousemove = function(e) {
                var pos = {
                    x: e.clientX,
                    y: e.clientY
                }

                pos.x = pos.x < 30 ? 30 : pos.x && (pos.x > (30 + width - 1) ? (30 + width - 1) : pos.x);
                pos.y = pos.y < 0 ? 0 : pos.y && (pos.y > (width - 1) ? (width - 1) : pos.y);

                rgbaStr = getRgbaAtPoint(pos, 'box');
                cur.style.left = pos.x + 'px';
                cur.style.top = pos.y + 'px';
                cur.style.outlineColor = (rgbaStr[0] > 256 / 2 || rgbaStr[1] > 256 / 2 || rgbaStr[2] > 256 / 2) ? '#000' : '#fff';
                outColor(rgbaStr.slice(0, 3).join());
            };
            document.onmouseup = function() {
                // outColor(rgbaStr.slice(0, 3).join());
                document.onmouseup = document.onmousemove = null;
            }
        }

    });
}

function outColor(rgb) {
    rgbValue.value = rgb;
    hexValue.value = rgb2hex(rgb);
    colorShow.style.backgroundColor = 'rgb(' + rgb + ')';
}

function getRgbaAtPoint(pos, area) {
    if(area == 'bar') {
        var imgData = ctx.getImageData(0, 0, 20, width);
    } else {
        var imgData = ctx.getImageData(0, 0, can.width, can.height);
    }

    var data = imgData.data;
    var dataIndex = (pos.y * imgData.width + pos.x) * 4;
    console.log(imgData.data)
    return [
        data[dataIndex],
        data[dataIndex + 1],
        data[dataIndex + 2],
        (data[dataIndex + 3] / 255).toFixed(2),
    ];
}

function init() {
  colorBar();
  colorBox(curColor);
  bind();
}

init();