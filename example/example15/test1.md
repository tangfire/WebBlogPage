为了帮助你理解 `justify-content: space-between;`，我将通过一个简单的例子来展示它的作用。这个例子会包括一个包含多个子元素的容器，使用 `justify-content: space-between;` 来控制这些子元素在主轴（默认是水平方向）上的分布。

### 例子代码：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>justify-content: space-between; 示例</title>
    <style>
        .container {
            display: flex; /* 使用 flexbox 布局 */
            justify-content: space-between; /* 子元素在水平方向上均匀分布 */
            background-color: #f0f0f0; /* 设置容器背景色 */
            padding: 10px;
            width: 400px; /* 容器宽度 */
            height: 100px; /* 容器高度 */
        }
        
        .item {
            width: 50px;
            height: 50px;
            background-color: #3498db;
            color: white;
            text-align: center;
            line-height: 50px; /* 使文本垂直居中 */
            border-radius: 5px;
        }
    </style>
</head>
<body>

<div class="container">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
</div>

</body>
</html>
```

### 解释：

1. **`.container` 容器**:
   - 使用 `display: flex;` 将容器的布局模式设置为 Flexbox，允许我们使用 `justify-content` 来控制子元素（`.item`）的排列。
   - `justify-content: space-between;` 表示容器中的子元素（`.item`）会沿水平方向均匀分布，**第一个子元素会紧贴容器的左侧，最后一个子元素会紧贴容器的右侧，中间的子元素之间的空隙是相等的**。

2. **`.item` 子元素**:
   - 每个子元素是一个方块，宽高为 50px，背景颜色为蓝色，且中间有数字显示。
   - 通过 `line-height` 来使数字在每个方块中垂直居中。

### 结果：

- 容器宽度为 400px，包含 3 个子元素，每个子元素宽度为 50px。
- 使用 `justify-content: space-between;` 后，**第一个 `.item` 会位于容器的左边，最后一个 `.item` 会位于容器的右边，中间的空隙会均匀分布**。

### 视觉效果：
```
[Item 1]       [Item 2]       [Item 3]
```

- 由于容器宽度为 400px，而每个子元素的宽度为 50px，剩下的 300px 将会被均匀地分配到 2 个间隙（`Item 1` 和 `Item 2` 之间、`Item 2` 和 `Item 3` 之间）。这意味着这两个间隙的宽度会相等。

### 对比其他 `justify-content` 属性值：
- `justify-content: flex-start;`：子元素会聚集在容器的左侧。
- `justify-content: center;`：子元素会集中在容器的中心，左右两侧留空。
- `justify-content: space-evenly;`：子元素会均匀分布在容器中，包括两端，子元素之间和容器的边缘之间的空隙相等。
- `justify-content: space-around;`：子元素之间的空隙相等，但容器两端的空隙会是子元素之间空隙的一半。

### 总结：
通过 `justify-content: space-between;`，你可以在 Flexbox 容器中实现子元素沿主轴的均匀分布，确保首尾对齐，并且中间的元素有相等的间距。这种布局非常适合创建导航条、工具栏、按钮组等需要均匀分布的布局。