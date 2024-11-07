# 案例

帮助你理解 `transition: 0.5s 1s;` 的工作原理。

### **案例概述：**
我们将创建一个简单的卡片效果，当用户悬停在卡片上时，卡片的背景色和大小会发生变化，过渡效果会延迟 1 秒钟开始，并且持续 0.5 秒。

### **HTML 代码：**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Transition 示例</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="card">
        <h2>Hover over me!</h2>
    </div>
</body>
</html>
```

### **CSS 代码：**

```css
/* 统一设置卡片样式 */
.card {
    width: 300px;
    height: 200px;
    background-color: #4CAF50;  /* 初始背景颜色 */
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    text-align: center;
    border-radius: 10px;
    transition: all 0.5s 1s;  /* 0.5秒的过渡时间，1秒的延迟 */
}

/* 当鼠标悬停时，卡片的变化 */
.card:hover {
    background-color: #FF5722;  /* 改变背景颜色 */
    transform: scale(1.2);  /* 放大卡片 */
}
```

### **解释：**

1. **基本样式 (`.card`)：**
   - 我们定义了一个 `.card` 类，它是一个具有背景颜色、文本对齐和居中的卡片，尺寸为 `300px` x `200px`。
   - `transition: all 0.5s 1s;` 表示：所有可以过渡的 CSS 属性（如背景颜色、尺寸、位置等）在发生变化时，**将延迟 1 秒** 才开始过渡，并且过渡的时间为 **0.5 秒**。

2. **鼠标悬停效果 (`.card:hover`)：**
   - 当用户把鼠标悬停在卡片上时，卡片的背景颜色会从绿色变为橙色，并且卡片会 **放大 1.2 倍**。
   
3. **过渡效果：**
   - `transition: all 0.5s 1s;` 这个属性在卡片的 `hover` 过程中生效：
     - **延迟 1 秒：** 当用户把鼠标移到卡片上时，卡片的颜色和大小不会立即变化，而是等 1 秒后才开始过渡。
     - **持续 0.5 秒：** 从 1 秒延迟后，背景颜色和尺寸的变化会 **平滑地过渡**，且过渡时间为 0.5 秒。

### **效果演示：**

- **初始状态**：卡片的背景颜色为绿色，尺寸为 `300px` x `200px`。
- **鼠标悬停**：当鼠标悬停在卡片上时：
  - **1秒延迟** 后，背景颜色会变为橙色，卡片放大为原来的 `1.2` 倍。
  - 这个过程在 **0.5秒内平滑过渡**。

### **总结：**
- **`transition: 0.5s 1s;`** 的意思是：过渡效果的持续时间是 **0.5秒**，但是它会 **延迟 1秒** 后开始执行。
- 在本例中，**延迟 1 秒** 是指当用户悬停卡片时，卡片的样式变化不会立即发生，而是等 1 秒后才开始过渡，而过渡的过程会持续 **0.5 秒**。

### **展示效果的步骤：**
1. 用户将鼠标放置在 `.card` 元素上。
2. 卡片的背景色和大小不会立即发生变化，而是 **等待 1 秒钟**。
3. 1 秒钟之后，背景色会变化，并且卡片尺寸也会 **平滑过渡**，这一变化持续 **0.5秒**。

