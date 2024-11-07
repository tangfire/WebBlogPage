`float: left;` 是一种 CSS 属性，用于让一个元素向其父元素的左边“浮动”，并允许其右边的元素环绕它。比如，你有两个 div 元素，一个是图片，另一个是文字，使用 `float: left;` 可以让文字环绕在图片的右边。下面是一个简单的例子：

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        .left-float {
            float: left;
            margin-right: 20px;
        }
    </style>
</head>
<body>
    <div class="left-float">
        <img src="https://via.placeholder.com/100" alt="image">
    </div>
    <div>
        <p>这段文字会环绕在图片的右侧。通过设置图片的浮动属性为 left，文字就可以靠在图片的右边。</p>
    </div>
</body>
</html>
```

在这个例子中，图片使用 `float: left;` 来让它浮动到页面的左边，而文字会自动环绕在它的右边。