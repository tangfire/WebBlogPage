我将通过一个示例来展示 `position: fixed;` 如何影响元素的位置。在这个例子中，我会创建一个固定在页面顶部的导航栏，并展示滚动和不滚动时的区别。

### 示例代码：
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fixed Position Example</title>
    <style>
        body {
            margin: 0;
            font-family: Arial, sans-serif;
        }
        
        /* 固定在页面顶部的导航栏 */
        nav {
            position: fixed; /* 使元素固定在页面顶部 */
            top: 0; /* 固定在页面顶部 */
            left: 0;
            width: 100%; /* 宽度为页面的100% */
            background-color: #333;
            color: white;
            text-align: center;
            padding: 15px 0;
            font-size: 18px;
            z-index: 1000; /* 确保导航栏在其他内容之上 */
        }

        /* 页面内容 */
        .content {
            padding-top: 80px; /* 给内容加点上边距，以防导航栏遮挡 */
            height: 2000px; /* 设置足够的高度，让页面能够滚动 */
            background-color: #f4f4f4;
            font-size: 20px;
        }

        /* 示例链接 */
        .content p {
            margin: 20px;
        }

    </style>
</head>
<body>

    <!-- 固定的导航栏 -->
    <nav>
        固定顶部导航栏
    </nav>

    <!-- 页面内容 -->
    <div class="content">
        <p>滚动页面时，导航栏将始终固定在页面顶部。</p>
        <p>你可以滚动页面，查看导航栏的位置如何保持固定。</p>
        <p>继续滚动，体验固定定位的效果。</p>
        <p>这里是一些页面内容，页面足够长，可以滚动。</p>
        <p>继续滚动。</p>
        <p>继续滚动，直到页面底部。</p>
        <p>...</p>
    </div>

</body>
</html>
```

### 说明：
1. **`position: fixed;`**：使得 `<nav>` 元素固定在页面上的一个位置，具体来说，是固定在浏览器窗口的顶部，不随页面滚动。
2. **`top: 0;`**：确保 `nav` 元素的顶部与浏览器窗口的顶部对齐。
3. **`width: 100%;`**：使得 `nav` 元素的宽度占据整个屏幕宽度。
4. **`.content`**：给页面内容设置了高度，使页面变得足够长，以便可以滚动。

### **不滚动时**：
当你打开这个页面并不进行滚动时，你会看到导航栏（`<nav>`）固定在页面的顶部，占据整个页面的顶部空间。导航栏的内容“固守”在屏幕上方。

### **滚动时**：
当你滚动页面时，页面内容会随着滚动条的移动而上下滚动。然而，由于导航栏使用了 `position: fixed;` 和 `top: 0;`，导航栏始终会固定在浏览器窗口的顶部，不会随着页面的滚动而离开屏幕。

### **效果展示**：
- **不滚动时**：导航栏在页面顶部显示，页面内容开始于导航栏的下方。
- **滚动时**：页面内容会继续向上滚动，但导航栏始终会保持在视口顶部，不会被遮挡或移动。

你可以将上述代码复制到一个 HTML 文件中，并在浏览器中打开，滚动页面时，你会看到导航栏始终固定在页面顶部。

---
