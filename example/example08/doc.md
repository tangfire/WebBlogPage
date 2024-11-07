为了帮助你理解 `overflow: scroll;`，我会写一个简单的 HTML 和 CSS 示例，展示如何使用这个属性来处理内容溢出的情况。

### **基本概念**

- **`overflow: scroll;`** 属性表示 **无论内容是否溢出，都始终显示滚动条**。
- 如果容器中的内容超出了容器的可视区域，滚动条将允许用户滚动查看剩余的内容。

### **HTML 和 CSS 示例**

我们创建一个包含大量文本的容器，设置固定高度，并使用 `overflow: scroll;` 来确保滚动条始终显示。

#### **HTML：**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Overflow Scroll Example</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="scroll-container">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sollicitudin enim vitae felis tincidunt, ac euismod odio malesuada. Sed auctor viverra est, vel elementum eros ullamcorper at. Ut vel sapien at felis egestas eleifend. Phasellus quis ante ut mi cursus feugiat non nec libero. Sed volutpat, erat vel faucibus euismod, augue lorem volutpat felis, eu vulputate mi purus sit amet nulla. Suspendisse potenti. Cras at tristique nulla. Integer lobortis augue at lorem elementum cursus.</p>
        <p>Donec cursus sit amet odio a fringilla. Curabitur imperdiet, orci at lobortis cursus, nisl purus pharetra magna, eu hendrerit libero erat vel erat. Etiam malesuada fringilla est. Sed scelerisque feugiat eros, eget ultricies turpis. Phasellus ultricies ac libero sit amet iaculis. Integer non nulla ac justo auctor scelerisque. Integer vitae volutpat nunc. Integer vitae sem id eros euismod tempor. Ut accumsan turpis vel lorem porttitor iaculis.</p>
        <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer sed metus vel risus malesuada viverra non id purus. Nulla nec lectus nec turpis varius congue non id velit. Etiam fringilla dolor eu dolor sollicitudin, ut scelerisque metus volutpat. Maecenas sollicitudin diam a dolor venenatis mollis. Donec eget justo tristique, tincidunt nisi id, vehicula ipsum. Donec viverra neque at odio iaculis, ac euismod lorem euismod.</p>
    </div>
</body>
</html>
```

#### **CSS（styles.css）：**
```css
body {
    font-family: Arial, sans-serif;
}

.scroll-container {
    width: 300px;          /* 容器的宽度 */
    height: 200px;         /* 容器的高度 */
    border: 2px solid #000; /* 给容器添加边框，便于查看 */
    overflow: scroll;      /* 始终显示滚动条 */
    padding: 10px;
}
```

### **解释：**

1. **`scroll-container`** 是一个有固定宽度和高度的容器（300px x 200px）。
2. 容器的内容非常多，所以超出了它的高度。
3. 使用 `overflow: scroll;` 属性，**即使内容没有超出容器**，也会始终显示滚动条。
4. 我们给容器加了 `border`，使其边界可见，方便观察效果。

### **效果：**

- 在浏览器中查看时，`scroll-container` 容器会显示一个 **垂直和水平滚动条**，即使内容并没有完全溢出（你可能需要调整容器的内容或增加文字来看到滚动条）。
- 如果容器的内容超过容器的高度或宽度，用户可以使用滚动条来查看超出部分的内容。

### **进一步解释：**

- **`overflow: scroll;`** 表示容器的内容 **始终显示滚动条**。如果容器的内容超出了其可视区域，用户可以使用滚动条来滚动查看剩余的内容；即使内容没有溢出，浏览器也会显示滚动条。
  
### **总结：**
通过这个简单的示例，你可以看到 `overflow: scroll;` 是如何确保滚动条始终存在，即使内容没有超出容器范围。对于网页设计，这通常用于在内容区域中显示滚动条，保持一定的设计布局，或是避免让用户看到空白区域。